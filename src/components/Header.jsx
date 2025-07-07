import { Link } from "react-router-dom";
const Header = ({ setSearch }) => {
  return (
    <>
      <header className="p-2 bg-light">
        <div className="container">
          <div className="row m-0 p-0 align-items-center">
            <div className="col-md-2">
              <Link to="/" className="text-dark">
                <h2 className="" style={{ fontFamily: "'Caveat', cursive" }}>
                  MeetSync
                </h2>
              </Link>
            </div>
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
                name=""
                id=""
              />
            </div>
          </div>{" "}
          <hr className="mt-4" />
        </div>
      </header>
    </>
  );
};
export default Header;
