$('.button').bind('click', function() {
	$('.main').addClass('hide');
});
const btn = document.getElementById("btn");

btn.addEventListener("hide", () => {
  btn.classList.add("animate");
  setTimeout(() => {
    btn.classList.remove("animate");
  }, 400);
});