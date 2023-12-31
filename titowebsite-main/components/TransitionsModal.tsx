import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Gift from '../public/images/Modal.png';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    //animation
    '@keyframes slideInFromLeft': {
        '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
        },
        '50%': {
            transform: 'translateX(0)',
            opacity: 1,
        },
    },
    animation: '1s ease-out 0s 1 slideInFromLeft',


};




export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Découvrez notre système de fidélisation</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           
            <Image src={Gift} width={350} height={350} objectFit="contain" alt={''} />
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}