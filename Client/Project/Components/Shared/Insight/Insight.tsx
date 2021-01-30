import * as React from "react";
import BaseComponent from "../../../../Core/Components/Common/BaseComponent";
import SingleInsight from "../SingleInsight/SingleInsight";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

interface IInsightProps {
    isLoading: boolean;
    displayPage: string;
    displayIndex: number;
    isRTL: boolean;
    learnMoreURL?: string;
}

interface IInsightState {
    isSuggestionVisible: boolean;
    hasProvidedFeedback: boolean;
    displayedActionTriggered: boolean;
}

export default class Insight extends BaseComponent<IInsightProps, IInsightState> {
    private currentHtmlElementRef = React.createRef<HTMLDivElement>();

    constructor(props: IInsightProps) {
        super(props);

        this.state = {
            isSuggestionVisible: false,
            hasProvidedFeedback: false,
            displayedActionTriggered: false
        };
    }

    doRender(): JSX.Element {
        return <div ref={this.currentHtmlElementRef}>
            {this.getInsightContent()}
        </div>;
    }

    private getInsightContent(): JSX.Element {
        return <div>
            <FeedbackCard>
                {
                    <SingleInsight
                        titleText={"titleTexttitleTexttitleTexttitleText"}
                        observationText={"observationText observationText"}
                        onShowSuggestionClick={this.onShowSuggestionClick}
                        hasSuggestion={false}
                    />
                }
            </FeedbackCard>
        </div>;
    }

    private onShowSuggestionClick = () => {
        this.setState(() => ({
            hasProvidedFeedback: true
        }));
    };
}