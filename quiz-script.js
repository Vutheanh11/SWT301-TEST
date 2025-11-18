// Quiz Script
let answeredQuestions = new Set();
let totalQuestions = 0;

// Load questions when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof quizData === 'undefined') {
        document.getElementById('questionsContainer').innerHTML = 
            '<div class="loading">Đang tải câu hỏi...</div>';
        return;
    }
    
    totalQuestions = quizData.length;
    loadQuestions();
    updateProgress();
    setupEventListeners();
});

// Load all questions into the page
function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-block';
        questionDiv.id = `question-${q.id}`;
        
        // Determine if multiple answers are allowed
        const isMultipleChoice = q.correctAnswer && q.correctAnswer.length > 1;
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const inputName = `q${q.id}`;
        
        let optionsHTML = '';
        for (let [key, value] of Object.entries(q.options)) {
            optionsHTML += `
                <label>
                    <input type="${inputType}" 
                           name="${inputName}" 
                           value="${key}"
                           onchange="handleAnswerChange('${inputName}')">
                    <span class="option-text"><strong>${key}.</strong> ${value}</span>
                </label>
            `;
        }
        
        questionDiv.innerHTML = `
            <div class="question-number">Câu ${index + 1}</div>
            <div class="question-text">${q.question}</div>
            <div class="answers">
                ${optionsHTML}
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
}

// Handle answer change
function handleAnswerChange(questionName) {
    answeredQuestions.add(questionName);
    updateProgress();
}

// Update progress bar and counter
function updateProgress() {
    const answered = answeredQuestions.size;
    const percentage = (answered / totalQuestions * 100).toFixed(1);
    
    document.getElementById('progressText').innerHTML = 
        `Đã trả lời: <strong>${answered}/${totalQuestions}</strong>`;
    
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = percentage + '%';
    
    if (percentage > 0) {
        progressFill.textContent = percentage + '%';
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('quizForm').addEventListener('submit', handleSubmit);
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    let score = 0;
    let totalAnswered = 0;
    let correctCount = 0;
    
    quizData.forEach(q => {
        const questionName = `q${q.id}`;
        const isMultipleChoice = q.correctAnswer && q.correctAnswer.length > 1;
        const questionBlock = document.getElementById(`question-${q.id}`);
        
        // Remove previous result indicators
        questionBlock.querySelectorAll('.result-indicator, .correct-answer-info').forEach(el => el.remove());
        
        let isCorrect = false;
        
        if (isMultipleChoice) {
            // Handle checkbox questions
            const checkedBoxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
            if (checkedBoxes.length > 0) {
                totalAnswered++;
                const selectedAnswers = Array.from(checkedBoxes).map(cb => cb.value).sort().join('');
                const correctAnswers = q.correctAnswer.split('').sort().join('');
                
                if (selectedAnswers === correctAnswers) {
                    score++;
                    correctCount++;
                    isCorrect = true;
                }
            }
        } else {
            // Handle radio button questions
            const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            if (selectedAnswer) {
                totalAnswered++;
                if (selectedAnswer.value === q.correctAnswer) {
                    score++;
                    correctCount++;
                    isCorrect = true;
                }
            }
        }
        
        // Mark the question as correct or incorrect
        if (totalAnswered > 0 || answeredQuestions.has(questionName)) {
            const resultIndicator = document.createElement('div');
            resultIndicator.className = 'result-indicator';
            
            if (isCorrect) {
                resultIndicator.innerHTML = '✓ Đúng';
                resultIndicator.style.color = '#4caf50';
                questionBlock.style.borderLeft = '5px solid #4caf50';
            } else {
                resultIndicator.innerHTML = '✗ Sai';
                resultIndicator.style.color = '#f44336';
                questionBlock.style.borderLeft = '5px solid #f44336';
                
                // Show correct answer
                const correctAnswerDiv = document.createElement('div');
                correctAnswerDiv.className = 'correct-answer-info';
                correctAnswerDiv.innerHTML = `<strong>Đáp án đúng:</strong> ${q.correctAnswer}`;
                correctAnswerDiv.style.marginTop = '10px';
                correctAnswerDiv.style.padding = '10px';
                correctAnswerDiv.style.backgroundColor = '#e8f5e9';
                correctAnswerDiv.style.borderRadius = '5px';
                correctAnswerDiv.style.color = '#2e7d32';
                questionBlock.querySelector('.answers').appendChild(correctAnswerDiv);
            }
            
            resultIndicator.style.fontWeight = 'bold';
            resultIndicator.style.fontSize = '1.1em';
            resultIndicator.style.marginTop = '10px';
            questionBlock.querySelector('.question-number').appendChild(resultIndicator);
        }
        
        // Highlight correct and incorrect answers
        const inputs = questionBlock.querySelectorAll('input[type="radio"], input[type="checkbox"]');
        inputs.forEach(input => {
            const label = input.parentElement;
            const isCorrectAnswer = q.correctAnswer.includes(input.value);
            
            if (input.checked && !isCorrect) {
                // User's wrong answer
                label.style.backgroundColor = '#ffebee';
                label.style.borderLeft = '4px solid #f44336';
            }
            
            if (isCorrectAnswer) {
                // Correct answer
                label.style.backgroundColor = '#e8f5e9';
                label.style.borderLeft = '4px solid #4caf50';
                label.style.fontWeight = 'bold';
            }
        });
    });
    
    displayResult(score, totalAnswered, totalQuestions);
}

// Display result
function displayResult(score, answered, total) {
    const resultDiv = document.getElementById('result');
    const percentage = (score / total * 100).toFixed(1);
    
    let grade = '';
    let emoji = '';
    let gradientColor = '';
    
    if (percentage >= 90) {
        grade = 'Xuất sắc';
        emoji = '🏆';
        gradientColor = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    } else if (percentage >= 80) {
        grade = 'Giỏi';
        emoji = '🌟';
        gradientColor = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    } else if (percentage >= 70) {
        grade = 'Khá';
        emoji = '👍';
        gradientColor = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
    } else if (percentage >= 50) {
        grade = 'Trung bình';
        emoji = '📚';
        gradientColor = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
    } else {
        grade = 'Cần cố gắng hơn';
        emoji = '💪';
        gradientColor = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
    }
    
    if (answered < total) {
        resultDiv.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        resultDiv.innerHTML = `
            <h2>⚠️ Cảnh báo!</h2>
            <p style="font-size: 1.3em; margin: 20px 0;">
                Bạn chỉ trả lời <strong>${answered}/${total}</strong> câu hỏi
            </p>
            <p style="font-size: 1.1em;">
                Điểm số hiện tại: <strong>${score}/${answered}</strong> câu đúng
            </p>
        `;
    } else {
        resultDiv.style.background = gradientColor;
        resultDiv.innerHTML = `
            <h2>${emoji} ${grade}!</h2>
            <div class="score">${score}/${total}</div>
            <div class="percentage">${percentage}%</div>
            <p style="font-size: 1.2em;">
                Bạn đã trả lời đúng <strong>${score}</strong> trong tổng số <strong>${total}</strong> câu hỏi
            </p>
        `;
    }
    
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Reset quiz
function resetQuiz() {
    // Clear all selections
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    
    // Remove all result indicators and styling
    document.querySelectorAll('.result-indicator, .correct-answer-info').forEach(el => el.remove());
    
    // Reset all question blocks styling
    document.querySelectorAll('.question-block').forEach(block => {
        block.style.borderLeft = '';
    });
    
    // Reset all label styling
    document.querySelectorAll('label').forEach(label => {
        label.style.backgroundColor = '';
        label.style.borderLeft = '';
        label.style.fontWeight = '';
    });
    
    // Reset progress
    answeredQuestions.clear();
    updateProgress();
    
    // Hide result
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('show');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search function (optional enhancement)
function searchQuestions(keyword) {
    const questions = document.querySelectorAll('.question-block');
    keyword = keyword.toLowerCase();
    
    questions.forEach(q => {
        const text = q.textContent.toLowerCase();
        if (text.includes(keyword)) {
            q.style.display = 'block';
        } else {
            q.style.display = 'none';
        }
    });
}
