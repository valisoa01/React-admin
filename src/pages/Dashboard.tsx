import { Card, CardContent, Typography } from "@mui/material";
import { useGetList } from "react-admin";

export const Dashboard = () => {
  const { data: employees, total: totalEmployees } = useGetList("employees");

  const { total: activeEmployees } = useGetList("employees", {
    filter: {
      active: true,
    },
  });

  const { total: totalInterns } = useGetList("interns");

  const averageSalary =
    employees && employees.length > 0
      ? (
          employees.reduce((sum, employee) => sum + employee.salary, 0) /
          employees.length
        ).toFixed(2)
      : 0;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Dashboard RH</Typography>

        <Typography>Total employés : {totalEmployees}</Typography>

        <Typography>Employés actifs : {activeEmployees}</Typography>

        <Typography>Total stagiaires : {totalInterns}</Typography>

        <Typography>Salaire moyen : {averageSalary} €</Typography>
      </CardContent>
    </Card>
  );
};
