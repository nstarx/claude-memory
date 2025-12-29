<template>
  <div class="skills-overview">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value">27</div>
        <div class="stat-label">Total Skills Tracked</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-value">89%</div>
        <div class="stat-label">Average Proficiency</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🏆</div>
        <div class="stat-value">96%</div>
        <div class="stat-label">Highest Score</div>
        <div class="stat-sublabel">Technical Writing</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-value">10</div>
        <div class="stat-label">Skills Above 90%</div>
      </div>
    </div>

    <div class="category-summary">
      <h3>Skills by Category</h3>
      <div class="category-bars">
        <div v-for="cat in categories" :key="cat.name" class="category-bar">
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-count">{{ cat.count }} skills</span>
          </div>
          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{
                width: cat.avgScore + '%',
                backgroundColor: cat.color
              }"
            >
              <span class="progress-text">{{ cat.avgScore }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Software Engineering', count: 7, avgScore: 90, color: '#10b981' },
  { name: 'Communication', count: 6, avgScore: 90, color: '#3b82f6' },
  { name: 'Analysis & Reasoning', count: 4, avgScore: 90, color: '#6366f1' },
  { name: 'Creative & Problem Solving', count: 4, avgScore: 89, color: '#f59e0b' },
  { name: 'Data Science', count: 1, avgScore: 88, color: '#8b5cf6' },
  { name: 'Specialized Technical', count: 5, avgScore: 85, color: '#ec4899' }
]
</script>

<style scoped>
.skills-overview {
  margin: 2rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.stat-sublabel {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 0.25rem;
}

.category-summary {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.category-summary h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
}

.category-bars {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.category-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
}

.category-count {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.progress-bar {
  height: 28px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.progress-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.75rem;
  transition: width 1s ease-out;
  position: relative;
}

.progress-text {
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-value {
    font-size: 2rem;
  }
}
</style>
