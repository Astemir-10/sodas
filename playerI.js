$(document).ready(function() {

    if (user_data.is_user_pro || user_data.is_user_pro_plus) {
        vast_url = '';
    }

    initDescription();

    if ($('.topmenu').find('.open').attr('data-id') === 'trailers') {
        var trailerId = $('.trailers-list').attr('data-post-id');
        getDataPlayer(trailerId, 'trailer');
    }

    $('#dle-content').on('click', '.translations li:not(.active)', changeTranslations);
    $('#dle-content').on('click', '.trailer-wrap .trailer-img', trailerVideo);
    $('body').on('click', '.closeAboutComment', closeAboutComment);
    $('body').on('click', '.play .comment, .leaveComment', leaveComment);
    $('body').on('click', '.admin-save-time', saveAdminTime);
    $('body').on('click', '.save-time', saveUserTime);
    $('body').on('click', '.ico-remove', deleteSaveTime);
    $('body').on('click', '.player-pro-close', hidePlayerProInfo);
    $('body').on('click', '.hidden-block .continue.active', startContinueTime);
    $('body').on('click', '.players .closeAdBlockAppeal', closeAdBlockAppeal);
    $('body').on('click', '.download-direct .quality', showOrHideQuality);
    $('body').on('click', '.download-direct .list-quality .item', selectQuality);
    $('body').on('click', '.off-light', setOffLight);
    $('body').on('click', '.block-off-light', setOnLight);
    $('#dle-content').on("new", '#player', subscribeOnInitPlaylist);
    $('#dle-content').on("quality", '#player', checkQuality);
});

/* PLAYER */
function getDataPlayer(postId, type) {
    $.post('/api/movies/player-data?t=' + new Date().getTime(), {
        post_id: postId,
        showfull: true
    }, function(data) {
        if (data.type === 'success') {
            window.playerHref = window.location.href.split('//')[1];
            window.savedMovies = LocalStorage.getItem('pljsplayfrom_player' + playerHref);
            window.playerTranslations = data.message.translations;
            window.videoLinks = data.message.translations.video;
            window.timeShift = data.message.timeShift;
            window.timeSaved = data.message.savedMovies;
            window.trailers = data.message.translations.trailers;
            window.downloadLink = data.message.links;

            if (type === 'trailer' && data.message.translations.trailers) {
                initTrailersList();
            } else {
                if (playerTranslations.lv) {
                    $('.players').append('<div class="noplayer owner-block"><div>Видео заблокировано<br>по просьбе правообладателя</div></div>');
                    $('.player, .translations, .hidden-block, .reports-subscribe').hide();
                } else if (isEmpty(videoLinks)) {
                    $('.players').append('<div class="noplayer owner-block"><div>Нет видео файла</div></div>');
                } else {
                    drawTranslation(postId, playerTranslations);
                }
                if (dle_group != 5) {
                    if (timeSaved) {
                        checkSaved(timeSaved);
                    }
                }
                if ($('#main.showfull').length) {
                    showDownloadLink(downloadLink);
                }
            }
        }
    }, 'json');
}

function subscribeOnInitPlaylist(e) {
    continueSavedAdmin();
    if (dle_group != 5) {
        setLastSeenHistory();
    }
}

