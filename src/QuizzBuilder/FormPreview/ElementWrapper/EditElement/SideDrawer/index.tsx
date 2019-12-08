import React, { useContext, useRef } from "react";
import { Drawer } from "antd";
import BottomButtons from "../../../../../ReusableComponents/BottomButtons";
import SettingsForm from "./SettingsForm/SettingsForm";
import TranslatedText from "../../../../../translations/TranslatedText";
import QuizzContext, {
  IQuizzBuilderContext
} from "../../../../../QuizzContext";
import { patchElement } from "../../../../reducer/actions";

// applies delete and edit capabilities
export default function SettingsDrawer(props: any) {
  const { closeDrawer, showDrawer, toolboxData, inputData } = props,
    { dispatch } = useContext(QuizzContext) as IQuizzBuilderContext,
    formRef = useRef() as any;

  function onFormSubmit(e: Event) {
    e.preventDefault();

    // gets the form ref from child
    const { validateFields } = formRef.current.props.form;
    validateFields((err: any, values: any) => {
      if (!err) {
        // adds to reducer
        dispatch(patchElement(inputData.id, values));
        // close drawer had no erros
        closeDrawer();
      }
    });
  }

  return (
    <Drawer
      title={<TranslatedText id={toolboxData.name} />}
      onClose={closeDrawer}
      visible={showDrawer}
      destroyOnClose
    >
      <SettingsForm
        wrappedComponentRef={formRef}
        toolboxData={toolboxData}
        inputData={inputData}
      />
      <BottomButtons onClose={closeDrawer} onSubmit={onFormSubmit} />
    </Drawer>
  );
}
