import { Button, Modal } from "react-bootstrap";

const DeleteConfirmationModal = ({ onHide }) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Menghapus Data Mobil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
          menghapus?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default DeleteConfirmationModal;
