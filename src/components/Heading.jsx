import useFetch from "../../useFetch";
const Heading = ({ heading, setMeetUpType }) => {
  return (
    <>
      <main className=" py-4 bg-light">
        <div className="container">
          <div className="row m-0 p-0 align-items-center">
            <div className="col-md-10 p-0">
              <h1 className="display-5 fw-bold">{heading}</h1>
            </div>
            <div className="col-md-2 p-0">
              <select
                onChange={(e) => setMeetUpType(e.target.value)}
                name=""
                className=" form-control-sm float-end text-center"
                style={{
                  background: "transparent",
                  borderColor: "Highlight",
                  color: "black",
                }}
                id="eventTypeSelect"
              >
                <option value="all">Select Event Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Heading;
