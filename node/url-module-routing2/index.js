const http = require('http')
const fs = require('fs')       //filesystem module
const url = require('url')       // url module for fix the url bar problem


http.createServer((req, res) => {
    // req.url 
    // url path : req.url


    const q = url.parse(req.url, true)  // ture argument for query will get object form

    //parsing  req.url to url   --imported module 
    // asigning to q
    console.log(q.pathname)         // parsing will separate the req.url datas 

    // q.pathname : exact path name
    //q.host : local host 3000
    // q.search : submited data  etc

    if (q.pathname === "/") {

        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //file details

            res.write(data)  //output
            res.end()
        })

    } else if (q.pathname === "/signup") {

        fs.readFile('signup.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) //file details

            res.write(data)  //output
            res.end()
        })
    } else if (q.pathname === "/login") {
        res.write("login")  //output
        res.end()
    } else if (q.pathname === "/signupaction") {           // signup action

        //q.query   get data  form submited data ==  will get on  q.query

        res.write("action")  //output
        res.write("<h1>"+q.query.name+"</h1>")
        console.log(q.query)
        
                        // q.query true result

                    // {
                    //     name: 'ashok',
                    //     age: '30',
                    //     place: 'palakkad'
                    //   }
         
        res.end()
    } else {
        res.write("error")  //output
        res.end()
    }

}).listen(3000, () => {
    console.log("server started")
})



