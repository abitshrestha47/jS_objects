// var person={
//     name:'John',age:42,favColor:'green'
// };
//can only create the single object

function person(name,age,color){
    this.name=name;//this refers to current value not a variable
    this.age=age;
    this.favColor=color;
}
var p1=new person('John',42,'green');
var p2=new person('Amy',21,'red');

console.log(p1.name);
console.log(p2.favColor);