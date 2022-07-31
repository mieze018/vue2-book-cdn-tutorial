
new Vue({
  el: "#app",
  data: {
    price: 100
  },
  computed: {
    //priceが変わったら消費税込み金額を算出する
    taxIncluded: function () {
      return this.price * 1.08;
    },
  },
});
