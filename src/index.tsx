import "./assets/antd.css";
import "./assets/FormBuilder.css";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Quiz, QuizzBuilder } from "./App";
import ReactDOM from "react-dom";

function DevStart() {
  const [formdata, setFormData] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="App">
      <Button onClick={() => setModalVisibility(true)}>Preview Form</Button>
      <Modal
        title="Preview Form"
        style={{ top: 20 }}
        visible={modalVisibility}
        onCancel={() => setModalVisibility(false)}
        destroyOnClose
      >
        <Quiz
          data={formdata}
          onSubmit={(values: any) => console.log("form submit values", values)}
        />
      </Modal>
      <QuizzBuilder onChange={setFormData} />
    </div>
  );
}

ReactDOM.render(<DevStart />, document.getElementById("root"));
