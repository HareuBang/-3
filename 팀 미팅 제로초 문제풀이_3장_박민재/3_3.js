// p.199
const callback = () => {
  console.log('hi')
  setTimeout(callback, 1000)
}
setTimeout(callback, 1000)