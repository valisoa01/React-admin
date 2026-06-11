import { useRecordContext, useGetList } from "react-admin";

export const DepartmentStats = () => {
  const record = useRecordContext();

  const { total, isPending } = useGetList(
    "employees",
    {
      filter: {
        department: record?.department,
        active: true,
      },
      pagination: {
        page: 1,
        perPage: 1,
      },
    },
    {
      enabled: !!record?.department,
    },
  );

  if (isPending) {
    return <p>Chargement des statistiques...</p>;
  }

  return (
    <div>
      <h3>Employés actifs du département : {total}</h3>
    </div>
  );
};
