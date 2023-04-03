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
  trader: {
    baseUrl: "/Trader",
  },
  kyc: {
    baseUrl: "Kyc",
  },
  system: {
    countries: "/System/Countries",
  },
};

export default urls;
