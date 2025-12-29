<template>
  <div class="meta-skills-radar">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

const metaSkills = [
  { name: 'Pattern Recognition', score: 95 },
  { name: 'Context Understanding', score: 94 },
  { name: 'Adaptive Communication', score: 93 },
  { name: 'Task Decomposition', score: 91 },
  { name: 'Uncertainty Calibration', score: 78 }
]

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: 'radar',
      data: {
        labels: metaSkills.map(s => s.name),
        datasets: [{
          label: 'Meta-Skills Proficiency',
          data: metaSkills.map(s => s.score),
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgba(99, 102, 241, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(99, 102, 241, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Meta-Skills Profile',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: 'var(--vp-c-text-1)'
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              color: 'var(--vp-c-text-2)',
              backdropColor: 'transparent'
            },
            grid: {
              color: 'var(--vp-c-divider)'
            },
            pointLabels: {
              color: 'var(--vp-c-text-1)',
              font: {
                size: 12,
                weight: '500'
              }
            }
          }
        }
      }
    })
  }
})
</script>

<style scoped>
.meta-skills-radar {
  height: 400px;
  margin: 2rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
