const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди.`;
}

const messages = orders.map(function (current, index) {
  return composeMessage.call(current, index);
});
// composeMessage.call(orders);

console.log(messages);
