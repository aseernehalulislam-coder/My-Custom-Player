const btn = document.getElementById("statsBtn");
const sheet = document.getElementById("statsSheet");

btn.onclick = () => sheet.classList.add("open");

function closeSheet() {
  sheet.classList.remove("open");
}
