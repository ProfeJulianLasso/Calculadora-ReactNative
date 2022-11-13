import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'black',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  calculadora: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 8,
  },
  resultadoTiny: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonCero: {
    height: 80,
    width: 180,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
