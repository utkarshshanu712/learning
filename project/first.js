const buttons =document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1= document.querySelector('h1');
const h2 =document.querySelector('h2')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
      if(e.target.id === 'grey'){
        body.style.backgroundColor= e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor=e.target.id
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = "rgb(13, 13, 63)";
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id
      }
      const color = e.target.id;
      if (color==='grey'){
        h1.style.color='yellow'
        h2.style.color='yellow'
      }
      if (color==='white'){
        h1.style.color='grey'
        h2.style.color='grey'
      }
      if (color==='blue'){
        h1.style.color='white'
        h2.style.color='white'
      }
      if (color==='yellow'){
        h1.style.color='blue'
        h2.style.color='blue'
      }
    })
})
