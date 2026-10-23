
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalculadoraScreen() {
  const [valorA, setValorA] = useState("");
  const [valorB, setValorB] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacao) => {
    if (valorA === "" || valorB === "") {
      setResultado("Digite os dois números");
      return;
    }

    const a = Number(valorA);
    const b = Number(valorB);

    if (operacao === "+") {
      setResultado("Resultado: " + (a + b));
    } else if (operacao === "-") {
      setResultado("Resultado: " + (a - b));
    } else if (operacao === "*") {
      setResultado("Resultado: " + (a * b));
    } else if (operacao === "/") {
      if (b === 0) {
        setResultado("Não pode dividir por zero");
      } else {
        setResultado("Resultado: " + (a / b));
      }
    }
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <ThemedText>Calculadora</ThemedText>

          <TextInput
            style={styles.input}
            value={valorA}
            onChangeText={setValorA}
            keyboardType="numeric"
            placeholder="Primeiro número"
          />

          <TextInput
            style={styles.input}
            value={valorB}
            onChangeText={setValorB}
            keyboardType="numeric"
            placeholder="Segundo número"
          />

          <Button title="Somar" onPress={() => calcular("+")} />
          <Button title="Subtrair" onPress={() => calcular("-")} />
          <Button title="Multiplicar" onPress={() => calcular("*")} />
          <Button title="Dividir" onPress={() => calcular("/")} />

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
    alignItems: "center",
  },
  heroSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  input: {
    width: 200,
    borderWidth: 1,
    height: 40,
    padding: 8,
    textAlign: "center",
  },
});
