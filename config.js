// config.js
const CONFIG = {
    // นำ URL ที่ได้จาก ngrok มาใส่ที่นี่ (เปลี่ยนใหม่ทุกครั้งที่รัน ngrok ใหม่)
    // หมายเหตุ: ใช้ https:// และไม่ต้องมีเครื่องหมาย / ต่อท้าย
    API_URL: "https://tipped-roast-tamale.ngrok-free.dev",

    // ต้องตรงกับ SARABOT_SHARED_SECRET ใน .env ฝั่งเซิร์ฟเวอร์เป๊ะ
    // ⚠️ ค่านี้อยู่ใน public repo (GitHub Pages) ใครก็ view-source เห็นได้
    //    ป้องกันได้แค่บอท/สแกนเนอร์แบบสุ่ม ไม่ใช่การยืนยันตัวตนจริง
    AUTH_TOKEN: "0fe2b3fc727fb3c54845208dae43191a129d0213ad885dd6ee820aac07d3c8ed"
};
