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
  FaVolumeMute,
  FaBars,
  FaTimes,
  FaSpotify,
  FaHeart,
  FaClock,
  FaRandom,
  FaRedo,
} from "react-icons/fa";
import { LuFolderHeart } from "react-icons/lu";
import { GoMoveToTop } from "react-icons/go";
import { BsSoundwave } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";

// ============================================================
// DATA
// ============================================================
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
          "https://s31.uupload.ir/files/foxlyrics/mp4/2024-4/09%20Guilty%20as%20Sin%20-%20Taylor%20Swift%20(320).mp3",
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
];

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function SpotifyApp() {
  const [sections] = useState(sectionsData);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const audioRef = useRef(null);
  const trackRefs = useRef([]);

  const currentSection = sections[currentSectionIndex];
  const currentTrack = currentSection.tracks[currentTrackIndex];

  useEffect(() => {
    if (trackRefs.current[currentTrackIndex]) {
      trackRefs.current[currentTrackIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTrackIndex, currentSectionIndex]);

  // ===== Audio setup with retry logic =====
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentTrack.audio;
    audio.volume = isMuted ? 0 : volume;

    const updateDuration = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);

    const handleCanPlay = () => {
      setIsLoading(false);
      if (isPlaying) {
        audio.play().catch((err) => {
          console.log("Play failed:", err);
          setIsLoading(false);
        });
      }
    };

    const handleError = () => {
      setIsLoading(false);
      // If track fails, retry up to 3 times
      if (retryCount < 3) {
        setRetryCount(retryCount + 1);
        setTimeout(() => {
          audio.load();
        }, 500);
      } else {
        setRetryCount(0);
        setIsPlaying(false);
      }
    };

    const handleEnded = () => {
      if (currentTrackIndex + 1 < currentSection.tracks.length) {
        setCurrentTrackIndex(currentTrackIndex + 1);
      } else if (currentSectionIndex + 1 < sections.length) {
        setCurrentSectionIndex(currentSectionIndex + 1);
        setCurrentTrackIndex(0);
      } else {
        setCurrentSectionIndex(0);
        setCurrentTrackIndex(0);
      }
      setIsPlaying(true);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      setIsLoading(true);
      audio.load();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, currentSectionIndex, retryCount]);

  // ===== Toggle Play with retry =====
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setRetryCount(0);
    } else {
      setIsLoading(true);
      setRetryCount(0);
      
      try {
        // Force reload if audio is stalled
        if (audio.readyState < 2) {
          audio.load();
        }
        
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (err) {
        console.log("Play prevented:", err);
        // Retry after a short delay
        setTimeout(() => {
          audio.load();
          audio.play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((retryErr) => {
              console.log("Retry failed:", retryErr);
              setIsPlaying(false);
              setIsLoading(false);
            });
        }, 300);
      }
    }
  };

  // ===== Next Track =====
  const nextTrack = async () => {
    setCurrentTrackIndex((prev) => (prev + 1) % currentSection.tracks.length);
    const audio = audioRef.current;
    if (audio) {
      setIsLoading(true);
      setRetryCount(0);
      try {
        audio.load();
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setTimeout(() => {
          audio.load();
          audio.play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch(() => {
              setIsPlaying(false);
              setIsLoading(false);
            });
        }, 300);
      }
    }
  };

  // ===== Previous Track =====
  const prevTrack = async () => {
    setCurrentTrackIndex(
      (prev) =>
        (prev - 1 + currentSection.tracks.length) % currentSection.tracks.length
    );
    const audio = audioRef.current;
    if (audio) {
      setIsLoading(true);
      setRetryCount(0);
      try {
        audio.load();
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setTimeout(() => {
          audio.load();
          audio.play()
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch(() => {
              setIsPlaying(false);
              setIsLoading(false);
            });
        }, 300);
      }
    }
  };

  const handleSeek = (e) => {
    const t = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  };

  const handleVolume = (e) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : v;
    }
    if (isMuted) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? volume : 0;
    }
  };

  const selectSection = (index) => {
    setCurrentSectionIndex(index);
    setCurrentTrackIndex(0);
    setIsPlaying(false);
    setIsLoading(false);
    setRetryCount(0);
    setSearch("");
  };

  const filteredTracks = currentSection.tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase())
  );

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${("0" + s).slice(-2)}`;
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <audio ref={audioRef} />

      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars size={22} />
            </button>
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <FaSpotify className="text-blue-500 text-3xl group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold text-white hidden sm:block">
                Spotify
              </span>
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative group">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-blue-500 transition-colors text-sm" />
              <input
                type="text"
                placeholder="Search for songs, artists..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-medium text-white/50 hover:text-white transition-colors">
              Sign Up
            </button>
            <button className="hidden sm:block px-5 py-1.5 text-sm font-bold bg-white text-black rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10">
              Log In
            </button>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <FaUserCircle className="text-white/70 text-xl" />
            </div>
          </div>
        </div>

        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>
      </nav>

      {/* ========== MOBILE MENU ========== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-black border-r border-white/5 p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <FaSpotify className="text-blue-500 text-2xl" />
                <span className="text-xl font-bold">Spotify</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <FaTimes size={22} />
              </button>
            </div>

            <div className="space-y-1">
              {sections.map((section, i) => (
                <button
                  key={i}
                  onClick={() => {
                    selectSection(i);
                    setMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                    currentSectionIndex === i
                      ? "bg-white/10 text-white border border-white/5"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{section.icons}</span>
                  <span className="font-medium">{section.name}</span>
                  {currentSectionIndex === i && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex h-full pt-16">
        <aside className="hidden lg:block w-60 bg-black/50 backdrop-blur-sm border-r border-white/5 p-4 overflow-y-auto">
          <div className="space-y-1">
            {sections.map((section, i) => (
              <button
                key={i}
                onClick={() => selectSection(i)}
                className={`w-full text-left px-4 py-2.5 rounded-xl transition-all flex items-center gap-3 group ${
                  currentSectionIndex === i
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {section.icons}
                </span>
                <span className="font-medium text-sm">{section.name}</span>
                {currentSectionIndex === i && (
                  <span className="ml-auto w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 text-white/20 text-xs px-4">
              <MdLibraryMusic className="text-blue-500/30" />
              <span>{currentSection.tracks.length} songs</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 pb-44">
          <div className="mb-8 flex items-end gap-5">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-4xl backdrop-blur-sm border border-white/5 shadow-2xl">
              {currentSection.icons}
            </div>
            <div>
              <p className="text-white/30 mt-10 text-xs font-medium uppercase tracking-[0.2em]">
                Playlist
              </p>
              <h2 className="text-4xl font-bold text-white">
                {currentSection.name}
              </h2>
              <p className="text-white/20 text-sm mt-1">
                {filteredTracks.length} songs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-white/20 text-xs uppercase tracking-wider border-b border-white/5 mb-2">
            <div className="col-span-1">#</div>
            <div className="col-span-7 sm:col-span-5">Title</div>
            <div className="hidden sm:block col-span-4">Artist</div>
            <div className="col-span-4 sm:col-span-2 text-right">
              <FaClock className="inline" />
            </div>
          </div>

          {filteredTracks.map((track, index) => {
            const realIndex = currentSection.tracks.findIndex(
              (t) => t.id === track.id
            );
            const isActive = currentTrackIndex === realIndex;

            return (
              <div
                key={index}
                ref={(el) => (trackRefs.current[realIndex] = el)}
                onClick={() => {
                  setCurrentTrackIndex(realIndex);
                  setIsPlaying(true);
                  setIsLoading(true);
                  setRetryCount(0);
                  const audio = audioRef.current;
                  if (audio) {
                    audio.load();
                    audio.play()
                      .then(() => {
                        setIsPlaying(true);
                        setIsLoading(false);
                      })
                      .catch(() => {
                        setTimeout(() => {
                          audio.load();
                          audio.play()
                            .then(() => {
                              setIsPlaying(true);
                              setIsLoading(false);
                            })
                            .catch(() => {
                              setIsPlaying(false);
                              setIsLoading(false);
                            });
                        }, 300);
                      });
                  }
                }}
                className={`group grid grid-cols-12 gap-4 items-center px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive ? "bg-white/10" : "hover:bg-white/5"
                }`}
                role="button"
                tabIndex={0}
              >
                <div className="col-span-1 text-white/30 text-sm group-hover:text-white transition-colors">
                  {isActive && isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                  ) : isActive && isPlaying ? (
                    <div className="flex items-center justify-center gap-0.5">
                      <div className="w-0.5 h-2 bg-blue-500 animate-[bounce_0.8s_infinite_100ms]" />
                      <div className="w-0.5 h-3.5 bg-blue-500 animate-[bounce_0.8s_infinite_200ms]" />
                      <div className="w-0.5 h-2.5 bg-blue-500 animate-[bounce_0.8s_infinite_300ms]" />
                      <div className="w-0.5 h-4 bg-blue-500 animate-[bounce_0.8s_infinite_400ms]" />
                    </div>
                  ) : isActive ? (
                    <FaPlay className="text-blue-500" size={14} />
                  ) : (
                    <span className="group-hover:hidden">{index + 1}</span>
                  )}
                  {!isActive && (
                    <FaPlay
                      className="hidden group-hover:block text-white/60"
                      size={14}
                    />
                  )}
                </div>

                <div className="col-span-7 sm:col-span-5 flex items-center gap-3 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src={track.cover}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover"
                      loading="lazy"
                    />
                    {isActive && isPlaying && (
                      <div className="absolute inset-0 rounded-lg bg-blue-500/20 animate-pulse" />
                    )}
                    {isActive && isLoading && (
                      <div className="absolute inset-0 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`truncate text-sm font-medium ${
                        isActive ? "text-blue-500" : "text-white"
                      }`}
                    >
                      {track.title}
                    </p>
                    <p className="sm:hidden text-white/30 text-xs truncate">
                      {track.artist}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block col-span-4 text-white/40 truncate text-sm group-hover:text-white/60 transition-colors">
                  {track.artist}
                </div>

                <div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-3 text-white/20">
                  <FaHeart
                    className={`transition-all cursor-pointer ${
                      isLiked
                        ? "text-blue-500"
                        : "opacity-0 group-hover:opacity-100 hover:text-blue-500"
                    }`}
                    size={15}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLiked(!isLiked);
                    }}
                  />
                  <span className="text-xs font-mono">3:45</span>
                </div>
              </div>
            );
          })}

          {filteredTracks.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4 opacity-20">🎵</div>
              <p className="text-white/30 text-lg">No results found</p>
              <p className="text-white/10 text-sm">Try adjusting your search</p>
            </div>
          )}
        </main>
      </div>

      {/* ============================================================
          PREMIUM PLAYER - BLUE THEME
          ============================================================ */}
      <footer className="fixed bottom-0 left-0 right-0 z-40">
        <div className="relative bg-black/80 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-black/50">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="px-3 sm:px-6 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto gap-2 sm:gap-4">
              {/* LEFT: Track Info */}
              <div className="flex items-center gap-3 min-w-[140px] sm:min-w-[200px]">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={currentTrack.cover}
                    alt=""
                    className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 rounded-lg bg-black/50 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                  )}
                  {isPlaying && !isLoading && (
                    <>
                      <div className="absolute inset-0 rounded-lg ring-2 ring-blue-500/40 animate-pulse" />
                      <div className="absolute -inset-1 rounded-lg bg-blue-500/10 blur-xl animate-pulse" />
                    </>
                  )}
                </div>

                <div className="hidden sm:block min-w-0">
                  <p className="text-sm font-medium text-white truncate max-w-[120px] hover:text-blue-500 transition-colors cursor-pointer">
                    {currentTrack.title}
                  </p>
                  <p className="text-xs text-white/40 truncate max-w-[120px] hover:text-white/60 transition-colors cursor-pointer">
                    {currentTrack.artist}
                  </p>
                </div>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="text-white/30 hover:text-blue-500 transition-all hover:scale-110"
                >
                  <FaHeart
                    size={16}
                    className={`transition-all ${
                      isLiked ? "text-blue-500 fill-blue-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* CENTER: Controls */}
              <div className="flex-1 max-w-[500px] flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2 sm:gap-4">
                  <button
                    onClick={() => setIsShuffling(!isShuffling)}
                    className={`p-1.5 rounded-full transition-all hover:scale-110 ${
                      isShuffling
                        ? "text-blue-500 bg-blue-500/10"
                        : "text-white/30 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <FaRandom size={14} />
                  </button>

                  <button
                    onClick={prevTrack}
                    className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
                  >
                    <FaStepBackward size={16} />
                  </button>

                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-full bg-blue-500/20 blur-xl transition-opacity duration-500 ${
                        isPlaying ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <button
                      onClick={togglePlay}
                      disabled={isLoading}
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 text-black flex items-center justify-center transition-all shadow-lg shadow-blue-500/20 ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:scale-105 hover:shadow-blue-500/40"
                      }`}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : isPlaying ? (
                        <FaPause size={16} />
                      ) : (
                        <FaPlay size={16} className="ml-0.5" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={nextTrack}
                    className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
                  >
                    <FaStepForward size={16} />
                  </button>

                  <button
                    onClick={() => setIsRepeating(!isRepeating)}
                    className={`p-1.5 rounded-full transition-all hover:scale-110 ${
                      isRepeating
                        ? "text-blue-500 bg-blue-500/10"
                        : "text-white/30 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <FaRedo size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full">
                  <span className="text-white/20 text-[10px] font-mono min-w-[28px] text-right">
                    {formatTime(currentTime)}
                  </span>

                  <div className="flex-1 relative group">
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 rounded-full bg-white/10 accent-blue-500 cursor-pointer transition-all group-hover:h-1.5"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          duration ? (currentTime / duration) * 100 : 0
                        }%, rgba(255,255,255,0.1) ${
                          duration ? (currentTime / duration) * 100 : 0
                        }%)`,
                      }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {formatTime(currentTime)}
                    </div>
                  </div>

                  <span className="text-white/20 text-[10px] font-mono min-w-[28px]">
                    {formatTime(duration)}
                  </span>
                </div>
              </div>

              {/* RIGHT: Volume */}
              <div className="hidden md:flex items-center gap-2 min-w-[120px] justify-end">
                <button
                  onClick={toggleMute}
                  className="text-white/30 hover:text-white transition-colors hover:scale-110"
                >
                  {isMuted || volume === 0 ? (
                    <FaVolumeMute size={16} />
                  ) : (
                    <FaVolumeUp size={16} />
                  )}
                </button>

                <div className="relative group w-20">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolume}
                    className="w-full h-1 rounded-full bg-white/10 accent-blue-500 cursor-pointer transition-all group-hover:h-1.5"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 ${
                        (isMuted ? 0 : volume) * 100
                      }%, rgba(255,255,255,0.1) ${
                        (isMuted ? 0 : volume) * 100
                      }%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}