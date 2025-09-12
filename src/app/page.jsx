"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaSearch,
  FaUserCircle,
  FaVolumeUp,
  FaBars,
  FaTimes,
  FaSpotify,
} from "react-icons/fa";
import { LuFolderHeart } from "react-icons/lu";
import { GoMoveToTop } from "react-icons/go";
import { BsSoundwave } from "react-icons/bs";

// Sample sections data (each section has tracks with cover, title, artist, audio)
const sectionsData = [
  {
    name: "My Favorites",
    icons: <LuFolderHeart />,
    tracks: [
      {
        id: 1,
        cover: "https://behmelody.in/wp-content/uploads/2022/12/Ed-Sheeran.jpg",
        title: "Shape Of You",
        artist: "Ed Sheeran",
        audio:
          "https://www.dl.sarpmusic.com/music/Ed%20Sheeran%20-%20Shape%20of%20You.mp3",
      },
      {
        id: 2,
        cover:
          "https://ahaang.com/wp-content/uploads/2021/07/The-Kid-Laroi-Stay.jpg",
        title: "Stay",
        artist: "The Kid Laroi & Justin Bieber",
        audio:
          "https://dl.dibasmusic.com/song/1401/06/The-Kid-Laroi-Justin-Bieber%C2%A0-Stay-dibamusics-320.mp3",
      },
      {
        id: 3,
        cover:
          "https://m.media-amazon.com/images/I/61fx0+3qUGL._UF894,1000_QL80_.jpg",
        title: "Lovely",
        artist: "Billie Eilish",
        audio:
          "https://files.musicfeed.ir/2020/04/Billie-Eilish-Khalid-lovely.mp3",
      },
      {
        id: 4,
        cover:
          "https://cdn-images.dzcdn.net/images/cover/a26e476def6a65078e518e95a961fd7f/1900x1900-000000-81-0-0.jpg",
        title: "Dancin",
        artist: "aaron smith",
        audio:
          "https://files.musicfeed.ir/dir/2020/9/Aaron%20Smith%20-%20Dancin%20(KRONO%20Remix).mp3",
      },
      {
        id: 5,
        cover: "https://pbs.twimg.com/media/E8Xr85WXEAEeyJw.jpg",
        title: "Nothing Else Matters",
        artist: "Metallica",
        audio:
          "https://files.musicfeed.ir/2019/10/Metallica-Nothing-Else-Matters.mp3",
      },
      {
        id: 6,
        cover:
          "https://files.musicfeed.ir/2023/06/benson_boone_beautiful_things.jpg",
        title: "Beautiful Things",
        artist: "Benson Boone",
        audio:
          "https://files.musicfeed.ir/2023/06/benson_boone_beautiful_things.mp3",
      },
      {
        id: 7,
        cover:
          "https://i1.sndcdn.com/artworks-FU5DQ35C9XXfJky4-99dblw-t500x500.jpg",
        title: "Stars",
        artist: "Aemia",
        audio:
          "https://musicviral.musitraf.com/Music/03-09/Aemia%20-%20Stars.mp3",
      },
      {
        id: 8,
        cover:
          "https://ts20.tarafdari.com/contents/user739775/content-sound/album_1752855153499.png",
        title: "From",
        artist: "Aemia",
        audio:
          "https://dl6.topsongs.ir/music/s/supload/supload-wugdvveggasj-xgmwafobufln.mp3",
      },
      {
        id: 9,
        cover:
          "https://mir-s3-cdn-cf.behance.net/project_modules/fs/534a4b67446897.5b3a616e7fe85.jpg",
        title: "Rock Star",
        artist: "Post Malone",
        audio: "https://dl.melovy.ir/2022/11/Post-Malone-Rockstar1.mp3",
      },
      {
        id: 11,
        cover:
          "https://cdn11.bigcommerce.com/s-lj8wphc2lt/products/0/images/1646/godfather-cover__18165.1669740310.1280.1280.jpg?c=2&_gl=1*13qsnbk*_ga*MTczNDMyMDMwNi4xNjY4NDU2ODA4*_ga_WS2VZYPC6G*MTY2OTczNzYxNC44LjEuMTY2OTc0MDMzOS40MS4wLjA.",
        title: "GodFather",
        artist: "Nino Rota",
        audio:
          "https://dl.musicdel.ir/Music/1401/09/unknown_artist_godfather_instrumenal.mp3",
      },
      {
        id: 12,
        cover:
          "https://upload.wikimedia.org/wikipedia/en/c/ca/Interstellar_soundtrack_album_cover.jpg",
        title: "Cornfield Chase",
        artist: "Hanz Zimer",
        audio:
          "https://dl.musicgeek.ir/soundtrack/film/Hans%20Zimmer%20-%20Cornfield%20Chase%20-%20musicgeek.ir.mp3",
      },
      {
        id: 13,
        cover:
          "https://images.genius.com/aa1be9281bae0e2d871f96652700343f.300x300x1.jpg",
        title: "GTA |||",
        artist: "Craig Conner",
        audio:
          "https://irsv.upmusics.com/dlw/Unknown%20artist%20-%20GTA%20Songs%20(0).mp3",
      },
      {
        id: 14,
        cover:
          "https://i.scdn.co/image/ab67616d0000b2733175d0e037e2f83d9d03719e",
        title: "GTA San Andreas",
        artist: "Michael Hunter",
        audio:
          "https://irsv.upmusics.com/dlw/Unknown%20artist%20-%20GTA%20Songs%20(8).mp3",
      },
      {
        id: 15,
        cover: "https://i1.sndcdn.com/artworks-dv6XQx0FDehs-0-t500x500.jpg",
        title: "Welcome To NewYork",
        artist: "Taylor Swift",
        audio:
          "https://s15.uupload.ir/files/foxlyrics/mp3/2023-10/Welcome%20To%20New%20York%20(Taylor%20s%20Version)%20(320).mp3",
      },
      {
        id: 16,
        cover:
          "https://people.com/thmb/w3oNfjoS0Jf419ncvTpMA_MX-gY=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(676x414:678x416)/Taylor-Swift-TTPD-041824-5-09cd31d7e0264db38fa9ca8f970c7292.jpg",
        title: "Down Bad",
        artist: "Taylor Swift",
        audio:
          "https://s31.uupload.ir/files/foxlyrics/mp3/2024-4/04%20Down%20Bad.m4a",
      },
      {
        id: 17,
        cover:
          "https://people.com/thmb/w3oNfjoS0Jf419ncvTpMA_MX-gY=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(676x414:678x416)/Taylor-Swift-TTPD-041824-5-09cd31d7e0264db38fa9ca8f970c7292.jpg",
        title: "So Long London",
        artist: "Taylor Swift",
        audio:
          "https://s31.uupload.ir/files/foxlyrics/mp3/2024-4/05%20So%20Long,%20London%20-%20Taylor%20Swift%20(320).mp3",
      },
      {
        id: 18,
        cover:
          "https://people.com/thmb/w3oNfjoS0Jf419ncvTpMA_MX-gY=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(676x414:678x416)/Taylor-Swift-TTPD-041824-5-09cd31d7e0264db38fa9ca8f970c7292.jpg",
        title: "Guilty as Sin",
        artist: "Taylor Swift",
        audio:
          "https://s31.uupload.ir/files/foxlyrics/mp3/2024-4/09%20Guilty%20as%20Sin%20-%20Taylor%20Swift%20(320).mp3",
      },
    ],
  },
  {
    name: "Top Hits",
    icons: <GoMoveToTop />,
    tracks: [
      {
        id: 1,
        cover:
          "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
        title: "Blinding Lights",
        artist: "The Weeknd",
        audio:
          "https://dl.dibasmusic.com/dl/1401/11/The-Weeknd-Blinding-Lights-dibamusics-320.mp3",
      },
      {
        id: 2,
        cover:
          "https://albumart.publicradio.org/mb/5f/5f898a60-acc5-48fc-a11b-2926084c0924_f1a4.jpg",
        title: "Midnight City",
        artist: "M83",
        audio: "https://files.musicfeed.ir/2020/05/M83-Midnight-City.mp3",
      },
      {
        id: 3,
        cover:
          "https://m.media-amazon.com/images/M/MV5BZjMwNjI4ODAtMDY2Yy00MWEwLTkxMWQtNDIwNjQ1ODlkMTYwXkEyXkFqcGc@._V1_.jpg",
        title: "Save Your Tears",
        artist: "The Weeknd",
        audio:
          "http://irdl.rasamusic.ir//%DB%B0%DB%B0/%DB%B3/The%20Weeknd%20-%20Save%20Your%20Tears.mp3",
      },
      {
        id: 4,
        cover:
          "https://i1.sndcdn.com/artworks-eb0MriwCeIEzf4mo-bUQc2A-t500x500.jpg",
        title: "Save Your Tears",
        artist: "Justin Bieber",
        audio:
          "https://dl.dibasmusic.com/dl/1401/09/Justin-Bieber-Peaches-dibamusics.com-320.mp3",
      },
      {
        id: 5,
        cover:
          "https://i1.sndcdn.com/artworks-qDFv7RtUQj4oRrIV-R6EZIA-t500x500.jpg",
        title: "Montero",
        artist: "Lil Nas X",
        audio:
          "https://dl.melovy.ir/2022/11/Lil-Nas-X-MONTERO-(Call-Me-By-Your-Name)1.mp3",
      },
      {
        id: 6,
        cover:
          "https://ahaang.com/wp-content/uploads/2021/07/The-Kid-Laroi-Stay.jpg",
        title: "Stay",
        artist: "The Kid Laroi & Justin Bieber",
        audio:
          "https://dl.dibasmusic.com/song/1401/06/The-Kid-Laroi-Justin-Bieber%C2%A0-Stay-dibamusics-320.mp3",
      },
      {
        id: 7,
        cover: "https://cdn.europosters.eu/image/1300/116581.jpg",
        title: "Bad Habits",
        artist: "Ed Sheeran",
        audio: "https://files.musicfeed.ir/2021/11/ed_sheeran_bad_habits.mp3",
      },
      {
        id: 8,
        cover:
          "https://m.media-amazon.com/images/M/MV5BZDkyZmMxOTktYTdiOC00ZTQ4LTk4OTItNmY2MWVjYmE2ODk3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        title: "good 4 u",
        artist: "Olivia Rodrigo",
        audio:
          "https://files.musicfeed.ir/dir/2021/5/Olivia%20Rodrigo%20-%20good%204%20u.mp3",
      },
      {
        id: 9,
        cover:
          "https://cdn-p.smehost.net/sites/a6700d2fbaf642099802a57af8b10fe6/wp-content/uploads/2021/04/Kiss-Me-More-Art.jpg",
        title: "Kiss Me More",
        artist: "Doja Cat ft. SZA",
        audio:
          "https://dl.ememay.ir/Music/Doja-Cat/songs/Kiss-Me-More-feat-SZA-Doja-Cat-SZA-320.mp3",
      },
      {
        id: 10,
        cover: "https://i1.sndcdn.com/artworks-oIHnpJTjJDYs-0-t500x500.jpg",
        title: "Industry Baby",
        artist: "Lil Nas X & Jack Harlow",
        audio:
          "https://dlmain.gandommusic.ir/mp3/1/Lil%20Nas%20X%20%20Jack%20Harlow%20-%20INDUSTRY%20BABY%20%28%20GandomMusic.ir%20%29.mp3",
      },
    ],
  },
  {
    name: "Workout Mix",
    icons: <BsSoundwave />,
    tracks: [
      {
        id: 1,
        cover: "https://i.ebayimg.com/images/g/sI8AAOSwTA9ksbz-/s-l400.jpg",
        title: "Lose Yourself",
        artist: "Eminem",
        audio:
          "https://cdn.tiktokmusics.ir/music/Lose%20Yourself%20By%20Eminem.mp3",
      },
      {
        id: 2,
        cover:
          "https://i1.sndcdn.com/artworks-iROhyHgRWzk7JWv1-RYPLkw-t500x500.jpg",
        title: "Stronger",
        artist: "Kanye West",
        audio:
          "https://uploadb.me/5zkgqojkm3th/Kanye%20West%20-%20Stronger.mp3.html",
      },
      {
        id: 3,
        cover:
          "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/400x400bb.webp",
        title: "Titanium",
        artist: "David Guetta ft. Sia",
        audio:
          "https://files.musicfeed.ir/2020/03/Titanium-David-Guetta-ft.-Sia-Titanium-musicfeed.ir_.mp3",
      },
    ],
  },
  // More sections...
];

