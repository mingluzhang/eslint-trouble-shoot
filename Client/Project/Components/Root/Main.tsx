import * as React from "react";
import SmartComponent from "../../../Core/Components/Common/SmartComponent";
import Insight from "../Shared/Insight/Insight";
import LoadingCard, { LoadingCardType } from "../Shared/LoadingCard/LoadingCard";
import AmplitudeConstants from "../../Common/AmplitudeConstants";

interface AppState {
    currentFocusId: string;
}

export default class Main extends SmartComponent<{}, AppState> {//testerror which can't be detected by eslint-plugin-webpack
    doRender(): JSX.Element {
        return (
            <div>
                <Insight
                    isLoading={false}
                    displayPage={AmplitudeConstants.navigation}
                    displayIndex={1}
                    isRTL={false} />
                <LoadingCard ghostSize={LoadingCardType.Large} />
            </div>);
    }
}
