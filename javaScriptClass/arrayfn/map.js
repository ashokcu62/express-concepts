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


// uses to create new array
namearr=arr.map((item)=>{
    return item.name
})
console.log(namearr)

// adding country to all elements
newarr=arr.map((item)=>{
    return {
        ...item,
        country:"india"
    }
})
console.log(newarr)