import * as React from "react";
import BaseComponent from "../../../../Core/Components/Common/BaseComponent";

export enum LoadingCardType {
    Small,
    Medium,
    Large,
    NetworkFourCards,
    NetworkSingleCard,
    SmallCircle,
    SingleLine,
    SingleLineMini,
    Habit
}

interface ILoadingCard {
    ghostSize: LoadingCardType;
    imgClassName?: string;
    isRTL?: boolean;
    className?: string;
}

/**
 * Show loading message
 */
export default class LoadingCard extends BaseComponent<ILoadingCard, {}> {
    doRender(): JSX.Element | null {
        if (this.props.ghostSize == null) {
            return null;
        }

        return <div>
            <div
                aria-label={"LocStrings.L_Loading_Text"}
                title={"LocStrings.L_Loading_Text"} />
        </div>;
    }
}