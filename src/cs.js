const zp = (n) => (n < 10 ? `0${n}` : n)

const getCurrentTime = () => {
  const current = new Date()
  const hour = zp(current.getHours())
  const min = zp(current.getMinutes())
  const sec = zp(current.getSeconds())

  return `${hour}:${min}:${sec}`
}

const clearCanvas = () => {
  ctx.fillStyle = 'rgb(255, 255, 255)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const updateCanvas = () => {
  clearCanvas()
  text = getCurrentTime()
  const fs = Math.min(parseInt(canvas.height / 5), 120)
  const th = (canvas.width - ctx.measureText(text).width) / 2
  const tw = (canvas.height + fs / 2) / 2
  ctx.font = fs + 'px sans-serif'
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.fillText(text, th, tw)

  window.requestAnimationFrame(updateCanvas)
}

const getUserMedia = () => {
  return new Promise((resolve, reject) => {
    let stream = null

    clearCanvas()
    window.requestAnimationFrame(updateCanvas)
    stream = canvas.captureStream(30)
    if (!stream) {
      reject('canvas Capture ERROR')
    }
    resolve(stream)
  })
}

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 640
canvas.height = 480

navigator.mediaDevices.getUserMedia = getUserMedia
