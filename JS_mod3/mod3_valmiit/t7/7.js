'use strict';

let trigger = document.getElementById('trigger');
trigger.style.display = 'inline-block';
trigger.addEventListener('pointerover', function() {
  let image = document.getElementById('target');
  image.src = 'img/picB.jpg';
  console.log('Times hovered')
});
trigger.addEventListener('pointerleave', function() {
  let image = document.getElementById('target');
  image.src = 'img/picA.jpg';
});

