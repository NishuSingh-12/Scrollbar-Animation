const scrollbar = document.querySelector("#scrollbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const maxScroll = Math.max(scrollHeight - clientHeight, 1);
  const percentage = scrollTop / maxScroll;
  scrollbar.style.width = percentage * 100 + "%";
});
