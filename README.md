# 🪙 Bitcoin Dashboard - Real-Time Crypto Tracker

A professional, real-time Bitcoin dashboard that displays live prices, technical analysis, and news updates. Built with vanilla JavaScript and featuring a sleek dark theme with gold accents.

![Bitcoin Dashboard Preview](https://img.shields.io/badge/Bitcoin-Dashboard-gold?style=for-the-badge&logo=bitcoin)

## ✨ Features

### 📊 **Real-Time Data**

- Live Bitcoin price updates every 5 seconds
- Price change indicators with percentage calculations
- Green/red color coding for price movements
- Timestamp display for data freshness

### 📈 **Technical Analysis**

- Interactive Chart.js line graph with hourly price data
- 20-period Simple Moving Average (SMA) overlay
- 24-hour historical price visualization
- Professional trading chart aesthetics

### 📰 **News Integration**

- Latest Bitcoin news headlines from CoinTelegraph
- Direct links to full articles
- Auto-updating news feed
- Clean, readable news layout

### 📱 **Responsive Design**

- Mobile-first responsive layout
- Dark theme with gold Bitcoin branding
- Smooth animations and hover effects
- Optimized for desktop and mobile viewing

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**:
  - Binance API for live Bitcoin price data
  - RSS2JSON + CoinTelegraph RSS for news
- **Charts**: Chart.js for interactive price visualization
- **Styling**: Custom CSS with responsive design

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API data

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jimittpopat-bit/Bitcoin-Dashboard.git
   cd Bitcoin-Dashboard
   ```

2. **Open in browser**

   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **That's it!** 🎉 The dashboard will start fetching live data automatically.

## 📊 How It Works

### Price Data Flow

```
Binance API → Fetch 24h hourly data → Calculate SMA → Update Chart → Display Price
     ↓
Auto-refresh every 5 seconds
```

### Technical Calculations

- **Price Change**: `(Current Price - Previous Hour Price)`
- **Percentage Change**: `((Current - Previous) / Previous) × 100`
- **SMA Calculation**: 20-period moving average using closing prices

## 🎨 Design Highlights

- **Dark Theme**: Easy on the eyes for extended trading sessions
- **Gold Accents**: Bitcoin-inspired color scheme
- **Card Layout**: Clean, organized information display
- **Responsive Grid**: Adapts to all screen sizes
- **Professional Charts**: TradingView-style visualization

## 📁 Project Structure

```
Bitcoin-Dashboard/
├── index.html          # Main HTML structure
├── style.css           # Responsive styling
├── app.js             # Core JavaScript logic
├── 1.png              # Bitcoin logo
└── README.md          # Project documentation
```

## 🔧 Configuration

### API Endpoints

- **Price Data**: `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24`
- **News Feed**: `https://api.rss2json.com/v1/api.json?rss_url=https://cointelegraph.com/rss/tag/bitcoin`

### Customization Options

- **Refresh Rate**: Change `5000` in `setInterval(getData, 5000)` (milliseconds)
- **SMA Period**: Modify the 20-period calculation in the SMA logic
- **Chart Colors**: Update colors in the Chart.js configuration
- **News Sources**: Replace the RSS URL for different news feeds

## 🌟 Key Features Explained

### Real-Time Updates

The dashboard automatically refreshes every 5 seconds, ensuring you always see the latest Bitcoin price and market movements.

### Technical Analysis

- **20-Period SMA**: Industry-standard moving average for trend analysis
- **Price Visualization**: Clear line charts showing price action over 24 hours
- **Mathematical Accuracy**: Proper calculation of percentage changes and moving averages

### News Integration

Stay informed with the latest Bitcoin developments through automatically updated news headlines from trusted crypto news sources.

## 📱 Mobile Optimization

The dashboard is fully responsive and optimized for mobile trading:

- Touch-friendly interface
- Readable charts on small screens
- Optimized layouts for portrait/landscape modes
- Fast loading on mobile networks

## 🚧 Future Enhancements

- [ ] Multiple cryptocurrency support (ETH, ADA, etc.)
- [ ] Price alerts and notifications
- [ ] Historical data export
- [ ] Portfolio tracking
- [ ] Advanced technical indicators (RSI, MACD)
- [ ] Dark/light theme toggle

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Live Demo**: [Bitcoin Dashboard](https://jimittpopat-bit.github.io/Bitcoin-Dashboard/)
- **Repository**: [GitHub](https://github.com/jimittpopat-bit/Bitcoin-Dashboard)
- **TradingView**: [Professional Charts](https://www.tradingview.com/chart/VPXXxhXL/?symbol=BINANCE%3ABTCUSDT)

## 💡 Acknowledgments

- Binance API for reliable cryptocurrency data
- CoinTelegraph for Bitcoin news updates
- Chart.js for beautiful data visualization
- The crypto community for inspiration

---

**Built with ❤️ for the Bitcoin community**

_Stay updated, trade smart, and hodl strong!_ 🚀
