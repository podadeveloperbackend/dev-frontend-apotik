import DashboardContextProvider from "../../context/DashboardContext/DashboardContext";
import { Page } from "./Page/Page";
const DashboardOwnerPage = () => {

  return (
    <DashboardContextProvider>
      <div>
        <div className="d-flex flex-column gap-2">
          <Page />
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default DashboardOwnerPage;
