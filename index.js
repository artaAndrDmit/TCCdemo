// import XLSX from 'xlsx'

// const parse = (filename) => {
//     const excelData = XLSX.readFile(filename)

//     return Object.keys(excelData.Sheets).map((name) => ({
//         name,
//         data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
//     }))
// }
// let statistics = parse('./data.xlsx')[0].data
// statistics = JSON.stringify(statistics)

// for (const el of statistics) {
//     el['type'] = el['Date Period'];
//     delete el['Date Period']
// }

const statistics = [
    {
        '25/10/2021 - 31/10/2021': 76,
        '01/11/2021 - 07/11/2021': 70,
        '08/11/2021 - 14/11/2021': 73,
        '15/11/2021 - 21/11/2021': 50,
        '22/11/2021 - 28/11/2021': 52,
        '29/11/2021 - 05/12/2021': 39,
        '06/12/2021 - 12/12/2021': 40,
        '13/12/2021 - 19/12/2021': 37,
        '20/12/2021 - 26/12/2021': 57,
        '27/12/2021 - 02/01/2022': 47,
        '03/01/2022 - 09/01/2022': 35,
        '10/01/2022 - 16/01/2022': 39,
        '17/01/2022 - 23/01/2022': 25,
        '24/01/2022 - 30/01/2022': 30,
        '31/01/2022 - 06/02/2022': 37,
        '07/02/2022 - 13/02/2022': 47,
        '14/02/2022 - 20/02/2022': 31,
        '21/02/2022 - 27/02/2022': 20,
        '28/02/2022 - 06/03/2022': 25,
        '07/03/2022 - 13/03/2022': 22,
        '14/03/2022 - 20/03/2022': 31,
        '21/03/2022 - 27/03/2022': 42,
        '28/03/2022 - 03/04/2022': 45,
        '04/04/2022 - 10/04/2022': 38,
        '11/04/2022 - 17/04/2022': 31,
        '18/04/2022 - 24/04/2022': 29,
        '25/04/2022 - 01/05/2022': 24,
        '02/05/2022 - 08/05/2022': 18,
        '09/05/2022 - 15/05/2022': 11,
        '16/05/2022 - 22/05/2022': 16,
        '23/05/2022 - 29/05/2022': 17,
        '30/05/2022 - 05/06/2022': 18,
        type: 'TCC Sentiment Score'
    },
    {
        '25/10/2021 - 31/10/2021': '-',
        '01/11/2021 - 07/11/2021': -7,
        '08/11/2021 - 14/11/2021': 3,
        '15/11/2021 - 21/11/2021': -23,
        '22/11/2021 - 28/11/2021': 2,
        '29/11/2021 - 05/12/2021': -12,
        '06/12/2021 - 12/12/2021': 1,
        '13/12/2021 - 19/12/2021': -3,
        '20/12/2021 - 26/12/2021': 20,
        '27/12/2021 - 02/01/2022': -10,
        '03/01/2022 - 09/01/2022': -12,
        '10/01/2022 - 16/01/2022': 4,
        '17/01/2022 - 23/01/2022': -13,
        '24/01/2022 - 30/01/2022': 5,
        '31/01/2022 - 06/02/2022': 7,
        '07/02/2022 - 13/02/2022': 10,
        '14/02/2022 - 20/02/2022': -16,
        '21/02/2022 - 27/02/2022': -11,
        '28/02/2022 - 06/03/2022': 4,
        '07/03/2022 - 13/03/2022': -3,
        '14/03/2022 - 20/03/2022': 9,
        '21/03/2022 - 27/03/2022': 11,
        '28/03/2022 - 03/04/2022': 4,
        '04/04/2022 - 10/04/2022': -7,
        '11/04/2022 - 17/04/2022': -7,
        '18/04/2022 - 24/04/2022': -2,
        '25/04/2022 - 01/05/2022': -5,
        '02/05/2022 - 08/05/2022': -6,
        '09/05/2022 - 15/05/2022': -7,
        '16/05/2022 - 22/05/2022': 6,
        '23/05/2022 - 29/05/2022': 1,
        '30/05/2022 - 05/06/2022': 1,
        type: 'TCC Sentiment Score Change'
    },
    {
        '25/10/2021 - 31/10/2021': 61351.32,
        '01/11/2021 - 07/11/2021': 63309.13,
        '08/11/2021 - 14/11/2021': 65505.02,
        '15/11/2021 - 21/11/2021': 58671.21,
        '22/11/2021 - 28/11/2021': 57338.56,
        '29/11/2021 - 05/12/2021': 49484.22,
        '06/12/2021 - 12/12/2021': 50089.63,
        '13/12/2021 - 19/12/2021': 46687.2,
        '20/12/2021 - 26/12/2021': 50801.78,
        '27/12/2021 - 02/01/2022': 47299.06,
        '03/01/2022 - 09/01/2022': 41876.52,
        '10/01/2022 - 16/01/2022': 43104.35,
        '17/01/2022 - 23/01/2022': 36282.47,
        '24/01/2022 - 30/01/2022': 37881.76,
        '31/01/2022 - 06/02/2022': 42380.87,
        '07/02/2022 - 13/02/2022': 42074.99,
        '14/02/2022 - 20/02/2022': 39389.05,
        '21/02/2022 - 27/02/2022': 37717.08,
        '28/02/2022 - 06/03/2022': 38408.38,
        '07/03/2022 - 13/03/2022': 37793.01,
        '14/03/2022 - 20/03/2022': 41287.24,
        '21/03/2022 - 27/03/2022': 46850.01,
        '28/03/2022 - 03/04/2022': 46422.16,
        '04/04/2022 - 10/04/2022': 42165.96,
        '11/04/2022 - 17/04/2022': 39683.54,
        '18/04/2022 - 24/04/2022': 39464.56,
        '25/04/2022 - 01/05/2022': 38473.05,
        '02/05/2022 - 08/05/2022': 34027.91,
        '09/05/2022 - 15/05/2022': 31290.05,
        '16/05/2022 - 22/05/2022': 30260.87,
        '23/05/2022 - 29/05/2022': 29447.07,
        '30/05/2022 - 05/06/2022': 29901.54,
        type: 'Bitcoin Price'
    },
    {
        '25/10/2021 - 31/10/2021': 2650574599713.92,
        '01/11/2021 - 07/11/2021': 2771805417057.97,
        '08/11/2021 - 14/11/2021': 2831656546809.49,
        '15/11/2021 - 21/11/2021': 2580044067491.78,
        '22/11/2021 - 28/11/2021': 2528631942701.45,
        '29/11/2021 - 05/12/2021': 2270428107969.04,
        '06/12/2021 - 12/12/2021': 2279674548391.86,
        '13/12/2021 - 19/12/2021': 2186135580293.45,
        '20/12/2021 - 26/12/2021': 2395374420294.44,
        '27/12/2021 - 02/01/2022': 2244468324015.36,
        '03/01/2022 - 09/01/2022': 1963874350153.33,
        '10/01/2022 - 16/01/2022': 2068725259130.44,
        '17/01/2022 - 23/01/2022': 1461489035234.38,
        '24/01/2022 - 30/01/2022': 1593467300754.09,
        '31/01/2022 - 06/02/2022': 1907954588100.24,
        '07/02/2022 - 13/02/2022': 1846420503215.4,
        '14/02/2022 - 20/02/2022': 1702443214925.09,
        '21/02/2022 - 27/02/2022': 1679262250224.08,
        '28/02/2022 - 06/03/2022': 1685157074235.84,
        '07/03/2022 - 13/03/2022': 1660947430280.91,
        '14/03/2022 - 20/03/2022': 1820443880342.2,
        '21/03/2022 - 27/03/2022': 2072113098944.3,
        '28/03/2022 - 03/04/2022': 2127784050912.56,
        '04/04/2022 - 10/04/2022': 1921685330321.77,
        '11/04/2022 - 17/04/2022': 1814136323009.43,
        '18/04/2022 - 24/04/2022': 1795755004377.1,
        '25/04/2022 - 01/05/2022': 1717338104353.63,
        '02/05/2022 - 08/05/2022': 1554047723396.08,
        '09/05/2022 - 15/05/2022': 1335424363008.47,
        '16/05/2022 - 22/05/2022': 1279584002314.6,
        '23/05/2022 - 29/05/2022': 1209487532531.6,
        '30/05/2022 - 05/06/2022': 1214329204523.61,
        type: 'TOTAL Market Cap'
    },
    {
        '25/10/2021 - 31/10/2021': '-',
        '01/11/2021 - 07/11/2021': '-',
        '08/11/2021 - 14/11/2021': '-',
        '15/11/2021 - 21/11/2021': 67.02,
        '22/11/2021 - 28/11/2021': 60.88,
        '29/11/2021 - 05/12/2021': 53.34,
        '06/12/2021 - 12/12/2021': 45.23,
        '13/12/2021 - 19/12/2021': 42.05,
        '20/12/2021 - 26/12/2021': 43.46,
        '27/12/2021 - 02/01/2022': 45.42,
        '03/01/2022 - 09/01/2022': 44.1,
        '10/01/2022 - 16/01/2022': 44.5,
        '17/01/2022 - 23/01/2022': 36.57,
        '24/01/2022 - 30/01/2022': 32.29,
        '31/01/2022 - 06/02/2022': 32.88,
        '07/02/2022 - 13/02/2022': 34.99,
        '14/02/2022 - 20/02/2022': 36.5,
        '21/02/2022 - 27/02/2022': 34.07,
        '28/02/2022 - 06/03/2022': 30.92,
        '07/03/2022 - 13/03/2022': 24.62,
        '14/03/2022 - 20/03/2022': 24.52,
        '21/03/2022 - 27/03/2022': 29.89,
        '28/03/2022 - 03/04/2022': 35.1,
        '04/04/2022 - 10/04/2022': 39.11,
        '11/04/2022 - 17/04/2022': 39.04,
        '18/04/2022 - 24/04/2022': 35.73,
        '25/04/2022 - 01/05/2022': 30.39,
        '02/05/2022 - 08/05/2022': 25.3,
        '09/05/2022 - 15/05/2022': 20.23,
        '16/05/2022 - 22/05/2022': 17.16,
        '23/05/2022 - 29/05/2022': 15.38,
        '30/05/2022 - 05/06/2022': 15.36,
        type: 'TCC Sentiment Score 1 month average'
    },
    {
        '25/10/2021 - 31/10/2021': '-',
        '01/11/2021 - 07/11/2021': '-',
        '08/11/2021 - 14/11/2021': '-',
        '15/11/2021 - 21/11/2021': '-',
        '22/11/2021 - 28/11/2021': '-',
        '29/11/2021 - 05/12/2021': '-',
        '06/12/2021 - 12/12/2021': '-',
        '13/12/2021 - 19/12/2021': '-',
        '20/12/2021 - 26/12/2021': '-',
        '27/12/2021 - 02/01/2022': '-',
        '03/01/2022 - 09/01/2022': '-',
        '10/01/2022 - 16/01/2022': 51.19,
        '17/01/2022 - 23/01/2022': 46.97,
        '24/01/2022 - 30/01/2022': 43.68,
        '31/01/2022 - 06/02/2022': 40.74,
        '07/02/2022 - 13/02/2022': 40.51,
        '14/02/2022 - 20/02/2022': 38.84,
        '21/02/2022 - 27/02/2022': 37.26,
        '28/02/2022 - 06/03/2022': 35.97,
        '07/03/2022 - 13/03/2022': 34.7,
        '14/03/2022 - 20/03/2022': 32.53,
        '21/03/2022 - 27/03/2022': 32.08,
        '28/03/2022 - 03/04/2022': 32.97,
        '04/04/2022 - 10/04/2022': 32.91,
        '11/04/2022 - 17/04/2022': 33.35,
        '18/04/2022 - 24/04/2022': 33.23,
        '25/04/2022 - 01/05/2022': 32.14,
        '02/05/2022 - 08/05/2022': 29.68,
        '09/05/2022 - 15/05/2022': 27.93,
        '16/05/2022 - 22/05/2022': 27.59,
        '23/05/2022 - 29/05/2022': 26.95,
        '30/05/2022 - 05/06/2022': 26.59,
        type: 'TCC Sentiment Score 3 month average'
    }
]



