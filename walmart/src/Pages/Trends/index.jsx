import { useState } from 'react';
import './trends.css';

export function Trends() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71v+9nZtHLL._AC_UL320_.jpg",
      name: "Sounce Electronic Screen Cleaning Kit 2 in 1 LCD LED Screen...",
      price: "₹209.00",
      rating: "★★★★★",
      delivery: "Get it by Tuesday, August 20",
      trendAnalysis: "High demand in tech accessories, low stock.",
      stockOutInfo: "Expected to stock out by next month.",
      profitRate: "15%",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/61Z-2uQ6q9L._AC_UL320_.jpg",
      name: "Parachute Advansed Onion Hair Oil for Hair Growth and Hair Fall...",
      price: "₹245.00",
      rating: "★★★★★",
      delivery: "Get it by Tuesday, August 20",
      trendAnalysis: "Consistently high demand, moderate stock.",
      stockOutInfo: "No stockout expected.",
      profitRate: "20%",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/5192H8a2yLL._AC_UL320_.jpg",
      name: "Hykes Knee cap Compression Support for Gym Running Cycling Sports Jogging Workout Pain...",
      price: "₹799.00",
      rating: "★★★★★",
      delivery: "",
      trendAnalysis: "Steady demand, sufficient stock.",
      stockOutInfo: "No stockout expected.",
      profitRate: "10%",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71g6eCzrXOL._AC_UL320_.jpg",
      name: "Philips 10000mAh Power Bank",
      price: "₹999.00",
      rating: "★★★★☆",
      delivery: "Get it by Friday, August 22",
      trendAnalysis: "Rising demand, low stock.",
      stockOutInfo: "Expected to stock out within 2 weeks.",
      profitRate: "18%",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/61rN0qrHGsL._AC_UL320_.jpg",
      name: "Mi Smart Band 5 - Fitness Band",
      price: "₹2,499.00",
      rating: "★★★★★",
      delivery: "Get it by Thursday, August 21",
      trendAnalysis: "High demand, stable stock.",
      stockOutInfo: "No stockout expected.",
      profitRate: "22%",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71lEQNls6+L._AC_UL320_.jpg",
      name: "OnePlus Buds Z2 - True Wireless Earbuds",
      price: "₹4,999.00",
      rating: "★★★★☆",
      delivery: "Get it by Saturday, August 23",
      trendAnalysis: "Trending up, sufficient stock.",
      stockOutInfo: "No stockout expected.",
      profitRate: "25%",
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/51+bN3QkY6L._AC_UL320_.jpg",
      name: "Noise ColorFit Pro 2 Smartwatch",
      price: "₹2,999.00",
      rating: "★★★★☆",
      delivery: "Get it by Sunday, August 24",
      trendAnalysis: "Stable demand, sufficient stock.",
      stockOutInfo: "No stockout expected.",
      profitRate: "15%",
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="trends">
        {items.map((item) => (
          <div key={item.id} className="trend" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.name} />
            <div className="trend-info">
              <h3>{item.name}</h3>
              <div className="trend-rating">{item.rating}</div>
              <p>{item.price}</p>
              {item.delivery && <p>{item.delivery}</p>}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="item-details">
          <h2>{selectedItem.name}</h2>
          <p><strong>Price:</strong> {selectedItem.price}</p>
          <p><strong>Trend Analysis:</strong> {selectedItem.trendAnalysis}</p>
          <p><strong>Stockout Info:</strong> {selectedItem.stockOutInfo}</p>
          <p><strong>Profit Rate:</strong> {selectedItem.profitRate}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      )}
    </>
  );
}
