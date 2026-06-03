import { useRecordContext, useGetOne } from "react-admin";

export const ManagerCard = () => {
  const record = useRecordContext();

  const { data, isPending, error } = useGetOne(
    "employees",
    {
      id: record?.employeeId,
    },
    {
      enabled: !!record?.employeeId,
    },
  );

  if (isPending) {
    return <p>Chargement du manager...</p>;
  }

  if (error) {
    return <p>Erreur lors du chargement.</p>;
  }

  if (!data) {
    return <p>Manager introuvable.</p>;
  }

  return (
    <div>
      <h3>Manager</h3>

      <p>
        {data.firstName} {data.lastName}
      </p>

      <p>{data.email}</p>

      <p>{data.department}</p>

      <p>{data.active ? "Actif" : "Inactif"}</p>
    </div>
  );
};
