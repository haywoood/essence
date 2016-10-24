var _render    = require("react-dom").render
var observer   = require("mobx-react").observer
var mobx       = require("mobx")

mobx.useStrict(true)

const update = (state, fn/*, ...args*/) => {
  const args     = Array.prototype.slice.call(arguments, 2)
  const jsState  = mobx.toJS(state)
  const newState = fn.apply(null, [jsState].concat(args))

  mobx.action(() => {
    if (Array.isArray(jsState)) {
      state.replace(newState)
    } else {
      Object.keys(newState).forEach(key => state[key] = newState[key])
    }
  })()

  return newState
}

module.exports = {
  ui: observer,
  state: mobx.observable,
  update: update,
  render(component, root) {
    return _render(component, root)
  }
}