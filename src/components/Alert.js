import React from 'react';

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert"></div>
      {props.message}
    </div>
  );
}

export default Alert;
