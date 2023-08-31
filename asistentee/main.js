function start() {
    if (annyang) {
        annyang.setLanguage("es-ES")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
}
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});

const comandos = {
    // SALUDO
    "okey Mochi": () => {
        voz("Bienvenido de nuevo");
    },

    "Mochi": () => {
        voz("Hola, en qué puedo ayudar");
    },

    "hey Mochi": () => {
        voz("Digame, en que le puedo ayudar");
    },

    "Saluda a las personas": () => {
        voz("Bienvenidos soy Mochi, un asistente virtual");
    },

    "Mochi Buenos días": () => {
        voz("Buenos días, Espero que estés bien");
    },

    "Buenos días Mochi": () => {
        voz("Buenos días, Espero que estés bien")
    },

    "Mochi Buenas tardes": () => {
        voz("Buenas tardes, bienvenido de nuevo");
    },

    "Buenas tardes Mochi": () => {
        voz("Buenas tardes");
    },

    "Mochi Buenas noches": () => {
        voz("Buenas noches, bienvenido de nuevo");
    },

    "Buenas noches Mochi": () => {
        voz("Buenas noches");
    },

    // DESPEDIDA

    "Mochi Hasta mañana": () => {
        voz("Hasta mañana");
        annyang.abort()
    },

    "Hasta luego Mochi": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "Adios mochi": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "mochi Descansa": () => {
        voz("Descansa tú también")
    },

    "mochi apágate": () => {
        voz('ok, hasta luego')
        annyang.abort();
    },

    "mochi apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "Mochi qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('son las ' + strTime)
    },

    "Mochi quién te creo": () => {
        voz("El equipo Dragon Works");
    },

    "mochi qué eres": () => {
        voz("soy un asistente virtual");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Mochi");
    },

    "cómo te llamas": () => {
        voz("mi nombre es Mochi");
    },

    // Comando para "Dinámica"
    "Juego": () => {
        iniciarJuego();
    },

    "Inicia el juego": () => {
        iniciarJuego();
    },

    "mochi qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "mochi qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    "mochi qué día es": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "Mochi cuéntame un chiste": () => {
        var chistes = ["¿Por qué las focas del circo miran siempre hacia arriba?, Porque es donde están los focos",
            "¡Estás obsesionado con la comida!, No sé a que te refieres croquetamente",
            "¿Por qué estás hablando con esas zapatillas?, Porque pone converse",
            "¿Sabes cómo se queda un mago después de comer?, magordito",
            "Me da un café con leche corto, Se me ha roto la máquina, cambio",
            "¡Camarero! Este filete tiene muchos nervios, Normal, es la primera vez que se lo comen",
            "Hola, ¿está Agustín?, No, estoy incomodín",
            "¿Cuál es la fruta más divertida?, la naranja ja ja",
            "¿Cuál es el colmo de Aladdín? Tener mal genio"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "Reinicia *reinicia": () => {
        voz("entendido");
        location.reload();
    },

    "Mochi limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "mochi busca *busqueda": busqueda => {
        voz("ok, aquí tienes algunos resultados de " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)

    },

    /*
    "Mochi busca *busqueda": busqueda => {
        const mensaje = "OK, buscando " + busqueda + " para ti";
        responsiveVoice.speak(mensaje, "Spanish Female"); // Cambia "Spanish Female" al idioma/voz que prefieras
        const respuestaCompleta = "Aquí tienes algunos resultados";
        responsiveVoice.speak(respuestaCompleta, "Spanish Female");
        window.open("https://www.google.com/search?q=2djoZL2lJearwbkPhe6TyAo&oq= _lp=Egxnd3Mtd2l6LXNlcnAiEFF1w6kgZXMgc29mdHdhcmVIAFAAWABwAHgBkAEAmAEAoAEAqgEAuAESyAEA-AEG4gMEGAAgQQ&gs_ivs=1&sclient=gws-wiz-serp#tts=0" + busqueda);
    },*/

    
    
    /*"reproduce *busqueda": busqueda => {
        voz("ok, reproduciendo " + busqueda + "para ti");
        window.open("https://www.youtube.com" + busqueda)
    },*/

    /*
    'mochi reproduce *busqueda': function(busqueda) {
        voz("Ok, reproduciendo " + busqueda + " para ti.");
        window.open("https://www.youtube.com/" + busqueda)
        //buscarYReproducir(busqueda);
    },*/

    'reproduce *busqueda': function(busqueda) {
        voz("Ok, reproduciendo " + busqueda + " para ti.");
        const query = encodeURIComponent(busqueda);
        const youtubeURL = `https://www.youtube.com/results?search_query=${query}`;
        window.open(youtubeURL, '_blank');
    },

    "mochi di *frase": frase => {
        voz(frase);
    },
    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // CORTESÍA

    "gracias mochi": () => {
        voz("Para servirte");
    },

    "gracias": () => {
        voz("Para servirte");
    },

    "muchas gracias": () => {
        voz("Para servirte");
    },

    "Mochi gracias": () => {
        voz("Para servirte");
    },

    "mochi muchas gracias": () => {
        voz("Para servirte");
    },

    "Mochi Cómo estás": () => {
        voz('mejor que ayer, espero que tú también lo estés')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que tú también lo estés')
    },

    "Mochi Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es Mochi, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "Hola Mochi": () => {
        voz("Hola mucho gusto");
    },

    "Hey": () => {
        voz("aquí estoy");
    },

    "Hey Mochi": () => {
        voz("aquí estoy");
    },    

    "Hola": () => {
        voz("Hola mucho gusto");
    },

    "mochi Hola": () => {
        voz("Hola mucho gusto");
    },

    "Mochi Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye mochi": () => {
        voz("Si, lo escucho");
    },

    "Mochi estás ahí": () => {
        voz("aquí estoy");
    },

}

