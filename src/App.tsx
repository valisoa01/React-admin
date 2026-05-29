import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { EmployeeList } from "./employees/EmployeeList";

const dataProvider = jsonServerProvider("http://localhost:3002");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="employees" list={EmployeeList} />
    </Admin>
  );
}

export default App;
