import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
// -------- COTAÇÕES FISICAS NO CÓDIGO --------
const COTACAO_DOLAR = 5.42;
const COTACAO_EURO = 6.37;

export default function App() {
  const [valorReais, setValorReais] = useState("");
  const [resultadoDolar, setResultadoDolar] = useState(0);
  const [resultadoEuro, setResultadoEuro] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleClear = () => {
    setValorReais("");
    setResultadoDolar(0);
    setResultadoEuro(0);
    setShowResults(false);
    Keyboard.dismiss();
    // Limpa os campos e esconde os resultados
  };

  const handleChange = (text) => {
    const cleanedText = text.replace(/[^0-9.]/g, "");
    setValorReais(cleanedText);
    setShowResults(false);
  };

  const convertCurrency = () => {
    Keyboard.dismiss();
    const amountInReais = parseFloat(valorReais || "0");

    //calcular o resultado das conversões
    const dolarConvertido = amountInReais / COTACAO_DOLAR;
    const euroConvertido = amountInReais / COTACAO_EURO;
    setResultadoDolar(dolarConvertido.toFixed(2));
    setResultadoEuro(euroConvertido.toFixed(2));
    setShowResults(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Conversor de Moedas </Text>

      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Valor em real</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={valorReais}
            onChangeText={handleChange}
          />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={convertCurrency} style={styles.button}>
            <Text style={styles.buttonText}>Converter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleClear}
            style={[styles.button, styles.clearButton]}
          >
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* card de resultados  */}
      {showResults && (
        <View style={styles.card}>
          <Text style={styles.resultTitle}>Resultados da Conversão</Text>
          <Text style={styles.convertedValueText}>
            <Text style={{ fontWeight: "bold" }}>R$ {valorReais}</Text>
            <Text> equivalem a:</Text>
          </Text>
          <Text style={styles.finalResultText}>
            <Text style={{ fontWeight: "bold" }}>$</Text>
            {resultadoDolar} Dólares
          </Text>

          <Text style={styles.finalResultText}>
            <Text style={{ fontWeight: "bold" }}>€</Text>
            {resultadoEuro} Euros
          </Text>
        </View>
      )}

      <View style={styles.cotacaoINfoContainer}>
        <Text style={styles.containerInfoTitle}>Cotações Fixas:</Text>
        <Text style={styles.conatinerInfoText}>
          1 USD = R$ {COTACAO_DOLAR.toFixed(2)}
        </Text>
        <Text style={styles.conatinerInfoText}>
          1 EUR = R$ {COTACAO_EURO.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20, // Padding direto no container principal
    justifyContent: "center", // Centraliza o conteúdo verticalmente
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: "right",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  convertedValueText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    color: "#666",
  },
  finalResultText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#007bff",
  },
  cotacaoINfoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  containerInfoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  conatinerInfoText: {
    fontSize: 14,
    color: "#777",
  },
});
