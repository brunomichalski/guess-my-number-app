import { View, TextInput, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
    return (
        <View style={style.inputContainer}>
            <TextInput style={style.textInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>);
}

export default StartGameScreen;

const style = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        padding: 16,
        marginTop: 100,
        backgroundColor: "#4e0329",
        borderRadius: 8,
        elevation: 10
    },
    textInput: {
        height: 50,
        width:50, 
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color:'#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold ',
        textAlign: 'center',
        
    }
})