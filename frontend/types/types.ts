//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface GetApiPersonelQueryParams {
  /**
   *
   * Number of results to return per page.
   */
  limit?: number;
  /**
   *
   * The initial index from which to return the results.
   */
  offset?: number;
  /**
   *
   * A search term.
   */
  search?: string;
}

export interface PaginatedPersonelList {
  /**
   * @example
   *   123
   */
  count?: number;
  /**
   * @example
   *   123
   */
  current_page?: number;
  /**
   *
   * - Format: uri
   * @example
   *   http://api.example.org/accounts/?offset=400&limit=100
   */
  next?: string;
  /**
   * @example
   *   123
   */
  offset?: number;
  /**
   *
   * - Format: uri
   * @example
   *   http://api.example.org/accounts/?offset=200&limit=100
   */
  previous?: string;
  results?: Personel[];
}

export interface PatchedPersonalEducationRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  school?: string;
}

/**
 *
 * Adds nested create feature
 */

export interface PatchedPersonelRequest {
  /**
   *
   * - maxLength: 80
   * - minLength: 1
   */
  address?: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  department?: string;
  /**
   *
   * - Format: email
   * - maxLength: 40
   * - minLength: 1
   */
  email?: string;
  /**
   *
   * - Format: date
   */
  end_date?: string;
  /**
   *
   * - Format: binary
   */
  image?: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  name?: string;
  /**
   *
   * - maxLength: 20
   * - minLength: 1
   */
  phone?: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  position?: string;
  rows?: PersonelRowRequest[];
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  salary?: string;
  /**
   *
   * - Format: date
   */
  start_date?: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  surname?: string;
}

export interface PersonalEducation {
  id: number;
  /**
   *
   * - maxLength: 100
   */
  school: string;
}

export interface PersonalEducationRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  school: string;
}

/**
 *
 * Adds nested create feature
 */

export interface Personel {
  /**
   *
   * - maxLength: 80
   */
  address: string;
  /**
   *
   * - maxLength: 30
   */
  department: string;
  /**
   *
   * - Format: email
   * - maxLength: 40
   */
  email: string;
  id: number;
  /**
   *
   * - maxLength: 30
   */
  name: string;
  /**
   *
   * - maxLength: 20
   */
  phone: string;
  /**
   *
   * - maxLength: 30
   */
  position: string;
  rows: PersonelRow[];
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  salary: string;
  /**
   *
   * - Format: date
   */
  start_date: string;
  /**
   *
   * - maxLength: 30
   */
  surname: string;
  /**
   *
   * - Format: date
   */
  end_date?: string;
  /**
   *
   * - Format: uri
   */
  image?: string;
}

/**
 *
 * Adds nested create feature
 */

export interface PersonelRequest {
  /**
   *
   * - maxLength: 80
   * - minLength: 1
   */
  address: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  department: string;
  /**
   *
   * - Format: email
   * - maxLength: 40
   * - minLength: 1
   */
  email: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  name: string;
  /**
   *
   * - maxLength: 20
   * - minLength: 1
   */
  phone: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  position: string;
  rows: PersonelRowRequest[];
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  salary: string;
  /**
   *
   * - Format: date
   */
  start_date: string;
  /**
   *
   * - maxLength: 30
   * - minLength: 1
   */
  surname: string;
  /**
   *
   * - Format: date
   */
  end_date?: string;
  /**
   *
   * - Format: binary
   */
  image?: string;
}

export interface PersonelRow {
  school?: string;
  /**
   *
   * - Format: date
   */
  school_end_date?: string;
  /**
   *
   * - Format: date
   */
  school_start_date?: string;
}

export interface PersonelRowRequest {
  /**
   *
   * - minLength: 1
   */
  school?: string;
  /**
   *
   * - Format: date
   */
  school_end_date?: string;
  /**
   *
   * - Format: date
   */
  school_start_date?: string;
}
