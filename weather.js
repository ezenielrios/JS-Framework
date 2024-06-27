let state = reactive({selectedCity: 'London'});


function renderApp() {
  render('#container', `<select>
  <option value="Tokyo">Tokyo</option>
  <option value="London">London</option>
  <option value="New York">New York</option>
  </select>
  <div>
    <p>Temperature: ${state.temperature}</p>
    <p>Humidity: ${state.humidity}</p>
    <p>Description: ${state.description}</p>
    <p>Humidity: 
  </div>`)
}

renderApp()

setTimeout(() => {
  state.message = 'Hello World!'
},1000);