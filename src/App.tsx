import { useMemo, useState } from 'react';
import './quality.css';

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
};

type ViewMode = 'overview' | 'team' | 'quality' | 'rhythm';
type SortKey = 'score' | 'messages' | 'reactions' | 'activeDays' | 'questions' | 'resources';

const participants: Participant[] = [
  { name: 'Леонид Головин', messages: 69, words: 2840, reactions: 50, links: 7, attachments: 14, questions: 20, activeDays: 14, threads: 25, quickResponses: 12 },
  { name: 'Александр Ботев', messages: 21, words: 520, reactions: 30, links: 0, attachments: 3, questions: 5, activeDays: 6, threads: 6, quickResponses: 8 },
  { name: 'Александр Щербаков', messages: 20, words: 650, reactions: 18, links: 0, attachments: 1, questions: 6, activeDays: 7, threads: 5, quickResponses: 8 },
  { name: 'Ирина Тарасова', messages: 12, words: 247, reactions: 18, links: 0, attachments: 3, questions: 1, activeDays: 5, threads: 3, quickResponses: 5 },
  { name: 'Алексей Яшуткин', messages: 8, words: 169, reactions: 7, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 1, quickResponses: 2 },
  { name: 'Николай Прохоров', messages: 7, words: 105, reactions: 8, links: 1, attachments: 2, questions: 1, activeDays: 1, threads: 2, quickResponses: 5 },
  { name: 'Александр Муляев', messages: 7, words: 141, reactions: 3, links: 0, attachments: 0, questions: 1, activeDays: 2, threads: 2, quickResponses: 4 },
  { name: 'Анастасия', messages: 6, words: 413, reactions: 25, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 3, quickResponses: 2 },
  { name: 'Юрий Деревенкин', messages: 6, words: 155, reactions: 4, links: 0, attachments: 0, questions: 1, activeDays: 3, threads: 2, quickResponses: 3 },
  { name: 'Михаил Хозяинов', messages: 6, words: 242, reactions: 10, links: 1, attachments: 1, questions: 0, activeDays: 1, threads: 1, quickResponses: 3 },
  { name: 'Сергей Тихонов', messages: 5, words: 92, reactions: 13, links: 0, attachments: 1, questions: 0, activeDays: 1, threads: 3, quickResponses: 1 },
  { name: 'Анна Крылач', messages: 5, words: 180, reactions: 6, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 1, quickResponses: 1 },
  { name: 'Евгения', messages: 4, words: 152, reactions: 5, links: 0, attachments: 0, questions: 0, activeDays: 3, threads: 2, quickResponses: 2 },
  { name: 'Никита Скрынников', messages: 3, words: 170, reactions: 3, links: 0, attachments: 0, questions: 0, activeDays: 2, threads: 2, quickResponses: 1 },
  { name: 'Алексей Зудов', messages: 2, words: 103, reactions: 8, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 2, quickResponses: 0 },
  { name: 'Маргарита Ларина', messages: 1, words: 2, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 1 },
  { name: 'Леонид К', messages: 1, words: 43, reactions: 0, links: 0, attachments: 0, questions: 0, activeDays: 1, threads: 0, quickResponses: 0 },
];

const dailyActivity = [
  { label: '19 мая', value: 1 }, { label: '20 мая', value: 31 }, { label: '21 мая', value: 14 },
  { label: '22 мая', value: 12 }, { label: '23 мая', value: 12 }, { label: '24 мая', value: 6 },
  { label: '25 мая', value: 8 }, { label: '26 мая', value: 3 }, { label: '27 мая', value: 26 },
  { label: '28 мая', value: 23 }, { label: '29 мая', value: 2 }, { label: '31 мая', value: 3 },
  { label: '1 июн.', value: 8 }, { label: '2 июн.', value: 5 }, { label: '4 июн.', value: 21 },
  { label: '5 июн.', value: 6 },
];

