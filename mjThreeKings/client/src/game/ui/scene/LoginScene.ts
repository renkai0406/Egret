// TypeScript file

class LoginScene extends SceneBase {

    public get SceneName() : string {
        return "Login";
    }

    protected OnEnterScene() : void {

        UIManager.Instance.OpenPage("LoginSelectPage");
        //UIManager.Instance.OpenWindow("GeneralsList");
    }
}