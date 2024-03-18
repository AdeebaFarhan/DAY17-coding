//Logs each hobby from the provided array.
function logHobbies(hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(`I enjoy ${hobby}.`);
  });
}
logHobbies(["reading", "cooking", "listening", "painting", "sketching"]);

function logHobbiess(...hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(`I enjoy ${hobby}.`);
  });
}
logHobbiess("reading", "cooking", "listening");

// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Pursuing a creative hobby like painting or writing.
3. Learning something new, such as a language or instrument.
4. Relaxing with a good book or movie in the evening.`;

// Logging the multiline string to the console
console.log(myIdealDay);

function calculateArea(width: number, height: number): number {
  return width * height;
}

let calculateAreaArrow = (width: number, height: number): number =>
  width * height;

console.log(calculateAreaArrow(5, 7));
