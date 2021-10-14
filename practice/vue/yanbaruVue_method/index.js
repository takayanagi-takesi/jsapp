var app = new Vue({
  el: '#app',
  data: {
    customer_list: ['いぬ', 'きじ', 'さる'],
    item: {
      name: 'モンブラン',
      price: 100,
      amount: 2
    },
    message: 'HHHAAA',
  },
  computed: {
    sumPrice: function () {
      return this.item.price * this.item.amount
    },
    randomFromComputed: function () {
      return Math.random()
    }
  },
  methods: {
    randomFromMethods: function () {
      return Math.random()
    }
  }

})