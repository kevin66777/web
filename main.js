let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1200)
  .typeString('Además de SQL, XML...😌...')
  .pauseFor(200)
  .deleteChars(10)
  .start();
 
  let app2 = document.getElementById('typewriter2');
 
  let typewriter2 = new Typewriter(app2, {
    loop: true,
    delay: 75,
  });
   

typewriter2
  .pauseFor(1200)
  .typeString('proyectos laborales y académicos...🙂...')
  .pauseFor(200)
  .deleteChars(10)
  .start();
