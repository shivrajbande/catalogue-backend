class ProductModel {
  productInfoModel() {
    return [
      {
        productId: "8746",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(0),
      },
      {
        productId: "1298",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(1),
      },
      {
        productId: "7488",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(2),
      },
      {
        productId: "1297",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(2),
      },
      {
        productId: "2344",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(2),
      },
      {
        productId: "2541",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(1),
      },
      {
        productId: "9871",
        name: "Tomatoes",
        price: "45",
        unit: "kg",
        images: [],
        shortDescript: "Tomatoes are healthy",
        longDescript: "Tomatoes are healthy to consume with great taste",
        seller: this.sellerDetails(2),
      },
    ];
  };

  // export const favouriteModel = [

  // ];
  sellerDetails(index) {
    const data =  [
      {
        name: "Shivraj Bande",
        address: "Dhodapur",
        pincode: "504101",
        email: "shivrajbande09@gmail.com",
        products: ["8746"],
      },
      {
        name: "Santosh Bande",
        address: "Dhodapur",
        pincode: "504101",
        email: "santoshbande09@gmail.com",
        products: ["1298", "2541"],
      },
      {
        name: "Shiva Bande",
        address: "Dhodapur",
        pincode: "504101",
        email: "shivabande09@gmail.com",
        products: ["7488", "9871", "2344", "1297"],
      },
    ];
    return data[index];

  }
}
module.exports = new ProductModel();
