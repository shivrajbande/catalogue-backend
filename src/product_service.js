const ProductModel = require("./product_model");

class ProductService {
  getAllProductService() {
    return ProductModel.productInfoModel();
  }
}

module.exports = new ProductService();
