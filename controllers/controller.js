const Inventory = require("../models/inventory");

//[{productId:123,quantity:10,operation:”add”}

module.exports.update = async function (req, res) {
  try {
    //extract the payload from body
    let payload = req.body.payload;

    //iterate for each item in payload
    for (let item in payload) {
      //extract info for each item
      const productId = item.productId;
      const quantity = item.quantity;
      const operation = item.operation;

      //get that product from db
      const product = await Inventory.findOne({ productId: productId });

      //perform the required operation
      if (operation == "add") {
        product.quantity += quantity;
        await product.save();
      } else if (operation == "subtract") {
        product.quantity -= quantity;
        await product.save();
      }
      else{
        return res.status(400).send("Operation not allowed");
      }
    }

    return res.end("Operation successful");
  } catch (e) {
    console.log("Error in updating inventory: ", e);
  }
};
