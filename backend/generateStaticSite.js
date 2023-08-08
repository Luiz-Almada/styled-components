import axios from "axios";
import fs from "fs";

const FILEPATH = "./ssg.html";

const generateHtml = (data) => {
  const dataString = `
    <ul>
      ${data.map((item) => `<li>${item.id}</li>`).join("\n")}
    </ul>`;

  const error = "<div>Error</div>";

  return `
      <html>
        <body>
          ${dataString ? dataString : error}
        </body>
      </html>
    `;
};

let html;

axios
.get(
  // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&$page=1&sparkline-false"
)
.then((axiosRes) => {
  html = generateHtml(axiosRes.data);
})
.catch((e) => {
  html = generateHtml(null);
})
.finally(() => {
  fs.writeFile(FILEPATH, html, (error) => {
    if (error) {
      console.error("Error while generation file");
    } else {
      console.log("File Generated");
    }
  });
});