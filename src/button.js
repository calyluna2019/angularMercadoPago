var mercadopago = require('mercadopago/index');


let preference = {
  items: [
    {
      title: 'Notebook',
      unit_price: 200,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});