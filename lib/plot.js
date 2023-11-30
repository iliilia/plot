export class Plot {
  constructor(selector = 'myCanvas') {
    this.canvas = document.getElementById(selector)
    this.ctx = this.canvas.getContext("2d")
  }

  draw() {
    const xArray = [50,60,70,80,90,100,110,120,130,140,150]
    const yArray = [7,8,8,9,9,9,10,11,14,14,15]
    this.ctx.fillStyle = "red"
    for (let i = 0; i < xArray.length-1; i++) {
      let x = xArray[i] * this.canvas.width / 150
      let y = yArray[i] * this.canvas.height / 15
      this.ctx.beginPath();
      this.ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }
}
