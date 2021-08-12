import React from 'react';
import styles from './NavigationBar.module.css'

const NavigationBar = (props) => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z"
                                  fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                        Profile</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="newsfeed_outline_20__Icons" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <g id="newsfeed_outline_20__Icons-20/newsfeed_outline_20">
                                    <g id="newsfeed_outline_20__newsfeed_outline_20">
                                        <path opacity=".04" d="M0 0h20v20H0z"></path>
                                        <path
                                            d="M13.08 2c1.44 0 2.14.13 2.86.52a3.7 3.7 0 011.54 1.54c.39.72.52 1.42.52 2.86v6.16c0 1.44-.13 2.14-.52 2.86a3.7 3.7 0 01-1.54 1.54c-.72.39-1.42.52-2.86.52H6.92c-1.44 0-2.14-.13-2.86-.52a3.7 3.7 0 01-1.54-1.54c-.39-.72-.52-1.42-.52-2.86V6.92c0-1.44.13-2.14.52-2.86a3.7 3.7 0 011.54-1.54C4.78 2.13 5.48 2 6.92 2h6.16zm3.42 6h-13v5.08c0 1.21.09 1.68.35 2.15.2.4.52.71.92.92.47.26.94.35 2.15.35h6.16c1.21 0 1.68-.09 2.15-.35.4-.2.71-.52.92-.92.26-.47.35-.94.35-2.15V8zm-3.42-4.5H6.92c-1.21 0-1.68.09-2.15.35-.4.2-.71.52-.92.92-.23.42-.33.82-.35 1.73h13a3.48 3.48 0 00-.35-1.73 2.2 2.2 0 00-.92-.92c-.47-.26-.94-.35-2.15-.35z"
                                            id="newsfeed_outline_20__Icon-Color" fill="currentColor"
                                            fill-rule="nonzero"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        News</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="message_outline_20__Page-2" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <g id="message_outline_20__message_outline_20">
                                    <path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path>
                                    <path
                                        d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z"
                                        id="message_outline_20__Icon-Color" fill="currentColor"
                                        fill-rule="nonzero"></path>
                                </g>
                            </g>
                        </svg>
                        Messages</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="currentColor">
                                <g clip-rule="evenodd" fill-rule="evenodd">
                                    <path
                                        d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path>
                                </g>
                                <path
                                    d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path>
                            </g>
                        </svg>
                        Friends</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="music_outline_20__Icons" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd">
                                <g id="music_outline_20__Icons-20/music_outline_20">
                                    <g id="music_outline_20__music_outline_20">
                                        <path d="M0 0h20v20H0z"></path>
                                        <path
                                            d="M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z"
                                            id="music_outline_20__Icon-Color" fill="currentColor"
                                            fill-rule="nonzero"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Music</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="">
                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd"
                                  d="M17.2 6.78a2 2 0 01.24.58c.06.23.06.48.06.97v2.97c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 01-1.97 1.97c-.96.49-2.22.49-4.74.49h-.6c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 01-1.97-1.97c-.49-.96-.49-2.22-.49-4.74V8.7c0-2.52 0-3.78.49-4.74a4.5 4.5 0 011.97-1.97c.96-.49 2.22-.49 4.74-.49h.97c.5 0 .74 0 .97.06.2.04.4.13.58.23.2.13.37.3.72.65l3.62 3.62c.35.35.52.52.65.72zM10.3 17h-.6c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 01-1.31-1.3 3.24 3.24 0 01-.27-1.24C4 13.46 4 12.58 4 11.3V8.7c0-1.28 0-2.16.06-2.83.05-.66.15-1 .27-1.23a3 3 0 011.3-1.31c.24-.12.58-.22 1.24-.27C7.54 3 8.42 3 9.7 3h.3v1.28c0 .67 0 1.23.04 1.67.03.47.12.88.31 1.28.32.6.81 1.1 1.42 1.42.4.2.81.28 1.28.31.44.04 1 .04 1.67.04H16v2.3c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 01-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06zm5.57-9.5h-1.12c-.71 0-1.2 0-1.58-.03a1.88 1.88 0 01-.71-.16c-.33-.17-.6-.44-.77-.77a1.88 1.88 0 01-.16-.7 21.6 21.6 0 01-.03-1.59V3.13l.01.01.37.36 3.62 3.62.36.37.01.01z"
                                  fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                        Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;