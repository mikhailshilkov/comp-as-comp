import * as pulumi from "@pulumi/pulumi";
import * as tsComponents from "@pulumi/node-components";
import * as goComponents from "@mikhailshilkov/go-components";
import * as pythonComponents from "@pulumi/python-components";

const randomTs = new tsComponents.RandomComponent("random-ts", {
    length: 3,
})

const randomGo = new goComponents.RandomComponent("random-go", {
    length: 3,
})

const randomPy = new pythonComponents.RandomComponent("random-python", {
    length: 3,
});

export const superPassword = pulumi.interpolate`${randomTs.password}-${randomGo.password}-${randomPy.password}`;