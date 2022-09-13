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
},]


// to get specific data from given data
// condition satisfy cheyyunna 1st 1st element will return
function age(data) {
    return data.age ===3
}
let n = arr.find(age)
console.log(n)
console.log(typeof(n))
