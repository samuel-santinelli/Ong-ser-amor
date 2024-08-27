import { Icon, TextInput } from "react-native-paper";
import MaskInput from "react-native-mask-input";

const DefaultInput = ({ label, mode, mask, secureTextEntry, right}) => {
  return mask == "" ? (
    <TextInput
      label={label}
      mode={mode}
      secureTextEntry={secureTextEntry}
      right={right}
    />
  ) : (
    <TextInput
      label={label}
      mode={mode}
      render={(props) => <MaskInput {...props} mask={mask} />}
    />
  );
};

export default DefaultInput;
