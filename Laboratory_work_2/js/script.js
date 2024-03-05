let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

console.log("\tЯкщо ім’я починається з літери J, то виводиться Goodbye SomeName, інакше – Hello SomeName:");

for (let name of names) {
    if (name.charAt(0).toLowerCase() === 'j') {
        speakGoodBye.speak(name);
    } else {
        speakHello.speak(name);
    }
}

console.log("");
console.log("\tЯкщо в імені парна кількість літер, то виводиться Goodbye SomeName, інакше – Hello SomeName:");

for (let name of names) {
    if (name.length % 2 === 0) {
        speakGoodBye.speak(name);
    } else {
        speakHello.speak(name);
    }
}



