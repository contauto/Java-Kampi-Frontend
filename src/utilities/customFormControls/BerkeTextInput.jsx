import React from "react";
import { FormField, Label } from "semantic-ui-react";
import { useField } from "formik";

export default function BerkeTextInput({ ...props }) {
  const [field, meta] = useField(props);

  return(
      <FormField error={meta.touched&&!!meta.error}>
          <input {...props} {...field} />
          {meta.touched&&!!meta.error?(
            <Label pointing basic color="red" content={meta.error}></Label>
          ):null}
      </FormField>
  )
}
