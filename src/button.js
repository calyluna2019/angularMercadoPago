var mercadopago = require('mercadopago/index');

mercadopago.configure({
  access_token: 'TEST-5814867068644665-031919-a76cea150125ff1af9086ad8faaae298-68941930'
});


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