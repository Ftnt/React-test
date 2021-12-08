import React from 'react'

const verifyNumber = (dato) => {
  let _dato = Number(dato)
  if (!isNaN(_dato)) {
    return _dato
  }
  else {
    throw new Error('false')
  }
}

export const Calculator = ({ valorA, valorB, operador }) => {
  try {
    let _valorA = verifyNumber(valorA)
    let _valorB = verifyNumber(valorB)

    const operaciones = {
      suma: _valorA + _valorB,
      multi: _valorA * _valorB,
      resta: _valorA - _valorB
    }


    if (!operaciones[operador]) {
      return (
        <>
          <h1>"Operacion no encontrada"</h1>
        </>
      )
    }

    const _operacion = operaciones[operador]
    return (
      <>
        <h1>Resultado de {operador} : {_operacion}</h1>
      </>
    )

  } catch (error) {
    return (
      <>
        <h1>No se puede procesar los datos</h1>
      </>
    )
  }
}
