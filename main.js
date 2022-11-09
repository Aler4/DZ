// ** Написати функцію, котра приймає массив обьектів, та повертає массив унікальніх обьектів
let d = [
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
        obj: { name: 'Vanya', id: { 1: 7 } }
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
        obj: { name: 'a', id: 1 }
    },
    {
        id: 78,
        name: 'Tanya',
        description: 'Hmm',
        obj: { name: 'Vanya', id: 7 }
    },
    {
        id: 78,
        name: 'Tanya',
        description: 'Hmm',
        obj: { name: 'Vanya', id: 1 }
    },
    {
        id: 21,
        name: 'Vova',
        description: 'player',
        obj: { name: 'Nastya', id: 13 }
    }
];
const makeCompare = (obj, item) => {
    let keys = Object.keys(obj);
    let isDif = false;
    for (let key of keys) {
        if ((obj[key] && typeof obj[key] === 'object') && item[key] !== null && typeof item[key] === 'object') {
            isDif = makeCompare(obj[key], item[key]);
        }
        else {
            isDif = obj[key] !== item[key];
        }
        if (isDif) {
            break;
        }
    }
    return isDif;
};
const getUniqObjects = (arr) => {
    const res = [];
    let arrCopy = arr.slice();
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i; j <= arrCopy.length - 1; j++) {
            if (makeCompare(arr[i], arr[j]) === true) {
                res.push(...arrCopy.splice(j, 1));
            }
        }
    }
    return res;
};


const changeType = (name, cast) => {
    return cast(name);
};