const btcPriceAndDate = statistics[2]
let btcPrice = []

for (let k in btcPriceAndDate) {
    if (btcPriceAndDate.hasOwnProperty(k)) {
        btcPrice.push(btcPriceAndDate[k])
    }
}

btcPrice.pop()

const totalCapAndDate = statistics[3]
let totalCap = []

for (let k in totalCapAndDate) {
    if (totalCapAndDate.hasOwnProperty(k)) {
        totalCap.push(totalCapAndDate[k])
    }
}

totalCap.pop()

const TCCSentimentScoreAndDates = statistics[0]
let TCCSentimentScore = []

for (let k in TCCSentimentScoreAndDates) {
    if (TCCSentimentScoreAndDates.hasOwnProperty(k)) {
        TCCSentimentScore.push(TCCSentimentScoreAndDates[k])
    }
}

TCCSentimentScore.pop()



const labels = TCCSentimentScore

const dataTccVsBtc = {
    labels: labels,
    datasets: [{
        label: 'TCC x BTC',
        backgroundColor: 'yellow',
        borderColor: '',
        data: btcPrice,
    }]
}

const configTccVsBtc = {
    type: 'bar',
    data: dataTccVsBtc,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}

const tccVsBtc = new Chart(
    document.getElementById('tccVsBtc'),
    configTccVsBtc
)

