import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <Fab color="secondary" aria-label="Edit" className={classes.fab}>
            <ReplyIcon/>
        </Fab>
    );
}

export default withStyles(styles)(FloatingActionButtons);