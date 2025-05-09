// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RandomComponentArgs } from "./randomComponent";
export type RandomComponent = import("./randomComponent").RandomComponent;
export const RandomComponent: typeof import("./randomComponent").RandomComponent = null as any;
utilities.lazyLoad(exports, ["RandomComponent"], () => require("./randomComponent"));

export { StaticPageArgs } from "./staticPage";
export type StaticPage = import("./staticPage").StaticPage;
export const StaticPage: typeof import("./staticPage").StaticPage = null as any;
utilities.lazyLoad(exports, ["StaticPage"], () => require("./staticPage"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "go-components:index:RandomComponent":
                return new RandomComponent(name, <any>undefined, { urn })
            case "go-components:index:StaticPage":
                return new StaticPage(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("go-components", "index", _module)
pulumi.runtime.registerResourcePackage("go-components", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:go-components") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
