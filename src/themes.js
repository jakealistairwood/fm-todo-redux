import { createGlobalStyle } from 'styled-components';
import BannerImgLight from './assets/imgs/bg-desktop-light.jpg';
import BannerImgDark from './assets/imgs/bg-desktop-dark.jpg';
import BannerImgMobileDark from './assets/imgs/bg-mobile-dark.jpg';
import BannerImgMobileLight from './assets/imgs/bg-mobile-light.jpg';

export const lightMode = {
    body: '#FAFAFA',
    textColor: '#494C6B',
    inputChecked: '#D1D2DA',
    borderColor: '#E3E4F1',
    todosBg: '#FFFFFF',
    placeholderTextColor: '#9495A5',
    footerTextColor: '#9495A5',
    bannerImg: `${BannerImgLight}`,
    bannerImgMob: `${BannerImgMobileLight}`,
    svgFill: '#494C6B'
}

export const darkMode = {
    body: '#171823',
    textColor: '#C8CBE7',
    inputChecked: '#4D5067',
    borderColor: '#393A4B',
    todosBg: '#25273D',
    placeholderTextColor: '#767992',
    footerTextColor: '#5B5E7E',
    bannerImg: `${BannerImgDark}`,
    bannerImgMob: `${BannerImgMobileDark}`,
    svgFill: '#5B5E7E'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }
`