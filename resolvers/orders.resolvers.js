const {getAllOrder} = require("../model/order");

module.exports = {
    Query : {
        orders : (parent,args,context,info) => {
            return getAllOrder();
        }
    }
}