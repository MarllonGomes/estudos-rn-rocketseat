import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#262626',
    padding: 15,
    borderColor: '#333333',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  containerDone: {
    borderColor: '#262626'
  },
  checkButton: {
    width: 30,
    height: 30,
    marginRight: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    width: 20,
    height: 20
  },
  text: {
    flex: 1,
    color: '#fff',
    fontSize: 17,
  },
  textDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#323238'
  },
  trashButton: {
    width: 30,
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  trashIcon: {
    width: 20,
    height: 20
  }
});