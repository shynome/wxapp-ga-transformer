import { useState } from "react";
import { useFormFields } from "./utils/form";
import { UTM } from "./utm";
import { createContainer } from "unstated-next";

export const useUTMState = () => {
  return useFormFields<UTM>({
    path: 'pages/home/index/index',
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  })
}
export const UTMStateContainer = createContainer(useUTMState)


interface LinkState {
  link: string,
}

export const useLinkState = () => {
  return useState<LinkState>({
    link: '',
  })
}
export const LinkStateContainer = createContainer(useLinkState)

