var stack = [];
var tempRecord = [];
function listen () {
document.addEventListener('click', evaluate)
}
function evaluate () {
    var value = event.target.value
    if (!isNaN(value) === true || value === '.'){ 
        tempRecord += (value);
        document.getElementById('result').value = tempRecord
        }
      else
      switch (value){
        case 'CE': 
            tempRecord='';
            document.getElementById('result').value = 0;
            break; 
        case 'AC': 
            stack = [];
            tempRecord='';
            document.getElementById('result').value = 0;
            break;    
        case '÷': 
            stack.push(tempRecord);
            stack.push('/')
            document.getElementById('result').value = value
            tempRecord='';
            break;
        case 'x':
            stack.push(tempRecord);
            stack.push('*')
            document.getElementById('result').value = value
            tempRecord='';
            break;
        case '=': 
            stack.push(tempRecord);
            doMath()
            break;
        default:
            stack.push(tempRecord);
            stack.push(value);
            document.getElementById('result').value = value
            tempRecord='';
            break;
      }
    }
function doMath(){
      stack.push(tempRecord);
      var current = Number(stack[0]);     
      var i =0
      for ( i = 1; i < stack.length; i++) {
        var next = Number(stack[i+1]);
        var operator = stack[i];
        switch (operator){
          case '+':
          current += next
          break;
          case '-': 
          current -= next
          break;
          case '*':
          current *= next
          break;
          case '/': 
          current /= next
          break;
            }
       i++;
      }
    document.getElementById('result').value = current
    tempRecord='';
    }
listen()