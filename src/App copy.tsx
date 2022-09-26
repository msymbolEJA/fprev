import { useState } from "react";
import "./App.css";

const fontFamilies = [
  { font: "Sofia", shopName: "New York" },
  { font: "Blacksword", shopName: "Carolina" },
  { font: "Script", shopName: "Florida" },
  { font: "Vladimir", shopName: "Veranda" },
  { font: "Magneto", shopName: "Magnet" },
  { font: "Brushsci", shopName: "Everest" },
  { font: "Edwardian", shopName: "Heather" },
  { font: "Embassy", shopName: "Brittany" },
  { font: "Fave", shopName: "Shirley" },
  { font: "FrenchScriptMT", shopName: "Fabulous" },
  { font: "Austria", shopName: "Austria" },
  { font: "Lucida", shopName: "Kelly" },
  { font: "Mistral", shopName: "Montana" },
  { font: "Abundant", shopName: "Chris" },
  { font: "Mystical_Snow", shopName: "Mystic" },
  { font: "Palace", shopName: "Jennifer" },
  { font: "Naifah", shopName: "Charlie" },
  { font: "Daniella", shopName: "Daniel" },
  { font: "Aprilisa", shopName: "April" },
  { font: "Verdana", shopName: "VERDE" }
];

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(60);

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#DCFBFC" }}>
        <div className="col-md-6 fs-4 text-center pt-3 pb-3">
          STEP ONE: ENTER YOUR TEXT/NAME
        </div>
        <div className="col-md-6 fs-4 text-center pt-3 pb-3">
          STEP TWO: CLICK "BUY NOW"
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div
          className="col-md-8 text-center m-auto"
          style={{ fontSize: "1.3rem", fontFamily: "Tahoma" }}
        >
          <p>
            The design of your name will vary depending on the font type. The
            lines may be thickened or letters attached to each other differently
            than what is shown in the preview in order to increase the stability
            of the design.
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter your name here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <div className="font-size d-flex">
              <label
                htmlFor="customRange1"
                className="form-label"
                style={{ width: "15%" }}
              >
                Font Size :{" "}
              </label>
              <input
                style={{ width: "90%" }}
                type="range"
                className="form-range"
                id="customRange1"
                value={fontSize}
                min="40"
                max="80"
                onChange={(e) => setFontSize(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between">
          {fontFamilies.map((fontFamily) => (
            <div className="card mt-3 text-center" style={{ width: 400 }}>
              <div
                className="card-header p-3 fs-5 fw-bold"
                style={{
                  fontFamily: "Tahoma",
                  backgroundColor: "#DCFBFC",
                }}
              >
                {fontFamily.shopName.toUpperCase()}
              </div>
              <div className="card-body">
                <p
                  className="card-text mt-5 mb-5"
                  style={{ fontFamily: fontFamily.font, fontSize: fontSize }}
                >
                  {text.trim().length ? text : fontFamily.shopName}
                </p>
                <a
                  href="https://www.etsy.com/shop/NameSignWorks"
                  className="btn text-light"
                  style={{ backgroundColor: "#7B1FA2", padding: 10 }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
