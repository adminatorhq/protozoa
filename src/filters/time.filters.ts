// import dateformat from 'dateformat';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';

export class TimeFilters {
  static formatTime(time: Date, type?: 'L' | 'G'): string {
    if (!time) {
      return 'N/A';
    }
    if (type === 'L') {
      return format(time, 'do MMM yyyy, h:MM aa');
    }
    if (type === 'G') {
      return format(time, 'do MMM yyyy');
    }
    return format(time, 'MMMM do, yyyy');
  }

  static timeAgo(time: Date): string {
    if (!time) {
      return '';
    }
    return distanceInWordsToNow(time) + ' ago'; // :eyes
  }
}
