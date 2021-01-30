import IConfigData from "../../DataLayer/TransferObjects/ConfigData";

declare global {
    interface Window {//testerror
        pulse: {
            start: (rootId: string, config: IConfigData) => void;
        };
    }
}