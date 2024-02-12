let num1,num2;

// Prevent form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('basicCalc').addEventListener("submit", (event) => {
        event.preventDefault();
    });
    
    // Mapping Enter key
    document.getElementById('txtbox_area').addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            Answer();
        }
    });
});

//-------------Login------------------//
function AddAChar(inChar)
{
if(document.basicCalc.txtbox_area.value == null || document.basicCalc.txtbox_area.value == "0")
         document.basicCalc.txtbox_area.value=inChar
    else
 document.basicCalc.txtbox_area.value +=inChar;
}


function Clear() 
{
document.basicCalc.txtbox_area.value="0";
}

function Answer() 
{
    let finalValue = document.basicCalc.txtbox_area.value;
    
    try{
        let expression = calculateExpression(finalValue);
        document.basicCalc.txtbox_area.value= eval(expression);
    }catch (e) {
    if (e instanceof SyntaxError) {
        alert(e.message);
    }    
}
}

function calculateExpression(expression) {
    // Replace all instances of "plus" with "+"
    expression = expression.replace(/plus/gi, "+");
    expression = expression.replace(/sum/gi, "+");
    expression = expression.replace(/add/gi, "+");
    expression = expression.replace(/addition/gi, "+");
    // Replace all instances of "minus" with "-"
    expression = expression.replace(/minus/gi, "-");
    expression = expression.replace(/subtract/gi, "-");
    // Replace all instances of "divide" with "/"
    expression = expression.replace(/divide/gi, "/");
    
    // Replace all instances of "multiply" with "*"
    expression = expression.replace(/multiply/gi, "*");
    // Evaluate the expression and return the result
    expression = expression.replace(/power/gi, "**")
    return (expression);
}

function sqrt() 
{
	document.basicCalc.txtbox_area.value= Math.sqrt(document.basicCalc.txtbox_area.value); 
}
function percent() 
{
        document.basicCalc.txtbox_area.value=(document.basicCalc.txtbox_area.value)/100 ;
}

function Round() 
{
        document.basicCalc.txtbox_area.value=Math.round(document.basicCalc.txtbox_area.value); 
}
function negative()
{
document.basicCalc.txtbox_area.value =  0 - document.basicCalc.txtbox_area.value;
}

