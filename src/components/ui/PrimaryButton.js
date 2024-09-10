import { View, Text, Pressable, StyleSheet } from "react-native";
import  Colors  from "../../constants/colors";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={style.buttonOutterContainer}>
            <Pressable style={style.buttonInnerContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden" 

    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})