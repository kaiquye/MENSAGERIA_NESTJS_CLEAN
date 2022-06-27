import { tz } from 'moment-timezone';

export function dateTimeNow() {
  try {
    const now = tz('America/Sao_Paulo');
    const date = now.format('YYYY-MM-DD HH:mm:ss');
    return date;
  } catch (e) {
    return 0;
  }
}
