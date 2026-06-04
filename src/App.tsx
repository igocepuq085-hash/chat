import { useMemo, useState } from 'react';

type Participant = {
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
  first: string;
};

type ViewMode = 'overview' | 'team' | 'rhythm';
type SortKey = 'score' | 'messages' | 'reactions' | 'activeDays' | 'threads' | 'quickResponses';

const participants: Participant[] = [
  { name: 'Леонид Головин', messages: 67, words: 2642, reactions: 45, links: 7, attachments: 14, questions: 14, activeDays: 12, threads: 23, quickResponses: 10, first: '19 мая 2026' },
  { name: 'Александр', messages: 12, words: 314, reactions: 29, links: 0, attachments: 2, questions: 3, activeDays: 5, threads: 5, quickResponses: 4, first: '20 мая 2026' },
  { name: 'Ирина Тарасова', messages: 12, words: 247, reactions: 18, links: 0, attachments: 3, questions: 1, activeDays: 5, threads: 3, quickResponses: 5, first: '20 мая 2026' },
  { name: 'Александр Щербаков', messages: 10, words: 347, reactions: 15, links: 0, attachments: 0, questions: 2, activeDays: 5, threads: 2, quickResponses: 5, first: '20 мая 2026' },
  { name: 'Алексей Яшуткин', messages: 8, words: 169, reactions: 7, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 1, quickResponses: 2, first: '27 мая 2026' },
  { name: 'Александр Муляев', messages: 7, words: 141, reactions: 3, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 2, quickResponses: 4, first: '20 мая 2026' },
  { name: 'Анастасия', messages: 6, words: 413, reactions: 25, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 3, quickResponses: 2, first: '20 мая 2026' },
  { name: 'Юрий Деревенкин', messages: 6, words: 155, reactions: 4, links: 0, attachments: 0, questions: 1, activeDays: 3, threads: 2, quickResponses: 3, first: '20 мая 2026' },
  { name: 'Михаил Хозяинов', messages: 6, words: 242, reactions: 10, links: 1, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 3, first: '28 мая 2026' },
  { name: 'Сергей Тихонов', messages: 5, words: 92, reactions: 13, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 3, quickResponses: 1, first: '22 мая 2026' },
  { name: 'Анна Крылач', messages: 5, words: 180, reactions: 6, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 1, first: '27 мая 2026' },
  { name: 'Евгения', messages: 3, words: 82, reactions: 4, links: 0, attachments: 0, questions: 0, activeDays: 2, threads: 1, quickResponses: 2, first: '21 мая 2026' },
  { name: 'Никита Скрынников', messages: 3, words: 170, reactions: 3, links: 0, attachments: 0, questions: 0, activeDays: 2, threads: 2, quickResponses: 1, first: '23 мая 2026' },
  { name: 'Алексей Зудов', messages: 2, words: 103, reactions: 8, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 2, quickResponses: 0, first: '21 мая 2026' },
  { name: 'Маргарита Ларина', messages: 1, words: 2, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 1, first: '20 мая 2026' },
  { name: 'Леонид К', messages: 1, words: 43, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 0, first: '23 мая 2026' },
];

const dailyActivity = [
  { label: '19 мая', value: 1 },
  { label: '20 мая', value: 31 },
  { label: '21 мая', value: 14 },
  { label: '22 мая', value: 12 },
  { label: '23 мая', value: 12 },
  { label: '24 мая', value: 6 },
  { label: '25 мая', value: 8 },
  { label: '26 мая', value: 3 },
  { label: '27 мая', value: 26 },
  { label: '28 мая', value: 23 },
  { label: '29 мая', value: 2 },
  { label: '31 мая', value: 3 },
  { label: '1 июн.', value: 8 },
  { label: '2 июн.', value: 5 },
];

const hourlyActivity = [
  { label: '00', value: 8 }, { label: '01', value: 3 }, { label: '07', value: 2 }, { label: '09', value: 2 },
  { label: '10', value: 3 }, { label: '11', value: 3 }, { label: '12', value: 8 }, { label: '13', value: 12 },
  { label: '14', value: 13 }, { label: '15', value: 16 }, { label: '16', value: 9 }, { label: '18', value: 9 },
  { label: '19', value: 6 }, { label: '20', value: 17 }, { label: '21', value: 15 }, { label: '22', value: 3 }, { label: '23', value: 25 },
];

const summary = {
  chatTitle: 'Амбассадоры ЦКИИ',
  period: '19 мая 2026 - 2 июня 2026',
  visibleMembers: 41,
  activeAuthors: 16,
  silentMembers: 25,
  messages: 154,
  systemCards: 35,
  words: 5351,
  reactions: 192,
  attachments: 21,
  links: 8,
  questions: 23,
  threads: 52,
  avgResponse: 28.5,
};

