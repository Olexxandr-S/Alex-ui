var x=Object.defineProperty;var r=(e,n)=>x(e,"name",{value:n,configurable:!0});import{j as o}from"./jsx-runtime-7804b9f5.js";import{r as d}from"./index-1646b246.js";import{B as c}from"./Button-c1374c2c.js";import{c as f}from"./clsx.m-26950cc3.js";import{r as C}from"./index-fc92e34f.js";import{C as g}from"./LogoIcon-1a8b6ca7.js";import{C as v}from"./Card-a9353541.js";import"./iframe-814bc0b2.js";import"./Text-f7dd7c67.js";const m=r(({id:e,children:n})=>{const[t,a]=d.useState(null),s=d.useRef(!1),u=r(()=>{const l=document.createElement("div");return l.setAttribute("id",e),document.body.appendChild(l),s.current=!0,l},"createRootElement");return d.useLayoutEffect(()=>{const l=document.getElementById(e)||u();return a(l),()=>{s.current&&l.parentNode&&document.body.removeChild(l)}},[e]),t?C.createPortal(n,t):null},"ModalPortal");try{m.displayName="ModalPortal",m.__docgenInfo={description:"",displayName:"ModalPortal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}const B="_overlay_1a4fl_1",O="_modal_1a4fl_11",N="_header_1a4fl_26",j="_close_1a4fl_37",p={overlay:B,modal:O,header:N,close:j},I="notes-paw-modal-root",i=r(({onClose:e,customId:n,className:t,isOpen:a,children:s})=>{const u=f(p.modal,t);return o.jsx(m,{id:n||I,children:a&&o.jsx("div",{className:p.overlay,children:o.jsxs("div",{className:u,children:[o.jsx("div",{className:p.header,children:o.jsx(c,{scale:"s",color:"secondary",variant:"icon",className:p.close,onClick:e,children:o.jsx(g,{})})}),s]})})})},"Modal");try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},customId:{defaultValue:null,description:"",name:"customId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const A="_actions_52xpe_1",M={actions:A,"align-left":"_align-left_52xpe_7","align-right":"_align-right_52xpe_10","align-center":"_align-center_52xpe_13","align-spaced":"_align-spaced_52xpe_16"},_=r(({className:e,children:n,align:t="right"})=>{const a=f(M.actions,e,{[M[`align-${t}`]]:t});return o.jsx("div",{className:a,children:n})},"ModalActions");try{_.displayName="ModalActions",_.__docgenInfo={description:"",displayName:"ModalActions",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},align:{defaultValue:{value:"right"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"spaced"'}]}}}}}catch{}const b="_body_11mz1_1",E="_indentation_11mz1_6",h={body:b,indentation:E},y=r(({children:e,className:n,flexDirection:t})=>{const a=f(h.body,h.indentation,n);return o.jsx(v,{wide:!0,className:a,flexDirection:t,children:e})},"ModalBody");try{y.displayName="ModalBody",y.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}const W={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { FC, useState } from 'react';\r
import { Button } from '../Button/Button';\r
import { Modal } from './Modal';\r
import { ModalActions } from './ModalActions';\r
import { ModalBody } from './ModalBody';\r
\r
export default {\r
    title: 'Components/Overlays/Modal',\r
    component: Modal,\r
    args: {\r
        children: <div>Modal content</div>,\r
    },\r
} as ComponentMeta<typeof Modal>;\r
\r
const Template: ComponentStory<typeof Modal> = (args) => {\r
    const [isOpen, setIsOpen] = useState(Boolean(args?.isOpen));\r
\r
    const openModal = (): void => setIsOpen(true);\r
\r
    const closeModal = (): void => setIsOpen(false);\r
\r
    return (\r
        <>\r
            <Button onClick={openModal}>Open Modal</Button>\r
            <Modal {...args} isOpen={isOpen} onClose={closeModal} />\r
        </>\r
    );\r
};\r
\r
export const Default = Template.bind({});\r
\r
export const ModalWithBodyAndActions: FC = () => {\r
    const [isOpen, setIsOpen] = useState(false);\r
\r
    const openModal = (): void => setIsOpen(true);\r
\r
    const closeModal = (): void => setIsOpen(false);\r
\r
    return (\r
        <>\r
            <Button onClick={openModal}>Open Modal</Button>\r
            <Modal isOpen={isOpen} onClose={closeModal}>\r
                <ModalBody>\r
                    <p style={{ width: '500px' }}>Modal content</p>\r
                </ModalBody>\r
                <ModalActions>\r
                    <Button onClick={closeModal} color="secondary">\r
                        Close\r
                    </Button>\r
                    <Button onClick={closeModal}>Save</Button>\r
                </ModalActions>\r
            </Modal>\r
        </>\r
    );\r
};\r
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:29},startBody:{col:47,line:16},endBody:{col:1,line:29}},"modal-with-body-and-actions":{startLoc:{col:43,line:33},endLoc:{col:1,line:56},startBody:{col:43,line:33},endBody:{col:1,line:56}}}}},title:"Components/Overlays/Modal",component:i,args:{children:o.jsx("div",{children:"Modal content"})}},S=r(e=>{const[n,t]=d.useState(Boolean(e==null?void 0:e.isOpen)),a=r(()=>t(!0),"openModal"),s=r(()=>t(!1),"closeModal");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:a,children:"Open Modal"}),o.jsx(i,{...e,isOpen:n,onClose:s})]})},"Template"),$=S.bind({}),z=r(()=>{const[e,n]=d.useState(!1),t=r(()=>n(!0),"openModal"),a=r(()=>n(!1),"closeModal");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:t,children:"Open Modal"}),o.jsxs(i,{isOpen:e,onClose:a,children:[o.jsx(y,{children:o.jsx("p",{style:{width:"500px"},children:"Modal content"})}),o.jsxs(_,{children:[o.jsx(c,{onClick:a,color:"secondary",children:"Close"}),o.jsx(c,{onClick:a,children:"Save"})]})]})]})},"ModalWithBodyAndActions"),U=["Default","ModalWithBodyAndActions"];export{$ as Default,z as ModalWithBodyAndActions,U as __namedExportsOrder,W as default};
//# sourceMappingURL=Modal.stories-850148ff.js.map
