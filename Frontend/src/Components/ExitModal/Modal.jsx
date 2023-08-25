
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { clearBookingData } from "../Redux/Features";


Modal.setAppElement("#root");

const ClearBookingModal = ({ isOpen, onRequestClose }) => {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(clearBookingData());
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Clear Booking Cart"
        >
            <h2>Clear Booking Cart</h2>
            <p>Are you sure you want to clear the booking cart?</p>
            <button onClick={handleConfirm}>Yes, Clear</button>
            <button onClick={onRequestClose}>Cancel</button>
        </Modal>
    );
};

export default ClearBookingModal;
