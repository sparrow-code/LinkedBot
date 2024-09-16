let cache = new Map();

function storeData(key, data) {
  cache.set(key, data);
}

function getAllData() {
  return cache;
}

function getData(key) {
  return cache.get(key);
}

const deleteCache = (key) => {
  cache.delete(key);
};

const storeCookie = (name, data) => {
  let cookies = {};
  data.forEach((cookie) => {
    const [keyValue, ...rest] = cookie.split(";");
    const [key, value] = keyValue.split("=");
    cookies[key] = value;
  });
  storeData(name, cookies);
};

export { storeData, getData, getAllData, deleteCache, storeCookie };

/*

?   **** Example ****   ?

! To Store The Data In The Cache
storeData('user', { name: 'John', age: 30 });
storeData('cookies', ['cookie1', 'cookie2']);

! To Get The Data From The Cache
console.log(getData('user')); // { name: 'John', age: 30 }
console.log(getData('cookies')); // ['cookie1', 'cookie2'] 

*/
