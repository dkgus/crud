const qnaList = [
  {
    q: "1. 낯선 곳을 여행 중인 당신을 먼저 사로잡는 것은?",
    a: [
      {
        answer: "a. 여행지의 분위기와 흘러나오는 노래들",
        type: [
          "한국",
          "영국 런던",
          "미국 뉴욕",
          "캐나다 나이아가라 폭포",
          "프랑스 파리",
        ],
      },
      {
        answer: "b. 가장 가고 싶었던 유명한 맛집 골목",
        type: ["시드니", "이스탄불", "탄자니아 세렝게티", "북극", "중국"],
      },
      {
        answer: "c. 잘 모르겠고 그냥 숙소에서 얼른 쉬고 싶다",
        type: ["보라카이", "중국", "스위스"],
      },
    ],
  },
  {
    q: "2. 외국인과  갑자기 눈이 마주쳤다! 이때 나의 반응은?",
    a: [
      {
        answer: "a. 외국이니까 안하던 것도 하고 싶어져 급 반갑게 인사를 한다.",
        type: ["시드니", "이스탄불", "영국 런던", "미국 뉴욕"],
      },
      {
        answer: "b. 신경 안쓰고 가던 길을 마저간다.",
        type: ["한국", "탄자니아 세렝게티", "북극"],
      },
      {
        answer: "c. 외국인보다 더 먼저 손을 흔들어 인사한다.",
        type: [
          "보라카이",
          "미국 뉴욕",
          "캐나다 나이아가라 폭포",
          "중국",
          "스위스",
          "미국 캘리포니아",
        ],
      },
    ],
  },
  {
    q: "3. 친구가 늦잠을 자느라 일정에 차질이 생기고있다 이때 나는?",
    a: [
      {
        answer: "a. 일정을 망가트리지 않기 위해 혼자라도 이동한다",
        type: [
          "한국",
          "이스탄불",
          "영국 런던",
          "프랑스 파리",
          "스위스",
          "미국 캘리포니아",
        ],
      },
      {
        answer: "b. 피곤한 친구를 위해 오늘은 쉬어가기로한다.",
        type: ["보라카이", "캐나다 나이아가라 폭포", "중국"],
      },
      {
        answer: "c. 어쨌든 같이왔으니 조금 싫은소리를 해서라도 일으켜세운다.",
        type: ["시드니", "탄자니아 세렝게티", "북극", "싱가폴", "미국 뉴욕"],
      },
    ],
  },
  {
    q: "4. 여행가기 전 내가 챙기는 짐은?",
    a: [
      {
        answer: "a. 혹시 어떤 물건을 쓸지 모르겠어서 일단 다 챙긴다.",
        type: ["한국", "영국 런던", "미국 뉴욕", "미국 캘리포니아"],
      },
      {
        answer: "b. 어떤 곳에서 어떤 물건을 쓸지 모두 정리해서 챙긴다.",
        type: [
          "보라카이",
          "프랑스 파리",
          "싱가폴",
          "캐나다 나이아가라 폭포",
          "중국",
          "스위스",
        ],
      },
      {
        answer: "c. 다 필요없다. 모든건 사서쓰는게 최고다.",
        type: ["시드니", "이스탄불", "탄자니아 세렝게티", "북극"],
      },
    ],
  },
  {
    q: "5. 박물관에서 유명한 작품을 보고왔다. 지금 드는 생각은?",
    a: [
      {
        answer: "a. 작품이 무슨 의미를 갖고 있는지 궁금해진다",
        type: [
          "한국",
          "보라카이",
          "프랑스 파리",
          "미국 뉴욕",
          "캐나다 나이아가라 폭포",
        ],
      },
      {
        answer: "b. 이 작품의 시대와 등장인물의 삶이 궁금해진다",
        type: ["시드니", "이스탄불", "탄자니아 세렝게티", "중국"],
      },
      {
        answer: "c. 박물관에 관심이 없다",
        type: ["영국 런던", "북극", "싱가폴", "미국 캘리포니아"],
      },
    ],
  },

  {
    q: "6. 아름다운 노을을 바라보고 있다. 지금 드는 생각은?",
    a: [
      {
        answer: "a. 노을 진짜 예쁘다..",
        type: [
          "미국 뉴욕",
          "캐나다 나이아가라 폭포",
          "중국",
          "싱가폴",
          "프랑스 파리",
        ],
      },
      {
        answer: "b. 지나간 순간을 되돌아본다.",
        type: ["시드니", "이스탄불", "탄자니아 세렝게티", "스위스"],
      },
      {
        answer: "c. 아무생각이 안든다. 머엉..",
        type: ["한국", "보라카이", "영국 런던", "북극", "미국 캘리포니아"],
      },
    ],
  },
  {
    q: "7. 여행지에서 문제가 생겼다. 이때 나는?",
    a: [
      {
        answer: "a. 내가 뭘 해야하는지 생각이 많아진다",
        type: ["한국", "보라카이", "중국", "싱가폴", "프랑스 파리"],
      },
      {
        answer: "b. 당황스러운 상황에 순간적인 판단력이 흐려진다",
        type: ["영국 런던", "미국 뉴욕", "캐나다 나이아가라 폭포"],
      },
      {
        answer: "c. 주변에 도움을 요청할 수 있는지 확인해본다",
        type: [
          "시드니",
          "이스탄불",
          "탄자니아 세렝게티",
          "북극",
          "스위스",
          "미국 캘리포니아",
        ],
      },
    ],
  },
  {
    q: "8. 여행중 내가 가장 좋아하는 것은?",
    a: [
      {
        answer: "a. 한번사는 인생! 위험천만한 액티비티 활동",
        type: ["시드니", "미국 뉴욕", "캐나다 나이아가라 폭포"],
      },
      {
        answer: "b. 날 아무도 모르는 곳에서의 힐링 & 소소한 일탈",
        type: ["이스탄불", "영국 런던", "탄자니아 세렝게티", "북극", "싱가폴"],
      },
      {
        answer: "c. 친구들과의 고민 공유, 행복한 추억 쌓기 등의 우정",
        type: ["한국", "보라카이", "중국", "스위스", "미국 캘리포니아"],
      },
    ],
  },
  {
    q: "9. 나를 더 미치게 만드는 것은?",
    a: [
      {
        answer: "a. 엑셀로 꽉꽉 찬 일정표와 옆에서 닦달하는 친구",
        type: [
          "보라카이",
          "시드니",
          "북극",
          "캐나다 나이아가라 폭포",
          "프랑스 파리",
          "스위스",
        ],
      },
      {
        answer: "b. 함께 정해둔 일정을 모두 박살내는 친구",
        type: ["한국", "이스탄불", "탄자니아 세렝게티", "중국", "싱가폴"],
      },
      {
        answer: "c. 봤던 곳 또보고 또보는 비효율적인 동선",
        type: ["영국 런던", "스위스", "미국 뉴욕", "미국 캘리포니아"],
      },
    ],
  },
  {
    q: "10. 숙소로 돌아오는 길 친구와 나누는 이야기는?",
    a: [
      {
        answer:
          "a. 내일 방문하는 관광지의 기대되는 모습, 그안에서 놀고 있을 행복한 모습",
        type: ["미국 뉴욕", "캐나다 나이아가라 폭포", "중국"],
      },
      {
        answer: "b. 내일 날씨와 교통편 확인 등 남은 일정에 관한 계획",
        type: ["시드니", "영국 런던", "탄자니아 세렝게티", "북극"],
      },
      {
        answer:
          "c. 떠들 힘이 없다 얼른 숙소에 들어가서 좀 자고 에너지 충전을 해야겠다.",
        type: [
          "한국",
          "보라카이",
          "이스탄불",
          "프랑스 파리",
          "스위스",
          "미국 캘리포니아",
        ],
      },
    ],
  },
];