const viewLabels: Record<ViewMode, string> = { overview: 'Обзор', team: 'Участники', rhythm: 'Ритм' };
const sortLabels: Record<SortKey, string> = {
  score: 'Индекс',
  messages: 'Сообщения',
  reactions: 'Реакции',
  activeDays: 'Дни',
  threads: 'Инициатива',
  quickResponses: 'Ответы',
};

function score(person: Participant) {
  return Math.round(person.messages * 1.8 + person.activeDays * 5 + person.threads * 3.5 + person.quickResponses * 2.8 + person.reactions * 0.7 + person.questions * 2);
}

function status(person: Participant) {
  const value = score(person);
  if (value >= 180) return 'Лидер';
  if (value >= 70) return 'Ядро';
  if (person.quickResponses >= 3 || person.reactions / Math.max(person.messages, 1) >= 2.2) return 'Откликается';
  return 'На периферии';
}

function MetricCard({ label, value, detail, tone = 'neutral' }: { label: string; value: string; detail: string; tone?: 'neutral' | 'good' | 'warn' | 'cool' }) {
  return <section className={`metric-card metric-card-${tone}`}><span>{label}</span><strong>{value}</strong><small>{detail}</small></section>;
}

function BarChart({ data, compact = false }: { data: Array<{ label: string; value: number }>; compact?: boolean }) {
  const max = Math.max(...data.map((item) => item.value), 1);
  return (
    <div className={compact ? 'bar-chart bar-chart-compact' : 'bar-chart'}>
      {data.map((item) => (
        <div className="bar-row" key={item.label}>
          <span className="bar-label">{item.label}</span>
          <div className="bar-track"><span className="bar-fill" style={{ width: `${Math.max(4, (item.value / max) * 100)}%` }} /></div>
          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

function ActivityHeatmap() {
  const max = Math.max(...hourlyActivity.map((item) => item.value), 1);
  return (
    <div className="heatmap" aria-label="Активность по часам">
      {hourlyActivity.map((item) => {
        const intensity = item.value / max;
        return <div className="heat-cell" key={item.label}><span style={{ opacity: 0.25 + intensity * 0.75, transform: `scale(${0.72 + intensity * 0.28})` }} /><strong>{item.label}</strong><small>{item.value}</small></div>;
      })}
    </div>
  );
}

function App() {
  const [view, setView] = useState<ViewMode>('overview');
  const [sortKey, setSortKey] = useState<SortKey>('score');
  const [query, setQuery] = useState('');
  const [showQuiet, setShowQuiet] = useState(true);

  const rows = useMemo(() => {
    return participants
      .filter((person) => showQuiet || score(person) >= 55)
      .filter((person) => person.name.toLowerCase().includes(query.trim().toLowerCase()))
      .sort((a, b) => (sortKey === 'score' ? score(b) - score(a) : b[sortKey] - a[sortKey]));
  }, [query, showQuiet, sortKey]);

  const leader = participants.reduce((best, person) => score(person) > score(best) ? person : best);
  const activeRate = Math.round((summary.activeAuthors / summary.visibleMembers) * 100);
  const questionRate = Math.round((summary.questions / summary.messages) * 100);

  return (
    <main className="dashboard-shell">
      <header className="dashboard-header">
        <div>
          <p className="section-kicker">MAX chat intelligence</p>
          <h1>{summary.chatTitle}</h1>
          <p className="header-copy">Динамическая аналитика вовлеченности команды по переписке: вклад участников, инициативность, реакции, ответы и ритм обсуждений.</p>
        </div>
        <aside className="snapshot-panel"><span>Период анализа</span><strong>{summary.period}</strong><small>{summary.messages} сообщений, {summary.systemCards} системных карточек исключено</small></aside>
      </header>

      <section className="control-strip" aria-label="Фильтры дашборда">
        <div className="segmented-control">{(Object.keys(viewLabels) as ViewMode[]).map((mode) => <button className={view === mode ? 'is-active' : ''} key={mode} onClick={() => setView(mode)} type="button">{viewLabels[mode]}</button>)}</div>
        <label className="search-box"><span>Поиск</span><input aria-label="Поиск участника" onChange={(event) => setQuery(event.target.value)} placeholder="Имя участника" type="search" value={query} /></label>
        <label className="toggle-row"><input checked={showQuiet} onChange={(event) => setShowQuiet(event.target.checked)} type="checkbox" /><span>Показывать периферию</span></label>
      </section>

      <section className="metrics-grid">
        <MetricCard detail={`${summary.activeAuthors} из ${summary.visibleMembers} участников писали`} label="Активная доля" tone="good" value={`${activeRate}%`} />
        <MetricCard detail={`остальные ${summary.silentMembers} только читали или не проявились`} label="Тихая зона" tone="warn" value={`${summary.silentMembers}`} />
        <MetricCard detail={`${summary.reactions} реакций на ${summary.messages} сообщений`} label="Отклик" tone="cool" value={`${(summary.reactions / summary.messages).toFixed(1)}x`} />
        <MetricCard detail={`${summary.threads} ветки, средний ответ ${summary.avgResponse} мин`} label="Диалог" value={`${summary.questions}`} />
      </section>

      {view === 'overview' && <section className="dashboard-grid">
        <article className="panel panel-large"><div className="panel-heading"><div><p className="section-kicker">Лидер вовлеченности</p><h2>Главный двигатель обсуждений</h2></div><span className="panel-badge">индекс {score(leader)}</span></div><div className="leader-card"><div className="leader-orbit" aria-hidden="true"><span /><strong>{leader.name.slice(0, 1)}</strong></div><div><h3>{leader.name}</h3><p>{leader.messages} сообщений, {leader.threads} инициированных обсуждений, {leader.questions} вопросов и {leader.activeDays} активных дней.</p><div className="leader-stats"><span>{leader.attachments} вложений</span><span>{leader.links} ссылок</span><span>{leader.quickResponses} быстрых ответов</span></div></div></div></article>
        <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Топ участников</p><h2>Индекс вовлеченности</h2></div></div><BarChart data={rows.slice(0, 7).map((person) => ({ label: person.name, value: score(person) }))} /></article>
        <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Динамика</p><h2>Сообщения по дням</h2></div></div><BarChart data={dailyActivity} compact /></article>
        <article className="panel panel-insights"><div className="panel-heading"><div><p className="section-kicker">Интерпретация</p><h2>Что видно по команде</h2></div></div><ul className="insight-list"><li><strong>Ядро небольшое.</strong><span>Активно пишет 39% состава, формат похож на лидерский канал с обсуждениями.</span></li><li><strong>Отклик есть.</strong><span>{summary.reactions} реакций показывают участие без сообщений.</span></li><li><strong>Пики вечерние.</strong><span>Главная активность приходится на 20:00-23:00.</span></li><li><strong>Вопросность {questionRate}%.</strong><span>Чат используется для уточнений, обратной связи и обмена опытом.</span></li></ul></article>
      </section>}

      {view === 'team' && <section className="team-view"><div className="panel-heading team-heading"><div><p className="section-kicker">Команда</p><h2>Участники и вклад</h2></div><div className="sort-control">{(Object.keys(sortLabels) as SortKey[]).map((key) => <button className={sortKey === key ? 'is-active' : ''} key={key} onClick={() => setSortKey(key)} type="button">{sortLabels[key]}</button>)}</div></div><div className="table-shell"><table><thead><tr><th>Участник</th><th>Индекс</th><th>Сообщ.</th><th>Дни</th><th>Реакции</th><th>Инициатива</th><th>Ответы</th><th>Статус</th></tr></thead><tbody>{rows.map((person) => <tr key={person.name}><td><div className="person-cell"><span>{person.name.slice(0, 1)}</span><div><strong>{person.name}</strong><small>с {person.first}</small></div></div></td><td>{score(person)}</td><td>{person.messages}</td><td>{person.activeDays}</td><td>{person.reactions}</td><td>{person.threads}</td><td>{person.quickResponses}</td><td><span className="status">{status(person)}</span></td></tr>)}</tbody></table></div></section>}

      {view === 'rhythm' && <section className="dashboard-grid rhythm-grid"><article className="panel panel-large"><div className="panel-heading"><div><p className="section-kicker">Тепловая карта</p><h2>Когда команда оживает</h2></div><span className="panel-badge">пик 23:00</span></div><ActivityHeatmap /></article><article className="panel"><div className="panel-heading"><div><p className="section-kicker">Инициаторы</p><h2>Запускают обсуждения</h2></div></div><BarChart data={[...participants].sort((a, b) => b.threads - a.threads).slice(0, 8).map((person) => ({ label: person.name, value: person.threads }))} /></article><article className="panel"><div className="panel-heading"><div><p className="section-kicker">Ответы</p><h2>Поддерживают диалог</h2></div></div><BarChart data={[...participants].sort((a, b) => b.quickResponses - a.quickResponses).slice(0, 8).map((person) => ({ label: person.name, value: person.quickResponses }))} /></article></section>}
    </main>
  );
}

export default App;
