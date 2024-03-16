//singleton
//obejct.create

//object_literalls
const mySym= Symbol("key1")
const jsUser={
    name: "Nazif",
    age:18,
    "full name" : "Bin Morshed",//jsUser."full name" possible na
    [mySym]: "mykey1"//symbol ebhabe define kora lage object er bhitor
}
console.log(jsUser.name)
console.log(jsUser['age'])
jsUser.age=20//value change kora jay
jsUser.greeting= function(){
    console.log("hello gayezzzzz")
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())
jsUser.greeting2= function(){
    console.log(`hello ${this.name}`)
}
console.log(jsUser.greeting2())