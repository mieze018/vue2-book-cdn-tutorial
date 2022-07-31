
new Vue({
  el: "#app",
  data: {
    price: 100,
    count: 1
  },
  computed: {
    //priceが変わったら消費税込み金額を算出する
    sum: function () {
      return this.price * this.count;
    },
    taxIncludedSum: function () {
      return this.sum * 1.08;
    },
    taxIncluded: function () {
      return this.price * 1.08;
    },
  },
});
