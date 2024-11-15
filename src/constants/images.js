import React from 'react';
// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
  Swal.fire({
          title: 'Do you want to play music in the background?',
          // text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d69a39',
          cancelButtonColor: '#d364',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
  }).then((result) => {
          if (result.isConfirmed) {
                  document.querySelector('.song').play();
                  resolveFetch().then(animationTimeline());
          } else {
                  resolveFetch().then(animationTimeline());
          }
  });
});

import Img1 from "../assets/pics/Screenshot_27-10-2024_15453_www.instagram.com.jpeg";
import Img2 from "../assets/pics/IMG_0646.jpg";
import Img3 from "../assets/pics/IMG_1751.jpg";
import Img4 from "../assets/pics/1.jpg";
import Img5 from "../assets/pics/IMG_0968.jpg";
import Img6 from "../assets/pics/IMG_0619.jpg";
import Img7 from "../assets/pics/IMG_0625.jpg";
import Img8 from "../assets/pics/IMG_1758.jpg";
import Img9 from "../assets/pics/2.jpeg";
import Img10 from "../assets/pics/IMG_1733.jpg";
import Img11 from "../assets/pics/Nathasya.jpg";
import Img12 from "../assets/pics/3.jpg";
// Impor musik
import music1 from "../assets/music/music1.mp3";
import music2 from "../assets/music/music2.mp3";
import music3 from "../assets/music/music3.mp3";
import music4 from "../assets/music/music4.mp3";
import music5 from "../assets/music/ssstik.io_1728975034206(1).mp3";
import music6 from "../assets/music/music6.mp3";
import music7 from "../assets/music/music7.mp3";
import music8 from "../assets/music/music8.mp3";
import music9 from "../assets/music/music9.mp3";
import music10 from "../assets/music/music10.mp3";
import music11 from "../assets/music/music11.mp3";
import music12 from "../assets/music/music12.mp3";

export const images = [
  { src: Img1, music: music1 },
  { src: Img2, music: music2 },
  { src: Img3, music: music3 },
  { src: Img4, music: music4 },
  { src: Img5, music: music5 },
  { src: Img6, music: music6 },
  { src: Img7, music: music7 },
  { src: Img8, music: music8 },
  { src: Img9, music: music9 },
  { src: Img10, music: music10 },
  { src: Img11, music: music11 },
  { src: Img12, music: music12 },
];
