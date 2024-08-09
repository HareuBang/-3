function setTimeoutPromise(num) {
  return new Promise((resolve, reject) => {
    resolve(num)
  })
}

setTimeoutPromise(0)
  .then(() => {
    return 'a'
  })
  .then((data1) => {
    console.log(data1)
    return 'b'
  })
  .then((data2) => {
    console.log(data2)
  })

// 1.
// const wrap = async () => {
//   await setTimeoutPromise(0)
//   console.log('a');
//   console.log('b');
// }

const wrap = async () => {
  await setTimeoutPromise(0)
  const data1 = await 'a'
  console.log(data1);
  const data2 = await 'b'
  console.log(data2);
}
wrap()