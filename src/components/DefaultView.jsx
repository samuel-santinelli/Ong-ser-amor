import { SafeAreaView, StyleSheet } from "react-native";

const DefaultView = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "center" }]}>
      {children}
    </SafeAreaView>
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
