import React, { useState } from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"
import {
  AppBar,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  Container,
  Divider,
  Avatar,
  Box,
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import WebIcon from "@material-ui/icons/Language"
import { Helmet } from "react-helmet"

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
  iconSize: {
    fontSize: "32px",
    color: "#fff",
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
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Mergify Masters</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs={2} md={1} justify="center">
            <Link href="https://mergify.com/">
              <WebIcon className={classes.iconSize} />
            </Link>
          </Grid>
          <Grid item xs={2} md={1} justify="center">
            <Link href="https://github.com/mergifyio">
              <GitHubIcon className={classes.iconSize} />
            </Link>
          </Grid>
          <Grid item xs={2} md={1} justify="center">
            <Link href="https://www.facebook.com/mergifyio/">
              <FacebookIcon className={classes.iconSize} />
            </Link>
          </Grid>
          <Grid item xs={2} md={1} justify="center">
            <Link href="https://twitter.com/Mergifyio">
              <TwitterIcon className={classes.iconSize} />
            </Link>
          </Grid>
          <Grid item xs={2} md={1} justify="center">
            <Link href="https://www.linkedin.com/company/mergify/">
              <LinkedInIcon className={classes.iconSize} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default function Home({ data }) {
  const classes = useStyles()
  const edges = data.allContributorsJson.edges
  const readMoreArray = new Array(edges.length).fill(true)
  const [isReadMore, setIsReadMore] = useState(readMoreArray)
  const toggleReadMore = index => {
    let newArr = [...isReadMore]
    newArr[index] = !newArr[index]
    setIsReadMore(newArr)
    console.log(isReadMore)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ background: "#034870" }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            style={{ fontWeight: "bold" }}
            noWrap
          >
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
              style={{ fontWeight: "bold" }}
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
                    <Typography
                      style={{ marginTop: "1.5rem" }}
                      className={classes.extraMargin}
                    >
                      {`Reach me at 👇`}
                    </Typography>
                    <Typography className={classes.extraMargin}>
                      {edge.node.github ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.github}
                          component="a"
                          target="_blank"
                        >
                          <GitHubIcon style={{ color: "#53A9DB" }}></GitHubIcon>
                        </Link>
                      ) : null}
                      {edge.node.twitter ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.twitter}
                          component="a"
                          target="_blank"
                        >
                          <TwitterIcon
                            style={{ color: "#53A9DB" }}
                          ></TwitterIcon>
                        </Link>
                      ) : null}
                      {edge.node.linkedin ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.linkedin}
                          component="a"
                          target="_blank"
                        >
                          <LinkedInIcon
                            style={{ color: "#53A9DB" }}
                          ></LinkedInIcon>
                        </Link>
                      ) : null}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <div style={{ padding: "1rem" }}>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      align="center"
                      style={{
                        color: "#034870",
                        fontStyle: "italic",
                      }}
                    >
                      {isReadMore[index]
                        ? edge.node.testimonial.slice(0, 75)
                        : edge.node.testimonial}
                      {edge.node.testimonial.length > 75 && (
                        <Button
                          onClick={() =>
                            toggleReadMore(index)
                          }
                        >
                          {isReadMore[index] ? "read more" : " show less"}
                        </Button>
                      )}
                    </Typography>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          style={{ fontWeight: "bold" }}
          gutterBottom
        >
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
          testimonial
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
