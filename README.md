## Description
A fully customizable modal. Each part of it can be changed (header, body, footer), style and content.

## Installation
`npm i @thibaud_s-dev/react-modal-custom`

## How to use
<img width="742" alt="raycast-untitled (1)" src="https://user-images.githubusercontent.com/66798720/203497711-cc033855-9e72-4213-a183-a6d56e42bc18.png">

## Modal parameters

### Global parameters
| Parameter    | value     | Required |Description   | 
|--------------|-----------|------------|--------------|
| showModal | boolean | Yes| The value of this parameter must be similar to the one that will be used to display the modal in the jsx  (see above, section How to use, the boolean isModalOpen)
| cross | boolean | No | Displays the closing cross (see above, section How to use)|
| title | string | No | Displays a title (see above, section How to use) |
| overlayClosure | boolean | No | Close the modal by clicking the overlay. If false, the user will not be able to close it by this way|
| children | any | Yes | This is a default setting, the modal must imperatively have content |
| footerContent | JSXElement | No | Allows you to activate the footer of the modal with JSX content.  |

### Custom Styles
| Parameter    | value     | Required |Description   | example      | 
|--------------|-----------|------------|--------------|--------------|
| overlayStyle | object    | No      | Allows to override the style by default of the overlay (to change the opacity it will be necessary to use rgba value) | { color: "rgba(0, 0, 0, 0.4)" }
|closeStyle|object|No|Allows to override the style by default of the closing cross.  Editable size with font-size property|  { color: "black", fontSize: "16px" }
| headerStyle| object | No| Allows to override the style by default of the header of the modal. It represents the element that supports the cross and the title of the modal | { display: "flex", justifyContent: "space-between",  alignItems: "center" }
| titleStyle |object| No| Allows to override the default style of the modal title |  { color: "green", fontSize: "16px", fontWeight: "600" }
| contentStyle|object|No| Allows to override the default style of the modal content| { textAlign: "center",  padding: "2rem 1rem", textAlign: "center" }
| containerStyle|object|No|Allows to override the default style of the modal container| { "@media(max-width: 450px)": { width: "100%" } } 
| footerStyle | object  |No|Allows to override the default style of the modal footer| { display: "flex", 	justifyContent: "space-between", 	padding: "0 1rem" }

### Concrete example
<img width="920" alt="useCase_modal" src="https://user-images.githubusercontent.com/66798720/203508938-3bfc97c6-9079-47b5-9efd-b4e9df42106f.png">




