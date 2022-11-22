"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_dom_1 = require("react-dom");
const customStyles_1 = require("../styles/customStyles");
const defaultStyles_1 = require("../styles/defaultStyles");
function Modal(props) {
    const { showModal, cross, title, overlayClosure, children, footerContent, contentStyle, titleStyle, closeStyle, containerStyle, headerStyle, overlayStyle, footerStyle } = props;
    const [displayModal, setDisplayModal] = (0, react_2.useState)(showModal);
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (0, react_dom_1.createPortal)(react_1.default.createElement(react_1.default.Fragment, null, displayModal && (react_1.default.createElement(customStyles_1.Overlay, { customStyle: overlayStyle !== null && overlayStyle !== void 0 ? overlayStyle : defaultStyles_1.defaultStyle.overlay, onClick: overlayClosure ? () => setDisplayModal(false) : undefined },
        react_1.default.createElement(customStyles_1.Container, { onClick: stopPropagation, customStyle: containerStyle !== null && containerStyle !== void 0 ? containerStyle : defaultStyles_1.defaultStyle.container },
            react_1.default.createElement(customStyles_1.Header, { customStyle: headerStyle !== null && headerStyle !== void 0 ? headerStyle : defaultStyles_1.defaultStyle.header },
                react_1.default.createElement(customStyles_1.Title, { customStyle: titleStyle !== null && titleStyle !== void 0 ? titleStyle : defaultStyles_1.defaultStyle.modalTitle }, title),
                cross && (react_1.default.createElement(customStyles_1.Close, { customStyle: closeStyle !== null && closeStyle !== void 0 ? closeStyle : defaultStyles_1.defaultStyle.close, onClick: () => setDisplayModal(false), role: "button" }, "X"))),
            react_1.default.createElement(customStyles_1.Content, { customStyle: contentStyle !== null && contentStyle !== void 0 ? contentStyle : defaultStyles_1.defaultStyle.content }, children),
            react_1.default.createElement(customStyles_1.Footer, { customStyle: footerStyle !== null && footerStyle !== void 0 ? footerStyle : defaultStyles_1.defaultStyle.footer }, footerContent))))), document.body);
}
exports.default = Modal;
