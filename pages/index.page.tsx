
import React, { useEffect } from "react";
import { Form } from "./form.part";
import { Link } from "./link.part";
import { useTheme, Paper, Grid } from "@material-ui/core";
import { useStyles } from "./index.style";
import { transformer } from "./utm_transformer";

const Layout: React.StatelessComponent = (props) => {
  return (
    <Grid style={{ height: '100%', width: '100%' }}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={10}
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

import { UTM } from "./utm";
const utm_tmp_store_key = 'utm-tmp-store'
const useUTMStateINIT = () => {

  const [UTMState, setUTMField, setUTMState] = UTMStateContainer.useContainer()

  // init
  useEffect(() => {
    let b: Partial<UTM> = {}
    try {
      let v = localStorage.getItem(utm_tmp_store_key) || '{}'
      b = JSON.parse(v)
    } catch (e) {

    }
    setUTMState({
      path: b.path || 'pages/home/index/index',
      utm_source: b.utm_source || "Wechat",
      utm_medium: b.utm_medium || "Social",
      utm_campaign: b.utm_campaign || "",
      utm_term: b.utm_term || "",
      utm_content: b.utm_content || "",
    })
  }, [])

  let t = JSON.stringify(UTMState)
  // when value change store to tmp 
  useEffect(() => {
    localStorage.setItem(utm_tmp_store_key, t)
  }, [t])

}

const Main: React.StatelessComponent = (props) => {

  const styles = useStyles(useTheme())
  const [LinkState, setLinkState] = LinkStateContainer.useContainer()
  useUTMStateINIT()
  const [UTMState] = UTMStateContainer.useContainer()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLinkState({
      link: transformer.to(UTMState),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}

import { UTMStateContainer, LinkStateContainer } from "./state";
export default () => {
  return (
    <Layout>
      <Provider>
        <Main />
      </Provider>
    </Layout>
  )
}
