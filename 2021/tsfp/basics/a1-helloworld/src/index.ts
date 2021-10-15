
const displayMessage = (message: string) => {
    console.log(`[${new Date()}] :: Message: ${message}`);
};

let greetings: string = 'Hello World !!';
displayMessage(greetings);

greetings = 'Happy to code !';
displayMessage(greetings);

// console.log(`[${new Date()}] :: Message: ${greetings}`);
// console.log(`Message: ${greetings}`);
