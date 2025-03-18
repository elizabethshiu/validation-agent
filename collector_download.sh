#!/usr/bin/env bash

set -euox pipefail

curl -o ./collector-installer.sh -L https://github.com/instana/instana-otel-collector/releases/download/v0.0.12/instana-collector-installer-latest.sh
