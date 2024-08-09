// p.198
// '2초 동안 실행됩니다.' 2번 실행되고 종료.
const intervalId = setInterval(() => {
  console.log('2초 동안 실행됩니다.');
}, 2000);

setTimeout(() => {
  clearInterval(intervalId)
}, 5000);