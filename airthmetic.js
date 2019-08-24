// public 
const sum = function(x,y) {
 return x + y;
};

// private
const diff = function (x,y) {
 return x - y ; 
};

//module.exports.sum = sum;
//module.exports = {} by default
// module.exports.sum = sum;
module.exports = {
    sum: sum
}