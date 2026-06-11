import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

import { People, PersonAdd, Work, AttachMoney } from "@mui/icons-material";

import { useGetList, useRedirect } from "react-admin";

export const Dashboard = () => {
  const redirect = useRedirect();

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

  const stats = [
    {
      title: "Employés",
      value: totalEmployees || 0,
      icon: <People fontSize="large" />,
      action: () => redirect("list", "employees"),
    },
    {
      title: "Employés Actifs",
      value: activeEmployees || 0,
      icon: <Work fontSize="large" />,
      action: () =>
        redirect(
          "/employees?filter=" +
            encodeURIComponent(
              JSON.stringify({
                active: true,
              }),
            ),
        ),
    },
    {
      title: "Stagiaires",
      value: totalInterns || 0,
      icon: <PersonAdd fontSize="large" />,
      action: () => redirect("list", "interns"),
    },
    {
      title: "Salaire Moyen",
      value: `${averageSalary} €`,
      icon: <AttachMoney fontSize="large" />,
      action: () => redirect("list", "employees"),
    },
  ];

  return (
    <Box p={4}>
      {/* Header */}

      <Card
        sx={{
          mb: 4,
          borderRadius: 4,
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "white",
          boxShadow: 6,
        }}
      >
        <CardContent>
          <Typography variant="h3" fontWeight="bold">
            Dashboard RH
          </Typography>

          <Typography variant="h6" sx={{ mt: 1 }}>
            Gestion des employés et stagiaires
          </Typography>
        </CardContent>
      </Card>

      {/* Statistiques */}

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
            key={stat.title}
          >
            <Card
              onClick={stat.action}
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                boxShadow: 4,
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography color="text.secondary">{stat.title}</Typography>

                    <Typography variant="h4" fontWeight="bold">
                      {stat.value}
                    </Typography>
                  </Box>

                  {stat.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
