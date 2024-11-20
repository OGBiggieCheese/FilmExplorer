import { useEffect, useState } from "react";
import {
  Form,
  Input,
  message,
  Select,
  DatePicker,
  InputNumber,
  SelectProps,
  Upload,
} from "antd";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { serverService } from "../../services/server/serverService";
import { IFilmForm, IGenre } from "../../types";
import dayjs from "dayjs";
import "./edit.scss";
import { GlobalStateService } from "../../services/globalStateService";
import { movieUseCases } from "../../useCases/moviesUseCases";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export default function Edit() {
  const { filmID } = useParams<{ filmID: string }>();
  const [initialValues, setInitialValues] = useState<IFilmForm | null>(null);
  const genres = GlobalStateService.getGenres();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    async function fetchData() {
      try {
        if (filmID) {
          const filmData = await serverService.getMovieDetails(filmID);
          setInitialValues({
            ...filmData,
            releaseDate: dayjs(filmData.releaseDate),
            genres: filmData.genres.map((genre: IGenre) => genre.id),
          });
        } else {
          messageApi.open({
            type: "success",
            content: `Pelicula no encontrada`,
            duration: 2,
          });
          setTimeout(() => {
            navigate(`/`);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmID]);

  useEffect(() => {
    movieUseCases.getGenres();
  }, []);

  const formik = useFormik<IFilmForm>({
    enableReinitialize: true,
    initialValues: initialValues || {
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
    onSubmit: async (values) => {
      try {
        if (!filmID) {
          throw new Error("filmID is undefined");
        }
        const updatedGenres = values.genres
          .map((genreId) => {
            const genre = genres.find((g) => g.id === genreId);
            return genre ? { id: genre.id, name: genre.name } : null;
          })
          .filter(Boolean);

        const validGenres = updatedGenres.filter((genre) => genre !== null);
        await serverService.updateFilm(filmID, {
          ...values,
          genres: validGenres,
          releaseDate: dayjs(values.releaseDate).format("YYYY-MM-DD"),
        });
        messageApi.open({
          type: "success",
          content: `Pelicula ${values.title} creada`,
          duration: 2,
        });
        setTimeout(() => {
          navigate(`/film/database/${values.id}`);
        }, 2000);
      } catch (error) {
        message.error("Error al actualizar la pelicula");
        console.log(error);
      }
    },
  });

  const options: SelectProps["options"] = genres.map((g: IGenre) => ({
    label: g.name,
    value: g.id,
  }));

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
    action: "https://api.cloudinary.com/v1_1/drhct2vup/image/upload",
    data: {
      upload_preset: "filmExplorer",
    },
    onChange: (info: any) => handleUploadChange(info, fieldName),
    onDrop: (e: any) => console.log("Dropped files", e.dataTransfer.files),
  });

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${formik.values.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2 className="titleEdit">Editar Pelicula</h2>

      <Form onFinish={formik.handleSubmit}>
        <div className="flex">
          <div className="uploadImage">
            <Dragger className="poster" {...uploadProps("posterUrl")}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ marginTop: "0px" }} />
              </p>
              <p className="ant-upload-text">
                Clickea o arrastra la imagen a esta area para subirla
              </p>
              <p className="ant-upload-hint">
                Esta imagen sera utilizada como el poster de tu pelicula
              </p>
              <img
                src={formik.values.posterUrl}
                style={{ width: "300px" }}
                alt="poster"
              />
            </Dragger>
            <Dragger className="background" {...uploadProps("imageUrl")}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clickea o arrastra la imagen a esta area para subirla
              </p>
              <p className="ant-upload-hint">
                Esta imagen sera utilizada como el fondo de tu pelicula
              </p>
            </Dragger>
          </div>
          <div className="data">
            <Form.Item>
              <h5>ID</h5>
              <Input className="id" value={formik.values.id} disabled />
            </Form.Item>

            <div className="titles">
              <Form.Item>
                <h5>Titulo</h5>
                <Input
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </Form.Item>

              <Form.Item name="originalTitle">
                <h5>Titulo original</h5>
                <Input
                  name="originalTitle"
                  value={formik.values.originalTitle}
                  onChange={formik.handleChange}
                />
              </Form.Item>
            </div>
            <Form.Item name="description">
              <h5>Descripcion</h5>
              <Input.TextArea
                name="description"
                showCount
                maxLength={300}
                size="large"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Form.Item>
            <Form.Item name="genres">
              <h5>Categorias</h5>
              <Select
                mode="multiple"
                optionFilterProp="label"
                allowClear
                style={{ width: "100%" }}
                value={formik.values.genres}
                onChange={(value) => formik.setFieldValue("genres", value)}
                options={options}
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
                  onChange={(value) => formik.setFieldValue("rated", value)}
                />
              </Form.Item>

              <Form.Item>
                <h5>Fecha de salida</h5>
                <DatePicker
                  value={formik.values.releaseDate}
                  onChange={(value) =>
                    formik.setFieldValue("releaseDate", value)
                  }
                />
              </Form.Item>
            </div>
            {contextHolder}
            <button type="submit">Actualizar</button>
          </div>
        </div>
      </Form>
    </div>
  );
}
