import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function WelcomeModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Select Difficulty
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Select a level of difficulty and solve as many programming challenges as you can in 25 minutes.
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs>
                    <Button>Easy</Button>
                </Grid>
                <Grid item xs>
                    <Button>Medium</Button>
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}