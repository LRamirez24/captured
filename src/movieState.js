//Import Images


import party from "./img/party.jpg";
import champ from "./img/champ.jpg";
import dirt from "./img/dirt.jpg";
import boxing2 from "./img/boxing2.jpg";
import fight from "./img/fight.jpg";
import lady from "./img/lady.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: boxing2,
      secondaryImg: fight,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“When love and skill work together, expect a masterpiece.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Rhythm Is Everything in Boxing...”",
        },
        {
          title: "It’s okay to lose.",
          description:
            "“The first step towards true enlightenment is to lighten up on yourself.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: party,
      url: "/work/good-times",
      secondaryImg: lady,
      awards: [
        {
          title: "Capture the moment",
          description:
            "You only live once, but if you do it right, once is enough.”",
        },
        {
          title: "New Experiences",
          description:
            "“‎The day you become old is the day you're not looking for new experiences anymore.”",
        },
        {
          title: "It time to feel free",
          description:
            "“Freedom is the oxygen of the soul.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: champ,
      url: "/work/the-racer",
      secondaryImg: dirt,
      awards: [
        {
          title: "Racing Like Never Before",
          description:
            "“Once you’ve raced, you never forget it…and you never get over it.”",
        },
        {
          title: "Fresh look at Motorsports.",
          description:
            "“Auto racing, bull fighting, and mountain climbing are the only real sports… all the others are games.”",
        },
        {
          title: "Speed in Motion",
          description:
            "“If you’re in control, you’re not going fast enough.”",
        },
      ],
    },
  ];
};