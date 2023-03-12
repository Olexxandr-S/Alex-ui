import { create } from "@storybook/theming";

export default create({
    base: "light",
    brandTitle: "My custom storybook",
    brandImage:
        "https://video-recomendations.netlify.app/static/media/signature.ebec75695f25fa982bfc.png",
    brandTarget: "_self",
    fontBase: '"Open Sans", sans-serif',
    appBg: "linear-gradient(90deg, #f1f5fe 0%, #f8fafb 100%)",
    appBorderRadius: 8,
    colorPrimary: "#FF868E",
    colorSecondary: "#060606",
});
