<script>
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    import { Button, Container } from "sveltestrap";
    import Highcharts from "highcharts";
    // import highchartsMore from 'highcharts/highcharts-more';
    // highchartsMore(Highcharts); // enable highcharts-more module

    let API = "/api/v2/association-stats";

    if (dev) API = "http://localhost:12345" + API;

    let associations = [];

    let result = "";
    let resultStatus = "";

    onMount(async () => {
        getAssociations();
    });

    async function getAssociations() {
        resultStatus = result = "";
        const res = await fetch(API, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result = JSON.stringify(data, null, 2);
            associations = data;
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus = status;
    }

    function mapNameToCreationDate(arr) {
        return arr.reduce((acc, obj) => {
            acc[obj.name] = obj.creation_date;
            return acc;
        }, {});
    }

    function createChart(data) {
        // Convert the data to an array of values
        console.log(data);
        const values = Object.values(data);

        // Create the chart using Highcharts
        Highcharts.chart("chart-container", {
            chart: {
                type: "spline",
            },
            title: {
                text: "Asociaciones de Andalucía por fecha de creación",
            },
            xAxis: {
                categories: Object.keys(data),
            },
            yAxis: {
                title: {
                    text: "Values",
                },
                tickInterval: 10, // set the tick interval to 10
                min: 1950,
                max: 2050,
            },
            series: [
                {
                    name: "Asociaciones de Andalucía por fecha de creación",
                    data: values,
                },
            ],
        });
    }
</script>

<Container>
    <div class="my-3">
        <Button
            color="primary"
            on:click={createChart(mapNameToCreationDate(associations))}
            >Cargar gráfica</Button
        >
    </div>
    <div id="chart-container" />
</Container>
