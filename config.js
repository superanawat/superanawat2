// config.js
const CONFIG = {
    API_URL: "https://tipped-roast-tamale.ngrok-free.dev",

    SOCKET_OPTIONS: {
        transports: ["websocket", "polling"],
        extraHeaders: {
            "ngrok-skip-browser-warning": "true"
        },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 2000
    }
};
