/**
 * OralEye API
 * API for controlling lights and camera on OralEye device
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CameraAutofocusPostRequest model module.
 * @module model/CameraAutofocusPostRequest
 * @version 0.0.1
 */
class CameraAutofocusPostRequest {
    /**
     * Constructs a new <code>CameraAutofocusPostRequest</code>.
     * @alias module:model/CameraAutofocusPostRequest
     */
    constructor() { 
        
        CameraAutofocusPostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CameraAutofocusPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CameraAutofocusPostRequest} obj Optional instance to populate.
     * @return {module:model/CameraAutofocusPostRequest} The populated <code>CameraAutofocusPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CameraAutofocusPostRequest();

            if (data.hasOwnProperty('autofocus')) {
                obj['autofocus'] = ApiClient.convertToType(data['autofocus'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CameraAutofocusPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CameraAutofocusPostRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['autofocus'] && !(typeof data['autofocus'] === 'string' || data['autofocus'] instanceof String)) {
            throw new Error("Expected the field `autofocus` to be a primitive type in the JSON string but got " + data['autofocus']);
        }

        return true;
    }


}



/**
 * @member {module:model/CameraAutofocusPostRequest.AutofocusEnum} autofocus
 */
CameraAutofocusPostRequest.prototype['autofocus'] = undefined;





/**
 * Allowed values for the <code>autofocus</code> property.
 * @enum {String}
 * @readonly
 */
CameraAutofocusPostRequest['AutofocusEnum'] = {

    /**
     * value: "true"
     * @const
     */
    "true": "true",

    /**
     * value: "false"
     * @const
     */
    "false": "false"
};



export default CameraAutofocusPostRequest;

