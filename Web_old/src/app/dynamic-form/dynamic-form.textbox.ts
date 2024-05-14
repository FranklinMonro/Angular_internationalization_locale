import { DynamicForm } from './dynamic-form.class';

export class TextboxControl extends DynamicForm<string> {
  override controlType = 'textbox';
}
