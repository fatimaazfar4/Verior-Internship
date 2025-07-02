document.addEventListener('DOMContentLoaded', () => {
    // ---------------- To-Do List ----------------
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        };
        list.appendChild(li);
      });
    }
  
    function addTask() {
      const input = document.getElementById("taskInput");
      if (input.value.trim()) {
        tasks.push(input.value.trim());
        input.value = "";
        saveTasks();
        renderTasks();
      }
    }
  
    document.getElementById("addTaskButton").addEventListener("click", addTask);
    renderTasks();
  
    // ---------------- Product Filter ----------------
    const products = [
      { name: "iPhone", price: 999 },
      { name: "Laptop", price: 1299 },
      { name: "Shoes", price: 99 },
      { name: "Watch", price: 299 }
    ];
  
    function renderProducts(filtered) {
      const list = document.getElementById("productList");
      list.innerHTML = "";
      filtered.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} - $${p.price}`;
        list.appendChild(li);
      });
    }
  
    document.getElementById("searchInput").oninput = function () {
      const query = this.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      renderProducts(filtered);
    };
  
    renderProducts(products);
  
    // ---------------- Movie Search ----------------
    const movieSearchInput = document.getElementById('movieSearchInput');
    const searchButton = document.getElementById('searchButton');
    const movieResults = document.getElementById('movieResults');
  
    const API_KEY = 'fa1e315f'; // Replace with your key if needed
    const API_BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
  
    const showLoader = () => {
      movieResults.innerHTML = '<p>Loading...</p>';
    };
  
    const fetchMovies = async (query) => {
      try {
        showLoader();
        const response = await fetch(`${API_BASE_URL}&s=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data.Response === 'True') {
          renderMovies(data.Search);
        } else {
          movieResults.innerHTML = '<p>No movies found.</p>';
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        movieResults.innerHTML = '<p>Error fetching movies. Please try again later.</p>';
      }
    };
  
    const renderMovies = (movies) => {
      movieResults.innerHTML = '';
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
          <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        `;
        movieResults.appendChild(movieCard);
      });
    };
  
    searchButton.addEventListener('click', () => {
      const query = movieSearchInput.value.trim();
      if (query) {
        fetchMovies(query);
      }
    });
  });
  