import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            forward2shraga
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                מאפיינים
              </a>
            </li> */}
                      <li>
              <a href="#contact" className="page-scroll">
                צור קשר
              </a>
            </li>
            {/* <li>
              <a href="#about" className="page-scroll">
                אודות
              </a>
            </li> */}
  
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                גלריה
              </a>
            </li> */}
            <li>
              {/* <a href="/#testimonials" className="page-scroll">
                המלצות
              </a> */}
            </li>
            <li>
              <a href="/#team" className="page-scroll">
                הצוות
              </a>
            </li>
            <li>
              <a href="https://blog.forward2shraga.com" className="page-scroll">
                בלוג
              </a>
            </li>
            <li>
              <a href="/tools" className="page-scroll">
                ארגז כלים של שרגא
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
