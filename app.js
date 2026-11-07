let btns = document.querySelectorAll("button")
let dis = document.querySelector("#display")

let firstNumber ;
let secondNumber ;
let operator;


btns.forEach((r)=>{

    r.addEventListener("click", (e)=>{
        if(e.target.value !== "AC"){
            
            
            //here the operator
            if(e.target.classList.contains("operator")){
                operator = e.target.value;

                firstNumber = Number(dis.value);

                if(!firstNumber){
                    firstNumber = dis.value;
                    console.log('t')
                }
                dis.value = "";
                
            }
            
            else if(e.target.value === "="){
                secondNumber = dis.value;
                if(secondNumber){
                dis.value = "";
                console.log("sec: "+secondNumber)
                }else {
                    firstNumber = undefined;
                    secondNumber = undefined;
                }
            }
            
            else{
                dis.value += e.target.value;
            }
            
            if(firstNumber && secondNumber){
               let num1 =  Number(firstNumber);
               let num2 =  Number(secondNumber);
               
               let result;
               switch (operator){
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    if(num2 !== 0){
                        result = num1 / num2;  
                    }else{
                         result = 'ياغبي وش سويت !!!';
                    }
                         break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    alert('ياغبي وش سويت !!!')
               
                }
                
                dis.value = result;
                
                firstNumber = undefined;
                secondNumber = undefined;
                operator = undefined;
            }
            
        }else{
            dis.value = "";
            firstNumber = undefined;
            secondNumber = undefined;
            console.log(firstNumber+ ': <=first && second=> : '+secondNumber    )
        }
    })
})