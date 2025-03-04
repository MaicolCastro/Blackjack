const mazo = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A'];

let jugador1 = [];
let jugador2 = [];

let totalJugador1 = 0;
let totalJugador2 = 0;

function iniciarJuego() {
  // Repartir cartas
  jugador1.push(mazo.pop());
  jugador2.push(mazo.pop());
  jugador1.push(mazo.pop());
  jugador2.push(mazo.pop());

  // Calcular totales
  totalJugador1 = calcularTotal(jugador1);
  totalJugador2 = calcularTotal(jugador2);

  // Mostrar resultados
  console.log("Jugador 1:", jugador1, "Total:", totalJugador1);
  console.log("Jugador 2:", jugador2, "Total:", totalJugador2);
}

function calcularTotal(mano) {
  let total = 0;
  let ases = 0;

  for (const carta of mano) {
    if (carta === 'A') {
      ases++;
    } else if (carta === 'J' || carta === 'Q' || carta === 'K') {
      total += 10;
    } else {
      total += carta;
    }
  }

  // Ajustar valor de los ases
  for (let i = 0; i < ases; i++) {
    if (total + 11 <= 21) {
      total += 11;
    } else {
      total += 1;
    }
  }

  return total;
}

iniciarJuego();