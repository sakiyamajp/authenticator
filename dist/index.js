"use strict";

require("./global");

const totp = require('totp-generator');

const fs = require('fs');

const path = require('path');

const logUpdate = require('log-update');

const QRReader = require('qrcode-reader');

const jimp = require('jimp');

const qr = new QRReader();
let directory = "./secret/";
let files = fs.readdirSync(directory);
let ds = {};
L("===================== sakiyama authenticator =====================");

(async () => {
  for (let f of files) {
    let extension = path.extname(f);
    let displayName = f.split('.').slice(0, -1).join('.');
    let secret = fs.readFileSync(directory + f);

    if (extension == ".txt") {
      secret = secret.toString().replace(/\r|\n|\s/g, "");
    } else {
      const img = await jimp.read(secret);
      let url = await new Promise((resolve, reject) => {
        qr.callback = (err, v) => err != null ? reject(err) : resolve(v);

        qr.decode(img.bitmap);
      });
      url = new URL(url.result);
      secret = url.searchParams.get('secret');
    }

    ds[displayName] = secret;
  }

  while (true) {
    let message = "";

    for (let display in ds) {
      var token = totp(ds[display]);
      message += `${token} : ${display}\r\n`;
    }

    logUpdate(message);
    await sleep(1000);
  }
})();