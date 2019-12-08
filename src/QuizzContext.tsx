import { createContext, Context } from "react";
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

type IQuizzContext = IContextProps;
type IQuizzBuilderContext = IContextProps & {
  state: IState;
  dispatch: (arg: IActions) => void;
};

// default context
function getDefaultContext({
  messages,
  language,
  toolBox
}: Partial<IContextProps>) {
  return {
    messages: messages || defaultMessages,
    language: language || "en-US",
    toolBox: toolBox || defaulttoolBox()
  };
}

/* Quizz context */
const QuizzContext = createContext<IQuizzContext | IQuizzBuilderContext>(
  getDefaultContext({})
);

export { IQuizzContext, IQuizzBuilderContext, getDefaultContext };
export default QuizzContext;
