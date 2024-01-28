document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');

    function myFunction(_event) {
        if (e.key === "Enter") {
            let result;
                switch(input) {
                    case 'plus':
                        result = number + factor;
                        break;
                    case 'minus':
                        result = number - factor;
                        break;
                    case 'multiplier':
                        result = number * factor;
                        break;
                    case 'divide':
                        result = number / factor;
                        break;
                    default:
                        result = eval(input);
                }
            }
    }

    function myFunction(event) {
        const value = event.target.value;
        if (value === '=') {
            try {
                result.value = eval(result.value);
            } catch (e) {
                result.value = 'Error';
            }
        } else if (value === 'C') {
            result.value = '';
        } else {
            result.value += value;
        }
    }

    document.querySelectorAll('.button').forEach(button => {
        if (button.value === '=') {
            button.addEventListener('click', evaluateExpression);
        } else {
            button.addEventListener('click', myFunction);
        }
    });
});

