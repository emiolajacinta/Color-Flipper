const colors = ["green", "red", "rgba(133,122,200)", "#f15035",'blue' ];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click',()=>{
  let backGround =  document.body;
    const randomNumber = Math.floor(Math.random()*colors.length)

     backGround.style.backgroundColor = colors[randomNumber]
    
   color.innerHTML = colors[randomNumber]
   console.log(document.body)
})