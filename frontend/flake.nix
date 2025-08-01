{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs {
        inherit system;
      };
    in
      pkgs.mkShell {
        packages = with pkgs; [
          typescript
          typescript-language-server
          nodejs_24
        ];

        shellHook = ''
          echo "tls: `typescript-language-server --version`"
          echo "tsc: `tsc --version`"
          exec zsh
        '';
      };
  };
}
