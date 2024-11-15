import React, { useEffect, useState, useRef } from 'react';
import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/188.jpg";
import { Info } from "lucide-react";
import { FaPlay, FaPause } from "react-icons/fa6";
import Modal from "./components/Modal";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";
import videoSrc from './assets/video/video.mp4';
import music from './assets/music/image30.mp3';
import backgroundMusic from './assets/music/about you.mp3'; 

const App = () => {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [openMusicModal, setOpenMusicModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music)); // Initialize audio with the music file
  const backgroundMusicRef = useRef(new Audio(backgroundMusic));
  const [showAudioPermissionPopup, setShowAudioPermissionPopup] = useState(true);
  const requestAudioPermission = async () => {
    try {
      await backgroundMusicRef.current.play();
      setShowAudioPermissionPopup(false); // Sembunyikan pop-up jika berhasil
    } catch (error) {
      console.log("Autoplay failed:", error);
      // Jika gagal, biarkan pop-up tetap ditampilkan
    }
  };
  const handleAudioPermission = () => {
    requestAudioPermission();
  };
  useEffect(() => {
    // Meminta izin audio saat komponen dimuat
    // Pop-up ditampilkan langsung
  }, []);
  const [photoDetails] = useState({
    1: {
      title: "The About You",
      description: "di ceritaku yang membosankan ini, semoga kamu tetap betah jadi tokoh utamanya",
      date: "26 October 2024"
    },
    2: {
      title: "Sempurna",
      description: "dia bernilai 10/10 bukan, tak terhingga tepatnya ",
      date: "28 October 2024"
    },
    3: {
      title: "Old Love",
      description: "diperjalanan yang panjang ini, jangan jadi milik siapapun dulu, ya?",
      date: "1 November 2024"
    },
    4: {
      title: "Swim",
      description: "Kita hanya butuh satu orang yang bisa memenangkan satu orang",
      date: "1 November, 2024"
    },
    5: {
      title: "Its You",
      description: "indah hanyalah kata, kamu wujudnya",
      date: "4 November 2024"
    },
    6: { 
      title: "No.1 Party Anthem",
      description: "Berkali kali ku tanyakan pada semesta, mengapa aku begitu mengagumi ciptaannya yang satu ini. barangkali perlu ku tanyakan juga mengapa kamu di izinkan turun ke bumi",
      date: "5 November 2024"
    },
    7: {
      title: "Birds Of A Feather",
      description: "dan diantara keriuhan bumi, izinkan aku untuk mengagumimu lebih lama",
      date: "6 November 2024"
    },
    8: {
      title: "Strong",
      description: "Dunianya, petualangannya, dan karakternya -aku suka semua",
      date: "7 November, 2024"
    },
    9: {
      title: "Cinnamon Girl",
      description: "senang bisa melihatmu dari jarak yang paling jauh, dari sisi bumi yang tidak terlihat darimu, senang atas senangmu juga, semoga semua darimu, tidak kekurangan apapun",
      date: "9 November 2024"
    },
    10: {
      title: "Anchor",
      description: "i promise you, i will always support you protect you care you and love you you are the special person to whom i want to spend whole life. ",
      date: "10 November 2024"
    },
    11: {
      title: "The Night Is Still young",
      description: "I'm too late to be ur first love, but trust me I'll do anything to be your last",
      date: "13 November 2024"
    },
    12: {
      title: "A Year A Go",
      description: "kalau hubungan kita lagi salah paham, apiss mau kita perbaiki yaa, kalau misskom juga. jangan sampe asing yaa, apiss sayang bangett ama thasyaa",
      date: "14 November 2024"
    },
    // Add more photo details as needed
  });
  
  useEffect(() => {
    if (openVideoModal || openInfoModal || openMusicModal) {
      backgroundMusicRef.current.pause();
      setIsPlaying(false);
    } else {
      backgroundMusicRef.current.play();
      setIsPlaying(true);
    }
  }, [openVideoModal, openInfoModal, openMusicModal]);

  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${
          variant === "primary" ? "bg-white text-black" : "bg-white/30 text-white"
        }`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();

    const playBackgroundMusic = async () => {
      try {
        backgroundMusicRef.current.loop = true;
        await backgroundMusicRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay failed:", error);
      }
    };

    playBackgroundMusic();

    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current.currentTime = 0;
      }
    };
  }, []);
 
  const handlePlayClick = () => {
    setOpenVideoModal(true);
  };

  const handleVideoEnd = () => {
    setOpenVideoModal(false);
  };

  const handleMoreInfoClick = () => {
    // Play the music when the info modal is opened
    audioRef.current.pause(); // Pause any currently playing audio
    audioRef.current.currentTime = 0; // Reset to the beginning
    audioRef.current = new Audio(music); // Create a new audio instance
    audioRef.current.play(); // Play the music
    setOpenInfoModal(true); // Open the info modal
  };

  const closeInfoModal = () => {
    setOpenInfoModal(false);
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the music when closing the modal
      audioRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleImageClick = (image) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  
    setSelectedImage(image.src);
    setSelectedMusic(image.music);
    
    audioRef.current = new Audio(image.music);
    audioRef.current.play();
    setIsPlaying(true);
    setOpenMusicModal(true);
  };

  const closeMusicModal = () => {
    setOpenMusicModal(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    handleImageClick(images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.src === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    handleImageClick(images[nextIndex]);
  };

  const toggleBackgroundMusic = () => {
    if (isPlaying) {
      backgroundMusicRef.current.pause();
    } else {
      backgroundMusicRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const MusicControl = () => (
    <button 
      onClick={toggleBackgroundMusic}
      className="fixed bottom-3 right-5 z-50 p-3 rounded-full bg-white/20 backdrop-blur-sm"
    >
      {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white" />}
    </button>
  );
  const CardImage = ({ src, idx, onClick }) => {
    return (
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
        data-aos="fade-up"
        data-aos-duration={1000 + (idx * 100)}
        onClick={onClick}
      >
        <img
          src={src}
          alt={`Memory ${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-4">
            <h4 className="text-white font-semibold">Memory {idx + 1}</h4>
            <p className="text-gray-200 text-sm">Click to view details</p>
          </div>
        </div>
      </div>
    );
  };
  const VolumeControl = () => {
    const handleVolumeChange = (e) => {
      backgroundMusicRef.current.volume = e.target.value;
    };
  
    return (
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.1"
        defaultValue="1"
        onChange={handleVolumeChange}
        className="fixed bottom-5 right-20 z-50 w-40 appearance-none bg-white/20 rounded-full"
      />
    );
  };
  return (
    <main className="min-h-screen bg-black">
      {showAudioPermissionPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-500 bg-opacity-50 p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold text-white">Izin Audio Diperlukan</h2>
            <p className="mt-2 text-white">
              thasya klik yaa tombol dibawah ini biar musiknya kedengeran .
            </p>
            <button 
              className="mt-4 p-2 bg-red-600 text-white rounded hover:bg-red-500 transition duration-300 shadow-md"
              onClick={handleAudioPermission}
            >
              izin audio
            </button>
          </div>
        </div>
      )}

      
      <Navbar />
      <MusicControl />
      <VolumeControl />
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white">
          <h1 className="lg:text-4xl text-2xl font-bold lg:w-[50%]" data-aos="fade-right" data-aos-duration="1000">
          How to say Happy Birthday to people I admire and care about .
          </h1>
          <p className="text-sm lg:text-base lg:w-[40%]" data-aos="fade-right" data-aos-duration="1200">
          maybe this is not good enough, there are still many things that need to be improved, but this is one form of apis expression that apis tries for thasya, hopefully thasya likes it. apis hopes that someday we will have a better story. But for now, this is how Apis says happy birthday to Thasyaa.
          </p>
          <div className="actions flex items-center gap-3" data-aos="fade-right" data-aos-duration="1400">
            <Button variant="primary" onClick={handlePlayClick}>
              <FaPlay />
              Play
            </Button>
            <Button variant="secondary" onClick={handleMoreInfoClick}play music >
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>

      
       {/* Modals */}
      {openVideoModal && (
        <Modal setOpenModal={setOpenVideoModal} openModal={openVideoModal}>
          <div className="flex flex-col justify-center items-center">
            <video controls autoPlay className="max-w-full" onEnded={handleVideoEnd}>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal>
      )}

