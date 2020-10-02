import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <p>Inspired by MyCafe by Melsoft</p>
      <p>Website designed by Ronny L.</p>
      <p>
        Miembro de Girasol City: <Link to="/girasol">Click aqui</Link>
      </p>
      <p>Contact info: contact@mycafe.guru</p>
      <p> All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
