set -o errexit
set -o pipefail

echo "* Generating go-components SDK:"
pulumi package add ../../go

echo "* Generating node-components SDK:"
pulumi package add ../../ts

echo "* Generating py-components SDK:"
pulumi package add ../../py

echo "* Generating dotnet-components SDK:"
pulumi package add ../../dotnet

echo "* Done generating SDKs."
