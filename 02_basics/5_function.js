function addition(num1,num2){
    return num1+num2
}
console.log(addition(5,8))
function multiple_addition(...num1){
    return num1
}
console.log(multiple_addition(6,7,8,9))
function obj(anyobject){
    return `hello ${anyobject.user}. Your product price is ${anyobject.price}`
}
const user={user:"Nazif",price:"18"}
console.log(obj(user))