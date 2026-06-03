import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  required,
  minValue,
  useRecordContext,
} from "react-admin";
const InternTitle = () => {
  const record = useRecordContext();

  if (!record) return null;

  return (
    <span>
      Modifier : {record.firstname} {record.lastname}
    </span>
  );
};
export const EmployeeEdit = () => {
  return (
    <Edit title={<InternTitle />}>
      <SimpleForm>
        <TextInput
          source="firstname"
          label="Prénom"
          validate={required()}
          fullWidth
        />

        <TextInput
          source="lastname"
          label="Nom"
          validate={required()}
          fullWidth
        />

        <TextInput
          source="email"
          label="Email"
          validate={required()}
          fullWidth
        />

        <SelectInput
          source="department"
          label="Département"
          choices={departmentChoices}
          validate={required()}
          fullWidth
        />

        <NumberInput
          source="salary"
          label="Salaire"
          validate={[required(), minValue(1500)]}
        />

        <BooleanInput source="active" label="Actif" />
      </SimpleForm>
    </Edit>
  );
};
