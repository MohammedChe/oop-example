let myInput = document.getElementsByName('address');
let myBtn = document.getElementById('my_btn');

function addPTag(){
    let p = document.createElement('p');
    p.innerHTML = myInput[0].value;
    myInput[0].value = "";
    let h1 = document.getElementById('welcome');
    h1.parentElement.appendChild(p);
  }

myBtn.addEventListener('click', addPTag);


const enterPressed = function (event){

    if(event.key === "Enter"){
        // addPTag();
        myBtn.click();
    }
    
};

myInput[0].addEventListener('keypress', enterPressed);