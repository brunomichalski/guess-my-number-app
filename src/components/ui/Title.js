import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

const style = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});

export default Title;
