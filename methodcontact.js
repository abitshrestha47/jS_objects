//to print the person name and contact

function person(name,number){
    this.name=name;
    this.number=number;
    this.print=function(){
        console.log(this.name+': '+this.number);
    }
}

let p1=new person('John',24);
let p2=new person('Amy',19);
console.log(p2);

p1.print();
p2.print();