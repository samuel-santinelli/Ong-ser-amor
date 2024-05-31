import { StyleSheet, Text } from "react-native";

const DefaultTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    marginBottom: 20,
    color: "#ff007a",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
  },
});

export default DefaultTitle;
