//Serve para criar uma porta e acessar o link da domain, juntando-o com o App
const app = require("express")(); 
const PORT = process.env.PORT || 3000; 
//app.use('/', express.static(__dirname + '/public')); 
app.get("", (req, res) => { res.send("EI... VOCÊ AÍ!\n ME DÁ UM DINHEIRO AÍ\n ME DÁ UM DINHEIRO AÍ\n ME DÁ UM DINHEIRO AÍ!\n"); 
}); 
app.listen(PORT, () => { console.log(`App up at port ${PORT}`); 
}
);