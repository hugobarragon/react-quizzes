import React, { FC } from "react";
import FormBuilder from "./FormBuilder/FormBuilder";
import toolBox from "./ToolBox/index";
import { defaultMessages } from "./translations/TranslatedText";
import "./FormBuilder.css";

// const toolBoxItems = toolBox();
// eslint-disable-next-line 
const initialFormValue = [
  {
    id: "a57184e9-8c16-4e77-b28e-dd6d99f033e0",
    element: "Select",
    required: false,
    questions: {
      "en-US": "Sample question ?",
      "pt-BR": "Pergunta exemplo ?"
    },
    options: [
      {
        value: "1",
        text: {
          "en-US": "Sample question ?",
          "pt-BR": "Pergunta exemplo ?"
        }
      },
      {
        value: "2",
        text: {
          "en-US": "Sample question ?",
          "pt-BR": "Pergunta exemplo ?"
        }
      }
    ]
  }
];

const App: FC = () => {
  console.log("toolbox", toolBox);
  return (
    <FormBuilder
      onChange={(form: any) => console.log(form)}
      /* initialValue={initialFormValue} */
      /* toolBox={toolBoxItems} */
      /* language="en-US" */
       messages={defaultMessages} 
    />
  );
};

export default App;
