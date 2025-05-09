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

export { SelfSignedCertificateArgs } from "./selfSignedCertificate";
export type SelfSignedCertificate = import("./selfSignedCertificate").SelfSignedCertificate;
export const SelfSignedCertificate: typeof import("./selfSignedCertificate").SelfSignedCertificate = null as any;
utilities.lazyLoad(exports, ["SelfSignedCertificate"], () => require("./selfSignedCertificate"));


// Export sub-modules:
import * as types from "./types";

export {
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "node-components:index:RandomComponent":
                return new RandomComponent(name, <any>undefined, { urn })
            case "node-components:index:SelfSignedCertificate":
                return new SelfSignedCertificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("node-components", "index", _module)
pulumi.runtime.registerResourcePackage("node-components", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:node-components") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
