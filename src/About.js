import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Despre Noi</h1>
      <p className="lead text-center">
        Bine ai venit la <strong>Magazinul de Telefoane Online</strong>, destinația ta pentru cele mai noi și performante dispozitive mobile!
      </p>
      <section className="my-5">
        <h2>Misiunea Noastră</h2>
        <p>
          Scopul nostru este să oferim clienților acces la cele mai noi modele de telefoane mobile, cu specificații de top și la prețuri competitive. Credem în transparență, calitate și o experiență de cumpărare impecabilă.
        </p>
      </section>
      <section className="my-5">
        <h2>De Ce Să Ne Alegi?</h2>
        <ul>
          <li><strong>Produse de calitate superioară:</strong> Toate telefoanele noastre sunt 100% originale și provin de la producători autorizați.</li>
          <li><strong>Prețuri competitive:</strong> Garanția celor mai bune oferte de pe piață.</li>
          <li><strong>Garanție extinsă:</strong> Oferim garanții de până la 2 ani pentru toate produsele.</li>
          <li><strong>Livrare rapidă:</strong> Oriunde în țară, în cel mai scurt timp posibil.</li>
          <li><strong>Serviciu clienți dedicat:</strong> Suntem aici pentru a te ajuta cu orice întrebare sau problemă.</li>
        </ul>
      </section>
      <section className="my-5">
        <h2>Istoria Noastră</h2>
        <p>
          Magazinul nostru a fost fondat din pasiunea pentru tehnologie și dorința de a aduce pe piață produse inovatoare care să îmbunătățească viața utilizatorilor. De-a lungul anilor, am devenit un nume de încredere pentru mii de clienți.
        </p>
      </section>
    </div>
  );
}

export default About;
