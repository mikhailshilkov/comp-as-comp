// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StaticPage extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'python-components:index:StaticPage';

    /**
     * Returns true if the given object is an instance of StaticPage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticPage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticPage.__pulumiType;
    }

    /**
     * The URL of the static website.
     */
    public /*out*/ readonly websiteUrl!: pulumi.Output<string>;

    /**
     * Create a StaticPage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticPageArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.indexContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'indexContent'");
            }
            resourceInputs["indexContent"] = args ? args.indexContent : undefined;
            resourceInputs["websiteUrl"] = undefined /*out*/;
        } else {
            resourceInputs["websiteUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StaticPage.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a StaticPage resource.
 */
export interface StaticPageArgs {
    /**
     * The HTML content for index.html.
     */
    indexContent: pulumi.Input<string>;
}
