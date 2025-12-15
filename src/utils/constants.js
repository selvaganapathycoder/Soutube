import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";

export const categories = [
    { name: 'New', icon: AiFillHome, type: 'home' },
    { name: 'Trending', icon: MdLocalFireDepartment, type: 'category' },
    { name: 'Music', icon: CgMusicNote, type: 'category' },
    { name: 'Films', icon: FiFilm, type: 'category' },
    { name: 'Live', icon: MdLiveTv, type: 'category' },
    { name: 'Gaming', icon: IoGameControllerSharp, type: 'category' },
    { name: 'News', icon: ImNewspaper, type: 'category' },
    { name: 'Sports', icon: GiDiamondTrophy, type: 'category' },
    { name: 'Learning', icon: RiLightbulbLine, type: 'category' },
    { name: 'Fashion & Beauty', icon: GiEclipse, type: 'category' },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
