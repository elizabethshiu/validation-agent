#!/usr/bin/env bash

set -euox pipefail

curl -o ./collector-installer.sh -L https://github.com/instana/instana-otel-collector/releases/latest/download/instana-collector-installer-latest.sh
