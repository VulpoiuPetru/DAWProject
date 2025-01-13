import React from "react";

const Product = ({ images, title, description, price, addToCart }) => {
  const renderImages = () => {
    if (images && images.length > 1) {
      return (
        <div
          id={`carousel-${title
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-_]/g, "")}`}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${img}`}
                  className="d-block w-100"
                  alt={title}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carousel-${title
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-_]/g, "")}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carousel-${title
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-_]/g, "")}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Următor</span>
          </button>
        </div>
      );
    } else if (images && images.length === 1) {
      return (
        <img
          src={`${process.env.PUBLIC_URL}/${images[0]}`}
          className="card-img-top"
          alt={title}
        />
      );
    } else {
      return (
        <img
          src={`${process.env.PUBLIC_URL}/placeholder.jpg`}
          className="card-img-top"
          alt="Placeholder"
        />
      );
    }
  };

  return (
    <div className="col-md-4">
      <div className="card">
        {renderImages()}
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
          <p className="fw-bold">Preț: {price} RON</p>
          <button className="btn btn-primary" onClick={addToCart}>
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