const hourlyActivity = [
  { label: '00', value: 8 }, { label: '01', value: 3 }, { label: '07', value: 2 },
  { label: '09', value: 2 }, { label: '10', value: 3 }, { label: '11', value: 4 },
  { label: '12', value: 8 }, { label: '13', value: 13 }, { label: '14', value: 14 },
  { label: '15', value: 18 }, { label: '16', value: 12 }, { label: '18', value: 9 },
  { label: '19', value: 8 }, { label: '20', value: 17 }, { label: '21', value: 16 },
  { label: '22', value: 13 }, { label: '23', value: 31 },
];

const summary = {
  chatTitle: 'Амбассадоры ЦКИИ',
  period: '19 мая 2026 - 5 июня 2026',
  visibleMembers: 42,
  activeAuthors: 17,
  messages: 181,
  words: 6244,
  reactions: 214,
  attachments: 26,
  links: 9,
  questions: 35,
  threads: 60,
  avgResponse: 25.4,
};

const viewLabels: Record<ViewMode, string> = {
  overview: 'Обзор',
  team: 'Участники',
  quality: 'Качество вклада',
  rhythm: 'Ритм',
};

const sortLabels: Record<SortKey, string> = {
  score: 'Индекс',
  messages: 'Сообщения',
  reactions: 'Реакции',
  activeDays: 'Стабильность',
  questions: 'Вопросы',
  resources: 'Ресурсы',
};

function resources(person: Participant) {
  return person.links + person.attachments;
}

function avgWords(person: Participant) {
  return person.words / person.messages;
}

function reactionRate(person: Participant) {
  return person.reactions / person.messages;
}

function consistency(person: Participant) {
  return Math.round((person.activeDays / 18) * 100);
}

function score(person: Participant) {
  return Math.round(
    person.messages * 1.5 +
      person.activeDays * 5 +
      person.threads * 3.5 +
      person.quickResponses * 3 +
      person.reactions * 0.6 +
      person.questions * 2 +
      resources(person) * 2,
  );
}

function MetricCard({ label, value, detail, tone = 'neutral' }: {
  label: string;
  value: string;
  detail: string;
  tone?: 'neutral' | 'good' | 'warn' | 'cool';
}) {
  return <section className={`metric-card metric-card-${tone}`}><span>{label}</span><strong>{value}</strong><small>{detail}</small></section>;
}

function BarChart({ data, compact = false }: { data: Array<{ label: string; value: number }>; compact?: boolean }) {
  const max = Math.max(...data.map((item) => item.value), 1);
  return <div className={compact ? 'bar-chart bar-chart-compact' : 'bar-chart'}>{data.map((item) => <div className="bar-row" key={item.label}><span className="bar-label">{item.label}</span><div className="bar-track"><span className="bar-fill" style={{ width: `${Math.max(4, (item.value / max) * 100)}%` }} /></div><strong>{item.value}</strong></div>)}</div>;
}

function Leaderboard({ title, kicker, rows, value }: {
  title: string;
  kicker: string;
  rows: Participant[];
  value: (person: Participant) => string;
}) {
  return <article className="panel"><div className="panel-heading"><div><p className="section-kicker">{kicker}</p><h2>{title}</h2></div></div><div className="quality-list">{rows.map((person, index) => <div className="quality-row" key={person.name}><span>{index + 1}</span><strong>{person.name}</strong><b>{value(person)}</b></div>)}</div></article>;
}

