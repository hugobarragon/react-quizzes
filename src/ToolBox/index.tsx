import React from "react";
import Avatar from "antd/es/avatar/index";
import Icon from "antd/es/icon/index";
import TextInput from "./Components/TextInput";
import HeaderText from "./Components/HeaderText";
import Label from "./Components/Label";
import Divider from "./Components/Divider";
import Select from "./Components/Select";
import Tags from "./Components/Tags";
import Checkboxes from "./Components/Checkboxes";
import RadioButtons from "./Components/RadioButtons";
import NumberInput from "./Components/NumberInput";
import MultiLineInput from "./Components/MultiLineInput";
import Rate from "./Components/Rate";
import DatePicker from "./Components/DatePicker";

import radioButtonIcon from "./CustomIcons/radiobuttonicon";
import headerIcon from "./CustomIcons/headericon";
import inputIcon from "./CustomIcons/inputIcon";
import numberInputIcon from "./CustomIcons/numberInputIcon";
import multiLineInputIcon from "./CustomIcons/multiLineInputIcon";

function _defaultItems() {
  // deafult sample question
  const questions = {
    en: "Sample question ?",
    pt: "Pergunta exemplo ?"
  };

  const options = [
    {
      value: "1",
      text: { ...questions }
    },
    {
      value: "2",
      text: { ...questions }
    }
  ];

  return [
    {
      key: "HeaderText",
      name: "toolbox.headertext.name", // id of translation
      questions,
      // description: "toolbox.headertext.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={headerIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "header_text_", // will add a generated uuidv4
      Component: HeaderText // component not instanciated
    },
    {
      key: "LabelText",
      name: "toolbox.label.name", // id of translation
      questions,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="font-colors" />, // this will go to Dom so can be string|| jsx component
      field_name: "label_", // will add a generated uuidv4
      Component: Label // component not instanciated
    },
    {
      key: "Divider",
      name: "toolbox.divider.name", // id of translation
      questions,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="line" />, // this will go to Dom so can be string|| jsx component
      field_name: "divider_", // will add a generated uuidv4
      Component: Divider // component not instanciated
    },
    {
      key: "Select",
      name: "toolbox.select.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="down-square" />, // this will go to Dom so can be string|| jsx component
      field_name: "select_", // will add a generated uuidv4
      Component: Select // component not instanciated
    },
    {
      key: "Tags",
      name: "toolbox.tags.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="tags" />, // this will go to Dom so can be string|| jsx component
      field_name: "tags_", // will add a generated uuidv4
      Component: Tags // component not instanciated
    },
    {
      key: "Checkboxes",
      name: "toolbox.checkboxes.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: <Avatar icon="check-circle" />, // this will go to Dom so can be string|| jsx component
      field_name: "checkboxes_", // will add a generated uuidv4
      Component: Checkboxes // component not instanciated
    },
    {
      key: "RadioButtons",
      name: "toolbox.radiobuttons.name", // id of translation
      questions,
      options,
      // description: "toolbox.label.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={radioButtonIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "radiobuttons_", // will add a generated uuidv4
      Component: RadioButtons // component not instanciated
    },
    {
      key: "TextInput",
      name: "toolbox.textinput.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={inputIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "textinput_", // will add a generated uuidv4
      Component: TextInput // component not instanciated
    },
    {
      key: "NumberInput",
      name: "toolbox.numberinput.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={numberInputIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "numberinput_", // will add a generated uuidv4
      Component: NumberInput // component not instanciated
    },
    {
      key: "MultiLineInput",
      name: "toolbox.multilineinput.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: (
        <Avatar>
          <Icon component={multiLineInputIcon} />
        </Avatar>
      ), // this will go to Dom so can be string|| jsx component
      field_name: "multilineinput_", // will add a generated uuidv4
      Component: MultiLineInput // component not instanciated
    },
    {
      key: "Rate",
      name: "toolbox.rate.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: <Avatar icon="star" />, // this will go to Dom so can be string|| jsx component
      field_name: "rate_", // will add a generated uuidv4
      Component: Rate // component not instanciated
    },
    {
      key: "DatePicker",
      name: "toolbox.datepicker.name", // id of translation
      questions,
      // description: "toolbox.textInput.description", // desciption under input on toolbox
      icon: <Avatar icon="calendar" />, // this will go to Dom so can be string|| jsx component
      field_name: "datepicker_", // will add a generated uuidv4
      Component: DatePicker // component not instanciated
    }
  ];
}

export default _defaultItems;
