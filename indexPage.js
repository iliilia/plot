import { Plot } from './lib/plot.js'

export class IndexPage {
  constructor() {
    document.addEventListener('DOMContentLoaded', this.start)
  }

  start = () => {
    console.log('start')
    this.drawPlotButton.addEventListener('click',  this.initializePlot)
  }

  initializePlot = () => {
    console.log('y=f(x)', this.inputValue('#function'))
    console.log('x.min', this.inputValue('#xMin'))
    console.log('x.max', this.inputValue('#xMax'))
    const plot = new Plot()
    plot.draw()
  }

  get drawPlotButton() {
   return document.querySelector('#draw_plot')
  }

  inputValue(selector) {
    const input = document.querySelector(selector)
    return input.value
  }
}
