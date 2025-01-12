import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      window.alert('Eroare: Coșul este gol. Adaugă produse înainte de a finaliza comanda.');
    } else {
      window.alert('Comanda a fost plasată cu succes!');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Coșul Meu</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Produs</th>
            <th>Pret</th>
            <th>Actiune</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.price} RON</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Șterge
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <h4>Total: {calculateTotal()} RON</h4>
        <button className="btn btn-success" onClick={handleCheckout}>
          Finalizează Comanda
        </button>
      </div>
    </div>
  );
};

export default Cart;
