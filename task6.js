async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '481a4daa7edcc78967dc71f9911bc66f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
  
      document.getElementById('weatherResult').innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>⛅ Weather: ${data.weather[0].description}</p>
      `;
    } catch (err) {
      document.getElementById('weatherResult').textContent = err.message;
    }
  }
  
  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      const resultDiv = document.getElementById('userResult');
      resultDiv.innerHTML = '<ul>' + users.map(user =>
        `<li><strong>${user.name}</strong><br>Email: ${user.email}</li>`
      ).join('') + '</ul>';
    } catch (err) {
      document.getElementById('userResult').textContent = 'Failed to fetch users';
    }
  }
  