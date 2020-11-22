const fildForGameRef = document.querySelector("#fild-game")
const totalPointsRef = document.querySelector("#total")


let timeMinut = parseInt(1) * 60
let sum = 0;
let cubesNum = 0;

function changeColor(element) {
    const colors = ["orange", "pink", "green", "red", "blue", "black", "yellow", "navy", "LawnGreen", "DeepPink",
    "MediumSpringGreen", "OrangeRed", "Fuchsia", "NavajoWhite", "Maroon", "Lime"]
     const max = colors.length - 1;
    const min = 0;
    const index = Math.round(Math.random() * (max - min) + min);
    const color = colors[index];
    element.style.backgroundColor = `${color}`;
}
function getOffsetSum(elem, oneCube) {
    
    let top = 0, left = 0;
    while(elem) {
        top = top + parseFloat(elem.offsetTop)
        left = left + parseFloat(elem.offsetLeft)

        elem = elem.offsetParent 
        // console.log(fildForGameRef.clientHeight)
         // случайное положениe по Y 
        const height = (Math.random() * (630 - top) + top)
        oneCube.style.top = `${height}px`;
    // случайное положениe по X
    const width = (Math.random() * (950 - left) + left)
    oneCube.style.left = `${width}px`;
    }
   
}

var modal = document.getElementById("my_modal");
 var btn = document.getElementById("btn_modal_window");
 var span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function createCube() {
    const amount = Math.round(Math.random() * (2 - 0) + 0)
    cubesNum = cubesNum + amount;
    // if (cubesNum < 10) {
        for (let i = 0; i < amount; i += 1) {
        
            // Создаем кубик с размерами 
            let cube = document.createElement("div")
           
            cube.style.width = "40px"
            cube.style.height = "40px"
            cube.style.position = "absolute"

            changeColor(cube)
            getOffsetSum(fildForGameRef, cube)
        
        
            // // Добавляем в DOM   
            fildForGameRef.append(cube)

             buttonGame.addEventListener("click", event => {
            cube.remove();
             })

            // /При клике мышкой кубик исчезает 
            cube.addEventListener("click", event => {
                // fildForGameRef.removeChild(cube)
                cube.remove();
                // cube.classList.add("hidden")
                sum += 1
                console.log(sum);
                totalPointsRef.textContent = sum;
                cubesNum = cubesNum - 1
            },
                console.log(cubesNum),
            )
            if (modal.style.display == "block") { cube.remove();}
        }
  
    // }
}

let timerInput = document.querySelector("#time");
let buttonRun = document.querySelector("#button");
let timerShow = document.querySelector("#timer"); 
const buttonGame = document.querySelector("#button-game")




 
buttonRun.addEventListener('click', time)
// buttonRun.addEventListener('click', event =>
// {
//     if (buttonRun.textContent == "PAUSED") {
//     buttonRun.textContent = "START";
//     }
//     else if ( buttonRun.textContent == "START") {buttonRun.textContent = "PAUSED"}
// })




function time() {
    // buttonRun.textContent = "PAUSED";
     if (timeMinut > 0){
timer = setInterval(function () {
  let    seconds =Number(timeMinut%60) // Получаем секунды
   let   minutes = Number(timeMinut/60%60) // Получаем минуты
timerInput.textContent = `${Math.trunc(minutes)}:${seconds}`
    //  если время закончилось 
    if (timeMinut === 0) {
        // Таймер удаляется
        clearInterval(timer);
        buttonRun.removeEventListener('click', time)
        timerInput.textContent = '0:0'
        modal.style.display = "block";
        buttonRun.textContent = "START";
        // buttonRun.setAttribute("disabled", "disabled") 
        // Выводит сообщение что время закончилось
        // alert("Время закончилось");
    } else { 
        
        // Сколько времени осталось
        setTimeout(createCube, 1000);
        timerInput.textContent = `${Math.trunc(minutes)}:${seconds}`; 
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)
}
}

    let buttonStop = document.querySelector("#stop")

buttonStop.addEventListener("click", event =>
     
    clearTimeout(timer),
    // buttonRun.removeAttribute("disabled")
)
        
       

buttonGame.addEventListener("click", event => {
         
     timeMinut = parseInt(1) * 60;
  
   time()  
 })



    // buttonRun.removeAttribute("disabled","disabled"),
    // buttonRun.setAttribute("disabled", "disabled") 
