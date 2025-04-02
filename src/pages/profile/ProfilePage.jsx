import { useState } from "react";
import ProfileSection from "../../components/profile/ProfileSection";
import AccountSetting from "../../components/profile/AccountSetting";
import OrderHistory from "../../components/profile/OrderHistory";
import NavProfile from "../../components/profile/NavProfile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProfilePage() {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  function handlerOpenSetting() {
    isOpenSetting ? setIsOpenSetting(false) : setIsOpenSetting(true);
  }

  const [bar, setBar] = useState(true);
  function detailsAcc() {
    setBar(true);
  }
  function orderHistory() {
    setBar(false);
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-8 p-4 relative max-w-xl mx-auto lg:grid-cols-12 lg:w-[95%] lg:max-w-none">
        <NavProfile
          onDetailsClick={detailsAcc}
          onOrderHistory={orderHistory}
          bar={bar}
        />
        <ProfileSection onButtonClick={handlerOpenSetting} bar={bar} />
        <AccountSetting state={isOpenSetting} bar={bar} />
        <OrderHistory bar={bar} />
      </div>
      <Footer />
    </>
  );
}
