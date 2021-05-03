import search from './search';

const plugins: pluginType[] = [
    search,
]

for (const plugin of plugins) {
    if (plugin.run) {
        plugin.run();
    }
}