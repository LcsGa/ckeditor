import { Component, ElementRef, inject } from '@angular/core';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

@Component({
  standalone: true,
  selector: 'my-ckeditor',
  styles: [':host { display: block }'],
  template: '<div #editor></div>',
})
export class CkEditorComponent {
  constructor() {
    ClassicEditor.create(inject(ElementRef).nativeElement, {
      plugins: [CodeBlock],
      toolbar: ['codeBlock'],
    })
      .then((editor) => console.log(editor))
      .catch(console.error);
  }
}
