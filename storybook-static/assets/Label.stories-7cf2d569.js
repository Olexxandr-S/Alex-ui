var a=Object.defineProperty;var t=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-7804b9f5.js";import{L as n}from"./Label-44bbd9bc.js";import"./index-1646b246.js";import"./iframe-814bc0b2.js";import"./clsx.m-26950cc3.js";const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import { Label } from './Label';\r
\r
export default {\r
    title: 'Components/Inputs/Label',\r
    component: Label,\r
    args: {\r
        label: 'Label',\r
    },\r
} as ComponentMeta<typeof Label>;\r
\r
const Template: ComponentStory<typeof Label> = (args) => (\r
    <Label {...args}>\r
        <input type="text" placeholder="Enter text" />\r
    </Label>\r
);\r
\r
export const Default = Template.bind({});\r
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:1,line:16},startBody:{col:47,line:12},endBody:{col:1,line:16}}}}},title:"Components/Inputs/Label",component:n,args:{label:"Label"}},l=t(e=>o.jsx(n,{...e,children:o.jsx("input",{type:"text",placeholder:"Enter text"})}),"Template"),d=l.bind({}),u=["Default"];export{d as Default,u as __namedExportsOrder,L as default};
//# sourceMappingURL=Label.stories-7cf2d569.js.map
