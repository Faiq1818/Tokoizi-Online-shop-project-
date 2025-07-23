let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-25.05";
  pkgs = import nixpkgs {
    config = {};
    overlays = [];
  };
in
  pkgs.mkShell {
    packages = with pkgs; [
      nodejs_24
      typescript-language-server
    ];
  }
