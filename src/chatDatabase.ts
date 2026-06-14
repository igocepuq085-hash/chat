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
    period: '19 мая 2026 - 14 июня 2026',
    updatedAt: '14 июня 2026',
    nextUpdate: 'каждое воскресенье',
    rosterCheckedAt: '14 июня 2026',
    lastMessageCursor: '2026-06-14T23:59:59+05:00',
    visibleMembers: 42,
    activeAuthors: 17,
    messages: 227,
    words: 8276,
    reactions: 264,
    attachments: 36,
    links: 13,
    questions: 46,
    threads: 73,
    avgResponse: 25.4,
  },
  weeklySummary: {
    period: '7-11 июня 2026',
    messages: 46,
    reactions: 50,
    activeAuthors: 9,
    attachments: 10,
    questions: 11,
    highlights: [
      'Главная тема недели - практические эксперименты с Ladcraft: лендинги, промпты, адаптивность, риски и ограничения мобильных браузеров.',
      'Самый плотный день - 10 июня: Ирина Тарасова показала два лендинга, команда разобрала графики, видео, код, модель и безопасность.',
      '11 июня обсуждение сместилось в прикладные советы: мобильная версия, адаптивная верстка, отключение анимаций и проверка рисков.',
      '7 июня был отдельный всплеск вокруг аналитики чата, ручного парсинга MAX и идеи будущих summary по накопленной истории.',
    ],
    notes: [
      '6 июня исключен из рейтингов: найден вход Евгения Богдановича и несколько строк без надежной атрибуции автора.',
      '12, 13 и 14 июня в прочитанной структуре MAX новых сообщений не найдено.',
      'Системные события, цитаты внутри ответов и строки без понятного автора не засчитывались как сообщения участника.',
    ],
  } satisfies WeeklySummary,
  participants: [
    { id: 'leonid-golovin', name: 'Леонид Головин', messages: 75, words: 3360, reactions: 60, links: 9, attachments: 15, questions: 21, activeDays: 18, threads: 28, quickResponses: 15 },
    { id: 'alexander-botev', name: 'Александр Ботев', messages: 27, words: 770, reactions: 38, links: 0, attachments: 5, questions: 7, activeDays: 8, threads: 8, quickResponses: 12 },
    { id: 'alexander-scherbakov', name: 'Александр Щербаков', messages: 24, words: 810, reactions: 18, links: 0, attachments: 1, questions: 9, activeDays: 9, threads: 6, quickResponses: 10 },
    { id: 'irina-tarasova', name: 'Ирина Тарасова', messages: 22, words: 897, reactions: 27, links: 0, attachments: 7, questions: 1, activeDays: 7, threads: 6, quickResponses: 10 },
    { id: 'alexey-yashutkin', name: 'Алексей Яшуткин', messages: 8, words: 169, reactions: 7, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 1, quickResponses: 2 },
    { id: 'nikolay-prokhorov', name: 'Николай Прохоров', messages: 17, words: 355, reactions: 16, links: 3, attachments: 3, questions: 5, activeDays: 4, threads: 5, quickResponses: 13 },
    { id: 'alexander-mulyaev', name: 'Александр Муляев', messages: 8, words: 149, reactions: 3, links: 0, attachments: 0, questions: 2, activeDays: 3, threads: 2, quickResponses: 4 },
    { id: 'anastasia', name: 'Анастасия', messages: 6, words: 413, reactions: 25, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 3, quickResponses: 2 },
    { id: 'yuriy-derevenkin', name: 'Юрий Деревенкин', messages: 9, words: 215, reactions: 9, links: 0, attachments: 0, questions: 1, activeDays: 5, threads: 2, quickResponses: 6 },
    { id: 'mikhail-khozyainov', name: 'Михаил Хозяинов', messages: 7, words: 256, reactions: 12, links: 1, attachments: 1, questions: 0, activeDays: 2, threads: 1, quickResponses: 4 },
    { id: 'sergey-tikhonov', name: 'Сергей Тихонов', messages: 5, words: 92, reactions: 13, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 3, quickResponses: 1 },
    { id: 'anna-krylach', name: 'Анна Крылач', messages: 5, words: 180, reactions: 6, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 1 },
    { id: 'evgenia', name: 'Евгения', messages: 4, words: 152, reactions: 5, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 2, quickResponses: 2 },
    { id: 'nikita-skrynnikov', name: 'Никита Скрынников', messages: 3, words: 170, reactions: 3, links: 0, attachments: 0, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
    { id: 'alexey-zudov', name: 'Алексей Зудов', messages: 2, words: 103, reactions: 8, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 2, quickResponses: 0 },
    { id: 'margarita-larina', name: 'Маргарита Ларина', messages: 6, words: 122, reactions: 8, links: 0, attachments: 2, questions: 0, activeDays: 2, threads: 1, quickResponses: 3 },
    { id: 'leonid-k', name: 'Леонид К', messages: 1, words: 43, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 0 },
    inactive('igor', 'Игорь'),
    inactive('andrey-kiselev', 'Andrey Kiselev'),
    inactive('alexey-s', 'Алексей С'),
    inactive('alexander-kornienko', 'Александр Корниенко'),
    inactive('viktor', 'Виктор'),
    inactive('roman-popovich', 'Роман Попович'),
    inactive('damir', 'Дамир'),
    inactive('evgeniy-bogdanovich', 'Евгений Богданович'),
    inactive('anastasia-yudina', 'Анастасия Юдина'),
    inactive('andrey-shestakov', 'Андрей Шестаков'),
    inactive('sergey', 'Сергей'),
    inactive('maksim', 'Максим'),
    inactive('ekaterina', 'Екатерина'),
    inactive('alexander-shipunov', 'Александр Шипунов'),
    inactive('margarita-latin', 'Margarita'),
    inactive('vladimir-alekseev', 'Владимир Алексеев'),
    inactive('anton-kirichenko', 'Антон Кириченко'),
    inactive('valeriy-belov', 'Валерий Белов'),
    inactive('anna-shvedchenko', 'Анна Шведченко'),
    inactive('sergey-makarov', 'Сергей Макаров'),
    inactive('denis-kolishev', 'Денис Колишев'),
    inactive('m', 'М'),
    inactive('aleksandr-v', 'Aleksandr V'),
    inactive('veronika-chernenko', 'Вероника Черненко'),
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
  ],
  hourlyActivity: [
    { label: '00', value: 8 }, { label: '01', value: 3 }, { label: '07', value: 2 },
    { label: '09', value: 2 }, { label: '10', value: 3 }, { label: '11', value: 4 },
    { label: '12', value: 8 }, { label: '13', value: 13 }, { label: '14', value: 14 },
    { label: '15', value: 18 }, { label: '16', value: 12 }, { label: '18', value: 9 },
    { label: '19', value: 8 }, { label: '20', value: 17 }, { label: '21', value: 16 },
    { label: '22', value: 13 }, { label: '23', value: 31 },
  ],
};
