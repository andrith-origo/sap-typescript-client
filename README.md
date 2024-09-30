# nopcommerce-typescript-client

A typescript client generated from nopCommerce swagger

Generated with:
swagger-typescript-api@13.0.22
Command:
npx swagger-typescript-api -p http://path/to/swagger.json -o ./src --modular

latest is
npx swagger-typescript-api -p SAP-swagger.json -o ./src/generated --modular --responses --extract-request-params --extract-request-body --extract-response-body --extract-response-error --clean-output

<!-- Add operation ids in nopcommerce
src\Nop.Plugin.Misc.WebApi.Frontend\Infrastructure\PluginNopStartup.cs
services.AddSwaggerGen(options =>
{
options.CustomOperationIds(e => $"{e.HttpMethod}_{e.ActionDescriptor.RouteValues["controller"]}_{e.ActionDescriptor.RouteValues["action"]}"); -->
