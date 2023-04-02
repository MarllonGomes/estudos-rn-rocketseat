import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -24,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    marginRight: 5,
    paddingLeft: 15,
    fontSize: 17,
    color: "#FFF",
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
  },
  buttonIcon: {
    width: 22,
    height: 22,
  }
});