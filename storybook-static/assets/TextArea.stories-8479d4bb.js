var m=Object.defineProperty;var o=(e,r)=>m(e,"name",{value:r,configurable:!0});import{j as a}from"./jsx-runtime-7804b9f5.js";import{r as i}from"./index-1646b246.js";import{c as d}from"./clsx.m-26950cc3.js";import{L as x}from"./Label-44bbd9bc.js";import"./iframe-814bc0b2.js";const u="_textarea_15yev_1",f={textarea:u},t=i.forwardRef((e,r)=>{const{label:n,className:s,wide:l,...p}=e,c=d(f.textarea,s);return a.jsx(x,{label:n,wide:l,children:a.jsx("textarea",{ref:r,className:c,...p})})});t.displayName="TextArea";t.defaultProps={label:null,wide:!0};try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:{value:"null"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:{value:"true"},description:"",name:"wide",required:!1,type:{name:"boolean"}}}}}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { TextArea } from './TextArea';\r
\r
export default {\r
    title: 'Components/Inputs/TextArea',\r
    component: TextArea,\r
    args: {\r
        placeholder: 'Enter text',\r
        label: 'Text Area',\r
    },\r
} as ComponentMeta<typeof TextArea>;\r
\r
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;\r
\r
export const Default = Template.bind({});\r
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:82,line:13},startBody:{col:50,line:13},endBody:{col:82,line:13}}}}},title:"Components/Inputs/TextArea",component:t,args:{placeholder:"Enter text",label:"Text Area"}},T=o(e=>a.jsx(t,{...e}),"Template"),j=T.bind({}),w=["Default"];export{j as Default,w as __namedExportsOrder,C as default};
//# sourceMappingURL=TextArea.stories-8479d4bb.js.map
