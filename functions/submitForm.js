// submitForm.js

exports.handler = async (event, context) => {
    // Lấy dữ liệu từ yêu cầu POST gửi từ trang web của bạn
    const data = JSON.parse(event.body);
  
    // Dữ liệu cần gửi đến Google Forms
    const formData = {
      'entry.1572871648': data.doiTuong,
      'entry.1643110176_sentinel': data.needs.join(', '),
      'entry.36802850_sentinel': data.feedback,
    };
  
    // Tạo yêu cầu POST đến Google Forms
    const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScKPY1U0hpQpsgPCS5Trff4d1BUM9VXhhl3gvJiyull8k1X8g/formResponse', {
      method: 'POST',
      body: new URLSearchParams(formData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  
    // Xử lý kết quả
    if (response.ok) {
      return {
        statusCode: 200,
        body: 'Success',
      };
    } else {
      return {
        statusCode: response.status,
        body: 'Failed to submit form',
      };
    }
  };
  