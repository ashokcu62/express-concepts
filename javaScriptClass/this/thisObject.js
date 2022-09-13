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

obj.display()
// this eppozum markkondirikkum
// ivide direct obj.display fn vilichal
// object le this vilikkunnu
// var lott aakki purath vlikkkumbol ath purathe this print cheyyunnu  parent object
var d1 = obj.display
d1()

// arrow function aakkial ezhuthiya stalathe context mathrame work aaku
// function nte context parent function aan 
// parent function window aan
obj.c()




