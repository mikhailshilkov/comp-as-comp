from pulumi.provider.experimental import component_provider_host
from staticpage import StaticPage

if __name__ == "__main__":
    component_provider_host(name="python-components", components=[StaticPage])
