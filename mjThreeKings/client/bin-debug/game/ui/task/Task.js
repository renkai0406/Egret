// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Task.prototype.GetSkinFile = function () {
        return "exml/taskpage.exml";
    };
    Task.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        var data = [
            { title: "矿区达人", label: "在资源矿区内采矿5次", progress: "4/5", status: 0,
                img0: "", count0: "1",
                img1: "", count1: "10",
                img2: "", count2: "11",
                img3: "", count3: "110",
            },
            { title: "龙虎相争", label: "在\"龙虎斗\"玩法中参与5次", progress: "5/5", status: 1,
                img0: "", count0: "2",
                img1: "", count1: "20",
                img2: "", count2: "22",
                img3: "", count3: "220",
            },
            { title: "兵精粮足", label: "解锁12个超级兵", progress: "5/5", status: 1,
                img0: "", count0: "3",
                img1: "", count1: "30",
                img2: "", count2: "33",
                img3: "", count3: "330",
            },
            { title: "常胜将军", label: "连胜5次", progress: "1/5", status: 0,
                img0: "", count0: "4",
                img1: "", count1: "40",
                img2: "", count2: "44",
                img3: "", count3: "440",
            },
            { title: "势不可挡", label: "打出200点以上伤害", progress: "5/5", status: 2,
                img0: "", count0: "5",
                img1: "", count1: "50",
                img2: "", count2: "55",
                img3: "", count3: "550",
            },
            { title: "力挽狂澜", label: "在队友全部阵亡的情况下获胜", progress: "2/5", status: 0,
                img0: "", count0: "6",
                img1: "", count1: "60",
                img2: "", count2: "66",
                img3: "", count3: "660",
            },
        ];
        var eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = TaskItem;
    };
    Task.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return Task;
}(UIWindow));
__reflect(Task.prototype, "Task");
