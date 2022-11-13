import { useState } from 'react';

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const [operacion, setOperacion] = useState('');

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const asignarOperacion = (operaMath: string) => {
    if (numero === '0') {
      setNumeroAnterior(numeroAnterior.replace(/( [+-×÷])$/, ' ' + operaMath));
    } else if (numeroAnterior.match(/( [\+\-\×\÷])$/)) {
      const data = numeroAnterior.split(' ');
      console.log(data);
      // eslint-disable-next-line no-eval
      const resultado = eval(data[0] + data[1] + numero);
      setNumeroAnterior(resultado + ' ' + operaMath);
      setNumero('0');
    } else {
      setNumeroAnterior(numero.replace(/^(= )/, '') + ' ' + operaMath);
      setNumero('0');
    }
    setOperacion(operaMath);
  };

  const armarNumero = (numeroTexto: string) => {
    if (numero.includes('= ')) {
      setNumeroAnterior('0');
      setNumero(numeroTexto);
    } else {
      switch (numeroTexto) {
        case '0':
          if (numero !== '0' && numero !== '-0') {
            console.log('0', numeroTexto);
            setNumero(numero + numeroTexto);
          }
          break;
        case '·':
          console.log('·', numeroTexto);
          if (!numero.includes('.')) {
            setNumero(numero + numeroTexto);
          }
          break;
        default:
          console.log('default', numeroTexto);
          if (numero === '-0') {
            setNumero('-' + numeroTexto);
          } else {
            numero === '0'
              ? setNumero(numeroTexto)
              : setNumero(numero + numeroTexto);
          }
      }
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('= ')) {
      setNumeroAnterior('0');
      setNumero('-0');
    } else if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const borrarUltimo = () => {
    if (numero.length > 1) {
      const tmp = Number(numero.replace(/.$/, ''));
      if (isNaN(tmp)) {
        setNumero('0');
        setNumeroAnterior('0');
      } else {
        setNumero(Number(numero.replace(/.$/, '')).toString());
      }
    }
  };

  const punto = () => {
    if (numero.includes('= ')) {
      setNumeroAnterior('0');
      setNumero('0.');
    } else if (!numero.includes('.')) {
      setNumero(numero + '.');
    }
  };

  const calcular = () => {
    if (
      numero !== '0' &&
      numero !== '-0' &&
      !numero.includes('= ') &&
      numeroAnterior !== '0'
    ) {
      const numero1 = Number(numeroAnterior.replace(/( [+-×÷])$/, ''));
      setNumeroAnterior(numeroAnterior + ' ' + numero);
      switch (operacion) {
        case '+':
          setNumero('= ' + (numero1 + Number(numero)).toString());
          break;
        case '-':
          setNumero('= ' + (numero1 - Number(numero)).toString());
          break;
        case '×':
          setNumero('= ' + (numero1 * Number(numero)).toString());
          break;
        case '÷':
          if (Number(numero) !== 0) {
            setNumero('= ' + (numero1 / Number(numero)).toString());
          } else {
            setNumero('= La división por cero no existe');
          }
          break;
      }
    }
  };

  return {
    limpiar,
    asignarOperacion,
    armarNumero,
    positivoNegativo,
    borrarUltimo,
    punto,
    calcular,
    numeroAnterior,
    numero,
  };
};
