import 'dayjs/locale/ru'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.locale('ru')

export const convertDate = (date) => dayjs(date, ['DD-MM-YYYY', 'D-MM-YYYY']).toDate()

export const isSameMonth = (monthOne, monthTwo2s) => dayjs(convertDate(monthOne)).isSame(convertDate(monthTwo2s), 'month')

export const isSameYear = (yearOne, yearTwo) => dayjs(convertDate(yearOne)).isSame(convertDate(yearTwo), 'year')

export const getMonth = (date) => dayjs(convertDate(date)).get('month')

export const getYear = (date) => dayjs(convertDate(date)).get('year')
