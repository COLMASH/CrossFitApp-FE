import AdminProfile from "../components/Admin/AdminProfile";
import AdminBar from "../components/Admin/AdminBar";
import AdminManager from "../components/Admin/AdminManager";
import AdminList from "../components/Admin/AdminList";

import "../styles/AdminsView.css";

function MainAdmin() {
  return (
    <div className="Admins">
      <div className="admins-blockNavInfo">
        <div>
          <AdminProfile />
        </div>
        <div>
          <AdminBar />
        </div>
      </div>
      <div className="admins-blockManager">
        <div>
          <AdminManager />
          <br />
          <h3>BOX ADMINISTRATORS</h3>
          <AdminList />
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