const infoList = [
  {
    data_idx: 0,
    data_type: "태국",
    name: "여행 거창할 거 있나요? 작은 동네에서 나만의 시간을 즐길 수 있는 <태국>",
    desc: "많은 것을 경험하기보다는 넓지 않은 반경에서 활동하는 것을 좋아하는 당신! 조용한 시골마을인 태국의 빠이마을을 추천드려요! 여유가 넘치고, 조용한 카페가 많은 빠이마을은 굉장히 작기 때문에 낮에는 자유롭게 걸어 볼 수 있고, 밤이되면 야시장으로 활기찬 동네를 구경할 수 있어요!",
  },
  {
    data_idx: 1,
    data_type: "영국 런던",
    name: "다양한 일정을 최대한 효율적으로! <영국 런던>",
    desc: "계획적이고 꼼꼼한 당신에게는 다채로운 여행을 즐길 수 있는 런던을 추천드려요! 버킹엄 궁전의 근위병 교대식, 시계탑 빅벤, 런던 브릿지까지 빼 놓을 수 없는 명소로 가득 차 있는 영국 런던! 유럽 특유의 감성까지 모두 즐길 수 있어요 또한 세미 패키지들도 다채롭게 구성되어 있어 알차게 시간을 보낼 수 있답니다",
  },
  {
    data_idx: 2,
    data_type: "미국 뉴욕",
    name: "인싸중 인싸의 도시 <미국 뉴욕>",
    desc: "사람들과 즐겁고 행복한 추억을 남기는걸 좋아하는 당신! 유명 관광지는 교통이 편하고 숙소가 잘 되어있어 친구들과 함께 방문하기 좋기 때문에 뉴욕을 추천드려요. 높고 화려한 건물이 많아서 인생샷은 기본이고, 전망대에서 일몰을 함께 구경한다면 그게 바로 Happiness-^^!",
  },
  {
    data_idx: 3,
    data_type: "캐나다 나이아가라 폭포",
    name: "도전정신 100000% 이상만 입장가능합니다 <캐나다 나이아가라 폭포>",
    desc: "모험을 좋아하고 활동적인 당신에게는 나이아가라 폭포를 한눈에 내려다 볼 수 있는 헬기 체험을 추천드려요! 하늘에서 내려다보는 나이아가라 폴스 시티와 폭포의 압도적인 뷰는 호기심 많은 당신을 놀라게 할 거예요. 하늘에서 풍경 감상도 하고, 하늘을 배경으로 인생샷을 남겨보세요:) ",
  },
  {
    data_idx: 4,
    data_type: "프랑스 파리",
    name: "몽글몽글한 감성의 나라 <프랑스 파리>",
    desc: "세심하면서 감수성이 풍부한 당신에게 가장 잘 어울리는 곳은 프랑스 파리입니다! 제 시간 안에 끝내야하는 포토 타임과 빼곡한 이동 일정은 벌써 당신을 지치게 만드는데요. 낭만의 도시 답게 예쁘고 아기자기한 카페도 많고, 잘 정돈된 잔디 위에서 여유로운 시간을 보낼 수도 있답니다 여유로움과 느긋함이 가득한 파리는 당신이 여행하기에 가장 좋은 곳 아닐까요?",
  },
  {
    data_idx: 5,
    data_type: "시드니",
    name: "대자연+노을 맛집 <호주 시드니>",
    desc: "감수성이 풍부하고 혼자만의 시간이 꼭 필요한 당신에게 가장 필요한 건 휴식과 힐링!  혼자서 바다를 감상하면서 나를 되돌아보는 시간을 갖는다면 어느새 스트레스가 사라져있을 거예요! 또한 주변에 대자연을 감상할 수 있는 곳들이 많아 낭만적인 노을과 여유로운 분위기를 오랫동안 즐길 수 있답니다:D",
  },
  {
    data_idx: 6,
    data_type: "이스탄불",
    name: "이동 시간까지 여행으로 계획 된 <이스탄불>",
    desc: "이스탄불의 구시가지는 면적에 비해 다양한 관광 자원들이 있어서 뚜벅이로도 여행하기 좋아요! 구시가지는 발 닿는 곳 마다 예쁜 골목과 상점들이 즐비해있고 걷다보면 아야소피아, 블루모스크등의 유명한 관광지도 걸어서 갈 수 있답니다! 이동시간을 최대한 줄이고 여행의 즐거움을 한껏 살리고 싶은 당신에게 이스탄불을 추천드려요!",
  },
  {
    data_idx: 7,
    data_type: "탄자니아 세렝게티",
    name: "100% 리얼리티 예측불가 <탄자니아 세렝게티>",
    desc: "즉흥적인 성향이 강하고, 모험을 좋아하는 당신은 반복되거나, 긴 활동을 별로 좋아하지않아요! 정해진 루트를 빙빙돌기만 하는 동물원 사파리 대신 직접 넓은 광야를 운전할 수 있는 세렝게티는 당신에게 잘 어울려요! 다양한 동물을 가까이서 볼 수 있고, 텐트까지 준비되어있어 세렝게티 한복판에서 잠도 잘 수 있답니다!",
  },
  {
    data_idx: 8,
    data_type: "북극",
    name: "계획을 짜는 것 부터 하나의 챌린지 <북극>",
    desc: "분단위 여행계획과 서브일정까지 준비해두는 당신은 프로 여행계획러군요. 그러다보니 뻔하고 진부한 일정보다는 철저한 사전조사가 필요한 여행이 더 뿌듯할거예요! 북극을 여행한다는 건 사실 바다위를 가는거라 북극권의 어느나라를 베이스 둘 것인지, 쇄빙선, 헬리콥터,  크루즈 등 여러 패키지중 어떤 여행을 즐길 것인지까지 정말 꼼꼼한 계획과 용기가 필요하답니다 용감하고 도전을 두려워하지 않는 당신은 북극의 오로라를 볼 자격이 충분하네요!",
  },
  {
    data_idx: 9,
    data_type: "보라카이",
    name: "휴식과 힐링의 아이콘 <보라카이>",
    desc: "조용히 사색하고 나만의 시간을 가지며 힐링하는 것을 좋아하는 당신에게 가장 잘 어울리는 장소는 보라카이입니다! 보라카이는 유명한 관광지라 사람이 많기도하지만, 화이트 비치에서 멀어지면 조용한 마을과 바다를 감상할 수 있답니다. 작은 마을에서는 한적하게 지내는 현지인들을 만날 수 있으니 호기심이 많은 당신에게 잘 어울리는 장소네요!",
  },
  {
    data_idx: 10,
    data_type: "중국",
    name: "신나고 에너지 넘치는 <중국>",
    desc: "넘치는 텐션을 가진 당신은 새로운 것이 가득한 중국이 어울려요! 중국의 수도권 도시는 정말 화려하고 반짝반짝해서 당신의 이목을 잡기 충분하거든요 또한 물가가 저렴하기 때문에 여러가지 체험을 해볼 수 있고, 맛있는 음식들까지 맛 볼 수 있기 때문에 이동시간이 짧고 다양한 체험을 즐길 수 있는 중국이 잘 어울리네요!!",
  },
  {
    data_idx: 11,
    data_type: "싱가폴",
    name: "따뜻한 기후와 다양한 먹거리가 많은 <싱가폴>",
    desc: "온화하고 주변사람들과의 평화로운 관계를 좋아하는 당신! 평소엔 집순이 집돌이지만, 마음먹고 떠나면 해외에서는 대담해지는군요 평소에는 곧잘 하지않던 것도 관심을 갖기 때문에 싱가폴을 추천드려요! 싱가폴에서는 다양한 해양 액티비티를 즐길 수 있고, 그리고 한국에선 맛 볼 수 없던 씨푸드를 만나 볼 수 있답니다! 그리고 아름다운 바다 경치까지 구경할 수 있으니 감성을 좋아하는 당신에게 잘 어울리네요",
  },
  {
    data_idx: 12,
    data_type: "이집트 사막",
    name: "숨은 보석이 가득한 <이집트 사막>",
    desc: "여행지에 볼거리, 생각할 거리가 많으면 많을수록 좋아하는 당신에겐 넓은 사막여행이 잘어울려요! 사막은 굉장히 넓기때문에 이동 루트에 대한 꼼꼼한 계획과, 주의사항에 대한 사전조사가 필요하기 때문이죠. 단순히 힐링만하는 정적인 여행보다는 숨어있는 동굴과 독특한모양의 바위를 만나볼  수 있는 이집트 사막은 당신의 지적 호기심을 충족시켜줄 수 있어요!",
  },
  {
    data_idx: 13,
    data_type: "미국 캘리포니아",
    name: "펌킨 패치를 즐길 수 있는 한적한 농장 <미국 캘리포니아>",
    desc: "따뜻한 감성을 가진 당신에게는 조그만 농장에서 즐길 수 있는 소소한 여행을 추천하고 싶어요! 미국에서는 가을이오면 펌킨패치를 하는데 ‘아빌라 밸리 반’ 이라는 농장에서 자유롭게 뛰어노는 아이들도 볼 수 있고, 한적한 농장 뷰를 보며 평화로운 점심식사도 할 수 있어요. 조용한 곳에서 힐링하는 것을 좋아하는 당신에게 잘 어울리는 여행지네요!",
  },
  {
    data_idx: 14,
    data_type: "스위스",
    name: "소중한 사람들과 떠나는 기차여행 <스위스>",
    desc: "처음 보는 사람들과도 금방 친해지고, 낯가림이 심하지않은 당신! 스위스를 추천드려요 스위스에서는 전통샬레에서 묵으며 주인장과 함께 치즈만들기 체험도 해볼 수 있고, 스위스의 랜드마크인 빨간 기차를 탈 수 있거든요. 주변 사람들과 함께하는 추억을 소중히 여기는 당신은 친구들과 이색적인 체험을 함께 할 수 있는 스위스가 잘 어울려요!",
  },
];

let pointArr = [
  { name: "태국", value: 0, key: 0 },
  { name: "영국 런던", value: 0, key: 1 },
  { name: "미국 뉴욕", value: 0, key: 2 },
  { name: "캐나다 나이아가라 폭포", value: 0, key: 3 },
  { name: "프랑스 파리", value: 0, key: 4 },
  { name: "시드니", value: 0, key: 5 },
  { name: "이스탄불", value: 0, key: 6 },
  { name: "탄자니아 세렝게티", value: 0, key: 7 },
  { name: "북극", value: 0, key: 8 },
  { name: "보라카이", value: 0, key: 9 },
  { name: "중국", value: 0, key: 10 },
  { name: "싱가폴", value: 0, key: 11 },
  { name: "이집트 사막", value: 0, key: 12 },
  { name: "미국 캘리포니아", value: 0, key: 13 },
  { name: "스위스", value: 0, key: 14 },
];

export { qnaList, infoList, pointArr };