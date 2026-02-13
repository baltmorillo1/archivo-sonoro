function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // discos disponibles
const discos = [
    { titulo: "Pet Sounds", artista: "The Beach Boys", anio: 1966 },
    { titulo: "Unknown Pleasures", artista: "Joy Division", anio: 1979 },
    { titulo: "Kind of Blue", artista: "Miles Davis", anio: 1959 },
    { titulo: "The Low End Theory", artista: "A Tribe Called Quest", anio: 1991 }
  ];
  
  // copia para evitar repetir
  let disponibles = [...discos];
  mezclar(disponibles);

  
  // referencias a pantallas
  const home = document.getElementById("home");
  const esenciales = document.getElementById("esenciales");
  const disco = document.getElementById("disco");
  
  // textos del disco
  const titulo = document.getElementById("titulo");
  const artista = document.getElementById("artista");
  const anio = document.getElementById("anio");
  
  // botones
  document.getElementById("btn-ir").onclick = () => {
    mostrar("esenciales");
  };
  
  document.getElementById("btn-random").onclick = () => {
    recomendar();
  };
  
  document.getElementById("btn-otro").onclick = () => {
    recomendar();
  };
  
  document.getElementById("btn-volver").onclick = () => {
    mostrar("home");
  };
  
  // funciones
  function mostrar(pantalla) {
    home.classList.add("hidden");
    esenciales.classList.add("hidden");
    disco.classList.add("hidden");
  
    if (pantalla === "home") home.classList.remove("hidden");
    if (pantalla === "esenciales") esenciales.classList.remove("hidden");
    if (pantalla === "disco") disco.classList.remove("hidden");
  }
  
  function recomendar() {
    if (disponibles.length === 0) {
      alert("Ya no quedan discos para recomendar");
      return;
    }
  
    const disco = disponibles.pop();
  
    titulo.innerText = disco.titulo;
    artista.innerText = disco.artista;
    anio.innerText = disco.anio;
  
    mostrar("disco");
  }
  
  
  