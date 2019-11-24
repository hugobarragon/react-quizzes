import React, { PureComponent } from "react";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { Form, Checkbox } from "antd";
import QuillFormInput from "./CustomFormInput/QuillFormInput";
import TranslatedText from "../../../../../../translations/TranslatedText";
import OptionsInput from "./CustomFormInput/OptionsInput/OptionsInput";

// this must be a class component because of parent components acessing the prop "wrappedComponentRef"
// to be able to access form props and make a custom submit on parent for example.
class DrawerForm extends PureComponent<WrappedFormUtils & any, any> {
  constructor(props: any) {
    super(props);

    const languagesList = Object.keys(props.inputData.questions);

    this.state = {
      languagesList,
      currentLanguage: languagesList[0]
    };
  }

  setLanguage = (currentLanguage: any) => {
    this.setState({ currentLanguage });
  };

  render() {
    const {
        form,
        // toolboxData,
        inputData
      } = this.props,
      { currentLanguage, languagesList } = this.state,
      { getFieldDecorator } = form,
      { questions, required, options } = inputData;

    return (
      <Form layout="vertical">
        <Form.Item label={<TranslatedText id="settings.form.questions" />}>
          {getFieldDecorator("questions", {
            initialValue: questions,
            rules: [{ required: true, message: "Required field" }]
          })(
            <QuillFormInput
              currentLanguage={currentLanguage}
              setLanguage={this.setLanguage}
            />
          )}
        </Form.Item>

        {options ? (
          <Form.Item label={<TranslatedText id="settings.form.options" />}>
            {getFieldDecorator("options", {
              initialValue: options,
              rules: [{ required: true, message: "Required field" }]
            })(
              <OptionsInput
                languagesList={languagesList}
                currentLanguage={currentLanguage}
              />
            )}
          </Form.Item>
        ) : null}

        <Form.Item>
          {getFieldDecorator("required", {
            initialValue: required,
            valuePropName: "checked"
          })(
            <Checkbox>
              <TranslatedText id="settings.form.required" />
            </Checkbox>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<any>()(DrawerForm);
