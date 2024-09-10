import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children}) {
    return  <Text style={style.instructionText}>{children}</Text>
}

export default InstructionText;

const style = StyleSheet.create({
    instructionText: {
      color: Colors.accent500,
      fontSize: 24,
    },
  });