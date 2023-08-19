// -------------- TYPES -------------- //
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["READ_ONLY"] = "READ_ONLY";
    Roles["AUTHOR"] = "AUTHOR";
})(Roles || (Roles = {}));
// -------------- DATA -------------- //
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    },
    role: Roles.AUTHOR
};
// -------------- LOGGING -------------- //
function logRole(product) {
    if (product.role === Roles.AUTHOR) {
        console.log('is author');
    }
}
logRole(product);
