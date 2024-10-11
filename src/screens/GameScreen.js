import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryBotton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function StartGame({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "grater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={style.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={style.buttonsContainer}>
          <View style={style.buttonContainer}>
            <PrimaryBotton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryBotton>
          </View>
          <View style={style.buttonContainer}>
            <PrimaryBotton onPress={nextGuessHandler.bind(this, "grater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryBotton>
          </View>
        </View>
      </Card>
      <View style={style.listContainer}>
        {/* {guessRounds.map((guessround) => (
          <Text key={guessround}>
            {guessround}
          </Text>
        ))} */}
        <FlatList
      data={guessRounds}
      renderItem={(itemData) => (
        <GuessLogItem
          roundNumber={guessRoundsListLength - itemData.index}
          guess={itemData.item}
        />
      )}
      keyExtractor={(item) => item.toString()} // Certifique-se de que a key seja uma string
      showsVerticalScrollIndicator={false} // Remova se quiser ver a barra de rolagem
    />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1, // Certifique-se de que o container principal ocupe toda a tela
    padding: 30,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1, // Isso garante que a FlatList ocupe o espaço restante
    padding: 16,
  }
});


export default StartGame;
