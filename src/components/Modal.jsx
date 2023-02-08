import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCustom(props) {
    const {title,body,footer,show,handleClose}= props;
    return (
        <Modal
            show ={show}
            onHide={()=>handleClose()}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {body}
                </Modal.Body>

                <Modal.Footer>
                    {footer}
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
}

export default ModalCustom;