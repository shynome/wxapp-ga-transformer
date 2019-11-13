import { useEffect } from "react";
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
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    var btn = new ClipboardJS('#copy-link', {
      text: () => {
        return `dddddddddddddd`
      }
    })
    btn
      .on('success', () => {
        enqueueSnackbar("复制成功", snackbarOption)
      })
      .on('error', () => {
        enqueueSnackbar("复制失败, 请手动添加", { ...snackbarOption, autoHideDuration: 2e3, })
      })
    return () => btn.destroy()
  })

  return (
    <form>
      <TextField
        multiline
        fullWidth
        rows={3}
        rowsMax={10}
        label={'小程序路径'}
      />
      <Button id='copy-link' className={styles.copy} fullWidth size='large' variant='contained' color='primary'>
        点击复制小程序链接
      </Button>
    </form>
  )

}
