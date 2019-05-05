let temp = "What is the temperature today?";
let event = "What type of event are you going to?";
const result1 = {
    casual: "something comfy",
    semiformal: "a polo",
    formal: "a suit",
}

let tempFahr = prompt(temp);
let eventType = prompt(event);

let clothing = result1[eventType];


if(tempFahr <= 54) {
    jacket = "a coat";
} else if(tempFahr >=55 && tempFahr <= 70) {
    jacket = "a jacket";
} else if(tempFahr > 70) {
    jacket = "no jacket";
}


const result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${clothing} and ${jacket}`
console.log(result)