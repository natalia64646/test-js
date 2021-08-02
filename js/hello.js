
// const age =  prompt('how old are you?');
// const newAge = Number(age) + 1;
// const endMassegeKids = 'Cool, you will soon ' + newAge;
// const endMassegeYoung = 'Only ' + age + ', of you are so young!';
// const endMassegeOld = 'A wonderful age!';

// if (age > 40){
// alert(endMassegeOld);
// }
// if (40 >= age >= 20){
// alert (endMassegeYoung);
// }
// else{
// alert (endMassegeKids);
// }

const year = Number(prompt('Enter year of birth'));
const age = difference(2021, year);
function foundAge (a, b){
    const ageDifference =  a - b;
    return ageDifference;
}

alert (ageDifference);



