let a = 1;
console.log(a)

fs.readFile('data.txt', 'utf-8', (err, data) => {
     console.log("data Read from this file");
     console.log(data);
});

let ans = 0;
for( i = 0 ; i <= 100; i++){
     ans+=i;
}

console.log(ans)