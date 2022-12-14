
// ** Написати функцію, котра приймає массив обьектів, та повертає массив унікальніх обьектів


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
        id: 4,
        name: 'Sasha',
        description: 'desc',
        obj: { name: 'Sasha' }
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

const makeCompare = (obj, item) => {
    let keys = Object.keys(obj);
    let isDif = false;


    for(let key of keys) {
        if ((obj[key] && typeof obj[key] === 'object') && item[key] !== null && typeof item[key] === 'object') {
            isDif =  makeCompare(obj[key], item[key]);
        }
        else {
            isDif =  obj[key] !== item[key];
        }

        if (isDif) {
            break;
        }
    }
    return isDif;
};

const getUniqObjects = (arr) => {

    const res = arr.length > 0 ? [arr[0]] : [];

    for (let i = 0; i <= arr.length -1; i++) {
        let diferents = 0;
            for (let j = 0; j <= res.length - 1; j++) {
                if (makeCompare(arr[i],res[j]) == true) {
                     diferents++
                }
            }
            diferents === res.length && res.push(arr[i]);
    }
    return res;
};

let listOfUniq: Array<object> | [] = getUniqObjects(d);




// ** Написати дженерик котрий має приймати агрумент та повертати його у зміненному типі


type TPrimitive = string | number | boolean;

interface IConvert<TPrimitive> {
    (value: String | Boolean | Number): TPrimitive;
}

const changeType = <TPrimitive>(name: string | number | boolean, cast: IConvert<TPrimitive>): TPrimitive  => {
    return cast(name);
}
