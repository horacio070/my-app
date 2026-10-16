
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularDelta(A: number, B: number, C: number) {
    return B * B - 4 * A * C;
  }

  function calcularBhaskara() {
    const A = Number(a);
    const B = Number(b);
    const C = Number(c);

    if (A === 0) {
      setResultado('A não pode ser zero!');
      return;
    }

    const delta = calcularDelta(A, B, C);

    if (delta < 0) {
      setResultado('Não existem raízes reais.');
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);

      setResultado(
        'Delta = ' + delta + '\nX1 = ' + x1 + '\nX2 = ' + x2
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Bhaskara</Text>

      <TextInput style={styles.input} placeholder="Valor de A" keyboardType="numeric" onChangeText={setA} />
      <TextInput style={styles.input} placeholder="Valor de B" keyboardType="numeric" onChangeText={setB} />
      <TextInput style={styles.input} placeholder="Valor de C" keyboardType="numeric" onChangeText={setC} />

      <Button title="Calcular" onPress={calcularBhaskara} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    marginBottom: 10,
  },
  formula: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 140,
    height: 38,
    margin: 5,
    borderWidth: 1,
    padding: 8,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
  },
});
