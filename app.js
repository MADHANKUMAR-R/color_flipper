const btn=document.getElementById("btn")
const colortext=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']

btn.addEventListener('click',changebg)
function changebg(){
    let hexcolor='#'
    for(let i=0;i<6;i++){
        hexcolor+=randomHexvalue()
    }
    wrap.style.backgroundColor=hexcolor
    colortext.innerHTML=hexcolor
}
function randomHexvalue(){
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}

