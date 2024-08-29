import { Text } from "react-native-paper";

const DefaultLabel = ({label}) => {
  return (
    <>
      <Text
        style={{
          fontSize: 17,
          textAlign: "center",
          fontFamily: "Montserrat-Light",
        }}
      >
       {label}
      </Text>
    </>
  );
};

export default DefaultLabel;
