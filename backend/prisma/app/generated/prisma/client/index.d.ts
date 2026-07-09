
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model GuestUser
 * 
 */
export type GuestUser = $Result.DefaultSelection<Prisma.$GuestUserPayload>
/**
 * Model PaidUser
 * 
 */
export type PaidUser = $Result.DefaultSelection<Prisma.$PaidUserPayload>
/**
 * Model Plans
 * 
 */
export type Plans = $Result.DefaultSelection<Prisma.$PlansPayload>
/**
 * Model RefundUser
 * 
 */
export type RefundUser = $Result.DefaultSelection<Prisma.$RefundUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestUser`: Exposes CRUD operations for the **GuestUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestUsers
    * const guestUsers = await prisma.guestUser.findMany()
    * ```
    */
  get guestUser(): Prisma.GuestUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paidUser`: Exposes CRUD operations for the **PaidUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaidUsers
    * const paidUsers = await prisma.paidUser.findMany()
    * ```
    */
  get paidUser(): Prisma.PaidUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **Plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.PlansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refundUser`: Exposes CRUD operations for the **RefundUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefundUsers
    * const refundUsers = await prisma.refundUser.findMany()
    * ```
    */
  get refundUser(): Prisma.RefundUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    GuestUser: 'GuestUser',
    PaidUser: 'PaidUser',
    Plans: 'Plans',
    RefundUser: 'RefundUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "guestUser" | "paidUser" | "plans" | "refundUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      GuestUser: {
        payload: Prisma.$GuestUserPayload<ExtArgs>
        fields: Prisma.GuestUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          findFirst: {
            args: Prisma.GuestUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          findMany: {
            args: Prisma.GuestUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>[]
          }
          create: {
            args: Prisma.GuestUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          createMany: {
            args: Prisma.GuestUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuestUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          update: {
            args: Prisma.GuestUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          deleteMany: {
            args: Prisma.GuestUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuestUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestUserPayload>
          }
          aggregate: {
            args: Prisma.GuestUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestUser>
          }
          groupBy: {
            args: Prisma.GuestUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestUserCountArgs<ExtArgs>
            result: $Utils.Optional<GuestUserCountAggregateOutputType> | number
          }
        }
      }
      PaidUser: {
        payload: Prisma.$PaidUserPayload<ExtArgs>
        fields: Prisma.PaidUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaidUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaidUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          findFirst: {
            args: Prisma.PaidUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaidUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          findMany: {
            args: Prisma.PaidUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>[]
          }
          create: {
            args: Prisma.PaidUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          createMany: {
            args: Prisma.PaidUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaidUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          update: {
            args: Prisma.PaidUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          deleteMany: {
            args: Prisma.PaidUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaidUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaidUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidUserPayload>
          }
          aggregate: {
            args: Prisma.PaidUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaidUser>
          }
          groupBy: {
            args: Prisma.PaidUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaidUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaidUserCountArgs<ExtArgs>
            result: $Utils.Optional<PaidUserCountAggregateOutputType> | number
          }
        }
      }
      Plans: {
        payload: Prisma.$PlansPayload<ExtArgs>
        fields: Prisma.PlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findFirst: {
            args: Prisma.PlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          findMany: {
            args: Prisma.PlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>[]
          }
          create: {
            args: Prisma.PlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          createMany: {
            args: Prisma.PlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          update: {
            args: Prisma.PlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          deleteMany: {
            args: Prisma.PlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.PlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      RefundUser: {
        payload: Prisma.$RefundUserPayload<ExtArgs>
        fields: Prisma.RefundUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          findFirst: {
            args: Prisma.RefundUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          findMany: {
            args: Prisma.RefundUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>[]
          }
          create: {
            args: Prisma.RefundUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          createMany: {
            args: Prisma.RefundUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefundUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          update: {
            args: Prisma.RefundUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          deleteMany: {
            args: Prisma.RefundUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefundUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundUserPayload>
          }
          aggregate: {
            args: Prisma.RefundUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefundUser>
          }
          groupBy: {
            args: Prisma.RefundUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundUserCountArgs<ExtArgs>
            result: $Utils.Optional<RefundUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    guestUser?: GuestUserOmit
    paidUser?: PaidUserOmit
    plans?: PlansOmit
    refundUser?: RefundUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    gender: string | null
    mobile_no: string | null
    email: string | null
    password: string | null
    reference_token: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    gender: string | null
    mobile_no: string | null
    email: string | null
    password: string | null
    reference_token: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    middle_name: number
    last_name: number
    gender: number
    mobile_no: number
    email: number
    password: number
    reference_token: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    gender?: true
    mobile_no?: true
    email?: true
    password?: true
    reference_token?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    middle_name: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    gender?: boolean
    mobile_no?: boolean
    email?: boolean
    password?: boolean
    reference_token?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "middle_name" | "last_name" | "gender" | "mobile_no" | "email" | "password" | "reference_token", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      middle_name: string | null
      last_name: string
      gender: string
      mobile_no: string
      email: string
      password: string
      reference_token: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly middle_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'String'>
    readonly mobile_no: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly reference_token: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model GuestUser
   */

  export type AggregateGuestUser = {
    _count: GuestUserCountAggregateOutputType | null
    _avg: GuestUserAvgAggregateOutputType | null
    _sum: GuestUserSumAggregateOutputType | null
    _min: GuestUserMinAggregateOutputType | null
    _max: GuestUserMaxAggregateOutputType | null
  }

  export type GuestUserAvgAggregateOutputType = {
    id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
  }

  export type GuestUserSumAggregateOutputType = {
    id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
  }

  export type GuestUserMinAggregateOutputType = {
    id: number | null
    ip: string | null
    fingerprint: string | null
    used: number | null
    max: number | null
    maxSize: number | null
    startDate: string | null
  }

  export type GuestUserMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    fingerprint: string | null
    used: number | null
    max: number | null
    maxSize: number | null
    startDate: string | null
  }

  export type GuestUserCountAggregateOutputType = {
    id: number
    ip: number
    fingerprint: number
    used: number
    max: number
    maxSize: number
    startDate: number
    _all: number
  }


  export type GuestUserAvgAggregateInputType = {
    id?: true
    used?: true
    max?: true
    maxSize?: true
  }

  export type GuestUserSumAggregateInputType = {
    id?: true
    used?: true
    max?: true
    maxSize?: true
  }

  export type GuestUserMinAggregateInputType = {
    id?: true
    ip?: true
    fingerprint?: true
    used?: true
    max?: true
    maxSize?: true
    startDate?: true
  }

  export type GuestUserMaxAggregateInputType = {
    id?: true
    ip?: true
    fingerprint?: true
    used?: true
    max?: true
    maxSize?: true
    startDate?: true
  }

  export type GuestUserCountAggregateInputType = {
    id?: true
    ip?: true
    fingerprint?: true
    used?: true
    max?: true
    maxSize?: true
    startDate?: true
    _all?: true
  }

  export type GuestUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestUser to aggregate.
     */
    where?: GuestUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestUsers to fetch.
     */
    orderBy?: GuestUserOrderByWithRelationInput | GuestUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestUsers
    **/
    _count?: true | GuestUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestUserMaxAggregateInputType
  }

  export type GetGuestUserAggregateType<T extends GuestUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestUser[P]>
      : GetScalarType<T[P], AggregateGuestUser[P]>
  }




  export type GuestUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestUserWhereInput
    orderBy?: GuestUserOrderByWithAggregationInput | GuestUserOrderByWithAggregationInput[]
    by: GuestUserScalarFieldEnum[] | GuestUserScalarFieldEnum
    having?: GuestUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestUserCountAggregateInputType | true
    _avg?: GuestUserAvgAggregateInputType
    _sum?: GuestUserSumAggregateInputType
    _min?: GuestUserMinAggregateInputType
    _max?: GuestUserMaxAggregateInputType
  }

  export type GuestUserGroupByOutputType = {
    id: number
    ip: string
    fingerprint: string
    used: number
    max: number
    maxSize: number
    startDate: string
    _count: GuestUserCountAggregateOutputType | null
    _avg: GuestUserAvgAggregateOutputType | null
    _sum: GuestUserSumAggregateOutputType | null
    _min: GuestUserMinAggregateOutputType | null
    _max: GuestUserMaxAggregateOutputType | null
  }

  type GetGuestUserGroupByPayload<T extends GuestUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestUserGroupByOutputType[P]>
            : GetScalarType<T[P], GuestUserGroupByOutputType[P]>
        }
      >
    >


  export type GuestUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    fingerprint?: boolean
    used?: boolean
    max?: boolean
    maxSize?: boolean
    startDate?: boolean
  }, ExtArgs["result"]["guestUser"]>



  export type GuestUserSelectScalar = {
    id?: boolean
    ip?: boolean
    fingerprint?: boolean
    used?: boolean
    max?: boolean
    maxSize?: boolean
    startDate?: boolean
  }

  export type GuestUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "fingerprint" | "used" | "max" | "maxSize" | "startDate", ExtArgs["result"]["guestUser"]>

  export type $GuestUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      fingerprint: string
      used: number
      max: number
      maxSize: number
      startDate: string
    }, ExtArgs["result"]["guestUser"]>
    composites: {}
  }

  type GuestUserGetPayload<S extends boolean | null | undefined | GuestUserDefaultArgs> = $Result.GetResult<Prisma.$GuestUserPayload, S>

  type GuestUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestUserCountAggregateInputType | true
    }

  export interface GuestUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestUser'], meta: { name: 'GuestUser' } }
    /**
     * Find zero or one GuestUser that matches the filter.
     * @param {GuestUserFindUniqueArgs} args - Arguments to find a GuestUser
     * @example
     * // Get one GuestUser
     * const guestUser = await prisma.guestUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestUserFindUniqueArgs>(args: SelectSubset<T, GuestUserFindUniqueArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestUserFindUniqueOrThrowArgs} args - Arguments to find a GuestUser
     * @example
     * // Get one GuestUser
     * const guestUser = await prisma.guestUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserFindFirstArgs} args - Arguments to find a GuestUser
     * @example
     * // Get one GuestUser
     * const guestUser = await prisma.guestUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestUserFindFirstArgs>(args?: SelectSubset<T, GuestUserFindFirstArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserFindFirstOrThrowArgs} args - Arguments to find a GuestUser
     * @example
     * // Get one GuestUser
     * const guestUser = await prisma.guestUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestUsers
     * const guestUsers = await prisma.guestUser.findMany()
     * 
     * // Get first 10 GuestUsers
     * const guestUsers = await prisma.guestUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestUserWithIdOnly = await prisma.guestUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestUserFindManyArgs>(args?: SelectSubset<T, GuestUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestUser.
     * @param {GuestUserCreateArgs} args - Arguments to create a GuestUser.
     * @example
     * // Create one GuestUser
     * const GuestUser = await prisma.guestUser.create({
     *   data: {
     *     // ... data to create a GuestUser
     *   }
     * })
     * 
     */
    create<T extends GuestUserCreateArgs>(args: SelectSubset<T, GuestUserCreateArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestUsers.
     * @param {GuestUserCreateManyArgs} args - Arguments to create many GuestUsers.
     * @example
     * // Create many GuestUsers
     * const guestUser = await prisma.guestUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestUserCreateManyArgs>(args?: SelectSubset<T, GuestUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GuestUser.
     * @param {GuestUserDeleteArgs} args - Arguments to delete one GuestUser.
     * @example
     * // Delete one GuestUser
     * const GuestUser = await prisma.guestUser.delete({
     *   where: {
     *     // ... filter to delete one GuestUser
     *   }
     * })
     * 
     */
    delete<T extends GuestUserDeleteArgs>(args: SelectSubset<T, GuestUserDeleteArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestUser.
     * @param {GuestUserUpdateArgs} args - Arguments to update one GuestUser.
     * @example
     * // Update one GuestUser
     * const guestUser = await prisma.guestUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUserUpdateArgs>(args: SelectSubset<T, GuestUserUpdateArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestUsers.
     * @param {GuestUserDeleteManyArgs} args - Arguments to filter GuestUsers to delete.
     * @example
     * // Delete a few GuestUsers
     * const { count } = await prisma.guestUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestUserDeleteManyArgs>(args?: SelectSubset<T, GuestUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestUsers
     * const guestUser = await prisma.guestUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUserUpdateManyArgs>(args: SelectSubset<T, GuestUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GuestUser.
     * @param {GuestUserUpsertArgs} args - Arguments to update or create a GuestUser.
     * @example
     * // Update or create a GuestUser
     * const guestUser = await prisma.guestUser.upsert({
     *   create: {
     *     // ... data to create a GuestUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestUser we want to update
     *   }
     * })
     */
    upsert<T extends GuestUserUpsertArgs>(args: SelectSubset<T, GuestUserUpsertArgs<ExtArgs>>): Prisma__GuestUserClient<$Result.GetResult<Prisma.$GuestUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserCountArgs} args - Arguments to filter GuestUsers to count.
     * @example
     * // Count the number of GuestUsers
     * const count = await prisma.guestUser.count({
     *   where: {
     *     // ... the filter for the GuestUsers we want to count
     *   }
     * })
    **/
    count<T extends GuestUserCountArgs>(
      args?: Subset<T, GuestUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestUserAggregateArgs>(args: Subset<T, GuestUserAggregateArgs>): Prisma.PrismaPromise<GetGuestUserAggregateType<T>>

    /**
     * Group by GuestUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestUserGroupByArgs['orderBy'] }
        : { orderBy?: GuestUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestUser model
   */
  readonly fields: GuestUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuestUser model
   */
  interface GuestUserFieldRefs {
    readonly id: FieldRef<"GuestUser", 'Int'>
    readonly ip: FieldRef<"GuestUser", 'String'>
    readonly fingerprint: FieldRef<"GuestUser", 'String'>
    readonly used: FieldRef<"GuestUser", 'Int'>
    readonly max: FieldRef<"GuestUser", 'Int'>
    readonly maxSize: FieldRef<"GuestUser", 'Int'>
    readonly startDate: FieldRef<"GuestUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuestUser findUnique
   */
  export type GuestUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter, which GuestUser to fetch.
     */
    where: GuestUserWhereUniqueInput
  }

  /**
   * GuestUser findUniqueOrThrow
   */
  export type GuestUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter, which GuestUser to fetch.
     */
    where: GuestUserWhereUniqueInput
  }

  /**
   * GuestUser findFirst
   */
  export type GuestUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter, which GuestUser to fetch.
     */
    where?: GuestUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestUsers to fetch.
     */
    orderBy?: GuestUserOrderByWithRelationInput | GuestUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestUsers.
     */
    cursor?: GuestUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestUsers.
     */
    distinct?: GuestUserScalarFieldEnum | GuestUserScalarFieldEnum[]
  }

  /**
   * GuestUser findFirstOrThrow
   */
  export type GuestUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter, which GuestUser to fetch.
     */
    where?: GuestUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestUsers to fetch.
     */
    orderBy?: GuestUserOrderByWithRelationInput | GuestUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestUsers.
     */
    cursor?: GuestUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestUsers.
     */
    distinct?: GuestUserScalarFieldEnum | GuestUserScalarFieldEnum[]
  }

  /**
   * GuestUser findMany
   */
  export type GuestUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter, which GuestUsers to fetch.
     */
    where?: GuestUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestUsers to fetch.
     */
    orderBy?: GuestUserOrderByWithRelationInput | GuestUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestUsers.
     */
    cursor?: GuestUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestUsers.
     */
    skip?: number
    distinct?: GuestUserScalarFieldEnum | GuestUserScalarFieldEnum[]
  }

  /**
   * GuestUser create
   */
  export type GuestUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * The data needed to create a GuestUser.
     */
    data: XOR<GuestUserCreateInput, GuestUserUncheckedCreateInput>
  }

  /**
   * GuestUser createMany
   */
  export type GuestUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestUsers.
     */
    data: GuestUserCreateManyInput | GuestUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuestUser update
   */
  export type GuestUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * The data needed to update a GuestUser.
     */
    data: XOR<GuestUserUpdateInput, GuestUserUncheckedUpdateInput>
    /**
     * Choose, which GuestUser to update.
     */
    where: GuestUserWhereUniqueInput
  }

  /**
   * GuestUser updateMany
   */
  export type GuestUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestUsers.
     */
    data: XOR<GuestUserUpdateManyMutationInput, GuestUserUncheckedUpdateManyInput>
    /**
     * Filter which GuestUsers to update
     */
    where?: GuestUserWhereInput
    /**
     * Limit how many GuestUsers to update.
     */
    limit?: number
  }

  /**
   * GuestUser upsert
   */
  export type GuestUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * The filter to search for the GuestUser to update in case it exists.
     */
    where: GuestUserWhereUniqueInput
    /**
     * In case the GuestUser found by the `where` argument doesn't exist, create a new GuestUser with this data.
     */
    create: XOR<GuestUserCreateInput, GuestUserUncheckedCreateInput>
    /**
     * In case the GuestUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUserUpdateInput, GuestUserUncheckedUpdateInput>
  }

  /**
   * GuestUser delete
   */
  export type GuestUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
    /**
     * Filter which GuestUser to delete.
     */
    where: GuestUserWhereUniqueInput
  }

  /**
   * GuestUser deleteMany
   */
  export type GuestUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestUsers to delete
     */
    where?: GuestUserWhereInput
    /**
     * Limit how many GuestUsers to delete.
     */
    limit?: number
  }

  /**
   * GuestUser without action
   */
  export type GuestUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestUser
     */
    select?: GuestUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestUser
     */
    omit?: GuestUserOmit<ExtArgs> | null
  }


  /**
   * Model PaidUser
   */

  export type AggregatePaidUser = {
    _count: PaidUserCountAggregateOutputType | null
    _avg: PaidUserAvgAggregateOutputType | null
    _sum: PaidUserSumAggregateOutputType | null
    _min: PaidUserMinAggregateOutputType | null
    _max: PaidUserMaxAggregateOutputType | null
  }

  export type PaidUserAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
    maxBatch: number | null
  }

  export type PaidUserSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
    maxBatch: number | null
  }

  export type PaidUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    plan_id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
    maxBatch: number | null
    start_date: string | null
    end_date: string | null
    conversion_allowed: string | null
    payment_id: string | null
  }

  export type PaidUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    plan_id: number | null
    used: number | null
    max: number | null
    maxSize: number | null
    maxBatch: number | null
    start_date: string | null
    end_date: string | null
    conversion_allowed: string | null
    payment_id: string | null
  }

  export type PaidUserCountAggregateOutputType = {
    id: number
    email: number
    plan_id: number
    used: number
    max: number
    maxSize: number
    maxBatch: number
    start_date: number
    end_date: number
    conversion_allowed: number
    payment_id: number
    _all: number
  }


  export type PaidUserAvgAggregateInputType = {
    id?: true
    plan_id?: true
    used?: true
    max?: true
    maxSize?: true
    maxBatch?: true
  }

  export type PaidUserSumAggregateInputType = {
    id?: true
    plan_id?: true
    used?: true
    max?: true
    maxSize?: true
    maxBatch?: true
  }

  export type PaidUserMinAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    used?: true
    max?: true
    maxSize?: true
    maxBatch?: true
    start_date?: true
    end_date?: true
    conversion_allowed?: true
    payment_id?: true
  }

  export type PaidUserMaxAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    used?: true
    max?: true
    maxSize?: true
    maxBatch?: true
    start_date?: true
    end_date?: true
    conversion_allowed?: true
    payment_id?: true
  }

  export type PaidUserCountAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    used?: true
    max?: true
    maxSize?: true
    maxBatch?: true
    start_date?: true
    end_date?: true
    conversion_allowed?: true
    payment_id?: true
    _all?: true
  }

  export type PaidUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaidUser to aggregate.
     */
    where?: PaidUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidUsers to fetch.
     */
    orderBy?: PaidUserOrderByWithRelationInput | PaidUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaidUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaidUsers
    **/
    _count?: true | PaidUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaidUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaidUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaidUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaidUserMaxAggregateInputType
  }

  export type GetPaidUserAggregateType<T extends PaidUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePaidUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaidUser[P]>
      : GetScalarType<T[P], AggregatePaidUser[P]>
  }




  export type PaidUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaidUserWhereInput
    orderBy?: PaidUserOrderByWithAggregationInput | PaidUserOrderByWithAggregationInput[]
    by: PaidUserScalarFieldEnum[] | PaidUserScalarFieldEnum
    having?: PaidUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaidUserCountAggregateInputType | true
    _avg?: PaidUserAvgAggregateInputType
    _sum?: PaidUserSumAggregateInputType
    _min?: PaidUserMinAggregateInputType
    _max?: PaidUserMaxAggregateInputType
  }

  export type PaidUserGroupByOutputType = {
    id: number
    email: string
    plan_id: number
    used: number | null
    max: number
    maxSize: number
    maxBatch: number
    start_date: string
    end_date: string
    conversion_allowed: string
    payment_id: string
    _count: PaidUserCountAggregateOutputType | null
    _avg: PaidUserAvgAggregateOutputType | null
    _sum: PaidUserSumAggregateOutputType | null
    _min: PaidUserMinAggregateOutputType | null
    _max: PaidUserMaxAggregateOutputType | null
  }

  type GetPaidUserGroupByPayload<T extends PaidUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaidUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaidUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaidUserGroupByOutputType[P]>
            : GetScalarType<T[P], PaidUserGroupByOutputType[P]>
        }
      >
    >


  export type PaidUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    plan_id?: boolean
    used?: boolean
    max?: boolean
    maxSize?: boolean
    maxBatch?: boolean
    start_date?: boolean
    end_date?: boolean
    conversion_allowed?: boolean
    payment_id?: boolean
  }, ExtArgs["result"]["paidUser"]>



  export type PaidUserSelectScalar = {
    id?: boolean
    email?: boolean
    plan_id?: boolean
    used?: boolean
    max?: boolean
    maxSize?: boolean
    maxBatch?: boolean
    start_date?: boolean
    end_date?: boolean
    conversion_allowed?: boolean
    payment_id?: boolean
  }

  export type PaidUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "plan_id" | "used" | "max" | "maxSize" | "maxBatch" | "start_date" | "end_date" | "conversion_allowed" | "payment_id", ExtArgs["result"]["paidUser"]>

  export type $PaidUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaidUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      plan_id: number
      used: number | null
      max: number
      maxSize: number
      maxBatch: number
      start_date: string
      end_date: string
      conversion_allowed: string
      payment_id: string
    }, ExtArgs["result"]["paidUser"]>
    composites: {}
  }

  type PaidUserGetPayload<S extends boolean | null | undefined | PaidUserDefaultArgs> = $Result.GetResult<Prisma.$PaidUserPayload, S>

  type PaidUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaidUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaidUserCountAggregateInputType | true
    }

  export interface PaidUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaidUser'], meta: { name: 'PaidUser' } }
    /**
     * Find zero or one PaidUser that matches the filter.
     * @param {PaidUserFindUniqueArgs} args - Arguments to find a PaidUser
     * @example
     * // Get one PaidUser
     * const paidUser = await prisma.paidUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaidUserFindUniqueArgs>(args: SelectSubset<T, PaidUserFindUniqueArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaidUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaidUserFindUniqueOrThrowArgs} args - Arguments to find a PaidUser
     * @example
     * // Get one PaidUser
     * const paidUser = await prisma.paidUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaidUserFindUniqueOrThrowArgs>(args: SelectSubset<T, PaidUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaidUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserFindFirstArgs} args - Arguments to find a PaidUser
     * @example
     * // Get one PaidUser
     * const paidUser = await prisma.paidUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaidUserFindFirstArgs>(args?: SelectSubset<T, PaidUserFindFirstArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaidUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserFindFirstOrThrowArgs} args - Arguments to find a PaidUser
     * @example
     * // Get one PaidUser
     * const paidUser = await prisma.paidUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaidUserFindFirstOrThrowArgs>(args?: SelectSubset<T, PaidUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaidUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaidUsers
     * const paidUsers = await prisma.paidUser.findMany()
     * 
     * // Get first 10 PaidUsers
     * const paidUsers = await prisma.paidUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paidUserWithIdOnly = await prisma.paidUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaidUserFindManyArgs>(args?: SelectSubset<T, PaidUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaidUser.
     * @param {PaidUserCreateArgs} args - Arguments to create a PaidUser.
     * @example
     * // Create one PaidUser
     * const PaidUser = await prisma.paidUser.create({
     *   data: {
     *     // ... data to create a PaidUser
     *   }
     * })
     * 
     */
    create<T extends PaidUserCreateArgs>(args: SelectSubset<T, PaidUserCreateArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaidUsers.
     * @param {PaidUserCreateManyArgs} args - Arguments to create many PaidUsers.
     * @example
     * // Create many PaidUsers
     * const paidUser = await prisma.paidUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaidUserCreateManyArgs>(args?: SelectSubset<T, PaidUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaidUser.
     * @param {PaidUserDeleteArgs} args - Arguments to delete one PaidUser.
     * @example
     * // Delete one PaidUser
     * const PaidUser = await prisma.paidUser.delete({
     *   where: {
     *     // ... filter to delete one PaidUser
     *   }
     * })
     * 
     */
    delete<T extends PaidUserDeleteArgs>(args: SelectSubset<T, PaidUserDeleteArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaidUser.
     * @param {PaidUserUpdateArgs} args - Arguments to update one PaidUser.
     * @example
     * // Update one PaidUser
     * const paidUser = await prisma.paidUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaidUserUpdateArgs>(args: SelectSubset<T, PaidUserUpdateArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaidUsers.
     * @param {PaidUserDeleteManyArgs} args - Arguments to filter PaidUsers to delete.
     * @example
     * // Delete a few PaidUsers
     * const { count } = await prisma.paidUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaidUserDeleteManyArgs>(args?: SelectSubset<T, PaidUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaidUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaidUsers
     * const paidUser = await prisma.paidUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaidUserUpdateManyArgs>(args: SelectSubset<T, PaidUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaidUser.
     * @param {PaidUserUpsertArgs} args - Arguments to update or create a PaidUser.
     * @example
     * // Update or create a PaidUser
     * const paidUser = await prisma.paidUser.upsert({
     *   create: {
     *     // ... data to create a PaidUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaidUser we want to update
     *   }
     * })
     */
    upsert<T extends PaidUserUpsertArgs>(args: SelectSubset<T, PaidUserUpsertArgs<ExtArgs>>): Prisma__PaidUserClient<$Result.GetResult<Prisma.$PaidUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaidUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserCountArgs} args - Arguments to filter PaidUsers to count.
     * @example
     * // Count the number of PaidUsers
     * const count = await prisma.paidUser.count({
     *   where: {
     *     // ... the filter for the PaidUsers we want to count
     *   }
     * })
    **/
    count<T extends PaidUserCountArgs>(
      args?: Subset<T, PaidUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaidUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaidUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaidUserAggregateArgs>(args: Subset<T, PaidUserAggregateArgs>): Prisma.PrismaPromise<GetPaidUserAggregateType<T>>

    /**
     * Group by PaidUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaidUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaidUserGroupByArgs['orderBy'] }
        : { orderBy?: PaidUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaidUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaidUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaidUser model
   */
  readonly fields: PaidUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaidUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaidUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaidUser model
   */
  interface PaidUserFieldRefs {
    readonly id: FieldRef<"PaidUser", 'Int'>
    readonly email: FieldRef<"PaidUser", 'String'>
    readonly plan_id: FieldRef<"PaidUser", 'Int'>
    readonly used: FieldRef<"PaidUser", 'Int'>
    readonly max: FieldRef<"PaidUser", 'Int'>
    readonly maxSize: FieldRef<"PaidUser", 'Int'>
    readonly maxBatch: FieldRef<"PaidUser", 'Int'>
    readonly start_date: FieldRef<"PaidUser", 'String'>
    readonly end_date: FieldRef<"PaidUser", 'String'>
    readonly conversion_allowed: FieldRef<"PaidUser", 'String'>
    readonly payment_id: FieldRef<"PaidUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaidUser findUnique
   */
  export type PaidUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter, which PaidUser to fetch.
     */
    where: PaidUserWhereUniqueInput
  }

  /**
   * PaidUser findUniqueOrThrow
   */
  export type PaidUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter, which PaidUser to fetch.
     */
    where: PaidUserWhereUniqueInput
  }

  /**
   * PaidUser findFirst
   */
  export type PaidUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter, which PaidUser to fetch.
     */
    where?: PaidUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidUsers to fetch.
     */
    orderBy?: PaidUserOrderByWithRelationInput | PaidUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaidUsers.
     */
    cursor?: PaidUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaidUsers.
     */
    distinct?: PaidUserScalarFieldEnum | PaidUserScalarFieldEnum[]
  }

  /**
   * PaidUser findFirstOrThrow
   */
  export type PaidUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter, which PaidUser to fetch.
     */
    where?: PaidUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidUsers to fetch.
     */
    orderBy?: PaidUserOrderByWithRelationInput | PaidUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaidUsers.
     */
    cursor?: PaidUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaidUsers.
     */
    distinct?: PaidUserScalarFieldEnum | PaidUserScalarFieldEnum[]
  }

  /**
   * PaidUser findMany
   */
  export type PaidUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter, which PaidUsers to fetch.
     */
    where?: PaidUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidUsers to fetch.
     */
    orderBy?: PaidUserOrderByWithRelationInput | PaidUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaidUsers.
     */
    cursor?: PaidUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidUsers.
     */
    skip?: number
    distinct?: PaidUserScalarFieldEnum | PaidUserScalarFieldEnum[]
  }

  /**
   * PaidUser create
   */
  export type PaidUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * The data needed to create a PaidUser.
     */
    data: XOR<PaidUserCreateInput, PaidUserUncheckedCreateInput>
  }

  /**
   * PaidUser createMany
   */
  export type PaidUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaidUsers.
     */
    data: PaidUserCreateManyInput | PaidUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaidUser update
   */
  export type PaidUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * The data needed to update a PaidUser.
     */
    data: XOR<PaidUserUpdateInput, PaidUserUncheckedUpdateInput>
    /**
     * Choose, which PaidUser to update.
     */
    where: PaidUserWhereUniqueInput
  }

  /**
   * PaidUser updateMany
   */
  export type PaidUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaidUsers.
     */
    data: XOR<PaidUserUpdateManyMutationInput, PaidUserUncheckedUpdateManyInput>
    /**
     * Filter which PaidUsers to update
     */
    where?: PaidUserWhereInput
    /**
     * Limit how many PaidUsers to update.
     */
    limit?: number
  }

  /**
   * PaidUser upsert
   */
  export type PaidUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * The filter to search for the PaidUser to update in case it exists.
     */
    where: PaidUserWhereUniqueInput
    /**
     * In case the PaidUser found by the `where` argument doesn't exist, create a new PaidUser with this data.
     */
    create: XOR<PaidUserCreateInput, PaidUserUncheckedCreateInput>
    /**
     * In case the PaidUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaidUserUpdateInput, PaidUserUncheckedUpdateInput>
  }

  /**
   * PaidUser delete
   */
  export type PaidUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
    /**
     * Filter which PaidUser to delete.
     */
    where: PaidUserWhereUniqueInput
  }

  /**
   * PaidUser deleteMany
   */
  export type PaidUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaidUsers to delete
     */
    where?: PaidUserWhereInput
    /**
     * Limit how many PaidUsers to delete.
     */
    limit?: number
  }

  /**
   * PaidUser without action
   */
  export type PaidUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidUser
     */
    select?: PaidUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidUser
     */
    omit?: PaidUserOmit<ExtArgs> | null
  }


  /**
   * Model Plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    id: number | null
    price: number | null
    maxConversions: number | null
    maxFileSizeMB: number | null
    batchLimit: number | null
  }

  export type PlansSumAggregateOutputType = {
    id: number | null
    price: number | null
    maxConversions: number | null
    maxFileSizeMB: number | null
    batchLimit: number | null
  }

  export type PlansMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    maxConversions: number | null
    maxFileSizeMB: number | null
    batchLimit: number | null
    support: string | null
    formats: string | null
    advantages: string | null
  }

  export type PlansMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    maxConversions: number | null
    maxFileSizeMB: number | null
    batchLimit: number | null
    support: string | null
    formats: string | null
    advantages: string | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    maxConversions: number
    maxFileSizeMB: number
    batchLimit: number
    support: number
    formats: number
    advantages: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    id?: true
    price?: true
    maxConversions?: true
    maxFileSizeMB?: true
    batchLimit?: true
  }

  export type PlansSumAggregateInputType = {
    id?: true
    price?: true
    maxConversions?: true
    maxFileSizeMB?: true
    batchLimit?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    maxConversions?: true
    maxFileSizeMB?: true
    batchLimit?: true
    support?: true
    formats?: true
    advantages?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    maxConversions?: true
    maxFileSizeMB?: true
    batchLimit?: true
    support?: true
    formats?: true
    advantages?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    maxConversions?: true
    maxFileSizeMB?: true
    batchLimit?: true
    support?: true
    formats?: true
    advantages?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to aggregate.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type PlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlansWhereInput
    orderBy?: PlansOrderByWithAggregationInput | PlansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: PlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    maxConversions: number
    maxFileSizeMB: number
    batchLimit: number
    support: string
    formats: string
    advantages: string
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends PlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type PlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    maxConversions?: boolean
    maxFileSizeMB?: boolean
    batchLimit?: boolean
    support?: boolean
    formats?: boolean
    advantages?: boolean
  }, ExtArgs["result"]["plans"]>



  export type PlansSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    maxConversions?: boolean
    maxFileSizeMB?: boolean
    batchLimit?: boolean
    support?: boolean
    formats?: boolean
    advantages?: boolean
  }

  export type PlansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "maxConversions" | "maxFileSizeMB" | "batchLimit" | "support" | "formats" | "advantages", ExtArgs["result"]["plans"]>

  export type $PlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plans"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      description: string
      maxConversions: number
      maxFileSizeMB: number
      batchLimit: number
      support: string
      formats: string
      advantages: string
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type PlansGetPayload<S extends boolean | null | undefined | PlansDefaultArgs> = $Result.GetResult<Prisma.$PlansPayload, S>

  type PlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface PlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plans'], meta: { name: 'Plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {PlansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlansFindUniqueArgs>(args: SelectSubset<T, PlansFindUniqueArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlansFindUniqueOrThrowArgs>(args: SelectSubset<T, PlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlansFindFirstArgs>(args?: SelectSubset<T, PlansFindFirstArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlansFindFirstOrThrowArgs>(args?: SelectSubset<T, PlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlansFindManyArgs>(args?: SelectSubset<T, PlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plans.
     * @param {PlansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends PlansCreateArgs>(args: SelectSubset<T, PlansCreateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlansCreateManyArgs>(args?: SelectSubset<T, PlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plans.
     * @param {PlansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends PlansDeleteArgs>(args: SelectSubset<T, PlansDeleteArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plans.
     * @param {PlansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlansUpdateArgs>(args: SelectSubset<T, PlansUpdateArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlansDeleteManyArgs>(args?: SelectSubset<T, PlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlansUpdateManyArgs>(args: SelectSubset<T, PlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plans.
     * @param {PlansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends PlansUpsertArgs>(args: SelectSubset<T, PlansUpsertArgs<ExtArgs>>): Prisma__PlansClient<$Result.GetResult<Prisma.$PlansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlansCountArgs>(
      args?: Subset<T, PlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlansGroupByArgs['orderBy'] }
        : { orderBy?: PlansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plans model
   */
  readonly fields: PlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plans model
   */
  interface PlansFieldRefs {
    readonly id: FieldRef<"Plans", 'Int'>
    readonly name: FieldRef<"Plans", 'String'>
    readonly price: FieldRef<"Plans", 'Float'>
    readonly description: FieldRef<"Plans", 'String'>
    readonly maxConversions: FieldRef<"Plans", 'Int'>
    readonly maxFileSizeMB: FieldRef<"Plans", 'Int'>
    readonly batchLimit: FieldRef<"Plans", 'Int'>
    readonly support: FieldRef<"Plans", 'String'>
    readonly formats: FieldRef<"Plans", 'String'>
    readonly advantages: FieldRef<"Plans", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plans findUnique
   */
  export type PlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findUniqueOrThrow
   */
  export type PlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans findFirst
   */
  export type PlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findFirstOrThrow
   */
  export type PlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans findMany
   */
  export type PlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlansOrderByWithRelationInput | PlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * Plans create
   */
  export type PlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data needed to create a Plans.
     */
    data: XOR<PlansCreateInput, PlansUncheckedCreateInput>
  }

  /**
   * Plans createMany
   */
  export type PlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlansCreateManyInput | PlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plans update
   */
  export type PlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The data needed to update a Plans.
     */
    data: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
    /**
     * Choose, which Plans to update.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans updateMany
   */
  export type PlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlansUpdateManyMutationInput, PlansUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plans upsert
   */
  export type PlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * The filter to search for the Plans to update in case it exists.
     */
    where: PlansWhereUniqueInput
    /**
     * In case the Plans found by the `where` argument doesn't exist, create a new Plans with this data.
     */
    create: XOR<PlansCreateInput, PlansUncheckedCreateInput>
    /**
     * In case the Plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlansUpdateInput, PlansUncheckedUpdateInput>
  }

  /**
   * Plans delete
   */
  export type PlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
    /**
     * Filter which Plans to delete.
     */
    where: PlansWhereUniqueInput
  }

  /**
   * Plans deleteMany
   */
  export type PlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlansWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plans without action
   */
  export type PlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plans
     */
    select?: PlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plans
     */
    omit?: PlansOmit<ExtArgs> | null
  }


  /**
   * Model RefundUser
   */

  export type AggregateRefundUser = {
    _count: RefundUserCountAggregateOutputType | null
    _avg: RefundUserAvgAggregateOutputType | null
    _sum: RefundUserSumAggregateOutputType | null
    _min: RefundUserMinAggregateOutputType | null
    _max: RefundUserMaxAggregateOutputType | null
  }

  export type RefundUserAvgAggregateOutputType = {
    id: number | null
    plan_id: number | null
    amount: number | null
  }

  export type RefundUserSumAggregateOutputType = {
    id: number | null
    plan_id: number | null
    amount: number | null
  }

  export type RefundUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    plan_id: number | null
    amount: number | null
    refund_id: string | null
    refund_status: string | null
  }

  export type RefundUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    plan_id: number | null
    amount: number | null
    refund_id: string | null
    refund_status: string | null
  }

  export type RefundUserCountAggregateOutputType = {
    id: number
    email: number
    plan_id: number
    amount: number
    refund_id: number
    refund_status: number
    _all: number
  }


  export type RefundUserAvgAggregateInputType = {
    id?: true
    plan_id?: true
    amount?: true
  }

  export type RefundUserSumAggregateInputType = {
    id?: true
    plan_id?: true
    amount?: true
  }

  export type RefundUserMinAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    amount?: true
    refund_id?: true
    refund_status?: true
  }

  export type RefundUserMaxAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    amount?: true
    refund_id?: true
    refund_status?: true
  }

  export type RefundUserCountAggregateInputType = {
    id?: true
    email?: true
    plan_id?: true
    amount?: true
    refund_id?: true
    refund_status?: true
    _all?: true
  }

  export type RefundUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundUser to aggregate.
     */
    where?: RefundUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundUsers to fetch.
     */
    orderBy?: RefundUserOrderByWithRelationInput | RefundUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefundUsers
    **/
    _count?: true | RefundUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundUserMaxAggregateInputType
  }

  export type GetRefundUserAggregateType<T extends RefundUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRefundUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefundUser[P]>
      : GetScalarType<T[P], AggregateRefundUser[P]>
  }




  export type RefundUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundUserWhereInput
    orderBy?: RefundUserOrderByWithAggregationInput | RefundUserOrderByWithAggregationInput[]
    by: RefundUserScalarFieldEnum[] | RefundUserScalarFieldEnum
    having?: RefundUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundUserCountAggregateInputType | true
    _avg?: RefundUserAvgAggregateInputType
    _sum?: RefundUserSumAggregateInputType
    _min?: RefundUserMinAggregateInputType
    _max?: RefundUserMaxAggregateInputType
  }

  export type RefundUserGroupByOutputType = {
    id: number
    email: string
    plan_id: number
    amount: number
    refund_id: string
    refund_status: string
    _count: RefundUserCountAggregateOutputType | null
    _avg: RefundUserAvgAggregateOutputType | null
    _sum: RefundUserSumAggregateOutputType | null
    _min: RefundUserMinAggregateOutputType | null
    _max: RefundUserMaxAggregateOutputType | null
  }

  type GetRefundUserGroupByPayload<T extends RefundUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundUserGroupByOutputType[P]>
            : GetScalarType<T[P], RefundUserGroupByOutputType[P]>
        }
      >
    >


  export type RefundUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    plan_id?: boolean
    amount?: boolean
    refund_id?: boolean
    refund_status?: boolean
  }, ExtArgs["result"]["refundUser"]>



  export type RefundUserSelectScalar = {
    id?: boolean
    email?: boolean
    plan_id?: boolean
    amount?: boolean
    refund_id?: boolean
    refund_status?: boolean
  }

  export type RefundUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "plan_id" | "amount" | "refund_id" | "refund_status", ExtArgs["result"]["refundUser"]>

  export type $RefundUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefundUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      plan_id: number
      amount: number
      refund_id: string
      refund_status: string
    }, ExtArgs["result"]["refundUser"]>
    composites: {}
  }

  type RefundUserGetPayload<S extends boolean | null | undefined | RefundUserDefaultArgs> = $Result.GetResult<Prisma.$RefundUserPayload, S>

  type RefundUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundUserCountAggregateInputType | true
    }

  export interface RefundUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefundUser'], meta: { name: 'RefundUser' } }
    /**
     * Find zero or one RefundUser that matches the filter.
     * @param {RefundUserFindUniqueArgs} args - Arguments to find a RefundUser
     * @example
     * // Get one RefundUser
     * const refundUser = await prisma.refundUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundUserFindUniqueArgs>(args: SelectSubset<T, RefundUserFindUniqueArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefundUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundUserFindUniqueOrThrowArgs} args - Arguments to find a RefundUser
     * @example
     * // Get one RefundUser
     * const refundUser = await prisma.refundUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundUserFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefundUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserFindFirstArgs} args - Arguments to find a RefundUser
     * @example
     * // Get one RefundUser
     * const refundUser = await prisma.refundUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundUserFindFirstArgs>(args?: SelectSubset<T, RefundUserFindFirstArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefundUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserFindFirstOrThrowArgs} args - Arguments to find a RefundUser
     * @example
     * // Get one RefundUser
     * const refundUser = await prisma.refundUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundUserFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefundUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefundUsers
     * const refundUsers = await prisma.refundUser.findMany()
     * 
     * // Get first 10 RefundUsers
     * const refundUsers = await prisma.refundUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundUserWithIdOnly = await prisma.refundUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundUserFindManyArgs>(args?: SelectSubset<T, RefundUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefundUser.
     * @param {RefundUserCreateArgs} args - Arguments to create a RefundUser.
     * @example
     * // Create one RefundUser
     * const RefundUser = await prisma.refundUser.create({
     *   data: {
     *     // ... data to create a RefundUser
     *   }
     * })
     * 
     */
    create<T extends RefundUserCreateArgs>(args: SelectSubset<T, RefundUserCreateArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefundUsers.
     * @param {RefundUserCreateManyArgs} args - Arguments to create many RefundUsers.
     * @example
     * // Create many RefundUsers
     * const refundUser = await prisma.refundUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundUserCreateManyArgs>(args?: SelectSubset<T, RefundUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefundUser.
     * @param {RefundUserDeleteArgs} args - Arguments to delete one RefundUser.
     * @example
     * // Delete one RefundUser
     * const RefundUser = await prisma.refundUser.delete({
     *   where: {
     *     // ... filter to delete one RefundUser
     *   }
     * })
     * 
     */
    delete<T extends RefundUserDeleteArgs>(args: SelectSubset<T, RefundUserDeleteArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefundUser.
     * @param {RefundUserUpdateArgs} args - Arguments to update one RefundUser.
     * @example
     * // Update one RefundUser
     * const refundUser = await prisma.refundUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUserUpdateArgs>(args: SelectSubset<T, RefundUserUpdateArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefundUsers.
     * @param {RefundUserDeleteManyArgs} args - Arguments to filter RefundUsers to delete.
     * @example
     * // Delete a few RefundUsers
     * const { count } = await prisma.refundUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundUserDeleteManyArgs>(args?: SelectSubset<T, RefundUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefundUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefundUsers
     * const refundUser = await prisma.refundUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUserUpdateManyArgs>(args: SelectSubset<T, RefundUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefundUser.
     * @param {RefundUserUpsertArgs} args - Arguments to update or create a RefundUser.
     * @example
     * // Update or create a RefundUser
     * const refundUser = await prisma.refundUser.upsert({
     *   create: {
     *     // ... data to create a RefundUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefundUser we want to update
     *   }
     * })
     */
    upsert<T extends RefundUserUpsertArgs>(args: SelectSubset<T, RefundUserUpsertArgs<ExtArgs>>): Prisma__RefundUserClient<$Result.GetResult<Prisma.$RefundUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefundUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserCountArgs} args - Arguments to filter RefundUsers to count.
     * @example
     * // Count the number of RefundUsers
     * const count = await prisma.refundUser.count({
     *   where: {
     *     // ... the filter for the RefundUsers we want to count
     *   }
     * })
    **/
    count<T extends RefundUserCountArgs>(
      args?: Subset<T, RefundUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefundUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundUserAggregateArgs>(args: Subset<T, RefundUserAggregateArgs>): Prisma.PrismaPromise<GetRefundUserAggregateType<T>>

    /**
     * Group by RefundUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundUserGroupByArgs['orderBy'] }
        : { orderBy?: RefundUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefundUser model
   */
  readonly fields: RefundUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefundUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefundUser model
   */
  interface RefundUserFieldRefs {
    readonly id: FieldRef<"RefundUser", 'Int'>
    readonly email: FieldRef<"RefundUser", 'String'>
    readonly plan_id: FieldRef<"RefundUser", 'Int'>
    readonly amount: FieldRef<"RefundUser", 'Int'>
    readonly refund_id: FieldRef<"RefundUser", 'String'>
    readonly refund_status: FieldRef<"RefundUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefundUser findUnique
   */
  export type RefundUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter, which RefundUser to fetch.
     */
    where: RefundUserWhereUniqueInput
  }

  /**
   * RefundUser findUniqueOrThrow
   */
  export type RefundUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter, which RefundUser to fetch.
     */
    where: RefundUserWhereUniqueInput
  }

  /**
   * RefundUser findFirst
   */
  export type RefundUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter, which RefundUser to fetch.
     */
    where?: RefundUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundUsers to fetch.
     */
    orderBy?: RefundUserOrderByWithRelationInput | RefundUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundUsers.
     */
    cursor?: RefundUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundUsers.
     */
    distinct?: RefundUserScalarFieldEnum | RefundUserScalarFieldEnum[]
  }

  /**
   * RefundUser findFirstOrThrow
   */
  export type RefundUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter, which RefundUser to fetch.
     */
    where?: RefundUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundUsers to fetch.
     */
    orderBy?: RefundUserOrderByWithRelationInput | RefundUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefundUsers.
     */
    cursor?: RefundUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefundUsers.
     */
    distinct?: RefundUserScalarFieldEnum | RefundUserScalarFieldEnum[]
  }

  /**
   * RefundUser findMany
   */
  export type RefundUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter, which RefundUsers to fetch.
     */
    where?: RefundUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefundUsers to fetch.
     */
    orderBy?: RefundUserOrderByWithRelationInput | RefundUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefundUsers.
     */
    cursor?: RefundUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefundUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefundUsers.
     */
    skip?: number
    distinct?: RefundUserScalarFieldEnum | RefundUserScalarFieldEnum[]
  }

  /**
   * RefundUser create
   */
  export type RefundUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * The data needed to create a RefundUser.
     */
    data: XOR<RefundUserCreateInput, RefundUserUncheckedCreateInput>
  }

  /**
   * RefundUser createMany
   */
  export type RefundUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefundUsers.
     */
    data: RefundUserCreateManyInput | RefundUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefundUser update
   */
  export type RefundUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * The data needed to update a RefundUser.
     */
    data: XOR<RefundUserUpdateInput, RefundUserUncheckedUpdateInput>
    /**
     * Choose, which RefundUser to update.
     */
    where: RefundUserWhereUniqueInput
  }

  /**
   * RefundUser updateMany
   */
  export type RefundUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefundUsers.
     */
    data: XOR<RefundUserUpdateManyMutationInput, RefundUserUncheckedUpdateManyInput>
    /**
     * Filter which RefundUsers to update
     */
    where?: RefundUserWhereInput
    /**
     * Limit how many RefundUsers to update.
     */
    limit?: number
  }

  /**
   * RefundUser upsert
   */
  export type RefundUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * The filter to search for the RefundUser to update in case it exists.
     */
    where: RefundUserWhereUniqueInput
    /**
     * In case the RefundUser found by the `where` argument doesn't exist, create a new RefundUser with this data.
     */
    create: XOR<RefundUserCreateInput, RefundUserUncheckedCreateInput>
    /**
     * In case the RefundUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUserUpdateInput, RefundUserUncheckedUpdateInput>
  }

  /**
   * RefundUser delete
   */
  export type RefundUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
    /**
     * Filter which RefundUser to delete.
     */
    where: RefundUserWhereUniqueInput
  }

  /**
   * RefundUser deleteMany
   */
  export type RefundUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefundUsers to delete
     */
    where?: RefundUserWhereInput
    /**
     * Limit how many RefundUsers to delete.
     */
    limit?: number
  }

  /**
   * RefundUser without action
   */
  export type RefundUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefundUser
     */
    select?: RefundUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefundUser
     */
    omit?: RefundUserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    gender: 'gender',
    mobile_no: 'mobile_no',
    email: 'email',
    password: 'password',
    reference_token: 'reference_token'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GuestUserScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    fingerprint: 'fingerprint',
    used: 'used',
    max: 'max',
    maxSize: 'maxSize',
    startDate: 'startDate'
  };

  export type GuestUserScalarFieldEnum = (typeof GuestUserScalarFieldEnum)[keyof typeof GuestUserScalarFieldEnum]


  export const PaidUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    plan_id: 'plan_id',
    used: 'used',
    max: 'max',
    maxSize: 'maxSize',
    maxBatch: 'maxBatch',
    start_date: 'start_date',
    end_date: 'end_date',
    conversion_allowed: 'conversion_allowed',
    payment_id: 'payment_id'
  };

  export type PaidUserScalarFieldEnum = (typeof PaidUserScalarFieldEnum)[keyof typeof PaidUserScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    maxConversions: 'maxConversions',
    maxFileSizeMB: 'maxFileSizeMB',
    batchLimit: 'batchLimit',
    support: 'support',
    formats: 'formats',
    advantages: 'advantages'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const RefundUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    plan_id: 'plan_id',
    amount: 'amount',
    refund_id: 'refund_id',
    refund_status: 'refund_status'
  };

  export type RefundUserScalarFieldEnum = (typeof RefundUserScalarFieldEnum)[keyof typeof RefundUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    gender: 'gender',
    mobile_no: 'mobile_no',
    email: 'email',
    password: 'password',
    reference_token: 'reference_token'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const GuestUserOrderByRelevanceFieldEnum: {
    ip: 'ip',
    fingerprint: 'fingerprint',
    startDate: 'startDate'
  };

  export type GuestUserOrderByRelevanceFieldEnum = (typeof GuestUserOrderByRelevanceFieldEnum)[keyof typeof GuestUserOrderByRelevanceFieldEnum]


  export const PaidUserOrderByRelevanceFieldEnum: {
    email: 'email',
    start_date: 'start_date',
    end_date: 'end_date',
    conversion_allowed: 'conversion_allowed',
    payment_id: 'payment_id'
  };

  export type PaidUserOrderByRelevanceFieldEnum = (typeof PaidUserOrderByRelevanceFieldEnum)[keyof typeof PaidUserOrderByRelevanceFieldEnum]


  export const PlansOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    support: 'support',
    formats: 'formats',
    advantages: 'advantages'
  };

  export type PlansOrderByRelevanceFieldEnum = (typeof PlansOrderByRelevanceFieldEnum)[keyof typeof PlansOrderByRelevanceFieldEnum]


  export const RefundUserOrderByRelevanceFieldEnum: {
    email: 'email',
    refund_id: 'refund_id',
    refund_status: 'refund_status'
  };

  export type RefundUserOrderByRelevanceFieldEnum = (typeof RefundUserOrderByRelevanceFieldEnum)[keyof typeof RefundUserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    first_name?: StringFilter<"Users"> | string
    middle_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringFilter<"Users"> | string
    gender?: StringFilter<"Users"> | string
    mobile_no?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    reference_token?: StringFilter<"Users"> | string
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobile_no?: string
    email?: string
    reference_token?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    middle_name?: StringNullableFilter<"Users"> | string | null
    last_name?: StringFilter<"Users"> | string
    gender?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
  }, "id" | "id" | "mobile_no" | "email" | "reference_token">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    first_name?: StringWithAggregatesFilter<"Users"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    last_name?: StringWithAggregatesFilter<"Users"> | string
    gender?: StringWithAggregatesFilter<"Users"> | string
    mobile_no?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    reference_token?: StringWithAggregatesFilter<"Users"> | string
  }

  export type GuestUserWhereInput = {
    AND?: GuestUserWhereInput | GuestUserWhereInput[]
    OR?: GuestUserWhereInput[]
    NOT?: GuestUserWhereInput | GuestUserWhereInput[]
    id?: IntFilter<"GuestUser"> | number
    ip?: StringFilter<"GuestUser"> | string
    fingerprint?: StringFilter<"GuestUser"> | string
    used?: IntFilter<"GuestUser"> | number
    max?: IntFilter<"GuestUser"> | number
    maxSize?: IntFilter<"GuestUser"> | number
    startDate?: StringFilter<"GuestUser"> | string
  }

  export type GuestUserOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    fingerprint?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    startDate?: SortOrder
    _relevance?: GuestUserOrderByRelevanceInput
  }

  export type GuestUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fingerprint?: string
    AND?: GuestUserWhereInput | GuestUserWhereInput[]
    OR?: GuestUserWhereInput[]
    NOT?: GuestUserWhereInput | GuestUserWhereInput[]
    ip?: StringFilter<"GuestUser"> | string
    used?: IntFilter<"GuestUser"> | number
    max?: IntFilter<"GuestUser"> | number
    maxSize?: IntFilter<"GuestUser"> | number
    startDate?: StringFilter<"GuestUser"> | string
  }, "id" | "id" | "fingerprint">

  export type GuestUserOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    fingerprint?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    startDate?: SortOrder
    _count?: GuestUserCountOrderByAggregateInput
    _avg?: GuestUserAvgOrderByAggregateInput
    _max?: GuestUserMaxOrderByAggregateInput
    _min?: GuestUserMinOrderByAggregateInput
    _sum?: GuestUserSumOrderByAggregateInput
  }

  export type GuestUserScalarWhereWithAggregatesInput = {
    AND?: GuestUserScalarWhereWithAggregatesInput | GuestUserScalarWhereWithAggregatesInput[]
    OR?: GuestUserScalarWhereWithAggregatesInput[]
    NOT?: GuestUserScalarWhereWithAggregatesInput | GuestUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GuestUser"> | number
    ip?: StringWithAggregatesFilter<"GuestUser"> | string
    fingerprint?: StringWithAggregatesFilter<"GuestUser"> | string
    used?: IntWithAggregatesFilter<"GuestUser"> | number
    max?: IntWithAggregatesFilter<"GuestUser"> | number
    maxSize?: IntWithAggregatesFilter<"GuestUser"> | number
    startDate?: StringWithAggregatesFilter<"GuestUser"> | string
  }

  export type PaidUserWhereInput = {
    AND?: PaidUserWhereInput | PaidUserWhereInput[]
    OR?: PaidUserWhereInput[]
    NOT?: PaidUserWhereInput | PaidUserWhereInput[]
    id?: IntFilter<"PaidUser"> | number
    email?: StringFilter<"PaidUser"> | string
    plan_id?: IntFilter<"PaidUser"> | number
    used?: IntNullableFilter<"PaidUser"> | number | null
    max?: IntFilter<"PaidUser"> | number
    maxSize?: IntFilter<"PaidUser"> | number
    maxBatch?: IntFilter<"PaidUser"> | number
    start_date?: StringFilter<"PaidUser"> | string
    end_date?: StringFilter<"PaidUser"> | string
    conversion_allowed?: StringFilter<"PaidUser"> | string
    payment_id?: StringFilter<"PaidUser"> | string
  }

  export type PaidUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    used?: SortOrderInput | SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    conversion_allowed?: SortOrder
    payment_id?: SortOrder
    _relevance?: PaidUserOrderByRelevanceInput
  }

  export type PaidUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    payment_id?: string
    AND?: PaidUserWhereInput | PaidUserWhereInput[]
    OR?: PaidUserWhereInput[]
    NOT?: PaidUserWhereInput | PaidUserWhereInput[]
    plan_id?: IntFilter<"PaidUser"> | number
    used?: IntNullableFilter<"PaidUser"> | number | null
    max?: IntFilter<"PaidUser"> | number
    maxSize?: IntFilter<"PaidUser"> | number
    maxBatch?: IntFilter<"PaidUser"> | number
    start_date?: StringFilter<"PaidUser"> | string
    end_date?: StringFilter<"PaidUser"> | string
    conversion_allowed?: StringFilter<"PaidUser"> | string
  }, "id" | "id" | "email" | "payment_id">

  export type PaidUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    used?: SortOrderInput | SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    conversion_allowed?: SortOrder
    payment_id?: SortOrder
    _count?: PaidUserCountOrderByAggregateInput
    _avg?: PaidUserAvgOrderByAggregateInput
    _max?: PaidUserMaxOrderByAggregateInput
    _min?: PaidUserMinOrderByAggregateInput
    _sum?: PaidUserSumOrderByAggregateInput
  }

  export type PaidUserScalarWhereWithAggregatesInput = {
    AND?: PaidUserScalarWhereWithAggregatesInput | PaidUserScalarWhereWithAggregatesInput[]
    OR?: PaidUserScalarWhereWithAggregatesInput[]
    NOT?: PaidUserScalarWhereWithAggregatesInput | PaidUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaidUser"> | number
    email?: StringWithAggregatesFilter<"PaidUser"> | string
    plan_id?: IntWithAggregatesFilter<"PaidUser"> | number
    used?: IntNullableWithAggregatesFilter<"PaidUser"> | number | null
    max?: IntWithAggregatesFilter<"PaidUser"> | number
    maxSize?: IntWithAggregatesFilter<"PaidUser"> | number
    maxBatch?: IntWithAggregatesFilter<"PaidUser"> | number
    start_date?: StringWithAggregatesFilter<"PaidUser"> | string
    end_date?: StringWithAggregatesFilter<"PaidUser"> | string
    conversion_allowed?: StringWithAggregatesFilter<"PaidUser"> | string
    payment_id?: StringWithAggregatesFilter<"PaidUser"> | string
  }

  export type PlansWhereInput = {
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    id?: IntFilter<"Plans"> | number
    name?: StringFilter<"Plans"> | string
    price?: FloatFilter<"Plans"> | number
    description?: StringFilter<"Plans"> | string
    maxConversions?: IntFilter<"Plans"> | number
    maxFileSizeMB?: IntFilter<"Plans"> | number
    batchLimit?: IntFilter<"Plans"> | number
    support?: StringFilter<"Plans"> | string
    formats?: StringFilter<"Plans"> | string
    advantages?: StringFilter<"Plans"> | string
  }

  export type PlansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
    support?: SortOrder
    formats?: SortOrder
    advantages?: SortOrder
    _relevance?: PlansOrderByRelevanceInput
  }

  export type PlansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlansWhereInput | PlansWhereInput[]
    OR?: PlansWhereInput[]
    NOT?: PlansWhereInput | PlansWhereInput[]
    price?: FloatFilter<"Plans"> | number
    description?: StringFilter<"Plans"> | string
    maxConversions?: IntFilter<"Plans"> | number
    maxFileSizeMB?: IntFilter<"Plans"> | number
    batchLimit?: IntFilter<"Plans"> | number
    support?: StringFilter<"Plans"> | string
    formats?: StringFilter<"Plans"> | string
    advantages?: StringFilter<"Plans"> | string
  }, "id" | "id" | "name">

  export type PlansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
    support?: SortOrder
    formats?: SortOrder
    advantages?: SortOrder
    _count?: PlansCountOrderByAggregateInput
    _avg?: PlansAvgOrderByAggregateInput
    _max?: PlansMaxOrderByAggregateInput
    _min?: PlansMinOrderByAggregateInput
    _sum?: PlansSumOrderByAggregateInput
  }

  export type PlansScalarWhereWithAggregatesInput = {
    AND?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    OR?: PlansScalarWhereWithAggregatesInput[]
    NOT?: PlansScalarWhereWithAggregatesInput | PlansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plans"> | number
    name?: StringWithAggregatesFilter<"Plans"> | string
    price?: FloatWithAggregatesFilter<"Plans"> | number
    description?: StringWithAggregatesFilter<"Plans"> | string
    maxConversions?: IntWithAggregatesFilter<"Plans"> | number
    maxFileSizeMB?: IntWithAggregatesFilter<"Plans"> | number
    batchLimit?: IntWithAggregatesFilter<"Plans"> | number
    support?: StringWithAggregatesFilter<"Plans"> | string
    formats?: StringWithAggregatesFilter<"Plans"> | string
    advantages?: StringWithAggregatesFilter<"Plans"> | string
  }

  export type RefundUserWhereInput = {
    AND?: RefundUserWhereInput | RefundUserWhereInput[]
    OR?: RefundUserWhereInput[]
    NOT?: RefundUserWhereInput | RefundUserWhereInput[]
    id?: IntFilter<"RefundUser"> | number
    email?: StringFilter<"RefundUser"> | string
    plan_id?: IntFilter<"RefundUser"> | number
    amount?: IntFilter<"RefundUser"> | number
    refund_id?: StringFilter<"RefundUser"> | string
    refund_status?: StringFilter<"RefundUser"> | string
  }

  export type RefundUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
    refund_id?: SortOrder
    refund_status?: SortOrder
    _relevance?: RefundUserOrderByRelevanceInput
  }

  export type RefundUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefundUserWhereInput | RefundUserWhereInput[]
    OR?: RefundUserWhereInput[]
    NOT?: RefundUserWhereInput | RefundUserWhereInput[]
    email?: StringFilter<"RefundUser"> | string
    plan_id?: IntFilter<"RefundUser"> | number
    amount?: IntFilter<"RefundUser"> | number
    refund_id?: StringFilter<"RefundUser"> | string
    refund_status?: StringFilter<"RefundUser"> | string
  }, "id" | "id">

  export type RefundUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
    refund_id?: SortOrder
    refund_status?: SortOrder
    _count?: RefundUserCountOrderByAggregateInput
    _avg?: RefundUserAvgOrderByAggregateInput
    _max?: RefundUserMaxOrderByAggregateInput
    _min?: RefundUserMinOrderByAggregateInput
    _sum?: RefundUserSumOrderByAggregateInput
  }

  export type RefundUserScalarWhereWithAggregatesInput = {
    AND?: RefundUserScalarWhereWithAggregatesInput | RefundUserScalarWhereWithAggregatesInput[]
    OR?: RefundUserScalarWhereWithAggregatesInput[]
    NOT?: RefundUserScalarWhereWithAggregatesInput | RefundUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefundUser"> | number
    email?: StringWithAggregatesFilter<"RefundUser"> | string
    plan_id?: IntWithAggregatesFilter<"RefundUser"> | number
    amount?: IntWithAggregatesFilter<"RefundUser"> | number
    refund_id?: StringWithAggregatesFilter<"RefundUser"> | string
    refund_status?: StringWithAggregatesFilter<"RefundUser"> | string
  }

  export type UsersCreateInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateManyInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    gender: string
    mobile_no: string
    email: string
    password: string
    reference_token: string
  }

  export type UsersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    mobile_no?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reference_token?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUserCreateInput = {
    ip: string
    fingerprint: string
    used: number
    max: number
    maxSize: number
    startDate: string
  }

  export type GuestUserUncheckedCreateInput = {
    id?: number
    ip: string
    fingerprint: string
    used: number
    max: number
    maxSize: number
    startDate: string
  }

  export type GuestUserUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUserCreateManyInput = {
    id?: number
    ip: string
    fingerprint: string
    used: number
    max: number
    maxSize: number
    startDate: string
  }

  export type GuestUserUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
  }

  export type GuestUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    used?: IntFieldUpdateOperationsInput | number
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    startDate?: StringFieldUpdateOperationsInput | string
  }

  export type PaidUserCreateInput = {
    email: string
    plan_id: number
    used?: number | null
    max: number
    maxSize: number
    maxBatch: number
    start_date: string
    end_date: string
    conversion_allowed: string
    payment_id: string
  }

  export type PaidUserUncheckedCreateInput = {
    id?: number
    email: string
    plan_id: number
    used?: number | null
    max: number
    maxSize: number
    maxBatch: number
    start_date: string
    end_date: string
    conversion_allowed: string
    payment_id: string
  }

  export type PaidUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    used?: NullableIntFieldUpdateOperationsInput | number | null
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    maxBatch?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    conversion_allowed?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaidUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    used?: NullableIntFieldUpdateOperationsInput | number | null
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    maxBatch?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    conversion_allowed?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaidUserCreateManyInput = {
    id?: number
    email: string
    plan_id: number
    used?: number | null
    max: number
    maxSize: number
    maxBatch: number
    start_date: string
    end_date: string
    conversion_allowed: string
    payment_id: string
  }

  export type PaidUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    used?: NullableIntFieldUpdateOperationsInput | number | null
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    maxBatch?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    conversion_allowed?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaidUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    used?: NullableIntFieldUpdateOperationsInput | number | null
    max?: IntFieldUpdateOperationsInput | number
    maxSize?: IntFieldUpdateOperationsInput | number
    maxBatch?: IntFieldUpdateOperationsInput | number
    start_date?: StringFieldUpdateOperationsInput | string
    end_date?: StringFieldUpdateOperationsInput | string
    conversion_allowed?: StringFieldUpdateOperationsInput | string
    payment_id?: StringFieldUpdateOperationsInput | string
  }

  export type PlansCreateInput = {
    name: string
    price: number
    description: string
    maxConversions: number
    maxFileSizeMB: number
    batchLimit: number
    support: string
    formats: string
    advantages: string
  }

  export type PlansUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    maxConversions: number
    maxFileSizeMB: number
    batchLimit: number
    support: string
    formats: string
    advantages: string
  }

  export type PlansUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    maxConversions?: IntFieldUpdateOperationsInput | number
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    batchLimit?: IntFieldUpdateOperationsInput | number
    support?: StringFieldUpdateOperationsInput | string
    formats?: StringFieldUpdateOperationsInput | string
    advantages?: StringFieldUpdateOperationsInput | string
  }

  export type PlansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    maxConversions?: IntFieldUpdateOperationsInput | number
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    batchLimit?: IntFieldUpdateOperationsInput | number
    support?: StringFieldUpdateOperationsInput | string
    formats?: StringFieldUpdateOperationsInput | string
    advantages?: StringFieldUpdateOperationsInput | string
  }

  export type PlansCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    maxConversions: number
    maxFileSizeMB: number
    batchLimit: number
    support: string
    formats: string
    advantages: string
  }

  export type PlansUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    maxConversions?: IntFieldUpdateOperationsInput | number
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    batchLimit?: IntFieldUpdateOperationsInput | number
    support?: StringFieldUpdateOperationsInput | string
    formats?: StringFieldUpdateOperationsInput | string
    advantages?: StringFieldUpdateOperationsInput | string
  }

  export type PlansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    maxConversions?: IntFieldUpdateOperationsInput | number
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    batchLimit?: IntFieldUpdateOperationsInput | number
    support?: StringFieldUpdateOperationsInput | string
    formats?: StringFieldUpdateOperationsInput | string
    advantages?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUserCreateInput = {
    email: string
    plan_id: number
    amount: number
    refund_id: string
    refund_status: string
  }

  export type RefundUserUncheckedCreateInput = {
    id?: number
    email: string
    plan_id: number
    amount: number
    refund_id: string
    refund_status: string
  }

  export type RefundUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    refund_id?: StringFieldUpdateOperationsInput | string
    refund_status?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    refund_id?: StringFieldUpdateOperationsInput | string
    refund_status?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUserCreateManyInput = {
    id?: number
    email: string
    plan_id: number
    amount: number
    refund_id: string
    refund_status: string
  }

  export type RefundUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    refund_id?: StringFieldUpdateOperationsInput | string
    refund_status?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    plan_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    refund_id?: StringFieldUpdateOperationsInput | string
    refund_status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    mobile_no?: SortOrder
    email?: SortOrder
    password?: SortOrder
    reference_token?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GuestUserOrderByRelevanceInput = {
    fields: GuestUserOrderByRelevanceFieldEnum | GuestUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuestUserCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    fingerprint?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    startDate?: SortOrder
  }

  export type GuestUserAvgOrderByAggregateInput = {
    id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
  }

  export type GuestUserMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    fingerprint?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    startDate?: SortOrder
  }

  export type GuestUserMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    fingerprint?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    startDate?: SortOrder
  }

  export type GuestUserSumOrderByAggregateInput = {
    id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PaidUserOrderByRelevanceInput = {
    fields: PaidUserOrderByRelevanceFieldEnum | PaidUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaidUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    conversion_allowed?: SortOrder
    payment_id?: SortOrder
  }

  export type PaidUserAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
  }

  export type PaidUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    conversion_allowed?: SortOrder
    payment_id?: SortOrder
  }

  export type PaidUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    conversion_allowed?: SortOrder
    payment_id?: SortOrder
  }

  export type PaidUserSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    used?: SortOrder
    max?: SortOrder
    maxSize?: SortOrder
    maxBatch?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlansOrderByRelevanceInput = {
    fields: PlansOrderByRelevanceFieldEnum | PlansOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
    support?: SortOrder
    formats?: SortOrder
    advantages?: SortOrder
  }

  export type PlansAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
  }

  export type PlansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
    support?: SortOrder
    formats?: SortOrder
    advantages?: SortOrder
  }

  export type PlansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
    support?: SortOrder
    formats?: SortOrder
    advantages?: SortOrder
  }

  export type PlansSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    maxConversions?: SortOrder
    maxFileSizeMB?: SortOrder
    batchLimit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RefundUserOrderByRelevanceInput = {
    fields: RefundUserOrderByRelevanceFieldEnum | RefundUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefundUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
    refund_id?: SortOrder
    refund_status?: SortOrder
  }

  export type RefundUserAvgOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
  }

  export type RefundUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
    refund_id?: SortOrder
    refund_status?: SortOrder
  }

  export type RefundUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
    refund_id?: SortOrder
    refund_status?: SortOrder
  }

  export type RefundUserSumOrderByAggregateInput = {
    id?: SortOrder
    plan_id?: SortOrder
    amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}