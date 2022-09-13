class Class {
    display=()=>{
        console.log(this)
    }
}
var c = new Class()
c.display()

// function added to a variable
var e = c.display()

