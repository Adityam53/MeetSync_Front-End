import { Link, useLocation } from "react-router-dom";

const Header = ({ setSearch }) => {
  const location = useLocation();
  const isDetailsPage = location.pathname !== "/";

  return (
    <>
      <header className="p-2 bg-light">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2">
            <div className="col-md-2">
              <Link to="/" className="text-dark">
                <h2 className="" style={{ fontFamily: "'Caveat', cursive" }}>
                  MeetSync
                </h2>
              </Link>
            </div>
            {!isDetailsPage && (
              <div className="col-md-10">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="float-end form-control-sm"
                  style={{
                    background: "transparent",
                    borderColor: "Highlight",
                    color: "black",
                  }}
                  placeholder="Search by title and tag"
                />
              </div>
            )}
          </div>{" "}
          <hr className="mt-4" />
        </div>
      </header>
    </>
  );
};
export default Header;
