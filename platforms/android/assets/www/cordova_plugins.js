cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.pushbots.push/www/pushbots.js",
        "id": "com.pushbots.push.PushbotsPlugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    },
    {
        "file": "plugins/com.plugins.shortcut/www/ShortcutPlugin.js",
        "id": "com.plugins.shortcut.ShortcutPlugin",
        "clobbers": [
            "ShortcutPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.pushbots.push": "1.2.4",
    "com.plugins.shortcut": "0.1.1",
    "android.support.v4": "21.0.1"
}
// BOTTOM OF METADATA
});