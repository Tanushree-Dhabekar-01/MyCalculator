let input = document.getElementById('result')
let buttons = document.querySelectorAll('button')
let string = ""
let arr = Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            input.value=string
        }
        else if(e.target.innerHTML=="AC"){
            string = "";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string = string.substring(0,string.length-1) //from 0 to length - 1
            // for ex. value is 1234 with postion 0123 then, x.substring(0,length-1) i.e. x.substring(0,3-1) i.e. x.substring(0,2) so, new value is 123 with position 012.
            input.value=string;
        }
        else{
            string += e.target.innerHTML
            input.value=string;
        }
    })
})