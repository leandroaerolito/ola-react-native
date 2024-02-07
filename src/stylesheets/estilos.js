import { StyleSheet } from "react-native";

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
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 5,
  },
  rodape: {
    backgroundColor: "purple",
    flex: 0.5,
  },

  txtcabecalho: {
    color: "purple",
    fontFamily: "Segoe",
    fontWeight: "bold",
    fontSize: 25,
  },

  txtconteudo: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },

  txtrodape: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    marginLeft: 20,
  },
});

export default estilos;
