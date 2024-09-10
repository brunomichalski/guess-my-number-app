import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={style.card}>{children}</View>;
}

export default Card;

const style = StyleSheet.create({
  card: {
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
  },
});