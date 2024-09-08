import { SafeAreaView, StyleSheet, View } from "react-native";

const DefaultView = ({ children, color }) => {
  return (
    <View style={[styles.container, { justifyContent: "center", backgroundColor: color }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,    
    gap: 15,
  },
});

export default DefaultView;
