import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 18,
  },
  eventDate: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    color: "#ffffff",
    flex: 1
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#31CF67",
    marginLeft: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 22
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 52
  },
  emptyListText: {
    color: '#6b6b6b',
    fontSize: 14,
    textAlign: 'center'
  }
});
