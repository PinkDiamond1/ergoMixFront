import React from 'react';
import * as formatter from "../../../formatter/formatters";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tooltip from "../../tooltip/Tooltip";


const CovertTokenProgress = props => {
    return (
        <React.Fragment>
            <Tooltip title={<span className="tooltip-text">Last Activity: {props.lastActivity}</span>} arrow>
                <div>
                    Pending Deposit: {formatter.token(props.need - (props.confirmedDeposit % props.need), props.tokenId)} /
                    Deposited: {formatter.token(props.confirmedDeposit, props.tokenId)}
                </div>
            </Tooltip>

            <LinearProgress variant='determinate' color="secondary" value={100 * (props.confirmedDeposit % props.need) / props.need}/>
        </React.Fragment>
    )
};

export default CovertTokenProgress;