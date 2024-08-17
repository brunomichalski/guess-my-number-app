import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log("pressionou!");
    }
    return (
        <View style={style.buttonOutterContainer}>
            <Pressable style={style.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: '#640233' }}>
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
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})