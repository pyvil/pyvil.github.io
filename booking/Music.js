/**
 * @category Music
 * @package Booking_Music
 * @author Vitaliy Pyatin <mail.pyvil@gmail.com>
*/

/**
 * @constructor
 * @internal {Object} song       Howl instance
 * @internal {String} track      current song
 * @internal {Number} volume     current song volume
 * @internal {Boolean} loop      is song loop
 */
var Music = function () {
    this.song = {};

    this.track = ['audio/voice/sound.mp3', 'audio/voice/sound.ogg'];

    this.volume = .8;

    this.loop = false;

    this.sprite = {
        1: [0, 10000],
        2: [10000, 20000],
        3 : [20000, 30000],
        4 : [0, 0],
        5 : [0, 0],
        6 : [0, 0],
        7 : [0, 0]
    };


    this.init();
};

Music.prototype = {
    /**
     *
     */
    init : function () {
        this.startMusic();
    },

    /**
     * pause music
     */
    pause : function (e) {
        e = e || null;

        this.song.pause();
    },

    /**
     * play music
     */
    play : function (e) {
        e = e || null;

        if (e != null) {
            this.song.play(e);
        } else {
            this.song.play();
        }
    },

    /**
     * stop music
     */
    stop : function (e) {
        e = e || null;

        this.song.stop();
    },

    refresh : function () {
        this.song.urls(this.track);
        this.song.volume(this.volume);
        this.song.loop(this.volume);
    },

    /**
     *
     * @param {Array|String} track
     */
    setTrack : function (track) {
        this.track = Array.isArray(track) ? track : [track];
        this.refresh();
    },

    /**
     *
     * @param {Number} volume
     */
    setVolume : function (volume) {
        this.volume = volume;
        this.refresh();
    },

    /**
     *
     * @param {Boolean} loop
     */
    setLoop : function (loop) {
        this.loop = loop;
        this.refresh();
    },


    /**
     * listen when control buttons click
     * to control when user wanna stop, pause, etc current song
     */
    musicListener : function () {
        var self = this;
        $('#sound').bind('click', function (e) {
            $(this).toggleClass('mute');
            if ($(this).hasClass('mute')) {
                self.pause();
            } else {
                self.play();
            }
        });
    },

    /**
     *
     */
    startMusic : function () {
        this.song = new Howl({
            urls : this.track,
            volume : this.volume,
            loop : this.loop,
            sprite : this.sprite,
            onloaderror : function (e) {
                console.log('Error occurred while start play music: ' + e);
            },
        });
    }
};
