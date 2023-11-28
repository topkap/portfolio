window.onload = function () {
  // URL의 앵커를 가져옵니다.
  var hash = window.location.hash;
  // 앵커가 존재하는 경우 해당 앵커로 자동으로 이동합니다.
  if (hash) {
    var element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // 스크롤 부드럽게 이동
    }
  }
};