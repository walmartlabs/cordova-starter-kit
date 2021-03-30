***
# NOTICE:

## This repository has been archived and is not supported.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***
NOTICE: SUPPORT FOR THIS PROJECT HAS ENDED 

This projected was owned and maintained by Walmart. This project has reached its end of life and Walmart no longer supports this project.

We will no longer be monitoring the issues for this project or reviewing pull requests. You are free to continue using this project under the license terms or forks of this project at your own risk. This project is no longer subject to Walmart's bug bounty program or other security monitoring.


## Actions you can take

We recommend you take the following action:

  * Review any configuration files used for build automation and make appropriate updates to remove or replace this project
  * Notify other members of your team and/or organization of this change
  * Notify your security team to help you evaluate alternative options

## Forking and transition of ownership

For [security reasons](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/), Walmart does not transfer the ownership of our primary repos on Github or other platforms to other individuals/organizations. Further, we do not transfer ownership of packages for public package management systems.

If you would like to fork this package and continue development, you should choose a new name for the project and create your own packages, build automation, etc.

Please review the licensing terms of this project, which continue to be in effect even after decommission.

##cordova-starter-kit
> A simple starter project that uses the Walmart API to return and display product data from a barcode scan/entry

###Getting Started

Start by installing cordova globally:

`npm install cordova -g`

Next, clone this repo and then run the following commands in order:

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
