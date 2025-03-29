const input = document.querySelector("#title");
const output = document.querySelector("#output");

const re = /([A-Z,a-z, ,-]){7}\w+/g;

function testInfo(title) {
  const ok = re.exec(title.value);

  output.textContent = ok
    ? ''
    : `Title only accepts alpha characters, hyphens, and spaces with a minimum of 7 characters `;
}

input.addEventListener("change", (event) => {
  event.preventDefault();
  testInfo(input);
});    