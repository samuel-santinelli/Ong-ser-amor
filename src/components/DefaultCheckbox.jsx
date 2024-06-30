import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

const DefaultCheckbox = ({ status, setStatus, label }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Checkbox
        status={status}
        color={"#ff007a"}
        onPress={setStatus}
      />
      <Text style={{fontFamily: "Montserrat-Medium"}}>
        {label}
        </Text>
    </View>
  );
};

export default DefaultCheckbox;
