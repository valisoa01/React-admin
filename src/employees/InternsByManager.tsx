import { useRecordContext, useGetList } from "react-admin";

export const InternsByManager = () => {
  const record = useRecordContext();

  const { data, total, isPending } = useGetList(
    "interns",
    {
      filter: {
        employeeId: record?.id,
      },
      pagination: {
        page: 1,
        perPage: 50,
      },
    },
    {
      enabled: !!record?.id,
    },
  );

  if (isPending) {
    return <p>Chargement des stagiaires...</p>;
  }

  return (
    <div>
      <h3>Stagiaires encadrés ({total})</h3>

      {data?.length === 0 && <p>Aucun stagiaire.</p>}

      {data?.map((intern) => (
        <div key={intern.id}>
          • {intern.firstName} {intern.lastName}
        </div>
      ))}
    </div>
  );
};
