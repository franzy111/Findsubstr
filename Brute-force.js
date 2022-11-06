let fs = require('fs'), arg = process.argv, str, substr, ans = new Array();
str = fs.readFileSync(arg[2]).toString();
substr = fs.readFileSync(arg[3]).toString();
let n = str.length, m = substr.length, i = 0, j;
console.time('Brute-force');
while (i <= n - m){
    j = 0;
    while (str.charAt(i + j) == substr.charAt(j)){
        j++;
        if (j == m){
            ans.push(i);;
            break;
        }
    }
    i++;
}
console.log(ans.join(' '));
console.timeEnd('Brute-force');