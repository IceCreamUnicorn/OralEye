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


import ApiClient from "../ApiClient";
import CameraAutofocusPostRequest from '../model/CameraAutofocusPostRequest';
import CameraCapturePost200Response from '../model/CameraCapturePost200Response';
import CameraExposurePostRequest from '../model/CameraExposurePostRequest';
import CameraManualFocusPostRequest from '../model/CameraManualFocusPostRequest';
import LightsControlPost200Response from '../model/LightsControlPost200Response';

/**
* Camera service.
* @module api/CameraApi
* @version 0.0.1
*/
export default class CameraApi {

    /**
    * Constructs a new CameraApi. 
    * @alias module:api/CameraApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cameraAutofocusPost operation.
     * @callback module:api/CameraApi~cameraAutofocusPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightsControlPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set auto-focus on/off
     * @param {module:model/CameraAutofocusPostRequest} cameraAutofocusPostRequest 
     * @param {module:api/CameraApi~cameraAutofocusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightsControlPost200Response}
     */
    cameraAutofocusPost(cameraAutofocusPostRequest, callback) {
      let postBody = cameraAutofocusPostRequest;
      // verify the required parameter 'cameraAutofocusPostRequest' is set
      if (cameraAutofocusPostRequest === undefined || cameraAutofocusPostRequest === null) {
        throw new Error("Missing the required parameter 'cameraAutofocusPostRequest' when calling cameraAutofocusPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LightsControlPost200Response;
      return this.apiClient.callApi(
        '/camera/autofocus', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cameraCapturePost operation.
     * @callback module:api/CameraApi~cameraCapturePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CameraCapturePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture raw image
     * @param {module:api/CameraApi~cameraCapturePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CameraCapturePost200Response}
     */
    cameraCapturePost(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CameraCapturePost200Response;
      return this.apiClient.callApi(
        '/camera/capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cameraExposurePost operation.
     * @callback module:api/CameraApi~cameraExposurePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightsControlPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set exposure time
     * @param {module:model/CameraExposurePostRequest} cameraExposurePostRequest 
     * @param {module:api/CameraApi~cameraExposurePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightsControlPost200Response}
     */
    cameraExposurePost(cameraExposurePostRequest, callback) {
      let postBody = cameraExposurePostRequest;
      // verify the required parameter 'cameraExposurePostRequest' is set
      if (cameraExposurePostRequest === undefined || cameraExposurePostRequest === null) {
        throw new Error("Missing the required parameter 'cameraExposurePostRequest' when calling cameraExposurePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LightsControlPost200Response;
      return this.apiClient.callApi(
        '/camera/exposure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cameraManualFocusPost operation.
     * @callback module:api/CameraApi~cameraManualFocusPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightsControlPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set manual focus distance
     * @param {module:model/CameraManualFocusPostRequest} cameraManualFocusPostRequest 
     * @param {module:api/CameraApi~cameraManualFocusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightsControlPost200Response}
     */
    cameraManualFocusPost(cameraManualFocusPostRequest, callback) {
      let postBody = cameraManualFocusPostRequest;
      // verify the required parameter 'cameraManualFocusPostRequest' is set
      if (cameraManualFocusPostRequest === undefined || cameraManualFocusPostRequest === null) {
        throw new Error("Missing the required parameter 'cameraManualFocusPostRequest' when calling cameraManualFocusPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LightsControlPost200Response;
      return this.apiClient.callApi(
        '/camera/manual_focus', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cameraPreviewStartPost operation.
     * @callback module:api/CameraApi~cameraPreviewStartPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightsControlPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start camera preview
     * @param {module:api/CameraApi~cameraPreviewStartPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightsControlPost200Response}
     */
    cameraPreviewStartPost(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LightsControlPost200Response;
      return this.apiClient.callApi(
        '/camera/preview/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cameraPreviewStopPost operation.
     * @callback module:api/CameraApi~cameraPreviewStopPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LightsControlPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop camera preview
     * @param {module:api/CameraApi~cameraPreviewStopPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LightsControlPost200Response}
     */
    cameraPreviewStopPost(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LightsControlPost200Response;
      return this.apiClient.callApi(
        '/camera/preview/stop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
