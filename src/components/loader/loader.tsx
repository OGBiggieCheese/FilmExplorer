import { Spin } from "antd";
import "./loader.scss";

export default function Loader() {
  return (
    <>
      <div className="spin">
        <Spin size="large" />
        <h3></h3>
      </div>
    </>
  );
}
