export type GameOption = {
  id: string;
  value: string;
  icon: string;
  label: string;
  screen: string;
};

export const GAME_OPTIONS: GameOption[] = [
  {
    id: 'readbtn',
    value: 'read',
    icon: 'fas fa-book-open fa-2x',
    label: 'Read',
    screen: '/images/read_game_screen.png',
  },
  {
    id: 'typebtn',
    value: 'type',
    icon: 'fas fa-fingerprint fa-2x',
    label: 'Type',
    screen: '/images/type_game_screen.png',
  },
  {
    id: 'blankbtn',
    value: 'blank',
    icon: 'fas fa-bars fa-2x',
    label: 'Blank',
    screen: '/images/blank_game_screen.png',
  },
  {
    id: 'speakBtn',
    value: 'speak',
    icon: 'fas fa-microphone fa-2x',
    label: 'Speak',
    screen: '/images/speak_game_screen.png',
  },
  {
    id: 'listenBtn',
    value: 'listen',
    icon: 'fas fa-headphones fa-2x',
    label: 'Listen',
    screen: '/images/listen_game_screen.png',
  },
  {
    id: 'flashBtn',
    value: 'flash',
    icon: 'fas fa-bolt fa-2x',
    label: 'Flash',
    screen: '/images/flash_screen.png',
  },
];

export type Review = {
  header: string;
  body: string;
};

export const REVIEWS: Review[] = [
  {
    header: '"Fantastic"',
    body: 'It is not often that a small dev makes something so polished and well rounded. This app feels clean and well made. Overall a great experience.',
  },
  {
    header: '"Memorizing verses is no longer a chore!"',
    body: 'I have a hard time memorizing Bible verses because it is such a daunting task. Versify has motivated me to memorize more verses and makes it manageable and fun!',
  },
  {
    header: '"Great tool!"',
    body: 'Looking forward to being more intentional in scripture memory and excited for this helpful app! Excellent format!',
  },
  {
    header: '"Best Memorization App"',
    body: 'I have a difficult time memorizing verses and I have been on the search for an app to help me out. This app is so easy to use and understand. Additionally, this app makes it fun to memorize verses.',
  },
];
