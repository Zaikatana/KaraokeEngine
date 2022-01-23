# J-Karaoke System

This project was developed with a TypeScript and ReactJS stack. It utilises the YouTube Search & iFrame APIs to display Karaoke videos. The main language for these songs is currently Japanese, with potential to include western and chinese song channels in the future.

## Purpose
This web application was built with the purpose of allowing users to have an easier time searching for Japanese Karaoke music on YouTube as well as streamlining features found at Karaoke bars (Queueing songs, Viewing History, etc.)

While this project is still very much a work in progress (UI could be better, Mobile support, ENG/CN/KR song support, etc.), it has pretty much reached a Minimal Viable Product (MVP) status.

This web application is built as a fun and non-profitable project to add to Brian Luc's (the Author) portfolio.

## Features
- Song Search
- Search a song through the following pre-set channels (More to be included in the future)
    - [カラオケ歌っちゃ王] (https://www.youtube.com/channel/UC1tk9F5-MGXEq4LWnjmrtpA)
    - [JOYSOUND CHANNEL] (https://www.youtube.com/user/joysoundchannel)
    - [生音風カラオケ屋] (https://www.youtube.com/c/%E7%94%9F%E9%9F%B3%E9%A2%A8%E3%82%AB%E3%83%A9%E3%82%AA%E3%82%B1%E5%B1%8B%E3%81%95%E3%82%93)
    - [G reen] (https://www.youtube.com/c/Green3)
- Add searched songs to a queue. When a song ends, the next song in the queue plays
- View song history
- Skip songs

## Third-Party Libraries used
- [react-youtube] - Simple React component acting as a thin layer over the YouTube IFrame Player API (https://github.com/tjallingt/react-youtube)  
