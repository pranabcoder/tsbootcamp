// -------------- TYPES -------------- //

type ProductDetails = {
    title: string;
    description: string;
};

enum Roles {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

type Product = {
    id: string;
    price: number;
    tags: string[];
    details: ProductDetails;
    role: Roles;
};

// -------------- DATA -------------- //

const product: Product = {
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

function logRole(product: Product): void {
    if (product.role === Roles.AUTHOR) {
        console.log('is author');
    }
}

logRole(product);
