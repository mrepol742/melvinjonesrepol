/**
 * Get the time ago from a given timestamp.
 *
 * @param timestamp The timestamp to get the time ago from.
 * @returns The time ago string, or `null` if the timestamp is not provided.
 */
export const getTimeAgo = (timestamp: number) => {
  if (!timestamp) return null;

  const now = Date.now();
  const diffSeconds = Math.floor(now / 1000 - timestamp);

  if (diffSeconds < 60)
    return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60)
    return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24)
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12)
    return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;

  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
};

/**
 * Converts minutes to hours, rounded to 2 decimal places.
 *
 * @param minutes The number of minutes to convert.
 * @returns The number of hours as a string, e.g. `1.50`.
 */
export const toHours = (minutes: number) => (minutes / 60).toFixed(2);

/**
 * Formats a duration in minutes into a human-readable string.
 *
 * @param minutes The number of minutes to format.
 * @returns The formatted duration string, e.g. `2 days 3 hrs 45 mins`.
 */
export const formatDuration = (minutes: number): string => {
  if (!minutes || minutes <= 0) return "None";

  const totalSeconds = Math.round(minutes * 60);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: string[] = [];

  if (days) parts.push(`${days} ${days === 1 ? "day" : "days"}`);
  if (hours) parts.push(`${hours} ${hours === 1 ? "hr" : "hrs"}`);
  if (mins) parts.push(`${mins} ${mins === 1 ? "min" : "mins"}`);
  if (seconds) parts.push(`${seconds} ${seconds === 1 ? "sec" : "secs"}`);

  return parts.join(" ");
};
