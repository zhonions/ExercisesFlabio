const icons = [
  "fa-apple",
  "fa-twitter",
  "fa-android",
  "fa-windows",
  "fa-facebook",
  "fa-youtube",
  "fa-html5",
  "fa-pinterest",
  "fa-slack"
];

const iconPairs = icons.concat(icons);

for (let i = iconPairs.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [iconPairs[i], iconPairs[j]] = [iconPairs[j], iconPairs[i]];
}

const grid = document.querySelector('.grid');
const flippedCards = [];

iconPairs.forEach((icon, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;
  card.innerHTML = `
    <div class="face front"><i class="fa ${icon}"></i></div>
    <div class="face back"></div>
  `;
  
  card.addEventListener('click', function() {
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
      flipCard(card);
    }
  });

  grid.appendChild(card);
});

function flipCard(card) {
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 200);
  }
}

const modal = document.getElementById("winModal");

const closeBtn = modal.querySelector(".close");

function openWinModal() {
  modal.style.display = "block";
}


function closeWinModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeWinModal);

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeWinModal();
  }
});



function checkMatch() {
  const [card1, card2] = flippedCards;
  const iconClass1 = card1.querySelector(".fa").classList[1];
  const iconClass2 = card2.querySelector(".fa").classList[1];

  if (!iconClass1 || !iconClass2) {
    return;
  }

  if (iconClass1 === iconClass2) {
    
    if (document.querySelectorAll('.flipped').length === iconPairs.length) {
      openWinModal();
    }
  } else {
    
    console.log("Não correspondência. Virando as cartas de volta...");
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }, 500);
  }

  flippedCards.length = 0;
}
document.addEventListener('DOMContentLoaded', function() {
  const reloadButton = document.getElementById('reloadButton');
  reloadButton.addEventListener('click', function() {
    location.reload();
  });
});

