let a = 'hello, yahoo, hi';
console.log(a.split(',')); 


let b = [8, 9, 7];
console.log(b.join(','));

b.forEach(function (elem, index) {
    console.log(index);
    console.log(elem*3);
    console.log('---');
});
console.log(b);

