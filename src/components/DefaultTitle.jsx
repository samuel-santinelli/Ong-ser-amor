import { StyleSheet, Text } from "react-native";

const DefaultTitle = ({ title, color }) => {
  return <Text style={[styles.title, { color: color ? color : "#ff007a"}]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,    
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
  },
});

export default DefaultTitle;
