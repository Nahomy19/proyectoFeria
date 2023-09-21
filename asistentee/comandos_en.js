const comandos = {
    // SALUDO
    "okey Mochi": () => {
        voz("Welcome back");
    },

    "Mochi": () => {
        voz("Hello, how can I help?");
    },

    "hey Mochi": () => {
        voz("Tell me how I can help");
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

    // FAREWELL

    "Mochi See you tomorrow": () => {
        voz("See you tomorrow");
        annyang.abort()
    },

    "See you later Mochi": () => {
        voz("See you later");
        annyang.abort()
    },

    "Goodbye Mochi": () => {
        voz("See you later");
        annyang.abort()
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

    "Good night Mochi": () => {
        voz("Good night");
    },

    // QUESTIONS

    "Mochi what time is it": () => {
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

    "Mochi who believed you": () => {
        voz("The Dragon Works Team");
    },

    "Mochi what are you": () => {
        voz("I am a virtual assistant");
    },

    "what's your name": () => {
        voz("my name is Mochi");
    },

    "what is your name": () => {
        voz("my name is Mochi");
    },

    // Command for "Dynamics"
    "Game": () => {
       iniciarJuego();
    },

    "Start the game": () => {
        iniciarJuego();
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

    "Hey": () => {
        voz("here I am");
    },

    "Hey Mochi": () => {
        voz("here I am");
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

    "Mochi": () => {
        voz("Yes I listen you");
    },

    "Mochi you are there": () => {
        voz("here I am");
    },

}

function iniciarJuego() {
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
            
            // Agrega más preguntas y respuestas correctas según desees
        ];
}