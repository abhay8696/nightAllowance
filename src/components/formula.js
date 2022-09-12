import React from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper'
import formulaStyles from '../styles/formulaStyles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Formula = () => {
    const classes = formulaStyles();
    // const { paper } = classes;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className={classes.question}>
            <HelpOutlineIcon onClick={()=>setOpen(true)}/>
            </div>
            <Modal
            open={open}
            onClose={handleClose}
            >
                <div className={classes.paperDiv}>
                <Paper>
                    <div className={classes.insidePaper}>
                        <span className={classes.title}>Formula</span>
                        <span>Dearness Allowance(DA) = 0.38</span>
                        <span>Pay Rate = (Basic + (Basic * DA))/200</span>
                        <span>Weightage = Daily Hours * 10</span>
                        <span>Total Allowance = Pay Rate * ((Weightage * No. Of Nights) / 60) </span>
                    </div>
                </Paper>
                </div>
        </Modal>
        </div>
    );
};

export default Formula;
// ((basic + (basic * 0.34))/200)* (((dailyHours * 10) * numOfNights) / 60) * 100