'use client';

import Image from 'next/image';
import { type ChangeEvent, type CSSProperties, type FormEvent, type MouseEvent, useEffect, useRef, useState } from 'react';
import { Heart, Pause, Play, Repeat2, Shuffle, SkipBack, SkipForward, Volume1, Volume2, VolumeX } from 'lucide-react';
import { CassetteSvg } from './CassetteSvg';
import { MarqueeText } from './MarqueeText';
import { personalityCardClass } from './personalityStyles';

const tracks = [
  {
    title: 'Major Crimes',
    artist: 'HEALTH & Window Weather',
    album: 'Cyberpunk 2077',
    src: '/audio/major-crimes.mp3',
    artwork: '/images/about/major-crimes-cover.webp',
    cassetteVariant: 'major-crimes',
    cassetteLabel: 'CYBERPUNK 2077',
    cassetteSide: 'SIDE A'
  },
  {
    title: 'Anything > Human',
    artist: 'Bad Omens & ERRA',
    album: 'CONCRETE JUNGLE [THE OST]',
    src: '/audio/anything-human.mp3',
    artwork: '/images/about/anything-human-cover.webp',
    cassetteVariant: 'anything-human',
    cassetteLabel: 'CONCRETE JUNGLE',
    cassetteSide: 'SIDE B'
  }
] as const;

type MusicPlayerCardProps = {
  availableAudio?: Record<string, boolean>;
  availableArtwork?: Record<string, boolean>;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
}

