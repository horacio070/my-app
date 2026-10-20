import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import * as Device from "expo-device";
import { useState } from "react";
import { Platform, StyleSheet, TextInput, Button} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }

  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export function calcPitagoras(a, b){
  return (a ** 2 + b ** 2) ** 0.5;
}



export default function PitagorasScreen() {
  const [valueA, onChangeTextA] = useState("");
  const [valueB, onChangeTextB] = useState("");

  const [resultado, setResultado] = useState("");

  const calc = () => {
  const a = Number(valueA);
  const b = Number(valueB);


  if (valueA === "" || valueB === "" || a <= 0 || b <= 0) {
    setResultado("Digite os dois valores!");
    return;
  }

  const c = calcPitagoras(a, b);

 setResultado("O valor de C é: " + c);
 }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <TextInput
            style={styles.input}
            placeholder="A"
            onChangeText={onChangeTextA}
            value={valueA}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextB}
            value={valueB}
            placeholder="B"
            keyboardType="numeric"
          />
          <Button title="Calcular" onPress ={calc} />
          <ThemedText>{resultado}</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  safeArea: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },

  heroSection: {
    backgroundColor: "#F1F5F9",
    padding: 25,
    borderRadius: 15,
    gap: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});