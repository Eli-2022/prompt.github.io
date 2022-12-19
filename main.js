
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button')
    var input = document.querySelector('#name-input')
    var input2 = document.querySelector('#color-object')
    var input3 = document.querySelector('#color-background')
    var content = document.querySelector('#content')
  
  
  
    button.addEventListener('click', function() {
      content.innerHTML = `<p> Tiny cute isometric ${input2.value}  ${input.value}  soft lighting, neutral colors, high definition, 3d icon clay render, blender, ${input3.value}  background, physically based rendering, centered --v 4 </p>
      
      `  
    })
  })
  
