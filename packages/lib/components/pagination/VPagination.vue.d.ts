declare const _default: import("vue").DefineComponent<{
    length: {
        type: NumberConstructor;
        default: number;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
}, {
    currentIndex: import("vue").Ref<number>;
    prev: () => void;
    next: () => void;
    go: (index: number) => void;
    totalPages: import("vue").ComputedRef<number>;
    paginations: import("vue").ComputedRef<number[]>;
    showPrevMore: import("vue").Ref<boolean>;
    showNextMore: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    length: number;
    index: number;
    size: number;
    total: number;
} & {}>, {
    length: number;
    index: number;
    size: number;
    total: number;
}>;
export default _default;
//# sourceMappingURL=VPagination.vue?vue&type=script&lang.d.ts.map