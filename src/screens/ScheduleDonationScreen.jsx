import { useEffect, useState } from "react";
import { Text } from "react-native";
import DefaultView from "../components/DefaultView";
import { Modal, StyleSheet, View } from "react-native";
import DefaultTitle from "../components/DefaultTitle";
import { Icon, Portal, TextInput } from "react-native-paper";
import DefaultLabel from "../components/DefaultLabel";
import DefaultInput from "../components/DefaultInput";
import CalendarPicker from "react-native-calendar-picker";
import DefaultButton from "../components/DefaultButton";
import { formatDateToBR } from "../utils/FormatDateToBR";

const ScheduleDonationScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [selectedStartDate, SetSelectedStartDate] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", marginHorizontal: 10 };

  function handleSelectedStartDate(date) {
    SetSelectedStartDate(date);
  }

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
    <>
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

        <DefaultInput mode="outlined" label="Descreva a doação" />
        <DefaultInput
          mode="outlined"
          label="Informe uma data para doação"
          right={<TextInput.Icon icon={"calendar"} color="#09BAE1" />}
        />
        <DefaultButton
          mode=""
          title="Informe um horario para doação"
          onPress={showModal}
          textColor={"#09BAE1"}
        />
      </DefaultView>

      <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.calendarContainer}>
              <Text>
              {selectedStartDate ? formatDateToBR(selectedStartDate) : ""}
              </Text>
              <CalendarPicker
                onDateChange={(date) => handleSelectedStartDate(date)}
                selectedDayColor="#09BAE1"
                selectedDayTextColor="#fff"
                nextTitle="Próximo   "
                previousTitle="   Anterior"
                weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]}
                months={[
                  "Janeiro",
                  "Fevereiro",
                  "Março",
                  "Abril",
                  "Maio",
                  "Junho",
                  "Julho",
                  "Agosto",
                  "Setembro",
                  "Outubro",
                  "Novembro",
                  "Dezembro",
                ]}
                startFromMonday={true}
                selectMonthTitle="Selecione o mês de "
                selectYearTitle="Selecione o ano"
              />
              <View style={{ display: "flex", alignItems: "flex-end" }}>
                {selectedStartDate.toString()}
                <DefaultButton
                  title={"Salvar"}
                  textColor={"#09BAE1"}
                  onPress={hideModal}
                  style={styles.button}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  calendarContainer: {
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#ffff",
    width: 140,
    height: 50,
    marginRight: 22,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScheduleDonationScreen;
