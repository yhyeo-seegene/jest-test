function sum(a, b) {
    return a + b;
}

function minus(a, b) {
  return a - b;
}

module.exports = {
  sum, minus
}

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//   // document.head.append(script);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js", (a, b)=>{
//   console.log(a);
//   console.log(b);
// });