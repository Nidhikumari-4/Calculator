let display = document.getElementById('display'); 
let buttons = Array.from(document.getElementsByClassName('button')); //Array.from()-returns an array from any object with a length property.
// we are using it here so that we can use array fun on buttons

buttons.map(button => {
    button.addEventListener('click', (e) => {
        //innerText property sets or returns the text content of an element.
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                //try defines a block of code to be tested for errors while it is being executed.
                try{
                //eval() evaluates or executes an argument.
                display.innerText = eval(display.innerText);
                //catch defines a block of code to be executed, if an error occurs in the try block.
                }catch{
                    display.innerText = 'Error!';
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});