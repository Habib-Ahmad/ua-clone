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
  },
  fiat: {
    baseUrl: "/Fiat",
    worth: "/Fiat/Worth",
  },
  p2p: {
    getLocalTrades: "/P2p/Fiat/Buy",
    getSwapTrades: "/P2p/Fiat/SwapBuy",
    getTrade: "/P2p/Fiat",
    initiateFiatBuy: "/P2p/Fiat/Buy",
    initiateFiatBuySwap: "/P2p/Fiat/SwapBuy",
  },
  trader: {
    baseUrl: "/Trader",
  },
  trades: {
    getActiveTrades: "/Trades/Fiat/Requests",
    cancel: "/Trades/Cancel",
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
  system: {
    countries: "/System/Countries",
    currencies: "/System/Currencies",
  },
};

export default urls;