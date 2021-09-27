import { AppContext, RootState } from '@/core';
import { createStore, Store } from 'vuex'

export default (context: AppContext): Store<RootState> => {
    const modules = {};
    context.modules
        .filter(m => m.stores)
        .forEach(m => Object.assign(modules, m.stores));
    return createStore<RootState>({
        modules
    });
}




