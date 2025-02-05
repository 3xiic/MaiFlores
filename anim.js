
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


var lyricsData = [
  { text: "Tengo tiempo y mil canciones que cantarte", time: 1.5 },
  { text: "Tengo historias, tengo cosas que contarte", time: 5},
  { text: "Más hoy tengo tu llegada y, mi mano", time: 9 },
  { text: "voy a darte", time: 12 },
  { text: "Es tan lindo", time: 16 },
  { text: "Cuando existe un sentimiento y cuando quieres", time: 20 },
  { text: "Cuando cuentas sin callarte, ¿qué prefieres?", time: 22 },
  { text: "Por ejemplo, yo quisiera, si no es mucho", time: 29 },
  {text: "que te quedes", time: 31 },
  { text: "Dame solo un momento", time: 37 },
  { text: "Dame amor del más cierto", time: 39 },
  { text: "No te pido más nada", time: 42 },
  { text: "Dame de tu mirada", time: 47 },
  { text: "Y de tus sentimientos", time: 49},
  { text: "Siente si estoy sintiendo", time: 51 },
  { text: "No te quedes", time: 53 },
  { text: "No revises el pasado que entristece", time: 55 },
  { text: "No te niegues si el amor te pertenece", time: 61 },
  { text: "Ven y siéntate a mi lado", time: 67 },
  { text: "mira el día que amanece", time: 69 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);