"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Title = exports.Content = exports.Close = exports.Header = exports.Container = exports.Overlay = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const defaultStyles_1 = require("./defaultStyles");
const { overlay, container, header, close, content, modalTitle, footer } = defaultStyles_1.defaultStyle;
exports.Overlay = styled_components_1.default.div `
	${(props) => (Object.assign(Object.assign({}, overlay), props.customStyle))}
`;
exports.Container = styled_components_1.default.div `
	${(props) => (Object.assign(Object.assign({}, container), props.customStyle))}
`;
exports.Header = styled_components_1.default.div `
	${(props) => (Object.assign(Object.assign({}, header), props.customStyle))}
`;
exports.Close = styled_components_1.default.div `
	${(props) => (Object.assign(Object.assign({}, close), props.customStyle))}
`;
exports.Content = styled_components_1.default.p `
	${(props) => (Object.assign(Object.assign({}, content), props.customStyle))}
`;
exports.Title = styled_components_1.default.p `
	${(props) => (Object.assign(Object.assign({}, modalTitle), props.customStyle))}
`;
exports.Footer = styled_components_1.default.div `
	${(props) => (Object.assign(Object.assign({}, footer), props.customStyle))}
`;
