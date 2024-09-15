import { useState } from 'react';

const Service = ({ icon, title, text, onHide }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide' : 'Show'}
        </button>
        <button onClick={onHide}>Hide Service</button>
      </div>
    </article>
  );
};

export default Service;