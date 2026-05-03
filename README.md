<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QR Check In</title>

<link rel="stylesheet" href="style.css">
<link rel="manifest" href="manifest.json">

<meta name="theme-color" content="#6C5CE7">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="icon.png">

</head>

<body>

<div class="app">

    <!-- Header -->
    <div class="header">
        <div class="title">QR Check</div>
        <div class="user">V25083002 - Sơn Nguyễn</div>
    </div>

    <!-- Time -->
    <div id="time" class="time"></div>

    <!-- QR Box -->
    <div class="qr-box">
        <img id="qr" src="ewm.gif">
    </div>

    <!-- Instruction -->
    <div class="note">
        Đưa mã QR vào máy quét để check-in / check-out
    </div>

    <!-- Button -->
    <button onclick="refreshQR()" class="btn">
        🔄 Làm mới QR
    </button>

</div>

<script src="app.js"></script>
</body>
</html>
