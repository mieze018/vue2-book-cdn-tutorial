
new Vue({
  el: "#app",
  data: {
    price: 100,
    count: 1,
    myText: 'こんにちは',
    //入力可能文字数
    maxLength: 140,
  },
  computed: {
    //myTextの長さが変わったら、残りの文字数を算出する
    remainText: function () {
      return this.maxLength - this.myText.length;
    },
    //remainTextが変わったら、色を変える
    remainColor: function () {
      color = "green";
      if (this.remainText < 20) {
        color = "orange";
      }
      if (this.remainText < 1) {
        color = "red";
      }
      return color;
    },

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
