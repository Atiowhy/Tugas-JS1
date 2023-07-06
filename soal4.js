let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city:"Gwenborough",
    zipcode: '92998-3874',
  },
  phone: '8677466472',
  website: 'hildegard.org',
};

const newData = {
    ...data,
    name:"Atio Wahyudi Saputra",
    email:"atiowahyudi02@gmail.com",
    hobby:"playing music"
}

console.log(newData);

const {address: {street, city}} = data

console.log(street);
console.log(city);
