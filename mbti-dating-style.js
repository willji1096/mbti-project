document.addEventListener('DOMContentLoaded', function() {
    const mbtiSelect = document.getElementById('mbtiSelect');
    const datingStyleContent = document.getElementById('datingStyleContent');
    
    // MBTI 데이터
    const mbtiData = {
        "ISTJ": {
            characteristics: [
                "신중하고 책임감 있는 연애 스타일",
                "안정적이고 전통적인 관계 선호",
                "약속과 계획을 중요시함",
                "실용적이고 현실적인 접근"
            ],
            strengths: [
                "신뢰할 수 있는 파트너",
                "책임감이 강함",
                "헌신적이고 충실함",
                "명확한 의사소통"
            ],
            weaknesses: [
                "감정 표현이 서툴 수 있음",
                "변화를 받아들이기 어려움",
                "융통성이 부족할 수 있음"
            ],
            conflictResolution: [
                "논리적이고 체계적인 방식으로 문제 해결",
                "감정보다는 사실에 기반한 접근",
                "직접적인 대화 선호"
            ],
            idealDate: [
                "미리 계획된 데이트",
                "조용한 레스토랑에서의 식사",
                "박물관이나 전시회 관람",
                "전통적인 데이트 코스"
            ]
        },
        "ISFJ": {
            characteristics: [
                "따뜻하고 배려심 깊은 연애 스타일",
                "상대방의 필요를 잘 파악함",
                "안정적인 관계 추구",
                "세심한 관심과 돌봄"
            ],
            strengths: [
                "헌신적이고 충실한 파트너",
                "상대방의 감정을 잘 이해함",
                "실용적인 문제해결 능력",
                "안정적인 관계 유지"
            ],
            weaknesses: [
                "자신의 감정을 숨기는 경향",
                "갈등을 피하려는 성향",
                "과도한 희생적 태도"
            ],
            conflictResolution: [
                "평화로운 해결 방식 선호",
                "상대방의 감정을 우선 고려",
                "타협을 통한 해결"
            ],
            idealDate: [
                "조용한 카페에서의 대화",
                "집에서 함께 요리하기",
                "영화 감상",
                "소소한 일상 데이트"
            ]
        },
        "INFJ": {
            characteristics: [
                "깊이 있는 정서적 연결 추구",
                "이상적인 관계를 꿈꿈",
                "직관적인 이해력",
                "의미 있는 대화 중시"
            ],
            strengths: [
                "깊은 공감 능력",
                "창의적인 문제 해결",
                "헌신적인 태도",
                "장기적 관계 지향"
            ],
            weaknesses: [
                "완벽주의적 성향",
                "현실과 이상의 괴리",
                "때때로 과도한 기대"
            ],
            conflictResolution: [
                "조화로운 해결책 모색",
                "깊은 대화를 통한 이해",
                "감정적 해결보다 근본적 해결 추구"
            ],
            idealDate: [
                "의미 있는 대화가 가능한 장소",
                "예술적인 활동 공유",
                "조용한 자연 속 데이트",
                "문화 예술 공간 방문"
            ]
        },
        "INTJ": {
            characteristics: [
                "전략적이고 계획적인 연애",
                "지적 대화를 중시",
                "독립적인 성향",
                "효율적인 관계 운영"
            ],
            strengths: [
                "명확한 의사소통",
                "문제해결 능력이 뛰어남",
                "신뢰성 있는 파트너",
                "장기적 비전 제시"
            ],
            weaknesses: [
                "감정 표현이 부족",
                "때로는 차가워 보일 수 있음",
                "완벽주의적 성향"
            ],
            conflictResolution: [
                "논리적 분석을 통한 해결",
                "효율적인 해결책 모색",
                "감정보다 이성적 접근"
            ],
            idealDate: [
                "지적 자극이 있는 활동",
                "새로운 것을 배우는 데이트",
                "체계적으로 계획된 일정",
                "의미 있는 대화가 가능한 장소"
            ]
        },
        "ISTP": {
            characteristics: [
                "자유로운 연애 스타일",
                "실용적이고 현실적인 접근",
                "독립성을 중시",
                "즉흥적인 결정 선호"
            ],
            strengths: [
                "문제해결 능력이 뛰어남",
                "융통성 있는 태도",
                "현실적인 조언 제공",
                "위기 대처 능력"
            ],
            weaknesses: [
                "감정 표현이 서툴 수 있음",
                "장기 계획 수립이 어려움",
                "때로는 무관심해 보일 수 있음"
            ],
            conflictResolution: [
                "실용적인 해결책 모색",
                "직접적인 대화 선호",
                "문제의 핵심에 집중"
            ],
            idealDate: [
                "액티비티가 있는 데이트",
                "새로운 장소 탐험",
                "자유로운 일정",
                "기술이나 기능을 배우는 활동"
            ]
        },
        "ISFP": {
            characteristics: [
                "감성적이고 예술적인 연애",
                "자유로운 영혼",
                "현재에 충실",
                "조화로운 관계 추구"
            ],
            strengths: [
                "따뜻한 감성",
                "예술적 감각",
                "배려심이 깊음",
                "유연한 태도"
            ],
            weaknesses: [
                "우유부단한 면이 있음",
                "장기 계획 수립이 어려움",
                "갈등 상황을 피하려는 경향"
            ],
            conflictResolution: [
                "평화로운 해결 방식 선호",
                "감정적 해결보다 실질적 해결 추구",
                "타협을 통한 해결"
            ],
            idealDate: [
                "예술적인 활동 공유",
                "자연 속에서의 데이트",
                "감성적인 분위기의 장소",
                "창의적인 활동"
            ]
        },
        "INFP": {
            characteristics: [
                "이상적이고 낭만적인 연애",
                "깊은 정서적 교감 추구",
                "진정성 있는 관계 중시",
                "개인의 가치관 중요"
            ],
            strengths: [
                "깊은 공감 능력",
                "창의적인 표현",
                "진실된 감정 전달",
                "이해심이 깊음"
            ],
            weaknesses: [
                "현실과 이상의 괴리",
                "때로는 과도하게 감정적",
                "우유부단한 면이 있음"
            ],
            conflictResolution: [
                "감정적 해결보다 가치 중심적 접근",
                "깊은 대화를 통한 이해",
                "조화로운 해결책 모색"
            ],
            idealDate: [
                "의미 있는 대화가 가능한 장소",
                "예술적인 활동 공유",
                "조용한 카페에서의 대화",
                "자연 속에서의 데이트"
            ]
        },
        "INTP": {
            characteristics: [
                "논리적이고 분석적인 연애",
                "독특한 관점의 접근",
                "지적 호기심이 많음",
                "독립적인 성향"
            ],
            strengths: [
                "창의적인 문제해결",
                "지적인 대화 능력",
                "객관적인 분석",
                "유머러스한 면모"
            ],
            weaknesses: [
                "감정 표현이 서툴 수 있음",
                "실행력이 부족할 수 있음",
                "때로는 무관심해 보일 수 있음"
            ],
            conflictResolution: [
                "논리적 분석을 통한 해결",
                "객관적인 시각 유지",
                "근본적인 문제 해결 추구"
            ],
            idealDate: [
                "지적 자극이 있는 활동",
                "새로운 것을 탐구하는 데이트",
                "토론이 가능한 장소",
                "독특한 경험"
            ]
        },
        "ESTP": {
            characteristics: [
                "활동적이고 모험적인 연애",
                "현재를 즐기는 스타일",
                "즉흥적인 결정",
                "실용적인 접근"
            ],
            strengths: [
                "재미있는 데이트 기획",
                "위기대처 능력",
                "적극적인 태도",
                "현실적인 문제해결"
            ],
            weaknesses: [
                "장기 계획이 부족할 수 있음",
                "감정적 교감이 부족할 수 있음",
                "안정성이 부족할 수 있음"
            ],
            conflictResolution: [
                "직접적인 대화 선호",
                "실용적인 해결책 모색",
                "빠른 문제 해결"
            ],
            idealDate: [
                "스포츠 활동",
                "모험적인 데이트",
                "새로운 장소 탐험",
                "액티비티가 있는 데이트"
            ]
        },
        "ESFP": {
            characteristics: [
                "즐겁고 활기찬 연애",
                "사교적이고 낙관적",
                "즉흥적인 데이트",
                "감정 표현이 풍부"
            ],
            strengths: [
                "밝은 에너지",
                "재미있는 데이트 기획",
                "따뜻한 감성",
                "적극적인 표현"
            ],
            weaknesses: [
                "장기 계획이 부족할 수 있음",
                "깊이 있는 대화가 부족할 수 있음",
                "안정성이 부족할 수 있음"
            ],
            conflictResolution: [
                "긍정적인 분위기로 해결",
                "감정적 해소 중시",
                "즉각적인 화해 선호"
            ],
            idealDate: [
                "사교적인 모임",
                "즐거운 활동",
                "새로운 경험",
                "축제나 이벤트 참여"
            ]
        },
        "ENFP": {
            characteristics: [
                "열정적이고 낭만적인 연애",
                "새로운 시도를 즐김",
                "감정 표현이 풍부",
                "이상적인 관계 추구"
            ],
            strengths: [
                "창의적인 데이트 기획",
                "따뜻한 감성",
                "적극적인 소통",
                "긍정적인 에너지"
            ],
            weaknesses: [
                "변덕스러울 수 있음",
                "현실적인 면이 부족할 수 있음",
                "과도한 기대"
            ],
            conflictResolution: [
                "열린 대화를 통한 해결",
                "창의적인 해결책 모색",
                "감정적 해소 중시"
            ],
            idealDate: [
                "새로운 경험",
                "창의적인 활동",
                "의미 있는 대화",
                "즉흥적인 여행"
            ]
        },
        "ENTP": {
            characteristics: [
                "도전적이고 지적인 연애",
                "새로운 아이디어 추구",
                "논리적 토론을 즐김",
                "독특한 관점"
            ],
            strengths: [
                "창의적인 문제해결",
                "지적인 대화",
                "유머러스한 성격",
                "적극적인 태도"
            ],
            weaknesses: [
                "감정적 교감이 부족할 수 있음",
                "논쟁을 즐기는 성향",
                "안정성이 부족할 수 있음"
            ],
            conflictResolution: [
                "논리적 분석을 통한 해결",
                "창의적인 해결책 모색",
                "직접적인 대화"
            ],
            idealDate: [
                "지적 토론이 가능한 장소",
                "새로운 경험",
                "창의적인 활동",
                "도전적인 과제 해결"
            ]
        },
        "ESTJ": {
            characteristics: [
                "체계적이고 책임감 있는 연애",
                "전통적인 가치관",
                "계획적인 데이트",
                "명확한 의사소통"
            ],
            strengths: [
                "책임감 있는 태도",
                "체계적인 계획",
                "신뢰성 있는 파트너",
                "실용적인 문제해결"
            ],
            weaknesses: [
                "감정 표현이 부족할 수 있음",
                "융통성이 부족할 수 있음",
                "지나친 통제"
            ],
            conflictResolution: [
                "체계적인 문제 해결",
                "직접적인 대화",
                "실용적인 해결책 모색"
            ],
            idealDate: [
                "계획된 일정",
                "전통적인 데이트",
                "목적이 있는 활동",
                "체계적인 여행"
            ]
        },
        "ESFJ": {
            characteristics: [
                "배려심 깊은 연애",
                "조화로운 관계 추구",
                "사교적인 성향",
                "전통적인 가치관"
            ],
            strengths: [
                "따뜻한 감성",
                "세심한 배려",
                "적극적인 소통",
                "책임감 있는 태도"
            ],
            weaknesses: [
                "과도한 걱정",
                "독립성이 부족할 수 있음",
                "갈등을 피하려는 성향"
            ],
            conflictResolution: [
                "조화로운 해결 추구",
                "감정적 해소 중시",
                "타협을 통한 해결"
            ],
            idealDate: [
                "사교적인 모임",
                "전통적인 데이트",
                "따뜻한 대화",
                "함께하는 봉사활동"
            ]
        },
        "ENFJ": {
            characteristics: [
                "이상적이고 헌신적인 연애",
                "깊은 유대감 추구",
                "적극적인 소통",
                "성장 지향적"
            ],
            strengths: [
                "뛰어난 공감 능력",
                "따뜻한 리더십",
                "적극적인 소통",
                "헌신적인 태도"
            ],
            weaknesses: [
                "과도한 책임감",
                "완벽주의적 성향",
                "지나친 자기희생"
            ],
            conflictResolution: [
                "조화로운 해결 추구",
                "깊은 대화를 통한 이해",
                "상호 성장 중시"
            ],
            idealDate: [
                "의미 있는 활동",
                "문화 예술 체험",
                "깊은 대화",
                "함께하는 성장 활동"
            ]
        },
        "ENTJ": {
            characteristics: [
                "목표 지향적인 연애",
                "리더십 있는 태도",
                "효율적인 관계 운영",
                "성장 중심적"
            ],
            strengths: [
                "명확한 비전 제시",
                "효율적인 문제해결",
                "적극적인 태도",
                "책임감 있는 리더십"
            ],
            weaknesses: [
                "감정 표현이 부족할 수 있음",
                "지나친 통제력",
                "완벽주의적 성향"
            ],
            conflictResolution: [
                "효율적인 문제 해결",
                "직접적인 대화",
                "목표 중심적 접근"
            ],
            idealDate: [
                "목표가 있는 활동",
                "지적 자극이 있는 데이트",
                "효율적인 시간 활용",
                "새로운 도전"
            ]
        }
    };

    // 통계 데이터
    const statistics = {
        "ISTJ": { avgDuration: "2년 3개월", satisfaction: "85%", reunionRate: "70%" },
        "ISFJ": { avgDuration: "2년 6개월", satisfaction: "88%", reunionRate: "75%" },
        "INFJ": { avgDuration: "2년 1개월", satisfaction: "87%", reunionRate: "72%" },
        "INTJ": { avgDuration: "1년 11개월", satisfaction: "82%", reunionRate: "68%" },
        "ISTP": { avgDuration: "1년 8개월", satisfaction: "79%", reunionRate: "65%" },
        "ISFP": { avgDuration: "2년 2개월", satisfaction: "84%", reunionRate: "71%" },
        "INFP": { avgDuration: "2년", satisfaction: "83%", reunionRate: "69%" },
        "INTP": { avgDuration: "1년 9개월", satisfaction: "80%", reunionRate: "66%" },
        "ESTP": { avgDuration: "1년 6개월", satisfaction: "78%", reunionRate: "63%" },
        "ESFP": { avgDuration: "1년 10개월", satisfaction: "82%", reunionRate: "68%" },
        "ENFP": { avgDuration: "1년 11개월", satisfaction: "85%", reunionRate: "70%" },
        "ENTP": { avgDuration: "1년 8개월", satisfaction: "81%", reunionRate: "67%" },
        "ESTJ": { avgDuration: "2년 4개월", satisfaction: "86%", reunionRate: "73%" },
        "ESFJ": { avgDuration: "2년 5개월", satisfaction: "89%", reunionRate: "76%" },
        "ENFJ": { avgDuration: "2년 2개월", satisfaction: "88%", reunionRate: "74%" },
        "ENTJ": { avgDuration: "2년", satisfaction: "84%", reunionRate: "69%" }
    };

    function updateContent(mbtiType) {
        if (!mbtiType) return;

        const data = mbtiData[mbtiType];
        if (!data) return;

        datingStyleContent.classList.remove('hidden');

        // 특징 업데이트
        document.getElementById('characteristics').innerHTML = 
            data.characteristics.map(item => `<p>• ${item}</p>`).join('');

        // 장점 업데이트
        document.getElementById('strengths').innerHTML = 
            data.strengths.map(item => `<p>• ${item}</p>`).join('');

        // 약점 업데이트
        document.getElementById('weaknesses').innerHTML = 
            data.weaknesses.map(item => `<p>• ${item}</p>`).join('');

        // 갈등 해결 방식 업데이트
        document.getElementById('conflictResolution').innerHTML = 
            data.conflictResolution.map(item => `<p>• ${item}</p>`).join('');

        // 이상적인 데이트 업데이트
        document.getElementById('idealDate').innerHTML = 
            data.idealDate.map(item => `<p>• ${item}</p>`).join('');

        // 통계 데이터 업데이트
        const stats = statistics[mbtiType];
        if (stats) {
            document.getElementById('avgDuration').textContent = stats.avgDuration;
            document.getElementById('satisfaction').textContent = stats.satisfaction;
            document.getElementById('reunionRate').textContent = stats.reunionRate;
        }
    }

    mbtiSelect.addEventListener('change', function() {
        updateContent(this.value);
    });
}); 