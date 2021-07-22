import { useSelector } from "react-redux";
import AdminUpdateInfo from "./AdminUpdateInfo";

function AdminInfo() {
  const { admin } = useSelector((state) => {
    return {
      admin: state.selectAdminReducer.admin,
    };
  });

  const birthdayFormatted = admin.birthday.substring(0, 10);

  return (
    <div class="admin-container">
      <div class="admin-main-body">
        <div className="card2">
          <div className="card2-body">
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> DNI Type: </h2>
              </div>
              <div className="col-sm-9">{admin.dniType}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0"> DNI Number: </h2>
              </div>
              <div className="col-sm-9">{admin.dni}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Full Name</h2>
              </div>
              <div className="col-sm-9">
                {admin.name} {admin.lastname}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Email</h2>
              </div>
              <div className="col-sm-9">{admin.email}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Mobile </h2>
              </div>
              <div className="col-sm-9">{admin.phone}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h2 className="mb-0">Birthday</h2>
              </div>
              <div className="col-sm-9">{birthdayFormatted}</div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="homeButton btn btn-primary btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#AdminUpdateInfo"
                >
                  <strong>EDIT</strong>
                </button>
              </div>
            </div>
            <AdminUpdateInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
