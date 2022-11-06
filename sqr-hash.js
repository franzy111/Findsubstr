let fs = require('fs'), arg = process.argv, str, substr, ans = new Array();
str = fs.readFileSync(arg[2]).toString();
substr = fs.readFileSync(arg[3]).toString();
let n = str.length, m = substr.length, i = 0;
let hs = 0, k = 0, hs_sub = 0;
while (k <= m - 1){
    hs += Math.pow(str.charCodeAt(k), 2);
    hs_sub += Math.pow(substr.charCodeAt(k),2)
    k++;
}
let jj, fl1;
console.time('SQR-Hash');
while (i <= n - m) {
    if (hs === hs_sub) {
        jj = 0;
        for (let q = i; q < i + m; q++) {
            fl1 = true;
            if (str.charCodeAt(q) !== substr.charCodeAt(jj)) {
                fl1 = false;
                break;
            }
            jj++;
        }
        if (fl1 === true) {
            ans.push(i);
        }
    }
    hs = hs  + Math.pow(str.charCodeAt(i + m),2) - Math.pow(str.charCodeAt(i),2);
    i++;
}
console.log(ans.join(' '));
console.timeEnd('SQR-Hash');