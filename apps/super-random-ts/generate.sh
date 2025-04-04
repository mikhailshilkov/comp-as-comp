set -o errexit
set -o pipefail

PULUMI_BUILD_CONTAINER_VERSION=v0.3.0

# First build the image for the Pulumi Build Container
echo "* Generating go-components SDK:"
pulumi package add ../../go

echo "* Generating node-components SDK:"
pulumi package add ../../ts

echo "* Generating py-components SDK:"
pulumi package add ../../py

echo "* Done generating SDKs."
