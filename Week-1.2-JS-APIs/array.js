// Array Handbook

//array: push(), pop(), shift(), unshift(), splice(), slice() , concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output , play and learn by doing

//Push
function explainPush(array, element){
     console.log('Original Array ', array);
     let result = array.push(element);
     console.log('After push', result);
}

explainPush([1, 2, 3], 4);
explainPush([1, 2, 3], 4);

//Pop
function explainPop(array){
     console.log('Original Array ', array);
     let result = array.pop();
     console.log('After pop', result);
}

explainPop([1, 2, 3]);
explainPop([1, 2, 3]);

//Shift
function explainShift(array){
     console.log('Original Array ', array);
     let result = array.shift();
     console.log('After shift', result);
}

explainShift([1, 2, 3]);
explainShift([1, 2, 3]);

//Unshift
function explainUnshift(array, element){
     console.log('Original Array ', array);
     let result = array.unshift(element);
     console.log('After unshift', result);
}

explainUnshift([1, 2, 3], 4);
explainUnshift([1, 2, 3], 4);

//Splice
function explainSplice(array, start, deleteCount, ...items){
     console.log('Original Array ', array);
     let result = array.splice(start, deleteCount, ...items);
     console.log('After splice', result);
}

explainSplice([1, 2, 3], 1, 1, 4);
explainSplice([1, 2, 3], 1, 1, 4);

//Slice
function explainSlice(array, start, end){
     console.log('Original Array ', array);
     let result = array.slice(start, end);
     console.log('After slice', result);
}

explainSlice([1, 2, 3], 1, 2);
explainSlice([1, 2, 3], 1, 2);

//Concat
function explainConcat(array1, array2){
     console.log('Original Array ', array1);
     let result = array1.concat(array2);
     console.log('After concat', result);
}

explainConcat([1, 2, 3], [4, 5, 6]);
explainConcat([1, 2, 3], [4, 5, 6]);

//ForEach
function explainForEach(array, callback){
     console.log('Original Array ', array);
     let result = array.forEach(callback);
     console.log('After forEach', result);
}

explainForEach([1, 2, 3], (item) => console.log(item));
explainForEach([1, 2, 3], (item) => console.log(item));

//Map
function explainMap(array, callback){
     console.log('Original Array ', array);
     let result = array.map(callback);
     console.log('After map', result);
}

explainMap([1, 2, 3], (item) => item * 2);
explainMap([1, 2, 3], (item) => item * 2);

//Filter
function explainFilter(array, callback){
     console.log('Original Array ', array);
     let result = array.filter(callback);
     console.log('After filter', result);
}

explainFilter([1, 2, 3], (item) => item > 2);
explainFilter([1, 2, 3], (item) => item > 2);

//Reduce  
function explainReduce(array, callback, initialValue){
     console.log('Original Array ', array);
     let result = array.reduce(callback, initialValue);
     console.log('After reduce', result);
}

explainReduce([1, 2, 3], (acc, item) => acc + item, 0);
explainReduce([1, 2, 3], (acc, item) => acc + item, 0);

//Find    
function explainFind(array, callback){
     console.log('Original Array ', array);
     let result = array.find(callback);
     console.log('After find', result);
}

explainFind([1, 2, 3], (item) => item > 2);
explainFind([1, 2, 3], (item) => item > 2);

//Sort    
function explainSort(array){
     console.log('Original Array ', array);
     let result = array.sort();
     console.log('After sort', result);
}

explainSort([1, 2, 3]);
explainSort([1, 2, 3]);