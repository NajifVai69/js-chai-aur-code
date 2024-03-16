const newArr= new Array(0,1,2,3,4,5)//shallow copy ja change korbo original eo change hobe
newArr.push(6)
console.log(newArr)
newArr.pop()
console.log(newArr)
newArr.unshift(8)//first element e add hoy
console.log(newArr)
newArr.shift()//first element remove hoy
console.log(newArr)
console.log(newArr.includes(0))//checking element ase naki
console.log(newArr.indexOf(2))
console.log(newArr.join())// array to string
console.log(newArr.slice(0,3))
//.slice e last element not included r previous array change hoy na
//.splice e last element included r previous array change hoye jay
const val1=newArr.splice(1,3)
console.log(newArr,val1)