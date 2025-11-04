
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
 * Model Charger
 * 
 */
export type Charger = $Result.DefaultSelection<Prisma.$ChargerPayload>
/**
 * Model Connector
 * 
 */
export type Connector = $Result.DefaultSelection<Prisma.$ConnectorPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chargers
 * const chargers = await prisma.charger.findMany()
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
   * // Fetch zero or more Chargers
   * const chargers = await prisma.charger.findMany()
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
   * `prisma.charger`: Exposes CRUD operations for the **Charger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chargers
    * const chargers = await prisma.charger.findMany()
    * ```
    */
  get charger(): Prisma.ChargerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connector`: Exposes CRUD operations for the **Connector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connectors
    * const connectors = await prisma.connector.findMany()
    * ```
    */
  get connector(): Prisma.ConnectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Charger: 'Charger',
    Connector: 'Connector',
    Transaction: 'Transaction'
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
      modelProps: "charger" | "connector" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Charger: {
        payload: Prisma.$ChargerPayload<ExtArgs>
        fields: Prisma.ChargerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findFirst: {
            args: Prisma.ChargerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          findMany: {
            args: Prisma.ChargerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          create: {
            args: Prisma.ChargerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          createMany: {
            args: Prisma.ChargerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          delete: {
            args: Prisma.ChargerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          update: {
            args: Prisma.ChargerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          deleteMany: {
            args: Prisma.ChargerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>[]
          }
          upsert: {
            args: Prisma.ChargerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargerPayload>
          }
          aggregate: {
            args: Prisma.ChargerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharger>
          }
          groupBy: {
            args: Prisma.ChargerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargerCountArgs<ExtArgs>
            result: $Utils.Optional<ChargerCountAggregateOutputType> | number
          }
        }
      }
      Connector: {
        payload: Prisma.$ConnectorPayload<ExtArgs>
        fields: Prisma.ConnectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          findFirst: {
            args: Prisma.ConnectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          findMany: {
            args: Prisma.ConnectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>[]
          }
          create: {
            args: Prisma.ConnectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          createMany: {
            args: Prisma.ConnectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>[]
          }
          delete: {
            args: Prisma.ConnectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          update: {
            args: Prisma.ConnectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          deleteMany: {
            args: Prisma.ConnectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>[]
          }
          upsert: {
            args: Prisma.ConnectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectorPayload>
          }
          aggregate: {
            args: Prisma.ConnectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnector>
          }
          groupBy: {
            args: Prisma.ConnectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectorCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectorCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    charger?: ChargerOmit
    connector?: ConnectorOmit
    transaction?: TransactionOmit
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
   * Count Type ChargerCountOutputType
   */

  export type ChargerCountOutputType = {
    connectors: number
    transactions: number
  }

  export type ChargerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectors?: boolean | ChargerCountOutputTypeCountConnectorsArgs
    transactions?: boolean | ChargerCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargerCountOutputType
     */
    select?: ChargerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeCountConnectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectorWhereInput
  }

  /**
   * ChargerCountOutputType without action
   */
  export type ChargerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Charger
   */

  export type AggregateCharger = {
    _count: ChargerCountAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  export type ChargerMinAggregateOutputType = {
    id: string | null
    vendor: string | null
    model: string | null
    firmwareVersion: string | null
    serialNumber: string | null
    boxSerialNumber: string | null
    lastBootAt: Date | null
    lastHeartbeatAt: Date | null
    connected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargerMaxAggregateOutputType = {
    id: string | null
    vendor: string | null
    model: string | null
    firmwareVersion: string | null
    serialNumber: string | null
    boxSerialNumber: string | null
    lastBootAt: Date | null
    lastHeartbeatAt: Date | null
    connected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargerCountAggregateOutputType = {
    id: number
    vendor: number
    model: number
    firmwareVersion: number
    serialNumber: number
    boxSerialNumber: number
    lastBootAt: number
    lastHeartbeatAt: number
    connected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChargerMinAggregateInputType = {
    id?: true
    vendor?: true
    model?: true
    firmwareVersion?: true
    serialNumber?: true
    boxSerialNumber?: true
    lastBootAt?: true
    lastHeartbeatAt?: true
    connected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargerMaxAggregateInputType = {
    id?: true
    vendor?: true
    model?: true
    firmwareVersion?: true
    serialNumber?: true
    boxSerialNumber?: true
    lastBootAt?: true
    lastHeartbeatAt?: true
    connected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargerCountAggregateInputType = {
    id?: true
    vendor?: true
    model?: true
    firmwareVersion?: true
    serialNumber?: true
    boxSerialNumber?: true
    lastBootAt?: true
    lastHeartbeatAt?: true
    connected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChargerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charger to aggregate.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chargers
    **/
    _count?: true | ChargerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargerMaxAggregateInputType
  }

  export type GetChargerAggregateType<T extends ChargerAggregateArgs> = {
        [P in keyof T & keyof AggregateCharger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharger[P]>
      : GetScalarType<T[P], AggregateCharger[P]>
  }




  export type ChargerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargerWhereInput
    orderBy?: ChargerOrderByWithAggregationInput | ChargerOrderByWithAggregationInput[]
    by: ChargerScalarFieldEnum[] | ChargerScalarFieldEnum
    having?: ChargerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargerCountAggregateInputType | true
    _min?: ChargerMinAggregateInputType
    _max?: ChargerMaxAggregateInputType
  }

  export type ChargerGroupByOutputType = {
    id: string
    vendor: string | null
    model: string | null
    firmwareVersion: string | null
    serialNumber: string | null
    boxSerialNumber: string | null
    lastBootAt: Date | null
    lastHeartbeatAt: Date | null
    connected: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChargerCountAggregateOutputType | null
    _min: ChargerMinAggregateOutputType | null
    _max: ChargerMaxAggregateOutputType | null
  }

  type GetChargerGroupByPayload<T extends ChargerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargerGroupByOutputType[P]>
            : GetScalarType<T[P], ChargerGroupByOutputType[P]>
        }
      >
    >


  export type ChargerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    model?: boolean
    firmwareVersion?: boolean
    serialNumber?: boolean
    boxSerialNumber?: boolean
    lastBootAt?: boolean
    lastHeartbeatAt?: boolean
    connected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connectors?: boolean | Charger$connectorsArgs<ExtArgs>
    transactions?: boolean | Charger$transactionsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    model?: boolean
    firmwareVersion?: boolean
    serialNumber?: boolean
    boxSerialNumber?: boolean
    lastBootAt?: boolean
    lastHeartbeatAt?: boolean
    connected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    model?: boolean
    firmwareVersion?: boolean
    serialNumber?: boolean
    boxSerialNumber?: boolean
    lastBootAt?: boolean
    lastHeartbeatAt?: boolean
    connected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charger"]>

  export type ChargerSelectScalar = {
    id?: boolean
    vendor?: boolean
    model?: boolean
    firmwareVersion?: boolean
    serialNumber?: boolean
    boxSerialNumber?: boolean
    lastBootAt?: boolean
    lastHeartbeatAt?: boolean
    connected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChargerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendor" | "model" | "firmwareVersion" | "serialNumber" | "boxSerialNumber" | "lastBootAt" | "lastHeartbeatAt" | "connected" | "createdAt" | "updatedAt", ExtArgs["result"]["charger"]>
  export type ChargerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectors?: boolean | Charger$connectorsArgs<ExtArgs>
    transactions?: boolean | Charger$transactionsArgs<ExtArgs>
    _count?: boolean | ChargerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChargerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChargerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChargerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charger"
    objects: {
      connectors: Prisma.$ConnectorPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor: string | null
      model: string | null
      firmwareVersion: string | null
      serialNumber: string | null
      boxSerialNumber: string | null
      lastBootAt: Date | null
      lastHeartbeatAt: Date | null
      connected: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["charger"]>
    composites: {}
  }

  type ChargerGetPayload<S extends boolean | null | undefined | ChargerDefaultArgs> = $Result.GetResult<Prisma.$ChargerPayload, S>

  type ChargerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargerCountAggregateInputType | true
    }

  export interface ChargerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charger'], meta: { name: 'Charger' } }
    /**
     * Find zero or one Charger that matches the filter.
     * @param {ChargerFindUniqueArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargerFindUniqueArgs>(args: SelectSubset<T, ChargerFindUniqueArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargerFindUniqueOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargerFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargerFindFirstArgs>(args?: SelectSubset<T, ChargerFindFirstArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindFirstOrThrowArgs} args - Arguments to find a Charger
     * @example
     * // Get one Charger
     * const charger = await prisma.charger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargerFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chargers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chargers
     * const chargers = await prisma.charger.findMany()
     * 
     * // Get first 10 Chargers
     * const chargers = await prisma.charger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargerWithIdOnly = await prisma.charger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargerFindManyArgs>(args?: SelectSubset<T, ChargerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charger.
     * @param {ChargerCreateArgs} args - Arguments to create a Charger.
     * @example
     * // Create one Charger
     * const Charger = await prisma.charger.create({
     *   data: {
     *     // ... data to create a Charger
     *   }
     * })
     * 
     */
    create<T extends ChargerCreateArgs>(args: SelectSubset<T, ChargerCreateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chargers.
     * @param {ChargerCreateManyArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargerCreateManyArgs>(args?: SelectSubset<T, ChargerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chargers and returns the data saved in the database.
     * @param {ChargerCreateManyAndReturnArgs} args - Arguments to create many Chargers.
     * @example
     * // Create many Chargers
     * const charger = await prisma.charger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargerCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charger.
     * @param {ChargerDeleteArgs} args - Arguments to delete one Charger.
     * @example
     * // Delete one Charger
     * const Charger = await prisma.charger.delete({
     *   where: {
     *     // ... filter to delete one Charger
     *   }
     * })
     * 
     */
    delete<T extends ChargerDeleteArgs>(args: SelectSubset<T, ChargerDeleteArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charger.
     * @param {ChargerUpdateArgs} args - Arguments to update one Charger.
     * @example
     * // Update one Charger
     * const charger = await prisma.charger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargerUpdateArgs>(args: SelectSubset<T, ChargerUpdateArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chargers.
     * @param {ChargerDeleteManyArgs} args - Arguments to filter Chargers to delete.
     * @example
     * // Delete a few Chargers
     * const { count } = await prisma.charger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargerDeleteManyArgs>(args?: SelectSubset<T, ChargerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargerUpdateManyArgs>(args: SelectSubset<T, ChargerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargers and returns the data updated in the database.
     * @param {ChargerUpdateManyAndReturnArgs} args - Arguments to update many Chargers.
     * @example
     * // Update many Chargers
     * const charger = await prisma.charger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chargers and only return the `id`
     * const chargerWithIdOnly = await prisma.charger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargerUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charger.
     * @param {ChargerUpsertArgs} args - Arguments to update or create a Charger.
     * @example
     * // Update or create a Charger
     * const charger = await prisma.charger.upsert({
     *   create: {
     *     // ... data to create a Charger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charger we want to update
     *   }
     * })
     */
    upsert<T extends ChargerUpsertArgs>(args: SelectSubset<T, ChargerUpsertArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chargers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerCountArgs} args - Arguments to filter Chargers to count.
     * @example
     * // Count the number of Chargers
     * const count = await prisma.charger.count({
     *   where: {
     *     // ... the filter for the Chargers we want to count
     *   }
     * })
    **/
    count<T extends ChargerCountArgs>(
      args?: Subset<T, ChargerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChargerAggregateArgs>(args: Subset<T, ChargerAggregateArgs>): Prisma.PrismaPromise<GetChargerAggregateType<T>>

    /**
     * Group by Charger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargerGroupByArgs} args - Group by arguments.
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
      T extends ChargerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargerGroupByArgs['orderBy'] }
        : { orderBy?: ChargerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChargerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charger model
   */
  readonly fields: ChargerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connectors<T extends Charger$connectorsArgs<ExtArgs> = {}>(args?: Subset<T, Charger$connectorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Charger$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Charger$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Charger model
   */
  interface ChargerFieldRefs {
    readonly id: FieldRef<"Charger", 'String'>
    readonly vendor: FieldRef<"Charger", 'String'>
    readonly model: FieldRef<"Charger", 'String'>
    readonly firmwareVersion: FieldRef<"Charger", 'String'>
    readonly serialNumber: FieldRef<"Charger", 'String'>
    readonly boxSerialNumber: FieldRef<"Charger", 'String'>
    readonly lastBootAt: FieldRef<"Charger", 'DateTime'>
    readonly lastHeartbeatAt: FieldRef<"Charger", 'DateTime'>
    readonly connected: FieldRef<"Charger", 'Boolean'>
    readonly createdAt: FieldRef<"Charger", 'DateTime'>
    readonly updatedAt: FieldRef<"Charger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charger findUnique
   */
  export type ChargerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findUniqueOrThrow
   */
  export type ChargerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger findFirst
   */
  export type ChargerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findFirstOrThrow
   */
  export type ChargerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Charger to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargers.
     */
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger findMany
   */
  export type ChargerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter, which Chargers to fetch.
     */
    where?: ChargerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargers to fetch.
     */
    orderBy?: ChargerOrderByWithRelationInput | ChargerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chargers.
     */
    cursor?: ChargerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargers.
     */
    skip?: number
    distinct?: ChargerScalarFieldEnum | ChargerScalarFieldEnum[]
  }

  /**
   * Charger create
   */
  export type ChargerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to create a Charger.
     */
    data: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
  }

  /**
   * Charger createMany
   */
  export type ChargerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charger createManyAndReturn
   */
  export type ChargerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to create many Chargers.
     */
    data: ChargerCreateManyInput | ChargerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charger update
   */
  export type ChargerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The data needed to update a Charger.
     */
    data: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
    /**
     * Choose, which Charger to update.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger updateMany
   */
  export type ChargerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
  }

  /**
   * Charger updateManyAndReturn
   */
  export type ChargerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * The data used to update Chargers.
     */
    data: XOR<ChargerUpdateManyMutationInput, ChargerUncheckedUpdateManyInput>
    /**
     * Filter which Chargers to update
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to update.
     */
    limit?: number
  }

  /**
   * Charger upsert
   */
  export type ChargerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * The filter to search for the Charger to update in case it exists.
     */
    where: ChargerWhereUniqueInput
    /**
     * In case the Charger found by the `where` argument doesn't exist, create a new Charger with this data.
     */
    create: XOR<ChargerCreateInput, ChargerUncheckedCreateInput>
    /**
     * In case the Charger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargerUpdateInput, ChargerUncheckedUpdateInput>
  }

  /**
   * Charger delete
   */
  export type ChargerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
    /**
     * Filter which Charger to delete.
     */
    where: ChargerWhereUniqueInput
  }

  /**
   * Charger deleteMany
   */
  export type ChargerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chargers to delete
     */
    where?: ChargerWhereInput
    /**
     * Limit how many Chargers to delete.
     */
    limit?: number
  }

  /**
   * Charger.connectors
   */
  export type Charger$connectorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    where?: ConnectorWhereInput
    orderBy?: ConnectorOrderByWithRelationInput | ConnectorOrderByWithRelationInput[]
    cursor?: ConnectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectorScalarFieldEnum | ConnectorScalarFieldEnum[]
  }

  /**
   * Charger.transactions
   */
  export type Charger$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Charger without action
   */
  export type ChargerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charger
     */
    select?: ChargerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charger
     */
    omit?: ChargerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargerInclude<ExtArgs> | null
  }


  /**
   * Model Connector
   */

  export type AggregateConnector = {
    _count: ConnectorCountAggregateOutputType | null
    _avg: ConnectorAvgAggregateOutputType | null
    _sum: ConnectorSumAggregateOutputType | null
    _min: ConnectorMinAggregateOutputType | null
    _max: ConnectorMaxAggregateOutputType | null
  }

  export type ConnectorAvgAggregateOutputType = {
    id: number | null
    connectorId: number | null
  }

  export type ConnectorSumAggregateOutputType = {
    id: number | null
    connectorId: number | null
  }

  export type ConnectorMinAggregateOutputType = {
    id: number | null
    chargerId: string | null
    connectorId: number | null
    status: string | null
    errorCode: string | null
    lastStatusAt: Date | null
    createdAt: Date | null
  }

  export type ConnectorMaxAggregateOutputType = {
    id: number | null
    chargerId: string | null
    connectorId: number | null
    status: string | null
    errorCode: string | null
    lastStatusAt: Date | null
    createdAt: Date | null
  }

  export type ConnectorCountAggregateOutputType = {
    id: number
    chargerId: number
    connectorId: number
    status: number
    errorCode: number
    lastStatusAt: number
    createdAt: number
    _all: number
  }


  export type ConnectorAvgAggregateInputType = {
    id?: true
    connectorId?: true
  }

  export type ConnectorSumAggregateInputType = {
    id?: true
    connectorId?: true
  }

  export type ConnectorMinAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    status?: true
    errorCode?: true
    lastStatusAt?: true
    createdAt?: true
  }

  export type ConnectorMaxAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    status?: true
    errorCode?: true
    lastStatusAt?: true
    createdAt?: true
  }

  export type ConnectorCountAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    status?: true
    errorCode?: true
    lastStatusAt?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connector to aggregate.
     */
    where?: ConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connectors to fetch.
     */
    orderBy?: ConnectorOrderByWithRelationInput | ConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connectors
    **/
    _count?: true | ConnectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectorMaxAggregateInputType
  }

  export type GetConnectorAggregateType<T extends ConnectorAggregateArgs> = {
        [P in keyof T & keyof AggregateConnector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnector[P]>
      : GetScalarType<T[P], AggregateConnector[P]>
  }




  export type ConnectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectorWhereInput
    orderBy?: ConnectorOrderByWithAggregationInput | ConnectorOrderByWithAggregationInput[]
    by: ConnectorScalarFieldEnum[] | ConnectorScalarFieldEnum
    having?: ConnectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectorCountAggregateInputType | true
    _avg?: ConnectorAvgAggregateInputType
    _sum?: ConnectorSumAggregateInputType
    _min?: ConnectorMinAggregateInputType
    _max?: ConnectorMaxAggregateInputType
  }

  export type ConnectorGroupByOutputType = {
    id: number
    chargerId: string
    connectorId: number
    status: string
    errorCode: string | null
    lastStatusAt: Date
    createdAt: Date
    _count: ConnectorCountAggregateOutputType | null
    _avg: ConnectorAvgAggregateOutputType | null
    _sum: ConnectorSumAggregateOutputType | null
    _min: ConnectorMinAggregateOutputType | null
    _max: ConnectorMaxAggregateOutputType | null
  }

  type GetConnectorGroupByPayload<T extends ConnectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectorGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectorGroupByOutputType[P]>
        }
      >
    >


  export type ConnectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    status?: boolean
    errorCode?: boolean
    lastStatusAt?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connector"]>

  export type ConnectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    status?: boolean
    errorCode?: boolean
    lastStatusAt?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connector"]>

  export type ConnectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    status?: boolean
    errorCode?: boolean
    lastStatusAt?: boolean
    createdAt?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connector"]>

  export type ConnectorSelectScalar = {
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    status?: boolean
    errorCode?: boolean
    lastStatusAt?: boolean
    createdAt?: boolean
  }

  export type ConnectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chargerId" | "connectorId" | "status" | "errorCode" | "lastStatusAt" | "createdAt", ExtArgs["result"]["connector"]>
  export type ConnectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type ConnectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type ConnectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }

  export type $ConnectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connector"
    objects: {
      charger: Prisma.$ChargerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chargerId: string
      connectorId: number
      status: string
      errorCode: string | null
      lastStatusAt: Date
      createdAt: Date
    }, ExtArgs["result"]["connector"]>
    composites: {}
  }

  type ConnectorGetPayload<S extends boolean | null | undefined | ConnectorDefaultArgs> = $Result.GetResult<Prisma.$ConnectorPayload, S>

  type ConnectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectorCountAggregateInputType | true
    }

  export interface ConnectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connector'], meta: { name: 'Connector' } }
    /**
     * Find zero or one Connector that matches the filter.
     * @param {ConnectorFindUniqueArgs} args - Arguments to find a Connector
     * @example
     * // Get one Connector
     * const connector = await prisma.connector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectorFindUniqueArgs>(args: SelectSubset<T, ConnectorFindUniqueArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectorFindUniqueOrThrowArgs} args - Arguments to find a Connector
     * @example
     * // Get one Connector
     * const connector = await prisma.connector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorFindFirstArgs} args - Arguments to find a Connector
     * @example
     * // Get one Connector
     * const connector = await prisma.connector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectorFindFirstArgs>(args?: SelectSubset<T, ConnectorFindFirstArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorFindFirstOrThrowArgs} args - Arguments to find a Connector
     * @example
     * // Get one Connector
     * const connector = await prisma.connector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connectors
     * const connectors = await prisma.connector.findMany()
     * 
     * // Get first 10 Connectors
     * const connectors = await prisma.connector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectorWithIdOnly = await prisma.connector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectorFindManyArgs>(args?: SelectSubset<T, ConnectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connector.
     * @param {ConnectorCreateArgs} args - Arguments to create a Connector.
     * @example
     * // Create one Connector
     * const Connector = await prisma.connector.create({
     *   data: {
     *     // ... data to create a Connector
     *   }
     * })
     * 
     */
    create<T extends ConnectorCreateArgs>(args: SelectSubset<T, ConnectorCreateArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connectors.
     * @param {ConnectorCreateManyArgs} args - Arguments to create many Connectors.
     * @example
     * // Create many Connectors
     * const connector = await prisma.connector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectorCreateManyArgs>(args?: SelectSubset<T, ConnectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connectors and returns the data saved in the database.
     * @param {ConnectorCreateManyAndReturnArgs} args - Arguments to create many Connectors.
     * @example
     * // Create many Connectors
     * const connector = await prisma.connector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connectors and only return the `id`
     * const connectorWithIdOnly = await prisma.connector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connector.
     * @param {ConnectorDeleteArgs} args - Arguments to delete one Connector.
     * @example
     * // Delete one Connector
     * const Connector = await prisma.connector.delete({
     *   where: {
     *     // ... filter to delete one Connector
     *   }
     * })
     * 
     */
    delete<T extends ConnectorDeleteArgs>(args: SelectSubset<T, ConnectorDeleteArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connector.
     * @param {ConnectorUpdateArgs} args - Arguments to update one Connector.
     * @example
     * // Update one Connector
     * const connector = await prisma.connector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectorUpdateArgs>(args: SelectSubset<T, ConnectorUpdateArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connectors.
     * @param {ConnectorDeleteManyArgs} args - Arguments to filter Connectors to delete.
     * @example
     * // Delete a few Connectors
     * const { count } = await prisma.connector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectorDeleteManyArgs>(args?: SelectSubset<T, ConnectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connectors
     * const connector = await prisma.connector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectorUpdateManyArgs>(args: SelectSubset<T, ConnectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connectors and returns the data updated in the database.
     * @param {ConnectorUpdateManyAndReturnArgs} args - Arguments to update many Connectors.
     * @example
     * // Update many Connectors
     * const connector = await prisma.connector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connectors and only return the `id`
     * const connectorWithIdOnly = await prisma.connector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connector.
     * @param {ConnectorUpsertArgs} args - Arguments to update or create a Connector.
     * @example
     * // Update or create a Connector
     * const connector = await prisma.connector.upsert({
     *   create: {
     *     // ... data to create a Connector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connector we want to update
     *   }
     * })
     */
    upsert<T extends ConnectorUpsertArgs>(args: SelectSubset<T, ConnectorUpsertArgs<ExtArgs>>): Prisma__ConnectorClient<$Result.GetResult<Prisma.$ConnectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorCountArgs} args - Arguments to filter Connectors to count.
     * @example
     * // Count the number of Connectors
     * const count = await prisma.connector.count({
     *   where: {
     *     // ... the filter for the Connectors we want to count
     *   }
     * })
    **/
    count<T extends ConnectorCountArgs>(
      args?: Subset<T, ConnectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectorAggregateArgs>(args: Subset<T, ConnectorAggregateArgs>): Prisma.PrismaPromise<GetConnectorAggregateType<T>>

    /**
     * Group by Connector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectorGroupByArgs} args - Group by arguments.
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
      T extends ConnectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectorGroupByArgs['orderBy'] }
        : { orderBy?: ConnectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connector model
   */
  readonly fields: ConnectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charger<T extends ChargerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargerDefaultArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Connector model
   */
  interface ConnectorFieldRefs {
    readonly id: FieldRef<"Connector", 'Int'>
    readonly chargerId: FieldRef<"Connector", 'String'>
    readonly connectorId: FieldRef<"Connector", 'Int'>
    readonly status: FieldRef<"Connector", 'String'>
    readonly errorCode: FieldRef<"Connector", 'String'>
    readonly lastStatusAt: FieldRef<"Connector", 'DateTime'>
    readonly createdAt: FieldRef<"Connector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connector findUnique
   */
  export type ConnectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter, which Connector to fetch.
     */
    where: ConnectorWhereUniqueInput
  }

  /**
   * Connector findUniqueOrThrow
   */
  export type ConnectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter, which Connector to fetch.
     */
    where: ConnectorWhereUniqueInput
  }

  /**
   * Connector findFirst
   */
  export type ConnectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter, which Connector to fetch.
     */
    where?: ConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connectors to fetch.
     */
    orderBy?: ConnectorOrderByWithRelationInput | ConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connectors.
     */
    cursor?: ConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connectors.
     */
    distinct?: ConnectorScalarFieldEnum | ConnectorScalarFieldEnum[]
  }

  /**
   * Connector findFirstOrThrow
   */
  export type ConnectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter, which Connector to fetch.
     */
    where?: ConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connectors to fetch.
     */
    orderBy?: ConnectorOrderByWithRelationInput | ConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connectors.
     */
    cursor?: ConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connectors.
     */
    distinct?: ConnectorScalarFieldEnum | ConnectorScalarFieldEnum[]
  }

  /**
   * Connector findMany
   */
  export type ConnectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter, which Connectors to fetch.
     */
    where?: ConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connectors to fetch.
     */
    orderBy?: ConnectorOrderByWithRelationInput | ConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connectors.
     */
    cursor?: ConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connectors.
     */
    skip?: number
    distinct?: ConnectorScalarFieldEnum | ConnectorScalarFieldEnum[]
  }

  /**
   * Connector create
   */
  export type ConnectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Connector.
     */
    data: XOR<ConnectorCreateInput, ConnectorUncheckedCreateInput>
  }

  /**
   * Connector createMany
   */
  export type ConnectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connectors.
     */
    data: ConnectorCreateManyInput | ConnectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connector createManyAndReturn
   */
  export type ConnectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * The data used to create many Connectors.
     */
    data: ConnectorCreateManyInput | ConnectorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connector update
   */
  export type ConnectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Connector.
     */
    data: XOR<ConnectorUpdateInput, ConnectorUncheckedUpdateInput>
    /**
     * Choose, which Connector to update.
     */
    where: ConnectorWhereUniqueInput
  }

  /**
   * Connector updateMany
   */
  export type ConnectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connectors.
     */
    data: XOR<ConnectorUpdateManyMutationInput, ConnectorUncheckedUpdateManyInput>
    /**
     * Filter which Connectors to update
     */
    where?: ConnectorWhereInput
    /**
     * Limit how many Connectors to update.
     */
    limit?: number
  }

  /**
   * Connector updateManyAndReturn
   */
  export type ConnectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * The data used to update Connectors.
     */
    data: XOR<ConnectorUpdateManyMutationInput, ConnectorUncheckedUpdateManyInput>
    /**
     * Filter which Connectors to update
     */
    where?: ConnectorWhereInput
    /**
     * Limit how many Connectors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connector upsert
   */
  export type ConnectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Connector to update in case it exists.
     */
    where: ConnectorWhereUniqueInput
    /**
     * In case the Connector found by the `where` argument doesn't exist, create a new Connector with this data.
     */
    create: XOR<ConnectorCreateInput, ConnectorUncheckedCreateInput>
    /**
     * In case the Connector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectorUpdateInput, ConnectorUncheckedUpdateInput>
  }

  /**
   * Connector delete
   */
  export type ConnectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
    /**
     * Filter which Connector to delete.
     */
    where: ConnectorWhereUniqueInput
  }

  /**
   * Connector deleteMany
   */
  export type ConnectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connectors to delete
     */
    where?: ConnectorWhereInput
    /**
     * Limit how many Connectors to delete.
     */
    limit?: number
  }

  /**
   * Connector without action
   */
  export type ConnectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connector
     */
    select?: ConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connector
     */
    omit?: ConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectorInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    connectorId: number | null
    meterStart: number | null
    meterStop: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    connectorId: number | null
    meterStart: number | null
    meterStop: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    chargerId: string | null
    connectorId: number | null
    idTag: string | null
    meterStart: number | null
    meterStop: number | null
    startTimestamp: Date | null
    stopTimestamp: Date | null
    reason: string | null
    status: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    chargerId: string | null
    connectorId: number | null
    idTag: string | null
    meterStart: number | null
    meterStop: number | null
    startTimestamp: Date | null
    stopTimestamp: Date | null
    reason: string | null
    status: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    chargerId: number
    connectorId: number
    idTag: number
    meterStart: number
    meterStop: number
    startTimestamp: number
    stopTimestamp: number
    reason: number
    status: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    connectorId?: true
    meterStart?: true
    meterStop?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    connectorId?: true
    meterStart?: true
    meterStop?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    idTag?: true
    meterStart?: true
    meterStop?: true
    startTimestamp?: true
    stopTimestamp?: true
    reason?: true
    status?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    idTag?: true
    meterStart?: true
    meterStop?: true
    startTimestamp?: true
    stopTimestamp?: true
    reason?: true
    status?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    chargerId?: true
    connectorId?: true
    idTag?: true
    meterStart?: true
    meterStop?: true
    startTimestamp?: true
    stopTimestamp?: true
    reason?: true
    status?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    chargerId: string
    connectorId: number
    idTag: string
    meterStart: number
    meterStop: number | null
    startTimestamp: Date
    stopTimestamp: Date | null
    reason: string | null
    status: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    idTag?: boolean
    meterStart?: boolean
    meterStop?: boolean
    startTimestamp?: boolean
    stopTimestamp?: boolean
    reason?: boolean
    status?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    idTag?: boolean
    meterStart?: boolean
    meterStop?: boolean
    startTimestamp?: boolean
    stopTimestamp?: boolean
    reason?: boolean
    status?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    idTag?: boolean
    meterStart?: boolean
    meterStop?: boolean
    startTimestamp?: boolean
    stopTimestamp?: boolean
    reason?: boolean
    status?: boolean
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    chargerId?: boolean
    connectorId?: boolean
    idTag?: boolean
    meterStart?: boolean
    meterStop?: boolean
    startTimestamp?: boolean
    stopTimestamp?: boolean
    reason?: boolean
    status?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chargerId" | "connectorId" | "idTag" | "meterStart" | "meterStop" | "startTimestamp" | "stopTimestamp" | "reason" | "status", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charger?: boolean | ChargerDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      charger: Prisma.$ChargerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chargerId: string
      connectorId: number
      idTag: string
      meterStart: number
      meterStop: number | null
      startTimestamp: Date
      stopTimestamp: Date | null
      reason: string | null
      status: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charger<T extends ChargerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChargerDefaultArgs<ExtArgs>>): Prisma__ChargerClient<$Result.GetResult<Prisma.$ChargerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly chargerId: FieldRef<"Transaction", 'String'>
    readonly connectorId: FieldRef<"Transaction", 'Int'>
    readonly idTag: FieldRef<"Transaction", 'String'>
    readonly meterStart: FieldRef<"Transaction", 'Int'>
    readonly meterStop: FieldRef<"Transaction", 'Int'>
    readonly startTimestamp: FieldRef<"Transaction", 'DateTime'>
    readonly stopTimestamp: FieldRef<"Transaction", 'DateTime'>
    readonly reason: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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


  export const ChargerScalarFieldEnum: {
    id: 'id',
    vendor: 'vendor',
    model: 'model',
    firmwareVersion: 'firmwareVersion',
    serialNumber: 'serialNumber',
    boxSerialNumber: 'boxSerialNumber',
    lastBootAt: 'lastBootAt',
    lastHeartbeatAt: 'lastHeartbeatAt',
    connected: 'connected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChargerScalarFieldEnum = (typeof ChargerScalarFieldEnum)[keyof typeof ChargerScalarFieldEnum]


  export const ConnectorScalarFieldEnum: {
    id: 'id',
    chargerId: 'chargerId',
    connectorId: 'connectorId',
    status: 'status',
    errorCode: 'errorCode',
    lastStatusAt: 'lastStatusAt',
    createdAt: 'createdAt'
  };

  export type ConnectorScalarFieldEnum = (typeof ConnectorScalarFieldEnum)[keyof typeof ConnectorScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    chargerId: 'chargerId',
    connectorId: 'connectorId',
    idTag: 'idTag',
    meterStart: 'meterStart',
    meterStop: 'meterStop',
    startTimestamp: 'startTimestamp',
    stopTimestamp: 'stopTimestamp',
    reason: 'reason',
    status: 'status'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChargerWhereInput = {
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    id?: StringFilter<"Charger"> | string
    vendor?: StringNullableFilter<"Charger"> | string | null
    model?: StringNullableFilter<"Charger"> | string | null
    firmwareVersion?: StringNullableFilter<"Charger"> | string | null
    serialNumber?: StringNullableFilter<"Charger"> | string | null
    boxSerialNumber?: StringNullableFilter<"Charger"> | string | null
    lastBootAt?: DateTimeNullableFilter<"Charger"> | Date | string | null
    lastHeartbeatAt?: DateTimeNullableFilter<"Charger"> | Date | string | null
    connected?: BoolFilter<"Charger"> | boolean
    createdAt?: DateTimeFilter<"Charger"> | Date | string
    updatedAt?: DateTimeFilter<"Charger"> | Date | string
    connectors?: ConnectorListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type ChargerOrderByWithRelationInput = {
    id?: SortOrder
    vendor?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    boxSerialNumber?: SortOrderInput | SortOrder
    lastBootAt?: SortOrderInput | SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    connected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    connectors?: ConnectorOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ChargerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargerWhereInput | ChargerWhereInput[]
    OR?: ChargerWhereInput[]
    NOT?: ChargerWhereInput | ChargerWhereInput[]
    vendor?: StringNullableFilter<"Charger"> | string | null
    model?: StringNullableFilter<"Charger"> | string | null
    firmwareVersion?: StringNullableFilter<"Charger"> | string | null
    serialNumber?: StringNullableFilter<"Charger"> | string | null
    boxSerialNumber?: StringNullableFilter<"Charger"> | string | null
    lastBootAt?: DateTimeNullableFilter<"Charger"> | Date | string | null
    lastHeartbeatAt?: DateTimeNullableFilter<"Charger"> | Date | string | null
    connected?: BoolFilter<"Charger"> | boolean
    createdAt?: DateTimeFilter<"Charger"> | Date | string
    updatedAt?: DateTimeFilter<"Charger"> | Date | string
    connectors?: ConnectorListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ChargerOrderByWithAggregationInput = {
    id?: SortOrder
    vendor?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    firmwareVersion?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    boxSerialNumber?: SortOrderInput | SortOrder
    lastBootAt?: SortOrderInput | SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    connected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChargerCountOrderByAggregateInput
    _max?: ChargerMaxOrderByAggregateInput
    _min?: ChargerMinOrderByAggregateInput
  }

  export type ChargerScalarWhereWithAggregatesInput = {
    AND?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    OR?: ChargerScalarWhereWithAggregatesInput[]
    NOT?: ChargerScalarWhereWithAggregatesInput | ChargerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charger"> | string
    vendor?: StringNullableWithAggregatesFilter<"Charger"> | string | null
    model?: StringNullableWithAggregatesFilter<"Charger"> | string | null
    firmwareVersion?: StringNullableWithAggregatesFilter<"Charger"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Charger"> | string | null
    boxSerialNumber?: StringNullableWithAggregatesFilter<"Charger"> | string | null
    lastBootAt?: DateTimeNullableWithAggregatesFilter<"Charger"> | Date | string | null
    lastHeartbeatAt?: DateTimeNullableWithAggregatesFilter<"Charger"> | Date | string | null
    connected?: BoolWithAggregatesFilter<"Charger"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Charger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Charger"> | Date | string
  }

  export type ConnectorWhereInput = {
    AND?: ConnectorWhereInput | ConnectorWhereInput[]
    OR?: ConnectorWhereInput[]
    NOT?: ConnectorWhereInput | ConnectorWhereInput[]
    id?: IntFilter<"Connector"> | number
    chargerId?: StringFilter<"Connector"> | string
    connectorId?: IntFilter<"Connector"> | number
    status?: StringFilter<"Connector"> | string
    errorCode?: StringNullableFilter<"Connector"> | string | null
    lastStatusAt?: DateTimeFilter<"Connector"> | Date | string
    createdAt?: DateTimeFilter<"Connector"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }

  export type ConnectorOrderByWithRelationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    lastStatusAt?: SortOrder
    createdAt?: SortOrder
    charger?: ChargerOrderByWithRelationInput
  }

  export type ConnectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chargerId_connectorId?: ConnectorChargerIdConnectorIdCompoundUniqueInput
    AND?: ConnectorWhereInput | ConnectorWhereInput[]
    OR?: ConnectorWhereInput[]
    NOT?: ConnectorWhereInput | ConnectorWhereInput[]
    chargerId?: StringFilter<"Connector"> | string
    connectorId?: IntFilter<"Connector"> | number
    status?: StringFilter<"Connector"> | string
    errorCode?: StringNullableFilter<"Connector"> | string | null
    lastStatusAt?: DateTimeFilter<"Connector"> | Date | string
    createdAt?: DateTimeFilter<"Connector"> | Date | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }, "id" | "chargerId_connectorId">

  export type ConnectorOrderByWithAggregationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    lastStatusAt?: SortOrder
    createdAt?: SortOrder
    _count?: ConnectorCountOrderByAggregateInput
    _avg?: ConnectorAvgOrderByAggregateInput
    _max?: ConnectorMaxOrderByAggregateInput
    _min?: ConnectorMinOrderByAggregateInput
    _sum?: ConnectorSumOrderByAggregateInput
  }

  export type ConnectorScalarWhereWithAggregatesInput = {
    AND?: ConnectorScalarWhereWithAggregatesInput | ConnectorScalarWhereWithAggregatesInput[]
    OR?: ConnectorScalarWhereWithAggregatesInput[]
    NOT?: ConnectorScalarWhereWithAggregatesInput | ConnectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Connector"> | number
    chargerId?: StringWithAggregatesFilter<"Connector"> | string
    connectorId?: IntWithAggregatesFilter<"Connector"> | number
    status?: StringWithAggregatesFilter<"Connector"> | string
    errorCode?: StringNullableWithAggregatesFilter<"Connector"> | string | null
    lastStatusAt?: DateTimeWithAggregatesFilter<"Connector"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Connector"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    chargerId?: StringFilter<"Transaction"> | string
    connectorId?: IntFilter<"Transaction"> | number
    idTag?: StringFilter<"Transaction"> | string
    meterStart?: IntFilter<"Transaction"> | number
    meterStop?: IntNullableFilter<"Transaction"> | number | null
    startTimestamp?: DateTimeFilter<"Transaction"> | Date | string
    stopTimestamp?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    reason?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    idTag?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrderInput | SortOrder
    startTimestamp?: SortOrder
    stopTimestamp?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    charger?: ChargerOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    chargerId?: StringFilter<"Transaction"> | string
    connectorId?: IntFilter<"Transaction"> | number
    idTag?: StringFilter<"Transaction"> | string
    meterStart?: IntFilter<"Transaction"> | number
    meterStop?: IntNullableFilter<"Transaction"> | number | null
    startTimestamp?: DateTimeFilter<"Transaction"> | Date | string
    stopTimestamp?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    reason?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
    charger?: XOR<ChargerScalarRelationFilter, ChargerWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    idTag?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrderInput | SortOrder
    startTimestamp?: SortOrder
    stopTimestamp?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    chargerId?: StringWithAggregatesFilter<"Transaction"> | string
    connectorId?: IntWithAggregatesFilter<"Transaction"> | number
    idTag?: StringWithAggregatesFilter<"Transaction"> | string
    meterStart?: IntWithAggregatesFilter<"Transaction"> | number
    meterStop?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    startTimestamp?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    stopTimestamp?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type ChargerCreateInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connectors?: ConnectorCreateNestedManyWithoutChargerInput
    transactions?: TransactionCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connectors?: ConnectorUncheckedCreateNestedManyWithoutChargerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectors?: ConnectorUpdateManyWithoutChargerNestedInput
    transactions?: TransactionUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectors?: ConnectorUncheckedUpdateManyWithoutChargerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerCreateManyInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChargerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorCreateInput = {
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
    charger: ChargerCreateNestedOneWithoutConnectorsInput
  }

  export type ConnectorUncheckedCreateInput = {
    id?: number
    chargerId: string
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
  }

  export type ConnectorUpdateInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charger?: ChargerUpdateOneRequiredWithoutConnectorsNestedInput
  }

  export type ConnectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorCreateManyInput = {
    id?: number
    chargerId: string
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
  }

  export type ConnectorUpdateManyMutationInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
    charger: ChargerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    chargerId: string
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
  }

  export type TransactionUpdateInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    charger?: ChargerUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    chargerId: string
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
  }

  export type TransactionUpdateManyMutationInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chargerId?: StringFieldUpdateOperationsInput | string
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConnectorListRelationFilter = {
    every?: ConnectorWhereInput
    some?: ConnectorWhereInput
    none?: ConnectorWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChargerCountOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    model?: SortOrder
    firmwareVersion?: SortOrder
    serialNumber?: SortOrder
    boxSerialNumber?: SortOrder
    lastBootAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    connected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargerMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    model?: SortOrder
    firmwareVersion?: SortOrder
    serialNumber?: SortOrder
    boxSerialNumber?: SortOrder
    lastBootAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    connected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargerMinOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    model?: SortOrder
    firmwareVersion?: SortOrder
    serialNumber?: SortOrder
    boxSerialNumber?: SortOrder
    lastBootAt?: SortOrder
    lastHeartbeatAt?: SortOrder
    connected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChargerScalarRelationFilter = {
    is?: ChargerWhereInput
    isNot?: ChargerWhereInput
  }

  export type ConnectorChargerIdConnectorIdCompoundUniqueInput = {
    chargerId: string
    connectorId: number
  }

  export type ConnectorCountOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    lastStatusAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorAvgOrderByAggregateInput = {
    id?: SortOrder
    connectorId?: SortOrder
  }

  export type ConnectorMaxOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    lastStatusAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorMinOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    lastStatusAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectorSumOrderByAggregateInput = {
    id?: SortOrder
    connectorId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    idTag?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrder
    startTimestamp?: SortOrder
    stopTimestamp?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    connectorId?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    idTag?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrder
    startTimestamp?: SortOrder
    stopTimestamp?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    chargerId?: SortOrder
    connectorId?: SortOrder
    idTag?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrder
    startTimestamp?: SortOrder
    stopTimestamp?: SortOrder
    reason?: SortOrder
    status?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    connectorId?: SortOrder
    meterStart?: SortOrder
    meterStop?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ConnectorCreateNestedManyWithoutChargerInput = {
    create?: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput> | ConnectorCreateWithoutChargerInput[] | ConnectorUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ConnectorCreateOrConnectWithoutChargerInput | ConnectorCreateOrConnectWithoutChargerInput[]
    createMany?: ConnectorCreateManyChargerInputEnvelope
    connect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutChargerInput = {
    create?: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput> | TransactionCreateWithoutChargerInput[] | TransactionUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChargerInput | TransactionCreateOrConnectWithoutChargerInput[]
    createMany?: TransactionCreateManyChargerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ConnectorUncheckedCreateNestedManyWithoutChargerInput = {
    create?: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput> | ConnectorCreateWithoutChargerInput[] | ConnectorUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ConnectorCreateOrConnectWithoutChargerInput | ConnectorCreateOrConnectWithoutChargerInput[]
    createMany?: ConnectorCreateManyChargerInputEnvelope
    connect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutChargerInput = {
    create?: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput> | TransactionCreateWithoutChargerInput[] | TransactionUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChargerInput | TransactionCreateOrConnectWithoutChargerInput[]
    createMany?: TransactionCreateManyChargerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConnectorUpdateManyWithoutChargerNestedInput = {
    create?: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput> | ConnectorCreateWithoutChargerInput[] | ConnectorUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ConnectorCreateOrConnectWithoutChargerInput | ConnectorCreateOrConnectWithoutChargerInput[]
    upsert?: ConnectorUpsertWithWhereUniqueWithoutChargerInput | ConnectorUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: ConnectorCreateManyChargerInputEnvelope
    set?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    disconnect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    delete?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    connect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    update?: ConnectorUpdateWithWhereUniqueWithoutChargerInput | ConnectorUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: ConnectorUpdateManyWithWhereWithoutChargerInput | ConnectorUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: ConnectorScalarWhereInput | ConnectorScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutChargerNestedInput = {
    create?: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput> | TransactionCreateWithoutChargerInput[] | TransactionUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChargerInput | TransactionCreateOrConnectWithoutChargerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChargerInput | TransactionUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: TransactionCreateManyChargerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChargerInput | TransactionUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChargerInput | TransactionUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ConnectorUncheckedUpdateManyWithoutChargerNestedInput = {
    create?: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput> | ConnectorCreateWithoutChargerInput[] | ConnectorUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: ConnectorCreateOrConnectWithoutChargerInput | ConnectorCreateOrConnectWithoutChargerInput[]
    upsert?: ConnectorUpsertWithWhereUniqueWithoutChargerInput | ConnectorUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: ConnectorCreateManyChargerInputEnvelope
    set?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    disconnect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    delete?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    connect?: ConnectorWhereUniqueInput | ConnectorWhereUniqueInput[]
    update?: ConnectorUpdateWithWhereUniqueWithoutChargerInput | ConnectorUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: ConnectorUpdateManyWithWhereWithoutChargerInput | ConnectorUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: ConnectorScalarWhereInput | ConnectorScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutChargerNestedInput = {
    create?: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput> | TransactionCreateWithoutChargerInput[] | TransactionUncheckedCreateWithoutChargerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutChargerInput | TransactionCreateOrConnectWithoutChargerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutChargerInput | TransactionUpsertWithWhereUniqueWithoutChargerInput[]
    createMany?: TransactionCreateManyChargerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutChargerInput | TransactionUpdateWithWhereUniqueWithoutChargerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutChargerInput | TransactionUpdateManyWithWhereWithoutChargerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ChargerCreateNestedOneWithoutConnectorsInput = {
    create?: XOR<ChargerCreateWithoutConnectorsInput, ChargerUncheckedCreateWithoutConnectorsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutConnectorsInput
    connect?: ChargerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChargerUpdateOneRequiredWithoutConnectorsNestedInput = {
    create?: XOR<ChargerCreateWithoutConnectorsInput, ChargerUncheckedCreateWithoutConnectorsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutConnectorsInput
    upsert?: ChargerUpsertWithoutConnectorsInput
    connect?: ChargerWhereUniqueInput
    update?: XOR<XOR<ChargerUpdateToOneWithWhereWithoutConnectorsInput, ChargerUpdateWithoutConnectorsInput>, ChargerUncheckedUpdateWithoutConnectorsInput>
  }

  export type ChargerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ChargerCreateWithoutTransactionsInput, ChargerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutTransactionsInput
    connect?: ChargerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChargerUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ChargerCreateWithoutTransactionsInput, ChargerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ChargerCreateOrConnectWithoutTransactionsInput
    upsert?: ChargerUpsertWithoutTransactionsInput
    connect?: ChargerWhereUniqueInput
    update?: XOR<XOR<ChargerUpdateToOneWithWhereWithoutTransactionsInput, ChargerUpdateWithoutTransactionsInput>, ChargerUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ConnectorCreateWithoutChargerInput = {
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
  }

  export type ConnectorUncheckedCreateWithoutChargerInput = {
    id?: number
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
  }

  export type ConnectorCreateOrConnectWithoutChargerInput = {
    where: ConnectorWhereUniqueInput
    create: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput>
  }

  export type ConnectorCreateManyChargerInputEnvelope = {
    data: ConnectorCreateManyChargerInput | ConnectorCreateManyChargerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutChargerInput = {
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
  }

  export type TransactionUncheckedCreateWithoutChargerInput = {
    id?: number
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
  }

  export type TransactionCreateOrConnectWithoutChargerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput>
  }

  export type TransactionCreateManyChargerInputEnvelope = {
    data: TransactionCreateManyChargerInput | TransactionCreateManyChargerInput[]
    skipDuplicates?: boolean
  }

  export type ConnectorUpsertWithWhereUniqueWithoutChargerInput = {
    where: ConnectorWhereUniqueInput
    update: XOR<ConnectorUpdateWithoutChargerInput, ConnectorUncheckedUpdateWithoutChargerInput>
    create: XOR<ConnectorCreateWithoutChargerInput, ConnectorUncheckedCreateWithoutChargerInput>
  }

  export type ConnectorUpdateWithWhereUniqueWithoutChargerInput = {
    where: ConnectorWhereUniqueInput
    data: XOR<ConnectorUpdateWithoutChargerInput, ConnectorUncheckedUpdateWithoutChargerInput>
  }

  export type ConnectorUpdateManyWithWhereWithoutChargerInput = {
    where: ConnectorScalarWhereInput
    data: XOR<ConnectorUpdateManyMutationInput, ConnectorUncheckedUpdateManyWithoutChargerInput>
  }

  export type ConnectorScalarWhereInput = {
    AND?: ConnectorScalarWhereInput | ConnectorScalarWhereInput[]
    OR?: ConnectorScalarWhereInput[]
    NOT?: ConnectorScalarWhereInput | ConnectorScalarWhereInput[]
    id?: IntFilter<"Connector"> | number
    chargerId?: StringFilter<"Connector"> | string
    connectorId?: IntFilter<"Connector"> | number
    status?: StringFilter<"Connector"> | string
    errorCode?: StringNullableFilter<"Connector"> | string | null
    lastStatusAt?: DateTimeFilter<"Connector"> | Date | string
    createdAt?: DateTimeFilter<"Connector"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutChargerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutChargerInput, TransactionUncheckedUpdateWithoutChargerInput>
    create: XOR<TransactionCreateWithoutChargerInput, TransactionUncheckedCreateWithoutChargerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutChargerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutChargerInput, TransactionUncheckedUpdateWithoutChargerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutChargerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutChargerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    chargerId?: StringFilter<"Transaction"> | string
    connectorId?: IntFilter<"Transaction"> | number
    idTag?: StringFilter<"Transaction"> | string
    meterStart?: IntFilter<"Transaction"> | number
    meterStop?: IntNullableFilter<"Transaction"> | number | null
    startTimestamp?: DateTimeFilter<"Transaction"> | Date | string
    stopTimestamp?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    reason?: StringNullableFilter<"Transaction"> | string | null
    status?: StringFilter<"Transaction"> | string
  }

  export type ChargerCreateWithoutConnectorsInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateWithoutConnectorsInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerCreateOrConnectWithoutConnectorsInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutConnectorsInput, ChargerUncheckedCreateWithoutConnectorsInput>
  }

  export type ChargerUpsertWithoutConnectorsInput = {
    update: XOR<ChargerUpdateWithoutConnectorsInput, ChargerUncheckedUpdateWithoutConnectorsInput>
    create: XOR<ChargerCreateWithoutConnectorsInput, ChargerUncheckedCreateWithoutConnectorsInput>
    where?: ChargerWhereInput
  }

  export type ChargerUpdateToOneWithWhereWithoutConnectorsInput = {
    where?: ChargerWhereInput
    data: XOR<ChargerUpdateWithoutConnectorsInput, ChargerUncheckedUpdateWithoutConnectorsInput>
  }

  export type ChargerUpdateWithoutConnectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateWithoutConnectorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ChargerCreateWithoutTransactionsInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connectors?: ConnectorCreateNestedManyWithoutChargerInput
  }

  export type ChargerUncheckedCreateWithoutTransactionsInput = {
    id: string
    vendor?: string | null
    model?: string | null
    firmwareVersion?: string | null
    serialNumber?: string | null
    boxSerialNumber?: string | null
    lastBootAt?: Date | string | null
    lastHeartbeatAt?: Date | string | null
    connected?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    connectors?: ConnectorUncheckedCreateNestedManyWithoutChargerInput
  }

  export type ChargerCreateOrConnectWithoutTransactionsInput = {
    where: ChargerWhereUniqueInput
    create: XOR<ChargerCreateWithoutTransactionsInput, ChargerUncheckedCreateWithoutTransactionsInput>
  }

  export type ChargerUpsertWithoutTransactionsInput = {
    update: XOR<ChargerUpdateWithoutTransactionsInput, ChargerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ChargerCreateWithoutTransactionsInput, ChargerUncheckedCreateWithoutTransactionsInput>
    where?: ChargerWhereInput
  }

  export type ChargerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ChargerWhereInput
    data: XOR<ChargerUpdateWithoutTransactionsInput, ChargerUncheckedUpdateWithoutTransactionsInput>
  }

  export type ChargerUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectors?: ConnectorUpdateManyWithoutChargerNestedInput
  }

  export type ChargerUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    firmwareVersion?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boxSerialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastBootAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectors?: ConnectorUncheckedUpdateManyWithoutChargerNestedInput
  }

  export type ConnectorCreateManyChargerInput = {
    id?: number
    connectorId: number
    status: string
    errorCode?: string | null
    lastStatusAt?: Date | string
    createdAt?: Date | string
  }

  export type TransactionCreateManyChargerInput = {
    id?: number
    connectorId: number
    idTag: string
    meterStart: number
    meterStop?: number | null
    startTimestamp: Date | string
    stopTimestamp?: Date | string | null
    reason?: string | null
    status?: string
  }

  export type ConnectorUpdateWithoutChargerInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorUncheckedUpdateWithoutChargerInput = {
    id?: IntFieldUpdateOperationsInput | number
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectorUncheckedUpdateManyWithoutChargerInput = {
    id?: IntFieldUpdateOperationsInput | number
    connectorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastStatusAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutChargerInput = {
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateWithoutChargerInput = {
    id?: IntFieldUpdateOperationsInput | number
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutChargerInput = {
    id?: IntFieldUpdateOperationsInput | number
    connectorId?: IntFieldUpdateOperationsInput | number
    idTag?: StringFieldUpdateOperationsInput | string
    meterStart?: IntFieldUpdateOperationsInput | number
    meterStop?: NullableIntFieldUpdateOperationsInput | number | null
    startTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    stopTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
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