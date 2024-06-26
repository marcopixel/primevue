/**
 *
 * [Live Demo](https://www.primevue.org/dynamicdialog/)
 * @module dialogservice-usedialog
 */
import { Plugin } from 'vue';
import { DynamicDialogInstance, DynamicDialogOptions } from '../dynamicdialogoptions';

declare const plugin: Plugin;
export default plugin;

/**
 * Dynamic Dialog components methods.
 *
 * @group Model
 *
 */
export interface DialogServiceMethods {
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {DynamicDialogOptions} options - DynamicDialog Object
     * @return {@link DynamicDialogInstance}
     */
    open(options?: DynamicDialogOptions): DynamicDialogInstance;
}

declare module 'vue/types/vue' {
    interface Vue {
        $dialog: DialogServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $dialog: DialogServiceMethods;
    }
}
