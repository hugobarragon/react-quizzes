import React, { memo } from "react";
import ISO6391 from "iso-639-1";
import { Dropdown, Button, Menu } from "antd";
import styles from "../../../drawer.module.css";

const { Item: MenuItem } = Menu;
const { getNativeName, getAllCodes } = ISO6391;
const ISO6391AllCodes = getAllCodes();

interface AddDropdownProps {
  onChange?: (lnaguageCode: string) => void;
  disabled?: string[];
}

function AddDropdown(props: AddDropdownProps) {
  const { onChange, disabled } = props;

  function onMenuItemClick({ key: lang }: any) {
    if (onChange) {
      onChange(lang);
    }
  }

  const menu = (
    <Menu onClick={onMenuItemClick}>
      {ISO6391AllCodes.map(lang => (
        <MenuItem
          key={lang}
          disabled={disabled ? disabled.includes(lang) : false}
        >
          {getNativeName(lang)}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} overlayClassName={styles.dropdownLanguages}>
      <Button icon="plus" />
    </Dropdown>
  );
}

export default memo(AddDropdown);
