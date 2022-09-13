// printing the younger age persons details
const minYear = (...args) => {

    // new array undakkan
    var arr = args.map((item => item.db))

    console.log(Math.min(...arr))


}




class Students {
    constructor(name, db, place) {
        this.name = name
        this.db = db
        this.place = place
    }

    display() {
        console.log("name :", this.name)
        console.log("age", (new Date().getFullYear() - this.db))
        console.log("place", this.place)
    }


}

// util fuctions    
Students.minYear = function (...args) {

    // new array undakkan
    var arr = args.map((item => item.db))

    console.log(Math.min(...arr))


}


s = new Students("ashok", 2000, "palampatta")
s1 = new Students("sreejith", 2001, "palampatta")
s2 = new Students("navin", 2002, "palampatta")
Students.minYear(s, s1, s2)