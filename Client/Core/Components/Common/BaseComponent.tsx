import * as React from "react";
import ApplicationContext from "../../ApplicationContext";

export default class BaseComponent<P, S> extends React.Component<P, S> {
    private static appContext: ApplicationContext;

    public get appContext(): ApplicationContext {
        return BaseComponent.appContext;
    }

    public render(): JSX.Element | null {
        if ((this.constructor as { displayName?: string }).displayName === "BaseComponent") {
            (this.constructor as { displayName?: string }).displayName = undefined;
        }

        let result: JSX.Element | null;
        try {
            result = this.doRender();
        } catch (error) {
            result = this.doErrorRender();
        }

        return result;
    }

    public doRender(): JSX.Element | null {
        throw new Error("not implemented");
    }

    public doErrorRender(): JSX.Element | null {
        const errorStyle: React.CSSProperties = {
            minHeight: "100px",
            backgroundColor: "lightgrey",
            fontSize: "17px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        };

        return (
            <div style={errorStyle}>
                {"LocStrings.L_GenericError_Text"}
            </div>
        );
    }
}
