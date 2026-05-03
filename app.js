const userId = "V25083002";
const secret = "KEY123";

function generateQR() {
    const now = Math.floor(Date.now() / 1000);
    const timeBlock = Math.floor(now / 30);
    const raw = userId + "|" + timeBlock + "|" + secret;
    const encoded = btoa(raw);

    QRCode.toCanvas(document.getElementById("qrcode"), encoded);

    document.getElementById("status").innerText = "QR hợp lệ trong 30s";
}

setInterval(() => {
    document.getElementById("time").innerText =
        new Date().toLocaleTimeString();
}, 1000);

setInterval(generateQR, 30000);

function refreshQR() {
    generateQR();
}

generateQR();
