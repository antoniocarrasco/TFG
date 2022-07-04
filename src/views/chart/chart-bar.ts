import { defineComponent, h, PropType } from 'vue'

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
) 

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    labels: {
      type: Array as PropType<any[]>,
      default: null
    },
    datasets: {
      type: Array as PropType<any[]>,
      default: null
    },
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      // default: () => {}
    },
    plugins: {
      type: Array as PropType<Plugin<'bar'>[]>,
      // default: () => []
    }
  },
  setup(props) {
    const chartData = {
      labels: props.labels,
      datasets: props.datasets
    }
    

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    }

    return () =>
      h(Bar, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})
