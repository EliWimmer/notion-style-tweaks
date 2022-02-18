"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = settingsGet;

function settingsGet() {
  var meta;
  return regeneratorRuntime.async(function settingsGet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(chrome.storage.local.get('meta').then(function (data) {
            if (data.meta) {
              return data.meta;
              console.log(data.meta);
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