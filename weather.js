let state = reactive({selectedCity: 'London',
  weather: {
    temperature: 'N/A',
    humidity: 'N/A',
    description: ''
  }
});


function renderApp() {
  render('#container', `<select>
  <option value="Tokyo">Tokyo</option>
  <option value="London">London</option>
  <option value="New York">New York</option>
  </select>
  <div>
    <p>Temperature: ${state.weather.temperature}</p>
    <p>Humidity: ${state.weather.humidity}</p>
    <p>Description: ${state.weather.description}</p>
    <p>Humidity: 
  </div>`)
}

renderApp()

setTimeout(() => {
  state.message = 'Hello World!'
},1000);