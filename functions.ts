// functions

function getSum(num1: number, num2: number): number {
    return num1 + num2
}

let type = function (myVar: any): string {
    if (typeof myVar == "string"){
        return "This is a String"
    }
    if (typeof myVar == "number"){
        return "This is a Number"
    }
    if (typeof myVar == "boolean"){
        return "This is a Boolean"
    }
    
}

console.log(type(true))