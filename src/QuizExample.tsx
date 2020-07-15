import { Modal, Button } from "antd";
import React, { useState, Fragment } from "react";
import { Quiz } from "./App";

export default function (props: any) {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setModalVisibility(true)}>Preview Form</Button>
      <Modal
        title="Preview Form"
        style={{ top: 20 }}
        visible={modalVisibility}
        onCancel={() => setModalVisibility(false)}
        destroyOnClose
      >
        <Quiz
          data={props.data}
          onSubmit={(values: any) => console.log("form submit values", values)}
        />
      </Modal>
    </Fragment>
  );
}
