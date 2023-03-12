var h=Object.defineProperty;var t=(c,n)=>h(c,"name",{value:n,configurable:!0});import{j as e}from"./jsx-runtime-7804b9f5.js";import{r as b}from"./index-1646b246.js";import{c as k}from"./clsx.m-26950cc3.js";import{L as p}from"./Label-44bbd9bc.js";import"./iframe-814bc0b2.js";const C="_checkbox_4ti24_1",m="_marker_4ti24_19",u="_content_4ti24_82",r={checkbox:C,marker:m,content:u},o=b.forwardRef((c,n)=>{const{label:a,className:l,children:s,wide:d,...i}=c,x=k(r.checkbox,l);return e.jsx(p,{label:a,wide:d,children:e.jsxs("span",{className:x,children:[e.jsx("input",{type:"checkbox",ref:n,...i}),e.jsx("span",{className:r.marker}),s&&e.jsx("span",{className:r.content,children:s})]})})});o.displayName="Checkbox";o.defaultProps={label:null,wide:!1};try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:{value:"null"},description:"",name:"label",required:!1,type:{name:"ReactNode"}},wide:{defaultValue:{value:"false"},description:"",name:"wide",required:!1,type:{name:"boolean"}}}}}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { Checkbox } from './Checkbox';\r
\r
export default {\r
    title: 'Components/Inputs/Checkbox',\r
    component: Checkbox,\r
    args: {\r
        children: 'Checkbox',\r
    },\r
} as ComponentMeta<typeof Checkbox>;\r
\r
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const CheckboxStatesWithoutLabel: React.FC = () => (\r
    <div style={{ display: 'flex', gap: 16 }}>\r
        <Checkbox />\r
        <Checkbox checked />\r
        <Checkbox disabled />\r
        <Checkbox checked disabled />\r
    </div>\r
);\r
\r
export const CheckboxStates: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Checkbox>Checkbox</Checkbox>\r
        <Checkbox checked>Checkbox</Checkbox>\r
        <Checkbox disabled>Checkbox</Checkbox>\r
        <Checkbox checked disabled>\r
            Checkbox\r
        </Checkbox>\r
    </div>\r
);\r
`,locationsMap:{default:{startLoc:{col:50,line:12},endLoc:{col:82,line:12},startBody:{col:50,line:12},endBody:{col:82,line:12}},"checkbox-states-without-label":{startLoc:{col:52,line:16},endLoc:{col:1,line:23},startBody:{col:52,line:16},endBody:{col:1,line:23}},"checkbox-states":{startLoc:{col:40,line:25},endLoc:{col:1,line:34},startBody:{col:40,line:25},endBody:{col:1,line:34}}}}},title:"Components/Inputs/Checkbox",component:o,args:{children:"Checkbox"}},f=t(c=>e.jsx(o,{...c}),"Template"),v=f.bind({}),w=t(()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{}),e.jsx(o,{checked:!0}),e.jsx(o,{disabled:!0}),e.jsx(o,{checked:!0,disabled:!0})]}),"CheckboxStatesWithoutLabel"),B=t(()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(o,{children:"Checkbox"}),e.jsx(o,{checked:!0,children:"Checkbox"}),e.jsx(o,{disabled:!0,children:"Checkbox"}),e.jsx(o,{checked:!0,disabled:!0,children:"Checkbox"})]}),"CheckboxStates"),D=["Default","CheckboxStatesWithoutLabel","CheckboxStates"];export{B as CheckboxStates,w as CheckboxStatesWithoutLabel,v as Default,D as __namedExportsOrder,S as default};
//# sourceMappingURL=Checkbox.stories-9fcada30.js.map
