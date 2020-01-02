import React, { PureComponent } from "react";
import { FormComponentProps } from "antd/lib/form/Form";
import { Form, Checkbox } from "antd";
import QuillFormInput from "./CustomFormInput/QuillFormInput";
import TranslatedText from "../../../../../../translations/TranslatedText";
import OptionsInput from "./CustomFormInput/OptionsInput/OptionsInput";
import cloneDeep from "lodash.clonedeep";

// this must be a class component because of parent components acessing the prop "wrappedComponentRef"
// to be able to access form props and make a custom submit on parent for example.
interface DrawerFormProps extends FormComponentProps {
  [k: string]: any;
}
class DrawerForm extends PureComponent<DrawerFormProps, any> {
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

  onNewLanguage = (lang: string) => {
    const { form, inputData } = this.props;
    const { setFieldsValue, getFieldsValue } = form;

    const fieldsNames = ["questions"];
    if (inputData.options) {
      fieldsNames.push("options");
    }
    const { questions, options } = cloneDeep(getFieldsValue(fieldsNames));
    questions[lang] = "";

    if (options) {
      for (let index = 0; index < options.length; index++) {
        options[index].text[lang] = "";
      }
    }

    setFieldsValue({ questions, options });
    this.setState({
      languagesList: Object.keys(questions)
    });
  };

  onRemoveLanguage = (lang: string) => {
    /* REMOVE LANGUAGE HERE */
    const { form, inputData } = this.props;
    const { setFieldsValue, getFieldsValue } = form;

    const fieldsNames = ["questions"];
    if (inputData.options) {
      fieldsNames.push("options");
    }
    const { questions, options } = cloneDeep(getFieldsValue(fieldsNames));

    delete questions[lang];

    if (options) {
      for (let index = 0; index < options.length; index++) {
        delete options[index].text[lang];
      }
    }
    const listLanguages = Object.keys(questions);

    this.setState(
      {
        currentLanguage: listLanguages[0],
        languagesList: listLanguages
      },
      () => {
        // fix's bug that some times one of the updates was lost
        setFieldsValue({ questions, options });
      }
    );
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
              onNewLanguage={this.onNewLanguage}
              onRemoveLanguage={this.onRemoveLanguage}
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

export default Form.create<DrawerFormProps>()(DrawerForm);
