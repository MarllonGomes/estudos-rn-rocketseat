import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10
  },
  counterNumber: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 9
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 17,
    fontWeight: 'bold'
  },
  doneText: {
    color: '#8284FA',
    fontSize: 17,
    fontWeight: 'bold'
  },
});