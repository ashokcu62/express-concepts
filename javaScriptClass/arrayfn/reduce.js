const arr = [{
    name: "ashok",
    place: "palakkad",
    age: 8
}, {
    name: "liji",
    place: "palakkad",
    age: 7
}, {
    name: "naveen",
    place: "palakkad",
    age: 3
}, {
    name: "rajeev",
    place: "palakkad",
    age: 2
}, {
    name: "umair",
    place: "palakkad",
    age: 1
}, {
    name: "umair",
    place: "kozhikkod",
    age: 1
},]

// sum of ages using reduce
var arr1 = arr.reduce((total, item, index) => {
    return total + item.age
}, 0)

console.log(arr1)
var 