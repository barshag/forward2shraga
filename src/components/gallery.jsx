import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>סוכנים קיימים</h2>
          <p>
        רשימה  של סוכנים פופולאריים
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (

                  <a href={d.link}>
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >

                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    
                    />
                  </div>
                    </a>

                ))
              : "טוען..."}
          </div>
        </div>
      </div>
    </div>
  );
};
