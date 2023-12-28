//AOS Init
$(function () {
  AOS.init();
});
// Tooltip script
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


//Language Switch

var data = {
  eng: {
    "start": "Start",
    "about-me": "About me",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "language": "Language",
    "profession": "Web Developer",
    "phrase":
      "I make websites according to your needs. A place where your ideas become a reality.",
    "cv": "Download CV",
    "about-header": "About me",
    "about-desc":
      "I'm a 23 year old Web Developer from Chile, also a graduated Analyst Programmer. I started learning the basics of programming in 2019, where I began specializing in the world of web development. I make beautiful and responsive websites that will capture your vision and ideas.",
    "skills": "My Skills",
    "portfolio": "My Portfolio",
    "github-btn": "Ver repositorio",
    "open-btn": "Visitar sitio",
    "quiz-time-desc":
    "A simple trivia game website. You can answer ten question from the category of your choosing. Built using Javascript API Fetch.",
    "fte-nordica-desc": 
    "Landing page for a mock bar called 'Fuente Nórdica', built using Django for experimenting with templates.",
    "portafolio-desc": "This page itself! Website to showcase my professional profile, including proyects, skills, etc.",
    "contact": "Contact Me",
    "contact-subheader": "If you want to work together or just say hi!",
    "name": "Full Name",
    "email": "E-mail",
    "message": "Message",
    "send":"Send",
    "footer": "Made with ❤️ by Juan Jerez",
  },
  esp: {
    "start": "Inicio",
    "about-me": "Sobre mí",
    "portfolio": "Portafolio",
    "contact": "Contacto",
    "language": "Idioma",
    "profession": "Desarrollador Web",
    "phrase":
      "Creo sitios webs acorde a tus necesidades. Un lugar donde tus ideas se vuelven una realidad.",
    "cv": "Descargar CV",
    "about-header": "Sobre mí",
    "about-desc":
      "Soy un Desarrollador Web de 23 años proveniente de Chile, además de Analista Programador graduado. Comencé a aprender las bases de la programación de 2019, y me empecé a especializar en el mundo del desarrollo web. Construyo páginas web atractivas y responsivas que capturarán tu visión e ideas.",
    "skills": "Mis Habilidades",
    "portfolio": "Mi Portafolio",
    "github-btn": "Ver repositorio",
    "open-btn": "Visitar sitio",
    "quiz-time-desc":
    "Una página web simple de juego estilo trivia. Puedes responder diez preguntas de la categoría de tu elección. Utiliza Fetch API de Javascript",
    "fte-nordica-desc": 
    "Landing page del restobar ficticio 'La fuente nórdica', hecho en Django para experimentar con plantillas.",
    "portafolio-desc": "¡Esta misma página! Sitio para presentar mi perfil profesional, incluyendo proyectos, habilidades, etc.",
    "contact": "Contáctame",
    "contact-subheader": "¡Si quieres trabajar juntos o solo saludar!",
    "name": "Nombre Completo",
    "email": "Correo Electrónico",
    "message": "Mensaje",
    "send": "Enviar",
    "footer": "Hecho con ❤️ por Juan Jerez",
  },
};

$(".translate").click(function (event) {
  $(".translate").removeClass("disabled");
  $(this).addClass("disabled");
  var language = event.target.id;
  $(".lang").each(function() {
    $(this).text(data[language][$(this).attr("key")]);
  });
});

// Owl Carousel Script
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    dots: true,
    dotsEach: 1,
    navigation: true,
    autoPlay: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
//Skill Icons Click Animation
$(".skill-img").mousedown(function (event) {
  $(event.target).addClass("skill-img-rotated");
  setTimeout(function () {
    $(event.target).removeClass("skill-img-rotated");
  }, 6000);
});

$(".skill-img").mouseup(function (event) {
  $(event.target).removeClass("skill-img-rotated");
});
