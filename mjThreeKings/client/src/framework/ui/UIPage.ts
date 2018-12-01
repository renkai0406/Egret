// TypeScript file


abstract class UIPage extends UIPanel {

    protected get m_tween() : UITweenInterface {
        return null;
    }

    public Back() : void {
        UIManager.Instance.CloseTopPage();
    }
}