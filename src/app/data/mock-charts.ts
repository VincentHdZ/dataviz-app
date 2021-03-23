import { Chart } from '../_models/chart';

export const CHARTS: Chart[] = [
    {
        id: 1,
        title: "Bar Chart",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "./assets/bar-chart.png",
        specUrl: "https://vega.github.io/vega/examples/bar-chart.vg.json",
        spec: {}
    },
    {
        id: 2,
        title: "Stacked Area Chart",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "./assets/stacked-area-chart.png",
        specUrl: "https://vega.github.io/vega/examples/stacked-area-chart.vg.json",
        spec: {}
    },
    {
        id: 3,
        title: "Radial Plot",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imageUrl: "./assets/radial-plot.png",
        specUrl: "https://vega.github.io/vega/examples/radial-plot.vg.json",
        spec: {}
    }
];