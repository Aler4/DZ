let d = [
    {
        id: 1,
        name: 'Tolya',
        description: 'dsds',
        obj: null
    },
    {
        id: 1,
        name: 'Tolya',
        description: 'dsds',
        obj: { name: 'aa' }
    },
    {
        id: 1,
        name: 'Tolya',
        description: 'dsds',
        obj: { name: 'aa', id: {1: 7} }
    },
    {
        id: 4,
        name: 's',
        description: 'd',
        obj: { name: 'ag' }
    },
    {
        id: 3,
        name: 't',
        description: 'g',
        obj: { name: 'a', id: {1:3}}
    }
];

const findUniq = (obj, item) => {
    let keys = Object.keys(obj);
    let amount = 0;

    for (let key of keys) {
        if ((obj[key] && typeof obj[key] === 'object') && item[key] !== null && typeof item[key] === 'object') {

            findUniq(obj[key], item[key]) && amount++
        }
        obj[key] === item[key] && amount++
    }

    return amount > 0;

}

const getUniq = (arr) => {
    const res = [];
    let copyArr = arr.slice();

    for(let  item of arr) {
        let find = copyArr.filter(el => findUniq(item,el))
        find.length == 1 && res.push(item);
    }
    return res;
}

console.log(getUniq(d))