function continueSavedAdmin() {
    var videoName = LocalStorage.getItem('s_' + postId + '_translations_name');
    var result = checkShift(timeShift, videoName, playerTranslations.pl);
    continueCurrentTime(player, result);
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

function initPlayer(playerId, videoLink, type, autoplay) {
    var options = {
        id: playerId,
        file: videoLink,
    };
    if (autoplay) {
        Object.assign(options, { "autoplay": 1 });
    }
    var defaultQuality = LocalStorage.getItem('pljsquality') || '480p';

    if (defaultQuality) {
        options.default_quality = defaultQuality;
    }
    if (type === 'title') {
        var title = getTitle(defaultQuality);
        options.title = title;
    }
    // options.preroll = vast_url.replace(/&amp;/g, "&");
    options.midroll = [{ time: "1000", vast: "https://franecki.net/assets/vendor/9ed546cbc4abb5d6453da1a5e908b6a0.xml?v=3.0" }];
    window.player = new Playerjs(options);

    var aviableQualities = player.api('qualities');
    if (aviableQualities.indexOf(defaultQuality) == -1) {
        defaultQuality = '480';
        player.api("title", getTitle(defaultQuality));
    }
}

function getTitle(defaultQuality) {
    var name = $('h1.name').text() || $('.title-page a').text();
    var playerTranslationTitle = $('.translations li.active span').text();
    var title = name + '/' + defaultQuality + '/' + playerTranslationTitle;
    return title;
}

function drawTranslation(postId, player_translations) {
    var translations = $('.translations');
    var subscriptions = $('.subscribe-list-container');
    var nameTranslations = 's_' + postId + '_translations_name';
    var selectedTranslation = LocalStorage.getItem('s_' + postId + '_translations_name');
    $.each(player_translations.video, function(key, val) {
        translations.append('<li><span data-pl="' + player_translations.pl + '" data-trans-link="' + val + '" data-name="' + key + '">' + key + '</span></li>');
    });
    if (selectedTranslation && player_translations.video[selectedTranslation]) {
        translations.find('li span[data-name="' + selectedTranslation + '"]').closest('li').click();
    } else {
        translations.find('li:first-child').click();
    }
    $.each(player_translations.video, function(key, val) {
        if ($.inArray(key, player_translations.subscriptions) !== -1) {
            subscriptions.append('<li class="addSubs">' + key + '</li>');
        } else {
            subscriptions.append('<li>' + key + '</li>');
        }
    });
}

function changeTranslations() {
    var postId = $(this).closest('.player-item').find('.players').attr('data-player') || $('.players').attr('data-player');

    var translationsName = $(this).find('span').attr('data-name');
    var translationsPl = $(this).find('span').attr('data-pl');
    var videoLink = window.videoLinks[translationsName];
    LocalStorage.setItem('s_' + postId + '_translations_name', translationsName);
    $(this).addClass('active').siblings('.translations li').removeClass('active');
    initPlayer('player', videoLink, 'title');
}

function checkQuality(event) {
    var selectedQuality = event.originalEvent.info;

    if (!user_data.is_user_pro_plus && (selectedQuality && selectedQuality === '1080 HD' || selectedQuality === '2K' || selectedQuality === '4K UHD')) {
        setTimeout(function() {
            $('.players').append('<div class="pro-block"><div class="containerAntiAdBlock"><div class="appeal"><span class="title-strong">Требуется <span class="green-block">PRO+</span> аккаунт</span><span class="text">Качество <b>' + selectedQuality + '</b> доступно только зарегистрированным пользователям с аккаунтом <b>PRO+</b></span></div><div class="buttons how-to"><a href="' + site_root + 'pro.html#pro_plus" class="disable">Купить Аккаунт PRO+</a></div><div class="closeAdBlockAppeal icon-close"></div></div></div>');
        }, 4000);
    } else {
        $('.on-off-block').hide();
        $('.off-for-auth').hide();
        $('.pro-block').hide();
    }
    var defaultQuality = LocalStorage.getItem('pljsquality') || '480p';
    player.api("title", getTitle(defaultQuality));
}

function closeAdBlockAppeal() {
    $('.on-off-block').hide();
    $('.off-for-auth').hide();
    $('.pro-block').remove();
}

/* TRAILER */
function trailerVideo() {
    if (trailers && !isEmpty(trailers)) {
        var obj = trailers;
        var trailersLinks = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                trailersLinks.push({ name: prop, link: obj[prop] });
            }
        }

        var trailerVideoLink = trailersLinks[0].link;
        $('.trailer-video').attr('id', 'trailer-player');
        $.fancybox('#trailer-player', {
            padding: ['0', '0', '0', '0'],
            helpers: {
                overlay: {
                    locked: false
                }
            },
            beforeShow: function() {
                $('.fancybox-inner, .fancybox-outer').css({
                    'border-radius': '7px',
                    'overflow': 'hidden'
                });
            },
            afterClose: function() {
                player.api('stop');
            }
        });
        initPlayer('trailer-player', trailerVideoLink, null, true);
    }
}

/* COMMENT */
function leaveComment(e) {
    e.preventDefault();
    if ($(this).attr('data-type') == 'play') {
        LocalStorage.setItem('comment', true);
        window.open($('.other-item .comment').attr('href'), '_blank');
    } else {
        $('.add-comm').trigger('click');
        $('html, body').animate({
            scrollTop: $('.add-comm').offset().top
        }, 400);
    }
}

