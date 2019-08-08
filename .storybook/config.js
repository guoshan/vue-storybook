import { configure,addDecorator } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'

// automatically import all files ending in *.stories.ts
const req = require.context('../stories', true, /.stories.ts$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
addDecorator(withNotes)

configure(loadStories, module)
