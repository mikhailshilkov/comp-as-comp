import * as analyzer from "./analyzer";

interface PropertySchema {
    description?: string;
    type?: string;
    willReplaceOnChanges?: boolean;
    items?: { type: string }; // For arrays
    $ref?: string; // For references to other schemas
}

interface ResourceSchema {
    isComponent: boolean;
    description?: string;
    inputProperties: {
        [propertyName: string]: PropertySchema;
    };
    requiredInputs: string[];
    properties: {
        [propertyName: string]: PropertySchema;
    };
    required: string[];
}

interface TypeSchema {
    type: "object";
    properties: {
        [propertyName: string]: PropertySchema;
    };
    required: string[];
}

interface LanguageSchema {
    [language: string]: {
        dependencies?: { [packageName: string]: string };
        devDependencies?: { [packageName: string]: string };
        respectSchemaVersion?: boolean;
    };
}

interface BaseProviderSchema {
	// Name is the name of the provider.
	name: string;
	// Version is the version of the provider.
	version: string;
	// PluginDownloadURL is the URL to use to acquire the provider plugin binary, if any.
	pluginDownloadURL?: string;
}

interface ParameterizationSchema {
    baseProvider: BaseProviderSchema;
	parameter: string;
}

export interface Schema {
    name: string;
    displayName: string;
    version: string;
    resources: {
        [resourceName: string]: ResourceSchema;
    };
    types: {
        [typeName: string]: TypeSchema;
    };
    language: LanguageSchema;
    parameterization?: ParameterizationSchema;
}

function generateComponent(pkg: string, component: analyzer.ComponentSchema): ResourceSchema {
    const result: ResourceSchema = {
        isComponent: true,
        description: component.description,
        inputProperties: {},
        requiredInputs: Object.keys(component.inputs).filter((k) => !component.inputs[k].optional),
        properties: {},
        required: [],
    };
    for (const propName in component.inputs) {
        const inputProp = component.inputs[propName];
        const prop = generateProperty(pkg, inputProp);
        result.inputProperties[propName] = prop;
    }
    for (const output in component.outputs) {
        const outputSchema = component.outputs[output];
        result.properties[output] = {
            description: outputSchema.description,
            type: outputSchema.type,
        };
        if (!outputSchema.optional) {
            result.required.push(output);
        }
    }
    return result;
}

export function generateSchema(pack: any, path: string): Schema {
    const result: Schema = {
        name: pack.name,
        displayName: pack.description,
        version: pack.version,
        resources: {},
        types: {},
        language: {
            nodejs: {
                dependencies: {},
                devDependencies: {
                    "typescript": "^3.7.0",
                },
                respectSchemaVersion: true,
            },
        },
    };
    const components = new analyzer.ComponentAnalyzer(path).analyzeComponents();    
    for (const component in components) {
        const tok = `${pack.name}:index:${component}`;
        result.resources[tok] = generateComponent(pack.name, components[component]);
        for (const type in components[component].typeDefinitions) {
            const typeDef = components[component].typeDefinitions[type];
            const typ: TypeSchema = {
                type: "object",
                properties: typeDef.properties,
                required: Object.keys(typeDef.properties).filter((k) => !typeDef.properties[k].optional),
            };
            for (const propName in typeDef.properties) {
                const prop = generateProperty(pack.name, typeDef.properties[propName]);
                typ.properties[propName] = prop;
            }
            result.types[`${pack.name}:index:${type}`] = typ;
        }
    }
    return result;
}

function generateProperty(pkg: string, inputSchema: analyzer.SchemaProperty): PropertySchema {
    let type = inputSchema.type;
    let items = undefined;
    let ref = undefined;
    if (inputSchema.ref) {
        ref = `#/types/${pkg}:index:${inputSchema.ref}`;
    } else if (type && type.endsWith("[]")) {
        items = { type: type.slice(0, -2) };
        type = "array";
    }
    return {
        description: inputSchema.description,
        type: type,
        items: items,
        $ref: ref,
    };
}