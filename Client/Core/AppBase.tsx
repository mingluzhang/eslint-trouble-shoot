import * as React from "react";
import { render } from "react-dom";
import ApplicationContext from "./ApplicationContext";

/**
 * Entry point to app on client
 *
 * @param domRootId - Id of the DOM element which acts like a container. React.js renders into this container
 * @param appContext - Application context of the app consuming the Core SDK
 * @param app - root react component of the application
 */
export default function startBase(
    domRootId: string,
    appContext: ApplicationContext,
    app: React.ComponentClass,
): void {//testerror
    render(
        React.createElement(app),
        document.getElementById(domRootId));
}