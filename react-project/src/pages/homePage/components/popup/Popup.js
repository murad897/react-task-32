import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

const Popup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="popup-model">
            <div className="popup-model-item">
              <label for="fimage">Image</label>
              <input type="text" name="fimage" placeholder="HTTP LINK...." />
            </div>
            <div className="popup-model-item">
              <label for="fname">Name</label>
              <input type="text" name="fname" placeholder="Name...." />
            </div>
            <div className="popup-model-item">
              <label for="fmpns">MPNS</label>
              <input type="text" name="fmpns" placeholder="Mpns...." />
            </div>
            <div className="popup-model-item">
              <label for="fproduct">Product</label>
              <input type="text" name="fproduct" placeholder="product...." />
            </div>
            <div className="popup-model-item">
              <label for="fname">First Name</label>
              <input type="text" name="fname" placeholder="HTTP LINK...." />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
