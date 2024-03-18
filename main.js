//Logs each hobby from the provided array.
function logHobbies(hobbies) {
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
logHobbies(["reading", "cooking", "listening", "painting", "sketching"]);
function logHobbiess() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
logHobbiess("reading", "cooking", "listening");
// Using template literals to define a multiline string
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a jog.\n2. Pursuing a creative hobby like painting or writing.\n3. Learning something new, such as a language or instrument.\n4. Relaxing with a good book or movie in the evening.";
// Logging the multiline string to the console
console.log(myIdealDay);
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
