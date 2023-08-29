import qrcode from "qrcode";

export const generateQR =  (url) => {
  qrcode.toDataURL(url, { type: "image/png" }, (err, url) => {
    if (err) throw err;
    return url;
  });
};
