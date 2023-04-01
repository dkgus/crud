export const shareKakao = () => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    // if (!kakao.isInitialized()) {
    //   kakao.init("586319c3b15435c5ee53d0f823bf910d"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    // }

    kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: "찰떡 MBTI",
        description: "나에게 가장 잘 맞는 여행지를 찾아보세요!",
        imageUrl:
          "https://github.com/dkgus/crud/blob/master/public/asset/travelImg/Coffe%20call.png??raw=true",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  }
};
