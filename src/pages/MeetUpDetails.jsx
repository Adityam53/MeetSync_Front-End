import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MeetUpDetails = () => {
  const { loading, error, data } = useFetch(
    "https://meet-sync-six.vercel.app/meetups"
  );
  const meetUpId = useParams();
  console.log(meetUpId);
  const meetUpDetails =
    data && data.find((meetup) => meetup._id == meetUpId.meetUpId);

  console.log(meetUpDetails);

  return (
    <>
      <Header />
      <main className="bg-light d-flex flex-column min-vh-100">
        {meetUpDetails && (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="fs-2 fw-bold">{meetUpDetails.title}</h1>
                <p className="mb-4">
                  Hosted By: <br />
                  <b className="m-0">Experts In The Field</b>
                </p>{" "}
                <img
                  src={meetUpDetails.imageThumbnail}
                  className="img-fluid mt-2 shadow-lg"
                  alt=""
                />
                <h4 className="fw-bold pt-3 pb-2">Details: </h4>
                <p>{meetUpDetails.details}</p>
                <h4 className="fw-bold">Additional Information: </h4>
                <span className="">
                  <b>Dress Code: </b>
                  {meetUpDetails.dressCode}
                </span>
                <br />
                <p className="">
                  <b className="">Age Restrictions: </b>
                  {meetUpDetails.ageRestrictions}
                </p>
                <h4 className="fw-bold">Event Tags: </h4>
                {meetUpDetails.tags.map((tag) => (
                  <span className="btn btn-danger text-light me-4">{tag}</span>
                ))}
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div className="card p-3 border border-0">
                  <div className="row m-0 p-0 align-items-center">
                    <div className="col-md-3 m-0 p-0">
                      {" "}
                      <b className="">Time: </b>
                    </div>
                    <div className="col-9 m-0 p-0">
                      <p className="" style={{ fontSize: "13px" }}>
                        {meetUpDetails.date}
                        <span> at </span>
                        {meetUpDetails.startTime}
                        <span> to </span>
                        {meetUpDetails.date}
                        <span> at </span>
                        {meetUpDetails.endTime}
                      </p>
                    </div>
                  </div>
                  <div className="row p-o m-0">
                    <div className="col-md-3 m-0 p-0">
                      {" "}
                      <b>Venue: </b>
                    </div>
                    <div className="col-md-9 m-0 p-0">
                      {" "}
                      <p className="">{meetUpDetails.venue}</p>
                    </div>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-md-3 m-0 p-0">
                      {" "}
                      <b>Fees:</b>{" "}
                    </div>
                    <div className="col-md-9 m-0 p-0">
                      {" "}
                      ₹{meetUpDetails.entryFee}
                    </div>
                  </div>
                </div>
                <h4 className="fw-bold py-4">
                  Speakers:({meetUpDetails.speakers.length}){" "}
                </h4>
                <div className="row">
                  {meetUpDetails.speakers.map((speaker) => (
                    <div className="col-md-6">
                      <div className="card p-4 border border-0 h-100 shadow">
                        <div className="text-center">
                          <img
                            src={speaker.speakerImg}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                            className="img-fluid rounded-circle mb-2"
                            alt=""
                          />
                          <br />
                          <span className="fw-bold fs-5">
                            {speaker.speakerName}
                          </span>
                          <br />
                          <span className="mt-2">
                            {speaker.speakerDesignation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p
                    className="btn btn-danger text-light mt-5"
                    style={{ paddingLeft: "60px", paddingRight: "60px" }}
                  >
                    RSVP
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
export default MeetUpDetails;
