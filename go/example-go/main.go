package main

import (
	component "github.com/mikhailshilkov/pulumi-go-components/sdk/go/go-components"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {
		myrandom, err := component.NewRandomComponent(ctx, "myrandom", &component.RandomComponentArgs{
			Length: pulumi.Int(3),
		})
		if err != nil {
			return err
		}
		ctx.Export("password", myrandom.Password)
		return nil
	})
}
