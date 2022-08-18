import { Modal } from "@mui/material";

const ShareProperty = ({ handleClose, open }) => {
  const styleButton =
    "h-12 w-12 flex justify-center items-center rounded-full text-white cursor-pointer hover:shadow-lg";
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="CModal" style={{ maxWidth: 450 }}>
          <div className="flex items-center justify-between w-full mb-7">
            <h5 className="text-lg font-semibold text-accent">
              Share Property via
            </h5>
            <i
              className="fas fa-times cursor-pointer text-xl"
              onClick={handleClose}
            ></i>
          </div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <i className={`ri-twitter-line text-3xl bg-blue-400 ${styleButton }`}></i>
            <i className={`ri-facebook-fill text-3xl bg-blue-600 ${styleButton }`}></i>
            <i className={`ri-whatsapp-line text-3xl bg-green-500 ${styleButton }`}></i>
            <i className={`ri-linkedin-fill text-3xl bg-blue-500 ${styleButton }`}></i>
            <i className={`ri-telegram-line text-3xl bg-blue-400 ${styleButton }`}></i>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareProperty;
