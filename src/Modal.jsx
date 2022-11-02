import './modal.css';

export default function Modal({ handleClose, show }) {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
                <button
                    type='button'
                    onClick={handleClose}
                >
                    Close modal
                </button>
        </div>
    )
}
