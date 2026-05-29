 import {
    List,
    Datagrid,
    TextField
 } from 'react-admin';

export const EmployeeList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="email" />
      </Datagrid>
    </List>
  );
};