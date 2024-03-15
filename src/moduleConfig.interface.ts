export interface moduleConfig {
    name: string;
    inputs?: any[];
    hasOutput?: boolean;
    action?: Function;
    initializedRequired: Boolean;
    hasSelectMedia?: boolean;
    hasGetMedia?: boolean;

}