function FallbackArtwork({ variant }: { variant: 'crimes' | 'human' }) {
  if (variant === 'human') {
    return (
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(216,248,255,.2),transparent_18%),radial-gradient(circle_at_42%_48%,rgba(108,76,255,.32),transparent_34%),linear-gradient(145deg,#060814,#17103a_48%,#070a16)]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent_0_13px,rgba(10,196,255,.12)_14px_15px),repeating-linear-gradient(23deg,transparent_0_20px,rgba(255,255,255,.06)_21px_22px)]" />
        <div className="absolute left-[12%] top-[48%] h-[2px] w-[76%] -rotate-[16deg] bg-cyan-100/70 shadow-[0_0_12px_rgba(10,196,255,.75)]" />
        <div className="absolute left-[18%] top-[58%] h-[2px] w-[68%] rotate-[12deg] bg-purple/80 shadow-[0_0_14px_rgba(108,76,255,.85)]" />
        <div className="absolute inset-[22%] rotate-45 border border-white/22" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(255,67,58,.22),transparent_20%),radial-gradient(circle_at_38%_48%,rgba(10,196,255,.28),transparent_34%),linear-gradient(145deg,#040712,#071830_48%,#210610)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,196,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,67,58,.12)_1px,transparent_1px)] bg-[length:16px_16px]" />
      <div className="absolute inset-x-0 top-[32%] h-px bg-red-400/80 shadow-[0_0_12px_rgba(255,67,58,.85)]" />
      <div className="absolute inset-x-0 top-[62%] h-px bg-secondary/80 shadow-[0_0_12px_rgba(10,196,255,.85)]" />
      <div className="absolute inset-[19%] rounded-sm border-2 border-white/30 shadow-[inset_0_0_18px_rgba(10,196,255,.18)]" />
    </div>
  );
}

export function MusicPlayerCard({ availableAudio = {}, availableArtwork = {} }: MusicPlayerCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const [volume, setVolume] = useState(0.75);

  const activeTrack = tracks[activeTrackIndex];
  const activeAudioAvailable = Boolean(availableAudio[activeTrack.src]) && !audioError;
  const activeArtworkAvailable = Boolean(availableArtwork[activeTrack.artwork]);
  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

  useEffect(() => () => audioRef.current?.pause(), []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [activeTrackIndex, volume]);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);
  }, [activeTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!activeAudioAvailable) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (!isPlaying) {
      audio.pause();
      return;
    }

    audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, [activeAudioAvailable, activeTrackIndex, isPlaying]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !activeAudioAvailable) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  function moveTrack(direction: 1 | -1, continuePlayback = isPlaying) {
    setAudioError(false);
    setCurrentTime(0);
    setDuration(0);
    setActiveTrackIndex((index) => (index + direction + tracks.length) % tracks.length);
    setIsPlaying(continuePlayback);
  }

  function goToPreviousTrack() {
    const audio = audioRef.current;

    if (audio && currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying && activeAudioAvailable) {
        audio.play().catch(() => setIsPlaying(false));
      }
      return;
    }

    moveTrack(-1);
  }

  function seek(value: number) {
    const audio = audioRef.current;
    if (!audio || !duration || !activeAudioAvailable) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }

  function handleEnded() {
    moveTrack(1, true);
  }

  function updateVolume(event: ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>) {
    setVolume(Number(event.currentTarget.value));
  }

  function updateVolumeFromClick(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextVolume = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    setVolume(Number(nextVolume.toFixed(2)));
  }

  const VolumeIcon = volume === 0 ? VolumeX : volume <= 0.5 ? Volume1 : Volume2;

  return (
    <article className={`${personalityCardClass} min-h-[22rem] p-5 sm:p-6 lg:min-h-[25rem] lg:p-7`}>
      <div className="relative z-10">
      <div
        className="pointer-events-none absolute z-0 hidden aspect-[3/2] w-[22rem] xl:block min-[1400px]:w-[23rem]"
        style={{ top: '0rem', right: '6.5rem' }}
      >
        <CassetteSvg
          isPlaying={isPlaying && activeAudioAvailable}
          variant={activeTrack.cassetteVariant}
          label={activeTrack.cassetteLabel}
          side={activeTrack.cassetteSide}
          className="h-full w-full"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-black uppercase tracking-[0.04em] text-secondary lg:text-xl">Current Soundtrack</h3>
        <button type="button" aria-label="Toggle favourite" className="shrink-0 rounded-lg p-1 text-purple-200 transition hover:-translate-y-0.5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
          <Heart aria-hidden="true" className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
      <div className="relative z-10 mt-4 grid grid-cols-[6.5rem_1fr] gap-5 sm:grid-cols-[7.5rem_1fr] lg:mt-5 lg:grid-cols-[9rem_minmax(0,1fr)] lg:items-start lg:gap-5 xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-6">
        <div role="img" aria-label={`${activeTrack.title} cover artwork`} className="relative aspect-square overflow-hidden rounded-xl border border-white/12 bg-[#060813] shadow-[0_14px_35px_rgba(0,0,0,.5)] lg:rounded-2xl">
          {activeArtworkAvailable ? (
            <Image src={activeTrack.artwork} alt="" fill sizes="(min-width: 1280px) 160px, (min-width: 1024px) 144px, 120px" className="object-cover" priority={false} />
          ) : (
            <FallbackArtwork variant={activeTrackIndex === 0 ? 'crimes' : 'human'} />
          )}
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.08),transparent_42%,rgba(0,0,0,.32)),radial-gradient(circle_at_50%_0%,rgba(10,196,255,.18),transparent_46%)]" />
        </div>
        <div className="min-w-0 self-center lg:max-w-[22rem] xl:max-w-[23rem]">
          <div className="min-w-0">
            <span className="block truncate font-display text-2xl font-black leading-tight text-white lg:text-[1.78rem]" title={activeTrack.title}>{activeTrack.title}</span>
            <MarqueeText text={activeTrack.artist} className="mt-1 text-sm text-white/67 lg:text-base" />
          </div>
          <MarqueeText text={activeTrack.album} className="mt-3 text-xs leading-5 text-white/48 lg:text-sm" />
          <div className="mt-3 grid max-w-[12rem] grid-cols-[1rem_1fr_2rem] items-center gap-2 text-[0.58rem] font-semibold text-white/50 lg:max-w-[17rem] lg:text-[0.65rem]">
            <VolumeIcon aria-hidden="true" className="h-3.5 w-3.5 text-secondary/75 drop-shadow-[0_0_7px_rgba(10,196,255,.45)]" />
            <label className="about-volume-slider relative block" onMouseDown={updateVolumeFromClick}>
              <span className="sr-only">Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={updateVolume}
                onClick={updateVolumeFromClick}
                onInput={updateVolume}
                aria-label="Volume"
                style={{ '--range-progress': `${volume * 100}%` } as CSSProperties}
                className="h-4 w-full"
              />
            </label>
            <span className="text-right tabular-nums">{Math.round(volume * 100)}%</span>
          </div>
          {!activeAudioAvailable ? <p className="mt-3 text-[0.67rem] font-semibold text-secondary/70">Audio unavailable locally</p> : null}
        </div>
        <div className="col-span-2 mt-5 hidden sm:block xl:hidden">
          <CassetteSvg
            isPlaying={isPlaying && activeAudioAvailable}
            variant={activeTrack.cassetteVariant}
            label={activeTrack.cassetteLabel}
            side={activeTrack.cassetteSide}
            className="mx-auto aspect-[3/2] w-[min(88%,22rem)]"
          />
        </div>
      </div>

      {Boolean(availableAudio[activeTrack.src]) ? (
        <audio
          key={activeTrack.src}
          ref={audioRef}
          src={activeTrack.src}
          preload="metadata"
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onEnded={handleEnded}
          onError={() => {
            setAudioError(true);
            setIsPlaying(false);
          }}
        />
      ) : null}

      <div className="mt-4 grid grid-cols-[2.6rem_1fr_2.6rem] items-center gap-3 text-[0.64rem] text-white/56 lg:mt-5 lg:grid-cols-[3.1rem_1fr_3.1rem] lg:text-[0.72rem]">
        <span>{formatTime(currentTime)}</span>
        <label className="relative block">
          <span className="sr-only">Track progress</span>
          <span aria-hidden="true" className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-white/12"><i className="block h-full rounded-full bg-gradient-to-r from-secondary to-purple shadow-[0_0_8px_rgba(10,196,255,.55)]" style={{ width: `${progress}%` }} /></span>
          <input type="range" min="0" max={duration || 100} value={duration ? currentTime : 0} disabled={!activeAudioAvailable || !duration} onChange={(event) => seek(Number(event.target.value))} aria-label="Track progress" className="relative h-6 w-full cursor-pointer opacity-0 disabled:cursor-not-allowed" />
        </label>
        <span className="text-right">{formatTime(duration)}</span>
      </div>

      <div className="relative mx-auto mt-3 flex max-w-[25rem] items-center justify-between lg:mt-4">
        <button type="button" aria-label="Shuffle" className="rounded-lg p-2 text-white/48 transition hover:-translate-y-0.5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Shuffle aria-hidden="true" className="h-4 w-4 lg:h-[1.1rem] lg:w-[1.1rem]" /></button>
        <button type="button" onClick={goToPreviousTrack} aria-label="Previous track" className="rounded-lg p-2 text-white/72 transition hover:-translate-y-0.5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"><SkipBack aria-hidden="true" className="h-5 w-5 fill-current lg:h-6 lg:w-6" /></button>
        <button type="button" disabled={!activeAudioAvailable} onClick={togglePlayback} aria-label={isPlaying ? 'Pause current track' : 'Play current track'} className="grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full border border-secondary bg-secondary/12 text-secondary shadow-[0_0_22px_rgba(10,196,255,.32)] transition hover:-translate-y-0.5 hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-95 disabled:cursor-not-allowed disabled:opacity-45 lg:h-[3.75rem] lg:w-[3.75rem]">
          {isPlaying ? <Pause aria-hidden="true" className="h-5 w-5 fill-current lg:h-6 lg:w-6" /> : <Play aria-hidden="true" className="ml-0.5 h-5 w-5 fill-current lg:h-6 lg:w-6" />}
        </button>
        <button type="button" onClick={() => moveTrack(1)} aria-label="Next track" className="rounded-lg p-2 text-white/72 transition hover:-translate-y-0.5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"><SkipForward aria-hidden="true" className="h-5 w-5 fill-current lg:h-6 lg:w-6" /></button>
        <button type="button" aria-label="Repeat" className="rounded-lg p-2 text-white/48 transition hover:-translate-y-0.5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Repeat2 aria-hidden="true" className="h-4 w-4 lg:h-[1.1rem] lg:w-[1.1rem]" /></button>
      </div>
      </div>
    </article>
  );
}
