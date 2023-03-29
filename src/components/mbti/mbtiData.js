const qnaList = [
  {
    q: "1. 이성 사이에 진정한 친구는 있다, 없다?",
    a: [
      {
        answer: "a. 이성 사이에 친구가 어딨어? 절대 없어",
        type: ["호랑이", "용", "뱀", "양", "강아지"],
      },
      {
        answer: "b. 친구 있지, 절대 이성으로만 안 보일뿐",
        type: ["유니콘", "치타", "거북이", "여우", "나무늘보"],
      },
      { answer: "c. 난 잘 모르겠어..", type: ["토끼", "나무늘보"] },
    ],
  },
  {
    q: "2. 좋아하는 사람이 생겨 연락하고자 한다 ",
    a: [
      {
        answer: "a. 바로 먼저 연락한다.",
        type: ["유니콘", "치타", "용", "뱀"],
      },
      {
        answer: "b. 언제 연락할지, 어떻게 말할지 심사숙고하여 연락한다.",
        type: ["호랑이", "거북이", "여우"],
      },
      {
        answer: "c. 상대방에게 먼저 연락 올 때까지 기다린다.",
        type: ["토끼", "뱀", "양", "나무늘보"],
      },
    ],
  },
  {
    q: "3. 당신의 고백 스타일은?",
    a: [
      {
        answer: "a. 호감이 보이면 바로 고백한다",
        type: ["호랑이", "치타", "용", "강아지"],
      },
      {
        answer: "b. 상대방이 고백할 때까지 기다린다",
        type: ["토끼", "양", "나무늘보"],
      },
      {
        answer: "c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.",
        type: ["유니콘", "거북이", "여우", "사슴", "뱀"],
      },
    ],
  },
  {
    q: "4. 호감가는 고백 멘트를 고른다면?",
    a: [
      {
        answer: 'a. 박력 그 자체, "야 나랑 사귀자" ',
        type: ["호랑이", "용", "뱀"],
      },
      {
        answer: 'b. 섬세한 "나 너 많이 좋아해, 나랑 사귈래?" ',
        type: ["토끼", "강아지", "사슴", "양", "나무늘보"],
      },
      {
        answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ',
        type: ["유니콘", "치타", "거북이", "여우"],
      },
    ],
  },
  {
    q: "5. 오늘 연인과 첫 데이트 하는 날이다. 첫 날 허용할 수 있는 스킨십의 범위는?",
    a: [
      {
        answer: "a. 쑥스러워.. 손 잡기 정도??",
        type: ["호랑이", "토끼", "강아지", "뱀", "양"],
      },
      {
        answer: "b. 요즘 시대가 어느 때인데, 가벼운 뽀뽀까지 가능이야",
        type: ["유니콘", "치타", "거북이", "나무늘보"],
      },
      {
        answer: "c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!",
        type: ["용", "여우", "사슴"],
      },
    ],
  },

  {
    q: "6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)",
    a: [
      {
        answer: "a. 무슨 기념일이야, 그냥 평소처럼 해",
        type: ["뱀", "양", "나무늘보", "사슴", "강아지"],
      },
      {
        answer: "b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?",
        type: ["유니콘", "치타", "거북이"],
      },
      {
        answer: "c. 이미 깜짝 이벤트 다 준비해놨어",
        type: ["호랑이", "토끼", "용", "여우"],
      },
    ],
  },
  {
    q: "7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다",
    a: [
      {
        answer: "a. 눈치 못 채고 그냥 있는다",
        type: ["호랑이", "토끼", "나무늘보", "사슴", "강아지"],
      },
      {
        answer: "b. 눈치는 채나 말은 꺼내지 않는다",
        type: ["용", "뱀", "양"],
      },
      {
        answer:
          'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다',
        type: ["유니콘", "치타", "거북이", "여우"],
      },
    ],
  },
  {
    q: "8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다",
    a: [
      {
        answer: "a. 각자 만났던 장소에서 헤어진다.",
        type: ["유니콘", "뱀", "양"],
      },
      {
        answer: "b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다.",
        type: ["치타", "용", "거북이", "여우", "사슴"],
      },
      {
        answer: "c. 집 앞까지 데려다준다.",
        type: ["호랑이", "토끼", "나무늘보"],
      },
    ],
  },
  {
    q: "9. 연인에게 하루종일 연락이 안 온다..",
    a: [
      {
        answer: "a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다",
        type: ["토끼", "유니콘", "여우", "양", "강아지"],
      },
      {
        answer:
          "b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다.",
        type: ["호랑이", "치타", "거북이", "나무늘보", "사슴"],
      },
      {
        answer: "c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화",
        type: ["용", "10", "8", "뱀"],
      },
    ],
  },
  {
    q: "10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ",
    a: [
      {
        answer:
          "a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네",
        type: ["뱀", "양", "나무늘보"],
      },
      {
        answer: "b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게",
        type: ["유니콘", "용", "거북이", "여우"],
      },
      {
        answer: "c. 헐 대박, 어디야?? 당장 나갈게!",
        type: ["호랑이", "토끼", "치타", "강아지"],
      },
    ],
  },
  {
    q: "11. 내가 추구하는 연애관은? ",
    a: [
      {
        answer: "a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.",
        type: ["호랑이", "뱀", "양", "나무늘보", "사슴"],
      },
      {
        answer:
          "b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.",
        type: ["토끼", "유니콘", "치타", "거북이", "사슴"],
      },
      {
        answer: "c. 연애는 마음가는대로! 불타오르는 연애가 최고지.",
        type: ["용", "여우"],
      },
    ],
  },
  {
    q: "12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?",
    a: [
      {
        answer:
          'a. "아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.',
        type: ["치타", "거북이", "뱀", "양", "강아지"],
      },
      {
        answer:
          'b. "야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.',
        type: ["유니콘", "용", "여우", "사슴"],
      },
      {
        answer: 'c. "아니 그건 아니고, 하.." 조용히 운다.',
        type: ["호랑이", "토끼", "나무늘보"],
      },
    ],
  },
];

