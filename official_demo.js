var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://artplayer.org/assets/sample/video.mp4',
    title: 'One More Time One More Chance',
    poster: '/assets/sample/poster.jpg',
    volume: 0.5,
    isLive: false, // 如果是直播就没有进度条了
    muted: true, // 初始化是否静音
    autoplay: true, // 自动播放
    pip: false, // 画中画，貌似是 Chrome 自带的那种，窗口可以拖动，true 就会在右下角显示这个按钮
    autoSize: true, // 根据内容大小对播放器大小进行 resize，而不是占满整个容器
    autoMini: true, // 不知道是什么
    screenshot: false, // 是否启用截图功能
    setting: true, // 设置功能
    loop: true, // 自动循环
    flip: false, // 在"设置"里面
    rotate: true, // 在"设置"里面
    playbackRate: false, // 在"设置"里面
    aspectRatio: false, // 在"设置"里面
    fullscreen: false, // 全屏
    fullscreenWeb: true, // 网页全屏
    subtitleOffset: false, // 在"设置"里面 字幕偏移时间
    miniProgressBar: true, // 看不出是什么
    localVideo: false, // 在"设置"里面
    localSubtitle: true, // 在"设置"里面
    networkMonitor: false, // 网络监控？
    mutex: true, // 不知道
    light: true, // 看不出是什么
    backdrop: true, // ? 
    theme: '#ffffff', // 主题颜色
    lang: navigator.language.toLowerCase(),
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    // 自定义右键菜单
    contextmenu: [{
        html: 'Custom menu',
        click: function (contextmenu) {
            console.info('You clicked on the custom menu');
            contextmenu.show = false;
        },
    }, ],
    // 是海报层
    layers: [{
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
    }, ],
    // 不同质量的选择
    quality: [{
            default: true,
            name: 'SD 480P',
            url: '/assets/sample/video.mp4',
        },
        {
            name: 'HD 720P',
            url: '/assets/sample/video.mp4',
        },
    ],
    // 题图
    thumbnails: {
        url: '/assets/sample/thumbnails.png',
        number: 100,
        width: 160,
        height: 90,
        column: 10,
    },
    // 字幕
    subtitle: {
        url: '/assets/sample/subtitle.srt',
        style: {
            color: '#03A9F4',
        },
        encoding: 'utf-8',
        bilingual: true,
    },
    // 高亮什么？
    highlight: [{
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
    // 自定义 control
    controls: [{
        position: 'right',
        html: 'Control2',
        click: function () {
            console.info('You clicked on the custom control');
        },
    }, ],
    icons: {
        loading: '<img src="/assets/img/ploading.gif">',
        state: '<img src="/assets/img/state.png">',
    },
});
