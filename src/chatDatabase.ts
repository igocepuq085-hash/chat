export type Participant = {
  id: string;
  name: string;
  messages: number;
  words: number;
  reactions: number;
  links: number;
  attachments: number;
  questions: number;
  activeDays: number;
  threads: number;
  quickResponses: number;
};

export type WeeklySummary = {
  period: string;
  messages: number;
  reactions: number;
  activeAuthors: number;
  attachments: number;
  questions: number;
  highlights: string[];
  notes: string[];
};

export type SemanticProfile = {
  name: string;
  signals: number;
  words: number;
  reactions: number;
  files: number;
  score: number;
  categories: {
    ideas: number;
    questions: number;
    help: number;
    resources: number;
    reflection: number;
    coordination: number;
    noise: number;
  };
  role: string;
  summary: string;
  evidence: string[];
};

export type SemanticSummary = {
  period: string;
  extractedAt: string;
  participantSignals: number;
  activeAuthors: number;
  notes: string[];
  profiles: SemanticProfile[];
};

const inactive = (id: string, name: string): Participant => ({
  id,
  name,
  messages: 0,
  words: 0,
  reactions: 0,
  links: 0,
  attachments: 0,
  questions: 0,
  activeDays: 0,
  threads: 0,
  quickResponses: 0,
});

