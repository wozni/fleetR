import { AppContext } from '@/core';
import { createStore } from 'vuex'

export default (context: AppContext) => {
    const modules: any = {};
    context.modules
        .filter(m => m.stores)
        .forEach(m => Object.assign(modules, m.stores));
    return createStore({
        modules
    });
}




