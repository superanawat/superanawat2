const CONFIG = {
    API_URL: "https://tipped-roast-tamale.ngrok-free.dev",

    SOCKET_OPTIONS: {
        transports: ["polling"],
        upgrade: false,            // ← ห้าม upgrade ไป websocket เด็ดขาด
        extraHeaders: {
            "ngrok-skip-browser-warning": "true"
        },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000
    }
};
