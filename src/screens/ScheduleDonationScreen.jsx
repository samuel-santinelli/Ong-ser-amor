import { useEffect } from "react";
import DefaultView from "../components/DefaultView";
import { View } from "react-native";
import DefaultTitle from "../components/DefaultTitle";
import { Icon, TextInput } from "react-native-paper";
import DefaultLabel from "../components/DefaultLabel";
import DefaultInput from "../components/DefaultInput";
import CalendarPicker from "react-native-calendar-picker";

const ScheduleDonationScreen = ({ navigation }) => {
  useEffect(() => {
    const headerColor = "#09BAE1";

    navigation.setOptions({
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTintColor: "#fff",
    });

    return () => {};
  }, []);
  return (
    <DefaultView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <DefaultTitle title={"Agendar doação"} color={"#09BAE1"} />
        <Icon source="calendar" size={30} color="#09BAE1" />
      </View>
      <DefaultLabel label={"Marque um dia para efetuar sua doação"} />
      <View>
        <DefaultInput mode="outlined" label="Descreva a doação" />
        <DefaultInput
          mode="outlined"
          label="Informe uma data para doação"
          right={
            <TextInput.Icon
              icon={"calendar"}
              color="#09BAE1"              
            />
          }
        />
        <DefaultInput mode="outlined" label="Informe uma horario para doação" />
        <CalendarPicker/>
      </View>
    </DefaultView>
  );
};

export default ScheduleDonationScreen;
