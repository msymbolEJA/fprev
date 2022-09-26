import { useState } from "react";
import "./App.css";

const fontFamilies = [
  { font: "Sofia", shopName: "Lemon" },
  { font: "Blacksword", shopName: "Peach" },
  { font: "Script", shopName: "Apple" },
  { font: "Vladimir", shopName: "Melon" },
  { font: "Magneto", shopName: "Charlotte" },
  { font: "Brushsci", shopName: "Himalaya" },
  { font: "Edwardian", shopName: "Spring" },
  { font: "Embassy", shopName: "Corpus" },
  { font: "Fave", shopName: "Oliver" },
  { font: "FrenchScriptMT", shopName: "Campanella" },
  { font: "Austria", shopName: "Beverly" },
  { font: "Lucida", shopName: "Grand" },
  { font: "Mistral", shopName: "Marcus" },
  { font: "Abundant", shopName: "Atlantic" },
  { font: "Mystical_Snow", shopName: "Comic" },
  { font: "Palace", shopName: "Roma" },
  { font: "Naifah", shopName: "Smile" },
  { font: "Daniella", shopName: "Drift" },
  { font: "Aprilisa", shopName: "Camel" },
  { font: "Verdana", shopName: "Classic" }
];

function App() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(60);

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#223843" }}>
        <div className="fs-4 text-center pt-3 pb-3 text-light">
          FONT GENERATOR FOR YOUR NAME
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div
          className="col-md-8 text-center m-auto"
          style={{ fontSize: "1.3rem", fontFamily: "Tahoma" }}
        >
          <p>
            Designs can change depending on the font you select. The
            lines may be thickened or letters attached to each other differently
            than what is shown in the preview in order to increase the stability
            of the design.
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="row d-flex align-items-center col-md-4 text-center m-auto">
          <div className="">
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter your name here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="">
            <div className="font-size d-flex">
              <input
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
                  backgroundColor: "#eff1f3",
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
                  href="https://www.etsy.com/shop/TurquoiseWoodland"
                  className="btn text-light"
                  style={{ backgroundColor: "#d8b4a0", padding: 10 }}
                >
                  VISIT ON ETSY
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
