let d= [
    {
        id: 1,
        name: 'Tolya',
        description:'dsds',
        obj:null
    },
    {
        id: 1,
        name: 'Tolya',
        description:'dsds',
        obj:{name: 'aa'}
    },
    {
        id: 1,
        name: 'Tolya',
        description:'dsds',
        obj:{name: 'aa'}
    },
    {
        id: 2,
        name: 'ss',
        description:'dsds',
        obj:{name: 'aa'}
    }
]

const getArray = (arr) => {
    for(let i = 0; i < arr.length - 1, i++;) {
       console.log(arr[i])
    }
}
getArray(d)
