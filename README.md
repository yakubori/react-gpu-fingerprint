# react-gpu-fingerprint

Get a browser's fingerprint (vendor and hardware) data from a React component using WebGL and the GPU.

## Example Usage

Very simple. Just give the FingerPrint component (or whatever you want to call it) a data handler function.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import FingerPrint from "react-gpu-fingerprint";

const handleFingerPrintData = (fp) => {
    console.log(fp);
}

ReactDOM.render(
    <FingerPrint dataHandler={handleFingerPrintData} />,
    document.getElementById("root")
);
```