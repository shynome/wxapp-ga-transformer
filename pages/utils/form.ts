import { useState, SetStateAction, Dispatch } from "react";

export type ChangeHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

export const useFormFields = <T extends object>(defaultFields: T): [T, (t: keyof T) => ChangeHandler, Dispatch<SetStateAction<T>>] => {

  let [fields, setFields] = useState(defaultFields)

  let saveFormField = (t: keyof T): ChangeHandler => (e: any) => {
    setFields({
      ...fields,
      [t]: e.target.value
    })
  }

  return [fields, saveFormField, setFields]

}
