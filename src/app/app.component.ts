import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CkEditorComponent } from './ckeditor/ckeditor.component';

@Component({
  standalone: true,
  imports: [FormsModule, CkEditorComponent],
  selector: 'app-root',
  template: `
    <my-ckeditor />

    <!-- <ckeditor
      [editor]="editor"
      [ngModel]="data$()"
      (ngModelChange)="data$.set($event)"
      (ready)="editor$.set($event)"
    /> -->
  `,
})
export class AppComponent {
  // readonly editor = MyEditor;

  // readonly editor$ = signal<undefined | ClassicEditor>(undefined);

  // readonly data$ = signal(data);

  // readonly config: EditorConfig = {
  //   ...this.editor.defaultConfig,
  //   plugins: [
  //     ...this.editor.builtinPlugins,
  //     function (editor) {
  //       console.log('hello');
  //       editor.commands.add('highlight', new HighlightCommand(editor));
  //     },
  //   ],
  // };

  constructor() {
    // effect(() => {
    //   const editor = this.editor$();
    //   if (editor) {
    //     if (!(window as any).editor) (window as any).editor = editor;
    //     editor.model.schema.extend('$text', { allowAttributes: 'highlight' });
    //     // editor.conversion.attributeToElement({
    //     //   model: 'highlight',
    //     //   view: 'mark',
    //     // });
    //     editor.setData('<p>Hello <mark>world</mark>!</p>');
    //     CKEditorInspector.attach(editor);
    //   }
    // });
  }
}
