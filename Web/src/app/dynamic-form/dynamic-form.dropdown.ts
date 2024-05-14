import { DynamicForm } from './dynamic-form.class';

export class DropdownControl extends DynamicForm<string> {
  override controlType = 'dropdown';
}
