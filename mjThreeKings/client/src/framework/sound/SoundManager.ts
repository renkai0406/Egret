// TypeScript file

class SoundManager {

    private static _Instance : SoundManager;

    public static get Instance() : SoundManager {
        if(this._Instance == null){
            this._Instance = new SoundManager();
        }
        return this._Instance;
    }

    private m_resDir : string;

    private m_musicVolume : number = 1.0;

    private m_effectVolume : number = 1.0;

    private m_currentMusicChannel : egret.SoundChannel;

    private m_soundCache : nano.Map<string,egret.Sound>;

    private m_musicEnable : boolean = true;

    private m_effectEnable : boolean = true;

    private m_musicStop : boolean = false;

    private constructor(){
        this.m_resDir = "resource/";
        this.m_soundCache = new nano.Map<string,egret.Sound>();
    }

    public SetResDir(resDir) : void {
        this.m_resDir = resDir;
    }

    public SetMusicVolume(v : number ) : void {
        this.m_musicVolume = v;
        this.m_currentMusicChannel.volume = v;
    }

    public GetMusicVolume( ) : number {
        return this.m_musicVolume;
    }

    public SetMusicEnable(enable : boolean){
        this.m_musicEnable = enable;
    }

    public SetEffectEnable(enable : boolean){
        this.m_effectEnable = enable;
    }

    public SetEffectVolume(v : number ): void {
        this.m_effectVolume = v;
    }

    public GetEffectVolume( ) : number {
        return this.m_effectVolume;
    }

    public PlayMusicFromUrlAsync(url) : void {

        if(!this.m_musicEnable){
            return ;
        }

        let sound : egret.Sound = new egret.Sound();
        sound.load(this.m_resDir + url);

        sound.addEventListener(egret.Event.COMPLETE,
        (event : egret.Event) => {

            if(this.m_musicStop){
                return ;
            }

            if(this.m_currentMusicChannel != null){
                this.m_currentMusicChannel.stop();
            }
            this.m_musicStop = false;
            this.m_currentMusicChannel = sound.play();
        },
        this);

        sound.addEventListener(egret.IOErrorEvent.IO_ERROR,
        (event : egret.IOErrorEvent) => {

        },this);
    }

    public PlayMusicFromNetAsync(url) : void {

        if(!this.m_musicEnable){
            return ;
        }
        
        let loader:egret.URLLoader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, 
        (event:egret.Event) =>{
            var sound : egret.Sound = loader.data;
            sound.type = egret.Sound.MUSIC;

            if(this.m_musicStop){
                return ;
            }

            if(this.m_currentMusicChannel != null){
                this.m_currentMusicChannel.stop();
            }
            this.m_musicStop = false;
            this.m_currentMusicChannel = sound.play();
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        loader.load(new egret.URLRequest(url));
    }

    public PlayMusic(key : string, loop = 0) : void {

        if(!this.m_musicEnable){
            return ;
        }

        let sound : egret.Sound = RES.getRes(key);
        if(sound == null){
            nano.Log.Msg("[SoundManager] Sound " + key + " not load , please load first");
        }else{
            sound.type = egret.Sound.MUSIC;
            if(this.m_currentMusicChannel != null){
                this.m_currentMusicChannel.stop();
            }
            this.m_musicStop = false;
            let channel  : egret.SoundChannel = sound.play(0,loop);
            channel.volume = this.m_musicVolume;
            this.m_currentMusicChannel = channel;
        }
    }

    public StopMusic() : void {
        if(this.m_currentMusicChannel != null){
            this.m_currentMusicChannel.stop();
            this.m_currentMusicChannel = null;
            this.m_musicStop = true;
        }
    }

    public PlayEffect(key: string) : void {

        if(!this.m_effectEnable){
            return ;
        }

        let sound : egret.Sound = RES.getRes(key);
        if(sound == null){
            nano.Log.Msg("[SoundManager] Sound " + key + " not load , please load first");
        }else{
            sound.type = egret.Sound.EFFECT;
            let channel  : egret.SoundChannel = sound.play(0,1);
            channel.volume = this.m_effectVolume;
        }
  
    }

}