import React from 'react';

function ServiceCard({ serviceName, description, icon }) {
  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        {icon}
      </div>

      <h3 className="service-card__title">
        {serviceName}
      </h3>

      <p className="service-card__description">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;