
const arr = [...Array(100).keys()]

arr.forEach(element => {
    if (element%3 == 0 && element%5 == 0){
        console.log('fizzbuzz');
    }else if(element%5 == 0){
        console.log('buzz')
    }else if(element%3 == 0){
        console.log('fizz')
    }else
        console.log(element);
});