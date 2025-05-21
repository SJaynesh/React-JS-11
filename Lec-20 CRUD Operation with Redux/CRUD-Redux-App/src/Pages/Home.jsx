import { useDispatch, useSelector } from "react-redux";
import iconMargin from "../Utills/iconStyle";
import { deleteUser } from "../Redux/Actions/crudAction";
import { useNavigate } from "react-router";
import { decrement, increment } from "../Redux/Actions/counterAction";
const Home = () => {
  const allUsers = useSelector((state) => state.crud);
  const count = useSelector((state) => state.coute);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-6 mt-5">
          <h1 style={{ textAlign: "center" }}>View Users</h1>
          {allUsers.length > 0 ? (
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Username</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          onClick={() => navigate("/edit", { state: user })}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          type="button"
                          style={iconMargin}
                          onClick={() => dispatch(deleteUser(index))}
                          className="btn btn-outline-danger"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <img
              style={{ justifyContent: "center", height: "50vh" }}
              src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
            />
          )}

          <h1>Count : {count}</h1>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => dispatch(increment())}
          >
            <i className="bi bi-plus-lg"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(decrement())}
          >
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
