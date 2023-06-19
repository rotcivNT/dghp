const ulElements = document.querySelectorAll('ul.group-cautraloi');


ulElements.forEach(function(ulElement) {
  // Lấy tất cả các thẻ li con của ul hiện tại
  const liElements = ulElement.querySelectorAll('li');

  // Đánh dấu cho ô input của thẻ li cuối cùng
  const lastLiElement = liElements[liElements.length - 1];
  const inputElement = lastLiElement.querySelector('input');
  inputElement.checked = true;
});
