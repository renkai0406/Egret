// TypeScript file

class HomeScene extends SceneBase {

    public get SceneName() : string {
        return "Task";
    }

    protected OnEnterScene() : void {
        UIManager.Instance.OpenPage("HomePage");
    }
}