function iniciarJuego() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            respuestaCorrecta: "París",
        },
        {
            pregunta: "¿En qué año se fundó Google?",
            respuestaCorrecta: "1998",
        },
        {
            pregunta: "¿Cuántos continentes hay en el mundo?",
            respuestaCorrecta: "7",
        },
        {
            pregunta: "¿Qué colores tiene la bandera de El Salvador?",
            respuestaCorrecta: "Azul y blanco",
        },
        {
            pregunta: "¿Cúal es el océano más grande?",
            respuestaCorrecta: "Océano pacífico",
        },
        {
            pregunta: "¿Cúal es el país más grande del mundo?",
            respuestaCorrecta: "Rusia",
        },
        {
            pregunta: "¿Cúal es el río más grande del mundo?",
            respuestaCorrecta: "Amazonas",
        },
        {
            pregunta: "¿Qué rama de la biología estudia a los animales?",
            respuestaCorrecta: "Zoología",
        },
        {
            pregunta: "¿Qué cantidad de huesos tiene el cuerpo humano?",
            respuestaCorrecta: "206",
        },
        {
            pregunta: "¿Cuántos lados tiene un hexágono?",
            respuestaCorrecta: "6 lados",
        },
        {
            pregunta: "¿Cuál es la capital de Argentina?",
            respuestaCorrecta: "Buenos Aires",
        },

        // Agrega más preguntas y respuestas correctas según desees
    ];

    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    const tiempoDeRespuesta = 20000; // Tiempo de respuesta en milisegundos (ejemplo: 20 segundos)

    annyang.removeCommands();

    const comandosJuego = {};
    comandosJuego[preguntaAleatoria.respuestaCorrecta] = () => {
        clearTimeout(tiempoRespuesta);
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz("¡Correcto! ¡Has acertado en el juego!");
    };

    comandosJuego["*respuesta"] = (respuesta) => {
        clearTimeout(tiempoRespuesta);
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz(`Incorrecto. La respuesta correcta es: ${preguntaAleatoria.respuestaCorrecta}`);
    };

    annyang.addCommands(comandosJuego);

    voz(preguntaAleatoria.pregunta);

    const tiempoRespuesta = setTimeout(() => {
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz("¡Tiempo agotado! No has respondido a tiempo.");
    }, tiempoDeRespuesta);
}

function buscarYReproducir(busqueda) {
    var apiKey = 'AIzaSyANIE1mEk2w8N5hdc_oqsgcCoD0R3lAtVQ';
    var apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(busqueda)}&part=snippet&type=video`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var videoId = obtenerVideoId(data);
        if (videoId) {
          var playerDiv = document.createElement("div");
          playerDiv.id = "youtube-player";
          document.body.appendChild(playerDiv);
  
          player = new YT.Player("youtube-player", {
            height: "360",
            width: "640",
            videoId: videoId,
            events: {
              onReady: reproducirVideo
            }
          });
        }
      });
  }

  function obtenerVideoId(data) {
    var videoId = data.items[0].id.videoId;
    return videoId ? videoId : null;
  }
  
  function reproducirVideo(event) {
    event.target.playVideo();
  }

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;

    mensaje.voice = speechSynthesis.getVoices().filter(function(voice){ return voice.name == "Google español de Estados Unidos"; })[0];

    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}