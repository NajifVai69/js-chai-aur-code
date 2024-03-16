const pathaoUser= new Object()//singleton object
const val={}//non singleton object
pathaoUser.name="Nazif"
pathaoUser.id="21201484"
const regularUser={
    email:"some@gmail.com",
    fullname: {
        firstname:"SAMIN",
        lastname:"yaser"
    }
}
console.log(regularUser.fullname.firstname)
const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3=Object.assign({},obj1,obj2)// can use .assign without {}
const obj4={...obj1,...obj2}//.assign er kaj spread diyeo kora jay
console.log(obj4);
console.log(obj3)
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))
console.log(regularUser.hasOwnProperty('email'))//key checking
