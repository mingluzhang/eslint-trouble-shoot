import startBase from "../Core/AppBase";
import ApplicationContext from "../Core/ApplicationContext";
import Main from "./Components/Root/Main";
import IConfigData from "./DataLayer/TransferObjects/ConfigData";

function start(domRootId: string, config: IConfigData): void {
    const appContext = new ApplicationContext();
    startBase(
        domRootId,
        appContext,
        Main);
}

window.pulse = { start: start };
