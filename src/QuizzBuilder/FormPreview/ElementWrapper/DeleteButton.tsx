import React, { useContext } from "react";
import Button from "antd/es/button/index";
import Popconfirm from "antd/es/popconfirm/index";
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
      <Button type="danger" icon="delete" shape="circle" />
    </Popconfirm>
  );
};
