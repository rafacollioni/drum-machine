let numBtn = document.querySelectorAll('.btn');

// Event Handlers dos Clicks

for (let i = 0; i < numBtn.length; i++){
   
    document.querySelectorAll('.btn')[i].addEventListener('click', function(){
        let clickButton = this.innerText
        drumPlay(clickButton)
    })
}

// Event Handlers das Teclas   

document.addEventListener("keydown", function(event){
    let tecla = event.key.toUpperCase();
    drumPlay(tecla);
})

// Função Principal para Reproduzir os Sons

function drumPlay(buttonInnerHTML){

    switch (buttonInnerHTML){
        case "A":
            let crash = new Audio('/sounds/crash.mp3')
            crash.play();
        break;
        case "S":
            let kick= new Audio('/sounds/kick-bass.wav')
            kick.play();
        break;
        case "D":
            let snare = new Audio('/sounds/snare.mp3')
            snare.play();
        break;
        case "H":
            let tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play();
        break;
        case "J":
            let tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play();
        break;
        case "K":
            let tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play();
        break;
        case "L":
            let tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play();
        break;
    }

}







