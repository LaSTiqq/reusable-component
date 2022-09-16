import "./content.css";

export const content = ({ headerText, loremText }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-12 just-for-height"></div>
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <h1 className="text-dark text-center fw-bold">{headerText}</h1>
          </div>
          <div className="col-6">
            <p className="text-primary text-center fw-bold">{loremText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
