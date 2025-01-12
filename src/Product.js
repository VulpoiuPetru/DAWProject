import React from 'react';

const Product = ({ image, title, description, price, addToCart }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <table className="table">
            <tbody>
              {description.map((desc, index) => (
                <tr key={index}>
                  <td>{desc.label}</td>
                  <td>{desc.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fw-bold">Pret: {price} RON</p>
          <button className="btn btn-primary" onClick={addToCart}>
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
