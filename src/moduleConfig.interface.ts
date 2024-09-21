export interface moduleConfig {
    name: string;
    inputs?: any[];
    hasOutput?: boolean;
    action?: Function;
    initializedRequired: Boolean;
    hasSelectMedia?: boolean;
    hasGetMedia?: boolean;
    onClick?: Function;
}

export interface IButtonProps {
    displayName: string;
    id: string;
    ariaLabel?: string;
    className?: string;
    onClick?: (this: GlobalEventHandlers, ev: MouseEvent) => void;
}