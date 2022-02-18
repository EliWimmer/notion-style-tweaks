"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsGet = settingsGet;

function settingsGet() {
  var meta;
  return regeneratorRuntime.async(function settingsGet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(chrome.storage.local.get().then(function (data) {
            if (data) {
              return data;
            } else {
              return {
                error: "not found"
              };
            }
          }));

        case 2:
          meta = _context.sent;
          return _context.abrupt("return", meta);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}