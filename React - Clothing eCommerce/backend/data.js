import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'James',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
         
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 30,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
         
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/product-2.jpg',
            price: 50,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {
          
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/product-3.jpg',
            price: 60,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
        
            name: 'Nike Slim Shorts',
            category: 'Shorts',
            image: '/images/product-4.jpg',
            price: 55,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
      
            name: 'Puma Slim Shorts',
            category: 'Shorts',
            image: '/images/product-5.jpg',
            price: 58,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
   
            name: 'Adidas Fit Shorts',
            category: 'Shorts',
            image: '/images/product-6.jpg',
            price: 62,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};
export default data;