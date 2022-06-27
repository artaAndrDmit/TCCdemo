import XLSX from 'xlsx'

const parse = (filename) => {
    const excelData = XLSX.readFile(filename)

    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }))
}
const statistics = parse('./data.xlsx')[0].data

for (const el of statistics) {
    el['type'] = el['Date Period'];
    delete el['Date Period']
}



const btcPriceAndDate = statistics[2]
let btcPrice = []

for (let k in btcPriceAndDate) {
    if (btcPriceAndDate.hasOwnProperty(k)) {
        btcPrice.push(btcPriceAndDate[k])
    }
}

btcPrice.pop()

const TCCSentimentScoreAndDates = statistics[0]
let TCCSentimentScore = []

for (let k in TCCSentimentScoreAndDates) {
    if (TCCSentimentScoreAndDates.hasOwnProperty(k)) {
        TCCSentimentScore.push(TCCSentimentScoreAndDates[k])
    }
}

TCCSentimentScore.pop()


const labels = btcPrice

const data = {
    labels: labels,
    datasets: [{
        label: 'TCC x BTC',
        backgroundColor: '#ff1f1f',
        borderColor: '',
        data: TCCSentimentScore,
    }]
}

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
)


