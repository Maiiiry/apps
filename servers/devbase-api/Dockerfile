# Docker Hub has not published the Go 1.27.3 image yet. Bootstrap from 1.27.2
# and let go.mod select 1.27.3. Remove this override when that image is available.
FROM golang:1.27.2-bookworm@sha256:5cf287a799e6b94384bad13d16b14904c531f51ba65792237e122ce42b392f61 AS build
ENV GOTOOLCHAIN=auto
WORKDIR /src
COPY go.mod go.sum ./
RUN go version && go mod download
COPY protos ./protos
COPY servers/devbase-api ./servers/devbase-api
RUN CGO_ENABLED=0 go build -trimpath -o /out/devbase-api ./servers/devbase-api/cmd/devbase-api
FROM gcr.io/distroless/static-debian12:nonroot@sha256:afa5c872c891853ca7fcf1f12c3edb23f7eeef36189728842dd51042ff57f7ab
COPY --from=build /out/devbase-api /devbase-api
COPY servers/LICENSE servers/NOTICE /licenses/servers/
COPY LICENSE NOTICE /licenses/protocols/
USER 65532:65532
EXPOSE 46317
ENTRYPOINT ["/devbase-api"]
