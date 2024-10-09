import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Form, Input, message, Upload, Select, Space, DatePicker } from "antd";
import "./create.scss";
import { useFormik } from "formik";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { IFilm } from "../../types";
const { Dragger } = Upload;

const props: UploadProps = {
  style: { borderRadius: "20px" },
  name: "file",
  multiple: false,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const options = [
  {
    label: "Aventura",
    value: "aventura",
    emoji: "🤠",
    desc: "Aventura",
  },
  {
    label: "Animacion",
    value: "animacion",
    emoji: "👦",
    desc: "Animacion",
  },
  {
    label: "Comedia",
    value: "comedia",
    emoji: "🤣",
    desc: "Comedia",
  },
  {
    label: "Terror",
    value: "terror",
    emoji: "😱",
    desc: "Terror",
  },
];

export default function Create() {
  const formik = useFormik<IFilm>({
    initialValues: {
      id: "",
      title: "",
      originalTitle: "",
      imageUrl: "",
      description: "",
      genres: [],
      releaseDate: "",
      rated: "",
      posterUrl: "",
      status: "Lanzado",
      spokenLanguages: [],
      budget: 0,
      videos: [],
      images: [],
      posters: [],
      source: "database",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  async function handleSubmit() {
    JSONMovieUseCases.createFilm(formik.values);
  }
  return (
    <>
      <h2 className="titleCreate">Crear nueva pelicula</h2>
      <Form onFinish={handleSubmit}>
        <div className="flex">
          <div className="uploadImage">
            <Dragger {...props}>
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
                  onChange={(e) => {
                    formik.setFieldValue("title", e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item name="originalTitle">
                <h5>Titulo original</h5>
                <Input
                  name="originalTitle"
                  value={formik.values.originalTitle}
                  onChange={(e) => {
                    formik.setFieldValue("originalTitle", e.target.value);
                    console.log(e.target.value);
                  }}
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
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                  console.log(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item name="genres">
              <h5>Categorias</h5>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Selecciona una o más categorias"
                value={formik.values.genres}
                onChange={(value) => {
                  formik.setFieldValue("genres", value);
                  console.log(value);
                }}
                options={options}
                optionRender={(option) => (
                  <Space>
                    <span role="img" aria-label={option.data.label}>
                      {option.data.emoji}
                    </span>
                    {option.data.desc}
                  </Space>
                )}
              />
            </Form.Item>
            <div className="flex">
              <Form.Item>
                <h5>Calificacion</h5>
                <Input
                  className="id"
                  value={formik.values.rated}
                  onChange={(e) => {
                    formik.setFieldValue("rated", e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item>
                <h5>Fecha de salida</h5>
                <DatePicker
                  value={formik.values.releaseDate}
                  onChange={(value) => {
                    formik.setFieldValue("releaseDate", value);
                    console.log(value);
                  }}
                />
              </Form.Item>
            </div>
            <button type="submit">Publicar</button>
          </div>
        </div>
      </Form>
    </>
  );
}
