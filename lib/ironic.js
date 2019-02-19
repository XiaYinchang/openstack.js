"use strict";

let defres = require("./util").defres;

exports.chassis = defres("baremetal", "/v1/chassis", [null, "chassis"], {
    update: ["patch", "/:id"],
    headers: {"X-OpenStack-Ironic-API-Version": "1.9"},
    listWithDetails: ["get", "/detail", null]
});

exports.chassisNode = defres("baremetal", "/v1/chassis/:id/nodes", "node", {only: ["list"]});

exports.driver = defres("baremetal", "/v1/drivers", [null, "drivers"], {
    showProperties: ["get", "/:id/properties", null],
    getDriverLogicDiskProperties: ["get", "/:id/raid/logical_disk_properties", null],
    getVendorDriverMethods: ["get", "/:id/vendor_passthru/methods", null]
});

exports.node = defres("baremetal", "/v1/nodes", [null, "nodes"], {
    setPower: ["put", "/:id/states/power", null],
    setProvision: ["put", "/:id/states/provision", null],
    validate: ["get", "/:id/validate", null],
    update: ["patch", "/:id"],
    listWithDetails: ["get", "/detail", null],
    enableMaintenance: ["put", "/:id/maintenance", null],
    disableMaintenance: ["del", "/:id/maintenance", null],
    setBootDevice: ["put", "/:id/management/boot_device", null],
    getSupportedBootDevice: ["get", "/:id/management/boot_device/supported", null],
    injectNmi: ["put", "/:id/management/inject_nmi", null],
    getStateSummary: ["get", ":/id/states", null],
    setRaid: ["put", "/:id/states/raid", null],
    setConsole: ["put", "/:id/states/console", null],
    getConsole: ["get", "/:id/states/console", null],
    getVendorMethods: ["get", "/:id/vendor_passthru/methods", null],
    getTraits: ["get", "/:id/traits", null],
    setTraits: ["put", "/:id/traits", null],
    addTrait: ["put", "/:id/traits/:trait", null],
    delTraits: ["del", "/:id/traits", null],
    delTrait: ["del", "/:id/traits/:trait", null],
    getVifs: ["get", "/:id/vifs", null],
    attachVif: ["post", "/:id/vifs", null],
    detachVif: ["del", "/:id/vifs/:vif_id", null],
    listPortgropus: ["get", "/:id/portgroups", null],
    listPortgroupsWithDetail: ["get", "/:id/portgroups/detail", null],
    listPorts: ["get", "/:id/ports", null],
    listPortsWithDetail: ["get", "/:id/ports/detail", null],
    listVolumes: ["get", "/:id/volume", null],
    listVolumeConnectors: ["get", "/:id/volume/connectors", null],
    listVolumeTargets: ["get", "/:id/volume/targets", null],
    listBiosSettings: ["get", "/:id/bios", null],
    showBiosSetting: ["get", "/:id/bios/:bios_setting", null]
});

exports.port = defres("baremetal", "/v1/ports", [null, "ports"], {
    update: ["patch", "/:id"],
    listWithDetails: ["get", "/detail", null]
});

exports.portgroup = defres("baremetal", "/v1/portgroups", [null, "portgroups"], {
    update: ["patch", "/:id"],
    listWithDetails: ["get", "/detail", null],
    listPorts: ["get", "/:id/ports", null],
    listPortsWithDetail: ["get", "/:id/ports/detail", null]
});

exports.volume = defres("baremetal", "/v1/volume", "volume");

exports.volumeConnector = defres("baremetal", "/v1/volume/connectors", [null, "connectors"], {
    update: ["patch", "/:id"]
});

exports.volumeTarget = defres("baremetal", "/v1/volume/targets", [null, "targets"], {
    update: ["patch", "/:id"]
});