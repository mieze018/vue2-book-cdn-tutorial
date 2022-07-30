
// ハイライトを実行
hljs.initHighlightingOnLoad();
const initClickOnce = () => alert('いいね')

const teaList = [
  { name: "ダージリン", price: 600 },
  { name: "アールグレイ", price: 500 },
  { name: "セイロン", price: 500 },
];
new Vue({
  el: "#app",
  data: {
    myNumArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    langTableHeader: ["プログラミング言語", 2018, 2013, 2008, 2003, 1998],
    langRanking: [
      ['Java', 1, 2, 1, 1, 16],
      ['C', 2, 1, 2, 2, 1],
      ['C++', 3, 4, 3, 3, 2],
      ['Python', 4, 7, 6, 11, 23],
      ['JavaScript', 7, 10, 8, 7, 20]
    ],
    isShow: true,
    myVisible: false,
    isClicked: false,
    count: 0,
    mySelectColors: [],
    mySelectColor: '',
    picked: 'red',
    myAgree: false,
    myChecks: [],
    myCheck: false,
    myClass: "strike-through",
    darkClass: "dark",
    isOn: true,
    myColor: "#E08000",
    myURL: "https://www.ymori.com",
    fileName: 'face1.png',
    myTeaList: teaList,
    myTea: { name: 'ダージリン', price: 600 },
    myArray: ['ダージリン', 'アールグレイ', 'セイロン'],
    myPrice: "500",
    myName: "桃太郎",
    myNumber: "12345",
    myText: "Hello",
    myBool: true,
    myHtml: "<h1>Hello</h1>",
    myText: "Hello",
  },
  methods: {
    evenData: function () {
      this.myNumArray = this.myNumArray.filter(function (num) {
        return num % 2 === 0;
      });
    },
    sortData: function (listData) {
      return listData.sort((a, b) => a < b ? -1 : 1)
    },
    addList: function () {
      this.myArray.push('[末尾に追加]');
    },
    addObj: function (index) {
      this.myArray.splice(index, 0, '[追加]');
    },
    changeObj: function (index) {
      this.myArray.splice(index, 1, '[変更]');
    },
    deleteObj: function (index) {
      this.myArray.splice(index, 1);
    },
    handleNice: function () { this.isShow = false },
    showAlert: function () { alert('Enterキーを押しました') },
    countUp: function (value = 1) { this.count += value },
    clickOnce: function () { this.isClicked = true; initClickOnce() }
  }
});
