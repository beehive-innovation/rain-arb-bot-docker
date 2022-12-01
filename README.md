# Dockerized Rain Arbitrage Bot
A dockerized NodeJS bot to find and match arbitrage trades for Rain Orderbook orders

## Tutorial
If you already have docker installed or want to install it globaly on your system after it is installed, you can pull the image from DockerHub with:
```bash
docker pull rouzwelt/rain-arb-bot:latest
```
or build from the source:
```bash
git clone https://github.com/beehive-innovation/rain-arb-bot-docker
cd rain-arb-bot-docker
docker build . -t <img-name>
```

Or if you have Nix installed on you system you can start with entering nix shell which installs Docker engin on your nix drive:
```bash
git clone https://github.com/beehive-innovation/rain-arb-bot-docker
cd rain-arb-bot-docker
nix-shell
```
then build the image with:
```bash
build
or
docker build . -t <img-name>
```
<br>

once the image is ready, you can run it with the following command:
```bash
docker run -p 5555:5555 <img-name> --private-key <bot-wallet-private-key> --rpc <rpc-api-url>
or
docker run -p 5555:5555 <img-name> --private-key <bot-wallet-private-key> --network <network-name>
```
<br>

`NOTE`: using `--network` will use default RPC provider which is not desired, so the prefered options is to provide the RPC URL, you can get them from Alchemy or many other providers for any desired network.

`NOTE`: instead of `--private-key` you can use `-p`, same for `--rpc` you can use `-r` and `-n` instead of `--network`.

