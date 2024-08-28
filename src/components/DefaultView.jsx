import { SafeAreaView, StyleSheet, View } from "react-native";

const DefaultView = ({ children }) => {
  return (
    <View style={[styles.container, { justifyContent: "center" }]} >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    gap: 10,
  },
});

export default DefaultView;
