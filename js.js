let burg = document.querySelector('.burger-menu');
let burgX = document.querySelector('#burger-x');

burg.addEventListener('click', () =>{
    let burgerTemp = document.querySelector('.burger-template');
    if(burgerTemp.style.display=='none' || burgerTemp.style.display==''){
        burgerTemp.style.display='flex'
    }else{
        burgerTemp.style.display='none'
    }
})

burgX.addEventListener('click', () => {
    let burgerTemp = document.querySelector('.burger-template');
    burgerTemp.style.display='none'
});

let ahref = document.querySelectorAll('a');

for(let a = 0; a < ahref.length; a++){
    ahref[a].addEventListener('click',(event) =>{
        event.preventDefault();
    })
}