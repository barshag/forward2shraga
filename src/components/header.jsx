import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "טוען..."}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "טוען..."}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  מה יש בקהילה?
                </a>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                               <a
                  href="https://blog.forward2shraga.com"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  כניסה לבלוג
                </a>{" "}
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
