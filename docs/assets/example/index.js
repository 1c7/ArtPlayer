// 这好像只是一个随便写的例子，有些参数的值有点奇怪

var art = new Artplayer({
    container: '.artplayer-app', // 容器
    url: 'https://artplayer.org/assets/sample/video.mp4', // 视频连接 
    title: 'One More Time One More Chance', // 标题
    poster: '/assets/sample/poster.jpg', // 海报
    volume: 0.5, // 音量
    isLive: false, // 是否直播？
    muted: false, // 静音
    autoplay: false, // 自动播放
    pip: true, // ? picture in picture？
    autoSize: true, // 自动缩放？
    autoMini: true, // ？
    screenshot: true, // 允许截图？
    setting: true, // 设置？
    loop: true, // 循环
    flip: true, // 反转
    rotate: true, // 旋转
    playbackRate: true, //? 
    aspectRatio: true, //?
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true, // 字幕偏移
    miniProgressBar: true,
    localVideo: true, // 本地视频
    localSubtitle: true,
    networkMonitor: false,
    mutex: true,
    light: true,
    backdrop: true,
    theme: '#ffad00',
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],
    layers: [
        {
            html: `<img style="width: 100px" src="/assets/sample/layer.png">`,
            click: function () {
                console.info('You clicked on the custom layer');
            },
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px',
                opacity: '.9',
            },
        },
    ],
    quality: [
        {
            default: true,
            name: 'SD 480P',
            url: '/assets/sample/video.mp4',
        },
        {
            name: 'HD 720P',
            url: '/assets/sample/video.mp4',
        },
    ],
    thumbnails: {
        url: '/assets/sample/thumbnails.png',
        number: 100,
        width: 160,
        height: 90,
        column: 10,
    },
    subtitle: {
        url: '/assets/sample/subtitle.srt',
        style: {
            color: '#03A9F4',
        },
        encoding: 'utf-8',
        bilingual: true,
    },
    highlight: [
        {
            time: 60,
            text: 'One more chance',
        },
        {
            time: 120,
            text: '谁でもいいはずなのに',
        },
        {
            time: 180,
            text: '夏の想い出がまわる',
        },
        {
            time: 240,
            text: 'こんなとこにあるはずもないのに',
        },
        {
            time: 300,
            text: '终わり',
        },
    ],
    controls: [
        {
            position: 'right',
            html: 'Control',
            click: function () {
                console.info('You clicked on the custom control');
            },
        },
    ],
    icons: {
        loading: '<img src="/assets/img/ploading.gif">',
        state: '<img src="/assets/img/state.png">',
    },
});
