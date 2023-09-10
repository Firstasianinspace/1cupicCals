import { groupBy } from 'lodash';
import { isSameMonth, getMonth, getYear, isSameYear } from './date'

const convertStringToNumber = (str) => parseInt(str.replaceAll(/[ _-]/g,''))

// export const extractNumbers = (arr, type) => arr.filter((s) => s.type === type).map((s) => convertStringToNumber(s.amount))

export const sumTransactions = (arr, type) => {
  return arr.reduce((acc, record, index, array) => {
    if (record.type === type) {
      return {
        amount: (acc.amount || 0) + convertStringToNumber(record.amount),
        type,
        startDate: array.at(-1).date,
        endDate: array[0].date,
      }
    }
    return acc
  }, {})
}

export const getTransactionsByType = (arr, type) => arr.filter((s) => s.type === type)

export const getTransactionsByMonth = (arr, month) => {
  return arr.reduce((sum, record) => {
    if (isSameMonth(month, record.date)) {
      sum.push(record)
    }
    return sum
  }, [])
}

export const groupTransactionsByMonth = (arr, key) => groupBy(arr, ({ date })=> getYear(date));

export const betCount = (arr, type) => type === 'all' ? arr.length : arr.filter((s) => s.result === type).length

export const sumBets = (arr, result) => {
  return arr.reduce((sum, record) => {
    if (record.result === result) {
      return { amount: sum.amount + convertStringToNumber(record.total), type: result }
    }
    return sum
  }, { amount: 0, type: result })
}

export const calculateWinrate = (wins, losses) => Math.round(wins / (wins + losses) * 100)

export const formatPrice = (value) => {
  const fixedValue = value && Number(value).toFixed(2);

  return fixedValue
    ? fixedValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
    : fixedValue;
  // пример, на выходе: "1 091.21"
};
