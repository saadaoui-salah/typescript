// functions
function getSum(num1, num2) {
    return num1 + num2;
}
var type = function (myVar) {
    if (typeof myVar == "string") {
        return "This is a String";
    }
    if (typeof myVar == "number") {
        return "This is a Number";
    }
    if (typeof myVar == "boolean") {
        return "This is a Boolean";
    }
};
console.log(type(true));
