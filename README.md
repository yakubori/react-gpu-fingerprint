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

## ISC License (ISC)

Copyright 2022 Rick Yakubowski

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.