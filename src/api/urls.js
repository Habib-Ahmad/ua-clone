const urls = {
  auth: {
    register: "/Identity/Register",
    verifyOTP: "/Identity/VerifyOTP",
    details: "/Identity/Basic",
    refreshToken: "/Identity/RefreshToken",
    createPIN: "/Identity/Pin",
    login: "/Identity/Login",
    logout: "/Identity/RevokeToken",
    forgotPassword: "/Identity/ForgotPassword",
    resetPassword: "/Identity/PasswordReset",
  },
  system: {
    countries: "/System/Countries",
  },
};

export default urls;
