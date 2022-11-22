import React from "react";
import { CSSObject } from "styled-components";
declare function Modal(props: {
    showModal: boolean;
    cross?: boolean;
    title?: string;
    overlayClosure?: boolean;
    children: any;
    footerContent?: JSX.Element;
    contentStyle?: CSSObject;
    titleStyle?: CSSObject;
    closeStyle?: CSSObject;
    containerStyle?: CSSObject;
    headerStyle?: CSSObject;
    overlayStyle?: CSSObject;
    footerStyle?: CSSObject;
}): React.ReactPortal;
export default Modal;
