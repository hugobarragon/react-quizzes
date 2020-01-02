import React, { PureComponent } from "react";
import QuizzContext, {
  getDefaultContext,
  IQuizzContext
} from "../QuizzContext";
import TranslatedText from "../translations/TranslatedText";
import { Empty, Button, Form } from "antd";

class Quizz extends PureComponent<any, any> {
  // submit handler
  handleSubmit(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    const { onSubmit, form } = this.props;

    form.validateFields((err: any, values: any) => {
      if (!err) {
        if (typeof onSubmit === "function") {
          // sends values to parent if has onSubmit
          onSubmit(values);
        }
      }
    });
  }

  static defaultProps = {
    submitButton: true
  };

  render() {
    const { form, data, submitButton, ...rest } = this.props,
      contextValue = getDefaultContext(rest as IQuizzContext);
    return (
      <div className="react-quizzes-quizz">
        <QuizzContext.Provider value={contextValue}>
          <Form className="react-quizzes-quizz">
            {data.map((item: any) => {
              const current_key = item.element;
              // searchs for the current input on the toolbox to get the component
              const found_toolbox_input = contextValue["toolBox"].find(
                (toolBoxInput: any) => current_key === toolBoxInput.key
              ) as any;
              // finds input and wrapps it with delete and edit button
              const Component = found_toolbox_input
                ? found_toolbox_input.Component
                : Empty;

              return (
                <Component
                  // render the toolbox component
                  key={item.id}
                  form={form}
                  toolboxData={found_toolbox_input}
                  inputData={item}
                  language={contextValue["language"]}
                />
              );
            })}
            {submitButton ? (
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit.bind(this)}
                >
                  <TranslatedText id="btn.submit" />
                </Button>
              </Form.Item>
            ) : null}
          </Form>
        </QuizzContext.Provider>
      </div>
    );
  }
}

export default Form.create<any>()(Quizz);
