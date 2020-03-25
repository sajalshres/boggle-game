import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, handleClose, title, children }) => {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title is-3">{title}</h2>
          <span className="close" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
