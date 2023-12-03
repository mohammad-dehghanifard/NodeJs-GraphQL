const {getAllOrder} = require("../data/order");

module.exports = {
    Query : {
        orders : (parent,args,context,info) => {
            return getAllOrder();
        }
    }
}