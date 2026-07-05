// config.js
const CONFIG = {
    // URL จาก ngrok (static domain ไม่เปลี่ยน)
    API_URL: "https://tipped-roast-tamale.ngrok-free.dev",

    SOCKET_OPTIONS: {
        // บังคับ websocket อย่างเดียว — ป้องกัน CORS error จาก polling
        transports: ["websocket"],
        upgrade: false,
        // header พิเศษสำหรับ ngrok — ข้ามหน้า browser warning
        extraHeaders: {
            "ngrok-skip-browser-warning": "true"
        },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000
    }
};
