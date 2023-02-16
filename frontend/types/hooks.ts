//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import { AxiosRequestConfig } from "axios";
import {
  UseQueryOptions,
  useQuery,
  useMutation,
  UseMutationOptions,
  QueryClient,
  QueryKey,
} from "@tanstack/react-query";
import { RequestError, SwaggerResponse } from "./config";

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
import {
  deleteApiPersonaleducationId,
  deleteApiPersonelId,
  getApiPersonaleducation,
  getApiPersonaleducationId,
  getApiPersonel,
  getApiPersonelId,
  patchApiPersonaleducationId,
  patchApiPersonelId,
  postApiPersonaleducation,
  postApiPersonel,
  putApiPersonaleducationId,
  putApiPersonelId,
} from "./services";

export type SwaggerTypescriptMutationDefaultParams<TExtra> = {
  _extraVariables?: TExtra;
  configOverride?: AxiosRequestConfig;
};
type SwaggerTypescriptUseQueryOptions<TData> = UseQueryOptions<
  SwaggerResponse<TData>,
  RequestError | Error
>;

type SwaggerTypescriptUseMutationOptions<TData, TRequest, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    TRequest & SwaggerTypescriptMutationDefaultParams<TExtra>
  >;

type SwaggerTypescriptUseMutationOptionsVoid<TData, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    SwaggerTypescriptMutationDefaultParams<TExtra> | void
  >;

export const useDeleteApiPersonaleducationId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      /**
       *
       * A unique integer value identifying this personal education.
       */
      id: number;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,

      configOverride,
    } = _o || {};

    return deleteApiPersonaleducationId(
      id,

      configOverride
    );
  }, options);
};

export const useDeleteApiPersonelId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      /**
       *
       * A unique integer value identifying this personel.
       */
      id: number;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,

      configOverride,
    } = _o || {};

    return deleteApiPersonelId(
      id,

      configOverride
    );
  }, options);
};

export const useGetApiPersonaleducation = (
  options?: SwaggerTypescriptUseQueryOptions<PersonalEducation[]>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonaleducation.info(configOverride);
  return useQuery(key, fun, options);
};
useGetApiPersonaleducation.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [getApiPersonaleducation.key] as QueryKey,
    fun: () => getApiPersonaleducation(configOverride),
  };
};
useGetApiPersonaleducation.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<PersonalEducation[]>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonaleducation.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetApiPersonaleducationId = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<PersonalEducation>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonaleducationId.info(
    id,

    configOverride
  );
  return useQuery(key, fun, options);
};
useGetApiPersonaleducationId.info = (
  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getApiPersonaleducationId.key, id] as QueryKey,
    fun: () =>
      getApiPersonaleducationId(
        id,

        configOverride
      ),
  };
};
useGetApiPersonaleducationId.prefetch = (
  client: QueryClient,

  /**
   *
   * A unique integer value identifying this personal education.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<PersonalEducation>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonaleducationId.info(
    id,

    configOverride
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetApiPersonel = (
  queryParams?: GetApiPersonelQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<PaginatedPersonelList>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonel.info(queryParams, configOverride);
  return useQuery(key, fun, options);
};
useGetApiPersonel.info = (
  queryParams?: GetApiPersonelQueryParams,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getApiPersonel.key, queryParams] as QueryKey,
    fun: () =>
      getApiPersonel(
        queryParams,

        configOverride
      ),
  };
};
useGetApiPersonel.prefetch = (
  client: QueryClient,
  queryParams?: GetApiPersonelQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<PaginatedPersonelList>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonel.info(queryParams, configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetApiPersonelId = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<Personel>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonelId.info(
    id,

    configOverride
  );
  return useQuery(key, fun, options);
};
useGetApiPersonelId.info = (
  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getApiPersonelId.key, id] as QueryKey,
    fun: () =>
      getApiPersonelId(
        id,

        configOverride
      ),
  };
};
useGetApiPersonelId.prefetch = (
  client: QueryClient,

  /**
   *
   * A unique integer value identifying this personel.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<Personel>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetApiPersonelId.info(
    id,

    configOverride
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const usePatchApiPersonaleducationId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    PersonalEducation,
    {
      /**
       *
       * A unique integer value identifying this personal education.
       */
      id: number;
      requestBody: PatchedPersonalEducationRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return patchApiPersonaleducationId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePatchApiPersonelId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    Personel,
    {
      /**
       *
       * A unique integer value identifying this personel.
       */
      id: number;
      requestBody: PatchedPersonelRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return patchApiPersonelId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePostApiPersonaleducation = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: PersonalEducationRequest },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postApiPersonaleducation(
      requestBody,

      configOverride
    );
  }, options);
};

export const usePostApiPersonel = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: PersonelRequest },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postApiPersonel(
      requestBody,

      configOverride
    );
  }, options);
};

export const usePutApiPersonaleducationId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    PersonalEducation,
    {
      /**
       *
       * A unique integer value identifying this personal education.
       */
      id: number;
      requestBody: PersonalEducationRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return putApiPersonaleducationId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePutApiPersonelId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    Personel,
    {
      /**
       *
       * A unique integer value identifying this personel.
       */
      id: number;
      requestBody: PersonelRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return putApiPersonelId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};
