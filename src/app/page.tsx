"use client";

import { useRef } from "react";
import Image from "next/image";

export default function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleLogoClick = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error: Error) => {
                window.alert(error);
            });
        }
    };

    return (
        <>
            <div className="profile-container">
                <div className="profile-header">
                    <Image
                        src="/logo.png"
                        alt=""
                        width={120}
                        height={120}
                        className="profile-pic"
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={handleLogoClick}
                        style={{ cursor: "pointer" }}
                        priority
                    />
                    <h1>Rudraksha Mahato</h1>
                    <p>Class 9 | Aspiring Doctor</p>
                </div>
                <div className="profile-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I&apos;m Rudraksha, a class 9 student with a passion for
                        studies and music. I&apos;m currently working on my website. In my
                        free time, I enjoy learning new things and exploring creative
                        projects.
                    </p>
                </div>
            </div>
            {/* the audio clip is hidden as an easter egg, the visitor is challenged to find it out */}
            <audio
                ref={audioRef}
                autoPlay
                controls
                controlsList="nodownload"
                id="audio"
                src="/song.mp3"
            />
        </>
    );
}
