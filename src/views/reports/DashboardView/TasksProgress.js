import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const TasksProgress = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Scanner
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              30%
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={30.0}
            variant="determinate"
          />
        </Box>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              IRM
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              40%
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={40.0}
            variant="determinate"
          />
        </Box>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              RADIO
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              30%
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={30.0}
            variant="determinate"
          />
        </Box>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Mamo
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              0%
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={0.0}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
