// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from "react";
import { View, Text, TextInput, Button, Switch, StyleSheet} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [limite, setLimite] = useState(2500);
  const [estudante, setEstudante] = useState(false);
  const [contaCriada, setContaCriada] = useState(false);

  // Validação
  const validar = () => {
    if (!nome.trim()) return false;
    const idadeNum = parseInt(idade);
    if (!idadeNum || idadeNum < 18) return false;
    if (!sexo) return false;
    return true;
  };

  const abrirConta = () => {
    if (!validar()) return;
    setContaCriada(true);
  };

  const erroAtual = !validar();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrir Conta Bancária</Text>

      {/* Nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Idade */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      {/* Sexo */}
      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      {/* Limite */}
      <Text style={styles.label}>Limite da conta: R$ {limite.toFixed(2)}</Text>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={500}
        maximumValue={10000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        minimumTrackTintColor="#2196F3"
        maximumTrackTintColor="#999"
      />

      {/* Estudante */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estudante?</Text>
        <Switch value={estudante} onValueChange={setEstudante} />
      </View>

      {/* Botão */}
      <Button title="Abrir Conta" onPress={abrirConta} disabled={erroAtual} />

      {/* Renderização na tela */}
      {contaCriada && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Conta criada com sucesso!</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Limite: R$ {limite.toFixed(2)}</Text>
          <Text>Estudante: {estudante ? "Sim" : "Não"}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  result: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    backgroundColor: "#e6f7ff",
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});


