export type Participant = { id: string; name: string; messages: number; words: number; reactions: number; links: number; attachments: number; questions: number; activeDays: number; threads: number; quickResponses: number };

export const chatDatabase = {
  meta: { chatTitle: 'Амбассадоры ЦКИИ', period: '19 мая 2026 - 5 июня 2026', updatedAt: '7 июня 2026', nextUpdate: 'каждое воскресенье', lastMessageCursor: '2026-06-05T23:59:59+05:00', visibleMembers: 42, activeAuthors: 17, messages: 181, words: 6244, reactions: 214, attachments: 26, links: 9, questions: 35, threads: 60, avgResponse: 25.4 },
  participants: [
    { id: 'leonid-golovin', name: 'Леонид Головин', messages: 69, words: 2840, reactions: 50, links: 7, attachments: 14, questions: 20, activeDays: 14, threads: 25, quickResponses: 12 },
    { id: 'alexander-botev', name: 'Александр Ботев', messages: 21, words: 520, reactions: 30, links: 0, attachments: 3, questions: 5, activeDays: 6, threads: 6, quickResponses: 8 },
    { id: 'alexander-scherbakov', name: 'Александр Щербаков', messages: 20, words: 650, reactions: 18, links: 0, attachments: 1, questions: 6, activeDays: 7, threads: 5, quickResponses: 8 },
    { id: 'irina-tarasova', name: 'Ирина Тарасова', messages: 12, words: 247, reactions: 18, links: 0, attachments: 3, questions: 1, activeDays: 5, threads: 3, quickResponses: 5 },
    { id: 'alexey-yashutkin', name: 'Алексей Яшуткин', messages: 8, words: 169, reactions: 7, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 1, quickResponses: 2 },
    { id: 'nikolay-prokhorov', name: 'Николай Прохоров', messages: 7, words: 105, reactions: 8, links: 1, attachments: 2, questions: 1, activeDays: 1, threads: 2, quickResponses: 5 },
    { id: 'alexander-mulyaev', name: 'Александр Муляев', messages: 7, words: 141, reactions: 3, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 2, quickResponses: 4 },
    { id: 'anastasia', name: 'Анастасия', messages: 6, words: 413, reactions: 25, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 3, quickResponses: 2 },
    { id: 'yuriy-derevenkin', name: 'Юрий Деревенькин', messages: 6, words: 155, reactions: 4, links: 0, attachments: 0, questions: 1, activeDays: 3, threads: 2, quickResponses: 3 },
    { id: 'mikhail-khozyainov', name: 'Михаил Хозяинов', messages: 6, words: 242, reactions: 10, links: 1, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 3 },
    { id: 'sergey-tikhonov', name: 'Сергей Тихонов', messages: 5, words: 92, reactions: 13, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 3, quickResponses: 1 },
    { id: 'anna-krylach', name: 'Анна Крылач', messages: 5, words: 180, reactions: 6, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 1 },
    { id: 'evgenia', name: 'Евгения', messages: 4, words: 152, reactions: 5, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 2, quickResponses: 2 },
    { id: 'nikita-skrynnikov', name: 'Никита Скрынников', messages: 3, words: 170, reactions: 3, links: 0, attachments: 0, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
    { id: 'alexey-zudov', name: 'Алексей Зудов', messages: 2, words: 103, reactions: 8, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 2, quickResponses: 0 },
    { id: 'margarita-larina', name: 'Маргарита Ларина', messages: 1, words: 2, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 1 },
    { id: 'leonid-k', name: 'Леонид К', messages: 1, words: 43, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 0 }
  ] satisfies Participant[],
  dailyActivity: [{ label: '19 мая', value: 1 }, { label: '20 мая', value: 31 }, { label: '21 мая', value: 14 }, { label: '22 мая', value: 12 }, { label: '23 мая', value: 12 }, { label: '24 мая', value: 6 }, { label: '25 мая', value: 8 }, { label: '26 мая', value: 3 }, { label: '27 мая', value: 26 }, { label: '28 мая', value: 23 }, { label: '29 мая', value: 2 }, { label: '31 мая', value: 3 }, { label: '1 июня', value: 8 }, { label: '2 июня', value: 5 }, { label: '4 июня', value: 21 }, { label: '5 июня', value: 6 }],
  hourlyActivity: [{ label: '00', value: 8 }, { label: '01', value: 3 }, { label: '07', value: 2 }, { label: '09', value: 2 }, { label: '10', value: 3 }, { label: '11', value: 4 }, { label: '12', value: 8 }, { label: '13', value: 13 }, { label: '14', value: 14 }, { label: '15', value: 18 }, { label: '16', value: 12 }, { label: '18', value: 9 }, { label: '19', value: 8 }, { label: '20', value: 17 }, { label: '21', value: 16 }, { label: '22', value: 13 }, { label: '23', value: 31 }]
};
