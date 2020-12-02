import { hello } from './import'
const isHas = [1,2,3].includes(2);
const p = new Promise((resolve, reject) => {
    resolve(100);
});
setTimeout(async () => {
  await Promise.resolve('1')
  console.log('ok')
}, 1000)
hello()