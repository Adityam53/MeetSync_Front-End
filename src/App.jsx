import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import useFetch from "../useFetch";
function App() {
  const [meetUpType, setMeetUpType] = useState("Both");
  const { data, loading, error } = useFetch(
    "https://meet-sync-six.vercel.app/meetups"
  );
  const filteredMeetUps =
    meetUpType === "Both" || meetUpType === "all"
      ? data
      : data.filter((meetup) => meetup.type == meetUpType);

  const listMeetups =
    filteredMeetUps &&
    filteredMeetUps.map((meetup) => (
      <div key={meetup._id} className="col-md-4 mb-5">
        <Link to={`/${meetup._id}`}>
          {" "}
          <div className="custom-hover-shadow rounded-4 text-dark overflow-hidden me-5">
            <div className="position-relative ratio ratio-4x3">
              {" "}
              <img
                src={meetup.imageThumbnail}
                alt=""
                className="img-fluid object-fit-cover "
              />{" "}
              <div className="position-absolute top-0 start-0 m-2  rounded-pill">
                <span className="bg-light px-3 py-2 small fw-semibold rounded-3">
                  {meetup.type} Event
                </span>
              </div>
            </div>
            <div className="ps-1">
              <span className="fw-light" style={{ fontSize: "13px" }}>
                {meetup.date} | {meetup.startTime}
              </span>
              <p style={{ fontSize: "20px" }} className="fw-bold">
                {meetup.title}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ));

  return (
    <>
      <Header />
      <Heading heading="MeetUp Events" setMeetUpType={setMeetUpType} />
      <main className="d-flex flex-column bg-light min-vh-100">
        <div className="container">
          {" "}
          <div className="row">{listMeetups}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
