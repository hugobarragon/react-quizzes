import React, { useContext } from "react";
import { Button, Popconfirm } from "antd";
import { deleteElement } from "../../reducer/actions";
import QuizzContext, { IQuizzBuilderContext } from "../../../QuizzContext";
import TranslatedText from "../../../translations/TranslatedText";

// applies delete and edit capabilities
export default (props: any) => {
  const { dispatch } = useContext(QuizzContext) as IQuizzBuilderContext;

  return (
    <Popconfirm
      arrowPointAtCenter
      placement="bottom"
      onConfirm={() => dispatch(deleteElement(props.id))}
      title={<TranslatedText id="confirm.action" />}
      okText={<TranslatedText id="btn.yes" />}
      cancelText={<TranslatedText id="btn.no" />}
    >
      <Button type="primary" danger icon="delete" shape="circle" />
    </Popconfirm>
  );
};
