let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1800)
  .typeString('Hola, Soy un Desarrollador Web Junior dispuesto a grandes retos..')
  .pauseFor(200)
  .deleteChars(10)
  .start();