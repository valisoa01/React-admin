import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  useRecordContext,
  EditButton,
} from "react-admin";

const InternShowActions = () => {
  return (
    <TopToolbar>
      <ListButton />
      <EditButton />
    </TopToolbar>
  );
};
export const InternTitle = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <span>
      Detail : {record.firstname} {record.lastname}
    </span>
  );
};

export const InternShow = () => {
  return (
    <Show actions={<InternShowActions />}>
      <InternTitle />
      <SimpleShowLayout>
        <TextField source="firstname" label="Prénom" />

        <TextField source="lastname" label="Nom" />

        <TextField source="email" label="Email" />

        <TextField source="department" label="Département" />

        <NumberField
          source="salary"
          label="Salaire"
          options={{
            style: "currency",
            currency: "EUR",
          }}
        />

        <BooleanField source="active" label="Actif" />
      </SimpleShowLayout>
    </Show>
  );
};
