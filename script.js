document.addEventListener('DOMContentLoaded', function() {
    // 필요한 요소들 가져오기
    const checkButton = document.getElementById('checkCompatibility');
    const modal = document.getElementById('resultModal');
    const resultContainer = document.getElementById('result');

    // 언어 설정
    const translations = {
        'ko': {
            'title': 'MBTI 케미 테스트',
            'subtitle': '너와 나의 찰떡궁합은?',
            // ... 다른 번역
        },
        'en': {
            'title': 'MBTI Compatibility Test',
            'subtitle': 'Find Your Perfect Match!',
            // ... 다른 번역
        },
        'ja': {
            'title': 'MBTI 相性テスト',
            'subtitle': 'あなたの運命の相手は？',
            // ... 다른 번역
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[lang][key];
        });
    }

    // 케미 확인���기 버튼 클릭 이벤트
    checkButton.addEventListener('click', function() {
        const myMbti = document.getElementById('myMbti').value;
        const partnerMbti = document.getElementById('partnerMbti').value;

        // MBTI 선택 여부 확인
        if (!myMbti || !partnerMbti) {
            alert('두 MBTI를 모두 선택해주세요!');
            return;
        }

        // 케미 점수 계산
        const score = calculateCompatibility(myMbti, partnerMbti);
        
        // 결과 HTML 생성
        resultContainer.innerHTML = `
            <div class="result-header">
                <h2>✨ 케미 결과</h2>
                <div class="mbti-pair">
                    <span class="mbti-tag">${myMbti}</span>
                    <span class="heart">💘</span>
                    <span class="mbti-tag">${partnerMbti}</span>
                </div>
            </div>
            <div class="chemistry-score">
                <div class="score-number">${score}점</div>
                <div class="score-label">${getScoreLabel(score)}</div>
            </div>
            <div class="compatibility-details">
                ${getCompatibilityDescription(myMbti, partnerMbti)}
            </div>
        `;

        // 모달 표시
        modal.style.display = 'flex';
    });

    // 모달 닫기 버튼 이벤트
    const closeButtons = document.getElementsByClassName('close-button');
    Array.from(closeButtons).forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });

    // 모달 외부 클릭시 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 후기 작성 관련 요소들
    const writeReviewBtn = document.getElementById('writeReviewBtn');
    const reviewModal = document.getElementById('reviewModal');
    const reviewForm = document.getElementById('reviewForm');
    const stars = document.querySelectorAll('.rating-select .star');
    const textArea = document.getElementById('reviewText');
    const textCount = document.getElementById('textCount');
    let selectedRating = 0;

    // 후기 작성 버튼 클릭 시 모달 열기
    writeReviewBtn.addEventListener('click', function() {
        reviewModal.style.display = 'flex';
    });

    // 별점 선택 기능
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            updateStars(selectedRating);
        });

        star.addEventListener('mouseover', function() {
            highlightStars(index + 1);
        });

        star.addEventListener('mouseout', function() {
            if (selectedRating === 0) {
                clearStars();
            } else {
                highlightStars(selectedRating);
            }
        });
    });

    // 별점 표시 업데이트 함수
    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
                star.style.opacity = '1';
                star.style.filter = 'none';
                star.style.color = '#FFB800';
            } else {
                star.classList.remove('selected');
                star.style.opacity = '0.3';
                star.style.filter = 'grayscale(100%)';
                star.style.color = '#E5E7EB';
            }
        });
    }

    // 별점 하이라이트 함수
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.opacity = '1';
                star.style.filter = 'none';
                star.style.color = '#FFB800';
            } else {
                star.style.opacity = '0.3';
                star.style.filter = 'grayscale(100%)';
                star.style.color = '#E5E7EB';
            }
        });
    }

    // 별점 초기화 함수
    function clearStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
            star.style.opacity = '0.3';
            star.style.filter = 'grayscale(100%)';
            star.style.color = '#E5E7EB';
        });
    }

    // 후기 모달 열 때 별점 초기화
    document.getElementById('writeReviewBtn').addEventListener('click', function() {
        selectedRating = 0;
        clearStars();
    });

    // 후기 제출 시 별점 검증
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (selectedRating === 0) {
            alert('만족도를 선택해주세요!');
            return;
        }

        // ... 나머지 제출 로직 ...
    });

    // 글자 수 카운터
    textArea.addEventListener('input', function() {
        const count = this.value.length;
        textCount.textContent = count;
        if (count > 100) {
            this.value = this.value.substring(0, 100);
            textCount.textContent = 100;
        }
    });

    // 후기 제출
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const myMbti = document.getElementById('reviewMyMbti').value;
        const partnerMbti = document.getElementById('reviewPartnerMbti').value;
        const relation = document.getElementById('reviewRelation').value;
        const text = document.getElementById('reviewText').value;

        if (!myMbti || !partnerMbti || !relation || !text || selectedRating === 0) {
            alert('모든 항목을 입력해주세요!');
            return;
        }

        // 후기 저장
        saveReview({
            myMbti: myMbti,
            partnerMbti: partnerMbti,
            rating: selectedRating,
            relation: relation,
            text: text,
            date: new Date()
        });

        // 모달 닫고 폼 초기화
        reviewModal.style.display = 'none';
        reviewForm.reset();
        selectedRating = 0;
        clearStars();
        textCount.textContent = '0';

        // 성공 메시지
        alert('후기가 등록되었습니다!');
    });

    // 후기 저장 함수
    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('mbtiReviews') || '[]');
        reviews.unshift(review);
        // 최대 20개까지만 저장
        reviews = reviews.slice(0, 20);
        localStorage.setItem('mbtiReviews', JSON.stringify(reviews));
        updateReviewDisplay();
    }

    // 후기 목록 표시 업데이트
    function updateReviewDisplay() {
        const reviewList = document.getElementById('reviewList');
        const reviews = JSON.parse(localStorage.getItem('mbtiReviews') || '[]');
        
        reviewList.innerHTML = reviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-mbti-pair">
                        <span class="mbti-tag">${review.myMbti}</span>
                        <span class="heart-icon">💘</span>
                        <span class="mbti-tag">${review.partnerMbti}</span>
                    </div>
                    <span class="review-relation">${getRelationLabel(review.relation)}</span>
                </div>
                <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
                <p class="review-text">${review.text}</p>
                <span class="review-time">${formatDate(new Date(review.date))}</span>
            </div>
        `).join('');
    }

    // 관계 라벨 변환
    function getRelationLabel(relation) {
        const labels = {
            'couple': '연인',
            'friend': '친구',
            'coworker': '직장동료',
            'family': '가족'
        };
        return labels[relation] || relation;
    }

    // 초기 후기 목록 표시
    updateReviewDisplay();
});

// MBTI 궁합 데이터베이스
const compatibilityData = {
    'ENFP': {
        'INTJ': 95, // 이상적인 궁합
        'INFJ': 92,
        'ENTJ': 88,
        'INTP': 86,
        'ENFJ': 85,
        'INFP': 84,
        'ENTP': 82,
        'ISTJ': 75,
        'ISFJ': 72,
        'ESTJ': 70,
        'ESFJ': 68,
        'ISTP': 65,
        'ISFP': 64,
        'ESTP': 62,
        'ESFP': 60
    },
    'INFJ': {
        'ENTP': 95, // 이상적인 궁합
        'ENFP': 92,
        'INTJ': 90,
        'INFP': 88,
        'ENFJ': 86,
        'INTP': 85,
        'ENTJ': 84,
        'ISFJ': 75,
        'ISTJ': 73,
        'ESFJ': 70,
        'ESTJ': 68,
        'ISFP': 65,
        'ISTP': 63,
        'ESFP': 60,
        'ESTP': 58
    },
    'INTJ': {
        'ENFP': 95, // 이상적인 궁합
        'ENTP': 93,
        'INFJ': 90,
        'ENTJ': 88,
        'INTP': 86,
        'INFP': 84,
        'ENFJ': 82,
        'ISTJ': 75,
        'ISFJ': 72,
        'ESTJ': 70,
        'ESFJ': 68,
        'ISTP': 65,
        'ISFP': 63,
        'ESTP': 60,
        'ESFP': 58
    }
    // ... 다른 MBTI 유형들의 데이터도 추가
};

// 케미 점수 계산 함수 수정
function calculateCompatibility(mbti1, mbti2) {
    // 직접적인 궁합 데이터가 있는 경우
    if (compatibilityData[mbti1] && compatibilityData[mbti1][mbti2]) {
        return compatibilityData[mbti1][mbti2];
    }
    // 반대 방향의 궁합 데이터가 있는 경우
    if (compatibilityData[mbti2] && compatibilityData[mbti2][mbti1]) {
        return compatibilityData[mbti2][mbti1];
    }

    // 데이터가 없는 경우, MBTI 특성 기반으로 점수 계산
    let score = 70; // 기본 점수

    // 성격 유형 분석
    const type1 = {
        E: mbti1[0] === 'E',
        I: mbti1[0] === 'I',
        S: mbti1[1] === 'S',
        N: mbti1[1] === 'N',
        T: mbti1[2] === 'T',
        F: mbti1[2] === 'F',
        J: mbti1[3] === 'J',
        P: mbti1[3] === 'P'
    };

    const type2 = {
        E: mbti2[0] === 'E',
        I: mbti2[0] === 'I',
        S: mbti2[1] === 'S',
        N: mbti2[1] === 'N',
        T: mbti2[2] === 'T',
        F: mbti2[2] === 'F',
        J: mbti2[3] === 'J',
        P: mbti2[3] === 'P'
    };

    // E/I 조합 분석
    if ((type1.E && type2.I) || (type1.I && type2.E)) score += 5;
    
    // S/N 조합 분석
    if (type1.N && type2.N) score += 8;
    if (type1.S && type2.S) score += 5;
    
    // T/F 조합 분석
    if ((type1.T && type2.F) || (type1.F && type2.T)) score += 5;
    
    // J/P 조합 분석
    if ((type1.J && type2.P) || (type1.P && type2.J)) score += 5;

    return Math.min(Math.max(score, 50), 100); // 최소 50점, 최대 100점
}

// getCompatibilityDescription 함수 수정
function getCompatibilityDescription(score, mbti1, mbti2) {
    let baseDescription = '';
    let chemistry = '';
    let advice = '';
    let strengths = '';
    let challenges = '';

    // MBTI 조합별 특성 설명
    const mbtiPairDescription = getMbtiPairDescription(mbti1, mbti2);

    if (score >= 90) {
        chemistry = `
            💝 궁합 점수: ${score}점 - 천생연분
            완벽한 케미를 가진 최고의 궁합입니다!
        `;
        strengths = mbtiPairDescription.strengths;
        challenges = mbtiPairDescription.challenges;
        advice = mbtiPairDescription.advice;
    } else if (score >= 85) {
        chemistry = `
            💖 궁합 점수: ${score}점 - 환상의 케미
            서로 다른 성향이 시너지를 만드는 환상적인 조합입니다!
        `;
        strengths = mbtiPairDescription.strengths;
        challenges = mbtiPairDescription.challenges;
        advice = mbtiPairDescription.advice;
    } else if (score >= 80) {
        chemistry = `
            💕 궁합 점수: ${score}점 - 좋은 궁합
            서로를 이해하고 존중하면 더욱 발전할 수 있는 관계입니다!
        `;
        strengths = mbtiPairDescription.strengths;
        challenges = mbtiPairDescription.challenges;
        advice = mbtiPairDescription.advice;
    } else {
        chemistry = `
            💫 궁합 점수: ${score}점 - 성장하는 관계
            서로의 차이를 이해하면서 함께 성장할 수 있는 관계입니다!
        `;
        strengths = mbtiPairDescription.strengths;
        challenges = mbtiPairDescription.challenges;
        advice = mbtiPairDescription.advice;
    }

    return `
        <div class="compatibility-result">
            <div class="chemistry-score">
                ${chemistry}
            </div>
            
            <div class="relationship-details">
                <h3>✨ 관계의 특징</h3>
                ${strengths}
            </div>

            <div class="relationship-dynamics">
                <h3>🤝 시너지 포인트</h3>
                ${mbtiPairDescription.dynamics}
            </div>

            <div class="growth-points">
                <h3>💪 성장 포인트</h3>
                ${challenges}
            </div>

            <div class="relationship-advice">
                <h3>💡 관계를 위한 조언</h3>
                ${advice}
            </div>
        </div>
    `;
}

// MBTI 조합별 상세 설명을 반환하는 함수
function getMbtiPairDescription(mbti1, mbti2) {
    // MBTI 조합별 특성 데이터
    const pairDescriptions = {
        'ENFP-INTJ': {
            strengths: `
                • ENFP의 창의성과 INTJ의 논리적 사고가 완벽한 균형을 이룹니다
                • 서로의 부족한 부분을 자연스럽게 보완해줍니다
                • 깊이 있는 대화와 지적 탐구를 함께 즐길 수 있습니다
            `,
            dynamics: `
                • ENFP는 새로운 아이디어를 제시하고, INTJ는 이를 현실화하는 데 도움을 줍니다
                • INTJ의 전략적 사고와 ENFP��� 창의적 발상이 시너지를 만듭니다
                • 서로에 대한 지적 호기심이 관계를 더욱 흥미롭게 만듭니다
            `,
            challenges: `
                • ENFP의 즉흥성과 INTJ의 계��성 사이의 균형 찾기
                • 감정 표현 방식의 차이를 이해하고 존중하기
                • 의사결정 과정에서의 다른 접근 방식 조율하
            `,
            advice: `
                • 서로의 다른 의사결정 방식을 존중해주세요
                • 정기적인 깊이 있는 대화 시간을 가지세요
                • 각자의 개인 시간도 충분히 가지세요
                • 감정 표현 방식의 차이를 이해하려 노력하세요
            `
        },
        // 다른 MBTI 조합들에 대한 설명도 추가...
    };

    // 두 MBTI의 조합을 찾아서 반환
    const pair1 = `${mbti1}-${mbti2}`;
    const pair2 = `${mbti2}-${mbti1}`;

    return pairDescriptions[pair1] || pairDescriptions[pair2] || getDefaultDescription(mbti1, mbti2);
}

// 기본 설명 생성 함수
function getDefaultDescription(mbti1, mbti2) {
    return {
        strengths: `
            • ${mbti1}의 특성과 ${mbti2}의 특성이 서로를 보완합니다
            • 서로 다른 관점에서 문제를 바라볼 수 있습니다
            • 함께 성장할 수 있는 기회가 많은 관계입니다
        `,
        dynamics: `
            로의 다른 성향을 통해 새로운 시각을 배울 수 있습니다
            • 각자의 강점을 활용해 함께 문제를 해결할 수 있습니다
            • 서로에게 새로운 경험을 제공할 수 있습니다
        `,
        challenges: `
            • 서로의 다른 의사소통 방식 이해하기
            • 각자의 의사결정 과정 존중하기
            • 서로의 에너지 충전 방식 배려하기
        `,
        advice: `
            • 정기적인 대화 시간을 가지세요
            • 서로의 차이를 인정하고 존중하세요
            • 함께하는 시간과 개인 시간의 균형을 찾으세요
            • 상대방의 관점에서 생각해보는 습관을 기르세요
        `
    };
}

// 히스토리 관리 함수들
function saveToHistory(myMbti, partnerMbti, score) {
    let history = JSON.parse(localStorage.getItem('mbtiHistory') || '[]');
    history.unshift({
        myMbti,
        partnerMbti,
        score,
        date: new Date().toISOString()
    });
    
    // 최대 10개까지만 저장
    history = history.slice(0, 10);
    localStorage.setItem('mbtiHistory', JSON.stringify(history));
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('myHistory');
    const history = JSON.parse(localStorage.getItem('mbtiHistory') || '[]');
    
    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-pair">
                <span class="mbti-tag">${item.myMbti}</span>
                <span class="heart-icon">💘</span>
                <span class="mbti-tag">${item.partnerMbti}</span>
            </div>
            <div class="history-score">${item.score}점</div>
            <div class="history-date">${formatDate(new Date(item.date))}</div>
        </div>
    `).join('');
}

function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return '방금 전';
    if (diff < 3600000) return `${Math.floor(diff/60000)}분 전`;
    if (diff < 86400000) return `${Math.floor(diff/3600000)}시간 전`;
    return `${date.getMonth()+1}월 ${date.getDate()}일`;
}

// 점수에 따른 라벨 반환 함수
function getScoreLabel(score) {
    if (score >= 90) return "천생연분";
    if (score >= 85) return "환상의 케미";
    if (score >= 80) return "좋은 궁합";
    return "성장하는 관계";
} 