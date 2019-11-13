import { useEffect, useState, useMemo, Fragment } from "react";
import { TextField, Button, useTheme, Grid } from "@material-ui/core";
import { useSnackbar, OptionsObject as snackbarOptions } from 'notistack'
import { LinkStateContainer, UTMStateContainer } from "./state";
import ClipboardJS from "clipboard";
import { useStyles } from "./link.style";
import { transformer } from "./utm_transformer";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const snackbarOption: snackbarOptions = {
  autoHideDuration: 4e3,
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  // style: { maxWidth: '400px' },
}

export const Link = () => {

  const styles = useStyles(useTheme())
  const [LinkState, setLinkState] = LinkStateContainer.useContainer()
  const [UTMState, setUTMField, setUTM] = UTMStateContainer.useContainer()
  const [value, setValue] = useState(LinkState.link || '')
  const handleParseUTM = () => {
    setUTM(transformer.from(value))
  }
  const { enqueueSnackbar } = useSnackbar()
  const handleChange = useMemo(() => {
    return (e: any) => {
      setValue(e.target.value)
    }
  }, [setValue])
  const clipboardText = useMemo(() => {
    return () => value
  }, [value])

  useEffect(() => {
    setValue(LinkState.link)
  }, [LinkState.link])

  useEffect(() => {
    var btn = new ClipboardJS('#copy-link', {
      text: clipboardText
    })
    btn
      .on('success', () => {
        enqueueSnackbar("复制成功", snackbarOption)
      })
      .on('error', () => {
        enqueueSnackbar("复制失败, 请手动点击输入框进行复制", { ...snackbarOption, autoHideDuration: 2e3, })
      })
    return () => btn.destroy()
  }, [clipboardText])

  return (
    <Fragment>
      <TextField
        className={styles.linkarea}
        multiline
        fullWidth
        rows={3}
        value={value}
        rowsMax={10}
        onChange={handleChange}
        variant='outlined'
        label={'小程序跟踪链接'}
      >
      </TextField>
      <Grid
        container
        direction="column"
        spacing={1}
      >
        <Grid item>
          <Button type='submit' fullWidth size='large' variant='contained' color='primary'>
            生成小程序谷歌跟踪链接
          </Button>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Button
                onClick={handleParseUTM} fullWidth size='large' variant='outlined' color='primary'
                startIcon={<KeyboardArrowLeftIcon />}
              >
                解析
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button id='copy-link' fullWidth size='large' variant='outlined' color='primary'>
                点击复制
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )

}
