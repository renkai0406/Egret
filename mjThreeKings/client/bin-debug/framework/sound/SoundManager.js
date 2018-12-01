// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        this.m_musicVolume = 1.0;
        this.m_effectVolume = 1.0;
        this.m_musicEnable = true;
        this.m_effectEnable = true;
        this.m_musicStop = false;
        this.m_resDir = "resource/";
        this.m_soundCache = new nano.Map();
    }
    Object.defineProperty(SoundManager, "Instance", {
        get: function () {
            if (this._Instance == null) {
                this._Instance = new SoundManager();
            }
            return this._Instance;
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.prototype.SetResDir = function (resDir) {
        this.m_resDir = resDir;
    };
    SoundManager.prototype.SetMusicVolume = function (v) {
        this.m_musicVolume = v;
        this.m_currentMusicChannel.volume = v;
    };
    SoundManager.prototype.GetMusicVolume = function () {
        return this.m_musicVolume;
    };
    SoundManager.prototype.SetMusicEnable = function (enable) {
        this.m_musicEnable = enable;
    };
    SoundManager.prototype.SetEffectEnable = function (enable) {
        this.m_effectEnable = enable;
    };
    SoundManager.prototype.SetEffectVolume = function (v) {
        this.m_effectVolume = v;
    };
    SoundManager.prototype.GetEffectVolume = function () {
        return this.m_effectVolume;
    };
    SoundManager.prototype.PlayMusicFromUrlAsync = function (url) {
        var _this = this;
        if (!this.m_musicEnable) {
            return;
        }
        var sound = new egret.Sound();
        sound.load(this.m_resDir + url);
        sound.addEventListener(egret.Event.COMPLETE, function (event) {
            if (_this.m_musicStop) {
                return;
            }
            if (_this.m_currentMusicChannel != null) {
                _this.m_currentMusicChannel.stop();
            }
            _this.m_musicStop = false;
            _this.m_currentMusicChannel = sound.play();
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function (event) {
        }, this);
    };
    SoundManager.prototype.PlayMusicFromNetAsync = function (url) {
        var _this = this;
        if (!this.m_musicEnable) {
            return;
        }
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function (event) {
            var sound = loader.data;
            sound.type = egret.Sound.MUSIC;
            if (_this.m_musicStop) {
                return;
            }
            if (_this.m_currentMusicChannel != null) {
                _this.m_currentMusicChannel.stop();
            }
            _this.m_musicStop = false;
            _this.m_currentMusicChannel = sound.play();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        loader.load(new egret.URLRequest(url));
    };
    SoundManager.prototype.PlayMusic = function (key, loop) {
        if (loop === void 0) { loop = 0; }
        if (!this.m_musicEnable) {
            return;
        }
        var sound = RES.getRes(key);
        if (sound == null) {
            nano.Log.Msg("[SoundManager] Sound " + key + " not load , please load first");
        }
        else {
            sound.type = egret.Sound.MUSIC;
            if (this.m_currentMusicChannel != null) {
                this.m_currentMusicChannel.stop();
            }
            this.m_musicStop = false;
            var channel = sound.play(0, loop);
            channel.volume = this.m_musicVolume;
            this.m_currentMusicChannel = channel;
        }
    };
    SoundManager.prototype.StopMusic = function () {
        if (this.m_currentMusicChannel != null) {
            this.m_currentMusicChannel.stop();
            this.m_currentMusicChannel = null;
            this.m_musicStop = true;
        }
    };
    SoundManager.prototype.PlayEffect = function (key) {
        if (!this.m_effectEnable) {
            return;
        }
        var sound = RES.getRes(key);
        if (sound == null) {
            nano.Log.Msg("[SoundManager] Sound " + key + " not load , please load first");
        }
        else {
            sound.type = egret.Sound.EFFECT;
            var channel = sound.play(0, 1);
            channel.volume = this.m_effectVolume;
        }
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
