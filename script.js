const root = document.documentElement
const theme = document.querySelectorAll('.theme > button')
const inputs =document.querySelectorAll('.color-box > input')

inputs.forEach(input => {
    input.addEventListener('input',updatecolor)
})
function updatecolor(e)
{
    let value = e.target.value
    var inputid =e.target.id
    var inputbg = `--bg-${inputid}`
    root.style.setProperty(inputbg, value)
}

theme.forEach((btn)=>{
    btn.addEventListener('click', handletheme)
})
function handletheme(e){
    switch(e.target.value)
    {
        case 'dark':
            root.style.setProperty('--bgcolor','black')
            root.style.setProperty('--fcolor','white')
            break;
        case 'light':
            root.style.setProperty('--bgcolor','white')
            root.style.setProperty('--fcolor','black')
            break;
        case 'calm':
            root.style.setProperty('--bgcolor','skyblue')
            root.style.setProperty('--fcolor','black')
            break;
    }
}
// var range =document.querySelector('.booth-slider')

function getrange(val)
{
    root.style.setProperty('--slider',val)
}

