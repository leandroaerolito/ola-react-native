import estilos from "./src/stylesheets/estilos";

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
          <Text style={estilos.txtcabecalho}>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.txtconteudo}>
            O React Native é um framework de código aberto usado em vários
            setores e adotado com sucesso por centenas de empresas em todo o
            mundo, incluindo Uber, Microsoft e Facebook. React Native (também
            conhecido como RN) é uma estrutura de aplicativo móvel popular,
            baseada na linguagem JavaScript, que permite criar aplicativos
            móveis renderizados nativamente para iOS e Android.
          </Text>
          <Text style={estilos.txtconteudo}>
            A estrutura permite criar um aplicativo para várias plataformas
            usando a mesma base de código. O React Native foi lançado em 2015
            pelo Facebook como um projeto de código aberto. Em apenas alguns
            anos, tornou-se uma das principais soluções adotadas no
            desenvolvimento móvel, e hoje é utilizada por aplicativos
            mundialmente famosos como o Discord, Tesla, Instagram, Facebook e
            entre outros.
          </Text>
        </View>
        <View style={estilos.rodape}>
          <Text style={estilos.txtrodape}>Rodapé...</Text>
          <Button title="clique aqui" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
