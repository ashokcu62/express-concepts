const obj1 = {
    name: "ashok",
    place: "palakkad",
    db:2000
    , display: function () {
        console.log("name:",this.name)
        console.log("age :", (new Date().getFullYear()-this.db))
        console.log("place : ",this.place)
}
}




console.log(obj1)
obj1.display()
