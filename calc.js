document.getElementById('result').addEventListener('input', function(e) {
    let input = e.target.value; 
    let input = prompt("Type here")
    console.log("Input: ", input); 

    if (e.key === "Enter") { 
        try {
            let result;
            switch(input) {
                case 'plus':
                    result = num + num;
                    break;
                case 'subtract':
                    result = num - num;
                    break;
                case 'multiply':
                    result = num * num;
                    break;
                case 'divide':
                    result = num / num;
                    break;
                default:
                    result = eval(input);  
            }
            console.log("Result: ", result);  
        } catch (error) {
            console.error("An error occurred: ", error);
        }
    }
});

