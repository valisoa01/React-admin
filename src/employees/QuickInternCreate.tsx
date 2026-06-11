import { useState } from "react";

import { useRecordContext, useCreate, useRefresh } from "react-admin";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

export const QuickInternCreate = () => {
  const record = useRecordContext();

  const refresh = useRefresh();

  const [create] = useCreate();

  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    create(
      "interns",
      {
        data: {
          firstName,
          lastName,

          email: "",

          department: record?.department,

          salary: 1500,

          active: true,

          employeeId: record?.id,
        },
      },
      {
        onSuccess: () => {
          refresh();
          setOpen(false);

          setFirstName("");
          setLastName("");
        },
      },
    );
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Ajouter un stagiaire
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Nouveau stagiaire</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            fullWidth
            margin="dense"
            label="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Annuler</Button>

          <Button onClick={handleSubmit}>Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
