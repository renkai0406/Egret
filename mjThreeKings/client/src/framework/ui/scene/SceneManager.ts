// TypeScript file

class SceneManager {
    
    private static _instance : SceneManager;

    private m_sceneStack : Array<SceneBase>;

    private m_currentScene : SceneBase;

    public get CurrentScene() : SceneBase {
        return this.m_currentScene;
    }

    public static get Instance()  : SceneManager {
        if(this._instance == null){
            this._instance = new SceneManager();
        }
        return this._instance;
    }

    private constructor() {
        this.m_sceneStack = new Array<SceneBase>();
    }

    public ReplaceScene(sceneName : string) : void {
        UIManager.Instance.CloseAllPage();
        
        let scene : SceneBase = this.GetScene(sceneName);
        scene = eval("new " + sceneName + "()") as SceneBase;
        this.m_currentScene = scene;
        if(this.m_sceneStack.length > 0){
            let oldScene : SceneBase = this.m_sceneStack.pop();
            this.m_sceneStack.push(scene);
            oldScene.ExitScene();
        }else{
            this.m_sceneStack.push(scene);
        }
        this.m_currentScene.EnterScene();
    }

    public GetScene(sceneName : string) : SceneBase{
        for(let i = 0; i < this.m_sceneStack.length; i++){
            if(this.m_sceneStack[i].SceneName == sceneName){
                return this.m_sceneStack[i];
            }
        }
        return null;
    }
}