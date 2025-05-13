package main

import (
	"github.com/pulumi/play/comp-as-comp/pulumi-resource-go-components/talos"
	"github.com/pulumi/pulumi-go-provider/infer"
)

func main() {
	err := infer.NewProviderBuilder().
		WithName("go-components").
		WithNamespace("mikhailshilkov").
		WithComponents(
			infer.Component(NewRandomComponent),
			infer.Component(NewStaticPage),
			infer.Component(talos.NewTalosCluster),
		).
		BuildAndRun()

	if err != nil {
		panic(err)
	}
}
