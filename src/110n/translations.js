const translations = {
  en: {
    HomePage: {
      greeting: 'HELLO',
      home: 'Home',
      about: 'About us',
      dictionary: 'Dictionary',
      promo: 'Promo',
      statistics: 'Statistics',
      settings: 'Settings',
      logout: 'Log Out',
      start: "Let's play!",
      wordsAmount: 'Total words',
    },
    StartPage: {
      game: 'GAME',
    },
    Settings: {
      appSettings: 'Application settings',
      checkboxMessage: 'You must select at least one hint',
      userName: 'User name',
      wordsPerPage: 'Words per page',
      wordsPerDay: 'New words per day',
      cardsPerDay: 'Cards per day',
      infoInCards: 'Info in cards',
      settingsSave: 'Settings saved successfully',
      language: 'Language',
      deleteButton: 'Show "delete word" button',
      difficultButton: 'Show "add difficult words" button',
      howToLearn: 'How to learn words',
      onlyNew: 'Only new words',
      repeat: 'Repeat words',
      allWords: 'Learn all words',
      isTranslate: 'Translate',
      isTextMeaning: 'Text meaning',
      isTextExample: 'Text example',
      isTranscription: 'Transcription',
      isImageAssociation: 'Image association',
      audio: 'Audio settings',
      isAudioTranslate: 'Play translate audio',
      isAudioTextMeaning: 'Play text meaning audio',
      isAudioTextExample: 'Play text example audio',
      saveSettings: 'settings have been saved',
      isAutoSpeech: 'Auto speech',
      isTranslation: 'Translate',
      isBackground: 'Background',
      timeForWord: 'Time for a word',
      errorCounter: 'Maximum number of errors',
      cardsPerDayRepeat: 'Сards per day interval repetition',
    },
    Auth: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      smallTitle: 'Start your study today!',
      bigTitle: 'learning languages ​​is easy!',
    },
    Games: {
      puzzle: 'Puzzle',
      audioCall: 'Audioсall',
      savannah: 'Savannah',
      speakIT: 'SpeakIT',
      sprint: 'Sprint',
      makeSentence: 'Make sentence',
      puzzleDescription: 'Make sentences from English words placed in random order.',
      audioCallDescription: 'AudioCall helps to improve the undestanding of English speech.',
      savannahDescription:
        'The game improves the understanding of English words, helps not to forget words that have already been learned.',
      speakITDescription:
        'Check the correctness of your pronunciation of English words in the exciting game!',
      sprintDescription:
        'This game will help you to translate English words into your native language.',
      makeSentenceDescription:
        'This game will help you enjoy reading, writing, speaking English with pleasure.',
    },
    Promo: {
      text: `Bored with textbook exercises? Not sure how to start and what with? We have a solution - the RSLang application 
      from our development team! This is a great opportunity to get a language practice that you are not likely to meet 
      at school lesson. Our app will help you:
      To get acquainted with various accents of English, including accents of those for whom English is also a second language;
      to learn slang and spoken English;
      to get used to perceiving slow and fast speech.
      Our program consist of 6 exciting and entertaining mini-games, such as: “Savannah”,
      "SpeakIT", "Puzzle", "Audiocall", "Sprint", "Make Sentence". You will not only have a good time while playing them,
      but also expand the vocabulary, revise grammar, improve your pronunciation. 
      The main feature of our project is the use of interval repetition system, that can adapt to your current level of English. 
      Repetition includes 5 difficulty levels. When choosing the maximum difficulty level, 
      the repetition will last 10 minutes, 
      the duration of the second step is four times the duration of the first level. Each next step is calculated as the sum 
      of the previous step + 50% of the total repeat time. If in the game you meet a card with a certain word 
      and make a mistake, then it will be displayed the next time the words are repeated. 
      Have fun practicing English. No matter what you are interested in and how you spend time, 
      among our mini-games you will definitely find something that suits you. Play, enjoy and never give up!
      `
    },
    Buttons: {
      save: 'Save',
      delete: 'Delete',
      start: 'Start',
      dontKnow: "I don't know",
      next: 'Next',
      true: 'true',
      false: 'false',
      restart: 'Restart',
      speak: 'Speak please',
      finish: 'Finish',
      newGame: 'New Game',
      statistic: 'Statistic',
      register: 'Register',
      choose: 'Choose',
      OK: 'OK',
      back: 'Back',
      login: 'Log In',
      hard: 'Hard',
      train: 'Train',
      play: 'Play',
    },
    Languages: {
      en: 'English',
      ru: 'Russian',
    },
    ModalWindows: {
      didNotStartGame: 'you did not start the game',
      know: 'I know',
      doNotKnow: "I don't know",
    },
    Validators: {
      password:
        'Password must contain numbers, uppercase and lowercase letter, one of the following characters +-_@$!%*?&#.,;:[]{}',
      email: 'Invalid email address',
    },
    GameStatus: {
      page: 'Page',
      level: 'Level',
    },
    GamesStatistics: {
      header: 'Game statistic',
      level: 'Level:',
      page: 'Page:',
      correct: 'Correct answers:',
      count: 'Total words:',
    },

    TeamMembers: {
      valera: 'Valera',
      nelly: 'Nelly',
      kostya: 'Kostya',
      taras: 'Taras',
      marta: 'Marta',
      artsemi: 'Artsemi',
      valeraDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      nellyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      kostyaDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      tarasDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      martaDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      artsemiDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
    },
    Errors: {
      empty: 'Fields cannot be empty',
      number: 'Must be a number',
      least: 'Must be at least ',
      more: 'Must be no more ',
    },
    LearnWords: {
      newWords: 'New words',
      cardsShowed: 'Cards showed',
      correctWords: 'Correct words',
      completed: 'Series completed',
      theLongestSeries: 'The longest series of correct answers',
      noWords: 'No more words for today',
      progress: 'Progress',
    },
    Dictionary: {
      repeats: 'Repeats',
      prevRepeat: 'Previous repeat',
      nextRepeat: 'Next repeat',
      emptyList: "There aren't words in this dictionary",
      learningWords: 'Learning words',
      difficultWords: 'Difficult words',
      deletedWords: 'Deleted words',
    },
    Chart: {
      learned: 'Learned words: %{count}',
      learnedAll: 'Total words learned: %{count}',
      date: 'Date: ',
      learnedBefore: 'Previously learned words',
    },
  },
  ru: {
    HomePage: {
      greeting: 'ПРИВЕТ',
      home: 'Главная',
      about: 'О нас',
      dictionary: 'Словарь',
      promo: 'Промо',
      statistics: 'Статистика',
      settings: 'Настройки',
      logout: 'Выход',
      start: 'Начни играть!',
      wordsAmount: 'Всего слов',
    },
    StartPage: {
      game: 'ИГРА',
    },
    Settings: {
      appSettings: 'Настройки приложения',
      checkboxMessage: 'Вы должны выбрать как минимум одну подсказку',
      userName: 'Имя пользователя',
      wordsPerPage: 'Слов на странице',
      wordsPerDay: 'Новых слов в день',
      cardsPerDay: 'Карточек в день',
      infoInCards: 'Информация на карточках',
      settingsSave: 'Настройки успешно сохранены',
      language: 'Язык',
      deleteButton: 'Показать кнопку "удалить слово"',
      difficultButton: 'Показать кнопку "добавить в сложные слова"',
      howToLearn: 'Как изучать слова',
      onlyNew: 'Только новые слова',
      repeat: 'Повторение слов',
      allWords: 'Учить все слова',
      isTranslate: 'Перевод',
      isTextMeaning: 'Значение слова',
      isTextExample: 'Пример употребления',
      isTranscription: 'Транскрицпия',
      isImageAssociation: 'Картинка ассоциация',
      audio: 'Настройки воспроизведения аудио',
      isAudioTranslate: 'Воспроизведение аудио первода',
      isAudioTextMeaning: 'Воспроизведение аудио значение слова',
      isAudioTextExample: 'Воспроизведение аудио пример употребления слова',
      saveSettings: 'настройки сохранены',
      isAutoSpeech: 'Автовоспроизведение',
      isTranslation: 'Перевод',
      isBackground: 'Фоновая картинка',
      timeForWord: 'Времени на слово',
      errorCounter: 'Максимальное число ошибок',
      cardsPerDayRepeat: 'Карточек на день интервальное повторение',
    },
    Auth: {
      signIn: 'Войти',
      signUp: 'Cоздать аккаунт',
      smallTitle: 'Начни учиться сейчас!',
      bigTitle: 'учить языки это просто!',
    },
    Games: {
      puzzle: 'Пазл',
      audioCall: 'Аудиовызов',
      savannah: 'Саванна',
      speakIT: 'Произнеси слово',
      sprint: 'Спринт',
      makeSentence: 'Собери предложение',
      puzzleDescription:
        'Собери предложение из английских слов, расположенных в случайном порядке.',
      audioCallDescription:
        'Игра `АудиоВызов` помогает улучшить восприятие английской речи на слух.',
      savannahDescription:
        'Данная игра улучшает навык понимания английских слов, помогает не забыть выученные слова.',
      speakITDescription:
        'Проверьте правильность вашего произношения английских слов в увлекательной игре!',
      sprintDescription:
        'С помощью данной игры вы научитесь быстро переводить слова на ваш родной язык.',
      makeSentenceDescription:
        'Данная игра позволит вам научиться читать, писать, говорить легко и непринужденно.',
    },
    Promo: {
      text: `Устали от скучных упражнений из учебника? Не знаете, как и с чего начать?
      У нас есть решение - приложение RSLang от нашей команды разработчиков! Это отличная возможность
      получить такую языковую практику, которую вы не встретите в школе на уроке, например:
      Вы познакомитесь с  различными акцентами английского, в том числе акцентами тех, для кого английский тоже
      является вторым языком. 
      Изучите сленг и разговорный английский.
      Привыкните воспринимать медленную и быструю речь.
      Основой нашей программы являются 6 увлекательных и занимательных мини-игр, таких как : "Саванна",
      "Произнеси слово", "Паззл", "Аудиовызов", "Спринт", "Собери предложение", которые помогут не только приятно
      провести время, но и расширить словарный запас, подтянуть знание грамматики, улучшить произношение.
      Основной особенностью нашего проекта является использование системы интервального повторения, которая 
      подстроится под ваш текущий уровень английского языка. Повторение включает в себя
      5 уровней сложности. При выборе максимального уровня сложности повторение будет длиться 10 минут, продолжительность второго
      шага в четыре раза превышает длительность первого уровня.
      Каждый следующий шаг расчитывается как сумма предыдущего шага + 50% от общего времени повторения.
      Если в игре вы встретите карточку с определенным словом и совершите ошибку, то оно обязательно будет выведено при 
      следующем повторении слов. 
      Развлекайтесь и практикуйте английский язык. Неважно, чем вы интересуетесь и как проводите время, 
      среди наших мини-игр вы обязательно найдете что-нибудь по душе. Играйте, наслаждайтесь и не бойтесь ошибаться!`
    },
    Buttons: {
      save: 'Сохранить',
      delete: 'Удалить',
      start: 'Старт',
      dontKnow: 'Я не знаю',
      next: 'Cледующий',
      true: 'правда',
      false: 'ложь',
      restart: 'Начать заново',
      speak: 'Говорите пожалуйста',
      finish: 'Завершить игру',
      newGame: 'Новая игра',
      statistic: 'Статистика',
      register: 'Регистрация',
      choose: 'Выбрать',
      OK: 'OK',
      back: 'Назад',
      login: 'Войти',
      hard: 'Тяжело',
      train: 'Тренировать',
      play: 'Играть',
    },
    Languages: {
      en: 'Английский',
      ru: 'Русский',
    },
    ModalWindows: {
      didNotStartGame: 'Вы не начали игру',
      know: 'Я знаю',
      doNotKnow: 'Я не знаю',
    },
    Validators: {
      password:
        'Пароль должен содержать числа, буквы верхнего и нижнего регистра, один из следующих символов +-_@$!%*?&#.,;:[]{}',
      email: 'Неправильный адрес электронной почты',
    },
    GameStatus: {
      page: 'Страница',
      level: 'Уровень',
    },
    GamesStatistics: {
      header: 'Статистика игры',
      level: 'Уровень:',
      page: 'Страница:',
      correct: 'Правильных ответов:',
      count: 'Всего слов:',
    },
    TeamMembers: {
      valera: 'Валера',
      nelly: 'Нелли',
      kostya: 'Костя',
      taras: 'Тарас',
      marta: 'Марта',
      artsemi: 'Артемий',
      valeraDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      nellyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      kostyaDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      tarasDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      martaDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
      artsemiDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis sollicitudin feugiat. Mauris eget est massa. Praesent dui ex, viverra in tortor at, egestas facilisis eros. Suspendisse elementum nisl turpis, et commodo urna aliquam a. Proin augue risus, sollicitu',
    },
    Errors: {
      empty: 'Поля настроек не могут быть пустыми',
      number: 'Должно быть число',
      least: 'Не может быть меньше ',
      more: 'Не может быть больше ',
    },
    LearnWords: {
      newWords: 'Новые слова',
      cardsShowed: 'Карточек завершено',
      correctWords: 'Правильные слова',
      completed: 'Cерия завершена',
      theLongestSeries: 'Самая длинная серия правильных ответов',
      noWords: 'На сегодня слов больше нет',
      progress: 'Прогресс',
    },
    Dictionary: {
      repeats: 'Количество повторений',
      prevRepeat: 'Предыдущее повторение',
      nextRepeat: 'Следующее повторение',
      emptyList: 'В этом словаре нету слов',
      learningWords: 'Выученные слова',
      difficultWords: 'Сложные слова',
      deletedWords: 'Удаленные слова',
    },
    Chart: {
      learned: 'Изучено слов: %{count}',
      learnedAll: 'Всего изучено слов: %{count}',
      date: 'Дата: ',
      learnedBefore: 'Ранее изученные слова',
    },
  },
};

export default translations;
