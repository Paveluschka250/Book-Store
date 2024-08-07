let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

let currentUser = "Anonymous"; // The name of the current user

function render() {
  let mainref = document.getElementById("content");
  mainref.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let initialLikes = book.liked ? book.likes + 1 : book.likes;
    let likeStatus = book.liked ? "like-true.svg" : "like-false.svg";

    mainref.innerHTML += /*html*/ `
      <h1>Title: ${book.name}</h1>
      <h2>Author: ${book.author}</h2>
      <h3 id="likes-${i}">Likes: ${initialLikes}</h3>
      <img src="img/icons/${likeStatus}" id="like-img-${i}" onclick="toggleLike(${i})">
      <h3> Price: ${book.price} $</h3>
      <h3> Published year: ${book.publishedYear}</h3>
      <h3> Genre: ${book.genre}</h3>
    `;     

    if (book.comments.length > 0) {
      mainref.innerHTML += `<h3>Kommentare</h3>`;
      for (let j = 0; j < book.comments.length; j++) {
        let comment = book.comments[j];
        mainref.innerHTML += `<p><b>${comment.name}</b>: ${comment.comment}`;
        if (comment.name === currentUser) {
          mainref.innerHTML += ` <button onclick="deleteComment(${i}, ${j})">Löschen</button>`;
        }
        mainref.innerHTML += `</p>`;
      }
    } else {
      mainref.innerHTML += `<h3>No comments yet</h3>`;
    }

    mainref.innerHTML += /*html*/`
      <input type="text" id="comment-input-${i}" placeholder="Kommentieren..."> 
      <button onclick="postComment(${i})">Posten</button>
    `;
  }
}

function toggleLike(index) {
  let book = books[index];
  let likeImg = document.getElementById(`like-img-${index}`);
  let likesText = document.getElementById(`likes-${index}`);

  book.liked = !book.liked;
  if (book.liked) {
    likeImg.src = "img/icons/like-true.svg";
    likesText.innerText = `Likes: ${book.likes + 1}`;
  } else {
    likeImg.src = "img/icons/like-false.svg";
    likesText.innerText = `Likes: ${book.likes}`;
  }
}

function postComment(index) {
  let commentInput = document.getElementById(`comment-input-${index}`);
  let commentText = commentInput.value;

  if (commentText) {
    books[index].comments.push({ name: currentUser, comment: commentText });
    render(); // 
  }
}

function deleteComment(bookIndex, commentIndex) {
  if (books[bookIndex].comments[commentIndex].name === currentUser) {
    books[bookIndex].comments.splice(commentIndex, 1);
    render(); 
  }
}