function closeAboutComment() {
    $('.aboutComment').hide('slow');
}

/* DOWNLOAD LINK */
function showDownloadLink(downloadLink) {
    var player_download = downloadLink,
        templ = $('#download-item-movie').html();

    if ($('.download-direct').attr('data-serial') === 'no') {
        $.each(player_download, function(index, val) {
            var download_item = fillMovieDownload(val.name, val.files, index + 1);
            $('.download-direct .list-files').append(tmpl(templ, download_item));
        });
    } else {
        $.each(player_download, function(index, val) {
            $('.download-direct .seasons-list').append('<div class="season-item"><div class="season-title">' + val.name + '</div></div><div class="translation-list" data-index="' + index + '"></div>');
            $.each(val.files, function(season, season_items) {
                $('.translation-list[data-index="' + index + '"]').append('<div class="translation-item icon-arowDown"><div class="translation-title">' + season + '</div></div><ul class="list-files" data-season="' + season + '"><li><span class="number"></span><span class="name-file"></span><span class="size-file"></span><span class="quality-file">Выбрать качество</span><span class="download-file">Скачать</span></li></ul>');
                $.each(season_items, function(serie, series_items) {
                    var download_item = fillMovieDownload(serie, series_items, '');
                    $('.download-direct .translation-list[data-index="' + index + '"] .list-files[data-season="' + season + '"]').append(tmpl(templ, download_item));
                });
            });
        });
    }
}

function fillMovieDownload(name, series, index) {
    var download_item = {
            name: name
        },
        quality_max = 0,
        quality_index = 0,
        qualities = [];
    $.each(series, function(number, value) {
        if (quality_max < parseInt(value.quality)) {
            quality_max = value.quality;
            quality_index = number;
        }
        qualities.push(value.quality);
    });
    download_item.number = index;
    download_item.quality = quality_max;
    download_item.qualities = qualities;
    download_item.url = series[quality_index].url;
    return download_item;
}

function showOrHideQuality() {
    if ($(this).find('.list-quality').is(':visible')) {
        $(this).find('.list-quality').hide();
    } else {
        $('body').find('.list-quality').hide();
        $(this).find('.list-quality').show();
    }
}

function selectQuality() {
    $(this).addClass('selected').siblings('.item').removeClass('selected');
    $(this).closest('.quality').find('.quality-text').text($(this).text());
    var quality_index = $(this).index();
    var player_data = downloadLink;

    var url = '';
    if ($('.download-direct').attr('data-serial') === 'yes') {
        var season_index = $(this).closest('.list-files').attr('data-season'),
            translations_index = $(this).closest('.translation-list').attr('data-index'),
            series_index = $(this).closest('li').find('.name-file').text();
        url = player_data[translations_index].files[season_index][series_index][quality_index].url;
    } else {
        var movie_index = $(this).closest('li').find('.number').text() - 1;
        url = player_data[movie_index].files[quality_index].url;
    }
    alert(url);
    $(this).closest('li').find('.download-file a').attr('href', url);
}

/* SAVE TIME ADMIN */
function saveAdminTime() {

    var id = $(this).attr('data-video-id'),
        translation = $(this).closest('.player-item').find('.translations .active span').attr('data-name') || $(this).closest('.play').find('.translations .active span').attr('data-name'),
        data = {
            post_id: id,
            translation: translation
        };

    if (player.api('playlist_title')) {
        data = Object.assign(data, getPlaylistData());
    }

    data.time = player.api("time");

    $.post('/api/timeshift/save', data, function(res) {
        if (res.type === 'error') {
            common.showInfo(res.message);
            return false;
        }
        common.showInfo(res.message.title);
    }, 'json');
}

function saveUserTime(e) {
    e.preventDefault();
    saveTime(true);
    $('.continue.m-button').addClass('active');
}

