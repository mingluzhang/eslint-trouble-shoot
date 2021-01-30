import BaseComponent from "./BaseComponent";
abstract class SmartComponent<P, S> extends BaseComponent<P, S> {

    public constructor(props: P) {
        super(props);
    }

    public componentDidMount(): void {
    }

    public componentDidUpdate(prevProps: P, _prevState: S): void {
    }

    public componentWillUnmount(): void {
    }
}

export default SmartComponent;
