// Create a product instance with the specified type
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
// Log the product's title to the console
console.log(product.details.title);
// Log each tag associated with the product
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var tag = _a[_i];
    console.log(tag);
}
