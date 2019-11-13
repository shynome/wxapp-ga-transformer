
import React, { Fragment } from "react";
import { useTheme, TextField } from "@material-ui/core";

import { useStyles } from "./form.style";
import { UTMStateContainer } from "./state";

export const Form = () => {

  const styles = useStyles(useTheme())

  const [UTMState, setUTMField] = UTMStateContainer.useContainer()

  return (
    <Fragment>
      <TextField
        className={styles.input}
        label={'path'}
        onChange={setUTMField('path')}
        value={UTMState.path}
        helperText={"小程序页面路径"}
        variant='outlined'
        fullWidth
      />
      <TextField
        className={styles.input}
        label={'utm_source'}
        onChange={setUTMField('utm_source')}
        value={UTMState.utm_source}
        required
        helperText={"必填. 广告系列来源，用于确定具体的搜索引擎、简报或其他来源. 例: google"}
        variant='outlined'
        fullWidth
      />
      <TextField
        className={styles.input}
        label={'utm_medium'}
        onChange={setUTMField('utm_medium')}
        value={UTMState.utm_medium}
        required
        helperText={"必填. 广告系列媒介，用于确定电子邮件或采用每次点击费用 (CPC) 的广告等媒介. 例: cpc"}
        variant='outlined'
        fullWidth
      />
      <TextField
        className={styles.input}
        label={'utm_campaign'}
        onChange={setUTMField('utm_campaign')}
        value={UTMState.utm_campaign}
        required
        helperText={"必填. 广告系列名称，用于关键字分析，以标识具体的产品推广活动或战略广告系列. 例: spring_sale"}
        variant='outlined'
        fullWidth
      />
      <TextField
        className={styles.input}
        label={'utm_term'}
        onChange={setUTMField('utm_term')}
        value={UTMState.utm_term}
        helperText={"广告系列字词，用于付费搜索，为广告提供关键字. 例: running+shoes"}
        variant='outlined'
        fullWidth
      />
      <TextField
        className={styles.input}
        label={'utm_content'}
        onChange={setUTMField('utm_content')}
        value={UTMState.utm_content}
        helperText={"广告系列内容，用于 A/B 测试和内容定位广告，以区分指向相同网址的不同广告或链接. 例: logolink, textlink"}
        variant='outlined'
        fullWidth
      />
    </Fragment>
  )
}

