function explainParseInt(value){
     console.log('Original Value ', value);
     let result = parseInt(value);
     console.log('After parseInt', result);
}

explainParseInt('123');
explainParseInt('123.45');
explainParseInt('123.45');

function explainParseFloat(value){
     console.log('Original Value ', value);
     let result = parseFloat(value);
     console.log('After parseFloat', result);
}

explainParseFloat('123.45');
explainParseFloat('123.45');