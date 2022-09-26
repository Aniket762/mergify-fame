import React from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Container,
  Chip,
  Divider,
  Avatar,
  Box,
  Hidden,
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import WebIcon from "@material-ui/icons/Language"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(6),
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  iconCls: {
    marginLeft: "10px",
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0",
  },
  avatar: {
    height: 155,
    width: 155,
  },
  salutation: {
    color: "#034870",
  },
  btn: {
    textTransform: "none",
  },
  copyRight: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    backgroundColor: "#06101B",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  iconSocialMedia: {
    marginLeft: "-20px",
    color: "#fff",
  },
  iconSize: {
    fontSize: "32px",
  },
  organization: {
    backgroundColor: "#067ABD",
    display: "inline",
    padding: "0.2em",
    paddingLeft: "1em",
    paddingRight: "1em",
    color: "#fffff0",
    textTransform: "uppercase",
    borderRadius: "2em",
    fontSize: "1em",
    fontFamily: "courier",
  },
}))
const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#2A6F96",
    "&:hover": {
      backgroundColor: "#034870",
    },
  },
}))(Button)
function Footer() {
  const classes = useStyles()
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          component="dl"
          alignItems="center"
          justify="center"
          item
          xs={12}
          md={12}
        >
          <List style={flexContainer}>
            <ListItem component="a" href="https://mergify.com/">
              <ListItemIcon className={classes.iconSocialMedia}>
                <WebIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText className={classes.iconSocialMedia} />
              </Hidden>
            </ListItem>
            <ListItem
              component="a"
              href="https://github.com/mergifyio"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <GitHubIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText className={classes.iconSocialMedia} />
              </Hidden>
            </ListItem>
            <ListItem
              component="a"
              href="https://www.facebook.com/mergifyio/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <FacebookIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText className={classes.iconSocialMedia} />
              </Hidden>
            </ListItem>
            <ListItem
              component="a"
              href="https://twitter.com/Mergifyio"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <TwitterIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText className={classes.iconSocialMedia} />
              </Hidden>
            </ListItem>
            <ListItem
              component="a"
              href="https://www.linkedin.com/company/mergify/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <LinkedInIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText className={classes.iconSocialMedia} />
              </Hidden>
            </ListItem>
          </List>
          {/* </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}

export default function Home({ data }) {
  const classes = useStyles()

  const edges = data.allContributorsJson.edges

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: "#06101B" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Mergify
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Mergify Masters 🥷🏻
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Focus on building the application, leave the automation to us!
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              – Aniket, Developer Advocate
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    component="a"
                    href="https://github.com/Aniket762/mergify-masters"
                    target="_blank"
                    className={classes.btn}
                  >
                    Be the Master
                  </ColorButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {edges.map((edge, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={edge.node.backgroundImg}
                    title="Image title"
                    height="240"
                  />
                  <Box mt={-16} display="flex" justifyContent="center">
                    <Avatar
                      alt="Contributor"
                      className={classes.avatar}
                      src={edge.node.image}
                      component={Link}
                    />
                  </Box>

                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.salutation}
                      variant="subtitle2"
                    >
                      {`${edge.node.salutation}`}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      {`I am ${edge.node.name}`}
                    </Typography>
                    <Typography className={classes.organization}>
                      {`${edge.node.organization}`}
                    </Typography>
                    <Typography className={classes.extraMargin}>
                      {`You can reach me at :`}
                    </Typography>
                    <Typography className={classes.extraMargin}>
                      {edge.node.github ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.github}
                          component="a"
                          target="_blank"
                        >
                          <GitHubIcon></GitHubIcon>
                        </Link>
                      ) : null}
                      {edge.node.twitter ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.twitter}
                          component="a"
                          target="_blank"
                        >
                          <TwitterIcon></TwitterIcon>
                        </Link>
                      ) : null}
                      {edge.node.linkedin ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.linkedin}
                          component="a"
                          target="_blank"
                        >
                          <LinkedInIcon></LinkedInIcon>
                        </Link>
                      ) : null}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.chipActions}>
                    {edge.node.skills.slice(0, 4).map((skill, i) => (
                      <Chip
                        key={i}
                        className={classes.chip}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        avatar={<Avatar>{skill[0].toUpperCase()}</Avatar>}
                      />
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          We save your time by automatizing your pull requests and securing the
          code merge using a merge queue 💪
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </footer>
      {/* End footer */}
      <Footer />
    </React.Fragment>
  )
}
export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          salutation
          name
          organization
          skills
          backgroundImg
          image
          github
          twitter
          linkedin
        }
      }
    }
  }
`
