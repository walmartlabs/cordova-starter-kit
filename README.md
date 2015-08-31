##cordova-starter-kit
> A simple starter project that uses the Walmart API to return and display product data from a barcode scan/entry

###Getting Started

Clone this repo and then run the following commands in order:

- `npm install`
- `mkdir platforms`
- `cordova platform add browser`
- `cordova plugin add phonegap-plugin-barcodescanner`

Open up `www/js/index.js` and add your API key in the spot provided below:

```
var walmart = require('walmart')('API KEY GOES HERE', {
  protocol: 'http'
});
```
Next, build your project:

- `webpack`
- `cordova build`

You will need to run `webpack` every time you edit `index.js` so that your `requires` are resolved and bundled.

To run your project in the browser, run:

- `cordova run browser`

To add IOS as a platform run:

`cordova platform add ios@3.8.0`

> Note: Barcode scanner doesn't work on emulators. You'll want to run on a usb attached device by running `cordova run ios --device`
