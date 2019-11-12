
import React from "react";
import { useFormFields } from "./form";
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
import { useStyles } from "./index.style";

export const Form = () => {

  const styles = useStyles(useTheme())

  const [fields, saveFormField] = useFormFields<UTM>({
    path: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={`${styles.input}`}
        label={'path'}
        onChange={saveFormField('path')}
        value={fields.path}
        helperText={utm_remark.path}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_source'}
        onChange={saveFormField('utm_source')}
        value={fields.utm_source}
        helperText={utm_remark.utm_source}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_medium'}
        onChange={saveFormField('utm_medium')}
        value={fields.utm_medium}
        helperText={utm_remark.utm_medium}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_campaign'}
        onChange={saveFormField('utm_campaign')}
        value={fields.utm_campaign}
        helperText={utm_remark.utm_campaign}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_term'}
        onChange={saveFormField('utm_term')}
        value={fields.utm_term}
        helperText={utm_remark.utm_term}
        fullWidth
      />
      <TextField
        className={`${styles.input}`}
        label={'utm_content'}
        onChange={saveFormField('utm_content')}
        value={fields.utm_content}
        helperText={utm_remark.utm_content}
        fullWidth
      />
      <Button type='submit' fullWidth size='large' variant='contained' color='primary'>
        生成小程序谷歌跟踪链接
      </Button>
    </form>
  )
}

export default Form
