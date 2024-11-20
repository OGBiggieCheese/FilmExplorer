import { InboxOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
import {
  Form,
  Input,
  message,
  Upload,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import "./create.scss";
import { useFormik } from "formik";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { IFilmForm } from "../../types";
import { GlobalStateService } from "../../services/globalStateService";
import { useEffect } from "react";
import { movieUseCases } from "../../useCases/moviesUseCases";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
const { Dragger } = Upload;

export default function Create() {
  const genres = GlobalStateService.getGenres();

  useEffect(() => {
    movieUseCases.getGenres();
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const formik = useFormik<IFilmForm>({
    initialValues: {
      id: "",
      title: "",
      originalTitle: "",
      imageUrl: "",
      description: "",
      genres: [],
      releaseDate: "",
      rated: 0,
      posterUrl: "",
      status: "Lanzado",
      spokenLanguages: [],
      budget: 0,
      revenue: 0,
      videos: [],
      images: [],
      posters: [],
      runtime: 0,
      source: "database",
    },
    onSubmit: (values) => {
      values.releaseDate = dayjs(values.releaseDate).format("YYYY-MM-DD");
      JSONMovieUseCases.createFilm(values).then((createdFilm) => {
        if (createdFilm) {
          messageApi.open({
            type: "success",
            content: `Pelicula ${createdFilm.title} creada`,
            duration: 2,
          });
          setTimeout(() => {
            navigate(`/film/database/${createdFilm.id}`);
          }, 2000);
        }
      });
    },
  });

  const handleUploadChange = (info: any, fieldName: any) => {
    const { status } = info.file;
    if (status === "done") {
      const url = info.file.response.url;
      formik.setFieldValue(fieldName, url);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadProps = (fieldName: any) => ({
    style: { borderRadius: "20px" },
    name: "file",
    multiple: false,
    action: `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    data: {
      upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    },
    onChange: (info: any) => handleUploadChange(info, fieldName),
    onDrop: (e: any) => console.log("Dropped files", e.dataTransfer.files),
  });

  const options: SelectProps["options"] = genres.map((g) => ({
    label: g.name,
    value: g.id,
  }));

  return (
    <>
      <h2 className="titleCreate">Crear nueva pelicula</h2>
      <Form onFinish={formik.handleSubmit}>
        <div className="flex">
          <div className="uploadImage">
            <Dragger className="poster" {...uploadProps("posterUrl")}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clickea o arrastra la imagen a esta area para subirla
              </p>
              <p className="ant-upload-hint">
                Esta imagen sera utilizada como el poster de tu pelicula
              </p>
            </Dragger>
            <Dragger className="background" {...uploadProps("imageUrl")}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clickea o arrastra la imagen a esta area para subirla
              </p>
              <p className="ant-upload-hint">
                Esta imagen sera utilizada como el background de tu pelicula
              </p>
            </Dragger>
          </div>
          <div className="data">
            <Form.Item>
              <h5>ID</h5>
              <Input className="id" disabled />
            </Form.Item>

            <div className="titles">
              <Form.Item>
                <h5>Titulo</h5>
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={(e) =>
                    formik.setFieldValue("title", e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item name="originalTitle">
                <h5>Titulo original</h5>
                <Input
                  name="originalTitle"
                  value={formik.values.originalTitle}
                  onChange={(e) =>
                    formik.setFieldValue("originalTitle", e.target.value)
                  }
                />
              </Form.Item>
            </div>
            <Form.Item name="description">
              <h5>Descripcion</h5>
              <Input.TextArea
                showCount
                maxLength={300}
                size="large"
                value={formik.values.description}
                onChange={(e) =>
                  formik.setFieldValue("description", e.target.value)
                }
              />
            </Form.Item>
            <Form.Item name="genres">
              <h5>Categorias</h5>
              <Select
                mode="multiple"
                optionFilterProp="label"
                allowClear
                style={{ width: "100%" }}
                placeholder="Selecciona una o más categorias"
                value={formik.values.genres}
                onChange={(value) => formik.setFieldValue("genres", value)}
                options={options}
                optionRender={(option) => <div>{option.label}</div>}
              />
            </Form.Item>
            <div className="flex">
              <Form.Item>
                <h5>Calificacion</h5>
                <InputNumber
                  className="id"
                  value={formik.values.rated}
                  min={1}
                  max={10}
                  defaultValue={0}
                  onChange={(value) => formik.setFieldValue("rated", value)}
                />
              </Form.Item>

              <Form.Item>
                <h5>Fecha de salida</h5>
                <DatePicker
                  format="YYYY-MM-DD"
                  value={
                    formik.values.releaseDate
                      ? dayjs(formik.values.releaseDate)
                      : null
                  }
                  onChange={(dateString) =>
                    formik.setFieldValue("releaseDate", dateString)
                  }
                />
              </Form.Item>
            </div>
            {contextHolder}
            <button type="submit">Publicar</button>
          </div>
        </div>
      </Form>
    </>
  );
}
