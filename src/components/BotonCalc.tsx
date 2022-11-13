import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/CalculadoraTheme';

interface Props {
  texto: string;
  colorFondo: string;
  botonCero?: string;
  action: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, colorFondo, botonCero, action }: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...(botonCero === 'botonCero' ? styles.botonCero : styles.boton),
          backgroundColor: colorFondo,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: colorFondo === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
