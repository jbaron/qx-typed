// Generated declaration file at Mon Jan 23 2023 08:28:01 GMT+0100 (Central European Standard Time)

interface IMap {
    [key: string]: any;
}

declare module qx.registry {
    function registerMainMethod(fn: (app: qx.application.Standalone) => void): void;
}

type Integer = number

declare module qx.ui.decoration {
    class MBackgroundImage {
        protected _styleBackgroundImage(styles: IMap): void;
        protected _applyBackgroundImage(): void;
        protected _applyBackgroundPosition(): void;
        getBackgroundImage(): any;
        setBackgroundImage(value: any): void;
        resetBackgroundImage(): void;
        getBackgroundRepeat(): any;
        setBackgroundRepeat(value: any): void;
        resetBackgroundRepeat(): void;
        getBackgroundPositionX(): any;
        setBackgroundPositionX(value: any): void;
        resetBackgroundPositionX(): void;
        getBackgroundPositionY(): any;
        setBackgroundPositionY(value: any): void;
        resetBackgroundPositionY(): void;
        getBackgroundOrigin(): any;
        setBackgroundOrigin(value: any): void;
        resetBackgroundOrigin(): void;
        setBackgroundPosition(value: any): void;
        resetBackgroundPosition(): void;
        getOrderGradientsFront(): boolean;
        isOrderGradientsFront(): boolean;
        setOrderGradientsFront(value: boolean): void;
        resetOrderGradientsFront(): void;

    }
}
declare module qx.ui.decoration {
    class MLinearBackgroundGradient {
        protected _styleLinearBackgroundGradient(styles: IMap): void;
        protected _applyLinearBackgroundGradient(): void;
        getStartColor(): any;
        setStartColor(value: any): void;
        resetStartColor(): void;
        getEndColor(): any;
        setEndColor(value: any): void;
        resetEndColor(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getStartColorPosition(): any;
        setStartColorPosition(value: any): void;
        resetStartColorPosition(): void;
        getEndColorPosition(): any;
        setEndColorPosition(value: any): void;
        resetEndColorPosition(): void;
        getColorPositionUnit(): any;
        setColorPositionUnit(value: any): void;
        resetColorPositionUnit(): void;
        setGradientStart(value: any): void;
        resetGradientStart(): void;
        setGradientEnd(value: any): void;
        resetGradientEnd(): void;

    }
}
declare module qx.ui.decoration {
    class MBorderRadius {
        protected _styleBorderRadius(styles: IMap): void;
        protected _applyBorderRadius(): void;
        getRadiusTopLeft(): number;
        setRadiusTopLeft(value: number): void;
        resetRadiusTopLeft(): void;
        getRadiusTopRight(): number;
        setRadiusTopRight(value: number): void;
        resetRadiusTopRight(): void;
        getRadiusBottomLeft(): number;
        setRadiusBottomLeft(value: number): void;
        resetRadiusBottomLeft(): void;
        getRadiusBottomRight(): number;
        setRadiusBottomRight(value: number): void;
        resetRadiusBottomRight(): void;
        setRadius(value: any): void;
        resetRadius(): void;

    }
}
declare module qx.ui.decoration {
    interface IDecorator {
        getStyles(): IMap;
        getPadding(): IMap;
        getInsets(): IMap;

    }
}
declare module qx.ui.decoration {
    class MBorderImage {
        protected _styleBorderImage(styles: IMap): void;
        protected _getDefaultInsetsForBorderImage(): IMap;
        protected _applyBorderImage(): void;
        getBorderImage(): string;
        setBorderImage(value: string): void;
        resetBorderImage(): void;
        getSliceTop(): number;
        setSliceTop(value: number): void;
        resetSliceTop(): void;
        getSliceRight(): number;
        setSliceRight(value: number): void;
        resetSliceRight(): void;
        getSliceBottom(): number;
        setSliceBottom(value: number): void;
        resetSliceBottom(): void;
        getSliceLeft(): number;
        setSliceLeft(value: number): void;
        resetSliceLeft(): void;
        setSlice(value: any): void;
        resetSlice(): void;
        getRepeatX(): any;
        setRepeatX(value: any): void;
        resetRepeatX(): void;
        getRepeatY(): any;
        setRepeatY(value: any): void;
        resetRepeatY(): void;
        setRepeat(value: any): void;
        resetRepeat(): void;
        getFill(): boolean;
        isFill(): boolean;
        setFill(value: boolean): void;
        resetFill(): void;
        getBorderImageMode(): any;
        setBorderImageMode(value: any): void;
        resetBorderImageMode(): void;

    }
}
declare module qx.ui.decoration {
    class MBoxShadow {
        protected _styleBoxShadow(styles: IMap): void;
        protected _applyBoxShadow(): void;
        getShadowHorizontalLength(): any;
        setShadowHorizontalLength(value: any): void;
        resetShadowHorizontalLength(): void;
        getShadowVerticalLength(): any;
        setShadowVerticalLength(value: any): void;
        resetShadowVerticalLength(): void;
        getShadowBlurRadius(): any;
        setShadowBlurRadius(value: any): void;
        resetShadowBlurRadius(): void;
        getShadowSpreadRadius(): any;
        setShadowSpreadRadius(value: any): void;
        resetShadowSpreadRadius(): void;
        getShadowColor(): any;
        setShadowColor(value: any): void;
        resetShadowColor(): void;
        getInset(): any;
        setInset(value: any): void;
        resetInset(): void;
        setShadowLength(value: any): void;
        resetShadowLength(): void;

    }
}
declare module qx.ui.decoration {
    class Decorator extends qx.ui.decoration.Abstract implements qx.ui.decoration.IDecorator {
        getStyles(): IMap;
        getPadding(): IMap;
        getInsets(): IMap;
        protected _styleBackgroundColor(styles: IMap): void;
        protected _applyBackgroundColor(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        protected _styleBorderRadius(styles: IMap): void;
        protected _applyBorderRadius(): void;
        getRadiusTopLeft(): number;
        setRadiusTopLeft(value: number): void;
        resetRadiusTopLeft(): void;
        getRadiusTopRight(): number;
        setRadiusTopRight(value: number): void;
        resetRadiusTopRight(): void;
        getRadiusBottomLeft(): number;
        setRadiusBottomLeft(value: number): void;
        resetRadiusBottomLeft(): void;
        getRadiusBottomRight(): number;
        setRadiusBottomRight(value: number): void;
        resetRadiusBottomRight(): void;
        setRadius(value: any): void;
        resetRadius(): void;
        protected _styleBoxShadow(styles: IMap): void;
        protected _applyBoxShadow(): void;
        getShadowHorizontalLength(): any;
        setShadowHorizontalLength(value: any): void;
        resetShadowHorizontalLength(): void;
        getShadowVerticalLength(): any;
        setShadowVerticalLength(value: any): void;
        resetShadowVerticalLength(): void;
        getShadowBlurRadius(): any;
        setShadowBlurRadius(value: any): void;
        resetShadowBlurRadius(): void;
        getShadowSpreadRadius(): any;
        setShadowSpreadRadius(value: any): void;
        resetShadowSpreadRadius(): void;
        getShadowColor(): any;
        setShadowColor(value: any): void;
        resetShadowColor(): void;
        getInset(): any;
        setInset(value: any): void;
        resetInset(): void;
        setShadowLength(value: any): void;
        resetShadowLength(): void;
        protected _applyDoubleBorder(): void;
        getWidthTop(): number;
        setWidthTop(value: number): void;
        resetWidthTop(): void;
        getWidthRight(): number;
        setWidthRight(value: number): void;
        resetWidthRight(): void;
        getWidthBottom(): number;
        setWidthBottom(value: number): void;
        resetWidthBottom(): void;
        getWidthLeft(): number;
        setWidthLeft(value: number): void;
        resetWidthLeft(): void;
        getStyleTop(): any;
        setStyleTop(value: any): void;
        resetStyleTop(): void;
        getStyleRight(): any;
        setStyleRight(value: any): void;
        resetStyleRight(): void;
        getStyleBottom(): any;
        setStyleBottom(value: any): void;
        resetStyleBottom(): void;
        getStyleLeft(): any;
        setStyleLeft(value: any): void;
        resetStyleLeft(): void;
        getColorTop(): string;
        setColorTop(value: string): void;
        resetColorTop(): void;
        getColorRight(): string;
        setColorRight(value: string): void;
        resetColorRight(): void;
        getColorBottom(): string;
        setColorBottom(value: string): void;
        resetColorBottom(): void;
        getColorLeft(): string;
        setColorLeft(value: string): void;
        resetColorLeft(): void;
        setLeft(value: any): void;
        resetLeft(): void;
        setRight(value: any): void;
        resetRight(): void;
        setTop(value: any): void;
        resetTop(): void;
        setBottom(value: any): void;
        resetBottom(): void;
        setWidth(value: any): void;
        resetWidth(): void;
        setStyle(value: any): void;
        resetStyle(): void;
        setColor(value: any): void;
        resetColor(): void;
        getInnerWidthTop(): number;
        setInnerWidthTop(value: number): void;
        resetInnerWidthTop(): void;
        getInnerWidthRight(): number;
        setInnerWidthRight(value: number): void;
        resetInnerWidthRight(): void;
        getInnerWidthBottom(): number;
        setInnerWidthBottom(value: number): void;
        resetInnerWidthBottom(): void;
        getInnerWidthLeft(): number;
        setInnerWidthLeft(value: number): void;
        resetInnerWidthLeft(): void;
        setInnerWidth(value: any): void;
        resetInnerWidth(): void;
        getInnerColorTop(): string;
        setInnerColorTop(value: string): void;
        resetInnerColorTop(): void;
        getInnerColorRight(): string;
        setInnerColorRight(value: string): void;
        resetInnerColorRight(): void;
        getInnerColorBottom(): string;
        setInnerColorBottom(value: string): void;
        resetInnerColorBottom(): void;
        getInnerColorLeft(): string;
        setInnerColorLeft(value: string): void;
        resetInnerColorLeft(): void;
        setInnerColor(value: any): void;
        resetInnerColor(): void;
        getInnerOpacity(): number;
        setInnerOpacity(value: number): void;
        resetInnerOpacity(): void;
        protected _styleLinearBackgroundGradient(styles: IMap): void;
        protected _applyLinearBackgroundGradient(): void;
        getStartColor(): any;
        setStartColor(value: any): void;
        resetStartColor(): void;
        getEndColor(): any;
        setEndColor(value: any): void;
        resetEndColor(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getStartColorPosition(): any;
        setStartColorPosition(value: any): void;
        resetStartColorPosition(): void;
        getEndColorPosition(): any;
        setEndColorPosition(value: any): void;
        resetEndColorPosition(): void;
        getColorPositionUnit(): any;
        setColorPositionUnit(value: any): void;
        resetColorPositionUnit(): void;
        setGradientStart(value: any): void;
        resetGradientStart(): void;
        setGradientEnd(value: any): void;
        resetGradientEnd(): void;
        protected _styleBorderImage(styles: IMap): void;
        protected _getDefaultInsetsForBorderImage(): IMap;
        protected _applyBorderImage(): void;
        getBorderImage(): string;
        setBorderImage(value: string): void;
        resetBorderImage(): void;
        getSliceTop(): number;
        setSliceTop(value: number): void;
        resetSliceTop(): void;
        getSliceRight(): number;
        setSliceRight(value: number): void;
        resetSliceRight(): void;
        getSliceBottom(): number;
        setSliceBottom(value: number): void;
        resetSliceBottom(): void;
        getSliceLeft(): number;
        setSliceLeft(value: number): void;
        resetSliceLeft(): void;
        setSlice(value: any): void;
        resetSlice(): void;
        getRepeatX(): any;
        setRepeatX(value: any): void;
        resetRepeatX(): void;
        getRepeatY(): any;
        setRepeatY(value: any): void;
        resetRepeatY(): void;
        setRepeat(value: any): void;
        resetRepeat(): void;
        getFill(): boolean;
        isFill(): boolean;
        setFill(value: boolean): void;
        resetFill(): void;
        getBorderImageMode(): any;
        setBorderImageMode(value: any): void;
        resetBorderImageMode(): void;
        protected _styleTransition(styles: IMap): void;
        protected _applyTransition(): void;
        getTransitionProperty(): any;
        setTransitionProperty(value: any): void;
        resetTransitionProperty(): void;
        getTransitionDuration(): any;
        setTransitionDuration(value: any): void;
        resetTransitionDuration(): void;
        getTransitionTimingFunction(): any;
        setTransitionTimingFunction(value: any): void;
        resetTransitionTimingFunction(): void;
        getTransitionDelay(): any;
        setTransitionDelay(value: any): void;
        resetTransitionDelay(): void;
        protected _getStyles(): IMap;
        protected _getExtendedPropertyValueArrays(propertyNames: qx.data.Array): qx.data.Array;
        getBackgroundImage(): any;
        setBackgroundImage(value: any): void;
        resetBackgroundImage(): void;
        getBackgroundRepeat(): any;
        setBackgroundRepeat(value: any): void;
        resetBackgroundRepeat(): void;
        getBackgroundPositionX(): any;
        setBackgroundPositionX(value: any): void;
        resetBackgroundPositionX(): void;
        getBackgroundPositionY(): any;
        setBackgroundPositionY(value: any): void;
        resetBackgroundPositionY(): void;
        getBackgroundOrigin(): any;
        setBackgroundOrigin(value: any): void;
        resetBackgroundOrigin(): void;
        setBackgroundPosition(value: any): void;
        resetBackgroundPosition(): void;
        getOrderGradientsFront(): boolean;
        isOrderGradientsFront(): boolean;
        setOrderGradientsFront(value: boolean): void;
        resetOrderGradientsFront(): void;

    }
}
declare module qx.ui.decoration {
    class MDoubleBorder {
        protected _styleBorder(styles: IMap): void;
        protected _getDefaultInsetsForBorder(): any;
        protected _applyWidth(): void;
        protected _applyStyle(): void;
        getWidthTop(): number;
        setWidthTop(value: number): void;
        resetWidthTop(): void;
        getWidthRight(): number;
        setWidthRight(value: number): void;
        resetWidthRight(): void;
        getWidthBottom(): number;
        setWidthBottom(value: number): void;
        resetWidthBottom(): void;
        getWidthLeft(): number;
        setWidthLeft(value: number): void;
        resetWidthLeft(): void;
        getStyleTop(): any;
        setStyleTop(value: any): void;
        resetStyleTop(): void;
        getStyleRight(): any;
        setStyleRight(value: any): void;
        resetStyleRight(): void;
        getStyleBottom(): any;
        setStyleBottom(value: any): void;
        resetStyleBottom(): void;
        getStyleLeft(): any;
        setStyleLeft(value: any): void;
        resetStyleLeft(): void;
        getColorTop(): string;
        setColorTop(value: string): void;
        resetColorTop(): void;
        getColorRight(): string;
        setColorRight(value: string): void;
        resetColorRight(): void;
        getColorBottom(): string;
        setColorBottom(value: string): void;
        resetColorBottom(): void;
        getColorLeft(): string;
        setColorLeft(value: string): void;
        resetColorLeft(): void;
        setLeft(value: any): void;
        resetLeft(): void;
        setRight(value: any): void;
        resetRight(): void;
        setTop(value: any): void;
        resetTop(): void;
        setBottom(value: any): void;
        resetBottom(): void;
        setWidth(value: any): void;
        resetWidth(): void;
        setStyle(value: any): void;
        resetStyle(): void;
        setColor(value: any): void;
        resetColor(): void;
        protected _styleBackgroundImage(styles: IMap): void;
        protected _applyBackgroundImage(): void;
        protected _applyBackgroundPosition(): void;
        getBackgroundImage(): any;
        setBackgroundImage(value: any): void;
        resetBackgroundImage(): void;
        getBackgroundRepeat(): any;
        setBackgroundRepeat(value: any): void;
        resetBackgroundRepeat(): void;
        getBackgroundPositionX(): any;
        setBackgroundPositionX(value: any): void;
        resetBackgroundPositionX(): void;
        getBackgroundPositionY(): any;
        setBackgroundPositionY(value: any): void;
        resetBackgroundPositionY(): void;
        getBackgroundOrigin(): any;
        setBackgroundOrigin(value: any): void;
        resetBackgroundOrigin(): void;
        setBackgroundPosition(value: any): void;
        resetBackgroundPosition(): void;
        getOrderGradientsFront(): boolean;
        isOrderGradientsFront(): boolean;
        setOrderGradientsFront(value: boolean): void;
        resetOrderGradientsFront(): void;
        protected _applyDoubleBorder(): void;
        getInnerWidthTop(): number;
        setInnerWidthTop(value: number): void;
        resetInnerWidthTop(): void;
        getInnerWidthRight(): number;
        setInnerWidthRight(value: number): void;
        resetInnerWidthRight(): void;
        getInnerWidthBottom(): number;
        setInnerWidthBottom(value: number): void;
        resetInnerWidthBottom(): void;
        getInnerWidthLeft(): number;
        setInnerWidthLeft(value: number): void;
        resetInnerWidthLeft(): void;
        setInnerWidth(value: any): void;
        resetInnerWidth(): void;
        getInnerColorTop(): string;
        setInnerColorTop(value: string): void;
        resetInnerColorTop(): void;
        getInnerColorRight(): string;
        setInnerColorRight(value: string): void;
        resetInnerColorRight(): void;
        getInnerColorBottom(): string;
        setInnerColorBottom(value: string): void;
        resetInnerColorBottom(): void;
        getInnerColorLeft(): string;
        setInnerColorLeft(value: string): void;
        resetInnerColorLeft(): void;
        setInnerColor(value: any): void;
        resetInnerColor(): void;
        getInnerOpacity(): number;
        setInnerOpacity(value: number): void;
        resetInnerOpacity(): void;

    }
}
declare module qx.ui.decoration {
    class MTransition {
        protected _styleTransition(styles: IMap): void;
        protected _applyTransition(): void;
        getTransitionProperty(): any;
        setTransitionProperty(value: any): void;
        resetTransitionProperty(): void;
        getTransitionDuration(): any;
        setTransitionDuration(value: any): void;
        resetTransitionDuration(): void;
        getTransitionTimingFunction(): any;
        setTransitionTimingFunction(value: any): void;
        resetTransitionTimingFunction(): void;
        getTransitionDelay(): any;
        setTransitionDelay(value: any): void;
        resetTransitionDelay(): void;

    }
}
declare module qx.ui.decoration {
    class MSingleBorder {
        protected _styleBorder(styles: IMap): void;
        protected _getDefaultInsetsForBorder(): any;
        protected _applyWidth(): void;
        protected _applyStyle(): void;
        getWidthTop(): number;
        setWidthTop(value: number): void;
        resetWidthTop(): void;
        getWidthRight(): number;
        setWidthRight(value: number): void;
        resetWidthRight(): void;
        getWidthBottom(): number;
        setWidthBottom(value: number): void;
        resetWidthBottom(): void;
        getWidthLeft(): number;
        setWidthLeft(value: number): void;
        resetWidthLeft(): void;
        getStyleTop(): any;
        setStyleTop(value: any): void;
        resetStyleTop(): void;
        getStyleRight(): any;
        setStyleRight(value: any): void;
        resetStyleRight(): void;
        getStyleBottom(): any;
        setStyleBottom(value: any): void;
        resetStyleBottom(): void;
        getStyleLeft(): any;
        setStyleLeft(value: any): void;
        resetStyleLeft(): void;
        getColorTop(): string;
        setColorTop(value: string): void;
        resetColorTop(): void;
        getColorRight(): string;
        setColorRight(value: string): void;
        resetColorRight(): void;
        getColorBottom(): string;
        setColorBottom(value: string): void;
        resetColorBottom(): void;
        getColorLeft(): string;
        setColorLeft(value: string): void;
        resetColorLeft(): void;
        setLeft(value: any): void;
        resetLeft(): void;
        setRight(value: any): void;
        resetRight(): void;
        setTop(value: any): void;
        resetTop(): void;
        setBottom(value: any): void;
        resetBottom(): void;
        setWidth(value: any): void;
        resetWidth(): void;
        setStyle(value: any): void;
        resetStyle(): void;
        setColor(value: any): void;
        resetColor(): void;

    }
}
declare module qx.ui.decoration {
    class Abstract extends qx.core.Object implements qx.ui.decoration.IDecorator {
        getStyles(): IMap;
        getPadding(): IMap;
        getInsets(): IMap;
        protected _getDefaultInsets(): IMap;
        protected _isInitialized(): boolean;
        protected _resetInsets(): void;

    }
}
declare module qx.ui.decoration {
    class MBackgroundColor {
        protected _styleBackgroundColor(styles: IMap): void;
        protected _applyBackgroundColor(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;

    }
}
declare module qx.ui.tree {
    class TreeFile extends qx.ui.tree.core.AbstractTreeItem {
        getOpen(): boolean;
        isOpen(): boolean;
        setOpen(value: boolean): void;
        resetOpen(): void;
        getOpenSymbolMode(): any;
        setOpenSymbolMode(value: any): void;
        resetOpenSymbolMode(): void;
        getIndent(): number;
        setIndent(value: number): void;
        resetIndent(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getIconOpened(): string;
        setIconOpened(value: string): void;
        resetIconOpened(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getParent(): qx.ui.tree.core.AbstractTreeItem;
        setParent(value: qx.ui.tree.core.AbstractTreeItem): void;
        resetParent(): void;

    }
}
declare module qx.ui.tree.core {
    class AbstractTreeItem extends qx.ui.tree.core.AbstractItem {
        getTree(): qx.ui.tree.Tree | null;
        hasChildrenContainer(): boolean;
        getParentChildrenContainer(): qx.ui.core.Widget;
        getChildren(): qx.ui.tree.core.AbstractTreeItem[];
        getItems(recursive?: boolean, invisible?: boolean, ignoreFirst?: boolean): qx.ui.tree.core.AbstractTreeItem[];
        recursiveAddToWidgetQueue(): void;
        add(...varargs: qx.ui.tree.core.AbstractTreeItem[]): void;
        addAt(treeItem: qx.ui.tree.core.AbstractTreeItem, index: number): void;
        addBefore(treeItem: qx.ui.tree.core.AbstractTreeItem, before: qx.ui.tree.core.AbstractTreeItem): void;
        addAfter(treeItem: qx.ui.tree.core.AbstractTreeItem, after: qx.ui.tree.core.AbstractTreeItem): void;
        addAtBegin(treeItem: qx.ui.tree.core.AbstractTreeItem): void;
        remove(...varargs: qx.ui.tree.core.AbstractTreeItem[]): void;
        removeAt(index: number): void;
        removeAll(): void;
        getParent(): qx.ui.tree.core.AbstractTreeItem;
        setParent(value: qx.ui.tree.core.AbstractTreeItem): void;
        resetParent(): void;

    }
}
declare module qx.ui.tree.core {
    class AbstractItem extends qx.ui.core.Widget implements qx.ui.form.IModel {
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyModel(): void;
        constructor(label?: string);
        protected _addWidgets(): void;
        addWidget(widget: qx.ui.core.Widget, options?: IMap): void;
        addSpacer(): void;
        addOpenButton(): void;
        protected _onChangeOpen(e: qx.event.type.Data): void;
        addIcon(): void;
        addLabel(text?: string): void;
        protected _applyIcon(): void;
        protected _applyIconOpened(): void;
        protected _applyLabel(): void;
        protected _applyOpen(): void;
        isOpenable(): boolean;
        protected _shouldShowOpenSymbol(): boolean;
        protected _applyOpenSymbolMode(): void;
        protected _updateIndent(): void;
        protected _applyIndent(): void;
        getLevel(): number | null;
        hasChildren(): boolean;
        getOpen(): boolean;
        isOpen(): boolean;
        setOpen(value: boolean): void;
        resetOpen(): void;
        getOpenSymbolMode(): any;
        setOpenSymbolMode(value: any): void;
        resetOpenSymbolMode(): void;
        getIndent(): number;
        setIndent(value: number): void;
        resetIndent(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getIconOpened(): string;
        setIconOpened(value: string): void;
        resetIconOpened(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;

    }
}
declare module qx.ui.tree.core {
    class FolderOpenButton extends qx.ui.basic.Image {
        execute(): void;
        protected _applyCommand(): void;
        getCommand(): qx.ui.command.Command;
        setCommand(value: qx.ui.command.Command): void;
        resetCommand(): void;
        protected _applyOpen(): void;
        protected _stopPropagation(e: qx.event.type.Event): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        getOpen(): boolean;
        isOpen(): boolean;
        setOpen(value: boolean): void;
        resetOpen(): void;

    }
}
declare module qx.ui.tree.core {
    interface IVirtualTree {
        isShowTopLevelOpenCloseIcons(): boolean;
        getLookupTable(): qx.data.Array;
        isNode(item: qx.core.Object): boolean;
        isNodeOpen(node: qx.core.Object): boolean;
        getLevel(row: number): number;
        hasChildren(node: qx.core.Object): boolean;
        openNode(node: qx.core.Object): void;
        openNodeWithoutScrolling(node: qx.core.Object): void;
        closeNode(node: qx.core.Object): void;
        closeNodeWithoutScrolling(node: qx.core.Object): void;
        getSelection(): qx.data.Array;

    }
}
declare module qx.ui.tree.core {
    class MWidgetController {
        bindDefaultProperties(item: qx.ui.core.Widget, index: number): void;
        bindProperty(sourcePath: string | null, targetProperty: string, options: IMap | null, targetWidget: qx.ui.core.Widget, index: number): void;
        bindPropertyReverse(targetPath: string | null, sourceProperty: string, options: IMap | null, sourceWidget: qx.ui.core.Widget, index: number): void;
        removeBindings(): void;
        protected _bindItem(item: qx.ui.core.Widget, index: number): void;
        protected _removeBindingsFrom(item: qx.ui.core.Widget): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getChildProperty(): string;
        setChildProperty(value: string): void;
        resetChildProperty(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.tree.core {
    class OpenCloseController extends qx.core.Object {
        constructor(tree?: qx.ui.tree.VirtualTree, rootModel?: qx.data.Array);
        protected _onOpen(): void;
        protected _onClose(): void;
        protected _onChangeBubble(): void;

    }
}
declare module qx.ui.tree.core {
    class Util {
        static isNode(node: qx.core.Object, childProperty: string): boolean;
        static hasChildren(node: qx.core.Object, childProperty: string, ignoreLeafs?: boolean): boolean;

    }
}
declare module qx.ui.tree.core {
    interface IVirtualTreeDelegate {
        configureItem(item: qx.ui.core.Widget): void;
        createItem(): qx.ui.core.Widget;
        bindItem(controller: qx.ui.list.core.MWidgetController, item: qx.ui.core.Widget, id: number): void;
        onPool(item: qx.ui.core.Widget): void;
        filter(data: any): boolean;
        sorter(a: any, b: any): number;

    }
}
declare module qx.ui.tree {
    class VirtualTreeItem extends qx.ui.tree.core.AbstractItem {
        protected _onChangeLength(): void;
        protected _onChangeChildProperty(e: qx.event.type.Data): void;
        getOpen(): boolean;
        isOpen(): boolean;
        setOpen(value: boolean): void;
        resetOpen(): void;
        getOpenSymbolMode(): any;
        setOpenSymbolMode(value: any): void;
        resetOpenSymbolMode(): void;
        getIndent(): number;
        setIndent(value: number): void;
        resetIndent(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getIconOpened(): string;
        setIconOpened(value: string): void;
        resetIconOpened(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;

    }
}
declare module qx.ui.tree.provider {
    interface IVirtualTreeProvider {
        createLayer(): qx.ui.virtual.layer.Abstract;
        createRenderer(): any;
        setChildProperty(value: string): void;
        setLabelPath(value: string): void;
        styleSelectabled(row: number): void;
        styleUnselectabled(row: number): void;
        isSelectable(row: number): boolean;

    }
}
declare module qx.ui.tree.provider {
    class WidgetProvider extends qx.core.Object implements qx.ui.virtual.core.IWidgetCellProvider, qx.ui.tree.provider.IVirtualTreeProvider {
        getCellWidget(row: number, column: number): qx.ui.core.LayoutItem;
        poolCellWidget(widget: qx.ui.core.LayoutItem): void;
        createLayer(): qx.ui.virtual.layer.Abstract;
        createRenderer(): any;
        setChildProperty(value: string): void;
        setLabelPath(value: string): void;
        styleSelectabled(row: number): void;
        styleUnselectabled(row: number): void;
        isSelectable(row: number): boolean;
        bindDefaultProperties(item: qx.ui.core.Widget, index: number): void;
        bindProperty(sourcePath: string | null, targetProperty: string, options: IMap | null, targetWidget: qx.ui.core.Widget, index: number): void;
        bindPropertyReverse(targetPath: string | null, sourceProperty: string, options: IMap | null, sourceWidget: qx.ui.core.Widget, index: number): void;
        removeBindings(): void;
        protected _bindItem(item: qx.ui.core.Widget, index: number): void;
        protected _removeBindingsFrom(item: qx.ui.core.Widget): void;
        getLabelPath(): string;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getChildProperty(): string;
        resetChildProperty(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        constructor(tree?: qx.ui.tree.VirtualTree);
        protected _styleSelectabled(widget: qx.ui.core.Widget): void;
        protected _styleUnselectabled(widget: qx.ui.core.Widget): void;
        protected _onPool(item: qx.ui.core.Widget): void;
        protected _onItemCreated(event: qx.event.type.Data): void;
        protected _onChangeDelegate(event: qx.event.type.Data): void;

    }
}
declare module qx.ui.tree {
    class VirtualTree extends qx.ui.virtual.core.Scroller implements qx.ui.tree.core.IVirtualTree, qx.data.controller.ISelection {
        isShowTopLevelOpenCloseIcons(): boolean;
        getLookupTable(): qx.data.Array;
        isNode(item: qx.core.Object): boolean;
        isNodeOpen(node: qx.core.Object): boolean;
        getLevel(row: number): number;
        hasChildren(node: qx.core.Object): boolean;
        openNode(node: qx.core.Object): void;
        openNodeWithoutScrolling(node: qx.core.Object): void;
        closeNode(node: qx.core.Object): void;
        closeNodeWithoutScrolling(node: qx.core.Object): void;
        getSelection(): qx.data.Array;
        setSelection(value: qx.data.IListData): void;
        resetSelection(): void;
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _initSelectionManager(): void;
        setAutoScrollIntoView(value: boolean): void;
        getAutoScrollIntoView(): boolean;
        protected _updateSelection(): void;
        initSelection(value: qx.data.Array): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array): void;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onChangeSelection(e: qx.event.type.Data): void;
        protected _onManagerChangeSelection(e: qx.event.type.Data): void;
        protected _applyDefaultSelection(): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        constructor(rootModel?: qx.core.Object, labelPath?: string, childProperty?: string, openProperty?: string | null);
        refresh(): void;
        openNodeAndParents(node: qx.core.Object): void;
        openViaModelChanges(openProperty: string | null): void;
        getOpenProperty(): void;
        protected _init(): void;
        protected _initLayer(): void;
        protected _reverseLookup(index: number): number;
        protected _getDataFromRow(row: number): any | null;
        protected _getSelectables(): qx.data.Array;
        getOpenNodes(): qx.data.Array;
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        protected _applyRowHeight(): void;
        protected _applyOpenMode(): void;
        protected _applyHideRoot(): void;
        protected _applyShowTopLevelOpenCloseIcons(): void;
        protected _applyShowLeafs(): void;
        protected _applyChildProperty(): void;
        protected _applyLabelPath(): void;
        protected _applyIconPath(): void;
        protected _applyLabelOptions(): void;
        protected _applyIconOptions(): void;
        protected _applyModel(): void;
        protected _applyDelegate(): void;
        protected _onChangeBubble(event: qx.event.type.Data): void;
        protected _onUpdated(event: qx.event.type.Event): void;
        protected _onOpen(event: qx.ui.virtual.core.CellEvent): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _beforeApplySelection(newSelection: qx.data.Array): void;
        protected _afterApplySelection(): void;
        buildLookupTable(): void;
        getParent(item: qx.core.Object): qx.core.Object | null;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;
        getOpenMode(): any;
        setOpenMode(value: any): void;
        resetOpenMode(): void;
        getHideRoot(): boolean;
        isHideRoot(): boolean;
        setHideRoot(value: boolean): void;
        resetHideRoot(): void;
        getShowTopLevelOpenCloseIcons(): boolean;
        setShowTopLevelOpenCloseIcons(value: boolean): void;
        resetShowTopLevelOpenCloseIcons(): void;
        getShowLeafs(): boolean;
        isShowLeafs(): boolean;
        setShowLeafs(value: boolean): void;
        resetShowLeafs(): void;
        getChildProperty(): string;
        setChildProperty(value: string): void;
        resetChildProperty(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getModel(): qx.core.Object;
        setModel(value: qx.core.Object): void;
        resetModel(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.tree.selection {
    class SelectionManager extends qx.ui.core.selection.ScrollArea {

    }
}
declare module qx.ui.tree {
    class Tree extends qx.ui.core.scroll.AbstractScrollArea implements qx.ui.core.IMultiSelection, qx.ui.form.IModelSelection, qx.ui.form.IField, qx.ui.form.IForm {
        selectAll(): void;
        addToSelection(item: qx.ui.core.Widget): void;
        removeFromSelection(item: qx.ui.core.Widget): void;
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        isSelected(item: qx.ui.core.Widget): boolean;
        selectRange(begin: qx.ui.core.Widget, end: qx.ui.core.Widget): void;
        resetSelection(): void;
        setSelection(items: qx.ui.core.Widget[]): void;
        getSelection(): qx.ui.core.Widget[];
        getSortedSelection(): qx.ui.core.Widget[];
        isSelectionEmpty(): boolean;
        getSelectionContext(): any;
        protected _getManager(): qx.ui.core.selection.Abstract;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        invertSelection(): void;
        protected _getLeadItem(): qx.ui.core.Widget;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onSelectionChange(e: qx.event.type.Data): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyRoot(): void;
        protected _applyHideRoot(): void;
        protected _applyRootOpenClose(): void;
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        getNextNodeOf(treeItem: qx.ui.tree.core.AbstractTreeItem, invisible?: boolean): qx.ui.tree.core.AbstractTreeItem | null;
        getPreviousNodeOf(treeItem: qx.ui.tree.core.AbstractTreeItem, invisible?: boolean): qx.ui.tree.core.AbstractTreeItem | null;
        getNextSiblingOf(treeItem: qx.ui.tree.core.AbstractTreeItem): qx.ui.tree.core.AbstractTreeItem | null;
        getPreviousSiblingOf(treeItem: qx.ui.tree.core.AbstractTreeItem): qx.ui.tree.core.AbstractTreeItem | null;
        getItems(recursive?: boolean, invisible?: boolean): qx.ui.tree.core.AbstractTreeItem[];
        getChildren(): qx.ui.tree.core.AbstractTreeItem[];
        getTreeItem(widget: qx.ui.core.Widget): qx.ui.tree.core.AbstractTreeItem | null;
        protected _applyOpenMode(): void;
        protected _onOpen(e: qx.event.type.Pointer): void;
        protected _onChangeSelection(e: qx.event.type.Data): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        getOpenMode(): any;
        setOpenMode(value: any): void;
        resetOpenMode(): void;
        getRoot(): qx.ui.tree.core.AbstractTreeItem;
        setRoot(value: qx.ui.tree.core.AbstractTreeItem): void;
        resetRoot(): void;
        getHideRoot(): boolean;
        isHideRoot(): boolean;
        setHideRoot(value: boolean): void;
        resetHideRoot(): void;
        getRootOpenClose(): boolean;
        isRootOpenClose(): boolean;
        setRootOpenClose(value: boolean): void;
        resetRootOpenClose(): void;

    }
}
declare module qx.ui.tree {
    class TreeFolder extends qx.ui.tree.core.AbstractTreeItem {
        getOpen(): boolean;
        isOpen(): boolean;
        setOpen(value: boolean): void;
        resetOpen(): void;
        getOpenSymbolMode(): any;
        setOpenSymbolMode(value: any): void;
        resetOpenSymbolMode(): void;
        getIndent(): number;
        setIndent(value: number): void;
        resetIndent(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getIconOpened(): string;
        setIconOpened(value: string): void;
        resetIconOpened(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getParent(): qx.ui.tree.core.AbstractTreeItem;
        setParent(value: qx.ui.tree.core.AbstractTreeItem): void;
        resetParent(): void;

    }
}
declare module qx.ui.treevirtual.pane {
    class Scroller extends qx.ui.table.pane.Scroller {
        protected _createScrollBar(orientation?: string): qx.ui.core.scroll.IScrollBar;

    }
}
declare module qx.ui.treevirtual {
    class MNode {
        nodeGet(nodeReference: any | null): any;
        nodeToggleOpened(nodeReference: any | null): void;
        nodeSetState(nodeReference: any | null, attributes: IMap): void;
        nodeSetLabel(nodeReference: any | null, label: string): void;
        nodeGetLabel(nodeReference: any | null): string;
        nodeSetSelected(nodeReference: any | null, b: boolean): void;
        nodeGetSelected(nodeReference: any | null): boolean;
        nodeOpenAll(): void;
        nodeCloseAll(): void;
        protected _nodeSetOpenedInternal(nodeReference: any | null, opened: boolean, cascade: boolean, isRecursed?: boolean): void;
        nodeSetOpened(nodeReference: any | null, opened: boolean, cascade: boolean): void;
        nodeGetOpened(nodeReference: any | null): boolean;
        nodeSetHideOpenClose(nodeReference: any | null, b: boolean): void;
        nodeGetHideOpenClose(nodeReference: any | null): boolean;
        nodeSetIcon(nodeReference: any | null, path: string): void;
        nodeGetIcon(nodeReference: any | null): string;
        nodeSetSelectedIcon(nodeReference: any | null, path: string): void;
        nodeGetSelectedIcon(nodeReference: any | null): string;
        nodeSetCellStyle(nodeReference: any | null, style: string): void;
        nodeGetCellStyle(nodeReference: any | null): string;
        nodeSetLabelStyle(nodeReference: any | null, style: string): void;
        nodeGetLabelStyle(nodeReference: any | null): string;

    }
}
declare module qx.ui.treevirtual {
    class MFamily {
        familyGetFirstChild(nodeReference: any | null): number;
        familyGetLastChild(nodeReference: any | null): number;
        familyGetNextSibling(nodeReference: any | null): number;
        familyGetPrevSibling(nodeReference: any | null): number;

    }
}
declare module qx.ui.treevirtual {
    class TreeVirtual extends qx.ui.table.Table {
        constructor(headings?: qx.data.Array | null, custom?: IMap);
        getDataModel(): qx.ui.table.ITableModel;
        setUseTreeLines(b: boolean): void;
        getUseTreeLines(): boolean;
        setAlwaysShowOpenCloseSymbol(b: boolean): void;
        setExcludeFirstLevelTreeLines(b: boolean): void;
        getExcludeFirstLevelTreeLines(): boolean;
        getAlwaysShowOpenCloseSymbol(): boolean;
        getOpenCloseButtonPosition(): any;
        setSelectionMode(mode: number): void;
        getSelectionMode(): number;
        getHierarchy(nodeReference: any | null): qx.data.Array;
        getSelectedNodes(): qx.data.Array;
        protected _calculateSelectedNodes(): qx.data.Array;
        setOverflow(s: string): void;
        getOpenCloseClickSelectsRow(): boolean;
        isOpenCloseClickSelectsRow(): boolean;
        setOpenCloseClickSelectsRow(value: boolean): void;
        resetOpenCloseClickSelectsRow(): void;
        getAllowNodeEdit(): boolean;
        isAllowNodeEdit(): boolean;
        setAllowNodeEdit(value: boolean): void;
        resetAllowNodeEdit(): void;

    }
}
declare module qx.ui.treevirtual {
    class MTreePrimitive {
        protected static _addNode(nodeArr: qx.data.Array | null, parentNodeId: number, label: string, bOpened: boolean, bHideOpenCloseButton: boolean, type: number, icon: string, iconSelected: string, nodeId?: number): number;
        protected static _getEmptyTree(): IMap;

    }
}
declare module qx.ui.treevirtual {
    class SimpleTreeDataModel extends qx.ui.table.model.Abstract {
        setTree(tree: qx.ui.treevirtual.TreeVirtual): void;
        getTree(): qx.ui.treevirtual.TreeVirtual;
        setEditable(editable: boolean): void;
        setColumnEditable(columnIndex: number, editable: boolean): void;
        setTreeColumn(columnIndex: number): void;
        getTreeColumn(): number;
        getNode(rowIndex: number): any;
        addBranch(parentNodeId: number, label: string, bOpened: boolean, bHideOpenCloseButton: boolean, icon: string, iconSelected: string): number;
        addLeaf(parentNodeId: number, label: string, icon: string, iconSelected: string): number;
        prune(nodeReference: any | null, bSelfAlso: boolean): void;
        move(moveNodeReference: any | null, parentNodeReference: any | null): void;
        setData(nodeArr?: qx.data.Array): void;
        getData(): qx.data.Array;
        clearData(): void;
        setColumnData(nodeId: number, columnIndex: number, data: any): void;
        getColumnData(nodeId: number, columnIndex: number): any;
        setState(nodeReference: any | null, attributes: IMap, suppressRedraw: boolean): void;
        getNodeRowMap(): qx.data.Array;
        getRowFromNodeId(nodeId: number): number;
        getNodeFromRow(rowIndex: number): any;
        protected _clearSelections(): void;
        getSelectedNodes(): qx.data.Array;
        protected _applyFilter(): void;
        isNodeEditable(rowIndex: number): boolean;
        getFilter(): Function;
        setFilter(value: Function): void;
        resetFilter(): void;

    }
}
declare module qx.ui.treevirtual.celleditor {
    class NodeEditor extends qx.ui.table.celleditor.TextField {

    }
}
declare module qx.ui.treevirtual {
    class SelectionManager extends qx.ui.table.selection.Manager {
        constructor(table?: qx.ui.table.Table);
        getTable(): qx.ui.table.Table;
        protected _handleExtendedClick(tree: qx.ui.treevirtual.TreeVirtual, evt: IMap, node: IMap, left: number): boolean;

    }
}
declare module qx.ui.treevirtual {
    class SimpleTreeDataCellRenderer extends qx.ui.table.cellrenderer.Abstract {
        protected _onChangeTheme(): void;
        protected _addImage(imageInfo: IMap): string;
        protected _addIndentation(cellInfo: IMap, pos: number): IMap;
        protected _addIcon(cellInfo: IMap, pos: number): IMap;
        protected _addLabel(cellInfo: IMap, pos: number): string;
        protected _addExtraContentBeforeIndentation(cellInfo: IMap, pos: number): IMap;
        protected _addExtraContentBeforeIcon(cellInfo: IMap, pos: number): IMap;
        protected _addExtraContentBeforeLabel(cellInfo: IMap, pos: number): IMap;
        protected _getIndentSymbol(column: number, node: Node, bUseTreeLines: boolean, bAlwaysShowOpenCloseSymbol: boolean, bExcludeFirstLevelTreeLines: boolean): IMap;
        getOpenCloseButtonPosition(table: qx.ui.table.Table, node: Node): any;
        getUseTreeLines(): boolean;
        isUseTreeLines(): boolean;
        setUseTreeLines(value: boolean): void;
        resetUseTreeLines(): void;
        getExcludeFirstLevelTreeLines(): boolean;
        isExcludeFirstLevelTreeLines(): boolean;
        setExcludeFirstLevelTreeLines(value: boolean): void;
        resetExcludeFirstLevelTreeLines(): void;
        getAlwaysShowOpenCloseSymbol(): boolean;
        isAlwaysShowOpenCloseSymbol(): boolean;
        setAlwaysShowOpenCloseSymbol(value: boolean): void;
        resetAlwaysShowOpenCloseSymbol(): void;

    }
}
declare module qx.ui.treevirtual {
    class SimpleTreeDataRowRenderer extends qx.ui.table.rowrenderer.Default {

    }
}
declare module qx.ui.treevirtual {
    class DefaultDataCellRenderer extends qx.ui.table.cellrenderer.Default {

    }
}
declare module qx.ui.popup {
    class Popup extends qx.ui.container.Composite {
        getLayoutLocation(widget: qx.ui.core.Widget): IMap | null;
        moveTo(left: number, top: number): void;
        placeToWidget(target: qx.ui.core.Widget, liveupdate: boolean): boolean;
        placeToPointer(event: qx.event.type.Pointer): void;
        placeToElement(elem: HTMLElement, liveupdate: boolean): void;
        placeToPoint(point: IMap): void;
        protected _getPlacementOffsets(): IMap;
        protected _place(coords: IMap): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getPlaceMethod(): any;
        setPlaceMethod(value: any): void;
        resetPlaceMethod(): void;
        getDomMove(): boolean;
        isDomMove(): boolean;
        setDomMove(value: boolean): void;
        resetDomMove(): void;
        getPlacementModeX(): any;
        setPlacementModeX(value: any): void;
        resetPlacementModeX(): void;
        getPlacementModeY(): any;
        setPlacementModeY(value: any): void;
        resetPlacementModeY(): void;
        getOffsetLeft(): number;
        setOffsetLeft(value: number): void;
        resetOffsetLeft(): void;
        getOffsetTop(): number;
        setOffsetTop(value: number): void;
        resetOffsetTop(): void;
        getOffsetRight(): number;
        setOffsetRight(value: number): void;
        resetOffsetRight(): void;
        getOffsetBottom(): number;
        setOffsetBottom(value: number): void;
        resetOffsetBottom(): void;
        setOffset(value: any): void;
        resetOffset(): void;
        getAutoHide(): boolean;
        isAutoHide(): boolean;
        setAutoHide(value: boolean): void;
        resetAutoHide(): void;

    }
}
declare module qx.ui.popup {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        add(obj: qx.ui.popup.Popup): void;
        remove(obj: qx.ui.popup.Popup): void;
        hideAll(): void;
        getContainsFunction(): Function;
        setContainsFunction(value: Function): void;
        resetContainsFunction(): void;

    }
}
declare module qx.ui.form {
    interface IColorForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    interface IModel {
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;

    }
}
declare module qx.ui.form {
    class AbstractSelectBox extends qx.ui.core.Widget implements qx.ui.form.IForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyMaxListHeight(): void;
        open(): void;
        close(): void;
        toggle(): void;
        protected _defaultFormat(item: qx.ui.form.IListItem): string;
        protected _onBlur(e: qx.event.type.Focus): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _onResize(e: qx.event.type.Data): void;
        protected _onListAddItem(e: qx.event.type.Data): void;
        protected _onListChangeSelection(e: qx.event.type.Data): void;
        protected _onListPointerDown(e: qx.event.type.Pointer): void;
        protected _onPopupChangeVisibility(e: qx.event.type.Data): void;
        getMaxListHeight(): number;
        setMaxListHeight(value: number): void;
        resetMaxListHeight(): void;
        getFormat(): Function;
        setFormat(value: Function): void;
        resetFormat(): void;

    }
}
declare module qx.ui.form {
    class MModelSelection {
        getModelSelection(): qx.data.Array;
        setModelSelection(modelSelection: qx.data.Array): void;

    }
}
declare module qx.ui.form {
    class HoverButton extends qx.ui.basic.Atom implements qx.ui.form.IExecutable {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        protected _applyCommand(): void;
        resetCommand(): void;
        constructor(label?: string, icon?: string);
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onInterval(): void;
        getInterval(): number;
        setInterval(value: number): void;
        resetInterval(): void;
        getFirstInterval(): number;
        setFirstInterval(value: number): void;
        resetFirstInterval(): void;
        getMinTimer(): number;
        setMinTimer(value: number): void;
        resetMinTimer(): void;
        getTimerDecrease(): number;
        setTimerDecrease(value: number): void;
        resetTimerDecrease(): void;

    }
}
declare module qx.ui.form {
    class MModelProperty {
        protected _applyModel(): void;
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;

    }
}
declare module qx.ui.form {
    class CheckedSelectBox extends qx.ui.form.AbstractSelectBox implements qx.ui.core.IMultiSelection, qx.ui.form.IModelSelection, qx.ui.form.IField {
        getSelection(): ui.core.Widget[];
        setSelection(items: ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): ui.core.Widget[];
        selectAll(): void;
        addToSelection(item: qx.ui.core.Widget): void;
        removeFromSelection(item: qx.ui.core.Widget): void;
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        getChecked(): qx.ui.form.IListItem[];
        setChecked(param0: any): void;
        resetChecked(): void;
        protected _onAllNoneExecute(): void;
        protected _onListChangeChecked(): void;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onTap(e: qx.event.type.Pointer): void;

    }
}
declare module qx.ui.form.renderer {
    class AbstractRenderer extends qx.ui.core.Widget implements qx.ui.form.renderer.IFormRenderer {
        addItems(items: qx.ui.core.Widget[], names: string[], title?: string, itemsOptions?: qx.data.Array, headerOptions?: IMap): void;
        addButton(button: qx.ui.form.Button, options?: IMap): void;
        constructor(form?: qx.ui.form.Form);
        protected _render(): void;
        protected _onFormChange(): void;
        protected _connectVisibility(item: qx.ui.core.Widget, label: qx.ui.basic.Label): void;
        protected _createLabelText(name: string, item: qx.ui.form.IForm): string;
        getLabelSuffix(): string;
        setLabelSuffix(value: string): void;
        resetLabelSuffix(): void;
        getRequiredSuffix(): string;
        setRequiredSuffix(value: string): void;
        resetRequiredSuffix(): void;

    }
}
declare module qx.ui.form.renderer {
    interface IFormRenderer {
        addItems(items: qx.ui.core.Widget[], names: string[], title?: string, itemsOptions?: qx.data.Array, headerOptions?: IMap): void;
        addButton(button: qx.ui.form.Button, options?: IMap): void;

    }
}
declare module qx.ui.form.renderer {
    class SinglePlaceholder extends qx.ui.form.renderer.Single implements qx.ui.form.renderer.IFormRenderer {
        addItems(items: qx.ui.core.Widget[], names: string[], title?: string, itemsOptions?: qx.data.Array, headerOptions?: IMap): void;
        addButton(button: qx.ui.form.Button, options?: IMap): void;

    }
}
declare module qx.ui.form.renderer {
    class Double extends qx.ui.form.renderer.AbstractRenderer {
        getLayout(): qx.ui.layout.Grid;
        protected _createLabel(name: string, item: qx.ui.core.Widget): qx.ui.basic.Label;
        protected _createHeader(title: string): qx.ui.basic.Label;

    }
}
declare module qx.ui.form.renderer {
    class Single extends qx.ui.form.renderer.AbstractRenderer {
        getLayout(): qx.ui.layout.Grid;
        protected _createLabel(name: string, item: qx.ui.core.Widget): qx.ui.basic.Label;
        protected _createHeader(title: string): qx.ui.basic.Label;

    }
}
declare module qx.ui.form {
    class RadioButton extends qx.ui.form.Button implements qx.ui.form.IRadioItem, qx.ui.form.IForm, qx.ui.form.IBooleanForm, qx.ui.form.IModel {
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        constructor(label?: string);
        protected _applyValue(): void;
        protected _applyGroup(): void;
        protected _onExecute(e: qx.event.type.Event): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        resetValue(): void;
        resetGroup(): void;
        isValue(): boolean;

    }
}
declare module qx.ui.form {
    class MForm {
        protected _applyValid(): void;
        getValid(): boolean;
        isValid(): boolean;
        setValid(value: boolean): void;
        resetValid(): void;
        getRequired(): boolean;
        isRequired(): boolean;
        setRequired(value: boolean): void;
        resetRequired(): void;
        getInvalidMessage(): string;
        setInvalidMessage(value: string): void;
        resetInvalidMessage(): void;
        getRequiredInvalidMessage(): string;
        setRequiredInvalidMessage(value: string): void;
        resetRequiredInvalidMessage(): void;

    }
}
declare module qx.ui.form {
    interface IBooleanForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    interface IRadioItem {
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;

    }
}
declare module qx.ui.form.core {
    class VirtualDropDownList extends qx.ui.popup.Popup {
        constructor(target?: qx.ui.form.core.AbstractVirtualBox);
        open(): void;
        close(): void;
        setPreselected(modelItem: any): void;
        protected _handleKeyboard(event: qx.event.type.KeySequence): void;
        protected _handlePointer(event: qx.event.type.Mouse): void;
        protected _onListChangeSelection(event: qx.event.type.Data): void;
        protected _onChangeModel(event: qx.event.type.Data): void;
        protected _onChangeModelLength(param0: any): void;
        protected _onChangeDelegate(event: qx.event.type.Data): void;
        protected _applySelection(): void;
        protected _adjustSize(): void;
        protected _adjustWidth(): void;
        protected _adjustHeight(): void;
        protected _getAvailableHeight(): number | null;
        protected _recalculateMaxListItemWidth(): void;
        protected _getMaxListItemWidth(): number;
        getAutoHide(): boolean;
        isAutoHide(): boolean;
        setAutoHide(value: boolean): void;
        resetAutoHide(): void;
        getSelection(): qx.data.Array;
        setSelection(value: qx.data.Array): void;
        resetSelection(): void;
        getAllowGrowDropDown(): boolean;
        isAllowGrowDropDown(): boolean;
        setAllowGrowDropDown(value: boolean): void;
        resetAllowGrowDropDown(): void;

    }
}
declare module qx.ui.form.core {
    class AbstractVirtualBox extends qx.ui.core.Widget implements qx.ui.form.IForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(model?: qx.data.Array);
        refresh(): void;
        open(): void;
        close(): void;
        toggle(): void;
        protected _beforeOpen(): void;
        protected _beforeClose(): void;
        protected _getAction(event: qx.event.type.KeySequence): string | null;
        protected _getBindPath(source: string, path?: string): string;
        protected _isModifierPressed(event: qx.event.type.KeySequence): boolean;
        protected _onBlur(event: qx.event.type.Focus): void;
        protected _handleKeyboard(event: qx.event.type.KeySequence): void;
        protected _handlePointer(event: qx.event.type.Pointer | null): void;
        protected _onResize(event: qx.event.type.Data): void;
        protected _onPopupChangeVisibility(event: qx.event.type.Data): void;
        protected _applyModel(): void;
        protected _applyDelegate(): void;
        protected _applyLabelPath(): void;
        protected _applyLabelOptions(): void;
        protected _applyIconPath(): void;
        protected _applyIconOptions(): void;
        protected _applyRowHeight(): void;
        protected _applyMaxListHeight(): void;
        getModel(): qx.data.Array;
        setModel(value: qx.data.Array): void;
        resetModel(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;
        getMaxListHeight(): number;
        setMaxListHeight(value: number): void;
        resetMaxListHeight(): void;
        getAllowGrowDropDown(): boolean;
        isAllowGrowDropDown(): boolean;
        setAllowGrowDropDown(value: boolean): void;
        resetAllowGrowDropDown(): void;

    }
}
declare module qx.ui.form {
    interface IDateForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    interface IExecutable {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;

    }
}
declare module qx.ui.form {
    class CheckedList extends qx.ui.form.List {
        getChecked(): qx.ui.form.CheckBox[];
        setChecked(the: qx.ui.form.CheckBox[]): void;
        resetChecked(): void;
        setRequired(value: boolean): void;
        getRequired(): boolean;
        setValid(value: boolean): void;
        getValid(): boolean;
        setInvalidMessage(value: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(value: string): void;
        getRequiredInvalidMessage(): string;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getEnableInlineFind(): boolean;
        isEnableInlineFind(): boolean;
        setEnableInlineFind(value: boolean): void;
        resetEnableInlineFind(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;

    }
}
declare module qx.ui.form {
    interface IField {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;

    }
}
declare module qx.ui.form {
    class Resetter extends qx.core.Object {
        add(field: qx.ui.form.IField): void;
        remove(field: qx.ui.form.IField): boolean;
        resetItem(field: qx.ui.form.IField): null | Error;
        redefine(): void;
        redefineItem(field: qx.ui.form.IField): void;

    }
}
declare module qx.ui.form {
    interface IRange {
        setMinimum(min: number): void;
        getMinimum(): number;
        setMaximum(max: number): void;
        getMaximum(): number;
        setSingleStep(step: number): void;
        getSingleStep(): number;
        setPageStep(step: number): void;
        getPageStep(): number;

    }
}
declare module qx.ui.form {
    class Spinner extends qx.ui.core.Widget implements qx.ui.form.INumberForm, qx.ui.form.IRange, qx.ui.form.IForm {
        setMinimum(min: number): void;
        getMinimum(): number;
        setMaximum(max: number): void;
        getMaximum(): number;
        setSingleStep(step: number): void;
        getSingleStep(): number;
        setPageStep(step: number): void;
        getPageStep(): number;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(min?: number, value?: number, max?: number);
        protected _getFilterRegExp(): RegExp;
        protected _applyMinimum(value: number, old: number): void;
        protected _applyMaximum(value: number, old: number): void;
        protected _checkValue(value: any): boolean;
        protected _applyValue(value: number, old: number): void;
        protected _applyEditable(value: boolean, old: boolean): void;
        protected _applyWrap(value: boolean, old: boolean): void;
        protected _applyNumberFormat(value: boolean, old: boolean): void;
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        protected _updateButtons(): void;
        protected _onKeyDown(e: qx.event.type.KeySequence): void;
        protected _onKeyUp(e: qx.event.type.KeySequence): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onTextChange(e: qx.event.type.Event): void;
        protected _onChangeLocale(ev: qx.event.type.Event): void;
        protected _onChangeNumberFormat(ev: qx.event.type.Event): void;
        protected _countUp(): void;
        protected _countDown(): void;
        gotoValue(value: number): number;
        setValue(value: any): void;
        resetValue(): void;
        getValue(): any;
        resetSingleStep(): void;
        resetPageStep(): void;
        resetMinimum(): void;
        resetMaximum(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;
        getEditable(): boolean;
        isEditable(): boolean;
        setEditable(value: boolean): void;
        resetEditable(): void;
        getNumberFormat(): qx.util.format.NumberFormat;
        setNumberFormat(value: qx.util.format.NumberFormat): void;
        resetNumberFormat(): void;

    }
}
declare module qx.ui.form {
    class Slider extends qx.ui.core.Widget implements qx.ui.form.IForm, qx.ui.form.INumberForm, qx.ui.form.IRange {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setMinimum(min: number): void;
        getMinimum(): number;
        setMaximum(max: number): void;
        getMaximum(): number;
        setSingleStep(step: number): void;
        getSingleStep(): number;
        setPageStep(step: number): void;
        getPageStep(): number;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(orientation?: string);
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onPointerUp(e: qx.event.type.Pointer): void;
        protected _onPointerMove(e: qx.event.type.Pointer): void;
        protected _onInterval(e: qx.event.type.Event): void;
        protected _onUpdate(e: qx.event.type.Data): void;
        protected _positionToValue(position: number): number;
        protected _valueToPosition(value: number): number;
        protected _updateKnobPosition(): void;
        protected _setKnobPosition(position: number): void;
        protected _updateKnobSize(): void;
        slideToBegin(duration: number): void;
        slideToEnd(duration: number): void;
        slideForward(): void;
        slideBack(): void;
        slidePageForward(duration: number): void;
        slidePageBack(duration: number): void;
        slideBy(offset: number, duration: number): void;
        slideTo(value: number, duration: number): void;
        updatePosition(value: number): void;
        stopSlideAnimation(): void;
        protected _applyOrientation(): void;
        protected _applyKnobFactor(): void;
        protected _applyValue(): void;
        protected _fireValue(): void;
        protected _applyMinimum(): void;
        protected _applyMaximum(): void;
        setValue(value: any): void;
        resetValue(): void;
        getValue(): any;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        resetMinimum(): void;
        resetMaximum(): void;
        resetSingleStep(): void;
        resetPageStep(): void;
        getKnobFactor(): number;
        setKnobFactor(value: number): void;
        resetKnobFactor(): void;

    }
}
declare module qx.ui.form {
    class RadioButtonGroup extends qx.ui.core.Widget implements qx.ui.form.IForm, qx.ui.form.IField, qx.ui.core.ISingleSelection, qx.ui.form.IModelSelection {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        constructor(layout?: qx.ui.layout.Abstract);
        protected _applyInvalidMessage(): void;
        protected _applyValid(): void;
        getRadioGroup(): qx.ui.form.RadioGroup;
        getChildren(): qx.ui.core.LayoutItem[];
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAll(): qx.data.Array;
        protected _onChangeSelection(event: qx.event.type.Data): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;

    }
}
declare module qx.ui.form {
    class RepeatButton extends qx.ui.form.Button {
        constructor(label?: string, icon?: string);
        protected _onInterval(e: qx.event.type.Event): void;
        getInterval(): number;
        setInterval(value: number): void;
        resetInterval(): void;
        getFirstInterval(): number;
        setFirstInterval(value: number): void;
        resetFirstInterval(): void;
        getMinTimer(): number;
        setMinTimer(value: number): void;
        resetMinTimer(): void;
        getTimerDecrease(): number;
        setTimerDecrease(value: number): void;
        resetTimerDecrease(): void;

    }
}
declare module qx.ui.form {
    class MenuButton extends qx.ui.form.Button {
        constructor(label?: string, icon?: string, menu?: qx.ui.menu.Menu);
        protected _applyMenu(): void;
        open(selectFirst?: boolean): void;
        protected _onMenuChange(e: qx.event.type.Data): void;
        getMenu(): qx.ui.menu.Menu;
        setMenu(value: qx.ui.menu.Menu): void;
        resetMenu(): void;

    }
}
declare module qx.ui.form {
    class TextField extends qx.ui.form.AbstractField {
        protected _onKeyPress(evt: qx.event.type.KeySequence): void;

    }
}
declare module qx.ui.form {
    class CheckBox extends qx.ui.form.ToggleButton implements qx.ui.form.IForm, qx.ui.form.IModel, qx.ui.form.IListItem {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        constructor(label?: string);
        setValue(value: boolean): void;
        resetValue(): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        isValue(): boolean;
        resetGroup(): void;
        getTriState(): boolean;
        isTriState(): boolean;
        setTriState(value: boolean): void;
        resetTriState(): void;

    }
}
declare module qx.ui.form {
    class RadioGroup extends qx.core.Object implements qx.ui.core.ISingleSelection, qx.ui.form.IField, qx.ui.form.IForm, qx.ui.form.IModelSelection {
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        protected _onChangeSelected(e: qx.event.type.Data): void;
        constructor(...varargs: qx.core.Object[]);
        getItems(): qx.ui.form.IRadioItem[];
        add(...varargs: qx.ui.form.IRadioItem[]): void;
        remove(item: qx.ui.form.IRadioItem): void;
        getChildren(): qx.ui.form.IRadioItem[];
        protected _onItemChangeChecked(e: qx.event.type.Data): void;
        protected _applyGroupedProperty(): void;
        protected _applyInvalidMessage(): void;
        protected _applyValid(): void;
        protected _applyEnabled(): void;
        protected _applyAllowEmptySelection(): void;
        selectNext(): void;
        selectPrevious(): void;
        protected _getItems(): qx.ui.form.IRadioItem[];
        protected _isAllowEmptySelection(): boolean;
        protected _isItemSelectable(item: qx.ui.form.IRadioItem): boolean;
        getGroupedProperty(): string;
        setGroupedProperty(value: string): void;
        resetGroupedProperty(): void;
        getGroupProperty(): string;
        setGroupProperty(value: string): void;
        resetGroupProperty(): void;
        isEnabled(): boolean;
        resetEnabled(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;
        getAllowEmptySelection(): boolean;
        isAllowEmptySelection(): boolean;
        setAllowEmptySelection(value: boolean): void;
        resetAllowEmptySelection(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;

    }
}
declare module qx.ui.form {
    class SelectBox extends qx.ui.form.AbstractSelectBox implements qx.ui.core.ISingleSelection, qx.ui.form.IModelSelection, qx.ui.form.IField {
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        protected _onChangeSelected(e: qx.event.type.Data): void;
        protected _applyRich(): void;
        protected _getItems(): qx.ui.basic.Atom[];
        protected _isAllowEmptySelection(): boolean;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _onKeyInput(e: qx.event.type.KeyInput): void;
        getRich(): boolean;
        isRich(): boolean;
        setRich(value: boolean): void;
        resetRich(): void;

    }
}
declare module qx.ui.form {
    class VirtualSelectBox extends qx.ui.form.core.AbstractVirtualBox implements qx.data.controller.ISelection, qx.ui.form.IField {
        setSelection(value: qx.data.IListData): void;
        getSelection(): qx.data.IListData;
        resetSelection(): void;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        protected _addBindings(): void;
        protected _removeBindings(): void;
        protected _onPointerOver(event: qx.event.type.Pointer): void;
        protected _onPointerOut(event: qx.event.type.Pointer): void;
        protected _applySelection(): void;
        protected _updateSelectionValue(event: qx.event.type.Data): void;
        protected _searchMatch(): void;
        protected _highlightFilterValuePlainFunction(): void;
        protected _highlightFilterValueHtmlFunction(): void;
        protected _configureItemRich(): void;
        protected _configureItemPlain(): void;
        protected _applyRich(): void;
        protected _applyHighlightMode(): void;
        protected _applyIncrementalSearch(): void;
        getModel(): qx.data.Array;
        setModel(value: qx.data.Array): void;
        resetModel(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;
        getMaxListHeight(): number;
        setMaxListHeight(value: number): void;
        resetMaxListHeight(): void;
        getAllowGrowDropDown(): boolean;
        isAllowGrowDropDown(): boolean;
        setAllowGrowDropDown(value: boolean): void;
        resetAllowGrowDropDown(): void;
        getIncrementalSearch(): boolean;
        isIncrementalSearch(): boolean;
        setIncrementalSearch(value: boolean): void;
        resetIncrementalSearch(): void;
        getPlainMarkers(): qx.data.Array;
        setPlainMarkers(value: qx.data.Array): void;
        resetPlainMarkers(): void;
        getHtmlMarkers(): qx.data.Array;
        setHtmlMarkers(value: qx.data.Array): void;
        resetHtmlMarkers(): void;
        getRich(): boolean;
        isRich(): boolean;
        setRich(value: boolean): void;
        resetRich(): void;
        getHighlightMode(): any;
        setHighlightMode(value: any): void;
        resetHighlightMode(): void;

    }
}
declare module qx.ui.form {
    class PasswordField extends qx.ui.form.TextField {

    }
}
declare module qx.ui.form {
    class SplitButton extends qx.ui.core.Widget implements qx.ui.form.IExecutable {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        protected _applyCommand(): void;
        resetCommand(): void;
        constructor(label?: string, icon?: string, menu?: qx.ui.menu.Menu, command?: qx.ui.command.Command);
        protected _applyLabel(): void;
        protected _applyIcon(): void;
        protected _applyMenu(): void;
        protected _applyShow(): void;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onKeyDown(e: qx.event.type.KeySequence): void;
        protected _onKeyUp(e: qx.event.type.KeySequence): void;
        protected _onButtonExecute(e: qx.event.type.Event): void;
        protected _onChangeMenuVisibility(e: qx.event.type.Data): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getMenu(): qx.ui.menu.Menu;
        setMenu(value: qx.ui.menu.Menu): void;
        resetMenu(): void;

    }
}
declare module qx.ui.form {
    class ToggleButton extends qx.ui.basic.Atom implements qx.ui.form.IBooleanForm, qx.ui.form.IExecutable, qx.ui.form.IRadioItem {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        protected _applyCommand(): void;
        resetCommand(): void;
        constructor(label?: string, icon?: string);
        protected _applyGroup(): void;
        protected _applyValue(value: boolean, old: boolean): void;
        protected _applyTriState(value: boolean, old: boolean): void;
        protected _onExecute(e: qx.event.type.Event): void;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onPointerUp(e: qx.event.type.Pointer): void;
        protected _onKeyDown(e: qx.event.type.Event): void;
        protected _onKeyUp(e: qx.event.type.Event): void;
        resetValue(): void;
        isValue(): boolean;
        resetGroup(): void;
        getTriState(): boolean;
        isTriState(): boolean;
        setTriState(value: boolean): void;
        resetTriState(): void;

    }
}
declare module qx.ui.form {
    class DateField extends qx.ui.core.Widget implements qx.ui.form.IForm, qx.ui.form.IDateForm {
        setValue(value: any);
        resetValue(): void;
        getValue();
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        static getDefaultDateFormatter(): qx.util.format.DateFormat;
        protected _setDefaultDateFormat(): void;
        protected _addLocaleChangeListener(): void;
        open(): void;
        close(): void;
        toggle(): void;
        protected _applyDateFormat(): void;
        protected _applyPlaceholder(): void;
        protected _onChangeDate(e: qx.event.type.Pointer): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _onBlur(e: qx.event.type.Focus): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _onPopupChangeVisibility(e: qx.event.type.Data): void;
        protected _onTextFieldChangeValue(e: qx.event.type.Data): void;
        isEmpty(): boolean;
        getDateFormat(): qx.util.format.DateFormat;
        setDateFormat(value: qx.util.format.DateFormat): void;
        resetDateFormat(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;

    }
}
declare module qx.ui.form {
    class Button extends qx.ui.basic.Atom implements qx.ui.form.IExecutable {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        protected _applyCommand(): void;
        resetCommand(): void;
        constructor(label?: string, icon?: string, command?: qx.ui.command.Command);
        press(): void;
        release(): void;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onPointerUp(e: qx.event.type.Pointer): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _onKeyDown(e: qx.event.type.Event): void;
        protected _onKeyUp(e: qx.event.type.Event): void;

    }
}
declare module qx.ui.form {
    class VirtualComboBox extends qx.ui.form.core.AbstractVirtualBox implements qx.ui.form.IStringForm {
        getTextSelection(): string | null;
        getTextSelectionLength(): number | null;
        setTextSelection(start: number, end: number): void;
        clearTextSelection(): void;
        selectAllText(): void;
        resetAllTextSelection(): void;
        protected _applyPlaceholder(): void;
        setValue(value: any): void;
        resetValue(): void;
        getValue(): any;
        getModel(): qx.data.Array;
        setModel(value: qx.data.Array): void;
        resetModel(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;
        getMaxListHeight(): number;
        setMaxListHeight(value: number): void;
        resetMaxListHeight(): void;
        getAllowGrowDropDown(): boolean;
        isAllowGrowDropDown(): boolean;
        setAllowGrowDropDown(value: boolean): void;
        resetAllowGrowDropDown(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getDefaultFormat(): Function;
        setDefaultFormat(value: Function): void;
        resetDefaultFormat(): void;

    }
}
declare module qx.ui.form {
    class ListItem extends qx.ui.basic.Atom implements qx.ui.form.IModel, qx.ui.form.IListItem {
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyModel(): void;
        constructor(label?: string, icon?: string, model?: string);
        protected _onPointerOver(): void;
        protected _onPointerOut(): void;

    }
}
declare module qx.ui.form {
    class List extends qx.ui.core.scroll.AbstractScrollArea implements qx.ui.core.IMultiSelection, qx.ui.form.IForm, qx.ui.form.IField, qx.ui.form.IModelSelection {
        selectAll(): void;
        addToSelection(item: qx.ui.core.Widget): void;
        removeFromSelection(item: qx.ui.core.Widget): void;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        isSelected(item: qx.ui.core.Widget): boolean;
        selectRange(begin: qx.ui.core.Widget, end: qx.ui.core.Widget): void;
        resetSelection(): void;
        setSelection(items: qx.ui.core.Widget[]): void;
        getSelection(): qx.ui.core.Widget[];
        getSortedSelection(): qx.ui.core.Widget[];
        isSelectionEmpty(): boolean;
        getSelectionContext(): any;
        protected _getManager(): qx.ui.core.selection.Abstract;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        invertSelection(): void;
        protected _getLeadItem(): qx.ui.core.Widget;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onSelectionChange(e: qx.event.type.Data): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(horizontal?: boolean);
        protected _onAddChild(e: qx.event.type.Data): void;
        protected _onRemoveChild(e: qx.event.type.Data): void;
        handleKeyPress(e: qx.event.type.KeySequence): void;
        protected _createListItemContainer(): qx.ui.container.Composite;
        protected _applyOrientation(): void;
        protected _applySpacing(): void;
        protected _applyReadOnly(): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): boolean;
        protected _onKeyInput(e: qx.event.type.KeyInput): void;
        findItemByLabelFuzzy(search: string): qx.ui.form.ListItem;
        findItem(search: string, ignoreCase?: boolean): qx.ui.form.ListItem;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getEnableInlineFind(): boolean;
        isEnableInlineFind(): boolean;
        setEnableInlineFind(value: boolean): void;
        resetEnableInlineFind(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;

    }
}
declare module qx.ui.form {
    class TextArea extends qx.ui.form.AbstractField {
        constructor(value?: string);
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onResize(e: qx.event.type.Data): void;
        protected _getAreaHeight(): number;
        protected _setAreaHeight(height: number): void;
        protected _getScrolledAreaHeight(): number;
        protected _applyWrap(): void;
        protected _applyMinimalLineHeight(): void;
        protected _applyAutoSize(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;
        getSingleStep(): number;
        setSingleStep(value: number): void;
        resetSingleStep(): void;
        getMinimalLineHeight(): number;
        setMinimalLineHeight(value: number): void;
        resetMinimalLineHeight(): void;
        getAutoSize(): boolean;
        isAutoSize(): boolean;
        setAutoSize(value: boolean): void;
        resetAutoSize(): void;

    }
}
declare module qx.ui.form {
    interface IModelSelection {
        setModelSelection(value: qx.data.Array): void;
        getModelSelection(): qx.data.Array;

    }
}
declare module qx.ui.form {
    interface INumberForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    class Tag extends qx.ui.basic.Atom {
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;

    }
}
declare module qx.ui.form {
    class ComboBox extends qx.ui.form.AbstractSelectBox implements qx.ui.form.IStringForm {
        setValue(value: any);
        resetValue(): void;
        getValue();
        protected _applyPlaceholder(): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _setPreselectedItem(): void;
        protected _onTextFieldChangeValue(e: qx.event.type.Data): void;
        getTextSelection(): string | null;
        getTextSelectionLength(): number | null;
        setTextSelection(start: number, end: number): void;
        clearTextSelection(): void;
        selectAllText(): void;
        resetAllTextSelection(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;

    }
}
declare module qx.ui.form {
    interface IForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;

    }
}
declare module qx.ui.form {
    interface IListItem {

    }
}
declare module qx.ui.form {
    interface IModelForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    class AbstractField extends qx.ui.core.Widget implements qx.ui.form.IStringForm, qx.ui.form.IForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(value?: string);
        setValue(value: any);
        resetValue(): void;
        getValue();
        protected _createInputElement(): qx.html.Input;
        protected _renderContentElement(innerHeight: number, element: HTMLElement): void;
        protected _applyMaxLength(): void;
        protected _string2RegExp(): void;
        protected _getTextSize(): IMap;
        protected _onHtmlInput(e: qx.event.type.Data): void;
        protected _onWebFontStatusChange(ev: qx.event.type.Data): void;
        protected _onChangeContent(e: qx.event.type.Data): void;
        getTextSelection(): string | null;
        getTextSelectionLength(): number | null;
        getTextSelectionStart(): number | null;
        getTextSelectionEnd(): number | null;
        setTextSelection(start: number, end: number): void;
        clearTextSelection(): void;
        selectAllText(): void;
        protected _showPlaceholder(): void;
        protected _onPointerDownPlaceholder(): void;
        protected _removePlaceholder(): void;
        protected _syncPlaceholder(): void;
        protected _getPlaceholderElement(): void;
        protected _validateInput(value: any): any;
        protected _applyPlaceholder(): void;
        protected _applyTextAlign(): void;
        protected _applyReadOnly(): void;
        getTextAlign(): any;
        setTextAlign(value: any): void;
        resetTextAlign(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        getLiveUpdateOnRxMatch(): RegExp;
        setLiveUpdateOnRxMatch(value: RegExp): void;
        resetLiveUpdateOnRxMatch(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getFilter(): RegExp;
        setFilter(value: RegExp): void;
        resetFilter(): void;

    }
}
declare module qx.ui.form {
    class Form extends qx.core.Object {
        add(item: qx.ui.form.IForm, label: string, validator?: Function | null, name?: string, validatorContext?: any, options?: IMap): void;
        addGroupHeader(title: string, options?: IMap): void;
        addButton(button: qx.ui.form.Button, options?: IMap): void;
        remove(item: qx.ui.form.IForm): boolean;
        removeGroupHeader(title: string): boolean;
        removeButton(button: qx.ui.form.Button): boolean;
        getItems(): IMap;
        getItem(name: string): qx.ui.form.IForm | null;
        redefineResetter(): void;
        redefineResetterItem(item: qx.ui.core.Widget): void;
        validate(): any;
        getValidationManager(): qx.ui.form.validation.Manager;
        getGroups(): qx.data.Array;
        getButtons(): qx.data.Array;
        getButtonOptions(): qx.data.Array;
        protected _createValidationManager(): qx.ui.form.validation.Manager;
        protected _createResetter(): qx.ui.form.Resetter;

    }
}
declare module qx.ui.form {
    interface IArrayForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form {
    interface IStringForm extends qx.ui.form.IField {

    }
}
declare module qx.ui.form.validation {
    class AsyncValidator extends qx.core.Object {
        constructor(validator?: Function);
        validate(item: qx.ui.core.Widget, value: any, manager: qx.ui.form.validation.Manager, context?: any): void;
        validateForm(items: qx.ui.core.Widget[], manager: qx.ui.form.validation.Manager, context?: any): void;
        setValid(valid: boolean, message?: string): void;

    }
}
declare module qx.ui.form.validation {
    class Manager extends qx.core.Object {
        add(formItem: qx.ui.core.Widget, validator: Function | null, context?: any): void;
        remove(formItem: qx.ui.core.Widget): qx.ui.core.Widget | null;
        getItems(): qx.data.Array;
        validate(): boolean | undefined;
        protected _validateRequired(formItem: qx.ui.core.Widget): any;
        protected _validateItem(dataEntry: any, value: any): boolean | null;
        protected _setValid(value: boolean | null): void;
        protected _showToolTip(valid: boolean): void;
        getValid(): boolean | null;
        isValid(): boolean | null;
        getInvalidMessages(): string[];
        getInvalidFormItems(): qx.data.Array;
        setItemValid(formItem: qx.ui.core.Widget, valid: boolean): void;
        setFormValid(valid: boolean): void;
        getValidator(): any;
        setValidator(value: any): void;
        resetValidator(): void;
        getInvalidMessage(): string;
        setInvalidMessage(value: string): void;
        resetInvalidMessage(): void;
        getRequiredFieldMessage(): string;
        setRequiredFieldMessage(value: string): void;
        resetRequiredFieldMessage(): void;
        getContext(): any;
        setContext(value: any): void;
        resetContext(): void;

    }
}
declare module qx.ui.form {
    class FileSelectorButton extends qx.ui.form.Button {
        protected _applyAttribute(): void;
        getAccept(): string;
        setAccept(value: string): void;
        resetAccept(): void;
        getCapture(): any;
        setCapture(value: any): void;
        resetCapture(): void;
        getMultiple(): boolean;
        isMultiple(): boolean;
        setMultiple(value: boolean): void;
        resetMultiple(): void;
        getDirectoriesOnly(): boolean;
        isDirectoriesOnly(): boolean;
        setDirectoriesOnly(value: boolean): void;
        resetDirectoriesOnly(): void;

    }
}
declare module qx.ui.tooltip {
    class ToolTip extends qx.ui.popup.Popup {
        constructor(label?: string, icon?: string);
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _applyIcon(): void;
        protected _applyLabel(): void;
        protected _applyRich(): void;
        protected _applyArrowPosition(): void;
        getOffset(): any;
        getShowTimeout(): number;
        setShowTimeout(value: number): void;
        resetShowTimeout(): void;
        getHideTimeout(): number;
        setHideTimeout(value: number): void;
        resetHideTimeout(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getRich(): boolean;
        isRich(): boolean;
        setRich(value: boolean): void;
        resetRich(): void;
        getOpener(): qx.ui.core.Widget;
        setOpener(value: qx.ui.core.Widget): void;
        resetOpener(): void;
        getArrowPosition(): any;
        setArrowPosition(value: any): void;
        resetArrowPosition(): void;

    }
}
declare module qx.ui.tooltip {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        getSharedTooltip(): qx.ui.tooltip.ToolTip;
        getSharedErrorTooltip(): qx.ui.tooltip.ToolTip;
        protected _applyCurrent(): void;
        showToolTip(target: any | null): void;
        getCurrent(): qx.ui.tooltip.ToolTip;
        setCurrent(value: qx.ui.tooltip.ToolTip): void;
        resetCurrent(): void;
        getShowInvalidToolTips(): boolean;
        isShowInvalidToolTips(): boolean;
        setShowInvalidToolTips(value: boolean): void;
        resetShowInvalidToolTips(): void;
        getShowToolTips(): boolean;
        isShowToolTips(): boolean;
        setShowToolTips(value: boolean): void;
        resetShowToolTips(): void;

    }
}
declare module qx.ui.core {
    class MContentPadding {
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;

    }
}
declare module qx.ui.core {
    class MResizable {
        protected _getResizeFrame(): qx.ui.core.Widget;
        getResizableTop(): boolean;
        isResizableTop(): boolean;
        setResizableTop(value: boolean): void;
        resetResizableTop(): void;
        getResizableRight(): boolean;
        isResizableRight(): boolean;
        setResizableRight(value: boolean): void;
        resetResizableRight(): void;
        getResizableBottom(): boolean;
        isResizableBottom(): boolean;
        setResizableBottom(value: boolean): void;
        resetResizableBottom(): void;
        getResizableLeft(): boolean;
        isResizableLeft(): boolean;
        setResizableLeft(value: boolean): void;
        resetResizableLeft(): void;
        setResizable(value: any): void;
        resetResizable(): void;
        getResizeSensitivity(): number;
        setResizeSensitivity(value: number): void;
        resetResizeSensitivity(): void;
        getUseResizeFrame(): boolean;
        isUseResizeFrame(): boolean;
        setUseResizeFrame(value: boolean): void;
        resetUseResizeFrame(): void;

    }
}
declare module qx.ui.core {
    class Widget extends qx.ui.core.LayoutItem implements qx.core.IDisposable {
        dispose(): void;
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;
        static getWidgetByElement(element: HTMLElement, considerAnonymousState?: boolean): qx.ui.core.Widget;
        static contains(parent: qx.ui.core.Widget, child: qx.ui.core.Widget): boolean;
        protected _setLayout(layout: qx.ui.layout.Abstract): void;
        protected _getContentHint(): IMap;
        protected _getContentHeightForWidth(width: number): number;
        getInsets(): IMap;
        getInnerSize(): IMap;
        fadeOut(duration: number): qx.bom.element.AnimationHandle;
        fadeIn(duration: number): qx.bom.element.AnimationHandle;
        protected _applyAnonymous(): void;
        show(): void;
        hide(): void;
        exclude(): void;
        isVisible(): boolean;
        isHidden(): boolean;
        isSeeable(): boolean;
        protected _createContentElement(): qx.html.Element;
        getContentElement(): qx.html.Element;
        getLayoutChildren(): qx.ui.core.Widget[];
        invalidateLayoutChildren(): void;
        hasLayoutChildren(): boolean;
        getChildrenContainer(): qx.ui.core.Widget;
        protected _getChildren(): qx.ui.core.LayoutItem[];
        protected _indexOf(child: qx.ui.core.Widget): number;
        protected _hasChildren(): boolean;
        addChildrenToQueue(queue: qx.data.Array): void;
        protected _add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        protected _addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        protected _addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        protected _addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        protected _remove(child: qx.ui.core.LayoutItem): void;
        protected _removeAt(index: number): qx.ui.core.LayoutItem;
        protected _removeAll(): qx.data.Array;
        capture(capture?: boolean): void;
        releaseCapture(): void;
        isCapturing(): boolean;
        protected _applyPadding(): void;
        protected _applyDecorator(): void;
        protected _applyToolTipText(): void;
        protected _applyTextColor(): void;
        protected _applyZIndex(): void;
        protected _applyVisibility(): void;
        protected _applyOpacity(): void;
        protected _applyCursor(): void;
        protected _applyBackgroundColor(): void;
        protected _applyFont(): void;
        protected _onChangeTheme(): void;
        hasState(state: string): boolean;
        addState(state: string): void;
        removeState(state: string): void;
        replaceState(old: string, value: string): void;
        syncAppearance(): void;
        protected _applyAppearance(): void;
        checkAppearanceNeeds(): void;
        updateAppearance(): void;
        syncWidget(jobs: IMap): void;
        getEventTarget(): qx.ui.core.Widget;
        getFocusTarget(): qx.ui.core.Widget;
        getFocusElement(): qx.html.Element;
        isTabable(): boolean;
        protected _applyFocusable(): void;
        protected _applyKeepFocus(): void;
        protected _applyKeepActive(): void;
        protected _applyTabIndex(): void;
        protected _applySelectable(): void;
        protected _applyEnabled(): void;
        protected _applyNativeContextMenu(): void;
        protected _applyContextMenu(): void;
        protected _onContextMenuOpen(e: qx.event.type.Pointer): void;
        protected _onBeforeContextMenuOpen(e: qx.event.type.Data): void;
        protected _onStopEvent(e: qx.event.type.Event): void;
        protected _getDragDropCursor(): qx.ui.core.DragDropCursor;
        protected _applyDraggable(): void;
        protected _applyDroppable(): void;
        protected _onDragStart(e: qx.event.type.Drag): void;
        protected _onDrag(e: qx.event.type.Drag): void;
        protected _onDragEnd(e: qx.event.type.Drag): void;
        protected _onDragChange(e: qx.event.type.Drag): void;
        visualizeFocus(): void;
        visualizeBlur(): void;
        scrollChildIntoView(child: qx.ui.core.Widget, alignX?: string, alignY?: string, direct?: boolean): void;
        scrollChildIntoViewX(child: qx.ui.core.Widget, align?: string, direct?: boolean): void;
        scrollChildIntoViewY(child: qx.ui.core.Widget, align?: string, direct?: boolean): void;
        focus(): void;
        blur(): void;
        activate(): void;
        deactivate(): void;
        tabFocus(): void;
        hasChildControl(id: string): boolean;
        protected _getCreatedChildControls(): IMap;
        getChildControl(id: string, notcreate?: boolean): qx.ui.core.Widget;
        protected _showChildControl(id: string): qx.ui.core.Widget;
        protected _excludeChildControl(id: string): void;
        protected _isChildControlVisible(id: string): boolean;
        protected _releaseChildControl(id: string): qx.ui.core.Widget;
        protected _createChildControl(id: string): qx.ui.core.Widget;
        protected _createChildControlImpl(id: string, hash?: string): qx.ui.core.Widget;
        protected _disposeChildControls(): void;
        protected _findTopControl(): qx.ui.core.Widget;
        getSubcontrolId(): string | null;
        getContentLocation(mode?: string): IMap;
        setDomLeft(value: number): void;
        setDomTop(value: number): void;
        setDomPosition(left: number, top: number): void;
        setAriaLabel(label: string): void;
        addAriaLabelledBy(labelWidgets: qx.ui.core.Widget[]): void;
        addAriaDescribedBy(describingWidgets: qx.ui.core.Widget[]): void;
        destroy(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;

    }
}
declare module qx.ui.core {
    class Spacer extends qx.ui.core.LayoutItem {
        constructor(width?: number, height?: number);
        checkAppearanceNeeds(): void;
        addChildrenToQueue(queue: IMap): void;
        destroy(): void;

    }
}
declare module qx.ui.core.scroll {
    class ScrollBar extends qx.ui.core.Widget implements qx.ui.core.scroll.IScrollBar {
        scrollTo(position: number, duration: number): void;
        scrollBy(offset: number, duration: number): void;
        scrollBySteps(steps: number, duration: number): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getMaximum(): any;
        setMaximum(value: any): void;
        resetMaximum(): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getKnobFactor(): any;
        setKnobFactor(value: any): void;
        resetKnobFactor(): void;
        constructor(orientation?: string);
        protected _applyMaximum(): void;
        protected _applyPosition(): void;
        protected _applyKnobFactor(): void;
        protected _applyPageStep(): void;
        protected _applyOrientation(): void;
        updatePosition(position: number): void;
        stopScrollAnimation(): void;
        protected _onExecuteBegin(e: qx.event.type.Event): void;
        protected _onExecuteEnd(e: qx.event.type.Event): void;
        protected _onSlideAnimationEnd(): void;
        protected _onChangeSliderValue(e: qx.event.type.Data): void;
        protected _onResizeSlider(e: qx.event.type.Data): void;
        getSingleStep(): number;
        setSingleStep(value: number): void;
        resetSingleStep(): void;
        getPageStep(): number;
        setPageStep(value: number): void;
        resetPageStep(): void;

    }
}
declare module qx.ui.core.scroll {
    class NativeScrollBar extends qx.ui.core.Widget implements qx.ui.core.scroll.IScrollBar {
        scrollTo(position: number, duration: number): void;
        scrollBy(offset: number, duration: number): void;
        scrollBySteps(steps: number, duration: number): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getMaximum(): any;
        setMaximum(value: any): void;
        resetMaximum(): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getKnobFactor(): any;
        setKnobFactor(value: any): void;
        resetKnobFactor(): void;
        constructor(orientation?: string);
        protected _getScrollPaneElement(): qx.html.Element;
        protected _applyMaximum(): void;
        protected _applyPosition(): void;
        protected _applyOrientation(): void;
        protected _updateScrollBar(): void;
        updatePosition(position: number): void;
        stopScrollAnimation(): void;
        protected _onScroll(e: qx.event.type.Event): void;
        protected _onAppear(e: qx.event.type.Data): void;
        protected _stopPropagation(e: qx.event.type.Event): void;
        getSingleStep(): number;
        setSingleStep(value: number): void;
        resetSingleStep(): void;

    }
}
declare module qx.ui.core.scroll {
    class ScrollSlider extends qx.ui.form.Slider {
        setRequired(value: boolean): void;
        getRequired(): boolean;
        setValid(value: boolean): void;
        getValid(): boolean;
        setInvalidMessage(value: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(value: string): void;
        getRequiredInvalidMessage(): string;
        setValue(value: any): void;
        resetValue(): void;
        getValue(): any;
        setMinimum(value: number): void;
        getMinimum(): number;
        setMaximum(value: number): void;
        getMaximum(): number;
        setSingleStep(value: number): void;
        getSingleStep(): number;
        setPageStep(value: number): void;
        getPageStep(): number;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        resetMinimum(): void;
        resetMaximum(): void;
        resetSingleStep(): void;
        resetPageStep(): void;
        getKnobFactor(): number;
        setKnobFactor(value: number): void;
        resetKnobFactor(): void;

    }
}
declare module qx.ui.core.scroll {
    class AbstractScrollArea extends qx.ui.core.Widget {
        protected _createScrollBar(orientation?: string): qx.ui.core.scroll.IScrollBar;
        protected _addRollHandling(): void;
        protected _removeRollHandling(): void;
        protected _onPointerDownForRoll(e: qx.event.type.Pointer): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _findScrollableParent(widget: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        protected _isScrollable(widget: qx.ui.core.Widget): boolean;
        protected _getBounds(scrollable: qx.ui.core.Widget): IMap;
        protected _getEdgeType(diff: IMap, thresholdX: number, thresholdY: number): string;
        protected _getAxis(edgeType: string): string;
        protected _getThresholdByEdgeType(edgeType: string): number;
        protected _isScrollbarVisible(scrollable: qx.ui.core.Widget, axis: string): boolean;
        protected _isScrollbarExceedingMaxPos(scrollbar: qx.ui.core.scroll.IScrollBar, axis: string, amount: number): boolean;
        protected _calculateThresholdExceedance(diff: number, threshold: number): number;
        protected _calculateScrollAmount(scrollbarSize: number, exceedanceAmount: number): number;
        protected _scrollBy(scrollable: qx.ui.core.Widget, axis: string, exceedanceAmount: number): void;
        getDragScrollThresholdX(): number;
        setDragScrollThresholdX(value: number): void;
        resetDragScrollThresholdX(): void;
        getDragScrollThresholdY(): number;
        setDragScrollThresholdY(value: number): void;
        resetDragScrollThresholdY(): void;
        getDragScrollSlowDownFactor(): number;
        setDragScrollSlowDownFactor(value: number): void;
        resetDragScrollSlowDownFactor(): void;
        getPaneSize(): IMap | null;
        getItemTop(item: qx.ui.core.Widget): number;
        getItemBottom(item: qx.ui.core.Widget): number;
        getItemLeft(item: qx.ui.core.Widget): number;
        getItemRight(item: qx.ui.core.Widget): number;
        scrollToX(value: number, duration?: number): void;
        scrollByX(value: number, duration?: number): void;
        getScrollX(): number;
        scrollToY(value: number, duration?: number): void;
        scrollByY(value: number, duration?: number): void;
        getScrollY(): number;
        stopScrollAnimationX(): void;
        stopScrollAnimationY(): void;
        protected _onScrollAnimationEnd(direction: string): void;
        protected _onScrollBarX(e: qx.event.type.Data): void;
        protected _onScrollBarY(e: qx.event.type.Data): void;
        protected _onScrollPaneX(e: qx.event.type.Data): void;
        protected _onScrollPaneY(e: qx.event.type.Data): void;
        protected _onChangeScrollbarXVisibility(e: qx.event.type.Event): void;
        protected _onChangeScrollbarYVisibility(e: qx.event.type.Event): void;
        protected _computeScrollbars(): void;
        getScrollbarX(): any;
        setScrollbarX(value: any): void;
        resetScrollbarX(): void;
        getScrollbarY(): any;
        setScrollbarY(value: any): void;
        resetScrollbarY(): void;
        setScrollbar(value: any): void;
        resetScrollbar(): void;

    }
}
declare module qx.ui.core.scroll {
    class MWheelHandling {
        protected _onMouseWheel(e: qx.event.type.Mouse): void;

    }
}
declare module qx.ui.core.scroll {
    class MRoll {
        protected _addRollHandling(): void;
        protected _removeRollHandling(): void;
        protected _onPointerDownForRoll(e: qx.event.type.Pointer): void;
        protected _onRoll(e: qx.event.type.Roll): void;

    }
}
declare module qx.ui.core.scroll {
    interface IScrollBar {
        scrollTo(position: number, duration: number): void;
        scrollBy(offset: number, duration: number): void;
        scrollBySteps(steps: number, duration: number): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getMaximum(): any;
        setMaximum(value: any): void;
        resetMaximum(): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getKnobFactor(): any;
        setKnobFactor(value: any): void;
        resetKnobFactor(): void;

    }
}
declare module qx.ui.core.scroll {
    class ScrollPane extends qx.ui.core.Widget {
        add(widget?: qx.ui.core.Widget): void;
        remove(widget?: qx.ui.core.Widget): void;
        getChildren(): any[];
        protected _onUpdate(e: qx.event.type.Event): void;
        protected _onScroll(e: qx.event.type.Event): void;
        protected _onAppear(e: qx.event.type.Event): void;
        getItemTop(item: qx.ui.core.Widget): number;
        getItemBottom(item: qx.ui.core.Widget): number;
        getItemLeft(item: qx.ui.core.Widget): number;
        getItemRight(item: qx.ui.core.Widget): number;
        getScrollSize(): IMap;
        getScrollMaxX(): number;
        getScrollMaxY(): number;
        scrollToX(value: number, duration?: number): void;
        scrollToY(value: number, duration?: number): void;
        scrollByX(x?: number, duration?: number): void;
        scrollByY(y?: number, duration?: number): void;
        stopScrollAnimation(): void;
        protected _applyScrollX(): void;
        protected _transformScrollX(value: number): number;
        protected _applyScrollY(): void;
        protected _transformScrollY(value: number): number;
        getScrollX(): any;
        setScrollX(value: any): void;
        resetScrollX(): void;
        getScrollY(): any;
        setScrollY(value: any): void;
        resetScrollY(): void;

    }
}
declare module qx.ui.core.scroll {
    class MScrollBarFactory {
        protected _createScrollBar(orientation?: string): qx.ui.core.scroll.IScrollBar;

    }
}
declare module qx.ui.core {
    class ColumnData extends qx.ui.core.LayoutItem {
        getComputedWidth(): number;
        getFlex(): number;
        setColumnWidth(width: number | null, flex?: number): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;

    }
}
declare module qx.ui.core {
    class DragDropCursor extends qx.ui.basic.Image {
        getLayoutLocation(widget: qx.ui.core.Widget): IMap | null;
        moveTo(left: number, top: number): void;
        placeToWidget(target: qx.ui.core.Widget, liveupdate: boolean): boolean;
        placeToPointer(event: qx.event.type.Pointer): void;
        placeToElement(elem: HTMLElement, liveupdate: boolean): void;
        placeToPoint(point: IMap): void;
        protected _getPlacementOffsets(): IMap;
        protected _place(coords: IMap): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getPlaceMethod(): any;
        setPlaceMethod(value: any): void;
        resetPlaceMethod(): void;
        getDomMove(): boolean;
        isDomMove(): boolean;
        setDomMove(value: boolean): void;
        resetDomMove(): void;
        getPlacementModeX(): any;
        setPlacementModeX(value: any): void;
        resetPlacementModeX(): void;
        getPlacementModeY(): any;
        setPlacementModeY(value: any): void;
        resetPlacementModeY(): void;
        getOffsetLeft(): number;
        setOffsetLeft(value: number): void;
        resetOffsetLeft(): void;
        getOffsetTop(): number;
        setOffsetTop(value: number): void;
        resetOffsetTop(): void;
        getOffsetRight(): number;
        setOffsetRight(value: number): void;
        resetOffsetRight(): void;
        getOffsetBottom(): number;
        setOffsetBottom(value: number): void;
        resetOffsetBottom(): void;
        setOffset(value: any): void;
        resetOffset(): void;
        static getInstance(): DragDropCursor;
        protected _applyAction(): void;
        getAction(): any;
        setAction(value: any): void;
        resetAction(): void;

    }
}
declare module qx.ui.core {
    class MLayoutHandling {
        static remap(members: IMap): void;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;

    }
}
declare module qx.ui.core {
    class MChildrenHandling {
        static remap(members: IMap): void;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;

    }
}
declare module qx.ui.core {
    class MExecutable {
        execute(): void;
        protected _applyCommand(): void;
        getCommand(): qx.ui.command.Command;
        setCommand(value: qx.ui.command.Command): void;
        resetCommand(): void;

    }
}
declare module qx.ui.core {
    class FocusHandler extends qx.core.Object {
        static getInstance(): FocusHandler;
        connectTo(root: qx.ui.root.Abstract): void;
        addRoot(widget: qx.ui.core.Widget): void;
        removeRoot(widget: qx.ui.core.Widget): void;
        getActiveWidget(): qx.ui.core.Widget | null;
        isActive(widget: qx.ui.core.Widget): boolean;
        getFocusedWidget(): qx.ui.core.Widget | null;
        isFocused(widget: qx.ui.core.Widget): boolean;
        isFocusRoot(widget: qx.ui.core.Widget): boolean;
        protected _onActivate(e: qx.event.type.Focus): void;
        protected _onDeactivate(e: qx.event.type.Focus): void;
        protected _onFocusIn(e: qx.event.type.Focus): void;
        protected _onFocusOut(e: qx.event.type.Focus): void;
        getUseTabNavigation(): boolean;
        isUseTabNavigation(): boolean;
        setUseTabNavigation(value: boolean): void;
        resetUseTabNavigation(): void;

    }
}
declare module qx.ui.core {
    class MDragDropScrolling {
        protected _findScrollableParent(widget: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        protected _isScrollable(widget: qx.ui.core.Widget): boolean;
        protected _getBounds(scrollable: qx.ui.core.Widget): IMap;
        protected _getEdgeType(diff: IMap, thresholdX: number, thresholdY: number): string;
        protected _getAxis(edgeType: string): string;
        protected _getThresholdByEdgeType(edgeType: string): number;
        protected _isScrollbarVisible(scrollable: qx.ui.core.Widget, axis: string): boolean;
        protected _isScrollbarExceedingMaxPos(scrollbar: qx.ui.core.scroll.IScrollBar, axis: string, amount: number): boolean;
        protected _calculateThresholdExceedance(diff: number, threshold: number): number;
        protected _calculateScrollAmount(scrollbarSize: number, exceedanceAmount: number): number;
        protected _scrollBy(scrollable: qx.ui.core.Widget, axis: string, exceedanceAmount: number): void;
        getDragScrollThresholdX(): number;
        setDragScrollThresholdX(value: number): void;
        resetDragScrollThresholdX(): void;
        getDragScrollThresholdY(): number;
        setDragScrollThresholdY(value: number): void;
        resetDragScrollThresholdY(): void;
        getDragScrollSlowDownFactor(): number;
        setDragScrollSlowDownFactor(value: number): void;
        resetDragScrollSlowDownFactor(): void;

    }
}
declare module qx.ui.core {
    class SingleSelectionManager extends qx.core.Object {
        constructor(selectionProvider?: qx.ui.core.ISingleSelectionProvider);
        getSelected(): any;
        setSelected(item: qx.ui.core.Widget): void;
        resetSelected(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        getAllowEmptySelection(): boolean;
        isAllowEmptySelection(): boolean;
        setAllowEmptySelection(value: boolean): void;
        resetAllowEmptySelection(): void;

    }
}
declare module qx.ui.core {
    interface ISingleSelectionProvider {
        getItems(): qx.ui.core.Widget[];
        isItemSelectable(item: qx.ui.core.Widget): boolean;

    }
}
declare module qx.ui.core {
    interface IMultiSelection extends qx.ui.core.ISingleSelection {
        selectAll(): void;
        addToSelection(item: qx.ui.core.Widget): void;
        removeFromSelection(item: qx.ui.core.Widget): void;

    }
}
declare module qx.ui.core {
    class MBlocker {
        protected _createBlocker(): qx.ui.core.Blocker;
        protected _applyBlockerColor(): void;
        protected _applyBlockerOpacity(): void;
        block(): void;
        isBlocked(): boolean;
        unblock(): void;
        forceUnblock(): void;
        blockContent(zIndex: number): void;
        getBlocker(): qx.ui.core.Blocker;
        getBlockerColor(): string;
        setBlockerColor(value: string): void;
        resetBlockerColor(): void;
        getBlockerOpacity(): number;
        setBlockerOpacity(value: number): void;
        resetBlockerOpacity(): void;

    }
}
declare module qx.ui.core {
    class MMovable {
        protected _activateMoveHandle(widget: qx.ui.core.Widget): void;
        protected _onMoveRoll(e: qx.event.type.Roll): void;
        protected _onMovePointerDown(e: qx.event.type.Pointer): void;
        protected _onMovePointerMove(e: qx.event.type.Pointer): void;
        protected _onMovePointerUp(e: qx.event.type.Pointer): void;
        getMovable(): boolean;
        isMovable(): boolean;
        setMovable(value: boolean): void;
        resetMovable(): void;
        getUseMoveFrame(): boolean;
        isUseMoveFrame(): boolean;
        setUseMoveFrame(value: boolean): void;
        resetUseMoveFrame(): void;

    }
}
declare module qx.ui.core {
    class EventHandler extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        protected _dispatchEvent(domEvent: qx.event.type.Event): void;

    }
}
declare module qx.ui.core {
    class MMultiSelectionHandling {
        setValue(items: null | null): null | TypeError;
        getValue(): qx.ui.core.Widget[];
        resetValue(): void;
        selectAll(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        addToSelection(item: qx.ui.core.Widget): void;
        removeFromSelection(item: qx.ui.core.Widget): void;
        selectRange(begin: qx.ui.core.Widget, end: qx.ui.core.Widget): void;
        resetSelection(): void;
        setSelection(items: qx.ui.core.Widget[]): void;
        getSelection(): qx.ui.core.Widget[];
        getSortedSelection(): qx.ui.core.Widget[];
        isSelectionEmpty(): boolean;
        getSelectionContext(): any;
        protected _getManager(): qx.ui.core.selection.Abstract;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        invertSelection(): void;
        protected _getLeadItem(): qx.ui.core.Widget;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onSelectionChange(e: qx.event.type.Data): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;

    }
}
declare module qx.ui.core {
    class MPlacement {
        static setVisibleElement(elem: qx.ui.core.Widget): void;
        static getVisibleElement(): qx.ui.core.Widget | null;
        static setMoveDirection(direction: string): void;
        static getMoveDirection(): string;
        getLayoutLocation(widget: qx.ui.core.Widget): IMap | null;
        moveTo(left: number, top: number): void;
        placeToWidget(target: qx.ui.core.Widget, liveupdate: boolean): boolean;
        placeToPointer(event: qx.event.type.Pointer): void;
        placeToElement(elem: HTMLElement, liveupdate: boolean): void;
        placeToPoint(point: IMap): void;
        protected _getPlacementOffsets(): IMap;
        protected _place(coords: IMap): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getPlaceMethod(): any;
        setPlaceMethod(value: any): void;
        resetPlaceMethod(): void;
        getDomMove(): boolean;
        isDomMove(): boolean;
        setDomMove(value: boolean): void;
        resetDomMove(): void;
        getPlacementModeX(): any;
        setPlacementModeX(value: any): void;
        resetPlacementModeX(): void;
        getPlacementModeY(): any;
        setPlacementModeY(value: any): void;
        resetPlacementModeY(): void;
        getOffsetLeft(): number;
        setOffsetLeft(value: number): void;
        resetOffsetLeft(): void;
        getOffsetTop(): number;
        setOffsetTop(value: number): void;
        resetOffsetTop(): void;
        getOffsetRight(): number;
        setOffsetRight(value: number): void;
        resetOffsetRight(): void;
        getOffsetBottom(): number;
        setOffsetBottom(value: number): void;
        resetOffsetBottom(): void;
        setOffset(value: any): void;
        resetOffset(): void;

    }
}
declare module qx.ui.core.queue {
    class Widget {
        static remove(widget: qx.ui.core.Widget, job?: string): void;
        static add(widget: qx.ui.core.Widget, job?: string): void;
        static flush(): void;

    }
}
declare module qx.ui.core.queue {
    class Layout {
        static remove(widget: qx.ui.core.Widget): void;
        static add(widget: qx.ui.core.Widget): void;
        static isScheduled(widget: qx.ui.core.Widget): boolean;
        static flush(): void;
        static getNestingLevel(widget: qx.ui.core.Widget): number;

    }
}
declare module qx.ui.core.queue {
    class Visibility {
        static remove(widget: qx.ui.core.Widget): void;
        static isVisible(widget: qx.ui.core.Widget): boolean;
        static add(widget: qx.ui.core.Widget): void;
        static flush(): void;

    }
}
declare module qx.ui.core.queue {
    class Manager {
        static scheduleFlush(job: string): void;
        static flush(): void;

    }
}
declare module qx.ui.core.queue {
    class Appearance {
        static remove(widget: qx.ui.core.Widget): void;
        static add(widget: qx.ui.core.Widget): void;
        static has(widget: qx.ui.core.Widget): boolean;
        static flush(): void;

    }
}
declare module qx.ui.core.queue {
    class Dispose {
        static add(widget: qx.ui.core.Widget): void;
        static isEmpty(): boolean;
        static flush(): void;

    }
}
declare module qx.ui.core {
    interface ISingleSelection {
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];

    }
}
declare module qx.ui.core {
    class MRemoteChildrenHandling {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;

    }
}
declare module qx.ui.core.selection {
    class Widget extends qx.ui.core.selection.Abstract {
        constructor(widget?: qx.ui.core.Widget);
        protected _isItemSelectable(item: qx.ui.core.Widget): boolean;
        protected _getWidget(): qx.ui.core.Widget;

    }
}
declare module qx.ui.core.selection {
    class Abstract extends qx.core.Object {
        getSelectionContext(): string;
        selectAll(): void;
        selectItem(item: any): void;
        addItem(item: any): void;
        removeItem(item: any): void;
        selectItemRange(begin: any, end: any): void;
        clearSelection(): void;
        replaceSelection(items: qx.data.Array): void;
        getSelectedItem(): any;
        getSelection(): any[];
        getSortedSelection(): any[];
        isItemSelected(item: any): boolean;
        isSelectionEmpty(): boolean;
        invertSelection(): void;
        protected _setLeadItem(value: any): void;
        getLeadItem(): any;
        protected _setAnchorItem(value: any): void;
        protected _getAnchorItem(): any;
        protected _isSelectable(item: any): boolean;
        protected _getSelectableFromPointerEvent(event: qx.event.type.Pointer): any | null;
        protected _selectableToHashCode(item: any): string;
        protected _styleSelectable(item: any, type: string, enabled: boolean): void;
        protected _capture(): void;
        protected _releaseCapture(): void;
        protected _getLocation(): IMap;
        protected _getDimension(): IMap;
        protected _getSelectableLocationX(item: any): IMap;
        protected _getSelectableLocationY(item: any): IMap;
        protected _getScroll(): IMap;
        protected _scrollBy(xoff: number, yoff: number): void;
        protected _scrollItemIntoView(item: any): void;
        getSelectables(all: boolean): qx.data.Array;
        protected _getSelectableRange(item1: any, item2: any): qx.data.Array;
        protected _getFirstSelectable(): any;
        protected _getLastSelectable(): any;
        protected _getFirstVisibleSelectable(): any;
        protected _getLastVisibleSelectable(): any;
        protected _getRelatedSelectable(item: any, relation: string): any;
        protected _getPage(lead: any, up?: boolean): void;
        protected _applyMode(): void;
        handlePointerOver(event: qx.event.type.Pointer): void;
        handlePointerDown(event: qx.event.type.Pointer): void;
        handleTap(event: qx.event.type.Tap): void;
        handleLoseCapture(event: qx.event.type.Pointer): void;
        handlePointerMove(event: qx.event.type.Pointer): void;
        handleAddItem(e: qx.event.type.Data): void;
        handleRemoveItem(e: qx.event.type.Data): void;
        protected _cleanup(): void;
        protected _onInterval(e: qx.event.type.Event): void;
        protected _autoSelect(): void;
        handleKeyPress(event: qx.event.type.KeySequence): void;
        protected _selectAllItems(): void;
        protected _clearSelection(): void;
        protected _selectItemRange(item1: any, item2: any, extend?: boolean): void;
        protected _deselectItemRange(item1: any, item2: any): void;
        protected _getSelectedItem(): any;
        protected _setSelectedItem(item: any): void;
        protected _addToSelection(item: any): void;
        protected _toggleInSelection(item: any): void;
        protected _removeFromSelection(item: any): void;
        protected _replaceMultiSelection(items: qx.data.Array): void;
        protected _fireChange(context: string): void;
        protected _applyDefaultSelection(force: boolean): any;
        getMode(): any;
        setMode(value: any): void;
        resetMode(): void;
        getDrag(): boolean;
        isDrag(): boolean;
        setDrag(value: boolean): void;
        resetDrag(): void;
        getQuick(): boolean;
        isQuick(): boolean;
        setQuick(value: boolean): void;
        resetQuick(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;

    }
}
declare module qx.ui.core.selection {
    class ScrollArea extends qx.ui.core.selection.Widget {

    }
}
declare module qx.ui.core {
    class MRemoteLayoutHandling {
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;

    }
}
declare module qx.ui.core {
    class MSingleSelectionHandling {
        setValue(item: null | null): null | TypeError;
        getValue(): null | qx.ui.core.Widget;
        resetValue(): void;
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        protected _onChangeSelected(e: qx.event.type.Data): void;

    }
}
declare module qx.ui.core {
    class LayoutItem extends qx.core.Object {
        getBounds(): IMap | null;
        clearSeparators(): void;
        renderSeparator(separator: string | null, bounds: IMap): void;
        renderLayout(left: number, top: number, width: number, height: number): IMap;
        isExcluded(): boolean;
        hasValidLayout(): boolean;
        scheduleLayoutUpdate(): void;
        invalidateLayoutCache(): void;
        getSizeHint(compute?: boolean): IMap;
        protected _computeSizeHint(): IMap;
        protected _hasHeightForWidth(): boolean;
        protected _getHeightForWidth(width: number): number;
        protected _getLayout(): qx.ui.layout.Abstract;
        protected _applyMargin(): void;
        protected _applyAlign(): void;
        protected _applyDimension(): void;
        protected _applyStretching(): void;
        hasUserBounds(): boolean;
        setUserBounds(left: number, top: number, width: number, height: number): void;
        resetUserBounds(): void;
        setLayoutProperties(props: IMap): void;
        getLayoutProperties(): IMap;
        clearLayoutProperties(): void;
        updateLayoutProperties(props?: IMap): void;
        getApplicationRoot(): qx.ui.root.Abstract;
        getLayoutParent(): qx.ui.core.Widget | null;
        setLayoutParent(parent: qx.ui.core.Widget | null): void;
        isRootWidget(): boolean;
        protected _getRoot(): qx.ui.core.Widget;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;

    }
}
declare module qx.ui.core {
    class MNativeOverflow {
        protected _applyOverflowX(): void;
        protected _applyOverflowY(): void;
        getOverflowX(): any;
        setOverflowX(value: any): void;
        resetOverflowX(): void;
        getOverflowY(): any;
        setOverflowY(value: any): void;
        resetOverflowY(): void;
        setOverflow(value: any): void;
        resetOverflow(): void;

    }
}
declare module qx.ui.core {
    class Blocker extends qx.core.Object {
        constructor(widget?: qx.ui.core.Widget);
        protected _updateBlockerBounds(bounds: IMap): void;
        protected _applyColor(): void;
        protected _applyOpacity(): void;
        protected _backupActiveWidget(): void;
        protected _restoreActiveWidget(): void;
        getBlockerElement(widget: qx.ui.core.Widget): qx.html.Element;
        block(): void;
        protected _block(zIndex: number, blockContent: boolean): void;
        isBlocked(): boolean;
        unblock(): void;
        forceUnblock(): void;
        blockContent(zIndex: number): void;
        getColor(): string;
        setColor(value: string): void;
        resetColor(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getKeepBlockerActive(): boolean;
        isKeepBlockerActive(): boolean;
        setKeepBlockerActive(value: boolean): void;
        resetKeepBlockerActive(): void;

    }
}
declare module qx.ui.core {
    class DragDropScrolling extends qx.core.Object {
        protected _findScrollableParent(widget: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        protected _isScrollable(widget: qx.ui.core.Widget): boolean;
        protected _getBounds(scrollable: qx.ui.core.Widget): IMap;
        protected _getEdgeType(diff: IMap, thresholdX: number, thresholdY: number): string;
        protected _getAxis(edgeType: string): string;
        protected _getThresholdByEdgeType(edgeType: string): number;
        protected _isScrollbarVisible(scrollable: qx.ui.core.Widget, axis: string): boolean;
        protected _isScrollbarExceedingMaxPos(scrollbar: qx.ui.core.scroll.IScrollBar, axis: string, amount: number): boolean;
        protected _calculateThresholdExceedance(diff: number, threshold: number): number;
        protected _calculateScrollAmount(scrollbarSize: number, exceedanceAmount: number): number;
        protected _scrollBy(scrollable: qx.ui.core.Widget, axis: string, exceedanceAmount: number): void;
        getDragScrollThresholdX(): number;
        setDragScrollThresholdX(value: number): void;
        resetDragScrollThresholdX(): void;
        getDragScrollThresholdY(): number;
        setDragScrollThresholdY(value: number): void;
        resetDragScrollThresholdY(): void;
        getDragScrollSlowDownFactor(): number;
        setDragScrollSlowDownFactor(value: number): void;
        resetDragScrollSlowDownFactor(): void;
        protected _getWidget(): qx.ui.core.Widget;

    }
}
declare module qx.ui.indicator {
    class ProgressBar extends qx.ui.container.Composite {
        constructor(value?: number, maximum?: number);
        protected _applyValue(): void;
        protected _applyMaximum(): void;
        protected _changeProgress(value: number): void;
        getMaximum(): any;
        setMaximum(value: any): void;
        resetMaximum(): void;
        getValue(): any;
        setValue(value: any): void;
        resetValue(): void;

    }
}
declare module qx.ui.menubar {
    class MenuBar extends qx.ui.toolbar.ToolBar {
        getOpenMenu(): qx.ui.menu.Menu;
        setOpenMenu(value: qx.ui.menu.Menu): void;
        resetOpenMenu(): void;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getOverflowIndicator(): qx.ui.core.Widget;
        setOverflowIndicator(value: qx.ui.core.Widget): void;
        resetOverflowIndicator(): void;
        getOverflowHandling(): boolean;
        isOverflowHandling(): boolean;
        setOverflowHandling(value: boolean): void;
        resetOverflowHandling(): void;

    }
}
declare module qx.ui.menubar {
    class Button extends qx.ui.form.MenuButton {
        getMenuBar(): qx.ui.menubar.MenuBar;

    }
}
declare module qx.ui.embed {
    class Canvas extends qx.ui.core.Widget {
        constructor(canvasWidth?: number, canvasHeight?: number);
        protected _applyCanvasWidth(): void;
        protected _applyCanvasHeight(): void;
        update(): void;
        protected _onResize(e: qx.event.type.Data): void;
        getContext2d(): CanvasRenderingContext2D;
        protected _draw(width: number, height: number, context: CanvasRenderingContext2D): void;
        getSyncDimension(): boolean;
        isSyncDimension(): boolean;
        setSyncDimension(value: boolean): void;
        resetSyncDimension(): void;
        getCanvasWidth(): number;
        setCanvasWidth(value: number): void;
        resetCanvasWidth(): void;
        getCanvasHeight(): number;
        setCanvasHeight(value: number): void;
        resetCanvasHeight(): void;

    }
}
declare module qx.ui.embed {
    class Iframe extends qx.ui.embed.AbstractIframe {
        constructor(source?: string);
        protected _createBlockerElement(): any;
        protected _onIframeLoad(e: qx.event.type.Event): void;
        block(): void;
        release(): void;
        protected _onNativeContextMenu(e: qx.event.type.Mouse): void;
        protected _applyNativeHelp(): void;
        protected _syncSourceAfterDOMMove(): void;
        protected _applyScrollbar(): void;
        getNativeHelp(): boolean;
        isNativeHelp(): boolean;
        setNativeHelp(value: boolean): void;
        resetNativeHelp(): void;
        getScrollbar(): any;
        setScrollbar(value: any): void;
        resetScrollbar(): void;

    }
}
declare module qx.ui.embed {
    class ThemedIframe extends qx.ui.embed.AbstractIframe {
        protected _addRollHandling(): void;
        protected _removeRollHandling(): void;
        protected _onPointerDownForRoll(e: qx.event.type.Pointer): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onIframeLoad(): void;
        protected _onIframeResize(): void;
        protected _disableScollbars(): void;
        protected _addRollListener(): void;
        protected _startIframeObserver(): void;
        protected _stopIframeObserver(): void;
        protected _onIframeObserverInterval(): void;
        protected _preventIframeScrolling(): void;
        protected _updateScrollbars(): void;
        protected _getIframeSize(): any | null;
        protected _updateCornerWidget(): void;
        protected _configureScrollbar(scrollbarId: string, show: boolean, containerSize: number, contentSize: number): void;
        protected _onScrollBarX(e: qx.event.type.Data): void;
        protected _onScrollBarY(e: qx.event.type.Data): void;
        scrollToX(x: number): void;
        scrollToY(y: number): void;
        getScrollbarX(): any;
        setScrollbarX(value: any): void;
        resetScrollbarX(): void;
        getScrollbarY(): any;
        setScrollbarY(value: any): void;
        resetScrollbarY(): void;
        setScrollbar(value: any): void;
        resetScrollbar(): void;

    }
}
declare module qx.ui.embed {
    class Html extends qx.ui.core.Widget {
        protected _applyOverflowX(): void;
        protected _applyOverflowY(): void;
        getOverflowX(): any;
        setOverflowX(value: any): void;
        resetOverflowX(): void;
        getOverflowY(): any;
        setOverflowY(value: any): void;
        resetOverflowY(): void;
        setOverflow(value: any): void;
        resetOverflow(): void;
        constructor(html?: string);
        protected _applyHtml(): void;
        protected _applyCssClass(): void;
        getHtml(): string;
        setHtml(value: string): void;
        resetHtml(): void;
        getCssClass(): string;
        setCssClass(value: string): void;
        resetCssClass(): void;

    }
}
declare module qx.ui.embed {
    class AbstractIframe extends qx.ui.core.Widget {
        constructor(source?: string);
        protected _getIframeElement(): qx.html.Iframe;
        protected _applySource(): void;
        protected _applyFrameName(): void;
        getWindow(): Window;
        getDocument(): Document;
        getBody(): HTMLElement;
        getName(): string;
        reload(): void;
        getSource(): string;
        setSource(value: string): void;
        resetSource(): void;
        getFrameName(): string;
        setFrameName(value: string): void;
        resetFrameName(): void;

    }
}
declare module qx.ui.layout {
    class Dock extends qx.ui.layout.Abstract {
        constructor(spacingX?: number, spacingY?: number, separatorX?: string | null, separatorY?: string | null);
        protected _applySort(): void;
        protected _getSeparatorWidths(): IMap;
        getSort(): any;
        setSort(value: any): void;
        resetSort(): void;
        getSeparatorX(): qx.ui.decoration.Decorator;
        setSeparatorX(value: qx.ui.decoration.Decorator): void;
        resetSeparatorX(): void;
        getSeparatorY(): qx.ui.decoration.Decorator;
        setSeparatorY(value: qx.ui.decoration.Decorator): void;
        resetSeparatorY(): void;
        getConnectSeparators(): boolean;
        isConnectSeparators(): boolean;
        setConnectSeparators(value: boolean): void;
        resetConnectSeparators(): void;
        getSpacingX(): number;
        setSpacingX(value: number): void;
        resetSpacingX(): void;
        getSpacingY(): number;
        setSpacingY(value: number): void;
        resetSpacingY(): void;

    }
}
declare module qx.ui.layout {
    class Canvas extends qx.ui.layout.Abstract {
        getDesktop(): boolean;
        isDesktop(): boolean;
        setDesktop(value: boolean): void;
        resetDesktop(): void;

    }
}
declare module qx.ui.layout {
    class LineSizeIterator {
        constructor(children?: qx.ui.core.Widget[], spacing?: number);
        computeNextLine(availWidth: number): IMap;
        hasMoreLines(): boolean;

    }
}
declare module qx.ui.layout {
    class Flow extends qx.ui.layout.Abstract {
        constructor(spacingX?: number, spacingY?: number, alignX?: string);
        getLastLineChildren(width: number): qx.data.Array;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getSpacingX(): number;
        setSpacingX(value: number): void;
        resetSpacingX(): void;
        getSpacingY(): number;
        setSpacingY(value: number): void;
        resetSpacingY(): void;
        getReversed(): boolean;
        isReversed(): boolean;
        setReversed(value: boolean): void;
        resetReversed(): void;

    }
}
declare module qx.ui.layout {
    class Grid extends qx.ui.layout.Abstract {
        constructor(spacingX?: number, spacingY?: number);
        protected _setRowData(row: number, key: string, value: any): void;
        protected _setColumnData(column: number, key: string, value: any): void;
        setSpacing(spacing: number): qx.ui.layout.Grid;
        setColumnAlign(column: number, hAlign: string, vAlign: string): qx.ui.layout.Grid;
        getColumnAlign(column: number): IMap;
        setRowAlign(row: number, hAlign: string, vAlign: string): qx.ui.layout.Grid;
        getRowAlign(row: number): IMap;
        getCellWidget(row: number, column: number): qx.ui.core.Widget | null;
        getRowCount(): number;
        getColumnCount(): number;
        getCellAlign(row: number, column: number): IMap;
        setColumnFlex(column: number, flex: number): qx.ui.layout.Grid;
        getColumnFlex(column: number): number;
        setRowFlex(row: number, flex: number): qx.ui.layout.Grid;
        getRowFlex(row: number): number;
        setColumnMaxWidth(column: number, maxWidth: number): qx.ui.layout.Grid;
        getColumnMaxWidth(column: number): number;
        setColumnWidth(column: number, width: number): qx.ui.layout.Grid;
        getColumnWidth(column: number): number;
        setColumnMinWidth(column: number, minWidth: number): qx.ui.layout.Grid;
        getColumnMinWidth(column: number): number;
        setRowMaxHeight(row: number, maxHeight: number): qx.ui.layout.Grid;
        getRowMaxHeight(row: number): number;
        setRowHeight(row: number, height: number): qx.ui.layout.Grid;
        getRowHeight(row: number): number;
        setRowMinHeight(row: number, minHeight: number): qx.ui.layout.Grid;
        getRowMinHeight(row: number): number;
        protected _getOuterSize(widget: qx.ui.core.LayoutItem): IMap;
        protected _fixHeightsRowSpan(rowHeights: IMap[]): void;
        protected _fixWidthsColSpan(colWidths: IMap[]): void;
        protected _getRowHeights(): IMap[];
        protected _getColWidths(): IMap[];
        protected _getColumnFlexOffsets(width: number): number[];
        protected _getRowFlexOffsets(height: number): number[];
        protected _getColSpans(): qx.data.Array;
        getSpacingX(): number;
        setSpacingX(value: number): void;
        resetSpacingX(): void;
        getSpacingY(): number;
        setSpacingY(value: number): void;
        resetSpacingY(): void;
        getAllowGrowSpannedCellWidth(): boolean;
        isAllowGrowSpannedCellWidth(): boolean;
        setAllowGrowSpannedCellWidth(value: boolean): void;
        resetAllowGrowSpannedCellWidth(): void;

    }
}
declare module qx.ui.layout {
    class VBox extends qx.ui.layout.Abstract {
        constructor(spacing?: number, alignY?: string, separator?: string | null);
        protected _applyReversed(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getSeparator(): qx.ui.decoration.Decorator;
        setSeparator(value: qx.ui.decoration.Decorator): void;
        resetSeparator(): void;
        getReversed(): boolean;
        isReversed(): boolean;
        setReversed(value: boolean): void;
        resetReversed(): void;

    }
}
declare module qx.ui.layout {
    class Util {
        static computeFlexOffsets(flexibles: IMap, avail: number, used: number): IMap;
        static computeHorizontalAlignOffset(align: string, width: number, availWidth: number, marginLeft?: number, marginRight?: number): number;
        static computeVerticalAlignOffset(align: string, height: number, availHeight: number, marginTop?: number, marginBottom?: number): number;
        static collapseMargins(...varargs: any[]): number;
        static computeHorizontalGaps(children: qx.data.Array, spacing?: number, collapse?: boolean): number;
        static computeVerticalGaps(children: qx.data.Array, spacing?: number, collapse?: boolean): number;
        static computeHorizontalSeparatorGaps(children: qx.ui.core.LayoutItem[], spacing: number, separator: string | null): number;
        static computeVerticalSeparatorGaps(children: qx.ui.core.LayoutItem[], spacing: number, separator: string | null): number;
        static arrangeIdeals(beginMin: number, beginIdeal: number, beginMax: number, endMin: number, endIdeal: number, endMax: number): IMap;

    }
}
declare module qx.ui.layout {
    class Abstract extends qx.core.Object {
        invalidateLayoutCache(): void;
        renderLayout(availWidth: number, availHeight: number, padding: IMap): void;
        getSizeHint(): IMap | null;
        hasHeightForWidth(): boolean;
        getHeightForWidth(width: number): number;
        protected _computeSizeHint(): IMap;
        invalidateChildrenCache(): void;
        protected _clearSeparators(): void;
        protected _renderSeparator(separator: string | null, bounds: IMap): void;
        connectToWidget(widget: qx.ui.core.Widget): void;
        protected _getWidget(): qx.ui.core.Widget;
        protected _applyLayoutChange(): void;
        protected _getLayoutChildren(): qx.data.Array;

    }
}
declare module qx.ui.layout {
    class HBox extends qx.ui.layout.Abstract {
        constructor(spacing?: number, alignX?: string, separator?: string | null);
        protected _applyReversed(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getSeparator(): qx.ui.decoration.Decorator;
        setSeparator(value: qx.ui.decoration.Decorator): void;
        resetSeparator(): void;
        getReversed(): boolean;
        isReversed(): boolean;
        setReversed(value: boolean): void;
        resetReversed(): void;

    }
}
declare module qx.ui.layout {
    class Grow extends qx.ui.layout.Abstract {

    }
}
declare module qx.ui.layout {
    class Atom extends qx.ui.layout.Abstract {
        getGap(): number;
        setGap(value: number): void;
        resetGap(): void;
        getIconPosition(): any;
        setIconPosition(value: any): void;
        resetIconPosition(): void;
        getCenter(): boolean;
        isCenter(): boolean;
        setCenter(value: boolean): void;
        resetCenter(): void;

    }
}
declare module qx.ui.layout {
    class Basic extends qx.ui.layout.Abstract {

    }
}
declare module qx.ui.toolbar {
    class RadioButton extends qx.ui.toolbar.CheckBox implements qx.ui.form.IModel, qx.ui.form.IRadioItem {
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        protected _applyModel(): void;

    }
}
declare module qx.ui.toolbar {
    class ToolBar extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        constructor(layout?: qx.ui.layout.Abstract);
        protected _onResize(e: qx.event.type.Data): void;
        protected _recalculateOverflow(width?: number, requiredWidth?: number): void;
        protected _getNextToHide(): qx.ui.core.Widget | null;
        setRemovePriority(item: qx.ui.core.Widget, priority: number, override: boolean): void;
        protected _applyOverflowHandling(): void;
        protected _applyOverflowIndicator(): void;
        protected _setAllowMenuOpenHover(value: boolean): void;
        protected _isAllowMenuOpenHover(): boolean;
        protected _applySpacing(): void;
        protected _applyShow(): void;
        addSpacer(): qx.ui.core.Spacer;
        addSeparator(): void;
        getMenuButtons(): qx.data.Array;
        getOpenMenu(): qx.ui.menu.Menu;
        setOpenMenu(value: qx.ui.menu.Menu): void;
        resetOpenMenu(): void;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;
        getOverflowIndicator(): qx.ui.core.Widget;
        setOverflowIndicator(value: qx.ui.core.Widget): void;
        resetOverflowIndicator(): void;
        getOverflowHandling(): boolean;
        isOverflowHandling(): boolean;
        setOverflowHandling(value: boolean): void;
        resetOverflowHandling(): void;

    }
}
declare module qx.ui.toolbar {
    class MenuButton extends qx.ui.menubar.Button {
        protected _applyShowArrow(): void;
        getShowArrow(): boolean;
        isShowArrow(): boolean;
        setShowArrow(value: boolean): void;
        resetShowArrow(): void;

    }
}
declare module qx.ui.toolbar {
    class CheckBox extends qx.ui.form.ToggleButton {

    }
}
declare module qx.ui.toolbar {
    class SplitButton extends qx.ui.form.SplitButton {

    }
}
declare module qx.ui.toolbar {
    class Part extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        protected _applySpacing(): void;
        addSeparator(): void;
        getMenuButtons(): qx.data.Array;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getSpacing(): number;
        setSpacing(value: number): void;
        resetSpacing(): void;

    }
}
declare module qx.ui.toolbar {
    class Button extends qx.ui.form.Button {

    }
}
declare module qx.ui.toolbar {
    class PartContainer extends qx.ui.container.Composite {
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;

    }
}
declare module qx.ui.toolbar {
    class Separator extends qx.ui.core.Widget {

    }
}
declare module qx.ui.toolbar {
    class FileSelectorButton extends qx.ui.form.FileSelectorButton {

    }
}
declare module qx.ui.basic {
    class Label extends qx.ui.core.Widget implements qx.ui.form.IStringForm {
        constructor(value?: string);
        protected _applyTextAlign(): void;
        protected _applyBuddy(): void;
        protected _applyRich(): void;
        protected _applyWrap(): void;
        protected _applyBreakWithinWords(): void;
        protected _onWebFontStatusChange(ev: qx.event.type.Data): void;
        setValue(value: string): void;
        resetValue(): void;
        getValue(): string;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getRich(): boolean;
        isRich(): boolean;
        setRich(value: boolean): void;
        resetRich(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;
        getBreakWithinWords(): boolean;
        isBreakWithinWords(): boolean;
        setBreakWithinWords(value: boolean): void;
        resetBreakWithinWords(): void;
        getBuddy(): qx.ui.core.Widget;
        setBuddy(value: qx.ui.core.Widget): void;
        resetBuddy(): void;
        getTextAlign(): any;
        setTextAlign(value: any): void;
        resetTextAlign(): void;

    }
}
declare module qx.ui.basic {
    class Image extends qx.ui.core.Widget {
        constructor(source?: string);
        protected _applySource(): void;
        protected _applyScale(): void;
        protected _styleSource(): void;
        protected _recalc(maxWidth?: number, maxHeight?: number): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getSource(): string;
        setSource(value: string): void;
        resetSource(): void;
        getScale(): boolean;
        isScale(): boolean;
        setScale(value: boolean): void;
        resetScale(): void;
        getForceRatio(): any;
        setForceRatio(value: any): void;
        resetForceRatio(): void;
        getAllowScaleUp(): boolean;
        isAllowScaleUp(): boolean;
        setAllowScaleUp(value: boolean): void;
        resetAllowScaleUp(): void;

    }
}
declare module qx.ui.basic {
    class Atom extends qx.ui.core.Widget {
        constructor(label?: string, icon?: string);
        protected _handleLabel(): void;
        protected _handleIcon(): void;
        protected _applyLabel(): void;
        protected _applyRich(): void;
        protected _applyIcon(): void;
        protected _applyGap(): void;
        protected _applyShow(): void;
        protected _applyIconPosition(): void;
        protected _applyCenter(): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getRich(): boolean;
        isRich(): boolean;
        setRich(value: boolean): void;
        resetRich(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getGap(): number;
        setGap(value: number): void;
        resetGap(): void;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getIconPosition(): any;
        setIconPosition(value: any): void;
        resetIconPosition(): void;
        getCenter(): boolean;
        isCenter(): boolean;
        setCenter(value: boolean): void;
        resetCenter(): void;

    }
}
declare module qx.ui.style {
    class Stylesheet extends qx.core.Object {
        static getInstance(): Stylesheet;
        addRule(selector: string, css: string): void;
        hasRule(selector: string): boolean;
        removeRule(selector: string): void;

    }
}
declare module qx.ui.tabview {
    class ScrollingPage extends qx.ui.tabview.Page {
        constructor(label?: string, icon?: string);

    }
}
declare module qx.ui.tabview {
    class TabView extends qx.ui.core.Widget implements qx.ui.core.ISingleSelection {
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        constructor(barPosition?: string);
        setValue(item: null | null): null | TypeError;
        getValue(): null | qx.ui.tabview.Page;
        resetValue(): void;
        protected _createRadioGroupInstance(): qx.ui.form.RadioGroup;
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        add(page: qx.ui.tabview.Page): void;
        addAt(page: qx.ui.tabview.Page, index?: number): void;
        remove(page: qx.ui.tabview.Page): void;
        getChildren(): qx.ui.tabview.Page[];
        indexOf(page: qx.ui.tabview.Page): number;
        getRadioGroup(): qx.ui.form.RadioGroup;
        protected _applyBarPosition(value: boolean, old: boolean): void;
        protected _onChangeSelection(e: qx.event.type.Data): void;
        protected _onBeforeChangeSelection(e: qx.event.type.Event): void;
        protected _onRadioChangeSelection(e: qx.event.type.Data): void;
        protected _onPageClose(e: qx.event.type.Pointer): void;
        getBarPosition(): any;
        setBarPosition(value: any): void;
        resetBarPosition(): void;

    }
}
declare module qx.ui.tabview {
    class TabButton extends qx.ui.form.RadioButton implements qx.ui.form.IRadioItem {
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        protected _onCloseButtonTap(): void;
        protected _applyShowCloseButton(): void;
        getShowCloseButton(): boolean;
        isShowCloseButton(): boolean;
        setShowCloseButton(value: boolean): void;
        resetShowCloseButton(): void;

    }
}
declare module qx.ui.tabview {
    class Page extends qx.ui.container.Composite {
        constructor(label?: string, icon?: string);
        protected _applyIcon(): void;
        protected _applyLabel(): void;
        protected _onBtnChangeValue(param0: any): void;
        protected _applyShowCloseButton(): void;
        protected _applyTabVisibility(): void;
        protected _onButtonClose(): void;
        getButton(): qx.ui.form.RadioButton;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getShowCloseButton(): boolean;
        isShowCloseButton(): boolean;
        setShowCloseButton(value: boolean): void;
        resetShowCloseButton(): void;
        getTabVisibility(): any;
        setTabVisibility(value: any): void;
        resetTabVisibility(): void;

    }
}
declare module qx.ui.container {
    class Stack extends qx.ui.core.Widget implements qx.ui.form.IField, qx.ui.core.ISingleSelection {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        getSelection(): qx.ui.core.Widget[];
        setSelection(items: qx.ui.core.Widget[]): void;
        resetSelection(): void;
        isSelected(item: qx.ui.core.Widget): boolean;
        isSelectionEmpty(): boolean;
        getSelectables(all: boolean): qx.ui.core.Widget[];
        protected _onChangeSelected(e: qx.event.type.Data): void;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        protected _applyDynamic(): void;
        protected _getItems(): qx.ui.core.Widget[];
        protected _isAllowEmptySelection(): boolean;
        protected _isItemSelectable(item: qx.ui.core.Widget): boolean;
        protected _afterAddChild(): void;
        protected _afterRemoveChild(): void;
        previous(): void;
        next(): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getDynamic(): boolean;
        isDynamic(): boolean;
        setDynamic(value: boolean): void;
        resetDynamic(): void;

    }
}
declare module qx.ui.container {
    class Scroll extends qx.ui.core.scroll.AbstractScrollArea {
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        constructor(content?: qx.ui.core.LayoutItem);
        add(widget: qx.ui.core.Widget): void;
        remove(widget: qx.ui.core.Widget): void;
        getChildren(): any[];
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        getDragScrollThresholdX(): number;
        setDragScrollThresholdX(value: number): void;
        resetDragScrollThresholdX(): void;
        getDragScrollThresholdY(): number;
        setDragScrollThresholdY(value: number): void;
        resetDragScrollThresholdY(): void;
        getDragScrollSlowDownFactor(): number;
        setDragScrollSlowDownFactor(value: number): void;
        resetDragScrollSlowDownFactor(): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getScrollbarX(): any;
        setScrollbarX(value: any): void;
        resetScrollbarX(): void;
        getScrollbarY(): any;
        setScrollbarY(value: any): void;
        resetScrollbarY(): void;
        setScrollbar(value: any): void;
        resetScrollbar(): void;

    }
}
declare module qx.ui.container {
    class SlideBar extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        constructor(orientation?: string);
        scrollBy(offset?: number, duration?: number): void;
        scrollTo(value: number, duration?: number): void;
        protected _applyOrientation(): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onScroll(): void;
        protected _onScrollAnimationEnd(): void;
        protected _onResize(e: qx.event.type.Event): void;
        protected _onExecuteBackward(): void;
        protected _onExecuteForward(): void;
        protected _updateArrowsEnabled(): void;
        protected _showArrows(): void;
        protected _hideArrows(): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;
        getScrollStep(): number;
        setScrollStep(value: number): void;
        resetScrollStep(): void;

    }
}
declare module qx.ui.container {
    class Composite extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        constructor(layout?: qx.ui.layout.Abstract);
        protected _afterAddChild(): void;
        protected _afterRemoveChild(): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;

    }
}
declare module qx.ui.container {
    class Resizer extends qx.ui.container.Composite {
        protected _getResizeFrame(): qx.ui.core.Widget;
        getResizableTop(): boolean;
        isResizableTop(): boolean;
        setResizableTop(value: boolean): void;
        resetResizableTop(): void;
        getResizableRight(): boolean;
        isResizableRight(): boolean;
        setResizableRight(value: boolean): void;
        resetResizableRight(): void;
        getResizableBottom(): boolean;
        isResizableBottom(): boolean;
        setResizableBottom(value: boolean): void;
        resetResizableBottom(): void;
        getResizableLeft(): boolean;
        isResizableLeft(): boolean;
        setResizableLeft(value: boolean): void;
        resetResizableLeft(): void;
        setResizable(value: any): void;
        resetResizable(): void;
        getResizeSensitivity(): number;
        setResizeSensitivity(value: number): void;
        resetResizeSensitivity(): void;
        getUseResizeFrame(): boolean;
        isUseResizeFrame(): boolean;
        setUseResizeFrame(value: boolean): void;
        resetUseResizeFrame(): void;

    }
}
declare module qx.ui.progressive.renderer.table {
    class Widths extends qx.core.Object {
        constructor(numColumns?: number);
        getData(): qx.data.Array;
        setWidth(column: number, width: number | null): void;
        setMinWidth(column: number, width: number): void;
        setMaxWidth(column: number, width: number): void;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Conditional extends qx.ui.progressive.renderer.table.cell.Abstract {
        constructor(align?: qx.ui.progressive.renderer.table.cell.String, color?: qx.ui.progressive.renderer.table.cell.String, style?: qx.ui.progressive.renderer.table.cell.String, weight?: qx.ui.progressive.renderer.table.cell.String);
        addNumericCondition(condition: qx.ui.progressive.renderer.table.cell.String, value1: number, align: qx.ui.progressive.renderer.table.cell.String, color: qx.ui.progressive.renderer.table.cell.String, style: qx.ui.progressive.renderer.table.cell.String, weight: qx.ui.progressive.renderer.table.cell.String, target: qx.ui.progressive.renderer.table.cell.String): void;
        addBetweenCondition(condition: qx.ui.progressive.renderer.table.cell.String, value1: number, value2: number, align: qx.ui.progressive.renderer.table.cell.String, color: qx.ui.progressive.renderer.table.cell.String, style: qx.ui.progressive.renderer.table.cell.String, weight: qx.ui.progressive.renderer.table.cell.String, target: qx.ui.progressive.renderer.table.cell.String): void;
        addRegex(regex: qx.ui.progressive.renderer.table.cell.String, align: qx.ui.progressive.renderer.table.cell.String, color: qx.ui.progressive.renderer.table.cell.String, style: qx.ui.progressive.renderer.table.cell.String, weight: qx.ui.progressive.renderer.table.cell.String, target: qx.ui.progressive.renderer.table.cell.String): void;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Boolean extends qx.ui.progressive.renderer.table.cell.Icon {
        protected _resolveImages(): void;
        protected _getDefaultImageData(): void;
        getAllowToggle(): boolean;
        isAllowToggle(): boolean;
        setAllowToggle(value: boolean): void;
        resetAllowToggle(): void;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class String extends qx.ui.progressive.renderer.table.cell.Abstract {

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Icon extends qx.ui.progressive.renderer.table.cell.Abstract {
        getBlankImage(): qx.ui.progressive.renderer.table.cell.String;
        protected _identifyImage(cellInfo: IMap): IMap;
        protected _getImageData(cellInfo: IMap): IMap;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Html extends qx.ui.progressive.renderer.table.cell.Abstract {

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Abstract extends qx.core.Object {
        protected _getCellStyle(cellInfo: any): qx.ui.progressive.renderer.table.cell.String;
        protected _getCellExtras(cellInfo: any): qx.ui.progressive.renderer.table.cell.String;
        protected _getContentHtml(cellInfo: any): qx.ui.progressive.renderer.table.cell.String;
        render(cellInfo: any): qx.ui.progressive.renderer.table.cell.String;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Default extends qx.ui.progressive.renderer.table.cell.Abstract {
        protected _formatValue(value: any): qx.ui.progressive.renderer.table.cell.String;

    }
}
declare module qx.ui.progressive.renderer.table.cell {
    class Image extends qx.ui.progressive.renderer.table.cell.Icon {
        constructor(height?: number, width?: number);
        protected _getDefaultImageData(): void;

    }
}
declare module qx.ui.progressive.renderer.table {
    class Row extends qx.ui.progressive.renderer.Abstract {
        constructor(columnWidths?: qx.ui.progressive.renderer.table.Widths);
        addRenderer(column: number, renderer: qx.ui.progressive.renderer.table.cell.Abstract): void;
        removeRenderer(column: number): void;
        getLayoutChildren(): qx.data.Array;
        protected _resizeColumns(e: qx.event.type.Event): void;
        getDefaultRowHeight(): any;
        setDefaultRowHeight(value: any): void;
        resetDefaultRowHeight(): void;

    }
}
declare module qx.ui.progressive.renderer {
    class Abstract extends qx.core.Object {
        render(state: qx.ui.progressive.State, element: any): void;
        join(progressive: qx.ui.progressive.Progressive, name: string): void;

    }
}
declare module qx.ui.progressive.renderer {
    class FunctionCaller extends qx.ui.progressive.renderer.Abstract {

    }
}
declare module qx.ui.progressive {
    class State extends qx.core.Object {
        constructor(initialState?: IMap);
        getProgressive(): any;
        setProgressive(value: any): void;
        resetProgressive(): void;
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;
        getPane(): any;
        setPane(value: any): void;
        resetPane(): void;
        getBatchSize(): any;
        setBatchSize(value: any): void;
        resetBatchSize(): void;
        getRendererData(): any;
        setRendererData(value: any): void;
        resetRendererData(): void;

    }
}
declare module qx.ui.progressive.model {
    class Abstract extends qx.core.Object {
        getElementCount(): number;
        getNextElement(): any;

    }
}
declare module qx.ui.progressive.model {
    class Default extends qx.ui.progressive.model.Abstract {
        addElements(elems: qx.data.Array): void;
        addElement(elem: any): void;

    }
}
declare module qx.ui.progressive.headfoot {
    class TableHeading extends qx.ui.progressive.headfoot.Abstract {
        constructor(columnWidths?: qx.ui.progressive.renderer.table.Widths, labelArr?: qx.data.Array);
        protected _resizeColumns(e: qx.event.type.Event): void;

    }
}
declare module qx.ui.progressive.headfoot {
    class Null extends qx.ui.progressive.headfoot.Abstract {

    }
}
declare module qx.ui.progressive.headfoot {
    class Progress extends qx.ui.progressive.headfoot.Abstract {
        constructor(columnWidths?: qx.ui.progressive.renderer.table.Widths, labelArr?: qx.data.Array);

    }
}
declare module qx.ui.progressive.headfoot {
    class Abstract extends qx.ui.container.Composite {
        join(progressive: qx.ui.progressive.Progressive): void;

    }
}
declare module qx.ui.progressive.structure {
    class Abstract extends qx.core.Object {
        constructor(pane?: qx.ui.core.Widget | null);
        applyStructure(progressive: qx.ui.progressive.Progressive): void;
        getPane(): qx.ui.core.Widget;

    }
}
declare module qx.ui.progressive.structure {
    class Default extends qx.ui.progressive.structure.Abstract {
        constructor(header?: qx.ui.progressive.headfoot.Abstract | null, footer?: qx.ui.progressive.headfoot.Abstract | null, pane?: qx.ui.core.Widget | null);
        getHeader(): qx.ui.progressive.headfoot.Abstract;
        getFooter(): qx.ui.progressive.headfoot.Abstract;

    }
}
declare module qx.ui.progressive {
    class Progressive extends qx.ui.container.Composite {
        constructor(structure?: qx.ui.progressive.structure.Abstract);
        getStructure(): qx.ui.progressive.structure.Abstract;
        addRenderer(name: string, renderer: qx.ui.progressive.renderer.Abstract): void;
        removeRenderer(name: string): void;
        render(): void;
        protected _applyDataModel(value: qx.ui.progressive.model.Abstract, old: qx.ui.progressive.model.Abstract): void;
        getDataModel(): qx.ui.progressive.model.Abstract;
        setDataModel(value: qx.ui.progressive.model.Abstract): void;
        resetDataModel(): void;
        getBatchSize(): number;
        setBatchSize(value: number): void;
        resetBatchSize(): void;
        getFlushWidgetQueueAfterBatch(): boolean;
        isFlushWidgetQueueAfterBatch(): boolean;
        setFlushWidgetQueueAfterBatch(value: boolean): void;
        resetFlushWidgetQueueAfterBatch(): void;
        getInterElementTimeout(): number;
        setInterElementTimeout(value: number): void;
        resetInterElementTimeout(): void;

    }
}
declare module qx.ui.table.pane {
    class Model extends qx.core.Object {
        constructor(tableColumnModel?: qx.ui.table.columnmodel.Basic);
        protected _applyFirstColumnX(): void;
        protected _applyMaxColumnCount(): void;
        setTableColumnModel(tableColumnModel: qx.ui.table.columnmodel.Basic): void;
        protected _onColVisibilityChanged(evt: IMap): void;
        protected _onHeaderCellRendererChanged(evt: IMap): void;
        getColumnCount(): number;
        getColumnAtX(xPos: number): number;
        getX(col: number): number;
        getColumnLeft(col: number): any;
        getTotalWidth(): number;
        getFirstColumnX(): number;
        setFirstColumnX(value: number): void;
        resetFirstColumnX(): void;
        getMaxColumnCount(): number;
        setMaxColumnCount(value: number): void;
        resetMaxColumnCount(): void;

    }
}
declare module qx.ui.table.pane {
    class Header extends qx.ui.core.Widget {
        constructor(paneScroller?: qx.ui.table.pane.Scroller);
        getPaneScroller(): qx.ui.table.pane.Scroller;
        getTable(): qx.ui.table.Table;
        getBlocker(): qx.ui.core.Blocker;
        onColOrderChanged(): void;
        onPaneModelChanged(): void;
        onTableModelMetaDataChanged(): void;
        setColumnWidth(col: number, width: number, isPointerAction: boolean): void;
        setPointerOverColumn(col: number): void;
        getHeaderWidgetAtColumn(col: number): qx.ui.table.headerrenderer.HeaderCell;
        showColumnMoveFeedback(col: number, x: number): void;
        hideColumnMoveFeedback(): void;
        isShowingColumnMoveFeedback(): boolean;
        protected _updateContent(completeUpdate: boolean): void;
        protected _cleanUpCells(): void;

    }
}
declare module qx.ui.table.pane {
    class Clipper extends qx.ui.container.Composite {
        scrollToX(value: number): void;
        scrollToY(value: number): void;

    }
}
declare module qx.ui.table.pane {
    class CellEvent extends qx.event.type.Pointer {
        getRow(): number;
        setRow(value: number): void;
        resetRow(): void;
        getColumn(): number;
        setColumn(value: number): void;
        resetColumn(): void;

    }
}
declare module qx.ui.table.pane {
    class Pane extends qx.ui.core.Widget {
        constructor(paneScroller?: qx.ui.table.pane.Scroller);
        protected _applyFirstVisibleRow(): void;
        protected _applyVisibleRowCount(): void;
        getPaneScroller(): qx.ui.table.pane.Scroller;
        getTable(): qx.ui.table.Table;
        setFocusedCell(col?: number, row?: number, massUpdate?: boolean): void;
        onSelectionChanged(): void;
        onFocusChanged(): void;
        setColumnWidth(col: number, width: number): void;
        onColOrderChanged(): void;
        onPaneModelChanged(): void;
        onTableModelDataChanged(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number): void;
        onTableModelMetaDataChanged(): void;
        protected _applyMaxCacheLines(): void;
        updateContent(completeUpdate?: boolean, scrollOffset?: number, onlyRow?: number, onlySelectionOrFocusChanged?: boolean): void;
        protected _updateRowStyles(onlyRow?: number | null): void;
        protected _getRowsHtml(firstRow: number, rowCount: number): string;
        protected _scrollContent(rowOffset: number): void;
        protected _updateSingleRow(): void;
        protected _updateAllRows(): void;
        getFirstVisibleRow(): number;
        setFirstVisibleRow(value: number): void;
        resetFirstVisibleRow(): void;
        getVisibleRowCount(): number;
        setVisibleRowCount(value: number): void;
        resetVisibleRowCount(): void;
        getMaxCacheLines(): number;
        setMaxCacheLines(value: number): void;
        resetMaxCacheLines(): void;

    }
}
declare module qx.ui.table.pane {
    class FocusIndicator extends qx.ui.container.Composite {
        constructor(scroller?: qx.ui.table.pane.Scroller);
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        moveToCell(col?: number, row?: number, editing?: boolean): void;
        getRow(): number;
        setRow(value: number): void;
        resetRow(): void;
        getColumn(): number;
        setColumn(value: number): void;
        resetColumn(): void;

    }
}
declare module qx.ui.table.pane {
    class Scroller extends qx.ui.core.Widget {
        protected _createScrollBar(orientation?: string): qx.ui.core.scroll.IScrollBar;
        constructor(table?: qx.ui.table.Table);
        getPaneInsetRight(): number;
        setPaneWidth(width: number): void;
        protected _applyHorizontalScrollBarVisible(): void;
        protected _applyVerticalScrollBarVisible(): void;
        protected _applyTablePaneModel(): void;
        protected _applyShowCellFocusIndicator(): void;
        getScrollY(): number;
        setScrollY(scrollY: number, renderSync?: boolean): void;
        getScrollX(): number;
        setScrollX(scrollX: number): void;
        getTable(): qx.ui.table.Table;
        protected _createPaneClipper(): qx.ui.table.pane.Clipper;
        protected _createHeaderClipper(): qx.ui.table.pane.Clipper;
        onColVisibilityChanged(): void;
        setColumnWidth(col: number, width: number): void;
        onColOrderChanged(): void;
        onTableModelDataChanged(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number): void;
        onSelectionChanged(): void;
        onFocusChanged(): void;
        onTableModelMetaDataChanged(): void;
        protected _onPaneModelChanged(): void;
        protected _onResizePane(): void;
        updateHorScrollBarMaximum(): void;
        updateVerScrollBarMaximum(): void;
        onKeepFirstVisibleRowCompleteChanged(): void;
        protected _onAppear(): void;
        protected _onDisappear(): void;
        protected _onScrollX(e: IMap): void;
        protected _onScrollY(): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onPointermoveHeader(e: IMap): void;
        protected _onPointermovePane(e: IMap): void;
        protected _onPointerdownHeader(e: IMap): void;
        protected _startResizeHeader(resizeCol: number, pageX: number): void;
        protected _startMoveHeader(moveCol: number, pageX: number): void;
        protected _onPointerdownPane(e: IMap): void;
        protected _onPointerupFocusIndicator(e: qx.event.type.Pointer): void;
        protected _onChangeCaptureHeader(e: qx.event.type.Data): void;
        protected _stopResizeHeader(): void;
        protected _stopMoveHeader(): void;
        protected _onPointerupHeader(e: IMap): void;
        protected _onTapHeader(e: IMap): void;
        protected _onTapPane(e: IMap): void;
        protected _onContextMenu(e: qx.event.type.Pointer): void;
        protected _onDbltapPane(e: IMap): void;
        protected _onPointerout(e: IMap): void;
        protected _showResizeLine(x: number): void;
        protected _hideResizeLine(): void;
        showColumnMoveFeedback(pageX: number): number;
        hideColumnMoveFeedback(): void;
        protected _focusCellAtPagePos(pageX: number, pageY: number): void;
        setFocusedCell(col: number, row: number): void;
        getFocusedColumn(): number;
        getFocusedRow(): number;
        scrollCellVisible(col: number, row: number): void;
        isEditing(): any;
        startEditing(): boolean;
        stopEditing(): void;
        flushEditor(cancel?: boolean): void;
        cancelEditing(): void;
        protected _onCellEditorModalWindowClose(e: IMap): void;
        protected _getColumnForPageX(pageX: number): number;
        protected _getResizeColumnForPageX(pageX: number): number;
        protected _getRowForPagePos(pageX: number, pageY: number): number;
        setTopRightWidget(widget: qx.ui.core.Widget): void;
        getTopRightWidget(): qx.ui.core.Widget;
        getHeader(): qx.ui.table.pane.Header;
        getTablePane(): qx.ui.table.pane.Pane;
        getVerticalScrollBarWidth(): number;
        getNeededScrollBars(forceHorizontal?: boolean, preventVertical?: boolean): number;
        getPaneClipper(): qx.ui.table.pane.Clipper;
        getScrollAreaContainer(): qx.ui.table.pane.Clipper;
        protected _applyScrollTimeout(): void;
        protected _startInterval(timeout: number): void;
        protected _stopInterval(): void;
        protected _postponedUpdateContent(): void;
        protected _updateContent(): void;
        protected _updateFocusIndicator(editing?: boolean): void;
        getHorizontalScrollBarVisible(): boolean;
        isHorizontalScrollBarVisible(): boolean;
        setHorizontalScrollBarVisible(value: boolean): void;
        resetHorizontalScrollBarVisible(): void;
        getVerticalScrollBarVisible(): boolean;
        isVerticalScrollBarVisible(): boolean;
        setVerticalScrollBarVisible(value: boolean): void;
        resetVerticalScrollBarVisible(): void;
        getTablePaneModel(): qx.ui.table.pane.Model;
        setTablePaneModel(value: qx.ui.table.pane.Model): void;
        resetTablePaneModel(): void;
        getLiveResize(): boolean;
        isLiveResize(): boolean;
        setLiveResize(value: boolean): void;
        resetLiveResize(): void;
        getFocusCellOnPointerMove(): boolean;
        isFocusCellOnPointerMove(): boolean;
        setFocusCellOnPointerMove(value: boolean): void;
        resetFocusCellOnPointerMove(): void;
        getSelectBeforeFocus(): boolean;
        isSelectBeforeFocus(): boolean;
        setSelectBeforeFocus(value: boolean): void;
        resetSelectBeforeFocus(): void;
        getShowCellFocusIndicator(): boolean;
        isShowCellFocusIndicator(): boolean;
        setShowCellFocusIndicator(value: boolean): void;
        resetShowCellFocusIndicator(): void;
        getContextMenuFromDataCellsOnly(): boolean;
        isContextMenuFromDataCellsOnly(): boolean;
        setContextMenuFromDataCellsOnly(value: boolean): void;
        resetContextMenuFromDataCellsOnly(): void;
        getResetSelectionOnHeaderTap(): boolean;
        isResetSelectionOnHeaderTap(): boolean;
        setResetSelectionOnHeaderTap(value: boolean): void;
        resetResetSelectionOnHeaderTap(): void;
        getResetSelectionOnTapBelowRows(): boolean;
        isResetSelectionOnTapBelowRows(): boolean;
        setResetSelectionOnTapBelowRows(value: boolean): void;
        resetResetSelectionOnTapBelowRows(): void;
        getScrollTimeout(): number;
        setScrollTimeout(value: number): void;
        resetScrollTimeout(): void;
        getMinCellEditHeight(): number;
        setMinCellEditHeight(value: number): void;
        resetMinCellEditHeight(): void;

    }
}
declare module qx.ui.table {
    interface IColumnMenuButton {
        factory(item: string, options: IMap): qx.ui.core.Widget;
        empty(): void;
        getMenu(): any;
        setMenu(value: any): void;
        resetMenu(): void;

    }
}
declare module qx.ui.table {
    interface ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;

    }
}
declare module qx.ui.table.columnmenu {
    class MenuItem extends qx.ui.menu.CheckBox implements qx.ui.table.IColumnMenuItem {
        getColumnVisible(): any;
        setColumnVisible(value: any): void;
        resetColumnVisible(): void;
        constructor(text?: string);
        isColumnVisible(): boolean;

    }
}
declare module qx.ui.table.columnmenu {
    class Button extends qx.ui.form.MenuButton implements qx.ui.table.IColumnMenuButton {
        factory(item: string, options: IMap): qx.ui.core.Widget;
        empty(): void;
        getMenu(): any;
        setMenu(value: any): void;
        resetMenu(): void;
        getBlocker(): qx.ui.core.Blocker;

    }
}
declare module qx.ui.table {
    interface IHeaderRenderer {
        createHeaderCell(cellInfo: IMap): qx.ui.core.Widget;
        updateHeaderCell(cellInfo: IMap, cellWidget: qx.ui.core.Widget): void;

    }
}
declare module qx.ui.table.columnmodel {
    class Resize extends qx.ui.table.columnmodel.Basic {
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;
        protected _applyBehavior(): void;
        getTable(): qx.ui.table.Table;
        protected _addResetColumnWidthButton(event: qx.event.type.Data): void;
        protected _onappear(event: qx.event.type.Event): void;
        protected _onTableWidthChanged(event: qx.event.type.Event): void;
        protected _onverticalscrollbarchanged(event: qx.event.type.Data): void;
        protected _oncolumnwidthchanged(event: qx.event.type.Data): void;
        protected _onvisibilitychanged(event: qx.event.type.Data): void;
        getBehavior(): qx.ui.table.columnmodel.resizebehavior.Abstract;
        setBehavior(value: qx.ui.table.columnmodel.resizebehavior.Abstract): void;
        resetBehavior(): void;

    }
}
declare module qx.ui.table.columnmodel.resizebehavior {
    class Abstract extends qx.core.Object {
        protected _setNumColumns(numColumns: number): void;
        onAppear(event: any, forceRefresh?: boolean): void;
        onTableWidthChanged(event: any): void;
        onVerticalScrollBarChanged(event: any): void;
        onColumnWidthChanged(event: any): void;
        onVisibilityChanged(event: any): void;
        protected _getAvailableWidth(): number;

    }
}
declare module qx.ui.table.columnmodel.resizebehavior {
    class Default extends qx.ui.table.columnmodel.resizebehavior.Abstract {
        setWidth(col: number, width: number | null, flex?: number): void;
        setMinWidth(col: number, width: number): void;
        setMaxWidth(col: number, width: number): void;
        getLayoutChildren(): qx.ui.core.ColumnData[];
        protected _computeColumnsFlexWidth(): void;
        protected _extendNextColumn(event: qx.event.type.Data): void;
        protected _extendLastColumn(event: qx.event.type.Data): void;
        protected _getResizeColumnData(): qx.ui.core.ColumnData[];
        getNewResizeBehaviorColumnData(): Function;
        setNewResizeBehaviorColumnData(value: Function): void;
        resetNewResizeBehaviorColumnData(): void;
        getInitializeWidthsOnEveryAppear(): boolean;
        isInitializeWidthsOnEveryAppear(): boolean;
        setInitializeWidthsOnEveryAppear(value: boolean): void;
        resetInitializeWidthsOnEveryAppear(): void;
        getTableColumnModel(): qx.ui.table.columnmodel.Resize;
        setTableColumnModel(value: qx.ui.table.columnmodel.Resize): void;
        resetTableColumnModel(): void;

    }
}
declare module qx.ui.table.columnmodel {
    class Basic extends qx.core.Object {
        init(colCount: number, table: qx.ui.table.Table): void;
        getVisibleColumns(): qx.data.Array;
        setColumnWidth(col: number, width: number, isPointerAction: boolean): void;
        getColumnWidth(col: number): number;
        setHeaderCellRenderer(col: number, renderer: qx.ui.table.IHeaderRenderer): void;
        setHeaderCellRenderers(renderers: IMap): void;
        getHeaderCellRenderer(col: number): qx.ui.table.IHeaderRenderer;
        setDataCellRenderer(col: number, renderer: qx.ui.table.ICellRenderer): qx.ui.table.ICellRenderer | null;
        getDataCellRenderer(col: number): qx.ui.table.ICellRenderer;
        setCellEditorFactory(col: number, factory: qx.ui.table.ICellEditorFactory): void;
        getCellEditorFactory(col: number): qx.ui.table.ICellEditorFactory;
        protected _getColToXPosMap(): IMap;
        getVisibleColumnCount(): number;
        getVisibleColumnAtX(visXPos: number): number;
        getVisibleX(col: number): number;
        getOverallColumnCount(): number;
        getOverallColumnAtX(overXPos: number): number;
        getOverallX(col: number): number;
        isColumnVisible(col: number): boolean;
        setColumnVisible(col: number, visible: boolean): void;
        moveColumn(fromOverXPos: number, toOverXPos: number): void;
        setColumnsOrder(newPositions: number[]): void;

    }
}
declare module qx.ui.table.rowrenderer {
    class Default extends qx.core.Object implements qx.ui.table.IRowRenderer {
        updateDataRowElement(rowInfo: IMap, rowElement: HTMLElement): void;
        getRowHeightStyle(height: number): void;
        createRowStyle(rowInfo: IMap): void;
        getRowClass(rowInfo: IMap): void;
        initThemeValues(): void;
        protected _renderFont(font: qx.bom.Font): void;
        getRowAttributes(rowInfo: any): string;
        getHighlightFocusRow(): boolean;
        isHighlightFocusRow(): boolean;
        setHighlightFocusRow(value: boolean): void;
        resetHighlightFocusRow(): void;

    }
}
declare module qx.ui.table {
    class MTableContextMenu {
        setContextMenuHandler(col: number, handler: Function, context?: any): void;
        getContextMenuHandler(col: number): Function;

    }
}
declare module qx.ui.table {
    interface ICellRenderer {
        createDataCellHtml(cellInfo: IMap, htmlArr: string[]): boolean | undefined;

    }
}
declare module qx.ui.table.celleditor {
    class Dynamic extends qx.core.Object implements qx.ui.table.ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;
        constructor(cellEditorFactoryFunction?: Function);
        getCellEditorFactoryFunction(): Function;
        setCellEditorFactoryFunction(value: Function): void;
        resetCellEditorFactoryFunction(): void;

    }
}
declare module qx.ui.table.celleditor {
    class TextField extends qx.ui.table.celleditor.AbstractField {

    }
}
declare module qx.ui.table.celleditor {
    class CheckBox extends qx.core.Object implements qx.ui.table.ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;

    }
}
declare module qx.ui.table.celleditor {
    class SelectBox extends qx.core.Object implements qx.ui.table.ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;
        getValidationFunction(): Function;
        setValidationFunction(value: Function): void;
        resetValidationFunction(): void;
        getListData(): qx.data.Array;
        setListData(value: qx.data.Array): void;
        resetListData(): void;

    }
}
declare module qx.ui.table.celleditor {
    class PasswordField extends qx.ui.table.celleditor.AbstractField {

    }
}
declare module qx.ui.table.celleditor {
    class ComboBox extends qx.core.Object implements qx.ui.table.ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;
        getValidationFunction(): Function;
        setValidationFunction(value: Function): void;
        resetValidationFunction(): void;
        getListData(): qx.data.Array;
        setListData(value: qx.data.Array): void;
        resetListData(): void;

    }
}
declare module qx.ui.table.celleditor {
    class AbstractField extends qx.core.Object implements qx.ui.table.ICellEditorFactory {
        createCellEditor(cellInfo: IMap): qx.ui.core.Widget;
        getCellEditorValue(cellEditor: qx.ui.core.Widget): any;
        protected _createEditor(): qx.ui.core.Widget;
        getValidationFunction(): Function;
        setValidationFunction(value: Function): void;
        resetValidationFunction(): void;

    }
}
declare module qx.ui.table {
    class Table extends qx.ui.core.Widget {
        protected _findScrollableParent(widget: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        protected _isScrollable(widget: qx.ui.core.Widget): boolean;
        protected _getBounds(scrollable: qx.ui.core.Widget): IMap;
        protected _getEdgeType(diff: IMap, thresholdX: number, thresholdY: number): string;
        protected _getAxis(edgeType: string): string;
        protected _getThresholdByEdgeType(edgeType: string): number;
        protected _isScrollbarVisible(scrollable: qx.ui.core.Widget, axis: string): boolean;
        protected _isScrollbarExceedingMaxPos(scrollbar: qx.ui.core.scroll.IScrollBar, axis: string, amount: number): boolean;
        protected _calculateThresholdExceedance(diff: number, threshold: number): number;
        protected _calculateScrollAmount(scrollbarSize: number, exceedanceAmount: number): number;
        protected _scrollBy(scrollable: qx.ui.core.Widget, axis: string, exceedanceAmount: number): void;
        getDragScrollThresholdX(): number;
        setDragScrollThresholdX(value: number): void;
        resetDragScrollThresholdX(): void;
        getDragScrollThresholdY(): number;
        setDragScrollThresholdY(value: number): void;
        resetDragScrollThresholdY(): void;
        getDragScrollSlowDownFactor(): number;
        setDragScrollSlowDownFactor(value: number): void;
        resetDragScrollSlowDownFactor(): void;
        constructor(tableModel?: qx.ui.table.ITableModel, custom?: IMap);
        protected _applySelectionModel(): void;
        protected _applyRowHeight(): void;
        protected _applyHeaderCellsVisible(): void;
        protected _applyHeaderCellHeight(): void;
        protected _applyMinCellEditHeight(): void;
        getEmptyTableModel(): qx.ui.table.ITableModel;
        protected _applyTableModel(): void;
        getTableColumnModel(): qx.ui.table.columnmodel.Basic;
        protected _applyStatusBarVisible(): void;
        protected _applyAdditionalStatusBarText(): void;
        protected _applyColumnVisibilityButtonVisible(): void;
        protected _applyMetaColumnCounts(): void;
        protected _applyFocusCellOnPointerMove(): void;
        protected _applyShowCellFocusIndicator(): void;
        protected _applyContextMenuFromDataCellsOnly(): void;
        protected _applyKeepFirstVisibleRowComplete(): void;
        protected _applyResetSelectionOnHeaderTap(): void;
        protected _applyResetSelectionOnTapBelowRows(): void;
        getSelectionManager(): qx.ui.table.selection.Manager;
        protected _getPaneScrollerArr(): qx.ui.table.pane.Scroller[];
        getPaneScroller(metaColumn: number): qx.ui.table.pane.Scroller;
        protected _cleanUpMetaColumns(fromMetaColumn: number): void;
        protected _onChangeLocale(evt: qx.event.type.Event): void;
        protected _onSelectionChanged(evt: IMap): void;
        protected _onTableModelMetaDataChanged(evt: IMap): void;
        protected _onTableModelDataChanged(evt: IMap): void;
        protected _updateTableData(firstRow: number, lastRow: number, firstColumn: number, lastColumn: number, removeStart?: number, removeCount?: number): void;
        protected _onScrollY(evt: IMap): void;
        protected _onKeyPress(evt: qx.event.type.KeySequence): void;
        protected _onKeyDown(evt: qx.event.type.KeySequence): void;
        protected _onFocusChanged(evt: IMap): void;
        protected _onColVisibilityChanged(evt: IMap): void;
        protected _onColWidthChanged(evt: IMap): void;
        protected _onColOrderChanged(evt: IMap): void;
        getTablePaneScrollerAtPageX(pageX: number): qx.ui.table.pane.Scroller;
        setFocusedCell(col?: number, row?: number, scrollVisible?: boolean): void;
        resetSelection(): void;
        resetCellFocus(): void;
        getFocusedColumn(): number;
        getFocusedRow(): number;
        highlightFocusedRow(bHighlight: boolean): void;
        clearFocusedRowHighlight(evt: qx.event.type.Pointer): void;
        moveFocusedCell(deltaX: number, deltaY: number): void;
        scrollCellVisible(col: number, row: number): void;
        isEditing(): any;
        startEditing(): boolean;
        stopEditing(): void;
        cancelEditing(): void;
        updateContent(): void;
        blockHeaderElements(): void;
        unblockHeaderElements(): void;
        protected _getMetaColumnAtPageX(pageX: number): number;
        protected _getMetaColumnAtColumnX(visXPos: number): number;
        protected _updateStatusBar(): void;
        protected _updateScrollerWidths(): void;
        protected _updateScrollBarVisibility(): void;
        protected _initColumnMenu(): void;
        protected _createColumnVisibilityCheckBoxHandler(col: number): Function;
        setColumnWidth(col: number, width: number): void;
        protected _onResize(): void;
        getInitiallyHiddenColumns(): any;
        setInitiallyHiddenColumns(value: any): void;
        resetInitiallyHiddenColumns(): void;
        getSelectionModel(): qx.ui.table.selection.Model;
        setSelectionModel(value: qx.ui.table.selection.Model): void;
        resetSelectionModel(): void;
        getTableModel(): qx.ui.table.ITableModel;
        setTableModel(value: qx.ui.table.ITableModel): void;
        resetTableModel(): void;
        getRowHeight(): number;
        setRowHeight(value: number): void;
        resetRowHeight(): void;
        getForceLineHeight(): boolean;
        isForceLineHeight(): boolean;
        setForceLineHeight(value: boolean): void;
        resetForceLineHeight(): void;
        getHeaderCellsVisible(): boolean;
        isHeaderCellsVisible(): boolean;
        setHeaderCellsVisible(value: boolean): void;
        resetHeaderCellsVisible(): void;
        getHeaderCellHeight(): number;
        setHeaderCellHeight(value: number): void;
        resetHeaderCellHeight(): void;
        getStatusBarVisible(): boolean;
        isStatusBarVisible(): boolean;
        setStatusBarVisible(value: boolean): void;
        resetStatusBarVisible(): void;
        getAdditionalStatusBarText(): any;
        setAdditionalStatusBarText(value: any): void;
        resetAdditionalStatusBarText(): void;
        getColumnVisibilityButtonVisible(): boolean;
        isColumnVisibilityButtonVisible(): boolean;
        setColumnVisibilityButtonVisible(value: boolean): void;
        resetColumnVisibilityButtonVisible(): void;
        getMetaColumnCounts(): any;
        setMetaColumnCounts(value: any): void;
        resetMetaColumnCounts(): void;
        getFocusCellOnPointerMove(): boolean;
        isFocusCellOnPointerMove(): boolean;
        setFocusCellOnPointerMove(value: boolean): void;
        resetFocusCellOnPointerMove(): void;
        getRowFocusChangeModifiesSelection(): boolean;
        isRowFocusChangeModifiesSelection(): boolean;
        setRowFocusChangeModifiesSelection(value: boolean): void;
        resetRowFocusChangeModifiesSelection(): void;
        getShowCellFocusIndicator(): boolean;
        isShowCellFocusIndicator(): boolean;
        setShowCellFocusIndicator(value: boolean): void;
        resetShowCellFocusIndicator(): void;
        getContextMenuFromDataCellsOnly(): boolean;
        isContextMenuFromDataCellsOnly(): boolean;
        setContextMenuFromDataCellsOnly(value: boolean): void;
        resetContextMenuFromDataCellsOnly(): void;
        getKeepFirstVisibleRowComplete(): boolean;
        isKeepFirstVisibleRowComplete(): boolean;
        setKeepFirstVisibleRowComplete(value: boolean): void;
        resetKeepFirstVisibleRowComplete(): void;
        getAlwaysUpdateCells(): boolean;
        isAlwaysUpdateCells(): boolean;
        setAlwaysUpdateCells(value: boolean): void;
        resetAlwaysUpdateCells(): void;
        getResetSelectionOnHeaderTap(): boolean;
        isResetSelectionOnHeaderTap(): boolean;
        setResetSelectionOnHeaderTap(value: boolean): void;
        resetResetSelectionOnHeaderTap(): void;
        getResetSelectionOnTapBelowRows(): boolean;
        isResetSelectionOnTapBelowRows(): boolean;
        setResetSelectionOnTapBelowRows(value: boolean): void;
        resetResetSelectionOnTapBelowRows(): void;
        getMinCellEditHeight(): number;
        setMinCellEditHeight(value: number): void;
        resetMinCellEditHeight(): void;
        getDataRowRenderer(): qx.ui.table.IRowRenderer;
        setDataRowRenderer(value: qx.ui.table.IRowRenderer): void;
        resetDataRowRenderer(): void;
        getModalCellEditorPreOpenFunction(): Function;
        setModalCellEditorPreOpenFunction(value: Function): void;
        resetModalCellEditorPreOpenFunction(): void;
        getExcludeScrollerScrollbarsIfNotNeeded(): boolean;
        isExcludeScrollerScrollbarsIfNotNeeded(): boolean;
        setExcludeScrollerScrollbarsIfNotNeeded(value: boolean): void;
        resetExcludeScrollerScrollbarsIfNotNeeded(): void;
        getNewColumnMenu(): Function;
        setNewColumnMenu(value: Function): void;
        resetNewColumnMenu(): void;
        getNewSelectionManager(): Function;
        setNewSelectionManager(value: Function): void;
        resetNewSelectionManager(): void;
        getNewSelectionModel(): Function;
        setNewSelectionModel(value: Function): void;
        resetNewSelectionModel(): void;
        getNewTableColumnModel(): Function;
        setNewTableColumnModel(value: Function): void;
        resetNewTableColumnModel(): void;
        getNewTablePane(): Function;
        setNewTablePane(value: Function): void;
        resetNewTablePane(): void;
        getNewTablePaneHeader(): Function;
        setNewTablePaneHeader(value: Function): void;
        resetNewTablePaneHeader(): void;
        getNewTablePaneScroller(): Function;
        setNewTablePaneScroller(value: Function): void;
        resetNewTablePaneScroller(): void;
        getNewTablePaneModel(): Function;
        setNewTablePaneModel(value: Function): void;
        resetNewTablePaneModel(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Password extends qx.ui.table.cellrenderer.Default {

    }
}
declare module qx.ui.table.cellrenderer {
    class AbstractImage extends qx.ui.table.cellrenderer.Abstract {
        protected _identifyImage(cellInfo: IMap): IMap;
        protected _getImageInfos(cellInfo: IMap): any;
        getRepeat(): any;
        setRepeat(value: any): void;
        resetRepeat(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Conditional extends qx.ui.table.cellrenderer.Default {
        constructor(align?: string | null, color?: string | null, style?: string | null, weight?: string | null);
        addNumericCondition(condition: qx.ui.table.cellrenderer.String, value1: number, align: string | null, color: string | null, style: string | null, weight: string | null, target: string | null): void;
        addBetweenCondition(condition: qx.ui.table.cellrenderer.String, value1: number, value2: number, align: string | null, color: string | null, style: string | null, weight: string | null, target: string | null): void;
        addRegex(regex: qx.ui.table.cellrenderer.String, align: string | null, color: string | null, style: string | null, weight: string | null, target: string | null): void;
        getUseAutoAlign(): boolean;
        isUseAutoAlign(): boolean;
        setUseAutoAlign(value: boolean): void;
        resetUseAutoAlign(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Date extends qx.ui.table.cellrenderer.Conditional {
        getDateFormat(): qx.util.format.DateFormat;
        setDateFormat(value: qx.util.format.DateFormat): void;
        resetDateFormat(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Boolean extends qx.ui.table.cellrenderer.AbstractImage {
        protected _applyIconTrue(): void;
        protected _applyIconFalse(): void;
        getIconTrue(): string;
        setIconTrue(value: string): void;
        resetIconTrue(): void;
        getIconFalse(): string;
        setIconFalse(value: string): void;
        resetIconFalse(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Debug extends qx.ui.table.cellrenderer.Abstract {

    }
}
declare module qx.ui.table.cellrenderer {
    class Dynamic extends qx.ui.table.cellrenderer.Default {
        constructor(cellRendererFactoryFunction?: Function);
        getCellRendererFactoryFunction(): Function;
        setCellRendererFactoryFunction(value: Function): void;
        resetCellRendererFactoryFunction(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Number extends qx.ui.table.cellrenderer.Conditional {
        getNumberFormat(): qx.util.format.NumberFormat;
        setNumberFormat(value: qx.util.format.NumberFormat): void;
        resetNumberFormat(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class String extends qx.ui.table.cellrenderer.Conditional {

    }
}
declare module qx.ui.table.cellrenderer {
    class Replace extends qx.ui.table.cellrenderer.Default {
        addReversedReplaceMap(): qx.ui.table.cellrenderer.Boolean;
        getReplaceMap(): any;
        setReplaceMap(value: any): void;
        resetReplaceMap(): void;
        getReplaceFunction(): Function;
        setReplaceFunction(value: Function): void;
        resetReplaceFunction(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Html extends qx.ui.table.cellrenderer.Conditional {

    }
}
declare module qx.ui.table.cellrenderer {
    class Abstract extends qx.core.Object implements qx.ui.table.ICellRenderer {
        createDataCellHtml(cellInfo: IMap, htmlArr: string[]): boolean | undefined;
        protected _createStyleSheet(): void;
        protected _getCellClass(cellInfo: IMap): qx.ui.table.cellrenderer.String;
        protected _getCellStyle(cellInfo: IMap): any;
        protected _getCellAttributes(cellInfo: IMap): qx.ui.table.cellrenderer.String;
        protected _getContentHtml(cellInfo: IMap): qx.ui.table.cellrenderer.String;
        protected _getCellSizeStyle(width: number, height: number, insetX: number, insetY: number): qx.ui.table.cellrenderer.String;
        getDefaultCellStyle(): string;
        setDefaultCellStyle(value: string): void;
        resetDefaultCellStyle(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Default extends qx.ui.table.cellrenderer.Abstract {
        protected _getStyleFlags(cellInfo: IMap): number;
        protected _formatValue(cellInfo: IMap): qx.ui.table.cellrenderer.String;
        getUseAutoAlign(): boolean;
        isUseAutoAlign(): boolean;
        setUseAutoAlign(value: boolean): void;
        resetUseAutoAlign(): void;

    }
}
declare module qx.ui.table.cellrenderer {
    class Image extends qx.ui.table.cellrenderer.AbstractImage {
        constructor(height?: number, width?: number);

    }
}
declare module qx.ui.table.model {
    class Simple extends qx.ui.table.model.Abstract {
        protected static _defaultSortComparatorAscending(row1: any, row2: any, columnIndex: number): number;
        protected static _defaultSortComparatorInsensitiveAscending(row1: any, row2: any, columnIndex: number): number;
        protected static _defaultSortComparatorDescending(row1: any, row2: any, columnIndex: number): number;
        protected static _defaultSortComparatorInsensitiveDescending(row1: any, row2: any, columnIndex: number): number;
        getRowDataAsMap(rowIndex: number): IMap;
        getDataAsMapArray(): IMap[];
        setEditable(editable: boolean): void;
        setColumnEditable(columnIndex: number, editable: boolean): void;
        setColumnSortable(columnIndex: number, sortable: boolean): void;
        setSortMethods(columnIndex: number, compare: Function | null): void;
        getSortMethods(columnIndex: number): IMap;
        clearSorting(): void;
        protected _setSortColumnIndex(columnIndex: number): void;
        protected _setSortAscending(ascending: boolean): void;
        setData(rowArr: any[][], clearSorting?: boolean): void;
        getData(): any[][];
        setDataAsMapArray(mapArr: IMap[], rememberMaps?: boolean, clearSorting?: boolean): void;
        addRows(rowArr: any[][], startIndex?: number, clearSorting?: boolean): void;
        addRowsAsMapArray(mapArr: IMap[], startIndex?: number, rememberMaps?: boolean, clearSorting?: boolean): void;
        setRows(rowArr: any[][], startIndex?: number, clearSorting?: boolean): void;
        setRowsAsMapArray(mapArr: IMap[], startIndex?: number, rememberMaps?: boolean, clearSorting?: boolean): void;
        removeRows(startIndex: number, howMany: number, clearSorting?: boolean): void;
        protected _mapArray2RowArr(mapArr: IMap[], rememberMaps?: boolean): any[][];
        getCaseSensitiveSorting(): boolean;
        isCaseSensitiveSorting(): boolean;
        setCaseSensitiveSorting(value: boolean): void;
        resetCaseSensitiveSorting(): void;

    }
}
declare module qx.ui.table.model {
    class Filtered extends qx.ui.table.model.Simple {
        getFullArray(): qx.data.Array;
        protected _js_in_array(the_needle: string, the_haystack: qx.data.Array): boolean;
        addBetweenFilter(filter: string, value1: number, value2: number, target: string): void;
        addNumericFilter(filter: string, value1: number, target: string): void;
        addRegex(regex: string, target: string, ignorecase: boolean): void;
        addNotRegex(regex: string, target: string, ignorecase: boolean): void;
        applyFilters(): void;
        hideRows(rowNum: number, numOfRows: number, dispatchEvent?: boolean): void;
        resetHiddenRows(): void;
        getCaseSensitiveSorting(): boolean;
        isCaseSensitiveSorting(): boolean;
        setCaseSensitiveSorting(value: boolean): void;
        resetCaseSensitiveSorting(): void;

    }
}
declare module qx.ui.table.model {
    class Remote extends qx.ui.table.model.Abstract {
        protected _getIgnoreCurrentRequest(): boolean;
        protected _loadRowCount(): void;
        protected _onRowCountLoaded(rowCount: number): void;
        reloadData(): void;
        clearCache(): void;
        getCacheContent(): IMap;
        restoreCacheContent(cacheContent: IMap): void;
        protected _cancelCurrentRequest(): boolean;
        iterateCachedRows(iterator: Function, object: any): void;
        protected _loadRowData(firstRow: number, lastRow: number): void;
        protected _onRowDataLoaded(rowDataArr: IMap[]): void;
        protected _setRowBlockData(block: number, rowDataArr: any[][]): void;
        removeRow(rowIndex: number): void;
        setEditable(editable: boolean): void;
        setColumnEditable(columnIndex: number, editable: boolean): void;
        setColumnSortable(columnIndex: number, sortable: boolean): void;
        setSortColumnIndexWithoutSortingData(sortColumnIndex: number): void;
        setSortAscendingWithoutSortingData(sortAscending: boolean): void;
        getBlockSize(): number;
        setBlockSize(value: number): void;
        resetBlockSize(): void;
        getMaxCachedBlockCount(): number;
        setMaxCachedBlockCount(value: number): void;
        resetMaxCachedBlockCount(): void;
        getClearCacheOnRemove(): boolean;
        isClearCacheOnRemove(): boolean;
        setClearCacheOnRemove(value: boolean): void;
        resetClearCacheOnRemove(): void;
        getBlockConcurrentLoadRowCount(): boolean;
        isBlockConcurrentLoadRowCount(): boolean;
        setBlockConcurrentLoadRowCount(value: boolean): void;
        resetBlockConcurrentLoadRowCount(): void;

    }
}
declare module qx.ui.table.model {
    class Abstract extends qx.core.Object implements qx.ui.table.ITableModel {
        getRowCount(): number;
        getRowData(rowIndex: number): any;
        getColumnCount(): number;
        getColumnId(columnIndex: number): string;
        getColumnIndexById(columnId: string): number;
        getColumnName(columnIndex: number): string;
        isColumnEditable(columnIndex: number): boolean;
        isColumnSortable(columnIndex: number): boolean;
        sortByColumn(columnIndex: number, ascending: boolean): void;
        getSortColumnIndex(): number;
        isSortAscending(): boolean;
        prefetchRows(firstRowIndex: number, lastRowIndex: number): void;
        getValue(columnIndex: number, rowIndex: number): any;
        getValueById(columnId: string, rowIndex: number): any;
        setValue(columnIndex: number, rowIndex: number, value: any): void;
        setValueById(columnId: string, rowIndex: number, value: any): void;
        init(table: qx.ui.table.Table): void;
        getTable(): any;
        setColumnIds(columnIdArr: string[]): void;
        setColumnNamesByIndex(columnNameArr: string[]): void;
        setColumnNamesById(columnNameMap: IMap): void;
        setColumns(columnNameArr: string[], columnIdArr?: string[]): void;
        protected _checkEditing(): void;

    }
}
declare module qx.ui.table {
    interface IRowRenderer {
        updateDataRowElement(rowInfo: IMap, rowElement: HTMLElement): void;
        getRowHeightStyle(height: number): void;
        createRowStyle(rowInfo: IMap): void;
        getRowClass(rowInfo: IMap): void;

    }
}
declare module qx.ui.table.selection {
    class Model extends qx.core.Object {
        protected _applySelectionMode(): void;
        setBatchMode(batchMode: boolean): boolean;
        hasBatchMode(): boolean;
        getAnchorSelectionIndex(): number;
        protected _setAnchorSelectionIndex(index: number): void;
        getLeadSelectionIndex(): number;
        protected _setLeadSelectionIndex(index: number): void;
        protected _getSelectedRangeArr(): IMap[];
        resetSelection(): void;
        isSelectionEmpty(): boolean;
        getSelectedCount(): number;
        isSelectedIndex(index: number): boolean;
        getSelectedRanges(): IMap[];
        iterateSelection(iterator: Function, param1: any): void;
        setSelectionInterval(fromIndex: number, toIndex: number): void;
        addSelectionInterval(fromIndex: number, toIndex: number): void;
        removeSelectionInterval(fromIndex: number, toIndex: number, rowsRemoved?: boolean): void;
        protected _resetSelection(): void;
        protected _addSelectionInterval(fromIndex: number, toIndex: number): void;
        protected _dumpRanges(): void;
        protected _fireChangeSelection(): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;

    }
}
declare module qx.ui.table.selection {
    class Manager extends qx.core.Object {
        handleTap(index: number, evt: qx.event.type.Tap): void;
        handleSelectKeyDown(index: number, evt: IMap): void;
        handleMoveKeyDown(index: number, evt: IMap): void;
        protected _handleSelectEvent(index: number, evt: IMap): void;
        getSelectionModel(): qx.ui.table.selection.Model;
        setSelectionModel(value: qx.ui.table.selection.Model): void;
        resetSelectionModel(): void;

    }
}
declare module qx.ui.table.headerrenderer {
    class Icon extends qx.ui.table.headerrenderer.Default {
        constructor(iconUrl?: string, tooltip?: string);
        getIconUrl(): string;
        setIconUrl(value: string): void;
        resetIconUrl(): void;

    }
}
declare module qx.ui.table.headerrenderer {
    class HeaderCell extends qx.ui.container.Composite {
        protected _applyLabel(): void;
        protected _applySortIcon(): void;
        protected _applyIcon(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getSortIcon(): string;
        setSortIcon(value: string): void;
        resetSortIcon(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;

    }
}
declare module qx.ui.table.headerrenderer {
    class Default extends qx.core.Object implements qx.ui.table.IHeaderRenderer {
        createHeaderCell(cellInfo: IMap): qx.ui.core.Widget;
        updateHeaderCell(cellInfo: IMap, cellWidget: qx.ui.core.Widget): void;
        getToolTip(): string;
        setToolTip(value: string): void;
        resetToolTip(): void;

    }
}
declare module qx.ui.table {
    interface IColumnMenuItem {
        getColumnVisible(): any;
        setColumnVisible(value: any): void;
        resetColumnVisible(): void;

    }
}
declare module qx.ui.table {
    interface ITableModel {
        getRowCount(): number;
        getRowData(rowIndex: number): any;
        getColumnCount(): number;
        getColumnId(columnIndex: number): string;
        getColumnIndexById(columnId: string): number;
        getColumnName(columnIndex: number): string;
        isColumnEditable(columnIndex: number): boolean;
        isColumnSortable(columnIndex: number): boolean;
        sortByColumn(columnIndex: number, ascending: boolean): void;
        getSortColumnIndex(): number;
        isSortAscending(): boolean;
        prefetchRows(firstRowIndex: number, lastRowIndex: number): void;
        getValue(columnIndex: number, rowIndex: number): any;
        getValueById(columnId: string, rowIndex: number): any;
        setValue(columnIndex: number, rowIndex: number, value: any): void;
        setValueById(columnId: string, rowIndex: number, value: any): void;

    }
}
declare module qx.ui.mobile.page {
    class NavigationPage extends qx.ui.mobile.page.Page implements qx.ui.mobile.container.INavigation {
        getTitleWidget(): qx.ui.mobile.navigationbar.Title;
        getLeftContainer(): qx.ui.mobile.container.Composite;
        getRightContainer(): qx.ui.mobile.container.Composite;
        constructor(wrapContentByGroup?: boolean, layout?: qx.ui.mobile.layout.Abstract);
        protected _createTitleWidget(): qx.ui.mobile.navigationbar.Title;
        protected _applyTitle(): void;
        protected _createLeftContainer(): qx.ui.mobile.container.Composite;
        protected _createRightContainer(): qx.ui.mobile.container.Composite;
        protected _createBackButton(): qx.ui.mobile.navigationbar.BackButton;
        protected _createButton(): qx.ui.mobile.navigationbar.Button;
        getContent(): qx.ui.mobile.container.Composite;
        protected _getBackButton(): qx.ui.mobile.navigationbar.BackButton;
        protected _getButton(): qx.ui.mobile.navigationbar.Button;
        setIsTablet(isTablet: boolean): void;
        isTablet(): boolean;
        protected _getScrollContainer(): qx.ui.mobile.container.Scroll;
        addAfterNavigationBar(widget: qx.ui.mobile.core.Widget): void;
        protected _applyBackButtonText(): void;
        protected _applyActionButtonText(): void;
        protected _applyActionButtonIcon(): void;
        protected _applyShowBackButton(): void;
        protected _applyShowButton(): void;
        protected _applyContentCssClass(): void;
        protected _showBackButton(): void;
        protected _showButton(): void;
        protected _createScrollContainer(): qx.ui.mobile.container.Scroll;
        protected _createContent(): qx.ui.mobile.container.Composite;
        protected _onBackButtonTap(evt: qx.event.type.Tap): void;
        protected _onButtonTap(evt: qx.event.type.Tap): void;
        getLifeCycleState(): any;
        setLifeCycleState(value: any): void;
        resetLifeCycleState(): void;
        getTitle(): string;
        setTitle(value: string): void;
        resetTitle(): void;
        getBackButtonText(): string;
        setBackButtonText(value: string): void;
        resetBackButtonText(): void;
        getButtonText(): string;
        setButtonText(value: string): void;
        resetButtonText(): void;
        getButtonIcon(): string;
        setButtonIcon(value: string): void;
        resetButtonIcon(): void;
        getShowBackButton(): boolean;
        isShowBackButton(): boolean;
        setShowBackButton(value: boolean): void;
        resetShowBackButton(): void;
        getShowBackButtonOnTablet(): boolean;
        isShowBackButtonOnTablet(): boolean;
        setShowBackButtonOnTablet(value: boolean): void;
        resetShowBackButtonOnTablet(): void;
        getShowButton(): boolean;
        isShowButton(): boolean;
        setShowButton(value: boolean): void;
        resetShowButton(): void;
        getNavigationBarHidden(): boolean;
        isNavigationBarHidden(): boolean;
        setNavigationBarHidden(value: boolean): void;
        resetNavigationBarHidden(): void;
        getNavigationBarToggleDuration(): number;
        setNavigationBarToggleDuration(value: number): void;
        resetNavigationBarToggleDuration(): void;
        getContentCssClass(): string;
        setContentCssClass(value: string): void;
        resetContentCssClass(): void;

    }
}
declare module qx.ui.mobile.page {
    class Manager extends qx.core.Object {
        constructor(isTablet?: boolean, root?: qx.ui.mobile.core.Widget);
        protected _createMasterContainer(): qx.ui.mobile.container.Composite;
        protected _createDetailContainer(): qx.ui.mobile.container.Composite;
        getMasterContainer(): qx.ui.mobile.container.Drawer;
        getDetailContainer(): qx.ui.mobile.container.Composite;
        getMasterButton(): qx.ui.mobile.navigationbar.Button;
        getMasterNavigation(): qx.ui.mobile.container.Navigation;
        getDetailNavigation(): qx.ui.mobile.container.Navigation;
        protected _createMasterButton(): qx.ui.mobile.navigationbar.Button;
        protected _createHideMasterButton(): qx.ui.mobile.navigationbar.Button;
        protected _createMasterNavigation(): qx.ui.mobile.container.Navigation;
        protected _createDetailNavigation(): qx.ui.mobile.container.Navigation;
        addMaster(pages: any | null): void;
        addDetail(pages: any | null): void;
        protected _onDetailPageStart(evt: qx.event.type.Event): void;
        protected _onMasterPageStart(evt: qx.event.type.Event): void;
        protected _add(pages: any | null, target: qx.ui.mobile.container.Navigation): void;
        protected _onMasterContainerUpdate(evt: qx.event.type.Data): void;
        protected _onDetailContainerUpdate(evt: qx.event.type.Data): void;
        protected _onMasterButtonTap(): void;
        protected _onHideMasterButtonTap(): void;
        protected _onMasterChangeVisibility(evt: qx.event.type.Data): void;
        protected _onLayoutChange(): void;
        protected _getGapPropertyKey(): string;
        protected _createDetailContainerGap(): void;
        protected _removeDetailContainerGap(): void;
        protected _applyHideMasterButtonCaption(value: string, old: string): void;
        protected _applyMasterTitle(value: string, old: string): void;
        getMasterTitle(): string;
        setMasterTitle(value: string): void;
        resetMasterTitle(): void;
        getHideMasterButtonCaption(): string;
        setHideMasterButtonCaption(value: string): void;
        resetHideMasterButtonCaption(): void;
        getAllowMasterHideOnLandscape(): boolean;
        isAllowMasterHideOnLandscape(): boolean;
        setAllowMasterHideOnLandscape(value: boolean): void;
        resetAllowMasterHideOnLandscape(): void;
        getHideMasterOnDetailStart(): boolean;
        isHideMasterOnDetailStart(): boolean;
        setHideMasterOnDetailStart(value: boolean): void;
        resetHideMasterOnDetailStart(): void;

    }
}
declare module qx.ui.mobile.page {
    class Page extends qx.ui.mobile.container.Composite {
        releaseFixedSize(): void;
        fixSize(): void;
        protected _setHeight(height: number): void;
        protected _setWidth(width: number): void;
        getFireDomUpdatedOnResize(): boolean;
        isFireDomUpdatedOnResize(): boolean;
        setFireDomUpdatedOnResize(value: boolean): void;
        resetFireDomUpdatedOnResize(): void;
        protected static _onDeviceReady(): void;
        protected static _onBackButton(): void;
        protected static _onMenuButton(): void;
        back(triggeredByKeyEvent: boolean): boolean;
        protected _back(triggeredByKeyEvent: boolean): boolean;
        menu(): void;
        initialize(): void;
        protected _initialize(): void;
        isInitialized(): boolean;
        start(): void;
        protected _start(): void;
        stop(): void;
        protected _stop(): void;
        pause(): void;
        protected _pause(): void;
        resume(): void;
        protected _resume(): void;
        wait(): void;
        protected _wait(): void;
        protected _applyLifeCycleState(): void;
        getLifeCycleState(): any;
        setLifeCycleState(value: any): void;
        resetLifeCycleState(): void;

    }
}
declare module qx.ui.mobile.form.renderer {
    class AbstractRenderer extends qx.ui.mobile.core.Widget implements qx.ui.form.renderer.IFormRenderer {
        addItems(items: qx.ui.core.Widget[], names: string[], title?: string, itemsOptions?: qx.data.Array, headerOptions?: IMap): void;
        addButton(button: qx.ui.form.Button, options?: IMap): void;
        constructor(form?: qx.ui.mobile.form.Form);
        protected _onFormChange(): void;
        protected _render(): void;
        showErrorForItem(item: qx.ui.mobile.core.Widget): void;
        resetForm(): void;

    }
}
declare module qx.ui.mobile.form.renderer {
    class SinglePlaceholder extends qx.ui.mobile.form.renderer.Single {
        constructor(form?: qx.ui.mobile.form.Form);

    }
}
declare module qx.ui.mobile.form.renderer {
    class Single extends qx.ui.mobile.form.renderer.AbstractRenderer {
        protected _isOneLineWidget(item: qx.ui.mobile.core.Widget): boolean;
        protected _addToScrollContainer(item: qx.ui.mobile.core.Widget, name: string): void;
        protected _addRow(item: qx.ui.mobile.core.Widget, name: string, layout: qx.ui.mobile.layout.Abstract): void;
        protected _addSeparationRow(): void;
        protected _addGroupHeaderRow(): void;
        protected _addGroupFooterRow(): void;
        protected _addGroupHeader(title: string): void;
        showItem(item: qx.ui.form.IForm): void;
        hideItem(item: qx.ui.form.IForm): void;
        protected _getParentRow(item: qx.ui.form.IForm): qx.ui.mobile.core.Widget;

    }
}
declare module qx.ui.mobile.form {
    class RadioButton extends qx.ui.mobile.form.Input implements qx.ui.form.IField {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        constructor(value?: boolean);
        protected _onTap(): void;
        protected _applyGroup(value: qx.ui.form.RadioGroup, old: qx.ui.form.RadioGroup): void;
        protected _setValue(value: boolean): void;
        protected _getValue(): boolean;
        getGroup(): qx.ui.mobile.form.RadioGroup;
        setGroup(value: qx.ui.mobile.form.RadioGroup): void;
        resetGroup(): void;

    }
}
declare module qx.ui.mobile.form {
    class MText {
        constructor(value?: any);
        protected _applyMaxLength(): void;
        protected _applyPlaceholder(): void;
        focus(): void;
        blur(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;

    }
}
declare module qx.ui.mobile.form {
    class Input extends qx.ui.mobile.core.Widget implements qx.ui.form.IForm, qx.ui.form.IModel {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        protected _getParentScrollContainer(): qx.ui.mobile.container.Scroll;
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;
        protected _getType(): void;
        protected _onSelected(evt: qx.event.type.Event): void;

    }
}
declare module qx.ui.mobile.form {
    class Slider extends qx.ui.mobile.core.Widget implements qx.ui.form.IForm, qx.ui.form.IModel, qx.ui.form.INumberForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        setValue(value: any): void;
        getValue(): any;
        resetValue(): void;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;
        nextValue(): void;
        previousValue(): void;
        protected _createKnobElement(): HTMLElement;
        protected _registerEventListener(): void;
        protected _unregisterEventListener(): void;
        protected _refresh(): void;
        protected _updateSizes(): void;
        protected _onPointerDown(evt: qx.event.type.Pointer): void;
        protected _onTrack(evt: qx.event.type.Track): void;
        protected _getPosition(documentLeft: number): number;
        protected _getKnobElement(): HTMLElement;
        protected _setValue(value: number): void;
        protected _getValue(): number;
        protected _updateKnobPosition(): void;
        protected _applyDisplayValue(): void;
        protected _valueToPercent(value: number): number;
        protected _positionToValue(position: number): number;
        protected _percentToPosition(width: number, percent: number): number;
        protected _limitValue(value: number): number;
        protected _getPixelPerStep(width: number): number;
        protected _getOverallSteps(): number;
        protected _getRange(): number;
        getMinimum(): number;
        setMinimum(value: number): void;
        resetMinimum(): void;
        getMaximum(): number;
        setMaximum(value: number): void;
        resetMaximum(): void;
        getStep(): number;
        setStep(value: number): void;
        resetStep(): void;
        getReverseDirection(): boolean;
        isReverseDirection(): boolean;
        setReverseDirection(value: boolean): void;
        resetReverseDirection(): void;
        getDisplayValue(): any;
        setDisplayValue(value: any): void;
        resetDisplayValue(): void;

    }
}
declare module qx.ui.mobile.form {
    class NumberField extends qx.ui.mobile.form.Input implements qx.ui.form.IStringForm {
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        setValue(value: any): void;
        getValue(): any;
        resetValue(): void;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyMaxLength(): void;
        protected _applyPlaceholder(): void;
        focus(): void;
        blur(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;
        constructor(value?: any);
        protected _onChangeStep(): void;
        protected _onChangeMaximum(): void;
        protected _onChangeMinimum(): void;
        getMinimum(): number;
        setMinimum(value: number): void;
        resetMinimum(): void;
        getMaximum(): number;
        setMaximum(value: number): void;
        resetMaximum(): void;
        getStep(): number;
        setStep(value: number): void;
        resetStep(): void;

    }
}
declare module qx.ui.mobile.form {
    class TextField extends qx.ui.mobile.form.Input implements qx.ui.form.IStringForm {
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        setValue(value: any): void;
        getValue(): any;
        resetValue(): void;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyMaxLength(): void;
        protected _applyPlaceholder(): void;
        focus(): void;
        blur(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;
        constructor(value?: any);
        protected _onKeyPress(evt: qx.event.type.KeySequence): void;

    }
}
declare module qx.ui.mobile.form {
    class CheckBox extends qx.ui.mobile.form.Input implements qx.ui.form.IField {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        constructor(value?: boolean);
        protected _onTap(): void;
        protected _setValue(value: boolean): void;
        protected _getValue(): boolean;

    }
}
declare module qx.ui.mobile.form {
    class RadioGroup extends qx.ui.form.RadioGroup {

    }
}
declare module qx.ui.mobile.form {
    class MState {
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;

    }
}
declare module qx.ui.mobile.form {
    class SelectBox extends qx.ui.mobile.core.Widget implements qx.ui.form.IForm, qx.ui.form.IField, qx.ui.form.IModel {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyMaxLength(): void;
        protected _applyPlaceholder(): void;
        focus(): void;
        blur(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;
        protected _createSelectionDialog(): qx.ui.mobile.dialog.Menu;
        getSelectionDialog(): qx.ui.mobile.dialog.Menu;
        setDialogTitle(title: string): void;
        setClearButtonLabel(value: string): void;
        protected _setValue(value: string): void;
        protected _getValue(): number;
        protected _render(): void;
        protected _applyModel(value: qx.data.Array, old?: qx.data.Array): void;
        protected _onChangeSelection(evt: qx.event.type.Data): void;
        protected _onTap(evt: qx.event.type.Tap): void;
        protected _validateSelection(value: number): void;
        protected _applySelection(): void;
        protected _applyNullable(): void;
        getNullable(): boolean;
        isNullable(): boolean;
        setNullable(value: boolean): void;
        resetNullable(): void;
        getSelection(): any;
        setSelection(value: any): void;
        resetSelection(): void;

    }
}
declare module qx.ui.mobile.form {
    class PasswordField extends qx.ui.mobile.form.TextField {

    }
}
declare module qx.ui.mobile.form {
    class ToggleButton extends qx.ui.mobile.core.Widget implements qx.ui.form.IField, qx.ui.form.IForm, qx.ui.form.IModel {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;
        constructor(value?: boolean, labelChecked?: boolean, labelUnchecked?: boolean);
        protected _getChild(): qx.ui.mobile.container.Composite;
        protected _createSwitch(): qx.ui.mobile.container.Composite;
        protected _setValue(value: boolean): void;
        protected _getValue(): boolean;
        toggle(): void;
        protected _onTap(evt: qx.event.type.Tap): void;
        protected _onSwipe(evt: qx.event.type.Swipe): void;
        protected _checkLastPointerTime(): boolean;

    }
}
declare module qx.ui.mobile.form {
    class MValue {
        constructor(value?: any);
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        setValue(value: any): void;
        getValue(): any;
        resetValue(): void;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;

    }
}
declare module qx.ui.mobile.form {
    class Button extends qx.ui.mobile.basic.Atom {
        setValue(value: string): void;
        getValue(): string;

    }
}
declare module qx.ui.mobile.form {
    class Row extends qx.ui.mobile.container.Composite {
        constructor(layout?: qx.ui.mobile.layout.Abstract);
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;

    }
}
declare module qx.ui.mobile.form {
    class TextArea extends qx.ui.mobile.core.Widget implements qx.ui.form.IField, qx.ui.form.IForm, qx.ui.form.IModel {
        setValue(value: any | null): any;
        resetValue(): void;
        getValue(): any | null;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _convertValue(value: any): any;
        protected _onFocus(): void;
        protected _onBlur(): void;
        hasFocus(): boolean;
        protected _onChangeContent(evt: qx.event.type.Data): void;
        protected _onInput(evt: qx.event.type.Data): void;
        protected _getCaretPosition(): number;
        protected _setCaretPosition(position: number): void;
        getLiveUpdate(): boolean;
        isLiveUpdate(): boolean;
        setLiveUpdate(value: boolean): void;
        resetLiveUpdate(): void;
        protected _applyMaxLength(): void;
        protected _applyPlaceholder(): void;
        focus(): void;
        blur(): void;
        getMaxLength(): number;
        setMaxLength(value: number): void;
        resetMaxLength(): void;
        getPlaceholder(): string;
        setPlaceholder(value: string): void;
        resetPlaceholder(): void;
        getReadOnly(): boolean;
        isReadOnly(): boolean;
        setReadOnly(value: boolean): void;
        resetReadOnly(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        protected _applyModel(): void;
        addState(state: string): void;
        hasState(state: string): boolean;
        removeState(state: string): void;
        replaceState(oldState: string, newState: string): void;
        constructor(value?: any);
        protected _fixChildElementsHeight(evt: qx.event.type.Data): void;

    }
}
declare module qx.ui.mobile.form {
    class Title extends qx.ui.mobile.basic.Label {

    }
}
declare module qx.ui.mobile.form {
    class Group extends qx.ui.mobile.container.Composite {
        constructor(param0?: any, showBorder?: boolean);
        protected _onChangeShowBorder(): void;
        getShowBorder(): boolean;
        isShowBorder(): boolean;
        setShowBorder(value: boolean): void;
        resetShowBorder(): void;

    }
}
declare module qx.ui.mobile.form {
    class Label extends qx.ui.mobile.core.Widget {
        constructor(value?: string);
        protected _applyValue(): void;
        protected _applyWrap(): void;
        protected _changeEnabled(evt: qx.event.type.Data): void;
        setLabelFor(elementId: string): void;
        protected _onTap(evt: qx.event.type.Pointer): void;
        getValue(): any;
        setValue(value: any): void;
        resetValue(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;

    }
}
declare module qx.ui.mobile.form {
    class Form extends qx.ui.form.Form {
        setRenderer(renderer: qx.ui.mobile.form.renderer.AbstractRenderer): void;
        showRow(groupIndex: number, rowIndex: number): void;
        hideRow(groupIndex: number, rowIndex: number): void;
        protected _getItemByIndex(groupIndex: number, rowIndex: number): any;
        getInvalidItems(): qx.ui.mobile.core.Widget[];

    }
}
declare module qx.ui.mobile.core {
    class Widget extends qx.core.Object {
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;
        static onShutdown(): void;
        static getCurrentId(): number;
        static registerWidget(widget: qx.ui.core.Widget): void;
        static unregisterWidget(id: string): void;
        static getWidgetById(id: string): qx.ui.core.Widget;
        static scheduleDomUpdated(): void;
        static addAttributeMapping(property: string, attribute: string, values: IMap): void;
        static addStyleMapping(property: string, style: string, values: IMap): void;
        protected _getTagName(): string;
        protected _createContainerElement(): HTMLElement;
        protected _domUpdated(): void;
        protected _transformId(value: string): string;
        protected _applyId(): void;
        protected _applyEnabled(value: boolean, old?: boolean): void;
        protected _add(child: qx.ui.core.Widget, layoutProperties?: IMap): void;
        protected _addAt(child: qx.ui.core.Widget, index: number, options?: IMap): void;
        protected _addBefore(child: qx.ui.core.Widget, beforeWidget: qx.ui.core.Widget, layoutProperties?: IMap): void;
        protected _addAfter(child: qx.ui.core.Widget, afterWidget: qx.ui.core.Widget, layoutProperties?: IMap): void;
        protected _remove(child: qx.ui.core.Widget): void;
        protected _removeAt(index: number): void;
        protected _removeAll(): qx.data.Array;
        protected _indexOf(child: qx.ui.core.Widget): number;
        setLayoutParent(parent: qx.ui.mobile.core.Widget): void;
        removeChild(child: qx.ui.core.Widget): void;
        getLayoutParent(): qx.ui.core.Widget;
        protected _getChildren(): qx.ui.core.Widget[];
        protected _hasChildren(): boolean;
        protected _setLayout(layout: qx.ui.mobile.layout.Abstract): void;
        protected _initializeChildLayout(child: qx.ui.core.Widget, layoutProperties?: IMap): void;
        protected _getLayout(): qx.ui.mobile.layout.Abstract;
        setLayoutProperties(properties: IMap): void;
        updateLayoutProperties(widget: qx.ui.mobile.core.Widget, properties: IMap): void;
        updateLayout(widget: qx.ui.mobile.core.Widget, action: string, properties: IMap): void;
        protected _setHtml(value?: string): void;
        protected _transform(): void;
        protected _applyAttribute(value: any, old: any, attribute: string): void;
        protected _setAttribute(attribute: string, value: any): void;
        protected _getAttribute(attribute: string): any;
        protected _applyStyle(): void;
        protected _setStyle(style: string, value: any): void;
        protected _getStyle(style: string): any;
        protected _applyDefaultCssClass(): void;
        addCssClass(cssClass: string): void;
        addCssClasses(cssClasses: string[]): void;
        removeCssClass(cssClass: string): void;
        removeCssClasses(cssClasses: string[]): void;
        toggleCssClass(cssClass: string): void;
        hasCssClass(cssClass: string): boolean;
        protected _applyVisibility(): void;
        show(properties: IMap): void;
        hide(properties: IMap): void;
        exclude(properties: IMap): void;
        isVisible(): boolean;
        isHidden(): boolean;
        isExcluded(): boolean;
        isSeeable(): boolean;
        protected _setContainerElement(element: HTMLElement): void;
        getContainerElement(): HTMLElement;
        getContentElement(): HTMLElement;
        protected _getContentElement(): HTMLElement;
        destroy(): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;

    }
}
declare module qx.ui.mobile.core {
    class MLayoutHandling {
        static remap(members: IMap): void;
        setLayout(layout: qx.ui.mobile.layout.Abstract): void;
        getLayout(): qx.ui.mobile.layout.Abstract;

    }
}
declare module qx.ui.mobile.core {
    class MChildrenHandling {
        static remap(members: IMap): void;
        getChildren(): qx.ui.core.Widget[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.Widget, layoutProperties?: IMap): void;
        addAt(child: qx.ui.core.Widget, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.Widget, before: qx.ui.core.Widget, layoutProperties?: IMap): void;
        addAfter(child: qx.ui.core.Widget, after: qx.ui.core.Widget, layoutProperties?: IMap): void;
        remove(child: qx.ui.core.Widget): void;
        removeAt(index: number): void;
        removeAll(): void;

    }
}
declare module qx.ui.mobile.core {
    class EventHandler extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        protected _dispatchEvent(domEvent: qx.event.type.Event): void;

    }
}
declare module qx.ui.mobile.core {
    class MResize {
        releaseFixedSize(): void;
        fixSize(): void;
        protected _setHeight(height: number): void;
        protected _setWidth(width: number): void;
        getFireDomUpdatedOnResize(): boolean;
        isFireDomUpdatedOnResize(): boolean;
        setFireDomUpdatedOnResize(value: boolean): void;
        resetFireDomUpdatedOnResize(): void;

    }
}
declare module qx.ui.mobile.core {
    class Blocker extends qx.ui.mobile.core.Widget {
        static getInstance(): Blocker;
        forceHide(): void;
        isShown(): boolean;
        protected _updateSize(): void;
        protected _onScroll(evt: qx.event.type.Event): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;

    }
}
declare module qx.ui.mobile.core {
    class DomUpdatedHandler extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        constructor(manager?: qx.event.Manager);
        static refresh(): void;

    }
}
declare module qx.ui.mobile.core {
    class Root extends qx.ui.mobile.container.Composite {
        constructor(root?: HTMLElement, layout?: qx.ui.mobile.layout.Abstract);
        protected _applyShowScrollbarY(): void;
        getAppScale(): number | null;
        getFontScale(): number | null;
        setFontScale(value: number): void;
        getWidth(): number;
        getHeight(): number;
        protected _onOrientationChange(evt: qx.event.type.Orientation): void;
        getShowScrollbarY(): boolean;
        isShowScrollbarY(): boolean;
        setShowScrollbarY(value: boolean): void;
        resetShowScrollbarY(): void;

    }
}
declare module qx.ui.mobile.embed {
    class Canvas extends qx.ui.mobile.core.Widget {
        getCanvas(): HTMLElement;
        setWidth(width: number): void;
        getWidth(): number;
        setHeight(height: number): void;
        getHeight(): number;
        getContext2d(): CanvasRenderingContext2D;

    }
}
declare module qx.ui.mobile.embed {
    class Html extends qx.ui.mobile.core.Widget {
        constructor(html?: string);
        protected _applyHtml(): void;
        getHtml(): string;
        setHtml(value: string): void;
        resetHtml(): void;

    }
}
declare module qx.ui.mobile.layout {
    class CardAnimation extends qx.core.Object {
        getAnimation(animationName: string, direction: string, reverse: boolean): IMap;
        getMap(): IMap;

    }
}
declare module qx.ui.mobile.layout {
    class Card extends qx.ui.mobile.layout.Abstract {
        setCardAnimation(value: qx.ui.mobile.layout.CardAnimation): void;
        getCardAnimation(): qx.ui.mobile.layout.CardAnimation;
        protected _showWidget(widget: qx.ui.mobile.core.Widget, properties: IMap): void;
        protected _swapWidget(): void;
        protected _fixWidgetSize(widget: qx.ui.mobile.core.Widget): void;
        protected _releaseWidgetSize(widget: qx.ui.mobile.core.Widget): void;
        protected _onAnimationEnd(evt: qx.event.type.Event): void;
        getDefaultAnimation(): string;
        setDefaultAnimation(value: string): void;
        resetDefaultAnimation(): void;
        getShowAnimation(): boolean;
        isShowAnimation(): boolean;
        setShowAnimation(value: boolean): void;
        resetShowAnimation(): void;
        getAnimationDuration(): number;
        setAnimationDuration(value: number): void;
        resetAnimationDuration(): void;

    }
}
declare module qx.ui.mobile.layout {
    class VBox extends qx.ui.mobile.layout.AbstractBox {

    }
}
declare module qx.ui.mobile.layout {
    class Abstract extends qx.core.Object {
        protected _getCssClasses(): qx.data.Array;
        protected _getSupportedChildLayoutProperties(): IMap;
        protected _setLayoutProperty(widget: qx.ui.mobile.core.Widget, property?: string, value?: any): void;
        setLayoutProperties(widget: qx.ui.mobile.core.Widget, properties: IMap): void;
        connectToWidget(widget: qx.ui.mobile.core.Widget): void;
        connectToChildWidget(widget: qx.ui.mobile.core.Widget): void;
        disconnectFromChildWidget(widget: qx.ui.mobile.core.Widget): void;
        updateLayout(widget: qx.ui.mobile.core.Widget, action: string, properties: IMap): void;
        protected _addCachedProperty(property: string, value: any): void;
        protected _getChildLayoutPropertyValue(widget: qx.ui.mobile.core.Widget, property: string): any;
        protected _addPropertyToChildLayoutCache(widget: qx.ui.mobile.core.Widget, property: string, value: any): void;

    }
}
declare module qx.ui.mobile.layout {
    class HBox extends qx.ui.mobile.layout.AbstractBox {

    }
}
declare module qx.ui.mobile.layout {
    class AbstractBox extends qx.ui.mobile.layout.Abstract {
        constructor(alignX?: string, alignY?: string, reversed?: boolean);
        protected _applyLayoutChange(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getReversed(): boolean;
        isReversed(): boolean;
        setReversed(value: boolean): void;
        resetReversed(): void;

    }
}
declare module qx.ui.mobile.toolbar {
    class ToolBar extends qx.ui.mobile.container.Composite {

    }
}
declare module qx.ui.mobile.toolbar {
    class Button extends qx.ui.mobile.form.Button {

    }
}
declare module qx.ui.mobile.toolbar {
    class Separator extends qx.ui.mobile.core.Widget {

    }
}
declare module qx.ui.mobile.basic {
    class Label extends qx.ui.mobile.core.Widget {
        constructor(value?: string);
        protected _applyValue(): void;
        protected _applyWrap(): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;
        getValue(): string;
        setValue(value: string): void;
        resetValue(): void;
        getWrap(): boolean;
        isWrap(): boolean;
        setWrap(value: boolean): void;
        resetWrap(): void;

    }
}
declare module qx.ui.mobile.basic {
    class Image extends qx.ui.mobile.core.Widget {
        constructor(source?: string);
        protected _applySource(): void;
        protected _onChangeAppScale(): void;
        protected _createHighResolutionOverlay(highResSource: string, lowResSource: string): void;
        protected _setSource(source: string): void;
        setDraggable(isDraggable: boolean): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;
        getSource(): string;
        setSource(value: string): void;
        resetSource(): void;

    }
}
declare module qx.ui.mobile.basic {
    class Atom extends qx.ui.mobile.core.Widget {
        constructor(label?: string, icon?: string);
        protected _applyIconPosition(): void;
        protected _applyShow(): void;
        protected _applyLabel(): void;
        protected _applyIcon(): void;
        getIconWidget(): qx.ui.mobile.basic.Image;
        getLabelWidget(): qx.ui.mobile.basic.Label;
        protected _createIconWidget(iconUrl: string): qx.ui.mobile.basic.Image;
        protected _createLabelWidget(label: string): qx.ui.mobile.basic.Label;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getShow(): any;
        setShow(value: any): void;
        resetShow(): void;
        getIconPosition(): any;
        setIconPosition(value: any): void;
        resetIconPosition(): void;

    }
}
declare module qx.ui.mobile.tabbar {
    class TabBar extends qx.ui.mobile.core.Widget {
        protected _onTap(evt: qx.event.type.Tap): void;
        protected _applySelection(): void;
        add(button: qx.ui.mobile.tabbar.TabButton): void;
        protected _onChangeView(evt: qx.event.type.Data): void;
        remove(button: qx.ui.mobile.tabbar.TabButton): void;
        getSelection(): qx.ui.mobile.tabbar.TabButton;
        setSelection(value: qx.ui.mobile.tabbar.TabButton): void;
        resetSelection(): void;

    }
}
declare module qx.ui.mobile.tabbar {
    class TabButton extends qx.ui.mobile.form.Button {
        protected _applyView(): void;
        getView(): qx.ui.mobile.core.Widget;
        setView(value: qx.ui.mobile.core.Widget): void;
        resetView(): void;

    }
}
declare module qx.ui.mobile.navigationbar {
    class NavigationBar extends qx.ui.mobile.container.Composite {

    }
}
declare module qx.ui.mobile.navigationbar {
    class Button extends qx.ui.mobile.form.Button {

    }
}
declare module qx.ui.mobile.navigationbar {
    class BackButton extends qx.ui.mobile.navigationbar.Button {

    }
}
declare module qx.ui.mobile.navigationbar {
    class Title extends qx.ui.mobile.basic.Label {

    }
}
declare module qx.ui.mobile.dialog {
    class BusyIndicator extends qx.ui.mobile.basic.Atom {
        constructor(label?: string);
        protected _onAppear(): void;
        protected _onDisappear(): void;
        protected _applySpinnerClass(): void;
        getSpinnerClass(): string;
        setSpinnerClass(value: string): void;
        resetSpinnerClass(): void;

    }
}
declare module qx.ui.mobile.dialog {
    class Menu extends qx.ui.mobile.dialog.Popup {
        constructor(itemsModel?: qx.data.Array, anchor?: qx.ui.mobile.core.Widget);
        protected _createClearButton(): qx.ui.mobile.form.Button;
        protected _createListScroller(selectionList: qx.ui.mobile.list.List): qx.ui.mobile.container.Scroll;
        protected _getListScroller(): qx.ui.mobile.container.Scroll;
        protected _createSelectionList(): qx.ui.mobile.list.List;
        getSelectionList(): qx.ui.mobile.list.List;
        protected _onSelectionListTap(): void;
        setItems(itemsModel: qx.data.Array): void;
        protected _applySelectedIndex(): void;
        protected _applyNullable(): void;
        protected _applyClearButtonLabel(): void;
        protected _render(): void;
        scrollToItem(index: number): void;
        getTitle(): string;
        setTitle(value: string): void;
        resetTitle(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getModal(): boolean;
        isModal(): boolean;
        setModal(value: boolean): void;
        resetModal(): void;
        getHideOnBlockerTap(): boolean;
        isHideOnBlockerTap(): boolean;
        setHideOnBlockerTap(value: boolean): void;
        resetHideOnBlockerTap(): void;
        getSelectedItemClass(): any;
        setSelectedItemClass(value: any): void;
        resetSelectedItemClass(): void;
        getUnselectedItemClass(): any;
        setUnselectedItemClass(value: any): void;
        resetUnselectedItemClass(): void;
        getNullable(): boolean;
        isNullable(): boolean;
        setNullable(value: boolean): void;
        resetNullable(): void;
        getClearButtonLabel(): string;
        setClearButtonLabel(value: string): void;
        resetClearButtonLabel(): void;
        getSelectedIndex(): number;
        setSelectedIndex(value: number): void;
        resetSelectedIndex(): void;
        getVisibleListItems(): number;
        setVisibleListItems(value: number): void;
        resetVisibleListItems(): void;

    }
}
declare module qx.ui.mobile.dialog {
    class Popup extends qx.ui.mobile.core.Widget {
        constructor(widget?: qx.ui.mobile.core.Widget, anchor?: qx.ui.mobile.core.Widget);
        protected _updatePosition(): void;
        hideWithDelay(delay: number): void;
        isShown(): boolean;
        toggleVisibility(): void;
        placeTo(left: number, top: number): void;
        protected _trackUserTap(evt: qx.event.type.Pointer): void;
        protected _positionToCenter(): void;
        protected _resetPosition(): void;
        protected _initializeChild(widget: qx.ui.mobile.core.Widget): void;
        protected _createTitleWidget(): qx.ui.mobile.basic.Atom;
        protected _applyTitle(): void;
        protected _applyIcon(): void;
        add(widget: qx.ui.mobile.core.Widget): void;
        setAnchor(widget: qx.ui.mobile.core.Widget): void;
        getTitleWidget(): qx.ui.mobile.basic.Atom;
        removeWidget(): qx.ui.mobile.core.Widget | null;
        getTitle(): string;
        setTitle(value: string): void;
        resetTitle(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getModal(): boolean;
        isModal(): boolean;
        setModal(value: boolean): void;
        resetModal(): void;
        getHideOnBlockerTap(): boolean;
        isHideOnBlockerTap(): boolean;
        setHideOnBlockerTap(value: boolean): void;
        resetHideOnBlockerTap(): void;

    }
}
declare module qx.ui.mobile.dialog {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        alert(title: string, text: string, handler: Function, scope: any, button: string): qx.ui.mobile.dialog.Popup | any;
        confirm(title: string, text: string, handler: Function, scope: any, buttons: string[]): qx.ui.mobile.dialog.Popup;
        input(title: string, text: string, handler: Function, scope: any, buttons: string[]): qx.ui.mobile.dialog.Popup;
        warning(title: string, text: string, handler: Function, scope: any, button: string): qx.ui.mobile.dialog.Popup;
        wait(title: string, text: string, handler: Function, scope: any, buttons: string[]): qx.ui.mobile.dialog.Popup;

    }
}
declare module qx.ui.mobile.container {
    class MNativeScroll {
        protected _onAppear(): void;
        protected _onTouchMove(evt: qx.event.type.Touch): void;
        protected _onTrackStart(evt: qx.event.type.Track): void;
        protected _preventPageBounce(): void;
        protected _onTrackEnd(evt: qx.event.type.Track): void;
        protected _onScroll(): void;
        protected _calcSnapPoints(): void;
        protected _determineSnapPoint(current: number, snapProperty: string): number;
        protected _snap(): void;
        protected _refresh(): void;
        protected _createScrollElement(): HTMLElement;
        protected _getPosition(): qx.data.Array;
        protected _getScrollContentElement(): HTMLElement;
        protected _getScrollHeight(): number;
        protected _getScrollWidth(): number;
        protected _scrollTo(x: number, y: number, time: number): void;

    }
}
declare module qx.ui.mobile.container {
    class Navigation extends qx.ui.mobile.container.Composite {
        getContent(): qx.ui.mobile.container.Composite;
        getNavigationBar(): qx.ui.mobile.navigationbar.NavigationBar;
        protected _createContent(): qx.ui.mobile.container.Composite;
        protected _onAnimationStart(): void;
        protected _onAnimationEnd(): void;
        protected _onUpdateLayout(evt: qx.event.type.Data): void;
        protected _update(widget: qx.ui.mobile.core.Widget): void;
        protected _createNavigationBar(): qx.ui.mobile.navigationbar.NavigationBar;

    }
}
declare module qx.ui.mobile.container {
    class MIScroll {
        protected _createScrollElement(): HTMLElement;
        protected _getScrollContentElement(): HTMLElement;
        protected _getPosition(): qx.data.Array;
        protected _getScrollHeight(): number;
        protected _getScrollWidth(): number;
        protected _scrollTo(x: number, y: number, time: number): void;
        protected _getDefaultScrollProperties(): any;
        protected _setScroll(scroll: any): void;
        disable(): void;
        enable(): void;
        protected _refresh(): void;

    }
}
declare module qx.ui.mobile.container {
    class Drawer extends qx.ui.mobile.container.Composite {
        constructor(parent?: qx.ui.mobile.container.Composite, layout?: qx.ui.mobile.layout.Abstract);
        protected _applyOrientation(): void;
        protected _applyPositionZ(): void;
        protected _applySize(): void;
        protected _applyTransitionDuration(): void;
        forceHide(): void;
        protected _enableTransition(): void;
        protected _disableTransition(): void;
        protected _getTransitionTarget(): qx.ui.mobile.core.Widget;
        toggleVisibility(): boolean;
        protected _onBack(evt: qx.event.type.Data): void;
        protected _onParentPointerDown(evt: qx.module.event.Pointer): void;
        protected _onParentSwipe(evt: qx.module.event.Pointer): void;
        getOrientation(): string;
        setOrientation(value: string): void;
        resetOrientation(): void;
        getSize(): number;
        setSize(value: number): void;
        resetSize(): void;
        getHideOnParentTap(): boolean;
        isHideOnParentTap(): boolean;
        setHideOnParentTap(value: boolean): void;
        resetHideOnParentTap(): void;
        getHideOnBack(): boolean;
        isHideOnBack(): boolean;
        setHideOnBack(value: boolean): void;
        resetHideOnBack(): void;
        getTapOffset(): number;
        setTapOffset(value: number): void;
        resetTapOffset(): void;
        getTransitionDuration(): number;
        setTransitionDuration(value: number): void;
        resetTransitionDuration(): void;
        getPositionZ(): any;
        setPositionZ(value: any): void;
        resetPositionZ(): void;

    }
}
declare module qx.ui.mobile.container {
    class Scroll extends qx.ui.mobile.container.Composite {
        constructor(scrollProperties?: any);
        protected _setCurrentX(value: number): void;
        protected _setCurrentY(value: number): void;
        setWaypointsX(waypoints: qx.data.Array): void;
        setWaypointsY(waypoints: qx.data.Array): void;
        getScrollHeight(): number;
        getScrollWidth(): number;
        protected _updateWaypoints(): void;
        protected _calcWaypoints(waypoints: qx.data.Array, results: qx.data.Array, scrollSize: number, axis?: string): void;
        protected _fireWaypoint(value: number, old: number, axis: string): void;
        refresh(): void;
        scrollTo(x: number, y: number, time: number): void;
        getPosition(): qx.data.Array;
        isScrollable(): boolean;
        protected _isScrollable(): boolean;
        protected _isScrollableX(): boolean;
        protected _isScrollableY(): boolean;
        scrollToElement(target: HTMLElement, time?: number): void;
        protected _scrollToElement(element: string, time?: number): void;
        protected _getScrollOffset(): qx.data.Array;
        scrollToWidget(widget: qx.ui.mobile.core.Widget, time: number): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.mobile.container {
    interface INavigation {
        getTitleWidget(): qx.ui.mobile.navigationbar.Title;
        getLeftContainer(): qx.ui.mobile.container.Composite;
        getRightContainer(): qx.ui.mobile.container.Composite;

    }
}
declare module qx.ui.mobile.container {
    class Composite extends qx.ui.mobile.core.Widget {
        getChildren(): qx.ui.core.Widget[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.Widget, layoutProperties?: IMap): void;
        addAt(child: qx.ui.core.Widget, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.Widget, before: qx.ui.core.Widget, layoutProperties?: IMap): void;
        addAfter(child: qx.ui.core.Widget, after: qx.ui.core.Widget, layoutProperties?: IMap): void;
        remove(child: qx.ui.core.Widget): void;
        removeAt(index: number): void;
        removeAll(): void;
        setLayout(layout: qx.ui.mobile.layout.Abstract): void;
        getLayout(): qx.ui.mobile.layout.Abstract;
        constructor(layout?: qx.ui.mobile.layout.Abstract);
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;

    }
}
declare module qx.ui.mobile.container {
    class Collapsible extends qx.ui.mobile.core.Widget {
        constructor(title?: string);
        add(child: qx.ui.mobile.core.Widget, layoutProperties?: IMap): void;
        setTitle(title: string): void;
        getHeader(): qx.ui.mobile.basic.Label;
        getContent(): qx.ui.mobile.container.Composite;
        protected _createHeader(): qx.ui.mobile.basic.Label;
        protected _createContent(): qx.ui.mobile.container.Composite;
        protected _applyCollapsed(): void;
        protected _applyCombined(): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;
        getCollapsed(): boolean;
        isCollapsed(): boolean;
        setCollapsed(value: boolean): void;
        resetCollapsed(): void;
        getCombined(): boolean;
        isCombined(): boolean;
        setCombined(value: boolean): void;
        resetCombined(): void;

    }
}
declare module qx.ui.mobile.container {
    class Carousel extends qx.ui.mobile.container.Composite {
        releaseFixedSize(): void;
        fixSize(): void;
        protected _setHeight(height: number): void;
        protected _setWidth(width: number): void;
        getFireDomUpdatedOnResize(): boolean;
        isFireDomUpdatedOnResize(): boolean;
        setFireDomUpdatedOnResize(value: boolean): void;
        resetFireDomUpdatedOnResize(): void;
        constructor(transitionDuration?: number);
        removePageByIndex(pageIndex: number): qx.ui.mobile.container.Composite;
        nextPage(): void;
        previousPage(): void;
        getPageCount(): number;
        protected _scrollToPage(pageIndex: number, showTransition?: boolean): void;
        protected _doScrollLoop(): void;
        protected _onScrollerTransitionEnd(): void;
        protected _createPaginationLabel(): qx.ui.mobile.container.Composite;
        protected _setScrollersOpacity(opacity: number): void;
        protected _applyShowPagination(): void;
        protected _onPaginationLabelTap(): void;
        protected _updateCarouselLayout(): void;
        protected _refreshScrollerPosition(): void;
        protected _onContainerUpdate(): void;
        protected _getScrollerOffset(): number;
        protected _onPointerDown(evt: qx.event.type.Pointer): void;
        protected _onTrack(evt: qx.event.type.Track): void;
        protected _onPointerUp(evt: qx.event.type.Pointer): void;
        protected _onSwipe(evt: qx.event.type.Swipe): void;
        protected _calculateTransitionDuration(deltaX: number, duration: number): number;
        protected _onNativeScroll(evt: qx.event.type.Native): void;
        protected _setTransitionDuration(value: number): void;
        protected _snapCarouselPage(): void;
        protected _updatePagination(newActiveIndex: number): void;
        protected _updateScrollerPosition(x: number): void;
        protected _removeListeners(): void;
        getDefaultCssClass(): string;
        setDefaultCssClass(value: string): void;
        resetDefaultCssClass(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getId(): string;
        setId(value: string): void;
        resetId(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getActivatable(): boolean;
        isActivatable(): boolean;
        setActivatable(value: boolean): void;
        resetActivatable(): void;
        getRotation(): number;
        setRotation(value: number): void;
        resetRotation(): void;
        getTransformUnit(): any;
        setTransformUnit(value: any): void;
        resetTransformUnit(): void;
        getScaleX(): number;
        setScaleX(value: number): void;
        resetScaleX(): void;
        getScaleY(): number;
        setScaleY(value: number): void;
        resetScaleY(): void;
        getTranslateX(): number;
        setTranslateX(value: number): void;
        resetTranslateX(): void;
        getTranslateY(): number;
        setTranslateY(value: number): void;
        resetTranslateY(): void;
        getTranslateZ(): number;
        setTranslateZ(value: number): void;
        resetTranslateZ(): void;
        getShowPagination(): boolean;
        isShowPagination(): boolean;
        setShowPagination(value: boolean): void;
        resetShowPagination(): void;
        getScrollLoop(): boolean;
        isScrollLoop(): boolean;
        setScrollLoop(value: boolean): void;
        resetScrollLoop(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getCurrentIndex(): number;
        setCurrentIndex(value: number): void;
        resetCurrentIndex(): void;
        getTransitionDuration(): number;
        setTransitionDuration(value: number): void;
        resetTransitionDuration(): void;

    }
}
declare module qx.ui.mobile.container {
    class MScrollHandling {
        protected _getParentScrollContainer(): qx.ui.mobile.container.Scroll;

    }
}
declare module qx.ui.mobile.container {
    interface IScrollDelegate {
        getScrollOffset(): qx.data.Array;

    }
}
declare module qx.ui.mobile.list.renderer.group {
    class Abstract extends qx.ui.mobile.container.Composite {
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;

    }
}
declare module qx.ui.mobile.list.renderer.group {
    class Default extends qx.ui.mobile.list.renderer.group.Abstract {
        getImageWidget(): qx.ui.mobile.basic.Image;
        getTitleWidget(): qx.ui.mobile.basic.Label;
        setImage(source: string): void;
        setTitle(title: string): void;
        setGroup(groupTitle: string): void;
        protected _init(): void;
        protected _createRightContainer(): qx.ui.mobile.container.Composite;
        protected _createImage(): qx.ui.mobile.basic.Image;
        protected _createTitle(): qx.ui.mobile.basic.Label;

    }
}
declare module qx.ui.mobile.list.renderer {
    class Abstract extends qx.ui.mobile.container.Composite {
        getRowIndexFromEvent(evt: qx.event.type.Event): number;
        getRowIndex(element: HTMLElement): number;
        protected _applyShowArrow(): void;
        protected _applyRemovable(): void;
        protected _applySelected(): void;
        getSelected(): boolean;
        isSelected(): boolean;
        setSelected(value: boolean): void;
        resetSelected(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getRemovable(): boolean;
        isRemovable(): boolean;
        setRemovable(value: boolean): void;
        resetRemovable(): void;
        getShowArrow(): boolean;
        isShowArrow(): boolean;
        setShowArrow(value: boolean): void;
        resetShowArrow(): void;

    }
}
declare module qx.ui.mobile.list.renderer {
    class Default extends qx.ui.mobile.list.renderer.Abstract {
        getImageWidget(): qx.ui.mobile.basic.Image;
        getTitleWidget(): qx.ui.mobile.basic.Label;
        getSubtitleWidget(): qx.ui.mobile.basic.Label;
        setImage(source: string): void;
        setTitle(title: string): void;
        setSubtitle(subtitle: string): void;
        protected _init(): void;
        protected _createRightContainer(): qx.ui.mobile.container.Composite;
        protected _createImage(): qx.ui.mobile.basic.Image;
        protected _createTitle(): qx.ui.mobile.basic.Label;
        protected _createSubtitle(): qx.ui.mobile.basic.Label;

    }
}
declare module qx.ui.mobile.list.provider {
    class Provider extends qx.core.Object {
        protected _setItemRenderer(renderer: qx.ui.mobile.list.renderer.Abstract): void;
        protected _getItemRenderer(): qx.ui.mobile.list.renderer.Abstract;
        protected _setGroupRenderer(renderer: qx.ui.mobile.list.renderer.group.Abstract): void;
        protected _getGroupRenderer(): qx.ui.mobile.list.renderer.group.Abstract;
        getItemElement(data: any, row: number): HTMLElement;
        getGroupElement(data: any, group: number): HTMLElement;
        protected _configureItem(data: any, row: number): void;
        protected _configureGroupItem(data: any, group: number): void;
        protected _createGroupRenderer(): qx.ui.mobile.list.renderer.group.Abstract;
        protected _createItemRenderer(): qx.ui.mobile.list.renderer.Abstract;
        protected _applyDelegate(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.mobile.list {
    interface IListDelegate {
        configureItem(item: qx.ui.mobile.list.renderer.Abstract, data: any, row: number): void;
        createItemRenderer(): qx.ui.mobile.list.renderer.Abstract;

    }
}
declare module qx.ui.mobile.list {
    class List extends qx.ui.mobile.core.Widget {
        constructor(delegate?: qx.ui.mobile.list.IListDelegate);
        configureItem(item: qx.ui.mobile.list.renderer.Abstract, data: any, row: number): void;
        protected _onTap(evt: qx.event.type.Tap): void;
        protected _onTrackStart(evt: qx.event.type.Track): void;
        protected _onTrack(evt: qx.event.type.Track): void;
        protected _onTrackEnd(evt: qx.event.type.Track): void;
        protected _getElement(evt: qx.event.type.Event): HTMLElement;
        protected _applyModel(): void;
        protected _applyDelegate(): void;
        protected _extractRowsToRender(name: string): number[];
        getListItemHeight(): number;
        render(): void;
        protected _renderGroup(itemIndex: number, groupIndex: number): HTMLElement;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getModel(): qx.data.Array;
        setModel(value: qx.data.Array): void;
        resetModel(): void;
        getItemCount(): number;
        setItemCount(value: number): void;
        resetItemCount(): void;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;

    }
}
declare module qx.ui.mobile.control {
    class Picker extends qx.ui.mobile.container.Composite {
        protected _onAppear(): void;
        protected _applyVisibleItems(): void;
        getModel(): qx.data.Array;
        protected _createPickerSlot(slotModel: qx.data.Array, slotIndex: number, delegate?: qx.ui.mobile.list.IListDelegate): qx.ui.mobile.container.Scroll;
        protected _createPlaceholderItem(): qx.ui.mobile.container.Composite;
        protected _calcItemHeight(): number;
        protected _onChangeSelection(evt: qx.event.type.Data): void;
        protected _onWaypoint(evt: qx.event.type.Data): void;
        getSelectedIndex(slotIndex: number): number;
        setSelectedIndex(slotIndex: number, selectedIndex: number): void;
        getSlotCount(): number;
        addSlot(slotModel: qx.data.Array, delegate?: qx.ui.mobile.list.IListDelegate): void;
        removeSlot(slotIndex: number): void;
        protected _onSlotDataChange(): void;
        getVisibleItems(): any;
        setVisibleItems(value: any): void;
        resetVisibleItems(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;

    }
}
declare module qx.ui.window {
    interface IWindowManager {
        setDesktop(desktop: qx.ui.window.IDesktop | null): void;
        changeActiveWindow(active: qx.ui.window.Window, oldActive: qx.ui.window.Window): void;
        updateStack(): void;
        bringToFront(win: qx.ui.window.Window): void;
        sendToBack(win: qx.ui.window.Window): void;

    }
}
declare module qx.ui.window {
    interface IDesktop {
        setWindowManager(manager: qx.ui.window.IWindowManager): void;
        getWindows(): qx.ui.window.Window[];
        supportsMaximize(): boolean;
        blockContent(zIndex: number): void;
        unblock(): void;
        isBlocked(): boolean;

    }
}
declare module qx.ui.window {
    class MDesktop {
        getWindowManager(): qx.ui.window.IWindowManager;
        supportsMaximize(): boolean;
        setWindowManager(manager: qx.ui.window.IWindowManager): void;
        protected _onChangeActive(e: qx.event.type.Event): void;
        protected _applyActiveWindow(): void;
        protected _onChangeModal(e: qx.event.type.Event): void;
        protected _onChangeVisibility(): void;
        protected _afterAddChild(win: qx.ui.core.Widget): void;
        protected _addWindow(win: qx.ui.window.Window): void;
        protected _afterRemoveChild(win: qx.ui.core.Widget): void;
        protected _removeWindow(win: qx.ui.window.Window): void;
        getWindows(): qx.ui.window.Window[];
        getActiveWindow(): qx.ui.window.Window;
        setActiveWindow(value: qx.ui.window.Window): void;
        resetActiveWindow(): void;

    }
}
declare module qx.ui.window {
    class Manager extends qx.core.Object implements qx.ui.window.IWindowManager {
        setDesktop(desktop: qx.ui.window.IDesktop | null): void;
        changeActiveWindow(active: qx.ui.window.Window, oldActive: qx.ui.window.Window): void;
        updateStack(): void;
        bringToFront(win: qx.ui.window.Window): void;
        sendToBack(win: qx.ui.window.Window): void;
        getDesktop(): qx.ui.window.IDesktop;
        syncWidget(): void;

    }
}
declare module qx.ui.window {
    class Window extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        protected _getResizeFrame(): qx.ui.core.Widget;
        getResizableTop(): boolean;
        isResizableTop(): boolean;
        setResizableTop(value: boolean): void;
        resetResizableTop(): void;
        getResizableRight(): boolean;
        isResizableRight(): boolean;
        setResizableRight(value: boolean): void;
        resetResizableRight(): void;
        getResizableBottom(): boolean;
        isResizableBottom(): boolean;
        setResizableBottom(value: boolean): void;
        resetResizableBottom(): void;
        getResizableLeft(): boolean;
        isResizableLeft(): boolean;
        setResizableLeft(value: boolean): void;
        resetResizableLeft(): void;
        setResizable(value: any): void;
        resetResizable(): void;
        getResizeSensitivity(): number;
        setResizeSensitivity(value: number): void;
        resetResizeSensitivity(): void;
        getUseResizeFrame(): boolean;
        isUseResizeFrame(): boolean;
        setUseResizeFrame(value: boolean): void;
        resetUseResizeFrame(): void;
        protected _activateMoveHandle(widget: qx.ui.core.Widget): void;
        protected _onMoveRoll(e: qx.event.type.Roll): void;
        protected _onMovePointerDown(e: qx.event.type.Pointer): void;
        protected _onMovePointerMove(e: qx.event.type.Pointer): void;
        protected _onMovePointerUp(e: qx.event.type.Pointer): void;
        getMovable(): boolean;
        isMovable(): boolean;
        setMovable(value: boolean): void;
        resetMovable(): void;
        getUseMoveFrame(): boolean;
        isUseMoveFrame(): boolean;
        setUseMoveFrame(value: boolean): void;
        resetUseMoveFrame(): void;
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        constructor(caption?: string, icon?: string);
        protected _updateCaptionBar(): void;
        close(): void;
        open(): void;
        center(): void;
        maximize(): void;
        minimize(): void;
        restore(): void;
        moveTo(left: number, top: number): void;
        isMaximized(): boolean;
        getMode(): string;
        protected _applyActive(): void;
        protected _applyModal(): void;
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        protected _applyShowStatusbar(): void;
        protected _applyCaptionBarChange(): void;
        protected _applyStatus(): void;
        protected _applyCenterOnAppear(): void;
        protected _applyCenterOnContainerResize(): void;
        protected _onWindowEventStop(e: qx.event.type.Event): void;
        protected _onWindowPointerDown(e: qx.event.type.Pointer): void;
        protected _onWindowFocusOut(e: qx.event.type.Focus): void;
        protected _onCaptionPointerDblTap(e: qx.event.type.Pointer): void;
        protected _onMinimizeButtonTap(e: qx.event.type.Pointer): void;
        protected _onRestoreButtonTap(e: qx.event.type.Pointer): void;
        protected _onMaximizeButtonTap(e: qx.event.type.Pointer): void;
        protected _onCloseButtonTap(e: qx.event.type.Pointer): void;
        getActive(): boolean;
        isActive(): boolean;
        setActive(value: boolean): void;
        resetActive(): void;
        getAlwaysOnTop(): boolean;
        isAlwaysOnTop(): boolean;
        setAlwaysOnTop(value: boolean): void;
        resetAlwaysOnTop(): void;
        getModal(): boolean;
        isModal(): boolean;
        setModal(value: boolean): void;
        resetModal(): void;
        getCaption(): any;
        setCaption(value: any): void;
        resetCaption(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getStatus(): string;
        setStatus(value: string): void;
        resetStatus(): void;
        getShowClose(): boolean;
        isShowClose(): boolean;
        setShowClose(value: boolean): void;
        resetShowClose(): void;
        getShowMaximize(): boolean;
        isShowMaximize(): boolean;
        setShowMaximize(value: boolean): void;
        resetShowMaximize(): void;
        getShowMinimize(): boolean;
        isShowMinimize(): boolean;
        setShowMinimize(value: boolean): void;
        resetShowMinimize(): void;
        getAllowClose(): boolean;
        isAllowClose(): boolean;
        setAllowClose(value: boolean): void;
        resetAllowClose(): void;
        getAllowMaximize(): boolean;
        isAllowMaximize(): boolean;
        setAllowMaximize(value: boolean): void;
        resetAllowMaximize(): void;
        getAllowMinimize(): boolean;
        isAllowMinimize(): boolean;
        setAllowMinimize(value: boolean): void;
        resetAllowMinimize(): void;
        getShowStatusbar(): boolean;
        isShowStatusbar(): boolean;
        setShowStatusbar(value: boolean): void;
        resetShowStatusbar(): void;
        getCenterOnAppear(): boolean;
        isCenterOnAppear(): boolean;
        setCenterOnAppear(value: boolean): void;
        resetCenterOnAppear(): void;
        getCenterOnContainerResize(): boolean;
        isCenterOnContainerResize(): boolean;
        setCenterOnContainerResize(value: boolean): void;
        resetCenterOnContainerResize(): void;
        getAutoDestroy(): boolean;
        isAutoDestroy(): boolean;
        setAutoDestroy(value: boolean): void;
        resetAutoDestroy(): void;

    }
}
declare module qx.ui.window {
    class Desktop extends qx.ui.core.Widget implements qx.ui.window.IDesktop {
        setWindowManager(manager: qx.ui.window.IWindowManager): void;
        getWindows(): qx.ui.window.Window[];
        supportsMaximize(): boolean;
        blockContent(zIndex: number): void;
        unblock(): void;
        isBlocked(): boolean;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        getWindowManager(): qx.ui.window.IWindowManager;
        protected _onChangeActive(e: qx.event.type.Event): void;
        protected _applyActiveWindow(): void;
        protected _onChangeModal(e: qx.event.type.Event): void;
        protected _onChangeVisibility(): void;
        protected _afterAddChild(win: qx.ui.core.Widget): void;
        protected _addWindow(win: qx.ui.window.Window): void;
        protected _afterRemoveChild(win: qx.ui.core.Widget): void;
        protected _removeWindow(win: qx.ui.window.Window): void;
        getActiveWindow(): qx.ui.window.Window;
        setActiveWindow(value: qx.ui.window.Window): void;
        resetActiveWindow(): void;
        protected _createBlocker(): qx.ui.core.Blocker;
        protected _applyBlockerColor(): void;
        protected _applyBlockerOpacity(): void;
        block(): void;
        forceUnblock(): void;
        getBlocker(): qx.ui.core.Blocker;
        getBlockerColor(): string;
        setBlockerColor(value: string): void;
        resetBlockerColor(): void;
        getBlockerOpacity(): number;
        setBlockerOpacity(value: number): void;
        resetBlockerOpacity(): void;
        constructor(windowManager?: qx.ui.window.IWindowManager);

    }
}
declare module qx.ui.list.core {
    interface IListDelegate {
        configureItem(item: qx.ui.core.Widget): void;
        configureGroupItem(item: qx.ui.core.Widget): void;
        createItem(): qx.ui.core.Widget;
        createGroupItem(): qx.ui.core.Widget;
        bindItem(controller: qx.ui.list.core.MWidgetController, item: qx.ui.core.Widget, id: number): void;
        bindGroupItem(controller: qx.ui.list.core.MWidgetController, item: qx.ui.core.Widget, id: number): void;
        filter(data: any): boolean;
        sorter(a: any, b: any): number;
        group(data: any): string | any | null;
        onPool(item: qx.ui.core.Widget): void;

    }
}
declare module qx.ui.list.core {
    class MWidgetController {
        bindDefaultProperties(item: qx.ui.core.Widget, index: number): void;
        bindProperty(sourcePath: string | null, targetProperty: string, options: IMap | null, targetWidget: qx.ui.core.Widget, index: number): void;
        bindPropertyReverse(targetPath: string | null, sourceProperty: string, options: IMap | null, sourceWidget: qx.ui.core.Widget, index: number): void;
        removeBindings(): void;
        protected _configureItem(item: qx.ui.core.Widget): void;
        protected _configureGroupItem(item: qx.ui.core.Widget): void;
        protected _bindItem(item: qx.ui.core.Widget, index: number): void;
        protected _bindGroupItem(item: qx.ui.core.Widget, index: number): void;
        protected _removeBindingsFrom(item: qx.ui.core.Widget): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getGroupLabelPath(): string;
        setGroupLabelPath(value: string): void;
        resetGroupLabelPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getGroupLabelOptions(): any;
        setGroupLabelOptions(value: any): void;
        resetGroupLabelOptions(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.list.provider {
    interface IListProvider {
        createLayer(): qx.ui.virtual.layer.Abstract;
        createItemRenderer(): any;
        createGroupRenderer(): any;
        styleSelectabled(row: number): void;
        styleUnselectabled(row: number): void;
        isSelectable(row: number): boolean;
        setLabelPath(path: string): void;
        setIconPath(path: string): void;
        setLabelOptions(options: IMap): void;
        setIconOptions(options: IMap): void;
        setDelegate(delegate: any): void;
        removeBindings(): void;

    }
}
declare module qx.ui.list.provider {
    class WidgetProvider extends qx.core.Object implements qx.ui.virtual.core.IWidgetCellProvider, qx.ui.list.provider.IListProvider {
        getCellWidget(row: number, column: number): qx.ui.core.LayoutItem;
        poolCellWidget(widget: qx.ui.core.LayoutItem): void;
        createLayer(): qx.ui.virtual.layer.Abstract;
        createItemRenderer(): any;
        createGroupRenderer(): any;
        styleSelectabled(row: number): void;
        styleUnselectabled(row: number): void;
        isSelectable(row: number): boolean;
        setLabelPath(path: string): void;
        setIconPath(path: string): void;
        setLabelOptions(options: IMap): void;
        setIconOptions(options: IMap): void;
        setDelegate(delegate: any): void;
        removeBindings(): void;
        bindDefaultProperties(item: qx.ui.core.Widget, index: number): void;
        bindProperty(sourcePath: string | null, targetProperty: string, options: IMap | null, targetWidget: qx.ui.core.Widget, index: number): void;
        bindPropertyReverse(targetPath: string | null, sourceProperty: string, options: IMap | null, sourceWidget: qx.ui.core.Widget, index: number): void;
        protected _configureItem(item: qx.ui.core.Widget): void;
        protected _configureGroupItem(item: qx.ui.core.Widget): void;
        protected _bindItem(item: qx.ui.core.Widget, index: number): void;
        protected _bindGroupItem(item: qx.ui.core.Widget, index: number): void;
        protected _removeBindingsFrom(item: qx.ui.core.Widget): void;
        getLabelPath(): string;
        resetLabelPath(): void;
        getIconPath(): string;
        resetIconPath(): void;
        getGroupLabelPath(): string;
        setGroupLabelPath(value: string): void;
        resetGroupLabelPath(): void;
        getLabelOptions(): any;
        resetLabelOptions(): void;
        getIconOptions(): any;
        resetIconOptions(): void;
        getGroupLabelOptions(): any;
        setGroupLabelOptions(value: any): void;
        resetGroupLabelOptions(): void;
        getDelegate(): any;
        resetDelegate(): void;
        constructor(list?: qx.ui.list.List);
        protected _styleSelectabled(widget: qx.ui.core.Widget): void;
        protected _styleUnselectabled(widget: qx.ui.core.Widget): void;
        protected _onPool(item: qx.ui.core.Widget): void;
        protected _onItemCreated(event: qx.event.type.Data): void;
        protected _onGroupItemCreated(event: qx.event.type.Data): void;
        protected _onChangeDelegate(event: qx.event.type.Data): void;

    }
}
declare module qx.ui.list {
    class List extends qx.ui.virtual.core.Scroller implements qx.data.controller.ISelection {
        setSelection(value: qx.data.IListData): void;
        getSelection(): qx.data.IListData;
        resetSelection(): void;
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _initSelectionManager(): void;
        setAutoScrollIntoView(value: boolean): void;
        getAutoScrollIntoView(): boolean;
        protected _updateSelection(): void;
        initSelection(value: qx.data.Array): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array): void;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onChangeSelection(e: qx.event.type.Data): void;
        protected _onManagerChangeSelection(e: qx.event.type.Data): void;
        protected _applyDefaultSelection(): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;
        constructor(model?: qx.data.IListData | null);
        refresh(): void;
        protected _initWidgetProvider(): void;
        protected _init(): void;
        protected _initBackground(): void;
        protected _initLayer(): void;
        protected _getDataFromRow(row: number): any | null;
        protected _getLookupTable(): qx.data.Array;
        protected _lookup(row: number): number;
        protected _lookupGroup(row: number): number;
        protected _reverseLookup(index: number): number;
        protected _isGroup(row: number): boolean;
        protected _getSelectables(): any;
        protected _applyModel(): void;
        protected _applyRowHeight(): void;
        protected _applyGroupRowHeight(): void;
        protected _applyLabelPath(): void;
        protected _applyIconPath(): void;
        protected _applyGroupLabelPath(): void;
        protected _applyLabelOptions(): void;
        protected _applyIconOptions(): void;
        protected _applyGroupLabelOptions(): void;
        protected _applyDelegate(): void;
        protected _applyVariableItemHeight(): void;
        protected _onResize(e: qx.event.type.Data): void;
        protected _onModelChange(e: qx.event.type.Data): void;
        protected _onLayerUpdated(): void;
        protected _runDelegateFilter(model: qx.data.IListData): void;
        protected _runDelegateSorter(model: qx.data.IListData): void;
        protected _runDelegateGroup(model: qx.data.IListData): void;
        protected _setRowItemSize(): void;
        getModel(): qx.data.IListData;
        setModel(value: qx.data.IListData): void;
        resetModel(): void;
        getItemHeight(): number;
        setItemHeight(value: number): void;
        resetItemHeight(): void;
        getGroupItemHeight(): number;
        setGroupItemHeight(value: number): void;
        resetGroupItemHeight(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getGroupLabelPath(): string;
        setGroupLabelPath(value: string): void;
        resetGroupLabelPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getGroupLabelOptions(): any;
        setGroupLabelOptions(value: any): void;
        resetGroupLabelOptions(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getAutoGrouping(): boolean;
        isAutoGrouping(): boolean;
        setAutoGrouping(value: boolean): void;
        resetAutoGrouping(): void;
        getGroups(): qx.data.Array;
        setGroups(value: qx.data.Array): void;
        resetGroups(): void;
        getVariableItemHeight(): boolean;
        isVariableItemHeight(): boolean;
        setVariableItemHeight(value: boolean): void;
        resetVariableItemHeight(): void;

    }
}
declare module qx.ui.virtual.behavior {
    class Prefetch extends qx.core.Object {
        constructor(scroller?: qx.ui.virtual.core.Scroller, settings?: IMap);
        setPrefetchX(minLeft: number, maxLeft: number, minRight: number, maxRight: number): void;
        setPrefetchY(minAbove: number, maxAbove: number, minBelow: number, maxBelow: number): void;
        protected _onInterval(): void;
        protected _applyScroller(): void;
        protected _applyInterval(): void;
        getScroller(): qx.ui.virtual.core.Scroller;
        setScroller(value: qx.ui.virtual.core.Scroller): void;
        resetScroller(): void;
        getInterval(): number;
        setInterval(value: number): void;
        resetInterval(): void;

    }
}
declare module qx.ui.virtual.core {
    interface ILayer {
        fullUpdate(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;
        updateLayerWindow(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;
        updateLayerData(): void;

    }
}
declare module qx.ui.virtual.core {
    interface IHtmlCellProvider {
        getCellProperties(row: number, column: number): IMap;

    }
}
declare module qx.ui.virtual.core {
    class CellEvent extends qx.event.type.Pointer {
        getRow(): number;
        setRow(value: number): void;
        resetRow(): void;
        getColumn(): number;
        setColumn(value: number): void;
        resetColumn(): void;

    }
}
declare module qx.ui.virtual.core {
    interface IWidgetCellProvider {
        getCellWidget(row: number, column: number): qx.ui.core.LayoutItem;
        poolCellWidget(widget: qx.ui.core.LayoutItem): void;

    }
}
declare module qx.ui.virtual.core {
    class Pane extends qx.ui.core.Widget {
        constructor(rowCount?: number, columnCount?: number, cellHeight?: number, cellWidth?: number);
        getRowConfig(): qx.ui.virtual.core.Axis;
        getColumnConfig(): qx.ui.virtual.core.Axis;
        getChildren(): any[];
        addLayer(layer: qx.ui.virtual.core.ILayer): void;
        getLayers(): qx.ui.virtual.core.ILayer[];
        getVisibleLayers(): qx.ui.virtual.core.ILayer[];
        getScrollMaxX(): number;
        getScrollMaxY(): number;
        setScrollY(value: number): void;
        getScrollY(): number;
        setScrollX(value: number): void;
        getScrollX(): number;
        getScrollSize(): IMap;
        scrollRowIntoView(row: number): void;
        scrollColumnIntoView(column: number): void;
        scrollCellIntoView(row: number, column: number): void;
        getCellAtPosition(documentX: number, documentY: number): IMap | null;
        prefetchX(minLeft: number, maxLeft: number, minRight: number, maxRight: number): void;
        prefetchY(minAbove: number, maxAbove: number, minBelow: number, maxBelow: number): void;
        protected _onResize(): void;
        protected _onAppear(): void;
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _onContextmenu(e: qx.event.type.Pointer): void;
        protected _onDbltap(e: qx.event.type.Pointer): void;
        protected _checkScrollBounds(): void;
        protected _setLayerWindow(layers: qx.ui.virtual.core.ILayer[], left: number, top: number, minWidth: number, minHeight: number, doFullUpdate?: boolean): void;
        fullUpdate(): void;
        isUpdatePending(): boolean;
        protected _fullUpdate(): void;
        protected _deferredUpdateScrollPosition(): void;
        protected _updateScrollPosition(): void;

    }
}
declare module qx.ui.virtual.core {
    class Axis extends qx.core.Object {
        constructor(defaultItemSize?: number, itemCount?: number);
        getDefaultItemSize(): number;
        setDefaultItemSize(defaultItemSize: number): void;
        getItemCount(): number;
        setItemCount(itemCount: number): void;
        setItemSize(index: number, size: number): void;
        getItemSize(index: number): number;
        resetItemSizes(): void;
        getItemAtPosition(position: number | null): IMap;
        getItemPosition(index: number): number | null;
        getTotalSize(): number;
        getItemSizes(startIndex: number, minSizeSum: number): number[];

    }
}
declare module qx.ui.virtual.core {
    class Scroller extends qx.ui.core.scroll.AbstractScrollArea {
        constructor(rowCount?: number, columnCount?: number, cellHeight?: number, cellWidth?: number);
        getPane(): qx.ui.virtual.core.Pane;

    }
}
declare module qx.ui.virtual.cell {
    class AbstractImage extends qx.ui.virtual.cell.Cell {
        protected _identifyImage(value: any): IMap;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getTextAlign(): any;
        setTextAlign(value: any): void;
        resetTextAlign(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;

    }
}
declare module qx.ui.virtual.cell {
    class WidgetCell extends qx.ui.virtual.cell.AbstractWidget {
        protected _applyDelegate(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.ui.virtual.cell {
    class Cell extends qx.ui.virtual.cell.Abstract {
        protected _getCssProperties(): qx.data.Array;
        protected _applyAppearance(): void;
        protected _getValue(propertyName: qx.ui.virtual.cell.String): any;
        protected _storeStyle(propertyName: qx.ui.virtual.cell.String, styles: qx.ui.virtual.cell.String): void;
        protected _applyBackgroundColor(): void;
        protected _applyTextColor(): void;
        protected _applyTextAlign(): void;
        protected _applyFont(): void;
        protected _applyPadding(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getTextAlign(): any;
        setTextAlign(value: any): void;
        resetTextAlign(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;

    }
}
declare module qx.ui.virtual.cell {
    class Date extends qx.ui.virtual.cell.Cell {
        constructor(dateFormat?: qx.util.format.DateFormat | null);
        getDateFormat(): qx.util.format.DateFormat;
        setDateFormat(value: qx.util.format.DateFormat): void;
        resetDateFormat(): void;

    }
}
declare module qx.ui.virtual.cell {
    class Boolean extends qx.ui.virtual.cell.AbstractImage {
        protected _applyIconTrue(): void;
        protected _applyIconFalse(): void;
        getIconTrue(): string;
        setIconTrue(value: string): void;
        resetIconTrue(): void;
        getIconFalse(): string;
        setIconFalse(value: string): void;
        resetIconFalse(): void;

    }
}
declare module qx.ui.virtual.cell {
    interface ICell {
        getCellProperties(data: any, states: IMap): IMap;

    }
}
declare module qx.ui.virtual.cell {
    class AbstractWidget extends qx.core.Object implements qx.ui.virtual.cell.IWidgetCell {
        getCellWidget(data: any, states: IMap): qx.ui.core.LayoutItem;
        pool(widget: qx.ui.core.LayoutItem): void;
        updateStates(widget: qx.ui.core.LayoutItem, states: IMap): void;
        updateData(widget: qx.ui.core.LayoutItem, data: any): void;
        protected _createWidget(): qx.ui.core.LayoutItem;
        protected _cleanupPool(): void;

    }
}
declare module qx.ui.virtual.cell {
    interface IWidgetCell {
        getCellWidget(data: any, states: IMap): qx.ui.core.LayoutItem;
        pool(widget: qx.ui.core.LayoutItem): void;
        updateStates(widget: qx.ui.core.LayoutItem, states: IMap): void;
        updateData(widget: qx.ui.core.LayoutItem, data: any): void;

    }
}
declare module qx.ui.virtual.cell {
    class Number extends qx.ui.virtual.cell.Cell {
        constructor(numberFormat?: qx.util.format.NumberFormat | null);
        getNumberFormat(): qx.util.format.NumberFormat;
        setNumberFormat(value: qx.util.format.NumberFormat): void;
        resetNumberFormat(): void;

    }
}
declare module qx.ui.virtual.cell {
    class String extends qx.ui.virtual.cell.Cell {

    }
}
declare module qx.ui.virtual.cell {
    class CellStylesheet extends qx.core.Object {
        static getInstance(): CellStylesheet;
        getStylesheet(): StyleSheet;
        getCssClass(key: qx.ui.virtual.cell.String): string | null;
        computeClassForStyles(key: qx.ui.virtual.cell.String, styleString: qx.ui.virtual.cell.String): qx.ui.virtual.cell.String;

    }
}
declare module qx.ui.virtual.cell {
    class Html extends qx.ui.virtual.cell.Cell {

    }
}
declare module qx.ui.virtual.cell {
    interface IWidgetCellDelegate {
        createWidget(): qx.ui.core.LayoutItem;

    }
}
declare module qx.ui.virtual.cell {
    class Abstract extends qx.core.Object implements qx.ui.virtual.cell.ICell {
        getCellProperties(data: any, states: IMap): IMap;
        getCssClasses(value: any, states: any): qx.ui.virtual.cell.String;
        getAttributes(value: any, states: any): qx.ui.virtual.cell.String;
        getStyles(value: any, states: any): qx.ui.virtual.cell.String;
        getInsets(value: any, states: any): number[];
        getContent(value: any, states: any): qx.ui.virtual.cell.String;

    }
}
declare module qx.ui.virtual.cell {
    class Image extends qx.ui.virtual.cell.AbstractImage {

    }
}
declare module qx.ui.virtual.layer {
    class WidgetCell extends qx.ui.virtual.layer.Abstract {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        constructor(widgetCellProvider?: qx.ui.virtual.core.IWidgetCellProvider);
        getRenderedCellWidget(row: number, column: number): qx.ui.core.LayoutItem | null;
        protected _getSpacer(): qx.ui.core.Spacer;
        protected _activateNotEmptyChild(elementToPool: qx.ui.core.Widget): void;

    }
}
declare module qx.ui.virtual.layer {
    class CellSpanManager extends qx.core.Object {
        constructor(rowConfig?: qx.ui.virtual.core.Axis, columnConfig?: qx.ui.virtual.core.Axis);
        addCell(id: string, row: number, column: number, rowSpan: number, columnSpan: number): void;
        removeCell(id: string): void;
        protected _invalidateSortCache(): void;
        protected _getSortedCells(key: string): IMap[];
        protected _findCellsInRange(key: string, min: number, max: number): IMap;
        findCellsInWindow(firstRow: number, firstColumn: number, rowCount: number, columnCount: number): IMap[];
        protected _onRowConfigChange(e: qx.event.type.Event): void;
        protected _onColumnConfigChange(e: qx.event.type.Event): void;
        protected _invalidatePositionCache(): void;
        protected _getRowPosition(row: number): number;
        protected _getColumnPosition(column: number): number;
        protected _getSingleCellBounds(cell: IMap, firstVisibleRow: IMap, firstVisibleColumn: IMap): IMap;
        getCellBounds(cells: IMap[], firstVisibleRow: IMap, firstVisibleColumn: IMap): IMap[];
        computeCellSpanMap(cells: IMap[], firstRow: number, firstColumn: number, rowCount: number, columnCount: number): IMap[][];

    }
}
declare module qx.ui.virtual.layer {
    class GridLines extends qx.ui.virtual.layer.Abstract {
        constructor(orientation?: string, lineColor?: string, lineSize?: number | null);
        isHorizontal(): boolean;
        setLineColor(index: number, color: string): void;
        setLineSize(index: number, size: number): void;
        getLineSize(index: number): number;
        getLineColor(index: number): string;
        getDefaultLineColor(): string;
        setDefaultLineColor(value: string): void;
        resetDefaultLineColor(): void;
        getDefaultLineSize(): number;
        setDefaultLineSize(value: number): void;
        resetDefaultLineSize(): void;

    }
}
declare module qx.ui.virtual.layer {
    class WidgetCellSpan extends qx.ui.virtual.layer.Abstract {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        constructor(widgetCellProvider?: qx.ui.virtual.core.IWidgetCellProvider, rowConfig?: qx.ui.virtual.core.Axis, columnConfig?: qx.ui.virtual.core.Axis);
        getRenderedCellWidget(row: number, column: number): qx.ui.core.LayoutItem | null;
        setCellSpan(row: number, column: number, rowSpan: number, columnSpan: number): void;
        protected _getSpacer(): qx.ui.core.Spacer;

    }
}
declare module qx.ui.virtual.layer {
    class Column extends qx.ui.virtual.layer.AbstractBackground {

    }
}
declare module qx.ui.virtual.layer {
    class AbstractBackground extends qx.ui.virtual.layer.Abstract {
        constructor(colorEven?: string, colorOdd?: string);
        setColor(index: number, color: string | null): void;
        clearCustomColors(): void;
        getColor(index: number): string;
        protected _applyColorEven(): void;
        protected _applyColorOdd(): void;
        setBackground(index: number, decorator: qx.ui.decoration.IDecorator | null): void;
        getBackground(index: number): qx.ui.decoration.IDecorator;
        getColorEven(): string;
        setColorEven(value: string): void;
        resetColorEven(): void;
        getColorOdd(): string;
        setColorOdd(value: string): void;
        resetColorOdd(): void;

    }
}
declare module qx.ui.virtual.layer {
    class Row extends qx.ui.virtual.layer.AbstractBackground {

    }
}
declare module qx.ui.virtual.layer {
    class HtmlCell extends qx.ui.virtual.layer.Abstract {
        constructor(htmlCellProvider?: qx.ui.virtual.core.IHtmlCellProvider);
        protected _getCellSizeStyle(width: number, height: number, insetX: number, insetY: number): string;

    }
}
declare module qx.ui.virtual.layer {
    class HtmlCellSpan extends qx.ui.virtual.layer.HtmlCell {
        constructor(htmlCellProvider?: qx.ui.virtual.core.IHtmlCellProvider, rowConfig?: qx.ui.virtual.core.Axis, columnConfig?: qx.ui.virtual.core.Axis);
        setCellSpan(row: number, column: number, rowSpan: number, columnSpan: number): void;

    }
}
declare module qx.ui.virtual.layer {
    class Abstract extends qx.ui.core.Widget implements qx.ui.virtual.core.ILayer {
        fullUpdate(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;
        updateLayerWindow(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;
        updateLayerData(): void;
        getFirstRow(): number;
        getFirstColumn(): number;
        getRowSizes(): number[];
        getColumnSizes(): number[];
        protected _updateLayerData(): void;
        protected _fullUpdate(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;
        protected _updateLayerWindow(firstRow: number, firstColumn: number, rowSizes: number[], columnSizes: number[]): void;

    }
}
declare module qx.ui.virtual.selection {
    interface ISelectionDelegate {
        isItemSelectable(item: any): boolean;
        styleSelectable(item: any, type: string, wasAdded: boolean): void;

    }
}
declare module qx.ui.virtual.selection {
    class Column extends qx.ui.virtual.selection.Row {

    }
}
declare module qx.ui.virtual.selection {
    class MModel {
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _initSelectionManager(): void;
        setAutoScrollIntoView(value: boolean): void;
        getAutoScrollIntoView(): boolean;
        protected _updateSelection(): void;
        setSelection(value: qx.data.Array): void;
        getSelection(): qx.data.Array;
        resetSelection(): void;
        initSelection(value: qx.data.Array): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array): void;
        protected _applySelectionMode(): void;
        protected _applyDragSelection(): void;
        protected _applyQuickSelection(): void;
        protected _onChangeSelection(e: qx.event.type.Data): void;
        protected _onManagerChangeSelection(e: qx.event.type.Data): void;
        protected _applyDefaultSelection(): void;
        getSelectionMode(): any;
        setSelectionMode(value: any): void;
        resetSelectionMode(): void;
        getDragSelection(): boolean;
        isDragSelection(): boolean;
        setDragSelection(value: boolean): void;
        resetDragSelection(): void;
        getQuickSelection(): boolean;
        isQuickSelection(): boolean;
        setQuickSelection(value: boolean): void;
        resetQuickSelection(): void;

    }
}
declare module qx.ui.virtual.selection {
    class Row extends qx.ui.virtual.selection.Abstract {
        protected _getItemCount(): number;

    }
}
declare module qx.ui.virtual.selection {
    class Abstract extends qx.ui.core.selection.Abstract {
        constructor(pane?: qx.ui.virtual.core.Pane, selectionDelegate?: qx.ui.virtual.selection.ISelectionDelegate);
        attachPointerEvents(): void;
        detatchPointerEvents(): void;
        detachPointerEvents(): void;
        attachKeyEvents(target: qx.core.Object): void;
        detachKeyEvents(target: qx.core.Object): void;
        attachListEvents(list: qx.core.Object): void;
        detachListEvents(list: qx.core.Object): void;

    }
}
declare module qx.ui.virtual.selection {
    class CellRectangle extends qx.ui.virtual.selection.Abstract {
        protected _getItemCount(): number;

    }
}
declare module qx.ui.virtual.selection {
    class CellLines extends qx.ui.virtual.selection.CellRectangle {

    }
}
declare module qx.ui.menu {
    class RadioButton extends qx.ui.menu.AbstractButton implements qx.ui.form.IRadioItem, qx.ui.form.IBooleanForm, qx.ui.form.IModel {
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyModel(): void;
        constructor(label?: string, menu?: qx.ui.menu.Menu);
        protected _applyValue(): void;
        protected _applyGroup(): void;
        protected _onExecute(e: qx.event.type.Event): void;
        resetValue(): void;
        isValue(): boolean;
        resetGroup(): void;

    }
}
declare module qx.ui.menu {
    class CheckBox extends qx.ui.menu.AbstractButton implements qx.ui.form.IBooleanForm {
        constructor(label?: string, menu?: qx.ui.menu.Menu);
        protected _applyValue(): void;
        protected _onExecute(e: qx.event.type.Event): void;
        setValue(value: boolean): void;
        resetValue(): void;
        getValue(): boolean;
        isValue(): boolean;

    }
}
declare module qx.ui.menu {
    class MenuSlideBar extends qx.ui.container.SlideBar {

    }
}
declare module qx.ui.menu {
    class Menu extends qx.ui.core.Widget {
        getLayoutLocation(widget: qx.ui.core.Widget): IMap | null;
        moveTo(left: number, top: number): void;
        placeToWidget(target: qx.ui.core.Widget, liveupdate: boolean): boolean;
        placeToPointer(event: qx.event.type.Pointer): void;
        placeToElement(elem: HTMLElement, liveupdate: boolean): void;
        placeToPoint(point: IMap): void;
        protected _getPlacementOffsets(): IMap;
        protected _place(coords: IMap): void;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getPlaceMethod(): any;
        setPlaceMethod(value: any): void;
        resetPlaceMethod(): void;
        getDomMove(): boolean;
        isDomMove(): boolean;
        setDomMove(value: boolean): void;
        resetDomMove(): void;
        getPlacementModeX(): any;
        setPlacementModeX(value: any): void;
        resetPlacementModeX(): void;
        getPlacementModeY(): any;
        setPlacementModeY(value: any): void;
        resetPlacementModeY(): void;
        getOffsetLeft(): number;
        setOffsetLeft(value: number): void;
        resetOffsetLeft(): void;
        getOffsetTop(): number;
        setOffsetTop(value: number): void;
        resetOffsetTop(): void;
        getOffsetRight(): number;
        setOffsetRight(value: number): void;
        resetOffsetRight(): void;
        getOffsetBottom(): number;
        setOffsetBottom(value: number): void;
        resetOffsetBottom(): void;
        setOffset(value: any): void;
        resetOffset(): void;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        open(): void;
        openAtPointer(e: qx.event.type.Pointer): void;
        openAtPoint(point: IMap): void;
        addSeparator(): void;
        getColumnSizes(): qx.data.Array;
        getSelectables(): qx.ui.core.Widget[];
        protected _applyIconColumnWidth(): void;
        protected _applyArrowColumnWidth(): void;
        protected _applySpacingX(): void;
        protected _applySpacingY(): void;
        getParentMenu(): qx.ui.core.Widget | null;
        protected _applySelectedButton(): void;
        protected _applyOpenedButton(): void;
        protected _applyOpener(): void;
        protected _applyBlockerColor(): void;
        protected _applyBlockerOpacity(): void;
        protected _getMenuLayout(): qx.ui.layout.Abstract;
        protected _getMenuBounds(): IMap;
        protected _computePlacementSize(): IMap;
        protected _assertSlideBar(callback: Function): any | undefined;
        protected _afterAddChild(param0: any): void;
        protected _onResize(): void;
        protected _onPointerOver(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        getSpacingX(): number;
        setSpacingX(value: number): void;
        resetSpacingX(): void;
        getSpacingY(): number;
        setSpacingY(value: number): void;
        resetSpacingY(): void;
        getIconColumnWidth(): number;
        setIconColumnWidth(value: number): void;
        resetIconColumnWidth(): void;
        getArrowColumnWidth(): number;
        setArrowColumnWidth(value: number): void;
        resetArrowColumnWidth(): void;
        getBlockerColor(): string;
        setBlockerColor(value: string): void;
        resetBlockerColor(): void;
        getBlockerOpacity(): number;
        setBlockerOpacity(value: number): void;
        resetBlockerOpacity(): void;
        getSelectedButton(): qx.ui.core.Widget;
        setSelectedButton(value: qx.ui.core.Widget): void;
        resetSelectedButton(): void;
        getOpenedButton(): qx.ui.core.Widget;
        setOpenedButton(value: qx.ui.core.Widget): void;
        resetOpenedButton(): void;
        getOpener(): qx.ui.core.Widget;
        setOpener(value: qx.ui.core.Widget): void;
        resetOpener(): void;
        getOpenInterval(): number;
        setOpenInterval(value: number): void;
        resetOpenInterval(): void;
        getCloseInterval(): number;
        setCloseInterval(value: number): void;
        resetCloseInterval(): void;
        getBlockBackground(): boolean;
        isBlockBackground(): boolean;
        setBlockBackground(value: boolean): void;
        resetBlockBackground(): void;

    }
}
declare module qx.ui.menu {
    class Button extends qx.ui.menu.AbstractButton {
        constructor(label?: string, icon?: string, command?: qx.ui.command.Command, menu?: qx.ui.menu.Menu);

    }
}
declare module qx.ui.menu {
    class Layout extends qx.ui.layout.VBox {
        getColumnSizes(): qx.data.Array;
        getColumnSpacing(): number;
        setColumnSpacing(value: number): void;
        resetColumnSpacing(): void;
        getSpanColumn(): number;
        setSpanColumn(value: number): void;
        resetSpanColumn(): void;
        getIconColumnWidth(): number;
        setIconColumnWidth(value: number): void;
        resetIconColumnWidth(): void;
        getArrowColumnWidth(): number;
        setArrowColumnWidth(value: number): void;
        resetArrowColumnWidth(): void;

    }
}
declare module qx.ui.menu {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        protected _getChild(menu: qx.ui.menu.Menu, start: number, iter: number, loop?: boolean): qx.ui.menu.Button;
        protected _isInMenu(widget: qx.ui.core.Widget): boolean;
        protected _isMenuOpener(widget: qx.ui.core.Widget): boolean;
        protected _getMenuButton(widget: qx.ui.core.Widget): qx.ui.menu.Button;
        add(obj: qx.ui.menu.Menu): void;
        remove(obj: qx.ui.menu.Menu): void;
        hideAll(): void;
        getActiveMenu(): qx.ui.menu.Menu;
        scheduleOpen(menu: qx.ui.menu.Menu): void;
        scheduleClose(menu: qx.ui.menu.Menu): void;
        cancelOpen(menu: qx.ui.menu.Menu): void;
        cancelClose(menu: qx.ui.menu.Menu): void;
        protected _onOpenInterval(e: qx.event.type.Event): void;
        protected _onCloseInterval(e: qx.event.type.Event): void;
        preventContextMenuOnce(): void;
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onKeyUpDown(e: qx.event.type.KeySequence): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _onKeyPressUp(menu: qx.ui.menu.Menu): void;
        protected _onKeyPressDown(menu: qx.ui.menu.Menu): void;
        protected _onKeyPressLeft(menu: qx.ui.menu.Menu): void;
        protected _onKeyPressRight(menu: qx.ui.menu.Menu): void;
        protected _onKeyPressEnter(menu: qx.ui.menu.Menu, button: qx.ui.menu.AbstractButton, e: qx.event.type.KeySequence): void;
        protected _onKeyPressSpace(menu: qx.ui.menu.Menu, button: qx.ui.menu.AbstractButton, e: qx.event.type.KeySequence): void;
        protected _onRoll(e: qx.event.type.Roll): void;

    }
}
declare module qx.ui.menu {
    class AbstractButton extends qx.ui.core.Widget implements qx.ui.form.IExecutable {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        protected _applyCommand(): void;
        resetCommand(): void;
        getChildrenSizes(): qx.data.Array;
        protected _onTap(e: qx.event.type.Pointer): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        protected _onChangeCommand(e: qx.event.type.Data): void;
        protected _applyIcon(): void;
        protected _applyLabel(): void;
        protected _applyMenu(): void;
        protected _onMenuChange(e: qx.event.type.Data): void;
        protected _applyShowCommandLabel(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getMenu(): qx.ui.menu.Menu;
        setMenu(value: qx.ui.menu.Menu): void;
        resetMenu(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getShowCommandLabel(): boolean;
        isShowCommandLabel(): boolean;
        setShowCommandLabel(value: boolean): void;
        resetShowCommandLabel(): void;

    }
}
declare module qx.ui.menu {
    class Separator extends qx.ui.core.Widget {

    }
}
declare module qx.ui.menu {
    class ButtonLayout extends qx.ui.layout.Abstract {

    }
}
declare module qx.ui.splitpane {
    class HLayout extends qx.ui.layout.Abstract {

    }
}
declare module qx.ui.splitpane {
    class Splitter extends qx.ui.core.Widget {
        constructor(parentWidget?: qx.ui.splitpane.Pane);
        protected _applyKnobVisible(): void;
        getKnobVisible(): boolean;
        isKnobVisible(): boolean;
        setKnobVisible(value: boolean): void;
        resetKnobVisible(): void;

    }
}
declare module qx.ui.splitpane {
    class VLayout extends qx.ui.layout.Abstract {

    }
}
declare module qx.ui.splitpane {
    class Slider extends qx.ui.core.Widget {

    }
}
declare module qx.ui.splitpane {
    class Pane extends qx.ui.core.Widget {
        constructor(orientation?: string);
        getBlocker(): qx.ui.splitpane.Blocker;
        protected _applyOrientation(value: string, old: string): void;
        protected _applyOffset(): void;
        add(widget: qx.ui.core.Widget, flex: number): void;
        remove(widget: qx.ui.core.Widget): void;
        getChildren(): qx.ui.core.Widget[];
        protected _onPointerDown(e: qx.event.type.Pointer): void;
        protected _onPointerMove(e: qx.event.type.Pointer): void;
        protected _onPointerOut(e: qx.event.type.Pointer): void;
        protected _onPointerUp(e: qx.event.type.Pointer): void;
        protected _finalizeSizes(): void;
        protected _isActiveDragSession(): boolean;
        protected _setLastPointerPosition(x: number, y: number): void;
        getOffset(): number;
        setOffset(value: number): void;
        resetOffset(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;

    }
}
declare module qx.ui.splitpane {
    class Blocker extends qx.html.Element {
        constructor(orientation?: string);
        protected _applyOrientation(): void;
        setWidth(offset: number, spliterSize: number): void;
        setHeight(offset: number, spliterSize: number): void;
        setLeft(offset: number, splitterLeft: number): void;
        setTop(offset: number, splitterTop: number): void;
        getVisible(): boolean;
        isVisible(): boolean;
        setVisible(value: boolean): void;
        resetVisible(): void;
        getCssClass(): string;
        setCssClass(value: string): void;
        resetCssClass(): void;
        getOrientation(): any;
        setOrientation(value: any): void;
        resetOrientation(): void;

    }
}
declare module qx.ui.root {
    class Inline extends qx.ui.root.Abstract {
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        constructor(el?: HTMLElement, dynamicX?: boolean, dynamicY?: boolean);
        protected _onResize(e: qx.event.type.Event): void;
        protected _onWindowResize(): void;

    }
}
declare module qx.ui.root {
    class Application extends qx.ui.root.Abstract {
        constructor(doc?: Document);
        protected _onResize(e: qx.event.type.Event): void;

    }
}
declare module qx.ui.root {
    class Abstract extends qx.ui.core.Widget {
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        indexOf(child: qx.ui.core.Widget): number;
        add(child: qx.ui.core.LayoutItem, options?: IMap): void;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        remove(child: qx.ui.core.LayoutItem): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        removeAll(): qx.data.Array;
        protected _createBlocker(): qx.ui.core.Blocker;
        protected _applyBlockerColor(): void;
        protected _applyBlockerOpacity(): void;
        block(): void;
        isBlocked(): boolean;
        unblock(): void;
        forceUnblock(): void;
        blockContent(zIndex: number): void;
        getBlocker(): qx.ui.core.Blocker;
        getBlockerColor(): string;
        setBlockerColor(value: string): void;
        resetBlockerColor(): void;
        getBlockerOpacity(): number;
        setBlockerOpacity(value: number): void;
        resetBlockerOpacity(): void;
        getWindowManager(): qx.ui.window.IWindowManager;
        supportsMaximize(): boolean;
        setWindowManager(manager: qx.ui.window.IWindowManager): void;
        protected _onChangeActive(e: qx.event.type.Event): void;
        protected _applyActiveWindow(): void;
        protected _onChangeModal(e: qx.event.type.Event): void;
        protected _onChangeVisibility(): void;
        protected _afterAddChild(win: qx.ui.core.Widget): void;
        protected _addWindow(win: qx.ui.window.Window): void;
        protected _afterRemoveChild(win: qx.ui.core.Widget): void;
        protected _removeWindow(win: qx.ui.window.Window): void;
        getWindows(): qx.ui.window.Window[];
        getActiveWindow(): qx.ui.window.Window;
        setActiveWindow(value: qx.ui.window.Window): void;
        resetActiveWindow(): void;
        getLayout(): qx.ui.layout.Abstract;
        protected _onNativeContextMenu(e: qx.event.type.Mouse): void;
        protected _applyNativeHelp(): void;
        getGlobalCursor(): string;
        setGlobalCursor(value: string): void;
        resetGlobalCursor(): void;
        getNativeHelp(): boolean;
        isNativeHelp(): boolean;
        setNativeHelp(value: boolean): void;
        resetNativeHelp(): void;

    }
}
declare module qx.ui.root {
    class Page extends qx.ui.root.Abstract {
        constructor(doc?: Document);

    }
}
declare module qx.ui.command {
    class GroupManager extends qx.core.Object {
        add(group: qx.ui.command.Group): boolean;
        has(group: qx.ui.command.Group): boolean;
        remove(group: qx.ui.command.Group): any;
        setActive(group: qx.ui.command.Group): boolean;
        getActive(): any;
        block(): void;
        unblock(): void;
        protected _getGroup(group: qx.ui.command.Group): any;

    }
}
declare module qx.ui.command {
    class Command extends qx.core.Object {
        constructor(shortcut?: string);
        protected _applyActive(): void;
        protected _applyEnabled(): void;
        protected _applyShortcut(): void;
        execute(target?: any): void;
        getActive(): boolean;
        isActive(): boolean;
        setActive(value: boolean): void;
        resetActive(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getShortcut(): string;
        setShortcut(value: string): void;
        resetShortcut(): void;
        getLabel(): string;
        setLabel(value: string): void;
        resetLabel(): void;
        getIcon(): string;
        setIcon(value: string): void;
        resetIcon(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getValue(): any;
        setValue(value: any): void;
        resetValue(): void;
        getMenu(): qx.ui.menu.Menu;
        setMenu(value: qx.ui.menu.Menu): void;
        resetMenu(): void;

    }
}
declare module qx.ui.command {
    class Group extends qx.core.Object {
        protected _applyActive(): void;
        add(key: string, command: qx.ui.command.Command): boolean;
        has(key: string): boolean;
        remove(key: string): any;
        getActive(): boolean;
        isActive(): boolean;
        setActive(value: boolean): void;
        resetActive(): void;

    }
}
declare module qx.ui.control {
    class DateChooser extends qx.ui.core.Widget implements qx.ui.form.IExecutable, qx.ui.form.IForm, qx.ui.form.IDateForm {
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        protected _applyCommand(): void;
        resetCommand(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(date?: Date);
        protected _applyValue(): void;
        protected _applyMinValue(): void;
        protected _applyMaxValue(): void;
        protected _onPointerUpDown(e: qx.event.type.Pointer): void;
        protected _onNavButtonTap(evt: qx.event.type.Data): void;
        protected _onDayTap(evt: qx.event.type.Data): void;
        protected _onDayDblTap(): void;
        protected _onKeyPress(evt: qx.event.type.Data): void;
        showMonth(month?: number, year?: number): void;
        handleKeyPress(e: qx.event.type.Data): void;
        protected _updateDatePane(): void;
        setValue(value: Date): void;
        resetValue(): void;
        getValue(): Date;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        isEnabled(): boolean;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getShownMonth(): number;
        setShownMonth(value: number): void;
        resetShownMonth(): void;
        getShownYear(): number;
        setShownYear(value: number): void;
        resetShownYear(): void;
        getMinValue(): Date;
        setMinValue(value: Date): void;
        resetMinValue(): void;
        getMaxValue(): Date;
        setMaxValue(value: Date): void;
        resetMaxValue(): void;

    }
}
declare module qx.ui.control {
    class ColorSelector extends qx.ui.core.Widget implements qx.ui.form.IColorForm {
        setValue(value: any);
        resetValue(): void;
        getValue();
        protected _applyRed(): void;
        protected _applyGreen(): void;
        protected _applyBlue(): void;
        protected _applyHue(): void;
        protected _applySaturation(): void;
        protected _applyBrightness(): void;
        protected _onBrightnessHandlePointerDown(e: qx.event.type.Pointer): void;
        protected _onBrightnessHandlePointerUp(e: qx.event.type.Pointer): void;
        protected _onBrightnessHandlePointerMove(e: qx.event.type.Pointer): void;
        protected _onBrightnessFieldPointerDown(e: qx.event.type.Pointer): void;
        protected _onBrightnessPaneRoll(e: qx.event.type.Roll): void;
        protected _setBrightnessOnFieldEvent(e: qx.event.type.Pointer): void;
        protected _onHueSaturationHandlePointerUp(e: qx.event.type.Pointer): void;
        protected _onHueSaturationHandlePointerMove(e: qx.event.type.Pointer): void;
        protected _onHueSaturationFieldPointerDown(e: qx.event.type.Pointer): void;
        protected _onHueSaturationPaneRoll(e: qx.event.type.Roll): void;
        protected _setHueSaturationOnFieldEvent(e: qx.event.type.Pointer): void;
        protected _setRedFromSpinner(): void;
        protected _setGreenFromSpinner(): void;
        protected _setBlueFromSpinner(): void;
        protected _setHueFromSpinner(): void;
        protected _setSaturationFromSpinner(): void;
        protected _setBrightnessFromSpinner(): void;
        protected _onHexFieldChange(e: qx.event.type.Data): void;
        protected _setHexFromRgb(): void;
        protected _onColorFieldTap(e: qx.event.type.Pointer): void;
        protected _setHueFromRgb(): void;
        protected _setRgbFromHue(): void;
        protected _setPreviewFromRgb(): void;
        setPreviousColor(red: number, green: number, blue: number): void;
        protected _setBrightnessGradiant(): void;
        protected _onAppear(e: qx.event.type.Data): void;
        getMinWidth(): number;
        setMinWidth(value: number): void;
        resetMinWidth(): void;
        getWidth(): number;
        setWidth(value: number): void;
        resetWidth(): void;
        getMaxWidth(): number;
        setMaxWidth(value: number): void;
        resetMaxWidth(): void;
        getMinHeight(): number;
        setMinHeight(value: number): void;
        resetMinHeight(): void;
        getHeight(): number;
        setHeight(value: number): void;
        resetHeight(): void;
        getMaxHeight(): number;
        setMaxHeight(value: number): void;
        resetMaxHeight(): void;
        getAllowGrowX(): boolean;
        isAllowGrowX(): boolean;
        setAllowGrowX(value: boolean): void;
        resetAllowGrowX(): void;
        getAllowShrinkX(): boolean;
        isAllowShrinkX(): boolean;
        setAllowShrinkX(value: boolean): void;
        resetAllowShrinkX(): void;
        getAllowGrowY(): boolean;
        isAllowGrowY(): boolean;
        setAllowGrowY(value: boolean): void;
        resetAllowGrowY(): void;
        getAllowShrinkY(): boolean;
        isAllowShrinkY(): boolean;
        setAllowShrinkY(value: boolean): void;
        resetAllowShrinkY(): void;
        setAllowStretchX(value: any): void;
        resetAllowStretchX(): void;
        setAllowStretchY(value: any): void;
        resetAllowStretchY(): void;
        getMarginTop(): number;
        setMarginTop(value: number): void;
        resetMarginTop(): void;
        getMarginRight(): number;
        setMarginRight(value: number): void;
        resetMarginRight(): void;
        getMarginBottom(): number;
        setMarginBottom(value: number): void;
        resetMarginBottom(): void;
        getMarginLeft(): number;
        setMarginLeft(value: number): void;
        resetMarginLeft(): void;
        setMargin(value: any): void;
        resetMargin(): void;
        getAlignX(): any;
        setAlignX(value: any): void;
        resetAlignX(): void;
        getAlignY(): any;
        setAlignY(value: any): void;
        resetAlignY(): void;
        getPaddingTop(): number;
        setPaddingTop(value: number): void;
        resetPaddingTop(): void;
        getPaddingRight(): number;
        setPaddingRight(value: number): void;
        resetPaddingRight(): void;
        getPaddingBottom(): number;
        setPaddingBottom(value: number): void;
        resetPaddingBottom(): void;
        getPaddingLeft(): number;
        setPaddingLeft(value: number): void;
        resetPaddingLeft(): void;
        setPadding(value: any): void;
        resetPadding(): void;
        getZIndex(): number;
        setZIndex(value: number): void;
        resetZIndex(): void;
        getDecorator(): qx.ui.decoration.Decorator;
        setDecorator(value: qx.ui.decoration.Decorator): void;
        resetDecorator(): void;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): void;
        resetBackgroundColor(): void;
        getTextColor(): string;
        setTextColor(value: string): void;
        resetTextColor(): void;
        getFont(): string;
        setFont(value: string): void;
        resetFont(): void;
        getOpacity(): number;
        setOpacity(value: number): void;
        resetOpacity(): void;
        getCursor(): string;
        setCursor(value: string): void;
        resetCursor(): void;
        getToolTip(): qx.ui.tooltip.ToolTip;
        setToolTip(value: qx.ui.tooltip.ToolTip): void;
        resetToolTip(): void;
        getToolTipText(): string;
        setToolTipText(value: string): void;
        resetToolTipText(): void;
        getToolTipIcon(): string;
        setToolTipIcon(value: string): void;
        resetToolTipIcon(): void;
        getBlockToolTip(): boolean;
        isBlockToolTip(): boolean;
        setBlockToolTip(value: boolean): void;
        resetBlockToolTip(): void;
        getShowToolTipWhenDisabled(): boolean;
        isShowToolTipWhenDisabled(): boolean;
        setShowToolTipWhenDisabled(value: boolean): void;
        resetShowToolTipWhenDisabled(): void;
        getVisibility(): any;
        setVisibility(value: any): void;
        resetVisibility(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getAnonymous(): boolean;
        isAnonymous(): boolean;
        setAnonymous(value: boolean): void;
        resetAnonymous(): void;
        getTabIndex(): number;
        setTabIndex(value: number): void;
        resetTabIndex(): void;
        getFocusable(): boolean;
        isFocusable(): boolean;
        setFocusable(value: boolean): void;
        resetFocusable(): void;
        getKeepFocus(): boolean;
        isKeepFocus(): boolean;
        setKeepFocus(value: boolean): void;
        resetKeepFocus(): void;
        getKeepActive(): boolean;
        isKeepActive(): boolean;
        setKeepActive(value: boolean): void;
        resetKeepActive(): void;
        getDraggable(): boolean;
        isDraggable(): boolean;
        setDraggable(value: boolean): void;
        resetDraggable(): void;
        getDroppable(): boolean;
        isDroppable(): boolean;
        setDroppable(value: boolean): void;
        resetDroppable(): void;
        getSelectable(): boolean;
        isSelectable(): boolean;
        setSelectable(value: boolean): void;
        resetSelectable(): void;
        getContextMenu(): qx.ui.menu.Menu;
        setContextMenu(value: qx.ui.menu.Menu): void;
        resetContextMenu(): void;
        getNativeContextMenu(): boolean;
        isNativeContextMenu(): boolean;
        setNativeContextMenu(value: boolean): void;
        resetNativeContextMenu(): void;
        getAppearance(): string;
        setAppearance(value: string): void;
        resetAppearance(): void;
        getRed(): number;
        setRed(value: number): void;
        resetRed(): void;
        getGreen(): number;
        setGreen(value: number): void;
        resetGreen(): void;
        getBlue(): number;
        setBlue(value: number): void;
        resetBlue(): void;
        getHue(): number;
        setHue(value: number): void;
        resetHue(): void;
        getSaturation(): number;
        setSaturation(value: number): void;
        resetSaturation(): void;
        getBrightness(): number;
        setBrightness(value: number): void;
        resetBrightness(): void;

    }
}
declare module qx.ui.control {
    class ColorPopup extends qx.ui.popup.Popup implements qx.ui.form.IColorForm {
        protected _createBoxes(): void;
        protected _createColorSelector(): void;
        protected _applyValue(): void;
        protected _rotatePreviousColors(): void;
        protected _onFieldPointerDown(e: qx.event.type.Pointer): void;
        protected _onFieldPointerOver(e: qx.event.type.Pointer): void;
        protected _onFieldPointerOut(e: qx.event.type.Pointer): void;
        protected _onAutomaticBtnExecute(): void;
        protected _onSelectorButtonExecute(): void;
        protected _onColorSelectorOk(): void;
        protected _onColorSelectorCancel(): void;
        protected _onChangeVisibility(e: qx.event.type.Data): void;
        setValue(value: any): void;
        resetValue(): void;
        getValue(): any;
        getPosition(): any;
        setPosition(value: any): void;
        resetPosition(): void;
        getPlaceMethod(): any;
        setPlaceMethod(value: any): void;
        resetPlaceMethod(): void;
        getDomMove(): boolean;
        isDomMove(): boolean;
        setDomMove(value: boolean): void;
        resetDomMove(): void;
        getPlacementModeX(): any;
        setPlacementModeX(value: any): void;
        resetPlacementModeX(): void;
        getPlacementModeY(): any;
        setPlacementModeY(value: any): void;
        resetPlacementModeY(): void;
        getOffsetLeft(): number;
        setOffsetLeft(value: number): void;
        resetOffsetLeft(): void;
        getOffsetTop(): number;
        setOffsetTop(value: number): void;
        resetOffsetTop(): void;
        getOffsetRight(): number;
        setOffsetRight(value: number): void;
        resetOffsetRight(): void;
        getOffsetBottom(): number;
        setOffsetBottom(value: number): void;
        resetOffsetBottom(): void;
        setOffset(value: any): void;
        resetOffset(): void;
        getAutoHide(): boolean;
        isAutoHide(): boolean;
        setAutoHide(value: boolean): void;
        resetAutoHide(): void;
        getRed(): number;
        setRed(value: number): void;
        resetRed(): void;
        getGreen(): number;
        setGreen(value: number): void;
        resetGreen(): void;
        getBlue(): number;
        setBlue(value: number): void;
        resetBlue(): void;

    }
}
declare module qx.ui.groupbox {
    class RadioGroupBox extends qx.ui.groupbox.GroupBox implements qx.ui.form.IRadioItem, qx.ui.form.IExecutable, qx.ui.form.IBooleanForm, qx.ui.form.IModel {
        resetValue(): void;
        setValue(value: boolean): void;
        getValue(): boolean;
        setGroup(value: qx.ui.form.RadioGroup): void;
        getGroup(): qx.ui.form.RadioGroup;
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyModel(): void;
        protected _onExecute(e: qx.event.type.Event): void;
        protected _onRadioChangeValue(e: qx.event.type.Data): void;
        getLabel(): string;
        getContentPadding(): any;

    }
}
declare module qx.ui.groupbox {
    class CheckGroupBox extends qx.ui.groupbox.GroupBox implements qx.ui.form.IExecutable, qx.ui.form.IBooleanForm, qx.ui.form.IModel {
        setValue(value: any);
        resetValue(): void;
        getValue();
        setCommand(command: qx.ui.command.Command): void;
        getCommand(): qx.ui.command.Command;
        execute(): void;
        setModel(value: any): void;
        getModel(): any;
        resetModel(): void;
        protected _applyModel(): void;
        protected _onExecute(e: qx.event.type.Event): void;
        protected _onRadioChangeValue(e: qx.event.type.Data): void;
        getLegend(): string;
        setLegend(value: string): void;
        resetLegend(): void;
        getLegendPosition(): any;
        setLegendPosition(value: any): void;
        resetLegendPosition(): void;

    }
}
declare module qx.ui.groupbox {
    class GroupBox extends qx.ui.core.Widget implements qx.ui.form.IForm {
        setEnabled(enabled: boolean): void;
        getEnabled(): boolean;
        setRequired(required: boolean): void;
        getRequired(): boolean;
        setValid(valid: boolean): void;
        getValid(): boolean;
        setInvalidMessage(message: string): void;
        getInvalidMessage(): string;
        setRequiredInvalidMessage(message: string): void;
        getRequiredInvalidMessage(): string;
        getChildren(): qx.ui.core.LayoutItem[];
        hasChildren(): boolean;
        add(child: qx.ui.core.LayoutItem, options?: IMap): qx.ui.core.Widget;
        remove(child: qx.ui.core.LayoutItem): qx.ui.core.Widget;
        removeAll(): qx.data.Array;
        indexOf(child: qx.ui.core.LayoutItem): number;
        addAt(child: qx.ui.core.LayoutItem, index: number, options?: IMap): void;
        addBefore(child: qx.ui.core.LayoutItem, before: qx.ui.core.LayoutItem, options?: IMap): void;
        addAfter(child: qx.ui.core.LayoutItem, after: qx.ui.core.LayoutItem, options?: IMap): void;
        removeAt(index: number): qx.ui.core.LayoutItem;
        setLayout(layout: qx.ui.layout.Abstract): void;
        getLayout(): qx.ui.layout.Abstract;
        protected _applyContentPadding(): void;
        getContentPaddingTop(): number;
        setContentPaddingTop(value: number): void;
        resetContentPaddingTop(): void;
        getContentPaddingRight(): number;
        setContentPaddingRight(value: number): void;
        resetContentPaddingRight(): void;
        getContentPaddingBottom(): number;
        setContentPaddingBottom(value: number): void;
        resetContentPaddingBottom(): void;
        getContentPaddingLeft(): number;
        setContentPaddingLeft(value: number): void;
        resetContentPaddingLeft(): void;
        setContentPadding(value: any): void;
        resetContentPadding(): void;
        protected _applyValid(): void;
        isValid(): boolean;
        resetValid(): void;
        isRequired(): boolean;
        resetRequired(): void;
        resetInvalidMessage(): void;
        resetRequiredInvalidMessage(): void;
        constructor(legend?: string, icon?: string);
        protected _getContentPaddingTarget(): qx.ui.core.Widget;
        protected _applyLegend(): void;
        protected _applyLegendPosition(): void;
        protected _repositionFrame(): void;
        setIcon(icon: string): void;
        getIcon(): string;
        getLegend(): string;
        setLegend(value: string): void;
        resetLegend(): void;
        getLegendPosition(): any;
        setLegendPosition(value: any): void;
        resetLegendPosition(): void;

    }
}
declare module qx.locale {
    class MTranslation {
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;

    }
}
declare module qx.locale {
    class Date {
        static getAmMarker(locale: string): string;
        static getPmMarker(locale: string): string;
        static getDayNames(length: string, locale: string, context: string, withFallback?: boolean): string[];
        static getDayName(length: string, day: number, locale: string, context: string, withFallback?: boolean): string;
        static getMonthNames(length: string, locale: string, context: string, withFallback?: boolean): string[];
        static getMonthName(length: string, month: number, locale: string, context: string, withFallback?: boolean): string;
        static getDateFormat(size: string, locale?: string): string;
        static getDateTimeFormat(canonical: string, fallback: string, locale: string): string;
        static getTimeFormat(size: string, locale: string): string;
        static getWeekStart(locale: string): number;
        static getWeekendStart(locale: string): number;
        static getWeekendEnd(locale: string): number;
        static isWeekend(day: number, locale: string): boolean;
        protected static _getTerritory(locale: string): string;

    }
}
declare module qx.locale {
    class Key {
        static getKeyName(size: string, keyIdentifier: string, locale: string): string;

    }
}
declare module qx.locale {
    class Number {
        static getDecimalSeparator(locale: string): string;
        static getGroupSeparator(locale: string): string;
        static getPercentFormat(locale: string): string;

    }
}
declare module qx.locale {
    class String {
        static getQuotationStart(locale: qx.locale.String): qx.locale.String;
        static getQuotationEnd(locale: qx.locale.String): qx.locale.String;
        static getAlternateQuotationStart(locale: qx.locale.String): qx.locale.String;
        static getAlternateQuotationEnd(locale: qx.locale.String): qx.locale.String;

    }
}
declare module qx.locale {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        static tr(messageId: string, ...varargs: any[]): any;
        static trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        static trc(hint: string, messageId: string, ...varargs: any[]): any;
        static trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        static marktr(messageId: string): string;
        getLanguage(): string;
        getTerritory(): string;
        getAvailableLocales(includeNonloaded?: boolean): string[];
        protected _applyLocale(): void;
        addTranslation(languageCode: string, translationMap: IMap): void;
        addLocale(localeCode: string, localeMap: IMap): void;
        translate(messageId: string, args: any[], locale?: string): any;
        localize(messageId: string, args: any[], locale?: string): any;
        getLocale(): string;
        setLocale(value: string): void;
        resetLocale(): void;

    }
}
declare module qx.locale {
    class LocalizedString extends qx.type.BaseString {
        constructor(translation?: string, messageId?: string, args?: qx.data.Array, localized?: boolean);
        translate(): qx.locale.LocalizedString | string;
        getMessageId(): string;

    }
}
declare module qx {
    class Theme {
        static define(name: string, config: IMap): void;
        static getAll(): IMap;
        static getByName(name: string): any;
        static isDefined(name: string): boolean;
        static getTotalNumber(): number;
        static genericToString(): string;
        static patch(theme: qx.Theme, mixinTheme: qx.Theme): void;
        static include(theme: qx.Theme, mixinTheme: qx.Theme): void;

    }
}
declare module qx.bom {
    class Vml {
        static create(type: qx.bom.String, attributes?: IMap, win?: any): qx.bom.Element;
        static createImage(source?: string, width?: number, height?: number, xOffset?: number, yOffset?: number, imageWidth?: number, imageHeight?: number): qx.bom.Element;
        static updateImage(image: qx.bom.Element, source: qx.bom.String, width: number, height: number, xOffset?: number, yOffset?: number, imageWidth?: number, imageHeight?: number): void;

    }
}
declare module qx.bom {
    class PageVisibility extends qx.event.Emitter {
        constructor(document?: Document);
        static getInstance(): qx.bom.PageVisibility;
        isHidden(): boolean;
        getVisibilityState(): qx.bom.String;

    }
}
declare module qx.bom {
    class AnimationFrame extends qx.event.Emitter {
        static calculateTiming(func: qx.bom.String, x: number): number;
        static request(callback: Function, context: any): number;
        startSequence(duration: number): void;
        cancelSequence(): void;

    }
}
declare module qx.bom {
    class Cookie {
        static get(key: qx.bom.String): any;
        static set(key: qx.bom.String, value: qx.bom.String, expires?: number, path?: string, domain?: string, secure?: boolean, sameSite?: string): void;
        static del(key: qx.bom.String, path?: string, domain?: string): void;

    }
}
declare module qx.bom {
    class GeoLocation extends qx.core.Object {
        static getInstance(): GeoLocation;
        getCurrentPosition(enableHighAccuracy: boolean, timeout: number, maximumAge: number): void;
        startWatchPosition(enableHighAccuracy: boolean, timeout: number, maximumAge: number): void;
        stopWatchPosition(): void;
        protected _successHandler(position: any): void;
        protected _errorHandler(error: any): void;

    }
}
declare module qx.bom {
    class NativeHistory extends qx.bom.History implements qx.core.IDisposable {
        dispose(): void;
        protected _writeState(state: qx.bom.String): void;

    }
}
declare module qx.bom {
    class Template {
        static renderToNode(template: qx.bom.String, view: any, partials: any): HTMLElement;
        static get(id: qx.bom.String, view: any, partials: any): HTMLElement;
        protected static _createNodeFromTemplate(template: qx.bom.String): HTMLElement;

    }
}
declare module qx.bom {
    class Selector {

    }
}
declare module qx.bom {
    class Input {
        static create(type: qx.bom.String, attributes: IMap, win: Window): HTMLElement;
        static setValue(element: HTMLElement, value: string | null): void;
        static getValue(element: HTMLElement): string | qx.data.Array;

    }
}
declare module qx.bom {
    class Viewport {
        static getWidth(win?: Window): number;
        static getHeight(win?: Window): number;
        static getScrollLeft(win?: Window): number;
        static getScrollTop(win?: Window): number;
        static getOrientation(win?: Window): number;
        static isLandscape(win?: Window): boolean;
        static isPortrait(win?: Window): boolean;

    }
}
declare module qx.bom {
    class Range {

    }
}
declare module qx.bom {
    class IdleCallback extends qx.core.Object {
        static request(callback: Function, context: any, timeout: number): number;
        static cancel(handle: number): void;

    }
}
declare module qx.bom {
    class Lifecycle {
        static onReady(callback: Function, context?: any): void;
        static onShutdown(callback: Function, context?: any): void;

    }
}
declare module qx.bom.element {
    class Decoration {
        static update(element: HTMLElement, source: string, repeat: string, style: IMap): void;
        static create(source: string, repeat: string, style: IMap): string;
        static getTagName(repeat: string, source?: string): string;
        static getAttributes(source: string, repeat: string, style: IMap): string;
        static processAlphaFix(style: IMap, repeat: string, source: string): IMap;

    }
}
declare module qx.bom.element {
    class Cursor {
        static compile(cursor: string): string;
        static get(element: HTMLElement, mode: number): string;
        static set(element: HTMLElement, value: string): void;
        static reset(element: HTMLElement): void;

    }
}
declare module qx.bom.element {
    class Opacity {

    }
}
declare module qx.bom.element {
    class AnimationHandle extends qx.event.Emitter {
        isPlaying(): boolean;
        isEnded(): boolean;
        isPaused(): boolean;
        pause(): void;
        play(): void;
        stop(): void;

    }
}
declare module qx.bom.element {
    class Scroll {
        static getScrollbarWidth(): number;
        static intoViewX(element: HTMLElement, stop?: HTMLElement, align?: string): void;
        static intoViewY(element: HTMLElement, stop?: HTMLElement, align?: string): void;
        static intoView(element: HTMLElement, stop?: HTMLElement, alignX?: string, alignY?: string): void;

    }
}
declare module qx.bom.element {
    class Background {
        static compile(source?: string, repeat?: string, left?: number | null, top?: number | null): string;
        static getStyles(source: string, repeat?: string, left?: number | null, top?: number | null): IMap;
        static set(element: HTMLElement, source?: string, repeat?: string, left?: number, top?: number): void;

    }
}
declare module qx.bom.element {
    class Clip {
        static compile(map: IMap): string;
        static get(element: HTMLElement, mode: number): IMap;
        static set(element: HTMLElement, map: IMap): void;
        static reset(element: HTMLElement): void;

    }
}
declare module qx.bom.element {
    class Attribute {
        static compile(map: IMap): string;
        static get(element: HTMLElement, name: string): any;
        static set(element: HTMLElement, name: string, value: any): void;
        static serialize(writer: Function, name: string, value: any): void;
        static reset(element: HTMLElement, name: string): void;

    }
}
declare module qx.bom.element {
    class Location {
        static get(elem: HTMLElement, mode?: string): IMap;
        static getLeft(elem: HTMLElement, mode: string): number;
        static getTop(elem: HTMLElement, mode: string): number;
        static getRight(elem: HTMLElement, mode: string): number;
        static getBottom(elem: HTMLElement, mode: string): number;
        static getRelative(elem1: HTMLElement, elem2: HTMLElement, mode1?: string, mode2?: string): IMap;
        static getPosition(elem: HTMLElement): IMap;
        static getOffsetParent(element: HTMLElement): HTMLElement;

    }
}
declare module qx.bom.element {
    class Dimension {
        static getWidth(element: HTMLElement): number;
        static getHeight(element: HTMLElement): number;
        static getSize(element: HTMLElement): IMap;
        static getOuterHeight(element: HTMLElement, includeMargins?: boolean): number;
        static getOuterWidth(element: HTMLElement, includeMargins?: boolean): number;
        static getOuterSize(element: HTMLElement, includeMargins?: boolean): IMap;
        static getContentWidth(element: HTMLElement): number;
        static getContentHeight(element: HTMLElement): number;
        static getContentSize(element: HTMLElement): IMap;

    }
}
declare module qx.bom.element {
    class AnimationCss {
        static animateReverse(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;
        static animate(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;
        protected static _animate(el: HTMLElement, desc: IMap, duration?: number, reverse?: boolean): qx.bom.element.AnimationHandle;

    }
}
declare module qx.bom.element {
    class Style {
        static compile(map: IMap): string;
        static setCss(element: HTMLElement, value: string): void;
        static getCss(element: HTMLElement): string;
        static isPropertySupported(propertyName: string): boolean;
        static set(element: HTMLElement, name: string, value: any, smart?: boolean): void;
        static setStyles(element: HTMLElement, styles: IMap, smart?: boolean): void;
        static reset(element: HTMLElement, name: string, smart?: boolean): void;
        static get(element: HTMLElement, name: string, mode: number, smart?: boolean): any;

    }
}
declare module qx.bom.element {
    class Animation {
        static animate(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;
        static animateReverse(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;

    }
}
declare module qx.bom.element {
    class AnimationJs {
        static animate(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;
        static animateReverse(el: HTMLElement, desc: IMap, duration?: number): qx.bom.element.AnimationHandle;
        protected static _animate(el: HTMLElement, desc: IMap, duration?: number, reverse?: boolean): qx.bom.element.AnimationHandle;
        static play(handle: qx.bom.element.AnimationHandle): qx.bom.element.AnimationHandle;
        static pause(handle: qx.bom.element.AnimationHandle): qx.bom.element.AnimationHandle;
        static stop(handle: qx.bom.element.AnimationHandle): qx.bom.element.AnimationHandle;

    }
}
declare module qx.bom.element {
    class Class {
        static get(element: HTMLElement): string;
        static replace(element: HTMLElement, oldName: string, newName: string): string;

    }
}
declare module qx.bom.element {
    class BoxSizing {
        static compile(value: string): string;
        static get(element: HTMLElement): string;
        static set(element: HTMLElement, value: string): void;
        static reset(element: HTMLElement): void;

    }
}
declare module qx.bom.element {
    class Transform {
        static transform(el: HTMLElement, transforms: IMap): void;
        static translate(el: HTMLElement, value: string | null): void;
        static scale(el: HTMLElement, value: number | null): void;
        static rotate(el: HTMLElement, value: string | null): void;
        static skew(el: HTMLElement, value: string | null): void;
        static getCss(transforms: IMap): string;
        static setOrigin(el: HTMLElement, value: string): void;
        static getOrigin(el: HTMLElement): string;
        static setStyle(el: HTMLElement, value: string): void;
        static getStyle(el: HTMLElement): string;
        static setPerspective(el: HTMLElement, value: number): void;
        static getPerspective(el: HTMLElement): string;
        static setPerspectiveOrigin(el: HTMLElement, value: string): void;
        static getPerspectiveOrigin(el: HTMLElement): string;
        static setBackfaceVisibility(el: HTMLElement, value: boolean): void;
        static getBackfaceVisibility(el: HTMLElement): boolean;
        static getTransformValue(transforms: IMap): string;
        protected static _compute3dProperty(property: string, params: qx.data.Array): string;
        protected static _computeAxisProperties(property: string, params: qx.data.Array): string;

    }
}
declare module qx.bom.element {
    class Dataset {
        static set(element: HTMLElement, name: string, value: any): void;
        static get(element: HTMLElement, name: string): any;
        static getAll(element: HTMLElement): IMap;
        static hasData(element: HTMLElement): boolean;
        static remove(element: HTMLElement, name: string): void;

    }
}
declare module qx.bom {
    class Stylesheet {
        static includeFile(href: qx.bom.String, doc?: Document): void;
        static createElement(text?: string): StyleSheet;
        static addRule(sheet: any, selector: qx.bom.String, entry: qx.bom.String): void;
        static removeRule(sheet: any, selector: qx.bom.String): void;
        static removeSheet(sheet: any): void;
        static removeAllRules(sheet: any): void;
        static addImport(sheet: any, url: qx.bom.String): void;
        static removeImport(sheet: any, url: qx.bom.String): void;
        static removeAllImports(sheet: any): void;

    }
}
declare module qx.bom {
    class FullScreen extends qx.event.Emitter {
        constructor(element?: HTMLElement);
        static getInstance(): qx.bom.FullScreen;
        isFullScreen(): boolean;
        request(): void;
        cancel(): void;

    }
}
declare module qx.bom {
    class Style {
        static getPropertyName(propertyName: qx.bom.String): string | null;
        static getCssName(propertyName: qx.bom.String): qx.bom.String;
        static getAppliedStyle(element: HTMLElement, propertyName: qx.bom.String, value: qx.bom.String, prefixed?: boolean): string | null;

    }
}
declare module qx.bom {
    class MediaQuery extends qx.event.Emitter {
        constructor(query?: qx.bom.String);
        getQuery(): qx.bom.String;
        isMatching(): boolean;

    }
}
declare module qx.bom {
    class History extends qx.core.Object {
        static getInstance(): qx.bom.History;
        protected _applyState(): void;
        protected _setInitialState(): void;
        protected _encode(value: qx.bom.String): qx.bom.String;
        protected _decode(value: qx.bom.String): qx.bom.String;
        protected _applyTitle(): void;
        addToHistory(state: qx.bom.String, newTitle?: string): void;
        navigateBack(): void;
        navigateForward(): void;
        protected _onHistoryLoad(state: qx.bom.String): void;
        protected _readState(): qx.bom.String;
        protected _writeState(state: qx.bom.String): void;
        protected _setHash(value: qx.bom.String): void;
        protected _getHash(): qx.bom.String;
        getTitle(): string;
        setTitle(value: string): void;
        resetTitle(): void;
        getState(): string;
        setState(value: string): void;
        resetState(): void;

    }
}
declare module qx.bom {
    class WebWorker extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(src?: qx.bom.String);
        postMessage(msg: qx.bom.String): void;
        protected _handleMessage(e: qx.bom.Event): void;
        protected _handleError(e: qx.bom.Event): void;

    }
}
declare module qx.bom {
    class Event {
        static addNativeListener(target: any, type: qx.bom.String, listener: Function, useCapture?: boolean, passive?: boolean): void;
        static removeNativeListener(target: any, type: qx.bom.String, listener: Function, useCapture?: boolean): void;
        static getTarget(e: qx.bom.Event): any;
        static getRelatedTarget(e: qx.bom.Event): HTMLElement;
        static preventDefault(e: qx.bom.Event): void;
        static stopPropagation(e: qx.bom.Event): void;
        static fire(target: HTMLElement, type: qx.bom.String): boolean;
        static supportsEvent(target: any, type: qx.bom.String): boolean;
        static getEventName(target: any, type: qx.bom.String): string | null;

    }
}
declare module qx.bom.storage {
    class UserData {
        constructor(storeName?: string);
        static getLocal(): qx.bom.storage.UserData;
        static getSession(): qx.bom.storage.UserData;
        getStorage(): IMap;
        getLength(): number;
        setItem(key: string, value: any): void;
        getItem(key: string): any;
        removeItem(key: string): void;
        clear(): void;
        getKey(index: number): string;
        forEach(callback: Function, scope: any): void;

    }
}
declare module qx.bom.storage {
    class Memory {
        static getLocal(): qx.bom.storage.Memory;
        static getSession(): qx.bom.storage.Memory;
        getStorage(): IMap;
        getLength(): number;
        setItem(key: string, value: any): void;
        getItem(key: string): any;
        removeItem(key: string): void;
        clear(): void;
        getKey(index: number): string;
        forEach(callback: Function, scope: any): void;

    }
}
declare module qx.bom.storage {
    class Web {
        constructor(type?: string);
        static getLocal(): qx.bom.storage.Web;
        static getSession(): qx.bom.storage.Web;
        getStorage(): Storage;
        getLength(): number;
        setItem(key: string, value: any): void;
        getItem(key: string): any;
        removeItem(key: string): void;
        clear(): void;
        getKey(index: number): string;
        forEach(callback: Function, scope: any): void;

    }
}
declare module qx.bom {
    class String {
        static escape(str: qx.bom.String): qx.bom.String;
        static unescape(str: qx.bom.String): any;
        static fromText(str: qx.bom.String): qx.bom.String;
        static toText(str: qx.bom.String): qx.bom.String;

    }
}
declare module qx.bom {
    class Font extends qx.core.Object {
        constructor(size?: string, family?: string[]);
        static fromString(str: qx.bom.String): qx.bom.Font;
        static fromConfig(config: IMap): qx.bom.Font;
        static getDefaultStyles(): IMap;
        protected _applySize(): void;
        protected _applyLineHeight(): void;
        protected _applyFamily(): void;
        protected _applyBold(): void;
        protected _applyItalic(): void;
        protected _applyDecoration(): void;
        protected _applyColor(): void;
        protected _applyWeight(): void;
        protected _applyTextShadow(): void;
        protected _applyLetterSpacing(): void;
        getStyles(): IMap;
        getSize(): number;
        setSize(value: number): void;
        resetSize(): void;
        getLineHeight(): number;
        setLineHeight(value: number): void;
        resetLineHeight(): void;
        getComparisonString(): string;
        setComparisonString(value: string): void;
        resetComparisonString(): void;
        getVersion(): any;
        setVersion(value: any): void;
        resetVersion(): void;
        getFamily(): qx.data.Array;
        setFamily(value: qx.data.Array): void;
        resetFamily(): void;
        getBold(): boolean;
        isBold(): boolean;
        setBold(value: boolean): void;
        resetBold(): void;
        getItalic(): boolean;
        isItalic(): boolean;
        setItalic(value: boolean): void;
        resetItalic(): void;
        getDecoration(): any;
        setDecoration(value: any): void;
        resetDecoration(): void;
        getColor(): string;
        setColor(value: string): void;
        resetColor(): void;
        getTextShadow(): string;
        setTextShadow(value: string): void;
        resetTextShadow(): void;
        getWeight(): string;
        setWeight(value: string): void;
        resetWeight(): void;
        getLetterSpacing(): number;
        setLetterSpacing(value: number): void;
        resetLetterSpacing(): void;

    }
}
declare module qx.bom {
    class FileReader extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        static getNumFiles(inputElement: qx.bom.Element): number;
        static getFile(inputElement: qx.bom.Element, index: number): File;
        readAsArrayBuffer(fileObj: File): void;
        readAsBinaryString(fileObj: File): void;
        readAsText(fileObj: File, encoding?: string): void;
        readAsDataURL(fileObj: File): void;
        protected _handleLoadStart(e: any): void;
        protected _handleProgress(e: any): void;
        protected _handleError(e: any): void;
        protected _handleAbort(e: any): void;
        protected _handleLoad(e: any): void;
        protected _handleLoadEnd(e: any): void;

    }
}
declare module qx.bom {
    class Document {
        static isStandardMode(win?: Window): boolean;
        static getWidth(win?: Window): number;
        static getHeight(win?: Window): number;

    }
}
declare module qx.bom {
    class HashHistory extends qx.bom.History implements qx.core.IDisposable {
        dispose(): void;
        getTitle(): string;
        setTitle(value: string): void;
        resetTitle(): void;
        getState(): string;
        setState(value: string): void;
        resetState(): void;

    }
}
declare module qx.bom.webfonts {
    class Validator extends qx.core.Object {
        constructor(fontFamily?: string, comparisonString?: string, fontWeight?: string, fontStyle?: string);
        static removeDefaultHelperElements(): void;
        validate(): void;
        protected _reset(): void;
        protected _isFontValid(): boolean;
        protected _getRequestedHelpers(): IMap;
        protected _getHelperElement(fontFamily: string, comparisonString?: string): HTMLElement;
        protected _applyFontFamily(): void;
        protected _applyFontWeight(): void;
        protected _applyFontStyle(): void;
        getFontFamily(): any;
        setFontFamily(value: any): void;
        resetFontFamily(): void;
        getFontWeight(): string;
        setFontWeight(value: string): void;
        resetFontWeight(): void;
        getFontStyle(): string;
        setFontStyle(value: string): void;
        resetFontStyle(): void;
        getComparisonString(): any;
        setComparisonString(value: any): void;
        resetComparisonString(): void;
        getTimeout(): number;
        setTimeout(value: number): void;
        resetTimeout(): void;

    }
}
declare module qx.bom.webfonts {
    class WebFont extends qx.bom.Font {
        protected _applySources(): void;
        protected _onWebFontChangeStatus(ev: qx.event.type.Data): void;
        protected _quoteFontFamily(familyName: string): string;
        getSources(): any;
        setSources(value: any): void;
        resetSources(): void;
        getValid(): boolean;
        isValid(): boolean;
        setValid(value: boolean): void;
        resetValid(): void;

    }
}
declare module qx.bom.webfonts {
    class Manager extends qx.core.Object {
        static getInstance(): Manager;
        require(familyName: string, sourcesList: any, callback?: Function, context?: any): void;
        remove(familyName: string, fontWeight: string, fontStyle: string): void;
        getPreferredFormats(): string[];
        removeStyleSheet(): void;

    }
}
declare module qx.bom {
    class Notification extends qx.core.Object {
        static getInstance(): Notification;
        static getNotification(): boolean;
        show(title: qx.bom.String, message: qx.bom.String, icon: qx.bom.String, expire: number, tag: qx.bom.String): qx.bom.String;
        protected _show(tag: qx.bom.String, title: qx.bom.String, message: qx.bom.String, icon: qx.bom.String, expire: any): void;
        close(tag: qx.bom.String): void;
        request(): void;
        getPermission(): qx.bom.String;

    }
}
declare module qx.bom {
    class IframeHistory extends qx.bom.History implements qx.core.IDisposable {
        dispose(): void;
        protected _setState(state: qx.bom.String): void;

    }
}
declare module qx.bom {
    class Selection {
        static setAll(node: Node): boolean;

    }
}
declare module qx.bom {
    class Iframe {
        static create(attributes?: IMap, win?: Window): qx.bom.Element;
        static getWindow(iframe: qx.bom.Element): Window | null;
        static getDocument(iframe: qx.bom.Element): qx.bom.Document;
        static getBody(iframe: qx.bom.Element): qx.bom.Element;
        static setSource(iframe: qx.bom.Element, source: qx.bom.String): void;
        static queryCurrentUrl(iframe: qx.bom.Element): qx.bom.String;

    }
}
declare module qx.bom.request {
    class SimpleXhr extends qx.event.Emitter implements qx.core.IDisposable {
        dispose(): void;
        constructor(url?: string, method?: string);
        setRequestHeader(key: string, value: string): qx.bom.request.SimpleXhr;
        getRequestHeader(key: string): string;
        getResponseHeader(header: string): string;
        getAllResponseHeaders(): string;
        setUrl(url: string): qx.bom.request.SimpleXhr;
        getUrl(): string;
        setMethod(method: string): qx.bom.request.SimpleXhr;
        getMethod(): string;
        setRequestData(data: string | null): qx.bom.request.SimpleXhr;
        getRequestData(): string;
        getResponse(): string | null;
        getTransport(): any;
        setParser(param0: any): Function;
        setTimeout(millis: number): qx.bom.request.SimpleXhr;
        getTimeout(): number;
        useCaching(param0: any): qx.bom.request.SimpleXhr;
        isCaching(): boolean;
        isDone(): boolean;
        toHashCode(): number;
        isDisposed(): boolean;
        send(): void;
        abort(): qx.bom.request.SimpleXhr;
        protected _createTransport(): qx.bom.request.IRequest;
        protected _registerTransportListener(transport: qx.bom.request.IRequest): qx.bom.request.IRequest;
        protected _createResponseParser(): qx.util.ResponseParser;
        protected _setResponse(response: string): void;
        protected _serializeData(data: string | null, contentType?: string): string | null;
        protected _onReadyStateChange(): void;
        protected _onLoadEnd(): void;
        protected _onAbort(): void;
        protected _onTimeout(): void;
        protected _onError(): void;
        protected _onProgress(): void;

    }
}
declare module qx.bom.request {
    class Xhr implements qx.core.IDisposable {
        dispose(): void;
        open(method?: string, url?: string, async?: boolean, user?: string, password?: string): void;
        setRequestHeader(key: string, value: string): qx.bom.request.Xhr;
        send(data?: string | null): qx.bom.request.Xhr;
        abort(): qx.bom.request.Xhr;
        protected _emit(event: string): void;
        onreadystatechange(): void;
        onload(): void;
        onloadend(): void;
        onerror(): void;
        onabort(): void;
        ontimeout(): void;
        onprogress(): void;
        on(name: string, listener: Function, ctx?: any): qx.bom.request.Xhr;
        getResponseHeader(header: string): string;
        getAllResponseHeaders(): string;
        overrideMimeType(mimeType: string): qx.bom.request.Xhr;
        getRequest(): any;
        isDisposed(): boolean;
        protected _createNativeXhr(): any;
        protected _getProtocol(): string;

    }
}
declare module qx.bom.request {
    class Script implements qx.core.IDisposable {
        dispose(): void;
        on(name: string, listener: Function, ctx?: any): qx.bom.request.Script;
        open(method: string, url: string): void;
        setRequestHeader(key: string, value: string): qx.bom.request.Script;
        send(): qx.bom.request.Script;
        abort(): qx.bom.request.Script;
        protected _emit(event: string): void;
        onreadystatechange(): void;
        onload(): void;
        onloadend(): void;
        onerror(): void;
        onabort(): void;
        ontimeout(): void;
        getResponseHeader(key: string): string | null;
        getAllResponseHeaders(): string | null;
        setDetermineSuccess(check: Function): void;
        isDisposed(): boolean;
        protected _getUrl(): string;
        protected _getScriptElement(): HTMLElement;
        protected _onTimeout(): void;
        protected _onNativeLoad(): void;
        protected _onNativeError(): void;
        protected _readyStateChange(readyState: number): void;
        protected _success(): void;

    }
}
declare module qx.bom.request {
    class Jsonp extends qx.bom.request.Script {
        callback(data: any): void;
        setCallbackParam(param: string): qx.bom.request.Jsonp;
        setCallbackName(name: string): qx.bom.request.Jsonp;
        setPrefix(prefix: string): void;
        getGeneratedUrl(): string;

    }
}
declare module qx.bom.request {
    interface IRequest {
        open(method: string, url: string, async?: boolean): void;
        send(data?: string | null): void;
        abort(): void;
        getAllResponseHeaders(): string;
        getResponseHeader(header: string): string;
        setRequestHeader(key: string, value: string): void;
        onreadystatechange(): void;
        onload(): void;
        onloadend(): void;
        onerror(): void;
        onabort(): void;
        ontimeout(): void;

    }
}
declare module qx.bom {
    class Html {
        static fixEmptyTags(html: qx.bom.String): qx.bom.String;
        static clean(objs: any | null, context?: Document, fragment?: HTMLElement): HTMLElement[];
        static extractScripts(elements: HTMLElement[], fragment?: Document): HTMLElement[];

    }
}
declare module qx.bom {
    class Shortcut extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(shortcut?: qx.bom.String);
        execute(target: any): void;
        protected _applyEnabled(): void;
        protected _applyShortcut(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getShortcut(): string;
        setShortcut(value: string): void;
        resetShortcut(): void;
        getAutoRepeat(): boolean;
        isAutoRepeat(): boolean;
        setAutoRepeat(value: boolean): void;
        resetAutoRepeat(): void;

    }
}
declare module qx.bom {
    class Window {
        static open(url: qx.bom.String, name: qx.bom.String, options: IMap, modal: boolean, useNativeModalDialog: boolean, listener?: Function, self?: any): qx.bom.Window;
        static getBlocker(): qx.bom.Blocker | null;
        static close(win: qx.bom.Window): any;
        static isClosed(win: qx.bom.Window): boolean;
        static moveTo(win: qx.bom.Window, top: number, left: number): void;
        static resizeTo(win: qx.bom.Window, width: number, height: number): void;

    }
}
declare module qx.bom {
    class Label {
        static create(content: qx.bom.String, html?: boolean, win?: Window): qx.bom.Element;
        static setSanitizer(func: Function | null): void;
        static setValue(element: qx.bom.Element, value: qx.bom.String): void;
        static getValue(element: qx.bom.Element): qx.bom.String;
        static getHtmlSize(content: qx.bom.String, styles?: IMap, width?: number): IMap;
        static getTextSize(text: qx.bom.String, styles: IMap): IMap;

    }
}
declare module qx.bom {
    class Blocker extends qx.core.Object {
        block(element?: Element): void;
        unblock(): void;
        isBlocked(): boolean;
        getBlockerElement(): qx.bom.Element;
        setBlockerColor(color: qx.bom.String): void;
        getBlockerColor(): qx.bom.String;
        setBlockerOpacity(opacity: qx.bom.String): void;
        getBlockerOpacity(): number;
        setBlockerZIndex(zIndex: number): void;
        getBlockerZIndex(): number;

    }
}
declare module qx.bom {
    class Storage {
        static getLocal(): qx.bom.storage.Web | qx.bom.storage.UserData | qx.bom.storage.Memory;
        static getSession(): qx.bom.storage.Web | qx.bom.storage.UserData | qx.bom.storage.Memory;

    }
}
declare module qx.bom.client {
    class Runtime {
        static getName(): string;

    }
}
declare module qx.bom.client {
    class Scroll {
        static scrollBarOverlayed(): boolean;
        static getNativeScroll(): boolean;

    }
}
declare module qx.bom.client {
    class Pdfjs {
        static getPdfjs(callback: Function, context: any): void;

    }
}
declare module qx.bom.client {
    class Xml {
        static getImplementation(): boolean;
        static getDomParser(): boolean;
        static getSelectSingleNode(): boolean;
        static getSelectNodes(): boolean;
        static getElementsByTagNameNS(): boolean;
        static getDomProperties(): boolean;
        static getAttributeNS(): boolean;
        static getCreateElementNS(): boolean;
        static getCreateNode(): boolean;
        static getQualifiedItem(): boolean;

    }
}
declare module qx.bom.client {
    class CssTransition {
        static getTransitionName(): string | null;
        static getSupport(): any | null;

    }
}
declare module qx.bom.client {
    class CssAnimation {
        static getSupport(): any | null;
        static getFillMode(): string | null;
        static getPlayState(): string | null;
        static getName(): string | null;
        static getAnimationStart(): string;
        static getAnimationIteration(): string;
        static getAnimationEnd(): string;
        static getKeyFrames(): string | null;
        static getRequestAnimationFrame(): string | null;

    }
}
declare module qx.bom.client {
    class Device {
        static getName(): string;
        static getType(): string;
        static detectDeviceType(userAgentString: string): string;
        static detectMobileDevice(userAgentString: string): boolean;
        static detectTabletDevice(userAgentString: string): boolean;
        static getDevicePixelRatio(): number;
        static getTouch(): boolean;

    }
}
declare module qx.bom.client {
    class EcmaScript {
        static getStackTrace(): string | null;
        static getMutationObserver(): boolean;
        static getArrayIndexOf(): boolean;
        static getArrayLastIndexOf(): boolean;
        static getArrayForEach(): boolean;
        static getArrayFilter(): boolean;
        static getArrayMap(): boolean;
        static getArraySome(): boolean;
        static getArrayFind(): boolean;
        static getArrayFindIndex(): boolean;
        static getArrayEvery(): boolean;
        static getArrayReduce(): boolean;
        static getArrayReduceRight(): boolean;
        static getArrayIncludes(): boolean;
        static getErrorToString(): boolean;
        static getFunctionBind(): boolean;
        static getAsyncFunction(): boolean;
        static getObjectKeys(): boolean;
        static getObjectValues(): boolean;
        static getObjectIs(): boolean;
        static getObjectAssign(): boolean;
        static getDateNow(): boolean;
        static getDateParse(): boolean;
        static getStringStartsWith(): boolean;
        static getStringEndsWith(): boolean;
        static getStringTrim(): boolean;
        static getStringCodePointAt(): boolean;
        static getStringFromCodePoint(): boolean;
        static getBigInt(): boolean;
        static getBigIntToLocaleString(): boolean;
        static getPromiseNative(): void;
        static getEpsilon(): void;

    }
}
declare module qx.bom.client {
    class Stylesheet {
        static getCreateStyleSheet(): boolean;
        static getInsertRule(): boolean;
        static getDeleteRule(): boolean;
        static getAddImport(): boolean;
        static getRemoveImport(): boolean;

    }
}
declare module qx.bom.client {
    class Engine {
        static getVersion(): string;
        static getName(): string;

    }
}
declare module qx.bom.client {
    class Locale {
        static getLocale(): string;
        static getVariant(): string;

    }
}
declare module qx.bom.client {
    class Event {
        static getTouch(): boolean;
        static getMsPointer(): boolean;
        static getHelp(): boolean;
        static getHashChange(): boolean;
        static getDispatchEvent(): boolean;
        static getCustomEvent(): boolean;
        static getMouseEvent(): boolean;
        static getMouseCreateEvent(): string;
        static getMouseWheel(win?: Window): IMap;
        static getAuxclickEvent(): boolean;
        static getPassive(): void;

    }
}
declare module qx.bom.client {
    class Idle {
        static getSupport(): boolean;

    }
}
declare module qx.bom.client {
    class Plugin {
        static getGears(): boolean;
        static getActiveX(): boolean;
        static getSkype(): boolean;
        static getQuicktimeVersion(): string;
        static getWindowsMediaVersion(): string;
        static getDivXVersion(): string;
        static getSilverlightVersion(): string;
        static getPdfVersion(): string;
        static getQuicktime(): boolean;
        static getWindowsMedia(): boolean;
        static getDivX(): boolean;
        static getSilverlight(): boolean;
        static getPdf(): boolean;

    }
}
declare module qx.bom.client {
    class Transport {
        static getMaxConcurrentRequestCount(): number;
        static getSsl(): boolean;
        static getXmlHttpRequest(): string;

    }
}
declare module qx.bom.client {
    class PhoneGap {
        static getPhoneGap(): boolean;
        static getNotification(): boolean;

    }
}
declare module qx.bom.client {
    class Css {
        static getBoxModel(): string;
        static getTextOverflow(): string | null;
        static getPlaceholder(): boolean;
        static getAppearance(): string | null;
        static getBorderRadius(): string | null;
        static getBoxShadow(): string | null;
        static getBorderImage(): string | null;
        static getBorderImageSyntax(): boolean | null;
        static getUserSelect(): string | null;
        static getUserSelectNone(): string | null;
        static getUserModify(): string | null;
        static getFloat(): string | null;
        static getLinearGradient(): string | null;
        static getRadialGradient(): string | null;
        static getLegacyWebkitGradient(): boolean;
        static getRgba(): boolean;
        static getBoxSizing(): string | null;
        static getInlineBlock(): string | null;
        static getOpacity(): boolean;
        static getTextShadow(): boolean;
        static getAlphaImageLoaderNeeded(): boolean;
        static getPointerEvents(): boolean;
        static getFlexboxSyntax(): string;

    }
}
declare module qx.bom.client {
    class Html {
        static getWebWorker(): boolean;
        static getFileReader(): boolean;
        static getGeoLocation(): boolean;
        static getAudio(): boolean;
        static getAudioOgg(): string;
        static getAudioMp3(): string;
        static getAudioWav(): string;
        static getAudioAu(): string;
        static getAudioAif(): string;
        static getVideo(): boolean;
        static getVideoOgg(): string;
        static getVideoH264(): string;
        static getVideoWebm(): string;
        static getLocalStorage(): boolean;
        static getSessionStorage(): boolean;
        static getUserDataStorage(): boolean;
        static getClassList(): boolean;
        static getXPath(): boolean;
        static getXul(): boolean;
        static getSvg(): boolean;
        static getVml(): boolean;
        static getCanvas(): boolean;
        static getDataUrl(callback: Function): void;
        static getDataset(): boolean;
        static getContains(): boolean;
        static getCompareDocumentPosition(): boolean;
        static getTextContent(): boolean;
        static getFullScreen(): boolean;
        static getConsole(): boolean;
        static getNaturalDimensions(): boolean;
        static getHistoryState(): boolean;
        static getSelection(): string | null;
        static getIsEqualNode(): boolean;

    }
}
declare module qx.bom.client {
    class OperatingSystem {
        static getName(): string;
        static getVersion(): string;

    }
}
declare module qx.bom.client {
    class CssTransform {
        static getSupport(): any | null;
        static getStyle(): string | null;
        static getPerspective(): string | null;
        static getPerspectiveOrigin(): string | null;
        static getBackFaceVisibility(): string | null;
        static getOrigin(): string | null;
        static getName(): string | null;
        static get3D(): boolean;

    }
}
declare module qx.bom.client {
    class Browser {
        static getName(): string;
        static detectName(agent: string): string;
        static getVersion(): string;
        static getDocumentMode(): number;
        static getQuirksMode(): boolean;

    }
}
declare module qx.bom {
    class Element {
        static addListener(element: qx.bom.Element, type: qx.bom.String, listener: Function, self?: any, capture?: boolean): qx.bom.String;
        static removeListener(element: qx.bom.Element, type: qx.bom.String, listener: Function, self?: any, capture?: boolean): boolean;
        static removeListenerById(target: any, id: qx.bom.String): boolean;
        static hasListener(element: qx.bom.Element, type: qx.bom.String, capture?: boolean): boolean;
        static focus(element: qx.bom.Element): void;
        static blur(element: qx.bom.Element): void;
        static activate(element: qx.bom.Element): void;
        static deactivate(element: qx.bom.Element): void;
        static capture(element: qx.bom.Element, containerCapture?: boolean): void;
        static releaseCapture(element: qx.bom.Element): void;
        static clone(element: qx.bom.Element, events?: boolean): qx.bom.Element;

    }
}
declare module qx.bom.rest {
    class Resource extends qx.event.Emitter implements qx.core.IDisposable {
        dispose(): void;
        constructor(description?: IMap);
        static placeholdersFromUrl(url: string): qx.data.Array;
        setRequestFactory(fn: Function): void;
        setRequestHandler(handler: IMap): void;
        protected _getRequestHandler(): IMap;
        getRequestsByAction(action: string): qx.data.Array | null;
        configureRequest(callback: Function): void;
        protected _getRequest(): qx.bom.request.SimpleXhr | qx.io.request.AbstractRequest;
        map(action: string, method: string, url: string, check?: IMap): void;
        invoke(action: string, params: IMap, data: IMap | null): number;
        setBaseUrl(baseUrl: string): void;
        abort(param0: any): void;
        refresh(action: string): void;
        poll(action: string, interval: number, params?: IMap, immediately?: boolean): void;
        protected _startPoll(action: string, listener: Function, interval: number): void;
        stopPollByAction(action: string): void;
        restartPollByAction(action: string): void;
        longPoll(action: string): string;
        protected _getRequestConfig(action: string, params: IMap): IMap;
        protected _getThrottleLimit(): number;
        protected _getThrottleCount(): number;
        isDisposed(): boolean;
        destruct(): void;

    }
}
declare module qx.bom.media {
    class Video extends qx.bom.media.Abstract {
        constructor(source?: string);
        getWidth(): number;
        setWidth(value: number): void;
        getHeight(): number;
        setHeight(value: number): void;
        getVideoWidth(): number;
        getVideoHeight(): number;
        getPoster(): string;
        setPoster(value: string): void;

    }
}
declare module qx.bom.media {
    class Audio extends qx.bom.media.Abstract {
        constructor(source?: string);

    }
}
declare module qx.bom.media {
    class Abstract extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(media?: any);
        getMediaObject(): any;
        play(): void;
        pause(): void;
        isPaused(): boolean;
        isEnded(): boolean;
        setId(id: string): void;
        getId(): string;
        canPlayType(type: string): boolean;
        setVolume(volume: number): void;
        getVolume(): number;
        setMuted(muted: boolean): void;
        isMuted(): boolean;
        getDuration(): number;
        setCurrentTime(value: number): void;
        getCurrentTime(): number;
        setSource(source: string): void;
        getSource(): string;
        setSourceObject(sourceObject: MediaStream): void;
        getSourceObject(): MediaStream | null;
        hasControls(): boolean;
        showControls(): void;
        hideControls(): void;
        setAutoplay(autoplay: boolean): void;
        getAutoplay(): boolean;
        setPreload(preload: string): void;
        getPreload(): string;
        setLoop(value: boolean): void;
        isLoop(): boolean;
        protected _handlePlayEvent(): void;
        protected _handlePauseEvent(): void;
        protected _handleTimeUpdateEvent(): void;
        protected _handleEndedEvent(): void;
        protected _handleVolumeChangeEvent(): void;
        protected _handleLoadedDataEvent(): void;
        protected _handleLoadedMetaDataEvent(): void;

    }
}
declare module qx.core {
    class Aspect {
        static wrap(fullName: string, fcn: Function, type: string): Function;
        static addAdvice(fcn: Function, position?: string, type?: string, name?: string | null): void;

    }
}
declare module qx.core {
    class MObjectId {
        protected _applyQxOwner(): void;
        protected _applyQxObjectId(): void;
        protected _cascadeQxObjectIdChanges(): void;
        getQxObject(id: string): qx.core.Object | null;
        protected _createQxObject(id: string): qx.core.Object | null;
        protected _createQxObjectImpl(id: string): qx.core.Object | null;
        addOwnedQxObject(obj: qx.core.Object, id?: string): void;
        removeOwnedQxObject(args: string | null): void;
        getOwnedQxObjects(): qx.data.Array;
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;

    }
}
declare module qx.core {
    class MBindTo {
        bindTo(func: Function, ...varargs: any[]): Function;

    }
}
declare module qx.core {
    class ValidationError extends qx.type.BaseError {

    }
}
declare module qx.core {
    class MAssert {
        assert(condition: any, msg?: string): void;
        fail(msg: string, compact?: boolean): void;
        assertTrue(value: boolean, msg?: string): void;
        assertFalse(value: boolean, msg?: string): void;
        assertEquals(expected: any, found: any, msg?: string): void;
        assertNotEquals(expected: any, found: any, msg?: string): void;
        assertEqualsFloat(expected: number, found: number, msg?: string): void;
        assertNotEqualsFloat(expected: number, found: number, msg?: string): void;
        assertIdentical(expected: any, found: any, msg?: string): void;
        assertNotIdentical(expected: any, found: any, msg?: string): void;
        assertNotUndefined(value: any, msg?: string): void;
        assertUndefined(value: any, msg?: string): void;
        assertNotNull(value: any, msg?: string): void;
        assertNull(value: any, msg?: string): void;
        assertJsonEquals(expected: any, found: any, msg?: string): void;
        assertMatch(str: string, re: RegExp, msg?: string): void;
        assertArgumentsCount(args: any, minCount: number, maxCount: number, msg?: string): void;
        assertEventFired(obj: qx.core.Object, event: string, invokeFunc: Function, listener?: Function, msg?: string): void;
        assertEventNotFired(obj: qx.core.Object, event: string, invokeFunc: Function, msg?: string): void;
        assertException(callback: Function, exception?: Error, re?: string | null, msg?: string): void;
        assertInArray(value: any, array: qx.data.Array, msg?: string): void;
        assertNotInArray(value: any, array: qx.data.Array, msg?: string): void;
        assertArrayEquals(expected: qx.data.Array, found: qx.data.Array, msg?: string): void;
        assertKeyInMap(value: any, map: IMap, msg?: string): void;
        assertFunction(value: any, msg?: string): void;
        assertString(value: any, msg?: string): void;
        assertBoolean(value: any, msg?: string): void;
        assertNumber(value: any, msg?: string): void;
        assertPositiveNumber(value: any, msg?: string): void;
        assertInteger(value: any, msg?: string): void;
        assertPositiveInteger(value: any, msg?: string): void;
        assertInRange(value: any, min: number, max: number, msg?: string): void;
        assertObject(value: any, msg?: string): void;
        assertArray(value: any, msg?: string): void;
        assertMap(value: any, msg?: string): void;
        assertRegExp(value: any, msg?: string): void;
        assertType(value: any, type: string, msg?: string): void;
        assertInstance(value: any, clazz: qx.Class, msg?: string): void;
        assertInterface(value: any, iface: qx.Class, msg?: string): void;
        assertCssColor(expected: string, value: string, msg?: string): void;
        assertElement(value: any, msg?: string): void;
        assertQxObject(value: any, msg?: string): void;
        assertQxWidget(value: any, msg?: string): void;

    }
}
declare module qx.core {
    class BaseInit {
        static getApplication(): qx.core.Object;
        static ready(): void;

    }
}
declare module qx.core {
    class MLogging {
        debug(...varargs: any[]): void;
        info(...varargs: any[]): void;
        warn(...varargs: any[]): void;
        error(...varargs: any[]): void;
        trace(...varargs: any[]): void;

    }
}
declare module qx.core {
    class MProperty {
        set(data: any | null, value?: any): qx.core.Object;
        get(prop: string): any;
        reset(prop: string): void;
        isPropertyInitialized(prop: string): boolean;

    }
}
declare module qx.core {
    class GlobalError extends Error {
        constructor(exc?: Error, args?: qx.data.Array);
        getArguments(): qx.core.Object;
        getSourceException(): Error;

    }
}
declare module qx.core {
    class WindowError extends Error {
        constructor(failMessage?: string, uri?: string, lineNumber?: number, columnNumber?: number, sourceException?: Error);
        getUri(): string;
        getLineNumber(): number;
        getColumnNumber(): number;
        getSourceException(): Error;

    }
}
declare module qx.core {
    interface IDisposable {
        dispose(): void;

    }
}
declare module qx.core {
    class Object {
        bind(sourcePropertyChain: string, targetObject: qx.core.Object, targetProperty?: string, options?: IMap): any;
        removeBinding(id: any): void;
        removeRelatedBindings(relatedObject: qx.core.Object): void;
        removeAllBindings(): void;
        getBindings(): qx.data.Array;
        debug(...varargs: any[]): void;
        info(...varargs: any[]): void;
        warn(...varargs: any[]): void;
        error(...varargs: any[]): void;
        trace(...varargs: any[]): void;
        addListener(type: string, listener: Function, self?: any, capture?: boolean): string;
        addListenerOnce(type: string, listener: Function, context?: any, capture?: boolean): string;
        removeListener(type: string, listener: Function, self?: any, capture?: boolean): boolean;
        removeListenerById(id: string): boolean;
        hasListener(type: string, capture?: boolean): boolean;
        dispatchEvent(evt: qx.event.type.Event): boolean;
        waitForPendingEvents(): void;
        fireEvent(type: string, clazz?: qx.Class, args?: qx.data.Array): boolean | qx.Promise;
        fireEventAsync(type: string, clazz?: qx.Class, args?: qx.data.Array): qx.Promise;
        fireNonBubblingEvent(type: string, clazz?: qx.Class, args?: qx.data.Array): boolean;
        fireNonBubblingEventAsync(type: string, clazz?: qx.Class, args?: qx.data.Array): qx.Promise;
        fireDataEvent(type: string, data: any, oldData?: any, cancelable?: boolean): boolean | qx.Promise;
        fireDataEventAsync(type: string, data: any, oldData?: any, cancelable?: boolean): qx.Promise;
        set(data: any | null, value?: any): qx.core.Object;
        get(prop: string): any;
        reset(prop: string): void;
        isPropertyInitialized(prop: string): boolean;
        protected _applyQxOwner(): void;
        protected _applyQxObjectId(): void;
        protected _cascadeQxObjectIdChanges(): void;
        getQxObject(id: string): qx.core.Object | null;
        protected _createQxObject(id: string): qx.core.Object | null;
        protected _createQxObjectImpl(id: string): qx.core.Object | null;
        addOwnedQxObject(obj: qx.core.Object, id?: string): void;
        removeOwnedQxObject(args: string | null): void;
        getOwnedQxObjects(): qx.data.Array;
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;
        assert(condition: any, msg?: string): void;
        fail(msg: string, compact?: boolean): void;
        assertTrue(value: boolean, msg?: string): void;
        assertFalse(value: boolean, msg?: string): void;
        assertEquals(expected: any, found: any, msg?: string): void;
        assertNotEquals(expected: any, found: any, msg?: string): void;
        assertEqualsFloat(expected: number, found: number, msg?: string): void;
        assertNotEqualsFloat(expected: number, found: number, msg?: string): void;
        assertIdentical(expected: any, found: any, msg?: string): void;
        assertNotIdentical(expected: any, found: any, msg?: string): void;
        assertNotUndefined(value: any, msg?: string): void;
        assertUndefined(value: any, msg?: string): void;
        assertNotNull(value: any, msg?: string): void;
        assertNull(value: any, msg?: string): void;
        assertJsonEquals(expected: any, found: any, msg?: string): void;
        assertMatch(str: string, re: RegExp, msg?: string): void;
        assertArgumentsCount(args: any, minCount: number, maxCount: number, msg?: string): void;
        assertEventFired(obj: qx.core.Object, event: string, invokeFunc: Function, listener?: Function, msg?: string): void;
        assertEventNotFired(obj: qx.core.Object, event: string, invokeFunc: Function, msg?: string): void;
        assertException(callback: Function, exception?: Error, re?: string | null, msg?: string): void;
        assertInArray(value: any, array: qx.data.Array, msg?: string): void;
        assertNotInArray(value: any, array: qx.data.Array, msg?: string): void;
        assertArrayEquals(expected: qx.data.Array, found: qx.data.Array, msg?: string): void;
        assertKeyInMap(value: any, map: IMap, msg?: string): void;
        assertFunction(value: any, msg?: string): void;
        assertString(value: any, msg?: string): void;
        assertBoolean(value: any, msg?: string): void;
        assertNumber(value: any, msg?: string): void;
        assertPositiveNumber(value: any, msg?: string): void;
        assertInteger(value: any, msg?: string): void;
        assertPositiveInteger(value: any, msg?: string): void;
        assertInRange(value: any, min: number, max: number, msg?: string): void;
        assertObject(value: any, msg?: string): void;
        assertArray(value: any, msg?: string): void;
        assertMap(value: any, msg?: string): void;
        assertRegExp(value: any, msg?: string): void;
        assertType(value: any, type: string, msg?: string): void;
        assertInstance(value: any, clazz: qx.Class, msg?: string): void;
        assertInterface(value: any, iface: qx.Class, msg?: string): void;
        assertCssColor(expected: string, value: string, msg?: string): void;
        assertElement(value: any, msg?: string): void;
        assertQxObject(value: any, msg?: string): void;
        assertQxWidget(value: any, msg?: string): void;
        toHashCode(): string;
        toUuid(): string;
        setExplicitUuid(uuid: string): void;
        base(args: IArguments, ...varargs: any[]): any;
        self(args: any): any;
        clone(): qx.core.Object;
        setUserData(key: string, value: qx.core.Object): void;
        getUserData(key: string): qx.core.Object;
        resetUserData(): void;
        isDisposed(): boolean;
        isDisposing(): boolean;
        dispose(): void;
        protected _disposeObjects(...varargs: any[]): void;
        protected _disposeSingletonObjects(...varargs: any[]): void;
        protected _disposeArray(field: string): void;
        protected _disposeMap(field: string): void;

    }
}
declare module qx.core {
    class Assert {
        static assert(condition: any, msg?: string): void;
        static fail(msg: string, compact?: boolean): void;
        static assertTrue(value: boolean, msg?: string): void;
        static assertFalse(value: boolean, msg?: string): void;
        static assertEquals(expected: any, found: any, msg?: string): void;
        static assertNotEquals(expected: any, found: any, msg?: string): void;
        static assertEqualsFloat(expected: number, found: number, msg?: string): void;
        static assertNotEqualsFloat(expected: number, found: number, msg?: string): void;
        static assertIdentical(expected: any, found: any, msg?: string): void;
        static assertNotIdentical(expected: any, found: any, msg?: string): void;
        static assertNotUndefined(value: any, msg?: string): void;
        static assertUndefined(value: any, msg?: string): void;
        static assertNotNull(value: any, msg?: string): void;
        static assertNull(value: any, msg?: string): void;
        static assertJsonEquals(expected: any, found: any, msg?: string): void;
        static assertMatch(str: string, re: string | null, msg?: string): void;
        static assertArgumentsCount(args: any, minCount: number, maxCount: number, msg?: string): void;
        static assertEventFired(obj: qx.core.Object, event: string, invokeFunc: Function, listenerFunc?: Function, msg?: string): void;
        static assertEventNotFired(obj: qx.core.Object, event: string, invokeFunc: Function, msg?: string): void;
        static assertException(callback: Function, exception?: Error, re?: string | null, msg?: string): void;
        static assertInArray(value: any, array: qx.data.Array, msg?: string): void;
        static assertNotInArray(value: any, array: qx.data.Array, msg?: string): void;
        static assertArrayEquals(expected: qx.data.Array, found: qx.data.Array, msg?: string): void;
        static assertKeyInMap(value: any, map: IMap, msg?: string): void;
        static assertFunction(value: any, msg?: string): void;
        static assertFunctionOrAsyncFunction(value: any, msg?: string): void;
        static assertString(value: any, msg?: string): void;
        static assertBoolean(value: any, msg?: string): void;
        static assertNumber(value: any, msg?: string): void;
        static assertPositiveNumber(value: any, msg?: string): void;
        static assertInteger(value: any, msg?: string): void;
        static assertPositiveInteger(value: any, msg?: string): void;
        static assertInRange(value: any, min: number, max: number, msg?: string): void;
        static assertObject(value: any, msg?: string): void;
        static assertArray(value: any, msg?: string): void;
        static assertMap(value: any, msg?: string): void;
        static assertRegExp(value: any, msg?: string): void;
        static assertType(value: any, type: string, msg?: string): void;
        static assertInstance(value: any, clazz: qx.Class, msg?: string): void;
        static assertInterface(value: any, iface: qx.Class, msg?: string): void;
        static assertCssColor(expected: string, value: string, msg?: string): void;
        static assertElement(value: any, msg?: string): void;
        static assertQxObject(value: any, msg?: string): void;
        static assertQxWidget(value: any, msg?: string): void;

    }
}
declare module qx.core {
    class ObjectRegistry {
        static register(obj: qx.core.Object): void;
        static unregister(obj: qx.core.Object): void;
        static toHashCode(obj: qx.core.Object): string;
        static createHashCode(): string;
        static clearHashCode(obj: qx.core.Object): void;
        static fromHashCode(hash: string, suppressWarnings?: boolean): qx.core.Object;
        static hasHashCode(hash: string): qx.core.Object;
        static shutdown(): void;
        static getRegistry(): qx.core.Object;
        static getNextHash(): number;
        static getPostId(): number;
        static getStackTraces(): IMap;

    }
}
declare module qx.core {
    class Property {
        static attachRefreshInheritables(clazz: qx.Class): void;
        static attachMethods(clazz: qx.Class, name: string, config: IMap): void;
        static error(obj: qx.core.Object, id: number, property: string, variant: string, value: any): void;
        static executeOptimizedGetter(instance: qx.core.Object, clazz: qx.Class, name: string, variant: string): any;
        static executeOptimizedSetter(instance: qx.core.Object, clazz: qx.Class, name: string, variant: string, args: any): any;

    }
}
declare module qx.core {
    class Id extends qx.core.Object {
        static getInstance(): Id;
        static getQxObject(id: string): qx.core.Object | null;
        static getAbsoluteIdOf(obj: qx.core.Object, suppressWarnings?: boolean): string;
        register(obj: qx.core.Object, id?: string): void;
        unregister(data: any | null): boolean;
        getRegisteredObjects(): qx.core.Object;

    }
}
declare module qx.core {
    class MEvent {
        addListener(type: string, listener: Function, self?: any, capture?: boolean): string;
        addListenerOnce(type: string, listener: Function, context?: any, capture?: boolean): string;
        removeListener(type: string, listener: Function, self?: any, capture?: boolean): boolean;
        removeListenerById(id: string): boolean;
        hasListener(type: string, capture?: boolean): boolean;
        dispatchEvent(evt: qx.event.type.Event): boolean;
        waitForPendingEvents(): void;
        fireEvent(type: string, clazz?: qx.Class, args?: qx.data.Array): boolean | qx.Promise;
        fireEventAsync(type: string, clazz?: qx.Class, args?: qx.data.Array): qx.Promise;
        fireNonBubblingEvent(type: string, clazz?: qx.Class, args?: qx.data.Array): boolean;
        fireNonBubblingEventAsync(type: string, clazz?: qx.Class, args?: qx.data.Array): qx.Promise;
        fireDataEvent(type: string, data: any, oldData?: any, cancelable?: boolean): boolean | qx.Promise;
        fireDataEventAsync(type: string, data: any, oldData?: any, cancelable?: boolean): qx.Promise;

    }
}
declare module qx.core {
    class AssertionError extends qx.type.BaseError {
        constructor(comment?: string, failMessage?: string);
        getStackTrace(): string[];

    }
}
declare module qx.core {
    class Init {

    }
}
declare module qx.core {
    class Wrapper extends qx.data.Array {

    }
}
declare module qx.core {
    class Environment {
        static get(key: string): any;
        protected static _getClassNameFromEnvKey(key: string): qx.data.Array;
        static getAsync(key: string, callback: Function, self: any): void;
        static select(key: string, values: IMap): any;
        static selectAsync(key: string, values: IMap, self: any): void;
        static filter(map: IMap): qx.data.Array;
        static invalidateCacheKey(key: string): void;
        static add(key: string, check: any): void;
        static addAsync(key: string, check: Function): void;
        static getChecks(): IMap;
        static getAsyncChecks(): IMap;
        protected static _initDefaultQxValues(): void;

    }
}
declare module qx.test {
    class MDecoration {

    }
}
declare module qx.test {
    class MAppearance {

    }
}
declare module qx.util {
    class Request {
        static isCrossDomain(url: string): boolean;
        static isSuccessful(status: number): boolean;
        static isMethod(method: string): boolean;
        static methodAllowsRequestBody(method: string): boolean;

    }
}
declare module qx.util {
    class DeferredCallManager extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        static getInstance(): DeferredCallManager;
        schedule(deferredCall: qx.util.DeferredCall): void;
        refreshTimeout(): void;
        cancel(deferredCall: qx.util.DeferredCall): void;

    }
}
declare module qx.util {
    class Function {
        static debounce(callback: qx.util.Function, delay: number, immediate?: boolean): qx.util.Function;
        static throttle(callback: qx.util.Function, interval: number, options: IMap): qx.util.Function;

    }
}
declare module qx.util {
    class PropertyUtil {
        static getProperties(clazz: qx.Class): IMap;
        static getAllProperties(clazz: qx.Class): IMap;
        static getUserValue(object: any, propertyName: string): any;
        static setUserValue(object: any, propertyName: string, value: any): void;
        static deleteUserValue(object: any, propertyName: string): void;
        static getInitValue(object: any, propertyName: string): any;
        static setInitValue(object: any, propertyName: string, value: any): void;
        static deleteInitValue(object: any, propertyName: string): void;
        static getThemeValue(object: any, propertyName: string): any;
        static setThemeValue(object: any, propertyName: string, value: any): void;
        static deleteThemeValue(object: any, propertyName: string): void;
        static setThemed(object: any, propertyName: string, value: any): void;
        static resetThemed(object: any, propertyName: string): void;

    }
}
declare module qx.util {
    class Serializer {
        static toUriParameter(object: qx.core.Object, qxSerializer?: Function, dateFormat?: qx.util.format.DateFormat): string;
        static toNativeObject(object: qx.core.Object, qxSerializer?: Function, dateFormat?: qx.util.format.DateFormat): null | qx.data.Array | string | any;
        static toJson(object: qx.core.Object, qxSerializer?: Function, dateFormat?: qx.util.format.DateFormat): string;

    }
}
declare module qx.util {
    class AliasManager extends qx.util.ValueManager {
        static getInstance(): AliasManager;
        protected _preprocess(value: string): string;
        add(alias: string, base: string): void;
        remove(alias: string): void;
        getAliases(): IMap;

    }
}
declare module qx.util {
    class ObjectPool extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(size?: number);
        getObject(clazz: qx.Class): any;
        poolObject(obj: any): void;
        getSize(): number;
        setSize(value: number): void;
        resetSize(): void;

    }
}
declare module qx.util {
    class ValueManager extends qx.core.Object {
        resolveDynamic(value: string): any;
        isDynamic(value: string): boolean;
        resolve(value: string): any;
        protected _setDynamic(value: IMap): void;
        protected _getDynamic(): IMap;

    }
}
declare module qx.util {
    class Uri {
        static parseUri(str: string, strict: boolean): any;
        static appendParamsToUrl(url: string, params: string): string;
        static toParameter(obj: any, post: boolean): string;
        static getAbsolute(uri: string): string;

    }
}
declare module qx.util {
    class ResourceManager extends qx.core.Object {
        static getInstance(): ResourceManager;
        findHighResolutionSource(lowResImgSrc: string, factor: number): string | boolean;
        getHighResolutionSource(source: string, pixelRatio: number): string;
        getIds(param0: any): qx.data.Array | null;
        has(id: string): boolean;
        getData(id: string): qx.data.Array;
        getImageWidth(id: string): number;
        getImageHeight(id: string): number;
        getImageFormat(id: string): string;
        getCombinedFormat(id: string): string;
        toUri(id: string): string;
        toDataUri(resid: string): string;
        isFontUri(resid: string): boolean;
        fromFontUriToCharCode(source: string): any;

    }
}
declare module qx.util {
    class RingBuffer {
        constructor(maxEntries?: number);
        setMaxEntries(maxEntries: number): void;
        getMaxEntries(): number;
        addEntry(entry: any): void;
        getNumEntriesStored(): number;
        mark(): void;
        clearMark(): void;
        getAllEntries(): qx.data.Array;
        getEntries(count: number, startingFromMark?: boolean): qx.data.Array;
        clear(): void;

    }
}
declare module qx.util {
    class Delegate {
        static getMethod(delegate: any, specificMethod: string): Function | null;
        static containsMethod(delegate: any, specificMethod: string): boolean;

    }
}
declare module qx.util {
    class Animation {

    }
}
declare module qx.util {
    class DisposeUtil {
        static disposeObjects(obj: any, arr: qx.data.Array, disposeSingletons?: boolean): void;
        static disposeArray(obj: any, field: string): void;
        static disposeMap(obj: any, field: string): void;
        static disposeTriggeredBy(disposeMe: any, trigger: any): void;
        static destroyContainer(container: qx.ui.container.Composite | null): void;
        protected static _collectContainerChildren(container: qx.ui.container.Composite | null, arr: qx.data.Array): void;

    }
}
declare module qx.util {
    class StringSplit {
        static split(str: string, separator: RegExp, limit?: number): string[];

    }
}
declare module qx.util.format {
    class NumberFormat extends qx.core.Object implements qx.util.format.IFormat, qx.core.IDisposable {
        format(obj: any): string;
        parse(str: string): any;
        dispose(): void;
        constructor(locale?: string);
        getMinimumIntegerDigits(): number;
        setMinimumIntegerDigits(value: number): void;
        resetMinimumIntegerDigits(): void;
        getMaximumIntegerDigits(): number;
        setMaximumIntegerDigits(value: number): void;
        resetMaximumIntegerDigits(): void;
        getMinimumFractionDigits(): number;
        setMinimumFractionDigits(value: number): void;
        resetMinimumFractionDigits(): void;
        getMaximumFractionDigits(): number;
        setMaximumFractionDigits(value: number): void;
        resetMaximumFractionDigits(): void;
        getGroupingUsed(): boolean;
        isGroupingUsed(): boolean;
        setGroupingUsed(value: boolean): void;
        resetGroupingUsed(): void;
        getPrefix(): string;
        setPrefix(value: string): void;
        resetPrefix(): void;
        getPostfix(): string;
        setPostfix(value: string): void;
        resetPostfix(): void;
        getLocale(): string;
        setLocale(value: string): void;
        resetLocale(): void;

    }
}
declare module qx.util.format {
    class DateFormat extends qx.core.Object implements qx.util.format.IFormat {
        format(obj: any): string;
        parse(str: string): any;
        constructor(format?: string | null, locale?: string);
        static getDateInstance(): qx.util.format.DateFormat;
        static getDateTimeInstance(): qx.util.format.DateFormat;
        setLocale(value: string): void;
        resetLocale(): void;
        getLocale(): void;
        getFormatString(): string;

    }
}
declare module qx.util.format {
    interface IFormat {
        format(obj: any): string;
        parse(str: string): any;

    }
}
declare module qx.util {
    class OOUtil {
        static classIsDefined(name: string): boolean;
        static getPropertyDefinition(clazz: qx.Class, name: string): IMap | null;
        static hasProperty(clazz: qx.Class, name: string): boolean;
        static getEventType(clazz: qx.Class, name: string): string | null;
        static supportsEvent(clazz: qx.Class, name: string): boolean;
        static getByInterface(clazz: qx.Class, iface: qx.Interface): any;
        static hasInterface(clazz: qx.Class, iface: qx.Interface): boolean;
        static getMixins(clazz: qx.Class): qx.Mixin[];

    }
}
declare module qx.util {
    class Uuid extends qx.core.Object {

    }
}
declare module qx.util {
    class DeferredCall extends qx.core.Object {
        constructor(callback?: qx.util.Function, context?: any);
        cancel(): void;
        schedule(): void;
        call(): void;

    }
}
declare module qx.util {
    class LibraryManager extends qx.core.Object {
        static getInstance(): LibraryManager;
        has(namespace: string): boolean;

    }
}
declare module qx.util {
    class Base64 {
        static encode(input: string, is8bit?: boolean): string;
        static decode(input: string, is8bit?: boolean): string;

    }
}
declare module qx.util {
    class StringEscape {
        static escape(str: string, charCodeToEntities: IMap): string;
        static unescape(str: string, entitiesToCharCode: IMap): string;

    }
}
declare module qx.util {
    class Wheel {
        static getDelta(domEvent: qx.event.type.Event, axis?: string): number;

    }
}
declare module qx.util {
    class ColorUtil {
        static isNamedColor(value: string): boolean;
        static isSystemColor(value: string): boolean;
        static supportsThemes(): boolean;
        static isThemedColor(value: string): boolean;
        static stringToRgb(str: string): qx.data.Array;
        static cssStringToRgb(str: string): qx.data.Array;
        static stringToRgbString(str: string): string;
        static rgbToRgbString(rgb: qx.data.Array): string;
        static rgbToHexString(rgb: qx.data.Array): string;
        static isValidPropertyValue(str: string): boolean;
        static isCssString(str: string): boolean;
        static ishexShortString(str: string): boolean;
        static isHex3String(str: string): boolean;
        static isHex6String(str: string): boolean;
        static ishexLongString(str: string): boolean;
        static isRgbString(str: string): boolean;
        static isRgbaString(str: string): boolean;
        static hex3StringToRgb(value: string): qx.data.Array;
        static hex3StringToHex6String(value: string): string;
        static hex6StringToRgb(value: string): qx.data.Array;
        static hexStringToRgb(value: string): qx.data.Array;
        static rgbToHsb(rgb: number[]): qx.data.Array;
        static hsbToRgb(hsb: number[]): number[];
        static rgbToHsl(rgb: number[]): qx.data.Array;
        static hslToRgb(hsl: number[]): number[];
        static randomColor(): string;
        static scale(color: string, scaleMap: IMap): string;
        static adjust(color: string, scaleMap: IMap): string;
        static luminance(color: string): number;
        static contrast(back: string, front: string): number;
        static chooseContrastingColor(rgb: any | null, threshold?: number, dark?: string, light?: string): string;

    }
}
declare module qx.util {
    class ResponseParser {
        constructor(parser?: string | null);
        parse(response: string, contentType: string): string | any;
        setParser(parser: string | null): qx.util.Function;
        protected _getParser(param0: any): Function | null;

    }
}
declare module qx.util.placement {
    class DirectAxis {
        static computeStart(size: number, target: IMap, offsets: IMap, areaSize: number, position: string): number;

    }
}
declare module qx.util.placement {
    class Placement extends qx.core.Object {
        static compute(size: IMap, area: IMap, target: IMap, offsets: IMap, position: string, modeX: string, modeY: string): IMap;
        getAxisX(): qx.Class;
        setAxisX(value: qx.Class): void;
        resetAxisX(): void;
        getAxisY(): qx.Class;
        setAxisY(value: qx.Class): void;
        resetAxisY(): void;
        getEdge(): any;
        setEdge(value: any): void;
        resetEdge(): void;
        getAlign(): any;
        setAlign(value: any): void;
        resetAlign(): void;

    }
}
declare module qx.util.placement {
    class KeepAlignAxis {
        static computeStart(size: number, target: IMap, offsets: IMap, areaSize: number, position: string): number;

    }
}
declare module qx.util.placement {
    class AbstractAxis {
        static computeStart(size: number, target: IMap, offsets: IMap, areaSize: number, position: string): number;
        protected static _moveToEdgeAndAlign(size: number, target: IMap, offsets: IMap, position: string): number;
        protected static _isInRange(start: number, size: number, areaSize: number): boolean;

    }
}
declare module qx.util.placement {
    class BestFitAxis {
        static computeStart(size: number, target: IMap, offsets: IMap, areaSize: number, position: string): number;

    }
}
declare module qx.module {
    class Messaging {

    }
}
declare module qx.module {
    class Cookie {

    }
}
declare module qx.module.util {
    class Function {

    }
}
declare module qx.module.util {
    class Array {

    }
}
declare module qx.module.util {
    class String {
        static camelCase(str: qx.module.util.String): qx.module.util.String;
        static hyphenate(str: qx.module.util.String): qx.module.util.String;
        static startsWith(fullstr: qx.module.util.String, substr: qx.module.util.String): boolean;
        static endsWith(fullstr: qx.module.util.String, substr: qx.module.util.String): boolean;

    }
}
declare module qx.module.util {
    class Object {
        static merge(target: qx.module.util.Object, ...varargs: any[]): qx.module.util.Object;

    }
}
declare module qx.module.util {
    class Type {

    }
}
declare module qx.module {
    class Template {
        static get(id: string, view: any, partials: any): any;
        static render(template: string, view: any, partials: any): string;
        static renderToNode(template: string, view: any, partials: any): any;

    }
}
declare module qx.module {
    class Attribute {
        getHtml(): string | null;
        setHtml(html: string): any;
        setAttribute(name: string, value: any): any;
        getAttribute(name: string): any;
        removeAttribute(name: string): any;
        setAttributes(attributes: IMap): any;
        getAttributes(names: string[]): IMap;
        removeAttributes(attributes: string[]): any;
        setProperty(name: string, value: any): any;
        getProperty(name: string): any;
        setProperties(properties: IMap): any;
        removeProperties(properties: string[]): any;
        getProperties(names: string[]): IMap;
        removeProperty(name: string): any;
        getValue(): string | string[];
        setValue(value: string | null): any;

    }
}
declare module qx.module {
    class TextSelection {
        getTextSelection(): string | null;
        getTextSelectionLength(): number | null;
        getTextSelectionStart(): number | null;
        getTextSelectionEnd(): number | null;
        setTextSelection(start: number, end: number): any;
        clearTextSelection(): any;

    }
}
declare module qx.module {
    class Placement {
        protected static _getAxis(mode: string): any;
        protected static _computePlacement(axes: IMap, size: IMap, area: IMap, target: IMap, offsets: IMap, position: IMap): IMap;
        protected static _getPositionX(edge: string, align: string): string;
        protected static _getPositionY(edge: string, align: string): string;
        placeTo(target: HTMLElement, position: string, offsets?: IMap, modeX?: string, modeY?: string): any;

    }
}
declare module qx.module {
    class Traversing {
        static isElement(selector: any | null): boolean;
        static isNode(selector: Node | null): boolean;
        static isNodeName(selector: Node | null, nodeName: string): boolean;
        static isDocument(node: any | null): boolean;
        static isDocumentFragment(node: any | null): boolean;
        static getWindow(selector: Node | null): Window;
        static isTextNode(obj: any): boolean;
        static isWindow(obj: any | null): boolean;
        static getDocument(selector: Node | null): Document | null;
        static getNodeName(selector: Node | null): string;
        static getNodeText(selector: Node | null): string;
        static isBlockNode(selector: Node | null): boolean;
        static equalNodes(node1: string | null, node2: string | null): boolean;
        add(el: HTMLElement | null): any;
        getChildren(selector?: string): any;
        forEach(fn: Function, ctx: any): any;
        getParents(selector?: string): any;
        isChildOf(parent: any | null): boolean;
        getAncestors(filter?: string): any;
        getAncestorsUntil(selector: string, filter?: string): any;
        getClosest(selector: string): any;
        find(selector: string): any;
        getContents(): any;
        is(selector: string | null): boolean;
        eq(index: number): any;
        getFirst(): any;
        getLast(): any;
        has(selector: string): any;
        contains(element: HTMLElement | null): any;
        getNext(selector?: string): any;
        getNextAll(selector?: string): any;
        getNextUntil(selector?: string): any;
        getPrev(selector?: string): any;
        getPrevAll(selector?: string): any;
        getPrevUntil(selector?: string): any;
        getSiblings(selector?: string): any;
        not(selector: string | null): any;
        getOffsetParent(): any;
        isRendered(): boolean;

    }
}
declare module qx.module {
    class Event {
        static ready(callback: Function): void;
        static $registerEventNormalization(types: string[], normalizer: Function): void;
        static $unregisterEventNormalization(types: string[], normalizer: Function): void;
        static $getEventNormalizationRegistry(): IMap;
        static $registerEventHook(types: string[], registerHook: Function, unregisterHook?: Function): void;
        static $unregisterEventHook(types: string[], registerHook: Function, unregisterHook?: Function): void;
        static $getEventHookRegistry(): IMap;
        on(type: string, listener: Function, context?: any, useCapture?: boolean): any;
        off(type: string, listener: Function, context?: any, useCapture?: boolean): any;
        allOff(type?: string): any;
        offById(id: number): any;
        emit(type: string, data?: any): any;
        once(type: string, listener: Function, context?: any): any;
        hasListener(type: string, listener?: Function, context?: any): boolean;
        copyEventsTo(target: HTMLElement): void;
        hover(callbackIn: Function, callbackOut?: Function): any;
        onMatchTarget(eventType: string, target: string | null, callback: Function, context?: any): any;
        offMatchTarget(eventType: string, target: string | null, callback: Function, context?: any): any;

    }
}
declare module qx.module {
    class Animation {
        protected static _animate(desc: IMap, duration?: number, reverse?: boolean): void;
        getAnimationHandles(): qx.data.Array;
        animate(desc: IMap, duration?: number): any;
        animateReverse(desc: IMap, duration?: number): any;
        play(): any;
        pause(): any;
        stop(): any;
        isPlaying(): boolean;
        isEnded(): boolean;
        fadeIn(duration?: number): any;
        fadeOut(duration?: number): any;

    }
}
declare module qx.module {
    class Placeholder {
        static update(): void;
        updatePlaceholder(): any;

    }
}
declare module qx.module {
    class Core {

    }
}
declare module qx.module {
    class Manipulating {
        static create(html: string | null, context?: Document): any;
        clone(events: boolean): any;
        append(html: string | null): any;
        appendTo(parent: string | null): any;
        insertBefore(target: string | null): any;
        insertAfter(target: string | null): any;
        wrap(wrapper: string | null): any;
        remove(): any;
        empty(): any;
        before(content: string | null): any;
        after(content: string | null): any;
        getScrollLeft(): number;
        getScrollTop(): number;
        setScrollLeft(value: number, duration?: number): any;
        setScrollTop(value: number, duration?: number): any;
        focus(): any;
        blur(): any;

    }
}
declare module qx.module {
    class Io {
        static xhr(url: string, settings?: IMap): qx.bom.request.Xhr;
        static script(url: string): qx.bom.request.Script;
        static jsonp(url: string, settings?: IMap): qx.bom.request.Jsonp;

    }
}
declare module qx.module {
    class Css {
        protected static _getHeight(force?: boolean): number;
        protected static _getWidth(force?: boolean): number;
        protected static _getContentHeight(force?: boolean): number;
        protected static _getContentWidth(force?: boolean): number;
        static includeStylesheet(uri: string, doc?: Document): void;
        getHeight(force?: boolean): number;
        getWidth(force?: boolean): number;
        getContentHeight(force?: boolean): number;
        getContentWidth(force?: boolean): number;
        show(): any;
        hide(): any;
        getPosition(): IMap;
        getOffset(mode?: string): IMap;
        setStyle(name: string, value: any): any;
        getStyle(name: string): any;
        setStyles(styles: IMap): any;
        getStyles(names: string[]): IMap;
        addClass(name: string): any;
        addClasses(names: string[]): any;
        removeClass(name: string): any;
        removeClasses(names: string[]): any;
        hasClass(name: string): boolean;
        getClass(): string;
        toggleClass(name: string): any;
        toggleClasses(names: string[]): any;
        replaceClass(oldName: string, newName: string): any;

    }
}
declare module qx.module.dev {
    class FakeServer {
        static configure(responseData: IMap[]): void;
        static removeResponse(method: string, url: string | null): void;
        static addFilter(filter: Function): void;
        static removeFilter(filter: Function): void;
        static respondWith(method: string, urlRegExp: RegExp, response: Function | null): void;
        static getFakeServer(): any;
        static restore(): void;

    }
}
declare module qx.module {
    class Rest {
        static resource(description?: IMap): qx.bom.rest.Resource;

    }
}
declare module qx.module {
    class Transform {
        transform(transforms: IMap): any;
        translate(value: string | null): any;
        scale(value: number | null): any;
        rotate(value: string | null): any;
        skew(value: string | null): any;
        setTransformOrigin(value: string): any;
        getTransformOrigin(): string;
        setTransformStyle(value: string): any;
        getTransformStyle(): string;
        setTransformPerspective(value: number): any;
        getTransformPerspective(): string;
        setTransformPerspectiveOrigin(value: string): any;
        getTransformPerspectiveOrigin(): string;
        setTransformBackfaceVisibility(value: boolean): any;
        getTransformBackfaceVisibility(): boolean;

    }
}
declare module qx.module {
    class MatchMedia {
        static matchMedia(query: string): qx.bom.MediaQuery;
        static addSizeClasses(): void;
        mediaQueryToClass(queryString: string, className: string): any;

    }
}
declare module qx.module {
    class Blocker {
        block(color?: string, opacity?: number, zIndex?: number): any;
        unblock(): any;
        getBlocker(): any;

    }
}
declare module qx.module {
    class Environment {
        static get(key: string): any;
        static add(key: string, value: any): any;

    }
}
declare module qx.module {
    class Storage {
        static setLocalItem(key: string, value: any): void;
        static getLocalItem(key: string): any;
        static removeLocalItem(key: string): void;
        static getLocalLength(): number;
        static getLocalKey(index: number): string;
        static clearLocal(): void;
        static forEachLocal(callback: Function, scope: any): void;
        static setSessionItem(key: string, value: any): void;
        static getSessionItem(key: string): any;
        static removeSessionItem(key: string): void;
        static getSessionLength(): number;
        static getSessionKey(index: number): string;
        static clearSession(): void;
        static forEachSession(callback: Function, scope: any): void;

    }
}
declare module qx.module.event {
    class OrientationHandler {
        static register(element: Window): void;
        static unregister(element: HTMLElement): void;

    }
}
declare module qx.module.event {
    class Touch {
        static normalize(event: qx.event.type.Event, element: HTMLElement, type: string): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class PointerHandler {
        static register(element: HTMLElement, type: string): void;
        static unregister(element: HTMLElement): void;

    }
}
declare module qx.module.event {
    class Swipe {
        static getStartTime(): number;
        static getDuration(): number;
        static getAxis(): string;
        static getDirection(): string;
        static getVelocity(): number;
        static getDistance(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class TouchHandler {
        static register(element: HTMLElement): void;
        static unregister(element: HTMLElement): void;

    }
}
declare module qx.module.event {
    class Rotate {
        static getAngle(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Keyboard {
        static getKeyIdentifier(): string;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;
        static registerInputFix(element: HTMLElement): void;
        static unregisterInputFix(element: HTMLElement): void;
        protected static _inputFix(ev: qx.event.type.Event): void;

    }
}
declare module qx.module.event {
    class Tap {
        static getViewportLeft(): number;
        static getViewportTop(): number;
        static getDocumentLeft(): number;
        static getDocumentTop(): number;
        static getScreenLeft(): number;
        static getScreenTop(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Native {
        static preventDefault(): void;
        static stopPropagation(): void;
        static getType(): string;
        static getTarget(): any;
        static getRelatedTarget(): HTMLElement;
        static getCurrentTarget(): HTMLElement;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class GestureHandler {
        static register(element: HTMLElement, type: string): void;
        static unregister(element: HTMLElement): void;

    }
}
declare module qx.module.event {
    class Track {
        static getDelta(): IMap;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Pinch {
        static getScale(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Pointer {
        static getPointerType(): string;
        static getViewportLeft(): number;
        static getViewportTop(): number;
        static getDocumentLeft(): number;
        static getDocumentTop(): number;
        static getScreenLeft(): number;
        static getScreenTop(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Mouse {
        static getButton(): string;
        static getViewportLeft(): number;
        static getViewportTop(): number;
        static getDocumentLeft(): number;
        static getDocumentTop(): number;
        static getScreenLeft(): number;
        static getScreenTop(): number;
        static normalize(event: qx.event.type.Event, element: HTMLElement): qx.event.type.Event;

    }
}
declare module qx.module.event {
    class Orientation {
        static getOrientation(): number;
        static isLandscape(): boolean;
        static isPortrait(): boolean;
        static normalize(event: qx.event.type.Event, element: HTMLElement, type: string): qx.event.type.Event;

    }
}
declare module qx.module {
    class Polyfill {

    }
}
declare module qx.module {
    class Dataset {
        setData(name: string, value: any): any;
        getData(name: string): any;
        getAllData(): IMap;
        hasData(): boolean;
        removeData(name: string): any;

    }
}
declare module qx.io {
    class ImageLoader {
        static isLoaded(source: string): boolean;
        static isFailed(source: string): boolean;
        static isLoading(source: string): boolean;
        static getFormat(source: string): any;
        static getSize(source: string): IMap;
        static getWidth(source: string): number;
        static getHeight(source: string): number;
        static load(source: string, callback?: Function, context?: any): void;
        static abort(source: string): void;
        static dispose(): void;

    }
}
declare module qx.io.transport {
    class AbstractTransport extends qx.core.Object {
        constructor(param0?: any);
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;

    }
}
declare module qx.io.transport {
    class Xhr extends qx.io.transport.AbstractTransport implements qx.io.transport.ITransport {
        send(param0: any): qx.Promise;
        getTransportImpl(): any;
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;
        constructor(url?: string);
        protected _createTransportImpl(): qx.io.request.Xhr;

    }
}
declare module qx.io.transport {
    class Websocket extends qx.io.transport.AbstractTransport implements qx.io.transport.ITransport {
        send(param0: any): qx.Promise;
        getTransportImpl(): any;
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;
        constructor(url?: string);
        protected _createTransportImpl(): WebSocket;

    }
}
declare module qx.io.transport {
    interface ITransport {
        send(param0: any): qx.Promise;
        getTransportImpl(): any;
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;

    }
}
declare module qx.io.transport {
    class Fetch extends qx.io.transport.AbstractTransport implements qx.io.transport.ITransport {
        send(param0: any): qx.Promise;
        getTransportImpl(): any;
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;
        constructor(url?: string);
        protected _createTransportImpl(): any;

    }
}
declare module qx.io.transport {
    class AbstractClient extends qx.core.Object {
        static registerTransport(uriRegExp: RegExp, transportClass: qx.io.transport.ITransport): void;
        selectTransport(param0: any): void;
        getTransport(): qx.io.transport.ITransport;
        setTransport(value: qx.io.transport.ITransport): void;
        resetTransport(): void;

    }
}
declare module qx.io.transport {
    class PostMessage extends qx.io.transport.AbstractTransport implements qx.io.transport.ITransport {
        send(param0: any): qx.Promise;
        getTransportImpl(): any;
        getEndpoint(): any;
        setEndpoint(value: any): void;
        resetEndpoint(): void;
        constructor(windowOrWorker?: Window | null);
        protected _createTransportImpl(): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Request extends qx.io.jsonrpc.protocol.Notification {
        constructor(param0?: any, param1?: any, id?: number);
        static getCurrentId(): void;
        static resetId(): void;
        getPromise(): qx.Promise;
        handleTransportException(param0: any): void;
        getId(): any;
        setId(value: any): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Error extends qx.io.jsonrpc.protocol.Message {
        constructor(param0?: any, param1?: any, param2?: any, param3?: any);
        getJsonrpc(): string;
        setJsonrpc(value: string): void;
        resetJsonrpc(): void;
        getId(): any;
        setId(value: any): void;
        resetId(): void;
        getError(): any;
        setError(value: any): void;
        resetError(): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Result extends qx.io.jsonrpc.protocol.Message {
        constructor(param0?: any, param1?: any);
        getId(): any;
        setId(value: any): void;
        resetId(): void;
        getResult(): any;
        setResult(value: any): void;
        resetResult(): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Batch extends qx.core.Object {
        add(param0: any): qx.io.jsonrpc.protocol.Batch;
        addRequest(method: any, params: any): void;
        addNotification(method: any, params: any): void;
        getPromises(): qx.Promise[];
        toObject(): any;
        getBatch(): qx.data.Array;
        setBatch(value: qx.data.Array): void;
        resetBatch(): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Notification extends qx.io.jsonrpc.protocol.Message {
        constructor(param0?: any, param1?: any);
        getMethod(): string;
        setMethod(value: string): void;
        resetMethod(): void;
        getParams(): any;
        setParams(value: any): void;
        resetParams(): void;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Parser extends qx.core.Object {
        parse(param0: any): qx.io.jsonrpc.protocol.Message;

    }
}
declare module qx.io.jsonrpc.protocol {
    class Message extends qx.core.Object {
        toObject(): any;
        getJsonrpc(): string;
        setJsonrpc(value: string): void;
        resetJsonrpc(): void;

    }
}
declare module qx.io.jsonrpc {
    class Client extends qx.io.transport.AbstractClient {
        constructor(transportOrUri?: qx.io.transport.ITransport | null, methodPrefix?: string, parser?: qx.io.jsonrpc.protocol.Parser);
        protected _prependMethodPrefix(param0: any): string;
        protected _throwTransportException(exception: any): void;
        send(param0: any): qx.Promise;
        sendRequest(param0: any, param1: any): qx.Promise;
        sendNotification(param0: any, param1: any): qx.Promise;
        sendBatch(param0: any): qx.Promise;
        handleIncoming(json: string): void;
        protected _cleanup(param0: any): void;
        handleMessage(message: qx.io.jsonrpc.protocol.Message | null): void;
        getTransport(): qx.io.transport.ITransport;
        setTransport(value: qx.io.transport.ITransport): void;
        resetTransport(): void;
        getMethodPrefix(): string;
        setMethodPrefix(value: string): void;
        resetMethodPrefix(): void;
        getParser(): qx.io.jsonrpc.protocol.Parser;
        setParser(value: qx.io.jsonrpc.protocol.Parser): void;
        resetParser(): void;

    }
}
declare module qx.io.graphql.protocol {
    class Request extends qx.io.graphql.protocol.Message {
        protected _jsonReplacer(): void;
        protected _transformVariables(): void;
        protected _validateVariables(): void;
        getOperationName(): string;
        setOperationName(value: string): void;
        resetOperationName(): void;
        getQuery(): string;
        setQuery(value: string): void;
        resetQuery(): void;
        getVariables(): qx.core.Object;
        setVariables(value: qx.core.Object): void;
        resetVariables(): void;

    }
}
declare module qx.io.graphql.protocol {
    class Response extends qx.io.graphql.protocol.Message {
        getData(): any;
        setData(value: any): void;
        resetData(): void;
        getErrors(): any;
        setErrors(value: any): void;
        resetErrors(): void;

    }
}
declare module qx.io.graphql.protocol {
    class Message extends qx.core.Object {
        constructor(param0?: any);
        toNormalizedObject(): void;
        toObject(): any;

    }
}
declare module qx.io.graphql {
    class Client extends qx.io.transport.AbstractClient {
        constructor(transportOrUri?: qx.io.transport.ITransport | null);
        send(request: qx.io.graphql.protocol.Request): qx.Promise;
        protected _handleErrors(response: qx.io.graphql.protocol.Response): qx.io.exception.Protocol;
        getTransport(): qx.io.transport.ITransport;
        setTransport(value: qx.io.transport.ITransport): void;
        resetTransport(): void;

    }
}
declare module qx.io.request {
    class Xhr extends qx.io.request.AbstractRequest {
        constructor(url?: string, method?: string);
        protected _createResponseParser(): qx.util.ResponseParser;
        setParser(param0: any): Function;
        getUrl(): string;
        setUrl(value: string): void;
        resetUrl(): void;
        getTimeout(): number;
        setTimeout(value: number): void;
        resetTimeout(): void;
        getRequestData(): any;
        setRequestData(value: any): void;
        resetRequestData(): void;
        getAuthentication(): qx.io.request.authentication.IAuthentication;
        setAuthentication(value: qx.io.request.authentication.IAuthentication): void;
        resetAuthentication(): void;
        getMethod(): any;
        setMethod(value: any): void;
        resetMethod(): void;
        getAsync(): boolean;
        isAsync(): boolean;
        setAsync(value: boolean): void;
        resetAsync(): void;
        getAccept(): string;
        setAccept(value: string): void;
        resetAccept(): void;
        getCache(): any;
        setCache(value: any): void;
        resetCache(): void;

    }
}
declare module qx.io.request {
    class AbstractRequest extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(url?: string);
        protected _createTransport(): qx.bom.request.IRequest;
        protected _getConfiguredUrl(): string;
        protected _getConfiguredRequestHeaders(): IMap;
        protected _getParsedResponse(): string;
        protected _getMethod(): string;
        protected _isAsync(): boolean;
        send(): void;
        sendWithPromise(context?: any): qx.Promise;
        abort(): void;
        protected _setRequestHeaders(): void;
        protected _getAllRequestHeaders(): IMap;
        setRequestHeader(key: string, value: string): void;
        getRequestHeader(key: string): string;
        removeRequestHeader(key: string): void;
        getTransport(): any;
        getReadyState(): number;
        getPhase(): string;
        getStatus(): number;
        getStatusText(): string;
        getResponseText(): string;
        getAllResponseHeaders(): string;
        getResponseHeader(key: string): string;
        overrideResponseContentType(contentType: string): void;
        getResponseContentType(): string;
        isDone(): void;
        getResponse(): string;
        protected _setResponse(response: string): void;
        protected _onReadyStateChange(): void;
        protected _onLoad(): void;
        protected _onLoadEnd(): void;
        protected _onAbort(): void;
        protected _onTimeout(): void;
        protected _onError(): void;
        protected _fireStatefulEvent(evt: string): void;
        protected _setPhase(phase: string): void;
        protected _serializeData(data: string | null): string | null;
        getUrl(): string;
        setUrl(value: string): void;
        resetUrl(): void;
        getTimeout(): number;
        setTimeout(value: number): void;
        resetTimeout(): void;
        getRequestData(): any;
        setRequestData(value: any): void;
        resetRequestData(): void;
        getAuthentication(): qx.io.request.authentication.IAuthentication;
        setAuthentication(value: qx.io.request.authentication.IAuthentication): void;
        resetAuthentication(): void;

    }
}
declare module qx.io.request {
    class Jsonp extends qx.io.request.AbstractRequest {
        setCallbackParam(param: string): void;
        setCallbackName(name: string): void;
        getUrl(): string;
        setUrl(value: string): void;
        resetUrl(): void;
        getTimeout(): number;
        setTimeout(value: number): void;
        resetTimeout(): void;
        getRequestData(): any;
        setRequestData(value: any): void;
        resetRequestData(): void;
        getAuthentication(): qx.io.request.authentication.IAuthentication;
        setAuthentication(value: qx.io.request.authentication.IAuthentication): void;
        resetAuthentication(): void;
        getCache(): boolean;
        isCache(): boolean;
        setCache(value: boolean): void;
        resetCache(): void;

    }
}
declare module qx.io.request.authentication {
    interface IAuthentication {
        getAuthHeaders(): IMap[];

    }
}
declare module qx.io.request.authentication {
    class Bearer extends qx.core.Object implements qx.io.request.authentication.IAuthentication {
        getAuthHeaders(): IMap[];
        constructor(token?: string);

    }
}
declare module qx.io.request.authentication {
    class Basic extends qx.core.Object implements qx.io.request.authentication.IAuthentication {
        getAuthHeaders(): IMap[];
        constructor(username?: any, password?: any);

    }
}
declare module qx.io.part {
    class Package {
        constructor(urls?: string[], id?: any, loaded?: boolean);
        getId(): string;
        getReadyState(): string;
        getUrls(): string[];
        saveClosure(closure: Function): void;
        execute(): void;
        loadClosure(notifyPackageResult: Function, self?: any): void;
        load(notifyPackageResult: Function, self?: any): void;

    }
}
declare module qx.io.part {
    class Part {
        constructor(name?: string, packages?: qx.io.part.Package[], loader?: qx.Part);
        getReadyState(): string;
        getName(): string;
        getPackages(): qx.io.part.Package[];
        preload(callback: Function, self?: any): void;
        load(callback: Function, self?: any): void;
        protected _appendPartListener(callback: Function, self?: any, part?: qx.io.part.Part | null): void;
        protected _markAsCompleted(readyState: string): void;
        protected _signalStartup(): void;
        protected _checkCompleteLoading(callback: Function, self: any): boolean;

    }
}
declare module qx.io.part {
    class ClosurePart extends qx.io.part.Part {
        constructor(name?: string, packages?: qx.io.part.Package[], loader?: qx.Part);
        protected _onPackageLoad(pkg: qx.io.part.Package): void;

    }
}
declare module qx.io {
    class PartLoader extends qx.core.Object {
        static getInstance(): PartLoader;
        static require(partNames: string[], callback: Function, self?: any): void;
        getPart(name: string): qx.io.part.Part;
        hasPart(name: string): boolean;
        getParts(): IMap;

    }
}
declare module qx.io.exception {
    class Transport extends qx.io.exception.Exception {

    }
}
declare module qx.io.exception {
    class Protocol extends qx.io.exception.Exception {

    }
}
declare module qx.io.exception {
    class Exception extends qx.type.BaseError {
        constructor(param0?: any, param1?: any, param2?: any);

    }
}
declare module qx.io.exception {
    class Cancel extends qx.io.exception.Exception {
        constructor(param0?: any, param1?: any);

    }
}
declare module qx.io.rest {
    class Resource extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(description?: IMap);
        static placeholdersFromUrl(url: string): qx.data.Array;
        protected _getResource(description?: IMap): qx.bom.rest.Resource;
        protected _tailorResource(resource: qx.bom.rest.Resource): qx.bom.rest.Resource;
        configureRequest(callback: Function): void;
        protected _getRequest(): qx.io.request.Xhr;
        map(action: string, method: string, url: string, check?: IMap): void;
        invoke(action: string, params: IMap, data: IMap | null): number;
        setBaseUrl(baseUrl: string): void;
        abort(param0: any): void;
        refresh(action: string): void;
        poll(action: string, interval: number, params?: IMap, immediately?: boolean): qx.event.Timer;
        longPoll(action: string): string;
        protected _getRequestConfig(action: string, params: IMap): IMap;
        protected _getThrottleLimit(): number;
        protected _getThrottleCount(): number;

    }
}
declare module qx.html {
    class Canvas extends qx.html.Element {
        constructor(styles?: IMap, attributes?: IMap);
        getCanvas(): qx.html.Element;
        setWidth(width: number): void;
        getWidth(): number;
        setHeight(height: number): void;
        getHeight(): number;
        getContext2d(): CanvasRenderingContext2D;

    }
}
declare module qx.html {
    class Jsx extends qx.core.Object {
        static createElement(tagname: string, attributes?: IMap, children?: qx.html.Node[]): any;

    }
}
declare module qx.html {
    class Input extends qx.html.Element {
        constructor(type?: string, styles?: IMap, attributes?: IMap);
        protected _setValueProperty(value?: string): void;
        protected _getValueProperty(): String | null;
        protected _setWrapProperty(value?: string): void;
        setEnabled(value: boolean): void;
        setSelectable(value: boolean): void;
        setValue(value: any): qx.html.Input;
        getValue(): string;
        setWrap(wrap: boolean, direct?: boolean): qx.html.Input;
        getWrap(): boolean;

    }
}
declare module qx.html {
    class Factory extends qx.core.Object {
        static getInstance(): Factory;
        registerFactory(tagName: string, factory: qx.Class | null): void;
        createElement(tagName: string, attributes?: IMap): qx.html.Node;

    }
}
declare module qx.html {
    class Iframe extends qx.html.Element {
        constructor(url?: string, styles?: IMap, attributes?: IMap);
        protected _setSourceProperty(value?: string): void;
        getWindow(): Window;
        getDocument(): Document;
        getBody(): qx.html.Element;
        setSource(source: string): qx.html.Iframe;
        getSource(): string;
        setName(name: string): qx.html.Iframe;
        getName(): string;
        reload(): void;

    }
}
declare module qx.html {
    class Label extends qx.html.Element {
        protected _setValueProperty(value?: string): void;
        setRich(value: boolean): qx.html.Label;
        setValue(value: string): qx.html.Label;
        getValue(): string;
        resetValue(): qx.html.Label;
        getVisible(): boolean;
        isVisible(): boolean;
        setVisible(value: boolean): void;
        resetVisible(): void;
        getCssClass(): string;
        setCssClass(value: string): void;
        resetCssClass(): void;

    }
}
declare module qx.html {
    class Node extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(nodeName?: string);
        static fromDomNode(domElement: any): qx.ui.core.Widget;
        static toVirtualNode(param0: any): qx.html.Node;
        connectObject(qxObject: qx.core.Object): void;
        disconnectObject(qxObject: qx.core.Object): void;
        protected _createDomElement(): qx.html.Element;
        serialize(writer?: Function): String | null;
        protected _serializeImpl(writer: Function): void;
        useNode(domNode: qx.html.Node): void;
        protected _useNodeImpl(domNode: any, newChildren: qx.html.Node[]): void;
        protected _connectDomNode(domNode: any): void;
        isInDocument(): boolean;
        updateObjectId(): void;
        protected _scheduleChildrenUpdate(): void;
        protected _flush(): void;
        flush(): void;
        isRoot(): boolean;
        isInRoot(): boolean;
        protected _willBeSeeable(): boolean;
        protected _insertChildren(): void;
        protected _syncChildren(): void;
        protected _copyData(fromMarkup: boolean, propertiesFromDom: boolean): void;
        protected _syncData(): void;
        protected _addChildImpl(child: any): void;
        protected _removeChildImpl(child: qx.html.Element): void;
        protected _moveChildImpl(child: qx.html.Element): void;
        getChildren(): qx.data.Array;
        getChild(index: number): qx.html.Element | null;
        hasChildren(): boolean;
        indexOf(child: qx.html.Element): number;
        hasChild(child: qx.html.Element): boolean;
        add(...varargs: qx.html.Element[]): qx.html.Element;
        addAt(child: qx.html.Element, index: number): qx.html.Element;
        remove(childs: qx.html.Element): qx.html.Element;
        removeAt(index: number): qx.html.Element;
        removeAll(): qx.html.Element;
        getParent(): qx.html.Element | null;
        insertInto(parent: qx.html.Element, index?: number): qx.html.Element;
        insertBefore(rel: qx.html.Element): qx.html.Element;
        insertAfter(rel: qx.html.Element): qx.html.Element;
        moveTo(index: number): qx.html.Element;
        moveBefore(rel: qx.html.Element): qx.html.Element;
        moveAfter(rel: qx.html.Element): qx.html.Element;
        free(): qx.html.Element;
        getDomElement(create?: boolean): HTMLElement | null;
        getNodeName(): string;
        setNodeName(name: string): void;
        include(): qx.html.Node;
        exclude(): qx.html.Element;
        isIncluded(): boolean;
        protected _applyVisible(): void;
        registerProperty(key: string, getter?: Function, setter?: Function, serialize?: Function): void;
        protected _applyProperty(name: string, value: any): qx.html.Element;
        protected _setProperty(key: string, value: any, direct?: boolean): qx.html.Element;
        protected _removeProperty(key: string, direct?: boolean): qx.html.Element;
        protected _getProperty(key: string, direct?: boolean): any;
        getListeners(): IMap[];
        getVisible(): boolean;
        isVisible(): boolean;
        setVisible(value: boolean): void;
        resetVisible(): void;

    }
}
declare module qx.html {
    class Image extends qx.html.Element {
        setPadding(paddingLeft: number, paddingTop: number): void;
        protected _setSourceProperty(value?: string): void;
        protected _setScaleProperty(): void;
        setSource(value: boolean): qx.html.Label;
        getSource(): string;
        resetSource(): qx.html.Image;
        setScale(value: boolean): qx.html.Label;
        getScale(): boolean;
        getVisible(): boolean;
        isVisible(): boolean;
        setVisible(value: boolean): void;
        resetVisible(): void;
        getCssClass(): string;
        setCssClass(value: string): void;
        resetCssClass(): void;

    }
}
declare module qx.html {
    class Text extends qx.html.Node {
        constructor(value?: string);
        protected _useNode(): void;
        useMarkup(): void;
        setText(value?: string, direct?: boolean): void;
        getText(): string;

    }
}
declare module qx.html {
    class Blocker extends qx.html.Element {
        constructor(backgroundColor?: string, opacity?: number);
        protected _stopPropagation(e: qx.event.type.Mouse): void;

    }
}
declare module qx.html {
    class JsxRef extends qx.core.Object {
        getValue(): qx.html.Element;
        setValue(value: qx.html.Element): void;
        resetValue(): void;

    }
}
declare module qx.html {
    class Element extends qx.html.Node {
        constructor(tagName?: string, styles?: IMap, attributes?: IMap);
        protected static _scheduleFlush(job: string): void;
        static flush(): void;
        static fromDomElement(domElement: any): qx.ui.core.Widget;
        static setDefaultRoot(root: qx.html.Element): void;
        static getDefaultRoot(): qx.html.Element;
        connectWidget(widget: qx.ui.core.Widget): void;
        disconnectWidget(qxObject: qx.core.Object): void;
        importQxObjectIds(): void;
        setRoot(root: boolean): void;
        useMarkup(html: string): qx.html.Element;
        useElement(elem: qx.html.Element): void;
        isFocusable(): boolean;
        setSelectable(value: boolean): void;
        isNativelyFocusable(): boolean;
        fadeIn(duration: number): qx.bom.element.AnimationHandle;
        fadeOut(duration: number): qx.bom.element.AnimationHandle;
        show(): qx.html.Element;
        hide(): qx.html.Element;
        scrollChildIntoViewX(elem: qx.html.Element, align?: string, direct?: boolean): void;
        scrollChildIntoViewY(elem: qx.html.Element, align?: string, direct?: boolean): void;
        scrollToX(x: number, lazy?: boolean): void;
        getScrollX(): number;
        scrollToY(y: number, lazy?: boolean): void;
        getScrollY(): number;
        disableScrolling(): void;
        enableScrolling(): void;
        setText(value: string): void;
        getText(): string;
        getTextSelection(): string | null;
        getTextSelectionLength(): number | null;
        getTextSelectionStart(): number | null;
        getTextSelectionEnd(): number | null;
        setTextSelection(start: number, end: number): void;
        clearTextSelection(): void;
        focus(): void;
        blur(): void;
        activate(): void;
        deactivate(): void;
        capture(containerCapture?: boolean): void;
        releaseCapture(): void;
        setStyle(key: string, value: any, direct?: boolean): qx.html.Element;
        protected _applyStyle(key: string, value?: string, oldValue?: string): void;
        setStyles(map: IMap, direct?: boolean): qx.html.Element;
        removeStyle(key: string, direct?: boolean): qx.html.Element;
        getStyle(key: string): any;
        getAllStyles(): IMap;
        addClass(name: string): qx.html.Element;
        removeClass(name: string): qx.html.Element;
        removeAllClasses(): void;
        protected _applyCssClass(): void;
        getDimensions(mode: string): any;
        canBeSeen(): void;
        setAttribute(key: string, value: any, direct?: boolean): qx.html.Element;
        setAttributes(map: IMap, direct?: boolean): qx.html.Element;
        removeAttribute(key: string, direct?: boolean): qx.html.Element;
        getAttribute(key: string): any;
        getVisible(): boolean;
        isVisible(): boolean;
        setVisible(value: boolean): void;
        resetVisible(): void;
        getCssClass(): string;
        setCssClass(value: string): void;
        resetCssClass(): void;

    }
}
declare module qx.html {
    class Root extends qx.html.Element {
        constructor(elem?: HTMLElement);

    }
}
declare module qx.xml {
    class Document {
        static isXmlDocument(elem: Document | null): boolean;
        static create(namespaceUri?: string, qualifiedName?: string): qx.xml.Document;
        static fromString(str: string): qx.xml.Document;

    }
}
declare module qx.lang {
    class Function {
        static getCaller(args: any): qx.lang.Function;
        static getName(fcn: qx.lang.Function): qx.lang.String;
        static globalEval(data: qx.lang.String): any;
        static create(func: qx.lang.Function, options?: IMap): qx.lang.Function;
        static bind(func: qx.lang.Function, self?: any, ...varargs: any[]): qx.lang.Function;
        static curry(func: qx.lang.Function, ...varargs: any[]): any;
        static listener(func: qx.lang.Function, self?: any, ...varargs: any[]): any;
        static attempt(func: qx.lang.Function, self?: any, ...varargs: any[]): boolean | any;
        static delay(func: qx.lang.Function, delay: number, self?: any, ...varargs: any[]): number;
        static periodical(func: qx.lang.Function, interval: number, self?: any, ...varargs: any[]): number;

    }
}
declare module qx.lang {
    class Array {
        static cast(object: any, constructor: qx.lang.Function, offset?: number): qx.lang.Array;
        static fromArguments(args: any, offset?: number): qx.lang.Array;
        static fromCollection(coll: any): qx.lang.Array;
        static fromShortHand(input: qx.lang.Array): qx.lang.Array;
        static clone(arr: qx.lang.Array): qx.lang.Array;
        static insertAt(arr: qx.lang.Array, obj: any, i: number): qx.lang.Array;
        static insertBefore(arr: qx.lang.Array, obj: any, obj2: any): qx.lang.Array;
        static insertAfter(arr: qx.lang.Array, obj: any, obj2: any): qx.lang.Array;
        static removeAt(arr: qx.lang.Array, i: number): any;
        static removeAll(arr: qx.lang.Array): qx.lang.Array;
        static append(arr1: qx.lang.Array, arr2: qx.lang.Array): qx.lang.Array;
        static exclude(arr1: qx.lang.Array, arr2: qx.lang.Array): qx.lang.Array;
        static remove(arr: qx.lang.Array, obj: any): any;
        static contains(arr: qx.lang.Array, obj: any): boolean;
        static equals(arr1: qx.lang.Array, arr2: qx.lang.Array): boolean;
        static sum(arr: number[]): qx.lang.Number;
        static max(arr: number[]): any;
        static min(arr: number[]): any;
        static unique(arr: qx.lang.Array): qx.lang.Array;
        static range(start: number, stop: number, step: number): qx.lang.Array;
        static replace(dest: qx.data.Array | null, src: qx.data.Array | null): qx.lang.Array;
        static toNativeArray(src: qx.data.Array | null, param1: any): qx.lang.Array;
        static toDataArray(src: qx.data.Array | null, param1: any): qx.lang.Array;

    }
}
declare module qx.lang {
    class Number {
        static isInRange(nr: qx.lang.Number, vmin: number, vmax: number): boolean;
        static isBetweenRange(nr: qx.lang.Number, vmin: number, vmax: number): boolean;
        static limit(nr: qx.lang.Number, vmin: number, vmax: number): number;
        static equals(param0: any, param1: any): boolean;

    }
}
declare module qx.lang {
    class String {
        static camelCase(str: qx.lang.String): qx.lang.String;
        static hyphenate(str: qx.lang.String): qx.lang.String;
        static capitalize(str: qx.lang.String): qx.lang.String;
        static isUpperCase(param0: any): boolean;
        static isLowerCase(param0: any): boolean;
        static isLetters(param0: any): boolean;
        static isDigits(param0: any): boolean;
        static clean(str: qx.lang.String): qx.lang.String;
        static trimLeft(str: qx.lang.String): qx.lang.String;
        static trimRight(str: qx.lang.String): qx.lang.String;
        static startsWith(fullstr: qx.lang.String, substr: qx.lang.String): boolean;
        static endsWith(fullstr: qx.lang.String, substr: qx.lang.String): boolean;
        static repeat(str: qx.lang.String, times: number): qx.lang.String;
        static pad(str: qx.lang.String, length: number, ch: qx.lang.String): qx.lang.String;
        static contains(str: qx.lang.String, substring: qx.lang.String): boolean;
        static format(pattern: qx.lang.String, args: qx.lang.Array): qx.lang.String;
        static escapeRegexpChars(str: qx.lang.String): qx.lang.String;
        static toArray(str: qx.lang.String): qx.lang.Array;
        static stripTags(str: qx.lang.String): qx.lang.String;
        static stripScripts(str: qx.lang.String, exec?: boolean): qx.lang.String;
        static quote(str: qx.lang.String): qx.lang.String;

    }
}
declare module qx.lang {
    class Object {
        static empty(map: qx.lang.Object): void;
        static isEmpty(map: qx.lang.Object): boolean;
        static getValues(map: qx.lang.Object): qx.lang.Array;
        static clone(source: qx.lang.Object, deep: boolean): qx.lang.Object;
        static equals(object1: qx.lang.Object, object2: qx.lang.Object): boolean;
        static invert(map: qx.lang.Object): qx.lang.Object;
        static getKeyFromValue(map: qx.lang.Object, value: any): string | null;
        static contains(map: qx.lang.Object, value: any): boolean;
        static fromArray(array: qx.lang.Array): IMap;

    }
}
declare module qx.lang.normalize {
    class Function {
        static bind(that?: any): qx.lang.normalize.Function;

    }
}
declare module qx.lang.normalize {
    class Date {
        static now(): number;
        static parse(dateString: qx.lang.normalize.String): number | number;

    }
}
declare module qx.lang.normalize {
    class Error {

    }
}
declare module qx.lang.normalize {
    class Array {
        static indexOf(searchElement: any, fromIndex?: number): number;
        static lastIndexOf(searchElement: any, fromIndex?: number): number;
        static forEach(callback: qx.lang.normalize.Function, obj?: any): void;
        static filter(callback: qx.lang.normalize.Function, obj?: any): qx.lang.normalize.Array;
        static map(callback: qx.lang.normalize.Function, obj?: any): qx.lang.normalize.Array;
        static some(callback: qx.lang.normalize.Function, obj?: any): qx.lang.normalize.Array;
        static every(callback: qx.lang.normalize.Function, obj?: any): qx.lang.normalize.Array;
        static find(callback: qx.lang.normalize.Function, obj?: any): qx.lang.normalize.Object;
        static findIndex(callback: qx.lang.normalize.Function, obj?: any): number;
        static reduce(callback: qx.lang.normalize.Function, init?: any): any;
        static reduceRight(callback: qx.lang.normalize.Function, init?: any): any;
        static includes(searchElement: any, fromIndex: qx.lang.normalize.Number): boolean;

    }
}
declare module qx.lang.normalize {
    class Number {

    }
}
declare module qx.lang.normalize {
    class String {
        static trim(): qx.lang.normalize.String;
        static startsWith(searchString: qx.lang.normalize.String, position?: number): boolean;
        static endsWith(searchString: qx.lang.normalize.String, position?: number): boolean;
        static codePointAt(position: number): number;
        static fromCodePoint(var_args: number): qx.lang.normalize.String;

    }
}
declare module qx.lang.normalize {
    class Object {
        static values(map: qx.lang.normalize.Object): qx.lang.normalize.Array;
        static is(x: qx.lang.normalize.Object, y: qx.lang.normalize.Object): boolean;
        static assign(target: qx.lang.normalize.Object, sources: qx.lang.normalize.Object): qx.lang.normalize.Object;

    }
}
declare module qx.lang {
    class Json {

    }
}
declare module qx.lang {
    class Type {
        static isRegExp(value: any): boolean;
        static isNumber(value: any): boolean;
        static isBoolean(value: any): boolean;
        static isDate(value: any): boolean;
        static isError(value: any): boolean;
        static isPromise(value: any): boolean;

    }
}
declare module qx {
    class Class {
        static define(name?: string, config?: IMap): qx.Class;
        static undefine(name: string): void;
        static getTotalNumber(): number;
        static include(clazz: qx.Class, mixin: qx.Mixin): void;
        static patch(clazz: qx.Class, mixin: qx.Mixin): qx.Class;
        static isClass(obj?: any): boolean;
        static isSubClassOf(clazz: qx.Class, superClass: qx.Class): boolean;
        static getProperties(clazz: qx.Class): string[];
        static getByProperty(clazz: qx.Class, name: string): any;
        static hasOwnMixin(clazz: qx.Class, mixin: qx.Mixin): boolean;
        static getByMixin(clazz: qx.Class, mixin: qx.Mixin): any;
        static hasMixin(clazz: qx.Class, mixin: qx.Mixin): boolean;
        static hasOwnInterface(clazz: qx.Class, iface: qx.Interface): boolean;
        static getInterfaces(clazz: qx.Class): qx.Interface[];
        static implementsInterface(obj: any, iface: qx.Interface): boolean;
        static getInstance(): any;
        static getSubclasses(clazz: qx.Class): any;
        static genericToString(): string;

    }
}
declare module qx.type {
    class BaseString {
        constructor(txt?: string);
        toHashCode(): number;
        base(args: any, varags: any): any;

    }
}
declare module qx.type {
    class Array extends qx.type.BaseArray {
        constructor(length_or_items?: number | null);
        insertAt(obj: any, i: number): qx.type.Array;
        insertBefore(obj: any, obj2: any): qx.type.Array;
        insertAfter(obj: any, obj2: any): qx.type.Array;
        removeAt(i: number): any;
        removeAll(): qx.type.Array;
        append(arr: qx.type.Array): qx.type.Array;
        prepend(arr: qx.type.Array): qx.type.Array;
        remove(obj: any): any;
        contains(obj: any): boolean;

    }
}
declare module qx.type {
    class BaseArray extends qx.data.Array {
        constructor(length_or_items?: number | null);

    }
}
declare module qx.type {
    class BaseError extends Error {
        constructor(comment?: string, failMessage?: string);
        getComment(): string;

    }
}
declare module qx {
    class Part {
        constructor(loader?: any);
        static getInstance(): qx.Part;
        static require(partNames: string[], callback: Function, self?: any): void;
        static preload(partNames: string[]): void;
        static $$notifyLoad(id: string, closure: Function): void;
        addToPackage(pkg: qx.io.part.Package): void;
        saveClosure(id: string, closure: Function): void;
        getParts(): qx.data.Array;
        addPartListener(part: any, callback: any): void;
        notifyPartResult(part: any): void;
        addPackageListener(pkg: any, callback: any): void;
        notifyPackageResult(pkg: any): void;

    }
}
declare module qx.theme {
    class Simple {

    }
}
declare module qx.theme {
    class Classic {

    }
}
declare module qx.theme.classic {
    class Decoration {

    }
}
declare module qx.theme.classic {
    class Color {

    }
}
declare module qx.theme.classic {
    class Font {

    }
}
declare module qx.theme.classic {
    class Appearance {

    }
}
declare module qx.theme.simple {
    class Decoration {

    }
}
declare module qx.theme.simple {
    class Color {

    }
}
declare module qx.theme.simple {
    class Font {

    }
}
declare module qx.theme.simple {
    class Appearance {

    }
}
declare module qx.theme.simple {
    class Image extends qx.core.Object {
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;

    }
}
declare module qx.theme {
    class TangibleDark {

    }
}
declare module qx.theme.indigo {
    class Decoration extends qx.theme.simple.Decoration {

    }
}
declare module qx.theme.indigo {
    class Color {

    }
}
declare module qx.theme.indigo {
    class Font {

    }
}
declare module qx.theme.indigo {
    class Appearance extends qx.theme.simple.Appearance {

    }
}
declare module qx.theme.iconfont {
    class LoadMaterialIconsTwoTone {

    }
}
declare module qx.theme.iconfont {
    class LoadMaterialIconsRound {

    }
}
declare module qx.theme.iconfont {
    class LoadMaterialIconsSharp {

    }
}
declare module qx.theme.iconfont {
    class LoadMaterialIconsOutlined {

    }
}
declare module qx.theme.iconfont {
    class LoadMaterialIcons {

    }
}
declare module qx.theme.manager {
    class Decoration extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        static getInstance(): Decoration;
        getCssClassName(value: string | null): string;
        addCssClass(value: string | null): string;
        removeAllCssClasses(): void;
        resolve(value: string): any;
        isValidPropertyValue(value: any): boolean;
        isDynamic(value: string): boolean;
        isCached(decorator: string | null): boolean;
        protected _applyTheme(): void;
        clear(): void;
        refresh(): void;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme.manager {
    class Color extends qx.util.ValueManager {
        static getInstance(): Color;
        protected _applyTheme(): void;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme.manager {
    class Icon extends qx.core.Object {
        static getInstance(): Icon;
        protected _applyTheme(): void;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme.manager {
    class Font extends qx.util.ValueManager implements qx.core.IDisposable {
        dispose(): void;
        static getInstance(): Font;
        protected _applyTheme(): void;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme.manager {
    class Appearance extends qx.core.Object {
        static getInstance(): Appearance;
        protected _applyTheme(): void;
        styleFrom(id: string, states: IMap, theme?: qx.Theme, defaultId?: string): IMap;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme.manager {
    class Meta extends qx.core.Object {
        static getInstance(): Meta;
        protected _applyTheme(): void;
        protected _fireEvent(e: qx.event.type.Data): void;
        protected _suspendEvents(): void;
        protected _activateEvents(): void;
        initialize(): void;
        getTheme(): qx.Theme;
        setTheme(value: qx.Theme): void;
        resetTheme(): void;

    }
}
declare module qx.theme {
    class Indigo {

    }
}
declare module qx.theme {
    class Modern {

    }
}
declare module qx.theme.tangible {
    class Decoration {

    }
}
declare module qx.theme.tangible {
    class ColorEngine {

    }
}
declare module qx.theme.tangible {
    class Font {

    }
}
declare module qx.theme.tangible {
    class ColorDark extends qx.theme.tangible.ColorEngine {

    }
}
declare module qx.theme.tangible {
    class Appearance {

    }
}
declare module qx.theme.tangible {
    class Image extends qx.core.Object {

    }
}
declare module qx.theme.tangible {
    class ColorLight extends qx.theme.tangible.ColorEngine {

    }
}
declare module qx.theme.modern {
    class Decoration {

    }
}
declare module qx.theme.modern {
    class Color {

    }
}
declare module qx.theme.modern {
    class Font {

    }
}
declare module qx.theme.modern {
    class Appearance {

    }
}
declare module qx.theme.icon {
    class Oxygen {

    }
}
declare module qx.theme.icon {
    class Tango {

    }
}
declare module qx.theme {
    class TangibleLight {

    }
}
declare module qx {
    class Promise extends qx.core.Object {
        constructor(fn?: Function, context?: any);
        static isPromise(param0: any): boolean;
        static resolve(param0: any, context?: any): qx.Promise;
        static reject(reason?: any, context?: any): qx.Promise;
        static allOf(value: any): qx.Promise;
        static all(iterable: Iterable<any>): qx.Promise;
        static race(iterable: Iterable<any>): qx.Promise;
        static any(iterable: Iterable<any>): qx.Promise;
        static some(iterable: Iterable<any>, param1: any): qx.Promise;
        static forEach(iterable: Iterable<any>, iterator: Function): qx.Promise;
        static filter(iterable: Iterable<any>, iterator: Function, options?: any): qx.Promise;
        static map(iterable: Iterable<any>, iterator: Function, options?: any): qx.Promise;
        static mapSeries(iterable: Iterable<any>, iterator: Function): qx.Promise;
        static reduce(iterable: Iterable<any>, reducer: Function, initialValue?: any): qx.Promise;
        static method(param0: any): Function;
        static props(input: any): qx.Promise;
        static promisify(f: Function, options?: IMap): qx.Promise;
        then(onFulfilled: Function, onRejected?: Function): qx.Promise;
        catch(onRejected?: Function): qx.Promise;
        spread(fulfilledHandler: Function): qx.Promise;
        finally(handler?: Function): qx.Promise;
        cancel(): void;
        protected _callIterableMethod(): void;
        protected _callMethod(): void;
        toPromise(): void;

    }
}
declare module qx.dom {
    class Hierarchy {
        static getNodeIndex(node: qx.dom.Node): number;
        static getElementIndex(element: qx.dom.Element): number;
        static getNextElementSibling(element: qx.dom.Element): any;
        static getPreviousElementSibling(element: qx.dom.Element): any;
        static contains(element: qx.dom.Element, target: qx.dom.Node): boolean;
        static isRendered(element: qx.dom.Element): boolean;
        static isDescendantOf(element: qx.dom.Element, ancestor: qx.dom.Element): boolean;
        static getCommonParent(element1: qx.dom.Element, element2: qx.dom.Element): qx.dom.Element;
        static getAncestors(element: qx.dom.Element): qx.data.Array;
        static getChildElements(element: qx.dom.Element): qx.data.Array;
        static getDescendants(element: qx.dom.Element): qx.data.Array;
        static getFirstDescendant(element: qx.dom.Element): qx.dom.Element;
        static getLastDescendant(element: qx.dom.Element): qx.dom.Element;
        static getPreviousSiblings(element: qx.dom.Element): qx.data.Array;
        static getNextSiblings(element: qx.dom.Element): qx.data.Array;
        protected static _recursivelyCollect(element: qx.dom.Element, property: string): qx.data.Array;
        static getSiblings(element: any): qx.data.Array;
        static isEmpty(element: qx.dom.Element): boolean;
        static cleanWhitespace(element: qx.dom.Element): void;

    }
}
declare module qx.dom {
    class Node {
        static getDocument(node: Node | null): Document | null;
        static getWindow(node: Node | null): Window;
        static getDocumentElement(node: Node | null): qx.dom.Element;
        static getBodyElement(node: Node | null): qx.dom.Element;
        static isNode(node: qx.dom.Node): boolean;
        static isElement(node: qx.dom.Node): boolean;
        static isDocument(node: qx.dom.Node): boolean;
        static isDocumentFragment(node: qx.dom.Node): boolean;
        static isText(node: qx.dom.Node): boolean;
        static isWindow(obj: any): boolean;
        static isNodeName(node: qx.dom.Node, nodeName: string): boolean;
        static getName(node: qx.dom.Node): string;
        static getText(node: qx.dom.Node): string;
        static isBlockNode(node: qx.dom.Node): boolean;

    }
}
declare module qx.dom {
    class Element {
        static hasChild(parent: qx.dom.Element, child: qx.dom.Node): boolean;
        static hasChildren(element: qx.dom.Element): boolean;
        static hasChildElements(element: qx.dom.Element): boolean;
        static getParentElement(element: qx.dom.Element): qx.dom.Element;
        static isInDom(element: qx.dom.Element, win: Window): boolean;
        static insertAt(node: qx.dom.Node, parent: qx.dom.Element, index: number): boolean;
        static insertBegin(node: qx.dom.Node, parent: qx.dom.Element): boolean;
        static insertEnd(node: qx.dom.Node, parent: qx.dom.Element): boolean;
        static insertBefore(node: qx.dom.Node, ref: qx.dom.Node): boolean;
        static insertAfter(node: qx.dom.Node, ref: qx.dom.Node): boolean;
        static remove(node: qx.dom.Node): boolean;
        static removeChild(node: qx.dom.Node, parent: qx.dom.Element): boolean;
        static removeChildAt(index: number, parent: qx.dom.Element): boolean;
        static replaceChild(newNode: qx.dom.Node, oldNode: qx.dom.Node): boolean;
        static replaceAt(newNode: qx.dom.Node, index: number, parent: qx.dom.Element): boolean;
        static getHelperElement(win?: Window): qx.dom.Element;
        static create(name: string, attributes?: IMap, win?: Window): qx.dom.Element;
        static empty(element: qx.dom.Element): string;

    }
}
declare module qx.log.appender {
    class Console {
        static init(): void;
        static dispose(): void;
        static clear(): void;
        static process(entry: IMap): void;
        static toggle(): void;
        static show(): void;
        static execute(): void;

    }
}
declare module qx.log.appender {
    class RhinoConsole {
        static log(logMessage: string, level: string): void;
        static debug(logMessage: string): void;
        static info(logMessage: string): void;
        static warn(logMessage: string): void;
        static error(logMessage: string): void;
        static process(entry: IMap): void;

    }
}
declare module qx.log.appender {
    class RingBuffer extends qx.util.RingBuffer {
        constructor(maxMessages?: number);
        setMaxMessages(maxMessages: number): void;
        getMaxMessages(): number;
        process(entry: IMap): void;
        getAllLogEvents(): qx.data.Array;
        retrieveLogEvents(count: number, startingFromMark?: boolean): qx.data.Array;
        clearHistory(): void;

    }
}
declare module qx.log.appender {
    class Formatter extends qx.core.Object {
        static getFormatter(): qx.log.appender.Formatter;
        static setFormatter(param0: any): void;
        static escapeHTML(value: string): string;
        formatOffset(offset: number, length?: number): string;
        formatEntryTime(entry: IMap): string;
        normalizeEntryClass(entry: IMap): IMap;
        formatEntryObjectAndClass(entry: IMap): string;
        formatEntryItems(entry: IMap): string;
        toText(entry: IMap): string;
        toTextArray(entry: IMap): qx.data.Array;
        toHtml(entry: IMap): void;
        getFormatTimeAs(): any;
        setFormatTimeAs(value: any): void;
        resetFormatTimeAs(): void;

    }
}
declare module qx.log.appender {
    class Native {
        static process(entry: IMap): void;

    }
}
declare module qx.log.appender {
    class PhoneGap {
        static process(entry: IMap): void;

    }
}
declare module qx.log.appender {
    class RhinoFile {
        static log(logMessage: string, level: string): void;
        static debug(logMessage: string): void;
        static info(logMessage: string): void;
        static warn(logMessage: string): void;
        static error(logMessage: string): void;
        static process(entry: IMap): void;
        static create(): void;

    }
}
declare module qx.log.appender {
    class Util {

    }
}
declare module qx.log.appender {
    class Element extends qx.core.Object {
        constructor(element?: qx.log.appender.Element);
        setElement(element: qx.log.appender.Element): void;
        clear(): void;
        process(entry: IMap): void;

    }
}
declare module qx.log.appender {
    class NodeConsole {
        static setUseColors(param0: any): void;
        static log(logMessage: string, level: string): void;
        static debug(logMessage: string): void;
        static info(logMessage: string): void;
        static warn(logMessage: string): void;
        static error(logMessage: string): void;
        static process(entry: IMap): void;

    }
}
declare module qx.log {
    class Logger {
        static setLevel(value: string): void;
        static getLevel(): number;
        static setTreshold(value: number): void;
        static getTreshold(): number;
        static register(appender: qx.Class): void;
        static unregister(appender: qx.Class): void;
        static addFilter(logger: string | null, appenderName?: string, level?: string): void;
        static resetFilters(): void;
        static debug(object: any, message: any): void;
        static info(object: any, message: any): void;
        static warn(object: any, message: any): void;
        static error(object: any, message: any): void;
        static trace(object?: any, message?: any): void;
        static deprecatedMethodWarning(fcn: Function, msg?: string): void;
        static deprecatedClassWarning(clazz: qx.Class, msg?: string): void;
        static deprecatedEventWarning(clazz: qx.Class, event: string, msg?: string): void;
        static deprecatedMixinWarning(clazz: qx.Class, msg?: string): void;
        static deprecatedConstantWarning(clazz: qx.Class, constant: string, msg: string): void;
        static deprecateMethodOverriding(object: qx.core.Object, baseclass: qx.Class, methodName: string, msg?: string): void;
        static clear(): void;
        static isLoggerEnabled(level: string, object: any): boolean;

    }
}
declare module qx.dev.unit {
    class Sinon {

    }
}
declare module qx.dev {
    class StackTrace {
        static getStackTrace(): string[];
        static getStackTraceFromCaller(args: any): string[];
        static getStackTraceFromError(error: Error): string[];

    }
}
declare module qx.dev {
    class Debug {
        static debugObject(obj: any, initialMessage: string | null, maxLevel?: number): void;
        static debugObjectToString(obj: any, initialMessage: string | null, maxLevel?: number, bHtml?: boolean): string;
        static getFunctionName(func: Function, functionType?: string): string | null;
        static debugProperties(model: qx.core.Object, maxLevel?: number, html?: boolean, param3?: any): string;

    }
}
declare module qx.dev {
    class FakeServer {
        static getInstance(): any;
        configure(responseData: IMap[]): void;
        addFilter(filter: Function): void;
        removeFilter(filter: Function): void;
        removeResponse(method: string, url: string | null): void;
        respondWith(method: string, urlRegExp: RegExp, response: Function | null): void;
        getFakeServer(): any;
        restore(): void;
        protected _getRegExp(pattern: string): RegExp;

    }
}
declare module qx.application {
    class Inline extends qx.application.AbstractGui {

    }
}
declare module qx.application {
    class Standalone extends qx.application.AbstractGui {

    }
}
declare module qx.application {
    class Mobile extends qx.core.Object implements qx.application.IApplication {
        main(): void;
        finalize(): void;
        close(): String | null;
        terminate(): void;
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;
        getRoot(): qx.ui.mobile.core.Widget;
        getRouting(): qx.application.Routing;
        protected _createRootWidget(): qx.ui.mobile.core.Widget;

    }
}
declare module qx.application {
    class Native extends qx.core.Object implements qx.application.IApplication {
        main(): void;
        finalize(): void;
        close(): String | null;
        terminate(): void;

    }
}
declare module qx.application {
    class AbstractGui extends qx.core.Object implements qx.application.IApplication {
        main(): void;
        finalize(): void;
        close(): String | null;
        terminate(): void;
        tr(messageId: string, ...varargs: any[]): any;
        trn(singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        trc(hint: string, messageId: string, ...varargs: any[]): any;
        trnc(hint: string, singularMessageId: string, pluralMessageId: string, count: number, ...varargs: any[]): any;
        marktr(messageId: string): string;
        protected _createRootWidget(): qx.ui.core.Widget;
        getRoot(): qx.ui.core.Widget;
        render(): void;

    }
}
declare module qx.application {
    class Routing implements qx.core.IDisposable {
        dispose(): void;
        init(defaultPath?: string): void;
        protected _getPathOrFallback(path: string, defaultPath?: string): string;
        onGet(route: string | null, handler: Function, scope: any): string;
        on(route: string | null, handler: Function, scope: any): string;
        onPost(route: string | null, handler: Function, scope: any): string;
        onPut(route: string | null, handler: Function, scope: any): string;
        onDelete(route: string | null, handler: Function, scope: any): string;
        onAny(route: string | null, handler: Function, scope: any): string;
        remove(id: string): void;
        protected _executeGet(path: string, customData: any, fromEvent: any): void;
        executeGet(path: string, customData: any): void;
        execute(path: string, customData: any): void;
        executePost(path: string, params: IMap, customData: any): void;
        executePut(path: string, params: IMap, customData: any): void;
        executeDelete(path: string, params: IMap, customData: any): void;
        getState(): string;
        back(customData?: IMap): void;

    }
}
declare module qx.application {
    interface IApplication {
        main(): void;
        finalize(): void;
        close(): String | null;
        terminate(): void;

    }
}
declare module qx.application {
    class Basic extends qx.core.Object implements qx.application.IApplication {
        main(): void;
        finalize(): void;
        close(): String | null;
        terminate(): void;

    }
}
declare module qx {
    class Interface {
        static define(name: string, config?: IMap): qx.Interface;
        static getByName(name: string): qx.Class;
        static isDefined(name: string): boolean;
        static getTotalNumber(): number;
        static flatten(ifaces?: qx.Interface[]): qx.data.Array;
        static assertObject(object: qx.core.Object, iface: qx.Interface): void;
        static assert(clazz: qx.Class, iface: qx.Interface, wrap?: boolean): void;
        static objectImplements(object: qx.core.Object, iface: qx.Interface): boolean;
        static classImplements(clazz: qx.Class, iface: qx.Interface): boolean;
        static genericToString(): string;

    }
}
declare module qx.data {
    class SingleValueBinding {
        static bind(sourceObject: qx.core.Object, sourcePropertyChain: string, targetObject: qx.core.Object, targetPropertyChain: string, options?: IMap): any;
        static updateTarget(sourceObject: qx.core.Object, sourcePropertyChain: string, targetObject: qx.core.Object, targetPropertyChain: string, options: IMap): void;
        static resolvePropertyChain(o: qx.core.Object, propertyChain: string): any | undefined;
        static removeBindingFromObject(sourceObject: qx.core.Object, id: any): void;
        static removeAllBindingsForObject(object: qx.core.Object): void;
        static removeRelatedBindings(object: qx.core.Object, relatedObject: qx.core.Object): void;
        static getAllBindingsForObject(object: qx.core.Object): qx.data.Array;
        static removeAllBindings(): void;
        static getAllBindings(): IMap;
        static showBindingInLog(object: qx.core.Object, id: any): void;
        static showAllBindingsInLog(): void;

    }
}
declare module qx.data.marshal {
    interface IMarshaler {
        toClass(data: any, includeBubbleEvents: boolean): void;
        toModel(data: any): qx.core.Object;

    }
}
declare module qx.data.marshal {
    interface IMarshalerDelegate {
        ignore(properties: string, parentProperty: string | null, depth: number): boolean;
        getPropertyMapping(property: string, properties: string): string;
        getModelClass(properties: string, object: IMap, parentProperty: string | null, depth: number): qx.Class | null;
        getModelSuperClass(properties: string, parentProperty: string | null, depth: number): qx.Class | null;
        getModelMixins(properties: string, parentProperty: string | null, depth: number): qx.data.Array | qx.Mixin | null;
        getValidationRule(properties: string, propertyName: string): Function | null;
        getArrayClass(parentProperty: string | null, depth: number): qx.Class | null;
        getJsonHash(data: any, includeBubbleEvents?: boolean): string;

    }
}
declare module qx.data.marshal {
    class Json extends qx.core.Object implements qx.data.marshal.IMarshaler {
        toClass(data: any, includeBubbleEvents: boolean): void;
        toModel(data: any): qx.core.Object;
        constructor(delegate?: any);
        static createModel(data: any, includeBubbleEvents: boolean): qx.core.Object;
        static legacyJsonHash(): void;

    }
}
declare module qx.data.marshal {
    class MEventBubbling {
        protected _applyEventPropagation(value: any, old: any, name: string): void;
        protected _registerEventChaining(value: any, old: any, name: string): void;

    }
}
declare module qx.data {
    interface IListData {
        getItem(index: number): any;
        setItem(index: number, item: any): void;
        splice(startIndex: number, amount: number, ...varargs: any[]): qx.data.Array;
        contains(item: any): boolean;
        getLength(): number;
        toArray(): qx.data.Array;

    }
}
declare module qx.data {
    class MBinding {
        bind(sourcePropertyChain: string, targetObject: qx.core.Object, targetProperty?: string, options?: IMap): any;
        removeBinding(id: any): void;
        removeRelatedBindings(relatedObject: qx.core.Object): void;
        removeAllBindings(): void;
        getBindings(): qx.data.Array;

    }
}
declare module qx.data {
    class Array extends qx.core.Object implements qx.data.IListData {
        getItem(index: number): any;
        setItem(index: number, item: any): void;
        splice(startIndex: number, amount: number, ...varargs: any[]): qx.data.Array;
        contains(item: any): boolean;
        getLength(): number;
        toArray(): qx.data.Array;
        protected _applyEventPropagation(value: any, old: any, name: string): void;
        protected _registerEventChaining(value: any, old: any, name: string): void;
        constructor(param?: any);
        concat(array: qx.data.Array | null): qx.data.Array;
        join(connector: string): string;
        pop(): any;
        push(...varargs: any[]): number;
        reverse(): void;
        shift(): any;
        slice(from: number, to?: number): qx.data.Array;
        replace(src: qx.data.Array | null): void;
        sort(func: Function): void;
        unshift(...varargs: any[]): number;
        indexOf(item: any): number;
        lastIndexOf(item: any): number;
        includes(item: any): boolean;
        copy(): qx.data.Array;
        insertAt(index: number, item: any): void;
        insertBefore(before: any, item: any): void;
        insertAfter(after: any, item: any): void;
        removeAt(index: number): any;
        removeAll(): qx.data.Array;
        append(array: qx.data.Array | null): void;
        exclude(array: qx.data.Array): void;
        remove(item: any): any;
        equals(array: qx.data.Array): boolean;
        sum(): number;
        max(): any;
        min(): any;
        forEach(callback: Function, context?: any): void;
        filter(callback: Function, self?: any): qx.data.Array;
        map(callback: Function, self?: any): qx.data.Array;
        find(callback: Function, self?: any): any;
        some(callback: Function, self?: any): boolean;
        every(callback: Function, self?: any): boolean;
        reduce(callback: Function, initValue?: any): any;
        reduceRight(callback: Function, initValue?: any): any;
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;
        getAutoDisposeItems(): boolean;
        isAutoDisposeItems(): boolean;
        setAutoDisposeItems(value: boolean): void;
        resetAutoDisposeItems(): void;

    }
}
declare module qx.data.controller {
    class CheckedList extends qx.data.controller.List {
        constructor(model?: qx.data.Array, widget?: qx.ui.core.Widget, path?: string);
        protected _applyChecked(): void;
        protected _updateChecked(): void;
        setSelection(value: qx.data.Array): void;
        getSelection(): qx.data.Array;
        resetSelection(): void;
        getModel(): qx.data.IListData;
        setModel(value: qx.data.IListData): void;
        resetModel(): void;
        getTarget(): any;
        setTarget(value: any): void;
        resetTarget(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getAllowNull(): boolean;
        isAllowNull(): boolean;
        setAllowNull(value: boolean): void;
        resetAllowNull(): void;
        getNullValueTitle(): string;
        setNullValueTitle(value: string): void;
        resetNullValueTitle(): void;
        getNullValueIcon(): string;
        setNullValueIcon(value: string): void;
        resetNullValueIcon(): void;
        getChecked(): qx.data.Array;
        setChecked(value: qx.data.Array): void;
        resetChecked(): void;
        getCheckedLabelPath(): string;
        setCheckedLabelPath(value: string): void;
        resetCheckedLabelPath(): void;
        getCheckedIconPath(): string;
        setCheckedIconPath(value: string): void;
        resetCheckedIconPath(): void;
        getCheckedLabelOptions(): any;
        setCheckedLabelOptions(value: any): void;
        resetCheckedLabelOptions(): void;
        getCheckedIconOptions(): any;
        setCheckedIconOptions(value: any): void;
        resetCheckedIconOptions(): void;

    }
}
declare module qx.data.controller.website {
    class List extends qx.core.Object {
        constructor(model?: qx.data.IListData | null, target?: HTMLElement, templateId?: string);
        protected _applyModel(): void;
        protected _applyTarget(): void;
        protected _applyTemplateId(): void;
        protected _applyDelegate(): void;
        update(): void;
        getModel(): qx.data.Array;
        setModel(value: qx.data.Array): void;
        resetModel(): void;
        getTarget(): HTMLElement;
        setTarget(value: HTMLElement): void;
        resetTarget(): void;
        getTemplateId(): any;
        setTemplateId(value: any): void;
        resetTemplateId(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.data.controller {
    interface ISelection {
        setSelection(value: qx.data.IListData): void;
        getSelection(): qx.data.IListData;
        resetSelection(): void;

    }
}
declare module qx.data.controller {
    class MSelection {
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array | null): void;
        protected _changeTargetSelection(): void;
        protected _addChangeTargetListener(value: qx.ui.core.Widget | null, old: qx.ui.core.Widget | null): void;
        protected _updateSelection(): void;
        protected _startSelectionModification(): void;
        protected _endSelectionModification(): void;
        protected _inSelectionModification(): boolean;
        getSelection(): qx.data.Array;
        setSelection(value: qx.data.Array): void;
        resetSelection(): void;

    }
}
declare module qx.data.controller {
    class Object extends qx.core.Object {
        constructor(model?: qx.core.Object);
        protected _applyModel(value: qx.core.Object | null, old: qx.core.Object | null): void;
        addTarget(targetObject: qx.core.Object, targetProperty: string, sourceProperty: string, bidirectional?: boolean, options?: IMap, reverseOptions?: IMap): void;
        removeTarget(targetObject: qx.core.Object, targetProperty: string, sourceProperty: string): void;
        getModel(): qx.core.Object;
        setModel(value: qx.core.Object): void;
        resetModel(): void;

    }
}
declare module qx.data.controller {
    interface IControllerDelegate {
        configureItem(item: any): void;
        filter(data: any): boolean;
        createItem(): qx.ui.core.Widget;
        bindItem(controller: any, item: qx.ui.core.Widget, id: any): void;

    }
}
declare module qx.data.controller {
    class List extends qx.core.Object implements qx.data.controller.ISelection {
        setSelection(value: qx.data.IListData): void;
        getSelection(): qx.data.IListData;
        resetSelection(): void;
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array | null): void;
        protected _changeTargetSelection(): void;
        protected _addChangeTargetListener(value: qx.ui.core.Widget | null, old: qx.ui.core.Widget | null): void;
        protected _updateSelection(): void;
        protected _startSelectionModification(): void;
        protected _endSelectionModification(): void;
        protected _inSelectionModification(): boolean;
        constructor(model?: qx.data.Array, target?: qx.ui.core.Widget, labelPath?: string);
        update(): void;
        protected _applyDelegate(value: qx.core.Object | null, old: qx.core.Object | null): void;
        protected _applyIconOptions(value: IMap | null, old: IMap | null): void;
        protected _applyLabelOptions(value: IMap | null, old: IMap | null): void;
        protected _applyIconPath(value: string | null, old: string | null): void;
        protected _applyLabelPath(value: string | null, old: string | null): void;
        protected _applyAllowNull(): void;
        protected _applyNullValueTitle(): void;
        protected _applyNullValueIcon(): void;
        protected _applyModel(value: qx.data.Array | null, old: qx.data.Array | null): void;
        protected _applyTarget(value: qx.ui.core.Widget | null, old: qx.ui.core.Widget | null): void;
        syncWidget(): void;
        protected _createItem(): qx.ui.form.ListItem;
        getVisibleModels(): qx.data.Array;
        protected _bindListItem(item: qx.ui.form.ListItem, index: number): void;
        bindDefaultProperties(item: qx.ui.form.ListItem, index: number): void;
        bindProperty(sourcePath: string | null, targetProperty: string, options: IMap | null, targetWidget: qx.ui.core.Widget, index: number): void;
        bindPropertyReverse(targetPath: string | null, sourcePath: string, options: IMap | null, sourceWidget: qx.ui.core.Widget, index: number): void;
        protected _onBindingSet(index: number, sourceObject: qx.core.Object, targetObject: qx.core.Object): void;
        protected _removeBindingsFrom(item: number): void;
        protected _setConfigureItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        protected _setBindItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        protected _setCreateItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        protected _setFilter(value: Function | null, old: Function | null): void;
        getModel(): qx.data.IListData;
        setModel(value: qx.data.IListData): void;
        resetModel(): void;
        getTarget(): any;
        setTarget(value: any): void;
        resetTarget(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;
        getAllowNull(): boolean;
        isAllowNull(): boolean;
        setAllowNull(value: boolean): void;
        resetAllowNull(): void;
        getNullValueTitle(): string;
        setNullValueTitle(value: string): void;
        resetNullValueTitle(): void;
        getNullValueIcon(): string;
        setNullValueIcon(value: string): void;
        resetNullValueIcon(): void;

    }
}
declare module qx.data.controller {
    class Form extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(model?: qx.core.Object | null, target?: qx.ui.form.Form | null, selfUpdate?: boolean);
        addBindingOptions(name: string, model2target: IMap, target2model: IMap): void;
        createModel(includeBubbleEvents: boolean): qx.core.Object;
        updateModel(): void;
        protected _applyTarget(): void;
        protected _applyModel(): void;
        getModel(): qx.core.Object;
        setModel(value: qx.core.Object): void;
        resetModel(): void;
        getTarget(): qx.ui.form.Form;
        setTarget(value: qx.ui.form.Form): void;
        resetTarget(): void;

    }
}
declare module qx.data.controller {
    class Tree extends qx.core.Object implements qx.data.controller.ISelection {
        setSelection(value: qx.data.IListData): void;
        getSelection(): qx.data.IListData;
        resetSelection(): void;
        setValue(selection: qx.data.IListData | null): null;
        getValue(): qx.data.IListData;
        resetValue(): void;
        protected _applySelection(value: qx.data.Array, old: qx.data.Array | null): void;
        protected _changeTargetSelection(): void;
        protected _addChangeTargetListener(value: qx.ui.core.Widget | null, old: qx.ui.core.Widget | null): void;
        protected _updateSelection(): void;
        protected _startSelectionModification(): void;
        protected _endSelectionModification(): void;
        protected _inSelectionModification(): boolean;
        constructor(model?: qx.core.Object, target?: qx.ui.tree.Tree, childPath?: string, labelPath?: string);
        protected _applyDelegate(value: qx.core.Object | null, old: qx.core.Object | null): void;
        protected _applyIconOptions(value: IMap | null, old: IMap | null): void;
        protected _applyLabelOptions(value: IMap | null, old: IMap | null): void;
        protected _applyTarget(value: qx.ui.tree.Tree | null, old: qx.ui.tree.Tree | null): void;
        protected _applyModel(value: qx.core.Object | null, old: qx.core.Object | null): void;
        protected _applyChildPath(value: string | null, old: string | null): void;
        protected _applyIconPath(value: string | null, old: string | null): void;
        protected _applyLabelPath(value: string | null, old: string | null): void;
        protected _createItem(): qx.ui.tree.core.AbstractTreeItem;
        bindProperty(sourcePath: string | null, targetPath: string, options: IMap | null, targetWidget: qx.ui.tree.core.AbstractTreeItem, modelNode: any): void;
        bindPropertyReverse(targetPath: string | null, sourcePath: string, options: IMap | null, sourceWidget: qx.ui.tree.core.AbstractTreeItem, modelNode: any): void;
        bindDefaultProperties(treeNode: qx.ui.tree.core.AbstractTreeItem, modelNode: qx.core.Object): void;
        protected _setConfigureItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        protected _setCreateItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        protected _setBindItem(value: qx.data.controller.Object, old: qx.data.controller.Object): void;
        getModel(): qx.core.Object;
        setModel(value: qx.core.Object): void;
        resetModel(): void;
        getTarget(): any;
        setTarget(value: any): void;
        resetTarget(): void;
        getChildPath(): string;
        setChildPath(value: string): void;
        resetChildPath(): void;
        getLabelPath(): string;
        setLabelPath(value: string): void;
        resetLabelPath(): void;
        getIconPath(): string;
        setIconPath(value: string): void;
        resetIconPath(): void;
        getLabelOptions(): any;
        setLabelOptions(value: any): void;
        resetLabelOptions(): void;
        getIconOptions(): any;
        setIconOptions(value: any): void;
        resetIconOptions(): void;
        getDelegate(): any;
        setDelegate(value: any): void;
        resetDelegate(): void;

    }
}
declare module qx.data.store {
    class Jsonp extends qx.data.store.Json {
        constructor(url?: string, delegate?: any, callbackParam?: string);
        getCallbackParam(): string;
        setCallbackParam(value: string): void;
        resetCallbackParam(): void;
        getCallbackName(): string;
        setCallbackName(value: string): void;
        resetCallbackName(): void;

    }
}
declare module qx.data.store {
    interface IStoreDelegate extends qx.data.marshal.IMarshalerDelegate {
        manipulateData(data: any): any;
        configureRequest(request: any): void;

    }
}
declare module qx.data.store {
    class Json extends qx.core.Object {
        constructor(url?: string | null, delegate?: any);
        protected _applyUrl(): void;
        protected _getRequest(): any;
        protected _setRequest(request: any): void;
        protected _createRequest(url: string): void;
        protected _onChangePhase(ev: qx.event.type.Data): void;
        protected _onFail(ev: qx.event.type.Event): void;
        protected _onParseError(ev: qx.event.type.Data): void;
        protected _onSuccess(ev: qx.event.type.Event): void;
        reload(): void;
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;
        getState(): any;
        setState(value: any): void;
        resetState(): void;
        getUrl(): string;
        setUrl(value: string): void;
        resetUrl(): void;

    }
}
declare module qx.data.store {
    class Rest extends qx.core.Object {
        constructor(resource?: qx.io.rest.Resource, actionName?: string, delegate?: any);
        getResource(): qx.io.rest.Resource;
        setResource(value: qx.io.rest.Resource): void;
        resetResource(): void;
        getActionName(): string;
        setActionName(value: string): void;
        resetActionName(): void;
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;

    }
}
declare module qx.data.store {
    class Offline extends qx.core.Object {
        constructor(key?: string, storage?: string, delegate?: any);
        protected _applyModel(): void;
        protected _initializeModel(): void;
        protected _setModel(data: any): void;
        getKey(): string;
        getModel(): any;
        setModel(value: any): void;
        resetModel(): void;

    }
}
declare module qx.data {
    class Conversion {
        static toNumber(value: any): number;
        static toBoolean(value: any): boolean;

    }
}
declare module qx.event.handler {
    class Touch extends qx.event.handler.TouchCore implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _onTouchEvent(domEvent: qx.event.type.Event): void;

    }
}
declare module qx.event.handler {
    class Focus extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        focus(element: qx.event.handler.Element): void;
        activate(element: qx.event.handler.Element): void;
        blur(element: qx.event.handler.Element): void;
        deactivate(element: qx.event.handler.Element): void;
        tryActivate(element: qx.event.handler.Element): void;
        protected _applyActive(): void;
        protected _applyFocus(): void;
        getActive(): any;
        setActive(value: any): void;
        resetActive(): void;
        getFocus(): any;
        setFocus(value: any): void;
        resetFocus(): void;

    }
}
declare module qx.event.handler {
    class PointerCore implements qx.core.IDisposable {
        dispose(): void;
        constructor(target?: HTMLElement, emitter?: qx.event.Emitter);
        protected _initPointerObserver(): void;
        protected _initObserver(callback: Function, useEmitter: boolean): void;
        protected _onPointerEvent(domEvent: qx.event.type.Event): void;
        protected _onTouchEvent(domEvent: qx.event.type.Event): void;
        protected _onMouseEvent(domEvent: qx.event.type.Event): void;
        protected _determineActiveTouches(type: string, changedTouches: qx.data.Array): void;
        protected _isSimulatedMouseEvent(x: number, y: number): boolean;
        protected _stopObserver(): void;
        protected _fireEvent(domEvent: qx.event.type.Event, type?: string, target?: HTMLElement): qx.Promise | null;

    }
}
declare module qx.event.handler {
    class ElementResize extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _onInterval(e: qx.event.type.Data): void;

    }
}
declare module qx.event.handler {
    class Input extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event.handler {
    class Capture extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event.handler {
    class Keyboard extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _fireInputEvent(domEvent: qx.event.type.Event, charCode: number): qx.Promise | null;
        protected _fireSequenceEvent(domEvent: qx.event.type.Event, type: string, keyIdentifier: string): qx.Promise | null;
        protected _initKeyObserver(): void;
        protected _stopKeyObserver(): void;
        protected _idealKeyHandler(keyCode: string, charCode: string, eventType: string, domEvent: qx.event.handler.Element): qx.Promise | null;
        protected _identifierToKeyCode(keyIdentifier: string): number;

    }
}
declare module qx.event.handler {
    class Object extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event.handler {
    class UserAction extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        constructor(manager?: qx.event.Manager);

    }
}
declare module qx.event.handler {
    class GestureCore implements qx.core.IDisposable {
        dispose(): void;
        constructor(target?: HTMLElement, emitter?: qx.event.Emitter);
        protected _initObserver(): void;
        protected _stopObserver(): void;
        checkAndFireGesture(domEvent: qx.event.type.Pointer, type?: string, target?: HTMLElement): void;
        gestureBegin(domEvent: qx.event.type.Event, target: HTMLElement): void;
        gestureMove(domEvent: qx.event.type.Event, target: HTMLElement): void;
        protected _hasIntermediaryHandler(target: HTMLElement): boolean;
        gestureFinish(domEvent: qx.event.type.Event, target: HTMLElement): void;
        stopMomentum(id: number): void;
        gestureCancel(id: number): void;
        updateGestureTarget(id: string, target: HTMLElement): void;
        protected _calcAngle(): number;
        protected _calcDistance(): number;
        protected _isBelowTapMaxDistance(domEvent: qx.event.type.Event): boolean | null;
        protected _getDeltaCoordinates(domEvent: qx.event.type.Event): IMap;
        protected _fireEvent(domEvent: qx.event.type.Event, type: string, target?: HTMLElement): qx.Promise | null;
        protected _onDblClick(domEvent: qx.event.type.Event): void;
        protected _isTouchPadDetectionEnabled(): boolean;
        protected _fireRoll(domEvent: qx.event.type.Event, type: string, target: HTMLElement): void;

    }
}
declare module qx.event.handler {
    class Iframe extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event.handler {
    class Video extends qx.core.Object implements qx.event.IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event.handler {
    class DragDrop extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        addType(type: string): void;
        addAction(action: string): void;
        supportsType(type: string): boolean;
        supportsAction(type: string): boolean;
        setDropAllowed(isAllowed: boolean): void;
        getData(type: string): any;
        getDataAsync(type: string): qx.Promise;
        getCurrentAction(): string;
        getDragTarget(): qx.ui.core.Widget;
        addData(type: string, data: any): void;
        getCurrentType(): string;
        isSessionActive(): boolean;
        clearSession(): qx.Promise | null;
        protected _onLongtap(e: qx.event.type.Tap): void;
        protected _start(e: qx.event.type.Pointer): boolean;
        protected _onPointerdown(e: qx.event.type.Pointer): void;
        protected _onPointermove(e: qx.event.type.Pointer): void;
        protected _getDelta(e: qx.event.type.Pointer): IMap;
        protected _onPointerup(e: qx.event.type.Pointer): void;
        protected _onRoll(e: qx.event.type.Roll): void;
        protected _onWindowBlur(e: qx.event.type.Event): void;
        protected _onKeyDown(e: qx.event.type.KeySequence): void;
        protected _onKeyUp(e: qx.event.type.KeySequence): void;
        protected _onKeyPress(e: qx.event.type.KeySequence): void;
        getCursor(): qx.ui.core.Widget;
        setCursor(value: qx.ui.core.Widget): void;
        resetCursor(): void;

    }
}
declare module qx.event.handler {
    class Application extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        static onScriptLoaded(): void;
        static onAppInstanceInitialized(): void;
        isApplicationReady(): boolean;
        isApplicationInitialized(): boolean;
        protected _initObserver(): void;
        protected _stopObserver(): void;
        protected _onNativeLoad(): void;
        protected _onNativeUnload(): void;

    }
}
declare module qx.event.handler {
    class Window extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _initWindowObserver(): void;
        protected _stopWindowObserver(): void;
        protected _onNative(): void;

    }
}
declare module qx.event.handler {
    class Pointer extends qx.event.handler.PointerCore implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);

    }
}
declare module qx.event.handler {
    class Gesture extends qx.event.handler.GestureCore implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        getWindow(): qx.event.handler.Window;

    }
}
declare module qx.event.handler {
    class Mouse extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        preventNextClick(): void;
        protected _initButtonObserver(): void;
        protected _initMoveObserver(): void;
        protected _initWheelObserver(): void;
        protected _stopButtonObserver(): void;
        protected _stopMoveObserver(): void;
        protected _stopWheelObserver(): void;

    }
}
declare module qx.event.handler {
    class Appear extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        static refresh(): void;

    }
}
declare module qx.event.handler {
    class Element extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);

    }
}
declare module qx.event.handler {
    class OrientationCore implements qx.core.IDisposable {
        dispose(): void;
        constructor(targetWindow?: Window, emitter?: qx.event.Emitter);
        protected _initObserver(): void;
        protected _stopObserver(): void;
        protected _onNative(domEvent: qx.event.type.Event): void;

    }
}
declare module qx.event.handler {
    class Offline extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _initObserver(): void;
        protected _stopObserver(): void;
        isOnline(): boolean;

    }
}
declare module qx.event.handler {
    class TouchCore implements qx.core.IDisposable {
        dispose(): void;
        constructor(target?: HTMLElement, emitter?: qx.event.Emitter);
        protected _initTouchObserver(): void;
        protected _stopTouchObserver(): void;
        protected _onTouchEvent(domEvent: qx.event.type.Event): void;
        protected _getScalingDistance(touch0: qx.event.type.Event, touch1: qx.event.type.Event): number;
        protected _getRotationAngle(touch0: qx.event.type.Event, touch1: qx.event.type.Event): number;
        protected _calcTouchesDelta(touches: qx.data.Array): qx.data.Array;
        protected _calcSingleTouchDelta(touch: qx.event.type.Event): IMap;
        protected _commonTouchEventHandler(domEvent: qx.event.type.Event, type?: string): void;
        protected _detectTouchesByPointer(domEvent: qx.event.type.Event, type?: string): qx.data.Array;
        protected _mapPointerEvent(type: string): string;
        protected _getTarget(domEvent: qx.event.type.Event): HTMLElement;
        protected _fireEvent(domEvent: qx.event.type.Event, type?: string, target?: HTMLElement): void;

    }
}
declare module qx.event.handler {
    class Transition extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);

    }
}
declare module qx.event.handler {
    class Orientation extends qx.core.Object implements qx.event.IEventHandler, qx.core.IDisposable {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;
        dispose(): void;
        constructor(manager?: qx.event.Manager);
        protected _initObserver(): void;
        protected _stopObserver(): void;
        protected _onOrientationChange(domEvent: qx.event.type.Event): void;

    }
}
declare module qx.event {
    class Emitter {
        on(name: string, listener: Function, ctx?: any): number;
        once(name: string, listener: Function, ctx?: any): number;
        off(name: string, listener: Function, ctx?: any): number | null;
        offById(id: number): number | null;
        addListener(name: string, listener: Function, ctx?: any): number;
        addListenerOnce(name: string, listener: Function, ctx?: any): number;
        removeListener(name: string, listener: Function, ctx?: any): void;
        removeListenerById(id: number): void;
        emit(name: string, data?: any): void;
        getListeners(): IMap;
        getEntryById(id: number): IMap | undefined;

    }
}
declare module qx.event {
    class Messaging {
        on(channel: string, type: string | null, handler: Function, scope?: any): string;
        onAny(type: string | null, handler: Function, scope?: any): string;
        protected _addListener(channel: string, type: string | null, handler: Function, scope?: any): string;
        remove(id: string): void;
        has(channel: string, path: string): boolean;
        emit(channel: string, path: string, params: IMap, customData: any): void;
        protected _emit(channel: string, path: string, params: IMap, customData: any): void;
        protected _emitListeners(channel: string, path: string, listeners: IMap[], params: IMap, customData: any): boolean;
        protected _emitRoute(channel: string, path: string, listener: IMap, params: IMap, customData: any): boolean;

    }
}
declare module qx.event {
    class AcceleratingTimer extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        start(): void;
        stop(): void;
        protected _onInterval(): void;
        getInterval(): number;
        setInterval(value: number): void;
        resetInterval(): void;
        getFirstInterval(): number;
        setFirstInterval(value: number): void;
        resetFirstInterval(): void;
        getMinimum(): number;
        setMinimum(value: number): void;
        resetMinimum(): void;
        getDecrease(): number;
        setDecrease(value: number): void;
        resetDecrease(): void;

    }
}
declare module qx.event.util {
    class Keyboard {
        static keyCodeToIdentifier(keyCode: number): string;
        static charCodeToIdentifier(charCode: string): string;
        static isIdentifiableKeyCode(keyCode: string): boolean;
        static isNonPrintableKeyCode(keyCode: string): boolean;
        static isValidKeyIdentifier(keyIdentifier: string): boolean;
        static isPrintableKeyIdentifier(keyIdentifier: string): boolean;

    }
}
declare module qx.event.dispatch {
    class DomBubbling extends qx.event.dispatch.AbstractBubbling {

    }
}
declare module qx.event.dispatch {
    class MouseCapture extends qx.event.dispatch.AbstractBubbling {
        constructor(manager?: qx.event.Manager, registration?: qx.event.Registration);
        activateCapture(element: HTMLElement, containerCapture?: boolean): void;
        getCaptureElement(): HTMLElement | null;
        releaseCapture(): void;

    }
}
declare module qx.event.dispatch {
    class Direct implements qx.event.IEventDispatcher {
        canDispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): boolean;
        dispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): qx.Promise | null;
        constructor(manager?: qx.event.Manager);

    }
}
declare module qx.event.dispatch {
    class AbstractBubbling implements qx.event.IEventDispatcher {
        canDispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): boolean;
        dispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): qx.Promise | null;
        constructor(manager?: qx.event.Manager);
        protected _getParent(target: any): any;

    }
}
declare module qx.event {
    interface IEventDispatcher {
        canDispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): boolean;
        dispatchEvent(target: HTMLElement | null, event: qx.event.type.Event, type: string): qx.Promise | null;

    }
}
declare module qx.event {
    class Registration {
        static getManager(target: any): qx.event.Manager;
        static removeManager(mgr: qx.event.Manager): void;
        static addListener(target: any, type: string, listener: Function, self?: any, capture?: boolean): any;
        static removeListener(target: any, type: string, listener: Function, self?: any, capture?: boolean): boolean;
        static removeListenerById(target: any, id: any): boolean;
        static removeAllListeners(target: any): boolean;
        static deleteAllListeners(target: any): void;
        static hasListener(target: any, type: string, capture?: boolean): boolean;
        static serializeListeners(target: any): IMap[];
        static createEvent(type: string, clazz?: any, args?: qx.data.Array): qx.event.type.Event;
        static dispatchEvent(target: any, event: qx.event.type.Event): boolean | qx.Promise;
        static fireEvent(target: any, type: string, clazz?: qx.Class, args?: qx.data.Array): boolean | qx.Promise;
        static fireEventAsync(target: any, type: string, clazz?: qx.Class, args?: qx.data.Array): qx.Promise;
        static fireNonBubblingEvent(target: any, type: string, clazz?: qx.Class, args?: qx.data.Array): boolean;
        static addHandler(handler: qx.event.IEventHandler): void;
        static getHandlers(): qx.event.IEventHandler[];
        static addDispatcher(dispatcher: qx.event.IEventDispatcher, priority: number): void;
        static getDispatchers(): qx.event.IEventDispatcher[];

    }
}
declare module qx.event.message {
    class Bus extends qx.core.Object {
        static getInstance(): Bus;
        static getSubscriptions(): any;
        static subscribe(param0: any, subscriber: Function, context: any): boolean;
        static subscribeOnce(param0: any, subscriber: Function, context: any): boolean;
        static checkSubscription(topic: string | null, subscriber: Function, context: any): boolean;
        static unsubscribe(topic: string | null, subscriber: Function, context: any): boolean;
        static dispatch(message: qx.event.message.Message): boolean;
        static dispatchByName(name: string, data: any): boolean;
        removeAllSubscriptions(): void;

    }
}
declare module qx.event.message {
    class Message extends qx.core.Object {
        constructor(name?: string, data?: any);
        getName(): string;
        setName(value: string): void;
        resetName(): void;
        getData(): any;
        setData(value: any): void;
        resetData(): void;
        getSender(): any;
        setSender(value: any): void;
        resetSender(): void;

    }
}
declare module qx.event {
    class Timer extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        constructor(interval?: number);
        static once(func: Function, obj: any, timeout: number): qx.event.Timer;
        protected _applyInterval(value: any, old: any): void;
        protected _applyEnabled(value: any, old: any): void;
        start(): void;
        startWith(interval: number): void;
        stop(): void;
        restart(): void;
        restartWith(interval: number): void;
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;
        getEnabled(): boolean;
        isEnabled(): boolean;
        setEnabled(value: boolean): void;
        resetEnabled(): void;
        getInterval(): number;
        setInterval(value: number): void;
        resetInterval(): void;

    }
}
declare module qx.event {
    class Idle extends qx.core.Object implements qx.core.IDisposable {
        dispose(): void;
        static getInstance(): Idle;
        protected _applyTimeoutInterval(): void;
        protected _onInterval(): void;
        getTimeoutInterval(): number;
        setTimeoutInterval(value: number): void;
        resetTimeoutInterval(): void;

    }
}
declare module qx.event {
    class GlobalError {
        static setErrorHandler(callback?: Function, context?: any): void;
        static observeMethod(method: Function): Function;
        static handleError(ex: qx.core.WindowError | null): void;

    }
}
declare module qx.event.type {
    class Touch extends qx.event.type.Dom {
        getAllTouches(): any[];
        getTargetTouches(): any[];
        getChangedTargetTouches(): any[];
        isMultiTouch(): boolean;
        getScale(): number;
        getRotation(): number;
        getDelta(): qx.data.Array;
        getDocumentLeft(touchIndex?: number): number;
        getDocumentTop(touchIndex?: number): number;
        getScreenLeft(touchIndex?: number): number;
        getScreenTop(touchIndex?: number): number;
        getViewportLeft(touchIndex?: number): number;
        getViewportTop(touchIndex?: number): number;
        getIdentifier(touchIndex?: number): number;
        protected _isTouchEnd(): boolean;

    }
}
declare module qx.event.type {
    class GeoPosition extends qx.event.type.Event {
        getTimestamp(): number;
        setTimestamp(value: number): void;
        resetTimestamp(): void;
        getLatitude(): number;
        setLatitude(value: number): void;
        resetLatitude(): void;
        getLongitude(): number;
        setLongitude(value: number): void;
        resetLongitude(): void;
        getAltitude(): number;
        setAltitude(value: number): void;
        resetAltitude(): void;
        getAccuracy(): number;
        setAccuracy(value: number): void;
        resetAccuracy(): void;
        getAltitudeAccuracy(): number;
        setAltitudeAccuracy(value: number): void;
        resetAltitudeAccuracy(): void;
        getHeading(): any;
        setHeading(value: any): void;
        resetHeading(): void;
        getSpeed(): any;
        setSpeed(value: any): void;
        resetSpeed(): void;

    }
}
declare module qx.event.type {
    class Focus extends qx.event.type.Event {

    }
}
declare module qx.event.type {
    class Swipe extends qx.event.type.Pointer {
        getStartTime(): number;
        getDuration(): number;
        getAxis(): string;
        getDirection(): string;
        getVelocity(): number;
        getDistance(): number;

    }
}
declare module qx.event.type {
    class Rotate extends qx.event.type.Pointer {
        getAngle(): number;

    }
}
declare module qx.event.type {
    class MouseWheel extends qx.event.type.Mouse {
        getWheelDelta(axis?: string): number;

    }
}
declare module qx.event.type {
    class Event extends qx.core.Object {
        init(canBubble?: boolean, cancelable?: boolean): qx.event.type.Event;
        stop(): void;
        stopPropagation(): void;
        getPropagationStopped(): boolean;
        preventDefault(): void;
        getDefaultPrevented(): boolean;
        getType(): string;
        setType(type: string): void;
        getEventPhase(): number;
        setEventPhase(eventPhase: number): void;
        getTimeStamp(): number;
        getTarget(): HTMLElement;
        setTarget(target: HTMLElement): void;
        getCurrentTarget(): HTMLElement;
        setCurrentTarget(currentTarget: HTMLElement): void;
        getRelatedTarget(): HTMLElement;
        setRelatedTarget(relatedTarget: HTMLElement): void;
        getOriginalTarget(): HTMLElement;
        setOriginalTarget(originalTarget: HTMLElement): void;
        getBubbles(): boolean;
        setBubbles(bubbles: boolean): void;
        isCancelable(): boolean;
        setCancelable(cancelable: boolean): void;

    }
}
declare module qx.event.type {
    class KeyInput extends qx.event.type.Dom {
        getCharCode(): number;
        getChar(): string;

    }
}
declare module qx.event.type {
    class Dom extends qx.event.type.Native {
        getModifiers(): number;
        getKeyLockState(): number;
        isCtrlPressed(): boolean;
        isShiftPressed(): boolean;
        isAltPressed(): boolean;
        isMetaPressed(): boolean;
        isCapsLocked(): boolean;
        isNumLocked(): boolean;
        isScrollLocked(): boolean;
        isCtrlOrCommandPressed(): boolean;

    }
}
declare module qx.event.type {
    class Tap extends qx.event.type.Pointer {

    }
}
declare module qx.event.type {
    class KeySequence extends qx.event.type.Dom {
        getKeyIdentifier(): string;
        getKeyCode(): number;
        isPrintable(): boolean;

    }
}
declare module qx.event.type {
    class Native extends qx.event.type.Event {
        protected _cloneNativeEvent(nativeEvent: qx.event.type.Event, clone: any): any;
        getNativeEvent(): qx.event.type.Event;
        setReturnValue(returnValue?: string): void;
        getReturnValue(): String | null;

    }
}
declare module qx.event.type {
    class Data extends qx.event.type.Event {
        getData(): any;
        getOldData(): any;

    }
}
declare module qx.event.type {
    class Roll extends qx.event.type.Pointer {
        getMomentum(): boolean;
        stopMomentum(): void;
        getDelta(): IMap;

    }
}
declare module qx.event.type.dom {
    class Custom {
        constructor(type?: string, domEvent?: qx.event.type.Event, customProps?: IMap);
        protected _createEvent(): qx.event.type.Event;
        protected _initEvent(domEvent: qx.event.type.Event, customProps?: IMap): void;

    }
}
declare module qx.event.type.dom {
    class Pointer extends qx.event.type.dom.Custom {
        static getPointerType(): string;
        static getViewportLeft(): number;
        static getViewportTop(): number;
        static getDocumentLeft(): number;
        static getDocumentTop(): number;
        static getScreenLeft(): number;
        static getScreenTop(): number;
        static normalize(event: qx.event.type.Event): void;

    }
}
declare module qx.event.type {
    class Rest extends qx.event.type.Data {
        getRequest(): qx.io.request.AbstractRequest;
        setRequest(value: qx.io.request.AbstractRequest): void;
        resetRequest(): void;
        getAction(): string;
        setAction(value: string): void;
        resetAction(): void;
        getPhase(): string;
        setPhase(value: string): void;
        resetPhase(): void;
        getId(): number;
        setId(value: number): void;
        resetId(): void;

    }
}
declare module qx.event.type {
    class Track extends qx.event.type.Pointer {
        getDelta(): IMap;

    }
}
declare module qx.event.type {
    class Pinch extends qx.event.type.Pointer {
        getScale(): number;

    }
}
declare module qx.event.type {
    class Pointer extends qx.event.type.Mouse {
        getPointerId(): number;
        getWidth(): number;
        getHeight(): number;
        getPressure(): number;
        getTiltX(): number;
        getTiltY(): number;
        getPointerType(): string;
        isPrimary(): boolean;

    }
}
declare module qx.event.type {
    class Mouse extends qx.event.type.Dom {
        getButton(): string;
        isLeftPressed(): boolean;
        isMiddlePressed(): boolean;
        isRightPressed(): boolean;
        getViewportLeft(): number;
        getViewportTop(): number;
        getDocumentLeft(): number;
        getDocumentTop(): number;
        getScreenLeft(): number;
        getScreenTop(): number;

    }
}
declare module qx.event.type {
    class Drag extends qx.event.type.Event {
        getDocumentLeft(): number;
        getDocumentTop(): number;
        getManager(): qx.event.handler.DragDrop;
        addType(type: string): void;
        addAction(action: string): void;
        supportsType(type: string): boolean;
        supportsAction(action: string): boolean;
        addData(type: string, data: any): void;
        getData(type: string): any;
        getDataAsync(type: string): qx.Promise | any;
        getCurrentType(): string;
        getCurrentAction(): string;
        getCurrentActionAsync(): qx.Promise | string;
        setDropAllowed(isAllowed: boolean): void;
        getDragTarget(): qx.ui.core.Widget;
        stopSession(): void;

    }
}
declare module qx.event.type {
    class Orientation extends qx.event.type.Event {
        getOrientation(): number;
        isLandscape(): boolean;
        isPortrait(): boolean;

    }
}
declare module qx.event {
    class Utils extends qx.core.Object {
        static reject(tracker: any): qx.Promise | null;
        static catch(tracker: any, fn: Function): void;
        static callListener(tracker: any, listener: Function, context?: any, event?: qx.event.type.Event): qx.Promise | null;
        getQxOwner(): qx.core.Object;
        setQxOwner(value: qx.core.Object): void;
        resetQxOwner(): void;
        getQxObjectId(): any;
        setQxObjectId(value: any): void;
        resetQxObjectId(): void;

    }
}
declare module qx.event {
    class Pool extends qx.util.ObjectPool {
        static getInstance(): Pool;
        getSize(): number;
        setSize(value: number): void;
        resetSize(): void;

    }
}
declare module qx.event {
    interface IEventHandler {
        canHandleEvent(target: any, type: string): boolean;
        registerEvent(target: any, type: string, capture: boolean): void;
        unregisterEvent(target: any, type: string, capture: boolean): void;

    }
}
declare module qx.event {
    class Manager implements qx.core.IDisposable {
        dispose(): void;
        constructor(win?: Window, registration?: qx.event.Registration);
        static getNextUniqueId(): string;
        static addGlobalEventMonitor(fn: Function, context?: any): void;
        static removeGlobalEventMonitor(fn: Function): void;
        static resetGlobalEventMonitors(): void;
        static getGlobalEventMonitor(): Function | null;
        static setGlobalEventMonitor(fn?: Function): void;
        getWindow(): Window;
        getWindowId(): string;
        getHandler(clazz: qx.Class): any;
        getDispatcher(clazz: qx.Class): any;
        getListeners(target: any, type: string, capture?: boolean): any;
        getAllListeners(): IMap;
        serializeListeners(target: any): IMap[];
        toggleAttachedEvents(target: any, enable: boolean): void;
        hasListener(target: any, type: string, capture?: boolean): boolean;
        importListeners(target: any, list: IMap): void;
        addListener(target: any, type: string, listener: Function, self?: any, capture?: boolean): string;
        findHandler(target: any, type: string): qx.event.IEventHandler | null;
        removeListener(target: any, type: string, listener: Function, self?: any, capture?: boolean): boolean;
        removeListenerById(target: any, id: string): boolean;
        removeAllListeners(target: any): boolean;
        deleteAllListeners(targetKey: string): void;
        dispatchEvent(target: any, event: qx.event.type.Event): boolean | qx.Promise;
        isBlacklisted(uid: number): boolean;

    }
}
declare module qx {
    class Mixin {
        static define(name: string, config?: IMap): qx.Mixin;
        static checkCompatibility(mixins: qx.Mixin[]): boolean;
        static isCompatible(mixin: qx.Mixin, clazz: qx.Class): boolean;
        static getByName(name: string): qx.Class;
        static isDefined(name: string): boolean;
        static getTotalNumber(): number;
        static flatten(mixins?: qx.Mixin[]): qx.data.Array;
        static baseClassMethod(clazz: qx.Class, mixin: qx.Mixin, methodName: string): Function;
        static genericToString(): string;

    }
}
declare module qx {
    class Bootstrap {
        static getEnvironmentSetting(key: string): any;
        static setEnvironmentSetting(key: string, value: any): void;
        static setRoot(root: any): void;
        static extendClass(clazz: Function, construct: Function, superClass: Function, name: Function, basename: Function): void;
        static addPendingDefer(clazz: qx.Class, cb: Function): void;
        static executePendingDefers(dbClassInfo: any): void;
        static getByName(name: string): qx.Class;
        static objectGetLength(map: any): number;
        static objectMergeWith(target: any, source: any, overwrite?: boolean): any;
        static bind(func: Function, self?: any, ...varargs: any[]): Function;
        static firstUp(str: string): string;
        static firstLow(str: string): string;
        static getClass(value: any): string;
        static isString(value: any): boolean;
        static isArray(value: any): boolean;
        static isObject(value: any): boolean;
        static isFunction(value: any): boolean;
        static isFunctionOrAsyncFunction(value: any): boolean;
        static debug(object: any, message: any): void;
        static info(object: any, message: any): void;
        static warn(object: any, message: any): void;
        static error(object: any, message: any): void;
        static trace(object: any): void;

    }
}
