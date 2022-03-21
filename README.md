# react-gpu-fingerprint

Get a browser's fingerprint (vendor and hardware) data from a React component using WebGL and the GPU. Some basic browser data is included as well.

## Stats

![Current NPM Version](https://flat.badgen.net/npm/v/react-gpu-fingerprint)
![Current NPM Downloads](https://flat.badgen.net/npm/dt/react-gpu-fingerprint)
![License](https://flat.badgen.net/npm/license/react-gpu-fingerprint)
![Types](https://flat.badgen.net/npm/types/react-gpu-fingerprint)

## Purpose

I needed a decent way (component-wise) to gather some device data to include in a JWT. The device data is very basic,
doesn't personally identify the user (obviously), and can likely be used for other purposes as well. It's just good to know!

# Install

## NPM

In your project's root directory...

```bash
npm install --save react-gpu-fingerprint
```

## Git

### Cloning the project

```bash
git clone git@github.com:yakubori/react-gpu-fingerprint.git
```

### Building

From the project root, install the depndencies, then run the build

```bash
npm install
```

```bash
npm run build
```

### Running the sample server

From the project root, install the depndencies, then run the sample server.

```bash
npm install
```

```bash
npm run dev
```

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

## Contributing

I realize this is a simple module, but I'm totally open to others working on this. Feel free to create your own branch and submit a pull request.