import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        maxWidth: 800,
        width: "90%",
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    container: (props)=>({
        maxHeight: "80vh",
        overflowY: (props.scroll === undefined ? 'scroll' : props.scroll),
        overflowX: "hidden"
    }),
    closeBtn: {
        position: "absolute",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        textAlign: "center",
        display: "block",
        right: "-15px",
        top: "-15px",
        backgroundColor: "#fff",
        color: "#999999",
        lineHeight: "40px",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: "100",
        boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    }
}));

const ProjectModal = (props) => {
    const classes = useStyles(props);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const modalCopy = props.padding ? {...modalStyle, padding: 0} : {...modalStyle};

    return props.show ? (
        <Modal
            open={true}
            onClose={props.close}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div style={modalCopy} className={classes.paper}>
                <div className={classes.closeBtn} onClick={props.close}>
                    <i className="fa fa-times"/>
                </div>
                <div className={classes.container}>
                    {props.children}
                </div>
            </div>
        </Modal>
    ) : null;
}
export default ProjectModal;