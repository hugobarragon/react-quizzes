import React, { forwardRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Tabs, Tooltip, Row, Popconfirm, Button } from "antd";
import "react-quill/dist/quill.snow.css";
import "./quillFormInput.css";
import ISO6391 from "iso-639-1";
import AddDropdown from "./AddDropdown";
import TranslatedText from "../../../../../../../../translations/TranslatedText";

const { TabPane } = Tabs;
const { getNativeName } = ISO6391;

const Size = Quill.import("attributors/style/size");
const text_size = [
  "6px",
  "7px",
  "8px",
  "9px",
  "10px",
  "10.5px",
  "11px",
  "12px",
  "13px",
  "14px",
  "15px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
  "32px",
  "36px",
  "40px",
  "44px",
  "48px",
  "54px",
  "60px",
  "66px",
  "72px",
  "80px",
  "88px",
  "96px",
];
Size.whitelist = text_size;
Quill.register(Size, true);

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }, { font: [] }, { size: text_size }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link" /* 'image', 'video' */],
      ["clean"],
    ],
  },
};

export default forwardRef((props: any, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    currentLanguage,
    setLanguage,
    onNewLanguage,
    onRemoveLanguage,
  } = props;
  const questionLanguages: Array<string> = Object.keys(value);

  function onChangeHandler(
    content: string
    // delta: Quill.Delta,
    //  source: Quill.Sources,
    // editor: UnprivilegedEditor
  ) {
    onChange({ ...value, [currentLanguage]: content });
  }

  function preventPropagation(e?: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  return (
    <Tabs
      ref={ref as any}
      onChange={setLanguage}
      activeKey={currentLanguage}
      tabBarExtraContent={
        <AddDropdown disabled={questionLanguages} onChange={onNewLanguage} />
      }
    >
      {questionLanguages.map((lang) => (
        <TabPane
          // native language name
          tab={
            <Row>
              <Tooltip title={lang}>{getNativeName(lang)}</Tooltip>
              &nbsp;
              {questionLanguages.length > 1 ? (
                <Popconfirm
                  title={<TranslatedText id="confirm.action" />}
                  okText={<TranslatedText id="btn.yes" />}
                  cancelText={<TranslatedText id="btn.no" />}
                  onConfirm={(e) => {
                    preventPropagation(e);
                    onRemoveLanguage(lang);
                  }}
                >
                  <Button
                    shape="circle"
                    icon="close"
                    size="small"
                    onClick={preventPropagation}
                  />
                </Popconfirm>
              ) : null}
            </Row>
          }
          key={lang}
        >
          <ReactQuill
            theme="snow"
            placeholder="Question?"
            defaultValue={defaultValue}
            value={value[currentLanguage] || ""}
            onChange={onChangeHandler}
            modules={modules}
          />
        </TabPane>
      ))}
    </Tabs>
  );
});
