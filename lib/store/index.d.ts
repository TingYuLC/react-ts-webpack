declare const rootState: import("redux").Reducer<import("redux").CombinedState<{
    theme: import("./theme/types").ThemeState;
}>, import("redux").AnyAction>;
export declare type AppState = ReturnType<typeof rootState>;
export default rootState;
