// ** Написати функцію, котра приймає массив обьектів, та повертає массив унікальніх обьектів
const changeType = (name, cast) => {
    return cast(name);
};
let foo = changeType('foo', String);
let bar = changeType('1', Boolean);
console.log(foo, bar);
