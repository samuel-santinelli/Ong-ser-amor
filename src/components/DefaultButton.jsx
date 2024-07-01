import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

const DefaultButton = ({ onPress, title, style, icon, mode, textColor }) => (
  <Button
    icon={icon}
    mode={mode}
    onPress={onPress}
    style={style}
    textColor={textColor}
    uppercase
  >
   <Text style={{fontFamily: "Montserrat-SemiBold"}}> {title}</Text>
  </Button>
);

export default DefaultButton;
