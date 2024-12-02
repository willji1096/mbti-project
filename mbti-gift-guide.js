// MBTI별 선물 추천 데이터
const mbtiGiftData = {
    ISTJ: {
        giftStyle: {
            title: "실용적이고 전통적인 선물 스타일",
            description: "실용성과 내구성을 중시하며, 전통적이고 검증된 제품을 선호합니다."
        },
        preferences: [
            "고품질의 실용적인 아이템",
            "전통적이고 클래식한 디자인",
            "체계적으로 정리할 수 있는 도구",
            "오래 사용할 수 있는 내구성 있는 제품"
        ],
        avoid: [
            "과도하게 화려하거나 독특한 디자인",
            "실용성이 떨어지는 장식품",
            "일회성 소비재",
            "불안정한 품질의 제품"
        ],
        priceRanges: {
            budget: [
                "고급 다이어리/플래너",
                "품질 좋은 필기구 세트",
                "정리정돈 수납용품",
                "실용적인 디지털 액세서리"
            ],
            medium: [
                "가죽 지갑/명함지갑",
                "프리미엄 사무용품 세트",
                "고급 커피/차 세트",
                "품질 좋은 의류 아이템"
            ],
            premium: [
                "고급 시계",
                "프리미엄 가죽 가방",
                "최신형 전자기기",
                "고급 홈 오피스 가구"
            ]
        },
        occasions: {
            birthday: [
                "고급 만년필 세트",
                "프리미엄 가죽 액세서리",
                "실용적인 디지털 기기",
                "품질 좋은 의류"
            ],
            anniversary: [
                "커플 시계",
                "고급 주얼리",
                "프리미엄 가전제품",
                "럭셔리 브랜드 아이템"
            ],
            christmas: [
                "겨울 의류/액세서리",
                "프리미엄 홈 데코 아이템",
                "고급 주방용품 세트",
                "따뜻한 홈웨어"
            ],
            casual: [
                "실용적인 생활용품",
                "고품질 문구류",
                "데일리 액세서리",
                "실용적인 디지털 소품"
            ]
        },
        interests: {
            hobby: [
                "취미 관련 전문 도구",
                "DIY 키트",
                "수집 가능한 아이템",
                "전문 서적"
            ],
            fashion: [
                "클래식한 의류 아이템",
                "고급 액세서리",
                "품질 좋은 신발",
                "전통적인 패션 소품"
            ],
            culture: [
                "클래식 음반/도서",
                "전시회/공연 티켓",
                "예술 작품",
                "문화 강좌 수강권"
            ],
            tech: [
                "실용적인 전자기기",
                "스마트 홈 기기",
                "고품질 음향기기",
                "디지털 액세서리"
            ]
        }
    },
    // 다른 MBTI 유형들도 같은 구조로 추가
};

// DOM 요소들
const mbtiSelect = document.getElementById('mbtiSelect');
const giftContent = document.getElementById('giftContent');
const giftStyle = document.getElementById('giftStyle');
const preferences = document.getElementById('preferences');
const avoidList = document.getElementById('avoidList');
const budgetGifts = document.getElementById('budgetGifts');
const mediumGifts = document.getElementById('mediumGifts');
const premiumGifts = document.getElementById('premiumGifts');
const birthdayGifts = document.getElementById('birthdayGifts');
const anniversaryGifts = document.getElementById('anniversaryGifts');
const christmasGifts = document.getElementById('christmasGifts');
const casualGifts = document.getElementById('casualGifts');
const hobbyGifts = document.getElementById('hobbyGifts');
const fashionGifts = document.getElementById('fashionGifts');
const cultureGifts = document.getElementById('cultureGifts');
const techGifts = document.getElementById('techGifts');
const giftReviews = document.getElementById('giftReviews');
const giftTips = document.getElementById('giftTips');

// 선물 추천 표시 함수
function displayGiftRecommendations(mbtiType) {
    const data = mbtiGiftData[mbtiType];
    if (!data) return;

    // 선물 스타일 표시
    displayGiftStyle(data.giftStyle);
    
    // 선호도와 피해야 할 것들 표시
    displayPreferences(data.preferences, data.avoid);
    
    // 가격대별 추천 표시
    displayPriceRanges(data.priceRanges);
    
    // 기념일별 추천 표시
    displayOccasions(data.occasions);
    
    // 관심사별 추천 표시
    displayInterests(data.interests);
    
    // 선물 팁 표시
    displayGiftTips(mbtiType);
    
    // 숨겨진 콘텐츠 표시
    giftContent.classList.remove('hidden');
}

// 선물 스타일 표시 함수
function displayGiftStyle(style) {
    giftStyle.innerHTML = `
        <h3>${style.title}</h3>
        <p>${style.description}</p>
    `;
}

// 선호도와 피해야 할 것들 표시 함수
function displayPreferences(prefs, avoids) {
    preferences.innerHTML = `
        <h3>선호하는 선물 스타일</h3>
        ${createList(prefs)}
    `;
    
    avoidList.innerHTML = `
        <h3>피하면 좋을 선물</h3>
        ${createList(avoids)}
    `;
}

// 가격대별 추천 표시 함수
function displayPriceRanges(ranges) {
    budgetGifts.innerHTML = createList(ranges.budget);
    mediumGifts.innerHTML = createList(ranges.medium);
    premiumGifts.innerHTML = createList(ranges.premium);
}

// 기념일별 추천 표시 함수
function displayOccasions(occasions) {
    birthdayGifts.innerHTML = createList(occasions.birthday);
    anniversaryGifts.innerHTML = createList(occasions.anniversary);
    christmasGifts.innerHTML = createList(occasions.christmas);
    casualGifts.innerHTML = createList(occasions.casual);
}

// 관심사별 추천 표시 함수
function displayInterests(interests) {
    hobbyGifts.innerHTML = createList(interests.hobby);
    fashionGifts.innerHTML = createList(interests.fashion);
    cultureGifts.innerHTML = createList(interests.culture);
    techGifts.innerHTML = createList(interests.tech);
}

// 선물 팁 표시 함수
function displayGiftTips(mbtiType) {
    const tips = [
        "선물을 고를 때는 상대방의 취향과 니즈를 우선적으로 고려하세요.",
        "가격보다는 진정성과 thoughtfulness가 중요합니다.",
        "선물과 함께 마음이 담긴 메시지나 카드를 첨부하면 더욱 좋습니다.",
        "포장과 프레젠테이션도 선물의 중요한 부분입니다."
    ];
    
    giftTips.innerHTML = `
        <div class="tips-content">
            ${createList(tips)}
        </div>
    `;
}

// 리스트 생성 헬퍼 함수
function createList(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

// 이벤트 리스너
mbtiSelect.addEventListener('change', (e) => {
    displayGiftRecommendations(e.target.value);
});

// 공유 기능
window.shareContent = function() {
    const selectedMbti = mbtiSelect.value;
    if (!selectedMbti) {
        alert('MBTI를 선택해주세요!');
        return;
    }

    const shareText = `${selectedMbti}를 위한 완벽한 선물 추천 리스트를 확인해보세요! 🎁\n`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'MBTI 선물 추천',
            text: shareText,
            url: shareUrl
        }).catch(console.error);
    } else {
        // 클립보드에 복사
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = `${shareText}\n${shareUrl}`;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('링크가 복사되었습니다!');
    }
}; 