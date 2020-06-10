var obj = { num : 2};

function getDetails (a,b,c) {
    return this.num + a+b+c;
}

let arr = [1,2, 3];
console.log(getDetails.call(obj, ...arr));
console.log(getDetails.apply(obj, arr));

let bound = getDetails.bind(obj);

console.log(bound(2,3,4))



