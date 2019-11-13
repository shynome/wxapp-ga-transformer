import { useEffect, useState, useMemo } from "react";
import { TextField, Button, useTheme } from "@material-ui/core";
import { useSnackbar, OptionsObject as snackbarOptions } from 'notistack'
import { LinkStateContainer } from "./state";
import ClipboardJS from "clipboard";
import { useStyles } from "./link.style";

const snackbarOption: snackbarOptions = {
  autoHideDuration: 4e3,
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  // style: { maxWidth: '400px' },
}

export const Link = () => {

  const styles = useStyles(useTheme())
  const [LinkState, setLinkState] = LinkStateContainer.useContainer()
  const [value, setValue] = useState(LinkState.link || '')
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
        enqueueSnackbar("复制失败, 请手动添加", { ...snackbarOption, autoHideDuration: 2e3, })
      })
    return () => btn.destroy()
  }, [clipboardText])

  return (
    <form>
      <TextField
        multiline
        fullWidth
        rows={3}
        value={value}
        rowsMax={10}
        onChange={handleChange}
        variant='outlined'
        label={'小程序跟踪链接'}
      />
      <Button id='copy-link' className={styles.copy} fullWidth size='large' variant='contained' color='primary'>
        点击复制小程序跟踪链接
      </Button>
    </form>
  )

}
