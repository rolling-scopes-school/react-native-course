const cards = [
  {
    id: 0,
    image: {
      src: "./assets/images/cards/card1.png",
      alt: "card_1",
    },
    title: "Christmas tree",
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    author: "Iste natus",
  },
  {
    id: 1,
    image: {
      src: "./assets/images/cards/card2.jpg",
      alt: "card_2",
    },
    title: "Gloves",
    text: `Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
    author: "Vel illum",
  },
  {
    id: 2,
    image: {
      src: "./assets/images/cards/card3.jpg",
      alt: "card_3",
    },
    title: "Way home",
    text: `Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.`,
    author: "Placeat facere",
  },
  {
    id: 3,
    image: {
      src: "./assets/images/cards/card4.jpg",
      alt: "card_4",
    },
    title: "Cats",
    text: `Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.`,
    author: "Por scientie",
  },
  {
    id: 4,
    image: {
      src: "./assets/images/cards/card5.jpg",
      alt: "card_5",
    },
    title: "Snow gang",
    text: `Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.`,
    author: "Europan lingues",
  },
  {
    id: 5,
    image: {
      src: "./assets/images/cards/card6.jpg",
      alt: "card_6",
    },
    title: "Balloons",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    laoreet iaculis fringilla. Quisque et vulputate magna, id
    tristique orci. Integer gravida, risus sed ornare lobortis, lectus
    ipsum aliquam justo, ullamcorper feugiat magna nisi et nunc.`,
    author: "Nunc finibus",
  },
  {
    id: 6,
    image: {
      src: "./assets/images/cards/card7.jpg",
      alt: "card_7",
    },
    title: "Christmas mood",
    text: `At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.`,
    author: "Necessi far",
  },
  {
    id: 7,
    image: {
      src: "./assets/images/cards/card8.jpg",
      alt: "card_8",
    },
    title: "Tea aroma",
    text: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.`,
    author: "DJs flock",
  },
  {
    id: 8,
    image: {
      src: "./assets/images/cards/card9.jpg",
      alt: "card_9",
    },
    title: "Orange mood",
    text: `Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game.`,
    author: "Alex Trebek's",
  },
  {
    id: 9,
    image: {
      src: "./assets/images/cards/card10.jpg",
      alt: "card_10",
    },
    title: "Garland",
    text: `Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
    author: "Leo eget",
  },
];

function addCard(card) {
  const cardsEl = document.getElementById("cards");
  cardsEl.innerHTML =
    cardsEl.innerHTML +
    `<div class="card" id="card_${card.id}" onclick="handleOpenDetails(${card.id})">
      <img
        class="card-image"
        src="${card.image.src}"
        alt="${card.image.alt}"
      />
      <article>
        <h1>${card.title}</h1>
        <p>
          ${card.text}
        </p>
        <span>${card.author}</span>
      </article>
    </div>`;
}

function loadCards() {
  for (let card of cards) {
    addCard(card);
  }
}

function handleAdd() {
  const titleEl = document.getElementById("form-title");
  const authorEl = document.getElementById("form-author");
  const textEl = document.getElementById("form-text");
  const cardEls = document.getElementsByClassName("card");
  const addModalEl = document.getElementById("addModal");

  addCard({
    id: cardEls.length,
    image: {
      src: "./assets/images/cards/white.png",
      alt: `card_${cardEls.length}`,
    },
    title: titleEl.value,
    text: textEl.value,
    author: authorEl.value,
  });

  titleEl.value = "";
  authorEl.value = "";
  textEl.value = "";
  addModalEl.style.display = "none";
}

function filter() {
  const inputEl = document.getElementById("filter-bar-input");
  const value = inputEl.value;

  for (let card of cards) {
    const isTitleMatched = card.title
      .toLowerCase()
      .includes(value.toLowerCase());
    const isTextMatched = card.text.toLowerCase().includes(value.toLowerCase());
    const isAuthorMatched = card.author
      .toLowerCase()
      .includes(value.toLowerCase());
    const shouldBeDisplayed =
      isTitleMatched || isTextMatched || isAuthorMatched || value === "";

    const cardEl = document.getElementById(`card_${card.id}`);
    cardEl.style.display = shouldBeDisplayed ? "block" : "none";
  }
}

function handleAddButton() {
  const addModalEl = document.getElementById("addModal");
  addModalEl.style.display = "block";
}

function handleCloseModal() {
  const addModalEl = document.getElementById("addModal");
  const detailsModalEl = document.getElementById("detailsModal");
  addModalEl.style.display = "none";
  detailsModalEl.style.display = "none";
}

function handleOpenDetails(id) {
  const cardEl = document.getElementById(`card_${id}`);
  const modalImageEl = document.getElementById("modal-image");
  modalImageEl.src = cardEl.firstElementChild.src;
  const detailsModalEl = document.getElementById("detailsModal");
  detailsModalEl.style.display = "block";
}
