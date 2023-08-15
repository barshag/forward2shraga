import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>מה בקהילה?</h2>
          <p>
            מגוון עשיר של כלים ויכולת להתחבר ולהעשיר את הידע בנושא סוכני בינה מלאכותית
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "טוען..."}
        </div>
      </div>
    </div>
  );
};
