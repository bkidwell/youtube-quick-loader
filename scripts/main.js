YTQ_IFRAME = 'iframe';
YTQ_INVIDIOUS = 'invidious';

function main(mode) {
    if(!mode) { mode = YTQ_IFRAME; }

    // example query strings:
    // https://www.youtube.com/watch?v=7GcVRDRDV6I
    // https://youtu.be/7GcVRDRDV6I?t=361
    var query = window.location.href.slice(window.location.href.indexOf('?') + 1);

    function getYtId() {
        var result = /v(\=|%3D)([\w\-]+)/.exec(query);
        if(result) { return result[2]; }
        result = /youtu\.be\/([\w\-]+)/.exec(query);
        if(result) { return result[1]; }
    }

    function getTime() {
        // 1m02s
        var result = /t(\=|%3D)(\d+)m(\d+)s/.exec(query);
        if(result) { return result[2] * 60 + result[3]; }
        // 33s
        // 33
        result = /t(\=|%3D)(\d+)s?/.exec(query);
        if(result) { return result[2]; }
        return null;
    }

    var ytid = getYtId();
    var t = getTime();
    if(!ytid) {
        $('#searchurl').text(window.location.href.split('?')[0]);
        $('#searchform').show();
        return;
    }

    console.log({'query': query, 'ytid': ytid, 't': t});

    function doIframe() {
        $('title').html('Youtube: ' + ytid);
        var url = 'https://www.youtube.com/embed/' + ytid;
        if(t) {
            url += '?start=' + t + '&autoplay=1';
        } else {
            url += '?autoplay=1';
        }
    
        // Remove margins
        $('html, body').css({
            'padding': '0px',
            'margin': '0px',
            'overflow': 'hide'
        });
    
        // Create embed IFRAME
        var vid = $('<iframe />');
        vid.prop('src', url);
        console.log(url);
        vid.prop('frameborder', 0);
        vid.prop('allowfullscreen', true);
        $('body').append(vid);
    
        // Resize IFRAME to fill document view
        var resize = function() {
            vid.css({
                width: $(window).innerWidth() + 'px',
                height: $(window).innerHeight() + 'px',
            });
        };
        resize();
        $(window).resize(resize);
    }

    function doInvidious() {
        var url = 'https://invidio.us/watch?v=' + ytid;
        if(t) {
            url += '&t=' + t;
        }
        console.log(url);
        document.location = url;
    }

    if(mode == YTQ_IFRAME) {
        doIframe();
    } else {
        doInvidious();
    }

}
