import * as React from "react";
import BaseComponent from "../../../../Core/Components/Common/BaseComponent";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import * as StringUtils from "../../../../Core/Common/StringUtils";

interface IInsightProps {
    titleText: string;
    observationText: string;
    image?: JSX.Element;
    onShowSuggestionClick?: () => void;
    hasSuggestion: boolean;
}

interface IInsightState {
    isCalloutVisible: boolean;
}

export default class SingleInsight extends BaseComponent<IInsightProps, IInsightState> {
    constructor(props: IInsightProps) {
        super(props);
        this.state = {
            isCalloutVisible: false
        };
    }

    doRender(): JSX.Element {
        return <div>
            <div>
                <div>
                    {this.props.titleText}
                </div>
                <div>
                    {this.props.image}
                </div>
            </div>
            {
                this.props.onShowSuggestionClick &&
                <DefaultButton
                    ariaLabel={"LocStrings.L_Insights.L_Why_I_Am_Seeing_This_Link_Text"}
                    onClick={this.props.onShowSuggestionClick}>
                    {this.props.hasSuggestion ?
                        StringUtils.format("abccc", "LocStrings.L_Insights.L_View_Suggestions_Link_Text")
                        : "LocStrings.L_Insights.L_Why_I_Am_Seeing_This_Link_Text"}
                </DefaultButton>
            }
        </div>;
    }
}