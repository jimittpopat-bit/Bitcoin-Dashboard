// API - Application programming Interface

const URL =
  "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24";

const NEWS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://cointelegraph.com/rss/tag/bitcoin";

let cmp = document.querySelector("#cmp");
let oneHour = document.querySelector("#oneHour");
let cmpChange = document.querySelector("#cmpchange");
let time = document.querySelector(".time");
let headHines = document.querySelector(".headlines");

const getData = async () => {
  try {
    console.log("getting data...");
    let response = await fetch(URL);
    let response1 = await fetch(NEWS_URL);
    if ((!response.ok, !response1.ok)) {
      throw new Error("API request failed");
    }
    let data = await response.json();
    let newsData = await response1.json();

    headHines.innerHTML = `<p>
<ul>
<li class="news-title"><a class="news-link target="news-page" href="${newsData.items[0].link}">${newsData.items[0].title}</a></li>
<li class="news-title"><a class="news-link target="news-page" href="${newsData.items[1].link}">${newsData.items[1].title}</a></li>
<li class="news-title"><a class="news-link target="news-page" href="${newsData.items[2].link}">${newsData.items[2].title}</a></li>
<li class="news-title"><a class="news-link target="news-page" href="${newsData.items[3].link}">${newsData.items[3].title}</a></li>
</ul>
</p>`;

    // Extracts data for chart
    let priceData = [];
    let smaData = [];
    let timeData = [];

    data.forEach((candle, index) => {
      priceData.push(parseFloat(candle[4])); // closing price
      timeData.push(
        new Date(candle[0]).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // Calculate SMA 20
      if (index >= 19) {
        let sum = 0;
        for (let i = index - 19; i <= index; i++) {
          sum += parseFloat(data[i][4]);
        }
        smaData.push(sum / 20);
      } else {
        smaData.push(null);
      }
    });

    // The chart
    createChart(priceData, smaData, timeData);

    let currentPrice = parseFloat(data[data.length - 1][4]);
    let prevHour = parseFloat(data[data.length - 2][4]);

    let chngPercentage = () => {
      let percentage = ((currentPrice - prevHour) / prevHour) * 100;
      return percentage.toFixed(2);
    };

    let difference = () => {
      let change = currentPrice - prevHour;
      if (currentPrice > prevHour) {
        cmpChange.innerText = `+${change.toFixed(2)}(${chngPercentage()})today`;
        cmpChange.style.color = "green";
      } else {
        cmpChange.innerText = `${change.toFixed(2)}(${chngPercentage()})today`;
        cmpChange.style.color = "red";
      }
    };
    difference();

    cmp.innerHTML = `<p>${parseFloat(
      currentPrice
    )}<span class = "currency">usd</span></p>`;
    time.innerText = `${new Date().toLocaleString()}`;
  } catch (err) {
    console.error("Error fetching data:", err);
    cmp.innerHTML = `<p>Error loading price</p>`;
  }
};
getData();
setInterval(getData, 5000);

let chart = null;

const createChart = (priceData, smaData, timeData) => {
  const ctx = document.getElementById("btcChart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: timeData,
      datasets: [
        {
          label: "BTC Price",
          data: priceData,
          borderColor: "#ffd700",
          backgroundColor: "rgba(255, 215, 0, 0.05)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#ffd700",
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: "SMA 20",
          data: smaData,
          borderColor: "#00ff88",
          backgroundColor: "rgba(0, 255, 136, 0.05)",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 2,
          pointHoverRadius: 4,
        },
      ],
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: "#1a1a1a",
      plugins: {
        legend: {
          labels: {
            color: "#ffffff",
            font: { size: 14, family: "sans-serif" },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#cccccc",
            maxTicksLimit: 8,
          },
          grid: {
            color: "rgba(255,255,255,0.1)",
            borderColor: "#444",
          },
        },
        y: {
          ticks: {
            color: "#cccccc",
            callback: function (value) {
              return "$" + value.toLocaleString();
            },
          },
          grid: {
            color: "rgba(255,255,255,0.1)",
            borderColor: "#444",
          },
        },
      },
    },
  });
};
