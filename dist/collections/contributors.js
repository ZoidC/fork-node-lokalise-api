"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contributors = void 0;
const base_collection_1 = require("./base_collection");
const contributor_1 = require("../models/contributor");
class Contributors extends base_collection_1.BaseCollection {
    static rootElementName = "contributors";
    static rootElementNameSingular = "contributor";
    static prefixURI = "projects/{!:project_id}/contributors/{:id}";
    static elementClass = contributor_1.Contributor;
    create(raw_body, params) {
        const body = { contributors: this.objToArray(raw_body) };
        return this.createPromise("POST", params, this.populateArrayFromJson, this.handleReject, body, "projects/{!:project_id}/contributors");
    }
    update(id, body, params) {
        params["id"] = id;
        return this.createPromise("PUT", params, this.populateObjectFromJsonRoot, this.handleReject, body);
    }
}
exports.Contributors = Contributors;
//# sourceMappingURL=contributors.js.map