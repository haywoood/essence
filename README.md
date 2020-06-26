```javascript
import {update, state, ui, render} from "@haywoood/essence"

const appState = state({
  count: 0
})

const resetCount = () => {
  update(appState, appState => {
    appState.count = 0
    return appState
  })
}

const incrementCount = () => {
  update(appState, appState => {
    appState.count = appState.count + 1
    return appState
  })
}

const decrementCount = () => {
  update(appState, appState => {
    appState.count = appState.count - 1
    return appState
  })
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

render(<App />, document.getElementById("root"))
```

This was composed to teach beginners, no frameworks to learn, 4 functions, just focus on creating functions that return html and functions that modify data.

MIT
