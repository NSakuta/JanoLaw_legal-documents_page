import Button from "./Button";
import Modal from "react-bootstrap/Modal";

const ModalPreview = (props) => {

    const {show, onHide, text} = props;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>{text}</Modal.Body>

            <Modal.Footer>
                <Button className="btn-sm btn-secondary" text="Close" onClick={onHide}>
                </Button>
                <Button className="btn-sm btn-primary" text="Save Changes" onClick={onHide}>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPreview;