export default class Main {
  constructor(){
    this._logoMain = "../img/compressed/LogoMain.webp";
    this._logoTop = "../img/compressed/logoTop.webp";
    this._boxImg = "../img/compressed/Box.webp";
    this._logoMainHosted = "https://smija.github.io/magicEightBall/img/compressed/LogoMain.webp";
    this._logoTopHosted = "https://smija.github.io/magicEightBall/img/compressed/logoTop.webp";
    this._boxImgHosted = "https://smija.github.io/magicEightBall/img/compressed/Box.webp"    
  }

  get logoMain() {
    return this._logoMain;
  }

  get logoTop() {
    return this._logoTop;
  }

  randNum(num) {
    let selection = Math.floor(Math.random() * num);
    return selection;
  }

  buildGame() {
    // Page body
    // Main Wrapper for page
    const mainWrap = document.createElement('div');
    mainWrap.id = 'main-wrap';
    document.body.appendChild(mainWrap);

    // Header for the page. Contains the logos.
    const pageHeader = document.createElement('header');
    const topLogo = document.createElement('div');
    const topLogoImg = document.createElement('img');
    const mainLogo = document.createElement('div');
    const mainLogoImg = document.createElement('img');

    pageHeader.id = 'page-header';

    topLogo.id = 'top-logo';
    topLogoImg.src = this._logoTopHosted;
    topLogo.appendChild(topLogoImg);

    mainLogo.id = 'main-logo';
    mainLogoImg.src = this._logoMainHosted;
    mainLogo.appendChild(mainLogoImg);

    pageHeader.appendChild(topLogo);
    pageHeader.appendChild(mainLogo);

    // Box row. Contains the magic box.
    const boxRow = document.createElement('div');
    boxRow.id = "box-row";

    const boxWrap = document.createElement('div');
    boxWrap.id = 'box-wrap';

    const boxImg = document.createElement('img');
    boxImg.src = this._boxImgHosted;

    const answerBox = document.createElement('div');
    answerBox.id = "answer-box";

    const answerText = document.createElement('p');
    answerText.id = 'answer';

    const filler = document.createElement('span');
    filler.classList.add = 'filler';
    filler.innerText = '?';

    boxRow.appendChild(boxWrap);
    boxWrap.appendChild(boxImg);
    boxWrap.appendChild(answerBox);
    answerBox.appendChild(answerText);
    answerText.appendChild(filler);

    

    // Form section.
    const form = document.createElement('div');
    const questionWrap = document.createElement('div');
    const questionText = document.createElement('input');
    const btnWrap = document.createElement('div');
    const btn = document.createElement('button');

    // Add the sections to the Main Wrap.
    mainWrap.appendChild(pageHeader);
    mainWrap.appendChild(boxRow);
    mainWrap.appendChild(form);
  }
}

export class Arrs extends Main {
  constructor() {
    this._affirmative = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.'
    ];
    this._nonCommittal = [
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now',
      'Cannot predict now.',
      'Concentrate and ask again.'
    ];
    this._negative = [
      "Don't count on it.",
      'My replay is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
    ];
    this._types = [
      affirmative,
      nonCommittal,
      negative
    ]
  }
}