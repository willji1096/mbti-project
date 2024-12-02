// MBTI별 데이트 코스 데이터
const mbtiDateCourses = {
    ISTJ: {
        seasons: {
            spring: [
                "벚꽃 명소에서 조용한 산책",
                "식물원 관람",
                "전통 찻집에서 차 마시기",
                "봄 꽃축제 방문"
            ],
            summer: [
                "실내 박물관 관람",
                "서점 데이트",
                "카페에서 독서",
                "미술관 관람"
            ],
            autumn: [
                "단풍구경 드라이브",
                "와인 시음회",
                "클래식 음악회",
                "사진 촬영 산책"
            ],
            winter: [
                "실내 카페 데이트",
                "박물관 전시회",
                "따뜻한 찻집",
                "실내 식물원"
            ]
        },
        activities: {
            indoor: [
                "도서관 데이트",
                "박물관 관람",
                "전시회 관람",
                "클래식 공연"
            ],
            outdoor: [
                "정원 산책",
                "사진 촬영",
                "피크닉",
                "자전거 라이딩"
            ]
        },
        budgetPlans: {
            low: {
                title: "조용한 문화 데이트",
                activities: [
                    "도서관 탐방 후 인근 카페",
                    "공원 산책과 도시락",
                    "무료 전시회 관람"
                ],
                cost: "2만원 내외"
            },
            medium: {
                title: "여유로운 문화생활",
                activities: [
                    "미술관 관람",
                    "브런치 카페",
                    "서점 방문 후 책 구매"
                ],
                cost: "5만원 내외"
            },
            high: {
                title: "프리미엄 문화 체험",
                activities: [
                    "클래식 공연 관람",
                    "미슐랭 레스토랑",
                    "프라이빗 전시 관람"
                ],
                cost: "15만원 이상"
            }
        }
    },
    // 다른 MBTI 유형들도 같은 구조로 추가
};

// 지역별 데이트 장소 데이터
const locationSpots = {
    seoul: [
        {
            name: "서울 숲",
            type: "공원",
            description: "자연 속에서 즐기는 여유로운 데이트",
            rating: 4.5,
            tags: ["산책", "피크닉", "사진"]
        },
        {
            name: "국립중앙박물관",
            type: "박물관",
            description: "한국의 역사와 문화를 함께 배우는 데이트",
            rating: 4.8,
            tags: ["실내", "문화", "교육"]
        }
        // 더 많은 장소들...
    ],
    // 다른 지역들...
};

// DOM 요소들
const mbtiSelect = document.getElementById('mbtiSelect');
const courseContent = document.getElementById('courseContent');
const springCourses = document.getElementById('springCourses');
const summerCourses = document.getElementById('summerCourses');
const autumnCourses = document.getElementById('autumnCourses');
const winterCourses = document.getElementById('winterCourses');
const indoorActivities = document.getElementById('indoorActivities');
const outdoorActivities = document.getElementById('outdoorActivities');
const lowBudgetPlan = document.getElementById('lowBudgetPlan');
const midBudgetPlan = document.getElementById('midBudgetPlan');
const highBudgetPlan = document.getElementById('highBudgetPlan');
const regionSelect = document.getElementById('regionSelect');
const locationSpots = document.getElementById('locationSpots');
const dateReviews = document.getElementById('dateReviews');

// 데이트 코스 표시 함수
function displayDateCourses(mbtiType) {
    const courses = mbtiDateCourses[mbtiType];
    if (!courses) return;

    // 계절별 코스 표시
    displaySeasonCourses(courses.seasons);
    
    // 실내/실외 활동 표시
    displayActivities(courses.activities);
    
    // 예산별 플랜 표시
    displayBudgetPlans(courses.budgetPlans);
    
    // 지역별 장소 표시
    displayLocationSpots(regionSelect.value);
    
    // 숨겨진 콘텐츠 표시
    courseContent.classList.remove('hidden');
}

// 계절별 코스 표시 함수
function displaySeasonCourses(seasons) {
    springCourses.innerHTML = createCourseList(seasons.spring);
    summerCourses.innerHTML = createCourseList(seasons.summer);
    autumnCourses.innerHTML = createCourseList(seasons.autumn);
    winterCourses.innerHTML = createCourseList(seasons.winter);
}

// 활동 표시 함수
function displayActivities(activities) {
    indoorActivities.innerHTML = createCourseList(activities.indoor);
    outdoorActivities.innerHTML = createCourseList(activities.outdoor);
}

// 예산별 플랜 표시 함수
function displayBudgetPlans(plans) {
    lowBudgetPlan.innerHTML = createBudgetPlan(plans.low);
    midBudgetPlan.innerHTML = createBudgetPlan(plans.medium);
    highBudgetPlan.innerHTML = createBudgetPlan(plans.high);
}

// 지역별 장소 표시 함수
function displayLocationSpots(region) {
    const spots = locationSpots[region];
    if (!spots) return;

    locationSpots.innerHTML = spots.map(spot => `
        <div class="location-card">
            <h3>${spot.name}</h3>
            <span class="location-type">${spot.type}</span>
            <p>${spot.description}</p>
            <div class="location-rating">
                ${'⭐'.repeat(Math.floor(spot.rating))}
                ${spot.rating % 1 ? '½' : ''}
            </div>
            <div class="location-tags">
                ${spot.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 헬퍼 함수들
function createCourseList(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function createBudgetPlan(plan) {
    return `
        <div class="budget-plan-content">
            <h4>${plan.title}</h4>
            <ul>
                ${plan.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
            <div class="budget-cost">${plan.cost}</div>
        </div>
    `;
}

// 이벤트 리스너들
mbtiSelect.addEventListener('change', (e) => {
    displayDateCourses(e.target.value);
});

regionSelect.addEventListener('change', (e) => {
    displayLocationSpots(e.target.value);
});

// 공유 기능
window.shareContent = function() {
    const selectedMbti = mbtiSelect.value;
    if (!selectedMbti) {
        alert('MBTI를 선택해주세요!');
        return;
    }

    const shareText = `${selectedMbti}를 위한 데이트 코스를 확인해보세요! 💑\n`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: 'MBTI 데이트 코스 추천',
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