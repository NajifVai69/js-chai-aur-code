const user ={
    userName:"Nazif",
    price: 999,
    welcome: function(){
        console.log(`${this.userName}, welcome to website`)//this objecct er context ei kaj kore normal function e undefined ashe
    }

}
user.welcome()//method object er bhitore function

const chai = () => {
    let username="najif"
    console.log(`${this.username}`)//arrow function object er bhitore this use korleo undefined dekhay
}//undefined
chai()
//()=>{} etai arrow function
/*    const addNum= (num1,num2) => {
    return num1+num2
    }*/
const addNum= (num1,num2) => num1+num2//same as previous one
console.log(addNum(5,7))// call korar jonne ekta variable store kora