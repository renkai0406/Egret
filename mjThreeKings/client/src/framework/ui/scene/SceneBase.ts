// TypeScript file

abstract class SceneBase {

    public abstract get SceneName() : string ;

    public EnterScene() : void {
        this.OnEnterScene();
    }

    public ExitScene() : void {
        
    }

    protected OnEnterScene() : void {

    }

    protected OnExitScene() : void {

    }
}