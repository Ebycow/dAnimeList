// ==UserScript==
// @name         dAnimeList
// @namespace    https://ebycow.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ebycow <https://ebycow.net>
// @match        https://anime.dmkt-sp.jp/animestore/sc_d_pc?partId=*
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
                url : `https://api.jikan.moe/v3/search/anime?q=${ title }&limit=${ limit }`,
                onload : (response) => {
                    const suggestAnimes = JSON.parse(response.responseText).results;
                    window.open(suggestAnimes[0].url,"_blank");

                }
            });

        });

    });

})();
