const ProductService = require("./product_service");

class ProductController{
     getAllProducts(req,res){
        try{
            const response = ProductService.getAllProductService();
            res.send(response);
    
        }catch(error){
            console.log(error);
            res.send("got error!").status(503);
        }
       
    }

}

module.exports = new ProductController();