export const chatDatabase = {
  meta: {
    chatTitle: 'Амбассадоры ЦКИИ',
    period: '19 мая 2026 - 28 июня 2026',
    updatedAt: '28 июня 2026',
    nextUpdate: 'каждое воскресенье',
    rosterCheckedAt: '28 июня 2026',
    lastMessageCursor: '2026-06-28T23:59:59+05:00',
    visibleMembers: 42,
    activeAuthors: 26,
    messages: 338,
    words: 18586,
    reactions: 468,
    attachments: 62,
    links: 21,
    questions: 71,
    threads: 118,
    avgResponse: 25.4,
  },
  weeklySummary: {
    period: '22-28 июня 2026',
    messages: 2,
    reactions: 3,
    activeAuthors: 1,
    attachments: 1,
    questions: 0,
    highlights: [
      'Неделя была почти тихой: в видимой ленте MAX за 22-28 июня найдено только два участнических сообщения, оба 25 июня в 17:17.',
      'Новый вклад выглядел как короткий follow-up: одно вложение и пояснение к нему, без новых вопросов, ссылок или длинной дискуссии.',
      'Реакции есть даже при низком объеме: два сообщения собрали 3 реакции, то есть команда заметила обновление, но обсуждение не развернулось.',
      '22, 24, 26, 27 и 28 июня в загруженной области целевого чата новых участнических сообщений не найдено.',
    ],
    notes: [
      'Парсинг выполнен по правой панели чата MAX: 20 элементов левой панели и превью чатов исключены из подсчета.',
      '23 июня виден только служебно-контактный блок без времени сообщения, поэтому он не засчитан как участническое сообщение.',
      'Цепочка 25 июня принадлежит Екатерине; MAX не раскрыл отдельную подпись автора у этих двух сообщений, поэтому атрибуция исправлена по ручной сверке участника.',
    ],
  } satisfies WeeklySummary,
  semanticSummary: {
    period: '22-28 июня 2026',
    extractedAt: '28 июня 2026',
    participantSignals: 2,
    activeAuthors: 1,
    notes: [
      'Из MAX извлечена только правая панель целевого чата; превью, список чатов, закрепы и служебные блоки не попали в смысловой подсчет.',
      'Смысловая активность недели низкая: найден короткий follow-up с вложением и одним поясняющим сообщением, без новых вопросов и без ветвления обсуждения.',
      '23 июня виден контактно-служебный блок без времени сообщения, поэтому он не учитывался как вклад участника.',
      'Авторская подпись двух сообщений 25 июня не раскрылась отдельной строкой в DOM; после ручной сверки цепочка отнесена к Екатерине.',
    ],
    profiles: [
      { name: 'Екатерина', signals: 2, words: 28, reactions: 3, files: 1, score: 18, categories: { ideas: 0, questions: 0, help: 1, resources: 1, reflection: 1, coordination: 0, noise: 0 }, role: 'Тихий follow-up недели', summary: 'На неделе 22-28 июня вклад Екатерины был не про объем, а про короткое поддержание контекста: вложение и пояснение к нему собрали небольшой отклик, но не запустили новую дискуссию.', evidence: ['25 июня найдено два сообщения в одной входящей цепочке.', 'В цепочке есть одно вложение и три реакции.', 'Новых вопросов, ссылок и развернутой координации за неделю не найдено.'] },
    ],
  } satisfies SemanticSummary,
  participants: [
    { id: 'leonid-golovin', name: 'Леонид Головин', messages: 110, words: 7560, reactions: 120, links: 14, attachments: 20, questions: 35, activeDays: 21, threads: 44, quickResponses: 33 },
    { id: 'alexander-botev', name: 'Александр Ботев', messages: 28, words: 772, reactions: 39, links: 0, attachments: 5, questions: 7, activeDays: 9, threads: 8, quickResponses: 13 },
    { id: 'alexander-scherbakov', name: 'Александр Щербаков', messages: 26, words: 860, reactions: 20, links: 0, attachments: 2, questions: 10, activeDays: 10, threads: 7, quickResponses: 11 },
    { id: 'irina-tarasova', name: 'Ирина Тарасова', messages: 26, words: 1147, reactions: 35, links: 0, attachments: 8, questions: 1, activeDays: 9, threads: 7, quickResponses: 12 },
    { id: 'alexey-yashutkin', name: 'Алексей Яшуткин', messages: 8, words: 169, reactions: 7, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 1, quickResponses: 2 },
    { id: 'nikolay-prokhorov', name: 'Николай Прохоров', messages: 22, words: 1005, reactions: 19, links: 4, attachments: 4, questions: 7, activeDays: 6, threads: 7, quickResponses: 15 },
    { id: 'alexander-mulyaev', name: 'Александр Муляев', messages: 10, words: 209, reactions: 3, links: 0, attachments: 2, questions: 2, activeDays: 4, threads: 3, quickResponses: 4 },
    { id: 'anastasia', name: 'Анастасия', messages: 9, words: 488, reactions: 31, links: 0, attachments: 1, questions: 0, activeDays: 4, threads: 4, quickResponses: 3 },
    { id: 'yuriy-derevenkin', name: 'Юрий Деревенкин', messages: 14, words: 1065, reactions: 29, links: 0, attachments: 2, questions: 2, activeDays: 6, threads: 4, quickResponses: 8 },
    { id: 'mikhail-khozyainov', name: 'Михаил Хозяинов', messages: 12, words: 416, reactions: 15, links: 1, attachments: 2, questions: 0, activeDays: 4, threads: 2, quickResponses: 8 },
    { id: 'sergey-tikhonov', name: 'Сергей Тихонов', messages: 12, words: 742, reactions: 17, links: 0, attachments: 1, questions: 2, activeDays: 3, threads: 5, quickResponses: 6 },
    { id: 'anna-krylach', name: 'Анна Крылач', messages: 7, words: 360, reactions: 14, links: 0, attachments: 1, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
    { id: 'evgenia', name: 'Евгения', messages: 4, words: 152, reactions: 5, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 2, quickResponses: 2 },
    { id: 'nikita-skrynnikov', name: 'Никита Скрынников', messages: 5, words: 290, reactions: 5, links: 0, attachments: 1, questions: 0, activeDays: 3, threads: 3, quickResponses: 2 },
    { id: 'alexey-zudov', name: 'Алексей Зудов', messages: 7, words: 383, reactions: 16, links: 0, attachments: 2, questions: 0, activeDays: 3, threads: 4, quickResponses: 2 },
    { id: 'margarita-larina', name: 'Маргарита Ларина', messages: 8, words: 172, reactions: 8, links: 0, attachments: 2, questions: 0, activeDays: 3, threads: 1, quickResponses: 5 },
    { id: 'leonid-k', name: 'Леонид К', messages: 1, words: 43, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 0 },
    inactive('igor', 'Игорь'),
    { id: 'andrey-kiselev', name: 'Andrey Kiselev', messages: 5, words: 450, reactions: 5, links: 1, attachments: 0, questions: 2, activeDays: 2, threads: 2, quickResponses: 4 },
    inactive('alexey-s', 'Алексей С'),
    inactive('alexander-kornienko', 'Александр Корниенко'),
    inactive('viktor', 'Виктор'),
    inactive('roman-popovich', 'Роман Попович'),
    { id: 'damir', name: 'Дамир', messages: 2, words: 95, reactions: 12, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    { id: 'evgeniy-bogdanovich', name: 'Евгений Богданович', messages: 7, words: 650, reactions: 24, links: 0, attachments: 3, questions: 1, activeDays: 3, threads: 3, quickResponses: 3 },
    inactive('anastasia-yudina', 'Анастасия Юдина'),
    inactive('andrey-shestakov', 'Андрей Шестаков'),
    inactive('sergey', 'Сергей'),
    inactive('maksim', 'Максим'),
    { id: 'ekaterina', name: 'Екатерина', messages: 5, words: 358, reactions: 7, links: 1, attachments: 2, questions: 0, activeDays: 3, threads: 3, quickResponses: 1 },
    { id: 'alexander-shipunov', name: 'Александр Шипунов', messages: 2, words: 120, reactions: 11, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    inactive('margarita-latin', 'Margarita'),
    inactive('vladimir-alekseev', 'Владимир Алексеев'),
    inactive('anton-kirichenko', 'Антон Кириченко'),
    inactive('valeriy-belov', 'Валерий Белов'),
    inactive('anna-shvedchenko', 'Анна Шведченко'),
    inactive('sergey-makarov', 'Сергей Макаров'),
    { id: 'denis-kolishev', name: 'Денис Колишев', messages: 3, words: 420, reactions: 8, links: 0, attachments: 1, questions: 1, activeDays: 1, threads: 2, quickResponses: 1 },
    { id: 'm', name: 'Матвей Шляхтуров', messages: 1, words: 240, reactions: 7, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    { id: 'aleksandr-v', name: 'Александр Вяткин', messages: 1, words: 120, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    { id: 'veronika-chernenko', name: 'Вероника Черненко', messages: 3, words: 300, reactions: 11, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 2 },
    inactive('igor-vashchenko', 'Игорь Ващенко'),
  ] satisfies Participant[],
  dailyActivity: [
    { label: '19 мая', value: 1 }, { label: '20 мая', value: 31 }, { label: '21 мая', value: 14 },
    { label: '22 мая', value: 12 }, { label: '23 мая', value: 12 }, { label: '24 мая', value: 6 },
    { label: '25 мая', value: 8 }, { label: '26 мая', value: 3 }, { label: '27 мая', value: 26 },
    { label: '28 мая', value: 23 }, { label: '29 мая', value: 2 }, { label: '31 мая', value: 3 },
    { label: '1 июня', value: 8 }, { label: '2 июня', value: 5 }, { label: '4 июня', value: 21 },
    { label: '5 июня', value: 6 }, { label: '7 июня', value: 14 }, { label: '8 июня', value: 1 },
    { label: '9 июня', value: 2 }, { label: '10 июня', value: 20 }, { label: '11 июня', value: 9 },
    { label: '15 июня', value: 6 }, { label: '16 июня', value: 46 }, { label: '17 июня', value: 44 },
    { label: '18 июня', value: 0 }, { label: '19 июня', value: 11 }, { label: '20 июня', value: 2 },
    { label: '21 июня', value: 0 }, { label: '22 июня', value: 0 }, { label: '23 июня', value: 0 },
    { label: '24 июня', value: 0 }, { label: '25 июня', value: 2 }, { label: '26 июня', value: 0 },
    { label: '27 июня', value: 0 }, { label: '28 июня', value: 0 },
  ],
  hourlyActivity: [
    { label: '00', value: 14 }, { label: '01', value: 3 }, { label: '07', value: 2 },
    { label: '08', value: 2 }, { label: '09', value: 3 }, { label: '10', value: 11 }, { label: '11', value: 8 },
    { label: '12', value: 16 }, { label: '13', value: 25 }, { label: '14', value: 24 },
    { label: '15', value: 28 }, { label: '16', value: 26 }, { label: '17', value: 8 }, { label: '18', value: 14 },
    { label: '19', value: 17 }, { label: '20', value: 24 }, { label: '21', value: 25 },
    { label: '22', value: 15 }, { label: '23', value: 33 },
  ],
};
