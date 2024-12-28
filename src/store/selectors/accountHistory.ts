import { createSelector } from 'reselect';

export const getAccountHistoryData = state => state.accountHistory.data;
export const getAccountHistorySelector = createSelector([getAccountHistoryData], accountHistory => {
  const getProfit = (buyPrice, sellPrice) => {
    return sellPrice > buyPrice ? `+${(sellPrice - buyPrice).toFixed(2)}` : `-${(buyPrice - sellPrice).toFixed(2)}`;
  };

  let newAccountHistory: any = [];
  if (accountHistory.length > 0) {
    accountHistory.forEach(history => {
      if (history.activityName === 'Buy') {
        let matchedSellHistory = accountHistory.find(h => h.stockId === history.stockId && h.activityName === 'Sell');
        const mergeHistory = {
          stockName: history.stockName,
          amount: history.amount,
          entryPrice: history.priceValue,
          exitPrice: matchedSellHistory ? matchedSellHistory.priceValue : 'not sold',
          entryTime: history.time,
          exitTime: matchedSellHistory ? matchedSellHistory.time : 'not exited',
          profit: matchedSellHistory ? getProfit(history.priceValue * history.amount, matchedSellHistory.priceValue * history.amount) : '//'
        };
        newAccountHistory.push(mergeHistory);
      }
    });
  }

  return newAccountHistory;
});
