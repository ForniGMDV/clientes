let correr = document.getElementById('correr');
correr.addEventListener('click', iniciar);

function calcularVelocidades(){
    let velocidades = [];
    for (let i = 0; i<=4; i++){
        velocidades.push(Math.random()*5 + 1);
    }
    return velocidades;
    console.log("hola")
}

function iniciar(){
    let corredores = document.querySelectorAll("div");
    let timer;

    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let velocidades = calcularVelocidades;
    let final = false;

    timer = setInterval(function(){
        if(!final){
            div1.style.setProperyy("left",div1.style.getPropertyValue("left") + velocidades[0] + "px");
        
            if(div1.style.getPropertyValue("left") >= 1080){
                final = true;
                alert("Ha ganado el caballo 1");
            }
        }
        else{
            clearInterval(timer);
        }
    }, 50);
}