
const hexValues:string[] = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9","A", "B", "C", "D", "E", "F"];

const btn  = document.getElementById('btn')!;
const color = document.querySelector('.color')!;

btn.addEventListener('click', () => {

    generateColor(colorChange =>{
        color.textContent = colorChange;
        document.body.style.backgroundColor = colorChange;
    });
     
})

function generateColor(update:(color:string) => void){
    let hexColor:string = '#';
  for (let i = 0; i < 6; i++){
    hexColor += hexValues[getRandomColor()];
    }
    update(hexColor);

}

function getRandomColor (){
    return  Math.floor( Math.random()* hexValues.length); 
}