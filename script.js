root =document.documentElement;
const inputs=Array.from( document.querySelectorAll(".input-box input"))

inputs.forEach(input => input.addEventListener('change',updatebg))

function updatebg(){
    const color1 =this.value;
    console.log(color1)
    document.documentElement.style.setProperty(`--${this.id}`,this.value)
    
}
var rand = function(){
    return Math.round(Math.random()*255 +1)
}
var randomcolor= function(){
    
    return 'rgb('+rand()+","+ rand() + ","+ rand() + ")"
}
window.addEventListener('keydown', e=>{
if(e.keyCode==32)
{
root.style.setProperty("--color1",randomcolor())
root.style.setProperty("--color2",randomcolor())

}


})