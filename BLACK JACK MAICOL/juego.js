// Definimos el mazo de cartas
const mazo = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 'A'
];

let jugador1 = [];
let jugador2 = [];

let totalJugador1 = 0;
let totalJugador2 = 0;

function barajar(mazo) {
  for (let i = mazo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
}

function repartirCarta(jugador) {
  jugador.push(mazo.pop());
}

function calcularTotal(mano) {
  let total = 0;
  let ases = 0;

  for (const carta of mano) {
      if (carta === 'A') {
          ases++;
      } else if (typeof carta === 'string') {
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

function turnoJugador(jugador, nombre) {
  while (true) {
      let decision = prompt(`Jugador ${nombre}: ¿Desea pedir una carta (p) o plantarse (s)?`).toLowerCase();
      if (decision === 'p') {
          repartirCarta(jugador);
          console.log(`Jugador ${nombre}:`, jugador, "Total:", calcularTotal(jugador));
          if (calcularTotal(jugador) > 21) {
              console.log(`Jugador ${nombre} ha superado 21. ¡Fin del turno!`);
              break;
          }
      } else if (decision === 's') {
          console.log(`Jugador ${nombre} se planta.`);
          break;
      } else {
          console.log('Opción no válida. Por favor, ingrese "p" para pedir carta o "s" para plantarse.');
      }
  }
}

function iniciarJuego() {
  barajar(mazo);

  // Repartir cartas iniciales
  repartirCarta(jugador1);
  repartirCarta(jugador2);
  repartirCarta(jugador1);
  repartirCarta(jugador2);

  console.log("Jugador 1:", jugador1, "Total:", calcularTotal(jugador1));
  console.log("Jugador 2:", jugador2, "Total:", calcularTotal(jugador2));

  // Turnos de los jugadores
  turnoJugador(jugador1, 1);
  turnoJugador(jugador2, 2);

  totalJugador1 = calcularTotal(jugador1);
  totalJugador2 = calcularTotal(jugador2);

  console.log("Resultados finales:");
  console.log("Jugador 1:", jugador1, "Total:", totalJugador1);
  console.log("Jugador 2:", jugador2, "Total:", totalJugador2);

  if (totalJugador1 > 21) {
      console.log("Jugador 1 se pasa de 21. Jugador 2 gana.");
  } else if (totalJugador2 > 21) {
      console.log("Jugador 2 se pasa de 21. Jugador 1 gana.");
  } else if (totalJugador1 === totalJugador2) {
      console.log("Empate.");
  } else if (totalJugador1 > totalJugador2) {
      console.log("Jugador 1 gana.");
  } else {
      console.log("Jugador 2 gana.");
  }
}

iniciarJuego();
