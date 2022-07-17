import { Link, Outlet } from "react-router-dom";

function App() {
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
          <Link to="/forums">Forums</Link>
        </nav>
        <Outlet />
    </div>
);
}

export default App;
