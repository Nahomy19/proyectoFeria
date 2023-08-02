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

    "hey Mochi": () => {
        voz("Bienvenido de nuevo");
    },

    "Buenos días Mochi": () => {
        voz("Buenps días, bienvenido de nuevo");
    },

    "Buenas tardes Mochi": () => {
        voz("Buenas tardes, bienvenido de nuevo");
    },

    "Buenas noches Mochi": () => {
        voz("Buenas noches, bienvenido de nuevo");
    },

    // DESPEDIDA

    "Hasta mañana Mochi": () => {
        voz("Hasta mañana");
        annyang.abort()
    },

    "Hasta luego Mochi": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "Adios Mochi": () => {
        voz("Hasta luego");
        annyang.abort()
    },

    "Descansa Mochi": () => {
        voz("Descansa tú también")
    },

    "apágate": () => {
        voz('ok, hasta luego')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
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

    "quién te creo": () => {
        voz("El equipo Dragon Works");
    },

    "qué eres": () => {
        voz("soy un asistente virtual");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es Mochi");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    "Qué es una arquitectura de software": () => {
        voz("Una arquitectura de software es la estructura o diseño fundamental de un sistema de software que define la organización de sus componentes, sus relaciones y las reglas que guían su evolución");
    },

    "Qué es la refactorización en el desarrollo de software": () => {
        voz("La refactorización es una práctica que consiste en mejorar el código existente sin cambiar su comportamiento externo. Se realiza para aumentar la legibilidad, reducir la complejidad y mejorar el rendimiento del software sin introducir errores");
    },

    "Qué es un framework": () => {
        voz("Un framework  es una herramienta que da acceso a los desarrolladores de software a componentes o soluciones prefabricadas diseñadas para agilizar el desarrollo");
    },

    "Qué es programar": () => {
        voz("La programación se trata del proceso que se aplica cuando se crea algún tipo de aplicación o software, o para llevar a cabo algún concepto o proyecto que necesita del uso de un lenguaje informático");
    },

    "Cúales son las etapas del ciclo de vida del desarrollo de software": () => {
        voz("Planificación, Diseño, Recopilación de análisis de requisitos, Pruebas, Despliegue, Mantenimiento");
    },

    "Qué es la programación orientada a objetos": () => {
        voz("Es un modelo de programación en el que el diseño de software se organiza alrededor de datos o objeto, en vez de dar funciones ilógicas, se enfoca a los objetos de los programadores necesitan manipular");
    },

    "Qué es un modelo entidad de relación": () => {
        voz("Un diagrama entidad-relación también conocido como modelo antidad relación o ORD, es un tipo de diagrama de flujo que ilustra como las entidades, como personas, objetos, o concepto, se relacionan entre si dentro de un sistema");
    },

    "Qué es un lenguaje de programación": () => {
        voz("un lenguaje de programación es una herramienta que permite desarrollar software o programas para computadora. Los lenguajes de programación son empleados para diseñar e implementar programas encargados de definir y administrar el comportamiento de los dispositivos físicos y lógicos de una computadora");
    },

    "Qué es un pseudocódigo": () => {
        voz("Es una manera de definir los algoritmos, los pasos necesarios para resolver un problema. El pseudocódigo es un paso intermedio entre los diagramas de flujo, que se expresan mediante símbolos, y los lenguajes de programación, que están ligados a una sintaxis bien definida");
    },

    "Qué es la depuración": () => {
        voz("La depuración es el proceso de descubrir y eliminar errores en la fuente de software de un programa de computadora");
    },

    // ORDENES

    "cuéntame un chiste": () => {
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

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "di *frase": frase => {
        voz(frase);
    },
    "escribe *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // CORTESÍA

    "gracias": () => {
        voz("Para servirte");
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que tú también lo estés')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es Mochi, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "Mochi": () => {
        voz("aquí estoy");
    },

    "Hey": () => {
        voz("aquí estoy");
    },

    "Hola": () => {
        voz("aquí estoy");
    },

    "Me puedes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("aquí estoy");
    },

    "Mochi estás ahí": () => {
        voz("aquí estoy");
    },

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}