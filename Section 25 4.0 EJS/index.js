import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  //--//
  let type = "week day";
  let adv = "It's time to work hard";
  let tday = day;
  //--//
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  //   switch (tday) {
  //     case 0:
  //       tday = `${tday}th`;
  //       break;
  //     case 1:
  //       tday = `${tday}st`;
  //       break;
  //     case 2:
  //       tday = `${tday}nd`;
  //       break;
  //     case 3:
  //       tday = `${tday}rd`;
  //   }

  if (tday === 1) {
    tday = `${tday}st`;
  } else if (tday === 2) {
    tday = `${tday}nd`;
  } else if (tday === 3) {
    tday = `${tday}rd`;
  }

  res.render(
    "index.ejs",
    {
      dayType: type,
      advice: adv,
      tday: tday,
    },
    console.log(today),
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
