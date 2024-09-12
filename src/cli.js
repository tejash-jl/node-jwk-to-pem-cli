#!/usr/bin/env node
var program = require("commander").program;
var jwkToPem = require("./jwk-to-pem");

program
	.version("2.0.7")
	.description("CLI to convert jwk to pem")
	.option("--jwk <type>", "The JSON Web Key in string format that you want to convert to PEM.")
	.option("-p, --public", "Outputs the PEM as a public key. If this flag is provided, the command will convert the JWK to a PEM format for a public key.", false)
	.action(function (options) {
		console.log(jwkToPem(JSON.parse(options.jwk), {private: !options.public_pem}));
	});

program.parse(process.argv);
