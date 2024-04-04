
let botoken_checkTaxi = "5984383339:AAGaWGn9OueU6uXuMPhPVCYf749PY68B5Is"
let botoken_checkXocDia = "6054641312:AAFqng7CdbeHTD1pEciNlBV_NwqPSyaVgik"
let chat_id_checkTaxi = "-1001939900901"
let chat_id_checkXocDia = "-738098845"

class Telegram_Handler {
    async  SendMessager_Chanel_TaXi(noiDung) {
        // Tạo URL API
        const url = `https://api.telegram.org/bot${botoken_checkTaxi}/sendMessage`;
      
        // Cấu hình body request
        const body = {
          chat_id: chat_id_checkTaxi,
          text: noiDung,
        };
      
        // Gửi request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      
        // Xử lý kết quả
        if (response.ok) {
          console.log("Gửi tin nhắn thành công!");
        } else {
          const error = await response.json();
          console.error("Lỗi:", error.description);
        }
    };
    async  SendMessager_Chanel_XocDia(noiDung) {
        // Tạo URL API
        const url = `https://api.telegram.org/bot${botoken_checkXocDia}/sendMessage`;
      
        // Cấu hình body request
        const body = {
          chat_id: chat_id_checkXocDia,
          text: noiDung,
        };
      
        // Gửi request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      
        // Xử lý kết quả
        if (response.ok) {
          console.log("Gửi tin nhắn thành công!");
        } else {
          const error = await response.json();
          console.error("Lỗi:", error.description);
        }
    }
}
module.exports = {Telegram_Handler};
