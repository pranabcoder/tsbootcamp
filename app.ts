// -------------- TYPES -------------- //

type ProductDetails = {
    title: string;
    description: string;
};

type Product = {
    id: string;
    price: number;
    tags: string[];
    details: ProductDetails;
    role: (string | number)[];
};

// -------------- DATA DEFINITION -------------- //

const product: Product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    },
    role: [2, 'author']
};

// -------------- DATA MANIPULATION -------------- //

product.role.push('admin');
product.role[3] = 20;

// -------------- LOGGING FUNCTIONS -------------- //

// console.log(product.details.title);

// product.tags.forEach(tag => console.log(tag.toUpperCase()));

product.role.forEach(role => {
    if (typeof role === "string") {
        console.log(role.toUpperCase());
    } else {
        console.log(role);
    }
});
