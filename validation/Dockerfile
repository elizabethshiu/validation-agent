ARG VERSION="latest"

FROM otel/opentelemetry-collector:$VERSION

COPY ./instana/config.yaml /etc/otel/config.yaml

ENTRYPOINT ["/otelcol"]
CMD ["validate", "--config", "/etc/otel/config.yaml"]


