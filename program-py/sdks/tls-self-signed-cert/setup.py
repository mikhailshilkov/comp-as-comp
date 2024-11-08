# coding=utf-8
# *** WARNING: this file was generated by pulumi-language-python. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import errno
from setuptools import setup, find_packages
from setuptools.command.install import install
from subprocess import check_call


VERSION = "0.1.3"
def readme():
    try:
        with open('README.md', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return "tls-self-signed-cert Pulumi Package - Development Version"


setup(name='pulumi_tls_self_signed_cert',
      python_requires='>=3.8',
      version=VERSION,
      long_description=readme(),
      long_description_content_type='text/markdown',
      packages=find_packages(),
      package_data={
          'pulumi_tls_self_signed_cert': [
              'py.typed',
              'pulumi-plugin.json',
          ]
      },
      install_requires=[
          'parver>=0.2.1',
          'pulumi>=3.134.0,<4.0.0',
          'semver>=2.8.1',
          'typing-extensions>=4.11,<5; python_version < "3.11"'
      ],
      zip_safe=False)
