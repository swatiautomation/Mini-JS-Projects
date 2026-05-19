const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const generatorObject = generator();
console.log(generator);
console.log(generatorObject);
//console.log(generatorObject.next());

generatorObject.next().value.then((value) => {
  console.log(value);
});

const asyncGenerator = async () => {
  for (const promise of generatorObject) {
    const result = await promise;
    console.log(result);
  }
};
asyncGenerator();
