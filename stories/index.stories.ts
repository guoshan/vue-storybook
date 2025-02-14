/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
// @ts-ignore
import MyButton from './MyButton.vue'
import Welcome from './Welcome'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/vue'
import HelloWorld from '../packages/HelloWorld/index'
import Select from '../packages/Select/index'
import 'element-ui/lib/theme-chalk/index.css'
import someMarkdownText from './someMarkdownText.md'

storiesOf("Welcome", module).add("to Storybook", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf('Component', module).add('With Markdown',() => ({
  components: { MyButton },
  template: `<my-button></my-button>`
}), {notes: { markdown: someMarkdownText }});


storiesOf("Button", module)
  .add("My first button story", () => ({
    components: { MyButton },
    template: `
 <my-button></my-button>
  `
  }))
  .add("Now with some props", () => ({
    components: { MyButton },
    template: `
 <my-button :msg="myMessage" :color="myColor"></my-button>
  `,
    data() {
      return {
        myMessage: "This is finally working",
        myColor: "blue"
      }
    }
  }))
  .add("HelloWorld", () => ({
    components: { HelloWorld },
    template: `<HelloWorld/>`
  }))
  .add('ElSelect', () => ({
    components: { Select },
    data() {
      return {
        list: [
          {
            label: '1',
            prop: 1
          },
          {
            label: '2',
            prop: 2
          }
        ]
      }
    },
    template: `<Select :options="list"/>`
  }))
/* eslint-enable react/react-in-jsx-scope */
