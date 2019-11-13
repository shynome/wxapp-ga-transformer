
import React from "react";
import { Form } from "./form.part";
import { Link } from "./link.part";
import { useTheme, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./index.style";

import { UTMStateContainer, LinkStateContainer } from "./state";
export default () => {

  const styles = useStyles(useTheme())

  return (
    <LinkStateContainer.Provider>
      <UTMStateContainer.Provider>
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
      </UTMStateContainer.Provider>
    </LinkStateContainer.Provider>
  )

}
