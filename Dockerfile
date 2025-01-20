FROM otel/opentelemetry-collector:latest

COPY config.yaml /etc/otel/config.yaml

ENTRYPOINT ["/otelcol"]
CMD ["validate", "--config", "/etc/otel/config.yaml"]


