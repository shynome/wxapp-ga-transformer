
import React, { Fragment } from "react";
import { useTheme, TextField } from "@material-ui/core";

import { useStyles } from "./form.style";
import { UTMStateContainer } from "./state";
import { UTM } from "./utm";

export const Form = () => {

  const styles = useStyles(useTheme())

  const [UTMState, setUTMField] = UTMStateContainer.useContainer()

  return (
    <Fragment>
      {([
        ['path', '小程序页面路径', false],
        ['utm_source', '必填. 广告系列来源，用于确定具体的搜索引擎、简报或其他来源. 例: google', true],
        ['utm_medium', '必填. 广告系列媒介，用于确定电子邮件或采用每次点击费用 (CPC) 的广告等媒介. 例: cpc', true],
        ['utm_campaign', '必填. 广告系列名称，用于关键字分析，以标识具体的产品推广活动或战略广告系列. 例: spring_sale', true],
        ['utm_term', '广告系列字词，用于付费搜索，为广告提供关键字. 例: running+shoes', false],
        ['utm_content', '广告系列内容，用于 A/B 测试和内容定位广告，以区分指向相同网址的不同广告或链接. 例: logolink, textlink', false],
      ] as [keyof UTM, string, boolean][]).map(([field, remark, required]) => (
        <TextField
          key={field}
          className={styles.input}
          label={field}
          onChange={setUTMField(field)}
          value={UTMState[field]}
          required={required}
          helperText={remark}
          variant='outlined'
          fullWidth
        />
      ))}
    </Fragment>
  )
}
