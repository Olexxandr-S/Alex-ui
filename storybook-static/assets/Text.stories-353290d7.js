var l=Object.defineProperty;var n=(o,r)=>l(o,"name",{value:r,configurable:!0});import{j as t}from"./jsx-runtime-f11d5a4b.js";import{T as e}from"./Text-863ceb15.js";import"./index-f5032570.js";import"./iframe-63ac9104.js";import"./clsx.m-26950cc3.js";const y={parameters:{storySource:{source:`import { ComponentStory } from '@storybook/react';\r
import { Text } from './Text';\r
\r
export default {\r
    title: 'Components/Typography/Text',\r
    component: Text,\r
    argTypes: {\r
        scale: {\r
            type: 'union',\r
            defaultValue: 'm',\r
            options: ['s', 'm', 'l'],\r
        },\r
        type: {\r
            type: 'union',\r
            defaultValue: 'body',\r
            options: ['button', 'body'],\r
        },\r
        weight: {\r
            type: 'union',\r
            defaultValue: 'regular',\r
            options: ['regular', 'bold'],\r
        },\r
    },\r
    args: {\r
        children: 'Demo text',\r
    },\r
};\r
\r
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;\r
\r
export const Default = Template.bind({});\r
\r
export const ButtonTexts: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Text scale="s" type="button">\r
            Button text\r
        </Text>\r
        <Text scale="m" type="button">\r
            Button text\r
        </Text>\r
        <Text scale="l" type="button">\r
            Button text\r
        </Text>\r
    </div>\r
);\r
\r
export const BodyTexts: React.FC = () => (\r
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>\r
        <Text scale="s" type="body">\r
            Button text\r
        </Text>\r
        <Text scale="s" type="body" weight="bold">\r
            Button text\r
        </Text>\r
        <Text scale="m" type="body">\r
            Button text\r
        </Text>\r
        <Text scale="m" type="body" weight="bold">\r
            Button text\r
        </Text>\r
        <Text scale="l" type="body">\r
            Button text\r
        </Text>\r
        <Text scale="l" type="body" weight="bold">\r
            Button text\r
        </Text>\r
    </div>\r
);\r
`,locationsMap:{default:{startLoc:{col:46,line:29},endLoc:{col:74,line:29},startBody:{col:46,line:29},endBody:{col:74,line:29}},"button-texts":{startLoc:{col:37,line:33},endLoc:{col:1,line:45},startBody:{col:37,line:33},endBody:{col:1,line:45}},"body-texts":{startLoc:{col:35,line:47},endLoc:{col:1,line:68},startBody:{col:35,line:47},endBody:{col:1,line:68}}}}},title:"Components/Typography/Text",component:e,argTypes:{scale:{type:"union",defaultValue:"m",options:["s","m","l"]},type:{type:"union",defaultValue:"body",options:["button","body"]},weight:{type:"union",defaultValue:"regular",options:["regular","bold"]}},args:{children:"Demo text"}},s=n(o=>t.jsx(e,{...o}),"Template"),u=s.bind({}),T=n(()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsx(e,{scale:"s",type:"button",children:"Button text"}),t.jsx(e,{scale:"m",type:"button",children:"Button text"}),t.jsx(e,{scale:"l",type:"button",children:"Button text"})]}),"ButtonTexts"),m=n(()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsx(e,{scale:"s",type:"body",children:"Button text"}),t.jsx(e,{scale:"s",type:"body",weight:"bold",children:"Button text"}),t.jsx(e,{scale:"m",type:"body",children:"Button text"}),t.jsx(e,{scale:"m",type:"body",weight:"bold",children:"Button text"}),t.jsx(e,{scale:"l",type:"body",children:"Button text"}),t.jsx(e,{scale:"l",type:"body",weight:"bold",children:"Button text"})]}),"BodyTexts"),b=["Default","ButtonTexts","BodyTexts"];export{m as BodyTexts,T as ButtonTexts,u as Default,b as __namedExportsOrder,y as default};
//# sourceMappingURL=Text.stories-353290d7.js.map
