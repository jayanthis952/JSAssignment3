let n = 4;
let str = " ";
let count = 1;
for(let i = 0; i <= n; i++){
    for(let j = 1;j<=i; j++){
        str += count;
        count++;
    }
    str += "\n";
}
console.log(str);
