const QRCode = require('qrcode');
const sharp = require('sharp');
const template = require('./templates');

async function createPogoImage(res, name, code, style) {
    const qrCode = await QRCode.toDataURL(code);
    const formattedCode = code.split('-').join(' ');
    let image;
  
    if (template[style]) {
        image = template[style](name, formattedCode, qrCode);
    } else {
        image = template.base(name, formattedCode, qrCode);
    }

    res.set({
        'content-type': 'image/svg+xml',
        'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    });
      
    res.writeHead(200);
    return res.end(image, 'binary');
}

async function createPogoImagePng(res, name, code, style) {
    const qrCode = await QRCode.toDataURL(code);
    const formattedCode = code.split('-').join(' ');
    
    let image;
  
    if (template[style]) {
        image = template[style](name, formattedCode, qrCode);
    } else {
        image = template.base(name, formattedCode, qrCode);
    }

    let pngImage = await sharp(Buffer.from(image)).png().toBuffer()

    res.set({
        'content-type': 'image/png',
        'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    });

    res.writeHead(200);
    return res.end(pngImage, 'binary');
};

module.exports = {
    createPogoImage,
    createPogoImagePng
}