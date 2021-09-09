defaults
=============

@short: the default configuration of a shape
	

@type: object
@example:
// the default configuration for all shapes of the "rectangle" type
var diagram = new dhx.Diagram("diagram_container", {
    defaults: {
        rectangle: {
            fill: "#CEEFE1",
            stroke: "#0AB169",
            strokeWidth: 2,
            width: 140,
            height: 140,
            text: "Default text"
        }
    }
});


@template:	api_config
@descr:
The **defaults** object can contain a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

After specifying the properties for the shape of the *rectangle* type by default you can omit these attributes while preparing a data set for the "rectangle"-type shapes. <br> But, if necessary, you can redefine any of the properties while specifying them in the configuration object of the shape, as before.

{{note There is no possibility to define *type* and *id* in the default config of a shape.}}

@related: common_guides/configuration.md#settingthedefaultconfigurationofashape
diagram_guides/editor_mode.md#settingpreview

@changelog: added in v3.0



