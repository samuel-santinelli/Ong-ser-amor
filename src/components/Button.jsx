import React from "react";
import { Button } from "react-native-paper";

const ButtonComponent = ({ onPress, title, style, icon }) => (
  <Button icon={icon} mode="contained" onPress={onPress} style={style} textColor="#000" uppercase>
    {title}
  </Button>
);

export default ButtonComponent;
