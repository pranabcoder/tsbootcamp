// Define a type for the product object
type Product = {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
};

// Create a product instance with the specified type
const product: Product = {
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
for (const tag of product.tags) {
    console.log(tag);
}
