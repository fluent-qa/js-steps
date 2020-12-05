const  status = 500;

if (status === 200) {
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const status1 = 'error';

if ( status1.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}
if (status === 200) console.log('OK!');
else if (status === 400) console.log('Error!');
else console.log('Unknown status');

const message = (status === 200) ? 'OK!' : 'Error!';

console.log(message);

const name = '';

if (name) { //empty is false
    console.log('We have a name!');
} else {
    console.log('No name provided');
}

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400: // or
    case 500: // or
        console.log('Error!');
        break;
    default: // else
        console.log('Unknown status');
        break;
}