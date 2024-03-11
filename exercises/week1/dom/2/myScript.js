let myBtn = document.getElementById('my_btn');

myBtn.addEventListener('click', addPTag);

function addPTag(){
  let p = document.createElement('p');
  p.innerHTML = 'Hello World';
  let h1 = document.getElementById('welcome');
  h1.parentElement.appendChild(p);
}


