let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(3200)
  .typeString('Hola, estas son algunas de mis habilidades..')
  .pauseFor(200)
  .deleteChars(10)
  .start();
 
  let app2 = document.getElementById('typewriter2');
 
  let typewriter2 = new Typewriter(app2, {
    loop: true,
    delay: 75,
  });
   

typewriter2
  .pauseFor(2200)
  .typeString('He trabajado en algunos<br>proyectos tales como...')
  .pauseFor(200)
  .deleteChars(10)
  .start();
