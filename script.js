console.log(
  document.querySelector('.redSquare').getBoundingClientRect()
);
// La méthode Element.getBoundingClientRect() renvoie la taille d'un élément
// et sa position relative par rapport à la zone d'affichage (viewport).

let redSquare = document.querySelector('.redSquare');
let xCoord = document.querySelector('#XCoord');
let yCoord = document.querySelector('#YCoord');
let message = document.querySelector('#message');
let posX = 0, posY = 0;
xCoord.textContent = 'X : '+ posX + 'px';
yCoord.textContent = 'Y : '+ posY + 'px';

document.addEventListener('keydown', function(e){
  // console.log(e);
  message.textContent = '';
  if(e.key == "ArrowUp"){
    posY -= 1;
  }
  if(e.key == "ArrowDown"){
    posY += 1;
  }
  if(e.key == "ArrowLeft"){
    posX-= 1;
  }
  if(e.key == "ArrowRight"){
    posX += 1;
  }
  if(posX + 50 > 300 && posY + 50 > 100){
    message.textContent = 'COLLISION !!!!!';
    message.style.color = 'red';
  } else {
    xCoord.textContent = 'X : '+ posX + 'px';
    yCoord.textContent = 'Y : '+ posY + 'px';
    redSquare.style.left = posX + 'px';
    redSquare.style.top = posY + 'px';
  }
});
