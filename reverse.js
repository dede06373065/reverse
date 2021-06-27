function reverse(num){
    const limit=2147483648;
    const k=num<0?-1:1;
    const numNew= Number(String(Math.abs(num)).split('').reverse().join(''))
    const res=numNew>limit?0:numNew*k;
    console.log(res)
    return res
}

reverse(-456)

// const reverse = x => {
//     const limit = 2147483648;
//     const k = x < 0 ? -1 : 1;
//     const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//     return n > limit ? 0 : n * k;
// };

