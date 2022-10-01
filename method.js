function person(name,age){
    this.name=name;
    this.age=age;
    // this.changename=function(change){
    //     this.name=change;
    // }
    this.changename=change;
}
function change(name){
    return this.name=name;
}
let p1=new person('John',33);
console.log(p1);
p1.changename('Amy');
console.log(p1);