function saveTime(btn) {
    var time = player.api('time');
    var num = player.api('playlist_title');
    var translation = $('.translations li.active span').text();
    var substring = "Сезон";

    if (num) {
        episode = num.split(' ')[1];
        if (num.indexOf(substring) !== -1) {
            season = num.split(' ')[3].split(')')[0];
        }
    }
    if (typeof btn !== 'undefined') {
        if (playerTranslations.pl === 'no') {
            common.showInfo('<p>Сохранено на ' + get_time(time) + ' (' + translation + ')</p>');
            $('.continue').attr('title', 'Вы закончили просмотр на ' + get_time(time) + ' (' + translation + ')');
        } else {
            if (num.indexOf(substring) !== -1) {
                common.showInfo('<p>Сохранено на ' + season + ' сезоне ' + episode + ' серия ' + get_time(time) + ' (' + translation + ')</p>');
                $('.continue').attr('title', 'Сохранено на ' + season + ' сезоне ' + episode + ' серия ' + get_time(time) + ' (' + translation + ')');
            } else {
                common.showInfo('<p>Сохранено на ' + episode + ' серия ' + get_time(time) + ' (' + translation + ')</p>');
                $('.continue').attr('title', 'Сохранено на ' + episode + ' серия ' + get_time(time) + ' (' + translation + ')');
            }
        }
    }
    drawSaved();
}

function continueTitle(savedTime) {
    var translation = $('.translations li.active span').text();
    if (playerTranslations.pl === 'no') {
        $('.continue').attr('title', 'Вы закончили просмотр на ' + get_time(savedTime) + ' (' + translation + ')');
    } else {
        var season = timeSaved.season;
        var series = timeSaved.series;
        if (season === "0") {
            $('.continue').attr('title', 'Сохранено на ' + series + ' серия ' + get_time(savedTime) + ' (' + translation + ')');
        } else {
            $('.continue').attr('title', 'Сохранено на ' + season + ' сезоне ' + series + ' серия ' + get_time(savedTime) + ' (' + translation + ')');
        }
    }
    $('.continue').addClass('active');
    if (LocalStorage.getItem('autoPlay')) {
        var id = $('#player'),
            destination = $(id).offset().top;
        $('html, body').animate({ scrollTop: destination - 90 }, 1500);
        setTimeout(function() {
            $('body').find('.hidden-block .continue.active').trigger('click');
            LocalStorage.removeItem('autoPlay');
        }, 2000);
    }
}

function get_time(time) {
    if (!time) {
        time = 0;
    }
    time = Math.round(time);
    var minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (minutes > 60) {
        var hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        time = hours + ":" + minutes + ":" + seconds;
    } else {
        time = minutes + ":" + seconds;
    }
    return time;
}

function deleteSaveTime(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    $.post('/api/movies/rm_time', { movie_id: id }, function() {
        return true;
    });
    $('.continue').removeClass('active').attr('title', 'Вы не сохраняли время просмотра');
    common.showInfo('Сохраненное время просмотра удалено');
    LocalStorage.removeItem('pljsplayfrom_player' + playerHref);
    e.stopPropagation();
}

function showPlayerProInfo(event) {
    var selectedQuality = event.originalEvent.info;
    if ((!user_data.is_user_pro || !user_data.is_user_pro_plus) && (selectedQuality && selectedQuality === '1080 HD' || selectedQuality === '2K' || selectedQuality === '4K UHD')) {
        setTimeout(function() {
            $('.player-pro-info').show();
        }, 2000);
    }
}

function hidePlayerProInfo(e) {
    e.preventDefault();
    $('.player-pro-info').hide();
}

function startContinueTime(e) {
    e.preventDefault();
    if (playerTranslations.pl === 'yes') {
        var season = timeSaved.season;
        var series = timeSaved.series;
        LocalStorage.removeItem('pljsplayfrom_player' + playerHref);
        player.api('find', 's' + season + 'e' + series);
    }
    player.api('seek', timeSaved.time);
    player.api('play');
    e.stopPropagation();
}

function getPlaylistData() {
    var data = {};
    var num = player.api('playlist_title');
    var substring = "Сезон";

    if (num) {
        data.episode = num.split(' ')[1];
        if (num.indexOf(substring) !== -1) {
            data.season = num.split(' ')[3].split(')')[0];
        }
    }
    return data;
}

