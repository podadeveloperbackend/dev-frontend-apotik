import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, body, footer, title, size = "lg" }) => {
  if (!isOpen) return null;

  return (
    <>
      <div                
        className="modal-backdrop fade show">
      </div>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div
          className={`modal-dialog modal-dialog-centered modal-${size}`}
          role="document"
        >
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>

            <div
              className="modal-body"
              style={{ maxHeight: "460px", overflowY: "auto" }}
            >
              {body}
            </div>

            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
