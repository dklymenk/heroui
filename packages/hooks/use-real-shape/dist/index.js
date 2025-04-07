"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useRealShape: () => useRealShape
});
module.exports = __toCommonJS(index_exports);
var import_react = require("react");
var import_react_utils = require("@heroui/react-utils");
function useRealShape(ref) {
  const [shape, setState] = (0, import_react.useState)({
    width: 0,
    height: 0
  });
  const updateShape = (0, import_react.useCallback)(() => {
    if (!(ref == null ? void 0 : ref.current)) return;
    const { width, height } = (0, import_react_utils.getRealShape)(ref.current);
    setState({ width, height });
  }, []);
  (0, import_react.useEffect)(() => updateShape(), [updateShape]);
  return [shape, updateShape];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useRealShape
});
