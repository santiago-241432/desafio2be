const ProductManager = require('./ProductManager');

const manager = new ProductManager();

async function Products(){

    const products = await manager.getProduct();
        
    const id = products.length + 1;
    

    const nuevoProducto = {
            id,
            title: 'costeleta',
            description: 'mediana',
            price: 600,
            thumbnail: 'costeletaasd',
            code: 45,
            stock: 5

    };
    
    await manager.addProduct(nuevoProducto);
    

    const productos = await manager.getProduct();
    console.log(productos);

    await manager.getProductById(2);

    

    await manager.deleteProduct();

    
    
    


}
Products();