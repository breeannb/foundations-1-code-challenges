// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let newObj = {};

    Object.keys(someObject).forEach(element => {
        newObject[element.toUpperCase()] = someObject[element]; 
        console.log(newObjects)
    })
    
    // for (const [key, value] of Object.entries(someObject)) {
    //     newObj[key.toUpperCase()] = value;
    // }

    return newObj;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return `${Object.keys(someObject)}`;
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    let arr = []

    return Object.entries(someObject);
}
