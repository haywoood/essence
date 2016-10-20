var _render    = require("react-dom").render
var observer   = require("mobx-react").observer
var observable = require("mobx").observable

module.exports = {
  ui: observer,
  state: observable,
  render(component, elId) {
    return _render(component, document.getElementById(elId))
  }
}