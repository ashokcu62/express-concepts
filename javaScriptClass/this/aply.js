const obj = {
    a: "ashok",
    b: "liji",
    display: function (a, b) {

        console.log(this, a, b)
    }

}
// nrml call
obj.display(1,2)
// var 
var c=obj.display
 c()  // normal err
// call
console.log("deffrence between call and apply")
console.log("call") 


obj.display.call(obj,1,2)
 
// aply
console.log("apply") 
obj.display.apply(obj,[1,2])
// apply second argument is an array