import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";

import { authInitialProps } from "../lib/auth";
import { Grid, Typography, Button } from "@material-ui/core";

import PostFeed from "../components/index/PostFeed";
import UserFeed from "../components/index/UserFeed";

import Router from "next/router";

const Index = ({ classes, auth }) => (
  <main className={classes.root}>
    {auth.user && auth.user._id ? (
      // Auth user page
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <PostFeed auth={auth} />
        </Grid>
        <Grid item className={classes.drawerContainer}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <UserFeed auth={auth} />
          </Drawer>
        </Grid>
      </Grid>
    ) : (
      // Splash page (Unauth page)
      <div>
        <Grid
          justify="center"
          alignItems="center"
          direction="row"
          container
          className={classes.heroContent}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Social Network
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="textSecondary"
          >
            Dolore qui reprehenderit nulla esse voluptate pariatur reprehenderit
            do minim adipisicing voluptate. Commodo laboris sunt cupidatat eu
            aliqua aute Lorem minim labore. Deserunt anim minim non et ex mollit
            non est consectetur.
          </Typography>
          <Button
            className={classes.fabButton}
            variant="extendedFab"
            color="primary"
            onClick={() => Router.push("/signup")}
          >
            Get Started
          </Button>
        </Grid>
      </div>
    )}
  </main>
);
const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit * 5
    }
  },
  progressContainer: {
    height: "80vh"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.light
  },
  drawerContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  drawer: {
    width: 350
  },
  drawerPaper: {
    marginTop: 70,
    width: 350
  },
  fabButton: {
    margin: theme.spacing.unit * 3
  },
  heroContent: {
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 6,
    margin: "0 auto"
  }
});

Index.getInitialProps = authInitialProps();

export default withStyles(styles)(Index);
