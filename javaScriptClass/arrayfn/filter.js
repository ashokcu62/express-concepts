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

console.log(arr)


// id kk anusarich full value return aakunnu
// filter always return an array

arr2 = arr.filter((item) => {
    return item.place === "palakkad"
})

console.log(arr2)

// using index to filter
arr3=arr.filter((item,index)=>{
    return index <2
})
console.log(arr3)