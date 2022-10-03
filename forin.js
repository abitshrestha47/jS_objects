let obj={a:1,b:2,c:3};
for(let v in obj){
    console.log(v);
}
//output : a b c
for(let v in obj){
    console.log(v + ": "+ obj[v]);
}
//output:  a:1 b:2 c:3
for(let v in obj){
    console.log(obj[v]);
}
//output: 1 2 3