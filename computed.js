new Vue({
  el: "#app",
  data: {
    myNumber: 0,
    tweenedNumber: 0,
    restSec: 5,
    timerObj: null,
    bannedWord: "Decepticon",
    inputText: "Autobot",
    color: {
      R: 255,
      G: 150,
      B: 100,
    },
    price: 100,
    count: 1,
    myText: "こんにちは",
    //入力可能文字数
    maxLength: 140,
    findWord: "",
    items: [
      "OptimusPrime",
      "BumbleBee",
      "IronHide",
      "Prowl",
      "Jazz",
      "WheelJack",
      "GrimLock",
      "Megatron",
      "StarScream",
      "SoundWave",
      "LaserWave",
      'AstroTrain',
      'BlitzWing',
    ],
  },

  methods: {
    startTimer: function () {
      this.restSec = 5;
      this.timerObj = setInterval(() => {
        //1秒ごとに1減らす
        this.restSec--;
      }, 1000);
    }
  },

  watch: {
    //myNumberを監視して変更があったら実行
    myNumber: function () {
      TweenMax.to(this.$data, 1, {
        tweenedNumber: this.myNumber
      });
    },
    //残り秒数を監視する
    restSec: function () {
      if (this.restSec <= 0) {
        alert("終了");
        clearInterval(this.timerObj);
      }
    },

    //入力された文字入力を監視して、禁止文字が入力されたらアラートを表示する
    inputText: function (val) {
      if (val.includes(this.bannedWord)) {
        alert("禁止文字が入力されました");
        //入力文字列から禁止文字列を削除する
        this.inputText = this.inputText.replace(this.bannedWord, "");
      }
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0)
    },
    //RGB
    generateColor: function () {
      return `rgb(${this.color.R},${this.color.G},${this.color.B})`;
    },
    //this.findWordが変わったらその文字が含まれるアイテムを探す
    foundItems: function () {
      if (this.findWord)
        return this.items.filter(function (item) {
          //大文字小文字を区別しない
          return item.toLowerCase().indexOf(this.findWord.toLowerCase()) > -1;
        }, this);
      return this.items;
    },
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
