import { errorHandle } from '../utils';

function validElement(value, type, paths) {
    return errorHandle(
        type === 'string' || value instanceof Element,
        `${paths.join('.')} require 'string' or 'Element' type`,
    );
}

const component = {
    html: validElement,
    disable: '?boolean',
    name: '?string',
    index: '?number',
    style: '?object',
    click: '?function',
    mounted: '?function',
    tooltip: '?string',
    selector: '?array',
    onSelect: '?function',
};

export default {
    container: validElement,
    url: 'string',
    poster: 'string',
    title: 'string',
    theme: 'string',
    lang: 'string',
    volume: 'number',
    isLive: 'boolean',
    muted: 'boolean',
    autoplay: 'boolean',
    autoSize: 'boolean',
    autoMini: 'boolean',
    loop: 'boolean',
    flip: 'boolean',
    playbackRate: 'boolean',
    aspectRatio: 'boolean',
    screenshot: 'boolean',
    setting: 'boolean',
    hotkey: 'boolean',
    pip: 'boolean',
    mutex: 'boolean',
    light: 'boolean',
    backdrop: 'boolean',
    fullscreen: 'boolean',
    fullscreenWeb: 'boolean',
    subtitleOffset: 'boolean',
    miniProgressBar: 'boolean',
    localVideo: 'boolean',
    localSubtitle: 'boolean',
    networkMonitor: 'boolean',
    plugins: ['function'],
    whitelist: ['string|function|regexp'],
    layers: [component],
    contextmenu: [component],
    controls: [
        {
            ...component,
            position: (value, type, paths) => {
                const position = ['top', 'left', 'right'];
                return errorHandle(
                    position.includes(value),
                    `${paths.join('.')} only accept ${position.toString()} as parameters`,
                );
            },
        },
    ],
    quality: [
        {
            default: '?boolean',
            name: 'string',
            url: 'string',
        },
    ],
    highlight: [
        {
            time: 'number',
            text: 'string',
        },
    ],
    thumbnails: {
        url: 'string',
        number: 'number',
        width: 'number',
        height: 'number',
        column: 'number',
    },
    subtitle: {
        url: 'string',
        style: 'object',
        encoding: 'string',
        bilingual: 'boolean',
    },
    moreVideoAttr: 'object',
    icons: 'object',
    customType: 'object',
};
