const questions = [
    // E/I 질문들 (5문항)
    {
        number: 1,
        question: "모임에서 나는...",
        answers: {
            A: { text: "여러 사람과 대화하는 것이 즐겁다", type: "E" },
            B: { text: "한두 명과 깊은 대화를 나누고 싶다", type: "I" }
        }
    },
    {
        number: 2,
        question: "새로운 사람을 만날 때 나는...",
        answers: {
            A: { text: "먼저 다가가서 말을 건다", type: "E" },
            B: { text: "상대방이 먼저 말을 걸어주길 기다린다", type: "I" }
        }
    },
    {
        number: 3,
        question: "주말에 나는...",
        answers: {
            A: { text: "친구들과 만나서 시간을 보낸다", type: "E" },
            B: { text: "집에서 혼자만의 시간을 보낸다", type: "I" }
        }
    },
    {
        number: 4,
        question: "스트레스를 받았을 때 나는...",
        answers: {
            A: { text: "친구들과 만나서 수다를 떨며 푼다", type: "E" },
            B: { text: "혼자만의 시간을 가지며 정리한다", type: "I" }
        }
    },
    {
        number: 5,
        question: "일할 때 나는...",
        answers: {
            A: { text: "다른 사람들과 함께 하는 것이 좋다", type: "E" },
            B: { text: "혼자서 집중해서 하는 것이 좋다", type: "I" }
        }
    },

    // S/N 질문들 (5문항)
    {
        number: 6,
        question: "문제를 해결할 때 나는...",
        answers: {
            A: { text: "구체적인 사실과 경험을 중요시한다", type: "S" },
            B: { text: "직관과 가능성을 중요시한다", type: "N" }
        }
    },
    {
        number: 7,
        question: "대화할 때 나는...",
        answers: {
            A: { text: "현실적이고 실제적인 이야기를 선호한다", type: "S" },
            B: { text: "상상력이 필요한 추상적인 주제를 좋아한다", type: "N" }
        }
    },
    {
        number: 8,
        question: "새로운 프로젝트를 시작할 때 나는...",
        answers: {
            A: { text: "구체적인 계획과 단계를 세운다", type: "S" },
            B: { text: "전체적인 방향과 가능성을 먼저 생각한다", type: "N" }
        }
    },
    {
        number: 9,
        question: "책을 읽을 때 나는...",
        answers: {
            A: { text: "사실적이고 현실적인 내용을 선호한다", type: "S" },
            B: { text: "상상력이 필요한 판타지를 좋아한다", type: "N" }
        }
    },
    {
        number: 10,
        question: "문래에 대해 생각할 때 나는...",
        answers: {
            A: { text: "현실적이고 구체적인 계획을 세운다", type: "S" },
            B: { text: "다양한 가능성을 상상하며 꿈꾼다", type: "N" }
        }
    },

    // T/F 질문들 (5문항)
    {
        number: 11,
        question: "중요한 결정을 내릴 때 나는...",
        answers: {
            A: { text: "논리적으로 분석하여 판단한다", type: "T" },
            B: { text: "감정과 가치관을 중요하게 생각한다", type: "F" }
        }
    },
    {
        number: 12,
        question: "친구가 고민을 털어놓을 때 나는...",
        answers: {
            A: { text: "해결책을 제시해준다", type: "T" },
            B: { text: "공감하며 이야기를 들어준다", type: "F" }
        }
    },
    {
        number: 13,
        question: "갈등 상황에서 나는...",
        answers: {
            A: { text: "객관적 사실을 바탕으로 해결한다", type: "T" },
            B: { text: "서로의 감정을 고려하며 해결한다", type: "F" }
        }
    },
    {
        number: 14,
        question: "누군가를 평가할 때 나는...",
        answers: {
            A: { text: "능력과 실적을 중요하게 본다", type: "T" },
            B: { text: "성실성과 인간성을 중요하게 본다", type: "F" }
        }
    },
    {
        number: 15,
        question: "의견 충돌이 있을 때 나는...",
        answers: {
            A: { text: "논리적으로 설득하려 한다", type: "T" },
            B: { text: "상대방의 입장을 먼저 생각한다", type: "F" }
        }
    },

    // J/P 질문들 (5문항)
    {
        number: 16,
        question: "여행을 갈 때 나는...",
        answers: {
            A: { text: "세부 일정을 미리 계획한다", type: "J" },
            B: { text: "상황에 따라 유연하게 결정한다", type: "P" }
        }
    },
    {
        number: 17,
        question: "일상생활에서 나는...",
        answers: {
            A: { text: "계획적이고 체계적으로 움직인다", type: "J" },
            B: { text: "즉흥적이고 자유롭게 행동한다", type: "P" }
        }
    },
    {
        number: 18,
        question: "과제나 업무를 할 때 나는...",
        answers: {
            A: { text: "계획대로 차근차근 진행한다", type: "J" },
            B: { text: "마감에 임박해서 집중한다", type: "P" }
        }
    },
    {
        number: 19,
        question: "방 정리는...",
        answers: {
            A: { text: "항상 깔끔하게 정돈되어 있다", type: "J" },
            B: { text: "필요할 때 한번에 한다", type: "P" }
        }
    },
    {
        number: 20,
        question: "의사결정을 할 때 나는...",
        answers: {
            A: { text: "빠르게 결정하고 실행한다", type: "J" },
            B: { text: "여러 가능성을 계속 고민한다", type: "P" }
        }
    }
];

