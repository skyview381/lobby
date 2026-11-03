// 스카이뷰 설정 파일 - 이 파일을 HTML, 영상 파일과 같은 폴더에 두세요.
// 영상 파일명은 실제 파일명과 정확히 같아야 합니다(대소문자 구분). MP4(H.264) 권장.
window.SKYVIEW_CONFIG = {
  updated: "2026-11-03-4",   // 설정을 바꿀 때마다 이 값도 바꾸면 TV에 자동 반영됩니다
  videos: ["video1.mp4", "video2.mp4", "video3.mp4"],
  notices: [
    "오늘도 입주자 여러분께 좋은 일이 가득하기를 바랍니다.",
    "불편사항이나 변경사항은 관리사무소로 연락 부탁드립니다.",
    "공용 공간 및 엘리베이터 이용 에티켓을 준수해 주세요."
  ],
  youtube: ["https://www.youtube.com/live/_gufPt29wps"],   // 동영상 실패 시 대체 재생 (퍼가기 허용 영상만)
  ytWrapper: "https://skyview381.github.io/lobby/yt.html",
  ytMinutes: 10,   // 유튜브 목록이 2개 이상일 때 순환 간격(분)   // file:// 로 열 때 필수: https://아이디.github.io/저장소/yt.html
  speed: 90,
  cities: ["seoul", "incheon", "daejeon", "gwangju", "daegu", "busan", "jeju"],
  manualNews: ""
};
