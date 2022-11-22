import styled from "styled-components"
import { defaultStyle } from "./defaultStyles"

const { overlay, container, header, close, content, modalTitle, footer } = defaultStyle

export const Overlay = styled.div<any>`
	${(props: any) => ({ ...overlay, ...props.customStyle })}
`
export const Container = styled.div<any>`
	${(props: any) => ({ ...container, ...props.customStyle })}
`
export const Header = styled.div<any>`
	${(props: any) => ({ ...header, ...props.customStyle })}
`
export const Close = styled.div<any>`
	${(props: any) => ({ ...close, ...props.customStyle })}
`
export const Content = styled.p<any>`
	${(props: any) => ({ ...content, ...props.customStyle })}
`
export const Title = styled.p<any>`
	${(props: any) => ({ ...modalTitle, ...props.customStyle })}
`
export const Footer = styled.div<any>`
	${(props: any) => ({ ...footer, ...props.customStyle })}
`