function App() {
  const [view, setView] = useState<ViewMode>('overview');
  const [sortKey, setSortKey] = useState<SortKey>('score');
  const [query, setQuery] = useState('');
  const [showQuiet, setShowQuiet] = useState(true);

  const rows = useMemo(() => participants
    .filter((person) => showQuiet || score(person) >= 65)
    .filter((person) => person.name.toLowerCase().includes(query.trim().toLowerCase()))
    .sort((a, b) => {
      if (sortKey === 'score') return score(b) - score(a);
      if (sortKey === 'resources') return resources(b) - resources(a);
      return b[sortKey] - a[sortKey];
    }), [query, showQuiet, sortKey]);

  const leader = participants[0];
  const activeRate = Math.round((summary.activeAuthors / summary.visibleMembers) * 100);
  const leaderShare = Math.round((leader.messages / summary.messages) * 100);
  const top3Share = Math.round((participants.slice(0, 3).reduce((sum, person) => sum + person.messages, 0) / summary.messages) * 100);

  return <main className="dashboard-shell">
    <header className="dashboard-header">
      <div><p className="section-kicker">MAX chat intelligence · обновлено 7 июня</p><h1>{summary.chatTitle}</h1><p className="header-copy">Вовлеченность, устойчивость участия и качество вклада команды. Метрики рассчитаны по доступной истории интерфейса MAX.</p></div>
      <aside className="snapshot-panel"><span>Период анализа</span><strong>{summary.period}</strong><small>{summary.messages} сообщений · {summary.visibleMembers} участника · ручное обновление</small></aside>
    </header>

    <section className="control-strip">
      <div className="segmented-control">{(Object.keys(viewLabels) as ViewMode[]).map((mode) => <button className={view === mode ? 'is-active' : ''} key={mode} onClick={() => setView(mode)} type="button">{viewLabels[mode]}</button>)}</div>
      <label className="search-box"><span>Поиск</span><input onChange={(event) => setQuery(event.target.value)} placeholder="Имя участника" type="search" value={query} /></label>
      <label className="toggle-row"><input checked={showQuiet} onChange={(event) => setShowQuiet(event.target.checked)} type="checkbox" /><span>Показывать периферию</span></label>
    </section>

    <section className="metrics-grid">
      <MetricCard detail={`${summary.activeAuthors} из ${summary.visibleMembers} участников писали`} label="Активная доля" tone="good" value={`${activeRate}%`} />
      <MetricCard detail="доля сообщений самого активного автора" label="Зависимость от лидера" tone="warn" value={`${leaderShare}%`} />
      <MetricCard detail="доля сообщений трех самых активных авторов" label="Концентрация топ-3" tone="cool" value={`${top3Share}%`} />
      <MetricCard detail={`${summary.reactions} реакций на ${summary.messages} сообщений`} label="Отклик" value={`${(summary.reactions / summary.messages).toFixed(1)}x`} />
    </section>

    {view === 'overview' && <section className="dashboard-grid">
      <article className="panel panel-large"><div className="panel-heading"><div><p className="section-kicker">Лидер вовлеченности</p><h2>Главный двигатель обсуждений</h2></div><span className="panel-badge">индекс {score(leader)}</span></div><div className="leader-card"><div className="leader-orbit"><span /><strong>{leader.name.slice(0, 1)}</strong></div><div><h3>{leader.name}</h3><p>{leader.messages} сообщений, {leader.threads} запущенных обсуждений, {leader.questions} вопросов и {leader.activeDays} активных дней.</p><div className="leader-stats"><span>{resources(leader)} ресурсов</span><span>{avgWords(leader).toFixed(0)} слов / сообщение</span><span>{leader.quickResponses} быстрых ответов</span></div></div></div></article>
      <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Топ участников</p><h2>Индекс вовлеченности</h2></div></div><BarChart data={[...participants].sort((a, b) => score(b) - score(a)).slice(0, 7).map((person) => ({ label: person.name, value: score(person) }))} /></article>
      <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Динамика</p><h2>Сообщения по дням</h2></div></div><BarChart data={dailyActivity} compact /></article>
      <article className="panel panel-insights"><div className="panel-heading"><div><p className="section-kicker">Изменения</p><h2>Что изменилось после прошлого среза</h2></div></div><ul className="insight-list"><li><strong>+27 сообщений.</strong><span>Обсуждение продолжилось 4-5 июня, основной прирост дала ветка о парсере и репутации амбассадоров.</span></li><li><strong>Появился новый активный участник.</strong><span>Николай Прохоров вошел в активное ядро и запустил обсуждение аналитики чата.</span></li><li><strong>Ядро стало шире.</strong><span>Александр Ботев и Александр Щербаков заметно увеличили вклад и поддержку диалога.</span></li><li><strong>Риск концентрации сохраняется.</strong><span>Топ-3 создают {top3Share}% сообщений, поэтому полезно вовлекать тихую часть группы.</span></li></ul></article>
    </section>}

    {view === 'team' && <section className="team-view"><div className="panel-heading team-heading"><div><p className="section-kicker">Команда</p><h2>Участники и вклад</h2></div><div className="sort-control">{(Object.keys(sortLabels) as SortKey[]).map((key) => <button className={sortKey === key ? 'is-active' : ''} key={key} onClick={() => setSortKey(key)} type="button">{sortLabels[key]}</button>)}</div></div><div className="table-shell"><table><thead><tr><th>Участник</th><th>Индекс</th><th>Сообщ.</th><th>Стабильность</th><th>Слов / сообщ.</th><th>Реакций / сообщ.</th><th>Вопросы</th><th>Ресурсы</th><th>Ответы</th></tr></thead><tbody>{rows.map((person) => <tr key={person.name}><td><div className="person-cell"><span>{person.name.slice(0, 1)}</span><strong>{person.name}</strong></div></td><td>{score(person)}</td><td>{person.messages}</td><td>{consistency(person)}%</td><td>{avgWords(person).toFixed(1)}</td><td>{reactionRate(person).toFixed(1)}</td><td>{person.questions}</td><td>{resources(person)}</td><td>{person.quickResponses}</td></tr>)}</tbody></table></div></section>}

    {view === 'quality' && <section className="dashboard-grid quality-grid">
      <Leaderboard kicker="Глубина" title="Развернутые сообщения" rows={[...participants].sort((a, b) => avgWords(b) - avgWords(a)).slice(0, 6)} value={(person) => `${avgWords(person).toFixed(0)} слов`} />
      <Leaderboard kicker="Полезные материалы" title="Делятся ресурсами" rows={[...participants].sort((a, b) => resources(b) - resources(a)).slice(0, 6)} value={(person) => `${resources(person)} шт.`} />
      <Leaderboard kicker="Диалог" title="Поддерживают обсуждение" rows={[...participants].sort((a, b) => b.quickResponses - a.quickResponses).slice(0, 6)} value={(person) => `${person.quickResponses} ответов`} />
      <Leaderboard kicker="Регулярность" title="Стабильно участвуют" rows={[...participants].sort((a, b) => b.activeDays - a.activeDays).slice(0, 6)} value={(person) => `${consistency(person)}% периода`} />
    </section>}

    {view === 'rhythm' && <section className="dashboard-grid rhythm-grid">
      <article className="panel panel-large"><div className="panel-heading"><div><p className="section-kicker">Тепловая карта</p><h2>Когда команда оживает</h2></div><span className="panel-badge">пик 23:00</span></div><div className="heatmap">{hourlyActivity.map((item) => <div className="heat-cell" key={item.label}><span style={{ opacity: 0.2 + item.value / 40 }} /><strong>{item.label}</strong><small>{item.value}</small></div>)}</div></article>
      <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Инициаторы</p><h2>Запускают обсуждения</h2></div></div><BarChart data={[...participants].sort((a, b) => b.threads - a.threads).slice(0, 8).map((person) => ({ label: person.name, value: person.threads }))} /></article>
      <article className="panel"><div className="panel-heading"><div><p className="section-kicker">Ответы</p><h2>Поддерживают диалог</h2></div></div><BarChart data={[...participants].sort((a, b) => b.quickResponses - a.quickResponses).slice(0, 8).map((person) => ({ label: person.name, value: person.quickResponses }))} /></article>
    </section>}
  </main>;
}

export default App;
