import { useRecordContext, useUpdate } from "react-admin";

import Button from "@mui/material/Button";

export const QuickStatusToggle = () => {
  const record = useRecordContext();

  const [update, { isPending }] = useUpdate();

  if (!record) return null;

  const handleClick = () => {
    update("employees", {
      id: record.id,
      data: {
        active: !record.active,
      },
      previousData: record,
    });
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
      size="small"
      variant="contained"
    >
      {record.active ? "Désactiver" : "Activer"}
    </Button>
  );
};
