<template>
  <div class="skills-category-chart">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

const categoryData = [
  { category: 'Software Engineering', count: 7, avgScore: 90 },
  { category: 'Communication', count: 6, avgScore: 90 },
  { category: 'Analysis & Reasoning', count: 4, avgScore: 90 },
  { category: 'Data Science', count: 1, avgScore: 88 },
  { category: 'Specialized Technical', count: 5, avgScore: 85 },
  { category: 'Creative & Problem Solving', count: 4, avgScore: 89 }
]

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: 'doughnut',
      data: {
        labels: categoryData.map(c => c.category),
        datasets: [{
          label: 'Skills Count',
          data: categoryData.map(c => c.count),
          backgroundColor: [
            'rgba(16, 185, 129, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(99, 102, 241, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(251, 146, 60, 0.8)'
          ],
          borderColor: [
            'rgba(16, 185, 129, 1)',
            'rgba(59, 130, 246, 1)',
            'rgba(99, 102, 241, 1)',
            'rgba(139, 92, 246, 1)',
            'rgba(236, 72, 153, 1)',
            'rgba(251, 146, 60, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: 'var(--vp-c-text-1)',
              font: {
                size: 12
              },
              padding: 15
            }
          },
          title: {
            display: true,
            text: 'Skills Distribution by Category',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: 'var(--vp-c-text-1)'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const category = categoryData[context.dataIndex]
                return [
                  `${context.label}: ${context.parsed} skills`,
                  `Avg Score: ${category.avgScore}%`
                ]
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
.skills-category-chart {
  height: 400px;
  margin: 2rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
