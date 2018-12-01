//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    private m_resDir = "resource/";

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
            console.log("pause ");
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
              console.log("resume ");
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.error(e);
        })
    }

    private async runGame() {
        this.setupRunEnvironment();
        this.initManager();
        this.initModules();
        this.showVersion();
        await this.loadResource();
    }

    private setupRunEnvironment(){
        if(RELEASE){
            App.Env = RunEnvironment.Publish;
        }
    }

    private initManager() : void {
        UIManager.Init(this.stage);
        UIManager.Instance.SetResDir(this.m_resDir);
        let configMng  : ConfigMng = new ConfigMng();

    }

    private initModules() : void {

    }

    private showVersion() : void {
        let versionLabel : eui.Label = new eui.Label();
        versionLabel.text = App.VersionStr;
        versionLabel.x = this.stage.stageWidth - versionLabel.width - 10;
        versionLabel.y = this.stage.stageHeight - versionLabel.height - 10;
        this.stage.addChild(versionLabel);
    }

    private async loadResource() {
        try {

            await RES.loadConfig(this.m_resDir + "default.res.json", this.m_resDir);
            await this.loadTheme();
            await RES.loadGroup("loading",0);
            let loadingPage : LoadingPage = UIManager.Instance.OpenPage("LoadingPage") as LoadingPage;
            loadingPage.SetLoadStageStr("预加载资源...");
            await RES.loadGroup("preload", 0, loadingPage);
            ConfigMng.Instance.LoadConfig();
            LangManager.Instance.LoadConig("lang_json");
            SceneManager.Instance.ReplaceScene("LoginScene");
        }
        catch (e) {
            console.error(e);
        }
    }


    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme(this.m_resDir + "/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

}
