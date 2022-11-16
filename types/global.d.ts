// Types for compiled templates
declare module 'ember-template-equality-operators-polyfill/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
