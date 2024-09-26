import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps, SelectProps } from "antd";
import { Form, Input, message, Upload, Select, Space } from "antd";
import "./create.scss";
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

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
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
  return (
    <>
      <h2 className="titleCreate">Crear nueva pelicula</h2>
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
              <Input />
            </Form.Item>
            <Form.Item>
              <h5>Titulo original</h5>
              <Input />
            </Form.Item>
          </div>
          <Form.Item>
            <h5>Descripcion</h5>
            <Input.TextArea showCount maxLength={300} size="large" />
          </Form.Item>
          <Form.Item>
            <h5>Categorias</h5>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Selecciona una o más categorias"
              onChange={handleChange}
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
          <button>Publicar</button>
        </div>
      </div>
    </>
  );
}
