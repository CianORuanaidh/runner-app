import React from 'react';
import Modal from 'react-modal';
import '../css/PasswordModal.css';

const PasswordModal = (props) => (
    <Modal
        isOpen={props.forgotPassword}
        contentLabel={'Forgot pasword'}
        onRequestClose={props.onHandleForgotPassword}
        ariaHideApp={false}
    >
    <div className="modal">
        <h3>Reseting your password</h3>
        <button onClick={props.onHandleForgotPassword}>Okay</button>
    </div>
    </Modal>
);

export default PasswordModal;