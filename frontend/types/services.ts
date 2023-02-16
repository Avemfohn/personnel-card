//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
import type {
  GetApiPersonelQueryParams,
  PaginatedPersonelList,
  PatchedPersonalEducationRequest,
  PatchedPersonelRequest,
  PersonalEducation,
  PersonalEducationRequest,
  Personel,
  PersonelRequest,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}


function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody);
}

export const deleteApiPersonaleducationId = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteApiPersonaleducationId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteApiPersonaleducationId.key = "/api/personaleducation/{id}/";

export const deleteApiPersonelId = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteApiPersonelId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteApiPersonelId.key = "/api/personel/{id}/";

export const getApiPersonaleducation = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalEducation[]>> => {
  return Http.getRequest(
    getApiPersonaleducation.key,
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getApiPersonaleducation.key = "/api/personaleducation/";

export const getApiPersonaleducationId = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalEducation>> => {
  return Http.getRequest(
    template(getApiPersonaleducationId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getApiPersonaleducationId.key = "/api/personaleducation/{id}/";

export const getApiPersonel = (
  queryParams?: GetApiPersonelQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PaginatedPersonelList>> => {
  return Http.getRequest(
    getApiPersonel.key,
    queryParams,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getApiPersonel.key = "/api/personel/";

export const getApiPersonelId = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Personel>> => {
  return Http.getRequest(
    template(getApiPersonelId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getApiPersonelId.key = "/api/personel/{id}/";

export const patchApiPersonaleducationId = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  requestBody: PatchedPersonalEducationRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalEducation>> => {
  return Http.patchRequest(
    template(patchApiPersonaleducationId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
patchApiPersonaleducationId.key = "/api/personaleducation/{id}/";

export const patchApiPersonelId = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  requestBody: PatchedPersonelRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Personel>> => {
  return Http.patchRequest(
    template(patchApiPersonelId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
patchApiPersonelId.key = "/api/personel/{id}/";

export const postApiPersonaleducation = (
  requestBody: PersonalEducationRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postApiPersonaleducation.key,
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postApiPersonaleducation.key = "/api/personaleducation/";

export const postApiPersonel = (
  requestBody: PersonelRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postApiPersonel.key,
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postApiPersonel.key = "/api/personel/";

export const putApiPersonaleducationId = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  requestBody: PersonalEducationRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PersonalEducation>> => {
  return Http.putRequest(
    template(putApiPersonaleducationId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putApiPersonaleducationId.key = "/api/personaleducation/{id}/";

export const putApiPersonelId = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  requestBody: PersonelRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Personel>> => {
  return Http.putRequest(
    template(putApiPersonelId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putApiPersonelId.key = "/api/personel/{id}/";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = [{ cookieAuth: [] }, { basicAuth: [] }, {}];
