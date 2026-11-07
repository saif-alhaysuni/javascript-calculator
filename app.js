const keys = document.querySelector('.calc-keys');
const display = document.getElementById('display');

keys.addEventListener('click', (event) => {
    
    let target = event.target;
    let tarValue = target.value;
    

    if(!target.matches('button')){ return ;}
        
    if(target.classList.contains('equal')){

        try{
            let result = eval(display.value);
            display.value = parseFloat(result.toFixed(5));

        }catch(e){
            if(e instanceof SyntaxError){
                alert('You have an error, I will remove your operation')
                display.value = '';
            }
        }

    }else if(target.classList.contains('all-clear')){
        
        display.value = '';

    }else if(target.classList.contains('delete')){
    
        display.value = display.value.slice(0, -1);
    
    }else{

        display.value += tarValue;

    }
    
})

