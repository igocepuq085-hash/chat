import type { Participant } from './chatDatabase';

export type RatingKey = 'impact' | 'engagement' | 'quality' | 'initiative' | 'support' | 'influence' | 'stability';
export type ParticipantRatings = Record<RatingKey, number>;

const max = { messages: 69, activeDays: 14, threads: 25, questions: 20, quickResponses: 12, reactions: 50, reactionRate: 4.2, avgWords: 69, resources: 21 };
const cap = (value: number) => Math.min(100, Math.round(value));
const ratio = (value: number, upper: number) => cap((value / upper) * 100);

export const resources = (person: Participant) => person.links + person.attachments;
export const avgWords = (person: Participant) => person.words / person.messages;
export const reactionRate = (person: Participant) => person.reactions / person.messages;
export const consistency = (person: Participant) => ratio(person.activeDays, 18);

export function ratings(person: Participant): ParticipantRatings {
  const engagement = cap(ratio(person.messages, max.messages) * 0.5 + ratio(person.activeDays, max.activeDays) * 0.3 + ratio(person.quickResponses, max.quickResponses) * 0.2);
  const quality = cap(ratio(avgWords(person), max.avgWords) * 0.4 + ratio(resources(person), max.resources) * 0.3 + ratio(reactionRate(person), max.reactionRate) * 0.3);
  const initiative = cap(ratio(person.threads, max.threads) * 0.6 + ratio(person.questions, max.questions) * 0.4);
  const support = cap(ratio(person.quickResponses, max.quickResponses) * 0.6 + ratio(person.reactions, max.reactions) * 0.4);
  const influence = cap(ratio(person.reactions, max.reactions) * 0.6 + ratio(person.threads, max.threads) * 0.4);
  const stability = ratio(person.activeDays, max.activeDays);
  const impact = cap(quality * 0.35 + engagement * 0.25 + support * 0.2 + stability * 0.1 + influence * 0.1);
  return { impact, engagement, quality, initiative, support, influence, stability };
}

export const ratingLabels: Record<RatingKey, string> = { impact: 'Командный вклад', engagement: 'Вовлеченность', quality: 'Качество', initiative: 'Инициатива', support: 'Поддержка', influence: 'Влияние', stability: 'Стабильность' };

export function role(person: Participant) {
  const personRatings = ratings(person);
  if (personRatings.impact < 14) return 'Наблюдатель';
  const options: Array<[RatingKey, string]> = [['initiative', 'Инициатор'], ['quality', 'Эксперт'], ['support', 'Поддержка команды'], ['influence', 'Центр влияния'], ['stability', 'Стабильное ядро'], ['engagement', 'Драйвер обсуждений']];
  return options.sort((a, b) => personRatings[b[0]] - personRatings[a[0]])[0][1];
}

export function report(person: Participant) {
  const personRatings = ratings(person);
  const ranked = (Object.keys(personRatings) as RatingKey[]).filter((key) => key !== 'impact').sort((a, b) => personRatings[b] - personRatings[a]);
  const strengths = ranked.slice(0, 2).map((key) => ratingLabels[key]);
  const weakest = ranked.at(-1) ?? 'engagement';
  const recommendations: Record<Exclude<RatingKey, 'impact'>, string> = { engagement: 'Подключаться к обсуждениям чаще и распределять активность по неделе.', quality: 'Добавлять больше контекста, выводов и полезных материалов.', initiative: 'Чаще задавать вопросы и запускать новые содержательные темы.', support: 'Быстрее отвечать коллегам и поддерживать их сообщения реакциями.', influence: 'Формулировать сообщения так, чтобы они запускали продолжение диалога.', stability: 'Сделать участие более регулярным, а не концентрировать его в одном дне.' };
  return { role: role(person), strengths, recommendation: recommendations[weakest as Exclude<RatingKey, 'impact'>], ratings: personRatings };
}
