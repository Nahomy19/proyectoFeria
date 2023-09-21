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

//--------------------------ARRAY DE COMANDOS EN ESPAÑOL---------------------------------------------------
const comandosEs = {
    // SALUDO
    /*"Hola Mochi": () => {
        voz("Bienvenido de nuevo");
    },*/

    "Mochi": () => {
        voz("Hola, en qué puedo ayudar");
    },

    "hey Mochi": () => {
        voz("Digame, en qué puedo ayudar");
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

    // PREGUNTAS AL ASISTENTE EN ESPAÑOL

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

    //----------------------------------------Comando para "Dinámica"--------------------------------------------------------------------------------
    "Juego": () => {
        iniciarJuego_es();
    },

    "Inicia el juego": () => {
        iniciarJuego_es();
    },
    //----------------------------------------------------------------------------------------------------------------------------------------------

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

    // ÓRDENES

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
        voz("Hola, mucho gusto");
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
        voz("Hola, mucho gusto");
    },

    "Mochi Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye mochi": () => {
        voz("Si, te escucho");
    },

    "Mochi estás ahí": () => {
        voz("aquí estoy");
    },

}

//--------------------------------------Escribir los comandos en inglés-------------------------------------------------------------------------
const comandosEn = {
    // GREETINGS

    "okay Mochi": () => {
        voz("Welcome back");
    },

    "Hey there": () => {
        voz("Hello, how can I assist you?");
    },
    
    "Mochi Good morning": () => {
        voz("Good morning, I hope you're well");
    },

    "Good morning Mochi": () => {
        voz("Good morning, I hope you're well")
    },

    "Mochi Good afternoon": () => {
        voz("Good afternoon, welcome back");
    },

    "Good afternoon Mochi": () => {
        voz("Good afternoon");
    },

    "Mochi Good evening": () => {
        voz("Good evening, welcome back");
    },

    /*" Mochi": () => {
        voz("Yes, tell me, how can I help?");
    },*/

    "Mochi say hello to people": () => {
        voz("Welcome, I'm Mochi, a virtual assistant");
    },

    "Greet people": () => {
        voz("Welcome, I'm Mochi, a virtual assistant");
    },

    "Mochi Good morning": () => {
        voz("Good morning, I hope you're well");
    },

    "Good morning Mochi": () => {
        voz("Good morning, I hope you're well")
    },

    "Mochi Good afternoon": () => {
        voz("Good afternoon, welcome back");
    },

    "Good afternoon Mochi": () => {
        voz("Good afternoon");
    },

    "Mochi Good evening": () => {
        voz("Good evening, welcome back");
    },

    // GOODBYES
    "Mochi see you tomorrow": () => {
        voz("See you tomorrow");
        annyang.abort();
    },

    "See you later Mochi": () => {
        voz("See you later");
        annyang.abort()
    },

    "Goodbye Mochi": () => {
        voz("Goodbye");
        annyang.abort();
    },

    "Mochi rest": () => {
        voz("Rest you too")
    },

    "Mochi turn off": () => {
        voz('OK goodbye')
        annyang.abort();
    },

    "Mochi turn off for *time minutes": tiempo => {
        voz('ok, be back in ' + tiempo + 'minutes');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hi, I am back') }, tiempo * 60000);
    },

    // QUESTIONS
    "Mochi what time is it": () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        voz(`It's ${formattedHours}:${formattedMinutes} ${ampm}`);
    },
    
    "Mochi who believed you": () => {
        voz("The Dragon Works Team");
    },

    "Mochi what are you": () => {
        voz("I am a virtual assistant");
    },

    "what's your name": () => {
        voz("my name is Mochi");
    },

    // Command for "Dynamics"
    "Game": () => {
        iniciarJuego_en();
     },
 
     "Start the game": () => {
         iniciarJuego_en();
     },
 
     "mochi what date is today": () => {
         var date = new Date;
         var mes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
         voz("today is " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
     },
 
     "mochi what day is today": () => {
         var date = new Date;
         var dia = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
         voz("today is "+ dia[date.getDay()-1]);
     },
 
     "mochi what day is it": () => {
         var date = new Date;
         var dia = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
         voz("today is "+ dia[date.getDay()-1]);
     },

    "mochi thank you very much": () => {
        voz("To serve you");
    },

    "Mochi How are you?": () => {
        voz('better than yesterday, I hope you are too')
    },

    "How are you?": () => {
        voz('better than yesterday, I hope you are too')
    },
    
    "Mochi Meet *name": nombre => {
        voz("Hello" + nombre +", my name is Mochi, it's a pleasure to meet you");
    },

       // ORDERS

    "Mochi tell me a joke": () => {
        var chistes = ["Why do circus seals always look up? Because that's where the spotlights are.",
            "You're obsessed with food! I don't know what you're talking about.",
            "Why are you talking with those sneakers? Because it says converse",
            "Do you know how a magician feels after eating?, little magician",
            "He gives me a short coffee with milk, My machine is broken, change",
            "Waiter! This steak has a lot of nerves, Normal, it is the first time they have eaten it",
            "Hello, is Agustín here? No, I'm uncomfortable",
            "What is the funniest fruit? The orange ha ha",
            "What is the last straw of Aladdin? Have a bad temper"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "Restart *restart": () => {
        voz("understood");
        location.reload();
    },

    "Mochi cleans the console": () => {
        voz("understood");
        console.clear();
    },

    "mochi search *search": busqueda => {
        voz("ok, here are some results " + busqueda +"for you");
        window.open("https://www.google.com/search?q=" + busqueda)

    },

    'play *search': function(busqueda) {
        voz("Ok, playing" + busqueda + " for you.");
        const query = encodeURIComponent(busqueda);
        const youtubeURL = `https://www.youtube.com/results?search_query=${query}`;
        window.open(youtubeURL, '_blank');
    },

    "mochi say *phrase": frase => {
        voz(frase);
    },
    "write *dict": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // COURTESY

    "thank you Mochi": () => {
        voz("To serve you");
    },

    "thank you": () => {
        voz("To serve you");
    },

    "thank you so much": () => {
        voz("To serve you");
    },

    "Mochi thank you": () => {
        voz("To serve you");
    },

    "mochi thank you very much": () => {
        voz("To serve you");
    },
    
    "Mochi How are you?": () => {
        voz('better than yesterday, I hope you are too')
    },

    "How are you?": () => {
        voz('better than yesterday, I hope you are too')
    },

    "Mochi Meet *name": nombre => {
        voz("Hello" + nombre +", my name is Mochi, it's a pleasure to meet you");
    },

    // CALL TO ACTION
    
    "Hello Mochi": () => {
        voz("Hi nice to meet you");
    },

    "Hi!": () => {
        voz("Hi nice to meet you");
    },

    "Mochi hello": () => {
        voz("hi nice to meet you");
    },

    "Mochi can you help me": () => {
        voz("of course");
    },

    "Mochi you are there": () => {
        voz("here I am");
    },

}

// Merge the commands in Spanish and English---------------------------------------------------------------
const comandos = Object.assign({}, comandosEs, comandosEn);

//Función para el juego en Español------------------------------------------------------------------------
function iniciarJuego_es() {

    //Acá irán las preguntas en ESPAÑOL
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
        {
            pregunta: "¿Cuál es el lugar más frío de la tierra?",
            respuestaCorrecta: "La Antártida",
        },
        {
            pregunta: "¿Cómo se llama el proceso por el cual las plantas se alimentan?",
            respuestaCorrecta: "La Fotosíntesis",
        },
        {
            pregunta: "¿Cuántos elementos hay en la Tabla Periódica?",
            respuestaCorrecta: "118 elementos",
        },
        {
            pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
            respuestaCorrecta: "La piel",
        },
        {
            pregunta: "¿Qué órgano del cuerpo consume más energía?",
            respuestaCorrecta: "El cerebro",
        },
        {
            pregunta: "¿Cuántos dientes tiene un humano adulto?",
            respuestaCorrecta: "32",
        },
        {
            pregunta: "¿Cuántas vertebras posee el cuerpo humano?",
            respuestaCorrecta: "33",
        },
        {
            pregunta: "¿Quién pintó 'La noche estrellada'?",
            respuestaCorrecta: "Van Gogh",
        },
        {
            pregunta: "¿Cuál es el libro francés más vendido de la historia?",
            respuestaCorrecta: "El principito",
        },
        {
            pregunta: "¿Quién creo los cómics de Spiderman?",
            respuestaCorrecta: "Stan Lee",
        },
        {
            pregunta: "¿Quién es el máximo goleador de la historia del fútbol?",
            respuestaCorrecta: "Cristiano Ronaldo",
        },
        {
            pregunta: "¿Quién es el futbolista con más balones de oro?",
            respuestaCorrecta: "Leo Messi ",
        },
        {
            pregunta: "¿En qué equipo jugó Michael Jordan la mayor parte de su carrera?",
            respuestaCorrecta: "Chicago Bulls",
        },
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



//Función para el juego en Ingñlés
function iniciarJuego_en() {

    //Acá irán las preguntas en ESPAÑOL
    const preguntas = [
        {
            pregunta: "What is the capital of France?",
            respuestaCorrecta: "Paris",
        },
        {
            pregunta: "What year was Google founded?",
            respuestaCorrecta: "1998",
        },
        {
            pregunta: "How many continents are there in the world?",
            respuestaCorrecta: "7",
        },
        {
            pregunta: "What colors does the flag of El Salvador have?",
            respuestaCorrecta: "Blue and white",
        },
        {
            pregunta: "What is the largest ocean?",
            respuestaCorrecta: "Pacific Ocean",
        },
        {
            pregunta: "What is the world's largest country?",
            respuestaCorrecta: "Russia",
        },
        {
            pregunta: "What is the largest river in the world?",
            respuestaCorrecta: "Amazonas",
        },
        {
            pregunta: "What branch of biology studies animals?",
            respuestaCorrecta: "Zoology",
        },
        {
            pregunta: "How many bones does the human body have?",
            respuestaCorrecta: "206",
        },
        {
            pregunta: "How many sides does a hexagon have?",
            respuestaCorrecta: "6 sides",
        },
        {
            pregunta: "What is the capital of Argentina?",
            respuestaCorrecta: "Buenos Aires",
        },
        {
            pregunta: "What is the coldest place on earth?",
            respuestaCorrecta: "The Antartida",
        },
        {
            pregunta: "What is the process by which plants feed called?",
            respuestaCorrecta: "Photosynthesis",
        },
        {
            pregunta: "How many elements are there in the Periodic Table?",
            respuestaCorrecta: "118 elements",
        },
        {
            pregunta: "What is the largest organ of the human body?",
            respuestaCorrecta: "The skin",
        },
        {
            pregunta: "Which organ in the body consumes the most energy?",
            respuestaCorrecta: "The Brain",
        },
        {
            pregunta: "How many teeth does an adult human have?",
            respuestaCorrecta: "32",
        },
        {
            pregunta: "How many vertebrae does the human body have?",
            respuestaCorrecta: "33",
        },
        {
            pregunta: "Who painted 'The Starry Night'?",
            respuestaCorrecta: "Van Gogh",
        },
        {
            pregunta: "What is the best-selling French book in history?",
            respuestaCorrecta: "The little Prince",
        },
        {
            pregunta: "Who created the Spiderman comics?",
            respuestaCorrecta: "Stan Lee",
        },
        {
            pregunta: "Who is the top scorer in football history?",
            respuestaCorrecta: "Cristiano Ronaldo",
        },
        {
            pregunta: "Who is the footballer with the most Ballon d'Ors?",
            respuestaCorrecta: "Leo Messi ",
        },
        {
            pregunta: "What team did Michael Jordan play for most of his career?",
            respuestaCorrecta: "Chicago Bulls",
        },
    
        // Add more questions and correct answers as desired
    ];

    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    const tiempoDeRespuesta = 20000; // Tiempo de respuesta en milisegundos (ejemplo: 20 segundos)

    annyang.removeCommands();

    const comandosJuego = {};
    comandosJuego[preguntaAleatoria.respuestaCorrecta] = () => {
        clearTimeout(tiempoRespuesta);
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz("¡That is correct! ¡You win!");
    };

    comandosJuego["*answers"] = (respuesta) => {
        clearTimeout(tiempoRespuesta);
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz(`Incorrect. The answer is: ${preguntaAleatoria.respuestaCorrecta}`);
    };

    annyang.addCommands(comandosJuego);

    voz(preguntaAleatoria.pregunta);

    const tiempoRespuesta = setTimeout(() => {
        annyang.removeCommands();
        annyang.addCommands(comandos); // Restaurar comandos originales
        voz("¡Time is up! Too slow!.");
    }, tiempoDeRespuesta);
}



//Función para buscar y reproducir video de youtube (No se usará)----------------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------------------------------------------------------------------

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