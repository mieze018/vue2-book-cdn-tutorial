const originalData = [
  ['種類', '数量'],
  ['幕の内弁当', 3],
  ['カルビ弁当', 4],
  ['オムライス', 5],
  ['冷やし中華', 1],
  ['ビビンバ丼', 3],
  ['ざるそば', 1],
  ['お好み焼き', 2],
]
google.charts.load('current', { packages: ['corechart', 'bar'] })
google.charts.setOnLoadCallback(drawChart)
function drawChart() {
  const data = google.visualization.arrayToDataTable(originalData)
  const options = {
    title: '好きなランチ',
    chartArea: { width: '50%' },
    is3D: true,
  }
  const chart = new google.visualization.PieChart(document.getElementById('pieChart'))
  chart.draw(data, options)
}

new Vue({
  el: "#app",
  data: {
    dataArray: originalData

  },
  methods: {
    addVote: function name(index) {
      const votedItem = this.dataArray[index]
      votedItem[1]++
      this.dataArray.splice(index, 1, votedItem)
      drawChart()
    }
  }
});
