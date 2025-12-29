<template>
  <div class="skills-bar-chart">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

const skillsData = [
  { name: 'Technical Writing', score: 96 },
  { name: 'Code Writing', score: 95 },
  { name: 'Pattern Recognition', score: 95 },
  { name: 'Explanation & Teaching', score: 94 },
  { name: 'Context Understanding', score: 94 },
  { name: 'Debugging', score: 93 },
  { name: 'Pattern Recognition', score: 93 },
  { name: 'Adaptive Communication', score: 93 },
  { name: 'Code Review', score: 92 },
  { name: 'Logical Reasoning', score: 92 }
]

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels: skillsData.map(s => s.name),
        datasets: [{
          label: 'Proficiency Score (%)',
          data: skillsData.map(s => s.score),
          backgroundColor: [
            'rgba(16, 185, 129, 0.8)',
            'rgba(16, 185, 129, 0.75)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(59, 130, 246, 0.75)',
            'rgba(59, 130, 246, 0.7)',
            'rgba(99, 102, 241, 0.8)',
            'rgba(99, 102, 241, 0.75)',
            'rgba(99, 102, 241, 0.7)',
            'rgba(139, 92, 246, 0.8)'
          ],
          borderColor: [
            'rgba(16, 185, 129, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(99, 102, 241, 1)',
            'rgba(99, 102, 241, 1)',
            'rgba(99, 102, 241, 1)',
            'rgba(139, 92, 246, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Top 10 Skills by Proficiency',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: 'var(--vp-c-text-1)'
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: 'var(--vp-c-text-2)'
            },
            grid: {
              color: 'var(--vp-c-divider)'
            }
          },
          y: {
            ticks: {
              color: 'var(--vp-c-text-2)',
              font: {
                size: 12
              }
            },
            grid: {
              display: false
            }
          }
        }
      }
    })
  }
})
</script>

<style scoped>
.skills-bar-chart {
  height: 500px;
  margin: 2rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
