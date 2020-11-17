const fildForGameRef = document.querySelector("#fild-game")
const totalPointsRef = document.querySelector("#total")


let sum = 0;

// createCube();
// function getOffsetSum(elem) {

//     var top=0, left=0
//     while(elem) {
//         top = top + parseFloat(elem.offsetTop)
//         left = left + parseFloat(elem.offsetLeft)
//         elem = elem.offsetParent       
//     }
//     return {top: Math.round(top), left: Math.round(left)}
// }
// getOffsetSum(fildForGameRef)


// console.log(getOffsetSum(fildForGameRef))
 

function createCube() {
    const amount = (Math.random() * (2))
    for (let i = 0; i < amount; i += 1) {
    // Создаем кубик с размерами 
    let cube = document.createElement("div")
    cube.style.width = "40px"
    cube.style.height = "40px"
        cube.style.position = "absolute"
       
       
    // делаем рандомный цвет
    const colors = ["orange", "pink", "green", "red", "blue", "black", "yellow", "navy", "LawnGreen", "DeepPink",
    "MediumSpringGreen", "OrangeRed", "Fuchsia", "NavajoWhite", "Maroon", "Lime"]
     const max = colors.length - 1;
    const min = 0;
    const index = Math.round(Math.random() * (max - min) + min);
    const color = colors[index];
        cube.style.backgroundColor = `${color}`;
    
function getOffsetSum(elem) {
    
    let top = 0, left = 0;
    while(elem) {
        top = top + parseFloat(elem.offsetTop)
        left = left + parseFloat(elem.offsetLeft)

        elem = elem.offsetParent   
         // случайное положениe по Y 
    // const height = (Math.random() * (650 - top) + top)
        const height = (Math.random() * (630 - top) + top)
        cube.style.top = `${height}px`;

    // случайное положениe по X
    const width = (Math.random() * (950 - left) + left)
    cube.style.left = `${width}px`;
    }
    console.log(cube.style.top)
    console.log(fildForGameRef.getAttribute("width"))
    // return {height: Math.round(height), left: Math.round(left)}
}
getOffsetSum(fildForGameRef)


        
    // // случайное положениe по Y 
    // const height = (Math.random() * (650 - 200) + 200)
    //     cube.style.top = `${height}px`;

    // // случайное положениe по X
    // const width = (Math.random() * (900 - 210) + 210)
    // cube.style.left = `${width}px`;
        
    // Добавляем в DOM   
    fildForGameRef.append(cube)
    // /При клике мышкой кубик исчезает 
      
        cube.addEventListener("click", event =>
        {
            cube.remove();
            sum +=1
            console.log(sum);
            totalPointsRef.value = sum;
        }
)
}
  
}

let timerInput = document.querySelector("#time"); // Берём строку
let buttonRun = document.querySelector("#button");// Берём кнопку запуска
let timerShow = document.querySelector("#timer"); // Берём блок для показа времени


buttonRun.addEventListener('click', event => {
let  timeMinut = parseInt(1) * 60

timer = setInterval(function () {
  let    seconds =Number(timeMinut%60) // Получаем секунды
   let   minutes = Number(timeMinut/60%60) // Получаем минуты
  
    //  если время закончилось 
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
        
    } else { 
        // Сколько времени осталось
        setTimeout(createCube, 1000);
        timerInput.value = `${Math.trunc(minutes)}:${seconds}`;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)
})


let buttonStop = document.querySelector("#stop")
buttonStop.addEventListener("click", event =>
{ 
     clearInterval(timer);
}
)
