import { ReactNode } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeAllModals } from "../../features/modal/modalSlice";
import CloseIcon from "@mui/icons-material/Close";

interface ModalMainProps {
  children: ReactNode;
}

const ModalMain: React.FC<ModalMainProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { isModalMainOpen } = useSelector((store: any) => store.modal);

  return (
    <Modal
      open={isModalMainOpen}
      onClose={() => dispatch(closeAllModals())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          overflow: "auto",
        }}
      >
        {/* Close button */}
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => dispatch(closeAllModals())}
        >
          <CloseIcon />
        </IconButton>

        {/* Modal content */}
        {children}
      </Box>
    </Modal>
  );
};

export default ModalMain;
