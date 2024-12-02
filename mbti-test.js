document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 0;
    const answers = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    // 이전 답변 기록을 위한 배열 추가
    let userAnswers = new Array(20).fill(null);

    const startScreen = document.getElementById('startScreen');
    const questionScreen = document.getElementById('questionScreen');
    const resultScreen = document.getElementById('resultScreen');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.querySelector('.progress-text');
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const answerButtons = document.querySelectorAll('.answer-btn');

    // 시작 버튼 클릭 이벤트
    document.getElementById('startTest').addEventListener('click', function() {
        startScreen.classList.remove('active');
        questionScreen.classList.add('active');
        showQuestion(currentQuestion);  // 첫 번째 질문 표시
    });

    // 질문 표시 함수
    function showQuestion(index) {
        const question = questions[index];
        if (!question) {
            console.error('질문을 찾을 수 없습니다:', index);
            return;
        }

        questionNumber.textContent = `질문 ${question.number}/20`;
        questionText.textContent = question.question;
        
        // 답변 버튼 텍스트 설정
        answerButtons[0].textContent = question.answers.A.text;
        answerButtons[1].textContent = question.answers.B.text;

        // 답변 버튼에 데이터 속성 추가
        answerButtons[0].setAttribute('data-type', question.answers.A.type);
        answerButtons[1].setAttribute('data-type', question.answers.B.type);

        // 진행률 업데이트
        const progress = ((index + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${index + 1}/20`;

        // 이전 버튼 표시 여부 설정
        const prevButton = document.getElementById('prevQuestion');
        if (index === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }
    }

    // 답변 버튼 클릭 이벤트
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            answers[type]++;
            userAnswers[currentQuestion] = type;  // 현재 답변 저장
            
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
            } else {
                showResult();
            }
        });
    });

    // 이전 버튼 클릭 이벤트
    document.getElementById('prevQuestion').addEventListener('click', function() {
        if (currentQuestion > 0) {
            // 이전 답변 취소
            const lastAnswer = userAnswers[currentQuestion];
            if (lastAnswer) {
                answers[lastAnswer]--;
            }
            
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    // 결과 화면 표시 함수 수정
    function showResult() {
        const result = calculateMBTI();
        const description = typeDescriptions[result];

        questionScreen.classList.remove('active');
        resultScreen.classList.add('active');
        
        // 결과 화면 HTML 생성
        resultScreen.innerHTML = `
            <div class="result-header">
                <h2>✨ 검사 결과</h2>
                <p class="result-subtitle">당신의 MBTI는...</p>
                <div class="result-type">${result}</div>
                <div class="result-title">${description.title}</div>
            </div>
            
            <div class="result-content">
                <div class="type-description">
                    <div class="type-emoji">${getTypeEmoji(result)}</div>
                    <p>${description.description}</p>
                </div>
                
                <div class="type-details">
                    <div class="detail-section">
                        <h3>💪 강점</h3>
                        <ul class="strength-list">
                            ${description.strengths.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3>🌱 성장 포인트</h3>
                        <ul class="growth-list">
                            ${description.weaknesses.map(w => `<li>${w}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3>💝 잘 맞는 유형</h3>
                        <div class="compatible-types">
                            ${description.compatibleTypes.map(t => `
                                <div class="type-match good">
                                    <span class="mbti-tag">${t}</span>
                                    <span class="match-score">90%+</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    ${description.incompatibleTypes ? `
                        <div class="detail-section">
                            <h3>⚠️ 주의해야 할 유형</h3>
                            <div class="compatible-types">
                                ${description.incompatibleTypes.map(t => `
                                    <div class="type-match bad">
                                        <span class="mbti-tag">${t}</span>
                                        <span class="match-score">60%↓</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="result-actions">
                <button id="retakeTest" class="action-btn" onclick="window.retakeTest()">
                    <span class="btn-icon">🔄</span>
                    <span class="btn-text">다시 검사하기</span>
                </button>
                <button id="shareResult" class="action-btn" onclick="window.shareResult('${result}', '${description.title}')">
                    <span class="btn-icon">💌</span>
                    <span class="btn-text">결과 공유하기</span>
                </button>
            </div>
        `;

        // 결과 저장
        saveResult(result);
    }

    // 전역 함수로 다시 검사하기 기능 추가
    window.retakeTest = function() {
        // 모든 상태 초기화
        currentQuestion = 0;
        Object.keys(answers).forEach(key => answers[key] = 0);
        userAnswers = new Array(20).fill(null);
        
        // 화면 전환
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
        
        // 프로그레스 바 초기화
        progressBar.style.width = '0%';
        progressText.textContent = '1/20';
    };

    // 전역 함수로 공유하기 기능 추가
    window.shareResult = async function(result, title) {
        const shareText = `내 MBTI는 ${result}!\n${title}\n\n나의 MBTI도 알아보기 👉`;
        const shareUrl = window.location.href;

        // Web Share API 지원 확인
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'MBTI 성격 유형 검사 결과',
                    text: shareText,
                    url: shareUrl
                });
            } catch (err) {
                console.log('공유 실패:', err);
                fallbackShare(shareText, shareUrl);
            }
        } else {
            fallbackShare(shareText, shareUrl);
        }
    };

    // 공유하기 폴백 함수
    function fallbackShare(shareText, shareUrl) {
        const fullText = `${shareText}\n${shareUrl}`;
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = fullText;
        tempInput.select();
        
        try {
            document.execCommand('copy');
            alert('결과가 클립보드에 복사되었습니다!');
        } catch (err) {
            alert('클립보드 복사에 실패했습니다. 직접 복사해주세요.');
            console.log('클립보드 복사 실패:', err);
        }
        
        document.body.removeChild(tempInput);
    }

    // MBTI 계산 함수
    function calculateMBTI() {
        return (answers.E > answers.I ? 'E' : 'I') +
               (answers.S > answers.N ? 'S' : 'N') +
               (answers.T > answers.F ? 'T' : 'F') +
               (answers.J > answers.P ? 'J' : 'P');
    }

    // MBTI 유형별 이모지 반환 함수
    function getTypeEmoji(type) {
        const emojiMap = {
            'INTJ': '🔮', 'INTP': '🔬', 'ENTJ': '👑', 'ENTP': '💭',
            'INFJ': '🌟', 'INFP': '🎨', 'ENFJ': '👥', 'ENFP': '✨',
            'ISTJ': '📋', 'ISFJ': '🛡️', 'ESTJ': '📊', 'ESFJ': '🤝',
            'ISTP': '🔧', 'ISFP': '🎨', 'ESTP': '🎯', 'ESFP': '🎭'
        };
        return emojiMap[type] || '✨';
    }
}); 