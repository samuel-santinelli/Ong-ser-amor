import { StyleSheet, View } from "react-native";

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
    padding: 20,    
    gap: 10,
  },
});

export default DefaultView;