const infoList = [
  {
    data_idx: 0,
    data_type: "유니콘",
    name: "연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>",
    desc: "연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! ",
  },
  {
    data_idx: 1,
    data_type: "용",
    name: "난 너만 봐, 정직한 연애 스타일의 <소>",
    desc: "연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! ",
  },
  {
    data_idx: 2,
    data_type: "호랑이",
    name: "야 사귀자, 사랑을 쟁취하는 <호랑이>",
    desc: "한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!",
  },
  {
    data_idx: 3,
    data_type: "토끼",
    name: "이건 어때? 난 어때? 독특한 매력을 가진 <토끼>",
    desc: "상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.",
  },
  {
    data_idx: 4,
    data_type: "치타",
    name: "결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>",
    desc: "상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!",
  },
  {
    data_idx: 5,
    data_type: "뱀",
    name: "기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>",
    desc: "상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!",
  },
  {
    data_idx: 6,
    data_type: "여우",
    name: "어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>",
    desc: "연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!",
  },
  {
    data_idx: 7,
    data_type: "양",
    name: "난 너랑 하는 것들 다 좋아, 순종적인 <양>",
    desc: "연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!",
  },
  {
    data_idx: 8,
    data_type: "거북이",
    name: "난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>",
    desc: "지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!",
  },
  {
    data_idx: 9,
    data_type: "토끼",
    name: "이건 이거고 저건 저거지 , 공과사 확실한 <닭>",
    desc: "깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!",
  },
  {
    data_idx: 10,
    data_type: "강아지",
    name: "난 네가 좋아 너무 좋아, 애교만땅 <개>",
    desc: "애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! ",
  },
  {
    data_idx: 11,
    data_type: "나무늘보",
    name: "산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>",
    desc: "단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! ",
  },
];

let pointArr = [
  { name: "유니콘", value: 0, key: 0 },
  { name: "호랑이", value: 0, key: 1 },
  { name: "용", value: 0, key: 2 },
  { name: "치타", value: 0, key: 3 },
  { name: "뱀", value: 0, key: 4 },
  { name: "여우", value: 0, key: 5 },
  { name: "거북이", value: 0, key: 6 },
  { name: "토끼", value: 0, key: 7 },
  { name: "사슴", value: 0, key: 8 },
  { name: "양", value: 0, key: 9 },
  { name: "강아지", value: 0, key: 10 },
  { name: "나무늘보", value: 0, key: 11 },
];

export { qnaList, infoList, pointArr };
