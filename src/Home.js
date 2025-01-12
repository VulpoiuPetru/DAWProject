import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asigură funcționalitatea JS pentru Bootstrap
import Product from './Product'; // Importă componenta Product

function Home({ addToCart }) {
  const products = [
    {
      images: ['SamsungS24Pro.jpg', 'SamsungS24Pro1.jpg', 'SamsungS24Pro2.jpg', 'SamsungS24Pro3.jpg'],
      title: 'Samsung S24 Ultra',
      description: [
        { label: 'Model procesor', value: 'Qualcomm Snapdragon 8 Gen 3' },
        { label: 'Numar nuclee', value: '8' },
        { label: 'Dimensiune ecran', value: '6.8 inch' },
        { label: 'Rezolutie (pixeli)', value: '3120 x 1440' },
        { label: 'Memorie interna', value: '512 GB' },
        { label: 'Memorie RAM', value: '12 GB' },
        { label: 'Capacitate baterie', value: '5000 mAh' },
      ],
      price: 5500,
    },
    {
      images: ['HuaweiP60Pro.jpg', 'HuaweiP60Pro1.jpg', 'HuaweiP60Pro2.jpg','HuaweiP60Pro3.jpg'], 
      title: 'Huawei P60 Pro',
      description: [
        { label: 'Model procesor', value: 'Qualcomm Snapdragon 8 Plus Gen 1' },
        { label: 'Numar nuclee', value: '8' },
        { label: 'Dimensiune ecran', value: '6.67 inch' },
        { label: 'Rezolutie (pixeli)', value: '2700 x 1220' },
        { label: 'Memorie interna', value: '256 GB' },
        { label: 'Memorie RAM', value: '8 GB' },
        { label: 'Capacitate baterie', value: '4815 mAh' },
      ],
      price: 5600,
    },
    {
      images: ['Iphone16Pro.jpg', 'Iphone16Pro1.jpg', 'Iphone16Pro2.jpg'], 
      title: 'Iphone 16 Pro',
      description: [
        { label: 'Sistem de operare', value: 'iOS' },
        { label: 'Numar nuclee', value: '16' },
        { label: 'Dimensiune ecran', value: '6.9 inch' },
        { label: 'Rezolutie (pixeli)', value: '2868 x 1320' },
        { label: 'Memorie interna', value: '256 GB' },
        { label: 'Memorie RAM', value: '8 GB' },
      ],
      price: 7200,
    },
    {
      images: ['SONYXperia1.jpg', 'SONYXperia11.jpg', 'SONYXperia12.jpg'], 
      title: 'SONY Xperia 1 VI 5G',
      description: [
        { label: 'Sistem de operare', value: 'Android' },
        { label: 'Numar nuclee', value: '16' },
        { label: 'Dimensiune ecran', value: '6.5 inch' },
        { label: 'Rezolutie (pixeli)', value: '2340 x 1080' },
        { label: 'Memorie interna', value: '256 GB' },
        { label: 'Memorie RAM', value: '12 GB' },
      ],
      price: 6500,
    },
  ];

  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Bine ai venit la Magazinul de Telefoane Online!</h1>
          <p className="lead">Cele mai bune produse, la cele mai bune preturi!</p>
        </div>
      </header>

      <section id="products" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Produsele Noastre</h2>
          <div className="row">
            {products.map((product, index) => (
              <Product
                key={index}
                images={product.images}
                title={product.title}
                description={product.description}
                price={product.price}
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
