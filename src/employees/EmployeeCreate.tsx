import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  required,
  minValue,
} from "react-admin";

const departmentChoices = [
  { id: "Informatique", name: "Informatique" },
  { id: "Marketing", name: "Marketing" },
  { id: "RH", name: "RH" },
  { id: "Finance", name: "Finance" },
];

export const EmployeeCreate = () => {
  return (
    <Create redirect="list">
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

        <BooleanInput source="active" label="Actif" defaultValue={true} />
      </SimpleForm>
    </Create>
  );
};
