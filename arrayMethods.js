//3 very important functions that are used in array-based stuff

//map
//maps the desired value to a new value (i.e. you can modify each array value without a loop)
//also can be used to resize something to fit a certain bound
const nums1 = [1, 2, 3];
console.log(nums1);
console.log(nums1.map((x) => (x * x)));
console.log(nums1.map((x) => (++x)));


//filter
var programmers = ["Reed", "John", "Jane"];
console.log(programmers);
programmers = programmers.filter((x) => !x.includes("J")); //similar to a mapping, however the code filters any x values that contain 'J'
programmers = programmers.filter((programmer) => !programmer.startsWith("J")); //In this example, this would work also
console.log(programmers);


//reduce
//works kind of like a for-loop, where accumulator is the integer that adds up over time
const nums2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sum = nums2.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sum);
// Expected output: 10