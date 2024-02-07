import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Título da janela", "Fala, Chapa!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo...</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé...</Text>
          <Button title="clique aqui" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    //justifyContent: "center",
    // flexDirection: "row", // padrão é column
  },
  cabecalho: {
    backgroundColor: "lightblue",
    flex: 0.8,
  },
  conteudo: {
    backgroundColor: "orange",
    flex: 4,
  },
  rodape: {
    backgroundColor: "purple",
    flex: 0.5,
  },
});
