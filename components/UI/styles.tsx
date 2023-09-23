import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //general components to use
  page: {
    padding: 20,
    // backgroundColor: "#212121",
    height: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    // flex: 1,
    // width: "100%",
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  btnText: {
    textAlign: "center",
  },
  btnPrimary: {
    width: "100%",
    backgroundColor: "#ff00ff",
    padding: 10,
    borderRadius: 6,
  },
  //utility styles
  middlePage: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
