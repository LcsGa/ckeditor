declare module '@ckeditor/ckeditor5-inspector' {
  import { Editor } from '@ckeditor/ckeditor5-core';

  export default class CKEditorInspector {
    static attach(
      editorOrConfig: Editor | Record<string, Editor>,
      options?: { isCollapsed?: boolean }
    ): string[];
  }
}
