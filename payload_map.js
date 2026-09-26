// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    {
        displayTitle: "Payload Manager (pldmgr)",
        description: "Persistent network elf loader on port 9021",
        fileName: "pldmgr_v0.5.1.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/elfldr",
        binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/tag/v0.5.1",
        version: "0.5.1",
        supportedFirmwares: ["5."],
        toPort: 9021
    },
    {
        displayTitle: "zFTPd",
        description: "FTP server on port 2121",
        fileName: "zftpd-ps5-v1.5.0.elf",
        author: "zecoxao",
        projectSource: "https://github.com/ps5-payload-dev/zftpd",
        binarySource: "https://github.com/ps5-payload-dev/zftpd/releases/tag/v1.5.0",
        version: "1.5.0",
        supportedFirmwares: ["5."],
        toPort: 9021
    },
    {
        displayTitle: "ftpsrv",
        description: "FTP server on port 2121",
        fileName: "ftpsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/ftpsrv/releases/tag/v0.14.3",
        version: "0.14.3",
        supportedFirmwares: ["5."],
        toPort: 9021
    },
    {
        displayTitle: "Browser appcache remover",
        description: "Deletes appcache for the current user",
        fileName: "Browser_appCache_remove.elf",
        author: "Storm21CH, idlesauce",
        projectSource: "https://github.com/Storm21CH/PS5_Browser_appCache_remove",
        binarySource: "https://github.com/Storm21CH/PS5_Browser_appCache_remove",
        version: "1.0",
        supportedFirmwares: ["5."],
        toPort: 9021
    }
];