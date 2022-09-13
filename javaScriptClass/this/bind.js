const obj = {
    a: "ashok",
    b: "liji",
    display: function () {
        a = 1;
        console.log(this)
    }
    ,c:()=>{
        console.log(this)
    }
}


const man ={
    x:"xavior",
    y:"yazi"

}

// this object maarathe irikkan bind function upayogikkam

obj.display=obj.display.bind(obj)
obj.display()
// bind aayi context  maaunnilla
var demo=obj.display
demo()


// bind // arrow 
obj.c()
// bind // arrow function bind cheyyan pattilla
console.log("c binding  arrow function bind cheyyan pattilla")

obj.c=obj.c.bind(obj)
obj.c()


//  apply ---,like bind
 