/**
 * 通用工具函数库
 */

/**
 * 获取当前运行环境
 * @returns 当前运行的平台标识
 */
export const getPlatform = (): string => {
  if (typeof uni !== 'undefined') {
    return uni.getSystemInfoSync().platform;
  }
  return 'unknown';
};

/**
 * 格式化日期
 * @param date 日期对象
 * @param format 格式化模板，如 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化后的日期字符串
 */
export const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const padZero = (num: number): string => num < 10 ? `0${num}` : `${num}`;
  
  return format
    .replace('YYYY', `${year}`)
    .replace('MM', padZero(month))
    .replace('DD', padZero(day))
    .replace('HH', padZero(hours))
    .replace('mm', padZero(minutes))
    .replace('ss', padZero(seconds));
};

/**
 * 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖处理后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number): ((...args: Parameters<T>) => void) => {
  let timer: number | null = null;
  
  return function(this: any, ...args: Parameters<T>): void {
    if (timer) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay) as unknown as number;
  };
};

export default {
  getPlatform,
  formatDate,
  debounce
}; 