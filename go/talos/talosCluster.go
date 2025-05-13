package talos

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type TalosClusterArgs struct {
	ClusterName       pulumi.StringInput `pulumi:"clusterName"`
	Version           pulumi.StringInput `pulumi:"version"`
	Region            pulumi.StringInput `pulumi:"region"`
	CountControlPlane int                `pulumi:"countControlPlane"`
	CountWorker       int                `pulumi:"countWorker"`
	Size              pulumi.StringInput `pulumi:"size"`
}

type TalosCluster struct {
	pulumi.ResourceState
	TalosClusterArgs
	Kubeconfig pulumi.StringOutput `pulumi:"kubeconfig"`
}

func NewTalosCluster(ctx *pulumi.Context, name string, talosClusterArgs TalosClusterArgs, opts ...pulumi.ResourceOption) (*TalosCluster, error) {
	myComponent := &TalosCluster{}
	err := ctx.RegisterComponentResource("pkg:index:TalosCluster", name, myComponent, opts...)
	if err != nil {
		return nil, err
	}
	//
	err = ctx.RegisterResourceOutputs(myComponent, pulumi.Map{
		"kubeconfig": pulumi.String(""),
	})
	//myComponent.Kubeconfig = pulumi.String("test")
	if err != nil {
		return nil, err
	}
	return myComponent, nil
}
