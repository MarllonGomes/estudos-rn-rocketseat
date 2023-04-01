import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#e23c44",
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
});
