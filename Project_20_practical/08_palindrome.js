let n = 121, t = n, rev = 0;
while (t > 0) {
    rev = rev * 10 + t % 10;
    t = Math.floor(t / 10);
}
console.log(n === rev);
export {};
