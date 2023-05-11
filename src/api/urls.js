const urls = {
  auth: {
    baseUrl: "/Identity",
    register: "/Identity/Register",
    verifyOTP: "/Identity/VerifyOTP",
    details: "/Identity/Basic",
    refreshToken: "/Identity/RefreshToken",
    createPIN: "/Identity/Pin",
    verifyPIN: "/Identity/VerifyPin",
    login: "/Identity/Login",
    logout: "/Identity/RevokeToken",
    forgotPassword: "/Identity/ForgotPassword",
    resetPassword: "/Identity/PasswordReset",
    resetPIN: "/Identity/ResetPin",
    updateTag: "/Identity/Tag",
    verifyTag: "/Identity/Tag",
  },
  fiat: {
    baseUrl: "/Fiat",
    worth: "/Fiat/Worth",
    initiateTransfer: "/Fiat/InitiateTransfer",
    transfer: "/Fiat/Transfer",
    history: "/Fiat/Transactions",
  },
  p2p: {
    getLocalBuyTrades: "/P2p/Fiat/Buy",
    getBuySwapTrades: "/P2p/Fiat/SwapBuy",
    getLocalSellTrades: "/P2p/Fiat/Sell",
    getSellSwapTrades: "/P2p/Fiat/SwapSell",
    getTrade: "/P2p/Fiat",
    initiateFiatBuy: "/P2p/Fiat/Buy",
    initiateFiatBuySwap: "/P2p/Fiat/SwapBuy",
    initiateFiatSell: "/P2p/Fiat/Sell",
    initiateFiatSellSwap: "/P2p/Fiat/SwapSell",
  },
  trader: {
    baseUrl: "/Trader",
  },
  trades: {
    getActiveTrades: "/Trades/Fiat/Requests",
    cancel: "/Trades/Cancel",
    addBank: "/Trades/Bank",
    getBanks: "/Trades/Banks",
    getPaymentMethods: "/Trades/PaymentMethods",
    removeBank: "/Trades/Bank",
  },
  payment: {
    sent: "/Payment/Sent",
    initiateReceive: "/Payment/InitiateRecieve",
    receive: "/Payment/Recieve",
  },
  kyc: {
    baseUrl: "Kyc",
  },
  messaging: {
    send: "/Messaging",
    getSessionMessages: "/Messaging",
  },
  notification: {
    getAll: "/Notification",
    markAsRead: "/Notification",
  },
  monnify: {
    banks: "/Monnify/Banks",
    verifyBank: "/Monnify/verifyBank",
  },
  system: {
    countries: "/System/Countries",
    currencies: "/System/Currencies",
    paymentMethods: "/System/PaymentMethod",
  },
};

export default urls;
