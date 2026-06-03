import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const InternList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="email" />
      <TextField source="department" />
      <NumberField source="duration" />
      <BooleanField source="active" />

      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
