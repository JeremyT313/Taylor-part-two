var tempFahr = prompt("What is the temperature today?");
var eventType = prompt("What type of event are you going to?");
 
if (eventType === "casual") {
    clothing = "something comfy";
} else if (eventType === "semi-formal") {
    clothing = "a polo";
} else if (eventType === "formal") {
    clothing = "a suit"
} else  {
  alert("Your answer must be casual, semi-formal, or formal!")
}

if (tempFahr <= 54) {
    jacket = "a coat";
} if (tempFahr >=55 && tempFahr <= 70) {
    jacket = "a jacket";
} if (tempFahr > 70) {
    jacket = "no jacket";
}

var result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${clothing} and ${jacket}.`
console.log(result)