// ==UserScript==
// @name         dAnimeList
// @namespace    https://ebycow.net/
// @version      0.5
// @description  try to take over the world!
// @author       Ebycow <https://ebycow.net>
// @match        *://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=*
// @grant        GM_xmlhttpRequest
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(() => {
        $('#settingPopupIn').append($('<div class="list mal"><div class="w2 caption">MyAnimeList</div></div>'))

        $('.mal').click(() => {
            const title = $('.pauseInfoTxt1').text();
            const limit = 1;

            GM_xmlhttpRequest({
                method : 'GET',
                url : `https://api.jikan.moe/v4/anime?q=${ title }&limit=${ limit }`,
                onload : (response) => {
                    const suggestAnimes = JSON.parse(response.responseText).data;
                    window.open(suggestAnimes[0].url,"_blank");

                }
            });

        });

    });

})();
