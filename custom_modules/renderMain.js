var getNumOfRel = require('./getNumOfRel.js');
var getShop = require('./getShopifyData.js');
var addProducts2DB = require('./addsProducts2DB.js');
var getDefaultNum = require('./getDefaultNum.js');

function renderPromises(res,shop){


  Promise.all([
    getNumOfRel(res, shop),
    getShop(),
    getDefaultNum(shop)


  ]).then(function(values){
    return addProducts2DB(values, shop)


  }).then(function(values){



      values[0][0].render('layout', {
              title: 'Related Products',
              shop: values[0][3],
              numOfRelPass: values[0][1],
              defaultNum: values[1],
              relatedProducts: values[0][2]

    });

  } ).catch(reason => {
    console.log(reason)});


}

module.exports = renderPromises
