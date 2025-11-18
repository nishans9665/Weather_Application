# 🌦️ The Horizon Weather App

A modern, fully responsive weather forecasting web application offering real-time updates and an immersive user experience. Built using **HTML5, CSS3, and Vanilla JavaScript (ES6)**, it utilizes the **WeatherAPI** for accurate, global weather data.
<img width="1916" height="760" alt="image" src="https://github.com/user-attachments/assets/ee0067d7-c39f-48a2-9e51-e8b7067e601f" />

## 🚀 Features

### 📍 1. Real-Time Location-Based Weather
The application automatically detects the user’s current GPS location using the browser’s **Geolocation API** to fetch and display live weather data.

* **Core Details:** Temperature (°C), Weather condition text, and dynamic icon.
* **Location:** Current Country & City.
* **Time:** Local time of the detected location.
* **Air Conditions:** Wind speed, Humidity, Cloud cover, Pressure, UV Index, and Visibility.
* **Astronomy:** Sunrise & sunset times.

---

### 🔍 2. City-Based Search
Users can instantly get updated weather details for any city worldwide by entering the city name into the search bar. The UI auto-updates with smooth transitions upon a successful search.

---

### 🧊 3. Premium Glassmorphism UI
The user interface is crafted with a modern glass-blur design, enhancing readability and providing a premium feel.

* **Effect:** Main containers use the `backdrop-filter: blur(12px)` CSS property.
* **Style:** Transparent frosted panels, soft shadows, and rounded corners.

---

### 🎬 4. Background Video Integration
A stunning, full-screen background video provides a dynamic visual layer.

* **Playback:** Auto-play, loop, and muted.
* **Visual:** Softly blurs behind the glassmorphism UI elements for a cohesive look.

---

### 📱 5. Fully Responsive Design
The layout is built with **Flexbox** and scalable units to ensure the application adapts beautifully and consistently across all devices: **Mobile, Tablet, and Desktop**.

---

## 🛠️ Tech Stack & APIs

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Application structure and semantics |
| **CSS3** | Styling, **Glassmorphism**, and layout management |
| **JavaScript (ES6)** | API calls, DOM manipulation, and UI updates |
| **WeatherAPI** | Provides current and forecast weather data |
| **Geolocation API** | Detects user's current latitude and longitude |
| **MP4 Video** | Background visual enhancement |

---

## ▶️ How to Run

1.  **Clone the project:**
    ```bash
    git clone https://github.com/nishans9665/Weather_Application.git
    ```
2.  **Open the directory:**
    ```bash
    cd weather-app
    ```
3.  **Open `index.html`** in your preferred web browser.

> **Note:** This is a pure front-end application. No backend setup or complex dependencies are required. It works instantly.

---

## 🔑 API Key Setup

To fetch live weather data, you need an API key from **WeatherAPI**.

1.  Get your free API key from [https://www.weatherapi.com/](https://www.weatherapi.com/).
2.  Open the `script.js` file.
3.  Replace the placeholder `YOUR_API_KEY` with your actual key:

    ```javascript
    // script.js

    const API_KEY = "YOUR_API_KEY"; // <-- Replace this
    
    // ... rest of the code
    ```

### Example Code Snippet (Geolocation Fetch)

This snippet demonstrates how the app retrieves weather data based on the user's current GPS coordinates:

```javascript
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;
    
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => updateUI(data))
        .catch(error => console.error("Error fetching location weather:", error));
});
