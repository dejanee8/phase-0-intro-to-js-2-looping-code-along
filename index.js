const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
console.log(writeCards(names, event));

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
}
}
countDown(10);

