let
    pkgs = import
        (builtins.fetchTarball {
            name = "nixos-unstable-2022-09-26";
            url = "https://github.com/nixos/nixpkgs/archive/b8e83fd7e16529ee331313993508c3bf918f1d57.tar.gz";
            sha256 = "1a98pgnhdhyg66176i36rcn3rklihy36y9z4176la7pxlzm4khwf";
        })
        { };

    build = pkgs.writeShellScriptBin "build" ''
        docker build -t rain-arb-bot .
    '';

    view-images = pkgs.writeShellScriptBin "view" ''
        docker image
    '';

    in
    pkgs.stdenv.mkDerivation {
        name = "shell";
        buildInputs = [
            pkgs.docker
            pkgs.nixpkgs-fmt
        ];

        shellHook = ''
            export PATH=$( npm bin ):$PATH
        '';
    }
