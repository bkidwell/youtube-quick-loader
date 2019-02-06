# youtube-quick-loader

Copyright 2018 Brendan Kidwell  
Licensed under the terms of GPL v3.

Home page: https://github.com/bkidwell/youtube-quick-loader

YouTube Quick Loader is a single-file HTML+JavaScript program you can use to quickly start playing YouTube videos from URLs you find in your RSS feeds, or shared from your friends via forums or social media.

Normally, when you open a YouTube video URL in your desktop browser, there are some UX annoying problems, including:

* The YouTube UI takes a long time to load, especially on low-powered computers.
* The video playback widget does not have an option to fill the browser WINDOW, except in full screen mode.

YouTube Quick Loader solves these two problems by loading your reqeusted video
* in a blank page as an embedded object (IFRAME) which is setup to use all available space in the window
* *or* in Invidio.us, an alternative YouTube front-end web site

Additionally, if the URL you want to play has a start time parameter, YouTube Quick Loader will include that in the embedded video's URL.

## Installing in Your Desktop Browser

Save the contents of this repository in a convenient new folder in your desktop environment. (For example, in `~/Apps/youtube-quick-loader`.)

Choose the alternative front-end you want:

* youtube-iframe.html
* youtube-invidious.html

Open your chosen HTML file in your browser. The page will display "Title" and "URL" parameters for installing this page as a search engine in your browser. Follow the appropriate procedure for creating a new search engine in your browser with these parameters.

I suggest using `yt` as the "Keyword" for this page as a search engine in your browser. (Make sure no other search engines in your browser are using the same keyword.)

How to add a search engine in Chrome / Chromium-based browsers (March 2018): http://archive.is/gaRhJ

How to add a search engine in Firefox (from SuperUser, retrieved December 2018): http://archive.is/sn4lH

## Quickly Loading a YouTube Video

Once you've installed in your browser, assuming you gave it the keyword `yt`, to play any YouTube video you find, all you have to do is go to `yt [URL]` in your browser. For example, to RickRoll yourself, go to:

    yt https://www.youtube.com/watch?v=dQw4w9WgXcQ
