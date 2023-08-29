import qrcode from "qrcode";

export const postQrCode = async (req, res) => {
    const {url} = req.body;
    if(!url){
      throw new Error('Invalid')
    }
    qrcode.toDataURL(url, { type: "image/png" }, (err, url) => {
      if (err) throw err;
      res.json({ imageUrl: url });
    });
}