root =document.documentElement;
const inputs=Array.from( document.querySelectorAll(".input-box input"))

inputs.forEach(input => input.addEventListener('change',updatebg))

function updatebg(){
    const color1 =this.value;
    console.log(color1)
    document.documentElement.style.setProperty(`--${this.id}`,this.value)
    
}