export const shareKakao = (infoList, countryNum) => {
  let resultImg = document.querySelector(".resultImg");
  let resultAlt = resultImg.alt;
  const shareTitle = "<찰떡 여행 MBTI> 나에게 꼭 맞는 여행지를 찾아보세요!";
  const shareDes = infoList[resultAlt].name;
  const pageUrl = "https://exquisite-jelly-0e58c1.netlify.app/";
  const shareImg = pageUrl + `asset/travelImg/travel(${resultAlt}).png`;
  const shareUrl = pageUrl + "crud/select/" + countryNum;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }

    kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImg,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "결과확인하기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  }
};
