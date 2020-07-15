import { createContext } from "react";
import { MessagesRecord } from "./translations/TranslatedText";
import { IState } from "./QuizzBuilder/reducer/reducer";
import { IActions } from "./QuizzBuilder/reducer/actions";
import { defaultMessages } from "./translations/TranslatedText";
import defaulttoolBox from "./ToolBox/index";

interface IContextProps {
  toolBox: Array<Object>;
  language: string;
  messages: MessagesRecord;
}

export type IQuizzContext = IContextProps;
export type IQuizzBuilderContext = IContextProps & {
  state: IState;
  dispatch: (arg: IActions) => void;
};

// default context
export function getDefaultContext({
  messages,
  language,
  toolBox,
}: Partial<IContextProps>) {
  return {
    messages: messages || defaultMessages,
    language: language || "en",
    toolBox: toolBox || defaulttoolBox(),
  };
}

/* Quiz context */
const QuizzContext = createContext<IQuizzContext | IQuizzBuilderContext>(
  getDefaultContext({})
);

export default QuizzContext;
