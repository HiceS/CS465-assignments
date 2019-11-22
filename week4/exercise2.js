// const input = 231756;
reverse(231756);

function reverse (input){
    console.log('input: ' + input);
    const output = input.toString().split('').reverse().join('');
    console.log('output: ' + output);
}