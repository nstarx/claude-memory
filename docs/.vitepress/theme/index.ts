import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SkillsBarChart from './components/SkillsBarChart.vue'
import SkillsCategoryChart from './components/SkillsCategoryChart.vue'
import MetaSkillsRadar from './components/MetaSkillsRadar.vue'
import SkillsOverview from './components/SkillsOverview.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SkillsBarChart', SkillsBarChart)
    app.component('SkillsCategoryChart', SkillsCategoryChart)
    app.component('MetaSkillsRadar', MetaSkillsRadar)
    app.component('SkillsOverview', SkillsOverview)
  }
}
