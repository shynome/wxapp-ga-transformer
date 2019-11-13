
import React from "react";
import { useTheme, TextField, Button, } from "@material-ui/core";

const utm_remark: UTM = {
  path: "小程序页面路径",
  utm_source: "必填. 广告系列来源，用于确定具体的搜索引擎、简报或其他来源. 例: google",
  utm_medium: "必填. 广告系列媒介，用于确定电子邮件或采用每次点击费用 (CPC) 的广告等媒介. 例: cpc",
  utm_campaign: "必填. 广告系列名称，用于关键字分析，以标识具体的产品推广活动或战略广告系列. 例: spring_sale",
  utm_term: "广告系列字词，用于付费搜索，为广告提供关键字. 例: running+shoes",
  utm_content: "广告系列内容，用于 A/B 测试和内容定位广告，以区分指向相同网址的不同广告或链接. 例: logolink, textlink",
}

import { UTM } from "./utm";
import { useStyles } from "./form.style";
import { UTMStateContainer } from "./state";

export const Form = () => {

  const styles = useStyles(useTheme())

  const [UTMState, setUTMState] = UTMStateContainer.useContainer()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(UTMState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={`${styles.input}`}
        label={'path'}
        onChange={setUTMState('path')}
        value={UTMState.path}
        helperText={utm_remark.path}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_source'}
        onChange={setUTMState('utm_source')}
        value={UTMState.utm_source}
        helperText={utm_remark.utm_source}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_medium'}
        onChange={setUTMState('utm_medium')}
        value={UTMState.utm_medium}
        helperText={utm_remark.utm_medium}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_campaign'}
        onChange={setUTMState('utm_campaign')}
        value={UTMState.utm_campaign}
        helperText={utm_remark.utm_campaign}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_term'}
        onChange={setUTMState('utm_term')}
        value={UTMState.utm_term}
        helperText={utm_remark.utm_term}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_content'}
        onChange={setUTMState('utm_content')}
        value={UTMState.utm_content}
        helperText={utm_remark.utm_content}
        fullWidth
      />
      <Button type='submit' fullWidth size='large' variant='contained' color='primary'>
        生成小程序谷歌跟踪链接
      </Button>
    </form>
  )
}

export default () => {
  return (
    <UTMStateContainer.Provider>
      <Form />
    </UTMStateContainer.Provider>
  )
}
