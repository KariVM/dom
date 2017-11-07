/*window.onload = function () {
  var board =document.querySelector('.board-js');
  board.addEventListener('click', addBgc);

  board.addEventListener('click',  function(event){
    /*console.log(event.target); */
    /*event.target.style.backgroundColor = 'red';
});
  board.addEventListener('dblclick',  function(event){
    event.target.style.backgroundColor = 'blue';
  });
  board.removeEventListener('click', addBgc);
};

function addBgc(event){
  event.target.style.backgroundColor = 'red';
} */

window.onload = function () {
  var board = document.querySelector('.board-js');

  board.addEventListener('click', addX);
};

var centinel = true;

function addX(event){
  if (event.target.matches('td')&& event.target.textContent === '')
   if(centinel)
     event.target.textContent = 'X';

   else
    event.target.textContent = 'O';

  centinel = !centinel;

}
