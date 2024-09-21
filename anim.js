// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Voy a empezar con tu sonrisa", time: 13 },
  { text: "Fue lo primero que me cautivó", time: 18 },
  { text: "Y seguir con tu mirada", time: 20 },
  { text: "Tu mirada que me derritió", time: 25 },
  { text: "Continuaré con esos ojos", time: 27 },
  { text: "Que me hicieron creer", time: 31 },
  { text: "Que todavía el amor existe", time: 34 },
  { text: "Y en ellos lo pude ver", time: 38 },
  { text: "Dime", time: 42 },
  { text: "Si estoy fallando al describirte", time: 45 },
  { text: "Porque nunca se lo he dicho a nadie", time: 49 },
  { text: "Así te pedí, no cambies", time: 56 },
  { text: "Así te soñé, a detalle", time: 62 },
  { text: "Tus complejos para mi son el reflejo de lo más perfecto que conocí", time: 69 },
  { text: "Así te pedí, no quiero a nadie más", time: 76 },
  { text: "No, no me interesa nadie", time: 87 },
  { text: "Quiero aclarar todas tus dudas", time: 96 },
  { text: "Que mi consuelo sea tu abrigo", time: 100 },
  { text: "Que mi amor sea tu confidente, amante y mejor amigo", time: 103 },
  { text: "Contigo soy como la luna", time: 110 },
  { text: "Tú eres el sol que me ilumina", time: 114 },
  { text: "Que me da luz me da calor mientras orbito al rededor de tu cintura", time: 117 },
  { text: "Dime", time: 124 },
  { text: "Si estoy fallando al describirte", time: 128 },
  { text: "Porque nunca se lo he dicho a nadie", time: 131 },
  { text: "Así te pedí, no cambies", time: 138 },
  { text: "Así te soñé, a detalle", time: 145 },
  { text: "Tus complejos para mi son el reflejo de lo más perfecto que conocí", time: 152 },
  { text: "Así te pedí, no quiero a nadie más", time: 158 },
  { text: "Así te pedí, no cambies", time: 178 },
  { text: "Así te soñé, a detalle", time: 186 },
  { text: "Tus complejos para mi son el reflejo de lo más perfecto que conocí", time: 193 },
  { text: "Así te pedí, no quiero a nadie más", time: 199 },
  { text: "No, no me interesa nadie", time: 209 }
];

// Variable para mantener la última línea de letras mostrada
var lastLine = "";

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime; // Obtener el tiempo actual de la canción
  var currentLine = lyricsData.find((line) => currentTime >= line.time && currentTime < line.time + 3); // Encuentra la línea que debe mostrarse
  
  if (currentLine && currentLine.text !== lastLine) {
    lyrics.innerHTML = currentLine.text; // Actualiza el contenido de las letras
    lyrics.style.opacity = 1; // Muestra las letras con opacidad completa
    lastLine = currentLine.text; // Actualiza la última línea mostrada
  }
  
  requestAnimationFrame(updateLyrics); // Llama nuevamente a la función en el próximo cuadro
}

// Iniciar la sincronización de las letras cuando el audio comience
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
