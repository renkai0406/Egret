class BattleScene extends SceneBase {
    public get SceneName() : string {
        return "Battle";
    }

    protected OnEnterScene() : void {
        UIManager.Instance.OpenPage("BattlePage");
    }
}