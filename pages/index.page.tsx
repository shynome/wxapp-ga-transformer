
import React from "react";
import { Form } from "./form.part";
import { Link } from "./link.part";
import { useTheme, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./index.style";

const Layout: React.StatelessComponent = (props) => {
  return (
    <Grid style={{ height: '100vh', width: '100vw' }}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  )
}

const Provider: React.StatelessComponent = (props) => {
  return (
    <LinkStateContainer.Provider>
      <UTMStateContainer.Provider>
        {props.children}
      </UTMStateContainer.Provider>
    </LinkStateContainer.Provider>
  )
}

import { UTMStateContainer, LinkStateContainer } from "./state";
export default () => {

  const styles = useStyles(useTheme())

  return (
    <Layout>
      <Provider>
        <Paper className={styles.main}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Form />
            </Grid>
            <Grid item xs={6}>
              <Link />
            </Grid>
          </Grid>
        </Paper>
      </Provider>
    </Layout>
  )

}
