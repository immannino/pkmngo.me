const QRCode = require('qrcode');
const { base, valor, instinct, mystic } = require('./templates');

async function createPogoImage(res, name, code, style) {
    const qrCode = await QRCode.toDataURL(code);
    const formattedCode = format(String(code));

    switch (style) {
        case 'mystic':
            image = mystic(name, formattedCode, qrCode);
            break;
        case 'instinct':
            image = instinct(name, formattedCode, qrCode);
            break;
        case 'valor':
            image = valor(name, formattedCode, qrCode);
            break;
        default:
            image = base(name, formattedCode, qrCode);
            break;
    }

    res.set({
        'content-type': 'image/svg+xml',
        'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    });
      
    res.writeHead(200);
    return res.end(image, 'binary');
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}

module.exports = {
    createPogoImage
}