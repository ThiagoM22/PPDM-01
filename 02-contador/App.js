import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador((prev) => prev + 1);
  };

  const handleDecrement = () => {
    contador > 0 && setContador((prev) => prev - 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  // 👉 condição para trocar título e número
  const mostrarTexto = contador >= 50 ? "___" : contador;
  const mostrarTitulo = contador >= 50 ? "__        __" : "Contador";

  return (
    <View style={styles.container}>
      <View style={styles.alinhar}>
        <View style={styles.telinha}>
          <Text style={styles.title}>{mostrarTitulo}</Text>
          <Text style={styles.counterText}>{mostrarTexto}</Text>
        </View>
        <View style={styles.decoracons}>
          <Text style={styles.retan}>.</Text>
          <Text style={styles.circ}>.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button1} onPress={handleIncrement}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={handleDecrement}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3} onPress={handleDecrement}>
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.ret1}>.</Text>
        <Text style={styles.ret2}>.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#44b097",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#006414",
    marginBottom: 30,
  },
  counterText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#006414",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#715A5A",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: "#dbdb44",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 2,
    width: 120,
    height: 120,
    marginRight: 30,
  },
  button2: {
    backgroundColor: "#2196f3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 2,
    width: 100,
    height: 100,
    marginTop: 10,
  },
  button3: {
    backgroundColor: "#98ff96",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 100,
    borderWidth: 2,
    width: 80,
    height: 85,
    marginTop: 35,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 0,
    gap: 10,
  },
  resetButton: {
    backgroundColor: "#910000",
    borderWidth: 2,
    justifyContent: "flex-end",
    borderRadius: 100,
    height: 120,
    width: 120,
    marginLeft: 150,
  },
  telinha: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aff5bf",
    borderRadius: 15,
    padding: 50,
    marginBottom: 30,
    borderWidth: 2,
    width: 360,
  },
  decoracons: {
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    gap: 150,
  },
  retan: {
    backgroundColor: "#0a1d20",
    width: 150,
    borderRadius: 5,
  },
  circ: {
    backgroundColor: "#0a1d20",
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  footer: {
    marginTop: 30,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 30,
    display: "flex",
    gap: 20,
  },
  ret1: {
    backgroundColor: "#0a1d20",
    width: 70,
    borderRadius: 5,
  },
  ret2: {
    backgroundColor: "#0a1d20",
    width: 70,
    borderRadius: 5,
  },
  alinhar: {
    alignItems: "center",
  },
});
