import Composition from "./Composition";
import Dashboard from "./Dashboard";
import Tokens from "./Tokens ";

const HomeDashboard = () => {
  return (
    <div className="lg:ml-36">
      <Dashboard></Dashboard>
      <Tokens></Tokens>
      <Composition></Composition>
    </div>
  );
};

export default HomeDashboard;
