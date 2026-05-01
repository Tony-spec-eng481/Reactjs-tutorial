import React from 'react';

const GenericPage = ({ title, emoji, description }) => {
  return (
    <div className="page-content animation-fade-in">
      <div className="page-header">
        <h1 className="page-title">{emoji} {title}</h1>
        <div className="page-badge">Coming Soon</div>
      </div>
      
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
        {description || `Content for ${title} is currently being migrated. Check back later!`}
      </p>

      <div className="demo-box" style={{ marginTop: '3rem' }}>
        <p style={{ color: 'var(--text-muted)' }}>This section is part of Florante's ReactJS Tutorial.</p>
      </div>
    </div>
  );
};

export default GenericPage;
