function myFirst() {
    myDisplayer("Good bye");
}

function mySecond(callback) {
    myDisplayer("Hello");
    callback();
}

function myDisplayer(message) {
    console.log(message);
}

mySecond(myFirst);
