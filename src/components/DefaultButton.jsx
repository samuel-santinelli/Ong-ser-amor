import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

const DefaultButton = ({ onPress, title, style, icon, mode, loading, loadingText, textColor}) => (
  <Button
    icon={icon}
    mode={mode}
    onPress={onPress}
    style={style}
    loading={loading}
    loadingText={loadingText}
    textColor={textColor}
    uppercase
  >
   <Text style={{fontFamily: "Montserrat-SemiBold"}}> {loading ? loadingText : title}</Text>
  </Button>
);


export default DefaultButton;
