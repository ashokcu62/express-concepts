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
// call 

// obj.c ye a variable lott  eduth vilichal obj yile context kittanayi  call method vilikkam
//  every function has a  call inner function
//  call cheyyumbol context sett cheyyan call function vilikkam

var aa=obj.display
aa()
aa.call(obj)  
// obj yile this lott man le context add aakunnu
aa.call(man)


// context fixed
// bind function
