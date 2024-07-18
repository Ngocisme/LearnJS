import React from "react";

function SampleReactMemo(props) {
    return <div>SampleReactMemo: {props.txt}</div>;
}

export default React.memo(SampleReactMemo);
