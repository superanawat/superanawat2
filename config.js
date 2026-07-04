const CONFIG = {
    get API_URL() {
        return localStorage.getItem("sarabot_api_url") 
            || "https://tipped-roast-tamale.ngrok-free.dev";
    },

    SOCKET_OPTIONS: {
        transports: ["websocket"],  // ← เปลี่ยนเป็น websocket อย่างเดียว ไม่ใช้ polling
        extraHeaders: {
            "ngrok-skip-browser-warning": "true"
        },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000
    }
};