// 각 유형별 설명
const typeDescriptions = {
    ISTJ: {
        title: "청렴결백한 논리주의자",
        description: "사실에 근거하여 체계적으로 일하는 것을 좋아하는 현실주의자입니다. 책임감이 강하고 규칙을 중요시하며, 정직하고 헌신적인 성격을 가지고 있습니다.",
        strengths: ["책임감이 강함", "체계적", "현실적", "정직함", "신중함"],
        weaknesses: ["융통성 부족", "변화를 어려워함", "감정 표현이 서툼"],
        compatibleTypes: ["ESFP", "ESTP", "ENFP"],
        incompatibleTypes: ["INFP", "ENFJ", "ENTP"]
    },
    ISFJ: {
        title: "용감한 수호자",
        description: "타인을 보호하고 봉사하는 것을 좋아하는 따뜻한 수호자입니다. 세심하고 배려심이 많으며, 책임감과 인내심이 강한 성격을 가지고 있습니다.",
        strengths: ["배려심이 깊음", "책임감이 강함", "인내심이 많음", "세심함"],
        weaknesses: ["자기주장이 약함", "변화를 두려워함", "완벽주의"],
        compatibleTypes: ["ENFP", "ENTP", "ESFP"]
    },
    INFJ: {
        title: "선의의 옹호자",
        description: "이상주의적이고 헌신적인 성격으로, 깊은 통찰력과 공감능력을 가지고 있습니다.",
        strengths: ["통찰력", "창의성", "헌신적", "공감능력"],
        weaknesses: ["완벽주의", "고집", "번아웃 경향"],
        compatibleTypes: ["ENTP", "ENFP", "INTJ"],
        incompatibleTypes: ["ESTP", "ESFP", "ESTJ"]
    },
    INTJ: {
        title: "용의주도한 전략가",
        description: "논리적이고 창의적인 전략가입니다. 지적 성장을 추구하며, 높은 통찰력과 분석력을 가지고 있습니다.",
        strengths: ["전략적 사고", "창의성", "분석력", "독립적"],
        weaknesses: ["고집이 셈", "감정 표현이 서툼", "완벽주의"],
        compatibleTypes: ["ENFP", "ENTP", "INFJ"]
    },
    ISTP: {
        title: "만능 재주꾼",
        description: "대담하고 현실적인 문제 해결사입니다. 도구와 기계를 다루는 데 능숙하며, 상황 적응력이 뛰어납니다.",
        strengths: ["실용적", "적응력이 좋음", "문제해결능력", "침착함"],
        weaknesses: ["약속에 무심", "즉흥적", "감정표현이 부족"],
        compatibleTypes: ["ESTJ", "ENTJ", "ESFJ"]
    },
    ISFP: {
        title: "호기심 많은 예술가",
        description: "예술적 감각이 뛰어난 성격으로, 자유로운 영혼의 소유자입니다.",
        strengths: ["창의성", "적응력", "감수성", "온화함"],
        weaknesses: ["계획성 부족", "갈등 회피", "미루기 습관"],
        compatibleTypes: ["ENFJ", "ESFJ", "ESTJ"],
        incompatibleTypes: ["INTJ", "ENTJ", "INTP"]
    },
    INFP: {
        title: "열정적인 중재자",
        description: "이상적이고 창의적인 성격으로, 깊은 감성과 독창성을 가지고 있습니다.",
        strengths: ["창의성", "공감능력", "적응력", "이상주의"],
        weaknesses: ["현실감각 부족", "우유부단", "감정기복"],
        compatibleTypes: ["ENFJ", "ENTJ", "INFJ"],
        incompatibleTypes: ["ESTJ", "ESFJ", "ISTJ"]
    },
    INTP: {
        title: "논리적인 사색가",
        description: "논리적이고 창의적인 사색가로, 복잡한 문제 해결을 즐깁니다.",
        strengths: ["분석력", "창의성", "객관성", "지적 호기심"],
        weaknesses: ["사회성 부족", "결단력 부족", "완벽주의"],
        compatibleTypes: ["ENTJ", "ESTJ", "ENFJ"],
        incompatibleTypes: ["ESFJ", "ISFJ", "ESFP"]
    },
    ESTP: {
        title: "모험을 즐기는 사업가",
        description: "활동적이고 현실적인 문제 해결사입니다. 위험을 감수하는 것을 즐기며 순발력이 뛰어납니다.",
        strengths: ["적응력", "실용적", "활동적", "순발력"],
        weaknesses: ["참을성 부족", "계획성 부족", "약속에 무심"],
        compatibleTypes: ["ISTJ", "ISFJ", "INTJ"]
    },
    ESFP: {
        title: "자유로운 영혼의 연예인",
        description: "즉흥적이고 활기찬 연예인형 성격입니다. 삶을 즐기며 다른 사람들을 행복하게 만듭니다.",
        strengths: ["낙적", "친근함", "열정적", "재치있음"],
        weaknesses: ["집중력 부족", "장기계획 어려움", "갈등 회피"],
        compatibleTypes: ["ISTJ", "ISFJ", "INTJ"]
    },
    ENFP: {
        title: "재기발랄한 활동가",
        description: "열정적이고 창의적인 자유로운 영혼입니다. 가능성을 발견하고 새로운 아이디어를 만드는 것을 좋아합니다.",
        strengths: ["창의적", "열정적", "공감능력이 뛰어남", "적응력이 좋음"],
        weaknesses: ["집중력이 부족함", "현실감각이 부족할 수 있음", "감정기복이 심함"],
        compatibleTypes: ["INTJ", "INFJ", "ENTJ"],
        incompatibleTypes: ["ISTJ", "ESTJ", "ISFJ"]
    },
    ENTP: {
        title: "논쟁을 즐기는 변론가",
        description: "지적 도전을 즐기는 혁신가입니다. 창의적이고 논리적이며, 새로운 아이디어를 탐구하기를 좋아합니다.",
        strengths: ["창의성", "적응력", "논리적", "카리스마"],
        weaknesses: ["논쟁적", "일관성 부족", "민감함"],
        compatibleTypes: ["INFJ", "INTJ", "ENFJ"]
    },
    ESTJ: {
        title: "엄격한 관리자",
        description: "체계적이고 실용적인 관리자형 성격입니다. 사실에 근거한 논리적인 결정을 내리며 목표 달성에 능합니다.",
        strengths: ["체계적", "실용적", "책임감", "리더십"],
        weaknesses: ["융통성 부족", "감정 무시", "완고함"],
        compatibleTypes: ["ISTP", "ISFP", "INTP"]
    },
    ESFJ: {
        title: "사교적인 외교관",
        description: "친절하고 사교적인 성격으로 다른 사람들을 돕는 것을 좋아합니다. 조화와 협력을 중요시합니다.",
        strengths: ["친절함", "협동심", "책임감", "배려심"],
        weaknesses: ["비판에 약함", "거절을 못함", "주목받고 싶어함"],
        compatibleTypes: ["ISFP", "ISTP", "INFP"]
    },
    ENFJ: {
        title: "정의로운 사회운동가",
        description: "카리스마 있는 지도자형으로 타인의 성장을 돕는 것을 좋아합니다. 이상적이고 헌신적입니다.",
        strengths: ["카리스마", "공감능력", "신뢰성", "영감을 주는"],
        weaknesses: ["과도한 이상주의", "비판에 예민", "완벽주의"],
        compatibleTypes: ["INFP", "ISFP", "INTP"]
    },
    ENTJ: {
        title: "대담한 통솔자",
        description: "천성적인 리더형으로 카리스마와 자신감이 넘칩니다. 논리적이고 효율적인 문제 해결을 추구합니다.",
        strengths: ["리더십", "자신감", "효율성", "결단력"],
        weaknesses: ["독단적", "감정 무시", "참을성 부족"],
        compatibleTypes: ["INFP", "INTP", "ENFP"]
    }
}; 