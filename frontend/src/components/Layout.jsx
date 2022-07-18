import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {

  const user = useSelector((state) => state.user.value);

    return (
        <div className="app-contents">
            <h2>DiscForum</h2>
            <nav
              style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
              }}
            >
              <Link to="/create-forum">Create a new forum</Link> | {' '}
              <Link to="/forums">Forums</Link> | {' '}
              { user.isLoggedIn ? <Link to="/logout">Logout</Link> :
                <Link to="/login">Login</Link>
              }
            </nav>
            <Outlet />
        </div>
    );
}