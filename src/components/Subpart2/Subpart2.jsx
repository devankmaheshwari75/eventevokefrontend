import "./Subpart2.css";

import image2 from "../../assets/rightpart.jpg";

function Subpart2() {
  return (
    <>
      <div className="main-container-2">
        <div className="left2">
          <h2>PLAN YOUR</h2>
          <h1>Wedding </h1>

          <p>
            Is your big day outside , on a private property or in a warehouse
            style venue ? We are the outdoor private property experts !!
          </p>
        </div>

        <div className="right2">
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Subpart2;
