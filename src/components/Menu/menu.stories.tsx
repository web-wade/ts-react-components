import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./index";
import MenuItem from "./menuItem";

export const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <Menu.Item>cool link</Menu.Item>
    <MenuItem disabled>disabled</MenuItem>
    <Menu.SubMenu title="dropDown">
      <MenuItem>cool link 21</MenuItem>
      <MenuItem>cool link 21</MenuItem>
    </Menu.SubMenu>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

storiesOf("Menu Component", module).add("Menu", defaultMenu);
