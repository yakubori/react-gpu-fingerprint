import React from "react";
import ReactDOM from "react-dom";
import FingerPrint from "./index";

const handleFingerPrintData = (fp) => {
    console.log(fp);
}

ReactDOM.render(<FingerPrint dataHandler={handleFingerPrintData} />, document.getElementById("root"));