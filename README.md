# Source-based Pulumi Component Authoring

This repository contains examples of how to author Pulumi components using source-based sharing mechanism. It means that the component's source code is published on GitHub and any Pulumi program can consume it using the `pulumi package add github.com/mikhailshilkov/comp-as-comp/<component-name>` command.

The examples are work-in-progress and will be updated over time as the core Pulumi functionality evolves.

## Examples

### TypeScript

The `ts` directory contains a simple TypeScript component that creates a TLS self-signed certificate. It illustrates the approach where a bunch of machinery is abstracted away, and the schema is inferred from the component's source code. The `example` folder contains a Pulumi YAML program that consumes the component.

### Java

The `java` directory contains a simple Java component that creates an AWS Static Page component. The `example` folder contains a Pulumi YAML program that consumes the component.

### Python

The `py` directory contains a simple Python component that creates an AWS Static Page component. The `example` folder contains a Pulumi YAML program that consumes the component.

### Go

The `go` directory contains a simple Go component that creates a sample Random component. The `example` folder contains a Pulumi YAML program that consumes the component.

### .NET

The `dotnet` directory contains a simple .NET component that creates a sample Random component. The `example` folder contains a Pulumi YAML program that consumes the component. 