function checkShift(timeSeek, videoName, pl) {
    if (!pl) {
        pl = 'no';
    }
    if (pl === 'no') {
        var item;
        for (var index = 0; index < timeSeek.length; index++) {
            var element = timeSeek[index];
            if (element.translation === videoName) {
                item = element;
                break;
            }
        }
        return item;
    } else if (pl === 'yes') {
        var playlistData = getPlaylistData();
        var item1;
        for (var index1 = 0; index1 < timeSeek.length; index1++) {
            var element1 = timeSeek[index1];
            if (element1.translation === videoName && element1.season === playlistData.season && element1.episode === playlistData.episode) {
                item1 = element1;
                break;
            }
        }
        return item1;
    }
}

function checkSaved(timeSaved) {
    var savedTime = timeSaved.time;
    continueTitle(savedTime);
}

function continueCurrentTime(player, result) {
    var getTime = LocalStorage.getItem('pljsplayfrom_player' + playerHref);
    if (getTime) {
        if (playerTranslations.pl === 'yes') {
            getTime = getTime.split('-')[3].split('}')[1];
        } else {
            getTime = getTime.split('--')[0];
        }
        var currentTime = Math.round(getTime);
        if (result) {
            if (currentTime && currentTime > result.time) {
                player.api('seek', currentTime);
            } else {
                player.api('seek', result.time);
            }
        } else {
            player.api('seek', currentTime);
        }
    }
}

function setLastSeenHistory() {
    var videoName = LocalStorage.getItem('s_' + postId + '_translations_name');

    var data = {
        id: postId,
        translation: videoName
    };

    if (player.api('playlist_title')) {
        data = Object.assign(data, getPlaylistData());
    }

    $.post('/api/movies/add_watched', data, null, 'json');
}

function drawSaved() {
    if (player) {
        var data = {
            add_item: postId
        };
        if (player.api('playlist_title')) {
            data = Object.assign(data, getPlaylistData());
        }
        data.time = player.api('time');
        $.post('/api/v2/movie/view_time', data, function() {
            return true;
        });
    }
}

function initTrailersList() {
    var obj = trailers;
    var trailersLinks = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            trailersLinks.push({ name: prop, link: obj[prop] });
        }
    }
    if ($('.topmenu').find('.open').attr('data-id') === 'trailers') {
        $.each(trailersLinks, function(index, item) {
            initPlayer('player_' + index, item.link);
        });
    }
}

function initDescription() {
    var mID = $('#dle-content').find('.players').attr('data-player');
    var fID = $('#dle-content').find('.fullstory').attr('data-id');
    if (mID) {
        window.postId = mID;
    } else if (fID) {
        window.postId = fID;
    } else {
        window.postId = location.href.split('/')[location.href.split('/').length-1].split('-')[0];
    }
    getDataPlayer(window.postId);
}

function setOffLight() {
    $('.block-off-light').show();
    setTimeout(function() {
        $('#main').css('position', 'initial');
        $('.block-off-light').addClass('on');
    }, 200);
}

function setOnLight() {
    $('.block-off-light').removeClass('on');
    $('#main').css('position', 'relative');
    setTimeout(function() {
        $('.block-off-light').hide();
    }, 600);
}

function closeTrailer() {
    player.api('stop');
}

function PlayerjsEvents(event,id,info){
    if(event === "play" && id === 'player'){
        var selectedQuality = LocalStorage.getItem('pljsquality')
        if ((!user_data.is_user_pro || !user_data.is_user_pro_plus) && (selectedQuality && selectedQuality === '1080p' || selectedQuality === '1080p Ultra+' || selectedQuality === '4K UHD')) {
            setTimeout(function() {
                $('.player-pro-info').show();
            }, 2000);
        }
     }
    // if (event === 'vast_init' || event === 'vast_load' || event === 'vast_error' || event === 'vast_finish') {
    //     $.post('/modules/player/vast.php', {'event': event, 'type': info}, function(data){
    //         console.log(data);
    //     }).fail(function (err){
    //         console.log(err);
    //     })
    // }
    // if (event === 'vast_skip' || event === 'vast_complete' || event === 'vast_remove') {
    //     var jinfo = JSON.parse(info);
    //     console.log(jinfo, jinfo.is);
    //     $.post('/modules/player/vast.php', {'event': event, 'type': jinfo.is, 'data': info}, function(data){
    //         console.log(data);
    //     }).fail(function (err){
    //         console.log(err);
    //     })
    // }
    // if (event.startsWith("vast_"))
    //     console.log({"event":event, "id": id, "inf": info});

}