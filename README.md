```javascript
import {state, ui, render} from "@lsdafjklsd/essence"

const appState = state({
  count: 0
})

const resetCount = () => {
  appState.count = 0
}

const incrementCount = () => {
  appState.count = appState.count + 1
}

const decrementCount = () => {
  appState.count = appState.count - 1
}

const App = ui(() => {
  return (
    <div style={{display: "flex", flexDirection: "column", width: 300}}>
      <h1 onClick={resetCount}>
        <strong>current count: {appState.count}</strong>
      </h1>

      <button onClick={incrementCount}>
        increment count
      </button>

      <br />

      <button onClick={decrementCount}>
        decrement count
      </button>
    </div>
  )
})

render(<App />, "idOfContainer")
```

Almost no library or framework code, just works thanks to Mobx and React. Reagent is the next step after react-redux. This attempts to emulate Reagent using JS libs. This was composed to teach beginners, no frameworks to learn, 3 functions, just focus on creating functions that return html and functions that modify data.

MIT
