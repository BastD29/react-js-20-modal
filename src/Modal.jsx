import './modal.css';

export default function Modal({ handleClose, show, children }) {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div>
                {children}
                <button
                    type='button'
                    onClick={handleClose}
                >
                    X Close modal
                </button>
            </div>
        </div>
    )
}
