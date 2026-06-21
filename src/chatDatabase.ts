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
    period: '19 мая 2026 - 21 июня 2026',
    updatedAt: '21 июня 2026',
    nextUpdate: 'каждое воскресенье',
    rosterCheckedAt: '21 июня 2026',
    lastMessageCursor: '2026-06-21T23:59:59+05:00',
    visibleMembers: 42,
    activeAuthors: 26,
    messages: 336,
    words: 18558,
    reactions: 465,
    attachments: 61,
    links: 21,
    questions: 71,
    threads: 118,
    avgResponse: 25.4,
  },
  weeklySummary: {
    period: '15-20 июня 2026',
    messages: 109,
    reactions: 201,
    activeAuthors: 24,
    attachments: 25,
    questions: 25,
    highlights: [
      'Главная тема недели - защита и разбор домашних лендингов: участники показывали файлы, подходы к графикам, мобильной верстке, PDF и локальным инструментам.',
      'Самый плотный день - 16 июня: поток представлений, домашних заданий, разборов работ и обсуждений Ladcraft резко расширил активное ядро чата.',
      '17 июня чат перешел от домашних работ к управлению сообществом: галерея лучших работ, репутация амбассадоров, опросы и методичка по лендингам.',
      '19 июня появился прикладной спор о безопасной подготовке реестра кейсов: корпоративная почта, обезличивание, Excel, границы ИБ и практичный обход ограничений.',
    ],
    notes: [
      '18 и 21 июня в прочитанной структуре MAX новых сообщений не найдено.',
      '15 июня Евгений Богданович учтен как активный автор: в этой неделе найдены реальные сообщения и вложения, не системный вход.',
      'Системные события, цитаты внутри ответов и строки без понятного автора не засчитывались как сообщения участника.',
    ],
  } satisfies WeeklySummary,
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
    { id: 'ekaterina', name: 'Екатерина', messages: 3, words: 330, reactions: 4, links: 1, attachments: 1, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
    { id: 'alexander-shipunov', name: 'Александр Шипунов', messages: 2, words: 120, reactions: 11, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    inactive('margarita-latin', 'Margarita'),
    inactive('vladimir-alekseev', 'Владимир Алексеев'),
    inactive('anton-kirichenko', 'Антон Кириченко'),
    inactive('valeriy-belov', 'Валерий Белов'),
    inactive('anna-shvedchenko', 'Анна Шведченко'),
    inactive('sergey-makarov', 'Сергей Макаров'),
    { id: 'denis-kolishev', name: 'Денис Колишев', messages: 3, words: 420, reactions: 8, links: 0, attachments: 1, questions: 1, activeDays: 1, threads: 2, quickResponses: 1 },
    { id: 'm', name: 'М', messages: 1, words: 240, reactions: 7, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
    { id: 'aleksandr-v', name: 'Aleksandr V', messages: 1, words: 120, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 0 },
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
    { label: '21 июня', value: 0 },
  ],
  hourlyActivity: [
    { label: '00', value: 14 }, { label: '01', value: 3 }, { label: '07', value: 2 },
    { label: '08', value: 2 }, { label: '09', value: 3 }, { label: '10', value: 11 }, { label: '11', value: 8 },
    { label: '12', value: 16 }, { label: '13', value: 25 }, { label: '14', value: 24 },
    { label: '15', value: 28 }, { label: '16', value: 26 }, { label: '17', value: 6 }, { label: '18', value: 14 },
    { label: '19', value: 17 }, { label: '20', value: 24 }, { label: '21', value: 25 },
    { label: '22', value: 15 }, { label: '23', value: 33 },
  ],
};
