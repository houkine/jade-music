/* eslint-disable import/no-anonymous-default-export */
import web_Bg1 from './webView/01.jpg';
import web_Bg2 from './webView/02.jpg';
import web_Bg3 from './webView/03.jpg';
import web_Bg4 from './webView/04.jpg';
import web_Bg5 from './webView/05.jpg';
import mobile_Bg1 from './mobileView/01.jpg';
import mobile_Bg2 from './mobileView/02.jpg';
import mobile_Bg3 from './mobileView/03.jpg';
import mobile_Bg4 from './mobileView/04.jpg';
import mobile_Bg5 from './mobileView/05.jpg';

import {isMobile} from 'react-device-detect'

export default isMobile?
[
    mobile_Bg1,
    mobile_Bg2,
    mobile_Bg3,
    mobile_Bg4,
    mobile_Bg5,
]
:
[
    web_Bg1,
    web_Bg2,
    web_Bg3,
    web_Bg4,
    web_Bg5,
]