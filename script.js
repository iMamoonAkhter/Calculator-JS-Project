let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.input').value = string;
      string = "";
    }
    else if(e.target.id == 'memory-plus'){
      memory += parseFloat(string);
      string = '';
      document.querySelector('.input').value = memory;
    }
    else if(e.target.id == 'memory-minus'){
        memory -= parseFloat(string);
        string = '';
        document.querySelector('.input').value = memory;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      memory = 0;
      document.querySelector('.input').value = string;
    }
    else{
      string = string + e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  })
})