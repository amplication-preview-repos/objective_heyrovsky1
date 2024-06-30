import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="active" source="active" />
      </SimpleForm>
    </Edit>
  );
};