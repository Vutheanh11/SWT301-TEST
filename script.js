// Đáp án đúng cho 60 câu hỏi - BẠN CẦN ĐIỀN ĐÁP ÁN ĐÚNG VÀO ĐÂY
const correctAnswers = {
    q1: 'A',
    q2: 'B',
    q3: 'C',
    q4: 'D',
    q5: 'A',
    q6: 'B',
    q7: 'C',
    q8: 'D',
    q9: 'A',
    q10: 'B',
    q11: 'C',
    q12: 'D',
    q13: 'A',
    q14: 'B',
    q15: 'C',
    q16: 'D',
    q17: 'A',
    q18: 'B',
    q19: 'C',
    q20: 'D',
    q21: 'A',
    q22: 'B',
    q23: 'C',
    q24: 'D',
    q25: 'A',
    q26: 'B',
    q27: 'C',
    q28: 'D',
    q29: 'A',
    q30: 'B',
    q31: 'C',
    q32: 'D',
    q33: 'A',
    q34: 'B',
    q35: 'C',
    q36: 'D',
    q37: 'A',
    q38: 'B',
    q39: 'C',
    q40: 'D',
    q41: 'A',
    q42: 'B',
    q43: 'C',
    q44: 'D',
    q45: 'A',
    q46: 'B',
    q47: 'C',
    q48: 'D',
    q49: 'A',
    q50: 'B',
    q51: 'C',
    q52: 'D',
    q53: 'A',
    q54: 'B',
    q55: 'C',
    q56: 'D',
    q57: 'A',
    q58: 'B',
    q59: 'C',
    q60: 'D'
};

// Xử lý submit form
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    let totalQuestions = 60;
    let answeredQuestions = 0;
    
    // Kiểm tra từng câu trả lời
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        
        if (selectedAnswer) {
            answeredQuestions++;
            if (selectedAnswer.value === correctAnswers[questionName]) {
                score++;
            }
        }
    }
    
    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    
    if (answeredQuestions < totalQuestions) {
        resultDiv.innerHTML = `
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                ⚠️ Cảnh báo!<br>
                <span style="font-size: 0.8em;">Bạn chỉ trả lời ${answeredQuestions}/${totalQuestions} câu hỏi</span>
            </div>
        `;
    } else {
        const percentage = (score / totalQuestions * 100).toFixed(1);
        let grade = '';
        let emoji = '';
        
        if (percentage >= 90) {
            grade = 'Xuất sắc';
            emoji = '🏆';
        } else if (percentage >= 80) {
            grade = 'Giỏi';
            emoji = '🌟';
        } else if (percentage >= 70) {
            grade = 'Khá';
            emoji = '👍';
        } else if (percentage >= 50) {
            grade = 'Trung bình';
            emoji = '📚';
        } else {
            grade = 'Cần cố gắng';
            emoji = '💪';
        }
        
        resultDiv.innerHTML = `
            ${emoji} ${grade}!<br>
            <span style="font-size: 1.2em;">Điểm số: ${score}/${totalQuestions}</span><br>
            <span style="font-size: 0.9em;">(${percentage}%)</span>
        `;
    }
    
    resultDiv.classList.add('show');
    
    // Scroll tới kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Thêm hiệu ứng khi chọn đáp án
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Tạo hiệu ứng nhẹ khi chọn
        this.parentElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.parentElement.style.transform = '';
        }, 200);
    });
});

// Progress tracking
let answeredCount = 0;
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const questionName = this.name;
        const wasAnswered = document.querySelector(`input[name="${questionName}"]:checked`) !== null;
        
        if (wasAnswered) {
            updateProgress();
        }
    });
});

function updateProgress() {
    let count = 0;
    for (let i = 1; i <= 60; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            count++;
        }
    }
    
    // Có thể thêm thanh tiến độ nếu muốn
    if (count === 60) {
        console.log('Đã trả lời hết tất cả câu hỏi!');
    }
}
