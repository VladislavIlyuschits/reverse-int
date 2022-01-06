module.exports = reverse = n => Number(Array.from(n.toString()).map(Number).reverse().filter(value => !Number.isNaN(value)).join(''));

