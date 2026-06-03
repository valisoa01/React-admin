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

const departments = [
  { id: "Informatique", name: "Informatique" },
  { id: "Marketing", name: "Marketing" },
  { id: "RH", name: "RH" },
  { id: "Finance", name: "Finance" },
];

export const InternCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="firstname" validate={required()} />
      <TextInput source="lastname" validate={required()} />
      <TextInput source="email" validate={required()} />

      <SelectInput
        source="department"
        choices={departments}
        validate={required()}
      />

      <NumberInput
        source="duration"
        label="Durée (mois)"
        validate={[required(), minValue(1)]}
      />

      <BooleanInput source="active" defaultValue={true} />
    </SimpleForm>
  </Create>
);
