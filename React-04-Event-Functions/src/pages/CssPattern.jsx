import React from "react";

const CssPattern = () => {
  return (
    <>
      <style>
        {`

          body {
            font-family: monospace;
          }

          .layout {
            min-height: 100vh;
            border: 4px solid #b8b8b8;
            display: flex;
            flex-direction: column;
          }

          .header {
            min-height: 100px;
            background-color: #51a4eb;
            color: #ffffff;
            display: flex;
            align-items: center;
            padding: 25px;
            font-size: 24px;
            font-weight: bold;
          }

          .content-wrapper {
            width: 61%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
          }

          .top-row {
            display: flex;
            width: 100%;
          }

          .main-content {
            width: 66.666%;
            min-height: 260px;
            background-color: #6dc33f;
          }

          .sidebar {
            width: 33.333%;
            min-height: 260px;
            background-color: #ad5dd8;
          }

          .bottom-row {
            display: flex;
            width: 100%;
          }

          .twin {
            width: 50%;
            min-height: 190px;
            background-color: #ff8c19;
          }

          .main-content,
          .sidebar,
          .twin {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 22px;
            font-weight: bold;
            border: 2px solid #eeeeee;
          }

          .footer {
            min-height: 85px;
            background-color: #0871bd;
            color: #ffffff;
            display: flex;
            align-items: center;
            padding: 25px;
            font-size: 24px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .content-wrapper {
              width: 100%;
            }

            .top-row,
            .bottom-row {
              flex-direction: column;
            }

            .main-content,
            .sidebar,
            .twin {
              width: 100%;
              min-height: 160px;
            }
          }
        `}
      </style>

      <div className="layout">
        <div className="header">.header</div>

        <div className="content-wrapper">
          <div className="top-row">
            <div className="main-content">.main-content</div>
            <div className="sidebar">.sidebar</div>
          </div>

          <div className="bottom-row">
            <div className="twin">.twin</div>
            <div className="twin">.twin</div>
          </div>
        </div>

        <div className="footer">.footer</div>
      </div>
    </>
  );
};

export default CssPattern;