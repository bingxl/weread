interface pluginType {
    [index: string]: any;
    run: () => void;
    name?: string;
}