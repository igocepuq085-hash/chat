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
  semanticSummary: {
    period: '15-21 июня 2026',
    extractedAt: '21 июня 2026',
    participantSignals: 113,
    activeAuthors: 22,
    notes: [
      'Из MAX извлечены видимые сообщения, файлы, ответы и реакции за последнюю неделю; опросы, закрепления и системные строки отделены от участнического вклада.',
      '18 и 21 июня в загруженной структуре MAX новых сообщений не найдено.',
      'Смысловой балл оценивает не объем сам по себе, а идеи, вопросы, помощь, ресурсы, рефлексию и координацию.',
      'Файлы и короткие follow-up элементы считаются смысловыми сигналами, поэтому это не равно количеству обычных сообщений в общей таблице.',
    ],
    profiles: [
      { name: 'Леонид Головин', signals: 44, words: 2181, reactions: 77, files: 9, score: 377, categories: { ideas: 29, questions: 31, help: 14, resources: 30, reflection: 6, coordination: 21, noise: 3 }, role: 'Архитектор недели', summary: 'Держал рамку недели: мастер-класс, разбор ДЗ, методички, публикации работ и репутационная система. Его вклад больше всего похож на редакторскую и продуктовую сборку сообщества.', evidence: ['Собирал вокруг лендингов и табличных данных практическую повестку недели.', 'Выделял удачные решения участников и превращал их в общие уроки.', 'Запускал вопросы к авторам, чтобы они объясняли не только результат, но и способ работы.'] },
      { name: 'Николай Прохоров', signals: 11, words: 414, reactions: 15, files: 1, score: 107, categories: { ideas: 6, questions: 8, help: 6, resources: 4, reflection: 6, coordination: 4, noise: 1 }, role: 'Критический практик', summary: 'Поднимал ограничения корпоративной среды, спорил о реализуемости идей и показывал прикладной прототип CASE RADAR Q. Вклад сильный именно там, где идея проверяется на безопасность, ресурсы и пользу.', evidence: ['Сформулировал проблему с рабочей почтой и доступом к материалам.', 'Собрал практический проект CASE RADAR Q с описанием архитектуры и сценарного моделирования.', 'Добавлял критическую оценку окупаемости и реализуемости чат-бота.'] },
      { name: 'Евгений Богданович', signals: 8, words: 275, reactions: 22, files: 2, score: 69, categories: { ideas: 5, questions: 4, help: 0, resources: 2, reflection: 2, coordination: 3, noise: 2 }, role: 'Прикладной инициатор', summary: 'Связывал ИИ с Lean-практикой и внутренними процессами: тестирование, коллективный договор, снижение нагрузки на руководителей и кадровые вопросы.', evidence: ['Предложил лендинг про права работников из коллективного договора.', 'Принес материалы по тестированию Lean.', 'Формулировал ценность через меньшее число повторяющихся вопросов к руководителям и HR.'] },
      { name: 'Юрий Деревенкин', signals: 6, words: 168, reactions: 20, files: 1, score: 49, categories: { ideas: 2, questions: 3, help: 2, resources: 2, reflection: 1, coordination: 0, noise: 3 }, role: 'Практический экспериментатор', summary: 'Показал прикладной лендинг по рационализаторской деятельности и дал полезный обходной способ для просмотра HTML на мобильном.', evidence: ['Сделал экспериментальный лендинг по рационализаторской деятельности.', 'Нашел рабочий прием с переименованием HTML-файла для передачи через MAX.', 'Проверял мобильный сценарий, а не только desktop-результат.'] },
      { name: 'Сергей Тихонов', signals: 6, words: 324, reactions: 2, files: 1, score: 48, categories: { ideas: 1, questions: 3, help: 5, resources: 2, reflection: 3, coordination: 4, noise: 0 }, role: 'Безопасный наставник', summary: 'Главный смысловой вклад Сергея на неделе - помощь в обходе корпоративных ограничений без потери безопасности: обезличенный реестр, работа с тестовыми данными, осторожность при сомнениях.', evidence: ['Предложил создать абстрактную таблицу, если реальные материалы нельзя отправлять.', 'Оперативно направил обезличенный реестр для ДЗ.', 'Поддержал принцип: при сомнениях лучше переспросить.'] },
      { name: 'Andrey Kiselev', signals: 5, words: 221, reactions: 7, files: 0, score: 36, categories: { ideas: 2, questions: 3, help: 2, resources: 1, reflection: 1, coordination: 1, noise: 1 }, role: 'Адвокат доступа', summary: 'Подсветил риск исключения людей из-за технических барьеров MAX и предложил мягкий канал связи через почту.', evidence: ['Привел кейс Матвея Шляхтурова с проблемой установки MAX на iPhone.', 'Предложил не выключать участников без уточнения причин.', 'Сформулировал запасной канал через общий почтовый ящик.'] },
      { name: 'Матвей Шляхтуров', signals: 3, words: 108, reactions: 10, files: 1, score: 36, categories: { ideas: 2, questions: 2, help: 1, resources: 3, reflection: 1, coordination: 1, noise: 0 }, role: 'Сильный точечный вклад', summary: 'Матвей не активен объемом, но его один содержательный вход дал профиль, прикладную тему и файл по визуализации рационализаторской деятельности. В топ общей активности это не тянет, но смысловой сигнал качественный.', evidence: ['Представился и описал использование ИИ в аналитических, методологических и проектных задачах.', 'Принес лендинг по рационализаторской деятельности.', 'Зафиксировал проблему мобильного отображения, то есть проверял реальный пользовательский сценарий.'] },
      { name: 'Вероника Черненко', signals: 3, words: 159, reactions: 12, files: 1, score: 30, categories: { ideas: 2, questions: 2, help: 0, resources: 2, reflection: 0, coordination: 1, noise: 0 }, role: 'Исследователь инструмента', summary: 'Показала работу с Ladcraft и DeepSeek для графиков в лендинге: вклад полезен как разбор процесса, где модель уставала, а результат добивался итерациями.', evidence: ['Описала создание лендинга через Ladcraft.', 'Объяснила, что графики добавляла через DeepSeek по фото.', 'Подняла тему устойчивости модели при длинной генерации.'] },
      { name: 'Екатерина', signals: 2, words: 77, reactions: 12, files: 1, score: 29, categories: { ideas: 2, questions: 1, help: 0, resources: 1, reflection: 1, coordination: 2, noise: 0 }, role: 'Новичок с исследовательским входом', summary: 'Вошла в чат через честное самоописание уровня и принесла домашнюю работу. Смысловой вклад небольшой по объему, но с хорошим откликом.', evidence: ['Представилась через рабочий контекст 1С и сопровождения систем.', 'Зафиксировала, что находится на начальном уровне в теме ИИ.', 'Приложила результат ДЗ по лендингу.'] },
      { name: 'Анна Крылач', signals: 2, words: 79, reactions: 10, files: 1, score: 25, categories: { ideas: 1, questions: 1, help: 1, resources: 1, reflection: 1, coordination: 0, noise: 0 }, role: 'Практик личного опыта', summary: 'Дала человеческий, прикладной вход: где использует ИИ, какие инструменты пробует и приложила результат ДЗ.', evidence: ['Описала применение GPT, DeepSeek, Suno и Шедеврум в работе, обучении и личных задачах.', 'Показала готовую работу DZ_Krylach.', 'Собрала хороший отклик при малом числе сообщений.'] },
      { name: 'Александр Вяткин', signals: 2, words: 79, reactions: 12, files: 1, score: 23, categories: { ideas: 1, questions: 1, help: 1, resources: 1, reflection: 0, coordination: 1, noise: 0 }, role: 'Мотивированный новичок', summary: 'Сильный смысл входа - четкая мотивация перейти от бытового использования ИИ к системному рабочему применению.', evidence: ['Представился через роль в планировании перевозок.', 'Сформулировал запрос на системность, а не просто интерес к нейросетям.', 'Приложил результат домашней работы.'] },
      { name: 'Дамир', signals: 2, words: 85, reactions: 12, files: 1, score: 23, categories: { ideas: 1, questions: 1, help: 1, resources: 1, reflection: 0, coordination: 0, noise: 0 }, role: 'Практик-ученик', summary: 'Позиционирует себя как пользователь-энтузиаст: пока не эксперт, но уже приносит работу и описывает реальные способы применения ИИ.', evidence: ['Представился как инженер ПТО Астраханского филиала.', 'Описал использование ИИ для быстрых и расширенных ответов.', 'Принес HTML/ZIP работу на Qwen.'] },
      { name: 'Маргарита Ларина', signals: 2, words: 159, reactions: 0, files: 0, score: 23, categories: { ideas: 2, questions: 2, help: 1, resources: 1, reflection: 1, coordination: 2, noise: 0 }, role: 'Визуальный экспериментатор', summary: 'Ее вклад проявился через разбор внешних изображений, CSS-анимации и улучшение агента по лендингам, хотя реакций в видимом фрагменте почти нет.', evidence: ['Разбиралась с легкими лендингами на внешних изображениях.', 'Показывала CSS-анимацию как прием для повторения.', 'Участвовала в кейсе улучшения агента по лендингам.'] },
      { name: 'Александр Шипунов', signals: 2, words: 80, reactions: 11, files: 1, score: 22, categories: { ideas: 1, questions: 1, help: 1, resources: 1, reflection: 0, coordination: 2, noise: 0 }, role: 'Технический участник', summary: 'Вошел через технический бэкграунд АСУ ТП, СЦБ и связи, обозначил опыт 1С и принес домашнюю работу.', evidence: ['Описал рабочий контекст старшего электромеханика.', 'Показал, что ИИ пока применяет в текстах и изображениях.', 'Приложил ДЗ, получив заметный отклик.'] },
      { name: 'Ирина Тарасова', signals: 2, words: 19, reactions: 5, files: 1, score: 19, categories: { ideas: 1, questions: 1, help: 1, resources: 2, reflection: 0, coordination: 0, noise: 0 }, role: 'Точечный продуктовый вклад', summary: 'Коротко, но по делу: принесла тепловую карту в Ladcraft с загрузкой актуальных CSV и архивом проекта.', evidence: ['Создала тепловую карту для загрузки актуальных CSV.', 'Приложила архив ai-heatmap-gazpromtrans.html.zip.', 'Вклад малый по объему, но предметный и проверяемый.'] },
      { name: 'Денис Колишев', signals: 1, words: 70, reactions: 5, files: 0, score: 19, categories: { ideas: 1, questions: 1, help: 1, resources: 1, reflection: 1, coordination: 0, noise: 0 }, role: 'Осознанный новичок', summary: 'Сильный вход через саморефлексию: обозначил себя как энтузиаста, описал использование DeepSeek и ChatGPT в бытовых и рабочих задачах.', evidence: ['Представился через инженерную роль.', 'Честно обозначил уровень: не профессионал, а активный пользователь-энтузиаст.', 'Связал ИИ с реальными рабочими и бытовыми сценариями.'] },
      { name: 'Алексей Зудов', signals: 3, words: 78, reactions: 4, files: 1, score: 18, categories: { ideas: 1, questions: 1, help: 0, resources: 2, reflection: 0, coordination: 0, noise: 1 }, role: 'Локальный ИИ-практик', summary: 'Смысловой вклад связан с локальным Qwen и PDF-редактором для рабочих задач: это сильная прикладная линия, но сообщений в видимом фрагменте немного.', evidence: ['Показал концептуальный лендинг о локальном Qwen.', 'Приложил polished-архив QwenCore/Ladcraft.', 'Поднял тему PDF-редактора для рабочих компьютеров.'] },
      { name: 'Никита Скрынников', signals: 2, words: 96, reactions: 2, files: 0, score: 18, categories: { ideas: 1, questions: 2, help: 2, resources: 1, reflection: 0, coordination: 1, noise: 0 }, role: 'Технический объяснитель', summary: 'Главный вклад - вопрос про участие в мастер-классе и объяснение технической реализации картинки/анимации в лендинге.', evidence: ['Заранее уточнил возможность внешнего подключения к мастер-классу.', 'Объяснил, как использовал картинку и CSS-анимацию.', 'Дал воспроизводимый технический фрагмент для других участников.'] },
      { name: 'Анастасия', signals: 2, words: 14, reactions: 9, files: 1, score: 16, categories: { ideas: 1, questions: 0, help: 0, resources: 1, reflection: 0, coordination: 2, noise: 1 }, role: 'Ранний исполнитель', summary: 'Вклад короткий, но полезный: направила ДЗ и стала примером раннего выполнения, который затем разбирали другие.', evidence: ['Отправила домашнюю работу одной из первых.', 'Приложила ZIP с лендингом.', 'Ее способ сохранения/передачи результата стал предметом разбора.'] },
      { name: 'Михаил Хозяинов', signals: 2, words: 91, reactions: 0, files: 0, score: 13, categories: { ideas: 1, questions: 2, help: 1, resources: 0, reflection: 0, coordination: 1, noise: 0 }, role: 'Идейный уточнитель', summary: 'Предложил развитие идеи в сторону чат-бота в MAX и уточнил правовой контур через профсоюз как юрлицо.', evidence: ['Предложил чат-бота в MAX с голосовым вопросом.', 'Уточнил, что профсоюз может быть юридическим лицом.', 'Вклад скорее концептуальный, без файла или длинной реализации.'] },
      { name: 'Александр Щербаков', signals: 2, words: 78, reactions: 0, files: 0, score: 9, categories: { ideas: 1, questions: 1, help: 0, resources: 0, reflection: 0, coordination: 1, noise: 1 }, role: 'Точечный комментатор', summary: 'Отреагировал на идею лендинга по коллективному договору через существующего HR-помощника. Вклад короткий, но релевантный.', evidence: ['Напомнил про HR-помощника на портале.', 'Сместил обсуждение от нового лендинга к уже существующему инструменту.', 'Пока мало данных для глубокого профиля.'] },
      { name: 'Александр Ботев', signals: 1, words: 69, reactions: 1, files: 0, score: 8, categories: { ideas: 1, questions: 1, help: 0, resources: 0, reflection: 0, coordination: 1, noise: 0 }, role: 'Наблюдатель с вопросом', summary: 'Видимый смысловой вклад минимальный: короткое включение в обсуждение Евгения Богдановича и Lean-направления.', evidence: ['Отреагировал на представление и цель Евгения Богдановича.', 'Поддержал обсуждение Lean-практик.', 'Нужно больше сообщений для надежной оценки.'] },
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
    { id: 'ekaterina', name: 'Екатерина', messages: 3, words: 330, reactions: 4, links: 1, attachments: 1, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
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
