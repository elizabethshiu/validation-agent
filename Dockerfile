FROM ubuntu:22.04

RUN apt-get update \
&& apt-get -y install sudo \
&& apt-get install -y systemctl

WORKDIR /collector
COPY ./instana/config.yaml /etc/otel/config.yaml
COPY ./collector-installer.sh /collector/collector-installer.sh

RUN chmod +x /collector/collector-installer.sh
# running installer with mock endpoint and key since don't actually need to collect data
RUN /collector/collector-installer.sh -e localhost:0000 -a 1234

ENTRYPOINT ["/opt/instana/collector/bin/instana-otelcol", "validate", "--config"]
CMD ["/etc/otel/config.yaml"]


