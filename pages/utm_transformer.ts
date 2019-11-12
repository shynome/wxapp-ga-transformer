import { UTM } from "./utm";

export const transformer = {
  from(path: string): UTM {
    let utm_list = path.split("!")
    let utm: UTM = {
      path: '',
      utm_source: utm_list[0] || '', // 必填. 广告系列来源，用于确定具体的搜索引擎、简报或其他来源. 例: google
      utm_medium: utm_list[1] || '', // 必填. 广告系列媒介，用于确定电子邮件或采用每次点击费用 (CPC) 的广告等媒介. 例: cpc
      utm_campaign: utm_list[2] || '', // 必填. 广告系列名称，用于关键字分析，以标识具体的产品推广活动或战略广告系列. 例: spring_sale
      utm_term: utm_list[3] || '', // 广告系列字词，用于付费搜索，为广告提供关键字. 例: running+shoes
      utm_content: utm_list[4] || '', // 广告系列内容，用于 A/B 测试和内容定位广告，以区分指向相同网址的不同广告或链接. 例: logolink, textlink
    }
    return utm
  },
  to(utm: UTM): string {
    let utm_list = []
    let ga_params = utm_list.join('!')
    return ga_params
  }
}
