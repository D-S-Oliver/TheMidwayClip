//Serve para criar uma porta e acessar o link da domain, juntando-o com o App
const app = require("express")(); 
const PORT = process.env.PORT || 3000; 
//app.use('/', express.static(__dirname + '/public')); 
app.get("", (req, res) => { res.send("Hello World"); 
}); 
app.listen(PORT, () => { console.log(`App up at port ${PORT}`); 
}
);