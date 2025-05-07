const Sidebar = ({ seletedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">My Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link ${seletedTab === "Home" && "active"}`}
            aria-current="page"
          >
            <i className="bi bi-house-door-fill me-2"></i>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("CreatePost");
          }}
        >
          <a
            href="#"
            className={`nav-link text-blue ${
              seletedTab === "CreatePost" && "active"
            }`}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Create Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
