
// Написати функцію, котра приймає массив обьектів, та повертає массив унікальніх обьектів


let d: Array<object> = [
    {
        id: 1,
        name: 'Tolya',
        description: 'norm pacan',
        obj: null
    },
    {
        id: 1,
        name: 'Tolya',
        description: 'norm pacan',
        obj: { name: 'Tolya' }
    },
    {
        id: 1,
        name: 'Stas',
        description: 'Lorem',
        obj: { name: 'Vanya', id: {1: 7}}
    },
    {
        id: 4,
        name: 'Sasha',
        description: 'desc',
        obj: { name: 'Sasha' }
    },
    {
        id: 3,
        name: 't',
        description: 'g',
        obj: { name: 'a', id: 1}
    },
    {
        id: 78,
        name: 'Tanya',
        description: 'Hmm',
        obj: { name: 'Vanya', id: 7}
    },
    {
        id: 78,
        name: 'Tanya',
        description: 'Hmm',
        obj: { name: 'Vanya', id: 1}
    },
    {
        id: 21,
        name: 'Vova',
        description: 'player',
        obj: { name: 'Nastya', id: 13}
    }
];

const makeCompare = (obj: object, item: object): boolean => {
    let keys: Array<string> = Object.keys(obj);
    let amount: number = 0;

    for (let key of keys) {
        if ((obj[key] && typeof obj[key] === 'object') && item[key] !== null && typeof item[key] === 'object') {

            makeCompare(obj[key], item[key]) && amount++
        }
        obj[key] === item[key] && amount++
    }

    return amount > 0;
}

const getUniqObjects = (arr): Array<object> | [] => {
    const res = [];
    let copyArr: Array<object> = arr.slice();

    for(let  item of arr) {
        let find: Array<object> = copyArr.filter(el => makeCompare(item,el))
        find.length === 1 && res.push(item);
    }

    return res;
}

let listOfUniq: Array<object> | [] = getUniqObjects(d);

