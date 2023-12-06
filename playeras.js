if (!window.pljssglobal) var pljssglobalid, pljssglobal = [];

function setCookie(t, e, o) {
    o = 365;
    var n = new Date;
    n.setDate(n.getDate() + o);
    var a = escape(e) + (null == o ? "" : "; expires=" + n.toUTCString());
    document.cookie = t + "=" + a
}

function getCookie(t) {
    var e, o, n, a = document.cookie.split(";");
    for (e = 0; e < a.length; e++)
        if (o = a[e].substr(0, a[e].indexOf("=")), n = a[e].substr(a[e].indexOf("=") + 1), (o = o.replace(/^\s+|\s+$/g, "")) == t) return unescape(n)
}

function HDVBPlayer(options) {
    var o = {
        play: !1,
        audiosrc: [],
        audioctx: [],
        default_w: 640,
        default_h: 360,
        version: "16.6.1",
        compilation: ["HLS", "VASTP"],
        compilations: "",
        fullscreen: !1,
        realfullscreen: !1,
        nativecontrols: !1,
        fullwheel: !1,
        fullscreen_start: !1,
        airplay: !1,
        pipwebkit: !1,
        ispipkit: !1,
        u: {
            screencolor: "000000",
            toolbar: {
                color: "000000",
                hide: 1,
                margin: "-20 0 0 0",
                gradient: 1,
                animation: "alpha",
                a: "1",
                leftandrightpadding: 10,
                h: 50,
                stretchonfullscreen: 1,
                hideuntilstarted: 0,
                hidewithoutmoving: 1,
                hideleavetimeout: 3,
                position: "bottom",
                clickarea: 0,
                hideonpause: 0,
                hidedown: 1,
                hidejustfull: 0
            },
            control_title: {
                order: 1,
                on: 1,
                action: "title",
                type: "text",
                position: "top-left",
                click: 0,
                hand: 0,
                text: "",
                var: "title",
                hide: 1,
                hideonplay: 1,
                animation: "position",
                bg: 1,
                bga: .4,
                bgpadding: "12 12 12 12",
                letterspacing: "0",
                showtitleplaylist: 1,
                font: "Roboto",
                fontsize: 16
            },
            control_line: {
                order: 3,
                on: 1,
                type: "shape",
                action: "line",
                h: 4,
                rounding: "1",
                w: 100,
                a: 1,
                abg: "0.3",
                aload: "0.4",
                aover: "0",
                color: "00abcd",
                colorbg: "ffffff",
                colorload: "ffffff",
                colorover: "ffffff",
                buffer: {
                    on: 0,
                    color: "ffffff",
                    a: .5
                },
                position: "bottom",
                margin: "0 15 50 15",
                handle: 1,
                bgpadding: "5 0 5 0",
                tip: 1,
                hide: 1,
                hideonlive: 1,
                handlescale: "1.3",
                linetipmarginbottom: 15,
                toptip: 1,
                tipbgcolor: "ffffff",
                tipbgrounding: 3,
                expand: "1.7",
                tipcolor: "000000",
                tippadding: "5 7 4 7",
                tipfontsize: 11,
                tipbga: "1",
                tipa: "0.8",
                linetippointer: 1,
                animation: "position",
                tipmargin: "0 0 0 0",
                customwidth: 0,
                ontop: 1,
                pointed: 1,
                clickarea: 0,
                value: 0,
                clickmargin: "0 0 5 0",
                clickscaley: "1.1",
                click: 1
            },
            control_play: {
                order: 2,
                on: 1,
                icon: "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(5, 3)'><path d='M11.4463462,6.1578125 L1.14019231,0.11666667 C1.01432692,0.04375 0.88475962,0 0.73668269,0 C0.33317308,0 0.00370192,0.328125 0.00370192,0.72916667 L0,0.72916667 L0,13.2708333 L0.00370192,13.2708333 C0.00370192,13.671875 0.33317308,14 0.73668269,14 C0.88846154,14 1.01432692,13.9489583 1.15129808,13.8760417 L11.4463462,7.8421875 C11.6906731,7.6416667 11.8461538,7.3390625 11.8461538,7 C11.8461538,6.6609375 11.6906731,6.36197917 11.4463462,6.1578125 L11.4463462,6.1578125 Z' fill='#ffffff'/></g></svg>",
                icon2: "<svg width='20' height='20'><g fill='#000000' transform='translate(4, 3)'><path d='M7.70769228,0.777778067 L7.70769228,13.2222222 C7.70769228,13.651777 8.09112021,14 8.56410253,14 L11.1333333,14 C11.6063156,14 11.9897435,13.651777 11.9897435,13.2222222 L11.9897435,0.777777778 C11.9897435,0.348222972 11.6063156,0 11.1333333,0 L8.56410253,0 C8.09112021,0 7.70769228,0.348222972 7.70769228,0.777777778 Z M3.42564101,14 L0.856410253,14 C0.383427931,14 0,13.651777 0,13.2222222 L0,0.777777913 C0,0.348222972 0.383427931,0 0.856410253,0 L3.42564101,0 C3.89862334,0 4.28205127,0.348222972 4.28205127,0.777777778 L4.28205127,13.2222222 C4.28205127,13.651777 3.89862334,14 3.42564101,14 Z' fill='#ffffff'/></g></svg>",
                icon3: "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#ffffff'></path></g></svg>",
                action: "play",
                action2: "pause",
                type: "svg",
                scale: "1",
                scaleover: "1",
                margin: "0 0 0 5",
                bgcolorover: "-1",
                a: "1",
                aover: "-1",
                tip: 1,
                iconscolorover: "000000",
                iconscolor: "-1",
                bg: 1,
                bgcolor: "00abcd",
                bgpadding: "5 7 5 7",
                bgaover: "1",
                bga: "0",
                bgo: "0.2",
                iconmargin: "0 0 0 2",
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                tipbgrounding: 3,
                tipbga: "1",
                tipfontsize: 11,
                tippadding: "7 7 7 7",
                tipa: "0.7",
                animation: "position",
                tippointer: 1,
                tippointeralign: "left",
                iconsreplay: 1,
                hide: 0
            },
            control_mute: {
                order: 8,
                on: 1,
                icon: "<svg width='20' height='20'><g transform='translate(3, 2)'><polygon fill-rule='nonzero' points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M10.44167,3.62185 C10.17405,3.31419 9.74434,3.31419 9.47808,3.62343 C9.21251,3.93268 9.21251,4.43332 9.47944,4.74335 L9.47944,4.74178 C10.06713,5.42512 10.42941,6.36234 10.42941,7.40396 C10.42941,8.44479 10.06781,9.37885 9.4808,10.06219 C9.2125,10.36985 9.2125,10.87049 9.47944,11.18131 C9.61223,11.33554 9.78657,11.41304 9.9609,11.41304 C10.13591,11.41304 10.31024,11.33554 10.44303,11.18131 C11.27519,10.21641 11.79138,8.87583 11.7907,7.40396 C11.79138,5.92892 11.27315,4.58676 10.44167,3.62186 L10.44167,3.62185 Z' id='pjs_volume_element1' fill='#ffffff'/><path d='M11.99413,1.86278 C11.72289,2.17257 11.72289,2.67489 11.99413,2.98309 C12.99747,4.13271 13.61608,5.71413 13.61608,7.46829 C13.61608,9.22085 12.99747,10.80149 11.99552,11.9519 C11.72427,12.26089 11.72427,12.76243 11.99552,13.07221 C12.13045,13.22671 12.3076,13.30435 12.48543,13.30435 C12.66256,13.30435 12.83971,13.22671 12.97464,13.07221 C14.22569,11.63894 15.00138,9.65345 15,7.46829 C15.00069,5.28154 14.225,3.29446 12.97187,1.86278 C12.69993,1.55299 12.2633,1.55299 11.99413,1.86278 L11.99413,1.86278 Z' id='pjs_volume_element2' fill='#ffffff'/></g></svg>",
                icon2: "<svg width='20' height='20'><g fill-rule='nonzero' fill='#000000' transform='translate(3, 2)'><polygon points='8.8817842e-16 4.3746 8.8817842e-16 10.62539 3.10029 10.62539 7.74143 15 7.74419 0 3.10237 4.37461 1.77635684e-15 4.37461 1.77635684e-15 4.3746' fill='#ffffff'/><path d='M11.9267767,6.64744791 L9.87932726,4.59999847 L9,5.47932573 L11.0474494,7.52677517 L9,9.57422461 L9.87932726,10.4535519 L11.9267767,8.40610243 L13.9742261,10.4535519 L14.8535534,9.57422461 L12.806104,7.52677517 L14.8535534,5.47932573 L13.9742261,4.59999847 L11.9267767,6.64744791 Z' fill='#ffffff'/></g></svg>",
                action: "mute",
                action2: "unmute",
                type: "svg",
                margin: "0 0 0 10",
                bg: 1,
                bgcolor: "00abcd",
                bgo: "0.2",
                bgpadding: "5 5 5 7",
                iconmargin: "0 0 0 -1",
                bgaover: "1",
                bga: "0",
                tip: 1,
                tippadding: "7 7 7 7",
                tipbga: "1",
                tipfontsize: 11,
                tipbgrounding: 3,
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                tipa: "0.7",
                animation: "alpha",
                tippointer: 1,
                tippointeralign: "left",
                tiptext: "",
                position: "controls",
                hide: 1,
                hideonmobile: 1,
                displayvolume: 1,
                hideoverwidth: 0,
                hideondesktop: 0,
                iconscolor: "-1",
                iconscolorover: "000000"
            },
            control_volume: {
                order: 9,
                on: 1,
                type: "shape",
                action: "volume",
                h: 4,
                rounding: "1",
                customwidth: 1,
                w: 70,
                a: 1,
                abg: "0.3",
                aover: "0",
                color: "00abcd",
                colorbg: "ffffff",
                colorover: "ffffff",
                hide: 1,
                hideoutmute: 1,
                rotation: "",
                bgpadding: "5 0 5 0",
                bg: 0,
                handle: 1,
                position: "controls",
                margin: "0 0 0 10",
                animation: "alpha",
                hideuntilstarted: 0,
                hideonleave: 0,
                handlescale: "1.3",
                handlecolor: "-1",
                expand: "1.4",
                tip: 1,
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                linetipmarginbottom: 15,
                tipbga: "1",
                tipbgrounding: 3,
                linetippointer: 1,
                tipfontsize: 11,
                ontop: 1,
                handlehide: 0,
                clickarea: 0,
                hideonmobile: 1
            },
            control_time: {
                order: 5,
                on: 1,
                action: "time",
                type: "text",
                text: "0:00",
                fontsize: 11,
                margin: "1 0 0 10",
                click: 0,
                separator: "/",
                inversetime: 0,
                animation: "position",
                showduration: 1,
                letterspacing: "1",
                font: "Roboto"
            },
            control_duration: {
                order: 7,
                on: 1,
                action: "duration",
                type: "text",
                text: "-  0:00",
                fontsize: 11,
                margin: "1 0 0 0",
                click: 0,
                animation: "position",
                tip: 0,
                tiptext: "Длительность",
                hide: 0,
                hideonlive: 1,
                hideondesktop: 0,
                position: "controls",
                font: "Roboto",
                letterspacing: "1"
            },
            control_buffer: {
                order: 6,
                on: 1,
                icon: "<div class='loader(rand)'><svg class='circular(rand)' viewBox='25 25 50 50'><circle class='path(rand)' stroke='(color)' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div>|||.loader(rand) {position: relative;margin: 0 auto;width: 50px;}.loader(rand):before {content: '';display: block;padding-top: 100%;}.circular(rand) {-webkit-animation: rotate 2s linear infinite;animation: rotate 2s linear infinite;height: 100%;-webkit-transform-origin: center center;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}.path(rand) {stroke-dasharray: 1, 200;stroke-dashoffset: 0;-webkit-animation: dash 1.5s ease-in-out infinite;animation: dash 1.5s ease-in-out infinite;}@-webkit-keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes rotate {100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@-webkit-keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}@keyframes dash {0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}}",
                action: "buffer",
                type: "css",
                position: "center",
                scale: 1,
                click: 0,
                hide: 1
            },
            control_settings: {
                order: 13,
                on: 1,
                icon: "<svg width='20' height='20'><g fill-rule='nonzero' transform='translate(1, 1)'><path d='M9.95921636,0 L11.0734352,2.42298075 L12.084278,2.97683675 L14.5654263,1.86912475 L16.0013553,3.35766689 L15.1972647,5.84141709 L15.4154756,6.83068435 L17.8737063,7.7883911 L18,9.84229954 L15.5533514,10.8000063 L15.0708477,11.8384089 L16.0816905,14.3422093 L14.6566042,15.8135479 L12.1531543,14.7692045 L11.0274766,15.2422408 L10.0855101,17.60767 L8.06382454,17.7 L6.98410547,15.2884058 L5.8124692,14.7807148 L3.44615574,15.8537721 L1.96426811,14.4345393 L2.92927551,11.8845739 L2.36631345,10.8230269 L0,9.89997483 L0.0230409069,7.82304578 L2.44677181,6.84231842 L2.94073435,5.84141709 L1.88393297,3.35766689 L3.33132085,1.89226913 L5.86988664,2.89614086 L6.97264662,2.4807798 L7.9375308,0.0460412136 L9.95921636,0 Z M8.84993873,6 C7.27603345,6 6,7.27601328 6,8.84993974 C6,10.4239867 7.27603345,11.7 8.84993873,11.7 C10.4239666,11.7 11.7,10.4239867 11.7,8.84993974 C11.7,7.27601328 10.4239666,6 8.84993873,6 Z' fill='#ffffff'/></g></svg>",
                action: "settings",
                position: "controls-right",
                margin: "0 7 0 0",
                type: "svg",
                scale: "1",
                tip: 1,
                tipbgrounding: 3,
                animation: "position",
                bg: 1,
                bgpadding: "5 7 5 7",
                bgcolor: "00abcd",
                bgo: "0.2",
                bgaover: "1",
                bga: "0",
                iconmargin: "0 0 0 0",
                tippadding: "7 7 7 7",
                tipbga: "1",
                tipa: "0.7",
                tipfontsize: 11,
                tipletterspacing: 0,
                tipcolor: "000000",
                tipbgcolor: "ffffff",
                tippointer: 1,
                tippointeralign: "right",
                tiptext: "",
                hdicon: 0,
                hide: 1,
                hideonlive: 0,
                iconscolorover: "000000"
            },
            control_playlist: {
                order: 10,
                on: 0,
                icon: "<svg width='17px' height='16px' viewBox='2 2 17 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n    <g id='Group-2' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(3.000000, 3.000000)' stroke-linecap='round' stroke-linejoin='round'>\n        <path d='M0,1 L14.5187304,1' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,7 L14.5187304,7' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n        <path d='M0,13 L14.5187304,13' id='Line' stroke='#FFFFFF' stroke-width='2'></path>\n    </g>\n</svg>",
                action: "playlist",
                position: "center",
                margin: "10 0 0 25",
                bg: 0,
                scale: "1.5",
                type: "svg",
                animation: "position",
                bgpadding: "0 10 10 0",
                bga: "0",
                bgaover: "1",
                tip: 1,
                bgcolor: "1aaeff",
                bgo: "0.2",
                bgborder: 0,
                bgbordercolor: "ffffff",
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                tippointer: 1,
                tippointeralign: "left",
                tipbgrounding: 3,
                tipfontsize: 11,
                tippadding: "7 7 7 7",
                tipbga: "1",
                tipmargin: "0 0 50 -40",
                tiptext: "Список видео"
            },
            control_full: {
                order: 14,
                on: 1,
                icon: "<svg width='18' height='18'><path d='M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z' fill='#ffffff'></path></svg>",
                icon2: "<svg width='18' height='18'><path d='M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z' fill='#ffffff'></path></svg>",
                action: "fullscreen",
                action2: "normalscreen",
                type: "svg",
                position: "controls-right",
                margin: "0 5 0 0",
                scale: "0.9",
                bg: 1,
                bgpadding: "6 6 6 6",
                bgcolor: "00abcd",
                bgo: "0.2",
                bga: "0",
                bgaover: "1",
                tip: 1,
                tipfontsize: 11,
                tipbga: "1",
                tipa: "0.7",
                tippadding: "7 7 7 7",
                tipbgrounding: 3,
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                animation: "position",
                iconmargin: "0 2 3 0",
                tippointer: 1,
                tippointeralign: "right",
                tiptext: "",
                bgcolorover: "-1",
                iconscolor: "-1",
                iconscolorover: "000000"
            },
            control_start: {
                order: 15,
                position: "center",
                scale: "1.7",
                on: 1,
                icon: "<svg width='20' height='20'><g transform='translate(5, 4)'><path d='M0,1.83904568 C0,-0.631980859 0.907083109,-0.146014346 2.40597269,0.622599916 C3.90486227,1.39121418 8.89667439,4.24359085 10.0399091,4.89209002 C11.1831438,5.54058918 12.0741164,6.58206252 10.1532945,7.77118159 C8.23247258,8.96030066 4.8935176,10.9975669 2.4467588,12.2535752 C0,13.5095835 0,13.2091938 2.44492056e-16,11.1339964 C7.54353019e-16,9.05879912 1.66254598e-16,4.31007221 0,1.83904568 Z' fill='#ffffff'></path></g></svg>",
                icon3: "<svg width='20' height='20'><g transform='translate(2, 3)'><path d='M16,7.13661132 L16,7.10916945 L15.2081785,7.10916945 L14.275093,7.10916945 C14.275093,3.19912625 11.063197,0 7.13754645,0 C3.21189591,0 0,3.19912625 0,7.10916945 C0,11.0192126 3.21189591,14.2183389 7.13754645,14.2183389 L7.13754645,12.4410465 C4.19330855,12.4410465 1.78438662,10.0417018 1.78438662,7.10916945 C1.78438662,4.17663705 4.19330855,1.77729236 7.13754645,1.77729236 C10.0817844,1.77729236 12.4907063,4.17663705 12.4907063,7.10916945 L10.6445167,7.10916945 L13.3828996,11.5524004 L16,7.13661132 Z' fill='#ffffff'></path></g></svg>",
                action: "play",
                type: "svg",
                bg: 1,
                bgcolor: "00abcd",
                bgo: "1",
                bgpadding: "10 10 10 10",
                iconmargin: "0 0 0 0",
                bga: "1",
                bgaover: "-1",
                scaleover: "2.2",
                hide: 1,
                hideonplay: 1,
                hideonyoutube: 1,
                bgborder: 0,
                a: "1",
                tip: 0,
                tiptext: "Воспр.///Пауза",
                iconscolor: "000000",
                animation: "none",
                margin: "0 0 0 0",
                iconsreplay: 0,
                aover: "0.9",
                hideonpause: 0,
                hideonleave: 0
            },
            control_live: {
                order: 4,
                on: 1,
                text: "<span style='color:#55a81e'>●</span> <span style='font-size:10px'>LIVE</span>",
                letterspacing: "2",
                action: "live",
                type: "text",
                hand: 1,
                click: 1,
                fontsize: 12,
                margin: "0 0 0 10",
                a: "1",
                hide: 1,
                hideonvod: 1,
                font: "Arial",
                tip: 1,
                tiptext: "Прямой эфир",
                clickarea: 1
            },
            control_stop: {
                order: 16,
                on: 0,
                icon: "<svg width='20' height='20'><g transform='translate(4, 4)'><rect x='0' y='0' width='12' height='12' fill='#ffffff'/></g></svg>",
                action: "stop",
                type: "svg",
                bg: 0
            },
            control_prev: {
                order: 17,
                on: 0,
                icon: "<svg width='20' height='20'><g transform='translate(5.5, 5)'><path d='M8.99999,10.43749 L8.99999,10.4375 L2,5.21875 L8.99999,0 L8.99999,10.43749 Z M0,0 L2,0 L2,10.24983 L0,10.24983 L0,0 Z' fill='#ffffff'/></g></svg>",
                action: "prev",
                type: "svg",
                scale: 1.2,
                position: "controls-bottom",
                margin: "0 0 0 15"
            },
            control_next: {
                order: 18,
                on: 0,
                icon: "<svg width='20' height='20'><g transform='translate(5, 5)'><path d='M0.46948,1e-05 L0.46948,1e-05 L0.46948,0 L7.46947,5.21875 L0.46948,10.4375 L0.46948,1e-05 Z M7.53052,0 L9.53052,0 L9.53052,10.62482 L7.53052,10.62482 L7.53052,0 Z' fill='#ffffff'/></g></svg>",
                action: "next",
                type: "svg",
                scale: 1.2,
                position: "controls-bottom",
                margin: "0 0 0 15"
            },
            control_share: {
                order: 19,
                on: 0,
                icon: "<svg width='20' height='20'><g fill='#000000' transform='translate(2, 2)'><path d='M5.5662845,8.26248366 C5.5662845,8.31742532 5.55410017,8.36915611 5.55096705,8.423741 L11.1639402,11.2990803 C11.6445251,10.8820232 12.2593116,10.6217638 12.938501,10.6217638 C14.4655458,10.622299 15.7029517,11.8904166 15.7029517,13.455005 C15.7029517,15.0215556 14.4655458,16.2896732 12.938501,16.2896732 C11.4102378,16.2896732 10.1740504,15.0215556 10.1740504,13.455005 C10.1740504,13.3986363 10.1862347,13.3481542 10.1893679,13.2935693 L4.57639463,10.41823 C4.0944173,10.8336816 3.48102327,11.093941 2.80183384,11.093941 C1.27496309,11.093941 0.0373831776,9.82707208 0.0373831776,8.26248366 C0.0373831776,6.69628979 1.27496309,5.42781546 2.80183384,5.42781546 C3.48102327,5.42781546 4.09459137,5.68968022 4.57639463,6.10513188 L10.1893679,3.22979258 C10.1862347,3.17485093 10.1740504,3.12312015 10.1740504,3.06675144 C10.1740504,1.50359007 11.4102378,0.235294118 12.938501,0.235294118 C14.4655458,0.235294118 15.7029517,1.50359007 15.7029517,3.06675144 C15.7029517,4.63294531 14.4655458,5.90141964 12.938501,5.90141964 C12.2577451,5.90141964 11.6440029,5.63955488 11.1639402,5.22249779 L5.55096705,8.09944252 C5.55392611,8.15438418 5.5662845,8.20611499 5.5662845,8.26248366' fill='#ffffff'/></g></svg>",
                action: "share",
                type: "svg",
                position: "top-right",
                margin: "15 15 0 0",
                bg: 1,
                bgo: 1,
                scale: 1,
                bgpadding: "6 6 6 6",
                bga: .3,
                bgaover: .6,
                animation: "position",
                ease: "elastic",
                hide: 1,
                hideonleaveandplay: 0,
                hideonplay: 1,
                tip: 1
            },
            settings: {
                settings4: 0,
                settings4action: "channel",
                rounding: 5,
                bgcolor: "ffffff",
                color: "000000",
                bga: "1",
                valuecolor: "000000",
                padding: "5 10 5 10",
                margin: "0 10 12 0",
                bgcolorover: "f0f0f0",
                settings5: 0,
                settings5action: "download",
                headfontsize: 12,
                bordercolored: 1,
                bordercolor: "bfbfbf",
                settings3title: "",
                settings3: 1,
                settings2: 1,
                settings1: 1,
                position: "bottom-right",
                scrollarrows: 1,
                settings1title: "",
                showovercontrol: 0,
                fontsize: 12,
                settings2action: "speed",
                settings2title: "",
                settings3action: "scale",
                activeicon: 1,
                nohead: 1,
                activeiconsize: 3,
                limitwidth: 0,
                hidearrow: 0,
                always: 0,
                show1value: 1,
                customspeeds: 0,
                valuefontsize: 12,
                settings1hide: 0,
                settings3hide: 0,
                speed4live: 1,
                settings4title: "",
                font: "Roboto"
            },
            control_pip: {
                on: 1,
                order: 11,
                action: "custom",
                icon: "<svg width='20' height='20'><g transform='translate(0, 2)'><polygon fill-rule='nonzero' points='1.85008844 1.51464844 18.2421138 1.51464844 18.2421138 7.74121094 19.2421138 7.74121094 19.2421138 0.514648438 0.850088443 0.514648438 0.850088443 11.7244572 9.16539331 11.7758693 9.17157603 10.7758885 1.85008844 10.7306209' fill='#ffffff'></polygon><rect x='10.5' y='9' width='9.5' height='6' fill='#ffffff'></rect><path d='M8.49517931,6.9934339 L4.58268904,3.10539669 L3.87780235,3.81471662 L7.75590296,7.6685791 L5.14025649,7.6685791 L5.14025649,8.6685791 L9.49517931,8.6685791 L9.49517931,4.64446771 L8.49517931,4.64446771 L8.49517931,6.9934339 Z' fill-rule='nonzero' fill='#ffffff'></path></g></svg>",
                type: "svg",
                position: "controls-right",
                margin: "0 7 0 0",
                link: 1,
                linkurl: "api:pipwebkit",
                hide: 0,
                bg: 1,
                bgcolor: "00abcd",
                bgcolorlink2: "-1",
                iconscolorover: "000000",
                bgo: "0.2",
                bga: "0",
                bgaover: "1",
                bgpadding: "5 7 5 7",
                tip: 1,
                tiptext: "Свернуть видео",
                tipbgrounding: 3,
                tipfontsize: 11,
                tipbga: "1",
                tipa: "0.7",
                tipbgcolor: "ffffff",
                tipcolor: "000000",
                tippadding: "7 7 7 7",
                animation: "position",
                iconmargin: "0 0 0 1",
                tippointer: 1,
                tippointeralign: "right"
            },
            playlist: {
                hidecontrol: 1,
                bgcolor: "aec7bc",
                color: "000000",
                valuecolor: "000000",
                bga: "1",
                historybgcolor: "aec7bc",
                bgcolorover: "9db1a8",
                bordercolored: 1,
                bordercolor: "dedede",
                rounding: 3,
                margin: "10 10 0 10",
                floatleft: 1,
                droplist: 1,
                always: 1,
                historycolor: "000000",
                borderbottom: 0,
                historytitlestrike: 1,
                dropclrs: 1,
                playbgcolored: 1,
                playbgcolor: "9db1a8",
                font: "Roboto",
                dropbgcolor: "00abcd",
                dropcolor: "000000",
                always: 1,
                autoplaylist: 1,
                openplaylistbefore: 1,
                openlast: 0,
                dropautoplay: 1
            },
            rounding: 0,
            border: 0,
            bgcolor: "ffffff",
            shadow: 0,
            effects: 0,
            effectblur: 1,
            effectgray: 0,
            fonts: 1,
            fontnames: "Roboto",
            lang: "ru",
            log: 0,
            alerts: 1,
            posteronpause: 0,
            eventstracker: 1,
            events: "HDVBPlayerEvents",
            eventlisteners: 0,
            eventstrackervast: 0,
            hotkey: {
                seeksides: 1,
                nums: 0,
                m: 0,
                volumewheelfull: 0
            },
            hls: 0,
            hlsvastwait: 0,
            hlsdvrtime: 0,
            hlsaudio: 1,
            thumbs: 0,
            union: 0,
            yamtr: 0,
            youtubeposter: 1,
            landfullmobile: 1,
            reload: 1,
            fullonplay: 0,
            rc_custom: 1,
            rc_anyway: 0,
            rc_label: "HDVB Player",
            stopotherplayers: 1,
            ssfly: 0,
            ssflyw: 1920,
            sscopyright: 0,
            nativecontrolsmobile: 0,
            version: -1,
            tagcors: 1,
            transbg: 0,
            ga: 0,
            intros: 0,
            intro: "",
            introstart: 60,
            chromecast: {
                on: 1
            },
            share2: "vk",
            share3: "telegram",
            share4: "whatsapp",
            shareiconscale: "2.9",
            tags: 0,
            pip: {
                on: 0
            },
            postmessage: 1,
            observer: 1,
            ga_event: {
                error: 1,
                end: 1,
                play25: 1,
                play50: 1,
                play75: 1
            },
            redirect: 0,
            water: 0,
            livewakeup: 1,
            channels: 0,
            channel2off: 1,
            channel0title: "Ru",
            channel1title: "En",
            pass: 0,
            dash: 0,
            lang_it: 0,
            lang_cz: 0,
            finishrewind: 0,
            reloadtimeout: 10,
            landscapefull: 1,
            lsfullstart: 0,
            lsfullplay: 0,
            flussonic: 0,
            ynxnopip: 1,
            apiprm: {
                on: 0,
                pld: 0
            },
            timestore: 1,
            timestore0plroot: 1,
            timestorenolive: 1,
            playedstore: 0,
            midrolls: 1,
            vast_midrollrest: 10,
            vast_preroll_counter: 1,
            ad: 0,
            preload: 0,
            prerolls: 1,
            vast: 1,
            banner: 1,
            pausebanner: [],
            etag: 0,
            stag: 0,
            s2tag: 0,
            qrtag: 0,
            endtag: [],
            starttag: [],
            start2tag: [],
            pushbanner: []
        },
        u2: "",
        u3: "",
        u4: "",
        u5: "",
        u6: "",
        u7: "",
        u8: "",
        u9: "",
        y: "xx???x=xxx???=",
        p: {
            x: ["preroll", "pauseroll", "postroll", "midroll"]
        },
        isflash: -1,
        brand: "HDVB",
        brandurl: "//hdvb.cc",
        motions: [],
        dt: !0,
        pr: !0,
        ga: !1,
        ab: !1,
        gatracked: [],
        pjsga: !1,
        pltxt: "//.txt//",
        files_quality: [],
        files_audiotrack: [],
        files_quality_ag: [],
        files_subtitle: [],
        files_channel: [],
        plhistory: [],
        rightclick: 0,
        vastclick: !1,
        focus: !1,
        start: !1,
        start2: !1,
        metadata: !1,
        ni: "<noindex>",
        ni2: "</noindex>",
        small: window.screen.width < 1e3 && window.screen.height < 1e3,
        moving: [],
        moved: [],
        menuproc: {
            scale: 1,
            contrast: 1,
            brightness: 1,
            saturate: 1,
            sepia: 0
        },
        fltrs: [],
        piped: 0,
        live: !1,
        subtitle_on: !1,
        starttimeout: !1,
        thumbs_on: !1,
        thumbs_img: [],
        noads: !1,
        clicks: 0,
        airplayed: !1,
        timerInterval: void 0,
        toolbarInterval: void 0,
        toolbarhidden: !1,
        KKReydtB: function(t) {},
        reloaderTimer: 0,
        timerTime: 200,
        tagvideo: !1,
        controlover: !1,
        doctype: document.doctype,
        d: location.hostname,
        domain: location.hostname,
        href: location.href,
        https: 0 == location.href.indexOf("https"),
        logos: {},
        gaurl: "google-analytics.com/analytics.js",
        fd: ["KKReydtB", "QhbZazyH"],
        files_speed: [],
        files_scale: [],
        files_sleep: [],
        custom_speed: 1,
        gifed: [],
        QhbZazyH: function(t) {},
        time: 0,
        timeld: 0,
        casting: !1,
        dk: -1,
        current_speed: 3,
        current_sleep: 0,
        vastgo: 0,
        reloadTimer: 0,
        mediascale: {
            x: 1,
            y: 1,
            x0: 1,
            y0: 1
        },
        sub_options: ["sub_sizeproc", "sub_color", "sub_color2", "sub_bgcolor", "sub_bga", "sub_shadow", "sub_weight", "sub_bottom", "sub_shift", "sub_reset"],
        clr_options: ["clr_contrast", "clr_brightness", "clr_saturate", "clr_sepia"],
        vast_impressions: 0,
        vast_impressions_all: 0,
        vast_starts: 0,
        vpaid_starts: 0,
        vast_longtimeout: 0,
        midrollimprsd: [],
        vsts: ["preroll", "pauseroll", "postroll", "midroll"],
        vast_remove: [],
        adsfirst: !0,
        overlays: [],
        stuck: 0,
        ws: "ws",
        acted: !1,
        quartile: [!1, !1, !1],
        p2p: !1,
        file_path: "/playlist/"
    };
    "object" == typeof o_params && Object.keys(o_params.u).length > 0 && Object.keys(o_params.u).forEach(function(t) {
        "playlist" == t ? Object.keys(o_params.u.playlist).forEach(function(t) {
            o.u.playlist[t] = o_params.u.playlist[t]
        }) : o.u[t] = o_params.u[t]
    }), "playlist" in o.u && (o.u.playlist.on = 1, o.u.playlist.dontplay = 1, o.u.playlist.openlast = 1), "control_line" in o.u && (o.u.control_line.pointed = 1), o.u.timestore = 1;
    let customParams;

    function getVastUrl(t, e) {
        let n = t.split("#"),
            a = -1 != n[0].indexOf("?") ? "&" : "?",
            s = "host" in o.p ? o.p.host : "VASTHost_Fail";
        return "masterHash" in o.p && "host" in o.p && (s = `${o.p.masterHash}|${e}|${o.p.host}`), `${n[0]}${a}cp.host=${s}&cp.domain=${o.p.host}&cp.ip=${"userIp"in o.p?o.p.userIp:"VASTIP_Fail"}&cp.token=${o.p.movie}#${n[1]}`
    } ["host", "masterId", "masterHash", "userIp", "movie", "key", "href", "kp", "uniq_hash", "translator"].map(function(t) {
        t in options && (o.p[t] = options[t])
    });
    let pointsArr = [];
    if ("rek" in options) {
        if ("preroll" in options.rek) {
            if (options.rek.preroll.length > 0) {
                o.u.ad = 1, o.u.vast_jsblck = 0;
                let prerollIntCounter = 1,
                    prerollNumCounter = 0;
                options.rek.preroll.map(function(t) {
                    o.p["hdvb_preroll_" + prerollIntCounter] = {
                        title: "HDVB Preroll " + prerollIntCounter,
                        id: "hdvbpreroll_" + prerollIntCounter,
                        preroll: getVastUrl(t, 1 == prerollIntCounter ? "6" : "7")
                    }, o.u["partnerpreroll_" + prerollIntCounter] = "hdvb_preroll_" + prerollIntCounter, prerollNumCounter > 0 && (o.u["partnerprerollor" + prerollNumCounter] = "and"), o.u.vast_preroll_limit = prerollIntCounter, prerollIntCounter++, prerollNumCounter++
                })
            } else o.u.prerolls = 0
        } else o.u.prerolls = 0;
        if ("midroll" in options.rek) {
            if (options.rek.midroll.length > 0) {
                o.u.ad = 1, o.u.vast_jsblck = 0;
                let midrollIntCounter = 1;
                options.rek.midroll.map(function(t) {
                    o.p["hdvb_midroll_" + midrollIntCounter] = {
                        title: "HDVB Midroll " + midrollIntCounter,
                        id: "hdvbmidroll_" + midrollIntCounter,
                        preroll: getVastUrl(t.url, 8),
                        pauseroll: getVastUrl(t.url, 8),
                        postroll: getVastUrl(t.url, 8),
                        midroll: getVastUrl(t.url, 8)
                    };
                    let e = parseInt(t.time > 0 ? t.time.replace("%", "") : "");
                    pointsArr.push({
                        time: e,
                        width: 2
                    }), o.u["partnermidroll_" + midrollIntCounter] = "hdvb_midroll_" + midrollIntCounter, o.u["partnermidrolltimes" + (midrollIntCounter > 1 ? midrollIntCounter : "")] = t.time, o.u["midroll" + (midrollIntCounter > 1 ? midrollIntCounter : "")] = "prthdvb_midroll_" + midrollIntCounter + "_" + t.url, midrollIntCounter > 1 && (o.u.partnermidrollor = "and", o.u.vast_midroll_limit = midrollIntCounter), midrollIntCounter++
                })
            } else o.u.midrolls = 0
        } else o.u.midrolls = 0;
        "pausebanner" in options.rek && options.rek.pausebanner.show ? o.u.pausebanner = {
            key: options.rek.pausebanner.key,
            script: options.rek.pausebanner.script
        } : o.u.banner = 0, "endtag" in options.rek ? (o.u.etag = 1, o.u.endtag = options.rek.endtag) : o.u.etag = 0, "starttag" in options.rek ? (o.u.stag = 1, o.u.starttag = options.rek.starttag) : o.u.stag = 0, "start2tag" in options.rek ? (o.u.s2tag = 1, o.u.start2tag = options.rek.start2tag) : o.u.s2tag = 0, "pushbanner" in options.rek && (o.u.pushbanner = options.rek.pushbanner), "qr_code" in options.rek ? null !== options.rek.qr_code && (o.u.qrcode = options.rek.qr_code, o.u.qrtag = 1) : o.u.qrtag = 0
    }
    var default_style = {
        but: {
            w: 20,
            h: 20,
            action: "-",
            action_back: "-",
            a: 1,
            aover: -1,
            color: "ffffff",
            type: "",
            scale: 1,
            scaleover: -1,
            rotation: 0,
            tip: 1,
            icon: "",
            text: "",
            font: "Verdana",
            fontsize: 12,
            letterspacing: 0,
            position: "controls",
            margin: "0 3 0 3",
            marginproc: "0 0 0 0",
            click: 1,
            clickmargin: "0 0 0 0",
            normalonclick: 0,
            hand: 1,
            bg: 0,
            bgo: 0,
            bgstretch: 0,
            bga: 1,
            bgaover: -1,
            bgcolor: "000000",
            bgcolorover: -1,
            bgpadding: "0 0 0 0",
            bgborder: -1,
            bgbordercolor: "ffffff",
            iconscolor: -1,
            iconscolorover: -1,
            animation: "none",
            target: "_blank",
            tip: 0,
            tipbgcolor: "000000",
            tipbga: .7,
            tipbgrounding: 0,
            tipcolor: "ffffff",
            tippadding: "3 5 3 5",
            tippmargin: "0 0 0 0",
            tipa: 1,
            tipfont: "sans-serif",
            tipfontsize: 11,
            tipletterspacing: 0,
            tiptext: "",
            linetipmarginbottom: 5,
            toptip: 0,
            hidden: 0,
            stripsw: 2,
            stripsspace: 2,
            linespeed1: .2,
            linespeed2: 0,
            linespeed3: .1,
            pointed: 0,
            pointcolor: "ffce00",
            pointa: 1,
            pointw: 5,
            gradientcolorbg: "000000",
            gradientcolorload: "ffffff",
            gradientcolor: "ffffff",
            ontop: 1,
            clickscalex: 1,
            clickscaley: 1,
            rounding: 0,
            handle: 0,
            handle_width: 20,
            handleicon: "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>",
            handlea: 1,
            handleaover: -1,
            handlehide: 0,
            handlescale: 1,
            handlecolor: -1,
            slidespeed: .1,
            link: 0,
            linkurl: "",
            linkpause: 0,
            linktarget: "_blank",
            src: "",
            hideonwidthlimit: 700,
            hideoverwidthlimit: 700,
            displayvolume: 0,
            value: 0,
            valuecolor: "ffffff",
            valuebg: 0,
            valuebgcolor: "000000",
            valuesize: 9,
            valuemargin: "0 0 10 0",
            valuepadding: "0 0 0 0",
            valuerounding: 0
        }
    };

    function prtObj() {
        if (1 == v.vast && exist2(o.p)) {
            for (var t = o.p, e = 0; e < t.x.length; e++) {
                exist(v[t.x[e]]) || (v[t.x[e]] = "");
                for (var n = 1; n < 10; n++) {
                    var a = v[t.x[e] + "_deny"] ? v[t.x[e] + "_deny"].split(",") : [],
                        s = v["partner" + t.x[e] + "_" + n];
                    if (exist(s) && "" != s) {
                        "midroll" == t.x[e] && 1 == n && (v[t.x[e]] = "");
                        var r = t[s];
                        if (exist(r)) {
                            var l = t.x[e];
                            if ("midroll" == l && (l = "preroll"), r.id && a.indexOf(r.id) > -1 && (r[l] = ""), r[l] && "" != r[l]) {
                                if (r[l] = r[l].replace(" and ", ""), r[l] = r[l].replace("http://", "//"), v["partner" + t.x[e] + "geo" + n] && "" != v["partner" + t.x[e] + "geo" + n]) {
                                    var d = "[geo:" + v["partner" + t.x[e] + "geo" + n] + "]"; - 1 == r[l].indexOf(d) && (r[l] = r[l] + d)
                                }
                                var c = v["partner" + t.x[e] + "or"],
                                    u = n > 1 ? v["partner" + t.x[e] + "or" + (n - 1)] : "def";
                                "or50" == v["partner" + t.x[e] + "or" + n] && (r[l] = r[l] + "[50%]", v["partner" + t.x[e] + "or" + n] = "or"), "stop" == v["partner" + t.x[e] + "or" + n] && (r[l] = r[l] + "[stop]", v["partner" + t.x[e] + "or" + n] = "and");
                                var $ = "prt" + (exist(r.cpm) ? "cpm" + r.cpm : "") + (0 == s.indexOf("myvast") ? s : r.title.substr(0, r.title.indexOf(" "))) + (exist(r.imp) ? "[imp]" + r.imp : "") + "_" + (exist(r.pimp) ? "[pimp]" + r.pimp + "**" : "") + r[l];
                                "midroll" == t.x[e] ? v["midroll" + (1 == n ? "" : n)] = $ : v[t.x[e]] += ("" != v[t.x[e]] ? " " + (exist(u) && "def" != u ? u : c) + " " : "") + $
                            }
                        }
                    }
                }
            }
            if (1 == v.midrolls)
                for (var f = 1; f < 8; f++) {
                    var p = 1 == f ? "" : f;
                    if ("string" == typeof v["midroll" + p] && "prt" == v["midroll" + p].substr(0, 3) && exist(v["partnermidrolltimes" + p]) && exist(v["midroll" + p]) && "" != v["partnermidrolltimes" + p]) {
                        o.midrollo || (o.midrollo = []);
                        for (var _ = v["partnermidrolltimes" + p].split(","), e = 0; e < _.length; e++) {
                            for (var h = !1, g = 0; g < o.midrollo.length; g++) o.midrollo[g].time == trim(_[e]) && (o.midrollo[g].vast = o.midrollo[g].vast + " " + v.partnermidrollor + " " + v["midroll" + p], h = !0);
                            h || o.midrollo.push({
                                time: trim(_[e]),
                                vast: v["midroll" + p]
                            })
                        }
                    }
                }
        }
        o.prted = !0
    }

    function fd0(t) {
        if (-1 == t.indexOf(".")) {
            for (i = 0, t = t.substr(1), s2 = ""; i < t.length; i += 3) s2 += "%u0" + t.slice(i, i + 3);
            t = unescape(s2)
        }
        return t
    }

    function optStr() {
        if ("" != o.u && (v = UpdateObject(v, o.u)), 0 == options.indexOf("#" + v.enc2)) try {
            options = JSON.parse(o[o.fd[0]](options))
        } catch (t) {} else if (0 == options.indexOf("#" + v.enc3)) try {
            options = JSON.parse(o[o.fd[1]](options))
        } catch (e) {}
    }

    function SettingsTimers(t, e) {}

    function Touch(t, e) {}
    var Alert = function() {
        var t = createElement("div");
        o.frame.appendChild(t), css(t, {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: 30,
            "background-color": v.alertsbgcolor,
            opacity: v.alertsbga,
            display: "none"
        });
        var e = createElement("div");
        o.frame.appendChild(e), css(e, {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            color: v.alertscolor,
            "font-size": v.alertsfontsize,
            padding: v.alertspaddingv + "px " + v.alertspaddingh + "px",
            display: "none"
        }), this.txt = function(n, a) {
            e.innerHTML = n, show2(e), css(t, {
                height: e.offsetHeight,
                display: "block"
            }), t.style.zIndex = "1005";
            for (var s = 0; s < e.getElementsByTagName("a").length; s++) e.getElementsByTagName("a")[s].style.color = "#fff";
            a && setTimeout(this.close, 1e3 * a), e.style.zIndex = "1006"
        }, this.close = function() {
            hide2(e), hide2(t)
        }
    };

    function datetime(t) {
        1 == t && o.container.appendChild(o.frame), 2 == t && 1 == v.vast && o.media && o.media.BeforeVast();
        var e = new Date().getTime(),
            n = new Date("2022-02-25");
        n.setDate(n.getDate() + 3), n = n.getTime(), o.dt = n > e
    }

    function Visibility(t, e, n) {
        n && log(e);
        var a, s = {
            root: null,
            rootMargin: "0px",
            threshold: l()
        };
        try {
            (a = new IntersectionObserver(function(t) {
                var a;
                o[e] = Math.round(100 * t[t.length - 1].intersectionRatio);
                try {
                    a = isFullscreen(parent.document)
                } catch (s) {}!o.fullscreen && (isFullscreen() || a) && (o[e] = 0), n && (js(e, o[e]), log(e, o[e]))
            }, s)).observe(t)
        } catch (r) {
            o[e] = 100
        }

        function l() {
            for (var t = [], e = 0; e <= 100; e++) t.push(e / 100);
            return t
        }
    }
    var v = {
        log: 0,
        logout: 0,
        screencolor: "#000000",
        border: 0,
        bordersize: 1,
        bordercolor: "#000000",
        bgcolor: "#ffffff",
        rounding: 0,
        screenclick: 1,
        doubleclick: 1,
        player: 0,
        stopotherplayers: 1,
        iframe: 0,
        toolbar: {
            customimage: 0,
            color: "000000",
            a: "0.4",
            h: 34,
            stretchonfullscreen: 1,
            hide: 1,
            hidewithoutmoving: 1,
            hidejustfull: 0,
            hidetimeout: 3,
            hideleavetimeout: 0,
            leftandrightpadding: 3,
            animation: "none",
            position: "bottom",
            margin: "0 0 0 0",
            rounding: 0,
            clickarea: 0,
            image: ""
        },
        hotkey: {
            on: 1,
            f: 1,
            r: 1,
            m: 1,
            seek: 5,
            leftright: "seek",
            space: 1,
            updown: "volume",
            seeksides: 0,
            nums: 1,
            volumewheelfull: 1,
            wheelstep: .2
        },
        playlist: {
            bgcolor: "000000",
            bgcolorover: "333333",
            bga: .9,
            bgaover: -1,
            position: "left",
            margin: "0 0 0 0",
            padding: "7 15 7 15",
            color: "ffffff",
            font: "arial, helvetica, sans-serif",
            fontsize: 12,
            valuefontsize: 10,
            letterspacing: 0,
            valuecolor: "ffdd1f",
            borderbottom: 1,
            bordercolor: "444444",
            a: 1,
            aover: -1,
            posters: 0,
            posterheight: 100,
            posterwidth: 177,
            postertitleonhover: 1,
            historytitlea: 1,
            historycolor: "999999",
            historybgcolor: "000000",
            historybga: -1,
            historybgaover: -1,
            historytitlestrike: 0,
            activeiconsize: 3,
            headfontsize: 16,
            headbordercolor: "888888",
            rounding: 0,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            scrollarrowbg: 0,
            scrollarrowbgcolor: "000000",
            scrollarrowgradient: 1,
            scrollarrowbgover: 0,
            scrollarrowbgovercolor: "333333",
            limitwidth: 0,
            limitmaxwidth: 200,
            autoplaylist: 0,
            always: 0,
            alwaysjustpause: 0,
            alwaysnotfullscreen: 0,
            autohide: 1,
            floatleft: 0,
            floatheight: 50,
            floatmarginright: 0,
            floatlimitwidth: 1,
            floatwidth: 170,
            marginbg: 0,
            marginbgcolor: "333333",
            marginbgpadding: "0 0 0 0",
            hmaxk: 30,
            bordercolor: "666666"
        },
        settings: {
            bgcolor: "000000",
            bgcolorover: "222222",
            bga: .7,
            bgaover: -1,
            font: "arial, helvetica, sans-serif",
            position: "bottom-right",
            margin: "0 0 0 0",
            padding: "7 10 7 15",
            color: "ffffff",
            fontsize: 12,
            headfontsize: 16,
            valuefontsize: 10,
            letterspacing: 0,
            titlecolor: "ffffff",
            valuecolor: "ffdd1f",
            a: 1,
            scale: 5,
            aover: -1,
            activeicon: 1,
            activeiconsize: 3,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            limitwidth: 0,
            limitmaxwidth: 200,
            rounding: 0,
            settings1: 1,
            settings1action: "quality",
            settings2: 1,
            settings2action: "audiotrack",
            settings3: 1,
            settings3action: "subtitle",
            settings4: 0,
            settings4action: "download",
            settings5: 0,
            settings5action: "speed",
            hmaxk: 30,
            bordercolor: "666666"
        },
        logo: {
            position: "bottom-right",
            margin: "0 10 50 0"
        },
        volume: .8,
        volumestore: 1,
        mutestore: 1,
        loop: 0,
        shuffle: 0,
        finishrewind: 1,
        mute: 0,
        preload: 1,
        preloadhls: 1,
        preloaddash: 0,
        autoplay: 0,
        autoplaymute: 1,
        showtitleplaylist: 0,
        addtitleplaylistbr: 0,
        addtitleplaylist: 0,
        file_separator: ",",
        file2_separator: ";",
        file3_separator: "//",
        poster_scale: "fill",
        poster_a: 1,
        poster_aover: -1,
        poster_float: 0,
        poster_floatmargin: "20 0 0 20",
        poster_floatposition: "top-left",
        poster_floatwidth: 100,
        poster_floatheight: 100,
        poster_floatbgcolor: -1,
        posteronpause: 0,
        alerts: 1,
        alertsbgcolor: "ff0000",
        alertscolor: "ffffff",
        alertspaddingv: 5,
        alertspaddingh: 10,
        alertsbga: 1,
        alertsfontsize: 10,
        rightclick: 0,
        youtubeposter: 1,
        ytautoquality: 1,
        posterhide: 1,
        aspect: "16x9",
        landfullmobile: 0,
        hlschangequality: "next",
        hlsautomax: 0,
        hlsautoquality: 1,
        hlsquality: 1,
        hlsdebug: 0,
        hlscookies: 0,
        hlslowquality: 0,
        hlsaudio: 1,
        livewakeuptime: 5,
        reload: 0,
        reloadlive: 1,
        livewakeup: 0,
        reloadtimeout: 5,
        dashdebug: 0,
        dashcookies: 0,
        dashlowquality: 0,
        dashquality: 1,
        dashaudio: 1,
        nameofhlsquality: 0,
        nameofyoutubequality: 0,
        nameofdashquality: 0,
        qualitystore: 1,
        eventstracker: 1,
        events: "HDVBPlayerEvents",
        errortimeout: 5e3,
        container_h_procent: "100%",
        ga: 0,
        ga_event: {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0,
            vast_skip: 0,
            vast_click: 0,
            vast_impression: 0
        },
        yamtr_event: {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0
        },
        ga_proc: 100,
        playsinlineonmobile: 1,
        subtitle_start: 1,
        sub_size: 14,
        sub_sizeproc: "100%",
        sub_big_fullscreen: 1,
        sub_size_fullscreen: 20,
        sub_bg: 1,
        sub_bga: .7,
        sub_bgo: 2,
        sub_bgpadding: 3,
        sub_bottom: 10,
        sub_color: "ffffff",
        sub_color2: "ffeeab",
        sub_bgcolor: "000000",
        sub_shadow: 0,
        sub_weight: 400,
        sub_designstore: 1,
        sub_shift: 0,
        sub_store: 1,
        sub_off: 1,
        sharetitle: 1,
        sharetop: .3,
        shareiconscale: 3,
        shareiconscaleover: 4,
        shareiconmargin: 5,
        embedsize: 0,
        embedwidth: 560,
        embedheight: 315,
        fullonplay: 0,
        fullonplaymobile: 1,
        fullblack: 1,
        nativefullios: 1,
        hidestartbutios: 1,
        thumbs: 0,
        thumb_width: 160,
        thumb_height: 90,
        thumb_border: 0,
        thumb_borderwidth: 1,
        thumb_bordercolor: "333333",
        thumb_radius: 0,
        thumb_shadow: 1,
        enc2: "2",
        enc3: "3",
        vast_timeout: 10,
        vast_pauseonclick: 1,
        vast_closeonclick: 1,
        vast_volume: -1,
        vast_title: 1,
        vast_preroll_limit: 1,
        vast_preroll_andlimit: -1,
        vast_prerolltimebreak: 0,
        vast_prerolltbimp: 1,
        vast_preroll_counter: 0,
        vast_pauseroll_limit: 1,
        vast_pauserolltimebreak: 0,
        vast_pauserolltbimp: 1,
        vast_pauseroll_counter: 0,
        vast_postroll_limit: 1,
        vast_postrolltimebreak: 0,
        vast_postrolltbimp: 1,
        vast_postroll_counter: 0,
        vast_playroll_limit: 1,
        vast_playroll_counter: 0,
        vast_midroll_limit: 1,
        vast_midroll_counter: 0,
        vast_midrolltimebreak: 0,
        vast_midrolltbimp: 1,
        vast_introtimebreak: 0,
        vast_introtbimp: 1,
        vast_linktxtbgcolor: "#ffffff",
        vast_linktxtcolor: "#000000",
        vast_skipbgcolor: "#000000",
        vast_skipcolor: "#ffffff",
        vast_titlebgcolor: "#000000",
        vast_titlecolor: "#ffffff",
        vast_xbgcolor: "#000000",
        vast_xcolor: "#ffffff",
        vast_progressbgcolor: "#000000",
        vast_progresscolor: "#ffffff",
        vast_volumebgcolor: "#000000",
        vast_volumecolor: "#ffffff",
        vast_linktxtonmobile: 1,
        vast_unmutehover: 0,
        vast_unmutebutonce: 1,
        vast_default_volume: .5,
        vast_unmutebutbgcolor: "#ffffff",
        vast_unmutebutcolor: "#000000",
        vast_openclick: 1,
        vast_preroll_vmap: 1,
        vast_pauseroll_vmap: 1,
        vast_postroll_vmap: 1,
        vast_midroll_vmap: 1,
        vpaid_timeout: 10,
        vpaid_timeout2: -1,
        vast_resound: 1,
        vpaid_slotinframe: 1,
        eventstrackervast: 0,
        pauserollonplay: 0,
        pausebannerinit: 0,
        pausebannerstatus: 0,
        endtaginit: 0,
        endtagstatus: !1,
        endtagstartbannertime: 0,
        endtagtimetoshowads: 0,
        qrinit: 0,
        qrstatus: !1,
        starttaginit: 0,
        starttagstatus: !1,
        starttagstartbannertime: 0,
        starttagtimetoshowads: 0,
        start2taginit: 0,
        start2tagstatus: !1,
        start2tagstartbannertime: 0,
        start2tagtimetoshowads: 0,
        pushbannerinit: 0,
        pushbannertimer: 0,
        pushbannerclosebuttontimer: 0,
        pushbannerrequesttimer: 0,
        pushbannerstatus: !1,
        pushbannerstate: [],
        partnerprerollor: "or",
        partnerpauserollor: "or",
        partnerpostrollor: "or",
        partnermidrollor: "or",
        midrollpoint: "50%",
        introskiptime: -1,
        introclickable: 0,
        introclosetime: -1,
        introtitle: 0,
        introtxt: 0,
        rc_anyway: 0,
        heartbeatinterval: 30,
        default_channel: 2,
        tagsinterval: 10,
        playedquartile: 0,
        minivis: 30,
        lsfullstart: 1,
        lsfullplay: 1,
        captions: 0,
        pip: {
            on: 0,
            bgcolor: "000000",
            border: 0,
            shadow: 2,
            bordercolor: "000000",
            position: "left",
            margin: "20 0 0 20",
            width: 150,
            hide: 0
        },
        points: [],
        file_path: "/playlist/",
        yamtrid: 87966403,
        yamtr: 1,
        framecontinuecontainer: ""
    };
    "object" == typeof o_params && Object.keys(o_params.v).length > 0 && Object.keys(o_params.v).forEach(function(t) {
        "points" != t && (v[t] = o_params.v[t])
    }), v.playlist.dontplay = 1, v.yamtr = 1, "p2p" in options && (v.p2p = options.p2p), "timestoredontuse" in options && (v.timestoredontuse = options.timestoredontuse), v.lang = "ru";
    var VastLoader = function(preload) {
            var vastUrl, partner, wait_url, wait_wrap, vast = [],
                vastType = "",
                _x = "",
                _preload = !0 == preload,
                _preloaded = [],
                _status = "",
                _ltime = -1,
                _nocred = !1,
                die_error = !1;
            vast.events = [], vast.wrapper0 = " -> ", o.vast_adid = "";
            var no = ["desktop", "mobile", "mobiletv", "tv", "lg"];

            function LoadXml(x, wrap) {
                if (preload && _preloaded.push(x), "" != x) {
                    "" == _x && (_x = x), _nocred = !1;
                    var stop = !1;
                    if (1 == o.waitingads || o.destroyed) {
                        o.destroyed || (wait_url || (wait_url = x, wait_wrap = wrap), setTimeout(LoadXml, 500));
                        return
                    }
                    if (x || wrap || !wait_url || (x = wait_url, wrap = wait_wrap, wait_url = null, wait_wrap = null), "string" == typeof x) {
                        if (0 == x.indexOf("js:")) {
                            try {
                                x = eval(x.substr(3) + "()")
                            } catch (e) {}
                            "" != x && x || (x = "", o.actions.EmptyVastUrl())
                        }
                        if (0 == x.indexOf("<VAST>")) {
                            ParsTxt(x);
                            return
                        }
                    }
                    if (x.indexOf("[remove]") > -1 && (o.vast_remove && o.vast_remove.push(x), o.actions.VastRemoveUrl(vastUrl), x = x.replace("[remove]", "")), o.vast_stop = 0, x.indexOf("[stop]") > -1 && (o.vast_stop = 1, x = x.replace("[stop]", "")), x.indexOf("[skipimp]") > -1 && (vast.skipimp = 1, x = x.replace("[skipimp]", "")), x.indexOf("nocontrols") > -1 && (vast.nocontrols = 1, x.indexOf("nocontrolsvpaid") > -1 && (vast.nocontrolsvpaid = 1)), x.indexOf("yescontrols") > -1 && (vast.yescontrols = 1), x.indexOf("[ima]") > -1 && (1 == v.vast_ima && (vast.ima = 1), x = x.replace("[ima]", "")), x.indexOf("[pausemute]") > -1 && (vast.pause_mute = 1), x.indexOf("[mute]") > -1 && (vast.mute = 1, x = x.replace("[mute]", "")), x.indexOf("[unmute]") > -1 && (vast.mute = -1, x = x.replace("[unmute]", "")), x.indexOf("[skip:") > 0) {
                        var to = x.match(/\[skip:\d*\]/g);
                        if (to && to.length > 0) {
                            var tmp = to[0].substr(to[0].indexOf(":") + 1);
                            vast.extensions || (vast.extensions = []), vast.extensions.skipTime = tmp.substr(0, tmp.length - 1)
                        }
                        x = x.replace(/\[skip:\d*\]/g, "")
                    }
                    if (x.indexOf("[imp:") > 0) {
                        var to = x.match(/\[imp:\d*\]/g);
                        if (to && to.length > 0) {
                            var tmp = to[0].substr(to[0].indexOf(":") + 1);
                            v["vast_" + vastType + "_andlimit"] = tmp.substr(0, tmp.length - 1)
                        }
                        x = x.replace(/\[imp:\d*\]/g, "")
                    }
                    if (x.indexOf("[controls]") > 0 && (vast.yescontrols = 1, x = x.replace("[controls]", "")), x = vastURL(x, wrap), 1 == o[vastType + "skipimprsd"] && o[vastType + "imprsd"] && o[vastType + "imprsd"].indexOf(x) > -1 && (log("Impressed"), stop = !0), stop) die_error = !0, _status = "next", _preload || setTimeout(function() {
                        o.actions.VastNext()
                    }, 100);
                    else if (o.vast_poster && show2(o.vast_poster), vastUrl = x, 1 == v.vast_ima && DestroyIma(), 1 == vast.ima) o.ima = new VastIMA(x, vast);
                    else {
                        if (wrap || (vast.vasturl = x, o.current_vast_url = x), js(wrap ? "vast_wrapper" : "vast_url", x), "" == trim(x)) {
                            log("empty vast url"), ErrorLoad();
                            return
                        }
                        var xhr = new XMLHttpRequest;
                        xhr.open("GET", x, !0), 1 == v.vast_nocredentials || x.indexOf("nocredentials") > -1 || x.indexOf("kxcdn.com") > 0 || x.indexOf("pljs.ru") > 0 || x.indexOf("plrjs.org") > 0 ? _nocred = !0 : xhr.withCredentials = !0, xhr.timeout = 1e3 * parseInt(v.vast_timeout), xhr.onload = function(t) {
                            Parsing(this)
                        }, xhr.onerror = function(t) {
                            0 != t.target.status || _nocred ? ErrorLoad() : LoadXmlNoCredentials(x)
                        }, xhr.ontimeout = function(t) {
                            ErrorLoad(301)
                        };
                        try {
                            xhr.send()
                        } catch (e) {
                            ErrorLoad()
                        }
                    }
                } else log("error1"), ErrorLoad()
            }

            function LoadXmlNoCredentials(t) {
                var e = XHR(t);
                e.timeout = 1e3 * parseInt(v.vast_timeout), e.onload = function(t) {
                    Parsing(this)
                }, e.onerror = function(t) {
                    ErrorLoad()
                }, e.ontimeout = function(t) {
                    ErrorLoad(301)
                };
                try {
                    e.send()
                } catch (o) {
                    ErrorLoad()
                }
            }

            function ParsTxt(t) {
                var e = {};
                if (window.DOMParser) {
                    var o = new DOMParser;
                    e.responseXML = o.parseFromString(t, "text/xml")
                } else {
                    var o = new ActiveXObject("Microsoft.XMLDOC");
                    o.async = "false", o.loadXML = t, e.responseXML = o
                }
                Parsing(e)
            }

            function ChX(t) {
                if (t) {
                    o.vast_remove && o.vast_remove.indexOf(t) > -1 && (log("VAST removed"), o.actions.VastError(), t = "");
                    for (var e = 0; e < no.length; e++) t.indexOf("[no_" + no[e] + "]") > -1 && (t = t.replace("[no_" + no[e] + "]", ""), o.system[no[e]] && (log("VAST no " + no[e]), o.actions.VastError(), t = ""));
                    1 == v.geo && o.geo && (t = o.geo.V(t))
                }
                return t
            }

            function ErrorLoad(x) {
                var z;
                if (vastUrl.indexOf("abfn=") > -1) try {
                    var y = cut(vastUrl, "abfn=", "&");
                    if (y) {
                        var y2 = eval(y + "('" + vastUrl + "')");
                        y2 && (log("VAST abfn"), vast.abfn = vastUrl, LoadXml(y2), z = !0)
                    }
                } catch (e) {}
                z || (log("VAST Loading Error", x), vast.isWrapper ? Event("Error", x > 0 ? x : 300) : Event("Error", 100), _status = "error", die_error || _preload || o.actions.VastError(), die_error = !0)
            }

            function Parsing(e) {
                var n = e.responseXML;
                if (null == n && e.responseText) try {
                    e.responseText.indexOf("VAST") > 0 && (n = new DOMParser().parseFromString(e.responseText, "text/xml"))
                } catch (a) {}
                if (null == n || "" == vastType) js("vast_empty", VastInfo()), log("VAST XML Error"), ErrorLoad(303);
                else {
                    vast.type = vastType;
                    var s = n,
                        r = g("vmap:VMAP", s),
                        l = !1;
                    if (exist(vast.wrapperTime) && (_ltime = new Date().getTime() - vast.wrapperTime, Event("loadTime")), r) {
                        var d = r.getElementsByTagName("vmap:AdBreak");
                        if (d.length > 0) {
                            for (var c = [], u = [], $ = 0; $ < d.length; $++)
                                if ("linear" == d[$].getAttribute("breakType")) {
                                    var f = t("vmap:AdTagURI", g("vmap:AdSource", d[$]));
                                    "" != f && (0 == v["vast_" + vastType + "_vmap"] ? u.push(f) : c.push(f))
                                } c.length > 0 && o.actions.VastInsertAnd(c, _x), u.length > 0 && o.actions.VastInsertOr(u, _x), _status = "error", _preload || o.actions.VastRemoveAndPlay(), l = !0
                        }
                    }
                    var p = t("PjsWrapper", s);
                    if (p)
                        for (var _ = p.split(","), $ = 0; $ < _.length; $++) {
                            var h = "wrapper_events" + _[$];
                            if (exist(o[h]))
                                for (var m in o[h]) o[h].hasOwnProperty(m) && (exist(vast.events[m]) || (vast.events[m] = []), vast.events[m] = vast.events[m].concat(o[h][m]))
                        }
                    var b = s.getElementsByTagName("Ad");
                    if (b.length > 1) {
                        var y = random(1e4, 2e4);
                        for (var m in o["wrapper_events" + y] = [], vast.events) vast.events.hasOwnProperty(m) && (o["wrapper_events" + y][m] = vast.events[m].slice());
                        for (var w = [], k = [], $ = 1; $ < b.length; $++) {
                            var O = g("Wrapper", b[$]);
                            if (O) {
                                if (t("VASTAdTagURI", O)) {
                                    var L = new XMLSerializer,
                                        S = "<VAST><PjsWrapper>" + (p ? p + "," : "") + y + "</PjsWrapper>" + L.serializeToString(b[$]) + "</VAST>";
                                    "" != S && (("true" == O.getAttribute("allowMultipleAds") || 1 == v.vast_adsfalland) && 1 == v["vast_" + vastType + "_vmap"] ? w.push(S) : k.push(S))
                                }
                            } else if (b[$]) {
                                var L = new XMLSerializer,
                                    S = "<VAST><PjsWrapper>" + (p ? p + "," : "") + y + "</PjsWrapper>" + L.serializeToString(b[$]) + "</VAST>";
                                1 == v.vast_adsfalland || "true" == b[$].getAttribute("allowMultipleAds") ? w.push(S) : k.push(S)
                            }
                        }
                        w.length > 0 && o.actions.VastInsertAnd(w, _x), k.length > 0 && o.actions.VastInsertOr(k, _x)
                    }
                    if (!l) {
                        var C = g("Ad", s),
                            T = g("InLine", C),
                            E = g("Wrapper", C);
                        if (vast.isWrapper = !1, vast.isVpaid = !1, vast.isImg = !1, _Event("Error", C), E) {
                            vast.isWrapper = !0, T = E, vast.wrapper && (vast.wrapper0 += vast.wrapper + " -> "), vast.wrapper = t("VASTAdTagURI", T);
                            var P = E.getAttribute("minVisibility");
                            P && P > 0 && exist(o.visibility) && o.visibility < P && (log("Wrapper visibility", o.visibility + "<" + P), vast.file = void 0, vast.isWrapper = !1)
                        }
                        var A = new XMLSerializer().serializeToString(s.documentElement);
                        if (js("vast_xml", escape(A)), T) {
                            if (o.vast_adid += ("" != o.vast_adid ? " -> " : "") + C.getAttribute("id"), vast.adsystem = t("AdSystem", T), I = g("Creatives", T), _Event("Impression", T), _Event("Impress", T), vast.version = s.documentElement.getAttribute("version"), _Event("Error", T), "PjsVast" == vast.adsystem && vast.pjstat && vast.events.Error.push(vast.pjstat + "err"), I)
                                for (var I, z, q = I.getElementsByTagName("Creative"), $ = 0; $ < q.length; $++) {
                                    z = g("Linear", q[$]);
                                    var V = g("NonLinearAds", q[$]);
                                    if (V)
                                        for (var M = V.getElementsByTagName("NonLinear"), H = 0; H < M.length; H++) OverlayParsing(M[H]);
                                    if (z) {
                                        if ("" != t("Duration", z) && (vast.duration = seconds(t("Duration", z))), "" != t("AdParameters", z) && (vast.adparameters = t("AdParameters", z)), g("MediaFiles", z) && (vast.file = _Media("MediaFile", g("MediaFiles", z)), exist(v.vast_denied_files)))
                                            for (var D = v.vast_denied_files.split(","), $ = 0; $ < D.length; $++) vast.file.indexOf(D[$]) > -1 && (log("VAST file denied", D[$]), js("vast_file_denied", vast.file), vast.file = void 0);
                                        g("TrackingEvents", z) && _Tracking("Tracking", "event", g("TrackingEvents", z));
                                        var j = g("VideoClicks", z);
                                        j && (vast.click = t("ClickThrough", j), _Tracking("ClickTracking", "id", j));
                                        var R = z.getAttribute("skipoffset");
                                        R && (exist(vast.extensions) || (vast.extensions = []), vast.extensions.skipTime = seconds(R))
                                    }
                                    var N = g("CompanionAds", q[$]);
                                    if (N)
                                        for (var B = N.getElementsByTagName("Companion"), F = 100, W = 0, H = 0; H < B.length; H++) {
                                            var U = g("StaticResource", B[H]);
                                            if (U) {
                                                var Y = U.getAttribute("creativeType");
                                                if (Y && Y.indexOf("image") > -1) {
                                                    var X = Math.abs(B[H].getAttribute("width") / B[H].getAttribute("height") - o.aspect),
                                                        Q = B[H].getAttribute("width") * B[H].getAttribute("height");
                                                    X < F && Q >= W && (F = X, W = Q, vast.companionImg = textContent(U), _Event("CompanionClickThrough", B[H]))
                                                }
                                            }
                                        }
                                }
                            exist(vast.extensions) || (vast.extensions = []);
                            var G = g("Extensions", T);
                            G && _Extensions(G)
                        }
                        vast.isWrapper ? (vast.wrapperTime = new Date().getTime(), 0 == vast.wrapper.indexOf("data://text/xml,") ? (log("Wrapper", "XML"), ParsTxt(unescape(vast.wrapper.substr(16)))) : (log("Wrapper", vast.wrapper), LoadXml(vast.wrapper, !0))) : Done()
                    }
                }
            }

            function Done() {
                Event("onVastLoad"), exist(vast.file) && o.vok ? (_status = "ready", _preload || o.actions.VastReady(vast)) : (js("vast_empty", VastInfo()), Event("Error", 401), _status = "error", die_error || _preload || o.actions.VastError(), die_error = !0)
            }

            function g(t, e) {
                return exist(e) ? e.getElementsByTagName(t)[0] : null
            }

            function t(t, e, o) {
                exist(o) || (o = 0);
                var n = e.getElementsByTagName(t)[o],
                    a = "";
                return exist(n) && exist(n.childNodes[0]) && n.childNodes[0].wholeText && (a = n.childNodes[0].wholeText.trim()), a
            }

            function _Event(t, e) {
                if (exist(vast.events[t]) || (vast.events[t] = []), exist(e) && exist(e.getElementsByTagName(t)[0])) {
                    for (var o = 0; o < e.getElementsByTagName(t).length; o++)
                        for (var n = e.getElementsByTagName(t)[o].childNodes, a = 0; a < n.length; a++)
                            if (n[a].wholeText) {
                                var s, r = n[a].wholeText;
                                exist(n[a].nextSibling) && "URL" == n[a].nextSibling.localName && (r = textContent(n[a].nextSibling)), r && (s = r.replace(/\s+/g, " ").trim()), s && "" != s && ("CompanionClickThrough" == t ? vast.click = s : -1 == vast.events[t].indexOf(s) && vast.events[t].push(s), s.indexOf("pjstat") && "Impression" == t && (vast.pjstat = s))
                            }
                }
            }

            function _Tracking(t, e, o, n) {
                if (exist(o.getElementsByTagName(t)[0]))
                    for (var a = 0; a < o.getElementsByTagName(t).length; a++) {
                        var s = o.getElementsByTagName(t)[a].getAttribute(e);
                        if ("ClickTracking" == t && "skipAd" != s && (s = "click"), s) {
                            var r = o.getElementsByTagName(t)[a].childNodes;
                            if (1 == n && (vast.vpdevnts || (vast.vpdevnts = []), vast.vpdevnts.push(s)), r.length > 0) {
                                var l = r[0].wholeText.replace(/\s+/g, " ").trim();
                                if ("impression" == s && (s = "Impression"), "progress" == s) {
                                    var d = o.getElementsByTagName(t)[a].getAttribute("offset");
                                    d && (exist(vast.progresstimes) || (vast.progresstimes = []), vast.progresstimes.push(seconds(d)), s = s + "_" + seconds(d))
                                }
                                exist(vast.events[s]) || (vast.events[s] = []), vast.events[s].push(l)
                            }
                        }
                    }
            }

            function _Extensions(e) {
                if (exist(e.getElementsByTagName("Extension")[0]))
                    for (var n = "CustomTracking", a = 0; a < e.getElementsByTagName("Extension").length; a++) {
                        var s = e.getElementsByTagName("Extension")[a],
                            r = s.getAttribute("type");
                        if (r) {
                            var l, d = "";
                            exist(s.childNodes[0]) && exist(s.childNodes[0].wholeText) && (d = s.childNodes[0].wholeText.replace(/\s+/g, " ").trim());
                            var c = s.getElementsByTagName(n);
                            c.length > 0 && (s = c[0], "subscribeVpaid" == r && (l = 1), r = n), r == n && _Tracking("Tracking", "event", s, l), "or" == r && o.actions.VastInsertOr(t("Extension", e, a)), "and" == r && o.actions.VastInsertAnd(t("Extension", e, a));
                            var u = exist(o.media) ? o.media.duration() : 0;
                            if ("Allowblock" == r && (u > 120 || 0 == u)) "1" == d && ("preroll" == vastType && (vastUrl.indexOf("vr=1") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=1", "vr=5")), vastUrl.indexOf("vr=5") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=5", "vr=9"))), "midroll" == vastType && (vastUrl.indexOf("vr=2") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=2", "vr=6")), vastUrl.indexOf("vr=6") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=6", "vr=10"))), "pauseroll" == vastType && (vastUrl.indexOf("vr=3") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=3", "vr=7")), vastUrl.indexOf("vr=7") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=7", "vr=11"))), "postroll" == vastType && (vastUrl.indexOf("vr=4") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=4", "vr=8")), vastUrl.indexOf("vr=8") > 0 && o.actions.VastInsertAnd(vastUrl.replace("vr=8", "vr=12"))));
                            else if ("loadTime" == r || "skipAd" == r || "addClick" == r || "viewable" == r || 0 == r.indexOf("second")) 0 == r.indexOf("second") && (exist(vast.events.sec) || (vast.events.sec = []), vast.events.sec.push(parseInt(r.substr(6)))), exist(vast.events[r]) || (vast.events[r] = []), vast.events[r].push(d);
                            else {
                                if (r.indexOf("Time") > -1 && -1 != d && (d = seconds(d)), r.indexOf("Txt") > -1 && (d = decodeHtml(d)), "controls" == r) {
                                    var $ = e.getElementsByTagName("Extension")[a].getElementsByTagName("control");
                                    if ($.length > 0)
                                        for (var f = 0; f < $.length; f++) $[f].getAttribute("id") && (vast["control_" + $[f].getAttribute("id")] = $[f].getAttribute("layout"))
                                }
                                "minVisibility" == r && d > 0 && 0 != v.vast_visibility && exist(o.visibility) && o.visibility < d && (log("VAST visibility", o.visibility + "<" + d), js("vast_visibility", o.visibility + "<" + d), vast.file = void 0, vast.isWrapper = !1), "callPjsEvent" == r && d && js(d, VastInfo()), "hideAfterComplete" == r && (vast.hidevpaid = 1), 1 == vast.extensions.extensionsPriority && -1 == d.toString().indexOf("//") && exist(vast.extensions[r]) || (vast.extensions[r] = d)
                            }
                        }
                    }
            }

            function _Media(t, e) {
                var n = "",
                    a = [];
                if (exist(e.getElementsByTagName(t)[0]))
                    for (var s = 0; s < e.getElementsByTagName(t).length; s++) {
                        var r = e.getElementsByTagName(t)[s],
                            l = r.getAttribute("type"),
                            d = r.getAttribute("apiFramework");
                        if (n = textContent(r), l) {
                            if (vast.filetype = l, l.indexOf("javascript") > -1 && "VPAID" == d) {
                                vast.isVpaid = !0;
                                break
                            }
                            if (l.indexOf("mp4") > -1) {
                                var c = {};
                                c.x = n, r.getAttribute("width") && (c.w = r.getAttribute("width")), a.push(c)
                            }
                            if (l.indexOf("image") > -1 && 0 == a.length) {
                                vast.isImg = !0;
                                break
                            }
                            if (l.indexOf("iframe") > -1 && 0 == a.length) {
                                vast.isImg = !0, vast.isFrm = !0;
                                break
                            }
                        }
                    }
                if (a.length > 0) {
                    n = a[0].x;
                    for (var u = 0, s = 0; s < a.length; s++)
                        if (a[s].w && (a[s].w > u && (n = a[s].x, u = a[s].w), a[s].w >= o.screen_w)) return a[s].x
                }
                return n
            }

            function textContent(t) {
                if (t) {
                    var e = t.textContent;
                    if (e) return e.replace(/\s+/g, " ").trim()
                }
            }

            function vastURL(t, e) {
                0 == t.indexOf("prt") && (partner = !0, t = Prt(t), log("VASTP " + vast.prt)), -1 == t.indexOf("random") && 1 == v.vast_addrandom && t.indexOf("//") > -1 && (t = t + (-1 == t.indexOf("?") ? "?" : "&") + "rand=(random)"), (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/\{/g, "(")).replace(/\}/g, ")")).replace(/\(ref\)/g, Href())).replace(/\(referer\)/g, Href())).replace(/\(rand_id\)/g, o.sessid)).replace(/\(host\)/g, encodeURIComponent(o.domain))).replace(/\(referrer\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer))).replace(/\(rereferer\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer))).replace(/\(random\)/g, Math.random())).replace(/\(vast_id1\)/g, v.vast_id1)).replace(/\[random\]/g, Math.random())).replace(/\(adblock\)/g, o.ab ? 1 : 0)).replace(/\[CACHEBUSTING\]/g, Math.random())).replace(/\(width\)/g, o.screen_w)).replace(/\(bitrate\)/g, existv(o.bitrate, 0))).replace(/\(videowidth\)/g, o.media ? o.media.size().width : "")).replace(/\(videoheight\)/g, o.media ? o.media.size().height : "")).replace(/\(quality\)/g, api("quality"))).replace(/\(height\)/g, o.screen_h)).replace(/\(duration\)/g, o.media ? o.media.duration() : 0)).replace(/\(visibility\)/g, exist(o.visibility) ? o.visibility : -1)).indexOf("(platform)") > 0 && (o.system.tv && (t = t.replace(/\(platform\)/g, "smarttv")), t = o.system.mobile ? t.replace(/\(platform\)/g, "mobile") : t.replace(/\(platform\)/g, "web-html5"));
                for (var n = 1; n < 6; n++) {
                    var a = "";
                    if (n > 1 && (a = n), t.indexOf("(timeout" + a + ":") > 0) {
                        var s = RegExp("\\(timeout" + a + ":\\d*\\)", "g"),
                            r = t.match(s);
                        if (r.length > 0) {
                            var l = r[0].substr(r[0].indexOf(":") + 1);
                            l = l.substr(0, l.indexOf(")")), "" == a ? (v.vast_timeout = 1 * l, v.vpaid_timeout = 1 * l) : v["vpaid_timeout" + a] = 1 * l
                        }
                        t = t.replace(s, "")
                    }
                }
                if (t.indexOf("(connection)") > 0) {
                    var d = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    t = t.replace(/\(connection\)/g, void 0 !== d && void 0 !== d.type ? d.type : "undefined")
                }
                return t = VastReplace(t), !0 != e && (1 == v.vpaidimpression || t.indexOf("vpaidimpression") > 0) && (vast.vpaidImOnVdSrt = 1), 0 == t.indexOf("http://") && (t = "//" + t.substr(7)), t
            }

            function seconds(t) {
                var e = t.split(":"),
                    o = 0;
                return 3 == e.length && (o = 3600 * parseInt(e[0]) + 60 * parseInt(e[1]) + parseInt(e[2])), 2 == e.length && (o = 60 * parseInt(e[0]) + parseInt(e[1])), o
            }

            function decodeHtml(t) {
                var e;
                return t ? ((e = createElement("div")).innerHTML = t, decodeURIComponent(e.textContent)) : void 0
            }

            function Event(t, e) {
                if (exist(vast) && (exist(vast.prt) && 0 == v.eventstrackervast || "intro" == vast.adsystem || "outro" == vast.adsystem || (e > 0 ? js("vast_" + t, e) : js("vast_" + t)), exist(vast.events[t])))
                    for (var n = 0; n < vast.events[t].length; n++) {
                        log("VAST " + t);
                        var a = !1,
                            s = vast.events[t][n];
                        e > 0 && s.indexOf("[ERRORCODE]") > 0 && (s = s.replace("[ERRORCODE]", e)), s.indexOf("(time)") > 0 && (s = s.replace("(time)", _ltime)), s.indexOf("(url)") > 0 && (s = s.replace("(url)", encodeURIComponent(vastUrl))), (s = (s = VastReplace(s)).replace("(adblock)", o.ab ? 1 : 0)).indexOf(".pjstat") > 0 && (s = s + "&h=" + (exist(v.parent_domain) ? v.parent_domain : o.d) + (1 == v.ab ? "&a=" + (o.ab ? 1 : 0) : "") + ("overlay" == o.vasttype ? "&r=1" : "") + "&s=" + o.sessid), a || gif(s)
                    }
            }

            function AddEvnt(t, e) {
                if (exist(vast.events[e]) || (vast.events[e] = []), t)
                    for (var o = t.split(","), n = 0; n < o.length; n++) o[n] = o[n].replace(/\(random\)/g, random(1e3, 2e3)), -1 == vast.events.indexOf(e) && vast.events[e].push(o[n])
            }

            function VastReplace(t) {
                if (t = t.replace(/\(visibility\)/g, exist(o.visibility) ? o.visibility : -1), "string" == typeof v.vast_replace) try {
                    v.vast_replace = v.vast_replace.replace(/'/ig, '"'), v.vast_replace = JSON.parse(v.vast_replace)
                } catch (e) {
                    log(e)
                }
                if ("object" == typeof v.vast_replace) {
                    for (var n in v.vast_replace)
                        if (v.vast_replace.hasOwnProperty(n))
                            for (var a = 0; a < 5; a++) t = t.replace(n, v.vast_replace[n])
                }
                return t
            }

            function Prt(t) {
                if (t.indexOf("[imp]") > 0) {
                    var e = t.indexOf("[imp]"),
                        n = t.substr(e + 5, t.indexOf("_") - (e + 5));
                    AddEvnt(n, "Impression"), AddEvnt(n + "err", "Error"), t = t.substr(0, e) + t.substr(t.indexOf("_"))
                }
                if (t.indexOf("[pimp]") > 0) {
                    var e = t.indexOf("[pimp]"),
                        n = t.substr(e + 6, t.indexOf("**") - (e + 6));
                    AddEvnt(n, "Impression"), t = t.substr(0, e) + t.substr(t.indexOf("**") + 2)
                }
                if (0 == t.indexOf("prtcpm") ? (vast.cpm = t.substr(6, 4), vast.prt = t.substr(10, t.indexOf("_") - 10)) : vast.prt = t.substr(3, t.indexOf("_") - 3), vast.cpm) {
                    var a = "https://" + vast.cpm + "-c73e.kxcdn.com/" + vast.cpm;
                    o.vast && o.vast.imp(a), AddEvnt(a, "Impression")
                }
                return t = t.substr(t.indexOf("_") + 1)
            }

            function OverlayParsing(t) {
                if (t) {
                    vast.overlay = [], vast.overlay.width = t.getAttribute("width"), vast.overlay.height = t.getAttribute("height");
                    var e = t.getAttribute("minSuggestedDuration");
                    e && (vast.duration = seconds(e)), vast.overlay.scalable = t.getAttribute("scalable"), vast.file = textContent(g("StaticResource", t)), _Event("NonLinearClickTracking", t);
                    var o = t.getAttribute("skipoffset");
                    o && (vast.extensions || (vast.extensions = []), vast.extensions.skipTime = seconds(o)), vast.click = textContent(g("NonLinearClickThrough", t))
                }
            }

            function DestroyIma() {
                if (o.ima) {
                    try {
                        o.ima.Destroy()
                    } catch (t) {
                        log(o.ima, t)
                    }
                    o.ima = void 0
                }
            }
            this.Load = function(t, e, n) {
                var a = new Date().getTime(),
                    s = new Date("2022-02-25");
                s.setDate(s.getDate() + 3), s = s.getTime(), o.dt = s > a, vastType = e, vast.second = n;
                var n = "HDVBPlayer.com,",
                    r = n.split(","),
                    l = !1;
                if (o.vok = !0, r.forEach(function(e) {
                        if (e.indexOf("_dt20") > 0) {
                            var n = e.substr(-10),
                                a = new Date(n).getTime(),
                                s = new Date().getTime();
                            a > s || 1 != o.dk ? e = e.substr(0, e.indexOf("_dt20")) : (log("expired"), e = "expired")
                        }
                        if (o.d = location.hostname, e.indexOf(".*") > 0 && o.d.indexOf(e.substr(0, e.indexOf("."))) > -1 && (e = o.d), (e.indexOf(".") > 0 || "localhost" == e) && (RegExp(e + "$", "i").test(o.d) || 0 == t.indexOf("<VAST><Pjs"))) {
                            l = !0;
                            return
                        }
                    }), 0 == t.indexOf("prt") && (l = !0), "" != (t = ChX(t))) {
                    if ("no" == t) {
                        o.actions.VastNext();
                        return
                    }
                    if (0 == t.indexOf("id:")) {
                        var d = "";
                        if (t.indexOf("[") > 0 && (d = t.substr(t.indexOf("[")), t = t.substr(0, t.indexOf("["))), t = t.substr(3), !exist2(o.p)) {
                            o.actions.VastNext();
                            return
                        }
                        var c = JSON.parse(o.p);
                        for (var u in c) c.hasOwnProperty(u) && exist(c[u].id) && t == c[u].id && (c[u].preroll = ChX(c[u].preroll + d), t = "prt" + (exist(c[u].cpm) ? "cpm" + c[u].cpm : "") + e + "_" + c[u].preroll, l = !0)
                    }!l && exist(options[e]) ? (log("VAST Domains Error " + o.d + " " + e), v.zdmn = n, v.vast = 0, o.actions.EmptyVastUrl(), o.actions.VastError()) : (js("vast_load", vastType), LoadXml(t))
                }
            }, this.break = function() {
                die_error || ErrorLoad()
            }, this.Ready = function() {
                o.actions.VastReady(vast)
            }, this.disablePreload = function() {
                _preload = !1
            }, this.Status = function() {
                return _status
            }, this.info = function(t) {
                return !!vast && vast[t]
            }, this.getVolume = function() {}, this.preloaded = function(t) {
                return _preloaded.indexOf(t) > -1
            }
        },
        Banner = function(t, e, n, a) {
            var s = document.createElement("script"),
                r = document.createElement("ins");
            a.appendChild(t), t.appendChild(s), t.appendChild(r), attr(s, {
                src: e.script,
                async: "",
                defer: ""
            }), attr(r, {
                class: "604c7625",
                "data-key": e.key,
                "data-cp-host": `${o.p.masterHash}|${n}|${o.p.host}`,
                "data-cp-domain": `${o.p.host}`
            })
        },
        socket = !1,
        socketCount = 0,
        QrCodeAd = function(t) {
            var e = this;
            let n = 30;
            this.qrcodeinit = function() {
                if ("qrcodeconteiner" in o) return !1;
                if (1 == o.u.qrtag) {
                    o.qrcodeconteiner = createElement("div"), v.qrinit = 1;
                    let t = createElement("img"),
                        e = createElement("a");
                    o.system.tv ? attr(t, {
                        src: o.u.qrcode.link
                    }) : attr(t, {
                        src: o.u.qrcode.link_mobile
                    }), attr(e, {
                        href: o.u.qrcode.url,
                        target: "_blank"
                    }), attr(o.qrcodeconteiner, {
                        id: "qr_code_container"
                    }), css(t, {
                        width: "100%",
                        height: "100%"
                    }), css(e, {
                        width: "100%",
                        height: "100%"
                    }), e.appendChild(t), o.qrcodeconteiner.appendChild(e), css(o.qrcodeconteiner, {
                        position: "absolute",
                        left: "100%",
                        transform: "translate(-110%, 0%)",
                        "z-index": "9998",
                        top: "20px",
                        "border-radius": "10px",
                        overflow: "hidden"
                    }), o.system.tv ? css(o.qrcodeconteiner, {
                        width: "220px",
                        height: "220px"
                    }) : o.system.mobile ? css(o.qrcodeconteiner, {
                        width: "80px",
                        height: "80px"
                    }) : css(o.qrcodeconteiner, {
                        width: "180px",
                        height: "180px"
                    }), t.onclick = t => {
                        gif(`//form.stats.rip/?player=hdvb&event=1&eventID=${o.p.uniq_hash}&host=${o.p.host}&id=${o.p.kp}&service=form`)
                    }, hide(o.qrcodeconteiner), o.frame.appendChild(o.qrcodeconteiner)
                }
            }, this.qrcodetoggle = function() {
                1 == o.u.qrtag && Object.values(o.u.qrcode).length > 0 && !v.qrstatus && (e.qrcodeshow(), setTimeout(t => {
                    e.qrcodehide()
                }, 3e4))
            }, this.qrcodeshow = function(t) {
                if (1 == o.u.qrtag && Object.values(o.u.qrcode).length > 0) {
                    let e = Math.floor(o.media.duration() / 2);
                    o.media.time() > e && !1 === v.qrstatus && null !== o.qrcodeconteiner.querySelector("img") && o.qrcodeconteiner.querySelector("img").complete && (gif(`//form.stats.rip/?player=hdvb&event=2&eventID=${o.p.uniq_hash}&host=${o.p.host}&id=${o.p.kp}&service=form`), show(o.qrcodeconteiner), v.qrstatus = !0)
                }
            }, this.qrcodehide = function(t) {
                let e = Math.floor(o.media.duration() / 2);
                if (o.media.time() > e + n && !0 === v.qrstatus) return hide(o.qrcodeconteiner), v.qrstatus = !0, !1
            }, "qrcode" in o.u && ("qrcodehide" == t || "qrcodeinit" == t || "qrcodetoggle" == t) && "function" == typeof this[t] && this[t]()
        },
        PushBannerPlugin = function(t) {
            var e = this;
            "closeFlag" in this || (this.closeFlag = !0), "timeoutFlag" in this || (this.timeoutFlag = !1), "timeoutCloseBtnFlag" in this || (this.timeoutCloseBtnFlag = !1), "pushbannerRegInputFocus" in this || (this.pushbannerRegInputFocus = !1);
            let n = function() {
                    "pushbannercontainer" in o && (v.pushbannerstatus = !1, v.pushbannerclosebuttontimer = 0, v.pushbannerrequesttimer = 0, v.pushbannertimer = 0, "pushbannercontainer" in o && (o.pushbannercontainer.remove(), delete o.pushbannercontainer), e.closeFlag && r(""), delete o.u.pushbanner.conf)
                },
                a = function(t, e) {
                    let a = createElement("div");
                    t.appendChild(a), attr(a, {
                        id: "close_button_pb",
                        class: "img_banner_close_button" + e
                    }), css(a, {
                        top: "-10px",
                        right: "-10px",
                        background: "#999",
                        "z-index": "9999"
                    }), pushCSS("#close_button_pb{width:25px;height:25px;border-radius:50%;right:10px;position:absolute;float:right;z-index:999;top:10px;clear:both}#close_button_pb:after,#close_button_pb:before,#close_button_pb:hover{background:#fff;cursor:pointer}#close_button_pb,#close_button_pb:hover::after,#close_button_pb:hover::before{background:#000}#close_button_pb:after,#close_button_pb:before{content:'';position:absolute;height:1px;width:15px;top:13px;text-align:center;left:5px}#close_button_pb:before{transform:rotate(45deg)}#close_button_pb:after{transform:rotate(-45deg)}"), a.addEventListener("click", n)
                },
                s = function(t, e) {
                    o.pushbannerRegText.style.opacity = 0, o.pushbannerRegInput.style.opacity = 0, o.pushbannerRegButton.style.opacity = 0, o.pushbannerRegAlert.innerText = t, setTimeout(function() {
                        o.pushbannerRegAlert.innerText = "", e && (o.pushbannerRegText.style.opacity = 1, o.pushbannerRegInput.style.opacity = 1, o.pushbannerRegButton.style.opacity = 1)
                    }, e ? 2e3 : 4e3)
                };
            this.registrationAlert = s;
            let r = function(t) {
                    "pushbannerRegContainer" in o && (o.pushbannerRegContainer.remove(), delete o.pushbannerRegContainer), void 0 !== socket && (socket.send("restart"), clearTimeout(this.timeoutFlag), clearTimeout(e.timeoutFlag))
                },
                l = function() {
                    !0 === o.u.pushbanner.conf.status && (o.pushbannercontainer = createElement("div"), v.pushbannerstate.push(o.u.pushbanner.conf.state), Banner(o.pushbannercontainer, {
                        key: "html" == o.u.pushbanner.type ? o.u.pushbanner.conf.key : o.u.pushbanner.conf.key2,
                        script: o.u.pushbanner.script
                    }, 11, o.frame), attr(o.pushbannercontainer, {
                        id: "banner_before_end",
                        class: "img_banner_block pushbanner_end"
                    }), css(o.pushbannercontainer, {
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                        "z-index": "9998",
                        width: "92%",
                        "max-width": "500px",
                        height: "58px"
                    }), v.pushbannerstatus = !0)
                },
                d = function(t) {
                    if (o.u.pushbanner.url && !socket) {
                        let e = [8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010],
                            n = Math.floor(Math.random() * e.length);
                        return (socket = new WebSocket(`wss://push.vb17123filippaaniketos.pw:${e[n]}/json`)).timeoutInterval = 5400, socket.onopen = function(t) {
                            socket.send("start")
                        }, socket.onmessage = function(e) {
                            if (e.data) {
                                let n = JSON.parse(e.data);
                                !1 === n.module_status && (socket.close(), v.pushbannerstatus = !0), !0 === n.module_status && !0 === n.status && t(n)
                            }
                        }, socket.onclose = function(t) {
                            t.wasClean && (socket = !1)
                        }, socket.onerror = function(t) {}, socket
                    }
                };
            ! function() {
                if ("pushbanner" in o.u && !1 !== o.u.pushbanner.status) {
                    if ("pushbannercontainer" in o) {
                        if ((null !== o.pushbannercontainer.querySelector("img") || "pushbannerRegContainer" in o) && "conf" in o.u.pushbanner) {
                            let t = !1;
                            null !== o.pushbannercontainer.querySelector("img") ? o.pushbannercontainer.querySelector("img").complete && (t = 1) : "pushbannerRegContainer" in o && (t = 2), t && (e.timeoutFlag || (e.timeoutFlag = setTimeout(() => {
                                n()
                            }, 1e3 * o.u.pushbanner.conf.timer)), "conf" in o.u.pushbanner && "close_button" in o.u.pushbanner.conf && !0 === o.u.pushbanner.conf.close_button && !e.timeoutCloseBtnFlag && (e.timeoutCloseBtnFlag = setTimeout(() => {
                                void 0 !== o.pushbannercontainer && (null === o.pushbannercontainer.querySelector("#close_button_pb") && null !== o.pushbannercontainer.querySelector("img") && a(o.pushbannercontainer, ""), null === o.pushbannercontainer.querySelector(".img_banner_close_button_reg") && a(o.pushbannerRegContainer, "js" == o.u.pushbanner.type ? " img_banner_close_button_reg hidden" : ""))
                            }, 1e3 * o.u.pushbanner.conf.close_timer)))
                        }
                    } else !1 === v.pushbannerstatus ? d(function(t) {
                        v.pushbannerstate.includes(t.state) ? n() : !0 === t.status ? (o.u.pushbanner.conf = t, socket.send("stop"), l(), clearTimeout(e.timeoutFlag), e.timeoutFlag = !1) : n()
                    }) : v.pushbannerrequesttimer < o.u.pushbanner.interval && v.pushbannerrequesttimer++
                }
            }()
        },
        EndTagBannerPlugin = function(t) {
            var e = this;
            this.endtaginit = function() {
                if ("endtagcontainer" in o) return !1;
                o.endtagcontainer = createElement("div"), v.endtaginit = 1, Banner(o.endtagcontainer, o.u.endtag, 4, o.frame), attr(o.endtagcontainer, {
                    id: "banner_before_end",
                    class: "img_banner_block endtag_end"
                }), css(o.endtagcontainer, {
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    "z-index": "9998",
                    top: "47px",
                    width: "80%"
                }), hide(o.endtagcontainer)
            }, this.setCloseButton = function() {
                let t = createElement("div");
                o.endtagcontainer.appendChild(t), attr(t, {
                    id: "close_button",
                    class: "img_banner_close_button"
                }), css(t, {
                    top: "-20px",
                    right: "-20px",
                    background: "#999"
                }), pushCSS("#close_button{width:40px;height:40px;border-radius:50%;right:10px;position:absolute;float:right;z-index:999;top:10px;clear:both}#close_button:after,#close_button:before,#close_button:hover{background:#fff;cursor:pointer}#close_button,#close_button:hover::after,#close_button:hover::before{background:#000}#close_button:after,#close_button:before{content:'';position:absolute;height:1px;width:30px;top:20px;text-align:center;left:5px}#close_button:before{transform:rotate(45deg)}#close_button:after{transform:rotate(-45deg)}"), t.addEventListener("click", function() {
                    e.hideendtagcontainer()
                })
            }, this.endtagshow = function(t) {
                Object.values(o.u.endtag).length > 0 && !0 == o.u.endtag.conf.banner_show && t > v.endtagtimetoshowads && !1 === v.endtagstatus && (null !== o.endtagcontainer.querySelector("img") || null !== o.endtagcontainer.querySelector("iframe")) && (0 == v.endtagstartbannertime || v.endtagstartbannertime + parseInt(o.u.endtag.conf.show_time) > t) && (0 == v.endtagstartbannertime && (v.endtagstartbannertime = t), show(o.endtagcontainer), o.endtagcontainer && o.u.endtag.conf.banner_show && v.endtagstartbannertime + 15 < t && !document.body.contains(document.getElementsByClassName("img_banner_close_button")[0]) && this.setCloseButton())
            }, this.endtagtoggle = function() {
                if (Object.values(o.u.endtag).length > 0 && !0 == o.u.endtag.conf.banner_show) {
                    let t = parseInt(o.u.endtag.conf.banner_time),
                        e = parseInt(o.u.endtag.conf.movie_et);
                    e && null != e && 0 != e ? v.endtagtimetoshowads = e : v.endtagtimetoshowads = Math.floor(o.media.duration() - t), this.endtagshow(o.media.time()), this.endtaghide(o.media.time())
                }
            }, this.endtaghide = function(t) {
                0 != v.endtagstartbannertime && v.endtagstartbannertime + parseInt(o.u.endtag.conf.show_time) < t && this.hideendtagcontainer(), t < v.endtagtimetoshowads - 10 && (v.endtagstartbannertime = 0, v.endtagstatus = !1)
            }, this.hideendtagcontainer = function() {
                return hide(o.endtagcontainer), v.endtagstatus = !0, v.endtagstartbannertime = 0, !1
            }, "endtag" in o.u && ("endtaginit" == t || "endtagtoggle" == t) && "function" == typeof this[t] && this[t]()
        },
        StartTagBannerPlugin = function(t) {
            var e = this;
            this.starttaginit = function() {
                if ("starttagcontainer" in o) return !1;
                o.starttagcontainer = createElement("div"), v.starttaginit = 1, Banner(o.starttagcontainer, o.u.starttag, 12, o.frame), attr(o.starttagcontainer, {
                    id: "banner_before_start",
                    class: "img_banner_block"
                }), css(o.starttagcontainer, {
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    "z-index": "9998",
                    top: "47px",
                    width: "80%"
                }), hide(o.starttagcontainer)
            }, this.setCloseButtonEnd = function() {
                let t = createElement("div");
                o.starttagcontainer.appendChild(t), attr(t, {
                    id: "close_button",
                    class: "img_banner_close_button"
                }), css(t, {
                    top: "-20px",
                    right: "-20px",
                    background: "#999"
                }), pushCSS("#close_button{width:40px;height:40px;border-radius:50%;right:10px;position:absolute;float:right;z-index:999;top:10px;clear:both}#close_button:after,#close_button:before,#close_button:hover{background:#fff;cursor:pointer}#close_button,#close_button:hover::after,#close_button:hover::before{background:#000}#close_button:after,#close_button:before{content:'';position:absolute;height:1px;width:30px;top:20px;text-align:center;left:5px}#close_button:before{transform:rotate(45deg)}#close_button:after{transform:rotate(-45deg)}"), t.addEventListener("click", function() {
                    e.hidestarttagcontainer()
                })
            }, this.beginsWithFloat = function(t) {
                return t = parseFloat(t), !isNaN(t)
            }, this.starttagshow = function(t) {
                Object.values(o.u.starttag).length > 0 && !0 == o.u.starttag.conf.banner_show && t > v.starttagtimetoshowads && !1 === v.starttagstatus && null !== o.starttagcontainer.querySelector("img") && (0 == v.starttagstartbannertime || v.starttagstartbannertime + parseInt(o.u.starttag.conf.show_time) > t) && o.starttagcontainer.querySelector("img").complete && (0 == v.starttagstartbannertime && (v.starttagstartbannertime = t), show(o.starttagcontainer), o.starttagcontainer && o.u.starttag.conf.banner_show && v.starttagstartbannertime + 15 < t && !document.body.contains(document.getElementsByClassName("img_banner_close_button")[0]) && this.setCloseButtonEnd())
            }, this.getSwarmId = function() {
                return void 0 !== o.plid && o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : v.cuid
            }, this.starttagtoggle = function() {
                if (Object.values(o.u.starttag).length > 0 && !0 == o.u.starttag.conf.banner_show) {
                    let t = o.u.starttag.conf.banner_time,
                        e = parseInt(o.u.starttag.conf.movie_et),
                        n = !1;
                    if ("serial_hash" in o.u.starttag.conf) {
                        let a = this.getSwarmId();
                        a in o.u.starttag.conf.serial_hash && (t = o.u.starttag.conf.serial_hash[a], n = !0)
                    } else n = !0;
                    t = this.beginsWithFloat(t) ? t : parseInt(t), n && (e && null != e && 0 != e ? v.starttagtimetoshowads = e : v.starttagtimetoshowads = Math.floor(o.media.duration() / 100 * t), this.starttagshow(o.media.time()), this.starttaghide(o.media.time()))
                }
            }, this.starttaghide = function(t) {
                0 != v.starttagstartbannertime && v.starttagstartbannertime + parseInt(o.u.starttag.conf.show_time) < t && this.hidestarttagcontainer(), t < v.starttagtimetoshowads - 10 && (v.starttagstartbannertime = 0, v.starttagstatus = !1)
            }, this.hidestarttagcontainer = function() {
                return hide(o.starttagcontainer), v.starttagstatus = !0, v.starttagstartbannertime = 0, !1
            }, "starttag" in o.u && ("starttaginit" == t || "starttagtoggle" == t) && "function" == typeof this[t] && this[t]()
        },
        Start2TagBannerPlugin = function(t) {
            var e = this;
            this.start2taginit = function() {
                if ("start2tagcontainer" in o) return !1;
                o.start2tagcontainer = createElement("div"), v.start2taginit = 1, Banner(o.start2tagcontainer, o.u.start2tag, 12, o.frame), attr(o.start2tagcontainer, {
                    id: "banner_before_start2",
                    class: "img_banner_block"
                }), css(o.start2tagcontainer, {
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    "z-index": "9998",
                    top: "47px",
                    width: "80%"
                }), hide(o.start2tagcontainer)
            }, this.setCloseButtonEnd = function() {
                let t = createElement("div");
                o.start2tagcontainer.appendChild(t), attr(t, {
                    id: "close_button",
                    class: "img_banner_close_button"
                }), css(t, {
                    top: "-20px",
                    right: "-20px",
                    background: "#999"
                }), pushCSS("#close_button{width:40px;height:40px;border-radius:50%;right:10px;position:absolute;float:right;z-index:999;top:10px;clear:both}#close_button:after,#close_button:before,#close_button:hover{background:#fff;cursor:pointer}#close_button,#close_button:hover::after,#close_button:hover::before{background:#000}#close_button:after,#close_button:before{content:'';position:absolute;height:1px;width:30px;top:20px;text-align:center;left:5px}#close_button:before{transform:rotate(45deg)}#close_button:after{transform:rotate(-45deg)}"), t.addEventListener("click", function() {
                    e.hidestart2tagcontainer()
                })
            }, this.beginsWithFloat = function(t) {
                return t = parseFloat(t), !isNaN(t)
            }, this.start2tagshow = function(t) {
                Object.values(o.u.start2tag).length > 0 && !0 == o.u.start2tag.conf.banner_show && t > v.start2tagtimetoshowads && !1 === v.start2tagstatus && null !== o.start2tagcontainer.querySelector("img") && (0 == v.start2tagstartbannertime || v.start2tagstartbannertime + parseInt(o.u.start2tag.conf.show_time) > t) && o.start2tagcontainer.querySelector("img").complete && (0 == v.start2tagstartbannertime && (v.start2tagstartbannertime = t), show(o.start2tagcontainer), o.start2tagcontainer && o.u.start2tag.conf.banner_show && v.start2tagstartbannertime + 15 < t && !document.body.contains(document.getElementsByClassName("img_banner_close_button")[0]) && this.setCloseButtonEnd())
            }, this.getSwarmId = function() {
                return void 0 !== o.plid && o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : v.cuid
            }, this.start2tagtoggle = function() {
                if (Object.values(o.u.start2tag).length > 0 && !0 == o.u.start2tag.conf.banner_show) {
                    let t = o.u.start2tag.conf.banner_time,
                        e = parseInt(o.u.start2tag.conf.movie_et),
                        n = !1;
                    if ("serial_hash" in o.u.start2tag.conf) {
                        let a = this.getSwarmId();
                        a in o.u.start2tag.conf.serial_hash && (t = o.u.start2tag.conf.serial_hash[a], n = !0)
                    } else n = !0;
                    t = this.beginsWithFloat(t) ? t : parseInt(t), n && (e && null != e && 0 != e ? v.start2tagtimetoshowads = e : v.start2tagtimetoshowads = Math.floor(o.media.duration() / 100 * t), this.start2tagshow(o.media.time()), this.start2taghide(o.media.time()))
                }
            }, this.start2taghide = function(t) {
                0 != v.start2tagstartbannertime && v.start2tagstartbannertime + parseInt(o.u.start2tag.conf.show_time) < t && this.hidestart2tagcontainer(), t < v.start2tagtimetoshowads - 10 && (v.start2tagstartbannertime = 0, v.start2tagstatus = !1)
            }, this.hidestart2tagcontainer = function() {
                return hide(o.start2tagcontainer), v.start2tagstatus = !0, v.start2tagstartbannertime = 0, !1
            }, "start2tag" in o.u && ("start2taginit" == t || "start2tagtoggle" == t) && "function" == typeof this[t] && this[t]()
        },
        PauseBannerPlugin = function(t) {
            this.pausebannerinit = function() {
                if ("pausebannercontainer" in o) return !1;
                o.pausebannercontainer = createElement("div"), css(o.pausebannercontainer, {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "inline-block",
                    top: "0%",
                    left: "0",
                    background: "black"
                }), Banner(o.pausebannercontainer, o.u.pausebanner, 5, o.mediacontainer), hide(o.pausebannercontainer), pushCSS('hdvbplayer ins[data-cp-host*="|5|"] ins {display: flex!important;align-items: center;}')
            }, this.pausebannershow = function() {
                if ("pausebannercontainer" in o) {
                    var t = o.pausebannercontainer.querySelectorAll("ins");
                    t.length > 0 && Object.values(t).map(function(t) {
                        css(t, {
                            height: "100%",
                            width: "100%"
                        })
                    });
                    var e = o.pausebannercontainer.querySelectorAll("div[class*=epom]");
                    e.length > 0 && css(e[0], {
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center"
                    }), show(o.pausebannercontainer), hide(o.mediacontainer)
                }
            }, this.pausebannerhide = function() {
                "pausebannercontainer" in o && (hide(o.pausebannercontainer), show(o.mediacontainer))
            }, "pausebanner" in o.u && "function" == typeof this[t] && this[t]()
        },
        VastVideo = function() {
            var vast, duration, paused, controls, uiplay, uiplay2, uibuffer, uiposter, uit, uitxt, uimute, uiunmutebut, uiprogress, uix, uiskip, vpaidframe, vpaidslot, vpaidslot2, vpaid, vpaid_int, vpaidframe_int, vpaid_t, vpaid_stop_t, vpaid_complete_t, push_wait_int, video_t, vpaidvolume2, vpaid_int2, img_int, slow_unmute, js_events, remove_t, complete_t, ytag, ytinterval, over = o.mousehere,
                no = ["desktop", "mobile", "mobiletv", "tv", "lg", "winmob"];
            o.vastcontainer = createElement("div"), css(o.vastcontainer, {
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                "background-color": exist(v.vast_bgcolor) ? v.vast_bgcolor : "#000000"
            }), exist(v.vast_bga) || 1 == v.hidevideo && (v.vast_bga = .5), css(o.vastcontainer, {
                opacity: v.vast_bga
            }), o.frame.appendChild(o.vastcontainer), o.system.mobile || (o.vastcontainer.addEventListener("mouseover", onOver, !1), o.vastcontainer.addEventListener("mouseleave", onOut, !1));
            var tag = createElement("video");
            o.vastcontainer.appendChild(tag), o.vastcontainer.style.zIndex = 1001, hide(o.vastcontainer), css(tag, {
                width: "100%",
                height: "100%",
                "object-fit": "contain",
                "min-height": "auto",
                "max-height": "none",
                "min-width": "auto",
                "max-width": "none"
            }), 1 !== v.vpaid_waitstart && css(tag, {
                autoplay: 1
            }), attr(tag, {
                preload: "auto",
                "x-webkit-airplay": "deny",
                "webkit-playsinline": !0,
                cursor: "pointer",
                playsinline: "1",
                pip: "false"
            }), (1 == v.vast_unmutehover || 1 == v.vast_unmutebut) && (tag.muted = !0, attr(tag, {
                muted: "true"
            }));
            var vpaidvolume = 1,
                vpaidstopped = !1,
                vpaidstarted = !1,
                vaststarted = !1,
                vpaidskipped = !1,
                vpaidcompleted = !1,
                vpaidvideostarted = !1,
                vpaidquartile = !1,
                removed = !1,
                last_skiptime = 0,
                last_time = 0,
                imgtime = 0,
                _move = !1,
                _go = !1,
                _muted = !1,
                muteicon = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path fill='" + v.vast_volumecolor + "' stroke-width='0' d='m2.49931,6.8746l0,6.25079l3.10029,0l4.64114,4.37461l0.00276,-15l-4.64182,4.37461l-3.10237,0l0,-0.00001zm10.44167,-0.75275c-0.26762,-0.30766 -0.69733,-0.30766 -0.96359,0.00158c-0.26557,0.30925 -0.26557,0.80989 0.00136,1.11992l0,-0.00157c0.58769,0.68334 0.94997,1.62056 0.94997,2.66218c0,1.04083 -0.3616,1.97489 -0.94861,2.65823c-0.2683,0.30766 -0.2683,0.8083 -0.00136,1.11912c0.13279,0.15423 0.30713,0.23173 0.48146,0.23173c0.17501,0 0.34934,-0.0775 0.48213,-0.23173c0.83216,-0.9649 1.34835,-2.30548 1.34767,-3.77735c0.00068,-1.47504 -0.51755,-2.8172 -1.34903,-3.7821l0,-0.00001zm1.55246,-1.75907c-0.27124,0.30979 -0.27124,0.81211 0,1.12031c1.00334,1.14962 1.62195,2.73104 1.62195,4.4852c0,1.75256 -0.61861,3.3332 -1.62056,4.48361c-0.27125,0.30899 -0.27125,0.81053 0,1.12031c0.13493,0.1545 0.31208,0.23214 0.48991,0.23214c0.17713,0 0.35428,-0.07764 0.48921,-0.23214c1.25105,-1.43327 2.02674,-3.41876 2.02536,-5.60392c0.00069,-2.18675 -0.775,-4.17383 -2.02813,-5.60551c-0.27194,-0.30979 -0.70857,-0.30979 -0.97774,0z'/></g></svg>",
                unmuteicon = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path fill='" + v.vast_volumecolor + "' stroke-width='0' d='m2.49931,6.8746l0,6.25079l3.10029,0l4.64114,4.37461l0.00276,-15l-4.64182,4.37461l-3.10237,0l0,-0.00001z'/><path d='m18.125,12.20836l-2.20816,-2.20816l2.20776,-2.20816l-1.13498,-1.13579l-2.20816,2.20816l-2.20816,-2.20816l-1.13498,1.13579l2.20776,2.20816l-2.20816,2.20816l1.13579,1.13539l2.20776,-2.20816l2.20776,2.20816' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='" + v.vast_volumecolor + "'/></g></svg>",
                impression = !1,
                remainigs = 0,
                unmute_volume = 0,
                youtube = !1,
                vimeo = !1,
                mp3 = !1,
                imps = [],
                qrts = [],
                start_timeout = !0;
            if (1 !== v.vpaid_waitstart) {
                var pp = tag.play();
                void 0 !== pp && pp.then(function() {}).catch(function(t) {
                    t.message.indexOf("interact") > 0 && (log("play mute"), tag.muted = !0, attr(tag, {
                        muted: "true"
                    }))
                })
            }

            function onOutSkip() {
                css(1 == v.vast_skip2right ? uiskip : uiprogress, {
                    "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, .5))
                })
            }

            function ImgLoaded() {
                imgtime = 0, duration = exist(vast.duration) ? vast.duration : 10, img_int = setInterval(onTimeupdate, 100), onTimeupdate(), Event("start", !0)
            }

            function PlayStart() {
                var t = tag.play();
                void 0 !== t && t.then(function() {}).catch(function(t) {
                    (log("playError VAST", t.message), 1 == vast.pause_mute) ? (Pause(!0), o.actions.VastShow()) : !die_error && !removed && (onMute(), tag.play().then(function() {}).catch(function(t) {
                        log("playError2 VAST", t.message), Pause(!0), o.actions.VastShow()
                    }))
                }), video_t = setTimeout(tagTimeout, 1e3 * v.vast_timeout), vaststarted = !0
            }

            function vpaidframeloaded() {
                try {
                    if (vpaidframe.contentWindow) {
                        clearInterval(vpaidframe_int), js2("vpaidframeloaded");
                        var t = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><script type="text/javascript" src="' + vast.file + '"></script><script type="text/javascript">window.parent.postMessage("PJS_VPAID_LOADED","*");</script></body></html>';
                        window.addEventListener("message", waitVpaid), vpaidframe.contentWindow.document.open(), vpaidframe.contentWindow.document.write(t), vpaidframe.contentWindow.document.close()
                    }
                } catch (e) {
                    log("VPAID frame error"), onError(901)
                }
            }

            function waitVpaid(t) {
                "PJS_VPAID_LOADED" == t.data && (window.removeEventListener("message", waitVpaid), initVpaid())
            }

            function initVpaid() {
                if (vpaidframe.contentWindow) {
                    var t = vpaidframe.contentWindow.getVPAIDAd;
                    t && "function" == typeof t && (vpaid = t()) ? Vpaid() : onError(900)
                }
            }

            function CheckMuteStart() {
                (0 == v.vast_volume || o.muted && 1 != v.vast_resound || 1 == vast.mute || 1 == v.vast_unmutehover && !o.mouseHere && !o.system.mobile || tag.muted || 0 == tag.volume) && -1 != vast.mute && onMute()
            }

            function startTimeout() {
                start_timeout = !1
            }

            function onLoadStart() {}
            this.break = function() {
                exist(uiplay) && (log("VAST break"), onError())
            }, this.Go = function(x) {
                if (removed && show(tag), tag.volume = .4, duration = 0, paused = !1, controls = !0, impression = !1, remainigs = 0, removed = !1, last_time = 0, last_skiptime = 0, vast = x, die_error = !1, js_events = [], _go = !0, show(o.vastcontainer), exist(vast.extensions.controls) && (0 === vast.extensions.controls || "0" === vast.extensions.controls) && (controls = !1), (1 == vast.nocontrols || 1 == v.vast_nocontrols) && (1 == vast.nocontrolsvpaid ? vast.isVpaid && (controls = !1) : controls = !1), 1 == vast.yescontrols && (controls = !0), o.controls && o.controls.SettingsVisible() && o.controls.Settings(), exist(vast.prt) && (vast.prtg = 1), vast.isVpaid && 1 == v.vast_novpaid) {
                    onError("NO VPAID");
                    return
                }
                var stop = !1;
                if (exist(vast.file) && ((vast.file.indexOf("youtube.com/") > -1 || vast.file.indexOf("youtu.be/") > -1) && (youtube = !0), 1 == v.vimeo && vast.file.indexOf("vimeo.com/") > -1 && (vimeo = !0), vast.file.indexOf(".mp3") > -1 && (mp3 = !0), "intro" == vast.adsystem)) {
                    for (var i = 0; i < no.length; i++)
                        if (vast.file.indexOf("[no_" + no[i] + "]") > -1 && (vast.file = vast.file.replace("[no_" + no[i] + "]", ""), o.system[no[i]])) {
                            onError("no " + no[i]), stop = !0;
                            break
                        }
                }
                if (!stop) {
                    if ((vast.isImg || vast.isVpaid || youtube || vimeo) && (vpaidslot = createElement("div"), o.vastcontainer.appendChild(vpaidslot), css(vpaidslot, {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        })), youtube && (ytag = new MediaYoutube("intro" + vast.file, vpaidslot)), vimeo && (ytag = new MediaVimeo("intro" + vast.file, vpaidslot)), !youtube && !vimeo) {
                        var elm = vast.isImg ? vpaidslot : tag;
                        o.system.mobile ? (elm.removeEventListener("touchstart", onTouchStart), elm.removeEventListener("touchmove", onTouchMove), elm.removeEventListener("touchend", onScreenClick)) : elm.removeEventListener("click", onScreenClick);
                        var _clck = !0;
                        exist(vast.extensions.isClickable) && (_clck = 1 == vast.extensions.isClickable), _clck && (o.system.mobile ? (elm.addEventListener("touchend", onScreenClick), elm.addEventListener("touchstart", onTouchStart), elm.addEventListener("touchmove", onTouchMove)) : (elm.addEventListener("click", onScreenClick), css(elm, {
                            cursor: "pointer"
                        })))
                    }
                    if (RemoveInterface(), uiplay = createElement("div"), css(uiplay, {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            display: "none",
                            cursor: "pointer",
                            "z-index": 1
                        }), o.vastcontainer.appendChild(uiplay), uiplay2 = createElement("div"), css(uiplay2, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "margin-left": -10,
                            "margin-top": -10,
                            cursor: "pointer",
                            background: "rgba(0,0,0,0.5)",
                            "border-radius": 20,
                            width: 20,
                            height: 20,
                            padding: "3px 2px 3px 4px",
                            zIndex: 1
                        }), o.system.safari && o.system.desktop ? css(uiplay2, {
                            zoom: "3"
                        }) : css(uiplay2, {
                            transform: "scale(3)"
                        }), uiplay2.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path d='m4.59375,3.48438l-0.03125,13.03125l10.875,-6.51563l-10.84375,-6.51562z' fill='#ffffff'/></g></svg>", uiplay.appendChild(uiplay2), uiplay.onclick = onScreenClick, vast.companionImg && (uiposter = createElement("div"), css(uiposter, {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            background: "url(" + vast.companionImg + ") 50% 50% no-repeat",
                            "background-size": "contain"
                        }), o.vastcontainer.appendChild(uiposter)), uibuffer && RemoveControl("uibuffer"), uibuffer = createElement("div"), css(uibuffer, {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            pointerEvents: "none",
                            zIndex: 1
                        }), v.control_buffer.icon && 0 != v.vast_buffering && (controlCSS(v.control_buffer.icon, v.control_buffer.color, uibuffer), o.vastcontainer.appendChild(uibuffer), v.control_buffer.scale && css(uibuffer, {
                            transform: "scale(" + v.control_buffer.scale + ")"
                        }), css(uibuffer, {
                            "margin-left": -uibuffer.offsetWidth / 2,
                            "margin-top": -uibuffer.offsetHeight / 2
                        }), vast.buffering = !0), (controls || 1 == v.vast_title_important) && (0 == vast.introtitle || 1 == v.vast_title && (uit = createElement("div"), css(uit, {
                            "font-size": existv(v.vast_title_size, 14) * existv(v.globalfs, 1),
                            color: v.vast_titlecolor,
                            position: "absolute",
                            top: existv(v.vast_title_top, 0),
                            left: existv(v.vast_title_left, 0),
                            "background-color": hex2rgb(v.vast_titlebgcolor, existv(v.vast_titlebga, 0)),
                            opacity: existv(v.vast_titlea, 1),
                            padding: "5px 8px 5px 8px",
                            "box-sizing": "border-box",
                            zIndex: 1
                        }), o.vastcontainer.appendChild(uit), vast.uititle = Lang("ads"), exist(v.vast_title_text) && "" != v.vast_title_text && (vast.uititle = v.vast_title_text), uit.innerHTML = vast.uititle + (1 == v["vast_" + o.vasttype + "_counter"] && o.adscounter <= o.adsinchain && o.adsinchain > 1 ? " " + o.adscounter + "/" + o.adsinchain : ""))), controls) {
                        function onOutMute() {
                            css(uimute, {
                                background: hex2rgb(v.vast_volumebgcolor, existv(v.vast_volumebga, .5))
                            })
                        }

                        function onOverMute() {
                            css(uimute, {
                                background: hex2rgb(v.vast_volumebgcolor, existv(v.vast_volumebga, .5) + .3)
                            })
                        }
                        if ((exist(vast.control_adlabel) && ("0" === vast.control_adlabel || "-1" === vast.control_adlabel ? css(uit, {
                                top: -1e3
                            }) : "1" !== vast.control_adlabel && (("TR" == vast.control_adlabel || "BR" == vast.control_adlabel) && css(uit, {
                                right: 0,
                                left: "auto"
                            }), ("BR" == vast.control_adlabel || "BL" == vast.control_adlabel) && css(uit, {
                                bottom: 0,
                                top: "auto"
                            }))), exist(vast.extensions.linkTxt)) ? o.system.mobile && 0 == v.vast_linktxtonmobile || "" == vast.extensions.linkTxt || (exist(uitxt) ? (show2(uitxt), uitxt.innerHTML = vast.extensions.linkTxt) : (uitxt = createElement("div"), css(uitxt, {
                                position: "absolute",
                                bottom: 50,
                                "margin-left": "auto",
                                "margin-right": "auto",
                                left: 0,
                                right: 0,
                                "font-size": existv(v.vast_linktxt_size, o.system.mobile ? 12 : 14) * existv(v.globalfs, 1),
                                color: v.vast_linktxtcolor,
                                display: "table",
                                width: "50%",
                                "text-align": "center",
                                zIndex: 1
                            }), uitxt.innerHTML = "<pjspan style='background:" + hex2rgb(v.vast_linktxtbgcolor, 1) + ";padding:7px 15px;border-radius:20px;display:inline-block;cursor:pointer'>" + vast.extensions.linkTxt + "</pjspan>", o.vastcontainer.appendChild(uitxt), "" == vast.click && vast.isVpaid ? (css(uitxt.firstElementChild, {
                                "pointer-events": "none"
                            }), css(uitxt, {
                                "pointer-events": "none"
                            })) : uitxt.firstElementChild.addEventListener("click", onInvite), hide2(uitxt), (o.mouseHere || o.system.mobile) && setTimeout(function() {
                                show2(uitxt)
                            }, 200))) : exist(uitxt) && hide2(uitxt), uimute = createElement("div"), css(uimute, {
                                position: "absolute",
                                bottom: 10,
                                right: 10,
                                "text-align": "center",
                                cursor: "pointer",
                                transform: "scale(1)",
                                "border-radius": 30,
                                height: 30,
                                width: 30,
                                "padding-top": 5,
                                "box-sizing": "border-box",
                                zIndex: 1,
                                transition: "background-color 0.2s linear"
                            }), uimute.innerHTML = muteicon, o.vastcontainer.appendChild(uimute), uimute.onclick = onToggleMute, uimute.addEventListener("mouseover", onOverMute), uimute.addEventListener("mouseout", onOutMute), onOutMute(), exist(vast.control_soundbtn)) {
                            var tmp = vast.control_soundbtn;
                            "0" === tmp ? (hide(uimute), css(uimute, {
                                top: -1e3
                            })) : "1" !== tmp && ("TR" == tmp && css(uimute, {
                                bottom: "auto",
                                top: 10,
                                right: 10
                            }), "TL" == tmp && css(uimute, {
                                bottom: "auto",
                                top: 10,
                                right: "auto",
                                left: 10
                            }), "BL" == tmp && css(uimute, {
                                bottom: 10,
                                right: "auto",
                                left: 10
                            }))
                        }

                        function onOutX(t) {
                            css(uix, {
                                "background-color": hex2rgb(v.vast_xbgcolor, existv(v.vast_xbga, .5))
                            })
                        }
                        if (uiprogress = createElement("div"), o.vastcontainer.appendChild(uiprogress), uiprogress.innerHTML = '<svg id="pljsvastprogress_' + v.id + '" width="20" height="20" viewPort="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg);float:left"><circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="56.48" stroke-dashoffset="0" stroke-width="2" style="stroke:' + v.vast_progresscolor + ';opacity:0.3"></circle><circle id="pljsvastprogressbar_' + v.id + '" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="56.48" stroke-dashoffset="0" stroke-width="2" style="stroke:' + v.vast_progresscolor + ';opacity:0;-webkit-transform-origin: center center;transform-origin: center center;"></circle></svg>', css(uiprogress, {
                                "border-radius": 30,
                                padding: 5,
                                overflow: "hidden",
                                height: "auto",
                                height: 20,
                                position: "absolute",
                                bottom: 10,
                                left: 10,
                                "transform-origin": "center center",
                                transition: "background-color 0.2s linear",
                                zIndex: 1,
                                "background-color": hex2rgb(v.vast_progressbgcolor, existv(v.vast_progressbga, .5))
                            }), uiskip = createElement("div"), css(uiskip, {
                                padding: "3px 10px 0 12px",
                                float: "left",
                                display: "inline-block",
                                "font-size": existv(v.vast_skip_size, 16) * existv(v.globalfs, 1),
                                color: v.vast_skipcolor,
                                visibilty: "hidden",
                                transition: "background-color 0.2s linear,opacity 0.2s linear",
                                display: "none",
                                zIndex: 1
                            }), uiskip.innerHTML = Lang("skip"), 1 == v.vast_skip2right ? (o.vastcontainer.appendChild(uiskip), css(uiskip, {
                                padding: 10,
                                float: "none"
                            }), onOutSkip()) : uiprogress.appendChild(uiskip), uix = createElement("div"), css(uix, {
                                position: "absolute",
                                top: -100,
                                right: 0,
                                width: 40,
                                height: 40,
                                padding: 10,
                                opacity: 0,
                                visibilty: "hidden",
                                transition: "background-color 0.2s linear,opacity 0.2s linear",
                                cursor: "pointer",
                                "box-sizing": "border-box",
                                zIndex: 1
                            }), uix.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path d='M19.25,0.75 L0.75,19.25 L19.25,0.75 Z' stroke='#FFFFFF' stroke-width='3' stroke-linecap='square' style='pointer-events:none'></path><path d='M0.75,0.75 L19.25,19.25 L0.75,0.75 Z' stroke='" + v.vast_xcolor + "' stroke-width='3' stroke-linecap='square'></path></g></svg>", onOutX(), o.vastcontainer.appendChild(uix), uix.onclick = onClose, uix.addEventListener("mouseover", function() {
                                css(uix, {
                                    "background-color": hex2rgb(v.vast_xbgcolor, existv(v.vast_xbga, .5) + .3)
                                })
                            }), uix.addEventListener("mouseout", onOutX), exist(vast.extensions) && exist(vast.extensions.skipTime) && vast.extensions.skipTime > 0 && vast.extensions.skipTime < 100 && (uiskip.innerHTML = Lang("skip_after_") + vast.extensions.skipTime, css(uiskip, {
                                cursor: "default",
                                "font-size": existv(v.vast_skip2_size, 12) * existv(v.globalfs, 1),
                                display: "block"
                            })), exist(vast.control_countdown) && 1 != v.vast_skip2right) {
                            var tmp = vast.control_countdown;
                            "0" === tmp || "-1" === tmp ? css(uiskip, {
                                bottom: -100
                            }) : "1" !== tmp && ("TR" == tmp && (css(uiprogress, {
                                bottom: "auto",
                                left: "auto",
                                top: 10,
                                right: 10
                            }), css(uix, {
                                top: 0,
                                left: 0,
                                right: "auto"
                            })), "TL" == tmp && css(uiprogress, {
                                bottom: "auto",
                                top: 10,
                                left: 10
                            }), "BR" == tmp && css(uiprogress, {
                                left: "auto",
                                bottom: 10,
                                right: 10
                            }))
                        }
                        1 == v.vast_skip2right && (css(uimute, {
                            bottom: 10,
                            left: 50,
                            right: "auto"
                        }), css(uiskip, {
                            float: "none",
                            position: "absolute",
                            bottom: v.vast_skip_bottom ? v.vast_skip_bottom : 10,
                            right: 0
                        }))
                    }
                    if (1 == v.vast_unmutebut) {
                        uiunmutebut = createElement("div"), css(uiunmutebut, {
                            background: v.vast_unmutebutbgcolor,
                            padding: "11px 10px 6px 20px",
                            position: "absolute",
                            top: "50%",
                            left: -200,
                            "font-size": 16 * existv(v.globalfs, 1),
                            margin: "-20px 0 0 -5px",
                            color: v.vast_unmutebutcolor,
                            cursor: "pointer"
                        }), uiunmutebut.style.zIndex = 9999, o.vastcontainer.appendChild(uiunmutebut);
                        var unmutebuticon = muteicon,
                            rg = RegExp(v.vast_volumecolor, "g");
                        unmutebuticon = unmutebuticon.replace(rg, v.vast_unmutebutcolor), uiunmutebut.innerHTML = Lang("unmute_video") + ' &nbsp; <span style="float:right;margin-top:-2px">' + unmutebuticon + "</span>", uiunmutebut.onclick = onUnmute
                    }
                    if (js3("vast_system", vast.adsystem), js3("vast_url", vast.vasturl), js3("vast_info", VastInfo()), vast.isImg) {
                        if (hide2(uimute), vast.isFrm) {
                            var frm = document.createElement("iframe");
                            frm.scrolling = "no", frm.onload = ImgLoaded, frm.src = vast.file, css(frm, {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                border: 0
                            }), o.vastcontainer.appendChild(frm)
                        } else {
                            var image = new Image;
                            image.onload = function() {
                                vpaidslot.style.backgroundImage = "url('" + vast.file + "')", vpaidslot.style.backgroundSize = "cover", ImgLoaded()
                            }, image.onerror = function() {
                                onError(405)
                            }, image.src = vast.file
                        }
                    }
                    if (vpaidstopped = !1, vpaidskipped = !1, vpaidcompleted = !1, vpaidstarted = !1, vaststarted = !1, vpaidvideostarted = !1, vpaidquartile = !1, vast.isVpaid) {
                        if (vast.customVpaid) vpaid = eval("new " + vast.customVpaid + "()"), v.vpaid_slotinframe = 0, Vpaid();
                        else {
                            (vpaidframe = document.createElement("iframe")).id = "pljsvpaid", vpaidframe.allow = "autoplay", vpaidframe.scrolling = "no", vpaidframe.setAttribute("allowFullScreen", ""), 1 == v.vpaid_slotinframe ? (css(vpaidframe, {
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                border: 0
                            }), hide2(vpaidslot)) : css(vpaidframe, {
                                width: 0,
                                height: 0
                            }), o.vastcontainer.appendChild(vpaidframe);
                            var base = document.createElement("base");
                            base.href = o.href, vpaidframe.contentWindow && vpaidframe.contentWindow.document.getElementsByTagName("head")[0].appendChild(base), vpaidframe_int = setInterval(vpaidframeloaded, 100), js2("vpaidframe"), clearTimeout(vpaid_t), vpaid_t = setTimeout(vpaidLoadTimeout, 1e3 * v.vast_timeout)
                        }
                    }
                    vast.isVpaid || vast.isImg || (youtube || vimeo ? CheckMuteStart() : (tag.addEventListener("loadstart", onLoadStart), tag.addEventListener("error", onTagError), tag.addEventListener("ended", onEnded), tag.addEventListener("playing", onPlay), tag.addEventListener("timeupdate", onTimeupdate), tag.addEventListener("seeking", onSeeking), tag.addEventListener("seeked", onSeeked), tag.addEventListener("loadedmetadata", onMeta), tag.addEventListener("volumechange", onVolume), tag.addEventListener("waiting", onWaiting), tag.addEventListener("durationchange", onDuration), tag.addEventListener("progress", onProgress), attr(tag, {
                        src: x.file
                    }), -1 != v.vast_volume ? tag.volume = v.vast_volume : tag.volume = v.volume, CheckMuteStart(), 1 != v.vpaid_waitstart ? PlayStart() : js("vast_readystart"))), setTimeout(startTimeout, 500)
                }
            }, this.ytReady = function() {
                js3("vast_duration", duration = ytag.duration()), StopBuffering(), ytinterval = setInterval(this.timeUpdate, 500), (0 == v.vast_volume || o.muted || 1 == v.vast_unmutehover && !o.system.mobile) && onMute()
            }, this.ytError = function() {
                onError()
            }, this.ytWaiting = function() {
                onWaiting()
            }, this.ytWaited = function() {
                StopBuffering()
            }, this.ytEnded = function() {
                onEnded()
            };
            var die_error = !1;

            function onOver() {
                over || (uitxt && show2(uitxt), 1 != v.vast_unmutehover || o.system.mobile || (onUnmute(), 1 != v.vast_unmuteonce || (v.vast_unmutehover = 0))), over = !0
            }

            function onMeta() {
                tag.videoHeight > 0 && 1 == v.changeheight && 1 == v.changevastheight && o.actions.changeAspect(tag.videoWidth / tag.videoHeight, !0)
            }

            function onOut() {
                over && (uitxt && hide2(uitxt), 1 != v.vast_unmutehover || o.system.mobile || (clearInterval(slow_unmute), onMute())), over = !1
            }

            function onTagError() {
                4 == tag.error.code ? onError(403) : onError(405)
            }

            function onError(t) {
                if (!die_error && !removed) {
                    if (die_error = !0, log("VAST video playing error " + t), vpaid)
                        for (var e in vpaidCallbacks) vpaidCallbacks.hasOwnProperty(e) && vpaid.unsubscribe(vpaidCallbacks[e], e);
                    Event("Error", !1, t > 0 ? t : 400), clearInterval(vpaid_int), clearInterval(vpaidframe_int), clearInterval(push_wait_int), RemoveTimeouts(), o.actions.VastError()
                }
            }

            function RemoveAndPlay() {
                Event("remove"), RemoveTimeouts(), removed || (removed = !0, o.actions.VastRemoveAndPlay())
            }

            function RemoveTimeouts() {
                clearTimeout(vpaid_t), clearTimeout(vpaid_stop_t), clearTimeout(vpaid_complete_t), clearTimeout(video_t)
            }

            function onEnded() {
                vpaidcompleted || Event("complete", !0), RemoveAndPlay()
            }

            function onClose() {
                Event("close", !0);
                var t = new Date;
                o.clicktime = t.getTime(), o.vastclick = !0, gaTracker("vast_skip", "VAST Skip"), 1 == v["vast_" + o.vasttype + "skipor"] ? o.actions.VastNext() : RemoveAndPlay()
            }

            function onSkip() {
                var t = new Date;
                o.clicktime = t.getTime(), o.vastclick = !0, log("VAST Skip"), gaTracker("vast_skip", "VAST Skip"), !vpaidskipped && vpaid && vast.isVpaid ? (log("VPAID Skip request"), vpaid.skipAd()) : (Event("skipAd", !0), Event("skip", !0), duration > 16 && gif(`//stat.stats.rip/?player=HDVB&service=player&host=${o.p.host}&id=${o.p.kp}&skip=1${o.p.translator?"&translator="+o.p.translator:""}`), 1 == v["vast_" + o.vasttype + "skipor"] ? o.actions.VastNext() : RemoveAndPlay())
            }

            function onInvite() {
                Event("addClick"), Event("acceptInvitation", !1), onClick()
            }

            function onToggleMute() {
                _muted ? onUnmute() : onMute()
            }

            function onMute() {
                var t = !1;
                log((vast.isVpaid ? "VPAID" : "VAST") + " Mute"), youtube || vimeo ? ytag.Mute() : (clearInterval(slow_unmute), vast.isVpaid ? vpaid ? (vpaidvolume = vpaid.getAdVolume() > 0 ? vpaid.getAdVolume() : v.vast_volume, vpaid.setAdVolume(0)) : t = !0 : (Event("mute"), tag.muted = !0)), t || (Unmutebut(1), MuteIcon(!0))
            }

            function MuteIcon(t) {
                _muted = t, exist(uimute) && (uimute.innerHTML = t ? unmuteicon : muteicon)
            }

            function onUnmute() {
                var t = !1;
                youtube || vimeo ? (ytag.Unmute(), Event("unmute")) : vast.isVpaid ? vpaid ? (v.vpaid_mute_impression = 0, 0 == unmute_volume && (unmute_volume = vpaidvolume) < .3 && (unmute_volume = v.vast_default_volume), vpaid.setAdVolume(0), tag.muted = !1, clearInterval(slow_unmute), slow_unmute = setInterval(SlowUnMute, 200)) : t = !0 : (tag.muted = !1, 0 == unmute_volume && (unmute_volume = tag.volume) < .3 && (unmute_volume = v.vast_default_volume), tag.volume = 0, clearInterval(slow_unmute), slow_unmute = setInterval(SlowUnMute, 200)), t || (Unmutebut(0), MuteIcon(!1))
            }

            function Unmutebut(t) {
                var e = uiunmutebut;
                if (1 == v.vast_unmutebut && e) {
                    var o = {
                        mc: e,
                        me: "uiunmutebut",
                        type: "left"
                    };
                    1 == t ? (show(e), o.to = 0) : (o.to = -200, o.hide = !0), new Motion(o)
                }
            }

            function SlowUnMute() {
                if (v.vast_volume = unmute_volume, vast.isVpaid) {
                    var t = vpaid.getAdVolume();
                    t < unmute_volume && t < .99 ? vpaid.setAdVolume(parseFloat(t) + .1) : (unmute_volume = 0, clearInterval(slow_unmute), Event("unmute"))
                } else tag.volume < unmute_volume && tag.volume < .95 ? tag.volume += .1 : (unmute_volume = 0, clearInterval(slow_unmute), Event("unmute"))
            }

            function onTouchStart() {
                _move = !1
            }

            function onTouchMove() {
                _move = !0
            }

            function onScreenClick() {
                var t = !1;
                o.system.mobile && _move && (t = !0), removed && (t = !0), t || (paused ? Resume() : onClick()), 1 == v.vast_unmuteonclick && onUnmute()
            }

            function onClick(t) {
                if (!start_timeout) {
                    var e = new Date;
                    o.clicktime = e.getTime(), Event("click"), (1 == v.vast_addclick || t) && Event("addClick"), gaTracker("vast_click", "VAST Click");
                    var n = !1;
                    if (exist(vast.click) && "" != vast.click) {
                        for (var a = ["ref", "referer", "host"], s = 0; s < a.length; s++) vast.click = vast.click.replace(RegExp("\\(" + a[s] + "\\)", "gi"), "host" == a[s] ? encodeURIComponent(o.domain) : Href());
                        js2("vast_clickurl", vast.click), 1 == v.vast_openclick && window.open(vast.click, "_blank"), n = !0
                    }
                    1 == v.vast_pauseonclick ? Pause(n) : 1 == v.vast_closeonclick && n && o.actions.VastRemoveAndPlay(1 == v.vast_playonclick ? "" : "dontplay")
                }
            }

            function onPlay() {
                onTimeupdate(), Event("start", !0)
            }

            function onPause() {
                Pause(!0)
            }

            function Pause(t) {
                vast.isVpaid && vpaid && (vpaid.pauseAd(), controls && show2(uiplay), paused = !0), vast.isImg && (clearInterval(img_int), controls && show2(uiplay), paused = !0), vast.isVpaid || vast.isImg || !t || (youtube || vimeo ? ytag.Pause() : tag.pause(), Event("pause"), show2(uiplay), paused = !0), uitxt && hide2(uitxt), StopBuffering()
            }

            function Resume() {
                paused && (vast.isVpaid && vpaid && (vpaid.resumeAd(), hide2(uiplay), paused = !1), vast.isImg && (img_int = setInterval(onTimeupdate, 100), onTimeupdate(), hide2(uiplay), paused = !1), vast.isVpaid || vast.isImg || (youtube || vimeo ? ytag.Play() : tag.play(), Event("resume"), hide2(uiplay), paused = !1), uitxt && show2(uitxt))
            }

            function CurrentTime() {
                var t = 0;
                return youtube || vimeo ? t = ytag.time() : vast.isImg ? (t = imgtime, imgtime += .1) : t = tag.currentTime, t
            }

            function CurrentVolume() {
                if (vast) {
                    if (!vast.isVpaid) return tag.muted ? 0 : tag.volume;
                    if (vpaid) {
                        var t = -1;
                        try {
                            t = vpaid.getAdVolume()
                        } catch (e) {
                            log(e)
                        }
                        return t
                    }
                }
            }

            function onTimeupdate(t) {
                if (tag && !removed) {
                    var e = CurrentTime();
                    if (impression || (onImpression(), impression = !0), !qrts[0] && e > duration / 4 && (Event("firstQuartile", !0), qrts[0] = !0), !qrts[1] && e > duration / 2 && (Event("midpoint", !0), qrts[1] = !0), !qrts[2] && e > duration / 4 * 3 && (Event("thirdQuartile", !0), qrts[2] = !0), exist(vast.progresstimes))
                        for (var n = 0; n < vast.progresstimes.length; n++) e >= vast.progresstimes[n] && Event("progress_" + vast.progresstimes[n], !0);
                    onTimeupdateExtensions(e), e > 0 && e > last_time && StopBuffering(), void 0 == o.vasttype && ("intro" == vast.adsystem && (o.vasttype = "preroll"), "outro" == vast.adsystem && (o.vasttype = "postroll")), vast.isImg && e > duration && onEnded(), last_time = e
                }
            }
            this.timeUpdate = function() {
                onTimeupdate()
            };
            var tu0 = !0;

            function onTimeupdateExtensions(t) {
                if (js3("vast_time", t), !vast.isVpaid || !tu0 || (tu0 = !1, !(t < duration - 2) || !(duration > 0))) {
                    if (exist(vast.extensions)) {
                        if (exist(vast.events.sec) && !vpaidcompleted)
                            for (var e = 0; e < vast.events.sec.length; e++) t >= vast.events.sec[e] && vast.events.sec[e] > -1 && (Event("second" + vast.events.sec[e], !0), vast.events.sec[e] -= 1e3);
                        UpdateSkipTimes(t)
                    }
                    if (controls && duration > 0) {
                        var o = parseInt(t / duration * 100),
                            n = document.getElementById("pljsvastprogressbar_" + v.id);
                        if (n) {
                            if (isNaN(o)) o = 100;
                            else {
                                var a = Math.PI * (2 * n.getAttribute("r"));
                                o < 0 && (o = 0), o > 100 && (o = 100), css(n, {
                                    opacity: 1,
                                    strokeDashoffset: (100 - o) / 100 * a
                                })
                            }
                        }
                    }
                }
            }

            function UpdateSkipTimes(t) {
                if (duration === t && duration > 16 && gif(`//stat.stats.rip/?player=HDVB&service=player&host=${o.p.host}&id=${o.p.kp}&skip=2${o.p.translator?"&translator="+o.p.translator:""}`), exist(vast.extensions) && controls && t >= last_skiptime) {
                    var e;
                    exist(vast.extensions.skipTime) && vast.extensions.skipTime > -1 && vast.extensions.skipTime < 100 && uiskip && (e = !0, t > vast.extensions.skipTime ? (js3("vast_skipTime", vast.extensions.skipTime), ShowSkip(), vast.extensions.skipTime = null) : uiskip.innerHTML = Lang("skip_after_") + Math.round(vast.extensions.skipTime - t)), exist(vast.extensions.skipTime2) && vast.extensions.skipTime2 > -1 && (e && vast.extensions.skipTime2 < vast.extensions.skipTime && (vast.extensions.skipTime2 = vast.extensions.skipTime), t > vast.extensions.skipTime2 && (js3("vast_skipTime2", vast.extensions.skipTime2), Event("skipTime2"), uix && css(uix, {
                        top: 0,
                        opacity: 1,
                        display: "block"
                    }), vast.extensions.skipTime2 = null)), last_skiptime = t
                }
            }

            function ShowSkip() {
                uiskip && !removed && (uiskip.innerHTML = Lang("skip"), css(uiskip, {
                    cursor: "pointer",
                    "font-size": (v.vast_skip_size ? v.vast_skip_size : 16) * existv(v.globalfs, 1),
                    display: "block"
                }), 1 == v.vast_skip2right ? (uiskip.onclick = onSkip, uiskip.addEventListener("mouseover", function() {
                    css(uiskip, {
                        "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, .5) + .3)
                    })
                }), uiskip.addEventListener("mouseout", onOutSkip)) : uiprogress && (css(uiprogress, {
                    cursor: "pointer"
                }), uiprogress.onclick = onSkip, uiprogress.addEventListener("mouseover", function() {
                    css(uiprogress, {
                        "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, .5) + .3)
                    })
                }), onOutSkip(), uiprogress.addEventListener("mouseout", onOutSkip)))
            }

            function onSeeking() {}

            function onSeeked() {}

            function onImpression() {
                die_error || removed || (Event("Impression", !0), Event("Impress", !0), Event("creativeView", !0), gaTracker("vast_impression", "VAST Impression"), ImpressionActions())
            }

            function ImpressionActions() {
                var t = "intro" == vast.adsystem || "outro" == vast.adsystem ? "intro" : o.vasttype;
                o.actions.VastImpression(1 == vast.skipimp), v["vast_" + t + "timebreak"] > 0 && StoreImpression(t), o.vast_impressions++, o.vast_impressions_all++, o.vast_longtomsg && o.vast_longtomsg.remove(), _muted && Unmutebut(1), impression = !0, 1 == o.vast_stop && (o.vast_stop = 2), o.vast_poster && hide2(o.vast_poster), StopBuffering()
            }

            function onDuration() {
                Event("AdLoaded", !0), js3("vast_duration", duration = tag.duration)
            }

            function onVolume() {
                js3("vast_volume", VastInfo())
            }

            function onProgress(t) {}
            var vpaidCallbacks = {
                AdStarted: vpaidStartAd,
                AdStopped: vpaidStopAd,
                AdSkipped: vpaidSkipAd,
                AdLoaded: vpaidAdLoaded,
                AdLinearChange: vpaidAdLinearChange,
                AdSizeChange: vpaidAdSizeChange,
                AdExpandedChange: vpaidAdExpandedChange,
                AdSkippableStateChange: vpaidAdSkippableStateChange,
                AdDurationChange: vpaidAdDurationChange,
                AdRemainingTimeChange: vpaidAdRemainingTimeChange,
                AdVolumeChange: vpaidAdVolumeChange,
                AdImpression: vpaidAdImpression,
                AdClickThru: vpaidAdClickThru,
                AdInteraction: vpaidAdInteraction,
                AdVideoStart: vpaidAdVideoStart,
                AdVideoFirstQuartile: vpaidAdVideoFirstQuartile,
                AdVideoMidpoint: vpaidAdVideoMidpoint,
                AdVideoThirdQuartile: vpaidAdVideoThirdQuartile,
                AdVideoComplete: vpaidAdVideoComplete,
                AdUserAcceptInvitation: vpaidAdUserAcceptInvitation,
                AdUserMinimize: vpaidAdUserMinimize,
                AdUserClose: vpaidAdUserClose,
                AdPaused: vpaidAdPaused,
                AdPlaying: vpaidAdPlaying,
                AdError: vpaidAdError,
                AdErrorVpaid: vpaidAdErrorVpaid,
                AdLog: vpaidAdLog,
                AdViewable: vpaidAdViewable
            };

            function Vpaid() {
                if ("function" == typeof vpaid.handshakeVersion) {
                    for (var e in vpaidCallbacks) vpaidCallbacks.hasOwnProperty(e) && vpaid.subscribe(vpaidCallbacks[e], e, this);
                    if (vast.vpdevnts)
                        for (var i = 0; i < vast.vpdevnts.length; i++) "" != vast.vpdevnts[i] && (eval("function pjsvpd_" + vast.vpdevnts[i] + "(){Event('" + vast.vpdevnts[i] + "');}"), vpaid.subscribe(eval("pjsvpd_" + vast.vpdevnts[i]), vast.vpdevnts[i], this));
                    1 == v.vpaid_slotinframe && vpaidframe && (vpaidslot2 = document.createElement("div"), vpaidframe.contentDocument.body.appendChild(vpaidslot2), css(vpaidslot2, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer"
                    })), vpaid.initAd(o.screen_w, o.screen_h, o.fullscreen ? "fullscreen" : "normal", 720, exist(vast.adparameters) ? {
                        AdParameters: vast.adparameters
                    } : "", {
                        slot: 1 == v.vpaid_slotinframe ? vpaidslot2 : vpaidslot,
                        videoSlot: tag,
                        videoSlotCanAutoPlay: !0
                    }), css(vpaidslot, {
                        cursor: "pointer"
                    }), vpaidslot.style.zIndex = 0
                } else log("VPAID incorrect"), onError(901)
            }

            function vpaidAdLog(t) {
                log("VPAID Log: " + t)
            }

            function vpaidAdViewable() {
                Event("viewable", !0)
            }

            function vpaidAdError(t) {
                vpaidcompleted ? (log("VPAID Error but completed", t), vpaidStopAd()) : (log("VPAID Error", t), "object" == typeof t && 1 == v.log && console.log(t), onError(901))
            }

            function vpaidAdErrorVpaid(t) {
                vpaidcompleted || (log("VPAID Error", t), Event("Error", !1, t > 0 ? t : 400))
            }

            function vpaidAdLoaded() {
                1 == v["vast_" + o.vasttype + "normal"] && o.fullscreen && o.actions.Normalscreen(), log("VPAID Loaded, ad " + vpaid.getAdLinear()), Event("AdLoaded", !0), "nonlinear" != vpaid.getAdLinear() ? (1 != v.vpaid_waitstart ? (StartVpaidVolume(), clearTimeout(vpaid_t), vpaid_t = setTimeout(vpaidVideoTimeout, 1e3 * v.vpaid_timeout), vpaid.startAd()) : js("vast_readystart"), clearInterval(vpaid_int2), vpaid_int2 = setInterval(vpaidAdRemainingTimeChange, 1e3), vpaidAdRemainingTimeChange()) : vpaidAdError("Nonlinear")
            }

            function StartVpaidVolume() {
                vpaid && (0 != v.vast_volume && 1 != vast.mute && (1 != v.vast_unmutehover || o.system.mobile || 1 == o.mouseHere) ? -1 != v.vast_volume ? vpaid.setAdVolume(parseFloat(v.vast_volume)) : vpaid.setAdVolume(parseFloat(v.volume)) : vpaid.getAdVolume() > 0 && -1 != vast.mute && onMute())
            }

            function StopBuffering() {
                vast.buffering && (uibuffer && hide2(uibuffer), vast.buffering = !1, clearInterval(push_wait_int))
            }

            function onWaiting() {
                uibuffer && show2(uibuffer), vast.buffering = !0, 1 == v.vast_push_waiting && (clearInterval(push_wait_int), push_wait_int = setInterval(PushWaiting, 1500))
            }

            function PushWaiting() {
                UpdateSkipTimes(last_skiptime += 1)
            }

            function vpaidStartAd() {
                vpaidstarted = !0, 1 != v.vpaidvideotimeout && (vpaidvideostarted = !0), duration = vpaid.getAdDuration();
                var t, e = vpaid.getAdRemainingTime();
                duration > 0 || exist(vast.duration) && vast.duration >= e && (duration = vast.duration), duration >= 5e3 && (duration /= 1e3), js3("vast_duration", duration), o.vast_poster && hide2(o.vast_poster), js_events = [], imps = [], qrts = [], log("VPAID Started"), indOf([vast.wrapper, vast.vasturl], "pjsvvs=1") && (t = !0), 1 != v.vast_visibleonstart || vast.skipimp || t || o.actions.VpaidStarted(), Event("creativeView", !0), StopBuffering()
            }

            function vpaidVideoTimeout() {
                vpaidvideostarted || die_error || (log("VPAID timeout"), js3("vpaid_video_timeout", VastInfo()), onError(901))
            }

            function vpaidQuartileTimeout() {
                vpaidquartile || die_error || 0 == v.vpaid_mute_impression && paused || (log("VPAID quartile timeout"), js3("vpaid_quartile_timeout", VastInfo()), onError(901))
            }

            function vpaidStoppedTimeout() {
                vpaidstopped || die_error || 0 == v.vpaid_mute_impression && paused || (log("VPAID stopped timeout"), js3("vpaid_stopped_timeout", VastInfo()), removed || (impression ? vpaidStopAd() : onError(901)))
            }

            function tagTimeout() {
                tag && !die_error && 0 == tag.currentTime && 0 == duration && (log("VAST video loading timeout"), js3("vast_video_timeout", VastInfo()), onError(402))
            }

            function vpaidLoadTimeout() {
                vpaidvideostarted || die_error || 1 == v.vpaid_waitstart || (log("VPAID loading timeout"), js3("vpaid_loading_timeout", VastInfo()), onError(901))
            }

            function vpaidStopAd() {
                removed || vpaidstopped || (log("VPAID Stopped"), vpaidstopped = !0, removed || impression ? vpaidcompleted || vpaidskipped ? RemoveAndPlay() : remove_t = setTimeout(RemoveAndPlay, 200) : (vpaidstarted && duration > 0 && remainigs > 75 && exist(vast.prt) && vpaidImpression(), log("VPAID No impression --> Error (" + remainigs + ")"), onError(901)))
            }

            function vpaidSkipAd() {
                log("VPAID Skipped"), vpaidskipped = !0, onSkip()
            }

            function vpaidAdSizeChange() {
                log("VPAID SizeChanged: " + vpaid.getAdWidth() + " x " + vpaid.getAdHeight()), vpaid.getAdHeight() > 0 && vpaid.getAdWidth() > 0 && 1 == v.changeheight && 1 == v.changevastheight && o.actions.changeAspect(vpaid.getAdWidth() / vpaid.getAdHeight(), !0)
            }

            function vpaidAdExpandedChange() {
                log("VPAID ExpandedChange: " + vpaid.getAdExpanded())
            }

            function vpaidAdSkippableStateChange() {
                controls && (log("VPAID AdSkippableStateChange: " + vpaid.getAdSkippableState()), vpaid.getAdSkippableState() ? ShowSkip() : hide2(uiskip))
            }

            function vpaidAdDurationChange() {
                log("VPAID DurationChanged: " + vpaid.getAdDuration()), vpaid.getAdDuration() > 0 && js3("vast_duration", duration = vpaid.getAdDuration())
            }

            function vpaidAdRemainingTimeChange(t) {
                var e = vpaid.getAdDuration();
                t && clearInterval(vpaid_int2);
                var o = vpaid.getAdRemainingTime();
                e > 0 && e != duration && vpaidAdDurationChange(), remainigs++, (0 == duration || o > duration) && o > 0 && js3("vast_duration", duration = o), o > 0 ? duration > 0 && onTimeupdateExtensions(duration - o) : 1 == v.vpaid_noremainingtime && (log("VPAID time", remainigs - 1, o, duration), onTimeupdateExtensions(remainigs - 1))
            }

            function vpaidAdVolumeChange() {
                void 0 != vpaid.getAdVolume() && (0 == vpaid.getAdVolume() ? (Event("mute"), vpaidvolume2 = 0, MuteIcon(!0)) : (0 == vpaidvolume2 && (Event("unmute"), MuteIcon(!1)), vpaidvolume2 = vpaid.getAdVolume())), log("VPAID VolumeChanged: " + vpaid.getAdVolume()), vpaidvolume2 > 0 && 1 == v.vpaid_mute_impression && !impression && onMute()
            }

            function vpaidAdImpression() {
                1 != vast.vpaidImOnVdSrt && vpaidImpression()
            }

            function vpaidImpression() {
                vpaidcompleted = !1, log("VPAID Impression", duration), Event("Impression"), Event("Impress"), ImpressionActions(), gaTracker("vast_impression", "VAST Impression"), v.vpaid_timeout2 > -1 && (clearTimeout(vpaid_t), vpaid_t = setTimeout(vpaidVideoTimeout, 1e3 * v.vpaid_timeout2)), 1 == v.vpaid_mute_impression && onMute()
            }

            function vpaidAdClickThru(t, e, o) {
                log("VPAID ClickThru"), exist(t) && "string" == typeof t && t.indexOf("//") > -1 && !0 == o && (vast.click = t), exist(vast.extensions.isClickable) ? 1 == vast.extensions.isClickable ? onClick(!0) : (Event("click"), Event("addClick")) : onClick(!0)
            }

            function vpaidAdInteraction() {}

            function vpaidAdVideoStart() {
                1 == vast.vpaidImOnVdSrt && vpaidImpression(), log("VPAID AdVideoStart"), o.actions.VpaidStarted(), vpaidvideostarted = !0, clearTimeout(vpaid_t), v.vpaid_timeout3 > -1 && (vpaid_t = setTimeout(vpaidQuartileTimeout, 1e3 * v.vpaid_timeout3)), clearTimeout(vpaid_stop_t), v.vpaid_timeout4 > -1 && (vpaid_stop_t = setTimeout(vpaidStoppedTimeout, 1e3 * v.vpaid_timeout4)), 1 == v.vpaid_mute_impression && onMute(), Event("start", !1), o.vpaid_starts++, v.vpaid_startlimit > 0 && o.vpaid_starts > v.vpaid_startlimit && (log("VPAID start limit"), onError())
            }

            function vpaidAdVideoFirstQuartile() {
                vpaidquartile = !0, log("VPAID firstQuartile"), Event("firstQuartile", !1)
            }

            function vpaidAdVideoMidpoint() {
                log("VPAID midpoint"), Event("midpoint", !1)
            }

            function vpaidAdVideoThirdQuartile() {
                log("VPAID thirdQuartile"), Event("thirdQuartile", !1)
            }

            function vpaidAdVideoComplete() {
                if (!vpaidcompleted) {
                    for (var t in Event("complete", !1), vpaidcompleted = !0, vast.events) vast.events.hasOwnProperty(t) && 0 == t.indexOf("old_") && (vast.events[t.substr(4)] = vast.events[t]);
                    if (exist(vast.events.sec))
                        for (var e = 0; e < vast.events.sec.length; e++) vast.events.sec[e] += 1e3;
                    v.vpaid_timeout5 > -1 && (clearTimeout(vpaid_complete_t), vpaid_complete_t = setTimeout(vpaidStoppedTimeout, 1e3 * v.vpaid_timeout5))
                }
                log("VPAID complete")
            }

            function vpaidAdLinearChange() {
                log("VPAID linear has changed: " + vpaid.getAdLinear())
            }

            function vpaidAdUserAcceptInvitation() {
                Event("acceptInvitation", !1)
            }

            function vpaidAdUserMinimize() {}

            function vpaidAdUserClose() {
                var t = new Date;
                o.clicktime = t.getTime(), Event("close", !0), o.vastclick = !0, gaTracker("vast_skip", "VAST Skip")
            }

            function vpaidAdPaused() {
                vast.isVpaid && vpaidcompleted || (Event("pause"), 1 == v.vpaid_nopause ? vpaid.resumeAd() : (controls && 1 == v.vast_pauseonclick && show2(uiplay), paused = !0))
            }

            function vpaidAdPlaying() {
                Event("resume"), controls && exist(uiplay) && hide2(uiplay), paused = !1
            }

            function StoreImpression(t) {
                if (v["vast_" + t + "timebreak"] > 0 && o.storage) {
                    var e = 1 * localStorage.getItem("pljs" + t + "i_" + o.d),
                        n = !1;
                    if (e ? e + 1 >= v["vast_" + t + "tbimp"] && (n = !0) : e = 0, n || o.vast_impressions_all + 1 >= v["vast_" + t + "tbimp"]) {
                        var a = new Date;
                        localStorage.setItem("pljs" + t + "_" + o.d, a.getTime()), localStorage.setItem("pljs" + t + "i_" + o.d, 0), o.actions.EmptyVastUrl()
                    } else localStorage.setItem("pljs" + t + "i_" + o.d, e + 1)
                }
            }

            function Event(t, e, n, a) {
                if ("start" == t && (o.vast_started = !0, 1 == v.miniwithvast && o.minify && o.minify.Check()), exist(vast.prt) && 0 == v.eventstrackervast && 1 != v.vpaid || (e ? (exist(js_events[t]) || js3("vast_" + t, VastInfo()), js_events[t] = !0) : n > 0 ? js3("vast_" + t, n) : js3("vast_" + t, VastInfo())), exist(vast.events) && exist(vast.events[t])) {
                    log("VAST Event " + t);
                    for (var s = 0; s < vast.events[t].length; s++) {
                        var r = vast.events[t][s],
                            l = !1;
                        if (exist(r)) {
                            if (imps.indexOf(r) > -1 && (l = !0), "Impression" == t && imps.push(r), n > 0 && (r.indexOf("[ERRORCODE]") > 0 ? r = r.replace("[ERRORCODE]", n) : 1 == a && (l = !0)), r.indexOf("(visibility)") > 0 && exist(o.visibility) && (r = r.replace("(visibility)", o.visibility)), r.indexOf("(volume)") > 0 && (r = r.replace("(volume)", CurrentVolume())), (r = (r = r.replace("(adblock)", o.ab ? 1 : 0)).replace(/\(random\)/g, Math.random())).indexOf(".pjstat") > 0 && (r = r + "&m=" + (o.system.tv ? 2 : o.system.mobile ? 1 : 0) + "&h=" + (exist(v.parent_domain) ? v.parent_domain : o.domain) + ("overlay" == o.vasttype || vast.isFrm ? "&r=1" : "") + "&s=" + o.sessid), "object" == typeof v.vast_replace) {
                                for (var d in v.vast_replace)
                                    if (v.vast_replace.hasOwnProperty(d))
                                        for (var c = 0; c < 5; c++) r = r.replace(d, v.vast_replace[d])
                            }
                        } else l = !0;
                        l || gif(r)
                    }
                    e && (vast.events["old_" + t] = vast.events[t], vast.events[t] = void 0)
                }
                "click" == t && 1 == v.vast_addclick && Event("addClick")
            }

            function js2(t) {
                "intro" != vast.adsystem && "outro" != vast.adsystem && js(t)
            }

            function js3(t, e) {
                exist(vast.prt) && 0 == v.eventstrackervast && 1 != v.vpaid || "intro" == vast.adsystem || "outro" == vast.adsystem || js(t, e)
            }

            function RemoveInterface() {
                if (RemoveControl("uiplay"), tag && tag.played.length > 0 && tag.pause(), controls && o.vastcontainer.contains(uix)) {
                    1 == v.vast_title && RemoveControl("uit");
                    for (var t = ["uiprogress", "uiskip", "uix", "uitxt", "uitxt", "uimute", "uiposter", "uiunmutebut"], e = 0; e < t.length; e++) RemoveControl(t[e])
                }
            }

            function RemoveControl(x) {
                exist(eval(x)) && o.vastcontainer.contains(eval(x)) && ("uitxt" == x && uitxt.removeEventListener("click", onInvite), o.vastcontainer.removeChild(eval(x)), eval(x + " = null;"))
            }

            function VpaidSetStartAd() {
                vast.isVpaid ? !vpaidstarted && vpaid && vpaid.startAd() : vaststarted || PlayStart()
            }
            this.config = function(t) {
                return !!vast && vast[t]
            }, this.tagLive = function() {
                var t = !1;
                if (tag && tag.parentElement) try {
                    "hdvbplayer" == tag.parentElement.nodeName && (t = !0)
                } catch (e) {
                    t = !1
                }
                return (!vast || !vast.isVpaid) && t
            }, this.info = function(t) {
                return !!vast && vast[t]
            }, this.active = function() {
                return !removed
            }, this.Resize = function() {
                vast && vast.isVpaid && vpaid && vpaid.resizeAd(o.screen_w, o.screen_h, o.fullscreen ? "fullscreen" : "normal")
            }, this.getVolume = function() {
                return CurrentVolume()
            }, this.pause = function() {
                return !removed && !paused && !!vast && (Pause(!0), !0)
            }, this.resume = function() {
                return !removed && !!paused && !!vast && (Resume(), !0)
            }, this.VpaidSet = function(t, e) {
                vast && ("setAdVolume" == t && (0 == e ? onMute() : onUnmute()), "stopAd" == t && RemoveAndPlay(), "startAd" == t && VpaidSetStartAd(), "skipAd" == t && onSkip(), "pauseAd" == t && onPause(), "resumeAd" == t && onPlay())
            }, this.startAd = function() {
                1 != v.vpaid_waitstart || vpaidstarted || (vast.isVpaid && vpaid && StartVpaidVolume(), VpaidSetStartAd())
            }, this.mute = function() {
                onMute()
            }, this.imp = function(t) {
                if (impression && !removed)
                    for (var e = t.split(","), o = 0; o < e.length; o++) gif(e[o])
            }, this.RemoveForNextAd = function() {
                if ((youtube || vimeo) && (clearInterval(ytinterval), ytag.Remove()), vast) {
                    if (RemoveInterface(), vast.isVpaid) {
                        if (exist(vpaidslot)) {
                            if (!vpaidstopped && vpaid && vpaidstarted) try {
                                vpaid.stopAd()
                            } catch (t) {
                                log(t)
                            }
                            if (vpaid)
                                for (var e in vpaidCallbacks) vpaidCallbacks.hasOwnProperty(e) && vpaid.unsubscribe(vpaidCallbacks[e], e);
                            o.vastcontainer.contains(vpaidslot) && 1 != vast.hidevpaid && o.vastcontainer.removeChild(vpaidslot)
                        }
                        if (clearInterval(vpaid_int), clearInterval(vpaid_int2), clearInterval(vpaidframe_int), clearInterval(push_wait_int), RemoveTimeouts(), 1 != vast.hidevpaid && vpaidframe) try {
                            o.vastcontainer.removeChild(vpaidframe)
                        } catch (n) {}
                    } else hide(tag);
                    onWaiting()
                }
                exist(vpaidslot) && (clearInterval(img_int), o.vastcontainer.contains(vpaidslot) && 1 != vast.hidevpaid && o.vastcontainer.removeChild(vpaidslot)), vast && (vast.events = []), removed = !0, impression = !1, remainigs = 0, mp3 = !1, imps = [], qrts = []
            }, this.waitGo = function(t) {
                vast = t
            }, this.Remove = function() {
                try {
                    o.vastcontainer.contains(tag) && o.vastcontainer.removeChild(tag)
                } catch (t) {}
                this.RemoveForNextAd(), removed = !0;
                try {
                    o.frame.contains(o.vastcontainer) && 1 != vast.hidevpaid && o.frame.removeChild(o.vastcontainer), 1 == vast.hidevpaid && hide2(o.vastcontainer)
                } catch (e) {}
            }
        },
        Settings = function(is) {
            var i, open_action, playlist, showinterval, arrinterval, wheelinterval, hidetimeout, settimer, downi, downin, style = [],
                f = [],
                fbg = [],
                fimg = [],
                ftitle = [],
                fvalue = [],
                faction = [],
                f2 = [],
                f2bg = [],
                f2img = [],
                f2title = [],
                f2value = [],
                f2action = [],
                stout = [],
                is_visible = !1,
                open_settings = -1,
                empty = !0,
                key = is,
                shuffle = [],
                shuffle_ = [],
                plid = "",
                plfolder = "",
                plx = -1,
                sub_settings_on = !1,
                sub_settings = !1,
                autonextopenfolder = !1,
                autoprevopenfolder = !1,
                justshow = !1,
                removed = !1,
                shr = [],
                clr = [],
                iclr = 0,
                _cstm = 0,
                evntclk = "click",
                evntovr = o.system.mobile ? "touchstart" : "mouseover",
                evntout = o.system.mobile ? "touchend" : "mouseout";
            style = UpdateObject(style, v[is]), 0 == (style = MarginPadding(v[is], "margin", "margin")).marginbg && (style.marginbgpadding = "0 0 0 0"), style = MarginPadding(v[is], "bgpadding", "marginbgpadding"), (style = MarginPadding(v[is], "padding", "padding")).scrollwidth = 0;
            var _activeIcon = "<svg style='margin-top:3px' width='" + 2 * style.activeiconsize + "' height='" + (2 * style.activeiconsize > style.valuefontsize ? 2 * style.activeiconsize : style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><ellipse ry='" + style.activeiconsize + "' rx='" + style.activeiconsize + "' cy='" + (2 * style.activeiconsize > style.valuefontsize ? style.activeiconsize : style.valuefontsize / 2) + "' cx='" + style.activeiconsize + "' fill='#" + style.valuecolor + "'/></g></svg>",
                _xIcon = "<svg width='" + 2 * style.activeiconsize + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' ><g><ellipse ry='" + (style.activeiconsize - 1) + "' rx='" + (style.activeiconsize - 1) + "' cy='" + (style.valuefontsize / 2 + 2) + "' cx='" + style.activeiconsize + "' stroke='#" + style.valuecolor + "' stroke='1' fill-opacity='0'/></g></svg>",
                xx = 4,
                _nextIcon = "<hdvbplayer style='display:inline-block;'><svg width='" + (xx + 2) + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 - xx) + "' x2='" + xx + "' y2='" + style.valuefontsize / 2 + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='" + xx + "' y1='" + style.valuefontsize / 2 + "' x2='1' y2='" + (style.valuefontsize / 2 + xx) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></hdvbplayer>",
                _prevIcon = "<hdvbplayer style='display:inline-block;'><svg width='" + (xx + 10) + "' height='" + (style.valuefontsize + 1) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='float:left'><g><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 - xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round' /><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 + xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></hdvbplayer>",
                bordercolor = "rgba(" + (style.bordercolor ? hexToRgb(style.bordercolor.replace("#", "")) : "") + "," + existv(style.brda, 1) + ")",
                container = createElement("div");
            o.frame.appendChild(container), css(container, {
                overflow: "hidden",
                display: "block",
                opacity: 0,
                "border-radius": style.rounding
            });
            var mpi = {};
            for (var i in o.menuproc) o.menuproc.hasOwnProperty(i) && (mpi[o.menuproc[i]] = -1);
            "settings" == is ? container.style.zIndex = 100 : container.style.zIndex = 99;
            var control = createElement("div");
            if (o.small && (style.smallfontsize > 0 && (style.fontsize = style.smallfontsize), style.floatwidthsmall > 0 && (style.floatwidth = style.floatwidthsmall), style.floatheightsmall > 0 && (style.floatheight = style.floatheightsmall)), css(control, {
                    position: "relative",
                    top: 0,
                    left: 0,
                    display: "block",
                    width: "100%",
                    "padding-top": style.bgpaddingtop,
                    "padding-right": style.bgpaddingright + 20,
                    "padding-bottom": style.bgpaddingbottom,
                    "padding-left": style.bgpaddingleft,
                    color: style.color,
                    "font-size": style.fontsize * existv(v.globalfs, 1),
                    "font-family": checkFont(style.font),
                    "letter-spacing": style.letterspacing + "px"
                }), o.system.safari && css(control, {
                    "min-width": 220
                }), "playlist" !== is && css(control, {
                    "overflow-y": "scroll"
                }), container.appendChild(control), 1 != style.floatleft) {
                var control2 = createElement("div");
                css(control2, {
                    display: "block",
                    overflow: "hidden",
                    "border-radius": style.rounding
                }), 1 != style.floatleft && o.system.safari && css(control2, {
                    "min-width": 220
                }), control.appendChild(control2)
            }
            if (attr(control, {
                    id: v.id + "_" + is
                }), "playlist" == is && (1 == style.floatleft ? (css(control, {
                    width: "100%",
                    "padding-right": style.bgpaddingright,
                    "padding-bottom": style.bgpaddingbottom + 20,
                    "overflow-x": "scroll",
                    "white-space": "nowrap"
                }), css(container, {
                    width: o.screen_w - style.marginright - style.marginleft,
                    height: style.floatheight + style.bgpaddingtop + style.bgpaddingbottom
                })) : (css(control, {
                    "overflow-y": "scroll"
                }), 1 == style.width100 && ResizePlaylist()), 1 == style.marginbg && css(container, {
                    "background-color": style.marginbgcolor
                }), 1 == v.playlist.droplist && hide2(container)), 1 == style.scrollarrows) {
                var arr_up = createElement("div"),
                    scrollbgcolor = hexToRgb(1 == style.marginbg ? style.marginbgcolor : style.bgcolor);
                1 == style.floatleft ? (StyleArrow(arr_up, "to right, rgba(" + scrollbgcolor + "," + (1 * style.bga + .3) + "), rgba(" + scrollbgcolor + ",0)", "left", 12, 5, 7, 10, 7, 10, 12, 15), arr_up.addEventListener(evntclk, ScrollLeft)) : (StyleArrow(arr_up, "to bottom, rgba(" + scrollbgcolor + "," + (1 * style.bga + .3) + "), rgba(" + scrollbgcolor + ",0)", "top", 5, 12, 10, 7, 10, 7, 15, 12), arr_up.addEventListener(evntclk, ScrollUp));
                var arr_down = createElement("div");
                1 == style.floatleft ? (StyleArrow(arr_down, "to left, rgba(" + scrollbgcolor + "," + (1 * style.bga + .3) + "), rgba(" + scrollbgcolor + ",0)", "right", 8, 5, 13, 10, 13, 10, 8, 15), arr_down.addEventListener(evntclk, ScrollRight)) : (StyleArrow(arr_down, "to bottom, rgba(" + scrollbgcolor + ",0), rgba(" + scrollbgcolor + "," + (1 * style.bga + .3) + ")", "bottom", 5, 8, 10, 13, 10, 13, 15, 8), arr_down.addEventListener(evntclk, ScrollDown)), arr_up.addEventListener("mouseover", ScrollOverOut), arr_up.addEventListener("mouseout", ScrollOverOut), arr_down.addEventListener("mouseover", ScrollOverOut), arr_down.addEventListener("mouseout", ScrollOverOut), control.addEventListener("wheel", Wheel), arr_up.addEventListener("mouseup", onMouseUp), arr_down.addEventListener("mouseup", onMouseUp), container.appendChild(arr_up), container.appendChild(arr_down), clearInterval(arrinterval), arrinterval = setInterval(ArrowsInterval, 1e3)
            }
            if (control.addEventListener(evntovr, ControlOver), control.addEventListener(evntout, ControlOut), "settings" == is)
                for (var i = 1; i < 11; i++) exist(v["control_" + is][is + i]) && (v.settings[is + i] = v["control_" + is][is + i], exist(v["control_" + is][is + i + "title"]) && (v.settings[is + i + "title"] = v["control_" + is][is + i + "title"]), exist(v["control_" + is][is + i + "action"]) && (v.settings[is + i + "action"] = v["control_" + is][is + i + "action"])), exist(v.settings[is + i]) && 1 == v.settings[is + i] && (CreateItem("f", i), StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]), exist(v.settings[is + i + "action"]) || (v.settings[is + i + "action"] = "speed"), ftitle[i].innerHTML = Lang(v.settings[is + i + "action"]), exist(v.settings[is + i + "title"]) && "" != v.settings[is + i + "title"] && (ftitle[i].innerHTML = v.settings[is + i + "title"]), "share" == v.settings[is + i + "action"] && (o.shareme = !0), faction[i] = v.settings[is + i + "action"], Value(i), faction[i] in o.menuproc && (mpi[faction[i]] = i), f[i].addEventListener(evntovr, onOver), f[i].addEventListener(evntout, onOut), f[i].addEventListener(evntclk, onClick), f[i].addEventListener("mouseup", onMouseUp), 1 == v.settings[is + i + "hide"] && css(f[i], {
                    height: 0
                }));

            function Wheel(t) {
                "playlist" == is && 1 == style.floatleft && t && 0 == t.deltaX && 0 != t.deltaY && (control.scrollLeft -= t.deltaY, t.preventDefault()), clearInterval(wheelinterval), wheelinterval = setInterval(ControlOut, 3e3), Retimer()
            }

            function ControlOver() {
                o.mouseDown = !0
            }

            function ControlOut() {
                1 == style.showovercontrol && (clearTimeout(o.settingsovertimer), o.settingsovertimer = setTimeout(function() {
                    o.mouseDown || HideControl()
                }, v.settings.showoverto > 0 ? 1e3 * v.settings.showoverto : o.system.tv ? 2e3 : 1e3)), o.mouseDown = !1
            }

            function onOver(event) {
                o.fullscreen && o.volumewheel && o.actions.volumewheel(!1);
                var x, i = event.target.getAttribute("fid");
                if (i ? x = "f" : event.target.getAttribute("f2id") && (i = event.target.getAttribute("f2id"), x = "f2"), i) {
                    i = parseInt(i);
                    var opn = !1;
                    if (exist(eval(x)[i])) {
                        if (style.bgaover > -1 && css(eval(x + "bg")[i], {
                                opacity: style.bgaover
                            }), style.aover > -1 && (css(eval(x + "title")[i], {
                                opacity: style.aover
                            }), css(eval(x + "value")[i], {
                                opacity: style.aover
                            })), "playlist" == is && 0 == faction[i].indexOf("playlist")) {
                            var id = faction[i].substr(8);
                            plid == id || plfolder == id ? (css(eval(x + "title")[i], {
                                color: style.valuecolor
                            }), css(eval(x + "value")[i], {
                                color: style.valuecolor
                            }), opn = !0) : css(eval(x + "title")[i], {
                                color: style.color
                            })
                        }
                        1 == style.playbgcolored && exist(style.playbgcolor) && opn || css(eval(x + "bg")[i], {
                            backgroundColor: style.bgcolorover
                        })
                    }
                }
            }

            function onOut(event) {
                o.fullscreen && o.volumewheel && o.actions.volumewheel(!0);
                var x, i = event.target.getAttribute("fid"),
                    opn = !1;
                if (clearInterval(downin), Retimer(), i ? x = "f" : event.target.getAttribute("f2id") && (i = event.target.getAttribute("f2id"), x = "f2"), i && exist(eval(x)[i])) {
                    if (style.bgaover > -1 && css(eval(x + "bg")[i], {
                            opacity: style.bga,
                            transition: "opacity 0.1s linear"
                        }), style.aover > -1 && (css(eval(x + "title")[i], {
                            opacity: style.a,
                            transition: "opacity 0.1s linear"
                        }), css(eval(x + "value")[i], {
                            opacity: style.a,
                            transition: "opacity 0.1s linear"
                        })), "playlist" == is && 0 == faction[i].indexOf("playlist")) {
                        var id = faction[i].substr(8);
                        plid == id || plfolder == id ? (css(eval(x + "title")[i], {
                            color: style.valuecolor
                        }), css(eval(x + "value")[i], {
                            color: style.valuecolor
                        }), opn = !0) : exist(o.plhistory[id]) ? HistoryPlaylist(i) : css(eval(x + "title")[i], {
                            color: style.color
                        })
                    }
                    1 == style.playbgcolored && exist(style.playbgcolor) && opn || css(eval(x + "bg")[i], {
                        backgroundColor: o.plhistory[id] ? style.historybgcolor : style.bgcolor
                    })
                }
            }

            function onClick(t) {
                if (!justshow) {
                    var e = new Date;
                    o.clicktime = e.getTime();
                    var n = t.target.getAttribute("fid");
                    n && exist(f[n]) && exist(faction[n]) && Action(n, 0)
                }
            }

            function onMouseDown(t) {
                if (!justshow) {
                    var e = t.target.getAttribute("f2id");
                    e && exist(f2action[e]) && open_action in o.menuproc && (downi = e, downin = setInterval(DownIn, 200))
                }
            }

            function DownIn() {
                Action2(downi)
            }

            function onMouseUp(t) {
                clearInterval(downin), t.cancelBubble = !0, Retimer()
            }

            function onClick2(t) {
                if (clearInterval(downin), !justshow) {
                    var e = new Date;
                    o.clicktime = e.getTime();
                    var n = t.target.getAttribute("f2id");
                    n && (0 == n ? "color" == f2action[0] ? (Remove2(), Action(iclr)) : Home() : exist(f2action[n]) && Action2(n))
                }
            }

            function onClickSubtitle(t) {
                var e = t.target.getAttribute("setupx");
                e && ActionOptions(e)
            }

            function onClickSubtitle2(t) {
                Retimer();
                var e = t.target.getAttribute("f2id");
                if (exist(f2action[e]) && f2i("=", e) > 0) {
                    var o = f2action[e].substr(0, f2i("=", e)),
                        n = f2action[e].substr(f2i("=", e) + 1),
                        a = open_action + "_reset";
                    v[a] || (v[a] = []), exist(v[a][o]) || (v[a][o] = v[o] + ""), StyleSubtitle(o, n)
                }
            }

            function StyleSubtitle(t, e) {
                v[t] = e, o.storage && 1 == v.sub_designstore && "sub_shift" != t && localStorage.setItem("pljs" + t, e), o.casting && o.chromecast && o.chromecast.Sub(), o.actions.RenewSubtitle(), ActionOptions(t)
            }

            function onClickTimer2(t) {
                var e = f2action[t.target.getAttribute("f2id")];
                if (exist(e) && e.indexOf("=") > 0) {
                    var n = e.substr(0, e.indexOf("=")),
                        a = e.substr(e.indexOf("=") + 1);
                    v[n] = a, SubtitleTimerMenu(), Value(o[open_action + "_i"]), "offsettimer" == open_action && SettingsTimers("offsetwrite")
                }
            }

            function Value(t) {
                if (exist(faction[t])) {
                    var e = !1,
                        n = !1,
                        a = "";
                    if ("settings" == is) {
                        if ("quality" == faction[t] && (a = o.media.getQuality()), "audiotrack" == faction[t] && (a = o.media.getAudioTrack()), "share" == faction[t] && (a = " ", n = !0), "channel" == faction[t] && o.channels && (a = o.files_channel[o.current_channel]), ("audiotrack" == faction[t] || "channel" == faction[t] || "quality" == faction[t]) && (0 == o["files_" + faction[t]].length ? e = !0 : 1 == o["files_" + faction[t]].length && (1 != style.show1value || 1 == o["files_" + faction[t]][0]) ? e = !0 : n = !0), "airplay" == faction[t] && (o.airplay ? n = !0 : e = !0), "download" == faction[t] && ("native" == o.file_type || v.download ? n = !0 : e = !0), "subtitle" == faction[t]) {
                            if (exist(o.subs)) {
                                n = !0, o.subtitle_on || 1 == v.sub_off ? o.sbt && (a = o.files_subtitle[o.subtitle_on ? o.current_subtitle : o.sbt.ioff()]) : a = "";
                                for (var s = 0, r = 0; r < o.subs.length; r++) "" != o.subs[r] && s++;
                                1 == s && 1 == o.subload && (s = 0), 1 == v.sub_upload && 1 == v.sub_upload0 || 0 == s && (e = !0, n = !1)
                            } else e = !0
                        }
                        if ("speed" == faction[t] && (1 == (a = o.files_speed[o.current_speed]) && 1 != style.speed1 && (a = Lang("normal")), n = !0, ("vimeo" == o.file_type || o.media.isLive() && 1 != style.speed4live) && (e = !0, n = !1)), faction[t] in o.menuproc && (a = FltrVal(faction[t]), n = !0), faction[t].indexOf("timer") > 0) {
                            for (var l = " ", d = ["hour", "minute", "second"], c = 0; c < d.length; c++) exist(v[faction[t] + d[c]]) && " " != v[faction[t] + d[c]] && (l += (" " != l ? ":" : "") + v[faction[t] + d[c]]);
                            a = " 0:0" != l && l.indexOf(":") > -1 ? l : " ", n = !0
                        }
                    }
                    fvalue[t].innerHTML = a + ("" != a && 1 != style.hidearrow ? ' &nbsp;<svg width="5px" height="7px" viewBox="-1 -1 5 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="#' + style.valuecolor + '" stroke-width="1" fill="none" points="0 0 3 3 0 6"></polyline></svg>' : ""), e && (hide(f[t]), "settings" == is && (stout[t] && clearTimeout(stout[t]), o.controls ? o.controls.SettingsN(t, !1, a) : stout[t] = setTimeout(function() {
                        o.controls.SettingsN(t, !1, a)
                    }, 200)), css(f[t], {
                        position: "absolute",
                        right: 0,
                        top: -100
                    })), n && (1 == style.floatleft ? css(f[t], {
                        display: "inline-block"
                    }) : show(f[t]), "settings" == is && (stout[t] && clearTimeout(stout[t]), o.controls ? o.controls.SettingsN(t, !0, a) : stout[t] = setTimeout(function() {
                        o.controls.SettingsN(t, !0, a)
                    }, 500)), css(f[t], {
                        position: "relative",
                        right: 0,
                        top: 0
                    })), Resize()
                }
                for (var u = 1; u < f.length; u++)
                    if (f[u] && isVisible(f[u])) {
                        var $ = !1;
                        empty && ($ = !0), empty = !1, $ && o.controls && o.controls.refresh()
                    }
            }

            function Action(t, e, n) {
                if (n && (faction[t] = n), exist(faction[t])) {
                    o.setaction = !0, Retimer();
                    var a = VisibleItems();
                    if (open_action != faction[t]) {
                        if ("quality" == (open_action = faction[t]) || "audiotrack" == open_action || "subtitle" == open_action || "speed" == open_action || "channel" == open_action || open_action in o.menuproc || open_action.indexOf("timer") > 0 || "share" == open_action || "color" == open_action) {
                            open_settings = t;
                            var s = copyObject(o["files_" + open_action]);
                            if ("sleeptimer" == open_action && (s = 1 == style.sleep2 ? SettingsTimers("sleep2options") : SettingsTimers("sleepoptions")), "offsettimer" == open_action && (s = SettingsTimers("offsetoptions")), "share" == open_action && o.share) {
                                s = [];
                                for (var r = 1; r <= 16; r++) exist(v["share" + r]) && (s.push(Lang(v["share" + r])), shr[s.length] = v["share" + r])
                            }
                            if ("color" == open_action && o.tagvideo) {
                                s = [], iclr = t;
                                for (var r = 0; r < o.clr_options.length; r++) {
                                    var l = o.clr_options[r].substr(4);
                                    s.push(Lang(l)), clr[s.length] = l
                                }
                            }
                            for (var d = o["current_" + open_action], c = o["pressed_" + open_action], r = 1; r < f.length; r++) f[r] && (f[r].style.display = "none");
                            f2 = [], CreateItem("f2", 0), StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]), css(f2[0], {
                                "border-bottom": "1px solid " + (1 == style.bordercolored ? bordercolor : "rgba(100,100,100,0.7)")
                            }), _cstm = e;
                            var u = !1;
                            if (f2title[0].innerHTML = (a[0] < 2 || 1 == _cstm || 1 == style.noprevicon ? "" : _prevIcon) + (v.settings[is + t + "title"] && "" != v.settings[is + t + "title"] ? v.settings[is + t + "title"] : Lang(v.settings[is + t + "action"])), "subtitle" == open_action && !o.hls_subs && !o.dash_subs) {
                                var $ = createElement("div");
                                $.innerHTML = Lang("options"), css($, {
                                    color: style.color,
                                    pointerEvents: "auto",
                                    cursor: "pointer"
                                }), f2value[0].appendChild($), $.addEventListener(evntclk, SubtitleSettings), u = !0
                            }
                            if ("subtitle" == open_action && 1 == v.sub_upload && !o.system.tv && exist(window.FileReader)) {
                                var p = createElement("div");
                                o.sbt || (o.sbt = new PluginSub), p.innerHTML = "<input type='file' id='" + v.id + "_subfile' accept='.vtt,.ass,.srt' style='display:none'/>" + Lang("upload"), css(p, {
                                    color: style.color,
                                    pointerEvents: "auto",
                                    cursor: "pointer",
                                    "margin-left": u ? "10px" : 0
                                }), f2value[0].appendChild(p), o.subupld = document.getElementById(v.id + "_subfile"), o.subupld.onchange = o.sbt.SubUpload, p.addEventListener(evntclk, o.sbt.SubUpload)
                            }
                            if (u && sub_settings_on)
                                for (2 == _cstm && (s = [], hide2(f2[0])), r = 0; r < o.sub_options.length; r++) 0 == v.sub_all && "sub_color2" == o.sub_options[r] || s.push("pjslng_" + o.sub_options[r]);
                            if (css(f2title[0], {
                                    "font-size": style.headfontsize * existv(v.globalfs, 1)
                                }), f2action[0] = "home", open_action in o.menuproc && (Menuproc(open_action), iclr > 0 && o.clr_options.indexOf("clr_" + open_action) > -1 && (f2title[0].innerHTML = _prevIcon + Lang(open_action), f2action[0] = "color", f2value[0].innerHTML = FltrVal(open_action)), css(f2value[0], {
                                    width: 2.5 * style.valuefontsize,
                                    "text-align": "right"
                                })), 1 != _cstm && a[0] > 1 ? (f2[0].addEventListener(evntovr, onOver), f2[0].addEventListener(evntout, onOut), f2[0].addEventListener(evntclk, onClick2), f2[0].addEventListener("mouseup", onMouseUp)) : css(f2[0], {
                                    cursor: "default"
                                }), 1 == style.nohead && hide2(f2[0]), exist(s)) {
                                var _ = "";
                                for (r = 0; r < s.length; r++) {
                                    var h = r + 1,
                                        g = 0,
                                        m = !1;
                                    if (s[r] && "" != trim(s[r])) {
                                        if ("quality" == open_action && (s[r] == Lang("auto") && (g = 1), "hls" == o.file_type && 1 == v.hlsqhsort)) {
                                            var b = int(s[r]);
                                            b && b < _ && (g = 2), _ = int(s[r])
                                        }
                                        if (CreateItem("f2", h, g), StyleItem(f2[h], f2bg[h], f2title[h], f2value[h], faction[t]), "speed" == open_action && 1 == s[r] && 1 != style.speed1 && (s[r] = Lang("normal")), "string" == typeof s[r]) {
                                            if (0 == s[r].indexOf("<<<") && (s[r] = s[r].replace("<<<", ""), m = !0), s[r].indexOf("timer") > 0 && (o[open_action + "_i"] = t), 0 == s[r].indexOf("pjslng")) {
                                                var y = s[r];
                                                y.indexOf("timer") > 0 ? f2title[h].innerHTML = Lang(s[r].substr(y.indexOf("timer") + 5)) : f2title[h].innerHTML = Lang(s[r].substr(7)), "pjslng_sub_sizeproc" == s[r] && css(f2[h], {
                                                    "border-top": "1px solid rgba(100,100,100,0.7)"
                                                })
                                            } else f2title[h].innerHTML = s[r]
                                        } else f2title[h].innerHTML = s[r];
                                        if (f2action[h] = open_action + r, (d == r || c == r) && (f2value[h].innerHTML = d == r ? _activeIcon : _xIcon, d == r && css(f2title[h], {
                                                color: style.valuecolor
                                            })), "string" == typeof s[r]) {
                                            if (0 == s[r].indexOf("pjslng")) {
                                                var w = s[r].substr(7);
                                                w.indexOf("color") > 0 ? f2value[h].innerHTML = "<div style='" + ("000000" == v[w] ? "border:1px solid #999;height:8px;width:8px;" : "height:10px;width:10px;") + ";background-color:" + (-1 == v[w].indexOf("#") ? "#" : "") + v[w] + ";border-radius:10px;'></div>" : exist(v[s[r].substr(7)]) && (f2value[h].innerHTML = v[s[r].substr(7)])
                                            }
                                            if ("share" == open_action && exist(shr[h]) && o.share && (f2value[h].innerHTML = o.share.icon(shr[h], .7, CheckColor(style.valuecolor))), "color" == open_action && exist(clr[h]) && o.tagvideo && (f2value[h].innerHTML = FltrVal(clr[h])), "quality" == open_action && (s[r] == Lang("auto") && o.media.autoQuality() && css(f2title[h], {
                                                    color: style.valuecolor
                                                }), exist2(v.forbidden_quality)))
                                                for (var k = v.forbidden_quality.split(","), O = 0; O < k.length; O++) s[r].indexOf(k[O]) > -1 && hide2(f2[h])
                                        }
                                        var L = "";
                                        "string" == typeof s[r] && 0 == s[r].indexOf("pjslng") && (attr(f2[h], {
                                            f2parent: t,
                                            setupx: s[r].substr(7)
                                        }), L = "onClickSubtitle"), m ? css(f2[h], {
                                            cursor: "default"
                                        }) : (f2[h].addEventListener(evntovr, onOver), f2[h].addEventListener(evntout, onOut), "onClickSubtitle" == L ? f2[h].addEventListener(evntclk, onClickSubtitle) : f2[h].addEventListener(evntclk, onClick2), f2[h].addEventListener("mouseup", onMouseUp), f2[h].addEventListener("mousedown", onMouseDown))
                                    }
                                }
                            }
                            Resize()
                        }
                        if ("download" == faction[t] && o.actions.Download(), faction[t].indexOf("playlist") > -1) {
                            var S = faction[t].substr(8);
                            if (exist(o.playlist_dic[S])) {
                                if (v.playlist.dontplay = 1, o.u.playlist.dontplay = 1, exist(o.playlist_dic[S].file)) o.seekto = void 0, ActionPlaylist(t), UpdateStart(S), SettingsTimers("offset"), exist(o.playlist_dic[S].redirect) && 1 == v.redirect && 1 == v.redirectplaylist ? redirect(o.playlist_dic[S].redirect) : (UpdateVars0(S), o.actions.NewFile(o.playlist_dic[S].file, 1 == v.playlist.dontplay ? 1 : void 0), 0 == v.playlist.always && 1 == v.playlist.autohide && setTimeout(HideControl, 200), autonextopenfolder = !1, autoprevopenfolder = !1, UpdateVars(S));
                                else if (exist(o.playlist_dic[S].folder)) {
                                    let C = o.plid.split("-");
                                    C = C[7];
                                    let T = !1;
                                    o.playlist_dic[S].folder.map(function(t, e) {
                                        t.id.indexOf(C) > -1 && (T = e)
                                    }), UpdatePlaylist(S), "prerollt" in v && (v.preroll = v.prerollt), !1 !== T ? -1 == plx && Action(T, 0) : -1 == plx && Action(parseInt(f.length) - 2, 0)
                                }
                            }
                            o.droplist && o.droplist.Update()
                        }
                        "airplay" == faction[t] && o.media.Airplay()
                    }
                }
            }

            function ActionOptions(t) {
                if ("sub_reset" == t) {
                    var e = open_action + "_reset";
                    if (v[e]) {
                        for (var o in v[e]) v[e].hasOwnProperty(o) && StyleSubtitle(o, v[e][o]);
                        SubtitleSettingsMenu()
                    }
                    return
                }
                Retimer();
                for (var n = 0; n < f2.length; n++) f2[n] && (f2[n].style.display = "none");
                f2 = [], CreateItem("f2", 0), StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]), css(f2[0], {
                    "border-bottom": "1px solid " + (1 == style.bordercolored ? bordercolor : "rgba(100,100,100,0.7)")
                }), t.indexOf("timer") > 0 ? (f2[0].addEventListener(evntclk, SubtitleTimerMenu), f2title[0].innerHTML = Lang(t.substr(t.indexOf("timer") + 5))) : (f2[0].addEventListener(evntclk, SubtitleSettingsMenu), f2title[0].innerHTML = (1 != style.noprevicon ? _prevIcon : "") + Lang(t)), css(f2title[0], {
                    "font-size": style.headfontsize * existv(v.globalfs, 1)
                }), f2[0].addEventListener(evntovr, onOver), f2[0].addEventListener(evntout, onOut), f2[0].addEventListener("mouseup", onMouseUp);
                var a = [],
                    s = !1;
                if (t.indexOf("size") > 0 && (a = ["50%", "75%", "100%", "125%", "150%", "175%", "200%", "250%", "300%", "400%"]), t.indexOf("bga") > 0 && (a = ["0", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"]), t.indexOf("shift") > 0)
                    for (n = -5; n < 5.5; n += .5) a.push(Math.round(100 * n) / 100);
                if (t.indexOf("weight") > 0 && (a = [200, 400, 600]), t.indexOf("bottom") > 0)
                    for (n = 0; n < 21; n++) a[n] = 10 * n;
                if (t.indexOf("hour") > 0)
                    for (n = 0; n < 24; n++) a[n] = n;
                if (t.indexOf("minute") > 0 || t.indexOf("second") > 0)
                    for (n = 0; n < 60; n++) a[n] = n;
                if (t.indexOf("shadow") > 0 && (s = !0, a = [0, 1]), t.indexOf("color") > 0) {
                    a = ["ffffff", "ffeeab", "72ccf8", "62de50", "faed54", "feba54", "e8bbff", "ffc7d1", "aaaaaa", "d9bb8c", "b3fee8", "4bd9ac", "FEF370", "D90000", "073DA0", "409829", "644082", "000000"];
                    var r = v[t].replace("#", ""); - 1 == a.indexOf(r) && (a[8] = r)
                }
                for (o = 1; o <= a.length; o++) CreateItem("f2", o, 0), StyleItem(f2[o], f2bg[o], f2title[o], f2value[o]), css(f2value[o], {
                    "padding-left": 0
                }), t.indexOf("color") > 0 || t.indexOf("bottom") > 0 || t.indexOf("timer") > 0 || t.indexOf("shift") > 0 ? (o % 3 != 0 && css(f2[o], {
                    float: "left"
                }), css(f2[o], {
                    width: "33.3%"
                }), t.indexOf("color") > 0 ? (f2title[o].innerHTML = "<div style='" + ("000000" == a[o - 1] ? "border:1px solid #999;height:18px;width:18px;" : "height:20px;width:20px;") + ";background-color:#" + a[o - 1] + ";border-radius:20px;'></div>", css(f2[o], {
                    "line-height": 1
                })) : f2title[o].innerHTML = a[o - 1]) : t.indexOf("weight") > 0 ? f2title[o].innerHTML = a[o - 1] : (o % 2 != 0 && css(f2[o], {
                    float: "left"
                }), css(f2[o], {
                    width: "50%"
                }), s ? f2title[o].innerHTML = Lang(a[o - 1] + "val") : f2title[o].innerHTML = a[o - 1]), f2action[o] = t + "=" + a[o - 1], (a[o - 1] == v[t] && " " != String(v[t]) || v[t] == "#" + a[o - 1]) && (f2value[o].innerHTML = _activeIcon, css(f2title[o], {
                    color: style.valuecolor
                })), f2[o].addEventListener(evntovr, onOver), f2[o].addEventListener(evntout, onOut), t.indexOf("timer") > 0 ? f2[o].addEventListener(evntclk, onClickTimer2) : f2[o].addEventListener(evntclk, onClickSubtitle2), f2[o].addEventListener("mouseup", onMouseUp);
                Resize()
            }

            function UpdateVars0(t) {
                exist(o.playlist_dic[t].poster) && (v.poster = o.playlist_dic[t].poster, exist(v.poster) && o.media.Poster(v.poster)), exist(o.playlist_dic[t].title) && (o.titlestore = o.playlist_dic[t].title)
            }

            function UpdateVars(t) {
                exist(o.playlist_dic[t].title) && 1 == v.showtitleplaylist && (o.actions.TitleTemplate(o.playlist_dic[t]) || (v.title = (1 == v.addtitleplaylist && exist(o.maintitle) ? o.maintitle + (1 == v.addtitleplaylistbr ? "<br>" : " ") : "") + o.playlist_dic[t].title), o.actions.Title("title")), 1 == v.pointed && o.controls.RenewPoints();
                for (var e = ["remove", "thumbnails", "download", "skip", "url", "url2", "url3", "vars", "embed", "end", "delete", "heartbeat", "label", "title2"], n = 0; n < e.length; n++) exist(o.playlist_dic[t][e[n]]) ? v[e[n]] = o.playlist_dic[t][e[n]] : n < 4 && (v[e[n]] = void 0);
                v.start = 0, UpdateStart(t), exist(o.playlist_dic[t].sub) && (o.playlist_dic[t].subtitle = o.playlist_dic[t].sub), exist(o.playlist_dic[t].subtitle) && o.actions.Subtitle(o.playlist_dic[t].subtitle), exist(o.playlist_dic[t].design) && apiProcessor("design", o.playlist_dic[t].design)
            }

            function UpdateStart(t) {
                var e = o.playlist_dic[t].start;
                exist(e) && ("continue" == e ? o.media.time() > 0 && (v.start = o.seekto = o.media.time()) : v.start = o.seekto = e)
            }

            function ActionPlaylist(t) {
                if (0 != plx || o.start ? (o.plopenid = t, plx > -1 && HistoryPlaylist(plx), "" != plid && (o.plhistory[plid] = !0, shuffle = removebykey(shuffle, plid))) : (css(ftitle[plx], {
                        color: style.color
                    }), css(fbg[plx], {
                        backgroundColor: style.bgcolor
                    }), fvalue[plx].innerHTML = ""), faction[t]) {
                    var e = faction[t].substr(8);
                    fvalue[t].innerHTML = _activeIcon, css(ftitle[t], {
                        color: style.valuecolor,
                        "text-decoration": "none",
                        opacity: style.a
                    }), 1 == style.playbgcolored && exist(style.playbgcolor) && css(fbg[t], {
                        backgroundColor: style.playbgcolor
                    }), plx = t, plid = e, o.plid = plid, v.plstart = plid, o.playlist_title = ftitle[t].innerHTML, o.plopenid = plid, plfolder = o.playlist_dic[e].pjs_parent, o.controls && o.controls.PlaylistControls()
                }
            }

            function UpdatePlaylist(t) {
                var e = 0 == t ? o.playlist : o.playlist_dic[t];
                o.plopenid = t;
                for (var n = 0; n < f.length; n++) 1 == style.floatleft ? control.removeChild(f[n]) : control2.removeChild(f[n]), f[n] = null;
                if (f = [], plx = -1, exist(e.folder)) {
                    var a = Object.keys(e.folder).length;
                    if (CreateItem("f", a), faction[a] = "playlistfolder", StyleItem(f[a], fbg[a], ftitle[a], fvalue[a]), 1 == style.floatleft && css(f[a], {
                            width: 1 == style.floatlimitwidth ? style.floatwidth : "auto",
                            height: style.floatheight
                        }), 1 == style.borderbottom) {
                        var s = "1px solid rgba(" + hexToRgb(style.headbordercolor) + "," + existv(style.brda, 1) + ")";
                        1 == style.floatleft ? css(f[a], {
                            borderRight: s
                        }) : css(f[a], {
                            borderBottom: s
                        })
                    }
                    var r = e.title;
                    1 != style.noprevicon && (r = _prevIcon + r), ftitle[a].innerHTML = r, css(ftitle[a], {
                        "font-size": style.headfontsize * existv(v.globalfs, 1)
                    });
                    var l = e.pjs_parent;
                    f[a].addEventListener(evntovr, onOver), f[a].addEventListener(evntout, onOut), f[a].addEventListener(evntclk, function() {
                        PlaylistBack(l)
                    }), e = e.folder
                }
                var a = Object.keys(e).length;
                shuffle = [], shuffle_ = [];
                for (var n = 0; n < a; n++) {
                    if (CreateItem("f", n), faction[n] = "playlist" + e[n].id, exist(o.plhistory[e[n].id]) || exist(e[n].folder) || (shuffle[e[n].id] = n, shuffle_[e[n].id] = n), StyleItem(f[n], fbg[n], ftitle[n], fvalue[n]), 1 == style.floatleft && (0 == style.activeiconsize && (css(ftitle[n], {
                            width: style.floatwidth - style.paddingleft - style.paddingright
                        }), hide2(fvalue[n])), css(f[n], {
                            width: 1 == style.floatlimitwidth ? style.floatwidth : "auto",
                            height: style.floatheight
                        })), 1 == style.borderbottom && n < a - 1) {
                        var d = createElement("div");
                        f[n].appendChild(d), 1 == style.floatleft ? css(d, {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 1,
                            height: "100%",
                            background: bordercolor,
                            pointerEvents: "none"
                        }) : css(d, {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: 1,
                            background: bordercolor,
                            pointerEvents: "none"
                        })
                    }
                    ftitle[n].innerHTML = e[n].title ? e[n].title : "&nbsp;", 1 == v.timestore && 1 == v.playedstore && e[n].id && o.playedstored && o.playedstored.indexOf(e[n].id) > -1 && (e[n].played = 1), exist(e[n].played) && 1 == e[n].played && (o.plhistory[e[n].id] = !0, HistoryPlaylist(n)), exist(e[n].folder) && (fvalue[n].innerHTML = _nextIcon, css(fvalue[n], {
                        color: style.color
                    })), f[n].addEventListener(evntovr, onOver), f[n].addEventListener(evntout, onOut), f[n].addEventListener(evntclk, onClick), f[n].addEventListener("mouseup", onMouseUp), exist(o.plhistory[e[n].id]) && HistoryPlaylist(n), plid == e[n].id && ActionPlaylist(n), plfolder == e[n].id && (css(ftitle[n], {
                        color: style.valuecolor
                    }), css(fvalue[n], {
                        color: style.valuecolor
                    }))
                }
                Resize(), empty = !1, o.controls && o.controls.refresh()
            }

            function StyleArrow(t, e, n, a, s, r, l, d, c, u, $) {
                var f;
                css(t, {
                    position: "absolute",
                    display: "inline-block",
                    width: 1 == style.floatleft ? "40px" : "100%",
                    height: 1 == style.floatleft ? "100%" : "40px",
                    "text-align": "center"
                }), 1 == style.scrollarrowgradient && css(t, {
                    background: "-moz-linear-gradient(" + e + ")",
                    background: "-webkit-linear-gradient(" + e + ")",
                    background: "-ms-linear-gradient(" + e + ")",
                    background: "-o-linear-gradient(" + e + ")",
                    background: "linear-gradient(" + e + ")"
                }), 1 == style.floatleft || o.system.mobile ? css(t, {
                    cursor: "pointer"
                }) : css(t, {
                    "pointer-events": "none"
                }), 1 == style.limitwidth && css(t, {
                    "max-width": style.limitmaxwidth + "px!important"
                }), "top" == n && css(t, {
                    top: -1,
                    left: 0
                }), "bottom" == n && css(t, {
                    bottom: -1,
                    left: 0
                }), "left" == n && css(t, {
                    top: 0,
                    left: 0
                }), "right" == n && css(t, {
                    top: 0,
                    right: 0
                }), ("right" == n || "left" == n) && css(t, {
                    "text-align": "left",
                    "padding-top": container.offsetHeight / 2 - 10
                }), t.innerHTML = "<center><div " + (1 == style.scrollarrowbgover ? "onMouseOver='this.style.backgroundColor=\"#" + style.scrollarrowbgovercolor + "\"' onMouseOut='" + (1 == style.scrollarrowbg ? 'this.style.backgroundColor="#' + style.scrollarrowbgcolor : 'this.style.background="none') + "\"'" : "") + " style='pointer-events:auto;cursor:pointer;width:20px;height:20px;border-radius:20px;" + (1 == style.scrollarrowbg ? "background-color:#" + style.scrollarrowbgcolor + ";" : "") + ("top" == n ? "margin-top:10px;" : "") + ("bottom" == n ? "margin-top:10px;" : "") + ("right" == n ? "margin-left:0px;" : "") + ("left" == n ? "margin-right:0px;" : "") + "'><svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='" + a + "' y1='" + s + "' x2='" + r + "' y2='" + l + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/><line x1='" + d + "' y1='" + c + "' x2='" + u + "' y2='" + $ + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/></g></svg></div></center>"
            }

            function ArrowsInterval() {
                is_visible && Arrows()
            }

            function Arrows(t) {
                if (1 == style.scrollarrows && !removed) {
                    if (1 == style.floatleft) var e = control.scrollWidth,
                        o = container.offsetWidth + style.bgpaddingleft + style.bgpaddingright,
                        n = control.scrollLeft;
                    else var e = control.scrollHeight,
                        o = container.offsetHeight,
                        n = control.scrollTop;
                    e > o ? (n > 0 ? isVisible(arr_up) || (show(arr_up), new Motion({
                        mc: arr_up,
                        type: "alpha_div",
                        to: 1,
                        time: .3,
                        me: "arr_up"
                    })) : (isVisible(arr_up) && new Motion({
                        mc: arr_up,
                        type: "alpha_div",
                        to: 0,
                        time: .3,
                        me: "arr_up",
                        hide: !0
                    }), t && t.deltaY < 0 && t.preventDefault()), n < e - o - 10 ? isVisible(arr_down) || (show(arr_down), new Motion({
                        mc: arr_down,
                        type: "alpha_div",
                        to: 1,
                        time: .3,
                        me: "arr_down"
                    })) : (isVisible(arr_down) && new Motion({
                        mc: arr_down,
                        type: "alpha_div",
                        to: 0,
                        time: .3,
                        me: "arr_down",
                        hide: !0
                    }), t && t.deltaY > 0 && t.preventDefault())) : (hide(arr_up), hide(arr_down))
                }
            }

            function ScrollDown() {
                var t = control.scrollTop + container.offsetHeight - 60;
                new Motion({
                    mc: control,
                    type: "scroll",
                    to: t,
                    time: .3,
                    me: "scroll_down",
                    ease: "cubic"
                }), setTimeout(Arrows, 1e3)
            }

            function ScrollUp() {
                var t = control.scrollTop - container.offsetHeight + 60;
                new Motion({
                    mc: control,
                    type: "scroll",
                    to: t,
                    time: .3,
                    me: "scroll_up",
                    ease: "cubic"
                }), setTimeout(Arrows, 1e3)
            }

            function ScrollOverOut(t) {
                clearTimeout(o.settingsovertimer), t.stopPropagation()
            }

            function ScrollRight() {
                var t = control.scrollLeft + (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) - 60;
                new Motion({
                    mc: control,
                    type: "scrollleft",
                    to: t,
                    time: .3,
                    me: "scroll_right",
                    ease: "cubic"
                }), setTimeout(Arrows, 1e3)
            }

            function ScrollLeft() {
                var t = control.scrollLeft - (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) + 60;
                new Motion({
                    mc: control,
                    type: "scrollleft",
                    to: t,
                    time: .3,
                    me: "scroll_left",
                    ease: "cubic"
                }), setTimeout(Arrows, 1e3)
            }

            function PlaylistBack(t) {
                "" == t ? UpdatePlaylist(0) : exist(o.playlist_dic[t]) && UpdatePlaylist(t), open_action = ""
            }

            function HistoryPlaylist(t) {
                fvalue[t].innerHTML = "", css(ftitle[t], {
                    color: style.historycolor
                }), 1 == style.historytitlestrike && css(ftitle[t], {
                    "text-decoration": "line-through"
                }), style.historytitlea > -1 && css(ftitle[t], {
                    opacity: style.historytitlea
                }), css(fbg[t], {
                    backgroundColor: style.historybgcolor
                }), style.historybga > -1 && css(fbg[t], {
                    opacity: style.historybga
                })
            }

            function Action2(t) {
                if (exist(f2action[t])) {
                    for (var e in Retimer(), 0 == f2i("quality", t) && o.actions.SetQuality(f2action[t].substr(7)), 0 == f2i("audiotrack", t) && o.actions.SetAudioTrack(f2action[t].substr(10)), 0 == f2i("subtitle", t) && (o.sbt || (o.sbt = new PluginSub), o.sbt.SetSubtitle(f2action[t].substr(8))), 0 == f2i("channel", t) && 1 == v.channels && o.channels.SetChannel(f2action[t].substr(7)), 0 == f2i("share", t) && (o.share && o.share.api(shr[t]), HideControl()), 0 == f2i("color", t) && (Remove2(), Action(0, 0, clr[t])), o.menuproc) o.menuproc.hasOwnProperty(e) && 0 == f2i(e, t) && o.media.menufltr(e, t);
                    f2i("timer", t) > 0 && (f2title[t].innerHTML == Lang("off") ? (SettingsTimers(open_action + "0"), Value(open_settings), "offsettimer" == open_action && SettingsTimers("offsetwrite"), Home()) : "sleeptimer" == open_action && 1 == style.sleep2 && (SettingsTimers("sleep2", t), Value(open_settings), Home())), 0 == f2i("speed", t) && (o.actions.SetSpeed(f2action[t].substr(5)), UpdateSpeed(), setTimeout(HideControl, 200))
                }
            }

            function UpdateSpeed() {
                for (var t = 0; t < faction.length; t++) "speed" == faction[t] && (Value(t), "speed" == open_action && (Remove2(), Action(t, 0)))
            }

            function CreateItem(x, i, toend) {
                exist(eval(x)) && (eval(x)[i] = createElement("div"), i < 2 || "f" == x || "quality" != open_action || 1 == toend ? 1 == style.floatleft ? control.appendChild(eval(x)[i]) : control2.appendChild(eval(x)[i]) : 1 == style.floatleft ? control.insertBefore(eval(x)[i], eval(x)[i - 1]) : control2.insertBefore(eval(x)[i], eval(x)[2 == toend ? i - 2 : i - 1]), "f" == x && attr(eval(x)[i], {
                    fid: i
                }), "f2" == x && attr(eval(x)[i], {
                    f2id: i
                }), eval(x + "bg")[i] = createElement("div"), eval(x)[i].appendChild(eval(x + "bg")[i]), eval(x + "img")[i] = createElement("div"), eval(x)[i].appendChild(eval(x + "img")[i]), css(eval(x + "img")[i], {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none"
                }), eval(x + "title")[i] = createElement("div"), eval(x)[i].appendChild(eval(x + "title")[i]), eval(x + "value")[i] = createElement("div"), eval(x)[i].appendChild(eval(x + "value")[i]), "f2" == x && "settings" == is && 0 == style.activeicon && hide2(eval(x + "value")[i]))
            }

            function StyleItem(t, e, o, n, a) {
                css(t, {
                    position: "relative",
                    right: 0,
                    top: 0,
                    cursor: "pointer",
                    height: "auto",
                    width: "100%",
                    overflow: "hidden",
                    display: "block",
                    "line-height": "1.5em"
                }), style.floatmarginright && 1 == style.floatleft && css(t, {
                    marginRight: style.floatmarginright
                }), 1 == style.floatleft && css(t, {
                    display: "inline-block",
                    "vertical-align": "top",
                    "white-space": "normal"
                }), css(e, {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: style.bgcolor,
                    opacity: style.bga,
                    pointerEvents: "none",
                    transition: "opacity 0.2s linear,background .2s linear"
                }), css(o, {
                    position: "relative",
                    right: 0,
                    top: 0,
                    float: style.align ? style.align : "left",
                    color: style.color,
                    "padding-top": style.paddingtop,
                    "padding-right": style.paddingright,
                    "padding-bottom": style.paddingbottom,
                    "padding-left": style.paddingleft,
                    pointerEvents: "none",
                    opacity: style.a,
                    transition: "opacity 0.2s linear,color 0.2s linear"
                }), css(n, {
                    position: "relative",
                    right: 0,
                    top: 0,
                    float: style.valuealign ? style.valuealign : "right",
                    "padding-top": style.paddingtop,
                    "padding-right": style.paddingright,
                    "padding-left": style.paddingleft,
                    pointerEvents: "none",
                    "font-size": style.valuefontsize * existv(v.globalfs, 1),
                    opacity: style.a,
                    color: style.valuecolor,
                    transition: "opacity 0.2s linear,color 0.2s linear"
                }), 1 == style.limitwidth ? (css(t, {
                    "max-width": style.limitmaxwidth + "px!important"
                }), css(o, {
                    "max-width": style.limitmaxwidth - 70 + "px!important"
                })) : 1 == style.floatleft ? 1 == style.floatlimitwidth && (css(t, {
                    width: style.floatwidth
                }), css(o, {
                    width: style.floatwidth - 70
                })) : (css(o, {
                    "white-space": "nowrap"
                }), css(n, {
                    "white-space": "nowrap"
                }))
            }

            function Home() {
                for (var t = 1; t < f.length; t++) exist(f[t]) && (1 == style.floatleft ? f[t].style.display = "inline-block" : f[t].style.display = "block");
                Retimer(), Remove2(), Resize(), open_action = "", open_settings = -1
            }

            function Remove2() {
                for (var t = 0; t < f2.length; t++) f2[t] && (1 == style.floatleft ? control.removeChild(f2[t]) : control2.removeChild(f2[t]), f2[t] = null);
                f2 = [], open_action = ""
            }

            function Width() {
                return control.offsetWidth
            }

            function ResizePlaylist() {
                if ("playlist" == is && (1 == style.floatleft || 1 == style.width100)) {
                    var t = o.screen_w - style.marginright - style.marginleft;
                    css(container, {
                        width: t
                    }), css(control, {
                        width: t
                    }), control2 && css(control2, {
                        width: t
                    })
                }
            }

            function Resize() {
                if (!removed) {
                    if ("settings" == is) {
                        o.controls && o.controls.resizeSettings();
                        var t = 1 == style.nohead && f.length > 1 ? f[1] : f[0]
                    }
                    if ("playlist" == is) {
                        ResizePlaylist(), o.controls && o.controls.resizePlaylist();
                        var t = f[0];
                        1 == v.change2playlist && MainUpdateSize()
                    }
                    f.length > 1 && !t && f[1] && (t = f[1]), f.length > 2 && !t && f[2] && (t = f[2]), t && 0 == t.offsetWidth && f2.length > 0 && (t = f2[0]), control.offsetWidth - control.clientWidth > 0 && t && 1 != style.floatleft ? (exist(arr_up) && css(arr_up, {
                        width: control2.offsetWidth
                    }), exist(arr_down) && css(arr_down, {
                        width: control2.offsetWidth
                    }), style.scrollwidth = control.offsetWidth - t.offsetWidth - (control.clientWidth - t.clientWidth)) : style.scrollwidth = 0
                }
            }

            function VisibleItems() {
                for (var t = 0, e = 0, o = "", n = 1; n < f.length; n++) exist(f[n]) && "visible" == f[n].style.visibility && (t++, e = n, o = faction[n]);
                return [t, e, o]
            }

            function SubtitleSettings(t) {
                sub_settings_on = !sub_settings_on, SubtitleSettingsMenu(t)
            }

            function SubtitleSettingsMenu() {
                Home();
                for (var t = 0; t < faction.length; t++) "subtitle" == faction[t] && Action(t, _cstm)
            }

            function Retimer() {
                clearTimeout(settimer), settimer = setTimeout(function() {
                    o.setaction = !1
                }, 2e3)
            }

            function SubtitleTimerMenu() {
                var t = open_action;
                Home();
                for (var e = 0; e < faction.length; e++) faction[e] == t && Action(e, 0)
            }

            function HideControl(t) {
                ("playlist" != is || 1 != v.playlist.always2) && ("settings" != is || 1 != v.settings.always) && ("playlist" == is && 1 == v.playlist.droplist && 1 != v.playlist.dropnohide ? (o.droplist && o.droplist.Hide(), is_visible = !1) : 1 == t && (1 != style.hidesmoothly || 1 != style.always) || o.system.tv ? (css(container, {
                    visibility: "hidden",
                    opacity: 0,
                    top: -2e3
                }), is_visible = !1) : (new Motion({
                    mc: container,
                    type: "alpha_div",
                    to: 0,
                    time: .1,
                    me: is,
                    ease: "elastic"
                }), hidetimeout = setTimeout(function() {
                    css(container, {
                        visibility: "hidden",
                        opacity: 0,
                        top: -2e3
                    }), is_visible = !1
                }, 200)), "playlist" == is && 1 == v.playlist.hidecontrol && o.controls && o.controls.toggleControl("action", "playlist", !0), clearInterval(wheelinterval))
            }

            function ShowTimeout() {
                clearInterval(showinterval), justshow = !1
            }

            function showById(t) {
                exist(o.playlist_dic[t]) && (plfolder = "", UpdatePlaylist(0), FindPlStart(o.playlist_dic[t]), UpdateVars0(t), Action(o.playlist_dic[t].pjs_i, 0), UpdateVars(t))
            }

            function ScrollTo(t) {
                if (f[t] && !removed) {
                    if (1 == style.floatleft) {
                        var e = f[t].offsetLeft - 20;
                        new Motion({
                            mc: control,
                            type: "scrollleft",
                            to: e,
                            time: .3,
                            me: "scroll_left",
                            ease: "cubic"
                        })
                    } else {
                        var e = f[t].offsetTop - container.offsetHeight / 2 + 20;
                        new Motion({
                            mc: control,
                            type: "scroll",
                            to: e,
                            time: .3,
                            me: "scroll_down",
                            ease: "cubic"
                        })
                    }
                    setTimeout(Arrows, 1e3)
                }
            }

            function Shuffle(t) {
                for (var e, o = Object.keys(t), n = 0; n < o.length && !(e = t[o[o.length * Math.random() << 0]]); n++);
                return e
            }

            function Menuproc(t) {
                mpi[t] > -1 && Value(mpi[t]), f2value[0] && ("scale" == open_action ? f2value[0].innerHTML = Math.round(100 * o.mediascale.x) + "%" : f2value[0].innerHTML = FltrVal(open_action))
            }

            function FltrVal(t) {
                return "scale" == t ? Math.round(100 * o.mediascale.x) + "%" : Math.round(100 * existv(o.fltrs[t], o.menuproc[t])) + "%"
            }

            function f2i(t, e) {
                return f2action[e].indexOf(t)
            }

            function FindPlStart(t) {
                exist(o.u.endtag) && exist(o.u.endtag.conf) && exist(t.end_tag) && (o.u.endtag.conf.movie_et = t.end_tag), -1 != t.pjs_parent_i ? (FindPlStart(o.playlist_dic[t.pjs_parent]), UpdatePlaylist(t.pjs_parent)) : UpdatePlaylist(0)
            }
            this.UpdateTimer = function(t) {
                Value(o[t + "_i"])
            }, this.Arrows = function() {
                1 == style.scrollarrows && Arrows()
            }, this.UpdateSpeed = function() {
                UpdateSpeed()
            }, this.Exist = function(t) {
                for (var e = 0; e < faction.length; e++)
                    if (faction[e] == t) return !0;
                return !1
            }, this.resizePlaylist = function() {
                ResizePlaylist()
            }, this.SubOpt = function() {
                sub_settings_on = !0, this.show(), _cstm = 2, SubtitleSettingsMenu()
            }, this.c = function() {
                return container
            }, this.co = function() {
                if (container.contains(control)) return control
            }, this.s = function(t) {
                return style[t]
            }, this.ss = function(t) {
                return style
            }, this.show = function() {
                if (Home(), clearTimeout(hidetimeout), is_visible = !0, "playlist" == is && 1 == v.playlist.droplist) o.droplist && o.droplist.Show();
                else {
                    css(container, {
                        visibility: "visible",
                        opacity: 1,
                        transition: "opacity 0.2s linear"
                    });
                    var t = VisibleItems();
                    1 == t[0] && ("quality" == t[2] || "audiotrack" == t[2] || "subtitle" == t[2] || "speed" == t[2] || t[2] in o.menuproc || t[2].indexOf("timer") > 0) && Action(t[1], 0)
                }
                o.controls && ("settings" == is && o.controls.resizeSettings(), "playlist" == is && (o.controls.resizePlaylist(), 1 == v.playlist.hidecontrol && o.controls.toggleControl("action", "playlist", !1))), o.system.safari && (css(control, {
                    "min-width": "auto"
                }), 1 != style.floatleft && css(control2, {
                    "min-width": "auto"
                })), justshow = !0, clearInterval(showinterval), showinterval = setInterval(ShowTimeout, 100)
            }, this.open = function(t) {
                Action(t, 1)
            }, this.hide = function(t) {
                HideControl(t)
            }, this.SetQuality = function() {
                for (var t = 0; t < faction.length; t++) "quality" == faction[t] && (Value(t), o.files_quality.length > 1 && show(f[t]), "quality" == open_action && (Remove2(), Action(t, _cstm)))
            }, this.Airplay = function() {
                for (var t = 0; t < faction.length; t++) "airplay" == faction[t] && Value(t)
            }, this.SetSetting = function(t) {
                for (var e = 0; e < faction.length; e++) faction[e] == t && (Value(e), o["files_" + t] && o["files_" + t].length > 1 && show(f[e]), open_action == t && (Remove2(), Action(e, _cstm)))
            }, this.SetSubtitle = function() {
                for (var t = 0; t < faction.length; t++)
                    if ("subtitle" == faction[t]) {
                        if (Value(t), o.files_subtitle && o.files_subtitle.length > 0) {
                            var e = !1;
                            if (o.subs) {
                                for (var n = 0; n < o.subs.length; n++)
                                    if ("" != o.subs[n]) {
                                        e = !0;
                                        break
                                    }
                            } else e = !0;
                            e && show(f[t])
                        }
                        "subtitle" == open_action && (Remove2(), Action(t, 0))
                    }
            }, this.updatePlaylist = function(t) {
                if (o.playlist = t, UpdatePlaylist(0), exist(v.plstart)) {
                    if (0 != v.plstart.indexOf("x-"))
                        for (var e in o.playlist_dic) o.playlist_dic.hasOwnProperty(e) && o.playlist_dic[e].pjs_id == v.plstart && (v.plstart = e);
                    if (exist(o.playlist_dic[v.plstart])) {
                        FindPlStart(o.playlist_dic[v.plstart]);
                        var e = o.playlist_dic[v.plstart].pjs_i;
                        ActionPlaylist(e), 1 == v.playlist.openplaylistroot && 1 != style.droplist ? (UpdatePlaylist(0), setTimeout(function() {
                            Resize()
                        }, 500)) : setTimeout(function() {
                            ScrollTo(e), Resize()
                        }, 500), v.plstart = void 0
                    } else ActionPlaylist(0)
                } else ActionPlaylist(0);
                1 != style.droplist || exist(o.droplist) || (o.droplist = new PluginDroplist)
            }, this.playById = function(t) {
                exist(o.playlist_dic[t]) && (FindPlStart(o.playlist_dic[t]), Action(o.playlist_dic[t].pjs_i, 0), ScrollTo(o.playlist_dic[t].pjs_i))
            }, this.openById = function(t) {
                exist(o.playlist_dic[t]) && (FindPlStart(o.playlist_dic[t]), o.playlist_dic[t].file ? ("prerollt" in v && (v.preroll = v.prerollt), ActionPlaylist(o.playlist_dic[t].pjs_i), UpdateVars0(t), o.actions.NewFile(o.playlist_dic[t].file, 1), UpdateVars(t), ScrollTo(o.playlist_dic[t].pjs_i), o.droplist && o.droplist.Update()) : o.playlist_dic[t].folder && UpdatePlaylist(t))
            }, this.PlaylistNext = function() {
                if (PauseBannerPlugin("pausebannerhide"), autonextopenfolder = !0, t = parseInt(plx) + 1, "" != plid && (o.plhistory[plid] = !0, shuffle = removebykey(shuffle, plid)), 1 == v.shuffle) {
                    if (null == (t = Shuffle(shuffle))) {
                        if (1 == v.shuffle8 || 1 == v.playlist.autoplaylist) {
                            for (var t in shuffle_.sort(function(t, e) {
                                    return Math.random() - .5
                                }), shuffle_) shuffle_.hasOwnProperty(t) && (shuffle[t] = shuffle_[t]);
                            t = Shuffle(shuffle)
                        } else o.actions.ShuffleEnd();
                        v.playlist.dontplay = 1, o.u.playlist.dontplay = 1
                    }
                } else {
                    if (plid.indexOf("xxx-") > -1) {
                        let e = plid.replace("xxx-", "").split("-");
                        e[2] = parseInt(e[2]) + 1, e[4] = parseInt(e[4]) + 1, e[8] = parseInt(e[8]) + 1;
                        let n = `xxx-${e.join("-")}`;
                        Object.keys(o.playlist_dic).forEach(function(e) {
                            e.indexOf(n) > -1 && (plid = e, plx = -1, faction[t] = "playlistfolder")
                        })
                    }
                    if (("playlistfolder" == faction[t] || -1 == plx) && "" != plid) {
                        var a = Object.keys(o.playlist_dic).indexOf(plid);
                        if (a < Object.keys(o.playlist_dic).length) {
                            var s = o.playlist_dic[Object.keys(o.playlist_dic)[a]];
                            s && (exist(s.folder) && (s = o.playlist_dic[Object.keys(o.playlist_dic)[a]]), this.openById(s.id), t = -1, setTimeout(() => o.actions.Play(1), 100), v.playlist.dontplay = 0, o.u.playlist.dontplay = 0)
                        }
                    }
                }
                t > -1 && (Action(t, 0), ScrollTo(t))
            }, this.menuproc = function(t) {
                Menuproc(t)
            }, this.PlaylistNextExist = function() {
                if (1 == v.shuffle) return Object.keys(shuffle).length > 0;
                var t = !1;
                return o.playlist_dic && (t = Object.keys(o.playlist_dic).indexOf(plid) < Object.keys(o.playlist_dic).length - 1), t
            }, this.PlaylistRewind = function() {
                exist(o.pl_first_id) && showById(o.pl_first_id)
            }, this.PlaylistPrevExist = function() {
                var t = plx > 0;
                if (o.playlist_dic) {
                    var e = Object.keys(o.playlist_dic),
                        n = e.indexOf(plid);
                    t = n > 0, 1 == n && exist(o.playlist_dic[e[0]].folder) && (t = !1)
                }
                return t
            }, this.PlaylistExist = function() {
                return exist(o.playlist_dic)
            }, this.PlaylistPrev = function() {
                if (autoprevopenfolder = !0, this.PlaylistPrevExist()) {
                    var t = parseInt(plx) - 1;
                    if (t < 0) {
                        var e = Object.keys(o.playlist_dic).indexOf(plid);
                        if (e > 0) {
                            var n = o.playlist_dic[Object.keys(o.playlist_dic)[e - 1]];
                            n && (exist(n.folder) && (n = o.playlist_dic[Object.keys(o.playlist_dic)[e - 2]]), n && (this.openById(n.id), o.actions.Play()))
                        }
                    } else Action(t, 0), ScrollTo(t)
                }
            }, this.PlaylistHere = function() {
                plx > 0 && ScrollTo(plx)
            }, this.g = function(t) {
                switch (t) {
                    case "width":
                        return Width();
                    case "height":
                        return container.offsetHeight;
                    case "top":
                        return style.margintop;
                    case "scroll_height":
                        return control.scrollHeight;
                    case "margin_bottom":
                        return style.marginbottom;
                    case "x":
                        return int(container.style.left);
                    case "y":
                        return int(container.style.top);
                    case "opacity":
                        return container.style.opacity;
                    case "show":
                        return is_visible;
                    case "open":
                        return open_settings;
                    case "key":
                        return key;
                    case "motion_id":
                        return key + motion_id;
                    case "empty":
                        return empty;
                    case "playlist":
                        return "playlist" == is;
                    case "activeicon":
                        return _activeIcon;
                    case "butplstart":
                        return o.playlist_dic[o.butplstart] ? o.playlist_dic[o.butplstart].title : "";
                    case "title2":
                        return v.title2 ? v.title2 : ""
                }
            }, this.prenewpl = function() {
                plid = "", v.plstart = ""
            }, this.empty = function() {
                if ("settings" == is) {
                    for (var t = 0, e = 1; e < 11; e++) {
                        if ("quality" == faction[e]) {
                            var n = o.files_quality.length;
                            if (exist(v.forbidden_quality))
                                for (var a = v.forbidden_quality.split(","), s = 0; s < a.length; s++) o.files_quality.indexOf(a[s]) > -1 && n--;
                            n > 0 && (n > 1 || 1 == n && 1 != o.files_quality && 1 == style.show1value) && t++
                        }
                        if ("airplay" == faction[e] && o.airplay && t++, "download" == faction[e] && ("native" == o.file_type || v.download) && t++, "audiotrack" == faction[e] && o.files_audiotrack.length > 0 && t++, "channel" == faction[e] && 1 == v.channels && o.files_channel.length > 0 && t++, "subtitle" == faction[e]) {
                            if (exist(o.subs)) {
                                for (var r = 0; r < o.subs.length; r++)
                                    if ("" != o.subs[r]) {
                                        t++;
                                        break
                                    }
                            }
                            1 == t && 1 == o.subload && (t = 0), 1 == v.sub_upload && 1 == v.sub_upload0 && t++
                        }
                        "speed" == faction[e] && "vimeo" != o.file_type && t++, (faction[e] in o.menuproc || "share" == faction[e] || "color" == faction[e]) && t++, faction[e] && faction[e].indexOf("timer") > 0 && t++, 1 == v.settings[is + e + "hide"] && t--
                    }
                    return 0 == t
                }
                return "playlist" == is ? 0 == f.length : empty
            }, this.Remove = function() {
                container.parentNode == o.frame && (container.removeChild(control), o.frame.removeChild(container), o.droplist && o.droplist.Remove(), container = null, control = null, removed = !0)
            }
        };

    function PluginShare_whatsapp() {
        this.share = function() {
            return (o.system.mobile ? "https://wa.me/?" : "https://web.whatsapp.com/send?") + "text="
        }, this.icon = function(t) {
            return "<path d='M14.2464991,5.25712408 C13.1148991,4.12492408 11.6100991,3.50092408 10.0068991,3.50032408 C6.70329913,3.50032408 4.01469913,6.18772408 4.01349913,9.49132408 C4.01289913,10.5473241 4.28889913,11.5781241 4.81329913,12.4865241 L4.00029913,15.5003241 L7.14009913,14.7581241 C8.01549913,15.2357241 9.00069913,15.4871241 10.0038991,15.4877241 C13.3092991,15.4877241 15.9978991,12.7997241 15.9996991,9.49672408 C16.0008991,7.89532408 15.3780991,6.38992408 14.2464991,5.25712408 Z M12.9390991,11.6327241 C12.8142991,11.9825241 12.2028991,12.3197241 11.9280991,12.3443241 C11.6532991,12.3695241 11.3958991,12.4685241 10.1310991,11.9699241 C8.60889913,11.3699241 7.64769913,9.80932408 7.57329913,9.70972408 C7.49829913,9.60952408 6.96189913,8.89792408 6.96189913,8.16112408 C6.96189913,7.42432408 7.34889913,7.06192408 7.48629913,6.91252408 C7.62369913,6.76252408 7.78569913,6.72532408 7.88589913,6.72532408 C7.98549913,6.72532408 8.08569913,6.72532408 8.17269913,6.72892408 C8.27949913,6.73312408 8.39769913,6.73852408 8.50989913,6.98752408 C8.64309913,7.28392408 8.93409913,8.02432408 8.97129913,8.09932408 C9.00849913,8.17432408 9.03369913,8.26192408 8.98389913,8.36152408 C8.93409913,8.46112408 8.90889913,8.52352408 8.83449913,8.61112408 C8.75949913,8.69872408 8.67729913,8.80612408 8.61009913,8.87332408 C8.53509913,8.94772408 8.45709913,9.02932408 8.54409913,9.17872408 C8.63169913,9.32872408 8.93169913,9.81892408 9.37689913,10.2155241 C9.94929913,10.7255241 10.4310991,10.8833241 10.5810991,10.9589241 C10.7310991,11.0339241 10.8180991,11.0213241 10.9056991,10.9211241 C10.9932991,10.8215241 11.2800991,10.4843241 11.3796991,10.3343241 C11.4792991,10.1843241 11.5794991,10.2095241 11.7168991,10.2593241 C11.8542991,10.3091241 12.5904991,10.6715241 12.7398991,10.7465241 C12.8898991,10.8215241 12.9894991,10.8587241 13.0266991,10.9211241 C13.0638991,10.9829241 13.0638991,11.2829241 12.9390991,11.6327241 Z' fill='" + t + "' fill-rule='nonzero'></path>"
        }
    }

    function PluginShare_telegram() {
        this.share = function() {
            return "https://t.me/share/url?url="
        }, this.icon = function(t) {
            return "<path d='M15.774328,4.61928677 C15.6001007,4.47186369 15.3186567,4.45846159 14.8361812,4.60588467 L14.8361812,4.60588467 C14.5011287,4.71310145 11.525863,5.83887768 8.89905178,6.92444761 C6.54028255,7.90280076 4.62378254,8.76053503 4.39594688,8.86775181 C4.14130702,8.9481644 3.591821,9.18940216 3.56501681,9.5646609 C3.55161471,9.80589866 3.75264618,10.0203322 4.14130702,10.1945595 C4.55677205,10.4089931 6.39285947,11.0254896 6.78152031,11.1461085 C6.91554129,11.6017798 13.4557651,6.66394451 13.4959714,6.82476969 C13.5495798,7.06600745 8.27203981,11.6399635 8.3524524,11.6935719 C8.3658545,11.706974 7.97987656,14.3468113 8.00668076,14.3602134 C8.04688705,14.3870176 8.0174202,14.6306539 8.13718414,14.7378707 C8.25694808,14.8450875 8.2536879,14.8345227 8.51661242,14.8345227 C9.01249004,14.4324598 9.91761122,13.545084 10.158849,13.2904441 C11.2176147,14.1213742 12.3701951,15.046119 12.4774119,15.1533357 L12.490814,15.1667378 C12.7454539,15.3811714 13.0134958,15.5017903 13.2547336,15.5017903 C13.3351462,15.5017903 13.4155588,15.4883882 13.4959714,15.461584 C13.7774154,15.3677693 13.9784469,15.0997273 14.0454574,14.7378707 C14.0454574,14.7244686 14.0588595,14.6708602 14.0856637,14.5770455 C14.541335,12.593535 14.9031916,10.8512623 15.1980378,9.39043363 C15.4794819,7.95640915 15.7073175,6.54918887 15.8413385,5.79867139 C15.8681427,5.61104201 15.8949469,5.46361894 15.908349,5.36980425 C15.9485553,5.10176229 15.9753595,4.79351404 15.774328,4.61928677 Z' fill='" + t + "' fill-rule='nonzero'></path>"
        }
    }
    var MediaYoutube = function(t, e) {
            var n, a, s, r, l = !1;
            0 == t.indexOf("intro") && (l = !0, t = t.substr(5));
            var d = YoutubeID(t),
                c = !1,
                u = !1,
                $ = !1,
                f = !1,
                p = !0,
                _ = [],
                h = 1,
                g = !1,
                m = 0,
                b = 0,
                y = !1,
                w = "pljs_yt_" + v.id + (l ? "intro" : ""),
                k = createElement("div");
            if (k.setAttribute("id", w), e.appendChild(k), o.airplay = !1, l || o.actions.AirplayChanged(), o.system.mobile && (v.preload = 1), 1 != v.youtubecontrols) {
                var O = createElement("div");
                e.appendChild(O), css(O, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    "background-color": "#ff0000",
                    height: "100%",
                    width: "100%",
                    opacity: 0
                }), O.addEventListener("dblclick", function(t) {
                    t.cancelBubble = !0
                }), o.system.mobile ? (O.addEventListener("touchstart", function(t) {
                    t.cancelBubble = !0
                }), O.addEventListener("click", function(t) {
                    t.cancelBubble = !0
                }), O.addEventListener("touchend", function(t) {
                    t.cancelBubble = !0, ScreenClick(t), 1 == v.screenclick && (setTimeout(S, 100), setTimeout(L, 1e3))
                })) : O.addEventListener("mousemove", function(t) {
                    var e = !0;
                    1 == v.vast && (exist(v.preroll) && !$ && (e = !1), exist(v.playroll) && "paused" == W() && X() > 0 && (e = !1)), e && 1 == v.screenclick && 1 != v.ytcl && (hide2(this), setTimeout(L, 2e3))
                }), 1 == v.screenclick && 1 != v.ytcl1 && hide2(O)
            }

            function L() {
                show2(O)
            }

            function S() {
                1 != v.ytcl && hide2(O)
            }
            if (1 == v.preload && 0 == v.autoplay && R(), window.YT) T();
            else {
                window.onYouTubeIframeAPIReady = function() {
                    T();
                    for (var t = 0; t < pljssglobal.length; t++) pljssglobal[t].api("id") != v.id && pljssglobal[t].api("isyoutube") && pljssglobal[t].api("youtubeready")
                };
                var C = Script("youtube.com/iframe_api", "youtube.com/iframe_api", "youtube_iframe_api");
                C && (C.onerror = function(t) {
                    o.actions.MediaReady(), 1 != v.yterrors && (n = "YouTube API Error", o.media.onError())
                })
            }

            function T() {
                1 == v.preload || l ? c || E() : o.actions.MediaReady()
            }

            function E() {
                if ("YT" in window) {
                    if (exist(YT.Player) && !c) {
                        log("Youtube Init");
                        var t = 0;
                        1 == v.youtubecontrols && (t = 1), o.seekto > 0 && (m = parseInt(o.seekto)), a = new YT.Player(w, {
                            height: o.container_h,
                            width: o.container_w,
                            videoId: d,
                            playerVars: {
                                enablejsapi: 1,
                                playerapiid: w,
                                html5: 1,
                                disablekb: 1,
                                autohide: 1,
                                playsinline: (0 == v.playsinlineonmobile || 1 != v.playsinlineonmobileiphone && o.system.iphone) && o.system.mobile ? 0 : 1,
                                iv_load_policy: 3,
                                controls: t,
                                showinfo: 0,
                                modestbranding: 1,
                                rel: 0,
                                autoplay: l ? 1 : 0,
                                loop: 0
                            },
                            events: {
                                onReady: P,
                                onStateChange: I,
                                onError: z,
                                onPlaybackQualityChange: N
                            }
                        }), o.seekto > 0 && (o.seekto = void 0), U(), c = !0
                    } else setTimeout(E, 500)
                } else setTimeout(E, 500)
            }

            function P() {
                if (o.media) {
                    if (log("Youtube Ready"), u = !0, clearTimeout(s), o.actions.StopWaiting(), l) o.system.mutedautoplay && o.actions.Mute(), a.playVideo(), o.vast.ytReady();
                    else if (1 == v.autoplay && o.system.mutedautoplay && !o.acted && (o.actions.Mute(), o.system.mobile && (clearInterval(r), r = setInterval(A, 300))), 0 == v.preload ? a.playVideo() : o.actions.MediaReady(), o.media.onDuration(), 1 != h && Q(h), H(), U(), 1 == v.yttitle) try {
                        a.getVideoData() && exist(a.getVideoData().title) && (v.title = a.getVideoData().title, o.actions.Title("title"))
                    } catch (t) {}
                }
            }

            function A() {
                var t = a.getPlayerState();
                (2 == t || -1 == t) && (o.controls.Pause(), o.controls.StopWaiting(), clearInterval(r)), 1 == t && clearInterval(r)
            }

            function I(t) {
                if (1 == v.ytlog && log("YT", t.data), l) t.data == YT.PlayerState.ENDED && o.vast.ytEnded(), t.data, YT.PlayerState.PLAYING;
                else {
                    if (t.data == YT.PlayerState.PLAYING) {
                        if (1 == b && (b = 0, P()), o.play || o.actions.Play(), m > 0 && (a.seekTo(m, !0), m = 0, o.seekto = void 0), L(), $ = !0, u = !0, f ? a.pauseVideo() : (o.media.onPlay(), o.media.onTimeupdate()), B(), exist(v.default_quality)) {
                            for (var e = 0; e < o.files_quality.length; e++) v.default_quality == o.files_quality[e] && G(e);
                            v.default_quality = null
                        } else if (exist(o.default_quality)) {
                            for (var e = 0; e < o.files_quality.length; e++) o.default_quality == o.files_quality[e] && G(e);
                            o.default_quality = null
                        }
                        g = !1
                    } - 1 == t.data && g && o.play && (o.actions.StopWaiting(), g = !1, V()), t.data, YT.PlayerState.PAUSED, t.data == YT.PlayerState.ENDED && q(), t.data == YT.PlayerState.BUFFERING && (o.play, o.play && (g = !0, R())), t.data, YT.PlayerState.CUED
                }
            }

            function z(t) {
                l ? o.vast.ytError() : (2 == t.data && (n = "wrong youtube id"), 5 == t.data && (n = "network empty"), (101 == t.data || 150 == t.data || 100 == t.data) && (n = "this video is unavailable"), 1 == v.customyterrors && exist(v.customyterror) && (n = v.customyterror), 1 != v.yterrors ? o.media.onError() : hide(o.poster))
            }

            function q() {
                v.start > 0 && (m = v.start), o.media.onEnded(), o.media.onDuration()
            }

            function V() {
                !o.nopause && o.play && o.actions.Pause()
            }

            function M() {
                o.media.onTimeupdate()
            }

            function H() {
                o.media.onMeta(), o.actions.LoadedData()
            }

            function D() {
                o.media.onDuration()
            }

            function j() {
                o.media.onVolume()
            }

            function R() {
                o.media ? o.media.onWaiting() : s = setTimeout(R, 100)
            }

            function N(t) {
                F(t.data)
            }

            function B() {
                if (!y) {
                    var t = a.getAvailableQualityLevels() + "";
                    if ("" != t && void 0 != t) {
                        if (o.files_quality = t.split(","), o.files_quality = o.files_quality.reverse(), 0 == v.ytautoquality) {
                            var e = o.files_quality.indexOf("auto");
                            e > -1 && o.files_quality.splice(e, 1)
                        }
                        for (var n = 0; n < o.files_quality.length; n++) o.files_quality[n] = Y(o.files_quality[n]);
                        y = !0, F(a.getPlaybackQuality())
                    }
                }
            }

            function F(t) {
                o.current_quality = o.files_quality.indexOf(Y(t + "")), o.controls.QualityChanged(o.current_quality)
            }

            function W() {
                var t = -1;
                u && (t = a.getPlayerState());
                var e = "";
                return -1 == t && (e = "paused"), (1 == t || 3 == t) && (e = "playing"), 2 == t && (e = "paused", o.play && (o.controls.Pause(), o.actions.StopWaiting())), 5 == t && (e = "paused"), 0 == t && (e = "ended"), e
            }

            function U() {
                a && a.setSize(o.screen_w, o.screen_h)
            }

            function Y(t) {
                var e = t;
                return "tiny" == t && (e = "160p"), "small" == t && (e = "240p"), "medium" == t && (e = "360p"), "large" == t && (e = "480p"), "hd720" == t && (e = "720p"), "hd1080" == t && (e = "1080p"), 1 == v.nameofyoutubequality && (e = Lang(e)), "auto" == t && (e = Lang("auto")), _[e] = t, e
            }

            function X() {
                return u ? a.getCurrentTime() : 0
            }

            function Q(t) {
                a && a.setPlaybackRate(t), h = t
            }

            function G(t) {
                if (u && exist(o.files_quality[t])) {
                    var e = _[o.files_quality[t]];
                    p = "auto" == e, X(), a.setPlaybackQuality(e)
                }
            }

            function Z(e) {
                t = e, a && (b = 1, a.loadVideoById(e, 0))
            }
            this.size = function() {
                return {
                    width: 0,
                    height: 0
                }
            }, this.src = function(t) {
                d = YoutubeID(t), o.seekto > 0 && (m = parseInt(o.seekto)), Z(d)
            }, this.YoutubeReady = function() {
                T()
            }, this.Play = function() {
                u ? a.playVideo() : c || E()
            }, this.Pause = function() {
                u && a.pauseVideo()
            }, this.Toggle = function() {
                u && ("playing" == W() ? a.pauseVideo() : a.playVideo())
            }, this.Seek = function(t) {
                u && a.seekTo(t, !0)
            }, this.tag = function() {
                return !1
            }, this.Mute = function() {
                u && a.mute()
            }, this.Unmute = function() {
                u && a.unMute()
            }, this.Volume = function(t) {
                u && a.setVolume(100 * t)
            }, this.isPlaying = function() {
                return "playing" == W()
            }, this.isLive = function() {
                return !1
            }, this.setQuality = function(t) {
                G(t)
            }, this.setSpeed = function(t) {
                Q(t)
            }, this.ready = function() {
                return u
            }, this.status = function() {
                return W()
            }, this.time = function() {
                return X()
            }, this.duration = function() {
                var t = u ? a.getDuration() : 0;
                return exist(v.end) && (t = v.end), t
            }, this.loaded = function() {
                var t = 0;
                return u && (t = a.getVideoLoadedFraction() * a.getDuration()), t
            }, this.resize = function() {
                U()
            }, this.errorMessage = function() {
                return n
            }, this.auto = function() {
                return 1 == v.ytautoquality && p
            }, this.playId = function(t) {
                Z(t)
            }, this.BeforeVast = function() {
                o.system.mobile && o.system.android ? (this.Play(), f = !0) : "playing" == W() && this.Pause()
            }, this.AfterVast = function() {
                f = !1
            }, this.nativeControls = function() {
                return !0
            }, this.Remove = function() {
                u && a.destroy(), u = !1, y = !1;
                try {
                    k && e.removeChild(k), e.removeChild(O)
                } catch (t) {}
            }
        },
        TimeStore = function() {
            o.p.href && (o.d = o.p.href);
            var t = this,
                e = "",
                n = 0,
                a = 0;
            o.storage && 1 != v.timestoredontuse && (null != localStorage.getItem("pljsplayfrom_" + v.id + o.href2) && (e = localStorage.getItem("pljsplayfrom_" + v.id + o.href2)), 1 == v.playedstore && null != localStorage.getItem("pljsplayed_" + v.id + o.href2) && (o.playedstore = localStorage.getItem("pljsplayed_" + v.id + o.href2)), exist(v.cuid) && (null != localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) && (e = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid)), 1 == v.playedstore && null != localStorage.getItem("pljsplayed_" + o.d + v.cuid) && (o.playedstore = localStorage.getItem("pljsplayed_" + o.d + v.cuid))), o.playedstore && 1 == v.playedstore && (o.playedstored = o.playedstore.split(",")), 0 == e.indexOf("{") && (1 == v.timestorejustbut ? o.butplstart = e.substr(1, e.indexOf("}") - 1) : o.plcontinue = v.plstart = e.substr(1, e.indexOf("}") - 1), e = e.substr(e.indexOf("}") + 1), 1 == v.timestore0plroot && (v.playlist.openplaylistroot = 0)), r(e));
            let s = function(s) {
                null != s.data && "timestore_localstorage" == s.data.event && !t.postMessageTimeStore && "info" in s.data && null != s.data.info && "title" in s.data.info && "value" in s.data.info && (localStorage.setItem(s.data.info.title, s.data.info.value), 1 != v.timestoredontuse && (null != localStorage.getItem("pljsplayfrom_" + v.id + o.href2) && (e = localStorage.getItem("pljsplayfrom_" + v.id + o.href2)), 1 == v.playedstore && null != localStorage.getItem("pljsplayed_" + v.id + o.href2) && (o.playedstore = localStorage.getItem("pljsplayed_" + v.id + o.href2)), exist(v.cuid) && (null != localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) && (e = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid)), 1 == v.playedstore && null != localStorage.getItem("pljsplayed_" + o.d + v.cuid) && (o.playedstore = localStorage.getItem("pljsplayed_" + o.d + v.cuid))), o.playedstore && 1 == v.playedstore && (o.playedstored = o.playedstore.split(",")), 0 == e.indexOf("{") ? (1 == v.timestorejustbut ? o.butplstart = e.substr(1, e.indexOf("}") - 1) : o.plcontinue = v.plstart = e.substr(1, e.indexOf("}") - 1), e = e.substr(e.indexOf("}") + 1), 1 == v.timestore0plroot && (v.playlist.openplaylistroot = 0), r(e), o.controls.Played(n, a), o.controls.Duration(n, a), v.framecontinuecontainer && (v.framecontinuecontainer.innerHTML = "Продолжить с {time}".replace("{time}", timeFormat(n)))) : (r(e), t.updateCuid())), t.postMessageTimeStore = !0)
            };

            function r(t) {
                if (t && t.indexOf("--") > 0) {
                    var e = t.split("--");
                    n = parseFloat(e[0]), 1 == v.timestoreunauto && n > 0 && 1 == v.autoplay && (v.autoplay = 0), 1 == v.timestorejustbut ? o.butseekto = n : (a = parseFloat(e[1]), o.seekto = n)
                }
            }
            "addEventListener" in window ? window.addEventListener("message", s) : window.attachEvent("message", s), this.updateCuid = function() {
                exist(v.cuid) && (null != localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) ? (r(e = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid)), o.controls.Played(n, a), o.controls.Duration(n, a), v.duration = a) : (o.seekto = 0, o.controls.Played(0, 0), o.controls.Duration(0, 0), v.duration = 0))
            }, this.write = function(t, e) {
                if (o.p.href && (o.d = o.p.href), o.media.isLive() && 1 == v.timestorenolive);
                else {
                    var n = new Date().getTime();
                    localStorage.setItem("pljsplayfrom_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), (exist(o.plid) ? "{" + o.plid + "}" : "") + t + "--" + e + "--" + n), window.parent.postMessage({
                        event: "timestore_localstorage",
                        info: {
                            title: "pljsplayfrom_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2),
                            value: (exist(o.plid) ? "{" + o.plid + "}" : "") + t + "--" + e + "--" + n
                        }
                    }, "*")
                }
            }, this.writePl = function(t) {
                o.p.href && (o.d = o.p.href), o.playedstore = (o.playedstore ? o.playedstore + "," : "") + t, localStorage.setItem("pljsplayed_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), o.playedstore);
                let e = !1;
                !e && o.plid && (window.parent.postMessage({
                    event: "tabs",
                    info: {
                        title: "serial-season-episode",
                        value: o.plid
                    }
                }, "*"), console.log("tabs"), e = !0), window.parent.postMessage({
                    event: "timestore_localstorage",
                    info: {
                        title: "pljsplayed_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2),
                        value: o.playedstore
                    }
                }, "*")
            }, this.flag = function() {
                return {
                    t: n,
                    d: a
                }
            }
        },
        ChromeCast = function() {
            var t, e, n, a, s;

            function r() {
                if (g("available"), exist(chrome.cast) && exist(cast) && !o.cast_available) {
                    var e = "CC1AD845";
                    1 == v.chromecast.receiver && v.chromecast.receiverid && (e = v.chromecast.receiverid), cast.framework.CastContext.getInstance().setOptions({
                        receiverApplicationId: e,
                        autoJoinPolicy: "tab_and_origin_scoped",
                        language: "en-US",
                        resumeSavedSession: !1
                    }), t = new cast.framework.RemotePlayer, h(), o.cast_available = !0, setTimeout(l, 1e3)
                }
            }

            function l() {
                o.controls.Review(), o.controls.resize()
            }

            function d(e) {
                cast && cast.framework && (g((t.isConnected ? "" : "dis") + "connected"), t.isConnected ? c() : u())
            }

            function c(s) {
                var r = cast.framework.CastContext.getInstance().getCurrentSession(),
                    l = "video/mp4";
                "hls" == o.file_type && (l = "application/x-mpegurl"), "dash" == o.file_type && (l = "application/dash+xml");
                var d = o.media.currentFile();
                exist(v.casturl) && (d = v.casturl);
                var c = new chrome.cast.media.MediaInfo(d, l);
                c.metadata = new chrome.cast.media.GenericMediaMetadata, c.metadata.metadataType = chrome.cast.media.MetadataType.GENERIC;
                var $ = [];
                if (exist(o.subs) && exist(o.current_subtitle) && 1 == v.chromecast.sub) {
                    for (var f in c.textTrackStyle = b(), o.subs)
                        if (o.subs[f].indexOf("vtt") > 0) {
                            var p = new chrome.cast.media.Track(0, chrome.cast.media.TrackType.TEXT);
                            p.trackContentId = o.subs[f], p.trackContentType = "text/vtt", p.subtype = "CAPTIONS", p.name = o.files_subtitle[f], p.trackId = parseInt(f), p.customData = null, $.push(p)
                        } $.length > 0 && (c.tracks = $)
                }
                v.poster && (c.metadata.images = [new chrome.cast.Image(v.poster)]), c.metadata.title = o.titlestore ? o.titlestore : v.title ? v.title : "";
                var _ = new chrome.cast.media.LoadRequest(c);
                _.currentTime = o.seekto > 0 ? o.seekto : o.casting ? 0 : o.media.time(), _.autoplay = o.play || !0 == s, $.length > 0 && o.current_subtitle > -1 && o.current_subtitle < $.length && (_.activeTrackIds = [parseInt(o.current_subtitle)], g("subtitle " + o.current_subtitle)), r.loadMedia(_).then(function() {
                    g("connected to " + (n = r.getCastDevice().friendlyName)), 0 == v.chromecast.message || o.casting || (a && o.frame.removeChild(a), a = createElement("div"), css(a, {
                        position: "absolute",
                        top: "20px",
                        width: "100%",
                        left: 0,
                        opacity: .7,
                        color: "#fff",
                        "pointer-events": "none"
                    }), a.innerHTML = "<center>" + Lang("castdevice") + " &laquo;" + n + "&raquo;</center>", o.frame.appendChild(a)), t.volumeLevel = v.volume, e.setVolumeLevel(), o.muted && !t.isMuted && e.muteOrUnmute(), js("casted"), !0 != s && (o.play ? o.media.Pause() : t.isPaused || e.playOrPause()), hide(o.mediacontainer), o.casting = !0
                }, function(t) {
                    g(t), u(), o.alert.txt(Lang("casterror"))
                })
            }

            function u() {
                a && o.frame.removeChild(a), a = void 0, o.casting = !1, show(o.mediacontainer), js("uncasted"), t.savedPlayerState && (o.actions.Seek(t.savedPlayerState.currentTime), t.savedPlayerState.isPaused ? o.media.Pause() : o.media.Play())
            }

            function $() {
                t.isPaused ? (g("pause"), js("castpause"), o.controls.Pause()) : (g("play"), js("castplay"), o.controls.Play())
            }

            function f() {
                o.actions.Volume(t.volumeLevel)
            }

            function p() {
                t.isMuted ? o.actions.Mute() : o.actions.Unmute()
            }

            function _() {
                t.isConnected && null == t.playerState && t.currentTime == t.duration && (o.controls.Pause(), o.media.onEnded())
            }

            function h() {
                (e = new cast.framework.RemotePlayerController(t)).addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, d), e.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, $), e.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, f), e.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, p), e.addEventListener(cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED, _)
            }

            function g(t) {
                v.chromecast && 1 == v.log && log("chromecast", t)
            }

            function m() {
                if (t.isConnected) {
                    var e = b(),
                        n = new chrome.cast.media.EditTracksInfoRequest([parseInt(o.current_subtitle)], e);
                    cast.framework.CastContext.getInstance().getCurrentSession().getSessionObj().media[0].editTracksInfo(n, function() {
                        g("subtitle " + o.current_subtitle)
                    }, function(t) {
                        g("subtitle error" + t)
                    })
                }
            }

            function b() {
                var t = new chrome.cast.media.TextTrackStyle,
                    e = Math.round(255 * v.sub_bga).toString(16);
                return t.backgroundColor = CheckColor(v.sub_bgcolor) + (1 == e.length ? e + "0" : e), t.edgeColor = "#00000016", t.edgeType = "DROP_SHADOW", t.fontFamily = "CASUAL", t.fontScale = parseFloat(parseInt(v.sub_sizeproc) / 100), t.foregroundColor = CheckColor(v.sub_color) + Math.round(255).toString(16), t
            }
            window.__onGCastApiAvailable = function(t, e) {
                if (t)
                    for (var n = 0; n < pljssglobal.length; n++) pljssglobal[n].api("castinit");
                else g("error: " + e)
            }, this.init = function() {
                r()
            }, Script("gstatic.com/cv", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"), this.button = function(t) {
                return s = t, "<button is='google-cast-button' id='pjs_cast_button_" + v.id + "' style='padding:0;width:20px;height:20px;--connected-color:" + t + ";--disconnected-color:" + t + ";border:0;background:transparent;pointer-events:auto;cursor:pointer'></button>"
            }, this.Color = function(t, e) {
                if (s != e) {
                    var n = document.getElementById("pjs_cast_button_" + v.id);
                    if (n) {
                        var a = n.getAttribute("style"),
                            r = RegExp(s, "gi");
                        a = a.replace(r, e), n.setAttribute("style", a)
                    }
                    s = e
                }
            }, this.Volume = function(n) {
                t.isConnected && (t.volumeLevel = n, e.setVolumeLevel())
            }, this.Mute = function() {
                t.isConnected && !t.isMuted && e.muteOrUnmute()
            }, this.Unmute = function() {
                t.isConnected && t.isMuted && e.muteOrUnmute()
            }, this.Play = function(n) {
                t.isConnected && (t.isPaused ? e.playOrPause() : t.playerState)
            }, this.Pause = function(n) {
                t.isConnected && !t.isPaused && e.playOrPause()
            }, this.Sub = function() {
                1 == v.chromecast.sub && m()
            }, this.Time = function(e) {
                var e;
                return t.isConnected && (e = t.currentTime), e
            }, this.Duration = function(e) {
                var e;
                return t.isConnected && (e = t.duration), e
            }, this.Exit = function() {
                cast && cast.framework && u()
            }, this.Go = function() {
                cast && cast.framework && t.isConnected && c(o.play)
            }, this.Seek = function(n) {
                t.isConnected && (t.currentTime = n, e.seek())
            }
        },
        PluginSub = function() {
            var t, e = [],
                n = [],
                a = !0,
                s = -1;

            function r(e) {
                if (e || (e = ""), "11" != e) {
                    var n = 0,
                        a = !0,
                        s = "";
                    o.subs = e.split(","), o.files_subtitle = [], o.current_subtitle = -1, StorageSupport() && 1 == v.sub_store ? null != localStorage.getItem("pljssubtitle") && (s = localStorage.getItem("pljssubtitle")) : o.remember_sub && (s = o.remember_sub);
                    for (var r = 0; r < o.subs.length; r++) 0 == o.subs[r].indexOf("#0") && (o.subs[r] = fd0(o.subs[r])), 0 == o.subs[r].indexOf("#" + v.enc2) && (o.subs[r] = o[o.fd[0]](o.subs[r])), 0 == o.subs[r].indexOf("#" + v.enc3) && o.subs[r].indexOf(v.file3_separator) > 0 && (o.subs[r] = o[o.fd[1]](o.subs[r])), 0 == o.subs[r].indexOf("[") && o.subs[r].indexOf("]") > 1 ? (o.files_subtitle[r] = o.subs[r].substr(o.subs[r].indexOf("[") + 1, o.subs[r].indexOf("]") - 1), o.subs[r] = o.subs[r].substr(o.subs[r].indexOf("]") + 1), a = !1) : (o.files_subtitle[r] = o.subs[r].substr(o.subs[r].lastIndexOf("/") + 1), o.files_subtitle[r] = o.files_subtitle[r].substr(0, o.files_subtitle[r].lastIndexOf("."))), 0 == o.subs[r].indexOf("#0") && (o.subs[r] = fd0(o.subs[r])), 0 == o.subs[r].indexOf("#" + v.enc2) && (o.subs[r] = o[o.fd[0]](o.subs[r])), 0 == o.subs[r].indexOf("#" + v.enc3) && o.subs[r].indexOf(v.file3_separator) > 0 && (o.subs[r] = o[o.fd[1]](o.subs[r]));
                    o.files_subtitle.length > 1 && 1 == v.sub_all && (o.files_subtitle.push(StringVar("sub_all_title", Lang("together"))), o.subs.push("all")), o.files_subtitle.length > 0 && 1 == v.sub_off && (1 == v.sub_off0 ? (t = 0, n++, o.files_subtitle.unshift(StringVar("sub_off_title", Lang("off"))), o.subs.unshift("")) : (o.files_subtitle.push(StringVar("sub_off_title", Lang("off"))), o.subs.push(""), t = o.files_subtitle.length - 1));
                    for (var r = 0; r < o.subs.length; r++) exist(v.default_subtitle) && v.default_subtitle == o.files_subtitle[r] && (n = r, o.current_subtitle = r, v.subtitle_start = 1), "" != s && s == o.files_subtitle[r] && (n = r, o.current_subtitle = r);
                    1 == v.sub_off && 0 == v.subtitle_start && (o.current_subtitle = t), exist(o.controls) && o.controls.SubtitleChanged(), 1 == v.subtitle_start ? (o.current_subtitle = n, 1 == v.sub_all && "all" == o.subs[n] ? d(o.current_subtitle) : l(o.current_subtitle)) : (a && o.subs.length < 3 && l(0 == t ? 1 : 0), 1 != v.sub_off && (o.current_subtitle = -1))
                } else y()
            }

            function l(t) {
                exist(o.subs[t]) && (o.subs[t].indexOf(".") > -1 ? (o.subsor = o.subs[t].split(" or "), o.sub_or = 0, c(t)) : 0 == o.subs[t].indexOf("upld") && n[o.subs[t].substr(4)] && $(o.files_subtitle[t], n[o.subs[t].substr(4)]))
            }

            function d(t) {
                e[t] = {}, e[t][0] = [], e[t][1] = [];
                for (var n = 0; n < o.subs.length; n++) setTimeout(l, 500 * n, n)
            }

            function c(t) {
                var e = trim(o.subsor[o.sub_or]),
                    n = XHR(e);
                s = t, o.subload = 1, n.onload = function() {
                    o.subload = 0, 4 == this.readyState && 200 == this.status ? (o.subtitle_on = !0, $(e, this.responseText, t)) : o.sub_or + 1 < o.subsor.length ? (o.sub_or++, c(s)) : u("loading_error")
                }, n.onerror = function(t) {
                    o.subload = 0, o.sub_or + 1 < o.subsor.length ? (o.sub_or++, c(s)) : u("loading_error")
                }, n.send()
            }

            function u(t) {
                log("subtitle not found or access denied"), o.files_subtitle[o.current_subtitle] && -1 == o.files_subtitle[o.current_subtitle].indexOf(Lang("loading_error")) && (o.files_subtitle[o.current_subtitle] = o.files_subtitle[o.current_subtitle] + " (" + Lang(t) + ")"), 1 == v.subtitle_errdel && s > -1 && (o.subs[s] = "", o.files_subtitle[s] = ""), o.current_subtitle = -1, o.subtitle_on = !1, o.constrols ? (o.controls.SubtitleChanged(), o.controls.refresh()) : setTimeout(function() {
                    o.controls && (o.controls.SubtitleChanged(), o.controls.refresh())
                }, 100), exist(o.subtitle) && (o.frame.removeChild(o.subtitle), o.subtitle = null)
            }

            function $(t, n, a) {
                if (0 == n.indexOf("#" + v.enc2) && (n = o[o.fd[0]](n)), 0 == n.indexOf("#" + v.enc3) && n.indexOf(v.file3_separator) > 0 && (n = o[o.fd[1]](n)), t.indexOf(".srt") > -1 || t.indexOf(".ass") > -1 || t.indexOf(".ssa") > -1 || t.indexOf(".vtt") > -1) {
                    var s = o.current_subtitle;
                    exist(e[s]) && "all" == o.subs[s] || (e[s] = {}, e[s][0] = [], e[s][1] = []);
                    var l = [];
                    l = n.split(/\r|\n/);
                    var d = 1,
                        c = 0,
                        $ = 0,
                        p = exist(v.subshift) ? v.subshift : 0;
                    for (t.indexOf("shift=") > 0 && (p = 1 * t.substr(t.indexOf("shift=") + 6)), i = 0; i < l.length; i++) {
                        if (t.indexOf(".srt") > -1 || t.indexOf(".vtt") > -1) {
                            if (l[i].indexOf("-->") > -1 && l[i].indexOf(":") > -1) {
                                0 == (c = 1 * f(l[i].substr(0, l[i].indexOf("-->"))) + p) && (c = 1), $ = 1 * f(l[i].substr(l[i].indexOf("-->") + 4, 12)) + p, exist(e[s][0][c]) || (e[s][0][c] = "");
                                for (var _ = c; _ < $; _++) e[s][1][_] = c;
                                d++
                            } else l[i] = trim(l[i]), "" != l[i] && l[i].length > 0 && l[i] != d && "WEBVTT" != l[i] && (e[s][0][c] = (e[s][0][c] && "" != e[s][0][c] ? e[s][0][c] + "<br>" : "") + ("all" == o.subs[s] && a > 0 ? "[sub2]" : "") + l[i] + ("all" == o.subs[s] && a > 0 ? "[/sub2]" : ""))
                        }
                        if ((t.indexOf(".ass") > -1 || t.indexOf(".ssa") > -1) && l[i].indexOf("Dialogue:") > -1) {
                            c = 1 * f(l[i].substr(t.indexOf(".ssa") > -1 ? l[i].indexOf("=0") + 3 : 12, 12)) + p, $ = 1 * f(l[i].substr(t.indexOf(".ssa") > -1 ? l[i].indexOf("=0") + 14 : 23, 10)) + p;
                            var h = "";
                            l[i].indexOf("0,,") > 0 ? h = l[i].substr(l[i].indexOf("0,,") + 3) : l[i].indexOf("ffect,") > 0 && (h = l[i].substr(l[i].indexOf("ffect,") + 6)), void 0 != e[s][0][c] ? e[s][0][c] += "\n" + ("all" == o.subs[s] && a > 0 ? "[sub2]" : "") + h + ("all" == o.subs[s] && a > 0 ? "[/sub2]" : "") : e[s][0][c] = h, e[s][0][c] = e[s][0][c].replace(/{.*?}/, ""), e[s][0][c] = e[s][0][c].replace(/\\\\N/, "<br>"), e[s][0][c] = e[s][0][c].replace(/\\N/, "<br>");
                            for (var _ = c; _ < $; _++) e[s][1][_] = c
                        }
                    }
                    o.controls.SubtitleChanged(), o.actions.RenewSubtitle(), o.controls.refresh()
                } else "" != n ? 0 == n.indexOf("[") ? r(n) : u("error") : (y(), o.controls.refresh())
            }

            function f(t) {
                var e = t.split(":"),
                    n = 0;
                return 2 == e.length && e.unshift("00"), "00" != e[0] && (n += 3600 * e[0]), "00" != e[1] && (n += 60 * e[1]), n += 1 * e[2].substr(0, 2), n = 10 * n + 1 * e[2].substr(3, 1)
            }

            function p(e) {
                exist(o.current_subtitle) && (o.current_subtitle != e ? -1 == e || 1 == v.sub_off && e == t ? h() : (v.sub_shift = 0, o.current_subtitle = e, o.subtitle_on = !0, v.subtitle_start = 1, _(e), js("subtitle", o.files_subtitle[e]), o.controls.SubtitleChanged()) : 1 != v.sub_off && h())
            }

            function _(t) {
                exist(o.subs[t]) && (log("Subtitle", t), o.current_subtitle = t, exist(o.files_subtitle[t]) && (o.storage && 1 == v.sub_store ? localStorage.setItem("pljssubtitle", o.files_subtitle[t]) : o.remember_sub = o.files_subtitle[t]), "hls" == o.file_type && !0 == o.hls_subs ? o.media.hlsDashSub(t, "hls") : "dash" == o.file_type && !0 == o.dash_subs ? o.media.hlsDashSub(t, "dash") : "all" == o.subs[t] ? d(o.current_subtitle) : l(o.current_subtitle))
            }

            function h() {
                js("subtitle", "off"), o.current_subtitle = 1 == v.sub_off ? t : -1, v.subtitle_start = 0, o.subtitle_on = !1, o.controls.SubtitleChanged(), (o.hls_subs || o.dash_subs) && _(o.current_subtitle), exist(o.subtitle) && o.frame.removeChild(o.subtitle), o.subtitle = null
            }

            function g(t) {
                if (v.sub_shift && (t -= 1 * v.sub_shift), o.subtitle_on && exist(o.subs) && e) {
                    var n = o.current_subtitle;
                    if ((1 != v.subpausehide || o.play) && exist(e[n]) && exist(e[n][1])) {
                        var s = parseInt(10 * t);
                        if (exist(e[n][1][s])) {
                            var r = "";
                            r = e[n][0][e[n][1][s]], exist(o.subtitle) || (o.subtitle = createElement("div"), o.frame.appendChild(o.subtitle), m()), a && show2(o.subtitle), b(), 1 == v.sub_split2words && (r = PluginSubword(r)), 1 == v.sub_all && (r = (r = r.replace(/\[sub2\]/gm, '<span style="color:' + CheckColor(v.sub_color2) + '">')).replace(/\[\/sub2\]/gm, "</span>")), o.subtitle.innerHTML = '<span style="' + (1 == v.sub_bg ? "background-color:" + hexToRGBA(v.sub_bgcolor, v.sub_bga) + ";" : "") + "-webkit-box-decoration-break: clone;color:" + CheckColor(v.sub_color) + ";padding:" + v.sub_bgpadding + "px " + 2 * v.sub_bgpadding + "px;border-radius:" + v.sub_bgo + "px;margin:0 0;line-height:" + (v.sub_lineheight ? v.sub_lineheight : 1.8) + ";font-weight:" + v.sub_weight + '">' + trim(r) + "</span>", 1 == v.sub_big_fullscreen && (o.fullscreen ? css(o.subtitle, {
                                "font-size": v.sub_size_fullscreen + (parseInt(v.sub_sizeproc) - 100) * v.sub_size_fullscreen / 100 + "px"
                            }) : css(o.subtitle, {
                                "font-size": v.sub_size + (parseInt(v.sub_sizeproc) - 100) * v.sub_size / 100 + "px"
                            })), a = !1
                        } else !a && exist(o.subtitle) && (o.subtitle.innerHTML = "", a = !0, hide2(o.subtitle))
                    }
                }
            }

            function m() {
                o.subtitle && (css(o.subtitle, {
                    position: "absolute",
                    width: "100%",
                    "padding-left": "10%",
                    "padding-right": "10%",
                    left: 0,
                    color: v.sub_color,
                    "text-align": "center",
                    "box-sizing": "border-box"
                }), 1 == v.sub_fonted && exist(v.sub_font) && "" != v.sub_font && css(o.subtitle, {
                    "font-family": v.sub_font
                }), 1 == v.sub_shadow ? css(o.subtitle, {
                    "text-shadow": "1px 1px 2px black"
                }) : css(o.subtitle, {
                    "text-shadow": "none"
                }), 1 == v.sub_drag ? PluginMovable(o.subtitle, "o.subdrag") : css(o.subtitle, {
                    "pointer-events": "none"
                }))
            }

            function b() {
                o.subdrag || (o.controls.ToolbarHidden() || v.sub_bottom > v.toolbar.h ? css(o.subtitle, {
                    position: "absolute",
                    top: "auto",
                    left: 0,
                    bottom: 1 * v.sub_bottom
                }) : css(o.subtitle, {
                    position: "absolute",
                    top: "auto",
                    left: 0,
                    bottom: 1 * v.sub_bottom + 1 * v.toolbar.h
                }))
            }

            function y() {
                o.current_subtitle = -1, o.subtitle_on = !1, o.thumbs_on = !1, v.subtitle = null, v.thumbnails = null, o.sub = null, o.subs = null, exist(o.controls) && o.controls.SubtitleChanged(), o.files_subtitle = null, exist(o.subtitle) && (o.frame.removeChild(o.subtitle), o.subtitle = null), o.current_subtitle = null, o.subtitle_on = !1
            }
            this.start = function(t) {
                r(t)
            }, this.SubUpload = function() {
                if (o.subupld) {
                    var e = o.subupld.files;
                    if (e[0]) {
                        var a = new FileReader;
                        a.onload = function(a) {
                            var s = a.target.result;
                            n.push(s), o.current_subtitle = -1;
                            var s = e[0].name;
                            s.length > 40 && (s = e[0].name.substr(0, 15) + "..." + e[0].name.substr(-15)), 1 == v.sub_off && 1 == v.sub_off0 ? (o.subs.push("upld" + (n.length - 1)), o.files_subtitle.push(s + ""), p(o.subs.length - 1)) : (o.subs.unshift("upld" + (n.length - 1)), o.files_subtitle.unshift(s + ""), 1 == v.sub_off && t++, p(0)), o.subupld.value = ""
                        }, a.readAsText(e[0])
                    } else o.subupld.click()
                }
            }, this.SetSubtitle = function(t) {
                p(t)
            }, this.ioff = function() {
                return t
            }, this.show = function(t) {
                g(t)
            }, this.style = function() {
                m()
            }, this.remove = function() {
                y()
            }
        },
        PluginRounding = function() {
            o.oo = createElement("div");
            var t = v.rounding,
                e = [];
            e[1] = createElement("div"), e[1].innerHTML = '<svg><path d="M0,0 L' + t + ",0 Q0,0 0," + t + ' Z" fill="' + v.bgcolor + '"/></svg>', e[2] = createElement("div"), e[2].innerHTML = '<svg><path d="M0,0 L' + t + ",0 L" + t + "," + t + " Q" + t + ',0 0,0 Z" fill="' + v.bgcolor + '"/></svg>', e[3] = createElement("div"), e[3].innerHTML = '<svg><path d="M' + t + ",0 L" + t + "," + t + " L0," + t + " Q" + t + "," + t + " " + t + ',0 Z" fill="' + v.bgcolor + '"/></svg>', e[4] = createElement("div"), e[4].innerHTML = '<svg><path d="M0,0 Q0,' + t + " " + t + "," + t + " L0," + t + ' Z" fill="' + v.bgcolor + '"/></svg>', css(o.oo, {
                position: "absolute",
                top: 0,
                left: 0,
                "pointer-events": "none",
                height: "auto",
                overflow: "hidden",
                width: "100%",
                height: "100%"
            }), o.oo.style.zIndex = 2e3, css(e[1], {
                position: "absolute",
                top: 0,
                left: 0
            }), css(e[2], {
                position: "absolute",
                top: 0,
                right: 0
            }), css(e[3], {
                position: "absolute",
                bottom: 0,
                right: 0
            }), css(e[4], {
                position: "absolute",
                bottom: 0,
                left: 0
            });
            for (var n = 1; n < 5; n++) css(e[n], {
                width: t,
                height: t,
                "line-height": 0
            }), o.oo.appendChild(e[n]);
            o.container.appendChild(o.oo)
        },
        PluginPoints = function(control, points, w, style) {
            v.pointed = 1;
            var style = style,
                w = w,
                over = -1,
                pointscontrol = createElement("div");

            function Update(w) {
                if (points)
                    for (var i = 0; i < points.length; i++) pointscontrol.removeChild(points[i]);
                if (points = [], v.points) {
                    "string" == typeof v.points && (v.points = eval(v.points));
                    for (var i = 0; i < Object.keys(v.points).length; i++) exist(v.points[i].time) && (points[i] = createElement("div"), css(points[i], {
                        position: "absolute",
                        left: 0,
                        top: -style.h / 2,
                        height: style.h,
                        opacity: existv(v.points[i].opacity, style.pointa),
                        "pointer-events": "none",
                        display: "none",
                        "background-color": existv(v.points[i].color, style.pointcolor),
                        transition: "opacity 0.1s linear,transform 0.2s ease-in-out"
                    }), points[i].time = v.points[i].time, points[i].w = v.points[i].width, points[i].text = v.points[i].text, pointscontrol.appendChild(points[i]));
                    Place(w)
                }
            }

            function Place(t) {
                var e = o.media.duration();
                if ("midrolls" in o.u) {
                    if (0 != o.u.midrolls)
                        for (var n = 0; n < points.length; n++)
                            if (e > 0) {
                                var a = existv(points[n].w, style.pointw);
                                pd = a;
                                var s = points[n].time;
                                String(a).indexOf("s") > 0 ? a = (pd = 1 * a.substr(0, String(a).indexOf("s"))) / e * t : s = e / 100 * points[n].time, points[n].text && (points[n].dur = s + pd);
                                let r = t * (s / e) - t / 2;
                                css(points[n], {
                                    left: r,
                                    width: a,
                                    display: "block"
                                })
                            } else hide2(points[n])
                }
            }

            function Tip(t) {
                var e = "";
                if (overed = !1, exist(t)) {
                    for (var o = 0; o < points.length; o++) points[o].text && points[o].dur && t >= points[o].time && t < points[o].dur && (e = '<hdvbplayer style="line-height:1.2;' + (exist(v.points[o].textstyle) ? v.points[o].textstyle : "") + '">' + points[o].text.replace(/ /g, "&nbsp;") + "</hdvbplayer>", over != o && (-1 != over && css(points[over], {
                        opacity: existv(v.points[over].opacity, style.pointa),
                        transform: "scaleY(1)"
                    }), css(points[o], {
                        opacity: 1,
                        transform: "scaleY(2)"
                    }), over = o), overed = !0);
                    overed || Out()
                }
                return e
            }

            function Out() {
                over > -1 && (css(points[over], {
                    opacity: existv(v.points[over].opacity, style.pointa),
                    transform: "scaleY(1)"
                }), over = -1)
            }
            Pos0(pointscontrol), control.appendChild(pointscontrol), exist(v.points) && Update(w), this.place = function(t) {
                Place(t)
            }, this.update = function(t) {
                Update(t)
            }, this.tip = function(t) {
                return Tip(t)
            }, this.out = function() {
                Out()
            }
        },
        PluginBlock = function() {
            var t = "https://googleads.g.doubleclick.net/" + Math.random().toString(36).substring(7),
                e = t + "",
                n = {
                    method: "HEAD",
                    mode: "no-cors"
                };
            if (v.preroll && 1 != v.default_adb && (v.preroll.indexOf("//") > -1 && (t = v.preroll.substr(v.preroll.lastIndexOf("//"))), t.indexOf("[") > 0 && (t = t.substr(0, t.indexOf("["))), t != e && (n = {
                    method: "GET"
                })), exist(window.fetch) && exist(window.Request)) {
                var a = new Request(t, n);
                fetch(a).then(function(t) {
                    void 0 !== t || (o.ab = !0, o.controls && o.controls.refresh())
                }).catch(function(t) {
                    o.ab = !0, o.controls && o.controls.refresh()
                })
            }
        };

    function PluginDroplist() {
        var t, e = -1,
            n = [],
            a = [],
            s = [],
            r = [],
            l = [],
            d = 4,
            c = 0,
            u = v.playlist;
        u.dropcolor || (u.dropcolor = "ffffff"), u.dropbgcolor || (u.dropbgcolor = "ff0000");
        var $ = 1 == u.dropclrs ? u.dropcolor : u.color,
            f = 1 == u.dropclrs ? u.dropbgcolor : u.bgcolor;
        pushCSS(".pjspl" + v.id + "scroll::-webkit-scrollbar {width: " + parseFloat(.3 * existv(u.dropscrlw, 1)) + "rem;}.pjspl" + v.id + "scroll::-webkit-scrollbar-track {background:" + hex2rgb(u.bgcolor, u.bga) + "}.pjspl" + v.id + "scroll::-webkit-scrollbar-thumb {background:#" + u.valuecolor + "}"), u.arrowsize = 4;
        var p = "<svg width='" + (2 * u.arrowsize + 2) + "' height='" + (1.2 * u.arrowsize + 1) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='pointer-events:none;transition:transform 0.2s ease-out;position: absolute;bottom: 50%;margin-bottom:-" + (1.2 * u.arrowsize + 2) / 2 + "px;right:" + (u.paddingright / 2 + u.arrowsize / 2) + "px'><g><line x1='1' y1='1' x2='" + (u.arrowsize + 1) + "' y2='" + 1.2 * u.arrowsize + "' stroke='#" + $ + "' stroke-width='1' stroke-linecap='round'/><line x1='" + (u.arrowsize + 1) + "' y1='" + 1.2 * u.arrowsize + "' x2='" + (2 * u.arrowsize + 1) + "' y2='1' stroke='#" + $ + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        if (o.playlist_dic) {
            for (var _ = 0; _ < d; _++) {
                n[_] = createElement("div"), createElement("div"), css(n[_], {
                    position: "absolute",
                    top: u.margintop,
                    color: u.color,
                    overflow: "hidden",
                    "font-family": checkFont(u.font),
                    "border-radius": u.rounding + "px",
                    zIndex: 1e3
                }), o.frame.appendChild(n[_]), a[_] = createElement("div");
                var h = u.headfontsize;
                u.dropfontsize > 0 && (h = u.dropfontsize, u.dropsmallfontsize > 0 && o.small && (h = u.dropsmallfontsize)), css(a[_], {
                    display: "block",
                    "font-size": h * existv(v.globalfs, 1)
                }), n[_].appendChild(a[_]), s[_] = createElement("div"), css(s[_], {
                    display: "block",
                    transition: "height 0.1s ease-out",
                    "font-size": u.fontsize * existv(v.globalfs, 1)
                }), s[_].classList.add("pjspl" + v.id + "scroll"), s[_].addEventListener("wheel", T, {
                    passive: !1
                }), n[_].appendChild(s[_])
            }
            0 == o.plopenid && (o.plopenid = o.plid), g(), I(0)
        }

        function g() {
            for (var t = 0; t < d; t++) s[t].innerHTML = "", a[t].innerHTML = "";
            var e = o.playlist_dic[o.plopenid];
            b(m(e, 0), 0), b(m(e, 1), 1), b(m(e, 2), 2), b(m(e, 3), 3), E()
        }

        function m(t, e) {
            for (var n = 0; n < e; n++) {
                if ("" == t.pjs_parent) {
                    t = -1;
                    break
                } - 1 != o.playlist_dic[t.pjs_parent].pjs_parent && (t = o.playlist_dic[t.pjs_parent])
            }
            return t
        }

        function b(t, e) {
            if (t) {
                if (-1 == t) hide2(n[e]);
                else {
                    show2(n[e]);
                    var d = [];
                    for (var c in d.push(t), o.playlist_dic) o.playlist_dic.hasOwnProperty(c) && o.playlist_dic[c].pjs_parent == t.pjs_parent && d.push(o.playlist_dic[c]);
                    var _ = y(o.plid);
                    o.p.translator = parseInt(o.playlist_dic[o.plid].translator);
                    for (var h = 0; h < d.length; h++) {
                        var g = createElement("div");
                        css(g, {
                            display: "block",
                            position: "relative",
                            cursor: "pointer",
                            padding: "5px 10px",
                            transition: "color 0.1s ease-out,background 0.2s ease-out",
                            "padding-top": u.paddingtop,
                            "padding-bottom": u.paddingbottom,
                            "padding-left": u.paddingleft,
                            "padding-right": u.paddingright + (o.screen_w > 400 ? 3 * u.arrowsize : 0)
                        }), 0 == h ? css(g, {
                            color: $,
                            "background-color": hex2rgb(f, u.bga)
                        }) : css(g, {
                            color: u.color,
                            "background-color": hex2rgb(u.bgcolor, u.bga)
                        }), h > 1 && 1 == u.borderbottom && css(g, {
                            "border-top": "1px solid " + hex2rgb(u.bordercolor, .5)
                        }), _.indexOf(d[h].id) > -1 && h > 0 && (css(g, {
                            color: u.valuecolor
                        }), 1 == u.playbgcolored && exist(u.playbgcolor) && css(g, {
                            backgroundColor: u.playbgcolor
                        })), g.innerHTML = d[h].title + (0 == h && o.screen_w > 400 ? p : ""), g.setAttribute("me", (0 == h ? "head_" : "") + d[h].id), 0 == h ? (_.indexOf(d[h].id) > -1 || e > 0 ? r[e] = d[h].id : g.innerHTML = "..." + p, a[e].appendChild(g)) : (o.plhistory[d[h].id] && d[h].id != o.plid && q(g), s[e].appendChild(g))
                    }
                    css(s[e], {
                        height: "auto"
                    }), l[e] = s[e].offsetHeight, css(s[e], {
                        height: 0
                    }), n[e].addEventListener("click", w), n[e].addEventListener("mouseover", S), n[e].addEventListener("mouseout", C)
                }
            }
        }

        function y(t) {
            var e = o.playlist_dic[t],
                n = [];
            if (e)
                for (var a = 0; a < d; a++) n.push(e.id), "" != e.pjs_parent && (e = o.playlist_dic[e.pjs_parent]);
            return n
        }

        function w(t) {
            var s = t.target;
            "HDVBPLAYER" != s.tagName && (s = s.parentNode), "HDVBPLAYER" != s.tagName && (s = s.parentNode);
            var l = s.parentNode.parentNode,
                d = s.getAttribute("me");
            if (d) {
                if (0 == d.indexOf("head_")) {
                    var c = -1;
                    l == n[0] && (c = 0), l == n[1] && (c = 1), l == n[2] && (c = 2), L(), c > -1 && (e != c ? O(c) : e = -1)
                } else {
                    if (show2(a[e]), r[e] == d) {
                        if (L(), e > 0) {
                            O(e - 1);
                            return
                        }
                        e = -1
                    } else r[e] = d;
                    o.playlist_dic[d].folder ? (o.controls.PlaylistPlayId(d), L(), e = -1, k()) : (L(), e = -1, api("play", "id:" + d))
                }
            }
        }

        function k() {
            for (var t in o.playlist_dic)
                if (o.playlist_dic.hasOwnProperty(t) && o.playlist_dic[o.plopenid] && o.playlist_dic[t].pjs_parent == o.playlist_dic[o.plopenid].id) {
                    if (o.plopenid = o.playlist_dic[t].id, g(), o.playlist_dic[t].folder) s[0].childNodes.length < 2 ? k() : O(0);
                    else if (1 == u.dropautoplay) {
                        var e = s[0].childNodes[0].getAttribute("me");
                        e && api("play", "id:" + e)
                    } else O(0);
                    break
                }
        }

        function O(t) {
            css(s[t], {
                height: l[t]
            }), css(s[t], {
                "border-top": "1px solid #" + u.headbordercolor
            }), css(a[t].childNodes[0], {
                "background-color": hex2rgb(f, 1)
            }), css(a[t].getElementsByTagName("svg")[0], {
                transform: "scale(-1, -1)"
            }), e = t
        }

        function L() {
            e > -1 && (css(s[e], {
                height: 0
            }), css(s[e], {
                "border-top": "none"
            }), css(a[e].childNodes[0], {
                "background-color": hex2rgb(f, u.bga)
            }), css(a[e].getElementsByTagName("svg")[0], {
                transform: "scale(1, 1)"
            }))
        }

        function S(t) {
            var n = t.target,
                a = n.getAttribute("me");
            y(o.plid), a && (-1 == e || 0 == a.indexOf("head") ? css(n, {
                "background-color": hex2rgb(f, 1)
            }) : 1 == u.playbgcolored && exist(u.playbgcolor) && a == r[e] || css(n, {
                "background-color": hex2rgb(u.bgcolorover, u.bgaover > -1 ? u.bgaover : u.bga)
            }))
        }

        function C(t) {
            var a = t.target,
                s = a.getAttribute("me");
            if (y(o.plid), s) {
                if (-1 == e || 0 == s.indexOf("head_")) {
                    var l = t.target.parentNode.parentNode,
                        d = -1;
                    l == n[0] && (d = 0), l == n[1] && (d = 1), l == n[2] && (d = 2), css(a, {
                        "background-color": hex2rgb(f, e == d ? 1 : u.bga)
                    })
                } else o.plhistory[s] && s != o.plid && q(a), 1 == u.playbgcolored && exist(u.playbgcolor) && s == r[e] || css(a, {
                    "background-color": hex2rgb(u.bgcolor, u.bga)
                })
            }
        }

        function T(t) {}

        function E() {
            if (isVisible(n[0])) {
                for (var t = 0, e = 0; e < a.length; e++) a[e].offsetHeight > t && (t = a[e].offsetHeight);
                if (c = o.screen_h - t - (o.screen_h > 200 ? v.toolbar.h + (o.screen_h > 400 ? 60 : 30) : 0), t > 0 && (c = Math.round(c / t) * t + (1 == u.borderbottom ? Math.round(c / t) : 0) - (o.screen_h <= 200 ? 5 : 0)), c > 0)
                    for (var e = 0; e < d; e++) s[e].scrollHeight > c ? css(s[e], {
                        "overflow-y": "scroll",
                        "margin-right": 0,
                        "max-height": c
                    }) : css(s[e], {
                        overflow: "hidden",
                        "max-height": "none"
                    }), v.playlist.position.indexOf("right") > -1 ? css(n[e], {
                        right: u.marginright + A(e)
                    }) : (css(n[e], {
                        left: u.marginleft
                    }), e > 0 && css(n[e - 1], {
                        left: u.marginleft + P(e)
                    }))
            }
        }

        function P(t) {
            for (var e = 0, a = d - 1; a >= t; a--) e += n[a].offsetWidth + (n[a].offsetWidth > 0 ? u.marginright : 0);
            return e
        }

        function A(t) {
            for (var e = 0, a = 0; a < t; a++) e += n[a].offsetWidth + (n[a].offsetWidth > 0 ? u.marginright : 0);
            return e
        }

        function I(t) {
            for (var e = 0; e < d; e++) 1 == t ? show2(n[e]) : hide2(n[e])
        }

        function z(t) {
            return !!(t > -1) && !!(s[t].scrollHeight > c)
        }

        function q(t) {
            css(t, {
                color: u.historycolor
            }), 1 == u.historytitlestrike && css(t, {
                "text-decoration": "line-through"
            }), u.historytitlea > -1 && css(t, {
                opacity: u.historytitlea
            }), css(t, {
                backgroundColor: hex2rgb(u.historybgcolor, u.historybga > -1 ? u.historybga : u.bga)
            })
        }
        this.OpenScroll = function() {
            return z(e)
        }, this.Hide = function() {
            I(0)
        }, this.Show = function() {
            I(1)
        }, this.Visible = function() {
            return e > -1
        }, this.Update = function() {
            if (0 != o.plopenid) {
                var t = 0;
                isVisible(n[0]) || (t = 1), g(), t && I(0)
            }
        }, this.Resize = function() {
            clearTimeout(t), t = setTimeout(E, 500)
        }, this.Close = function() {
            L(), e = -1
        }, this.Remove = function() {
            for (var t = 0; t < d; t++) n[t].removeEventListener("click", w), n[t].removeEventListener("mouseover", S), n[t].removeEventListener("mouseout", C), s[t].removeEventListener("wheel", T), o.frame.removeChild(n[t]), o.droplist = void 0
        }
    }
    var PluginHotIcon = function(t, e) {
            var n, a = 2;

            function s() {
                n && (css(n, {
                    transform: "scale(" + 2 * a + ")",
                    opacity: 0
                }), setTimeout(r, 500))
            }

            function r() {
                n && (o.frame.removeChild(n), n = null)
            }
            o.screen_w > 500 && (a = 4), o.screen_w > 1e3 && (a = 5), 1 == v.hotkey[t + "icon"] && (v.hotkey[t + e + "icon"] || "volume" == t) && ("" != v.hotkey[t + e + "icon"] || "volume" == t) && (n = createElement("div"), css(n, {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "scale(" + a + ")",
                transition: "opacity .3s linear, transform .3s linear"
            }), o.frame.appendChild(n), n.innerHTML = "volume" == t ? (o.muted ? 0 : Math.round(100 * v.volume)) + "%" : v.hotkey[t + e + "icon"], css(n, {
                marginTop: "-" + n.offsetHeight / 2 + "px",
                marginLeft: "-" + n.offsetWidth / 2 + "px"
            }), SvgColor(n, "#ffffff"), setTimeout(s, 50))
        },
        PluginHdIcon = function(t, e, n) {
            var a, s = createElement("div");
            t.appendChild(s), css(s, {
                position: "absolute",
                top: -e.offsetHeight / 2 - 1,
                "background-color": "#f00",
                "border-radius_": 1,
                display: "none",
                pointerEvents: "none"
            }), 1 == n.hdicon2 && n.hdiconlist ? (a = n.hdiconlist.split(","), css(s, {
                "font-size": 8,
                color: "#fff",
                padding: "2px 2px 0 2px",
                "line-height": "1"
            })) : (n.hdicon2 = 0, css(s, {
                height: 9,
                width: 13,
                "background-image": "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMgOSIgd2lkdGg9IjEwMCUiPjxwYXRoIGQ9Ik01LDcgTDYsNyBMNiw4IEw1LDggTDUsNyBaIE0xMCwzIEwxMCw0IEw4LDQgTDgsMyBMMTAsMyBaIE0zLDYgTDMsNSBMNSw1IEw1LDYgTDMsNiBaIE0yLDcgTDMsNyBMMyw4IEwyLDggTDIsNyBaIE03LDcgTDEwLDcgTDEwLDggTDcsOCBMNyw3IFogTTEwLDYgTDExLDYgTDExLDcgTDEwLDcgTDEwLDYgWiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjY0NzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48cGF0aCBkPSJNNSw3IEw1LDYgTDUsNSBMMyw1IEwzLDYgTDMsNyBMMiw3IEwyLDIgTDMsMiBMMyw0IEw1LDQgTDUsMiBMNiwyIEw2LDcgTDUsNyBaIE0xMSw2IEwxMCw2IEwxMCw3IEw3LDcgTDcsMiBMMTAsMiBMMTAsMyBMMTEsMyBMMTEsNiBaIE0xMCw0IEwxMCwzIEw4LDMgTDgsNCBMOCw2IEwxMCw2IEwxMCw0IFoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)"
            })), this.toggle = function() {
                var t, r = 0,
                    l = o.media.getQuality();
                (l = l.replace(Lang("auto") + " ", "")) && (1 != n.hdicon2 && ("HD" == l || l.indexOf(" HD") > 0 || 0 == l.indexOf("hd") || 0 == l.indexOf("Hd")) && (l = "720"), l.indexOf(" ") > 0 && (l = l.substr(0, l.indexOf(" "))), r = parseInt(l));
                var d = "-1";
                if (1 == n.hdicon2) {
                    d = "";
                    for (var c = 0; c < a.length; c++) {
                        var u = a[c].split(":");
                        2 == u.length && trim(u[0]) == r && (d = trim(u[1]))
                    }
                    "" == d ? r > 700 && (t = !0, s.innerHTML = "HD") : (t = !0, s.innerHTML = d)
                } else r > 700 && (t = !0);
                t ? (show2(s), e.offsetWidth - s.offsetWidth > 0 && css(s, {
                    left: (e.offsetWidth - s.offsetWidth) / 2 - 2
                })) : hide2(s)
            }
        },
        PluginSettings2 = function() {
            var t, e, n, a, s, r, l, d, c, u = [];
            for (var $ in v.settings) v.settings.hasOwnProperty($) && $.indexOf("combined") > -1 && (u[$.substr(8)] = v.settings[$]);
            exist(u.bottom) || (u.bottom = 30), exist(u.right) || (u.right = 50), u.color = "#" + (u.color ? u.color : "fff"), u.bgcolor = "#" + (u.bgcolor ? u.bgcolor : "333"), exist(u.round) || (u.round = 0), exist(u.size) || (u.size = 80), exist(u.titlesize) || (u.titlesize = 100), u.padding = exist(u.padding) ? MarPad(u.padding) : 0, u.margin = exist(u.margin) ? MarPad(u.margin) : 0;
            var f = '<pjsdiv style="display:inline-block;width:20px"></pjsdiv>',
                p = '<pjsdiv style="display:inline-block;width:20px"><svg width="16px" height="6px" viewBox="-1 -1 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="' + u.color + '" stroke-width="1" stroke-linecap="square" fill="none" points="0 2 2 4 5.5 0"></polyline></svg></pjsdiv>';

            function _($, w) {
                l = $, t ? t.innerHTML = "" : (t = createElement("div"), o.frame.appendChild(t), css(t, {
                    position: "absolute",
                    bottom: u.bottom + "px",
                    right: u.right + "px",
                    background: u.bgcolor,
                    "border-radius": u.round,
                    padding: u.padding,
                    "white-space": "nowrap"
                }), t.style.zIndex = 99999, t.addEventListener("mouseover", m, !0), t.addEventListener("mouseout", b, !0)), e = [], items = [], n = [];
                for (var k = $.substr(9).split(","), O = "right", L = ["right", "left", "center"], S = u.right, C = 0; C < k.length; C++) {
                    var T = copyObject(o["files_" + k[C]]),
                        E = o["current_" + k[C]];
                    if ("share" == k[C] && o.share) {
                        T = [], c = [];
                        for (var P = 1; P <= 16; P++) exist(v["share" + P]) && (T.push(Lang(v["share" + P])), c[T.length] = v["share" + P])
                    }
                    if (T) {
                        if (T.length > 1) {
                            e[C] = createElement("div"), t.appendChild(e[C]), css(e[C], {
                                display: "inline-block",
                                "padding-top": 0,
                                "padding-bottom": 7
                            }), 1 != u.notitle && (n[C] = createElement("div"), e[C].appendChild(n[C]), css(n[C], {
                                "pointer-events": "none",
                                display: "block",
                                "padding-left": 7,
                                "padding-top": 10,
                                "padding-bottom": 10,
                                "padding-right": 27,
                                color: u.color,
                                "font-size": u.titlesize + "%"
                            }), n[C].innerHTML = f + "<b>" + Lang(k[C]) + "</b>"), items[C] = [], "subtitle" != k[C] || o.hls_subs || o.dash_subs || (T.push(Lang("options")), a = T.length), "subtitle" == k[C] && 1 == v.sub_upload && !o.system.tv && o.sbt && exist(window.FileReader) && (T.push("<input type='file' id='" + v.id + "_subfile2' accept='.vtt,.ass,.srt' style='display:none'/>" + Lang("upload")), s = T.length);
                            var A = createElement("div");
                            e[C].appendChild(A), css(A, {
                                float: "left"
                            });
                            for (var I = 1, z = 0, P = 0; P < T.length; P++) {
                                if (T[P]) {
                                    var q = !0;
                                    if ("subtitle" != k[C] || T[P] != Lang("off") || o.subtitle_on || (H = !0), "quality" == k[C] && (T[P] == Lang("auto") && o.media.autoQuality() && (H = !0), exist(v.forbidden_quality)))
                                        for (var V = v.forbidden_quality.split(","), M = 0; M < V.length; M++) T[P].indexOf(V[M]) > -1 && (q = !1);
                                    if (q) {
                                        items[C][P] = createElement("div"), css(items[C][P], {
                                            display: "block",
                                            margin: u.margin,
                                            padding: 7,
                                            "padding-right": 27,
                                            "font-size": u.size + "%",
                                            opacity: .7,
                                            transition: "opacity 0.1s linear,background 0.1s linear",
                                            cursor: "pointer"
                                        });
                                        var H = !1;
                                        "speed" == k[C] && 1 == T[P] && 1 != u.speed1 && (T[P] = Lang("normal")), P == E || H ? (css(items[C][P], {
                                            opacity: 1
                                        }), items[C][P].innerHTML = '<pjsdiv style="pointer-events:none;color:' + u.color + '">' + p + T[P] + "</pjsdiv>", attr(items[C][P], {
                                            yes: 1
                                        })) : items[C][P].innerHTML = '<pjsdiv style="pointer-events:none;color:' + u.color + '">' + f + T[P] + "</pjsdiv>", attr(items[C][P], {
                                            is: k[C] + "," + P
                                        }), "quality" == k[C] && P > 0 ? A.insertBefore(items[C][P], items[C][P - 1]) : A.appendChild(items[C][P]), items[C][P].addEventListener("mouseover", h, !0), items[C][P].addEventListener("mouseout", g, !0), items[C][P].addEventListener("click", y, !0)
                                    }
                                }
                                e[C].offsetHeight > o.screen_h - u.bottom && (P == I * z + 1 || 1 == I) && (w && T.length - P > 1 ? css(A, {
                                    height: o.screen_h - u.bottom - 40,
                                    "overflow-y": "auto"
                                }) : (0 == z && (z = P), A = createElement("div"), e[C].appendChild(A), css(A, {
                                    float: "left"
                                })), I++)
                            }
                        }
                    } else
                        for (var D = 0; D < L.length; D++) k[C].indexOf(L[D]) > -1 && (O = L[D], k[C].indexOf(":") > -1 && (S = 1 * k[C].substr(k[C].indexOf(":") + 1)))
                }
                if (o.screen_w < t.scrollWidth && !w) {
                    _($, !0);
                    return
                }
                "left" == O && css(t, {
                    right: "auto",
                    left: S + "px",
                    "margin-left": 0
                }), "center" == O && css(t, {
                    right: "auto",
                    left: "50%",
                    "margin-left": -t.offsetWidth / 2 + "px"
                }), "right" == O && css(t, {
                    left: "auto",
                    right: S + "px",
                    "margin-left": 0
                }), s > 0 && !r && (o.subupld = document.getElementById(v.id + "_subfile2"), o.subupld.onchange = o.sbt.SubUpload, r = !0), d = !0
            }

            function h(t) {
                (x = t.target) && (css(x, {
                    background: hex2rgb(u.color, .2),
                    opacity: 1
                }), m())
            }

            function g(t) {
                (x = t.target) && (css(x, {
                    background: "none"
                }), 1 != x.getAttribute("yes") && css(x, {
                    opacity: .7
                }), b())
            }

            function m() {
                o.controlover = !0, clearTimeout(o.settingsovertimer)
            }

            function b() {
                clearTimeout(o.settingsovertimer), o.settingsovertimer = setTimeout(w, v.settings.showoverto > 0 ? 1e3 * v.settings.showoverto : o.system.tv ? 2e3 : 1e3)
            }

            function y(t) {
                if (x = t.target) {
                    var e = x.getAttribute("is");
                    if (e) {
                        var n = e.split(",");
                        if (2 == n.length) {
                            if ("subtitle" == n[0] && o.sbt) {
                                if (n[1] == s - 1) {
                                    o.sbt.SubUpload();
                                    return
                                }
                                if (n[1] == a - 1) {
                                    o.controls.SubOpt();
                                    return
                                }
                                o.sbt.SetSubtitle(n[1])
                            }
                            "quality" == n[0] && o.actions.SetQuality(n[1]), "speed" == n[0] && o.actions.SetSpeed(n[1]), "audiotrack" == n[0] && o.actions.SetAudioTrack(n[1]), "share" == n[0] && o.share && o.share.api(c[1 * n[1] + 1]), "scale" == n[0] && (0 == n[1] && o.media.scale(v.settings.scale / 100), 1 == n[1] && o.media.scale("-" + v.settings.scale / 100), 2 == n[1] && o.media.normalscale())
                        }
                    }
                }
                _(l)
            }

            function w() {
                if (d) {
                    if (items) {
                        for (var e = 0; e < items.length; e++)
                            if (items[e])
                                for (var n = 0; n < items[e].length; n++) items[e][n] && (items[e][n].removeEventListener("mouseover", h), items[e][n].removeEventListener("mouseout", g), items[e][n].removeEventListener("click", y))
                    }
                    t.innerHTML = "", o.controlover = !1, d = !1
                }
            }
            this.show = function(t) {
                _(t)
            }, this.toggle = function(t) {
                d ? w() : _(t)
            }, this.hide = function() {
                w()
            }, this.update = function() {
                d && _(l)
            }
        },
        PluginEffects = function() {
            function t(t) {
                "resize" == t && 1 == v.effectsnow && o.effectsnow && o.effectsnow.resize(), "hide" != t || 1 != v.effectflip || o.fullscreen || (o.mediacontainer.style.transform = "scale(1, -1)"), "snow" == t && 1 == v.effectsnow && (o.effectsnow || (o.effectsnow = new PluginSnow), o.effectsnow && o.effectsnow.start()), "stopsnow" == t && 1 == v.effectsnow && o.effectsnow && o.effectsnow.stop(), "play" == t && (o.tagvideo && css(o.media.tag(), {
                    filter: "none"
                }), 1 != v.effectnozoom && o.media.normalscale()), "pause" != t || (o.tagvideo && (1 == v.effectgray && 1 == v.effectblur ? (css(o.media.tag(), {
                    filter: "blur(5px) grayscale(100%)"
                }), 1 != v.effectnozoom && o.media.scale(.1)) : (1 == v.effectgray && (css(o.media.tag(), {
                    filter: "grayscale(100%)"
                }), 1 != v.effectnozoom && o.media.scale(.1)), 1 == v.effectblur && (css(o.media.tag(), {
                    filter: "blur(5px)"
                }), 1 != v.effectnozoom && o.media.scale(.1)))), 1 != v.effectflip || o.fullscreen || (o.frame.style.transform = "scale(1, 1)", o.mediacontainer.style.transform = "scale(1, 1)")), "full" == t && 1 == v.effectflip && (o.frame.style.transform = "scale(1, 1)", o.mediacontainer.style.transform = "scale(1, 1)")
            }
            1 != v.effectsnowonbut && 1 == v.effectsnow && t("snow"), this.api = function(e) {
                1 == v.effectnoandroid && o.system.android || t(e)
            }
        };
    o.lang_ru = {
        auto: "Авто",
        play: "Пуск",
        pause: "Пауза",
        stop: "Стоп",
        fullscreen: "Во весь экран",
        normalscreen: "Выйти из полноэкранного режима",
        settings: "Настройки",
        options: "Параметры",
        volume: "Громкость",
        mute: "Выключить звук",
        unmute: "Включить звук",
        live: "В ЭФИРЕ",
        playlist: "Плейлист",
        quality: "Качество",
        download: "Скачать",
        subtitle: "Субтитры",
        speed: "Скорость",
        normal: "Обычная",
        error: "ошибка",
        unmute_video: "Включите звук",
        audiotrack: "Аудио",
        loading_error: "ошибка загрузки",
        "160p": "Очень низкое",
        "240p": "Низкое",
        "360p": "Среднее",
        "480p": "Высокое",
        "540p": "Высокое",
        next: "Следующий",
        prev: "Предыдущий",
        share: "Поделиться",
        copied: "Скопировано в буфер обмена",
        ads: "Реклама",
        skip: "Пропустить",
        skip_after_: "Пропустить через ",
        adsinvitation: "Перейти на сайт рекламодателя",
        sub_sizeproc: "Размер текста",
        sub_shift: "Сдвиг по времени",
        sub_color: "Цвет текста",
        sub_color2: "Цвет текста 2",
        sub_bgcolor: "Цвет фона",
        sub_bga: "Прозрачность фона",
        sub_shadow: "Тень",
        sub_weight: "Толщина текста",
        sub_bottom: "Отступ снизу",
        sub_reset: "Сбросить",
        upload: "Загрузить",
        sleeptimer: "Сон",
        offsettimer: "Пропуск",
        hour: "Час",
        minute: "Минута",
        second: "Секунда",
        "1val": "Да",
        "0val": "Нет",
        of: "из",
        pass: "Пароль",
        casterror: "Ошибка воспроизведения на устройстве",
        castdevice: "Играет на устройстве",
        channel: "Канал",
        scale: "Масштаб",
        on: "Вкл.",
        off: "Выкл.",
        together: "Все сразу",
        kbps: "кбит/с",
        embed: "Код",
        url: "Ссылка",
        color: "Цвет",
        contrast: "Контраст",
        brightness: "Яркость",
        saturate: "Насышенность",
        sepia: "Сепия"
    };
    var Motion = function(t) {
            var e, n, a, s, r, l, d, c = 0,
                u = !1;
            if (void 0 != t.me && void 0 != t.mc && void 0 != t.type && void 0 != t.to) {
                null == t.time && (t.type.indexOf("alpha") > -1 ? 0 == t.to ? t.time = .5 : t.time = .2 : t.time = .15), e = h(t.ease), -1 == t.type.indexOf("scale") && (exist(o.motions[t.me]) && o.motions[t.me].TheEnd(), o.motions[t.me] = this), 1 == t.show && t.mc.set("display", !0), n = t.type.split("|"), s = String(t.to).split("|"), a = [];
                for (var $ = 0; $ < n.length; $++) s[$] || (s[$] = s[0]), "alpha" == n[$] && (a[$] = t.mc.g("opacity")), "alpha_div" == n[$] && (a[$] = t.mc.style.opacity), "y" == n[$] && (a[$] = t.mc.g("y")), "x" == n[$] && (a[$] = t.mc.g("x")), "left" == n[$] && (a[$] = parseInt(t.mc.style.left)), "scale" == n[$] && (a[$] = t.mc.g("scaleX")), "scroll" == n[$] && (a[$] = t.mc.scrollTop), "scrollleft" == n[$] && (a[$] = t.mc.scrollLeft), "scaleY" == n[$] && (a[$] = t.mc.g("scaleY")), "scaleX" == n[$] && (a[$] = t.mc.g("scaleX")), "width" == n[$] && (a[$] = t.mc.g("width")), "width_div" == n[$] && (a[$] = t.mc.offsetWidth, s[$] = Math.floor(s[$]), "line_play" == t.me && log("width", t.me, a[$], s[$], t.mc.offsetWidth)), "height" == n[$] && (a[$] = t.mc.g("height")), "height_div" == n[$] && (a[$] = t.mc.offsetHeight), s[$] = Number(s[$]), a[$] = Number(a[$]);
                l = 1e3 * t.time / e.length, r = e.length, 1 == n.length && a[0] == s[0] ? p() : setTimeout(f, Math.round(l))
            }

            function f() {
                for (var $ = 0; $ < n.length; $++) {
                    var h = a[$] + (s[$] - a[$]) * (e[c] ? e[c] : 0);
                    _(n[$], h), "y" == n[$] && t.mc.set("top", h), "x" == n[$] && t.mc.set("left", h), "left" == n[$] && (t.mc.style.left = h + "px"), "scale" == n[$] && t.mc.set("scale", h), "scaleY" == n[$] && t.mc.set("scaleY", h), "scaleX" == n[$] && t.mc.set("scaleX", h), "scroll" == n[$] && (t.mc.scrollTop = h), "scrollleft" == n[$] && (t.mc.scrollLeft = h), "width" == n[$] && t.mc.set("width", h), "width_div" == n[$] && css(t.mc, {
                        width: h
                    }), "height" == n[$] && t.mc.set("height", h), "height_div" == n[$] && css(t.mc, {
                        height: h
                    })
                }
                c++, u || (c == r ? p() : d = setTimeout(f, Math.round(l)))
            }

            function p() {
                u = !0, t.hide && ("alpha_div" == n[0] || "left" == n[0] ? hide(t.mc) : t.mc.set("display", !1)), -1 == t.type.indexOf("scale") && (o.motions[t.me] = null, delete o.motions[t.me]);
                for (var e = 0; e < n.length; e++) _(n[e], s[e]);
                clearTimeout(d)
            }

            function _(e, n) {
                "alpha" == e && t.mc.set("opacity", n), "alpha_div" == e && (t.mc.style.opacity = n)
            }

            function h(t) {
                switch (t) {
                    case "elastic":
                        return [0, .432, .857, 1.275, 1.372, 1.296, 1.102, .957, .883, .87, .914, .992, 1.029, 1.041, 1.036, 1.019, .996, .984, .981, .988, 1.001, 1.006, 1.007, 1.006, 1.003, .999, .998, .998, .998, .998, 1];
                    case "cubic":
                        return [0, .096, .185, .267, .344, .416, .483, .547, .606, .659, .705, .747, .785, .818, .848, .874, .897, .918, .935, .95, .962, .971, .979, .985, .99, .994, .997, .999, 1];
                    case "back":
                        return [0, .146, .28, .403, .513, .613, .702, .78, .848, .907, .956, .997, 1.029, 1.055, 1.072, 1.084, 1.092, 1.095, 1.095, 1.093, 1.088, 1.081, 1.072, 1.06, 1.046, 1.033, 1.023, 1.014, 1.007, 1.003];
                    default:
                        return [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                }
            }
            this.TheEnd = function() {
                p()
            }, this.TheEnd2 = function() {
                c = r - 1, f(), p()
            }, this.XY = function(t, e, a, s) {
                for (var r = !1, l = 0; l < n.length; l++) "x" == n[l] && t != e && (r = !0), "y" == n[l] && a != s && (r = !0);
                r && p()
            }
        },
        System = function() {
            var t, e = navigator.appName,
                n = navigator.userAgent,
                a = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
                a = n.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);
            a && null != (t = n.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]);
            var s = navigator.maxTouchPoints;
            this.browser = a ? a[1] : e, this.version = a ? a[2] : navigator.appVersion, this.touch = navigator.maxTouchPoints > 1, this.opera = "Opera" == this.browser, this.ie9 = "MSIE 9.0" == this.browser, this.ie = "MSIE" == this.browser || "Trident" == this.browser || "Edge" == this.browser, this.edge = n.search(/(edge)\/?\s*/i) > -1, this.firefox = "Firefox" == this.browser, this.safari = "Safari" == this.browser, this.chrome = window.chrome, this.win = n.search("Windows NT") > -1, this.ios = n.search(/(iphone|ipad|ipod)\/?\s*/i) > -1 || "MacIntel" === navigator.platform && s > 1, this.tv = 1 != v.notv && n.search(/(TV|tvOS|webOS|armv|BRAVIA|Roku|Tizen|Philips)\/?\s*/i) > -1, this.lg = 1 != v.notv && n.search(/(LG)\/?\s*/i) > -1, this.iphone = n.search(/(iphone)\/?\s*/i) > -1, this.ipad = this.ios && !this.iphone, this.webkit = "WebkitAppearance" in document.documentElement.style, n.search(/(android)\/?\s*/i) > -1 && (s > 0 ? this.android = !0 : this.tv = !0, matchMedia("(pointer:fine)").matches && (this.tv = !0)), this.mobile = (this.ios || this.android || n.search(/(blackberry|iemobile|opera mini)\/?\s*/i) > -1) && !this.tv, this.mutedautoplay = this.safari || this.chrome, this.fullscreen = !1, this.ios && (this.iosv = parseFloat(n.substr(n.indexOf("OS ") + 3, 4).replace("_", ".")), this.ipad && (!1 in window || s < 2) && (this.mobile = this.ios = !1, this.tv = !0)), this.desktop = !this.mobile, this.mobiletv = this.mobile || this.tv, (o.frame.requestFullScreen || o.frame.requestFullscreen || o.frame.mozRequestFullScreen || o.frame.webkitRequestFullScreen || o.frame.msRequestFullscreen) && (this.fullscreen = !0)
        };

    function UpdateObject(t, e) {
        for (var o in e)
            if ("object" == typeof e[o]) {
                if ("events" == o || "file" == o) t[o] = e[o];
                else
                    for (var n in e[o])
                        if ("object" != typeof t[o] && (t[o] = {}), "object" == typeof e[o][n])
                            for (var a in e[o][n])
                                if ("object" != typeof t[o][n] && (t[o][n] = {}), "object" == typeof e[o][n][a])
                                    for (var s in e[o][n][a]) "object" != typeof t[o][n][a] && (t[o][n][a] = {}), t[o][n][a][s] = e[o][n][a][s], ("padding" == a || "margin" == a) && (t[o][n][a][s] = parseInt(t[o][n][a][s]));
                                else t[o][n][a] = e[o][n][a], ("padding" == n || "margin" == n) && (t[o][n][a] = parseInt(t[o][n][a]));
                else t[o][n] = e[o][n], ("padding" == o || "margin" == o) && (t[o][n] = parseInt(t[o][n]))
            } else o.indexOf("roll") > 0 && "" === trim(e[o]) || (t[o] = SettingsParser(o, e[o]));
        return t
    }
    var SettingsParser = function(t, e) {
        return "string" == typeof e && (e = trim(e), t.indexOf("color") > -1 && -1 != e && (e = CheckColor(e))), e
    };

    function hexToRGBA(t, e) {
        return "rgba(" + (t = t.replace("#", "")).match(RegExp("(.{" + t.length / 3 + "})", "g")).map(function(e) {
            return parseInt(t.length % 2 ? e + e : e, 16)
        }).concat(e || 1).join(",") + ")"
    }

    function StorageSupport() {
        try {
            var t = window.localStorage,
                e = "__storage_test__";
            return t.setItem(e, e), t.removeItem(e), !0
        } catch (o) {
            return !1
        }
    }

    function killMotion(t) {
        t && exist(o.motions[t]) && o.motions[t].TheEnd()
    }
    var Lang = function(t) {
        var e = t;
        e && (e = t.charAt(0).toUpperCase() + t.slice(1)).indexOf("_") > -1 && (e = e.replace(/_/ig, " "));
        var n = {
            of: "of",
            kbps: "kbps",
            castdevice: "Playback on device",
            casterror: "Playback error on device",
            together: "All at once",
            pass: "Password",
            "0val": "No",
            sleeptimer: "Sleep",
            offsettimer: "Skip",
            "1val": "Yes",
            sub_bottom: "Bottom margin",
            sub_weight: "Font weight",
            sub_shadow: "Shadow",
            sub_bga: "Background opacity",
            sub_bgcolor: "Background color",
            sub_sizeproc: "Text size",
            sub_color: "Text color",
            sub_color2: "Text color 2",
            sub_shift: "Time shift",
            sub_reset: "Reset",
            prev: "Previous",
            copied: "Copied to clipboard",
            "160p": "Tiny",
            "240p": "Small",
            "360p": "Medium",
            "480p": "High",
            "540p": "High",
            "720p": "HD",
            "1080p": "Full HD",
            "1296p": "Super HD",
            "1440p": "Quad HD",
            "2160p": "Ultra HD 4K",
            ads: "Ad",
            adsinvitation: "Go to the advertiser's website",
            audiotrack: "Audio",
            live: "LIVE",
            fullscreen: "Enter fullscreen",
            normalscreen: "Exit fullscreen"
        };
        return exist(n[t]) && (e = n[t]), exist(o["lang_" + v.lang]) && exist(o["lang_" + v.lang][t]) && (e = o["lang_" + v.lang][t]), v.rename && v.rename[t] && (e = v.rename[t]), e
    };

    function getSwarmId() {
        return void 0 !== o.plid && o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : v.cuid
    }
    var gaTracker = function(t, e, n) {
        if (!exist(o.gatracked[e]) && 1 != v.HDVBPlayercom) {
            var a, s = getSwarmId();
            if (exist(v.label) && (s = v.label), 1 == v.yamtr_event[t] && 1 == v.yamtr && exist(v.yamtrid) && ("init" == t && setInterval(yaHit, 3e5), exist(window["yaCounter" + v.yamtrid]) ? (window["yaCounter" + v.yamtrid].reachGoal("HDVBPlayer_" + t, {
                    title: s
                }), log("Yandex", "HDVBPlayer_" + t)) : log("Yandex Metric error")), 1 == v.ga_event[t] && 1 == v.ga) {
                if (1 == v.ga4) {
                    if (window.gtag) {
                        if (a = {
                                label: s
                            }, v.galabels && "object" == typeof v.galabels)
                            for (var r in v.galabels) v.galabels.hasOwnProperty(r) && (a[r] = v.galabels[r]);
                        gtag("event", "HDVBPlayer_" + t, a)
                    }
                } else window.ga && (a = {
                    eventCategory: "Player",
                    eventAction: e
                }, "" != s && (a.eventLabel = s), 1 != v.gainact || o.clicktime || (a.nonInteraction = 1), ga("user.send", "event", a))
            }
        }
        n && (o.gatracked[e] = !0)
    };

    function yaHit() {
        exist(window["yaCounter" + v.yamtrid]) && window["yaCounter" + v.yamtrid].reachGoal("getSwarmId")
    }
    var YoutubeID = function(t) {
            var e = "";
            if ((t = t.replace("v=", "{=")).indexOf("youtu.be/") > -1 ? (e = t.substr(t.indexOf(".be/") + 4)).replace("/", "") : e = t.split(/(youtu.be\/|v\/|embed\/|watch\?|youtube.capiom\/user\/[^#]*#([^\/]*?\/)*)\??{?=?([^#\&\?]*)/)[3], "" != e && e.indexOf("?t=") > 0) {
                v.start = e.substr(e.indexOf("?t=") + 3);
                var o = 0,
                    n = 0,
                    a = 0;
                v.start.indexOf("h") > 0 && (o = v.start.substr(0, v.start.indexOf("h")), v.start = v.start.substr(v.start.indexOf("h") + 1)), v.start.indexOf("m") > 0 && (n = v.start.substr(0, v.start.indexOf("m")), v.start = v.start.substr(v.start.indexOf("m") + 1)), v.start.indexOf("s") > 0 && (a = v.start.substr(0, v.start.indexOf("s")), v.start = v.start.substr(v.start.indexOf("s") + 1)), (o > 0 || n > 0 || a > 0) && (v.start = 3600 * o + 60 * n + 1 * a), e = e.substr(0, e.indexOf("?t="))
            }
            return e
        },
        js = function(x, y, li, ev) {
            if ("init" == x && (o.init = !0), 1 == ev)
                for (var yi in y) y.hasOwnProperty(yi) && "object" == typeof y[yi] && (y[yi] = "");
            if (1 == v.eventstracker && o.init) {
                if (1 == v.eventlisteners || 1 == li) JsEvent(x, y);
                else {
                    if (void 0 != y && "object" == typeof y) try {
                        y = JSON.stringify(y)
                    } catch (e) {}
                    if ("string" == typeof v.events && 0 == v.events.indexOf("{")) try {
                        v.events = v.events.replace(/\'/ig, '"'), v.events = JSON.parse(v.events)
                    } catch (e) {
                        console.log(e)
                    }
                    if ("object" == typeof v.events) {
                        if (exist(v.events[x]) || exist(v.events.other)) {
                            var z = x;
                            !exist(v.events[x]) && exist(v.events.other) && (z = "other"), 0 == x.indexOf("vast_") && exist(v.events.vast) && (z = "vast");
                            try {
                                void 0 !== y ? eval(v.events[z] + "('" + x + "','" + v.id + "','" + y + "')") : eval(v.events[z] + "('" + x + "','" + v.id + "')")
                            } catch (e) {
                                log("events", e, x)
                            }
                        }
                    } else {
                        "" == v.events && (v.events = "HDVBPlayerEvents");
                        try {
                            void 0 !== y ? eval(v.events + "('" + x + "','" + v.id + "','" + y + "')") : eval(v.events + "('" + x + "','" + v.id + "')")
                        } catch (e) {
                            log("events", e, x, y)
                        }
                    }
                }
            }
            if (o.init && 1 == v.pjsframe && o.pjsfrm) try {
                o.pjsfrm.contentWindow.postMessage({
                    event: x,
                    info: y
                }, "*")
            } catch (e) {}
            if (1 == v.postmessage && 1 !== li) {
                var zv = {
                    event: x,
                    time: o.media ? "seek" == x ? o.seeked_time : o.media.time() : 0
                };
                void 0 != y && (zv.data = y), ("duration" == x || "time" == x) && (zv.duration = o.media.duration()), ("volume" == x || "unmute" == x) && (zv.volume = v.volume), "new" == x && (zv.id = apiProcessor("playlist_id")), window.parent.postMessage(zv, "*");
                var z = x;
                ("init" == x || "start" == x || "end" == x) && (z = x + "ed"), "play" == x && (z = "resumed"), "pause" == x && (z = "paused"), "mute" == x && (z = "muted"), "unmute" == x && (z = "unmuted"), "seek" == x && (z = "rewound"), "vast_Impression" == x && (z = "adShown"), zv.event = z, "" != z && z != x && (zv = JSON.parse(JSON.stringify(zv)), window.parent.postMessage(zv, "*"))
            }
        },
        JsEvent = function(t, e) {
            var n = document.createEvent("Events");
            void 0 !== e && (n.info = e), n.initEvent(t, !0, !0), o.container.dispatchEvent(n)
        };
    this.event = function(t, e) {
        o.events[t] = e
    };
    var api = function(t, e, o) {
        return apiProcessor(t, e, o)
    };

    function apiProcessor(t, e, n) {
        if (!exist(o.actions) || "string" != typeof t) return !1;
        if (1 != o.destroyed) {
            if (n && "string" == typeof n && 0 == n.indexOf("id:") && (n = o.controls.butByS(n.substr(3), "dom")) && "button" == t && "toogle" == e && n.Click(), "play" == t || "file" == t) {
                if (exist(e)) {
                    var a = !1;
                    if ("string" == typeof e) {
                        e = e.replace(/(\r\n|\n|\r)/gm, "");
                        var s = -1;
                        if (e.indexOf("[seek:") > -1 && e.lastIndexOf("]") == e.length - 1) {
                            if (s = parseInt((s = e.substr(e.indexOf("[seek:") + 6, e.length - 1)).substr(0, s.length - 1)), "" == (e = e.substr(0, e.indexOf("[seek:")))) {
                                o.actions.Seek(s), o.actions.Play();
                                return
                            }
                            o.seekto = s
                        }
                        if (e.indexOf("[skipads]") > -1 && (a = !0, e = e.replace("[skipads]", "")), 0 == e.indexOf("#" + v.enc2) && (e = o[o.fd[0]](e)), 0 == e.indexOf("#" + v.enc3) && e.indexOf(v.file3_separator) > 0 && (e = o[o.fd[1]](e)), 0 == e.indexOf("#0") && (e = fd0(e)), 1 == v.fplace && (e = fplace(e)), e.indexOf(".txt") == e.length - 4) {
                            var r = XHR(e);
                            r.onload = function() {
                                if (4 == this.readyState && 200 == this.status) try {
                                    apiProcessor("play", JSON.parse(this.responseText))
                                } catch (t) {}
                            }, r.send();
                            return
                        }
                        if (0 == e.indexOf("id:") && exist(o.playlist_dic)) {
                            var l = FindIdPl(e);
                            return !!exist(o.playlist_dic[l]) && (o.controls.PlaylistPlayId(l), s > -1 && (o.seekto = s), !0)
                        }
                        if (0 == e.indexOf("youtubeid:")) {
                            var l = e.substr(10);
                            if ("youtube" == o.file_type) return o.media.playByYoutubeId(l), !0;
                            e = "//youtu.be/" + l
                        }
                    }
                    "play" == t && (o.controls.PreNewPl(), o.actions.NewFile(e, void 0, void 0, a ? 1 : 0)), "file" == t && (o.newfile = !0, v.autoplay = 0, o.actions.NewFile(e, 1, void 0, a ? 1 : 0), o.controls.Duration(0, 0), o.start = !1)
                } else "play" == t && o.actions.Play(), "file" == t && "function" == typeof Papi41 && Papi41()
            }
            if ("preload" == t && (exist(e) ? (o.newfile = !0, o.actions.NewFile(e, 1, 1)) : o.media.Preload()), "pause" == t && o.play && (o.actions.Pause(), o.actions.RenewSubtitle()), "channel" == t && exist(e) && o.start && o.channels && o.channels.SetChannel(e), 0 == t.indexOf("vpaid_") && o.vast && o.vast.VpaidSet(t.substr(6), e), "alert" == t && (o.alert.close(), o.alert = new Alert, 1 == v.alert404 ? o.alert.txt(v.alert404text) : o.alert.txt("Test message"), 1 == v.alert404v && exist(v.alert404video) && (o.err404v = new PluginErrorVideo)), "waiting" == t && (o.controls.Waiting(), o.controls.HideElement("control_start")), "toggle" == t && (o.play ? o.actions.Pause() : o.actions.Play()), "stop" == t && (v.preload = 0, v.autoplay = 0, o.media.Recover(), o.actions.Stop()), "reload" == t && (o.time = o.media.time(), o.actions.Reload()), "download" == t && v.apiprm && 1 == v.apiprm.on && 1 == v.apiprm.dwn && o.actions.Download(), "effect" == t && exist(e) && o.effects && o.effects.api(e), "share" == t && o.controls.showShare(), "startvast" == t && exist(e) && 1 == v.vast) {
                if (0 == e.indexOf("js:")) v.midroll = e, v.midrolls = !0, o.actions.advertising("midroll");
                else if ("" != o.p) {
                    var d = JSON.parse(decode(o.p));
                    for (var c in d) d.hasOwnProperty(c) && exist(d[c].id) && e == d[c].id && (v.midroll = "prt" + (exist(d[c].cpm) ? "cpm" + d[c].cpm : "") + e + "_" + d[c].preroll, v.midrolls = !0, o.actions.advertising("midroll"))
                }
            }
            if ("vastbreak" == t && "function" == typeof VastBreak && VastBreak(), "cuid" == t && e && (v.cuid = e, o.continue && o.continue.updateCuid()), "mute" == t && o.actions.Mute(), "speed" == t) {
                if (!exist(e)) return o.files_speed[o.current_speed];
                o.actions.SetSpeed(e)
            }
            if ("played" == t && v.apiprm && o.pld && 1 == v.apiprm.pld) return Math.round((o.pld.filter(Boolean).length - 1) / Math.round(o.media.duration()) * 100);
            if ("speeds" == t) return o.files_speed;
            if ("unmute" == t && o.actions.Unmute(), "thumbnails" == t && exist(e) && (v[t] = e, o.actions.Thumbs()), "qualities" == t) return o.files_quality;
            if ("adblock" == t) return !!o.ab;
            if ("live" == t) return !!o.media && o.media.isLive();
            if ("subtitles" == t) return 1 == v.sub_off ? o.files_subtitle.slice(0, -1) : o.files_subtitle;
            if ("audiotracks" == t) return o.files_audiotrack;
            if ("volume" == t || "setVolume" == t) return exist(e) && e >= 0 && e <= 1 && o.actions.Volume(e), o.muted ? 0 : v.volume;
            if ("muted" == t) return !!exist(o.muted) && o.muted;
            if ("moveplaylist" == t && o.controls && o.controls.PlaylistMove(e), "design" == t && (e < 2 && (e = ""), "" != o["u" + e])) {
                var u = JSON.parse(decode(o["u" + e])),
                    $ = [];
                for (var c in v) v.hasOwnProperty(c) && 0 == c.indexOf("control_") && (v[c] = null);
                if ("object" == typeof u)
                    for (var f in u) u.hasOwnProperty(f) && (0 == f.indexOf("control_") && (v[f] = u[f]), "toolbar" == f && ($[f] = u[f]));
                v = UpdateObject(v, $);
                var p = !1;
                o.controls.SettingsVisible() && (o.controls.Settings(), p = !0);
                var _ = !1;
                o.controls.PlaylistVisible() && (o.controls.Playlist(), _ = !0), o.controls.Remove(), o.controls = null, o.controls = new Controls, "playing" == o.media.status() && o.controls.Play(), o.controls.Volume(v.volume), exist(v.title) && Title(v.title), p && o.controls.Settings(), _ && o.controls.Playlist(), o.fullscreen && o.controls.Fullscreen(), "control_duration" != key && o.controls.Duration(o.media.time(), o.media.duration()), MainResize()
            }
            if ("vars" == t) return v.vars;
            if ("resize" == t && o.controls.resize(!0), "seek" == t && exist(e)) {
                if ("string" == typeof e) {
                    if (e.indexOf("%") > -1) e = parseInt(e.substr(0, e.indexOf("%"))), e = o.media.duration() * e / 100;
                    else {
                        var h = o.media.time();
                        if (o.continue && !o.start && !o.continue.seeked) {
                            var g = o.continue.flag();
                            g.t && g.d && (h = g.t, o.continue.seeked = !0)
                        }
                        0 == e.indexOf("+") ? e = h + parseInt(e.substr(1)) : 0 == e.indexOf("-") && (e = h - parseInt(e.substr(1)))
                    }
                }(e *= 1) < 0 && (e = 0), o.media.duration() > 0 && e > o.media.duration() && (e = 0), !exist(o.vast) && !exist(o.vastloader) && o.media.duration() > 0 ? (o.seekto = void 0, o.actions.Seek(e, !0), o.actions.Playing()) : o.seekto = e
            }
            if ("fullscreen" == t && (o.fullscreen || o.actions.Fullscreen()), "exitfullscreen" == t && o.fullscreen && o.actions.Normalscreen(), "isfullscreen" == t) return o.fullscreen;
            if ("size" == t) return o.screen_w + "/" + o.screen_h;
            if ("fix" == t && exist(o.minify) && o.minify.Do(), ("unfixing" == t || "unfix" == t) && exist(o.minify) && o.minify.Un(), "time" == t) {
                var m = o.media ? o.media.time() : 0;
                if (o.continue && 1 == v.timestore && !o.start && 0 == m) {
                    var g = o.continue.flag();
                    g.t && (m = g.t)
                }
                return m
            }
            if ("timeplay" == t && (o.butplstart && apiProcessor("play", "id:" + o.butplstart), o.butseekto && (apiProcessor("seek", o.butseekto), apiProcessor("play"))), "duration" == t) return o.media ? o.media.duration() : 0;
            if ("buffered" == t) return o.media ? o.media.loaded() : 0;
            if ("points" == t && e && (v.points = e, o.controls.RenewPoints()), "quality" == t) {
                if (!exist(e)) return o.media ? NoSpan(o.media.getQuality()) : 0;
                n ? (v.hd = Switcher(v.hd, e, n), 2 == o.files_quality.length && o.actions.SetQuality(v.hd)) : o.actions.SetQuality(e)
            }
            if ("audiotrack" == t) {
                if (!exist(e)) return o.media ? o.media.getAudioTrack() : 0;
                n ? (v.ahd = Switcher(v.ahd, e, n), 2 == o.files_audiotrack.length && o.actions.SetAudioTrack(v.ahd)) : o.actions.SetAudioTrack(e)
            }
            if ("isyoutube" == t) return "youtube" == o.file_type;
            if ("restart" == t && (o.current_audiotrack > 0 && (o.restart_audio = o.current_audiotrack), o.actions.NewFile(o.files[o.current_file])), "playing" == t) return o.play;
            if ("started" == t) return o.start;
            if ("system" == t) return o.system[e];
            if ("youtubeready" == t && 1 != o.destroyed && o.media.onYoutubeReady(), "id" == t) return v.id;
            if ("log" == t && (v.log = e), "eventstracker" == t && (v.eventstracker = e), "pip" == t && o.media.PipToggle(), "switchpip" == t && (o.media.PipSwitch(), n && (o.piped = Switcher(o.piped, e, n))), "airplay" == t && o.media.Airplay(), "pipwebkit" == t && o.media.PipWebkit(), "options" == t && 1 != v.HDVBPlayercom && console.log(options), "castinit" == t && o.chromecast && o.chromecast.init(), "subtitle" == t && (v.subtitle = e, exist(e) && (e.toString().length < 3 && o.sbt ? o.sbt.SetSubtitle(1 * e) : o.actions.Subtitle(e))), "quiz" == t && exist(o.quiz)) {
                if (!exist(e)) return o.quiz.Active();
                o.quiz.api(e)
            }
            if ("geo" == t) return !!o.geobj && o.geobj;
            if ("box" == t) {
                var b = createElement("div");
                b.id = e, b.style.zIndex = 1e4, o.frame.appendChild(b)
            }
            if ("screenshot" == t) {
                if (!o.tagvideo) return !1;
                var y, w = createElement("canvas"),
                    k = o.media.size();
                w.width = k.width > 0 ? k.width : o.normal_w, w.height = k.height > 0 ? k.height : o.normal_h, css(w, {
                    position: "absolute",
                    top: -w.height,
                    left: -w.width,
                    display: "none"
                }), document.body.appendChild(w);
                var O = w.getContext("2d");
                O.drawImage(o.media.tag(), 0, 0, w.width, w.height);
                var L = 2,
                    S = document.createElement("canvas");
                S.width = w.width * L, S.height = w.height * L;
                var C = S.getContext("2d");
                C.drawImage(o.media.tag(), 0, 0, w.width * L, w.height * L), 1 == v.sscopyright && exist(v.sstext) && (exist(v.ssfontsize) || (v.ssfontsize = 20), exist(v.ssfontcolor) || (v.ssfontcolor = "ffffff"), C.font = v.ssfontsize + "px Courier, Arial", C.fillStyle = CheckColor(v.ssfontcolor), C.fillText("domain" == v.sstext ? o.domain : v.sstext, v.ssfontsize, w.height * L - v.ssfontsize - 5)), O.drawImage(S, 0, 0, w.width, w.height);
                try {
                    y = w.toDataURL("image/jpeg")
                } catch (T) {
                    return console.log(T.message), !1
                }
                return y
            }
            if ("dash" == t) return o.file_type == t ? o.media.getDASH() : void 0;
            if ("hls" == t) return o.file_type == t ? o.media.getHLS() : void 0;
            if ("poster" == t) return !o.play && (o.media.Poster(e), !0);
            if ("stretch" == t) {
                if (!exist(e)) return existv(v.covervideo, 0);
                "1/0" == e && (e = 1 - existv(v.covervideo, 0)), v.covervideo = e, o.media.normalscale()
            }
            if ("scale" == t) {
                if (!exist(e)) return [o.mediascale.x, o.mediascale.y, o.mediacontainer.style.left, o.mediacontainer.style.top];
                0 == e ? o.media.normalscale() : o.media.scale(e)
            }
            if ("title" == t) return exist(e) ? (exist(e) && (v.title = e), o.actions.Title("title"), !0) : v.title;
            if ("invert" == t && o.actions.InvertPlaylist(), "push" == t && e && (o.playlist_source || (o.playlist_source = []), "object" == typeof e && (e = o.playlist_source.concat(e), t = "playlist")), "playlist" == t && e) {
                if ("object" == typeof e) try {
                    return o.actions.UpdatePlaylist(e), !0
                } catch (E) {
                    return !1
                } else if (e.indexOf(".txt") == e.length - 4 || e.indexOf(".txt?") > 0) {
                    var r = XHR(e);
                    return r.onload = function() {
                        if (4 == this.readyState && 200 == this.status) try {
                            apiProcessor("playlist", JSON.parse(this.responseText))
                        } catch (t) {}
                    }, r.send(), !0
                }
            }
            if ("next" == t && o.controls && o.controls.PlaylistNext(), "prev" == t && o.controls && o.controls.PlaylistPrev(), "cut" == t && o.controls && o.controls.Cut(e), "flip" == t && o.media && o.media.flip(), "find" == t && exist(e) && exist(o.playlist_dic)) {
                for (var P in o.play || (v.autoplay = 0), o.playlist_dic) o.playlist_dic.hasOwnProperty(P) && o.playlist_dic[P].pjs_id == e && (e = P);
                return -1 === e.indexOf("xxx-") && ("x-" == e.substr(0, 2) && (e = o.playlist_dic[e].folder[o.playlist_dic[e].folder.length - 1].id), "xx" == e.substr(0, 2) && (e = o.playlist_dic[e].folder[o.playlist_dic[e].folder.length - 1].id)), !!exist(o.playlist_dic[e]) && (o.controls.PlaylistOpenId(e), !0)
            }
            if ("playlist_folders" == t) {
                var A = [];
                if (exist(o.playlist_dic))
                    for (var P in o.playlist_dic) o.playlist_dic[P].folder && -1 == o.playlist_dic[P].pjs_parent_i && A.push({
                        title: o.playlist_dic[P].title,
                        id: o.playlist_dic[P].id
                    });
                return A
            }
            if ("playlist_id" == t && o.plid) return o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : o.plid;
            if ("playlist_length" == t) return o.playlist_dic ? Object.keys(o.playlist_dic).length : -1;
            if ("playlist_title" == t && exist(o.playlist_title)) return o.playlist_title;
            if ("showplaylist" == t && o.controls.PlaylistShow(), "toolbar" == t && o.controls.ShowForce(), "vastnow" == t) return !!o.vast;
            if ("vastinfo" == t) return !!o.vast && VastInfo();
            if ("vastpause" == t) return !!o.vast && o.vast.pause();
            if ("vastresume" == t) return !!o.vast && o.vast.resume();
            if ("vaststart" == t) {
                if (!o.vast) return !1;
                o.vast.startAd()
            }
            if ("vastmute" == t) {
                if (!o.vast) return !1;
                o.vast.mute()
            }
            if ("captions" == t && (v.captions = Switcher(v.captions, e, n), o.media.captions()), "loop" == t) {
                if (exist(n)) v.loop = Switcher(v.loop, e, n);
                else {
                    if (!exist(e)) return v.loop;
                    "0/1" == e && (e = 1 - v.loop), v.loop = e
                }
            }
            if ("shuffle" == t) {
                if (exist(n)) v.shuffle = Switcher(v.shuffle, e, n);
                else {
                    if (!exist(e)) return v.shuffle;
                    v.shuffle = e
                }
            }
            if ("autonext" == t || "playlistloop" == t) {
                var l = "autoplaylist";
                return "playlistloop" == t && (l = "playlistrewind"), exist(n) ? v.playlist[l] = Switcher(v.playlist[l], e, n) : exist(e) && ("0/1" == e && (e = 1 - v.playlist[l]), v.playlist[l] = e), v.playlist[l]
            }
            if ("hd" == t && 2 == o.files_quality.length && (v.hd = o.files_quality[o.current_quality], v.hd = Switcher(v.hd, e, n), o.files_quality[0] == v.hd ? o.actions.SetQuality(0) : o.actions.SetQuality(1)), "v" == t && e) {
                if (0 == e.indexOf("file") || 0 == e.indexOf("bk")) return;
                return v[e]
            }
            if (0 == t.indexOf("update:")) {
                var I = t.substr(7);
                if ("object" == typeof e && "object" == typeof v[I])
                    for (var z in e) e.hasOwnProperty(z) && (v[I][z] = e[z]);
                else - 1 == t.indexOf("rc_") && (v[I] = e);
                return !0
            }
            if (0 == t.indexOf("text:") && o.controls.customText(t.substr(5), e), "currentfile" == t) return o.media ? o.media.currentFile() : "";
            if ("vrsn" == t) return o.version;
            if ("hlserror" == t) return o.hlserror;
            if ("dasherror" == t) return o.dasherror;
            if ("visibility" == t) return o.visibility;
            if ("vastids" == t) return o.vast ? o.vast_adid : void 0;
            "destroy" == t && (o.actions.StopMedia(), o.destroyed = 1, v.hotkey.on = 0, o.container.innerHTML = "")
        }
    }

    function Switcher(t, e, o) {
        var n = trim(e) + "";
        if (e.indexOf("/") > 0) {
            var a = e.split("/");
            2 == a.length && (t == trim(a[0]) ? (n = trim(a[1]), o && o.CustomSwitch(1)) : (n = trim(a[0]), o && o.CustomSwitch(0)))
        }
        return n
    }

    function XHR(t) {
        var e = new XMLHttpRequest;
        return e.open("GET", t, !0), e
    }

    function FindIdPl(t) {
        var e = t.substr(3);
        if (o.playlist_dic)
            for (var n in o.playlist_dic) o.playlist_dic.hasOwnProperty(n) && o.playlist_dic[n].pjs_id == e && (e = n);
        return e
    }

    function VastInfo() {
        var t;
        if (o.vast && o.vast.active() && (t = o.vast), !t && o.vastloader && (t = o.vastloader), t) {
            var e = {
                is: o.vasttype,
                system: t.info("adsystem"),
                version: t.info("version"),
                vpaid: t.info("isVpaid"),
                url: o.current_vast_url + (t.info("wrapper") ? t.info("wrapper0") + t.info("wrapper") : ""),
                type: t.info("filetype"),
                file: t.info("file"),
                time: o.media ? o.media.time() : "",
                volume: t.getVolume(),
                id: o.vast_adid
            };
            return "midroll" == o.vasttype && (e.midroll_time = o.midrollcrtm), e
        }
    }
    this.api = function(t, e, o) {
        return apiProcessor(t, e, o)
    };
    var createElement = function(t) {
            var e = t;
            ("div" == t || "div2" == t) && (e = "hdvbplayer");
            var o = document.createElement(e);
            return "div2" == t && css(o, {
                cursor: "pointer",
                display: "block"
            }), o
        },
        log = function(t, e, o, n, a, s, r) {
            if (1 == v.log || 1 == v.logout) {
                var l = t + (void 0 != e ? " " + e : "") + (void 0 != o ? " " + o : "") + (void 0 != n ? " " + n : "") + (void 0 != a ? " " + a : "") + (void 0 != s ? " " + s : "") + (void 0 != r ? " " + r : "");
                console.log("HDVBPlayer" + (1 == v.pjsframed ? "2" : "") + ": " + l), 1 == v.logout && exist(document.getElementById("pjslog")) && (document.getElementById("pjslog").innerHTML += l + "<br/>")
            }
        },
        CustomFonts = function() {
            if (1 == v.fonts && exist(v.fontnames) && "" != v.fontnames) {
                var t = document.createElement("link");
                t.rel = "stylesheet", t.href = "https://fonts.googleapis.com/css?family=" + v.fontnames.replace(/,/ig, "|").replace(/ /ig, "+"), document.head.appendChild(t)
            }
        },
        SvgColor = function(t, e) {
            for (var o = ["path", "polygon", "polyline", "rect", "ellipse", "circle"], n = 0; n < o.length; n++) {
                var a = t.querySelectorAll("svg " + o[n]);
                if (a.length > 0)
                    for (var s = 0; s < a.length; s++) a[s].style.fill = e
            }
        },
        Time = function(t) {
            t < 0 && (t = 0);
            var e = o.media.duration >= 600,
                n = o.media.duration >= 3600,
                a = Math.floor(t / 60),
                s = Math.floor(t - 60 * a),
                r = Math.floor(a / 60),
                l = Math.floor(r / 24);
            if (a -= 60 * r, l > 0 && (r -= 24 * l), !(1 == v.dvrtime && o.media.isLive())) return String((l > 0 ? l + ":" : "") + (r > 0 || n ? r + ":" : "") + ((r > 0 || e) && a < 10 ? "0" : "") + a + ":" + (s < 10 ? "0" : "") + s);
            var d = new Date;
            return String(new Date(d.getTime() + 1e3 * t).toLocaleTimeString())
        },
        timeFormat = function(t) {
            var e = Math.floor(t),
                n = Math.floor(e / 60),
                a = Math.floor(n / 60);
            n = Math.floor(n % 60), a > 0 && n < 10 && (n = "0" + n);
            var s = (a > 0 ? a + ":" : "") + (n >= 0 ? n : "0") + ":" + (e = (e = Math.floor(e % 60)) >= 0 ? e >= 10 ? e : "0" + e : "00");
            if (!(1 == v.dvrtime && o.media.isLive())) return s;
            var r = new Date;
            return String(new Date(r.getTime() + 1e3 * t).toLocaleTimeString())
        },
        Href = function() {
            return encodeURIComponent(window.location != window.parent.location ? document.referrer : document.location.href)
        },
        NoSpan = function(t) {
            if (t) {
                var e = (t = t.toString()).indexOf(" <span style='opacity");
                e > -1 && (t = t.substr(0, e))
            }
            return t
        },
        Script = function(t, e, o) {
            var n;
            if (!Scripted(t) && e) {
                n = document.createElement("script"), "same" == e && (e = t), n.src = -1 == e.indexOf("//") ? "//" + e : e, n.async = 1, o && (n.name = o);
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a)
            }
            return n
        },
        Scripted = function(t) {
            for (var e = !1, o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) o[n].src.indexOf(t) > -1 && (e = !0);
            return e
        },
        hex2rgb = function(t, e) {
            var o = parseInt(3 == (t = t.replace("#", "")).length ? t.slice(0, 1).repeat(2) : t.slice(0, 2), 16),
                n = parseInt(3 == t.length ? t.slice(1, 2).repeat(2) : t.slice(2, 4), 16),
                a = parseInt(3 == t.length ? t.slice(2, 3).repeat(2) : t.slice(4, 6), 16);
            return e ? "rgba(" + o + ", " + n + ", " + a + ", " + e + ")" : "rgb(" + o + ", " + n + ", " + a + ")"
        },
        css = function(t, e) {
            if (exist(t))
                for (var o in e) e.hasOwnProperty(o) && "NaNpx" != e[o] && void 0 != e[o] && ("number" == typeof e[o] && "opacity" != o && "zIndex" != o && (e[o] += "px"), (o.indexOf("color") > -1 || o.indexOf("Color") > -1) && -1 == e[o].indexOf("#") && -1 == e[o].indexOf("rgba") && (e[o] = "#" + e[o]), "transform" == o && (t.style["-ms-" + o] = e[o], t.style["-moz-" + o] = e[o], t.style["-webkit-" + o] = e[o], t.style["-o-" + o] = e[o]), "fontFamily" == o && e[o].indexOf(" ") > -1 && (e[o] = '"' + e[o] + '"'), "box-sizing" == o ? t.style.setProperty(o, e[o], "important") : t.style[o] = e[o])
        },
        Bglines = function(t, e, o, n) {
            var a = 1 * existv(o, 1),
                s = 1 * existv(n, 1);
            css(t, {
                background: "repeating-linear-gradient(-45deg," + e + "," + e + " " + a + "px,rgba(0,0,0,0)," + a + "px,rgba(0,0,0,0) " + (a + s) + "px)"
            })
        },
        CheckColor = function(t) {
            return "#" != t.substr(0, 1) ? t = "#" + t : t
        },
        controlCSS = function(t, e, n) {
            e || (e = "#fff"), e = CheckColor(e);
            var a = random(1e5, 1e6),
                s = (t = (t = t.replace(/\(rand\)/g, a)).replace(/\(color\)/g, e)).substr(0, t.indexOf("|||")),
                r = t.substr(t.indexOf("|||") + 3),
                l = "";
            o.system.webkit && (l = (l = (l = (l = r.replace(/animation:/g, "-webkit-animation:")).replace(/animation-/g, "-webkit-animation-")).replace(/@keyframes/g, "@-webkit-keyframes")).replace(/transform/g, "-webkit-transform")), n.innerHTML = s, pushCSS(l + r)
        },
        indOf = function(t, e) {
            for (var o, n = 0; n < t.length; n++) t[n] && t[n].indexOf(e) > -1 && (o = !0);
            return o
        },
        pushCSS = function(t) {
            o.css && (o.css.styleSheet ? o.css.styleSheet.cssText = t : o.css.appendChild(document.createTextNode(t)))
        },
        Pos0 = function(t) {
            css(t, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            })
        },
        Pnt0 = function(t) {
            css(t, {
                pointerEvents: "none"
            })
        },
        xhr = function(t, e) {
            var o = new XMLHttpRequest;
            o.open("GET", t, !0), o.onload = e, o.send()
        },
        Findhdvbplayer = function(t) {
            if (t)
                for (var e = 0; e < 5 && "hdvbplayer" != t.nodeName; e++) t.parentElement && (t = t.parentElement);
            return t
        },
        gif = function(t) {
            var e = document.createElement("img");
            o.gifed.indexOf(t) > -1 ? (o.gifed.push(t), t = t.indexOf("?") > 0 ? t + "&" + Math.random() : t + "?" + Math.random()) : o.gifed.push(t), e.setAttribute("src", t), e.setAttribute("height", "1px"), e.setAttribute("width", "1px")
        },
        attr = function(t, e) {
            for (var o in e) e.hasOwnProperty(o) && void 0 != o && void 0 !== e[o] && t.setAttribute(o, e[o])
        },
        destroy = function(t) {
            if (t) try {
                t.parentNode.removeChild(t), t = null
            } catch (e) {}
        },
        random = function(t, e) {
            return Math.floor(arguments.length > 1 ? (e - t + 1) * Math.random() + t : (t + 1) * Math.random())
        },
        randomstr = function() {
            return Math.random().toString(36).substring(2, 12)
        },
        removebykey = function(t, e) {
            return t = Object.keys(t).reduce(function(o, n) {
                return n != e && (o[n] = t[n]), o
            }, {})
        },
        trim = function(t) {
            return "string" == typeof t ? t.replace(/^\s+|\s+$/gm, "") : t
        },
        cut = function(t, e, o) {
            var n = !1;
            if (t && t.indexOf(e) > -1) {
                var n = t.substr(t.indexOf(e) + e.length);
                o && n.indexOf(o) > -1 && (n = n.substr(0, n.indexOf(o)))
            }
            return n
        },
        encode = function(t, e) {
            return 0 == e ? "#0" + salt.e(t) : -1 == e ? salt.e(t) : 1 == e ? "#1" + pepper(salt.e(t), 1) : void 0
        },
        str2obj = function(x) {
            if ("" != v[x]) {
                if ("string" != typeof v[x]) o[x + "o"] = v[x];
                else if (0 == v[x].indexOf("[{")) try {
                    v[x] = v[x].replace(/pjs'qt/ig, '"'), o[x + "o"] = eval(v[x])
                } catch (e) {}
            }
        },
        dechar = function(t) {
            return String.fromCharCode(t)
        },
        decode = function(t) {
            return "#1" == t.substr(0, 2) ? salt.d(pepper(t.substr(2), -1)) : "#0" == t.substr(0, 2) ? salt.d(t.substr(2)) : t
        },
        checkBase64 = function(t) {
            return t && -1 == t.indexOf("http") && -1 == t.indexOf(".") && t.length > 100 && -1 == t.indexOf("data:") && (t = "data:image/png;base64," + t), t
        },
        hide = function(t) {
            t && (t.style.visibility = "hidden")
        },
        show = function(t) {
            t && (t.style.visibility = "visible")
        },
        hide2 = function(t) {
            t && (t.style.display = "none")
        },
        show2 = function(t) {
            t && (t.style.display = "block")
        },
        isVisible = function(t) {
            return !!t && "hidden" != t.style.visibility && "none" != t.style.display
        },
        int = function(t) {
            return "string" == typeof t && t.indexOf("px") > 0 && (t = t.substr(0, t.indexOf("px"))), parseInt(t)
        },
        hidden = function(t) {
            return "none" == t.style.display
        },
        hexToRgb = function(t) {
            if (t) {
                var e, o = parseInt(t, 16),
                    n = o >> 16 & 255;
                return n + "," + (o >> 8 & 255) + "," + (255 & o)
            }
        },
        MarginPadding = function(t, e, o) {
            if (t[e + "top"] = 0, t[e + "right"] = 0, t[e + "bottom"] = 0, t[e + "left"] = 0, exist(t[o])) {
                var n = t[o].split(" ");
                4 == n.length && (t[e + "top"] = n[0] ? parseFloat(n[0]) : 0, t[e + "right"] = n[1] ? parseFloat(n[1]) : 0, t[e + "bottom"] = n[2] ? parseFloat(n[2]) : 0, t[e + "left"] = n[3] ? parseFloat(n[3]) : 0)
            }
            return t
        },
        MarPad = function(t) {
            return t && (t = t.replace(/ /ig, "px ")), t + "px"
        },
        StringVar = function(t, e) {
            return v[t] && "" != v[t] ? v[t] : e
        },
        abc = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122),
        salt = {
            _keyStr: abc + "0123456789+/=",
            e: function(t) {
                var e, o, n, a, s, r, l, d = "",
                    c = 0;
                for (t = salt._ue(t); c < t.length;) e = t.charCodeAt(c++), o = t.charCodeAt(c++), n = t.charCodeAt(c++), a = e >> 2, s = (3 & e) << 4 | o >> 4, r = (15 & o) << 2 | n >> 6, l = 63 & n, isNaN(o) ? r = l = 64 : isNaN(n) && (l = 64), d = d + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(r) + this._keyStr.charAt(l);
                return d
            },
            d: function(t) {
                var e, o, n, a, s, r, l, d = "",
                    c = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) a = this._keyStr.indexOf(t.charAt(c++)), s = this._keyStr.indexOf(t.charAt(c++)), r = this._keyStr.indexOf(t.charAt(c++)), l = this._keyStr.indexOf(t.charAt(c++)), e = a << 2 | s >> 4, o = (15 & s) << 4 | r >> 2, n = (3 & r) << 6 | l, d += dechar(e), 64 != r && (d += dechar(o)), 64 != l && (d += dechar(n));
                return salt._ud(d)
            },
            _ue: function(t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", o = 0; o < t.length; o++) {
                    var n = t.charCodeAt(o);
                    n < 128 ? e += dechar(n) : n > 127 && n < 2048 ? (e += dechar(n >> 6 | 192), e += dechar(63 & n | 128)) : (e += dechar(n >> 12 | 224), e += dechar(n >> 6 & 63 | 128), e += dechar(63 & n | 128))
                }
                return e
            },
            _ud: function(t) {
                for (var e = "", o = 0, n = 0, a = 0; o < t.length;)(n = t.charCodeAt(o)) < 128 ? (e += dechar(n), o++) : n > 191 && n < 224 ? (e += dechar((31 & n) << 6 | 63 & (a = t.charCodeAt(o + 1))), o += 2) : (e += dechar((15 & n) << 12 | (63 & (a = t.charCodeAt(o + 1))) << 6 | 63 & (c3 = t.charCodeAt(o + 2))), o += 3);
                return e
            }
        },
        pepper = function(t, e) {
            t = (t = t.replace(/\+/g, "#")).replace(/#/g, "+");
            var n = sugar(o.y) * e;
            e < 0 && (n += abc.length / 2);
            var a = abc.substr(2 * n) + abc.substr(0, 2 * n);
            return t.replace(/[A-Za-z]/g, function(t) {
                return a.charAt(abc.indexOf(t))
            })
        },
        sugar = function(t) {
            t = t.split(dechar(61));
            var e, o = "",
                n = dechar(120);
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var s = "";
                    for (var r in t[a]) t[a].hasOwnProperty(r) && (s += t[a][r] == n ? dechar(49) : dechar(48));
                    e = parseInt(s, 2), o += dechar(e.toString(10))
                } return o.substr(0, o.length - 1)
        },
        exist = function(t) {
            return null != t && void 0 !== t && "undefined" != t
        },
        existv = function(t, e) {
            return exist(t) ? t : e
        },
        exist2 = function(t) {
            return exist(t) && -1 != t && "" != t
        },
        copyObject = function(t) {
            return "object" == typeof t && (t = JSON.parse(JSON.stringify(t))), t
        },
        findLeft = function(t) {
            return t.getBoundingClientRect().left + (window.scrollX ? window.scrollX : window.pageXOffset)
        },
        checkFont = function(t) {
            return 1 == v.globalfont && exist2(v.globalfontname) && (t = v.globalfontname), t
        },
        findTop = function(t) {
            let e = t.getBoundingClientRect();
            return e.top + window.scrollY
        },
        redirect = function(t) {
            "" != t && (1 == v.redirectblank ? window.open(t) : window.location.href = t, t = "")
        },
        reRightMenu = function() {
            1 == v.rightmenu && (o.rightmenu && o.frame.removeChild(o.rightmenu), o.rightmenu = null)
        },
        Actions = function() {
            var volumewheelin, vast_and, vast_or, vast_type, vasturl, _fullscreen_end = !1;

            function Prefile(t) {
                return exist(v.prefile) && -1 == t.indexOf("//") && (t = v.prefile + t), t
            }

            function Thumbs() {
                1 == v.thumbs && "undefined" != typeof PluginThumbs && (o.th = new PluginThumbs)
            }

            function onPlay(t) {
                o.onplay = !0, o.controls && o.controls.SettingsVisible() && o.controls.Settings(), o.droplist && o.droplist.Close(), t || o.media.Play(), o.checknative || setTimeout(function() {
                    o.media.NativeControls()
                }, 500), o.play || o.controls.Play(), 1 == v.effects && o.effects.api("play"), 1 == v.vast && o.actions.VastRecover("pauseroll"), o.system.mobile && o.controls.HideInterval(), exist(o.share) && o.share.isOpen() && o.share.Hide(), 1 == v.heartbeats && exist(v.heartbeat) && o.dt && "" != v.heartbeat && !exist(o.heartbeatInterval) && (o.heartbeatInterval = setInterval(Heartbeat, 1e3 * v.heartbeatinterval), Heartbeat())
            }

            function StartTimeout() {
                o.starttimeout = !1, o.controls.refresh()
            }

            function Quartile(t) {
                o.quartile[t] = !0, 1 == v.timestore && 1 == v.playedstore && v.playedquartile == t && o.storage && o.plid && o.continue && o.continue.writePl(o.plid)
            }

            function gaTrackPlay(t, e, n, a) {
                !exist(o.gatracked[e]) && n > a && gaTracker(t, e, 1)
            }

            function NativeEnterFs() {
                var t = o.media.tag();
                t && (o.nativefull = !0, o.media.nativeSubtitle(), t.webkitEnterFullScreen(), t.addEventListener("webkitendfullscreen", iosExitFullscreen))
            }

            function NativeExitFs() {
                var t = o.media.tag();
                t && t.webkitExitFullscreen()
            }

            function PostFullscreen() {
                !0 != o.fs_error && (o.ispipkit && o.media.PipWebkit(), 1 == v.hotkey.volumewheelfull && (VolumeWheelX(!0), o.volumewheel = !0), 1 == v.effects && o.effects.api("full"), js("fullscreen"), gaTracker("full", "Fullscreen", 1))
            }
            o.system.tv && log("tv"), this.Title = function(t) {
                o.controls && o.controls.title(t)
            }, this.File = function(t) {
                if (!t) return t;
                if ("string" == typeof t && 0 == (t = t.replace(/(\r\n|\n|\r)/gm, "")).indexOf("[{")) try {
                    t = t.replace(/pjs'qt/ig, '"'), t = JSON.parse(t)
                } catch (e) {
                    t = "incorrect JSON"
                }
                if ("object" == typeof t && (o.playlist_dic = [], o.playlist_source = copyObject(t), o.playlist = IndexPlaylist(t), o.playlist.length > 0)) {
                    if (1 == v.playlist.openlast && !v.plstart) {
                        var n = Object.keys(o.playlist_dic).slice(-1)[0];
                        n && (v.plstart = n)
                    }
                    var a = FindFileInPlaylist();
                    if (a) {
                        t = a.file, o.titlestore = a.title, o.controls && o.controls.titlepl(a.title), exist(a.poster) && (o.media ? o.media.Poster(a.poster) : v.poster = a.poster), exist(a.sub) && (a.subtitle = a.sub), exist(a.start) && (v.start = o.seekto = a.start), SettingsTimers("offset"), exist(a.id) && (o.plid = a.id);
                        var s = ["subtitle", "vars", "embed", "url", "url2", "url3", "heartbeat", "thumbnails", "label", "download", "points", "remove", "end", "delete", "title2", "skip"];
                        exist(v.control_title) && 1 == v.control_title.showfrom1file && 1 == v.control_title.showtitleplaylist && (s.push("title"), s.push("t1"), s.push("t2"), s.push("t3"), s.push("t4"), s.push("t5"));
                        for (var r = 0; r < s.length; r++) exist(a[s[r]]) && (v[s[r]] = a[s[r]]);
                        s.indexOf("title") > 0 && (1 == v.control_title.templated && (o.title_template = v.control_title.template, o.actions.TitleTemplate(a)), o.actions.Title("title")), o.controls && o.controls.UpdatePlaylist(o.playlist), o.droplist && o.droplist.Update()
                    }
                }
                if ("string" == typeof t) {
                    if (0 == (t = fjs(t)).indexOf("#" + v.enc2) && (t = o[o.fd[0]](t)), t && (0 == t.indexOf("#" + v.enc3) && t.indexOf(v.file3_separator) > 0 && (t = o[o.fd[1]](t)), 0 == t.indexOf("#0") && (t = fd0(t)), t = fjs(t)), 1 == v.fplace && (t = fplace(t)), "" == t && (log("empty file"), o.media_error = !0, js("error", "empty")), o.files_quality = [], o.files_quality_ag = [], o.files_audiotrack = [], o.current_file = 0, o.current_quality = 0, o.current_audiotrack = 0, "" == v.file_separator && (v.file_separator = ","), t.indexOf("]") > -1 && t.indexOf("[") > -1 || exist(v.qualities) ? o.files = t.split(v.file_separator) : o.files = [t], o.audiotracks = [], exist(v.qualities)) var l = v.qualities.split(v.file_separator);
                    if (o.files.length > 0) {
                        for (var d = -1, r = 0; r < o.files.length; r++)
                            if (o.files[r] = trim(o.files[r]), "" != o.files[r]) {
                                0 == o.files[r].indexOf("[") && o.files[r].indexOf("]") > 1 ? (o.files_quality[r] = o.files[r].substr(o.files[r].indexOf("[") + 1, o.files[r].indexOf("]") - 1), o.files[r] = o.files[r].substr(o.files[r].indexOf("]") + 1)) : exist(v.qualities) ? o.files_quality[r] = exist(l[r]) ? l[r] : "" : o.files_quality[r] = r + 1;
                                var c = 0;
                                exist(v.default_quality) && -1 == d && (0 == String(v.default_quality).indexOf("num:") && 1 * v.default_quality.substr(4) == r && (c = 1), v.default_quality == o.files_quality[r] && (c = 1), "max" == v.default_quality && r == o.files.length - 1 && (c = 1)), exist(o.default_quality) && o.default_quality == o.files_quality[r] && (c = 1, d = r), 1 == c && (o.current_file = r, o.current_quality = r), o.files[r] = Prefile(o.files[r])
                            }
                    } else o.files[0] = Prefile(o.files[0]);
                    return o.files[o.current_file]
                }
            }, this.InvertPlaylist = function() {
                if (o.playlist) {
                    for (var t = o.playlist.reverse(), e = 0; e < t.length; e++) t[e].pjs_i = e;
                    o.playlist = t, o.controls.UpdatePlaylist(o.playlist)
                }
            }, this.UpdatePlaylist = function(t) {
                "object" == typeof t && (o.playlist_dic = [], o.playlist_source = copyObject(t), o.playlist = IndexPlaylist(t), o.controls && o.controls.UpdatePlaylist(o.playlist))
            }, this.sendStat = !1, this.NewFile = function(t, e, n, a) {
                this.sendStat = !1, exist(e) || (v.autoplay = 1), exist(n) || (v.preload = 0), v.duration = void 0, v.end = void 0, v.delete = void 0, 2 != o.media_error && (o.media_error = !1), o.metadata = !1, o.pipwebkit = !1, o.reloadTimer = 0, o.gatracked = [], o.checknative = !1, o.gained = !1, o.dvr = !1, o.bitrate = void 0, o.quartile = [!1, !1, !1], o.sess = randomstr(), o.sesstime = 0, o.pld && (o.pld = []), "pjs" != o.file_type && o.sbt && o.sbt.remove(), o.err404v && o.err404v.remove(), "playing" == o.media.status() && this.Stop(), o.cut && o.cutted && o.controls.Cut(), exist(o.share) && o.share.Remove(), exist(o.reloadto) && clearTimeout(o.reloadto), js("new"), 1 == v.vast && 1 != a && (o.actions.VastRecover(), o.actions.VastRecover("midroll")), t = this.File(t), 1 == e && (o.file_type = ""), o.media.File(t), (o.system.mobile || o.system.safari) && !exist(e) && o.actions.Play(), exist(o.custom_aspect) && (o.mediascale = {
                    x: 1,
                    y: 1,
                    x0: 1,
                    y0: 1
                }, o.media.normalscale()), gaTracker("play", "Play"), o.media.NativeControls(), o.controls.QualityChangedNoHand(), o.controls.AudioTrackChangedNoHand(), o.controls.refresh(), o.mediatags && o.mediatags.read()
            }, this.TitleTemplate = function(t) {
                var e = !1;
                if (t && o.title_template) {
                    v.title = o.title_template;
                    for (var n = 1; n < 6; n++) exist(t["t" + n]) && (v.title = v.title.replace("{" + n + "}", t["t" + n]), e = !0)
                }
                return e
            }, this.MediaReady = function() {
                1 == v.autoplay && (1 == v.observer ? setTimeout(function() {
                    o.actions.Play()
                }, 500) : this.Play(), v.autoplayed = 1), Thumbs()
            }, this.Thumbs = function() {
                Thumbs()
            }, this.NativeControls = function() {
                var t = !1;
                return o.system.mobile && (t = !0, 1 == v.nativenotiphone && o.system.iphone && (t = !1), 1 == v.nativenotipad && o.system.ipad && (t = !1), 1 == v.nativenotios && o.system.ios && (t = !1), 1 == v.nativenotandroid && o.system.android && (t = !1)), 1 == v.nativeontv && o.system.tv && (t = !0), t
            }, this.Metadata = function() {
                o.media.Volume(v.volume), o.muted && o.media.Mute(), o.metadata = !0, o.controls && o.controls.refresh(), o.play || o.start || 1 != v.effects || o.effects.api("pause"), o.casting && o.tagvideo && (o.chromecast.Exit(), o.chromecast.Go()), 1 == v.vast && 1 != v.nomidroll && 1 == v.midrolls && (exist(o.vast) || MidrollOverlay("midroll", "metadata"))
            }, this.onPlayTag = function() {
                o.onplay || onPlay(!0)
            }, this.Play = function(t) {
                if (!o.play && o.media) {
                    o.actplay = !0;
                    var e = !1;
                    if ("youtube" == o.file_type && !o.media.YoutubeReady() && 1 != v.autoplay && 1 == v.preload && (e = !0, window.YT && (v.autoplay = 1, o.media.onYoutubeReady())), 1 == v.pass && 0 == v.passontime && (o.actions.Password(), e = !0), o.media_error || e) o.media_error && Advertising("preroll") && datetime(2);
                    else {
                        if (o.newfile = !1, StopOtherPlayer(!o.start), o.alert.close(), o.start) gaTracker("resume", "Resume");
                        else {
                            js("start"), o.start = !0, 1 == v.toolbar.hideuntilstarted && setTimeout(function() {
                                o.controls.resizetext()
                            }, 100), v.toolbar.hideleavetimeout > 0 && 1 == v.autoplay && (o.starttimeout = !0, setTimeout(StartTimeout, 1e3 * v.toolbar.hideleavetimeout)), 1 == v.water && v.wid && PluginWater();
                            for (var n = 0; n < o.vsts.length; n++) 1 == v["vast_nofirst" + o.vsts[n]] && localStorage.setItem("pljsfirst" + o.vsts[n], Date.now());
                            1 == v.pjsstat && v.pjsstatid && PluginStat("start"), js("new"), o.controls.refresh(), gaTracker("play", "Play"), o.ab && gaTracker("adblock", "AdBlock", 1)
                        }
                        if (1 == v.fullonplay && !o.fullscreen && new Date().getTime() - o.clicktime < 300 && (1 == v.fullonplaymobile ? o.system.mobile && this.Fullscreen() : this.Fullscreen()), o.subtitle_on && 1 == v.subpausehide && show2(o.subtitle), o.err404v && o.err404v.remove(), 1 != t && Advertising("preroll") || Advertising("intro") || Advertising("pausebannerinit") || Advertising("endtaginit") || Advertising("qrcodeinit") || Advertising("starttaginit") || Advertising("start2taginit")) datetime(2);
                        else if (1 == v.redirect && exist(v.redirectonplay) && !exist(options.redirect) && (redirect(v.redirectonplay), e = !0), !e) {
                            log("Play"), "pdf" != o.file_type && o.media.duration() > 0 && o.controls.Duration(o.media.time(), o.media.duration()), !o.start2 && (o.start2 = !0, v.toolbar.hideleavetimeout > 0 && 1 == v.autoplay && (o.starttimeout = !0, setTimeout(StartTimeout, 1e3 * v.toolbar.hideleavetimeout))), o.media.time() > 1 && !exist(o.banner) && 1 == v.pausebannerinit && 1 == v.pausebannerstatus && Advertising("pausebannerhide");
                            var a = !1;
                            !(o.media.time() > 1) || 1 != v.pauserollonplay || 1 == t || isVastBgLoad() || exist(o.vast) || exist(o.vastloader) || (a = Advertising("pauseroll")), a ? isVastBgLoad() && onPlay(!1) : onPlay(!1)
                        }
                    }
                } else o.media && o.media.Play()
            }, this.Pause = function() {
                o.play && (o.actplay = !1, log("Pause"), o.media.Pause(), o.controls.Pause(), js("pause"), v.posteronpause && ShowPoster(), 1 == v.posterhidepause && HidePoster2(), 1 == v.effects && o.effects.api("pause"), o.subtitle_on && 1 == v.subpausehide && hide2(o.subtitle), o.media.time() > 1 && !exist(o.banner) && 1 == v.pausebannerinit && 0 == v.pausebannerstatus && Advertising("pausebannershow"), exist(o.vast) || exist(o.vastloader) || 0 != v.pauserollonplay || Advertising("pauseroll"), o.onplay = !1)
            }, this.Mute = function() {
                o.media.Mute(), o.controls.Mute(), o.muted = !0, js("mute")
            }, this.Unmute = function() {
                o.media.Unmute(), o.muted = !1, o.controls.Unmute(), o.media.Volume(v.volume), js("unmute")
            }, this.Volume = function(t, e) {
                t < .01 && (t = 0), t > 1 && (t = 1), t <= 0 ? (this.Mute(), v.volume = 0, t = 0) : (o.muted && this.Unmute(), v.volume = t), js("volume", t), o.controls.Volume(t, e), o.media.Volume(t)
            }, this.Waiting = function() {
                o.controls.Waiting()
            }, this.StopWaiting = function() {
                o.controls && o.controls.StopWaiting()
            }, this.Progress = function() {
                this.StopWaiting()
            }, this.Seeked = function() {
                o.actions.UpdatePlay(), this.StopWaiting()
            }, this.Duration = function(t, e) {
                if (o.continue && !o.start) {
                    var n = o.continue.flag();
                    n.t && n.d && (t = n.t)
                }
                o.controls && o.controls.Duration(t, e)
            }, this.LoadedData = function(t, e) {
                exist(o.seekto) && "youtube" != o.file_type && !o.media.isLive() && (o.actions.Seek(o.seekto, !1), o.seekto = void 0)
            }, this.ScreenClick = function() {
                var t = new Date;
                o.clicktime = t.getTime();
                var e = !1;
                o.controls.SettingsVisible() && 1 != v.settings.always && (o.controls.Settings(), e = !0), o.droplist && o.droplist.Visible() && (o.droplist.Close(), e = !0), 0 == v.playlist.always && o.controls.PlaylistVisible() && 1 == v.playlist.autohide && (o.controls.Playlist(), e = !0), 1 == v.redirect && exist(v.redirectonclick) && !exist(options.redirect) && (redirect(v.redirectonclick), e = !0), e || (1 == v.hotkey.on && 1 == v.hotkey.icons && 1 == v.hotkey.playiconbut && PluginHotIcon("play", o.play ? 0 : 1), this.Toggle())
            }, this.ControlsBgClick = function() {
                o.controls.SettingsVisible() && o.controls.Settings()
            }, this.Toggle = function() {
                "playing" == o.media.status() ? this.Pause() : this.Play(), Sub()
            }, this.Seek = function(t, e) {
                t < o.media.duration() && !(1 == v.control_line.dontseekforward && t > o.media.time()) && (v.delete > 0 && t < v.delete && (t = v.delete), o.seeked_time = t, o.media.Seek(t), e && o.controls.Seek(t, o.media.duration()), o.seeking = !0, o.seeking_time = o.media.time(), Sub(o.seeking_time))
            }, this.Open = function(t, e, n) {
                "playing" == o.media.status() && "audio" != o.mode && (Pause(), o.fullscreen && n && o.actions.Normalscreen()), window.open(t, e)
            }, this.Download = function() {
                var t = o.media.currentFile();
                exist(v.download) && (t = v.download), "" != t && (js("download"), window.open(t, 1 == v.downself ? "_self" : "_blank").focus())
            }, this.UpdatePlay = function() {
                var t = o.media.time(),
                    e = o.media.duration();
                o.controls.Played(t, e)
            }, this.Playing = function() {
                var t = o.media.time(),
                    e = o.media.duration(),
                    n = e > 0 ? t / e : 0;
                o.seeking ? t != o.seeking_time && (o.seeking = !1) : o.controls && o.controls.Played(o.seekto > 0 ? o.seekto : t, e), (1 == v.ga || 1 == v.yamtr) && e > 0 && (gaTrackPlay("play25", "Play 25%", n, .25), gaTrackPlay("play50", "Play 50%", n, .5), gaTrackPlay("play75", "Play 75%", n, .75));
                for (var a = 0; a < 3; a++) !o.quartile[a] && n >= .25 * a + .25 && Quartile(a);
                if (1 == v.reloadlog && log(1, t, e), 1 == v.reload && o.play) {
                    var s = !1,
                        r = !1;
                    if (1 != v.reloadlive || o.media.isLive() || (s = !0), t > 0) t != o.time || s ? o.reloadTimer = 0 : r = !0, o.time = t;
                    else if (1 == v.reloadstart) {
                        var l = o.media.loaded();
                        1 == v.reloadlog && log(2, l, o.timeld), s || (l == o.timeld ? r = !0 : o.reloadTimer = 0), o.timeld = l
                    }
                    r && (o.reloadTimer++, 1 == v.reloadlog && log(3, o.reloadTimer), o.reloadTimer == v.reloadtimeout * (1e3 / o.timerTime) && o.actions.Reload())
                }
                if (v.apiprm && 1 == v.apiprm.pld && e > 0 && (o.pld || (o.pld = []), o.pld[Math.round(t)] = 1), 1 == v.vast && (1 != v.nomidroll && 1 == v.midrolls && (exist(o.vast) || MidrollOverlay("midroll", t, e)), 1 != v.nooverlay && 1 == v.overlays && (exist(o.vast) || MidrollOverlay("overlay", t, e))), 1 == v.intros && v.introstart > 0 && t >= v.introstart && !exist(o.vast) && (Advertising("intro") && (o.media.Pause(), o.controls.Pause()), v.introstart = 0), Advertising("pushbanner"), Advertising("pausebannerhide"), this.sendStat, 1 == v.qrinit && 0 == v.qrstatus && o.media.time() > 0 && Advertising("qrcodetoggle"), 1 == v.endtaginit && 0 == v.endtagstatus && o.media.time() > 0 && Advertising("endtagtoggle"), 1 == v.starttaginit && 0 == v.starttagstatus && o.media.time() > 0 && Advertising("starttagtoggle"), 1 == v.start2taginit && 0 == v.start2tagstatus && o.media.time() > 0 && Advertising("start2tagtoggle"), SettingsTimers("play"), 1 == v.pass && v.passontime > -1 && PasswordTime(t, e), o.subtitle_on && Sub(t), o.storage && 1 == v.timestore && o.continue && o.continue.write(t, e), o.cutted && o.cut && o.cut.play(t), exist(v.end) && v.end > 0 && t > v.end && ("youtube" == o.file_type ? (o.media.Pause(), o.media.Seek(v.start > 0 ? v.start : 0)) : (o.media.Recover(), o.actions.Stop()), v.start > 0 && (o.seekto = v.start), o.actions.Ended()), exist(v.remove))
                    for (var d = v.remove.split(","), a = 0; a < d.length; a++) {
                        var c = d[a].split("-");
                        2 == c.length && t > c[0] && t < c[1] && o.media.Seek(c[1])
                    }
            }, this.Reload = function() {
                if (o.reloadTimer = 0, exist(o.reloadto) && clearTimeout(o.reloadto), 1 == v.reloadjustevent) js("reload");
                else {
                    o.seekto > 0 || o.media.isLive() || (o.seekto = o.media.time() + (v.reloadplus > 0 ? 1 : 0));
                    var t = o.controls.PlaylistVisible();
                    js("reload"), o.media.reload(), t && 1 == v.playlist.autohide && o.controls.PlaylistShow()
                }
            }, this.Stopped = function() {
                o.controls.Played(0, 0), o.controls.Loaded(0, 0), o.actions.Duration(0, 0), o.controls.StopWaiting()
            }, this.Loading = function() {
                if (o.media) {
                    var t = o.media.loaded();
                    1 == v.pjsiframed && js("loaded", t);
                    var e = o.media.duration()
                }
                o.controls && o.controls.Loaded(t, e)
            }, this.Ended = function() {
                js("fileend"), 1 == v.loop ? ("youtube" == o.file_type && this.Stop(), 1 == v.vast && o.actions.VastRecover("preroll"), v.start > 0 && o.actions.Seek(v.start), this.Play()) : (o.media.isLive() || "youtube" == o.file_type ? this.Stop() : 1 == v.finishrewind && (o.actions.Seek(v.start > 0 ? v.start : 0, !0), o.system.ie && o.media.Pause()), o.controls.onEnded(), 1 == v.intros && (v.outros = 1), Advertising("postroll") || Advertising("outro") || End())
            }, this.Fullscreen = function() {
                var t = !1,
                    e = !1;
                for (var n in o.fs_error = !1, o.fullscreen_process = !0, setTimeout(function() {
                        o.fullscreen_process = !1
                    }, 3e3), o.motions)
                    if (o.motions.hasOwnProperty(n) && exist(o.motions[n])) try {
                        o.motions[n].TheEnd2()
                    } catch (a) {}
                try {
                    if (o.fullscreen_start = !0, (o.system.ios && 1 == v.nativefullios || o.system.android && 1 == v.nativefulldroid) && o.tagvideo && !o.nativecontrols) {
                        var n = o.media.tag();
                        n && n.webkitSupportsFullscreen && (NativeEnterFs(), t = !0)
                    }
                    if (!t) {
                        var s, r = o.frame;
                        if (("dm" == o.file_type || "vimeo" == o.file_type) && o.system.iphone && 1 == v.nativefullios) {
                            o.media.iosfull();
                            return
                        }
                        r.requestFullscreen ? (o.realfullscreen = !0, void 0 !== (s = r.requestFullscreen({
                            navigationUI: "hide"
                        })) && s.then(function() {}).catch(function(t) {})) : r.requestFullScreen ? (r.requestFullScreen({
                            navigationUI: "hide"
                        }), o.realfullscreen = !0) : o.frame.mozRequestFullScreen ? (r.mozRequestFullScreen({
                            navigationUI: "hide"
                        }), o.realfullscreen = !0) : r.webkitRequestFullScreen ? (r.webkitRequestFullScreen({
                            navigationUI: "hide"
                        }), o.realfullscreen = !0) : r.msRequestFullscreen && (r.msRequestFullscreen(), o.realfullscreen = !0)
                    }
                } catch (l) {
                    e = !0, log(l)
                }
                o.realfullscreen || t || (o.system.webkit && o.iniframe ? NativeEnterFs() : this.FullscreenUI()), e || setTimeout(PostFullscreen, 200)
            }, this.NativeExitFs = function() {
                NativeExitFs()
            };
            var lastwheel = {
                x: 0,
                y: 0
            };

            function VolumeWheel(t) {
                if (!(o.droplist && o.droplist.OpenScroll()) && 0 != t.wheelDelta) {
                    if (1 == v.hotkey.scrollwheelfull && o.fullscreen || (o.hidden_volume_over = !0, clearInterval(volumewheelin), volumewheelin = setInterval(function() {
                            o.hidden_volume_over = !1, o.controls.resize(), lastwheel = {
                                x: 0,
                                y: 0
                            }, clearInterval(volumewheelin)
                        }, 2e3), o.controls.resize()), 0 != t.deltaX ? lastwheel.x++ : lastwheel.x--, 0 != t.deltaY ? lastwheel.y++ : lastwheel.y--, lastwheel.x > lastwheel.y) t.deltaX > 0 ? o.actions.Volume(parseFloat(v.volume) - v.hotkey.wheelstep / 10, "no") : o.actions.Volume(parseFloat(v.volume) + v.hotkey.wheelstep / 10, "no");
                    else {
                        var e = o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10;
                        1 == v.hotkey.scrollwheelfull && o.fullscreen ? o.media.scale(t.deltaY > 0 ? e : -e) : (o.actions.Volume(parseFloat(v.volume) + (t.deltaY > 0 ? e : -e), "no"), o.controls.volumescroll())
                    }
                }
            }

            function iosExitFullscreen() {
                o.system.ios && (o.media.removeNativeSubtitle(), js("exitfullscreen")), o.nativefull = !1
            }

            function NewAspect(t, e) {
                if (exist(o.vast) && !e) o.resizeonplay = t;
                else {
                    var n = !1,
                        a = o.container_w / t;
                    if (exist(o.parentIframe) && 1 != v.notframe) try {
                        css(o.parentIframe, {
                            height: a
                        })
                    } catch (s) {
                        n = !0, log("iframe crossdomain issue")
                    }
                    n || (o.aspect = t, o.container_h = a, o.aspect > 0 && css(o.container, {
                        height: a
                    }), js("height", a)), o.vast && !o.fullscreen && (o.screen_h = a, o.vast.Resize())
                }
            }

            function VolumeWheelX(t) {
                lastwheel = {
                    x: 0,
                    y: 0
                }, t ? window.addEventListener("wheel", VolumeWheel) : (clearInterval(volumewheelin), window.removeEventListener("wheel", VolumeWheel))
            }

            function Sub(t) {
                o.sbt && o.sbt.show(exist(t) ? t : o.media.time())
            }

            function Advertising(t) {
                if (1 == v.banner && t.indexOf("pausebanner") > -1 && void 0 !== PauseBannerPlugin && (t.indexOf("init") > -1 ? v.pausebannerinit = 1 : t.indexOf("show") > -1 ? v.pausebannerstatus = 1 : t.indexOf("hide") > -1 && (v.pausebannerstatus = 0), PauseBannerPlugin(t)), "pushbanner" in o.u && "status" in o.u.pushbanner && !0 === o.u.pushbanner.status && "pushbanner" == t && PushBannerPlugin(t), 1 == o.u.qrtag && t.indexOf("qrcode") > -1 && void 0 !== QrCodeAd && ("qrcodeinit" == t && 0 == v.qrinit || "qrcodetoggle" == t) && QrCodeAd(t), 1 == o.u.etag && t.indexOf("endtag") > -1 && void 0 !== EndTagBannerPlugin && ("endtaginit" == t && 0 == v.endtaginit || "endtagtoggle" == t) && EndTagBannerPlugin(t), 1 == o.u.stag && t.indexOf("starttag") > -1 && void 0 !== StartTagBannerPlugin && ("starttaginit" == t && 0 == v.starttaginit || "starttagtoggle" == t) && StartTagBannerPlugin(t), 1 == o.u.s2tag && t.indexOf("start2tag") > -1 && void 0 !== Start2TagBannerPlugin && ("start2taginit" == t && 0 == v.start2taginit || "start2tagtoggle" == t) && Start2TagBannerPlugin(t), v["vast_" + t + "timebreak"] > 0 && o.storage) {
                    var e = localStorage.getItem("pljs" + t + "_" + o.d);
                    if (e) {
                        var n = new Date;
                        if (o.clicktime = n.getTime(), (n.getTime() - e) / 36e5 < v["vast_" + t + "timebreak"]) return !1
                    }
                }
                if (v["vast_" + t + "timelimit"] > 0 && o.media.duration() > 0 && o.media.duration() < 60 * v["vast_" + t + "timelimit"]) {
                    if (!(v["vast_" + t + "timelimited"] > 0)) return !1;
                    v["vast_" + t + "_andlimit"] = v["vast_" + t + "timelimited"]
                }
                if (-1 == o.compilations.indexOf("VAST") || 1 != v.vast || o.noads || 1 != v[t + "s"] || void 0 === VastVideo) return !1;
                if (("intro" == t || "outro" == t) && "undefined" != typeof PluginIntro) return vasturl = [], PluginIntro(t);
                if (exist(o.vast) || exist(o.vastloader)) return !isVisible(o.vastcontainer) || isVastBgLoad(o.vasttype) ? (log("ad bg"), !1) : (log("ad now"), !0);
                if (!exist(v[t]) || !(v[t].toString().indexOf(".") > -1 || v[t].toString().indexOf(":") > -1 || v[t].toString().indexOf("[yandex]") > -1)) return !1;
                js("vast_init", t), isVastBgLoad(t) || "overlay" == t || (setTimeout(function() {
                    o.play || null == o.vastloader && null == o.vast || o.actions.Waiting()
                }, 10), Curtain()), PauseBannerPlugin("pausebannerhide"), vast_and = 0, vast_or = 0, vast_type = t, vasturl = v[t].split(" and "), o.vast_loaders = [], o.adsinchain = vasturl.length, VastAndLimit(), o.adscounter = 1, o.adsfirst = !0;
                for (var a = 0; a < vasturl.length; a++) vasturl[a] = vasturl[a].split(" or ");
                v[t.concat("_", "recover")] = v[t], "preroll" == t && (v[`${t}t`] = v[t]), v[t] = null, o.vasttype = t, "overlay" != t && (o.vast = new VastVideo), o.vastloader = new VastLoader;
                for (var a = 0; a < vasturl.length; a++)
                    for (var s = 0; s < vasturl[a].length; s++) {
                        var r = trim(vasturl[a][s]);
                        if (r.indexOf("[50%]") > 0) {
                            var l = random(1, 2);
                            vasturl[a][s] = vasturl[a][s].replace("[50%]", ""), 2 == l && (vasturl[a][s] = "")
                        }
                    }
                if (1 == v.vast_preload)
                    for (var a = 0; a < vasturl.length; a++) {
                        var d = 0 == a ? 1 : 0;
                        if (vasturl[a].length > d)
                            for (var s = d; s < vasturl[a].length; s++) {
                                var r = trim(vasturl[a][s]);
                                o.system.ie9 ? VastAddPreload(r) : setTimeout(VastAddPreload, 100 * a, r)
                            }
                    }
                return "" == vasturl[0][0] ? VastNext() : o.vastloader.Load(trim(vasturl[0][0]), t), !0
            }

            function MidrollOverlay(t, e, n) {
                if (exist(o[t + "o"]) && 1 == v[t + "s"]) {
                    var a;
                    for (var s in o[t + "o"])
                        if (o[t + "o"].hasOwnProperty(s) && !exist(o[t + "o"][s].worked) && exist(o[t + "o"][s].time) && exist(o[t + "o"][s].vast)) {
                            var r = o[t + "o"][s].time.toString(),
                                l = !1;
                            if (r && ("metadata" == e ? r == e && (l = !0) : (r = r.indexOf("%") > 0 ? n > 0 ? parseInt(r.substr(0, r.indexOf("%"))) * n / 100 : -1 : parseInt(r), e >= r && (v["vast_" + t + "rest"] > 0 && r > -1 && e - r >= v["vast_" + t + "rest"] && (r = -1), r > -1 && (l = !0))), o[t + "o"][s].minduration && o.media.duration() > 0 && o.media.duration() < 1 * o[t + "o"][s].minduration && (o[t + "o"][s].worked = !0, l = !1), l && (a = o[t + "o"][s].vast, v[t] = o[t + "o"][s].vast, o[t + "crtm"] = o[t + "o"][s].time, o[t + "skipimprsd"] = o[t + "o"][s].skipimpessed, Advertising(t)))) {
                                o[t + "o"][s].worked = !0;
                                break
                            }
                        }
                }
            }

            function VastBgLoad() {
                isVastBgLoad() && (0 == o.vast_impressions || 1 == v["vast_" + o.vasttype + "bgload2"]) && (css(o.vastcontainer, {
                    opacity: 0,
                    visibility: "hidden",
                    top: 2e3
                }), log(o.vasttype + " hide"))
            }

            function isVastBgLoad(t) {
                for (var e = !1, n = ["midroll", "pauseroll"], a = 0; a < n.length; a++)(o.vasttype == n[a] || t == n[a]) && 1 == v["vast_" + n[a] + "bgload"] && (e = !0);
                return e
            }

            function VastVisible() {
                isVastBgLoad() && (o.play && (o.media.Pause(), o.controls.Pause()), log(o.vasttype + " show"), css(o.vastcontainer, {
                    opacity: 1,
                    visibility: "visible",
                    top: 0
                }), o.vastfrombg = 1), o.nativefull && !o.realfullscreen ? NativeExitFs() : 1 == v["vast_" + o.vasttype + "normal"] && o.fullscreen && o.actions.Normalscreen()
            }

            function VastGo(t) {
                o.vast.Go(t)
            }

            function VastLongTimeout() {
                exist(o.vast) && o.vast.active() && 0 == o.vast_impressions && (o.vast.RemoveForNextAd(), log("VAST timeout " + v.vast_longtimeout), vasturl = [], VastRemoveAndPlay())
            }

            function VastCheckNext() {
                var t = VastAndLimit();
                log("VAST next " + !t), t ? VastRemoveAndPlay() : VastNext()
            }

            function VastAndLimit() {
                var t = !1;
                if (o.vasttype) {
                    var e = v["vast_" + o.vasttype + "_andlimit"],
                        n = v["vast_" + o.vasttype + "_and2limit"];
                    (n || e) && (n > 0 && o.vast_starts > 0 ? (o.adsinchain = n, o.vast_impressions >= n && (t = !0)) : e > 0 && (o.adsinchain = e, o.vast_impressions >= e && (t = !0)))
                }
                return t
            }

            function VastNext() {
                if (vasturl.length > 0 && vasturl[vast_and]) {
                    if (vast_or < vasturl[vast_and].length - 1) {
                        log("VAST Next"), o.vast && o.vast.RemoveForNextAd(), VastBgLoad(), vast_or++;
                        var t = trim(vasturl[vast_and][vast_or]),
                            e = VastPreloaded(t);
                        "skip" == e && (o.vastloader = new VastLoader, o.vastloader.Load(t, o.vasttype)), "error" == e && VastNext()
                    } else VastRemoveAndPlay()
                } else VastRemoveAndPlay()
            }

            function VastPreloaded(t) {
                var e = "skip";
                if (1 == v.vast_preload && o.vast_loaders) {
                    for (var n = !1, a = 0, s = 0; s < o.vast_loaders.length; s++)
                        if (0 == o.vast_loaders[s].done) {
                            if (o.vast_loaders[s].ldr.preloaded(t)) {
                                o.vast_loaders[s].done = 1;
                                var r = o.vast_loaders[s].ldr.Status();
                                "ready" == r ? (o.vastloader = o.vast_loaders[s].ldr, log("VAST preloaded"), o.vast_loaders[s].ldr.Ready(), e = r) : ("" == r && (e = "ok", log("VAST preloading"), o.vastloader = o.vast_loaders[s].ldr, o.vast_loaders[s].ldr.disablePreload()), "error" == r && (e = "error")), n = !0
                            }
                            if (n && 0 == o.vast_loaders[s].load) {
                                if (++a < 6) VastPreloadLoad(o.vast_loaders[s]);
                                else break
                            }
                        }
                }
                return e
            }

            function VastAddPreload(t) {
                if (1 == v.vast_preload && o.vast_loaders) {
                    for (var e = 0, e = 0; e < vasturl.length; e++)
                        if (vasturl[e] == t && vast_and >= e) return;
                    if (1 == vasturl.length && vasturl[0].length > 1);
                    else {
                        var n = 0;
                        for (e = 0; e < o.vast_loaders.length; e++) 0 == o.vast_loaders[e].done && n++;
                        o.vast_loaders.push({
                            load: 0,
                            done: 0,
                            x: trim(t),
                            t: o.vasttype,
                            ldr: new VastLoader(!0)
                        }), n < 5 && VastPreloadLoad(o.vast_loaders[o.vast_loaders.length - 1])
                    }
                }
            }

            function VastPreloadLoad(t) {
                t && (t.load = 1, t.ldr.Load(t.x, t.t))
            }

            function VastRemoveAndPlay(t) {
                var e, n = VastAndLimit();
                if (log("VAST remove (" + o.vast_impressions + ")"), vasturl.length > 0 && vast_and == vasturl.length - 1 && 0 == vasturl[0][0].indexOf("js:") && (vast_and = -1, vasturl = [
                        [vasturl[0][0]]
                    ]), 2 == o.vast_stop && (n = !0), vasturl.length > vast_and + 1 && !n) {
                    o.vast.RemoveForNextAd(), VastBgLoad(), vast_and++, o.adscounter++, vast_or = 0;
                    var a = trim(vasturl[vast_and][0]),
                        s = VastPreloaded(a);
                    "skip" == s && (o.vastloader = new VastLoader, o.vastloader.Load(a, vast_type)), "error" == s && VastRemoveAndPlay(t)
                } else {
                    if (RemoveCurtain(), o.controls.StopWaiting(), exist(o.vast) && (o.vast.Remove(), o.vast = null), o.vastloader = null, vasturl = [], vast_or = 0, vast_and = 0, o.vastfrombg = 0, 1 != o.shwvstfnsh && js("vast_finish", o.vasttype), o.shwvstfnsh = 0, 1 == v.vast_ima && o.ima) {
                        try {
                            o.ima.Destroy()
                        } catch (r) {
                            log(o.ima, r)
                        }
                        o.ima = void 0
                    }
                    vast_type = "", o.vast_impressions = 0, o.vpaid_starts = 0, clearTimeout(o.vast_longtimeout), o.vast_longtomsg && o.vast_longtomsg.remove(), o.vast_starts++, ("preroll" == o.vasttype || "pauseroll" == o.vasttype && 1 == v.pauserollonplay && o.actplay || "midroll" == o.vasttype) && "?" != v.file && (o.media.AfterVast(), "youtube" == o.file_type && !o.vastclick && o.system.ios && (e = !0, "preroll" == o.vasttype && o.media.reYT()), e || "dontplay" == t || 1 == v.vast_dontplay || setTimeout(() => o.actions.Play(1), 100)), o.resizeonplay > 0 && (NewAspect(o.resizeonplay), o.resizeonplay = 0), "postroll" == o.vasttype && End(), o.vastclick = !1, o.vasttype = null
                }
            }

            function Curtain() {
                o.curtain || (o.curtain = createElement("div"), o.frame.appendChild(o.curtain), Pos0(o.curtain), css(o.curtain, {
                    background: "#000000",
                    opacity: .1
                }), o.curtain.style.zIndex = 1001)
            }

            function RemoveCurtain() {
                o.curtain && (o.frame.removeChild(o.curtain), o.curtain = null)
            }

            function ShowPoster() {
                exist(o.poster) && (v.poster != o.currentposter && Poster(v.poster, o.poster, v.poster_scale), show(o.poster), css(o.poster, {
                    opacity: v.poster_a
                }), o.controls.refresh())
            }

            function HidePoster2() {
                clearTimeout(o.pstr_to), (1 != v.posteronpause || o.play) && (css(o.poster, {
                    opacity: 0
                }), setTimeout(HidePoster3, 500))
            }

            function HidePoster3() {
                (o.play || 1 != v.posterhide) && hide(o.poster)
            }

            function StopOtherPlayer(t) {
                if (1 == v.stopotherplayers)
                    for (var e = 0; e < pljssglobal.length; e++) pljssglobal[e].api("id") != v.id && pljssglobal[e].api("pause");
                pljssglobalid = v.id
            }

            function IndexPlaylist(t) {
                var e = Object.keys(t).length;
                return e > 0 && (t = IndexPlaylistProcessor(t, e, "", -1)), t
            }

            function IndexPlaylistProcessor(t, e, n, a) {
                var s, r = [];
                exist(t.playlist) && (e = (t = t.playlist).length);
                for (var l = 0, d = 0; d < e; d++) {
                    if (s = !1, exist(t[d].id) && (t[d].pjs_id = t[d].id), t[d].id = "x" + n + "-" + d + (exist(t[d].id) ? "-" + t[d].id : ""), -1 != a || 0 != d || exist(t[d].folder) || (o.pl_first_id = t[d].id), !exist(o.pl_first_id) && (0 != a || exist(t[d].folder) || (o.pl_first_id = t[d].id)), t[d].pjs_parent = n, t[d].pjs_parent_i = a, t[d].pjs_i = l, exist(t[d].comment)) {
                        t[d].title = t[d].comment;
                        var c = t[d].file ? t[d].file.indexOf("[") : 0,
                            u = t[d].file ? t[d].file.indexOf("]") : 0;
                        if (c > 0 && u > 0) {
                            for (var $ = t[d].file.substr(c + 1, u - c - 1), f = $.split(","), p = "", _ = 0; _ < f.length; _++) p += "[" + f[_] + "]" + t[d].file.replace("[" + $ + "]", f[_]) + (_ < f.length - 1 ? "," : "");
                            t[d].file = p
                        }
                    }
                    if (exist(t[d].playlist) && (t[d].folder = t[d].playlist), exist(t[d].folder) || exist(t[d].file) && ("" != t[d].file || exist(t[d].redirect)) || (s = !0), s || (o.playlist_dic[t[d].id] = t[d], l += 1), exist(t[d].folder)) {
                        var h = Object.keys(t[d].folder).length;
                        h > 0 && (t[d].folder = IndexPlaylistProcessor(t[d].folder, h, t[d].id, d))
                    }
                    s || r.push(t[d])
                }
                return r
            }

            function FindFileInPlaylist() {
                var t = [];
                if (exist(v.plstart)) {
                    if (0 != v.plstart.indexOf("x-"))
                        for (var e in o.playlist_dic) o.playlist_dic.hasOwnProperty(e) && o.playlist_dic[e].pjs_id == v.plstart && (v.plstart = e);
                    exist(o.playlist_dic[v.plstart]) ? (1 == v.playlist.norootplstart && (v.playlist.openplaylistroot = 0), t = o.playlist_dic[v.plstart]) : (t = o.playlist[0], v.plstart == o.plcontinue && (o.seekto = void 0))
                } else t = o.playlist[0];
                if (t) {
                    for (var n = 0; n < 10; n++)
                        if (exist(t.folder)) t = t.folder[0];
                        else break;
                    v.plstart = t.id, v.plstart == o.plcontinue && (t.start = void 0)
                }
                return t
            }

            function End() {
                gaTracker("end", "End", 1), o.actions.VastRecover(), o.storage && 1 == v.timestore && o.continue.write(0, o.media.duration()), o.controls.PlaylistExist() ? 1 == v.playlist.autoplaylist && o.controls.PlaylistNextExist() ? (o.controls.PlaylistNext(), o.play && o.system.ios && o.file_type) : End2() : (1 == v.finishnormal && o.fullscreen && o.actions.Normalscreen(), ShowPoster(), js("finish"))
            }

            function End2() {
                if (1 == v.playlist.playlistrewind && !o.controls.PlaylistNextExist()) {
                    o.controls.PlaylistRewind();
                    return
                }
                1 == v.playlist.openplaylistafter && (o.controls.PlaylistVisible() || o.controls.Playlist()), ShowPoster(), js("finish")
            }

            function fjs(x) {
                if (0 == x.indexOf("js:")) try {
                    x = eval(x.substr(3))
                } catch (e) {
                    console.log(e.message)
                }
                return x || ""
            }

            function Heartbeat() {
                var t = Math.floor(Date.now() / 1e3),
                    e = (exist(v.livets) ? v.livets : 0) + parseInt(o.media.time()),
                    n = 0;
                o.system.desktop && (n = 1), o.system.ios && (n = 2), o.system.android && (n = 3), o.system.winmob && (n = 4), o.system.tv && (n = 5);
                var a = v.heartbeat.replace("[vts]", t);
                a = (a = a.replace("[fts]", e)).replace("[dvtp]", n);
                var s = document.createElement("img");
                s.setAttribute("src", a), s.setAttribute("height", "1px"), s.setAttribute("width", "1px"), o.frame.appendChild(s)
            }
            this.FullscreenUI = function() {
                if (o.fullscreen_start) {
                    if (o.fullscreen = !0, o.controls.Fullscreen(), !o.realfullscreen) {
                        if (exist(o.parentIframe)) try {
                            css(o.parentIframe, {
                                width: "100%",
                                height: "100%",
                                position: "fixed",
                                left: 0,
                                top: 0,
                                zIndex: "100000"
                            })
                        } catch (t) {}
                        css(o.frame, {
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            left: 0,
                            top: 0,
                            zIndex: "100000"
                        }), o.screen_w = o.frame.offsetWidth, o.screen_h = o.frame.offsetHeight;
                        try {
                            document.body.style.overflow = "hidden", exist(o.playlist) || (document.ontouchmove = function(t) {
                                t.preventDefault()
                            })
                        } catch (e) {}
                    }
                    1 == v.fullblack && css(o.frame, {
                        backgroundColor: "#000000"
                    }), o.droplist && o.droplist.Close(), Sub(), o.fullscreen_start = !1
                }
            }, this.Normalscreen = function() {
                _fullscreen_end = !0, document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen ? document.exitFullscreen() : document.cancelFullscreen ? document.cancelFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), o.realfullscreen || this.NormalscreenUI(!1)
            }, this.changeAspect = function(t, e) {
                NewAspect(t, e)
            }, this.NormalscreenUI = function(t) {
                if (_fullscreen_end || t) {
                    if (o.fullscreen = !1, o.nativefull = !1, !o.realfullscreen) {
                        if (exist(o.parentIframe)) try {
                            css(o.parentIframe, {
                                position: "static",
                                left: 0,
                                top: 0,
                                zIndex: "unset"
                            }), css(o.parentIframe, o.parentIframe_style), css(o.parentIframe, {
                                width: o.normal_w,
                                height: o.normal_h
                            })
                        } catch (e) {}
                        css(o.frame, {
                            width: o.normal_w,
                            height: o.normal_h,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            zIndex: "unset"
                        });
                        try {
                            document.body.style.overflow = "auto", document.ontouchmove = function(t) {
                                return !0
                            }
                        } catch (n) {}
                    }
                    o.controls.Normalscreen(), 1 == v.fullblack && (css(o.frame, {
                        backgroundColor: v.screencolor
                    }), 1 == v.transparent ? o.frame.style.backgroundColor = "transparent" : css(o.frame, {
                        backgroundColor: v.screencolor
                    })), 1 == v.hotkey.volumewheelfull && (VolumeWheelX(!1), o.volumewheel = !1), o.droplist && o.droplist.Close(), Sub(), o.subdrag && (o.subdrag = !1), o.controls.PlaylistHere(), _fullscreen_end = !1, js("exitfullscreen"), o.realfullscreen = !1, o.fullscreen_process = !1
                }
            }, this.volumewheel = function(t) {
                VolumeWheelX(t)
            }, this.Stop = function() {
                v.preload = 0, o.controls.Pause(), o.actions.Stopped(), o.media.Volume(v.volume), o.controls.SettingsVisible() && o.controls.Settings(), o.muted && this.Mute(), exist(o.heartbeatInterval) && (clearInterval(o.heartbeatInterval), o.heartbeatInterval = null), Sub(0), log("stop"), js("stop")
            }, this.StopMedia = function() {
                v.preload = 0, v.autoplay = 0, o.media.Recover(), o.actions.Stop()
            }, this.SetQuality = function(t) {
                exist(o.current_quality) && o.current_quality != t && (o.current_quality = t, 1 == v.qualitystore && (o.default_quality = o.files_quality[t], o.storage && localStorage.setItem("pljsquality", o.default_quality)), o.media.SetQuality(t), js("quality", o.files_quality[t]), o.controls.QualityChanged(t))
            }, this.AirplayChanged = function() {
                o.controls && o.controls.AirplayChanged()
            }, this.SetAudioTrack = function(t) {
                exist(o.current_audiotrack) && o.current_audiotrack != t && (o.current_audiotrack = t, 1 == v.trackstore && (o.default_audio = v.default_audio = o.files_audiotrack[t], o.storage && localStorage.setItem("pljstrack", o.default_audio)), o.media.SetAudioTrack(t), js("audiotrack", t), o.controls.SettingChanged("audiotrack"))
            }, this.SetSpeed = function(t, e) {
                "0.0" == t && (t = .1);
                var n = t;
                if (String(n).indexOf(".") > 0 && (e = 1), n *= 1, e || (n = t == o.speed1 ? 1 : o.files_speed[t], o.current_speed = t), o.line_speed || e) {
                    if (t == o.custom_speed) return;
                    o.custom_speed = n;
                    for (var a = 0; a < o.files_speed.length; a++)
                        if (n <= 1 * o.files_speed[a]) {
                            o.current_speed = a;
                            break
                        }
                }
                o.storage && 1 == v.speedstore && localStorage.setItem("pljsspeed", n), js("speed", n), o.media.SetSpeed(n), o.controls.SettingChanged("speed")
            }, this.RenewSubtitle = function() {
                o.sbt && (Sub(), o.sbt.style())
            }, this.Subtitle = function(t) {
                "function" == typeof PluginSub && (o.sbt || (o.sbt = new PluginSub), o.sbt.start(t))
            }, this.advertising = function(t) {
                Advertising(t)
            }, this.isVastBgLoad = function(t) {
                return isVastBgLoad(t)
            }, this.VastImpression = function(t) {
                t || VastVisible(), "midroll" == o.vasttype && o.midrollimprsd.push(o.current_vast_url)
            }, this.VpaidStarted = function() {
                VastVisible()
            }, this.VastShow = function() {
                VastVisible()
            }, this.VastReady = function(t) {
                if (o.vastloader = null, o.vastfrombg = 0, log("VAST ready", o.vasttype), js("vast_ready", o.vasttype), "overlay" == t.type) {
                    var e = new VastOverlay(t);
                    o.overlays.push(e)
                } else exist(o.vast) ? (0 == v.preload && 1 == v.vastbgpreload && 0 == o.media.time() && 0 == o.media.duration() && (v.preload = 1, o.media.Preload()), (!o.vast.tagLive() || t.isVpaid) && o.vastgo > 0 && (log("VAST renew"), o.vast.Remove(), o.vast = null, o.vast = new VastVideo), isVastBgLoad() ? VastBgLoad() : o.play && (o.media.Pause(), o.controls.Pause()), o.vastgo++, o.adsfirst && v.vast_longtimeout > 0 && (clearTimeout(o.vast_longtimeout), o.vast_longtimeout = setTimeout(VastLongTimeout, 6e4 * v.vast_longtimeout), exist(v.vast_longtimemsg) && "" != v.vast_longtimemsg && (o.vast_longtomsg && o.vast_longtomsg.remove(), o.vast_longtomsg = new PluginVastTimeMsg)), o.adsfirst = !1, v.vast_prestarttimeout > 0 ? (log("VAST startdelay"), js("vast_startdelay"), setTimeout(VastGo, 1e3 * v.vast_prestarttimeout, t)) : VastGo(t)) : log("VAST alarm")
            }, this.VastError = function() {
                js("vast_error", o.vasttype), log("VAST error"), VastCheckNext()
            }, this.VastNext = function() {
                VastCheckNext()
            }, this.VastRemoveUrl = function(t) {
                if (v[o.vasttype + "_recover"])
                    for (var e = 0; e < 3; e++) v[o.vasttype + "_recover"] = v[o.vasttype + "_recover"].replace(t + (0 == e ? " and " : 1 == e ? " or " : ""), "")
            }, this.VastInsertAnd = function(t, e) {
                if ("" != t) {
                    var n = vast_and,
                        a = !1;
                    if (e)
                        for (var s = 0; s < vasturl.length; s++) vasturl[s] == e && (n = s);
                    if (1 == vasturl.length && vasturl[0].length > 1 && vast_or < vasturl[0].length - 1 && vasturl[vast_or]) {
                        var r = vasturl[vast_or].slice(1, 99);
                        vasturl[0].splice(vast_or + 1, 99), a = !0
                    }
                    if ("object" == typeof t)
                        for (var l = 0; l < t.length; l++) vasturl.splice(n + l + 1, 0, [t[l]]), o.system.ie9 ? VastAddPreload(t[l]) : setTimeout(VastAddPreload, 100 * l, t[l]);
                    else "string" == typeof t && (vasturl.push([t]), VastAddPreload(t));
                    a && (vasturl[vasturl.length - 1] = vasturl[vasturl.length - 1].concat(r))
                }
            }, this.VastInsertOr = function(t, e) {
                if ("" != t) {
                    var o = vast_and;
                    if (e)
                        for (var n = 0; n < vasturl.length; n++) vasturl[n] == e && (o = n);
                    if (vasturl[o]) {
                        if ("object" == typeof t)
                            for (var a = 0; a < t.length; a++) vasturl[o].push(t[a]);
                        else "string" == typeof t && vasturl[o].push(t)
                    }
                }
            }, this.VastRemoveAndPlay = function(t) {
                VastRemoveAndPlay(t)
            }, this.EmptyVastUrl = function() {
                vasturl = [
                    [""]
                ]
            }, this.VastRecover = function(t) {
                for (var e, n = ["preroll", "pauseroll", "postroll", "intro", "outro"], a = 0; a < n.length; a++) e = !1, t && t != n[a] && (e = !0), !e && exist(v[n[a].concat("_", "recover")]) && (v["vast_" + n[a].concat("_", "limit")]--, v["vast_" + n[a].concat("_", "limit")] > 0 && (v[n[a]] = v[n[a].concat("_", "recover")], v[n[a].concat("_", "recover")] = null));
                if (("preroll" == t || "midroll" == t) && v.vast_midroll_limit > 1 && exist(o.midrollo) && 1 == v.midrolls) {
                    for (var a in o.midrollo) o.midrollo[a].worked = void 0;
                    v.vast_midroll_limit--
                }
            }, this.Password = function() {
                Curtain(), exist(o.pass) && (o.pass.Remove(), o.pass = null), o.pass = new Pass
            }, this.RemovePassword = function() {
                RemoveCurtain(), o.pass.Remove(), o.pass = null
            }, this.Curtain = function() {
                Curtain()
            }, this.RemoveCurtain = function() {
                RemoveCurtain()
            }, this.HidePoster = function() {
                exist(o.poster) && isVisible(o.poster) && (0 == o.media.time() && 1 == v.posterhidestart || (v.posterhidetime > 0 ? (clearTimeout(o.pstr_to), o.pstr_to = setTimeout(HidePoster2, 1e3 * v.posterhidetime)) : HidePoster2()))
            }, this.ShowPoster = function() {
                ShowPoster()
            }, this.ShuffleEnd = function() {
                End2()
            }
        },
        Media = function(t) {
            var t, e, n, a, s, r, l, d, c, u = "",
                $ = 0,
                f = !1,
                p = !1;
            o.mediascale = {
                x: 1,
                y: 1,
                x0: 1,
                y0: 1
            };
            var _ = 0,
                h = 0;
            if ("string" == typeof t) {
                if (0 == (t = trim(t)).indexOf("[{")) try {
                    t = t.replace(/pjs'qt/ig, '"'), t = JSON.parse(t), d && (t = o.actions.File(t))
                } catch (g) {
                    console.log(g), t = "incorrect JSON"
                }
                0 == t.indexOf("#" + v.enc2) && (t = o[o.fd[0]](t)), t && 0 == t.indexOf("#" + v.enc3) && t.indexOf(v.file3_separator) > 0 && (t = o[o.fd[1]](t)), t && 0 == t.indexOf("#0") && (t = t.indexOf(o.pltxt) > 0 ? fd0(t.replace(o.pltxt, "")) + o.pltxt : fd0(t)), 1 == v.fplace && (t = fplace(t)), "string" == typeof t && (t.indexOf(".m3u") == t.length - 4 || t.indexOf(".txt") > 0) && (c = t.split(" or "), b())
            }

            function m() {
                var t;
                o.mediacontainer.offsetLeft > o.screen_w / 2 ? o.controls.PlaylistPrevExist() && (t = !0, o.controls.PlaylistPrev()) : o.mediacontainer.offsetLeft < -o.screen_w / 2 && o.controls.PlaylistNextExist() && (t = !0, o.controls.PlaylistNext()), t ? css(o.mediacontainer, {
                    left: 0
                }) : new Motion({
                    mc: o.mediacontainer,
                    type: "left",
                    to: 0,
                    time: .1,
                    ease: "back",
                    me: "mdswp"
                })
            }

            function b() {
                (t = c[_]).indexOf(o.pltxt) > 0 && (t = t.replace(o.pltxt, ""), v.file = t);
                let e = new XMLHttpRequest;
                e.open("POST", t, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.setRequestHeader("X-CSRF-TOKEN", o.p.key), e.onload = function() {
                    4 == this.readyState && 200 == this.status ? (w(this), o.controls.NewPl()) : y(1)
                }, e.onerror = function(t) {
                    y(1)
                }, e.send(null), d = !0
            }

            function y(t) {
                _ + 1 < c.length && (_++, b(), t = 0), 1 == t && O("playlist not found or access denied"), 2 == t && O("playlists JSON")
            }

            function w(e) {
                if (e.responseText) {
                    var n = e.responseText;
                    if (0 == n.indexOf("#" + v.enc2) && (n = o[o.fd[0]](n)), 0 == n.indexOf("#" + v.enc3) && n.indexOf(v.file3_separator) > 0 && (n = o[o.fd[1]](n)), t.indexOf(".m3u") == t.length - 4) {
                        var a = n.split(/(\r\n\t|\n|\r\t)/gm);
                        t = [];
                        for (var s = 1, r = "", l = 0; l < a.length; l++) {
                            if (a[l].indexOf("#EXTINF") > -1 && a[l].indexOf(" - ") > -1) {
                                var d = a[l].split(" - ");
                                r = d[d.length - 1]
                            }
                            a[l].indexOf("http") > -1 && (t.push({
                                title: "" + ("" != r ? r : s),
                                file: a[l]
                            }), s++, r = "")
                        }
                    } else {
                        n = n.replace(/(\r\n\t|\n|\r\t)/gm, "");
                        try {
                            t = JSON.parse(n)
                        } catch (c) {
                            y(2)
                        }
                    }
                    exist(t.items) && (t = YoutubePlaylist(t)), o.controls && 1 == v.playlist.openplaylistbefore && !o.controls.PlaylistVisible() && o.controls.PlaylistShow(), k(), MainResize(), setTimeout(function() {
                        js("playlist")
                    }, 1)
                }
            }

            function k() {
                (t = o.actions.File(t)) && "?" != t && R(t)
            }

            function O(t) {
                log("Error: " + t);
                var n = !0,
                    s = !0;
                if (js("loaderror", t), e && e.length > 0) {
                    if ((n = ++a > e.length - 1) && 1 == v.tryotherquality && o.files.length > 1 && (-1 == o.files_quality[o.current_quality].indexOf(Lang("loading_error")) && (o.files_quality[o.current_quality] = o.files_quality[o.current_quality] + " (" + Lang("loading_error") + ")"), o.current_quality > 0 ? (s = !1, o.actions.SetQuality(o.current_quality - 1), U()) : -1 == o.files_quality[o.current_quality + 1].indexOf(Lang("loading_error")) && (s = !1, o.actions.SetQuality(o.current_quality + 1), U())), n) 1 == v.reload && s && (n = !1, S());
                    else {
                        var l = !1;
                        o.seekto > 0 || !o.start || r.isLive() || (o.seekto = T()), (o.file_type != N(e[a]) || "native" != o.file_type) && o.play && (o.actions.Stop(), l = !0), log("Alternative source", o.seekto), R("or"), o.start && !o.vast && r.Play(), U()
                    }
                }
                n && s && t && L(t, !0)
            }

            function L(t, e) {
                gaTracker("error", "Error", !0), 1 == v.alerts && !o.media_error && (1 == v.alert404 ? o.alert.txt(v.alert404text) : o.alert.txt(t), 1 == v.alert404v && exist(v.alert404video) && (o.err404v = new PluginErrorVideo, o.actions.HidePoster())), e && (o.media_error = !0), o.play && (o.actions.StopWaiting(), o.controls.Pause()), exist(o.poster) && !exist(o.err404v) && o.actions.ShowPoster(), js("error", t)
            }

            function S() {
                log("Error Reload Timeout " + ++h), o.play && (o.rldplay = 1), exist(o.reloadto) && clearTimeout(o.reloadto), o.reloadto = setTimeout(C, 1e3 * v.reloadtimeout)
            }

            function C() {
                var t = existv(v.reloadtimes, 10);
                (o.play || 1 == o.rldplay) && (o.rldplay = 0, h < t ? o.actions.Reload() : L("Reload Error " + r.errorMessage()))
            }

            function T() {
                return r.time()
            }

            function E() {
                return r.duration()
            }

            function P(t, e) {
                var n = t.height + "p";
                return t.height < 200 ? n = "160p" : t.height >= 200 && t.height <= 300 ? n = "240p" : t.height > 300 && t.height <= 400 ? n = "360p" : t.height > 400 && t.height <= 500 ? n = "480p" : t.height > 500 && t.height <= 600 ? n = "540p" : t.height > 600 && t.height <= 900 ? n = "720p" : t.height > 900 && t.height <= 1200 ? n = "1080p" : t.height > 1200 && t.height <= 1800 ? n = "1440p" : t.height > 1800 && (n = "2160p"), 426 == t.width && t.height <= 240 ? n = "240p" : 640 == t.width && t.height <= 360 ? n = "360p" : t.width >= 854 && t.width <= 860 && t.height <= 480 ? n = "480p" : 1280 == t.width && t.height <= 720 ? n = "720p" : 1920 == t.width && t.height <= 1080 ? n = "1080p" : 2560 == t.width && t.height <= 1440 ? n = "1440p" : 3840 == t.width && t.height <= 2160 && (n = "2160p"), 1 == v.settings.customqualities && exist(v.settings["name" + n]) ? n = v.settings["name" + n] : (1 == e && (n = Lang(n)), 2 == e && exist(t.bitrate) && (n = parseInt(t.bitrate / 1e3) + " " + Lang("kbps"))), n
            }

            function A(t) {
                var e = t.toLowerCase();
                return "eng" == e || "en" == e ? t = "English" : ("rus" == e || "ru" == e) && (t = "Русский"), "object" == typeof v.rename_audio && (t = existv(v.rename_audio[t], t)), t
            }

            function I() {
                if (o.tagvideo && o.subs) {
                    r.removeTracks();
                    for (var t = 0; t < o.subs.length; t++) r.addTrack(o.subs[t], o.files_subtitle[t], t == o.current_subtitle)
                }
            }

            function z() {
                var t = !1;
                return r && ("youtube" == o.file_type && (t = r.auto()), "hls" == o.file_type && 1 == v.hlsquality && q() > 1 && 1 == v.hlsautoquality && (t = r.auto()), "dash" == o.file_type && 1 == v.dashquality && V() > 1 && (t = r.auto())), t
            }

            function q() {
                return "hls" == o.file_type ? r.HlsLevelsLength() : 0
            }

            function V() {
                return "dash" == o.file_type ? r.DashLevelsLength() : 0
            }

            function M() {
                u = r ? r.status() : ""
            }

            function H(t) {
                e = t.split(" or ");
                for (var s = 0; s < e.length; s++) e[s].indexOf(" and ") > -1 && (n = e[s].split(" and "), e[s] = n[random(0, n.length - 1)]), exist(v.prefile) && -1 == e[s].indexOf("//") && (e[s] = v.prefile + e[s]);
                a = 0
            }

            function D() {
                M(), ("playing" == u || o.casting) && o.actions.Playing(), "" != u && o.actions.Loading()
            }

            function j() {
                o.poster && o.frame.removeChild(o.poster), o.poster = createElement("div"), css(o.poster, {
                    "pointer-events": "none",
                    opacity: v.poster_a,
                    transition: "opacity 0.5s"
                }), 1 == v.poster_float ? PluginFloatPoster() : css(o.poster, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                }), o.frame.appendChild(o.poster)
            }

            function R(n, s, l) {
                if ("" == v.file2_separator && (v.file2_separator = ";"), n.indexOf("{") > -1 && n.indexOf("}") > -1 && n.indexOf(v.file2_separator) > -1) {
                    var d = n.split(v.file2_separator);
                    o.audiotracks = [];
                    for (var c = 0; c < d.length; c++) o.files_audiotrack[c] = d[c].substr(d[c].indexOf("{") + 1, d[c].indexOf("}") - 1), o.audiotracks[c] = d[c].substr(d[c].indexOf("}") + 1), exist(v.default_audio) && v.default_audio == o.files_audiotrack[c] && (o.current_audiotrack = c);
                    n = o.audiotracks[o.current_audiotrack]
                }
                exist(e) || (e = []), o.fileTimeout && clearTimeout(o.fileTimeout), n && "or" != n && "x" != n && H(n);
                var u = o.file_type;
                if (e.length > 0) {
                    o.file_type = N(e[a]);
                    var $ = !1;
                    if (l && ($ = !0), (t = e[a]) && (t = t.replace(/\(random\)/g, Math.random())), t.indexOf("~") > -1 || t.indexOf("#") > -1) {
                        function f() {
                            return new Promise(function(e) {
                                let n = new XMLHttpRequest,
                                    a = `${v.file_path}${t.substr(1)}.txt`;
                                n.open("POST", a, !1), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-CSRF-TOKEN", o.p.key), n.onreadystatechange = function() {
                                    n.readyState == XMLHttpRequest.DONE && 200 == n.status && e(n.response)
                                }, n.send(null)
                            })
                        }
                        var _ = !1;
                        f().then(function(t) {
                            function e() {
                                if (!0 !== o.start || !0 !== o.play || _) setTimeout(e, 1e4);
                                else {
                                    let t;
                                    gif(`//stat.stats.rip/?player=HDVB&service=player&host=${o.p.host}&id=${o.p.kp}&pre=${"vast_started"in o&&!0===o.vast_started?1==("undefined"==typeof adblock?1:o.ab?1:"none"==window.getComputedStyle(document.querySelector("#adv"),null).display?1:0)?0:1:0}${o.p.translator?"&translator="+o.p.translator:""}`), _ = !0
                                }
                            }

                            function a() {
                                !0 === o.start ? gif(`//stat2.${o.p.href}/?player=HDVB&host=${o.p.host}&id=${o.p.kp}`) : setTimeout(a, 1e4)
                            }
                            $ || "x" == n || !r || o.file_type != u || "native" != u && ("vimeo" != u || o.system.mobile) && ("youtube" != u || !o.start || p) && "dm" != u && "hls" != u && "dash" != u ? (log("New"), W(), F(t)) : (r.src(t), log("src")), setTimeout(e, 1e4), setTimeout(a, 1e4), PauseBannerPlugin("pausebannerhide")
                        })
                    } else $ || "x" == n || !r || o.file_type != u || "native" != u && ("vimeo" != u || o.system.mobile) && ("youtube" != u || !o.start || p) && "dm" != u && "hls" != u && "dash" != u ? (log("New"), W(), F(t)) : (r.src(t), log("src")), PauseBannerPlugin("pausebannerhide");
                    o.speed1 && (o.line_speed ? r.setSpeed(o.custom_speed) : o.current_speed != o.speed1 && r.setSpeed(o.files_speed[o.current_speed]))
                }!s && (clearInterval(o.timerInterval), o.timerInterval = setInterval(D, o.timerTime), exist(v.subtitle) || 1 != v.sub_upload || 1 != v.sub_upload0 || (v.subtitle = ""), exist(v.subtitle) && o.actions.Subtitle(v.subtitle), 1 == v.hidevideo && (1 == v.nativecontrolsmobile && o.system.mobile || ("youtube" == o.file_type ? css(o.mediacontainer, {
                    top: -3e3,
                    left: -3e3
                }) : hide2(o.mediacontainer), v.toolbar.hide = 0)))
            }

            function N(t) {
                var e = "native";
                if (t) {
                    if (t.indexOf(".m3u8") > 0) e = "hls";
                    else if (t.indexOf(".mpd") > 0) e = "dash";
                    else if (0 == t.indexOf("ws")) e = o.ws;
                    else if (t.indexOf("youtube.com/") > -1 || t.indexOf("youtu.be/") > -1) {
                        if ("function" == typeof MediaYoutube) {
                            if (e = "youtube", 1 == v.youtubeposter) {
                                var n = "https://img.youtube.com/vi/" + YoutubeID(t) + "/";
                                B(n + "maxresdefault.jpg", function(t) {
                                    t > 100 ? v.poster = n + "maxresdefault.jpg" : v.poster = n + "hqdefault.jpg", o.playlist_dic && (o.playlist_dic[o.plid].poster = v.poster), 1 == v.autoplay || o.start || Poster(v.poster, o.poster, v.poster_scale)
                                })
                            }
                        } else log("No YouTube")
                    } else 1 == v.vimeo && t.indexOf("vimeo.com/") > -1 ? e = "vimeo" : 1 == v.dm && t.indexOf("dailymotion.com") > -1 ? e = "dm" : 1 == v.pjsframe && "function" == typeof PjsFramed && PjsFramed(t) && (e = "pjs")
                }
                return o.tagvideo = "native" == e || "hls" == e || "dash" == e || e == o.ws, e
            }

            function B(t, e) {
                var n = new Image;
                n.onload = function() {
                    e(this.height)
                }, n.src = t
            }

            function F(t) {
                o.file_type = N(t), o.tagvideo && (r = new MediaVideo(t, o.mediacontainer, !1)), "youtube" == o.file_type && (r = new MediaYoutube(t, o.mediacontainer)), 1 == v.vimeo && "vimeo" == o.file_type && (r = new MediaVimeo(t, o.mediacontainer)), "pjs" == o.file_type && (r = new MediaPjs(t)), "dm" == o.file_type && (r = new MediaDaily(t, o.mediacontainer)), o.controls && o.controls.UpdateSettings();
                var e = 0;
                exist(v.duration) && (o.continue && 1 == v.timestore && !o.start && (e = o.continue.flag().t), setTimeout(function() {
                    o.actions.Duration(e, v.duration)
                }, 100))
            }

            function W() {
                r && (r.Remove(), r = null, u = "ended"), l && (l.Remove(), l = null, l = void 0, o.mediapip.remove(), o.media2 = null, o.mediapip = null)
            }

            function U() {
                v.fileto > 0 && e.length > 1 && 0 == E() && (clearTimeout(o.fileTimeout), o.fileTimeout = setTimeout(Y, 1e3 * v.fileto))
            }

            function Y() {
                o.play && 0 == E() && 0 == T() && r && 0 == r.loaded() && a != e.length - 1 && O("File Timeout")
            }

            function X(t) {
                if (String(t).indexOf(":") > 0) {
                    var e = t.split(":"),
                        n = o.screen_w / o.screen_h,
                        a = o.media.size();
                    a.width > 0 && (n = a.width / a.height);
                    var s = e[0] / e[1];
                    if (n != s) {
                        o.tagvideo && r.ObjectFit();
                        var l = o.screen_h * s / o.screen_w,
                            d = o.screen_w / s / o.screen_h;
                        l < 1 ? (o.mediascale.x0 = o.mediascale.x = parseFloat(l), o.mediascale.y = 1) : (o.mediascale.x = 1, o.mediascale.y0 = o.mediascale.y = parseFloat(d)), css(o.mediacontainer, {
                            transform: "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                        }), o.custom_aspect = t
                    }
                } else o.mediascale.x += parseFloat(t), o.mediascale.y += parseFloat(t), css(o.mediacontainer, {
                    transform: "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                });
                1 == v.hotkey.scaledrag && (!o.mediadrag && (o.mediascale.x > 0 || o.mediascale.y > 1) && (PluginMovable(o.mediacontainer, "o.dragging"), o.mediadrag = !0), Q()), o.controls.MenuProc("scale")
            }

            function Q() {
                o.mediadrag && 1 != v.hotkey.scaledrag0 && 1 == o.mediascale.x && 1 == o.mediascale.y && css(o.mediacontainer, {
                    top: 0,
                    left: 0
                })
            }

            function G() {
                return e && e.length > 0 && e[a] ? e[a] : ""
            }

            function Z() {
                var t = XHR(v.tagsurl + "?url=" + e[a]);
                t.onload = function() {
                    4 == this.readyState && 200 == this.status && this.responseText && (v.title = this.responseText, o.actions.Title("title"))
                }, t.send()
            }
            o.mediacontainer = createElement("div"), Pos0(o.mediacontainer), css(o.mediacontainer, {
                transition: "transform 0.2s linear",
                "text-align": "center"
            }), o.frame.appendChild(o.mediacontainer), 1 != v.hotkey.swiping || o.mdswp || (PluginMovable(o.mediacontainer, "o.swiping", !0, !1, m), o.mdswp = !0), d || k(), this.onError = function(t) {
                O(t || r.errorMessage())
            }, this.onEnded = function(t) {
                log("Ended"), f = !0;
                var e = !1;
                if (E() > 0 && !o.casting && !t) {
                    var n = o.current_time;
                    n + 10 < E() && (log("Break (recovery)"), js("recovery"), r.Play(), r.Seek(n), e = !0)
                }
                e || (o.actions.Ended(), js("end"))
            }, this.onPlay = function() {
                1 == v.posterhidepause && exist(o.poster) && o.actions.ShowPoster(), 1 == v.posterhide && o.actions.HidePoster(), o.controls.Play(), o.actions.onPlayTag(), 1 == v.tags && exist(v.tagsurl) && v.tagsurl.length > 5 && (Z(), clearInterval(s), s = setInterval(Z, 1e3 * v.tagsinterval)), 1 == v.reload && h > 0 && 0 == o.media.duration() && (h = 0, S()), js("play")
            }, this.NativeControls = function() {
                1 == v.nativecontrolsmobile && o.tagvideo && o.actions.NativeControls() && (o.nativecontrols = r.nativeControls(), o.controls.refresh()), o.checknative = !0
            }, this.onPause = function() {
                o.actions.Pause()
            }, this.onSeeking = function() {
                log("Seeking")
            }, this.onSeeked = function() {
                log("Seeked"), o.actions.Seeked(), exist(o.seeking_time) && js("seek", o.seeking_time)
            }, this.onMeta = function() {
                log("Metadata"), h = 0, o.actions.Metadata()
            }, this.onDuration = function() {
                r && (log("Duration", E()), o.actions.Duration(T(), E()), js("duration", E()), h = 0, clearTimeout(o.reloadto), exist(o.restart_audio) && (o.actions.SetAudioTrack(o.restart_audio), o.restart_audio = null))
            }, this.onVolume = function() {}, this.onWaiting = function() {
                log("Waiting"), o.actions.Waiting(), js("waiting")
            }, this.onTimeupdate = function() {
                $ != T() && (o.actions.StopWaiting(), 0 == $ && 1 == v.posterhide && 1 == v.posterhidestart && o.actions.HidePoster()), js("time", $ = T()), 1 == v.pip.on && "function" == typeof PluginPip && !l && 1 != v.pip.custom && v.file2 && "" != v.file2 && $ > 0 && (o.mediapip = new PluginPip, l = o.mediapip.create())
            }, this.onYoutubeReady = function() {
                "youtube" == o.file_type && r && r.YoutubeReady()
            }, this.playByYoutubeId = function(t) {
                o.actions.Stop(), r.playId(t)
            }, this.YoutubeReady = function() {
                return "youtube" != o.file_type || !r || r.ready()
            }, this.getHLS = function() {
                return r.getHLS()
            }, this.getDASH = function() {
                return r.getDASH()
            }, this.SetQuality = function(t) {
                if (log("Quality", t), ("native" == o.file_type || o.file_type == o.ws || "hls" == o.file_type && (0 == v.hlsquality || 2 > q()) || "dash" == o.file_type && (0 == v.dashquality || 2 > V())) && exist(o.files[t])) {
                    var e = this.time();
                    o.seekto > 0 || (o.seekto = e), o.actions.Seek(e, !1), R(o.files[t], !0);
                    var n = !0;
                    !v.settings || (1 != v.settings.qualitypause || o.play) && o.start || (n = !1), n && o.actions.Play()
                }
                "hls" == o.file_type && 1 == v.hlsquality && q() > 1 ? r.setHlsQuality(t) : "dash" == o.file_type && 1 == v.dashquality && V() > 1 ? r.setDashQuality(t) : ("youtube" == o.file_type || "dm" == o.file_type) && r.setQuality(t)
            }, this.renameQualities = function(t, e) {
                return P(t, e)
            }, this.renameTracks = function(t) {
                return A(t)
            }, this.SetSpeed = function(t) {
                log("Speed", t), r && r.setSpeed(t), 1 == v.pip.on && l && l.setSpeed(t)
            }, this.nativeSubtitle = function() {
                I()
            }, this.removeNativeSubtitle = function() {
                r.removeTracks()
            }, this.SetAudioTrack = function(t) {
                if (log("Audiotrack", t), o.audiotracks.length > 0) {
                    if (o.audiotracks[t]) {
                        var e = this.time();
                        o.seekto > 0 || (o.seekto = e), o.actions.Seek(e, !1), R(o.audiotracks[t], !0), o.actions.Play()
                    }
                } else "hls" == o.file_type && 1 == v.hlsaudio ? r.setHlsAudioTrack(t) : "dash" == o.file_type && 1 == v.dashaudio && r.setDashAudioTrack(t)
            }, this.getQuality = function() {
                var t = o.files_quality[o.current_quality];
                return void 0 == t && (t = ""), (z() && 1 == v.hlsautoquality && 1 == v.hlsquality && t != Lang("auto") ? "" + Lang("auto") + " " : "") + t
            }, this.getAudioTrack = function() {
                var t = o.files_audiotrack[o.current_audiotrack];
                return void 0 == t && (t = ""), t
            }, this.autoQuality = function() {
                return z()
            }, this.resize = function(t) {
                r && ("youtube" == o.file_type || "vimeo" == o.file_type || exist(v.ratio)) && r.resize(), v.screenmarginbottom > 0 && css(o.mediacontainer, {
                    height: o.fullscreen ? "100%" : o.normal_h - v.screenmarginbottom
                }), o.media2 && 1 == v.pip.movable && o.mediapip.resize(), 1 == v.poster_float && FloatPosterScale()
            }, this.size = function() {
                return r.size()
            }, this.iosfull = function() {
                r.iosfull()
            }, this.reload = function() {
                log("reload"), o.reloadTimer = 0, o.start && (v.autoplay = 1), o.actions.Waiting(), t && 1 != v.rldnornd && -1 == t.indexOf("(random)") && (t = t + (-1 == t.indexOf("?") ? "?" : "&") + "rand=(random)"), o.tagvideo ? r.src(t) : R(t)
            }, exist(o.poster) || j(), exist(v.poster) && ("" != v.poster ? (Poster(v.poster, o.poster, v.poster_scale), 1 != v.posterhidepause || o.start || hide(o.poster)) : v.poster = null), this.Remove = function() {
                W()
            }, this.RemoveAll = function() {
                e = [], W()
            }, this.File = function(t, e, n) {
                R(t, e, n)
            }, this.Poster = function(t) {
                Poster(t, o.poster, v.poster_scale)
            }, this.Play = function() {
                r ? (f = !1, p = !1, o.casting ? o.chromecast.Play() : (r.Play(), 1 == v.posterhide && o.actions.HidePoster()), exist(l) && l.Play(), o.channels && (o.tagvideo ? o.clicktime > 0 && !o.channels.Created() && o.channels.Update() : (o.files_channel = [], o.controls.SettingChanged("channel"))), o.tagvideo && v.volumegain > -1 && !o.gained && !o.system.ios && o.clicktime > 0 && r.Gain(), U()) : setTimeout(this.Play, 500)
            }, this.PipSwitch = function(t) {
                if (o.media2 && (1 != v.pip.movable || !(o.moving[o.media2] > 2))) {
                    t && (t.stopPropagation(), window.event && (window.event.cancelBubble = !0));
                    var e = r;
                    r.ChangePip(!0, o.media2), l.ChangePip(!1, o.mediacontainer), r = l, l = e, r.Play(), l.Play(), js("pip")
                }
            }, this.reYT = function() {
                r.src(t)
            }, this.ToolbarHide = function() {
                1 == v.effects && o.effects.api("hide"), o.toolbarhidden = !0
            }, this.ToolbarShow = function() {
                v.toolbar.resizeme && (v.toolbar.resizeme = !1, o.controls && (o.controls.resizeFromText(1), o.controls.resizetext())), o.toolbarhidden = !1
            }, this.PipToggle = function() {
                o.media2 && o.mediapip && o.mediapip.toggle()
            }, this.Airplay = function() {
                o.tagvideo && o.airplay && (o.airplayed = !0, r.airplay())
            }, this.PipWebkit = function() {
                o.tagvideo && o.pipwebkit && r.pipwebkit()
            }, this.BeforeVast = function() {
                1 == v.vast_poster && exist(v.vast_posterurl) && (exist(o.vast_poster) || (o.vast_poster = createElement("div"), css(o.vast_poster, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    "pointer-events": "none",
                    zIndex: 1e4
                }), o.frame.appendChild(o.vast_poster)), show2(o.vast_poster), Poster(v.vast_posterurl, o.vast_poster, "fill")), r && (datetime(0), r.BeforeVast())
            }, this.AfterVast = function() {
                o.vast_poster && hide2(o.vast_poster), r && r.AfterVast()
            }, this.Pause = function() {
                o.casting ? o.chromecast.Pause() : r ? r.Pause() : log("nomedia"), exist(o.media2) && l.Pause()
            }, this.Recover = function() {
                p = !0, o.actions.Seek(0, !1), exist(o.poster) && o.actions.ShowPoster(), R("x")
            }, this.Toggle = function() {
                r && r.Toggle()
            }, this.Seek = function(t) {
                r && (o.casting ? o.chromecast.Seek(t) : (r.Seek(t), 1 == v.pip.on && l && l.Seek(t)))
            }, this.Mute = function() {
                r && (r.Mute(), o.casting && o.chromecast.Mute(), log("mute")), 1 == v.pip.on && 1 == v.pip.nomute && l && l.Mute()
            }, this.Unmute = function() {
                r && (r.Unmute(), o.casting && o.chromecast.Unmute(), log("unmute")), 1 == v.pip.on && 1 == v.pip.nomute && l && l.Unmute()
            }, this.Volume = function(t) {
                r && r.Volume(t), 1 == v.pip.on && 1 == v.pip.nomute && l && l.Volume(t), o.casting && o.chromecast.Volume(t)
            }, this.isPlaying = function() {
                return !!r && r.isPlaying()
            }, this.isLive = function() {
                return !!r && r.isLive()
            }, this.status = function() {
                return u
            }, this.ended = function() {
                return f
            }, this.time = function() {
                var t = 0;
                if (!r) return 0;
                if (t = T(), o.casting) {
                    var e = o.chromecast.Time();
                    e && (t = e)
                } else E() > 0 && t != E() && (o.current_time = t + 1e-4);
                return t
            }, this.duration = function() {
                var t = 0;
                if (r && (0 == (t = E()) && exist(v.duration) && (t = 1 * v.duration), o.casting)) {
                    var e = o.chromecast.Duration();
                    e && (t = e)
                }
                return t
            }, this.loaded = function() {
                return r ? r.loaded() : 0
            }, this.flip = function() {
                o.mediascale.flip = !o.mediascale.flip, css(o.mediacontainer, {
                    transform: o.mediascale.flip ? "scaleX(-1)" : "scaleX(1)"
                })
            }, this.createposter = function() {
                j()
            }, this.Preload = function() {
                o.tagvideo && r.preload()
            }, this.menufltr = function(t, e) {
                if ("scale" == t) 1 == e && X(v.settings.scale / 100), 2 == e && X(-v.settings.scale / 100), 3 == e && o.media.normalscale();
                else if (o.tagvideo) {
                    o.fltrs[t] || ("sepia" == t ? o.fltrs[t] = 0 : o.fltrs[t] = 1), 1 == e && (o.fltrs[t] += v.settings[t] / 100), 2 == e && (o.fltrs[t] -= v.settings[t] / 100), 3 == e && ("sepia" == t ? o.fltrs[t] = 0 : o.fltrs[t] = 1), o.cftlr || (o.cftlr = []), o.cftlr[t] = t + "(" + parseInt(100 * o.fltrs[t]) + "%) ";
                    var n = "";
                    for (var a in o.cftlr) n += o.cftlr[a];
                    css(r.tag(), {
                        filter: n
                    }), o.controls.MenuProc(t)
                }
            }, this.scale = function(t) {
                X(t)
            }, this.normalscale = function() {
                o.tagvideo && r.ObjectFit(), o.mediascale.x = o.mediascale.x0, o.mediascale.y = o.mediascale.y0, css(o.mediacontainer, {
                    transform: "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                }), o.controls.MenuProc("scale"), o.custom_aspect = null, Q()
            }, this.hlsDashSub = function(t, e) {
                r.hlsDashSub(t, e)
            }, this.currentFile = function() {
                return G()
            }, this.tag = function() {
                return !!r && r.tag()
            }, this.captions = function() {
                o.tagvideo && r.captions()
            }, this.onDash = function() {
                r.onDash()
            }
        },
        MediaVideo = function(url, container, pip) {
            alert(url);
            var hls_config, hls, dash, ws, error, error_time, sleep_timeout, _hlssubtracks, _seekaftervast, urlmse, playtry, pjstg = createElement(1 == v.hidevideo ? "audio" : "video"),
                pipto = 0,
                is_hls = !1,
                is_hls2 = !1,
                hls_started = !1,
                hls_created = !1,
                hls_force = -1,
                dash_created = !1,
                ws_created = !1,
                is_dash = !1;
            o.live = !1;
            var is_sleep = 0,
                is_ws = !1,
                unmuteplease = !1,
                pip_quality = -1,
                pause_before_vast = -1,
                mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                nops = !1;
            if (css(pjstg, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    "object-fit": "contain",
                    transition: "filter 0.2s linear",
                    "min-height": "auto",
                    "max-height": "none",
                    "min-width": "auto",
                    "max-width": "none"
                }), ObjectFit(), o.system.iphone && 1 == v.autoplay && 1 == v.autoplaymute ? !o.start && v.preroll ? attr(pjstg, {
                    playsinline: 1
                }) : attr(pjstg, {
                    muted: 1,
                    playsinline: 1,
                    autoplay: 1
                }) : (1 == v.playsinlineonmobile && o.system.mobile && attr(pjstg, {
                    playsinline: 1
                }), o.system.tv || attr(pjstg, {
                    preload: 1 == v.preload && 0 == v.autoplay ? "metadata" : "none"
                })), 1 == v.tagcors && attr(pjstg, {
                    crossorigin: "anonymous",
                    crossOrigin: "anonymous"
                }), attr(pjstg, {
                    src: url,
                    "x-webkit-airplay": "allow",
                    disableRemotePlayback: "true"
                }), 1 != v.drunchr && attr(pjstg, {
                    disableRemotePlayback: "true"
                }), 1 == v.ynxnopip && attr(pjstg, {
                    pip: "false"
                }), pip && (pjstg.autoplay = !0, (1 != v.pip.nomute || 1 == v.autoplay) && (pjstg.muted = !0)), 1 == v.nativenodownload && attr(pjstg, {
                    controlsList: "nodownload"
                }), tagSrc(), 1 == v.taginframe) {
                var tagframe = createElement("iframe");
                attr(tagframe, {
                    scrolling: "no",
                    allowfullscreen: "true",
                    allowtransparency: "true",
                    src: ""
                }), css(tagframe, {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: 0
                }), container.appendChild(tagframe);
                var framei = window.setInterval(function() {
                    "complete" === tagframe.contentWindow.document.readyState && (window.clearInterval(framei), css(tagframe.contentDocument.body, {
                        padding: 0,
                        margin: 0
                    }), tagframe.contentDocument.body.appendChild(pjstg))
                }, 100)
            } else container.appendChild(pjstg);
            if (exist(url) || (url = ""), url.indexOf(".mpd") > 0) is_dash = !0, o.dash || "undefined" == typeof PluginDash || (o.dash = new PluginDash), exist(o.dash) && (exist(window.dashjs) ? CheckDash() : o.dash.script());
            else if ((1 == options.hls && 1 != v.HDVBPlayercom || url.indexOf(".m3u8") > 0) && (-1 != o.compilation.indexOf("HLS") || exist(window.Hls))) {
                is_hls = !0, is_hls2 = !0;
                try {
                    exist(Hls) ? !Hls.isSupported() || o.system.safari && 1 == v.nativehlsinsafari && !o.system.ios || o.system.safari && o.system.ios && 1 == v.nativehlsios || o.system.edge && 1 == v.nativehlsinedge ? (log("HLS support ", Hls.isSupported()), is_hls = !1) : (1 == v.preload || 1 == v.autoplay || 1 == v.preloadhls || pip) && CreateHLS(!1) : is_hls = !1
                } catch (error) {
                    is_hls = !1
                }
            } else 0 == url.indexOf("ws") && 1 == v.flussonic && (is_ws = !0, CreateWS());

            function CheckDash() {
                is_dash = !0, MseIsSupported() ? (1 == v.preload || 1 == v.autoplay || 1 == v.preloaddash) && CreateDASH(!1) : (is_dash = !1, log("DASH not supported"))
            }

            function CreateDASH(t) {
                o.dash && !dash_created && (o.dash.create(t, pjstg, url, pip), exist(window.dashjs) && (dash_created = !0))
            }

            function CreateHLS(t) {
                log("HLS"), o.files.length > 1 ? (v.hlsquality = 0, v.hlsquality_off = !0) : v.hlsquality_off && (v.hlsquality = 1), o.audiotracks.length > 1 ? (v.hlsaudio = 0, v.hlsaudio_off = !0) : v.hlsaudio_off && (v.hlsaudio = 1), o.hls_subs = !1, hls_force = -1;
                var e = !1;

                function n() {
                    return void 0 !== o.plid && o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : v.cuid
                }
                if (v.preroll && 1 == v.hlsvastwait && (e = !0, v.hlsvastwait = 0), !o.system.tv && !o.system.safari && v.p2p && "undefined" != typeof p2pml) {
                    let a = {
                        loader: {
                            trackerAnnounce: ["wss://awt.vb17123filippaaniketos.pw:8433"],
                            cachedSegmentExpiration: 864e5,
                            cachedSegmentsCount: 1e3,
                            requiredSegmentsPriority: 3,
                            httpDownloadMaxPriority: 9,
                            httpDownloadProbability: .06,
                            httpDownloadProbabilityInterval: 1e3,
                            httpDownloadProbabilitySkipIfNoPeers: !0,
                            p2pDownloadMaxPriority: 50,
                            httpFailedSegmentTimeout: 1e3,
                            simultaneousP2PDownloads: 20,
                            simultaneousHttpDownloads: 3,
                            httpDownloadInitialTimeout: 0,
                            httpDownloadInitialTimeoutPerSegment: 17e3,
                            httpUseRanges: !0
                        },
                        segments: {
                            swarmId: n()
                        }
                    };
                    var s = p2pml.core.HybridLoader.isSupported(),
                        r = s ? new p2pml.hlsjs.Engine(a) : void 0;
                    v.p2p && s && (v.hlsconfig = {
                        ...v.hlsconfig,
                        liveSyncDurationCount: 20,
                        loader: s ? r.createLoaderClass() : Hls.DefaultConfig.loader
                    })
                }
                if (hls_config = {
                        debug: 1 == v.hlsdebug && !pip,
                        autoStartLoad: (1 == v.preload || 1 == v.autoplay || pip || t) && !e,
                        maxBufferLength: 60,
                        maxMaxBufferLength: 60,
                        manifestLoadingTimeOut: v.hlsmto > 0 ? 1e3 * v.hlsmto : 4e4,
                        fragLoadingTimeOut: v.hlsfto > 0 ? 1e3 * v.hlsfto : 4e4,
                        enableWorker: !1
                    }, 1 == v.hlscltps && (hls_config.capLevelToPlayerSize = !0), 1 == v.hlscookies && (hls_config.xhrSetup = function(t, e) {
                        t.withCredentials = !0
                    }), exist(v.hlsconfig) && (exist(v.hlsconfig.maxBufferLength) && (v.hlsconfig.maxBufferLength > 600 && (v.hlsconfig.maxBufferLength = 600), v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength), exist(v.hlsconfig.customBuffer) && (v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength = v.hlsconfig.customBuffer), "object" == typeof v.hlsconfig))
                    for (var l in v.hlsconfig) hls_config[l] = v.hlsconfig[l];
                hls = o.system.tv ? new HlsTV(hls_config) : new Hls(hls_config), !o.system.tv && !o.system.safari && v.p2p && "undefined" != typeof p2pml && s && p2pml.hlsjs.initHlsJsPlayer(hls), js("hls", hls, 1), hls.loadSource(url), hls.attachMedia(pjstg), hls.on(Hls.Events.MEDIA_ATTACHED, function() {
                    log("HLS attached")
                }), hls.on(Hls.Events.MANIFEST_LOADED, function(t, e) {
                    pip || o.actions.MediaReady()
                }), hls.on(Hls.Events.MANIFEST_PARSED, function(t, e) {
                    !pip && 1 == v.hlsquality && HlsLevelsLength() > 1 && (HlsQualityLevels(), HlsLevel(), o.controls && o.controls.QualityChangedNoHand(o.current_quality))
                });
                var d = !1;
                hls.on(Hls.Events.STREAM_STATE_TRANSITION, function(t, e) {
                    "hlsStreamStateTransition" != t || d || "FRAG_LOADING" != e.previousState || (d = !0, gif(`//p2p.stats.rip/?player=hdvb&host=${o.p.host}&id=${o.p.kp}&type=3&service=p2p`))
                }), hls.on(Hls.Events.LEVEL_SWITCH, function(t, e) {
                    HlsLevel()
                }), hls.on(Hls.Events.LEVEL_SWITCHED, function(t, e) {
                    HlsLevel()
                }), hls.on(Hls.Events.LEVEL_LOADED, function(t, e) {
                    !pip && (e.details.live != o.live && (o.live = e.details.live, o.controls.refresh()), o.live = e.details.live, o.live && (log("Live"), o.dvr = url.indexOf("?DVR") > -1, pjstg.duration > 0 && pjstg.currentTime > 0 && pjstg.duration - pjstg.currentTime < 10 && (o.hls_stuck_time > 0 ? o.hls_stuck_time == pjstg.currentTime && o.hls_stuck_duration == pjstg.duration ? (o.stuck++, o.stuck > 2 && (o.stuck = 0, o.hls_stuck_time = -1, hls.destroy(), CreateHLS(!0), onEnded())) : o.hls_stuck_time = -1 : (o.hls_stuck_time = pjstg.currentTime, o.hls_stuck_duration = pjstg.duration)))), 1 == v.hlsquality && (o.current_quality = hls.loadLevel, o.controls && o.controls.QualityChangedNoHand(o.current_quality)), HlsUpdateAudio()
                }), hls.on(Hls.Events.FRAG_CHANGED, function(t, e) {
                    exist(e.frag) && !pip && js("fragment", e.frag.relurl), hls_force > -1 && (hls.nextAutoLevel = hls_force, hls_force = -1), hls_started = !0, hlsTextTracks()
                }), hls.on(Hls.Events.FRAG_PARSING_METADATA, function(t, e) {
                    js("fragdata", e, 1)
                }), hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function(t, e) {
                    pip || 1 != v.hlsaudio || HlsAudioTracks()
                }), hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, function(t, e) {
                    pip || 1 != v.hlsaudio || HlsAudioTrack()
                }), 1 == v.hlssubtracks ? _hlssubtracks = new PluginHlsSubtitles(hls, pip) : hls.subtitleDisplay = !1, hls.on(Hls.Events.ERROR, function(t, e) {
                    if (1 == v.log && console.log(e), js(e.type + "Hls", e, 0, !0), o.hlserror = e, e.fatal) switch (e.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            log("HLS fatal network error"), 1 == v.livewakeup ? HlsSleep0() : (error = e.details + " (" + e.type + ")", o.seekto > 0 || pip || 1 == v.live || is_ws || (o.seekto = Time()), hls.destroy(), pip || o.media.onError());
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            log("HLS fatal media error, recover"), hls.recoverMediaError();
                            break;
                        default:
                            error = "HLS fatal error, destroy", hls.destroy(), pip || o.media.onError()
                    } else log("HLS ", e.type, e.details, e.response ? e.response.code : ""), js("hls_error", e.response ? e.response.code : ""), is_sleep > 0 && (is_sleep = 2, HlsSleep())
                }), hls_created = !0
            }

            function HlsLevel() {
                if (!pip && 1 == v.hlsquality && HlsLevelsLength() > 1 && (o.current_quality != hls.loadLevel && (o.current_quality = hls.loadLevel, o.controls && o.controls.QualityChangedNoHand(o.current_quality), log("HLS Level " + o.current_quality)), exist2(v.forbidden_quality) && o.current_quality > 0)) {
                    for (var t = v.forbidden_quality.split(","), e = 0; e < t.length; e++)
                        if (o.files_quality[o.current_quality].indexOf(t[e]) > -1) {
                            log("regress quality"), hls.currentLevel = o.current_quality - 1, o.current_quality--;
                            break
                        }
                }
            }

            function CreateWS() {
                exist(window.FlussonicMsePlayer) && (MseIsSupported() ? (exist(o.ws) || (o.ws = new PluginWS), ws = new FlussonicMsePlayer(pjstg, url, {
                    debug: !0
                }), ws_created = !0) : (is_ws = !1, log("not supported")))
            }

            function hlsTextTracks() {
                Captions()
            }

            function Captions() {
                v.hlscaptions && (pjstg.textTracks.length > 0 ? (1 == v.captions ? pjstg.textTracks[pjstg.textTracks.length - 1].mode = "showing" : pjstg.textTracks[pjstg.textTracks.length - 1].mode = "hidden", o.captions || (o.captions = !0, o.controls.refresh())) : o.captions && (o.captions = !1, o.controls.refresh()))
            }

            function HlsSleep0() {
                log("sleep"), !pip && o.play && o.actions.Pause(), o.actions.ShowPoster(), is_sleep = 1, HlsSleep(o.play)
            }

            function HlsSleep(t) {
                is_sleep > 0 && (clearTimeout(sleep_timeout), sleep_timeout = setTimeout(HlsLiveWaiting, 1e3 * v.livewakeuptime))
            }

            function HlsLiveWaiting() {
                is_sleep > 0 && (log("watching"), is_hls ? (1 == is_sleep && hls.loadSource(url), 2 == is_sleep && (hls.destroy(), CreateHLS(!0), pjstg.play())) : attr(pjstg, {
                    src: url
                }))
            }

            function onLoadStart() {
                is_hls || is_dash || pip || o.actions.MediaReady()
            }

            function onTagError() {
                if (!is_hls && !is_dash) {
                    if (pjstg.error) {
                        log(pjstg.error, pjstg.error.code, pjstg.error.message);
                        var t = pjstg.error.code;
                        "" == (error = pjstg.error.message) && (1 == t && (error = "aborted"), 2 == t && (error = "network"), 3 == t && (error = "decode"), 4 == t && (error = "not found")), log("Video Error: ", error)
                    }
                    is_hls2 && 1 == v.livewakeup && (error = void 0, HlsSleep0()), void 0 != error && onError()
                }
            }

            function onError() {
                pip || o.media.onError()
            }

            function onEnded() {
                pip || o.media.onEnded()
            }

            function onPlay() {
                if (!o.start && v.preroll) {
                    log("wrong play"), pause(), o.actions.Play();
                    return
                }
                if (is_hls && is_sleep > 0);
                else if (!pip) {
                    var t = o.actions.isVastBgLoad() && 1 != o.vastfrombg;
                    if (t || -1 == pause_before_vast) {
                        var e = !1;
                        is_hls && (exist(o.vast) || exist(o.vastloader)) && (t || (log("pause onplay"), pause(), e = !0)), e || o.media.onPlay()
                    }
                }
            }

            function onPause() {
                !nops && (log("onpause"), o.play && o.actplay && !pjstg.ended && 1 == v.unpause && !o.nativecontrols ? (log("unpause"), TagPlay()) : pip || o.nopause || !pjstg.paused || o.media.onPause())
            }

            function onTimeupdate() {
                pip || o.media.onTimeupdate(), pause_before_vast > -1 && Time() > pause_before_vast && (log("pause ontime", pause_before_vast), pause(), pause_before_vast = -1)
            }

            function onSeeking() {
                pip || o.media.onSeeking()
            }

            function onSeeked() {
                pip || o.media.onSeeked()
            }

            function onMeta() {
                pip ? PipSize() : (o.media.onMeta(), PlayerSize(), is_hls && is_sleep > 0 && (is_sleep = 0, log("wake up"), hls.startLoad(), TagPlay(), o.controls.Play()), exist(v.ratio) && Resize())
            }

            function PipSize() {
                pjstg.videoHeight > 0 ? css(container, {
                    height: container.offsetWidth / (pjstg.videoWidth / pjstg.videoHeight) - parseInt(v.pip.border)
                }) : pipto < 20 && (setTimeout(PipSize, 100), pipto++)
            }

            function PlayerSize() {
                1 == v.changeheight && (clearInterval(o.heightInterval), o.heightInterval = setInterval(WaitSize, 100), WaitSize())
            }

            function WaitSize() {
                pjstg && pjstg.videoHeight > 0 && (o.actions.changeAspect(pjstg.videoWidth / pjstg.videoHeight), clearInterval(o.heightInterval))
            }

            function onDuration() {
                pip || is_ws || o.media.onDuration()
            }

            function onVolume() {
                pip || o.media.onVolume()
            }

            function onWaiting() {
                is_hls && is_sleep > 0 || pip || o.media.onWaiting()
            }

            function onLoadedData() {
                o.actions.LoadedData()
            }

            function MseIsSupported() {
                var t = window.MediaSource = window.MediaSource || window.WebKitMediaSource,
                    e = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer,
                    o = t && "function" == typeof t.isTypeSupported && t.isTypeSupported(mimeCodec),
                    n = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                return o && n
            }!o.system.tv || 1 != v.autoplay || is_hls || is_dash || is_ws || setTimeout(function() {
                o.actions.MediaReady()
            }, 100), 1 == v.channels && (exist(o.channels) && o.channels.Close(), o.channels = new PlugMediaChannels), this.onDash = function() {
                CheckDash()
            }, this.captions = function() {
                Captions()
            }, pjstg.addEventListener("loadstart", onLoadStart), pjstg.addEventListener("error", onTagError), pjstg.addEventListener("ended", onEnded), pjstg.addEventListener("play", onPlay), pjstg.addEventListener("pause", onPause), pjstg.addEventListener("timeupdate", onTimeupdate), pjstg.addEventListener("seeking", onSeeking), pjstg.addEventListener("seeked", onSeeked), pjstg.addEventListener("loadedmetadata", onMeta), pjstg.addEventListener("volumechange", onVolume), pjstg.addEventListener("waiting", onWaiting), pjstg.addEventListener("durationchange", onDuration), pjstg.addEventListener("loadeddata", onLoadedData), pjstg.addEventListener("enterpictureinpicture", onPipEnter), pjstg.addEventListener("leavepictureinpicture", onPipLeave), this.ratio = function() {
                return pjstg.videoWidth / pjstg.videoHeight
            };
            var span05 = "<span style='opacity:0.5'>";

            function HlsQualityLevels() {
                if (!0 === new System().tv && (v.hlsautomax = 1, v.hlsautoquality = 0), !pip && 1 == v.hlsquality) {
                    var t = hls.levels,
                        e = -1;
                    if (o.files_quality = [], t.length > 1) {
                        for (var n = 0; n < t.length; n++) {
                            if (exist(t[n].height)) {
                                var a = o.media.renameQualities(t[n], v.nameofhlsquality);
                                if (o.files_quality.indexOf(a) > -1 || 1 == v.hlsaddbitrate) {
                                    if (exist(t[n].bitrate)) {
                                        var s = o.files_quality.indexOf(a);
                                        s > -1 && (o.files_quality[s] += " " + span05 + " &nbsp;" + parseInt(t[s].bitrate / 1e3) + " " + Lang("kbps") + "</span>"), o.files_quality[n] = a + " " + span05 + " &nbsp;" + parseInt(t[n].bitrate / 1e3) + " " + Lang("kbps") + "</span>"
                                    }
                                } else o.files_quality[n] = a;
                                exist(t[n].audioGroupIds) && (o.files_quality_ag[n] = t[n].audioGroupIds[0])
                            } else exist(t[n].name) ? o.files_quality[n] = t[n].name : o.files_quality[n] = n;
                            exist(v.default_quality) && -1 == e && v.default_quality == o.files_quality[n] && (e = n), exist(o.default_quality) && o.default_quality == o.files_quality[n] && (e = n)
                        }
                        1 == v.hlsautomax && (e = hls.levels.length - 1), 1 == v.hlsautoquality ? o.files_quality[t.length] = Lang("auto") : (hls.autoLevelEnabled = 0, hls.autoLevelCapping = 0), 1 == v.hlslowquality || e > -1 ? (hls.autoLevelCapping = 0, "next" != v.hlschangequality && (o.start || 0 != v.preload) ? "current" == v.hlschangequality && (hls.currentLevel = e) : hls.nextLevel = e, o.current_quality = e) : 1 == v.hlsautoquality ? o.current_quality = hls.levels.length - 1 : o.current_quality = hls.firstLevel, HlsUpdateAudio()
                    }
                    o.bitrate = existv(hls.levels[o.current_quality].bitrate, 0), o.controls && o.controls.refresh()
                }
            }

            function HlsUpdateAudio() {
                o.files_quality_ag.length > 0 && 1 == v.hlsaudio && (HlsAudioTracks(), HlsAudioTrack())
            }

            function HlsAudioTracks() {
                if (!pip && 1 == v.hlsaudio) {
                    var t, e = hls.audioTracks;
                    if (o.files_audiotrack = [], e.length > 1)
                        for (var n = 0; n < e.length; n++) {
                            if (t = !1, exist(e[n].groupId) && o.files_quality_ag.length > 0 && e[n].groupId != o.files_quality_ag[o.current_quality])
                                for (var a = 0; a < o.files_quality_ag.length; a++) o.files_quality_ag[a] == e[n].groupId && (t = !0);
                            !t && (o.files_audiotrack[n] = exist(e[n].name) ? o.media.renameTracks(e[n].name) : n, exist(v.default_audio) && v.default_audio == o.files_audiotrack[n] && (o.current_audiotrack = n, hls.audioTrack = n))
                        }
                }
            }

            function HlsAudioTrack() {
                if (!pip) {
                    var t = hls.audioTracks,
                        e = hls.audioTrack;
                    if (e > -1) {
                        if (exist(t[e].groupId) && o.files_quality_ag.length > 0 && o.files_quality_ag[o.current_quality] != t[e].groupId) {
                            for (var n = 0; n < t.length; n++)
                                if (t[n].name == t[e].name && t[n].groupId == o.files_quality_ag[o.current_quality]) {
                                    hls.audioTrack = n, e = n;
                                    break
                                }
                        }
                        o.current_audiotrack = e, log("HLS AudioTrack", o.current_audiotrack), o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
                    }
                }
            }

            function Time() {
                return is_dash ? dash_created ? o.dash.time() : 0 : pjstg.currentTime
            }

            function Duration() {
                var t = pjstg.duration;
                return is_dash && dash_created && (t = o.dash.duration()), exist(v.end) && (t = v.end), t == 1 / 0 || isNaN(t) ? 0 : t
            }

            function TagPlay() {
                if ("none" != url) {
                    var t = pjstg.play();
                    void 0 !== t && t.then(function() {}).catch(function(t) {
                        if (log("playError", t.message), -1 == t.message.indexOf("source") && -1 == t.message.indexOf("interrupted by")) {
                            if (1 == v.autoplaymute) {
                                log("automute"), o.actions.Mute(), pjstg.volume = 0;
                                var e = pjstg.play();
                                e && e.then(function() {}).catch(function(t) {
                                    log("playError2", t.message), o.system.tv && (is_hls || is_dash) || (o.controls.Pause(), o.actions.ShowPoster(), js("autoplay_denied"))
                                })
                            } else o.controls.Pause(), o.actions.ShowPoster()
                        }
                    })
                }
            }

            function pause() {
                is_ws ? ws.pause() : pjstg.pause()
            }

            function isAuto() {
                var t = !1;
                return is_hls ? hls_created && (t = hls.autoLevelEnabled) : is_dash && dash_created && (t = o.dash.auto()), t
            }

            function tagSrc() {
                if (o.system.safari) {
                    var t = pjstg.textTracks;
                    if (t)
                        for (var e = 0; e < t.length; e++) t[e].mode = "disabled";
                    if (t = pjstg.audioTracks)
                        for (e = 0; e < t.length; e++) t[e].enabled = 0 == e ? 1 : 0;
                    window.WebKitPlaybackTargetAvailabilityEvent && (pjstg.addEventListener("webkitplaybacktargetavailabilitychanged", function(t) {
                        o.airplay = "available" == t.availability, pip || o.actions.AirplayChanged()
                    }), pjstg.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function(t) {}))
                }
                CheckPip()
            }

            function CheckPip() {
                o.system.webkit && (exist(pjstg.webkitSupportsPresentationMode) && !o.system.iphone && (o.pipwebkit = !0), document.pictureInPictureEnabled && !pjstg.disablePictureInPicture && (o.pipwebkit = !0))
            }

            function PipWebkit() {
                o.system.safari ? "picture-in-picture" === pjstg.webkitPresentationMode ? (pjstg.webkitSetPresentationMode("inline"), o.ispipkit = !1) : (pjstg.webkitSetPresentationMode("picture-in-picture"), o.ispipkit = !0) : document.pictureInPictureElement ? eval("document.exitPictureInPicture().then(ok =>{o.ispipkit = false;}).catch(error => {});") : eval("pjstg.requestPictureInPicture().then(p => {o.ispipkit = true;}).catch(error => {o.ispipkit = false;});")
            }

            function onPipEnter() {
                o.ispipkit = !0
            }

            function onPipLeave() {
                o.ispipkit = !1
            }

            function HlsLevelsLength() {
                var t = 0;
                return hls_created && hls.levels && (t = hls.levels.length), t
            }

            function ObjectFit() {
                pjstg && (1 == v.covervideo || 1 == v.fill ? 1 == v.fillvideo || 1 == v.fill ? css(pjstg, {
                    "object-fit": "fill"
                }) : css(pjstg, {
                    "object-fit": "cover"
                }) : css(pjstg, {
                    "object-fit": "contain"
                }))
            }

            function Resize() {
                v.ratio && api("scale", String(v.ratio).replace("/", ":"))
            }

            function DashLevelsLength() {
                var t = 0;
                return dash_created && (t = o.dash.levels()), t
            }

            function iOSTrackLoaded(t) {
                if (t.target.label && o.sbt)
                    for (var e = 0; e < o.files_subtitle.length; e++) o.files_subtitle[e] == t.target.label && o.sbt.SetSubtitle(e)
            }
            this.Play = function() {
                var t = !0;
                is_hls && !hls_started && (hls_created || CreateHLS(!0), hls.startLoad()), is_dash && !dash_created && (CreateDASH(!0), t = !1), is_ws && (ws_created || CreateWS(), ws.play(), t = !1), "-2000px" == pjstg.style.top && this.AfterVast(), t && TagPlay()
            }, this.BeforeVast = function() {
                (o.vastloader || o.vast) && (o.ispipkit && PipWebkit(), !o.airplayed && o.system.mobile && o.system.webkit && (pjstg.muted || (pjstg.muted = !0, unmuteplease = !0), css(pjstg, {
                    position: "absolute",
                    left: -2e3,
                    top: -2e3
                }), pause_before_vast = Time(), is_ws || pjstg.play(), 0 == pause_before_vast && o.seekto > 0 && (_seekaftervast = o.seekto)))
            }, this.AfterVast = function() {
                !o.airplayed && (o.system.mobile || o.system.webkit) && (css(pjstg, {
                    position: "static",
                    left: 0,
                    top: 0
                }), exist(v.ratio) && Resize(), unmuteplease && (o.muted || (pjstg.muted = !1), unmuteplease = !1), _seekaftervast > 0 && (o.seekto = _seekaftervast, _seekaftervast = 0), pause_before_vast = -1)
            }, this.Pause = function() {
                log("paused"), pause()
            }, this.Toggle = function() {
                pjstg.paused ? TagPlay() : Pause()
            }, this.Seek = function(t) {
                is_dash && dash_created ? o.dash.seek(t) : (is_hls && 1 == v.hlsforce && t > 0 && isAuto() && (hls_force = hls.currentLevel, hls.nextAutoLevel = 0), pjstg.currentTime = t)
            }, this.Mute = function() {
                pjstg.muted = !0
            }, this.Unmute = function() {
                pjstg.muted = !1, "hls" == o.file_type && o.system.ios && 1 == v.vast && !exist(o.um1) && (nops = !0, pjstg.pause(), setTimeout(function() {
                    pjstg.play(), nops = !1
                }, 10), o.um1 = !0)
            }, this.Volume = function(t) {
                pjstg.volume = t
            }, this.Gain = function() {
                if (o.gainedsource != pjstg) {
                    if (o.audiosrc[pjstg]) e = o.audiosrc[pjstg], n = o.audioctx[pjstg];
                    else if (window.AudioContext = window.AudioContext || window.webkitAudioContext, exist(window.AudioContext)) try {
                        e = (n = new AudioContext).createMediaElementSource(pjstg), o.audiosrc[pjstg] = e, o.audioctx[pjstg] = n
                    } catch (t) {
                        log(t)
                    }
                    if (n) {
                        var e, n, a = n.createGain();
                        a.gain.value = v.volumegain, e.connect(a), a.connect(n.destination), o.gained = !0, o.gainedsource = pjstg
                    }
                }
            }, this.isPlaying = function() {
                return !pjstg.paused
            }, this.isLive = function() {
                return 1 == v.live || !!is_ws || o.live
            }, this.tag = function() {
                return pjstg
            }, this.nativeControls = function() {
                return attr(pjstg, {
                    controls: "1"
                }), !0
            }, this.preload = function() {
                attr(pjstg, {
                    preload: "metadata"
                }), is_hls && !hls_created && CreateHLS(!1), is_dash && !dash_created && CreateDASH(!1)
            }, this.status = function() {
                var t = "playing";
                return pjstg.paused && (t = "paused"), pjstg.ended && (t = "ended"), t
            }, this.ChangePip = function(t, e) {
                pip = t, e.appendChild(pjstg), container = e, t ? (1 != v.pip.nomute ? pjstg.muted = !0 : o.muted || (pjstg.muted = !1), PipSize(), o.files_quality.length > 0 && is_hls && (pip_quality = o.current_quality, hls.autoLevelCapping = 0, hls.currentLevel = 0)) : (o.muted || 1 == v.pip.nomute || (pjstg.muted = !1), pjstg.volume = v.volume, PlayerSize(), o.files_quality.length > 0 && is_hls && (hls.autoLevelCapping = -1, pip_quality > -1 && pip_quality < hls.levels.length && (hls.nextLevel = pip_quality)))
            }, this.time = function() {
                return Time()
            }, this.duration = function() {
                return Duration()
            }, this.loaded = function() {
                var t = 0;
                if (pjstg.buffered && pjstg.buffered.length > 0) {
                    for (var e = Time(), o = 0; o < pjstg.buffered.length; o++)(e >= pjstg.buffered.start(o) || e >= pjstg.buffered.start(o) - 100) && e <= pjstg.buffered.end(o) && (t = pjstg.buffered.end(o));
                    0 == t && (t = pjstg.buffered.end(pjstg.buffered.length - 1))
                }
                return exist(v.end) && t > v.end && (t = v.end), t
            }, this.auto = function() {
                return isAuto()
            }, this.size = function() {
                return {
                    width: pjstg.videoWidth,
                    height: pjstg.videoHeight
                }
            }, this.src = function(t) {
                url = t = t.replace(/\(random\)/g, Math.random()), 2 != o.media_error && (o.media_error = !1), is_dash ? dash_created && o.dash.source(t) : is_hls ? (is_hls && hls && hls.destroy(), CreateHLS(!0), CheckPip()) : (attr(pjstg, {
                    src: t,
                    autoplay: 0
                }), tagSrc(), pause())
            }, this.airplay = function() {
                pjstg.webkitShowPlaybackTargetPicker()
            }, this.pipwebkit = function() {
                PipWebkit()
            }, this.setDashQuality = function(t) {
                dash_created && o.dash.setQuality(t)
            }, this.setDashAudioTrack = function(t) {
                dash_created && pjstg.buffered.length > 0 && o.dash.setAudio(t)
            }, this.setWsQuality = function(t) {
                o.ws && o.ws.setTracks(ws, t, -1)
            }, this.setWsAudioTrack = function(t) {
                o.ws && o.ws.setTracks(ws, -1, t)
            }, this.setHlsQuality = function(t) {
                if (hls_created) {
                    var e = parseInt(t);
                    t == hls.levels.length && (e = -1, hls.autoLevelCapping = -1), "current" == v.hlschangequality && (setTimeout(onWaiting, 500), hls.currentLevel = e), "next" == v.hlschangequality && (log("HLS next level " + e), hls.nextLevel = e), -1 == e && (o.current_quality = hls.loadLevel), HlsUpdateAudio()
                }
            }, this.getHLS = function() {
                return hls
            }, this.getDASH = function() {
                return !!dash_created && o.dash.getDash()
            }, this.HlsLevelsLength = function() {
                return HlsLevelsLength()
            }, this.DashLevelsLength = function() {
                return DashLevelsLength()
            }, this.ObjectFit = function() {
                ObjectFit()
            }, this.resize = function() {
                Resize()
            }, this.setHlsAudioTrack = function(t) {
                hls_created && (hls.audioTrack = parseInt(t))
            }, this.hlsDashSub = function(t, e) {
                "hls" == e && hls_created && _hlssubtracks && _hlssubtracks.HlsSubTrack(t), "dash" == e && dash_created && o.dash.subtrack(t)
            }, this.setSpeed = function(t) {
                t && (pjstg.playbackRate = t)
            }, this.removeTracks = function() {
                for (var t = pjstg.childNodes, e = [], o = 0; o < t.length; o++) "track" == t[o].tagName.toLowerCase() && (t[o].removeEventListener("load", iOSTrackLoaded), e.push(t[o]));
                for (var o = 0; o < e.length; o++) pjstg.removeChild(e[o])
            }, this.addTrack = function(t, e, o) {
                if ("" != t) {
                    t.indexOf(" or ") > 0 && (t = t.split(" or ")[0]);
                    var n = document.createElement("track");
                    n.setAttribute("src", t), n.setAttribute("label", e), n.setAttribute("kind", "subtitles"), n.setAttribute("mode", "showing"), o && n.setAttribute("default", ""), pjstg.appendChild(n), n.addEventListener("load", iOSTrackLoaded)
                }
            }, this.errorMessage = function() {
                return error || ""
            }, this.Remove = function() {
                clearInterval(o.dashInterval), is_hls && hls && hls.destroy(), is_dash && dash_created && o.dash.reset(), is_ws && ws && ws.stop(), pjstg.removeEventListener("error", onTagError), pjstg.removeEventListener("ended", onEnded), pjstg.removeEventListener("play", onPlay), pjstg.removeEventListener("pause", onPause), pjstg.removeEventListener("timeupdate", onTimeupdate), pjstg.removeEventListener("seeking", onSeeking), pjstg.removeEventListener("seeked", onSeeked), pjstg.removeEventListener("loadedmetadata", onMeta), pjstg.removeEventListener("volumechange", onVolume), pjstg.removeEventListener("waiting", onWaiting), pjstg.removeEventListener("durationchange", onDuration), pjstg.removeEventListener("enterpictureinpicture", onPipEnter), pjstg.removeEventListener("leavepictureinpicture", onPipLeave), pjstg.src = "", "IFRAME" == container.tagName ? container.contentDocument.body.removeChild(pjstg) : container.removeChild(pjstg), pjstg = null
            }
        },
        Controls = function() {
            var wait_to, settings, playlist, _lastactbut, uijs, b = [],
                butNames = [],
                butPosition = [],
                waiting = !1,
                toolbarHidden = !1;
            for (var i in o.settings2 && (o.settings2.hide(), o.settings2 = null), o.files_speed = [.25, .5, .75, 1, 1.25, 1.5, 2], 1 == v.settings.customspeeds && exist(v.settings.speeds) && (v.settings.speeds = v.settings.speeds.replace(/\n/ig, ""), o.files_speed = v.settings.speeds.split(",")), o.speed1 = o.files_speed.indexOf("1") > -1 ? o.files_speed.indexOf("1") : o.files_speed.indexOf(1), 3 == o.current_speed && (o.current_speed = o.speed1), o.menuproc) o.menuproc.hasOwnProperty(i) && (exist(v.settings[i]) || (v.settings[i] = 5), o["files_" + i] = ["+ " + v.settings[i] + "%", "&ndash; " + v.settings[i] + "%", 100 * o.menuproc[i] + "%"]);
            1 == v.toolbar.hidejustfull && o.system.ios && 1 == v.nativefullios && (v.toolbar.hide = 0);
            var resizeonwidth = !1,
                stretch_width = 0,
                stretch_width_last = 0,
                stretch_with_volume = !1,
                firstly = !0,
                bg = new ControlsBg,
                order = [],
                _rights = !1,
                _move_rights = !1,
                _max_order = 0,
                _rb = [];
            for (var y in "controls-right" == v.control_line.position && (v.control_line.position = "controls"), v) v.hasOwnProperty(y) && 0 == y.indexOf("control_") && v[y] && (exist(v[y].order0) ? v[y].order = v[y].order0 : v[y].order0 = v[y].order, order[v[y].order] = y, "controls" != v.control_line.position && ("controls-right" == v[y].position ? (_rb.push([y, v[y].order]), _rights = !0) : ("controls" == v[y].position || void 0 == v[y].position) && _rights && (_move_rights = !0)), _max_order < v[y].order && (_max_order = v[y].order));
            if (_move_rights) {
                _rb.sort(function(t, e) {
                    return t[1] - e[1]
                });
                for (var i = 0; i < _rb.length; i++) order[v[_rb[i][0]].order] = null, v[_rb[i][0]].order = _max_order + 1, _max_order++, order[v[_rb[i][0]].order] = _rb[i][0]
            }
            1 == v.toolbar.hide && 1 == v.toolbar.hidedown && (o.toolbar = createElement("div"), o.frame.appendChild(o.toolbar), css(o.toolbar, {
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                transition: "top 0.3s ease-out",
                "pointer-events": "none"
            }));
            var bg2 = createElement("div");
            1 == v.toolbar.hide && 1 == v.toolbar.hidedown ? o.toolbar.appendChild(bg2) : o.frame.appendChild(bg2), css(bg2, {
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: v.toolbar.h
            }), bg2.onclick = function() {
                o.system.mobile || o.actions.ControlsBgClick()
            }, o.hidecontrols && (hide2(bg.c()), hide2(bg2));
            for (var i = 1; i < order.length; i++)
                if (order[i]) {
                    var y = order[i];
                    if (y) {
                        var action = v[y].action;
                        if (o.system.mobile && ("volume" == action && "speed" == v[y].customline || ("volume" == action && 1 == v.showvolmobile && o.system.mobile ? v[y].hideoutmute = 0 : ("volume" == action || "fullscreen" == action && v.nativemobile) && (v[y].on = 0))), o.hidecontrols && (v[y].on = 0), 1 == v[y].on) {
                            if ("line" == action || "volume" == action ? (b[y] = new ControlLine(y, action), b[y].Resize(b[y].s("w"))) : b[y] = new Control(y), butNames.push(y), "title" != b[y].g("action") || "" != b[y].s("text") || "" != b[y].s("var") && exist(v[b[y].s("var")]) || b[y].set("display", !1), "custom" == b[y].g("action")) {
                                var lu = b[y].s("linkurl");
                                lu && 0 == lu.indexOf("api:") && lu.indexOf(",0/1") > 0 && 0 == api(lu.split(",")[0].substr(4)) && b[y].CustomSwitch(0)
                            }
                            b[y].set("scale", b[y].s("scale"))
                        }
                    }
                }
            function ControlX(t) {
                var e = 0;
                if (t) {
                    if ("line" == t.g("action")) e = butPosition.left + t.s("marginleft"), null != butPosition.rightbs || (butPosition.rightbs = []);
                    else if (null != butPosition.rightbs) {
                        var n = t.g("width") + t.s("marginright") + t.s("marginleft");
                        HideProof(t) && (n = 0), 1 != t.s("hidden") || t.g("show") || (n = 0), t.s("vertical") > 0 && (n = 0), e = bg.g("w") - 1 * v.toolbar.leftandrightpadding - n + t.g("width") / 2 + t.s("marginleft");
                        var a = 0;
                        for (butPosition.right -= n, a = 0; a < butPosition.rightbs.length; a++) {
                            var s = b[butPosition.rightbs[a]];
                            s.s("vertical") > 0 ? css(s.c(), {
                                left: s.g("x0") - n
                            }) : css(s.c(), {
                                left: s.g("x") - n
                            }), s.set("x0", s.g("x"))
                        }
                        butPosition.rightbs.push(t.g("key")), t.set("rightside", 1)
                    } else if (1 != t.s("hidden") || t.g("show")) {
                        if (t.s("vertical") > 0) e = butPosition.left + t.s("marginleft") + t.s("marginright");
                        else {
                            var r = !1;
                            "volume" != t.g("action") || 1 != t.s("hide") || 1 != t.s("hideoutmute") || (o.hidden_volume_over_process || o.hidden_volume_over ? stretch_with_volume || (stretch_width -= t.g("width") + t.s("marginleft") + t.s("marginright"), stretch_with_volume = !0) : (r = !0, stretch_with_volume = !1)), HideProof(t) && (r = !0), r ? e = butPosition.left : (butPosition.left += t.g("width") / 2 + t.s("marginleft"), e = butPosition.left, butPosition.left += t.g("width") / 2 + t.s("marginright"))
                        }
                    } else "volume" == t.g("action") && 1 == t.s("hide") && 1 == t.s("hideoutmute") && stretch_with_volume && (stretch_width += t.g("width") + t.s("marginleft") + t.s("marginright"), stretch_with_volume = !1)
                }
                return e
            }

            function CreateShare() {
                o.shareme && "function" == typeof PluginShare && (o.share = new PluginShare)
            }

            function ControlCoordinate(t) {
                var e = o.fullscreen && 0 == v.toolbar.stretchonfullscreen ? o.normal_w : o.screen_w,
                    n = o.screen_h,
                    a = 0;
                t != bg && (a = e / 2 + t.s("marginleft") - t.s("marginright"));
                var s = n / 2,
                    r = t.g("width"),
                    l = t.g("height"),
                    d = t.s("position");
                if (d.indexOf("center") > -1 && (a = o.screen_w / 2 + t.s("marginleft") - t.s("marginright")), 0 == d.indexOf("top") && (s = l / 2 + t.s("marginproctop") * o.screen_h / 100), 0 == d.indexOf("bottom") && (s = o.screen_h - (t == bg ? l : l / 2) - t.s("marginprocbottom") * o.screen_h / 100), d.indexOf("right") > -1 && (a = o.screen_w - r / 2 + t.s("marginleft") - t.s("marginright") - t.s("marginprocright") * o.screen_w / 100), d.indexOf("left") > -1 && (a = r / 2 + t.s("marginleft") - t.s("marginright") + t.s("marginprocleft") * o.screen_w / 100), "timeline" == d && (a = -o.timeline_w / 2 + t.s("marginprocleft") * o.timeline_w / 100 + t.s("marginleft") - t.s("marginright"), s = -o.timeline_h / 2 - t.s("marginprocbottom") * o.timeline_h / 100 + t.s("marginproctop") * o.timeline_h / 100), d.indexOf("controls") > -1) {
                    var c = ControlX(t);
                    a = (bg && bg.c() ? int(bg.c().offsetLeft) : 0) + c, "controls-right" == d && (a += stretch_width), s = "top" == v.toolbar.position ? v.toolbar.h / 2 - (v.toolbar_margintop < 0 ? v.toolbar_margintop : 0) : n - v.toolbar.h / 2
                }
                return {
                    x: a,
                    y: s + t.s("margintop") - t.s("marginbottom")
                }
            }

            function Resize(t) {
                var e, n, a = o.fullscreen && 0 == v.toolbar.stretchonfullscreen ? o.normal_w : o.screen_w;
                o.screen_h, css(bg.c(), {
                    top: ("top" == v.toolbar.position ? 0 : o.screen_h - v.toolbar.h) - v.toolbar_margintop
                }), bg.set("y0", o.screen_h - v.toolbar.h - v.toolbar_margintop), 0 == v.toolbar.stretchonfullscreen && bg && (css(bg.c(), {
                    width: a,
                    left: 0,
                    "margin-left": 0
                }), bg.set("w", a), o.fullscreen && css(bg.c(), {
                    left: "50%",
                    "margin-left": -a / 2
                })), butPosition = {
                    left: 1 * v.toolbar.leftandrightpadding,
                    right: bg.g("w") - 1 * v.toolbar.leftandrightpadding
                };
                var s = !1;
                bg.g("show") || (bg.set("display", !0), s = !0);
                for (var r = 0; r < butNames.length; r++)
                    if (b[e = butNames[r]]) {
                        var l = ControlCoordinate(b[e]);
                        l && ("position" == b[e].s("animation") && exist(o.motions[e]) && o.motions[e].XY(b[e].g("x0"), l.x, b[e].g("y0"), l.y), b[e].set("x0", l.x), b[e].set("y0", l.y), 1 != b[e].s("hidden") || b[e].g("show") || t ? css(b[e].c(), {
                            position: "absolute",
                            left: b[e].g("x0"),
                            top: b[e].g("y0")
                        }) : HidePositionControl(b[e]))
                    } for (e in s && bg.set("display", !1), stretch_width = 0, b) b.hasOwnProperty(e) && ("controls-right" == b[e].s("position") && "line" != b[e].g("action") && stretch_width > -1 && (stretch_width = butPosition.right - butPosition.left), "line" == b[e].g("action") && bg && (1 == b[e].s("customwidth") ? n = b[e].s("w") : b[e].s("position").indexOf("controls") > -1 ? (n = butPosition.right - butPosition.left - b[e].s("marginleft") - b[e].s("marginright"), css(b[e].c(), {
                    left: int(bg.c().offsetLeft) + butPosition.left + b[e].s("marginleft") + n / 2
                }), stretch_width = -1) : (n = bg.g("w") - b[e].s("marginleft") - b[e].s("marginright"), css(b[e].c(), {
                    left: int(bg.c().offsetLeft) + b[e].s("marginleft") + n / 2
                })), b[e].set("x0", b[e].g("x")), b[e].Resize(n)));
                settings && ResizeSettings(settings), playlist && ResizeSettings(playlist), (resizeonwidth || o.fullscreen || stretch_width_last != stretch_width) && ShowOrHide()
            }

            function HidePositionControl(t) {
                var e = 0,
                    n = 0;
                t.s("position").indexOf("right") > -1 && -1 == t.s("position").indexOf("controls") && (e = o.screen_w + t.g("width") + 10), t.s("position").indexOf("left") > -1 && (e = -t.g("width") - 10), t.s("position").indexOf("top") > -1 && (n = -(2 * t.g("height"))), (t.s("position").indexOf("bottom") > -1 || t.s("position").indexOf("controls") > -1) && (n = o.screen_h + t.g("height") + t.g("width") + 10), e > 0 && css(t.c(), {
                    left: e
                }), n > 0 && css(t.c(), {
                    top: n
                })
            }

            function ResizeSettings(t) {
                var e = -2e3;
                t.resizePlaylist();
                var n = o.screen_h - v.toolbar.h * (t.s("position").indexOf("top") > -1 ? 1 : 2);
                t == playlist && 1 == v.change2playlist && (n = o.screen_h);
                var a = n - (o.fullscreen && !o.system.mobile ? 100 + 1 * t.s("hmaxk") : t.s("hmaxk")) - (t == playlist && 1 * t.s("hmaxk") == 0 ? t.s("margintop") : 0);
                if (a < 100 && (a = 100), css(t.c(), {
                        "max-height": a
                    }), t.co() && css(t.co(), {
                        "max-height": a
                    }), t.g("show") && (e = o.screen_h / 2 - t.g("height") / 2 + t.s("margintop") - t.s("marginbottom"), t.s("position").indexOf("top") > -1 && (e = t.s("margintop") - t.s("marginbottom")), t.s("position").indexOf("bottom") > -1 && (e = o.screen_h - ("top" != v.toolbar.position ? v.toolbar.h : 0) - t.g("height") + t.s("margintop") - t.s("marginbottom")), e < 0 && (e = 0)), "settings" == t.g("key") && o.sttx) {
                    var s = o.screen_w - t.g("width") - t.s("marginright");
                    o.sttx > s ? css(t.c(), {
                        position: "absolute",
                        right: t.s("marginright"),
                        left: "auto",
                        top: e
                    }) : css(t.c(), {
                        position: "absolute",
                        left: o.sttx,
                        right: "auto",
                        top: e
                    })
                } else if (t.s("position").indexOf("right") > -1) css(t.c(), {
                    position: "absolute",
                    right: t.s("marginright") - t.s("scrollwidth"),
                    left: "auto",
                    top: e
                });
                else if (t.s("position").indexOf("left") > -1) css(t.c(), {
                    position: "absolute",
                    left: t.s("marginleft"),
                    right: "auto",
                    top: e
                });
                else if ("playlist" == t.g("key") && 1 == t.s("floatleft")) css(t.c(), {
                    position: "absolute",
                    left: o.screen_w / 2 - t.g("width") / 2 + t.s("marginleft") / 2 - t.s("marginright") / 2,
                    top: e
                });
                else {
                    var r = o.screen_w / 2 - t.g("width") / 2 + t.s("marginleft") - t.s("marginright");
                    css(t.c(), {
                        position: "absolute",
                        left: r > 0 ? r : 0,
                        top: e
                    })
                }
                t.Arrows()
            }

            function Action(but, type) {
                o.acted = !0, _lastactbut = but;
                var a = but.g("action");
                if ("play" == a ? (o.actions.Play(), 1 == v.hotkey.on && 1 == v.hotkey.icons && 1 == v.hotkey.playiconbut && PluginHotIcon("play", 1)) : ("pause" == a && (o.rldplay = 0, o.actions.Pause(), 1 == v.hotkey.on && 1 == v.hotkey.icons && 1 == v.hotkey.playiconbut && PluginHotIcon("play", 0)), "stop" == a && o.actions.StopMedia()), "back" == a && o.actions.Seek(0, !1), "fullscreen" == a ? o.casting || o.actions.Fullscreen() : "normalscreen" == a && o.actions.Normalscreen(), "line" == a) {
                    var ld = o.media.duration(),
                        lt = but.g("click") * ld;
                    if (v.delete > 0 && (ld -= v.delete, lt = but.g("click") * ld + v.delete), v.seekwindow > 0 && v.seekwindow / ld <= 1 - but.g("click")) return;
                    o.actions.Seek(lt, !0), o.continue && (o.continue.write(lt, ld), o.seekto > 0 && (o.seekto = void 0))
                }
                if ("volume" == a) {
                    var x = but.g("click");
                    x < .02 && (x = 0), x > 1 && (x = 1), "speed" == but.s("customline") ? (x = parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1), o.actions.SetSpeed(x, 1)) : (o.storage && 1 == v.volumestore && (localStorage.setItem("pljsvolume", x), but.g("click") > 0 || o.system.iphone || 0 == v.mutestore ? localStorage.removeItem("pljsmute") : localStorage.setItem("pljsmute", 1)), o.actions.Volume(x))
                }
                if ("mute" == a ? (o.storage && !o.system.iphone && 1 == v.mutestore && localStorage.setItem("pljsmute", 1), o.actions.Mute(), 1 == v.hotkey.icons && 1 == v.hotkey.muteiconbut && PluginHotIcon("mute", 0)) : "unmute" == a && (o.storage && localStorage.removeItem("pljsmute"), o.actions.Unmute(), 1 == v.hotkey.icons && 1 == v.hotkey.muteiconbut && PluginHotIcon("mute", 1)), 0 == a.indexOf("time") && (but.isOn() ? but.Off() : but.On()), "rotate" == a && o.media.Rotate(), "scale+" == a && o.media.Scale(.1), "scale-" == a && o.media.Scale(-.1), "scale" == a && o.media.Scale(0), "live" == a && (api("restart"), but.set("iconopacity", 1), but.set("saturate", 1)), "share" == a && (js("share"), ShowShare()), "settings" == a && (o.sttx = void 0, settings && (settings.g("show") ? settings.hide() : settings.show())), "playlist" == a) {
                    if (o.overopentimeout == a) return;
                    exist(v.playlist) && (playlist.g("show") ? playlist.hide() : setTimeout(function() {
                        playlist.show()
                    }, 100))
                }
                if ("next" == a && o.controls.PlaylistNext(), "prev" == a && o.controls.PlaylistPrev(), "custom" == a && 1 == but.s("link") && "" != but.s("linkurl")) {
                    var x = trim(but.s("linkurl"));
                    if (o.overopentimeout == a + x) return;
                    x.indexOf("{time}") > -1 && (x = x.replace("{time}", exist(o.continue) ? o.continue.flag().t : o.media.time())), x.indexOf("{file}") > -1 && (x = x.replace("{file}", o.media.currentFile())), x.indexOf("{title}") > -1 && (x = x.replace("{title}", v.title.replace(/,/ig, " "))), "airplay" == x && o.media.Airplay(), "skip" == x && but.s("skip") > 0 && o.actions.Seek(but.s("skip")), "seektome" == x && (o.actions.Seek(but.s("marginprocleft") * o.media.duration() / 100), o.play || o.actions.Play()), 1 == but.s("linkpause") && o.actions.Pause();
                    var y = x.split(",");
                    if (0 == x.indexOf("api:"))
                        for (var z = x.substr(4).split(";"), i = 0; i < z.length; i++)
                            if ((y = z[i].split(",")).length > 1) "seek" == y[0] && 1 == v.hotkey.icons && 1 == v.hotkey.seekiconbut && PluginHotIcon("seek", y[1] > 0 ? 1 : 0), api(y[0], y[1], but), ("0/1" == y[1] || "1/0" == y[1]) && reRightMenu();
                            else if ("screenshot" == y[0]) {
                        var ss = api(y[0]);
                        if (ss) {
                            if (ss.indexOf("data") > -1) {
                                if (1 == v.ssfly) {
                                    var img = document.createElement("img");
                                    img.setAttribute("src", ss), css(img, {
                                        position: "fixed",
                                        right: exist(v.ssflyp) ? v.ssflyp : 20,
                                        bottom: exist(v.ssflyp) ? v.ssflyp : 20,
                                        width: 0,
                                        transition: "width 0.5s cubic-bezier(.75,-0.5,0,1.75)"
                                    }), img.style.zIndex = 1001, document.body.appendChild(img), setTimeout(function() {
                                        css(img, {
                                            width: exist(v.ssflyw) ? v.ssflyw : 200
                                        })
                                    }, 1), img.onclick = function() {
                                        this.parentNode.removeChild(this)
                                    }
                                }
                                if (1 == v.ssdown) {
                                    var a = createElement("a");
                                    a.href = ss, a.download = y[0] + ".jpg", a.click()
                                }
                            }
                        } else log(y[0] + " error")
                    } else api(y[0]);
                    else 0 == x.indexOf("js:") && (x.indexOf("(") > 0 && x.indexOf(")") > 0 ? eval(x.substr(3)) : eval(y[0].substr(3) + "(" + (exist(y[1]) ? '"' + y[1] + '"' : "") + (exist(y[2]) ? ',"' + y[2] + '"' : "") + ")")), 0 == x.indexOf("event:") && JsEvent(x.substr(6), o.media.time()), 0 == x.indexOf("share:") && o.share && o.share.api(x.substr(6)), 0 == x.indexOf("effect:") && o.effects && api("effect", x.substr(7)), (0 == x.indexOf("http") || 0 == x.indexOf("/") || 0 == x.indexOf("?") || 0 == x.indexOf("url:")) && (0 == x.indexOf("url:") && (x = x.substr(4)), window.open(x, but.s("linktarget"))), 0 == x.indexOf("download") && o.actions.Download(), "api:pipwebkit" == x && o.media.PipWebkit();
                    if (x.indexOf("settings#") > -1 && settings) {
                        var si = x.substr(9).split(",");
                        if (settings.g("show") && settings.g("open") == si[0]) o.sttx = void 0, settings.hide();
                        else {
                            o.sttx = but.g("x") - but.g("width") / 2;
                            for (var i = 0; i < si.length; i++) 0 == i && settings.show(), settings.open(si[i])
                        }
                    }
                    if (x.indexOf("settings:") > -1 && 1 == v.settings.combined && (o.settings2 || (o.settings2 = new PluginSettings2), 1 == v.settings.showovercontrol ? "over" == type ? o.settings2.show(x) : o.settings2.toggle(x) : type || o.settings2.toggle(x)), "unblock" == x) {
                        o.actions.RemoveCurtain(), o.stopkeys = 0, but.set("hide2");
                        var bl = FindBut("linkurl", "block");
                        bl && bl.set("hide2")
                    }
                    "block" == x && (but.UpdateText("OK"), but.s("linkurl2") && (window.location.href = trim(but.s("linkurl2"))))
                }
            }

            function TitlePl() {
                for (var t in b) b.hasOwnProperty(t) && "custom" == b[t].g("action") && "text" == b[t].s("type") && b[t].RenewFromTitle(!0)
            }

            function ShowShare() {
                exist(o.share) && o.share.Show()
            }

            function CustomTextButs() {
                if (v.customtext && "object" == typeof v.customtext)
                    for (var t in v.customtext) v.customtext.hasOwnProperty(t) && CustomText(t, v.customtext[t])
            }

            function CustomText(t, e) {
                for (var o in b) b.hasOwnProperty(o) && "custom" == b[o].g("action") && "text" == b[o].s("type") && b[o].s("dom") == t && (b[o].g("show") && 1 != b[o].s("hidden") || (b[o].set("unhidden"), b[o].set("display", !0)), b[o].CustomText(e))
            }

            function ShowOrHide() {
                for (var t in b) b.hasOwnProperty(t) && "buffer" != b[t].g("action") && ShowOrHideProcessor(b[t]);
                ShowOrHideProcessor(bg), stretch_width_last != stretch_width && (stretch_width_last = stretch_width, Resize()), 1 == v.toolbar.hide && 1 == v.toolbar.hidedown && ToolbarDown(!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && 1 != v.toolbar.hidejustfull && !o.casting)
            }

            function ShowForce() {
                var t = toolbarHidden && 1 == v.toolbar.hidewithoutmoving;
                if (o.play || 1 != v.toolbar.hide || 1 != v.toolbar.hideonpause || (t = !1), t) {
                    for (var e in b) b.hasOwnProperty(e) && "buffer" != b[e].g("action") && ShowOrHideProcessor(b[e], !1);
                    css(o.frame, {
                        cursor: "default"
                    }), o.fcdef = !0, ShowOrHideProcessor(bg, !1), bg.g("show") && ToolbarShow(), ToolbarDown(!1)
                }
            }

            function HideForce() {
                var t = o.play && 1 == v.toolbar.hidewithoutmoving && !o.mouseDown && !o.controlover;
                if (o.play || 1 != v.toolbar.hide || 1 != v.toolbar.hideonpause || (t = !0), settings && settings.g("show") && o.setaction && (t = !1), o.casting && (t = !1), t) {
                    for (var e in b) b.hasOwnProperty(e) && "buffer" != b[e].g("action") && ShowOrHideProcessor(b[e], !0);
                    ShowOrHideProcessor(bg, !0), !bg.g("show") && (toolbarHidden = !0, o.media.ToolbarHide(), o.play && (css(o.frame, {
                        cursor: "none"
                    }), o.fcdef = !1)), ToolbarDown(!0)
                }
            }

            function HideInterval() {
                1 == v.toolbar.hidewithoutmoving && (1 != v.toolbar.hidejustfull || o.fullscreen || o.fullscreen_process) && (clearInterval(o.toolbarInterval), o.toolbarInterval = setInterval(HideForce, (v.toolbar.hideleavetimeout > 0 ? v.toolbar.hideleavetimeout : v.toolbar.hidetimeout) * 1e3))
            }

            function ShowOrHideProcessor(t, e) {
                var n = !1,
                    a = !1,
                    s = !1;
                1 == v.toolbar.hide ? (o.starttimeout || o.mouseHere || o.fullscreen || !o.play || 1 == v.toolbar.hidejustfull || o.casting ? (n = !1, a = !0) : (n = !0, a = !1, s = !0), exist(e) && !o.casting && (a = !(n = e)), 1 == v.toolbar.hide && 1 == v.toolbar.hidedown && (0 == t.s("position").indexOf("controls") || "line" == t.s("action")) && (n = !1, a = !0), 1 != v.toolbar.hideonpause || o.play || (n = !0, a = !1, s = !1)) : 1 != t.s("hide") && (a = !0), a && !o.fcdef && (css(o.frame, {
                    cursor: "default"
                }), o.fcdef = !0);
                var r = t.g("action");
                "custom" == r && -1 == t.s("position").indexOf("controls") && (n = !1, a = !0), o.casting && "line" == r && -1 == o.media.duration() && (n = !0, a = !1);
                var l = !1,
                    d = HideProof(t);
                if (1 == t.s("hide") && (1 == t.s("hideonleaveandplay") && (s || e || o.play && !o.mouseHere) && (s || e) && (d = !0), 1 == t.s("hidelap") && o.play && !o.mouseHere && (d = !0), (1 == t.s("hideonwidth") || 1 == t.s("hideoverwidth") || 1 == t.s("hideonfullscreen")) && (resizeonwidth = !0)), d ? (n = !0, a = !1) : n || (a = !0), "volume" == t.s("action") && 1 == t.s("hide") && 1 == t.s("hideoutmute") && (n = !0, a = !1, !s && (o.hidden_volume_over || o.hidden_volume_over_process) && !e && 1 != t.s("hiddenwidth") ? (n = !1, a = !0) : l = !0), !o.nativecontrols && (o.start || 1 != v.toolbar.hide || 1 != v.toolbar.hideuntilstarted) && (o.metadata || 1 != v.toolbar.hide || 1 != v.toolbar.hideuntilmeta) || ((t.s("position").indexOf("controls") > -1 || t.s("position").indexOf("bottom") > -1) && (n = !0, a = !1), 1 != v.toolbar.hidejustfull || o.fullscreen || (n = !1, a = !0)), settings && settings.g("show") && 1 != v.settings.always && (s = !1, e = !1), "share" == r && exist(o.share) && o.share.empty() && (n = !0, a = !1, t.set("animation", "none")), ("playlist" == r || "next" == r || "prev" == r || 1 == t.s("hidewithoutplaylist")) && (playlist ? playlist.empty() && 0 != t.s("hidewithoutplaylist") && (n = !0, a = !1, t.set("animation", "none")) : (n = !0, a = !1)), 1 == o.hideall && (n = !0, a = !1), l) {
                    var c = ControlCoordinate(t);
                    c && (c.y > 0 && t.set("y0", c.y), css(t.c(), {
                        position: "absolute",
                        top: t.g("y0")
                    }))
                }
                n && HideControl(t, !!firstly), a && ShowControl(t), t == bg && (!n && a && (ToolbarShow(), show2(bg2), toolbarHidden = !1, 0 == uijs && js("ui", 1), uijs = 1, o.cut && o.cutted && o.cut.show()), n && !a && !o.casting && (o.media.ToolbarHide(), SettingsClose(), hide2(bg2), toolbarHidden = !0, 1 == uijs && js("ui", 0), uijs = 0, o.cut && o.cutted && o.cut.hide()), playlist && 1 == v.playlist.always && !playlist.empty() && (a || o.nativecontrols ? 1 == v.playlist.alwaysnotfullscreen && o.fullscreen || !playlist.g("show") && (1 == v.playlist.alwaysjustpause && o.play || playlist.show()) : n && playlist.g("show") && playlist.hide()))
            }

            function HideProof(t) {
                var e = !1,
                    n = t.g("action");
                if (1 != t.s("hide") || (1 == t.s("hideonplay") && o.play && (e = !0), 1 == t.s("hideonpause") && (o.play || (e = !0)), 1 == t.s("hideondesktop") && o.system.desktop && (e = !0), 1 == t.s("hideonmobile") && o.system.mobile && (e = !0), 1 == t.s("hideoverwidth") && (o.screen_w > t.s("hideoverwidthlimit") ? (t.set("hiddenwidth", 1), e = !0) : t.set("hiddenwidth", 0)), 1 == t.s("hideonwidth") && (o.screen_w <= t.s("hideonwidthlimit") ? (t.set("hiddenwidth", 1), e = !0) : t.set("hiddenwidth", 0)), 1 == t.s("hideafterstart") && o.start && (e = !0), 1 == t.s("hideafter") && t.s("hideaftersec") > 0 && o.media.time() >= t.s("hideaftersec") && (e = !0), 1 == t.s("hidebefore") && t.s("hidebeforesec") > 0 && o.media.time() < t.s("hidebeforesec") && (e = !0), 1 == t.s("hide0timestore") && ((o.start || !o.continue || o.media.isLive()) && (e = !0), o.continue && 0 == o.continue.flag().t && (e = !0)), 1 == t.s("hideuntilstarted") && (o.start || (e = !0)), t.s("hideuntilto") > 0 && (e = !0), 1 == t.s("hideonvar") && exist(t.s("hidevar")) && options[t.s("hidevar")] && (e = !0), 1 != t.s("hideuntiltext") || exist(t.s("customtext")) || (e = !0), 1 == t.s("hidewovar") && exist(t.s("hidevar2")) && (options[t.s("hidevar2")] || (e = !0)), 1 == t.s("hideuntilstartedios") && o.system.ios && (!o.start || o.newfile) && (e = !0), 1 == t.s("hideuntilended") && (o.media.ended() || (e = !0)), 1 == t.s("hideonvod") && (o.media.isLive() || (e = !0)), 1 == t.s("hideonleave") && (o.mouseHere || (e = !0)), 1 == t.s("hidenormscreen") && (o.fullscreen || (e = !0)), 1 == t.s("hideonfullscreen") && o.fullscreen && (e = !0), 1 == t.s("hideonunmute") && (o.muted || (e = !0)), 1 == t.s("hideonlive") && o.media.isLive() && -1 == o.media.currentFile().indexOf("?DVR") && (e = !0), 1 == t.s("hidewithposter") && isVisible(o.poster) && (e = !0), 1 == t.s("hideuntilmeta") && (o.metadata || (e = !0)), 1 == t.s("hideonmeta") && o.metadata && (e = !0), 1 == t.s("hidemini") && o.mini && (e = !0), 1 == t.s("hidenomini") && (o.mini || (e = !0)), 1 == t.s("hideafterclick") && t.g("clicked") && (e = !0), 1 == t.s("hidenoab") && (o.ab || (e = !0)), 1 == t.s("hideab") && o.ab && (e = !0), 1 != t.s("hideonyoutube") || 1 != v.preload || 1 != v.screenclick || "youtube" != o.file_type || exist(v.poster) || 0 != v.youtubeposter || o.start && "ended" != o.media.status() || "" != v.poster && (e = !0)), "custom" == n) {
                    var a = t.s("linkurl");
                    if (a && ("api:airplay" != a && "airplay" != a || o.airplay || o.airplayed || (e = !0), "api:pipwebkit" != a || o.pipwebkit && (o.start || 0 != v.preload) || (e = !0), "api:unfixing" != a || o.mini || (e = !0), a.indexOf("captions") > -1 && !o.captions && (e = !0), "skip" == a)) {
                        var s = !1;
                        if (exist(v.skip))
                            for (var r = v.skip.split(","), l = 0; l < r.length; l++) {
                                var d = r[l].split("-");
                                2 == d.length && o.media.time() > d[0] && o.media.time() < d[1] && (s = !0, t.set("skip", d[1]))
                            }
                        s || (e = !0)
                    }
                }
                if (("playlist" == n || "next" == n || "prev" == n) && (playlist ? playlist.empty() && (e = !0) : e = !0), "settings" == n && (settings ? settings.empty() && (e = !0, t.set("animation", "none")) : e = !0), "text" == t.g("type") && 0 == t.g("length") && (e = !0), t.g("settings#") && !t.g("set#visible") && (e = !0), 1 == t.s("chromecast")) {
                    var c = document.getElementById("pjs_cast_button_" + v.id);
                    (0 != o.media.duration() || 0 != o.media.time()) && o.tagvideo && isVisible(c) && o.cast_available || (e = !0)
                }
                return 1 == t.s("hidetime") && (e || t.set("hidetime", 1)), "duration" == n && o.media.isLive() && (e = !0), "control_start" == t.g("key") && o.system.mobile && o.nativecontrols && o.system.android && (e = !0), e
            }

            function HideControl(t, e) {
                t.g("show") && (o.fullscreen_process || "none" == t.s("animation") || e ? t.set("display", !1) : HideAnimate(t), t.set("show", !1))
            }

            function ShowControl(t) {
                t.g("show") || ("none" == t.s("animation") || o.fullscreen_process ? (t.set("display", !0), o.fullscreen_process && "bg" != t.g("key") && t.set("opacity", 1), "volume" == t.g("action") && o.hidden_volume && HidePositionControl(t)) : ShowAnimate(t), "volume" == t.s("action") && o.controls.Volume(o.muted ? 0 : v.volume), "line" == t.s("action") && o.actions.Loading(), t.set("show", !0))
            }

            function HideAnimate(t) {
                killMotion(t.g("key"));
                var e = "alpha|",
                    n = "0|",
                    a = 1,
                    s = t.s("animation"),
                    r = t.s("position");
                "scale" == s && (e += "scale|", n += "0|"), "position" == s && (r.indexOf("right") > -1 && -1 == r.indexOf("controls") && (e += "x|", n += int(o.screen_w + t.g("width")) + "|"), r.indexOf("left") > -1 && (e += "x|", n += int(-t.g("width")) + "|"), r.indexOf("top") > -1 && (e += "y|", n += "0|" + -t.g("height") + "|"), (r.indexOf("bottom") > -1 || r.indexOf("controls") > -1 || "timeline" == r) && (e += "y|", "line" == t.g("action") || "volume" == t.g("action") ? n += int(o.screen_h + t.s("h") + (20 > t.s("h") ? 20 - t.s("h") : 0)) + "|" : n += int(o.screen_h + t.g("height")) + "|"), "center" == r && (e += "scale|", n += "0|")), new Motion({
                    mc: t,
                    me: t.g("key"),
                    type: e.substr(0, e.length - 1),
                    to: n.substr(0, n.length - 1),
                    hide: a
                })
            }

            function ShowAnimate(t) {
                killMotion(t.g("key"));
                var e = "",
                    o = "",
                    n = t.s("animation"),
                    a = t.s("position");
                1 != t.g("opacity") && (e = "alpha|", o = ("bg" == t.g("key") ? v.toolbar.a : "1") + "|"), "scale" == n && t.g("scaleX") != t.s("scale") && (e += "scale|", o += t.s("scale") + "|"), "position" == n && ("center" == a ? t.g("scaleX") != t.s("scale") && (e += "scale|", o += t.s("scale") + "|") : a.indexOf("controls") > -1 ? t.g("y") != t.g("y0") && (e += "y|", o += t.g("y0") + "|") : (e += "x|y|", o += t.g("x0") + "|" + t.g("y0") + "|")), "" != e && "" != o ? new Motion({
                    mc: t,
                    me: t.g("key"),
                    type: e.substr(0, e.length - 1),
                    to: o.substr(0, o.length - 1),
                    show: 1
                }) : t.set("display", !0)
            }

            function ToolbarDown(t) {
                1 == v.toolbar.hide && (t && SettingsClose(), 1 == v.toolbar.hidedown && (o.play || 1 != v.toolbar.hideonpause || (t = !0), t && !o.toolbarisdown && css(o.toolbar, {
                    top: bg.h()
                }), !t && o.toolbarisdown && css(o.toolbar, {
                    top: 0
                }), o.toolbarisdown = t))
            }

            function ToolbarShow() {
                toolbarHidden = !1, o.media.ToolbarShow(), o.resizeonmouse && (o.resizeonmouse = !1, Resize(), setTimeout(Resize, 300))
            }

            function UpdateTime(t, e, o) {
                v.delete > 0 && (e -= v.delete, o -= v.delete);
                var n = Time(e);
                "1" == t.s("inversetime") && (n = Time(o - e)), "1" == t.s("showduration") && ("1" == t.s("showboth") ? n += o > 0 ? " " + Lang(t.s("separator")) + " " + Time(o) : "" : 0 == e && (n = Time(o))), t.UpdateText(n)
            }

            function Waiting() {
                if (!waiting) {
                    js("buffering");
                    var t = FindBut("action", "buffer");
                    t && (t.Buffer(), waiting = !0)
                }
            }

            function Volumescrolled() {
                var t = FindBut("linkurl", "volume scroll");
                t && (t.UpdateText(""), t.set("hide2"), clearTimeout(o.volumescroll))
            }

            function SettingsClose(t) {
                settings && settings.g("show") && settings.hide(t), o.settings2 && o.settings2.hide()
            }

            function PlaylistControls() {
                for (var t in b) b.hasOwnProperty(t) && ("next" == b[t].g("action") && css(b[t].c(), {
                    opacity: playlist.PlaylistNextExist() ? 1 : .5
                }), "prev" == b[t].g("action") && css(b[t].c(), {
                    opacity: playlist.PlaylistPrevExist() ? 1 : .5
                }))
            }

            function SpeedChanged() {
                if (o.line_speed) {
                    var t = parseFloat(o.custom_speed / o.files_speed.slice(-1)[0], 1).toFixed(1);
                    for (var e in b) b.hasOwnProperty(e) && ("speed" == b[e].s("customline") && o.custom_speed && b[e].UpdatePlay(t, 1), "api:speed,1.0" == b[e].s("linkurl") && b[e].UpdateVolume(t))
                }
            }

            function FindBut(t, e) {
                for (var o in b)
                    if (b.hasOwnProperty(o) && b[o].s(t) == e) return b[o]
            }

            function KeyPlusUp(t) {
                "next" == t && (o.playlist ? o.controls.PlaylistNext() : t = "seek"), "seek" == t && o.media.duration() > 0 && o.media.time() + parseFloat(v.hotkey.seek) < o.media.duration() && o.actions.Seek(o.media.time() + parseFloat(v.hotkey.seek), !0), "volume" == t && (o.actions.Volume(parseFloat(v.volume) + parseFloat(v.hotkey.vol)), event.preventDefault()), "scale" == t && (o.media.scale(v.hotkey.scale / 100), event.preventDefault()), 1 == v.hotkey.icons && PluginHotIcon(t, 1)
            }

            function KeyPlusDown(t) {
                "next" == t && (o.playlist ? o.controls.PlaylistPrev() : t = "seek"), "seek" == t && o.media.duration() > 0 && o.start && o.actions.Seek(o.media.time() - v.hotkey.seek >= 0 ? o.media.time() - v.hotkey.seek : 0, !0), "volume" == t && (o.actions.Volume(parseFloat(v.volume) - parseFloat(v.hotkey.vol)), event.preventDefault()), "scale" == t && (o.media.scale(-v.hotkey.scale / 100), event.preventDefault()), 1 == v.hotkey.icons && PluginHotIcon(t, 0)
            }
            exist(v.settings) && ("function" == typeof Settings ? (settings = new Settings("settings"), 1 == v.settings.always ? settings.show() : settings.hide()) : o.noset = !0), exist(v.playlist) && "function" == typeof Settings && (playlist = new Settings("playlist"), exist(o.playlist) ? (playlist.updatePlaylist(o.playlist), 0 != v.playlist.openplaylistbefore && exist(v.playlist.openplaylistbefore) ? playlist.show() : 0 == v.playlist.always && playlist.hide()) : playlist.hide(1), PlaylistControls()), CreateShare(), CustomTextButs(), Resize(!0), ShowOrHide(), SpeedChanged(), firstly = !1, this.NewPl = function() {
                CreateShare()
            }, this.ControlClick = function(t) {
                var e = b[t],
                    n = e.g("action");
                if (n) {
                    var a = new Date;
                    o.clicktime = a.getTime(), n && "" != n && Action(e)
                }
            }, this.toggleControl = function(t, e, o) {
                for (var n in b) b.hasOwnProperty(n) && b[n].s(t) == e && b[n].set(o ? "show2" : "hide2")
            }, this.butByS = function(t, e) {
                return FindBut(e, t)
            }, this.title = function(t) {
                var e = !1;
                for (var n in b) b.hasOwnProperty(n) && "title" == b[n].g("action") && (b[n].s("var") == t || "title" == t) && (1 == b[n].s("hide") && 1 == b[n].s("hideonplay") && o.play && (e = !0), "" == v[t] || e ? b[n].set("display", !1) : b[n].set("display", !0), b[n].UpdateText(v[t]));
                TitlePl()
            }, this.titlepl = function() {
                TitlePl()
            }, this.resizetext = function() {
                for (var t in b) b.hasOwnProperty(t) && "custom" == b[t].g("action") && "text" == b[t].s("type") && b[t].ResizeText()
            }, this.showShare = function() {
                ShowShare()
            }, this.updateTitle = function() {
                if ("" != v.title) {
                    for (var t in b)
                        if (b.hasOwnProperty(t) && "title" == b[t].g("action")) {
                            var e = !1;
                            b[t].g("show") || (e = !0, b[t].set("display", !0)), b[t].UpdateText(v.title), e && b[t].set("display", !1)
                        }
                }
            }, this.customTextPl = function() {
                CustomTextButs()
            }, this.customText = function(t, e) {
                CustomText(t, e)
            }, this.resize = function() {
                Resize()
            }, this.resize2 = function() {
                Resize(!0)
            }, this.resizeSettings = function() {
                ResizeSettings(settings)
            }, this.resizePlaylist = function() {
                ResizeSettings(playlist)
            }, this.Play = function() {
                for (var t in b) b.hasOwnProperty(t) && "play" == b[t].g("action") && b[t].On();
                this.PlaylistVisible() && 1 == v.playlist.autohide && this.Playlist(), o.play = !0, ShowOrHide()
            }, this.Pause = function() {
                for (var t in b) b.hasOwnProperty(t) && ("pause" == b[t].g("action") || "stop" == b[t].g("action")) && b[t].Off();
                playlist && 1 == v.playlist.openplaylistpause && !playlist.empty() && playlist.show(), o.play = !1, this.StopWaiting(), ShowOrHide(), 1 == v.toolbar.hide && 1 == v.toolbar.hideonpause && HideForce(!0)
            }, this.Mute = function() {
                for (var t in b) b.hasOwnProperty(t) && ("mute" == b[t].g("action") && b[t].On(), this.Volume(0));
                ShowOrHide()
            }, this.Unmute = function() {
                for (var t in b) b.hasOwnProperty(t) && "unmute" == b[t].g("action") && b[t].Off();
                v.volume < .1 ? (v.volume = .5, o.actions.Volume(v.volume)) : this.Volume(v.volume), ShowOrHide()
            }, this.Volume = function(t, e) {
                for (var o in b) b.hasOwnProperty(o) && ("volume" == b[o].g("action") && "speed" != b[o].s("customline") && b[o].UpdatePlay(t, 1, "no" != e || e), "mute" == b[o].g("action") && b[o].UpdateVolume(t));
                ShowOrHide()
            }, this.Fullscreen = function() {
                var t = FindBut("action", "fullscreen");
                t && (t.On(), t.set("scale", t.s("scale"))), ShowOrHide(), resizeonwidth && setTimeout(ShowOrHide, 500), HideInterval()
            }, this.Normalscreen = function() {
                var t = FindBut("action", "fullscreen");
                t && t.Off(), Resize(), clearInterval(o.toolbarInterval), ShowOrHide()
            }, this.onEnded = function() {
                for (var t in b) b.hasOwnProperty(t) && "play" == b[t].g("action") && b[t].ReplayIcon()
            }, this.Review = function() {
                ShowOrHide()
            }, this.Mouse = function(t, e, n) {
                var a = !1,
                    s = b[t],
                    r = s.g("action"),
                    l = s.s("linkurl");
                if ("over" == e) {
                    if (o.hidden_volume && ("volume" == r || "mute" == r || "unmute" == r) && (o.hidden_volume_over = !0, o.hidden_volume_over_process = !0, a = !0, ShowOrHide(), 1 == v.control_line.hideonvolume)) {
                        var d = FindBut("action", "line");
                        d && hide2(d.c())
                    }
                    settings && 1 == v.settings.showovercontrol && ("settings" == r || 0 == l.indexOf("setting") || 0 == l.indexOf("settings:")) && (clearTimeout(o.settingsovertimer), settings.g("show") && _lastactbut == s || (Action(s, e), o.overopentimeout = r + l, setTimeout(function() {
                        o.overopentimeout = null
                    }, 500))), playlist && 1 == v.playlist.showovercontrol && "playlist" == r && (clearTimeout(o.playlistovertimer), playlist.g("show") && _lastactbut == s || (Action(s, e), o.overopentimeout = r, setTimeout(function() {
                        o.overopentimeout = null
                    }, 500)))
                }
                "out" == e && (o.hidden_volume && ("volume" == r || "mute" == r || "unmute" == r) && (o.hidden_volume_over = !1, o.hidden_volume_over_process = !0, setTimeout(function() {
                    if (!o.hidden_volume_over)
                        for (var t in o.hidden_volume_over_process = !1, b) b.hasOwnProperty(t) && ("volume" == b[t].g("action") && (HideControl(b[t]), Resize()), "line" == b[t].g("action") && 1 == v.control_line.hideonvolume && show2(b[t].c()))
                }, 500)), 1 == v.settings.showovercontrol && ("settings" == r || 0 == l.indexOf("setting") || 0 == l.indexOf("settings:")) && (clearTimeout(o.settingsovertimer), o.settingsovertimer = setTimeout(function() {
                    o.mouseDown || SettingsClose(1)
                }, v.settings.showoverto > 0 ? 1e3 * v.settings.showoverto : 1e3)), playlist && 1 == v.playlist.showovercontrol && "playlist" == r && (clearTimeout(o.playlistovertimer), o.playlistovertimer = setTimeout(function() {
                    !o.mouseDown && playlist.g("show") && playlist.hide(1)
                }, v.playlist.showoverto > 0 ? 1e3 * v.playlist.showoverto : 1e3))), a && setTimeout(Resize, 10)
            }, this.StageLeave = function() {
                !o.volumewheel || o.fullscreen || o.fullscreen_process || (o.actions.volumewheel(!1), o.volumewheel = !1), o.poster && v.poster_aover > -1 && isVisible(o.poster) && css(o.poster, {
                    opacity: v.poster_a
                }), o.play && 1 == v.playonhover && 0 != v.pauseonhover && o.actions.Pause(), v.toolbar.hideleavetimeout > 0 ? (clearTimeout(o.leavetimeout), o.leavetimeout = setTimeout(ShowOrHide, 1e3 * v.toolbar.hideleavetimeout)) : ShowOrHide()
            }, this.StageOver = function() {
                o.poster && v.poster_aover > -1 && isVisible(o.poster) && css(o.poster, {
                    opacity: v.poster_aover
                }), o.play || 1 != v.playonhover || o.actions.Play(), ShowOrHide(), ToolbarDown(!1)
            }, this.StageMove = function(t, e) {
                var o;
                for (var n in b) b.hasOwnProperty(n) && ("line" == (o = b[n].g("action")) || "volume" == o) && b[n].StageMove(t, e)
            }, this.StageMove2 = function() {
                1 == v.toolbar.hide && (1 != v.toolbar.hidejustfull || o.fullscreen) && ((!o.mouseHere || o.system.mobile) && "playing" == o.media.status() && (o.mouseHere = !0, ShowOrHide(), o.system.mobile && setTimeout(function() {
                    o.mouseHere = !1
                }, 500)), 1 == v.toolbar.hidewithoutmoving && (ShowForce(), HideInterval()), ToolbarDown(!1))
            }, this.StageMouseUp = function(t, e) {
                for (var o in b) b.hasOwnProperty(o) && ("line" == b[o].g("action") || "volume" == b[o].g("action")) && b[o].StageMouseUp(t, e)
            }, this.Played = function(t, e) {
                for (var o in b) b.hasOwnProperty(o) && ("line" == b[o].g("action") && b[o].UpdatePlay(t, e), "time" == b[o].g("action") && UpdateTime(b[o], t, e), 1 == b[o].s("rotateplaying") && b[o].Rotate(), 1 == b[o].s("often") && (!b[o].g("show") && toolbarHidden || b[o].g("show") == HideProof(b[o]) && ShowOrHide()))
            }, this.Loaded = function(t, e) {
                var o = FindBut("action", "line");
                o && o.UpdateLoad(t, e)
            }, this.Cut = function(t) {
                if (o.media.duration() > 0) {
                    var e = FindBut("action", "line");
                    e && e.Cut(t)
                }
            }, this.Waiting = function() {
                waiting || (1 == v.hidevideo ? (clearTimeout(wait_to), wait_to = setTimeout(Waiting, 500)) : Waiting())
            }, this.HideElement = function(t) {
                for (var e in b) e == t && b[e].set("hide2")
            }, this.StopWaiting = function(t, e) {
                if (clearTimeout(wait_to), waiting) {
                    js("buffered");
                    var o = FindBut("action", "buffer");
                    o && (o.BufferStop(), waiting = !1)
                }
            }, this.volumescroll = function() {
                var t = FindBut("linkurl", "volume scroll");
                t && (t.set("show2"), t.UpdateText(Lang("volume") + " " + (o.muted ? 0 : Math.ceil(100 * v.volume)) + "%"), clearTimeout(o.volumescroll), o.volumescroll = setTimeout(Volumescrolled, 1e3))
            }, this.Seek = function(t, e) {
                for (var o in v.delete > 0 && (t -= v.delete, e -= v.delete), b) b.hasOwnProperty(o) && ("line" == b[o].g("action") && (e > 0 && b[o].set("click", t / e), b[o].UpdatePlaySeek()), "time" == b[o].g("action") && UpdateTime(b[o], t, e), "live" == b[o].g("action") && (b[o].set("iconopacity", .5), b[o].set("saturate", 0)))
            }, this.Duration = function(t, e) {
                for (var o in b) b.hasOwnProperty(o) && ("duration" == b[o].g("action") && (v.delete > 0 && (e -= v.delete), b[o].UpdateText(Time(e))), "line" == b[o].g("action") && (b[o].UpdatePlay(t, e), b[o].PlacePoints(e)), "time" == b[o].g("action") && UpdateTime(b[o], t, e))
            }, this.Settings = function() {
                settings.g("show") ? settings.hide() : settings.show()
            }, this.SettingsVisible = function() {
                return !!settings && !!settings.g("show")
            }, this.MenuProc = function(t) {
                settings && settings.menuproc(t)
            }, this.SettingsClose = function() {
                SettingsClose()
            }, this.SettingsTimer = function(t) {
                settings && settings.UpdateTimer(t)
            }, this.SettingsSpeed = function() {
                settings && settings.UpdateSpeed()
            }, this.SettingsExist = function(t) {
                if (settings) return settings.Exist(t)
            }, this.Playlist = function() {
                playlist && (playlist.g("show") ? playlist.hide(1) : playlist.show())
            }, this.PlaylistShow = function() {
                playlist && setTimeout(function() {
                    playlist.show()
                }, 100)
            }, this.PlaylistVisible = function() {
                return !!playlist && !!playlist.g("show")
            }, this.PlaylistG = function(t) {
                return playlist ? playlist.g(t) : ""
            }, this.UpdatePlaylist = function(t) {
                playlist && playlist.updatePlaylist(t)
            }, this.PreNewPl = function(t) {
                playlist && playlist.prenewpl(t)
            }, this.PlaylistNext = function() {
                playlist && playlist.PlaylistNext()
            }, this.PlaylistHere = function() {
                playlist && playlist.PlaylistHere()
            }, this.PlaylistControls = function() {
                PlaylistControls()
            }, this.PlaylistNextExist = function() {
                return !!playlist && playlist.PlaylistNextExist()
            }, this.PlaylistPrevExist = function() {
                return !!playlist && playlist.PlaylistPrevExist()
            }, this.PlaylistExist = function() {
                return !!playlist && playlist.PlaylistExist()
            }, this.PlaylistRewind = function() {
                playlist && playlist.PlaylistRewind()
            }, this.PlaylistPrev = function() {
                playlist && playlist.PlaylistPrev()
            }, this.PlaylistPlayId = function(t) {
                t && playlist && playlist.playById(t)
            }, this.PlaylistOpenId = function(t) {
                t && playlist && playlist.openById(t)
            }, this.PlaylistMove = function(t) {
                t && playlist && (css(playlist.co(), {
                    maxHeight: "none",
                    "padding-right": playlist.s("bgpaddingright")
                }), document.getElementById(t).appendChild(playlist.co()), hide2(playlist.c()))
            }, this.ShowSettingsBut = function() {}, this.QualityChanged = function(t) {
                settings && (settings.SetQuality(), settings.g("show") && setTimeout(function() {
                    settings.hide()
                }, 200))
            }, this.QualityChangedNoHand = function() {
                settings && settings.SetQuality(), o.settings2 && o.settings2.update()
            }, this.AirplayChanged = function(t) {
                settings && settings.Airplay(), Resize(), ShowOrHide()
            }, this.SettingChanged = function(t) {
                settings && (settings.SetSetting(t), settings.g("show") && settings.hide()), o.settings2 && o.settings2.update(), "speed" == t && SpeedChanged()
            }, this.AudioTrackChangedNoHand = function(t) {
                settings && settings.SetSetting("audiotrack"), o.settings2 && o.settings2.update()
            }, this.SubtitleChanged = function() {
                settings && (settings.SetSubtitle(), settings.g("show") && setTimeout(function() {
                    settings.hide()
                }, 200)), o.settings2 && o.settings2.update(), o.casting && o.tagvideo && o.chromecast.Sub()
            }, this.SubOpt = function() {
                o.settings2 && o.settings2.hide(), settings && settings.SubOpt()
            }, this.SettingsN = function(t, e, o) {
                for (var n in b) b.hasOwnProperty(n) && ("settings" == b[n].g("action") && 1 == b[n].s("hdicon") && b[n].HdIcon(), b[n].g("action_settings") == "settings#" + t && (b[n].set("set#visible", e), "text" == b[n].g("type") ? o && b[n].UpdateText(NoSpan(o)) : ("subtitle" == v.settings["settings" + t + "action"] && (o == Lang("off") ? b[n].CustomSwitch(0) : b[n].CustomSwitch(1)), Resize()), ShowOrHideProcessor(b[n])))
            }, this.UpdateSettings = function() {
                settings && (settings.SetQuality(), settings.SetSetting("audiotrack"), settings.SetSetting("download"))
            }, this.RenewPoints = function() {
                var t = FindBut("action", "line");
                t && t.RenewPoints()
            }, this.resize = function() {
                Resize(), toolbarHidden && (o.resizeonmouse = !0)
            }, this.resizeFromText = function(t) {
                toolbarHidden && 1 != t ? v.toolbar.resizeme = !0 : (Resize(), ShowOrHide())
            }, this.refresh = function() {
                ShowOrHide(), Resize(), ShowOrHide(), o.nativecontrols ? hide2(bg2) : toolbarHidden || show2(bg2)
            }, this.KeyDown = function(t) {
                if (pljssglobalid == v.id && 1 == v.hotkey.on) {
                    var e = t.which,
                        n = !1;
                    if (void 0 == e && (e = t.keyCode), exist(o.vast) || exist(o.pass) || 1 == o.stopkeys) return !1;
                    if (o.play && 1 == v.hotkey.onplay && (n = !0), (1 == v.hotkey.space && 32 == e || 1 == v.hotkey.enter && 13 == e) && (o.focus || o.mouseHere || n)) return 1 == v.hotkey.icons && PluginHotIcon("play", o.play ? 0 : 1), o.actions.Toggle(), t.preventDefault(), !1;
                    if (v.hotkey.vol || (v.hotkey.vol = .2), v.hotkey.scale || (v.hotkey.scale = 5), 1 == v.hotkey.nums && (o.focus || n) && o.media.duration() > 0)
                        for (var a = 48; a < 58; a++) e == a && o.actions.Seek(o.media.duration() * (e - 48) * 10 / 100, !0);
                    39 == e && (o.focus || n) && KeyPlusUp(v.hotkey.leftright), 37 == e && (o.focus || n) && KeyPlusDown(v.hotkey.leftright), 38 == e && (o.focus || n) && KeyPlusUp(v.hotkey.updown), 40 == e && (o.focus || n) && KeyPlusDown(v.hotkey.updown), 187 == e && (o.focus || n) && KeyPlusUp(v.hotkey.plusminus), 189 == e && (o.focus || n) && KeyPlusDown(v.hotkey.plusminus)
                }
            }, this.KeyUp = function(t) {
                if (pljssglobalid == v.id) {
                    var e = t.which;
                    if (void 0 == e && (e = t.keyCode), 57 == e && v.log, o.fullscreen && 27 == e && o.actions.Normalscreen(), exist(o.vast) || exist(o.pass)) return !1;
                    1 == v.hotkey.f && 70 == e && 1 != v.hidevideo && (o.focus || o.mouseHere) && (1 == v.hotkey.icons && PluginHotIcon("fullscreen", o.fullscreen ? 0 : 1), o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()), 1 == v.hotkey.m && 77 == e && (o.focus || o.mouseHere) && (1 == v.hotkey.icons && PluginHotIcon("mute", o.muted ? 1 : 0), o.muted ? o.actions.Unmute() : o.actions.Mute())
                }
            }, this.Remove = function() {
                for (var t in clearInterval(o.toolbarInterval), o) 0 == t.indexOf("control") && t.indexOf("Interval") > -1 && clearInterval(o[t]);
                for (var e = 0; e < butNames.length; e++) b[key = butNames[e]] && b[key].Remove();
                settings && settings.Remove(), playlist && playlist.Remove(), bg.Remove(), bg2.parentNode == o.frame ? o.frame.removeChild(bg2) : o.toolbar && o.toolbar.removeChild(bg2)
            }, this.ShowForce = function() {
                ShowForce()
            }, this.HideForce = function() {
                HideForce(), ShowOrHide()
            }, this.HideInterval = function() {
                HideInterval()
            }, this.ToolbarHidden = function() {
                return toolbarHidden
            }
        },
        Control = function(t) {
            var e = [],
                n = 0,
                a = 0,
                s = !0,
                r = !1,
                l = 1,
                d = 1,
                c = "",
                u = !1,
                $ = !1,
                f = 0,
                p = 0,
                _ = 0,
                h = 0,
                g = !1,
                m = !1,
                b = !1,
                y = !1;
            e = UpdateObject(e, default_style.but);
            var w = [(e = UpdateObject(e, v[t])).action];
            N = w[0], exist(e.action2) && (w[1] = e.action2), exist(e.opposite) && (w[1] = e.opposite), exist(e.title) && (e.text = e.title), exist2(e.scalesmall) && o.small && (e.scale = e.scalesmall), "share" == N && (o.shareme = !0), exist(e.linkurl) && ("text" == e.type && "" != e.linkurl && exist(v[e.linkurl + "text"]) && (e.text = v[e.linkurl + "text"]), 0 == e.linkurl.indexOf("settings#") && (c = e.linkurl, "" == e.tiptext && -1 == c.indexOf(",") && (e.tiptext = Lang(v.settings["settings" + c.substr(9) + "action"]))), e.linkurl.indexOf("captions") > -1 && (v.hlscaptions = !0), e.linkurl.indexOf("share:") > -1 && (o.shareme = !0), "countdown" == e.linkurl && (e.counter = new PluginCountdown(e)));
            var k = e.tiptext ? e.tiptext.split("///") : [];
            1 == e.liketext && (e.type = "text", e.text = t5(0) + (w.length > 1 ? "///" + t5(1) : ""), exist2(e.iconscolor) && (e.color = e.iconscolor));
            var O = 0,
                L = [],
                S = [],
                C = [],
                T = 0;
            if ("text" == e.type) {
                if (e.dom && exist(v[e.dom + "text"]) && (e.text = v[e.dom + "text"]), exist(e.text)) {
                    L[0] = trim(e.text), e.lngth = e.text.length;
                    var E = ["/", "|", "-"];
                    E.indexOf(e.text.substr(-1)) > -1 && (e.postsmbl = e.text.substr(-1)), E.indexOf(e.text.substr(0, 1)) > -1 && (e.presmbl = e.text.substr(0, 1)), ("time" == N || "duration" == N) && (0 == e.text.indexOf("0:") && (e.timeshort = !0), 3 == e.text.split(":").length ? e.with_hours = !0 : e.text.indexOf("00:00") > -1 && (e.with_min = !0), 1 == e.dvrtime && (v.dvrtime = 1)), 1 == e.inversetime && 0 == e.text.indexOf("-") && (e.minus4back = !0), e.text.indexOf("///") > 0 && ("custom" == N || 1 == e.liketext) && (e.texts = e.text.split("///"), e.text = L[0] = e.texts[0])
                }
                1 == v.fonts && (setTimeout(t3, 100), setTimeout(t3, 500), setTimeout(t3, 1e3))
            } else exist(e.icon) && (L[0] = e.icon, L[0].indexOf("///") > 0 && -1 == L[0].indexOf("base64") && (L = e.icon.split("///")), exist(e.icon2) && (L[1] = e.icon2), 1 == e.iconsreplay && exist2(e.icon3) && (L.push(e.icon3), T = L.length - 1));
            "custom" == N && 1 == e.link2 && exist(e.linkurl2) && (e.linkurl0 = e.linkurl);
            var P = createElement("div");
            "timeline" == e.position ? o.timeline.appendChild(P) : (e.position.indexOf("controls") > -1 && 1 == v.toolbar.hide && 1 == v.toolbar.hidedown ? o.toolbar.appendChild(P) : o.frame.appendChild(P), "buffer" == N && 1 == e.ontop2 && (P.style.zIndex = 2001));
            var A = createElement("div");
            if (P.appendChild(A), css(P, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: 1,
                    fontSize: "14px",
                    lineHeight: "1em",
                    zIndex: 2
                }), exist2(e.dom) && attr(P, {
                    id: v.id + "_control_" + e.dom
                }), 1 == e.rotateplaying && css(P, {
                    transition: "transform 0.2s linear"
                }), L.length > 0) {
                for (I = 0; I < L.length; I++) {
                    if (S[I] = createElement("div"), css(S[I], {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                            opacity: e.a,
                            transition: "opacity 0.1s linear,transform 0.1s linear"
                        }), "pic" == e.type && "" != e.src && (exist2(e.dom) && (attr(S[I], {
                            id: v.id + "_control_" + e.dom + "_icon"
                        }), v[e.dom + "src"] && (e.src = v[e.dom + "src"])), e.src.indexOf(".png") > -1 || e.src.indexOf(".jpg") > -1 || e.src.indexOf(".gif") > -1 || e.src.indexOf("base64") > -1)) {
                        -1 == e.src.indexOf("//") && -1 == e.src.indexOf("base64") && (e.src = "//" + e.src);
                        var I, z, q, V, A, M, H, D, j, R, N, B, F, W, U, Y, X, Q, G = createElement("img");
                        e.loading = 1, G.addEventListener("load", tb), G.src = e.src, S[I].appendChild(G), e.w = S[I].offsetWidth, e.h = S[I].offsetHeight, e.picheight > 0 && css(G, {
                            height: e.picheight
                        })
                    }
                    "text" == e.type && (css(S[I], {
                        color: e.color,
                        fontSize: e.fontsize * existv(v.globalfs, 1),
                        fontFamily: checkFont(e.font),
                        "letter-spacing": e.letterspacing + "px",
                        padding: "0 3px 0 3px",
                        "white-space": "nowrap"
                    }), o.small && exist2(e.fontsizesmall) && css(S[I], {
                        fontSize: e.fontsizesmall * existv(v.globalfs, 1)
                    }), 1 == e.click && (e.text.indexOf("<a ") > -1 || "control_title" == t) && css(S[I], {
                        pointerEvents: "auto"
                    }), 1 == e.bold && css(S[I], {
                        "font-weight": "bold"
                    }), "live" == L[I] && (L[I] = Lang("live")), S[I].innerHTML = tO(L[I]), "custom" == N && "Продолжить с {time}" == L[I] && (v.framecontinuecontainer = S[I]), setTimeout(tv, 100), e.w = S[I].offsetWidth, e.h = S[I].offsetHeight, exist2(e.dom) && attr(S[I], {
                        id: v.id + "_control_" + e.dom + "_text"
                    })), "css" == e.type && controlCSS(L[I], e.color, S[I]);
                    var Z = L[I].toString();
                    0 == Z.indexOf("var:") && (Z = existv(window[Z.substr(4)], ""));
                    var K = Z.indexOf("<svg") > -1 || Z.indexOf("<SVG") > -1;
                    "svg" == e.type && (Z.indexOf("<g>") > -1 || K) && (("mute" == N || "custom" == N) && (Z = Z.replace(/pjs_/g, "pjs_" + v.id + t)), Z.indexOf("pointer") > -1 && ta(S[I]), S[I].innerHTML = (K ? "" : "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>") + Z + (K ? "" : "</svg>"), S[I].offsetWidth > 20 && (e.w = S[I].offsetWidth), S[I].offsetHeight > 20 && (e.h = S[I].offsetHeight), css(S[I], {
                        width: e.w,
                        height: e.h
                    }), -1 != e.iconscolor && tL(S, e.iconscolor), exist2(e.dom) && attr(S[I], {
                        id: v.id + "_control_" + e.dom + "_icon" + I
                    })), P.appendChild(S[I]), I > 0 && hide(S[I])
                }
                if (td(), X && tb(), "chromecast" == e.linkurl ? (e.chromecast = 1, e.hide = 1, o.chromecast && (S[0].innerHTML = o.chromecast.button(-1 != e.iconscolor ? e.iconscolor : "#ffffff")), o.system.mobile ? (S[0].ontouchstart = tr, S[0].ontouchend = t$, S[0].ontouchmove = ts) : (S[0].onmouseover = tu, S[0].onmouseout = t$, S[0].onmousemove = t8)) : (V.offsetWidth * e.scale < 35 || V.offsetHeight * e.scale < 35) && "text" != e.type ? (tn(), ta(M)) : ta(V), "custom" == N) {
                    if (1 == e.link && exist(e.linkurl)) {
                        var J = e.linkurl;
                        if (0 == J.indexOf("api:")) {
                            var tt = J.substr(4).split(",");
                            if (2 == tt.length) {
                                var te = tt[1].split("/");
                                2 == te.length && ("hd" == tt[0] && (tt[0] = "default_quality"), v[tt[0]] == te[1] && (e.a = 1, css(S[0], {
                                    opacity: e.a
                                })))
                            }
                        }("unblock" == J || "block" == J) && (o.actions.Curtain(), P.style.zIndex = 2001, o.stopkeys = 1)
                    }(1 == e.hide && (1 == e.hideafter || 1 == e.hidebefore) || "skip" == J) && (e.often = 1)
                }
                "settings" == N && 1 == e.hdicon && (Y = new PluginHdIcon(P, V, e)), 0 == e.click && Pnt0(P), 1 == e.loading && hide(V), 1 == e.tip && tw(), e.position.indexOf("right") > -1 && (p = 1), e.position.indexOf("top") > -1 && (_ = 1), (e.position.indexOf("bottom") > -1 || e.position.indexOf("control") > -1) && (h = 1), tc();
                var ti = "";
                0 != e.rotation && (ti += "rotate(" + e.rotation + "deg)"), 1 == e.flipx && (ti += " scaleX(-1)"), 1 == e.flipy && (ti += " scaleY(-1)"), "" != ti && css(P, {
                    transform: ti
                }), "buffer" == N && t6();
                var tt = [];
                if ("playlist" == N)
                    for (I = 0, tt = ["autoplaylist", "openplaylistafter", "openplaylistbefore", "openplaylistpause", "openplaylistroot", "playlistrewind"]; I < tt.length; I++) exist(e[tt[I]]) && !exist(v.playlist[tt[I]]) && (v.playlist[tt[I]] = e[tt[I]]);
                if ("title" == N)
                    for (I = 0, tt = ["showtitleplaylist", "addtitleplaylist", "addtitleplaylistbr"]; I < tt.length; I++) exist(e[tt[I]]) && !exist(options[tt[I]]) && (v[tt[I]] = e[tt[I]]);
                1 == e.tipalways && tx(), "custom" == N && 0 == e.on && hide2(P), 1 == e.hide && e.hideuntilto > 0 && setTimeout(to, 1e3 * e.hideuntilto)
            }

            function to() {
                e.hideuntilto = -1, o.controls.refresh()
            }

            function tn() {
                M && M.parentNode.removeChild(M), M = createElement("div"), css(M, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "pic" == e.type ? V.offsetWidth : (V.offsetWidth > 35 ? V.offsetWidth : 35) * e.clickscalex,
                    height: "pic" == e.type ? V.offsetHeight : (V.offsetHeight > 35 ? V.offsetHeight : 35) * e.clickscaley
                }), e = MarginPadding(e, "clickmargin", "clickmargin"), P.appendChild(M)
            }

            function ta(t) {
                0 == N.indexOf("time") && 1 == w.length && (e.click = 0), "custom" == N && 0 == e.link && (e.click = 0), 1 == e.click ? (1 == e.hand && css(t, {
                    cursor: "pointer"
                }), css(t, {
                    pointerEvents: "auto"
                }), o.system.mobile ? (t.addEventListener("touchmove", function(t) {
                    ts(t)
                }), t.addEventListener("touchstart", function(t) {
                    tr(t)
                }), t.addEventListener("touchend", function(t) {
                    tl(t)
                })) : t.onclick = tp, (1 == v.toolbar.clickarea || 1 == e.clickarea) && css(t, {
                    "background-color": "#ff0000",
                    opacity: .5
                })) : css(t, {
                    cursor: "default"
                }), o.system.mobile || (t.onmouseover = tu, t.onmouseout = t$), (1 == e.hidden || 1 == e.tip) && (t.onmousemove = t8)
            }

            function ts(e) {
                js("touch_" + t), e.stopPropagation(), $ = !0
            }

            function tr(t) {
                1 == e.mobileover && tu(), t.stopPropagation()
            }

            function tl(t) {
                t.stopPropagation(), t.preventDefault(), 1 == e.mobileover && t$(), $ || tp(t), $ = !1
            }

            function td() {
                if (V && V.parentNode.removeChild(V), V = createElement("div"), css(V, {
                        position: "absolute",
                        top: 0,
                        left: 0
                    }), exist2(e.dom) && attr(V, {
                        id: v.id + "_control_" + e.dom + "_bg"
                    }), z = e.w, q = e.h, e = MarginPadding(e, "margin", "margin"), "text" == (e = MarginPadding(e, "marginproc", "marginproc")).type && (z = S[O].offsetWidth, q = S[O].offsetHeight, e.minw > 0 && z < e.minw && (z = e.minw)), e = MarginPadding(e, "bgpadding", "bgpadding"), e = MarginPadding(e, "iconmargin", "iconmargin"), o.system.safari && (e.iconmarginleft /= e.scale, e.iconmarginright /= e.scale, e.iconmargintop /= e.scale, e.iconmarginbottom /= e.scale), exist2(e.dom) && exist(v.custom) && "custom" == e.action && "object" == typeof v.custom) {
                    for (var t = 0; t < Object.keys(v.custom).length; t++)
                        if (v.custom[t][e.dom]) {
                            if ("off" == v.custom[t][e.dom]) e.on = 0;
                            else {
                                var n = v.custom[t][e.dom].split(":");
                                "margin-left" == n[0] && (n[1].indexOf("%") > 0 ? e.marginprocleft = parseInt(n[1]) : e.marginleft = parseInt(n[1]))
                            }
                        }
                }
                e.h = q, e.w = z, 1 == e.bg ? (q = q + e.bgpaddingtop + e.bgpaddingbottom, z = z + e.bgpaddingleft + e.bgpaddingright, e.h = q, e.w = z, "text" == e.type && (e.bgh = S[0].offsetHeight)) : e.bga = 0, css(V, {
                    width: 1 == e.bgstretch ? 5e3 : z,
                    height: q,
                    borderRadius: e.bgo * q / 2,
                    background: e.bgcolor,
                    opacity: e.bga,
                    transition: "opacity .1s linear, background .1s linear, transform .1s linear"
                }), "pic" == e.type && css(V, {
                    width: z,
                    height: q,
                    borderRadius: e.bgo * q / e.scale / 2
                }), 1 == e.bglines && Bglines(V, e.bgcolor, e.bgline1, e.bgline2), 1 == e.bgborder && css(V, {
                    border: "1px solid " + e.bgbordercolor
                }), A.appendChild(V)
            }

            function tc() {
                if (css(V, {
                        top: -V.offsetHeight / 2,
                        left: -V.offsetWidth / 2
                    }), M) {
                    var t = "pic" == e.type ? V.offsetWidth : V.offsetWidth > 35 ? V.offsetWidth : 35;
                    css(M, {
                        top: -("pic" == e.type ? V.offsetHeight : V.offsetHeight > 35 ? V.offsetHeight : 35) / 2 + e.clickmargintop - e.clickmarginbottom,
                        left: -t / 2 + e.clickmarginleft - e.clickmarginright
                    })
                }
                for (I = 0; I < L.length; I++) "svg" == e.type ? css(S[I], {
                    top: -Math.round(parseInt(S[I].style.height)) / 2,
                    left: -parseInt(S[I].style.width) / 2
                }) : css(S[I], {
                    top: -Math.round(S[I].offsetHeight) / 2,
                    left: -S[I].offsetWidth / 2
                }), V && css(S[I], {
                    top: int(S[I].style.top) + e.bgpaddingtop / 2 - e.bgpaddingbottom / 2 + e.iconmargintop / 2 + e.iconmarginbottom / 2,
                    left: int(S[I].style.left) + e.bgpaddingleft / 2 - e.bgpaddingright / 2 + e.iconmarginleft / 2 + e.iconmarginright / 2
                })
            }

            function tu() {
                var n;
                if (u = !0, 1 == e.iconsover && (n = W && exist(e.icon2) ? 1 : 0, Q && C.length > 2 && (n = 2), C[n] && (tm(), show(S[C[n]]))), 1 == e.bg && (-1 != e.bgaover && css(V, {
                        opacity: e.bgaover
                    }), -1 != e.bgcolorover && css(V, {
                        background: e.bgcolorover
                    })), e.aover > -1 && !r)
                    for (n = 0; n < L.length; n++) "hidden" != S[n].style.visibility && css(S[n], {
                        opacity: e.aover
                    });
                if (-1 != e.iconscolorover && tL(S, e.iconscolorover), 1 == e.rotateonhover && (f += 45, t1(S[0], f)), e.scaleover > e.scale && e.scaleover > -1 && t0(e.scaleover), "settings" == N && o.controls.SettingsVisible());
                else if (1 == e.tip && 1 != e.tipalways) {
                    var a = k.length > 1 && !W ? k[1] : k[0];
                    a && 0 == a.indexOf("var:") && (j.innerHTML = window[a.substr(4)], tx()), show(H), css(H, {
                        opacity: 1
                    })
                }
                "mute" == N && (o.actions.volumewheel(!0), o.volumewheel = !0), o.controlover = !0, o.controls.Mouse(t, "over")
            }

            function t$() {
                var n;
                if (u = !1, 1 == e.iconsover && (n = W && exist(e.icon2) ? 1 : 0, Q && C.length > 2 && (n = 2), tm(), show(S[n])), 1 == e.bg && (-1 != e.bgaover && css(V, {
                        opacity: e.bga
                    }), -1 != e.bgcolorover && css(V, {
                        background: e.bgcolor
                    })), e.aover > -1)
                    for (n = 0; n < L.length; n++) "hidden" != S[n].style.visibility && css(S[n], {
                        opacity: e.a
                    });
                e.scaleover > -1 && t0(e.scale), -1 != e.iconscolorover && tL(S, -1 == e.iconscolor ? "#ffffff" : e.iconscolor), "mute" != N || o.fullscreen || (o.actions.volumewheel(!1), o.volumewheel = !1), tf(), o.controlover = !1, o.controls && o.controls.Mouse(t, "out")
            }

            function tf() {
                1 == e.tip && 1 != e.tipalways && (hide(H), css(H, {
                    opacity: 0
                }))
            }

            function tp(n) {
                n && (n.cancelBubble = !0), g || (o.controls.ControlClick(t), "custom" == N && t_(), tf(), 1 == e.rotateonclick && (f += 45, t1(S[0], f)), b = !0, (1 == e.hideafterclick || "control_start" == t && 1 == e.hide && 1 == e.hideonplay) && o.controls.refresh())
            }

            function t_() {
                L && (L.length > 1 && (!0 == W ? (show(S[0]), hide(S[1])) : (show(S[1]), hide(S[0]))), 1 == e.tip && k.length > 1 && (j.innerHTML = o.ni + (!0 == W ? k[0] : k[1]) + o.ni2, tx())), exist(e.linkurl0) && (!0 == W ? e.linkurl = e.linkurl0 : e.linkurl = e.linkurl2), th(), W = !0 != W, e.linkurl && e.linkurl.indexOf(",0/1") > -1 && js(e.linkurl, W ? 1 : 0), 1 == e.bg && exist(e.bgcolorlink2) && -1 != e.bgcolorlink2 && (W ? (e.bgcolorlink0 = e.bgcolor, e.bgcolor = e.bgcolorlink2) : e.bgcolor = e.bgcolorlink0, td(), ta(V), tc(), "text" == e.type ? t3() : t0(e.scale))
            }

            function th() {
                exist(e.texts) && e.texts.length > 1 && (!0 == W ? t7(e.texts[0]) : t7(e.texts[1]))
            }

            function tg(e) {
                e.cancelBubble = !0, o.controls.ControlClick(t)
            }

            function tm() {
                for (var t = 0; t < L.length; t++) "hidden" != S[t].style.visibility && (css(S[t], {
                    opacity: e.a
                }), hide(S[t]))
            }

            function tv(t) {
                S[0] && S[0].offsetWidth > o.screen_w - e.marginleft - e.marginright - e.bgpaddingleft - e.bgpaddingright && (1 == e.marquee ? (t || (t = S[0].innerHTML), S[0].innerHTML = "<marquee>" + t + "</marquee>") : css(S[0], {
                    "white-space": "normal"
                }), css(S[0], {
                    width: o.screen_w - e.marginleft - e.marginright - e.bgpaddingleft - e.bgpaddingright
                }))
            }

            function tb() {
                V ? (X = !1, e.loading = 0, hide(V), S[0] && (e.w = S[0].offsetWidth * e.scale, e.h = S[0].offsetHeight * e.scale, t0(e.scale)), e.loaded = 0, td(), tn(), ta(M), show(V), tc(), o.controls.resize(), isVisible(P) || hide2(P)) : X = !0
            }

            function ty(t) {
                t.cancelBubble = !0
            }

            function t8() {
                o.system.mobile || o.controlover || tu(), tx()
            }

            function t0(t) {
                if (t > 0) {
                    for (o.system.safari && 1 != e.tipalways ? css(V, {
                            zoom: t + ""
                        }) : css(V, {
                            transform: "scale(" + t + ")"
                        }), I = 0; I < L.length; I++) o.system.safari && 1 != e.tipalways ? (css(S[I], {
                        zoom: t + ""
                    }), m = !0) : css(S[I], {
                        transform: "scale(" + t + ")"
                    });
                    l = t, d = t
                }
            }

            function tw() {
                if (H = createElement("div"), css(H, {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "auto",
                        opacity: 0,
                        transition: "opacity 0.1s linear"
                    }), D = createElement("div"), e = MarginPadding(e, "tippadding", "tippadding"), e = MarginPadding(e, "tipmargin", "tipmargin"), css(D, {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: 30,
                        "background-color": e.tipbgcolor,
                        opacity: e.tipbga,
                        "border-radius": e.tipbgrounding
                    }), j = createElement("div"), css(j, {
                        position: "absolute",
                        left: e.tippaddingleft,
                        top: e.tippaddingtop,
                        color: e.tipcolor,
                        "font-family": checkFont(e.tipfont),
                        "font-size": e.tipfontsize * existv(v.globalfs, 1),
                        "letter-spacing": e.tipletterspacing + "px",
                        "line-height": "1"
                    }), e.tiptext && 0 == e.tiptext.indexOf("var:") && (e.tipvar = !0), e.tipvar || css(j, {
                        "white-space": "nowrap"
                    }), 1 == e.tippointer && ((R = createElement("div")).innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + e.tipbgcolor.replace("#", "") + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'), 1 == e.tipalways ? (css(H, {
                        opacity: 1
                    }), ta(H)) : Pnt0(H), P.appendChild(H), j.innerHTML = o.ni + ("" == e.tiptext ? Lang(N) : k[0]) + o.ni2, H.appendChild(D), H.appendChild(j), 1 == e.tippointer) {
                    H.appendChild(R);
                    var t = o.doctype ? "-8px" : "-6px",
                        n = e.tippointeralign;
                    exist(n) || (n = "");
                    var a = n.indexOf("top") > -1;
                    a && t1(R, "-180"), css(R, {
                        position: "absolute",
                        right: n.indexOf("right") > -1 ? 10 * e.scale : "auto",
                        left: n.indexOf("left") > -1 ? 10 * e.scale : "" == n || "top" == n ? "50%" : "auto",
                        "margin-left": "" == n || "top" == n ? "-4px" : 0,
                        bottom: a ? "auto" : t,
                        top: a ? t : "auto",
                        opacity: e.tipbga
                    })
                }
                tx()
            }

            function tx() {
                1 == e.tip && (css(H, {
                    top: (1 == h ? -q - H.offsetHeight + 3 : -H.offsetHeight / 2) + e.tipmargintop - e.tipmarginbottom,
                    left: (1 == p ? -j.offsetWidth : 1 == h ? -z / 2 : +j.offsetWidth) - (1 == h ? 0 : j.offsetWidth / 2 + 5) + e.tipmarginleft - e.tipmarginright,
                    height: e.tippaddingtop + j.offsetHeight + e.tippaddingbottom,
                    width: e.tippaddingleft + j.offsetWidth + e.tippaddingright
                }), css(D, {
                    height: H.offsetHeight
                }), H.style.zIndex = "1000")
            }

            function tk(n) {
                n && o.system.mobile && (g = !0, setTimeout(t2, 300)), !n && 1 == e.iconsreplay && Q && (hide(S[T]), show(S[0]), Q = !1), 1 == e.loading ? n ? show(P) : hide(P) : ("control_time" == t || "control_duration" == t ? n ? show(P) : hide(P) : css(P, {
                    display: n ? "block" : "none"
                }), s = n, n && show(P)), n && e.resizetxt && (e.resizetxt = !1, setTimeout(t3, 100))
            }

            function t2() {
                g = !1
            }

            function t1(t, e) {
                css(t, {
                    transform: "rotate(" + e + "deg)" + (t != S[0] || m || 1 == l ? "" : " scale(" + l + ")")
                })
            }

            function t7(t) {
                if ("text" == e.type) {
                    exist(t) && (e.with_hours && (4 == t.length && (t = (e.timeshort ? "0:0" : "00:0") + t), 5 == t.length && (t = (e.timeshort ? "0:" : "00:") + t), 7 == t.length && (t = (e.timeshort ? "" : "0") + t)), e.with_min && 4 == t.length && (t = "0" + t), e.lngth = t.length), t = (e.presmbl ? e.presmbl + (e.minus4back ? "" : " ") : "") + t + (e.postsmbl ? " " + e.postsmbl : "");
                    var a = S[0].offsetWidth + (1 == e.bg ? e.bgpaddingtop + e.bgpaddingbottom : 0),
                        s = S[0].offsetHeight + (1 == e.bg ? e.bgpaddingtop + e.bgpaddingbottom : 0);
                    S[0].innerHTML = o.ni + ("custom" == N ? tO(t) : t) + o.ni2, 1 == e.triangle && (S[0].innerHTML += '<span style="display:inline-block;width:10px"></span><span style="border-top: 3px solid #fff;border-left: 3px solid transparent;border-right: 3px solid transparent;position: absolute;right:3px;top: 50%;margin-top: -1px;"></span>'), "title" == N && (css(S[0], {
                        width: "auto",
                        "white-space": "nowrap"
                    }), tv(t)), e.w = S[0].offsetWidth + (1 == e.bg ? e.bgpaddingtop + e.bgpaddingbottom : 0), e.h = S[0].offsetHeight + (1 == e.bg ? e.bgpaddingtop + e.bgpaddingbottom : 0), (a != e.w || s != e.h || e.w > 0 && 0 == n) && t3(), S[0].offsetWidth > 0 ? n = e.w : ("" != c && hide(S[0]), "" != t && setTimeout(t3, 10))
                }
            }

            function t3() {
                "text" == e.type && S[0] && S[0].offsetWidth > 0 && ("" != c && show(S[0]), z = e.w = S[0].offsetWidth, q = e.h = S[0].offsetHeight, td(), ta(V), tc(), o.controls && o.controls.resizeFromText())
            }

            function t5(t) {
                return o.ni + ("" == e.tiptext ? Lang(w[t]) : k.length > 1 ? k[t] : k[0]) + o.ni2
            }

            function t4(n) {
                var a = "pjs_",
                    s = document.getElementById(a.concat(v.id, t, "slider"));
                s ? (css(s, {
                    transition: "transform 0.1s ease-out"
                }), 1 == n ? s.style.transform = "translate(0, 0)" : s.style.transform = "translate(-7px, 0)") : 1 == n ? e.a = 1 : e.a = .5, W = 1 == n, 1 == e.tip && k.length > 1 && (j.innerHTML = W ? k[0] : k[1]), css(S[0], {
                    opacity: e.a
                })
            }

            function t6() {
                hide2(P);
                for (var t = P.getElementsByTagName("*"), e = t.length; e--;) css(t[e], {
                    "animation-play-state": "paused"
                });
                s = !1
            }

            function tO(t) {
                var e = t + "";
                if (t.indexOf("{time}") > -1 && exist(o.continue) && (t = t.replace("{time}", timeFormat(o.continue.flag().t))), t.indexOf("{title") > -1) {
                    var n = o.titlestore ? o.titlestore : v.title ? v.title : "";
                    t.indexOf("{title2}") > -1 && o.controls && (t = t.replace("{title2}", o.controls.PlaylistG("title2"))), o.butplstart && o.controls && (n = o.controls.PlaylistG("butplstart")), t = t.replace("{title}", n), o.butplstart && !o.controls && setTimeout(t7, 100, e)
                }
                return t
            }

            function tL(t, n) {
                for (var a = 0; a < t.length; a++) SvgColor(t[a], n);
                "chromecast" == e.linkurl && o.chromecast && o.chromecast.Color(t[0], n)
            }
            this.Click = function() {
                tp()
            }, this.c = function() {
                return P
            }, this.s = function(t) {
                return e[t]
            }, this.ss = function(t, n) {
                return !!exist(e[t]) && e[t][n]
            }, this.g = function(n) {
                switch (n) {
                    case "width":
                        return z;
                    case "height":
                        return q;
                    case "x":
                        return int(P.style.left);
                    case "y":
                        return int(P.style.top);
                    case "opacity":
                        return P.style.opacity ? P.style.opacity : 1;
                    case "show":
                        return s;
                    case "scaleX":
                        return l;
                    case "scaleY":
                        return d;
                    case "action":
                        return N;
                    case "action_settings":
                        return c;
                    case "clicked":
                        return b;
                    case "type":
                        return e.type;
                    case "length":
                        return e.lngth ? e.lngth : 0;
                    case "key":
                        return t;
                    case "x0":
                        return B;
                    case "y0":
                        return F;
                    case "over":
                        return u;
                    case "settings#":
                        return 0 == c.indexOf("settings#");
                    case "settings:":
                        return 0 == c.indexOf("settings:");
                    case "set#visible":
                        return y;
                    default:
                        return !1
                }
            }, this.set = function(t, n) {
                switch (t) {
                    case "show":
                        u && t$(), s = n;
                        break;
                    case "display":
                        tk(n);
                        break;
                    case "show2":
                        show2(P);
                        break;
                    case "hide2":
                        hide2(P);
                        break;
                    case "unhidden":
                        e.hidden = 0;
                        break;
                    case "hidetime":
                        e.hidesec > 0 && 1 != e.hidden && !U && (clearTimeout(U), U = setTimeout(function() {
                            hide2(P), e.hidden = 1, U = void 0
                        }, 1e3 * e.hidesec));
                        break;
                    case "scale":
                        t0(n);
                        break;
                    case "scale0":
                        css(P, {
                            transform: "scale(0)"
                        });
                        break;
                    case "scaleX":
                        css(P, {
                            transform: "scaleX(" + n + ")"
                        }), l = n;
                        break;
                    case "scaleY":
                        css(P, {
                            transform: "scaleY(" + n + ")"
                        }), d = n;
                        break;
                    case "opacity":
                        css(P, {
                            opacity: n
                        });
                        break;
                    case "iconopacity":
                        css(S[0], {
                            opacity: n
                        });
                        break;
                    case "saturate":
                        css(S[0], {
                            filter: "saturate(" + n + ")"
                        });
                        break;
                    case "left":
                    case "x":
                        css(P, {
                            left: n
                        });
                        break;
                    case "top":
                    case "y":
                        css(P, {
                            top: n
                        });
                        break;
                    case "width":
                        css(P, {
                            width: n
                        });
                        break;
                    case "height":
                        css(P, {
                            height: n
                        });
                        break;
                    case "over_final":
                        e.over_final = n;
                        break;
                    case "rightside":
                        p = n;
                        break;
                    case "set#visible":
                        y = n;
                        break;
                    case "animation":
                        e.animation = n;
                        break;
                    case "skip":
                        e.skip = n;
                        break;
                    case "x0":
                        B = n;
                        break;
                    case "y0":
                        F = n;
                        break;
                    default:
                        return !1
                }
            }, this.UpdateText = function(t) {
                "" != c && ("x" == e.text || "1x" == e.text) && (t += "x"), t7(t), isVisible(P) || (e.resizetxt = !0)
            }, this.CustomText = function(t) {
                e.customtext = t, t7(t), o.controls.resize()
            }, this.Rotate = function() {
                t1(P, a), a += 20
            }, this.RenewFromTitle = function(t) {
                e.text.indexOf("{title") > -1 && t7(e.text)
            }, this.CustomToogle = function() {
                t_()
            }, this.ResizeText = function() {
                t3()
            }, this.UpdateVolume = function(n) {
                if (1 == e.displayvolume) {
                    var a = 4;
                    if ("control_mute" == t) {
                        if (o.system.mobile) return
                    } else a = 8;
                    for (var s = "pjs_", r = [], l = 1; l < a; l++) r[l] = document.getElementById(s.concat(v.id, t, "volume_element", l));
                    if (r[1]) {
                        for (var l = 1; l < a; l++) r[l] && hide(r[l]);
                        if (4 == a)
                            for (var l = 1; l < a; l++) n > l / a && r[l] && show(r[l]);
                        else
                            for (var l = a; l > 0; l--)
                                if (1 * n + 1 / a >= l / a && r[l]) {
                                    show(r[l]);
                                    break
                                }
                    }
                }
            }, this.On = function() {
                W || (L && L.length > 1 && w.length > 1 && (hide(S[0]), show(S[1])), w.length > 1 && (N = w[1], 1 == e.tip && (j.innerHTML = t5(1), tx())), 1 == e.iconsreplay && Q && (hide(S[T]), Q = !1), th(), W = !0)
            }, this.CustomSwitch = function(t) {
                t4(t)
            }, this.Off = function() {
                W && (L && L.length > 1 && w.length > 1 && (show(S[0]), hide(S[1])), N = w[0], w.length > 1 && 1 == e.tip && (j.innerHTML = t5(0), tx()), th(), W = !1, Q = !1)
            }, this.ReplayIcon = function() {
                1 == e.iconsreplay && (tm(), show(S[T]), Q = !0)
            }, this.Buffer = function() {
                var t = !1;
                if (1 == e.hide && 1 == e.hidewithposter && isVisible(o.poster) && (t = !0), !t) {
                    show2(P);
                    for (var n = P.getElementsByTagName("*"), a = n.length; a--;) css(n[a], {
                        "animation-play-state": "running"
                    });
                    s = !0
                }
            }, this.BufferStop = function() {
                t6()
            }, this.Remove = function() {
                if (L.length > 0)
                    for (I = 0; I < L.length; I++) P.removeChild(S[I]), S[I] = null;
                V && (V.removeAttribute("onclick"), V.removeAttribute("onmouseover"), V.removeAttribute("onmouseout"), V.parentNode.removeChild(V), V = null), "timeline" == e.position ? o.timeline.removeChild(P) : P.parentNode == o.frame ? o.frame.removeChild(P) : o.toolbar && P.parentNode == o.toolbar && o.toolbar.removeChild(P), H && P.removeChild(H), P = null
            }, this.HdIcon = function() {
                Y && Y.toggle()
            }
        },
        ControlLine = function(t, e) {
            var n, a, s, r, l, d, c, u, $, f, p, _, h, g, m, b, y, w, k, O = [],
                L = !0,
                S = 1,
                C = 1,
                T = 0,
                E = 0;
            for (n in o.current_thumb = -1, default_style.but) O[n] = default_style.but[n];
            var e = v[t].action;
            for (n in v[t].type, default_style[e]) O[n] = default_style[e][n];
            for (n in v[t]) O[n] = v[t][n];
            O.w = parseInt(O.w), O.h = parseInt(O.h), O = MarginPadding(O, "margin", "margin"), O = MarginPadding(O, "marginproc", "marginproc");
            var P = createElement("div");
            1 == v.toolbar.hidedown && 1 == v.toolbar.hide ? o.toolbar.appendChild(P) : o.frame.appendChild(P), "line" == e && (o.timeline = P);
            var A = !1;
            O.customline && "volume" != O.customline && (A = !0), css(P, {
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 1,
                fontSize: "14px",
                lineHeight: "1em"
            }), 1 == O.ontop && (P.style.zIndex = O.order), Q();
            var I = createElement("div");
            css(I, {
                position: "absolute",
                bottom: Math.round(-O.h / 2),
                left: Math.round(-O.w / 2)
            }), 1 == O.roundout && css(I, {
                "border-radius": O.rounding * O.h / 2,
                height: O.h,
                overflow: "hidden",
                "pointer-events": "none"
            }), exist2(O.dom) && attr(P, {
                id: v.id + "_control_" + O.dom
            }), P.appendChild(I), "line" == e && 1 == v.thumbs && tf(), 1 == O.tip && tp();
            var z = createElement("div");
            if (X(0, z, .3, 1 == O.gradient ? "linear-gradient(#" + O.gradientcolorbg + ", #" + O.colorbg + ")" : O.colorbg, O.w, O.abg), 1 == O.customdesign && exist(O.customdesignsvg)) {
                var q = createElement("div");
                q.innerHTML = O.customdesignsvg.replace(/\#FFFFFF/g, "#" + O.colorbg), z.appendChild(q), css(q, {
                    position: "absolute",
                    bottom: -Math.round(O.h / 2),
                    left: 0,
                    "pointer-events": "none"
                }), css(z, {
                    overflow: "hidden",
                    background: "none"
                });
                for (var V = ["path", "polygon", "polyline", "rect", "ellipse"], M = 0; M < V.length; M++) {
                    var H = q.querySelectorAll("svg " + V[M]);
                    if (H.length > 0)
                        for (var D = 0; D < H.length; D++) H[D].style.fill = O.colorbg
                }
            }
            I.appendChild(z);
            var j = createElement("div");
            if (X(1, j, O.linespeed1, 1 == O.gradient ? "linear-gradient(#" + O.gradientcolorload + ", #" + O.colorload + ")" : O.colorload, 0, O.aload), I.appendChild(j), O.aover > 0) {
                var R = createElement("div");
                X(2, R, O.linespeed2, O.colorover, 0, O.aover), I.appendChild(R)
            }
            var N = createElement("div");
            if (X(3, N, O.linespeed3, 1 == O.gradient ? "linear-gradient(#" + O.gradientcolor + ", #" + O.color + ")" : O.color, 0, O.a), 1 == O.customdesign && exist(O.customdesignsvg)) {
                var B = createElement("div");
                B.innerHTML = O.customdesignsvg.replace(/\#FFFFFF/g, "#" + O.color), css(B, {
                    position: "absolute",
                    bottom: -Math.round(O.h / 2),
                    left: 0,
                    "pointer-events": "none"
                }), css(N, {
                    overflow: "hidden",
                    background: "none"
                }), N.appendChild(B)
            }
            if (1 == O.value) {
                var F = createElement("div");
                O = MarginPadding(O, "valuepadding", "valuepadding"), O = MarginPadding(O, "valuemargin", "valuemargin"), css(F, {
                    position: "absolute",
                    bottom: O.h / 2,
                    left: 0,
                    "pointer-events": "none",
                    "font-size": O.valuesize * existv(v.globalfs, 1),
                    color: O.valuecolor,
                    "line-height": "100%",
                    "padding-top": O.valuepaddingtop,
                    "padding-bottom": O.valuepaddingbottom,
                    "padding-left": O.valuepaddingleft,
                    "padding-right": O.valuepaddingright,
                    "margin-top": O.valuemargintop,
                    "margin-bottom": O.valuemarginbottom,
                    "margin-left": O.valuemarginleft,
                    "margin-right": O.valuemarginright,
                    "border-radius": O.valuerounding + "px",
                    display: "none"
                }), 1 == O.valuebg && css(F, {
                    background: "#" + O.valuebgcolor
                }), N.appendChild(F);
                var W = !1
            }
            if (o.timeline_h = O.h, I.appendChild(N), 1 == O.pointed) {
                var U = [];
                if (void 0 !== PluginPoints) var Y = new PluginPoints(P, U, a, O)
            }
            if (1 == O.handle) {
                if (-1 == O.handleicon.toString().indexOf("<svg") && "" == O.handleicon && (O.handleicon = "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>"), (f = createElement("div")).innerHTML = O.handleicon.toString(), O = MarginPadding(O, "handlemargin", "handlemargin"), css(f, {
                        position: "absolute",
                        top: -10 + O.handlemargintop - O.handlemarginbottom,
                        left: -1e3,
                        "pointer-events": "none",
                        height: 20,
                        width: O.handle_width,
                        opacity: O.handlea,
                        transition: "transform 0.1s linear, opacity 0.1s linear"
                    }), 1 == O.handlehide || 1 == O.handlehideinit ? css(f, {
                        transform: "scale(0)"
                    }) : 1 != O.handlescale && css(f, {
                        transform: "scale(" + O.handlescale + ")"
                    }), P.appendChild(f), -1 != O.handlecolor)
                    for (var V = ["path", "rect", "ellipse"], M = 0; M < V.length; M++) {
                        var H = f.querySelectorAll("svg " + V[M]);
                        if (H.length > 0)
                            for (var D = 0; D < H.length; D++) H[D].style.fill = "#" + O.handlecolor
                    }
                O.handlewidth = f.offsetWidth
            }

            function X(t, e, n, a, s, r) {
                css(e, {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: s,
                    height: O["h" + t] > 0 ? O["h" + t] : O.h,
                    background: a ? a.indexOf("linear") > -1 ? a : "#" + a : "",
                    "border-radius": 1 == O.roundout ? 1 : O.rounding * O.h / 2,
                    opacity: r,
                    "pointer-events": "none",
                    transition: "transform 0.2s ease-in-out"
                })
            }

            function Q() {
                s = createElement("div");
                var t = (O = MarginPadding(O, "bgpadding", "bgpadding")).h + O.bgpaddingtop + O.bgpaddingbottom,
                    e = O.w + O.bgpaddingleft + O.bgpaddingright;
                1 == O.bg || (O.bga = 0), O = MarginPadding(O, "clickmargin", "clickmargin"), (1 == v.toolbar.clickarea || 1 == O.clickarea) && (O.bgcolor = "#ff0000", O.bg = 1, O.bga = .5), css(s, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: e,
                    height: t * O.clickscaley,
                    borderRadius: O.bgo * t / 2,
                    backgroundColor: O.bgcolor,
                    opacity: O.bga,
                    pointerEvents: "auto",
                    transition: "opacity .1s linear, background .1s linear"
                }), 1 == O.bgborder && css(s, {
                    border: "1px solid #" + O.bgbordercolor
                }), 1 == O.click ? (1 == O.hand && css(s, {
                    cursor: "pointer"
                }), o.system.mobile || (s.onclick = ti, s.onmouseup = tn, s.onmousedown = ta, s.onmousemove = tl)) : css(s, {
                    cursor: "default"
                }), o.system.mobile || (s.onmouseover = J, s.onmousemove = tl, s.onmouseout = te), o.system.mobile && (s.addEventListener("touchstart", function(t) {
                    t.cancelBubble = !0, !exist(t.clientX) && t.touches.length > 0 && (t.clientX = t.touches[0].pageX, t.clientY = t.touches[0].pageY), w = t, J(t), ta(t)
                }), s.addEventListener("touchend", function(t) {
                    t.cancelBubble = !0, te(t), tn(w)
                }), s.addEventListener("click", function(t) {
                    t.cancelBubble = !0
                }), s.addEventListener("touchmove", function(t) {
                    !exist(t.clientX) && t.touches.length > 0 && (t.clientX = t.touches[0].pageX, t.clientY = t.touches[0].pageY), w = t, tl(t)
                })), css(s, {
                    left: Math.ceil(-O.w / 2 - O.bgpaddingleft)
                }), css(s, {
                    top: Math.ceil(-O.h / 2 - O.bgpaddingtop + O.clickmargintop - O.clickmarginbottom)
                }), P.appendChild(s)
            }

            function G(t) {
                if (t != a) {
                    a = t, o.timeline_w = a;
                    var n = a / z.offsetWidth;
                    css(s, {
                        width: a + O.bgpaddingleft + O.bgpaddingright,
                        left: -a / 2 - O.bgpaddingleft
                    }), css(I, {
                        left: -a / 2
                    }), css(z, {
                        width: a
                    }), css(I, {
                        width: a
                    });
                    var r = j.offsetWidth * n;
                    r > z.offsetWidth && (r = z.offsetWidth), css(j, {
                        width: r
                    });
                    var l = N.offsetWidth * n;
                    css(N, {
                        width: l
                    }), Z(l), "line" == e && t_(), 1 == O.pointed && Y && Y.place(a), o.cut && o.cut.Resize()
                }
            }

            function Z(t) {
                1 == O.handle && (t < O.handlewidth / 2 && 20 != O.handle_width && (t = O.handlewidth / 2), t > a - O.handlewidth / 2 && 20 != O.handle_width && (t = a - O.handlewidth / 2), css(f, {
                    left: t - a / 2 - O.handlewidth / 2 + O.handlemarginleft - O.handlemarginright
                }))
            }

            function K() {
                css(f, {
                    transform: "scale(" + O.handlescale + ")"
                })
            }

            function J(n) {
                o.controls.Mouse(t, "over"), 1 == O.bg && (-1 != O.bgaover && new Motion({
                    mc: s,
                    type: "alpha_div",
                    to: O.bgaover,
                    time: .1,
                    me: t + "bg"
                }), exist2(O.bgcolorover) && css(s, {
                    "background-color": O.bgcolorover
                })), exist2(O.coloroverplay) && css(N, {
                    "background-color": O.coloroverplay
                }), 1 == O.handle && ((1 == O.handleiconsover && exist(O.handleiconover) && (1 == O.handleiconspress && d || (f.innerHTML = "<svg width='" + O.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + O.handleiconover.toString() + "</svg>")), 1 == O.handlehide) ? (1 != O.handlehideinit || o.start) && K() : -1 != O.handleaover && new Motion({
                    mc: f,
                    type: "alpha_div",
                    to: O.handleaover,
                    time: .1,
                    me: t + "handle"
                })), 1 == O.tip && (o.media.duration() > 0 || "volume" == e || A) && tc(), O.expand > 0 && (css(s, {
                    transform: "scaleY(" + ((O.expand - 1) / 5 + 1) + ")"
                }), tt(O.expand)), 1 == O.handle && 1 == O.handlemove && Z(n.clientX - E), "volume" == e && (o.actions.volumewheel(!0), o.volumewheel = !0), u = !0, o.controlover = !0
            }

            function tt(t) {
                css(z, {
                    transform: "scaleY(" + t + ")"
                }), css(j, {
                    transform: "scaleY(" + t + ")"
                }), R && css(R, {
                    transform: "scaleY(" + t + ")"
                }), css(N, {
                    transform: "scaleY(" + t + ")"
                })
            }

            function te() {
                c || (O.aover > 0 && css(R, {
                    width: 0
                }), exist2(O.coloroverplay) && css(N, {
                    "background-color": O.color
                }), 1 == O.bg && (-1 != O.bgaover && new Motion({
                    mc: s,
                    type: "alpha_div",
                    to: O.bga,
                    time: .1,
                    me: t + "bg"
                }), exist2(O.bgcolorover) && css(s, {
                    "background-color": O.bgcolor
                })), 1 == O.handle && (1 == O.handleiconsover && exist(O.handleiconover) && (1 == O.handleiconspress && d || (f.innerHTML = "<svg width='" + O.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + O.handleicon.toString() + "</svg>")), 1 == O.handlehide ? css(f, {
                    transform: "scale(0)"
                }) : -1 != O.handleaover && new Motion({
                    mc: f,
                    type: "alpha_div",
                    to: O.handlea,
                    time: .1,
                    me: t + "handle"
                })), O.expand > 0 && (css(s, {
                    transform: "scaleY(1)"
                }), tt(1)), "volume" != e || o.fullscreen || (o.actions.volumewheel(!1), o.volumewheel = !1), o.controls.Mouse(t, "out")), 1 == O.pointed && Y && Y.out(), 1 == O.tip && (o.media.duration() > 0 || "volume" == e) && tu(), o.thumbs_on && "line" == e && (o.th.hide(), o.current_thumb = -1), u = !1, o.controlover = !1
            }

            function ti(t) {
                t.cancelBubble = !0
            }

            function to(t) {
                t.cancelBubble = !0
            }

            function tn(n) {
                "volume" == e && o.hidden_volume_over && (c = !0, clearTimeout(k), k = setTimeout(function() {
                    c = !1, te()
                }, 1e3)), tr(), o.mouseDown = !1, 1 == O.handle && 1 == O.handleiconspress && exist(O.handleiconpress) && (f.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + O.handleicon.toString() + "</svg>"), ts(n.clientX, n.clientY), o.controls.ControlClick(t), o.controls.StageMouseUp(n.clientX, n.clientY), n.cancelBubble = !0
            }

            function ta(t) {
                d = !0, 1 == O.handle && 1 == O.handleiconspress && exist(O.handleiconpress) && (f.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + O.handleiconpress.toString() + "</svg>"), T = findTop(s), E = findLeft(s), ts(t.clientX, t.clientY), t$($, 1, "no")
            }

            function ts(t, e) {
                var n, s = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
                    r = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                o.system.mobile || (e += r, t += s), O.vertical > 0 ? ($ = (n = e - T - O.bgpaddingright) / a, 270 == O.vertical && ($ = -((($ = (n = e - T - O.bgpaddingleft) / a) - 1) * 1))) : ($ = (n = t - E - O.bgpaddingleft) / a, O.rotation > 134 && O.rotation < 235 && ($ = -((($ = (n = t - E - O.bgpaddingright) / a) - 1) * 1))), $ > 1 && ($ = 1), $ < 0 && ($ = 0)
            }

            function tr() {
                d = !1
            }

            function tl(t) {
                if (E = findLeft(s), O.aover > 0 && (o.start || "line" != e) && css(R, {
                        width: t.clientX - E
                    }), 1 == O.tip && (o.media.duration() > 0 || "volume" == e || A)) {
                    if (tc(), T = findTop(s), ts(t.clientX, t.clientY), "line" == e) {
                        if (1 == v.hlsdvrtime) o.media.isLive() && o.media.currentFile().indexOf("?DVR") > 0 ? b.innerHTML = "- " + timeFormat((1 - $) * o.media.duration(!0)) : b.innerHTML = timeFormat($ * o.media.duration());
                        else {
                            var n = o.media.duration();
                            v.delete > 0 && (n -= v.delete);
                            var r = "";
                            1 == O.pointed && Y && "" != (r = Y.tip($ * n)) && (r += "<br>"), b.innerHTML = r + timeFormat($ * n)
                        }
                    }("volume" == e || A) && (b.innerHTML = th($)), td(t)
                }
                if (o.thumbs_on && "line" == e && o.th && o.media.duration() > 0) {
                    0 == O.tip && (T = findTop(s), E = findLeft(s), ts(t.clientX, t.clientY));
                    var l = -a / 2 + (t.clientX - E) - v.thumb_width / 2;
                    l > a / 2 - v.thumb_width && (l = a / 2 - v.thumb_width), css(o.thumb, {
                        top: -v.thumb_height - (v.thumb_bottom > 0 ? 1 * v.thumb_bottom : 5) - v.thumb_border,
                        left: l < -a / 2 ? -a / 2 : l
                    }), o.th.time($ * o.media.duration(), t.clientX, E, a)
                }
                1 == O.handle && 1 == O.handlemove && Z(t.clientX - E), o.system.mobile && ta(t)
            }

            function td(t, e, n) {
                var s = -a / 2 + (t.clientX + document.documentElement.scrollLeft - E) - b.offsetWidth / 2 + (n || 0),
                    r = 0;
                1 != v.notofh && (s + a / 2 + b.offsetWidth + 10 > o.screen_w && (r = s, s = o.screen_w - a / 2 - b.offsetWidth - 10), s + o.screen_w / 2 < 0 && (r = s, s = -o.screen_w / 2)), css(m, {
                    top: -b.offsetHeight - 1 * O.linetipmarginbottom - O.tippaddingtop - O.tippaddingbottom - (1 == O.toptip ? O.h / 2 * (O.expand > 0 ? O.expand : 1) : 0) + (e || 0),
                    left: s
                }), 1 == O.tippointer && css(y, {
                    position: "absolute",
                    left: b.offsetWidth / 2 - 4 + (0 != r ? r - s : 0),
                    top: b.offsetHeight - 6
                })
            }

            function tc() {
                isVisible(m) && 0 != m.style.opacity || (show(m), css(m, {
                    opacity: 1
                }))
            }

            function tu() {
                hide(m), css(m, {
                    opacity: 0
                })
            }

            function t$(t, n, s) {
                if (t < 0 && (t = 0), v.delete > 0 && n > 1 && (n -= v.delete, t -= v.delete), 1 == O.handle && 1 == O.handlehideinit && 1 != O.handlehide && !O.handleinit && t > 0 && (K(), O.handleinit = !0), d && 1 != n);
                else {
                    var r;
                    n > 0 && t > 0 ? (t > n && (t = n), (r = a * (t / n)) == N.offsetWidth && (r = -1)) : r = 0, r >= 0 && (css(N, {
                        width: r
                    }), 1 == O.handlemove && u || Z(r)), exist(F) && (n < 2 && "line" == e ? W && (hide2(F), W = !1) : (W || (show2(F), W = !0), F.innerHTML = "line" == e ? Time(0 == t ? n : t) : th(t)))
                }
            }

            function tf() {
                o.thumb = createElement("div"), css(o.thumb, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: v.thumb_width,
                    height: v.thumb_height,
                    overflow: "hidden",
                    "pointer-events": "none",
                    "background-color": "#000",
                    "border-radius": v.thumb_radius + "px",
                    display: "none"
                }), o.thumb.id = "pjs_thumbnail_" + v.id, 1 == v.thumb_border && css(o.thumb, {
                    border: v.thumb_borderwidth + "px solid " + SettingsParser("color", v.thumb_bordercolor)
                }), 1 == v.thumb_shadow && css(o.thumb, {
                    "box-shadow": "0px 1px 5px rgba(0,0,0,0.5)"
                }), o.thumb.style.zIndex = "999", P.appendChild(o.thumb)
            }

            function tp() {
                m = createElement("div"), css(m, {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "auto",
                    "pointer-events": "none",
                    opacity: 0,
                    transition: "opacity 0.1s linear"
                }), O = MarginPadding(O, "tippadding", "tippadding"), b = createElement("div"), css(b, {
                    position: "absolute",
                    "padding-left": O.tippaddingleft,
                    "padding-right": O.tippaddingright,
                    "padding-top": O.tippaddingtop,
                    "padding-bottom": O.tippaddingbottom - 1,
                    "text-align": "center",
                    color: O.tipcolor,
                    "font-family": checkFont(O.tipfont),
                    "font-size": O.tipfontsize * existv(v.globalfs, 1),
                    "letter-spacing": O.tipletterspacing + "px",
                    "line-height": "1",
                    "background-color": hex2rgb(O.tipbgcolor, O.tipbga),
                    "border-radius": O.tipbgrounding
                }), O.linetippointer && (O.tippointer = O.linetippointer), 1 == O.tippointer && ((y = createElement("div")).innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="' + CheckColor(O.tipbgcolor) + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'), P.appendChild(m), m.appendChild(b), 1 == O.tippointer && (m.appendChild(y), css(y, {
                    opacity: O.tipbga
                })), m.style.zIndex = "1000"
            }

            function t_() {
                if (o.continue && 1 == v.timestore && !o.start) {
                    var t = o.continue.flag();
                    t.t && t.d && t$(t.t, t.d)
                }
            }

            function th(t) {
                var e = Math.round(100 * t);
                return A && o.line_speed ? (A && exist2(O.tiptext) ? O.tiptext + "&nbsp;" : "") + parseFloat(t * o.files_speed.slice(-1)[0]).toFixed(1) : e
            }
            0 != O.rotation && css(P, {
                transform: "rotate(" + O.rotation + "deg)"
            }), 1 == O.hidden && (hide(P), L = !1), "volume" == e && (1 == O.hide && 1 == O.hideoutmute ? (o.hidden_volume = !0, O.hidden = !0) : o.hidden_volume = !1), O.vertical = 0, 0 != O.rotation && (O.rotation2 = Math.abs(O.rotation), O.rotation2 > 45 && O.rotation2 < 135 && (O.vertical = 90), O.rotation2 > 225 && O.rotation2 < 315 && (O.vertical = 270)), A && (o.line_speed = "speed" == O.customline, a = O.w, t$(1, o.files_speed.slice(-1)[0], "no")), this.PlacePoints = function() {
                Y && Y.place(a)
            }, this.RenewPoints = function() {
                Y && Y.update(a)
            }, this.ShowTip = function(t, e, n, a) {
                tc(), b.innerHTML = e, td(t, n, a)
            }, this.HideTip = function() {
                tu()
            }, this.c = function() {
                return P
            }, this.s = function(t) {
                return O[t]
            }, this.ss = function(t, e) {
                return O[t][e]
            }, this.g = function(n) {
                switch (n) {
                    case "width":
                        return a;
                    case "offsetwidth":
                        return z.offsetWidth;
                    case "height":
                        return O.h;
                    case "x":
                        return int(P.style.left);
                    case "y":
                        return int(P.style.top);
                    case "opacity":
                        return P.style.opacity ? P.style.opacity : 1;
                    case "show":
                        return L;
                    case "scaleX":
                        return S;
                    case "scaleY":
                        return C;
                    case "action":
                        return e;
                    case "key":
                        return t;
                    case "x0":
                        return r;
                    case "y0":
                        return l;
                    case "click":
                        return $;
                    case "cul":
                        return cul;
                    default:
                        return !1
                }
            }, this.set = function(t, n) {
                switch (t) {
                    case "show":
                        L = n;
                        break;
                    case "mouseDown":
                        d = n;
                        break;
                    case "display":
                        "line" == e || 1 == O.hide ? css(P, {
                            visibility: n ? "visible" : "hidden"
                        }) : css(P, {
                            display: n ? "block" : "none"
                        }), L = n;
                        break;
                    case "scaleX":
                        css(P, {
                            transform: "scaleX(" + n + ")"
                        }), S = n;
                        break;
                    case "scaleY":
                        css(P, {
                            transform: "scaleY(" + n + ")"
                        }), C = n;
                        break;
                    case "opacity":
                        css(P, {
                            opacity: n
                        });
                        break;
                    case "left":
                    case "x":
                        css(P, {
                            left: n
                        });
                        break;
                    case "top":
                    case "y":
                        css(P, {
                            top: n
                        });
                        break;
                    case "click":
                        $ = n;
                        break;
                    case "hiddenwidth":
                        O.hiddenwidth = n;
                        break;
                    case "width":
                        css(P, {
                            width: n
                        });
                        break;
                    case "height":
                        css(P, {
                            height: n
                        });
                        break;
                    case "over_final":
                        O.roundingver_final = n;
                        break;
                    case "x0":
                        r = n;
                        break;
                    case "y0":
                        l = n
                }
            }, this.Resize = function(t) {
                G(t)
            }, this.StageLeave = function(t) {}, this.StageMove = function(n, a) {
                d && (("volume" == e || A) && (ts(n, a), o.controls.ControlClick(t)), "volume" == e && (o.hidden_volume_over = !0), ts(n, a), t$($, 1, "no"))
            }, this.StageMouseUp = function(e, n) {
                d && (tr(), d = !1, ts(e, n), o.controls.ControlClick(t), t$($, 1, "no"))
            }, this.UpdatePlay = function(t, e, n) {
                (e != _ || t != g) && t$(t, e, n)
            }, this.UpdatePlaySeek = function() {
                $ > 1 && ($ = 1), $ < 0 && ($ = 0), css(N, {
                    width: $ * a
                })
            }, this.UpdateLoad = function(t, e) {
                e > 0 && t > 0 ? (css(j, {
                    width: int(a * (t / e))
                }), p = e, h = t) : (h = 0, css(j, {
                    width: 0
                }))
            }, this.Cut = function(t) {
                1 == O.cut && (o.cut ? (!exist(t) || 0 == t) && o.cutted ? (o.cut.hide(), o.cutted = !1) : (!o.cutted || exist(t) && 1 != t && 0 != t) && (o.cut.restart(t), o.cutted = !0) : 0 != t && "undefined" != typeof PluginCut && (o.cut = new PluginCut(P, O, t), o.cutted = !0))
            }, this.Remove = function() {
                P.removeChild(I), s && (s.removeAttribute("onclick"), s.removeAttribute("onmouseover"), s.removeAttribute("onmouseout"), s.parentNode.removeChild(s), s = null), f && P.removeChild(f), P.parentNode == o.frame ? o.frame.removeChild(P) : o.toolbar && P.parentNode == o.toolbar && o.toolbar.removeChild(P), P = null
            }
        },
        ControlsBg = function() {
            var t, e = [],
                n = !0,
                a = 1,
                s = 1,
                r = 0,
                l = 0,
                d = random(1e5, 2e5),
                c = "bg";
            for (var u in e.position = v.toolbar.position, v.toolbar) v.toolbar.hasOwnProperty(u) && (e[u] = v.toolbar[u]);
            0 == e.show && (v.toolbar.h = e.h = 0, e.padding = e.margin = "0 0 0 0", e.gradient = 0), e.scale = 1, e = MarginPadding(e, "margin", "margin"), e = MarginPadding(e, "marginproc", "marginproc"), exist(e.paddingtop) && 20 != e.paddingtop && "-20 0 0 0" == e.margin && (e.margintop = e.paddingtop);
            var $ = createElement("div");
            css($, {
                position: "absolute",
                left: 0,
                top: 0,
                width: 1 == e.stretchonfullscreen ? "100%" : o.normal_w,
                height: e.h - ("top" != e.position ? e.margintop : 0),
                opacity: e.a,
                "pointer-events": "none",
                fontSize: "14px",
                lineHeight: "1em"
            }), o.frame.appendChild($);
            var f = createElement("div");
            if (css(f, {
                    position_: "absolute",
                    left_: 0,
                    top_: 0,
                    width_: "100%",
                    height: e.h - ("top" != e.position ? e.marginbottom + e.margintop : 0),
                    display: "block",
                    "margin-left": e.marginleft,
                    "margin-right": e.marginright,
                    "border-radius": e.rounding
                }), $.appendChild(f), t = $.offsetWidth, v.toolbar_margintop = -e.margintop, 1 == e.gradient) {
                if ("000000" == e.color || "" != v.toolbar.image) {
                    "top" != e.position && (v.toolbar_margintop = 98 - e.h);
                    var p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==";
                    v.toolbar.image.indexOf("data:image") > -1 && (p = v.toolbar.image), css(f, {
                        height: e.h + ("top" != e.position ? v.toolbar_margintop : 0),
                        background: "url(" + p + ") repeat-x 50% 100%",
                        "background-size": "auto"
                    })
                } else {
                    var _ = "to bottom, rgba(" + hexToRgb(e.color) + ",0), rgba(" + hexToRgb(e.color) + ",1)";
                    css(f, {
                        background: "-moz-linear-gradient(" + _ + ")",
                        background: "-webkit-linear-gradient(" + _ + ")",
                        background: "-ms-linear-gradient(" + _ + ")",
                        background: "-o-linear-gradient(" + _ + ")",
                        background: "linear-gradient(" + _ + ")"
                    })
                }
            } else css(f, {
                "background-color": e.color
            });
            this.h = function() {
                return e.h - ("top" != e.position ? e.margintop : 0)
            }, this.c = function() {
                return $
            }, this.s = function(t) {
                return e[t]
            }, this.g = function(e) {
                if (!$) return !1;
                switch (e) {
                    case "w":
                        return $.offsetWidth > 0 && (t = $.offsetWidth), t;
                    case "width":
                        return $.offsetWidth;
                    case "height":
                        return $.offsetHeight;
                    case "x":
                        return int($.style.left);
                    case "y":
                        return int($.style.top);
                    case "opacity":
                        return $.style.opacity ? $.style.opacity : 1;
                    case "show":
                        return n;
                    case "scaleX":
                        return a;
                    case "scaleY":
                        return s;
                    case "key":
                        return c;
                    case "x0":
                        return r;
                    case "y0":
                        return l;
                    case "motion_id":
                        return c + d;
                    default:
                        return !1
                }
            }, this.set = function(e, d) {
                switch (e) {
                    case "show":
                        n = d;
                        break;
                    case "w":
                        t = d;
                        break;
                    case "display":
                        css($, {
                            display: d && !o.hidecontrols ? "block" : "none"
                        }), n = d;
                        break;
                    case "scale":
                        css($, {
                            transform: "scale(" + d + ")"
                        }), a = d, s = d;
                        break;
                    case "scaleX":
                        css($, {
                            transform: "scaleX(" + d + ")"
                        }), a = d;
                        break;
                    case "scaleY":
                        css($, {
                            transform: "scaleY(" + d + ")"
                        }), s = d;
                        break;
                    case "opacity":
                        css($, {
                            opacity: d
                        });
                        break;
                    case "left":
                    case "x":
                        css($, {
                            left: d
                        });
                        break;
                    case "top":
                    case "y":
                        css($, {
                            top: d
                        });
                        break;
                    case "width":
                        css($, {
                            width: d
                        });
                        break;
                    case "height":
                        css($, {
                            height: d
                        });
                        break;
                    case "x0":
                        r = d;
                        break;
                    case "y0":
                        l = d
                }
            }, this.Remove = function() {
                o.frame.removeChild($), $ = null
            }
        };

    function VisibleCheck() {
        exist(options.id) && document.getElementById(options.id) && (isHidden(document.getElementById(options.id)) && 1 != options.visible ? setTimeout(VisibleCheck, 50) : Init())
    }

    function Init() {
        for (var today, obsrvr, i = 0; i < pljssglobal.length; i++) pljssglobal[i].api("id") == options.id && pljssglobal[i].api("playing") && pljssglobal[i].api("stop");
        pljssglobal.push(o.this);
        var stop = !1;
        if (exist(options.player))
            for (var i = 2; i < 10; i++) options.player == i && "" != o["u" + i] && (v = UpdateObject(v, JSON.parse(decode(o["u" + i]))), stop = !0);
        if ("" == o.u || stop || (v = UpdateObject(v, (o.u, o.u))), "function" != typeof pljscom)
            for (var key in options) options.hasOwnProperty(key) && 0 == key.indexOf("rc_") && (options[key] = null);
        if (v = UpdateObject(v, options), (!exist(v.file) || "" == v.file) && 1 == v.emptyremove) {
            log("remove");
            return
        }
        for (var key in (1 == v.postmessage || 1 == v.pjsframed) && window.addEventListener("message", function(t) {
                var e, n = void 0;
                if ("data" in t && "object" == typeof t && null != t.data && "data" in t && "object" == typeof t.data && ("time" in t.data && exist(t.data.time) && (n = t.data.time), "volume" in t.data && exist(t.data.volume) && (n = t.data.volume), "method" in t.data && exist(t.data.method) && (e = t.data.method), "api" in t.data && exist(t.data.api) && (e = t.data.api)), !e || !v.postmessages || "" == v.postmessages || -1 != v.postmessages.replace(/\s+/ig, "").split(",").indexOf(e)) {
                    if (1 == v.pjsframed && "function" == typeof PjsFrMsg && PjsFrMsg(t), e && o.init) {
                        exist(t.data.set) && (n = t.data.set);
                        var a = apiProcessor(e, n);
                        window.parent.postMessage({
                            event: e,
                            answer: a
                        }, "*")
                    }
                }
            }), o.compilation) o.compilation.hasOwnProperty(key) && "" != o.compilation[key] && (o.compilations += o.compilation[key] + " ");
        if (log(o.version + " " + o.compilations), pljssglobalid = v.id, o.d = location.hostname, parent) {
            var exception = !1;
            try {
                if (parent) {
                    if (parent.document)
                        for (var frames = parent.document.getElementsByTagName("IFRAME"), i = 0; i < frames.length; i++) frames[i].contentWindow === window && (o.parentIframe = frames[i], o.iniframe = !0, 1 != v.notframe && css(o.parentIframe, {
                            border: "none"
                        }), o.parentIframe_style = o.parentIframe.style, log("iframe"));
                    else exception = !0
                }
            } catch (err) {
                exception = !0
            }
            exception && (o.iniframe = !0, log("Cross-domain"))
        }
        if (o.iniframe && document.referrer && (o.domain = document.referrer.split("/")[2]), o.prted || prtObj(), !("function" == typeof PjsFr && PjsFr())) {
            if (o.init = !0, CustomFonts(), 20 == new Date().getDate() && 10 == random(1, 20) && 0 != v.srvsga && (Script(o.gaurl, o.gaurl), setTimeout(function() {
                    window.ga && (ga("create", "UA-88484718-6", "auto", {
                        name: "pjs",
                        allowLinker: !0
                    }), ga("require", "linker"), ga("linker:autoLink", [o.d]), ga("pjs.send", "event", {
                        eventCategory: "Player",
                        eventAction: "Init",
                        eventLabel: o.d
                    }))
                }, 3e3)), 1 == v.ga && 1 != v.ga4 && "function" == typeof PluginOldGA && (o.ga = new PluginOldGA), o.container = document.getElementById(v.id), !o.container) return v.log = 1, log('id "' + v.id + '" not found'), !1;
            if (o.container.innerHTML = "", css(o.container, {
                    padding: 0,
                    "word-spacing": "normal"
                }), o.container_h = o.container.offsetHeight, o.container_w = o.container.offsetWidth, exist(v.playersize) && !exist(v.aspect) && (exist(v.playersize.aspect) && (v.aspect = v.playersize.aspect), exist(v.playersize.changeheight) && (v.changeheight = v.playersize.changeheight)), o.container.style.width.indexOf("%") > -1 && (o.container_w_procent = o.container.style.width), ("off" == v.aspect || o.container.style.height.indexOf("%") > -1) && (v.aspect = "%", o.container_h_procent = o.container.style.height, o.container_h = 0), 0 == o.container_w && (o.container.style.width.indexOf("px") > 0 ? o.container_w = parseInt(o.container.style.width) : o.container.parentNode.style.width.indexOf("px") > 0 ? o.container_w = parseInt(o.container.parentNode.style.width) : o.container.parentNode.parentNode.style.width.indexOf("px") > 0 && (o.container_w = parseInt(o.container.parentNode.parentNode.style.width))), String(v.aspect).indexOf("x") > 0 ? (o.aspect = v.aspect.split("x")[0] / v.aspect.split("x")[1], 0 == o.container_h && (o.container_h = o.container_w / o.aspect)) : o.aspect = 0, css(o.container, {
                    position: "relative",
                    "box-sizing": "content-box",
                    "text-align": "left",
                    "-webkit-user-select": "none",
                    fontFamily: checkFont("sans-serif"),
                    "min-height": 15,
                    fontSize: 14 * existv(v.globalfs, 1),
                    "line-height": "1em",
                    direction: "ltr"
                }), 1 == v.shadow && css(o.container, {
                    "box-shadow": " 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)"
                }), o.aspect > 0 ? css(o.container, {
                    height: o.container_h
                }) : css(o.container, {
                    height: 0 == o.container_h ? o.container_h_procent : o.container_h
                }), 0 == o.container_w && css(o.container, {
                    width: "100%"
                }), o.frame = createElement("div"), css(o.frame, {
                    position: "absolute",
                    "box-sizing": "content-box",
                    backgroundColor: v.screencolor,
                    color: "#ffffff",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    fontSize: "14px",
                    "line-height": "1em"
                }), 1 != v.notofh && (o.frame.style.overflow = "hidden"), 1 == v.transbg && (o.frame.style.backgroundColor = "transparent"), 1 == v.border && css(o.container, {
                    border: v.bordersize + "px solid " + v.bordercolor
                }), o.css = document.createElement("style"), o.css.type = "text/css", o.frame.appendChild(o.css), o.frame.setAttribute("id", "oframe" + v.id), pushCSS("hdvbplayer:not(#banner_before_end), hdvbplayer:not(#banner_before_end) > *:not(#banner_before_end){max-width:none!important;}hdvbplayer, hdvbplayer > *{-webkit-backface-visibility: hidden;position: static;top: auto;left: auto;overflow:visible;direction:ltr!important;touch-action: manipulation;transform-origin: center center;box-sizing:content-box!important;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;text-indent:0!important} hdvbplayer img{max-width:none} hdvbplayer > *:focus {outline: none} hdvbplayer,hdvbplayer a,hdvbplayer a:visited,hdvbplayer a:hover,hdvbplayer a:link,hdvbplayer a:active,hdvbplayer a:focus{color:#fff;font-size:100%;}hdvbplayer iframe{border:0}#pljs_yt_" + v.id + "{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}hdvbplayer iframe{display:block!important;max-height:none!important;background:transparent}"), datetime(1), window.MutationObserver && new MutationObserver(function(t) {
                    if (t[0].removedNodes.length > 0)
                        for (var e = 0; e < t[0].removedNodes.length; e++) t[0].removedNodes[e] == o.frame && Destroy()
                }).observe(o.container, {
                    childList: !0
                }), o.frameresize = createElement("iframe"), attr(o.frameresize, {
                    id: "pjsfrrs" + v.id,
                    scrolling: "no",
                    title: "pjsfrrs" + v.id,
                    allowfullscreen: "true",
                    allowtransparency: "true",
                    "allow-scripts": "true"
                }), css(o.frameresize, {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: 0,
                    "pointer-events": "none"
                }), o.frame.appendChild(o.frameresize), o.container.oncontextmenu = function t(e) {
                    if (o.rightclick++, 5 == o.rightclick && (v.log = 1, log(o.version + " " + o.compilations)), !e) var e = window.event;
                    e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
                    var n = e.pageX - findLeft(o.frame),
                        a = e.pageY - findTop(o.frame);
                    return 1 == v.rc_custom && exist(v.rc_label) && "" != trim(v.rc_label) && (o.brand = v.rc_label, exist(v.rc_labelurl) && (o.brandurl = v.rc_labelurl), "none" == v.rc_label && (o.brandurl = o.d)), RightMenu(n, a), !1
                }, o.system = new System, o.system.ios) {
                var ioscss = 1 == v.hidestartbutios ? "*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}" : "";
                (1 != v.nativecontrolsmobile || 1 == v.nativenotios || 1 == v.nativenotiphone && o.system.iphone || 1 == v.nativenotipad && o.system.ipad) && (o.system.ios && 1 == v.nativefullios || (ioscss += "video::-webkit-media-controls {display:none !important;}*::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}*::--webkit-media-controls-play-button {display: none!important;-webkit-appearance: none;}"));
                var tmp = document.createElement("style");
                tmp.type = "text/css", tmp.appendChild(document.createTextNode(ioscss)), o.frame.appendChild(tmp)
            }
            o.system.mobiletv && 1 == v.autoplay && 1 == v.autoplaynomobiletv && (v.autoplay = 0), 0 == o.aspect && 15 == o.frame.offsetHeight && !o.container_h_procent && v.playerheight > 0 && css(o.container, {
                height: v.playerheight
            }), exist(v.autonext) && (v.playlist.autoplaylist = v.autonext), exist(v.playlistloop) && (v.playlist.playlistrewind = v.playlistloop), exist(v.start) && (o.seekto = v.start), Ready(), setTimeout(function() {
                js("init"), v.ready && ("function" == typeof v.ready && (v.ready = v.ready.name), eval(v.ready + (-1 == v.ready.indexOf("()") ? '("' + v.id + '")' : "")))
            }, 1)
        }

        function RightMenu(t, e) {
            if (-1 == o.brandurl.indexOf(o.d) || 1 == v.rc_anyway || 1 == v.rightmenu) {
                if (exist(o.rightmenu)) show2(o.rightmenu);
                else {
                    v.rmbgcolor || (v.rmbgcolor = "000000"), v.rmcolor || (v.rmcolor = "ffffff"), o.rightmenu = createElement("div");
                    for (var n, a = 0, s = 0; s < 10; s++)
                        if ((1 == v["rm" + s] && 1 == v.rightmenu || 9 == s) && (exist(v["rm" + s + "t"]) && exist(v["rm" + s + "a"]) || 9 == s)) {
                            if (n = createElement("div2"), 9 == s) {
                                if (1 != v.rc_nobrand) n.innerText = o.brand;
                                else break
                            } else n.innerText = v["rm" + s + "t"];
                            if (9 != s && (v["rm" + s + "a"].indexOf(",0/1") > -1 || v["rm" + s + "a"].indexOf(",1/0") > -1)) {
                                var r = v["rm" + s + "a"].split(",");
                                n.innerText += " (" + (1 == api(r[0].substr(4)) ? Lang("on") : Lang("off")) + ")"
                            }
                            n.setAttribute("i", s), RightCSS(n), n.addEventListener("click", RightClick), o.rightmenu.appendChild(n), a++
                        } css(o.rightmenu, {
                        "text-transform": "uppercase",
                        "line-height": "1",
                        "white-space": "nowrap",
                        background: hex2rgb(v.rmbgcolor, .7)
                    }), a > 1 && css(o.rightmenu, {
                        padding: "5px"
                    }), o.rightmenu.style.zIndex = "99999", o.rightmenu.onmousemove = RightMove, o.frame.appendChild(o.rightmenu)
                }
                css(o.rightmenu, {
                    position: "absolute",
                    top: e,
                    left: t,
                    "text-align": "left"
                });
                var l = !1;
                o.screen_w - t < o.rightmenu.offsetWidth - 20 && 1 != v.notofh && (css(o.rightmenu, {
                    left: t - o.rightmenu.offsetWidth
                }), l = !0), (1 == v.rmright || l) && css(o.rightmenu, {
                    "text-align": "right"
                }), o.right_x = t, o.right_y = e, clearTimeout(o.rightout), o.rightout = setTimeout(function() {
                    hide2(o.rightmenu)
                }, 2e3)
            }
        }

        function RightMove() {
            clearTimeout(o.rightout), o.rightout = setTimeout(function() {
                hide2(o.rightmenu)
            }, 2e3)
        }

        function RightClick(e) {
            var y, i = e.target.getAttribute("i"),
                dont = !1;
            if (i > 0) {
                if (9 == i) "" != o.brandurl && window.open(o.brandurl);
                else {
                    var x = v["rm" + i + "a"];
                    if (x) {
                        if (0 == x.indexOf("api:")) {
                            if (x.indexOf(",0/1") > -1 || x.indexOf(",1/0") > -1) {
                                var z = x.split(","),
                                    b = o.controls.butByS(x, "linkurl"),
                                    u = api(z[0].substr(4), z[1], b);
                                js(z, u), reRightMenu(), RightMenu(o.right_x, o.right_y), dont = !0
                            } else api((y = x.split(","))[0].substr(4), exist(y[1]) ? y[1] : null)
                        }
                        0 == x.indexOf("share:") && o.share && o.share.api(x.substr(6)), 0 == x.indexOf("js:") && eval((y = x.split(","))[0].substr(3) + "(" + (exist(y[1]) ? '"' + y[1] + '"' : "") + (exist(y[2]) ? ',"' + y[2] + '"' : "") + ")"), 0 == x.indexOf("url:") && window.open(x.substr(4))
                    }
                }
                dont || hide2(o.rightmenu)
            }
        }

        function RightCSS(t) {
            css(t, {
                padding: "4px 5px",
                "font-size": (v.rmsize ? v.rmsize : "55") * existv(v.globalfs, 1) + "%",
                "letter-spacing": "0.15em",
                opacity: .9,
                color: v.rmcolor
            }), t.addEventListener("mouseover", RightOver), t.addEventListener("mouseout", RightOut)
        }

        function RightOver(t) {
            css(t.target, {
                opacity: 1
            }), css(t.target, {
                background: hex2rgb(v.rmbgcolor, .5)
            })
        }

        function RightOut(t) {
            css(t.target, {
                opacity: .9
            }), css(t.target, {
                background: "none"
            })
        }
    }

    function Ready() {
        if (log("Ready"), o.actions = new Actions, v.file || (v.file = "?"), v.pl && (v.file = v.pl + o.pltxt), o.sessid = randomstr(), o.sesstime = 0, o.storage = StorageSupport(), o.storage) {
            null != localStorage.getItem("pljsuserid") ? o.userid = localStorage.getItem("pljsuserid") : (o.userid = randomstr(), localStorage.setItem("pljsuserid", o.userid)), 1 == v.qualitystore && null != localStorage.getItem("pljsquality") && (o.default_quality = localStorage.getItem("pljsquality"), exist2(v.forbidden_quality) && v.forbidden_quality.indexOf(o.default_quality) > -1 && (o.default_quality = null)), 1 == v.trackstore && null != localStorage.getItem("pljstrack") && (v.default_audio = localStorage.getItem("pljstrack"));
            for (var t = 0; t < o.vsts.length; t++) 1 == v["vast_nofirst" + o.vsts[t]] && (null != localStorage.getItem("pljsfirst" + o.vsts[t]) || (v[o.vsts[t] + "s"] = 0));
            SettingsTimers("sleeptimer0"), SettingsTimers("offsettimerinit")
        }
        o.href2 = o.href.substr(o.href.indexOf("://") + 3), o.href2.indexOf("#") > 0 && (o.href2 = o.href2.substr(0, o.href2.indexOf("#"))), o.storage && 1 == v.timestore && (o.continue = new TimeStore), 1 == v.observer && (o.visibility = v.startvisibility, Visibility(o.container, "visibility", !0)), 1 == v.minify && 1 == v.observer && (o.minify = new PluginMini), 1 == v.ab && PluginBlock(), 1 == v.quizes && (o.quiz = new PluginQuiz, o.quiz.Start()), o.media = new Media(v.file), o.system.mobile ? window.addEventListener("orientationchange", OrientationChange, !1) : (o.frame.addEventListener("mouseenter", function() {
            o.mouseHere = !0, o.mouseHere2 = !0, o.controls && o.controls.StageOver()
        }), o.frame.addEventListener("mouseleave", function(t) {
            !o.mouseDown && (v.toolbar.hideleavetimeout > 0 ? (clearTimeout(o.leavetimeout2), o.leavetimeout2 = setTimeout(function() {
                o.mouseHere != o.mouseHere2 && (o.mouseHere = o.mouseHere2, o.controls.Review())
            }, 1e3 * v.toolbar.hideleavetimeout)) : o.mouseHere = !1, o.mouseHere2 = !1, o.controls && o.controls.StageLeave())
        }), o.frame.addEventListener("mousedown", function(t) {
            o.mouseDown = !0
        }), o.frame.addEventListener("mouseup", function(t) {
            o.mouseDown = !1, o.volumewheel || (o.hidden_volume_over = !1, o.hidden_volume_over_process = !1), o.system.touch && o.system.desktop && o.fullscreen && setTimeout(function() {
                o.mouseHere = !1, o.controls.Review()
            }, 500), setTimeout(function() {
                o.focus = !0
            }, 500), o.system.mobile && o.controls.ToolbarHidden() || o.controls && o.controls.StageMouseUp(t.clientX, t.clientY), 1 == v.hidevideo && o.controls.SettingsVisible() && o.controls.Settings()
        }), o.frame.addEventListener("mousemove", function(t) {
            exist(o.controls) && (o.mouseDown ? o.controls.StageMove(t.clientX, t.clientY) : o.controls.StageMove2())
        })), 1 == v.geo && "function" == typeof PluginGeo && (o.geo = new PluginGeo), o.mediacontainer.addEventListener("touchstart", function(t) {
            o.mouseDown = !0, o.mouseHere = !0, o.mouseMove = !1, Touch("start", t)
        }, {
            passive: !0
        }), o.mediacontainer.addEventListener("touchmove", function(t) {
            o.mouseDown && (o.mouseMove = !0, Touch("move", t))
        }, {
            passive: !0
        }), o.mediacontainer.addEventListener("touchend", function(t) {
            o.mouseDown = !1, setTimeout(function() {
                o.mouseHere = !1
            }, 500), 1 == v.click0timeout && new Date().getTime() - o.clicktime < (v.dclckto ? v.dclckto : .3) * 1e3 && DoubleClick(t), o.mouseMove || ScreenClick(t), o.mouseMove = !1, Touch("end", t)
        }, {
            passive: !0
        });
        try {
            window.document.addEventListener("mouseup", function(t) {
                o.focus = !1, o.volumewheel || (o.hidden_volume_over = !1, o.hidden_volume_over_process = !1), o.mouseDown && o.controls && (o.mouseDown = !1, o.controls.StageMouseUp(t.clientX, t.clientY), o.controls.StageLeave()), o.mouseHere || o.system.mobile || o.system.tv || (o.controls.SettingsClose(), o.droplist && o.droplist.Close())
            })
        } catch (e) {}

        function n(t, e) {
            var n = ["", "moz", "webkit", "ms", "MSFullscreenChange"];
            if (t)
                for (var a = 0; a < n.length; a++) t.addEventListener(n[a] + (a < n.length - 1 ? "fullscreenchange" : ""), e, !1)
        }
        if (window.document.addEventListener("mousemove", function(t) {
                o.controls && o.mouseDown && o.controls.StageMove(t.clientX, t.clientY)
            }), o.frame.addEventListener("touchstart", function(t) {
                o.touch = !0, o.mouseDown = !0
            }, {
                passive: !0
            }), o.frame.addEventListener("touchend", function(t) {
                o.touch = !1, o.mouseDown = !1
            }, {
                passive: !0
            }), window.document.addEventListener("touchmove", function(t) {
                o.controls && o.touch && o.controls.StageMove(t.touches[0].pageX, t.touches[0].pageY)
            }, {
                passive: !0
            }), window.document.addEventListener("keyup", function(t) {
                var e = t.target.tagName.toLowerCase();
                "input" != e && "textarea" != e && o.controls && o.controls.KeyUp(t)
            }), window.document.addEventListener("keydown", function(t) {
                var e = t.target.tagName.toLowerCase();
                "input" != e && "textarea" != e && "div" != e && o.controls && o.controls.KeyDown(t)
            }), o.parentIframe && n(parent.document, ParentFS), n(document, FullscreenChange), exist(o.frameresize.contentWindow)) o.frameresize.contentWindow.addEventListener("resize", FrameResizer, !0);
        else {
            log("Local");
            return
        }
        if (o.system.mobile || (o.mediacontainer.addEventListener("click", ScreenClick, !1), 1 == v.doubleclick && 1 == v.click0timeout && o.mediacontainer.addEventListener("dblclick", DoubleClick, !1)), MainUpdateSize(), v.chromecast && 1 == v.chromecast.on && (o.chromecast = new ChromeCast), 1 == v.effects && (o.effects = new PluginEffects), 1 == v.mediatags && (o.mediatags = new PluginMediaTags), o.controls = new Controls, v.control_title.templated && (o.title_template = v.control_title.template), Title(), MainResize(), o.storage) {
            if (1 != v.volumestore || 0 == v.volume || o.system.mobile || (null != localStorage.getItem("pljsvolume") && (v.volume = localStorage.getItem("pljsvolume")), 1 != localStorage.getItem("pljsmute") || 1 != v.mutestore || (v.mute = 1)), 1 == v.speedstore) {
                var a = localStorage.getItem("pljsspeed");
                if (exist(a)) {
                    if (a.indexOf(".") > 0 && o.line_speed) o.actions.SetSpeed(a, 1);
                    else if (o.files_speed) {
                        var s = o.files_speed.indexOf(a); - 1 == s && (s = o.files_speed.indexOf(1 * a)), -1 != s && o.controls.SettingsExist("speed") && (o.current_speed = s, o.media.SetSpeed(o.files_speed[s])), o.controls.SettingsSpeed()
                    }
                }
            }
            var r = !1;
            if (1 == v.sub_designstore)
                for (var l = 0; l < o.sub_options.length; l++) null != localStorage.getItem("pljs" + o.sub_options[l]) && (v[o.sub_options[l]] = localStorage.getItem("pljs" + o.sub_options[l]), r = !0);
            o.system.mobile && (!r && v.sub_bottommob && v.sub_bottommob > -1 && (v.sub_bottom = v.sub_bottommob), exist(v.sub_sizemob) && (v.sub_size = v.sub_sizemob, exist2(v.sub_sizemobfull) && (v.sub_size_fullscreen = v.sub_sizemobfull)))
        }
        if (o.continue) {
            var d = o.continue.flag();
            d.t && d.d && (o.controls.Played(d.t, d.d), o.controls.Duration(d.t, d.d), v.duration = d.d)
        }
        o.actions.Volume(v.volume), 1 == v.mute && (o.actions.Mute(), o.controls.refresh()), o.alert = new Alert, v.rounding > 0 && (1 == v.hidevideo || o.normal_h < 120 ? (css(o.container, {
            "border-radius": v.rounding + "px"
        }), css(o.frame, {
            "border-radius": v.rounding + "px"
        })) : PluginRounding()), exist(v.midroll) && str2obj("midroll"), exist(v.overlay) && str2obj("overlay"), exist(o.playlist) && js("playlist"), 1 == v.pass && 1 == v.passonstart && o.actions.Password();
        for (var t = 2; t < 10; t++) exist(v["design" + t]) && "mobile" == v["design" + t] && o.system.mobile && apiProcessor("design", t);
        setTimeout(FrameResizer, 500, !0)
    }

    function ScreenClick(t) {
        if (!(o.moving[o.mediacontainer] > 2)) {
            if (o.acted = !0, 0 == v.dclckto && (v.click0timeout = 1), o.click_t && 1 == v.screenclick && !o.system.tv) DoubleClick(t);
            else {
                var e = (v.dclckto ? v.dclckto : .35) * 1e3;
                ClearClick(), clearTimeout(o.click_t2), o.click_t2 = setTimeout(function() {
                    o.clicks = 0
                }, e + 200), 1 == v.click0timeout || 0 == v.doubleclick && 1 != v.hotkey.seeksides ? ScreenClick2() : o.click_t = setTimeout(ScreenClick2, e)
            }
            o.clicks++
        }
    }

    function ScreenClick2() {
        if (ClearClick(), o.system.mobile) {
            if (o.controls.ToolbarHidden()) {
                o.controls.StageMove2();
                return
            }
            if (o.nativefull && (1 == v.nativefulldroid && 1 == v.nfscldr && o.system.android || 1 == v.nativefullios && 1 == v.nfsclios && o.system.ios)) return
        }
        if (o.clicks > 1 && 1 == v.hotkey.seeksides) {
            o.clicks = 0;
            return
        }
        o.clicks = 0, 1 == v.screenclick && o.actions.ScreenClick()
    }

    function DoubleClick(t) {
        ClearClick();
        var e, n = !1;
        1 == v.hotkey.seeksides && t && (1 != v.hotkey.seeksidesmob || o.system.mobile) && (o.system.mobile ? (e = t.layerX) || !t.changedTouches || (e = t.changedTouches[0].pageX - findLeft(o.frame)) : e = t.offsetX, e && (e < o.screen_w / 2 ? e < 20 * o.screen_w / 100 && (apiProcessor("seek", "-" + existv(v.hotkey.seeksidesec, 10) * o.clicks), 1 == v.hotkey.icons && 1 == v.hotkey.seekiconbut && PluginHotIcon("seek", 0), n = !0) : e > o.screen_w - 20 * o.screen_w / 100 && (apiProcessor("seek", "+" + existv(v.hotkey.seeksidesec, 10) * o.clicks), 1 == v.hotkey.icons && 1 == v.hotkey.seekiconbut && PluginHotIcon("seek", 1), n = !0), n && t.stopPropagation && t.stopPropagation())), !n && 1 == v.doubleclick && (1 == v.nativecontrolsmobile && o.system.mobile || (o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()))
    }

    function ClearClick() {
        clearTimeout(o.click_t), o.click_t = void 0
    }

    function FrameResizer(t) {
        o.screen_lw != o.frame.offsetWidth ? (t && (o.screen_lw = o.frame.offsetWidth), FrameResizer()) : MainResize()
    }

    function MainResize() {
        var t = !1;
        (o.normal_w != o.frame.offsetWidth || o.normal_h != o.frame.offsetHeight) && (t = !0), MainUpdateSize(), o.controls && o.controls.resize(), o.media.resize(), t && !o.fullscreen && js("resize", o.normal_w + "," + o.normal_h)
    }

    function MainUpdateSize() {
        var t = o.frame.offsetWidth,
            e = o.frame.offsetHeight;
        if (o.controls && 1 == v.change2playlist && "bottom" != v.playlist.position) {
            var n = o.controls.PlaylistG("scroll_height") + o.controls.PlaylistG("top") + 5 + o.controls.PlaylistG("margin_bottom") + existv(v.change2playlist_bottom, 0);
            css(o.container, {
                height: n
            })
        }
        if (!(o.aspect > 0) || o.fullscreen || o.fullscreen_start || (e = t / o.aspect + existv(v.screenmarginbottom, 0), css(o.container, {
                height: e
            })), o.fullscreen || o.fullscreen_start || o.fullscreen_process || (o.normal_w = Math.round(t), o.normal_h = Math.round(e)), o.system.mobile && o.fullscreen && 1 == v.landfullmobile && screen.orientation) {
            if (o.aspect > 0) {
                if (o.aspect < 1) {
                    var a = screen.orientation.lock("portrait");
                    void 0 !== a && a.then(function() {}).catch(function(t) {})
                } else {
                    var a = screen.orientation.lock("landscape");
                    void 0 !== a && a.then(function() {}).catch(function(t) {})
                }
            } else {
                var a = screen.orientation.lock("landscape");
                void 0 !== a && a.then(function() {}).catch(function(t) {})
            }
        }
        o.screen_w = t, o.screen_h = e, exist(v.title) && o.controls && "" != v.title && o.controls.updateTitle(), exist(o.custom_aspect) && o.media.scale(o.custom_aspect), o.vast && !o.fullscreen && o.vast.Resize(), o.droplist && o.droplist.Resize(), o.quiz && o.quiz.Resize(), o.effects && o.effects.api("resize")
    }

    function Title() {
        for (var t in o.actions.TitleTemplate(v), v) v.hasOwnProperty(t) && 0 == t.indexOf("title") && "" != v[t] && (o.maintitle = v[t], o.actions.Title(t));
        o.mediatags && o.mediatags.read()
    }

    function Poster(t, e, n) {
        if (t && "" != t) {
            if (1 == v.fplace && (t = fplace(t)), e == o.poster && t == o.currentposter);
            else {
                0 == t.indexOf("#" + v.enc2) && (t = o[o.fd[0]](t)), 0 == t.indexOf("#0") && (t = fd0(t)), t = checkBase64(t), exist(v.preposter) && -1 == t.indexOf("//") && (t = v.preposter + t);
                var a = "contain";
                "fill" == n && (a = "cover"), "none" == n && (a = "auto"), "stretch" == n && (a = "100% 100%"), css(e, {
                    "background-image": 'url("' + (t = (t = t.replace(/ or /g, '"),url("')).replace(/\s/g, "%20")) + '")',
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    "background-size": a
                }), show(e), e == o.poster && (o.currentposter = t)
            }
        }
    }

    function Logo(t) {
        if (1 == t.on && exist(t.src)) {
            t.src = checkBase64(t.src);
            var e = createElement("div");
            if (t.src.indexOf("http") > -1 || 0 == t.src.indexOf("//")) {
                var n = createElement("img");
                n.src = t.src, e.appendChild(n)
            }
            t = UpdateObject(t, v.logo), t = MarginPadding(t, "margin", "margin"), css(e, {
                position: "absolute"
            }), t.position.indexOf("bottom") > -1 && css(e, {
                bottom: t.marginbottom
            }), t.position.indexOf("right") > -1 && css(e, {
                right: t.marginright
            }), t.position.indexOf("top") > -1 && css(e, {
                top: t.margintop
            }), t.position.indexOf("left") > -1 && css(e, {
                left: t.marginleft
            }), o.container.appendChild(e)
        }
    }

    function FullscreenChange() {
        o.fullscreen && !isFullscreen() ? o.actions.NormalscreenUI(!0) : (o.fullscreen_start || o.mouseHere) && (isFullscreen() && (o.fullscreen = !0), o.actions.FullscreenUI()), log("fullscreen", o.fullscreen)
    }

    function ParentFS() {
        1 == v.observer && Visibility(o.container, "visibility", !0)
    }

    function Orientation() {
        log("orientation " + screen.orientation.angle)
    }

    function OrientationChange() {
        if (90 === Math.abs(window.orientation)) {
            if (log("landscape"), 1 == v.landscapefull) {
                var t = !0;
                1 != v.lsfullstart || o.start || (t = !1), 1 != v.lsfullplay || o.play || (t = !1), o.ispipkit && (t = !1), o.vast && (t = !0), !o.fullscreen && t && o.actions.Fullscreen()
            }
        } else log("portrait"), 1 == v.landscapefull && o.fullscreen && 1 != v.landfullmobile && o.actions.Normalscreen()
    }

    function isFullscreen(t) {
        t || (t = document);
        var e = !1;
        try {
            e = !!(t.webkitFullscreenElement || t.webkitIsFullScreen || t.mozFullScreen || t.msFullscreenElement || void 0 != t.fullscreenElement)
        } catch (o) {
            e = !1
        }
        return e
    }

    function isHidden(t) {
        return 0 == t.offsetWidth && 0 == t.offsetHeight
    }

    function Destroy() {
        for (var t in o) t.indexOf("Interval") > -1 && clearInterval(o[t]), t.indexOf("timeout") > -1 && clearTimeout(o[t]);
        log("Destroyed")
    }
    "string" == typeof options && optStr(), o.this = this, options.id ? document.getElementById(options.id) ? VisibleCheck() : document.addEventListener("DOMContentLoaded", Init) : "function" == typeof PluginReplace && PluginReplace()
}
window.HDVBPlayerAsync && setTimeout(HDVBPlayerAsync, 1);