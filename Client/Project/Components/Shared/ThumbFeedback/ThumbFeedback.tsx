import * as React from "react";
import BaseComponent from "../../../../Core/Components/Common/BaseComponent";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { IconNames } from "../../../FabricIcons/src/IconNames";

export interface IThumbFeedbackProps {
    hasProvidedFeedback?: boolean;
}

interface IThumbFeedbackState {
    feedbackProvided: boolean;
    isLike?: boolean;
}

export default class ThumbFeedback extends BaseComponent<IThumbFeedbackProps, IThumbFeedbackState> {
    constructor(props: IThumbFeedbackProps) {
        super(props);

        this.state = {
            feedbackProvided: false
        };
    }

    doRender(): JSX.Element {
        return this.getFeedbackContent();
    }

    private getFeedbackContent(): JSX.Element {
        const like = "StringUtils.format";
        const dislike = "StringUtils";

        return <div>
            <span>
                {"LocStrings.L_Insights.L_Feedback_Text"}
            </span>
            <IconButton
                iconProps={{ iconName: IconNames.Like }}
                title={like}
                ariaLabel={like}
            />
            <IconButton
                iconProps={{ iconName: IconNames.Dislike }}
                title={dislike}
                ariaLabel={dislike}
            />
        </div>;
    }
}