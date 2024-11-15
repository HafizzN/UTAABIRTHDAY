import { Bell, ChevronDown, Search, Gift } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const menus = [
    { id: 1, title: "Home" },
    { id: 2, title: "Series" },
    { id: 3, title: "Movies" },
    { id: 4, title: "New and Popular" },
    { id: 5, title: "My List" },
  ];

  const profileMenus = [
    { id: 1, title: "Profile" },
    { id: 2, title: "Settings" },
    { id: 3, title: "Logout" },
  ];

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPopupVisible]);

  return (
    <>
      <header className="flex w-full bg-gradient-to-b from-[#000]/90 fixed top-0 z-20 justify-center">
        <main className="flex items-center justify-between w-full p-5 lg:py-7 lg:px-10 max-w-screen-2xl">
          <div className="left flex items-center gap-10">
            <a className="logo-container w-[100px]" href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="logo"
                className="w-full"
              />
            </a>
            <nav className="menus text-white lg:flex items-center gap-5 text-sm font-medium hidden">
              {menus.map((menu) => (
                <a
                  href="#"
                  key={menu.id}
                  className="hover:text-red-500 duration-300 ease-in-out"
                >
                  {menu.title}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="right flex items-center gap-5 text-white">
            <Search className="hover:text-red-500 duration-300 cursor-pointer" size={20} />
            <Bell className="hover:text-red-500 duration-300 cursor-pointer" size={20} />
            <div className="profile flex gap-2 items-center cursor-pointer group relative">
              <img
                src="https://i.pinimg.com/736x/d9/73/9c/d9739cd90a3dbbdb4258a2fe26f1ce7b.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <ChevronDown size={20} className="group-hover:rotate-180 duration-300" />
              <div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300 ease-in-out top-full bg-black/70 right-0 py-3 mt-3 rounded-md flex flex-col gap-2 text-sm font-medium">
                {profileMenus.map((menu) => (
                  <a
                    href="#"
                    className="hover:text-red-500 duration-300 ease-in-out px-10 whitespace-nowrap"
                    key={menu.id}
                  >
                    {menu.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </header>

      {/* Tombol Kado Melayang */}
      <button 
        onClick={() => setPopupVisible(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600/60 to-red-800/60 
        text-white rounded-full p-4 shadow-lg backdrop-blur-sm
        hover:from-red-600 hover:to-red-800 transition-all duration-300 animate-float z-30
        hover:scale-110 active:scale-95"
      >
        <Gift size={24} />
      </button>

      {/* Popup Ulang Tahun */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="animate-popup">
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-10 shadow-2xl max-w-md w-full
            border border-white/20">
              <div className="text-center space-y -6">
                <h2 className="text-4xl font-bold text-white">
                  Selamat Ulang Tahun! ke-
                </h2>
                
                <div className="relative">
                  <div className="text-[120px] font-bold text-white leading-none">
                    19
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center blur-sm opacity-50">
                    <span className="text-[120px] font-bold text-red-600/50">19</span>
                  </div>
                </div>
                
                <p className="text-xl text-white">
                  16 November 2024,Thasya udah 19 tahunn loooo inii. Selamat beranjak dewasa Thasyaaaaaa!
                </p>
                <button
                  onClick={() => setPopupVisible(false)}
                  className="bg-gradient-to-r from-red-600/80 to-red-800/80 
                  text-white font-bold py-3 px-8 rounded-full 
                  transform hover:scale-105 active:scale-95 transition-all duration-300 
                  hover:from-red-600 hover:to-red-800 backdrop-blur-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;