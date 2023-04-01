export const shareKakao = (infoList, answerSheet) => {
  let resultImg = document.querySelector(".resultImg");
  let resultAlt = resultImg.alt;
  const shareTitle = "<찰떡 여행 MBTI> 나에게 꼭 맞는 여행지를 찾아보세요!";
  const shareDes = infoList[resultAlt].name;
  const pageUrl = "https://exquisite-jelly-0e58c1.netlify.app/";
  const shareImg = pageUrl + `asset/travelImg/travel(${resultAlt}).png`;
  const shareUrl = pageUrl + "crud/select/" + answerSheet;

  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      //kakao.init(`${process.env.REACT_APP_KAKAO_APP_KEY}`);
      kakao.init("586319c3b15435c5ee53d0f823bf910d");
    }

    kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImg,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
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
