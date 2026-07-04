// config.js
// SaraBOT — API Configuration
// ไม่ต้อง hardcode URL ที่นี่อีกต่อไป ใช้ปุ่ม "ตั้ง URL" ใน UI แทน
// URL จะถูกเก็บใน localStorage ของ browser อัตโนมัติ

const CONFIG = {
    // ดึง URL จาก localStorage (เก็บโดย setApiUrl() ใน index.html)
    get API_URL() {
        return localStorage.getItem("sarabot_api_url") || "";
    },

    SOCKET_OPTIONS: {
        transports: ["websocket", "polling"],
        extraHeaders: {
            // จำเป็นสำหรับ ngrok Free — ข้ามหน้า browser warning
            "ngrok-skip-browser-warning": "true"
        },
        // reconnect อัตโนมัติถ้าหลุด
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000
    }
};
