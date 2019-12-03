//  <Form />
import React, { PureComponent } from 'react';
import Empty from "antd/es/empty/index";
import Button from "antd/es/button/index";
import Form from "antd/es/form/index";
import defaulttoolBox from "../ToolBox/index";

class Quizz extends PureComponent<any, any> {

    // submit handler
    handleSubmit(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        e.preventDefault();
        const { onSubmit, form } = this.props

        form.validateFields((err: any, values: any) => {
            if (!err) {
                if (typeof onSubmit === "function") {
                    // sends values to parent if has onSubmit
                    onSubmit(values)
                }
            }
        });
    }

    static defaultProps = {
        language: "en-US",
        toolBox: defaulttoolBox(),
        submitButton: true
    }

    render() {

        const { form, data, toolBox, language, submitButton } = this.props

        return (
            <Form
                className="react-quizzes-quizz">
                {data.map((item: any) => {
                    const current_key = item.element;
                    // searchs for the current input on the toolbox to get the component
                    const found_toolbox_input = toolBox.find(
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
                            language={language}
                        />
                    );
                })}
                {submitButton ? <Form.Item>

                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)}>
                        Submit
                    </Button>

                </Form.Item> : null}
            </Form>
        )
    }
}


export default Form.create()(Quizz);