{openInfoModal && (
        <Modal setOpenModal={closeInfoModal} openModal={openInfoModal}>
          <div className="max-w-4xl mx-auto max-h-[100vh] overflow-y-auto">
            {/* Header Image */}
            <div
              className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] rounded-t-xl overflow-hidden sticky top-0 z-10"
              style={{
                backgroundImage: `url(${heroImg})`,
                backgroundPosition: "center 40%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50" />
              <div className="absolute bottom-0 w-full p-6 lg:p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  Happy Birthday, You
                </h1>
                <p className="text-gray-300 text-lg">
                  Message from Apis the one who loves thasya
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="bg-black rounded-b-xl">
              <div className="p-6 lg:p-8 space-y-6 text-white">
                {/* Letter Section */}
                <div className="space-y-4">
                  <p className="text-xl font-semibold text-gray-300">
                    Dear You,
                  </p>
                  
                  <p className="leading-relaxed text-gray-300">
                  haloo Thasya, selamat ulang tahun yaa, thasya hari ini udah 19 tahun tau. terimakasih yaa udah ngenalin banyak hal ama apiss, mungkin kita belom kenal terlalu lama, tapi apiss udah netapin tujuan buat thasya tauu apis suka thasya, apis sayang thasya. apiss bikin ini jauh sebelum thasya ulang tahun tepatnya project ini dimulai dari bulan oktober dan akan terus berlanjut sampai hari ini mungkin thasya bisa tanya salma gimana apis bikin ini. apis harap pas thasya liat ini hubungan kita masih baik baik aja yaaa. 
                  </p>

                  <p className="leading-relaxed text-gray-300">
                  di hari yang istimewa ini, apiss hanya ingin nyampein harapan sederhana apiss buat thasya semoga dengan bertambahnya usia thasya, semakin sempurna juga iman thasya, rajin ibadahnya!! semoga selalu diberi Kesehatan, Panjang umur, Bahagia selalu, berbakti terus ama ibu ama ayah juga, dilancarkan rezekinya, serta segala do'a dan cita cita yang thasya pengen terwujud dan dimudahkan dalam segala urusan aamiin,, sekarang thasya semakin dewasa yang dimana thasya tau mana yang terbaik maupun yang ngga diri thasya, jadi lebih baik lagi yaa walaupun kamu udah perfect, jangan pernah cape berbuat baik yaaa. .
                  </p>

                  <p className="leading-relaxed text-gray-300">
                  semoga segala keinginan thasya tercapai yaaa, sehatt terus yaaa, jangan terlalu dipaksain disemester 3 ini emang banyak cobaan, kalau ada apa apa apiss bisa bantu juga, semangatt terus yaa mungkin thasya bakal bilang "apalah apis ini nyuruh semangat teruss" tapi  thasya harus beneran semangat tauu. bahagia terus yaaa, tetap jadi diri thasya, semua orang menaruh kagum ke thasya tau termasuk apiss, apiss sayang thasyaa banyak banyak
                  </p>
                </div>

                {/* Wishes Section */}
                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-200">
                    Birthday Wishes for You:
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 ">❋</span>
                      May every moment of your special day be filled with the same joy you bring to others
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500">❋</span>
                      May your dreams continue to flourish and your heart remain as beautiful as it is
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500">❋</span>
                      May life's blessings find their way to you in abundance
                    </li>
                  </ul>
                </div>

                {/* Signature */}
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-300">
                    With warmest wishes and deepest admiration,
                  </p>
                  <p className="text-xl font-script mt-2 text-blue-500">
                    Apis
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Someone who sees your light shine from afar
                  </p>
                </div>

                {/* Footer Quote */}
                <div className="mt-8 text-center italic text-gray-400">
                  "kalau thasya udah lihat ini kasihh masukan yaaa. kasih rating juga. semoga thasya suka. Terimakasih yaaa"
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {openMusicModal && (
        <Modal setOpenModal={closeMusicModal} openModal={openMusicModal}>
          <div className="relative max-w-4xl mx-auto bg-black rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row h-[80vh]">
              {/* Image Section */}
              <div className="w-full md:w-2/3 h-full relative group">
                <img
                  src={selectedImage}
                  alt="Selected Memory"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black opacity-60"></div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/3 bg-black p-6 flex flex-col justify-between">
              <div className="space-y-4">
               <h2 className="text-2xl font-bold text-white">
               {photoDetails[images.findIndex(img => img.src === selectedImage) + 1]?.title || "Beautiful Memory"}
              </h2>
              <p className="text-gray-400 text-sm">
                {photoDetails[images.findIndex(img => img.src === selectedImage) + 1]?.date || "2024"}
                </p>
               <p className="text-gray-300">
             {photoDetails[images.findIndex(img => img.src === selectedImage) + 1]?.description || "A moment to remember"}
       </p>
  </div>

                {/* Music Controls */}
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-white h-full w-1/3 rounded-full transition-all duration-300"></div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button onClick={handlePrevious} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button 
                        className="p-4 rounded-full bg-white hover:bg-gray-200 transition-colors group"
                        onClick={togglePlay}
                      >
                        {isPlaying ? 
                          <FaPause className="text-black text-xl group-hover:scale-110 transition-transform" /> : 
                          <FaPlay className="text-black text-xl group-hover:scale-110 transition-transform" />
                        }
                      </button>

                      <button onClick={handleNext} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">love youu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Image Grid */}
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore: Us</h3>
          <section className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage 
                src={image.src} 
                key={idx} 
                idx={idx} 
                music={image.music} 
                onClick={() => handleImageClick(image)} 
              />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default App;