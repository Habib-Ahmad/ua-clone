import Avatar from "../../../assets/Avatar";
import Card from "../../../assets/Card";
import Color from "../../../assets/Color";
import Contact from "../../../assets/Contact";
import Invite from "../../../assets/Invite";
import Notify from "../../../assets/Notify";
import Security from "../../../assets/Security";
import { colors } from "../../../utils";

export const data = [
  {
    name: "Personal Info",
    to: "PersonalInfoScreen",
    icon: <Avatar />,
  },
  // {
  //   name: "Contacts",
  //   to: "ContactScreen",
  //   icon: <Contact />,
  // },
  {
    name: "Banks",
    to: "BanksScreen",
    icon: <Card />,
  },
  // {
  //   name: "Bank and Cards",
  //   to: "ManageBanksScreen",
  //   icon: <Card />,
  // },
  // {
  //   name: "Colour Settings",
  //   to: "ColorSettingScreen",
  //   icon: <Color />,
  // },
  {
    name: "Become a Merchant",
    to: "BecomeAMerchantScreen",
    icon: <Security color={colors.white} />,
  },
  {
    name: "KYC Verification",
    to: "KYCScreen",
    icon: <Security />,
  },
  {
    name: "Active Trades",
    to: "ActiveTradesScreen",
    icon: <Security />,
  },
  {
    name: "Change Pin",
    to: "ForgotPINScreen",
    icon: <Security />,
  },
  // {
  //   name: "Report",
  //   to: "ReportScreen",
  //   icon: <Security />,
  // },
  {
    name: "Privacy Policy",
    to: "PolicyScreen",
    icon: <Security />,
  },
  // {
  //   name: "Invite Friends",
  //   to: "",
  //   icon: <Invite />,
  // },
];