const labelsTccVsAlt = TCCSentimentScore

const dataTccVsAlt = {
    labels: labels,
    datasets: [{
        label: 'TCC x Total Market Cap',
        backgroundColor: 'yellow',
        borderColor: '',
        data: totalCap,
    }]
}

const configTccVsAlt = {
    type: 'bar',
    data: dataTccVsAlt,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
}

const tccVsAlt = new Chart(
    document.getElementById('tccVsAlt'),
    configTccVsAlt
)


const labels1 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels1,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['green', 'red', 'blue'],
        borderColor: 'black',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'pie',
    data: data,
};

const pieChart = new Chart(
    document.getElementById('pieChart'),
    config
)




function getEndOfWeek() {
    const D = new Date();
    D.setDate(D.getDate() - D.getDay() + (D.getDay() ? 7 : 0));
    D.setHours(23, 59 - D.getTimezoneOffset(), 59, 0);
    return D.toISOString().slice(0, 19).replace('T', ' ').replace(/-/g, '/');
}

function timeToWeekEnd() {




    const date = '2022 / 07 / 03 23: 59: 59'
    const year = parseInt(date[0] + date[1] + date[2] + date[3])
    const mounth = parseInt(date[7] + date[8]) - 1
    const day = parseInt(date[12] + date[13])
    const hour = parseInt(date[15] + date[16])
    const minutes1 = parseInt(date[19] + date[20])
    const seconds1 = parseInt(date[23] + date[24])



    let endWeekInMs = new Date(year, mounth, day, hour, minutes1, seconds1)
    endWeekInMs = Date.parse(endWeekInMs) //получили колличество милисекунд конца недели
    const dateNow = Date.now()

    const elapsedDate = endWeekInMs - dateNow;
    const days = Math.floor(elapsedDate / 86400000)
    const hours = Math.floor(elapsedDate % 86400000 / 3600000);
    const minutes = Math.floor((elapsedDate % 3600000) / 60000) + 1;

    let elapsedTime = '';

    if (days) {
        elapsedTime += days + ' : '
    }
    if (hours) {
        elapsedTime += hours + ' : ';
    }
    if (minutes) {
        elapsedTime += minutes;
    }
    document.querySelector('.timeToNxtRep').textContent = elapsedTime

    setTimeout(timeToWeekEnd, 1500)
}

timeToWeekEnd()

function showTccScore() {
    const date = document.getElementById('date').value
    let userDate = parseInt(date.split('-').join(''))
    let TCCSentimentDates = Object.keys(TCCSentimentScoreAndDates)
    TCCSentimentDates.pop()

    for (let i = 0; i < TCCSentimentDates.length; i++) {
        TCCSentimentDates[i] = TCCSentimentDates[i].split(' - ')
    }


    TCCSentimentDates = TCCSentimentDates.flat()

    for (let i = 0; i < TCCSentimentDates.length; i++) {
        TCCSentimentDates[i] = parseInt(TCCSentimentDates[i].split('/').reverse().join(''))
    }


    for (let i = 0; i < TCCSentimentDates.length; i++) {
        if ((TCCSentimentDates[i] <= userDate) && (TCCSentimentDates[i + 1] >= userDate)) {
            document.querySelector('.currentTccNum').textContent = TCCSentimentScore[Math.floor(i / 2)]
        }
    }


    setTimeout(showTccScore, 1500)
}

showTccScore()

