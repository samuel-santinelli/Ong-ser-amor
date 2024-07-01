import { TextInput } from "react-native-paper";

const DefaultInput = ({label, mode}) => {
  return (
    <TextInput style={{ width: "100%" }} label={label} mode={mode}  />
  );
};

export default DefaultInput;
