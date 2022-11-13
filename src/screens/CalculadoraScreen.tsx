import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/CalculadoraTheme';

const CalculadoraScreen = () => {
  const {
    limpiar,
    asignarOperacion,
    armarNumero,
    positivoNegativo,
    borrarUltimo,
    punto,
    calcular,
    numeroAnterior,
    numero,
  } = useCalculadora();

  return (
    <View style={styles.calculadora}>
      <Text
        style={styles.resultadoTiny}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numeroAnterior}
      </Text>
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" colorFondo="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" colorFondo="#9B9B9B" action={positivoNegativo} />
        <BotonCalc texto="del" colorFondo="#9B9B9B" action={borrarUltimo} />
        <BotonCalc texto="÷" colorFondo="#FF9427" action={asignarOperacion} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="8" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="9" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="×" colorFondo="#FF9427" action={asignarOperacion} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="5" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="6" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="-" colorFondo="#FF9427" action={asignarOperacion} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="2" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="3" colorFondo="#2D2D2D" action={armarNumero} />
        <BotonCalc texto="+" colorFondo="#FF9427" action={asignarOperacion} />
      </View>
      <View style={styles.fila}>
        <BotonCalc
          texto="0"
          colorFondo="#2D2D2D"
          botonCero="botonCero"
          action={armarNumero}
        />
        <BotonCalc texto="·" colorFondo="#2D2D2D" action={punto} />
        <BotonCalc texto="=" colorFondo="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
