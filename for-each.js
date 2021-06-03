// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    let newArr = []; 

    arr.forEach((item) => {
        newArr.push(item.name);
    }); 

    return newArr;
    // return [];
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let reverseArr = []; 
    
    // arr.forEach((item) => {
    //     reverseArr.push(item.type);
    // });

    // return reverseArr.reverse();

    arr.forEach((item) => {
        reverseArr.unshift(item.type);
    });

    return reverseArr;
    // // return [];
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let spanishArr = []; 

    arr.forEach((item) => {
        spanishArr.push({ 
            nombre: item.name, 
            tipo: item
        });
    });

    return spanishArr;
    // return [];
}

