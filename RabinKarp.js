let fs = require('fs'), arg = process.argv, str, substr, ans = new Array();
str = fs.readFileSync(arg[2]).toString();
substr = fs.readFileSync(arg[3]).toString();
let n = str.length, m = substr.length, i = 0;
let hs = 0, k = 0, hs_sub = 0;
while (k <= m - 1){
    hs += str.charCodeAt(k) * Math.pow(2, n - k - 1);
    hs_sub += substr.charCodeAt(k) * Math.pow(2, n - k - 1);
    k++;
}
let jj, fl1;
console.time('Rabin-Karp');
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
    hs = (hs - str.charCodeAt(i) * Math.pow(2, m - 1)) * 2 + str.charCodeAt(i + m);
    i++;
}
console.log(ans.join(' '));
console.timeEnd('Rabin-Karp');