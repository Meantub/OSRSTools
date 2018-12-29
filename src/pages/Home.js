import React from "react";
import DocumentMeta from "react-document-meta";

const Home = () => {
  const meta = {
    title: "OSRSTools - Home"
  };
  return (
    <DocumentMeta {...meta} extend>
      <h3>Home</h3>
      <hr />
      <p>
        OSRSTools is a website entirely devoted to Oldschool Runescape with the
        intent of providing great tools such as XP calculators and stats
        viewers. I am going to regularly being adding to and fixing this website
        for usage of you the user.
      </p>
      <br />
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src="img/hazard_image_cap.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Calculators</h5>
            <p className="card-text">
              Figure out how much it's going to cost you to go for those 99s
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="img/stats_image_cap.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Stats</h5>
            <p className="card-text">
              Check which of your stats needs the most work!
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img-top"
            src="img/hazard_image_cap.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Coming soon</h5>
            <p className="card-text">It's secret and in development</p>
            <small className="text-muted">
              <em>shhhhh don't tell anyone</em>
            </small>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default Home;
