import * as React from "react";
import BaseComponent from "../../../../Core/Components/Common/BaseComponent";
import ThumbFeedback, { IThumbFeedbackProps } from "../ThumbFeedback/ThumbFeedback";

interface IFeedbackCardProps extends IThumbFeedbackProps {
    className?: string;
    feedbackClassName?: string;
}

export default class FeedbackCard extends BaseComponent<IFeedbackCardProps, {}> {
    doRender(): JSX.Element {
        return <div>
            {this.props.children}
            <div>
                <ThumbFeedback {...this.props} />
            </div>
        </div>;
    }
}