export default function SpotifyApp() {
  // State management
  const [sections] = useState(sectionsData); // all sections
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // current selected section
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // current selected track
  const [isPlaying, setIsPlaying] = useState(false); // play/pause state
  const [search, setSearch] = useState(""); // search query
  const [currentTime, setCurrentTime] = useState(0); // current playback time
  const [duration, setDuration] = useState(0); // track duration
  const [volume, setVolume] = useState(0.5); // volume level
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu state
  const audioRef = useRef(null); // reference to audio element

  const currentSection = sections[currentSectionIndex];
  const currentTrack = currentSection.tracks[currentTrackIndex];

  // Update audio when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentTrack.audio;
    audio.volume = volume;

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    if (isPlaying) {
      audio.play().catch((err) => console.log("Play prevented:", err));
    }

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [currentTrack]);

  // Play/pause toggle
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        if (audio.paused) {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.log("Play prevented:", err);
      }
    }
  };

  // Next track
  const nextTrack = async () => {
    setCurrentTrackIndex((prev) => (prev + 1) % currentSection.tracks.length);
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Previous track
  const prevTrack = async () => {
    setCurrentTrackIndex(
      (prev) =>
        (prev - 1 + currentSection.tracks.length) % currentSection.tracks.length
    );
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Seek track
  const handleSeek = (e) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  // Handle volume change
  const handleVolume = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  // Select section
  const selectSection = (index) => {
    setCurrentSectionIndex(index);
    setCurrentTrackIndex(0);
    setIsPlaying(false);
    setSearch("");
  };

  // Filter tracks by search
  const filteredTracks = currentSection.tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase())
  );

  // Format time mm:ss
  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${("0" + s).slice(-2)}`;
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#0f0f0f] to-[#181818] text-white relative">
      {/* Hidden audio element */}
      <audio ref={audioRef} />

      {/* Navbar */}
      <nav className="w-full bg-black/60 backdrop-blur-md flex items-center justify-between px-4 py-3 shadow-xl fixed top-0 z-30">
        <div className="flex items-center space-x-2">
          <div className="text-2xl flex font-extrabold cursor-pointer hover:text-green-500 transition-all">
            Spotify <FaSpotify className="mt-2 ml-1" />
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>

        {/* Search (Desktop) */}
        <div className="flex-1 mx-2 relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-300" />
        </div>

        {/* User/Upgrade (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all">
            Upgrade
          </button>
          <FaUserCircle className="text-3xl cursor-pointer hover:text-green-500 transition-all" />
        </div>
      </nav>

      {/* Search (Mobile) */}
      <div className="md:hidden px-4 pt-16 bg-black/70 backdrop-blur-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-300" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex">
          <div className="w-64 bg-black/70 backdrop-blur-md p-6 flex flex-col text-gray-400 relative">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-300 hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            {sections.map((section, i) => (
              <div
                key={i}
                className={`cursor-pointer hover:text-green-500 transition-all duration-300 my-2 ${
                  currentSectionIndex === i
                    ? "text-green-400 font-semibold"
                    : ""
                }`}
                onClick={() => {
                  selectSection(i);
                  setMenuOpen(false);
                }}
              >
                {section.name}
              </div>
            ))}
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar (Desktop) */}
        <div className="w-64 bg-black/50 backdrop-blur-md p-6 flex-col text-gray-400 hidden md:flex">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`cursor-pointer flex hover:text-green-500 transition-all duration-300 mb-3 ${
                currentSectionIndex === i ? "text-green-400 font-semibold" : ""
              }`}
              onClick={() => selectSection(i)}
            >
              {section.name}
              <div className="mt-1 ml-1">{section.icons}</div>
            </div>
          ))}
        </div>

        {/* Track List */}
        <div className="flex-1 overflow-y-auto p-6 pb-40 space-y-3 bg-black/20 backdrop-blur-md relative">
          {filteredTracks.map((track, index) => (
            <div
              key={index}
              onClick={() => {
                const realIndex = currentSection.tracks.findIndex(
                  (t) => t.id === track.id
                );
                setCurrentTrackIndex(realIndex);
                setIsPlaying(true);
              }}
              className={`group relative flex items-center rounded-lg p-3 cursor-pointer transition-all duration-500 shadow-md transform hover:scale-102 hover:shadow-xl overflow-hidden bg-black/30 ${
                currentTrackIndex === index ? "border-l-4 border-green-500" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 blur-2xl opacity-0 group-hover:opacity-60 animate-pulse-slow rounded-lg transition-all duration-700"></div>
              <div className="relative z-10 flex-shrink-0">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-14 h-14 rounded-md shadow-lg transition-all duration-500 group-hover:animate-pulse"
                />
                <div className="absolute inset-0 rounded-md ring-2 ring-green-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="ml-3 flex-1 relative z-10">
                <p className="text-white font-semibold text-md truncate group-hover:text-green-400 transition-all">
                  {track.id} - {track.title}
                </p>
                <p className="text-gray-400 text-sm truncate group-hover:text-green-300 transition-all">
                  {track.artist}
                </p>
              </div>
              <div className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                <FaPlay className="text-green-500 text-xl hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player (Fixed at bottom) */}
      <div className="h-32  md:h-28 gap-x-6 bg-black/50 backdrop-blur-xl flex flex-col md:flex-row justify-center items-center px-6 shadow-inner space-y-3 md:space-y-0 border-t border-green-500/50 fixed bottom-0 w-full z-20">
        {/* Track info */}
        <div className="flex items-center space-x-4">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-xl ${
              isPlaying ? "animate-pulse" : ""
            }`}
          />
          <div>
            <p className="text-white font-bold">{currentTrack.title}</p>
            <p className="text-gray-400 text-sm">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-6 text-2xl md:text-3xl">
          <FaStepBackward
            className="text-white hover:text-green-500 cursor-pointer transition-all"
            onClick={prevTrack}
          />
          {isPlaying ? (
            <FaPause
              className="text-white hover:text-green-500 cursor-pointer transition-all"
              onClick={togglePlay}
            />
          ) : (
            <FaPlay
              className="text-white hover:text-green-500 cursor-pointer transition-all"
              onClick={togglePlay}
            />
          )}
          <FaStepForward
            className="text-white hover:text-green-500 cursor-pointer transition-all"
            onClick={nextTrack}
          />
        </div>

        {/* Time + Volume */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto space-y-2 md:space-y-0 mt-2 md:mt-0">
          {/* Seek bar */}
          <div className="flex flex-col w-full md:w-64">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 rounded-lg bg-gray-700 accent-green-500 transition-all"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume control */}
          <div className="flex items-center space-x-2 w-full md:w-36">
            <FaVolumeUp className="text-gray-400" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolume}
              className="w-full h-2 rounded-full bg-[#F2F2F2]  accent-[#B4E50D] appearance-none cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
