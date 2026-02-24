import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-QGM4M3NI.js";

// node_modules/@prisma/client-runtime-utils/dist/index.js
var require_dist = __commonJS({
  "node_modules/@prisma/client-runtime-utils/dist/index.js"(exports, module) {
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
    var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
    var index_exports = {};
    __export(index_exports, {
      AnyNull: () => AnyNull3,
      AnyNullClass: () => AnyNullClass,
      DbNull: () => DbNull3,
      DbNullClass: () => DbNullClass,
      Decimal: () => Decimal3,
      JsonNull: () => JsonNull3,
      JsonNullClass: () => JsonNullClass,
      NullTypes: () => NullTypes4,
      ObjectEnumValue: () => ObjectEnumValue2,
      PrismaClientInitializationError: () => PrismaClientInitializationError3,
      PrismaClientKnownRequestError: () => PrismaClientKnownRequestError3,
      PrismaClientRustError: () => PrismaClientRustError,
      PrismaClientRustPanicError: () => PrismaClientRustPanicError3,
      PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError3,
      PrismaClientValidationError: () => PrismaClientValidationError3,
      Sql: () => Sql3,
      empty: () => empty3,
      hasBatchIndex: () => hasBatchIndex,
      isAnyNull: () => isAnyNull2,
      isDbNull: () => isDbNull2,
      isJsonNull: () => isJsonNull2,
      join: () => join3,
      raw: () => raw3,
      sql: () => sql
    });
    module.exports = __toCommonJS(index_exports);
    function hasBatchIndex(value) {
      return typeof value["batchRequestIdx"] === "number";
    }
    function setClassName(classObject, name) {
      Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
      });
    }
    var PrismaClientInitializationError3 = class _PrismaClientInitializationError extends Error {
      clientVersion;
      errorCode;
      retryable;
      constructor(message, clientVersion, errorCode) {
        super(message);
        this.name = "PrismaClientInitializationError";
        this.clientVersion = clientVersion;
        this.errorCode = errorCode;
        Error.captureStackTrace(_PrismaClientInitializationError);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    setClassName(PrismaClientInitializationError3, "PrismaClientInitializationError");
    var PrismaClientKnownRequestError3 = class extends Error {
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientKnownRequestError";
        this.code = code;
        this.clientVersion = clientVersion;
        this.meta = meta;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          enumerable: false,
          writable: true
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    setClassName(PrismaClientKnownRequestError3, "PrismaClientKnownRequestError");
    function getBacktrace(log3) {
      if (log3.fields?.message) {
        let str = log3.fields?.message;
        if (log3.fields?.file) {
          str += ` in ${log3.fields.file}`;
          if (log3.fields?.line) {
            str += `:${log3.fields.line}`;
          }
          if (log3.fields?.column) {
            str += `:${log3.fields.column}`;
          }
        }
        if (log3.fields?.reason) {
          str += `
${log3.fields?.reason}`;
        }
        return str;
      }
      return "Unknown error";
    }
    function isPanic(err) {
      return err.fields?.message === "PANIC";
    }
    var PrismaClientRustError = class extends Error {
      clientVersion;
      _isPanic;
      constructor({ clientVersion, error }) {
        const backtrace = getBacktrace(error);
        super(backtrace ?? "Unknown error");
        this._isPanic = isPanic(error);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustError";
      }
      isPanic() {
        return this._isPanic;
      }
    };
    setClassName(PrismaClientRustError, "PrismaClientRustError");
    var PrismaClientRustPanicError3 = class extends Error {
      clientVersion;
      constructor(message, clientVersion) {
        super(message);
        this.name = "PrismaClientRustPanicError";
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    setClassName(PrismaClientRustPanicError3, "PrismaClientRustPanicError");
    var PrismaClientUnknownRequestError3 = class extends Error {
      clientVersion;
      batchRequestIdx;
      constructor(message, { clientVersion, batchRequestIdx }) {
        super(message);
        this.name = "PrismaClientUnknownRequestError";
        this.clientVersion = clientVersion;
        Object.defineProperty(this, "batchRequestIdx", {
          value: batchRequestIdx,
          writable: true,
          enumerable: false
        });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    setClassName(PrismaClientUnknownRequestError3, "PrismaClientUnknownRequestError");
    var PrismaClientValidationError3 = class extends Error {
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(message, { clientVersion }) {
        super(message);
        this.clientVersion = clientVersion;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    setClassName(PrismaClientValidationError3, "PrismaClientValidationError");
    var secret = /* @__PURE__ */ Symbol();
    var representations = /* @__PURE__ */ new WeakMap();
    var ObjectEnumValue2 = class {
      constructor(arg) {
        if (arg === secret) {
          representations.set(this, `Prisma.${this._getName()}`);
        } else {
          representations.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
        }
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return representations.get(this);
      }
    };
    function setClassName2(classObject, name) {
      Object.defineProperty(classObject, "name", {
        value: name,
        configurable: true
      });
    }
    var NullTypesEnumValue = class extends ObjectEnumValue2 {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var DbNullClass = class extends NullTypesEnumValue {
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_DbNull;
    };
    setClassName2(DbNullClass, "DbNull");
    var JsonNullClass = class extends NullTypesEnumValue {
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_JsonNull;
    };
    setClassName2(JsonNullClass, "JsonNull");
    var AnyNullClass = class extends NullTypesEnumValue {
      // Phantom private property to prevent structural type equality
      // eslint-disable-next-line no-unused-private-class-members
      #_brand_AnyNull;
    };
    setClassName2(AnyNullClass, "AnyNull");
    var NullTypes4 = {
      DbNull: DbNullClass,
      JsonNull: JsonNullClass,
      AnyNull: AnyNullClass
    };
    var DbNull3 = new DbNullClass(secret);
    var JsonNull3 = new JsonNullClass(secret);
    var AnyNull3 = new AnyNullClass(secret);
    function isDbNull2(value) {
      return value === DbNull3;
    }
    function isJsonNull2(value) {
      return value === JsonNull3;
    }
    function isAnyNull2(value) {
      return value === AnyNull3;
    }
    var EXP_LIMIT = 9e15;
    var MAX_DIGITS = 1e9;
    var NUMERALS = "0123456789abcdef";
    var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var DEFAULTS = {
      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.
      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,
      // 1 to MAX_DIGITS
      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,
      // 0 to 8
      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,
      // 0 to 9
      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,
      // 0 to -EXP_LIMIT
      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos: 21,
      // 0 to EXP_LIMIT
      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,
      // -1 to -EXP_LIMIT
      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,
      // 1 to EXP_LIMIT
      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false
      // true/false
    };
    var inexact;
    var quadrant;
    var external = true;
    var decimalError = "[DecimalError] ";
    var invalidArgument = decimalError + "Invalid argument: ";
    var precisionLimitExceeded = decimalError + "Precision limit exceeded";
    var cryptoUnavailable = decimalError + "crypto unavailable";
    var tag = "[object Decimal]";
    var mathfloor = Math.floor;
    var mathpow = Math.pow;
    var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var BASE = 1e7;
    var LOG_BASE = 7;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var LN10_PRECISION = LN10.length - 1;
    var PI_PRECISION = PI.length - 1;
    var P = { toStringTag: tag };
    P.absoluteValue = P.abs = function() {
      var x = new this.constructor(this);
      if (x.s < 0) x.s = 1;
      return finalise(x);
    };
    P.ceil = function() {
      return finalise(new this.constructor(this), this.e + 1, 2);
    };
    P.clampedTo = P.clamp = function(min2, max2) {
      var k, x = this, Ctor = x.constructor;
      min2 = new Ctor(min2);
      max2 = new Ctor(max2);
      if (!min2.s || !max2.s) return new Ctor(NaN);
      if (min2.gt(max2)) throw Error(invalidArgument + max2);
      k = x.cmp(min2);
      return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
    };
    P.comparedTo = P.cmp = function(y) {
      var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
      if (!xd || !yd) {
        return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
      }
      if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys) return xs;
      if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
      xdL = xd.length;
      ydL = yd.length;
      for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
        if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      }
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    };
    P.cosine = P.cos = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.d) return new Ctor(NaN);
      if (!x.d[0]) return new Ctor(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
    };
    P.cubeRoot = P.cbrt = function() {
      var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero()) return new Ctor(x);
      external = false;
      s = x.s * mathpow(x.s * x, 1 / 3);
      if (!s || Math.abs(s) == 1 / 0) {
        n = digitsToString(x.d);
        e = x.e;
        if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
        s = mathpow(n, 1 / 3);
        e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
        r.s = x.s;
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        t3 = t.times(t).times(t);
        t3plusx = t3.plus(x);
        r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.decimalPlaces = P.dp = function() {
      var w, d = this.d, n = NaN;
      if (d) {
        w = d.length - 1;
        n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
        w = d[w];
        if (w) for (; w % 10 == 0; w /= 10) n--;
        if (n < 0) n = 0;
      }
      return n;
    };
    P.dividedBy = P.div = function(y) {
      return divide(this, new this.constructor(y));
    };
    P.dividedToIntegerBy = P.divToInt = function(y) {
      var x = this, Ctor = x.constructor;
      return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    };
    P.equals = P.eq = function(y) {
      return this.cmp(y) === 0;
    };
    P.floor = function() {
      return finalise(new this.constructor(this), this.e + 1, 3);
    };
    P.greaterThan = P.gt = function(y) {
      return this.cmp(y) > 0;
    };
    P.greaterThanOrEqualTo = P.gte = function(y) {
      var k = this.cmp(y);
      return k == 1 || k === 0;
    };
    P.hyperbolicCosine = P.cosh = function() {
      var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
      if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
      if (x.isZero()) return one;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        n = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        n = "2.3283064365386962890625e-10";
      }
      x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
      var cosh2_x, i = k, d8 = new Ctor(8);
      for (; i--; ) {
        cosh2_x = x.times(x);
        x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      }
      return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.hyperbolicSine = P.sinh = function() {
      var k, pr, rm, len, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
      Ctor.rounding = 1;
      len = x.d.length;
      if (len < 3) {
        x = taylorSeries(Ctor, 2, x, x, true);
      } else {
        k = 1.4 * Math.sqrt(len);
        k = k > 16 ? 16 : k | 0;
        x = x.times(1 / tinyPow(5, k));
        x = taylorSeries(Ctor, 2, x, x, true);
        var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
        for (; k--; ) {
          sinh2_x = x.times(x);
          x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
        }
      }
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(x, pr, rm, true);
    };
    P.hyperbolicTangent = P.tanh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite()) return new Ctor(x.s);
      if (x.isZero()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 7;
      Ctor.rounding = 1;
      return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
    };
    P.inverseCosine = P.acos = function() {
      var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
      if (k !== -1) {
        return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
      }
      if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(2);
    };
    P.inverseHyperbolicCosine = P.acosh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
      if (!x.isFinite()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).minus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicSine = P.asinh = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite() || x.isZero()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
      Ctor.rounding = 1;
      external = false;
      x = x.times(x).plus(1).sqrt().plus(x);
      external = true;
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.ln();
    };
    P.inverseHyperbolicTangent = P.atanh = function() {
      var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
      if (!x.isFinite()) return new Ctor(NaN);
      if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      xsd = x.sd();
      if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
      Ctor.precision = wpr = xsd - x.e;
      x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
      Ctor.precision = pr + 4;
      Ctor.rounding = 1;
      x = x.ln();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(0.5);
    };
    P.inverseSine = P.asin = function() {
      var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
      if (x.isZero()) return new Ctor(x);
      k = x.abs().cmp(1);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (k !== -1) {
        if (k === 0) {
          halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
          halfPi.s = x.s;
          return halfPi;
        }
        return new Ctor(NaN);
      }
      Ctor.precision = pr + 6;
      Ctor.rounding = 1;
      x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return x.times(2);
    };
    P.inverseTangent = P.atan = function() {
      var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
      if (!x.isFinite()) {
        if (!x.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) {
          r = getPi(Ctor, pr + 4, rm).times(0.5);
          r.s = x.s;
          return r;
        }
      } else if (x.isZero()) {
        return new Ctor(x);
      } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.25);
        r.s = x.s;
        return r;
      }
      Ctor.precision = wpr = pr + 10;
      Ctor.rounding = 1;
      k = Math.min(28, wpr / LOG_BASE + 2 | 0);
      for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
      external = false;
      j = Math.ceil(wpr / LOG_BASE);
      n = 1;
      x2 = x.times(x);
      r = new Ctor(x);
      px = x;
      for (; i !== -1; ) {
        px = px.times(x2);
        t = r.minus(px.div(n += 2));
        px = px.times(x2);
        r = t.plus(px.div(n += 2));
        if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
      }
      if (k) r = r.times(2 << k - 1);
      external = true;
      return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
    };
    P.isFinite = function() {
      return !!this.d;
    };
    P.isInteger = P.isInt = function() {
      return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
    };
    P.isNaN = function() {
      return !this.s;
    };
    P.isNegative = P.isNeg = function() {
      return this.s < 0;
    };
    P.isPositive = P.isPos = function() {
      return this.s > 0;
    };
    P.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    P.lessThan = P.lt = function(y) {
      return this.cmp(y) < 0;
    };
    P.lessThanOrEqualTo = P.lte = function(y) {
      return this.cmp(y) < 1;
    };
    P.logarithm = P.log = function(base) {
      var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
      if (base == null) {
        base = new Ctor(10);
        isBase10 = true;
      } else {
        base = new Ctor(base);
        d = base.d;
        if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      d = arg.d;
      if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
        return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
      }
      if (isBase10) {
        if (d.length > 1) {
          inf = true;
        } else {
          for (k = d[0]; k % 10 === 0; ) k /= 10;
          inf = k !== 1;
        }
      }
      external = false;
      sd = pr + guard;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (checkRoundingDigits(r.d, k = pr, rm)) {
        do {
          sd += 10;
          num = naturalLogarithm(arg, sd);
          denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
          r = divide(num, denominator, sd, 1);
          if (!inf) {
            if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
              r = finalise(r, pr + 1, 0);
            }
            break;
          }
        } while (checkRoundingDigits(r.d, k += 10, rm));
      }
      external = true;
      return finalise(r, pr, rm);
    };
    P.minus = P.sub = function(y) {
      var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (x.d) y.s = -y.s;
        else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.plus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;
        else if (xd[0]) y = new Ctor(x);
        else return new Ctor(rm === 3 ? -0 : 0);
        return external ? finalise(y, pr, rm) : y;
      }
      e = mathfloor(y.e / LOG_BASE);
      xe = mathfloor(x.e / LOG_BASE);
      xd = xd.slice();
      k = xe - e;
      if (k) {
        xLTy = k < 0;
        if (xLTy) {
          d = xd;
          k = -k;
          len = yd.length;
        } else {
          d = yd;
          e = xe;
          len = xd.length;
        }
        i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
        if (k > i) {
          k = i;
          d.length = 1;
        }
        d.reverse();
        for (i = k; i--; ) d.push(0);
        d.reverse();
      } else {
        i = xd.length;
        len = yd.length;
        xLTy = i < len;
        if (xLTy) len = i;
        for (i = 0; i < len; i++) {
          if (xd[i] != yd[i]) {
            xLTy = xd[i] < yd[i];
            break;
          }
        }
        k = 0;
      }
      if (xLTy) {
        d = xd;
        xd = yd;
        yd = d;
        y.s = -y.s;
      }
      len = xd.length;
      for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
      for (i = yd.length; i > k; ) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
          --xd[j];
          xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; xd[--len] === 0; ) xd.pop();
      for (; xd[0] === 0; xd.shift()) --e;
      if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.modulo = P.mod = function(y) {
      var q, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
      if (!y.d || x.d && !x.d[0]) {
        return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
      }
      external = false;
      if (Ctor.modulo == 9) {
        q = divide(x, y.abs(), 0, 3, 1);
        q.s *= y.s;
      } else {
        q = divide(x, y, 0, Ctor.modulo, 1);
      }
      q = q.times(y);
      external = true;
      return x.minus(q);
    };
    P.naturalExponential = P.exp = function() {
      return naturalExponential(this);
    };
    P.naturalLogarithm = P.ln = function() {
      return naturalLogarithm(this);
    };
    P.negated = P.neg = function() {
      var x = new this.constructor(this);
      x.s = -x.s;
      return finalise(x);
    };
    P.plus = P.add = function(y) {
      var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
      y = new Ctor(y);
      if (!x.d || !y.d) {
        if (!x.s || !y.s) y = new Ctor(NaN);
        else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
        return y;
      }
      if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
      }
      xd = x.d;
      yd = y.d;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (!xd[0] || !yd[0]) {
        if (!yd[0]) y = new Ctor(x);
        return external ? finalise(y, pr, rm) : y;
      }
      k = mathfloor(x.e / LOG_BASE);
      e = mathfloor(y.e / LOG_BASE);
      xd = xd.slice();
      i = k - e;
      if (i) {
        if (i < 0) {
          d = xd;
          i = -i;
          len = yd.length;
        } else {
          d = yd;
          e = k;
          len = xd.length;
        }
        k = Math.ceil(pr / LOG_BASE);
        len = k > len ? k + 1 : len + 1;
        if (i > len) {
          i = len;
          d.length = 1;
        }
        d.reverse();
        for (; i--; ) d.push(0);
        d.reverse();
      }
      len = xd.length;
      i = yd.length;
      if (len - i < 0) {
        i = len;
        d = yd;
        yd = xd;
        xd = d;
      }
      for (carry = 0; i; ) {
        carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
        xd[i] %= BASE;
      }
      if (carry) {
        xd.unshift(carry);
        ++e;
      }
      for (len = xd.length; xd[--len] == 0; ) xd.pop();
      y.d = xd;
      y.e = getBase10Exponent(xd, e);
      return external ? finalise(y, pr, rm) : y;
    };
    P.precision = P.sd = function(z) {
      var k, x = this;
      if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
      if (x.d) {
        k = getPrecision(x.d);
        if (z && x.e + 1 > k) k = x.e + 1;
      } else {
        k = NaN;
      }
      return k;
    };
    P.round = function() {
      var x = this, Ctor = x.constructor;
      return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
    };
    P.sine = P.sin = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite()) return new Ctor(NaN);
      if (x.isZero()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
      Ctor.rounding = 1;
      x = sine(Ctor, toLessThanHalfPi(Ctor, x));
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
    };
    P.squareRoot = P.sqrt = function() {
      var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
      if (s !== 1 || !d || !d[0]) {
        return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
      }
      external = false;
      s = Math.sqrt(+x);
      if (s == 0 || s == 1 / 0) {
        n = digitsToString(d);
        if ((n.length + e) % 2 == 0) n += "0";
        s = Math.sqrt(n);
        e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
        if (s == 1 / 0) {
          n = "5e" + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf("e") + 1) + e;
        }
        r = new Ctor(n);
      } else {
        r = new Ctor(s.toString());
      }
      sd = (e = Ctor.precision) + 3;
      for (; ; ) {
        t = r;
        r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
        if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
          n = n.slice(sd - 3, sd + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              finalise(t, e + 1, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            sd += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              finalise(r, e + 1, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
      external = true;
      return finalise(r, e, Ctor.rounding, m);
    };
    P.tangent = P.tan = function() {
      var pr, rm, x = this, Ctor = x.constructor;
      if (!x.isFinite()) return new Ctor(NaN);
      if (x.isZero()) return new Ctor(x);
      pr = Ctor.precision;
      rm = Ctor.rounding;
      Ctor.precision = pr + 10;
      Ctor.rounding = 1;
      x = x.sin();
      x.s = 1;
      x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
      Ctor.precision = pr;
      Ctor.rounding = rm;
      return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
    };
    P.times = P.mul = function(y) {
      var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
      y.s *= x.s;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
      }
      e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
      xdL = xd.length;
      ydL = yd.length;
      if (xdL < ydL) {
        r = xd;
        xd = yd;
        yd = r;
        rL = xdL;
        xdL = ydL;
        ydL = rL;
      }
      r = [];
      rL = xdL + ydL;
      for (i = rL; i--; ) r.push(0);
      for (i = ydL; --i >= 0; ) {
        carry = 0;
        for (k = xdL + i; k > i; ) {
          t = r[k] + yd[i] * xd[k - i - 1] + carry;
          r[k--] = t % BASE | 0;
          carry = t / BASE | 0;
        }
        r[k] = (r[k] + carry) % BASE | 0;
      }
      for (; !r[--rL]; ) r.pop();
      if (carry) ++e;
      else r.shift();
      y.d = r;
      y.e = getBase10Exponent(r, e);
      return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    };
    P.toBinary = function(sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    };
    P.toDecimalPlaces = P.toDP = function(dp, rm) {
      var x = this, Ctor = x.constructor;
      x = new Ctor(x);
      if (dp === void 0) return x;
      checkInt32(dp, 0, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
      return finalise(x, dp + x.e + 1, rm);
    };
    P.toExponential = function(dp, rm) {
      var str, x = this, Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x, true);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), dp + 1, rm);
        str = finiteToString(x, true, dp + 1);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toFixed = function(dp, rm) {
      var str, y, x = this, Ctor = x.constructor;
      if (dp === void 0) {
        str = finiteToString(x);
      } else {
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        y = finalise(new Ctor(x), dp + x.e + 1, rm);
        str = finiteToString(y, false, dp + y.e + 1);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toFraction = function(maxD) {
      var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
      if (!xd) return new Ctor(x);
      n1 = d0 = new Ctor(1);
      d1 = n0 = new Ctor(0);
      d = new Ctor(d1);
      e = d.e = getPrecision(xd) - x.e - 1;
      k = e % LOG_BASE;
      d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
      if (maxD == null) {
        maxD = e > 0 ? d : n1;
      } else {
        n = new Ctor(maxD);
        if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
      }
      external = false;
      n = new Ctor(digitsToString(xd));
      pr = Ctor.precision;
      Ctor.precision = e = xd.length * LOG_BASE * 2;
      for (; ; ) {
        q = divide(n, d, 0, 1, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.cmp(maxD) == 1) break;
        d0 = d1;
        d1 = d2;
        d2 = n1;
        n1 = n0.plus(q.times(d2));
        n0 = d2;
        d2 = d;
        d = n.minus(q.times(d2));
        n = d2;
      }
      d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
      Ctor.precision = pr;
      external = true;
      return r;
    };
    P.toHexadecimal = P.toHex = function(sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    };
    P.toNearest = function(y, rm) {
      var x = this, Ctor = x.constructor;
      x = new Ctor(x);
      if (y == null) {
        if (!x.d) return x;
        y = new Ctor(1);
        rm = Ctor.rounding;
      } else {
        y = new Ctor(y);
        if (rm === void 0) {
          rm = Ctor.rounding;
        } else {
          checkInt32(rm, 0, 8);
        }
        if (!x.d) return y.s ? x : y;
        if (!y.d) {
          if (y.s) y.s = x.s;
          return y;
        }
      }
      if (y.d[0]) {
        external = false;
        x = divide(x, y, 0, rm, 1).times(y);
        external = true;
        finalise(x);
      } else {
        y.s = x.s;
        x = y;
      }
      return x;
    };
    P.toNumber = function() {
      return +this;
    };
    P.toOctal = function(sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    };
    P.toPower = P.pow = function(y) {
      var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
      if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
      x = new Ctor(x);
      if (x.eq(1)) return x;
      pr = Ctor.precision;
      rm = Ctor.rounding;
      if (y.eq(1)) return finalise(x, pr, rm);
      e = mathfloor(y.e / LOG_BASE);
      if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
        r = intPow(Ctor, x, k, pr);
        return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      }
      s = x.s;
      if (s < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if ((y.d[e] & 1) == 0) s = 1;
        if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
          x.s = s;
          return x;
        }
      }
      k = mathpow(+x, yn);
      e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
      if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
      external = false;
      Ctor.rounding = x.s = 1;
      k = Math.min(12, (e + "").length);
      r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
      if (r.d) {
        r = finalise(r, pr + 5, 1);
        if (checkRoundingDigits(r.d, pr, rm)) {
          e = pr + 10;
          r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
          if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }
        }
      }
      r.s = s;
      external = true;
      Ctor.rounding = rm;
      return finalise(r, pr, rm);
    };
    P.toPrecision = function(sd, rm) {
      var str, x = this, Ctor = x.constructor;
      if (sd === void 0) {
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
        x = finalise(new Ctor(x), sd, rm);
        str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
      }
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.toSignificantDigits = P.toSD = function(sd, rm) {
      var x = this, Ctor = x.constructor;
      if (sd === void 0) {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      } else {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      }
      return finalise(new Ctor(x), sd, rm);
    };
    P.toString = function() {
      var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    };
    P.truncated = P.trunc = function() {
      return finalise(new this.constructor(this), this.e + 1, 1);
    };
    P.valueOf = P.toJSON = function() {
      var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() ? "-" + str : str;
    };
    function digitsToString(d) {
      var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
      if (indexOfLastWord > 0) {
        str += w;
        for (i = 1; i < indexOfLastWord; i++) {
          ws = d[i] + "";
          k = LOG_BASE - ws.length;
          if (k) str += getZeroString(k);
          str += ws;
        }
        w = d[i];
        ws = w + "";
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
      } else if (w === 0) {
        return "0";
      }
      for (; w % 10 === 0; ) w /= 10;
      return str + w;
    }
    function checkInt32(i, min2, max2) {
      if (i !== ~~i || i < min2 || i > max2) {
        throw Error(invalidArgument + i);
      }
    }
    function checkRoundingDigits(d, i, rm, repeating) {
      var di, k, r, rd;
      for (k = d[0]; k >= 10; k /= 10) --i;
      if (--i < 0) {
        i += LOG_BASE;
        di = 0;
      } else {
        di = Math.ceil((i + 1) / LOG_BASE);
        i %= LOG_BASE;
      }
      k = mathpow(10, LOG_BASE - i);
      rd = d[di] % k | 0;
      if (repeating == null) {
        if (i < 3) {
          if (i == 0) rd = rd / 100 | 0;
          else if (i == 1) rd = rd / 10 | 0;
          r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
        } else {
          r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
        }
      } else {
        if (i < 4) {
          if (i == 0) rd = rd / 1e3 | 0;
          else if (i == 1) rd = rd / 100 | 0;
          else if (i == 2) rd = rd / 10 | 0;
          r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
        } else {
          r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
        }
      }
      return r;
    }
    function convertBase(str, baseIn, baseOut) {
      var j, arr = [0], arrL, i = 0, strL = str.length;
      for (; i < strL; ) {
        for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
        arr[0] += NUMERALS.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] === void 0) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    function cosine(Ctor, x) {
      var k, len, y;
      if (x.isZero()) return x;
      len = x.d.length;
      if (len < 32) {
        k = Math.ceil(len / 3);
        y = (1 / tinyPow(4, k)).toString();
      } else {
        k = 16;
        y = "2.3283064365386962890625e-10";
      }
      Ctor.precision += k;
      x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
      for (var i = k; i--; ) {
        var cos2x = x.times(x);
        x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
      }
      Ctor.precision -= k;
      return x;
    }
    var divide = /* @__PURE__ */ (function() {
      function multiplyInteger(x, k, base) {
        var temp, carry = 0, i = x.length;
        for (x = x.slice(); i--; ) {
          temp = x[i] * k + carry;
          x[i] = temp % base | 0;
          carry = temp / base | 0;
        }
        if (carry) x.unshift(carry);
        return x;
      }
      function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) {
          r = aL > bL ? 1 : -1;
        } else {
          for (i = r = 0; i < aL; i++) {
            if (a[i] != b[i]) {
              r = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }
        return r;
      }
      function subtract(a, b, aL, base) {
        var i = 0;
        for (; aL--; ) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }
        for (; !a[0] && a.length > 1; ) a.shift();
      }
      return function(x, y, pr, rm, dp, base) {
        var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
        if (!xd || !xd[0] || !yd || !yd[0]) {
          return new Ctor(
            // Return NaN if either NaN, or both Infinity or 0.
            !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
              // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
              xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
            )
          );
        }
        if (base) {
          logBase = 1;
          e = x.e - y.e;
        } else {
          base = BASE;
          logBase = LOG_BASE;
          e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
        }
        yL = yd.length;
        xL = xd.length;
        q = new Ctor(sign2);
        qd = q.d = [];
        for (i = 0; yd[i] == (xd[i] || 0); i++) ;
        if (yd[i] > (xd[i] || 0)) e--;
        if (pr == null) {
          sd = pr = Ctor.precision;
          rm = Ctor.rounding;
        } else if (dp) {
          sd = pr + (x.e - y.e) + 1;
        } else {
          sd = pr;
        }
        if (sd < 0) {
          qd.push(1);
          more = true;
        } else {
          sd = sd / logBase + 2 | 0;
          i = 0;
          if (yL == 1) {
            k = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k) && sd--; i++) {
              t = k * base + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k = t % yd | 0;
            }
            more = k || i < xL;
          } else {
            k = base / (yd[0] + 1) | 0;
            if (k > 1) {
              yd = multiplyInteger(yd, k, base);
              xd = multiplyInteger(xd, k, base);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; ) rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= base / 2) ++yd0;
            do {
              k = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                k = rem0 / yd0 | 0;
                if (k > 1) {
                  if (k >= base) k = base - 1;
                  prod = multiplyInteger(yd, k, base);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k--;
                    subtract(prod, yL < prodL ? yz : yd, prodL, base);
                  }
                } else {
                  if (k == 0) cmp = k = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL) prod.unshift(0);
                subtract(rem, prod, remL, base);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k++;
                    subtract(rem, yL < remL ? yz : yd, remL, base);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k++;
                rem = [0];
              }
              qd[i++] = k;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
            more = rem[0] !== void 0;
          }
          if (!qd[0]) qd.shift();
        }
        if (logBase == 1) {
          q.e = e;
          inexact = more;
        } else {
          for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
          q.e = i + e * logBase - 1;
          finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    })();
    function finalise(x, sd, rm, isTruncated) {
      var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
      out: if (sd != null) {
        xd = x.d;
        if (!xd) return x;
        for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
        i = sd - digits;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
          rd = w / mathpow(10, digits - j - 1) % 10 | 0;
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k = xd.length;
          if (xdi >= k) {
            if (isTruncated) {
              for (; k++ <= xdi; ) xd.push(0);
              w = rd = 0;
              digits = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            w = k = xd[xdi];
            for (digits = 1; k >= 10; k /= 10) digits++;
            i %= LOG_BASE;
            j = i - LOG_BASE + digits;
            rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
          }
        }
        isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
        roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xd[0]) {
          xd.length = 0;
          if (roundUp) {
            sd -= x.e + 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x.e = -sd || 0;
          } else {
            xd[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xd.length = xdi;
          k = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
        }
        if (roundUp) {
          for (; ; ) {
            if (xdi == 0) {
              for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
              j = xd[0] += k;
              for (k = 1; j >= 10; j /= 10) k++;
              if (i != k) {
                x.e++;
                if (xd[0] == BASE) xd[0] = 1;
              }
              break;
            } else {
              xd[xdi] += k;
              if (xd[xdi] != BASE) break;
              xd[xdi--] = 0;
              k = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; ) xd.pop();
      }
      if (external) {
        if (x.e > Ctor.maxE) {
          x.d = null;
          x.e = NaN;
        } else if (x.e < Ctor.minE) {
          x.e = 0;
          x.d = [0];
        }
      }
      return x;
    }
    function finiteToString(x, isExp, sd) {
      if (!x.isFinite()) return nonFiniteToString(x);
      var k, e = x.e, str = digitsToString(x.d), len = str.length;
      if (isExp) {
        if (sd && (k = sd - len) > 0) {
          str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
        } else if (len > 1) {
          str = str.charAt(0) + "." + str.slice(1);
        }
        str = str + (x.e < 0 ? "e" : "e+") + x.e;
      } else if (e < 0) {
        str = "0." + getZeroString(-e - 1) + str;
        if (sd && (k = sd - len) > 0) str += getZeroString(k);
      } else if (e >= len) {
        str += getZeroString(e + 1 - len);
        if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
      } else {
        if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
        if (sd && (k = sd - len) > 0) {
          if (e + 1 === len) str += ".";
          str += getZeroString(k);
        }
      }
      return str;
    }
    function getBase10Exponent(digits, e) {
      var w = digits[0];
      for (e *= LOG_BASE; w >= 10; w /= 10) e++;
      return e;
    }
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) {
        external = true;
        if (pr) Ctor.precision = pr;
        throw Error(precisionLimitExceeded);
      }
      return finalise(new Ctor(LN10), sd, 1, true);
    }
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
      return finalise(new Ctor(PI), sd, rm, true);
    }
    function getPrecision(digits) {
      var w = digits.length - 1, len = w * LOG_BASE + 1;
      w = digits[w];
      if (w) {
        for (; w % 10 == 0; w /= 10) len--;
        for (w = digits[0]; w >= 10; w /= 10) len++;
      }
      return len;
    }
    function getZeroString(k) {
      var zs = "";
      for (; k--; ) zs += "0";
      return zs;
    }
    function intPow(Ctor, x, n, pr) {
      var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
      external = false;
      for (; ; ) {
        if (n % 2) {
          r = r.times(x);
          if (truncate(r.d, k)) isTruncated = true;
        }
        n = mathfloor(n / 2);
        if (n === 0) {
          n = r.d.length - 1;
          if (isTruncated && r.d[n] === 0) ++r.d[n];
          break;
        }
        x = x.times(x);
        truncate(x.d, k);
      }
      external = true;
      return r;
    }
    function isOdd(n) {
      return n.d[n.d.length - 1] & 1;
    }
    function maxOrMin(Ctor, args, n) {
      var k, y, x = new Ctor(args[0]), i = 0;
      for (; ++i < args.length; ) {
        y = new Ctor(args[i]);
        if (!y.s) {
          x = y;
          break;
        }
        k = x.cmp(y);
        if (k === n || k === 0 && x.s === n) {
          x = y;
        }
      }
      return x;
    }
    function naturalExponential(x, sd) {
      var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (!x.d || !x.d[0] || x.e > 17) {
        return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      t = new Ctor(0.03125);
      while (x.e > -2) {
        x = x.times(t);
        k += 5;
      }
      guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
      wpr += guard;
      denominator = pow2 = sum2 = new Ctor(1);
      Ctor.precision = wpr;
      for (; ; ) {
        pow2 = finalise(pow2.times(x), wpr, 1);
        denominator = denominator.times(++i);
        t = sum2.plus(divide(pow2, denominator, wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          j = k;
          while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
          if (sd == null) {
            if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += 10;
              denominator = pow2 = t = new Ctor(1);
              i = 0;
              rep++;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
      }
    }
    function naturalLogarithm(y, sd) {
      var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
      if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
        return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
      }
      if (sd == null) {
        external = false;
        wpr = pr;
      } else {
        wpr = sd;
      }
      Ctor.precision = wpr += guard;
      c = digitsToString(xd);
      c0 = c.charAt(0);
      if (Math.abs(e = x.e) < 15e14) {
        while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
          x = x.times(y);
          c = digitsToString(x.d);
          c0 = c.charAt(0);
          n++;
        }
        e = x.e;
        if (c0 > 1) {
          x = new Ctor("0." + c);
          e++;
        } else {
          x = new Ctor(c0 + "." + c.slice(1));
        }
      } else {
        t = getLn10(Ctor, wpr + 2, pr).times(e + "");
        x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
        Ctor.precision = pr;
        return sd == null ? finalise(x, pr, rm, external = true) : x;
      }
      x1 = x;
      sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
      x2 = finalise(x.times(x), wpr, 1);
      denominator = 3;
      for (; ; ) {
        numerator = finalise(numerator.times(x2), wpr, 1);
        t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
        if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
          sum2 = sum2.times(2);
          if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
          sum2 = divide(sum2, new Ctor(n), wpr, 1);
          if (sd == null) {
            if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
              Ctor.precision = wpr += guard;
              t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
              x2 = finalise(x.times(x), wpr, 1);
              denominator = rep = 1;
            } else {
              return finalise(sum2, Ctor.precision = pr, rm, external = true);
            }
          } else {
            Ctor.precision = pr;
            return sum2;
          }
        }
        sum2 = t;
        denominator += 2;
      }
    }
    function nonFiniteToString(x) {
      return String(x.s * x.s / 0);
    }
    function parseDecimal(x, str) {
      var e, i, len;
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
      for (i = 0; str.charCodeAt(i) === 48; i++) ;
      for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
      str = str.slice(i, len);
      if (str) {
        len -= i;
        x.e = e = e - i - 1;
        x.d = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x.d.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
          str = str.slice(i);
          i = LOG_BASE - str.length;
        } else {
          i -= len;
        }
        for (; i--; ) str += "0";
        x.d.push(+str);
        if (external) {
          if (x.e > x.constructor.maxE) {
            x.d = null;
            x.e = NaN;
          } else if (x.e < x.constructor.minE) {
            x.e = 0;
            x.d = [0];
          }
        }
      } else {
        x.e = 0;
        x.d = [0];
      }
      return x;
    }
    function parseOther(x, str) {
      var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
      if (str.indexOf("_") > -1) {
        str = str.replace(/(\d)_(?=\d)/g, "$1");
        if (isDecimal.test(str)) return parseDecimal(x, str);
      } else if (str === "Infinity" || str === "NaN") {
        if (!+str) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return x;
      }
      if (isHex.test(str)) {
        base = 16;
        str = str.toLowerCase();
      } else if (isBinary.test(str)) {
        base = 2;
      } else if (isOctal.test(str)) {
        base = 8;
      } else {
        throw Error(invalidArgument + str);
      }
      i = str.search(/p/i);
      if (i > 0) {
        p = +str.slice(i + 1);
        str = str.substring(2, i);
      } else {
        str = str.slice(2);
      }
      i = str.indexOf(".");
      isFloat = i >= 0;
      Ctor = x.constructor;
      if (isFloat) {
        str = str.replace(".", "");
        len = str.length;
        i = len - i;
        divisor = intPow(Ctor, new Ctor(base), i, i * 2);
      }
      xd = convertBase(str, base, BASE);
      xe = xd.length - 1;
      for (i = xe; xd[i] === 0; --i) xd.pop();
      if (i < 0) return new Ctor(x.s * 0);
      x.e = getBase10Exponent(xd, xe);
      x.d = xd;
      external = false;
      if (isFloat) x = divide(x, divisor, len * 4);
      if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal3.pow(2, p));
      external = true;
      return x;
    }
    function sine(Ctor, x) {
      var k, len = x.d.length;
      if (len < 3) {
        return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
      }
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x);
      var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (; k--; ) {
        sin2_x = x.times(x);
        x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
      }
      return x;
    }
    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
      var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
      external = false;
      x2 = x.times(x);
      u = new Ctor(y);
      for (; ; ) {
        t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
        u = isHyperbolic ? y.plus(t) : y.minus(t);
        y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
        t = u.plus(y);
        if (t.d[k] !== void 0) {
          for (j = k; t.d[j] === u.d[j] && j--; ) ;
          if (j == -1) break;
        }
        j = u;
        u = y;
        y = t;
        t = j;
        i++;
      }
      external = true;
      t.d.length = k + 1;
      return t;
    }
    function tinyPow(b, e) {
      var n = b;
      while (--e) n *= b;
      return n;
    }
    function toLessThanHalfPi(Ctor, x) {
      var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
      x = x.abs();
      if (x.lte(halfPi)) {
        quadrant = isNeg ? 4 : 1;
        return x;
      }
      t = x.divToInt(pi);
      if (t.isZero()) {
        quadrant = isNeg ? 3 : 2;
      } else {
        x = x.minus(t.times(pi));
        if (x.lte(halfPi)) {
          quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
          return x;
        }
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x.minus(pi).abs();
    }
    function toStringBinary(x, baseOut, sd, rm) {
      var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
      if (isExp) {
        checkInt32(sd, 1, MAX_DIGITS);
        if (rm === void 0) rm = Ctor.rounding;
        else checkInt32(rm, 0, 8);
      } else {
        sd = Ctor.precision;
        rm = Ctor.rounding;
      }
      if (!x.isFinite()) {
        str = nonFiniteToString(x);
      } else {
        str = finiteToString(x);
        i = str.indexOf(".");
        if (isExp) {
          base = 2;
          if (baseOut == 16) {
            sd = sd * 4 - 3;
          } else if (baseOut == 8) {
            sd = sd * 3 - 2;
          }
        } else {
          base = baseOut;
        }
        if (i >= 0) {
          str = str.replace(".", "");
          y = new Ctor(1);
          y.e = str.length - i;
          y.d = convertBase(finiteToString(y), 10, base);
          y.e = y.d.length;
        }
        xd = convertBase(str, 10, base);
        e = len = xd.length;
        for (; xd[--len] == 0; ) xd.pop();
        if (!xd[0]) {
          str = isExp ? "0p+0" : "0";
        } else {
          if (i < 0) {
            e--;
          } else {
            x = new Ctor(x);
            x.d = xd;
            x.e = e;
            x = divide(x, y, sd, rm, 0, base);
            xd = x.d;
            e = x.e;
            roundUp = inexact;
          }
          i = xd[sd];
          k = base / 2;
          roundUp = roundUp || xd[sd + 1] !== void 0;
          roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
          xd.length = sd;
          if (roundUp) {
            for (; ++xd[--sd] > base - 1; ) {
              xd[sd] = 0;
              if (!sd) {
                ++e;
                xd.unshift(1);
              }
            }
          }
          for (len = xd.length; !xd[len - 1]; --len) ;
          for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) {
              if (baseOut == 16 || baseOut == 8) {
                i = baseOut == 16 ? 4 : 3;
                for (--len; len % i; len++) str += "0";
                xd = convertBase(str, base, baseOut);
                for (len = xd.length; !xd[len - 1]; --len) ;
                for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
              } else {
                str = str.charAt(0) + "." + str.slice(1);
              }
            }
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e; ) str = "0" + str;
            str = "0." + str;
          } else {
            if (++e > len) for (e -= len; e--; ) str += "0";
            else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
      }
      return x.s < 0 ? "-" + str : str;
    }
    function truncate(arr, len) {
      if (arr.length > len) {
        arr.length = len;
        return true;
      }
    }
    function abs(x) {
      return new this(x).abs();
    }
    function acos(x) {
      return new this(x).acos();
    }
    function acosh(x) {
      return new this(x).acosh();
    }
    function add(x, y) {
      return new this(x).plus(y);
    }
    function asin(x) {
      return new this(x).asin();
    }
    function asinh(x) {
      return new this(x).asinh();
    }
    function atan(x) {
      return new this(x).atan();
    }
    function atanh(x) {
      return new this(x).atanh();
    }
    function atan2(y, x) {
      y = new this(y);
      x = new this(x);
      var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
      if (!y.s || !x.s) {
        r = new this(NaN);
      } else if (!y.d && !x.d) {
        r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
        r.s = y.s;
      } else if (!x.d || y.isZero()) {
        r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
        r.s = y.s;
      } else if (!y.d || x.isZero()) {
        r = getPi(this, wpr, 1).times(0.5);
        r.s = y.s;
      } else if (x.s < 0) {
        this.precision = wpr;
        this.rounding = 1;
        r = this.atan(divide(y, x, wpr, 1));
        x = getPi(this, wpr, 1);
        this.precision = pr;
        this.rounding = rm;
        r = y.s < 0 ? r.minus(x) : r.plus(x);
      } else {
        r = this.atan(divide(y, x, wpr, 1));
      }
      return r;
    }
    function cbrt(x) {
      return new this(x).cbrt();
    }
    function ceil(x) {
      return finalise(x = new this(x), x.e + 1, 2);
    }
    function clamp(x, min2, max2) {
      return new this(x).clamp(min2, max2);
    }
    function config2(obj) {
      if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
      var i, p, v, useDefaults = obj.defaults === true, ps = [
        "precision",
        1,
        MAX_DIGITS,
        "rounding",
        0,
        8,
        "toExpNeg",
        -EXP_LIMIT,
        0,
        "toExpPos",
        0,
        EXP_LIMIT,
        "maxE",
        0,
        EXP_LIMIT,
        "minE",
        -EXP_LIMIT,
        0,
        "modulo",
        0,
        9
      ];
      for (i = 0; i < ps.length; i += 3) {
        if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
        if ((v = obj[p]) !== void 0) {
          if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
          else throw Error(invalidArgument + p + ": " + v);
        }
      }
      if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (v === true || v === false || v === 0 || v === 1) {
          if (v) {
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
              this[p] = true;
            } else {
              throw Error(cryptoUnavailable);
            }
          } else {
            this[p] = false;
          }
        } else {
          throw Error(invalidArgument + p + ": " + v);
        }
      }
      return this;
    }
    function cos(x) {
      return new this(x).cos();
    }
    function cosh(x) {
      return new this(x).cosh();
    }
    function clone(obj) {
      var i, p, ps;
      function Decimal22(v) {
        var e, i2, t, x = this;
        if (!(x instanceof Decimal22)) return new Decimal22(v);
        x.constructor = Decimal22;
        if (isDecimalInstance(v)) {
          x.s = v.s;
          if (external) {
            if (!v.d || v.e > Decimal22.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (v.e < Decimal22.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = v.e;
              x.d = v.d.slice();
            }
          } else {
            x.e = v.e;
            x.d = v.d ? v.d.slice() : v.d;
          }
          return;
        }
        t = typeof v;
        if (t === "number") {
          if (v === 0) {
            x.s = 1 / v < 0 ? -1 : 1;
            x.e = 0;
            x.d = [0];
            return;
          }
          if (v < 0) {
            v = -v;
            x.s = -1;
          } else {
            x.s = 1;
          }
          if (v === ~~v && v < 1e7) {
            for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
            if (external) {
              if (e > Decimal22.maxE) {
                x.e = NaN;
                x.d = null;
              } else if (e < Decimal22.minE) {
                x.e = 0;
                x.d = [0];
              } else {
                x.e = e;
                x.d = [v];
              }
            } else {
              x.e = e;
              x.d = [v];
            }
            return;
          }
          if (v * 0 !== 0) {
            if (!v) x.s = NaN;
            x.e = NaN;
            x.d = null;
            return;
          }
          return parseDecimal(x, v.toString());
        }
        if (t === "string") {
          if ((i2 = v.charCodeAt(0)) === 45) {
            v = v.slice(1);
            x.s = -1;
          } else {
            if (i2 === 43) v = v.slice(1);
            x.s = 1;
          }
          return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        }
        if (t === "bigint") {
          if (v < 0) {
            v = -v;
            x.s = -1;
          } else {
            x.s = 1;
          }
          return parseDecimal(x, v.toString());
        }
        throw Error(invalidArgument + v);
      }
      Decimal22.prototype = P;
      Decimal22.ROUND_UP = 0;
      Decimal22.ROUND_DOWN = 1;
      Decimal22.ROUND_CEIL = 2;
      Decimal22.ROUND_FLOOR = 3;
      Decimal22.ROUND_HALF_UP = 4;
      Decimal22.ROUND_HALF_DOWN = 5;
      Decimal22.ROUND_HALF_EVEN = 6;
      Decimal22.ROUND_HALF_CEIL = 7;
      Decimal22.ROUND_HALF_FLOOR = 8;
      Decimal22.EUCLID = 9;
      Decimal22.config = Decimal22.set = config2;
      Decimal22.clone = clone;
      Decimal22.isDecimal = isDecimalInstance;
      Decimal22.abs = abs;
      Decimal22.acos = acos;
      Decimal22.acosh = acosh;
      Decimal22.add = add;
      Decimal22.asin = asin;
      Decimal22.asinh = asinh;
      Decimal22.atan = atan;
      Decimal22.atanh = atanh;
      Decimal22.atan2 = atan2;
      Decimal22.cbrt = cbrt;
      Decimal22.ceil = ceil;
      Decimal22.clamp = clamp;
      Decimal22.cos = cos;
      Decimal22.cosh = cosh;
      Decimal22.div = div;
      Decimal22.exp = exp;
      Decimal22.floor = floor;
      Decimal22.hypot = hypot;
      Decimal22.ln = ln;
      Decimal22.log = log;
      Decimal22.log10 = log10;
      Decimal22.log2 = log2;
      Decimal22.max = max;
      Decimal22.min = min;
      Decimal22.mod = mod;
      Decimal22.mul = mul;
      Decimal22.pow = pow;
      Decimal22.random = random;
      Decimal22.round = round;
      Decimal22.sign = sign;
      Decimal22.sin = sin;
      Decimal22.sinh = sinh;
      Decimal22.sqrt = sqrt;
      Decimal22.sub = sub;
      Decimal22.sum = sum;
      Decimal22.tan = tan;
      Decimal22.tanh = tanh;
      Decimal22.trunc = trunc;
      if (obj === void 0) obj = {};
      if (obj) {
        if (obj.defaults !== true) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
          for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
        }
      }
      Decimal22.config(obj);
      return Decimal22;
    }
    function div(x, y) {
      return new this(x).div(y);
    }
    function exp(x) {
      return new this(x).exp();
    }
    function floor(x) {
      return finalise(x = new this(x), x.e + 1, 3);
    }
    function hypot() {
      var i, n, t = new this(0);
      external = false;
      for (i = 0; i < arguments.length; ) {
        n = new this(arguments[i++]);
        if (!n.d) {
          if (n.s) {
            external = true;
            return new this(1 / 0);
          }
          t = n;
        } else if (t.d) {
          t = t.plus(n.times(n));
        }
      }
      external = true;
      return t.sqrt();
    }
    function isDecimalInstance(obj) {
      return obj instanceof Decimal3 || obj && obj.toStringTag === tag || false;
    }
    function ln(x) {
      return new this(x).ln();
    }
    function log(x, y) {
      return new this(x).log(y);
    }
    function log2(x) {
      return new this(x).log(2);
    }
    function log10(x) {
      return new this(x).log(10);
    }
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    function mod(x, y) {
      return new this(x).mod(y);
    }
    function mul(x, y) {
      return new this(x).mul(y);
    }
    function pow(x, y) {
      return new this(x).pow(y);
    }
    function random(sd) {
      var d, e, k, n, i = 0, r = new this(1), rd = [];
      if (sd === void 0) sd = this.precision;
      else checkInt32(sd, 1, MAX_DIGITS);
      k = Math.ceil(sd / LOG_BASE);
      if (!this.crypto) {
        for (; i < k; ) rd[i++] = Math.random() * 1e7 | 0;
      } else if (crypto.getRandomValues) {
        d = crypto.getRandomValues(new Uint32Array(k));
        for (; i < k; ) {
          n = d[i];
          if (n >= 429e7) {
            d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
          } else {
            rd[i++] = n % 1e7;
          }
        }
      } else if (crypto.randomBytes) {
        d = crypto.randomBytes(k *= 4);
        for (; i < k; ) {
          n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
          if (n >= 214e7) {
            crypto.randomBytes(4).copy(d, i);
          } else {
            rd.push(n % 1e7);
            i += 4;
          }
        }
        i = k / 4;
      } else {
        throw Error(cryptoUnavailable);
      }
      k = rd[--i];
      sd %= LOG_BASE;
      if (k && sd) {
        n = mathpow(10, LOG_BASE - sd);
        rd[i] = (k / n | 0) * n;
      }
      for (; rd[i] === 0; i--) rd.pop();
      if (i < 0) {
        e = 0;
        rd = [0];
      } else {
        e = -1;
        for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
        for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
        if (k < LOG_BASE) e -= LOG_BASE - k;
      }
      r.e = e;
      r.d = rd;
      return r;
    }
    function round(x) {
      return finalise(x = new this(x), x.e + 1, this.rounding);
    }
    function sign(x) {
      x = new this(x);
      return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
    }
    function sin(x) {
      return new this(x).sin();
    }
    function sinh(x) {
      return new this(x).sinh();
    }
    function sqrt(x) {
      return new this(x).sqrt();
    }
    function sub(x, y) {
      return new this(x).sub(y);
    }
    function sum() {
      var i = 0, args = arguments, x = new this(args[i]);
      external = false;
      for (; x.s && ++i < args.length; ) x = x.plus(args[i]);
      external = true;
      return finalise(x, this.precision, this.rounding);
    }
    function tan(x) {
      return new this(x).tan();
    }
    function tanh(x) {
      return new this(x).tanh();
    }
    function trunc(x) {
      return finalise(x = new this(x), x.e + 1, 1);
    }
    P[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = P.toString;
    P[Symbol.toStringTag] = "Decimal";
    var Decimal3 = P.constructor = clone(DEFAULTS);
    LN10 = new Decimal3(LN10);
    PI = new Decimal3(PI);
    var Sql3 = class _Sql {
      constructor(rawStrings, rawValues) {
        if (rawStrings.length - 1 !== rawValues.length) {
          if (rawStrings.length === 0) {
            throw new TypeError("Expected at least 1 string");
          }
          throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
        }
        const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
        this.values = new Array(valuesLength);
        this.strings = new Array(valuesLength + 1);
        this.strings[0] = rawStrings[0];
        let i = 0, pos = 0;
        while (i < rawValues.length) {
          const child = rawValues[i++];
          const rawString = rawStrings[i];
          if (child instanceof _Sql) {
            this.strings[pos] += child.strings[0];
            let childIndex = 0;
            while (childIndex < child.values.length) {
              this.values[pos++] = child.values[childIndex++];
              this.strings[pos] = child.strings[childIndex];
            }
            this.strings[pos] += rawString;
          } else {
            this.values[pos++] = child;
            this.strings[pos] = rawString;
          }
        }
      }
      get sql() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `?${this.strings[i++]}`;
        return value;
      }
      get statement() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `:${i}${this.strings[i++]}`;
        return value;
      }
      get text() {
        const len = this.strings.length;
        let i = 1;
        let value = this.strings[0];
        while (i < len)
          value += `$${i}${this.strings[i++]}`;
        return value;
      }
      inspect() {
        return {
          sql: this.sql,
          statement: this.statement,
          text: this.text,
          values: this.values
        };
      }
    };
    function join3(values, separator = ",", prefix = "", suffix = "") {
      if (values.length === 0) {
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      }
      return new Sql3([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
    }
    function raw3(value) {
      return new Sql3([value], []);
    }
    var empty3 = raw3("");
    function sql(strings, ...values) {
      return new Sql3(strings, values);
    }
  }
});

// node_modules/@prisma/client/runtime/client.js
var require_client = __commonJS({
  "node_modules/@prisma/client/runtime/client.js"(exports, module) {
    "use strict";
    var Zl = Object.create;
    var Qt = Object.defineProperty;
    var Yl = Object.getOwnPropertyDescriptor;
    var Xl = Object.getOwnPropertyNames;
    var eu = Object.getPrototypeOf;
    var tu = Object.prototype.hasOwnProperty;
    var yi = (e, t) => () => (e && (t = e(e = 0)), t);
    var V = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Ie = (e, t) => {
      for (var r in t) Qt(e, r, { get: t[r], enumerable: true });
    };
    var hi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of Xl(t)) !tu.call(e, i) && i !== r && Qt(e, i, { get: () => t[i], enumerable: !(n = Yl(t, i)) || n.enumerable });
      return e;
    };
    var U = (e, t, r) => (r = e != null ? Zl(eu(e)) : {}, hi(t || !e || !e.__esModule ? Qt(r, "default", { value: e, enumerable: true }) : r, e));
    var ru = (e) => hi(Qt({}, "__esModule", { value: true }), e);
    var Ni = V((ff, Su) => {
      Su.exports = { name: "@prisma/engines-version", version: "7.4.0-20.ab56fe763f921d033a6c195e7ddeb3e255bdbb57", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "ab56fe763f921d033a6c195e7ddeb3e255bdbb57" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Di = V((Ht) => {
      "use strict";
      Object.defineProperty(Ht, "__esModule", { value: true });
      Ht.enginesVersion = void 0;
      Ht.enginesVersion = Ni().prisma.enginesVersion;
    });
    var Mi = V((yf, Fi) => {
      "use strict";
      Fi.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var qi = V((bf, Vi) => {
      "use strict";
      Vi.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Ui = V((vf, zt) => {
      "use strict";
      zt.exports = (e = {}) => {
        let t;
        if (e.repoUrl) t = e.repoUrl;
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      zt.exports.default = zt.exports;
    });
    var cn = V((hg, Ki) => {
      "use strict";
      Ki.exports = /* @__PURE__ */ (function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, d, f, h, x, E, L, T, A, j = [];
          for (l = 0; l < i; l++) j.push(l + 1), j.push(t.charCodeAt(s + l));
          for (var ke = j.length - 1; a < o - 3; ) for (E = r.charCodeAt(s + (u = a)), L = r.charCodeAt(s + (c = a + 1)), T = r.charCodeAt(s + (p = a + 2)), A = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < ke; l += 2) h = j[l], x = j[l + 1], u = e(h, u, c, E, x), c = e(u, c, p, L, x), p = e(c, p, d, T, x), f = e(p, d, f, A, x), j[l] = f, d = p, p = c, c = u, u = h;
          for (; a < o; ) for (E = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < ke; l += 2) h = j[l], j[l] = f = e(h, u, f, E, j[l + 1]), u = h;
          return f;
        };
      })();
    });
    var to = yi(() => {
      "use strict";
    });
    var ro = yi(() => {
      "use strict";
    });
    var On = V((Te) => {
      "use strict";
      Object.defineProperty(Te, "__esModule", { value: true });
      Te.anumber = In;
      Te.abytes = ws;
      Te.ahash = Ap;
      Te.aexists = vp;
      Te.aoutput = Cp;
      function In(e) {
        if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
      }
      function Sp(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      function ws(e, ...t) {
        if (!Sp(e)) throw new Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
      }
      function Ap(e) {
        if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
        In(e.outputLen), In(e.blockLen);
      }
      function vp(e, t = true) {
        if (e.destroyed) throw new Error("Hash instance has been destroyed");
        if (t && e.finished) throw new Error("Hash#digest() has already been called");
      }
      function Cp(e, t) {
        ws(e);
        let r = t.outputLen;
        if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
      }
    });
    var qs = V((g) => {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: true });
      g.add5L = g.add5H = g.add4H = g.add4L = g.add3H = g.add3L = g.rotlBL = g.rotlBH = g.rotlSL = g.rotlSH = g.rotr32L = g.rotr32H = g.rotrBL = g.rotrBH = g.rotrSL = g.rotrSH = g.shrSL = g.shrSH = g.toBig = void 0;
      g.fromBig = Dn;
      g.split = bs;
      g.add = Ds;
      var Pr = BigInt(2 ** 32 - 1), Nn = BigInt(32);
      function Dn(e, t = false) {
        return t ? { h: Number(e & Pr), l: Number(e >> Nn & Pr) } : { h: Number(e >> Nn & Pr) | 0, l: Number(e & Pr) | 0 };
      }
      function bs(e, t = false) {
        let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: o, l: s } = Dn(e[i], t);
          [r[i], n[i]] = [o, s];
        }
        return [r, n];
      }
      var xs = (e, t) => BigInt(e >>> 0) << Nn | BigInt(t >>> 0);
      g.toBig = xs;
      var Es = (e, t, r) => e >>> r;
      g.shrSH = Es;
      var Ps = (e, t, r) => e << 32 - r | t >>> r;
      g.shrSL = Ps;
      var Ts = (e, t, r) => e >>> r | t << 32 - r;
      g.rotrSH = Ts;
      var Ss = (e, t, r) => e << 32 - r | t >>> r;
      g.rotrSL = Ss;
      var As = (e, t, r) => e << 64 - r | t >>> r - 32;
      g.rotrBH = As;
      var vs = (e, t, r) => e >>> r - 32 | t << 64 - r;
      g.rotrBL = vs;
      var Cs = (e, t) => t;
      g.rotr32H = Cs;
      var Rs = (e, t) => e;
      g.rotr32L = Rs;
      var ks = (e, t, r) => e << r | t >>> 32 - r;
      g.rotlSH = ks;
      var Is = (e, t, r) => t << r | e >>> 32 - r;
      g.rotlSL = Is;
      var Os = (e, t, r) => t << r - 32 | e >>> 64 - r;
      g.rotlBH = Os;
      var Ns = (e, t, r) => e << r - 32 | t >>> 64 - r;
      g.rotlBL = Ns;
      function Ds(e, t, r, n) {
        let i = (t >>> 0) + (n >>> 0);
        return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
      }
      var Fs = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
      g.add3L = Fs;
      var Ms = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
      g.add3H = Ms;
      var _s = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
      g.add4L = _s;
      var Ls = (e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0;
      g.add4H = Ls;
      var $s = (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
      g.add5L = $s;
      var Vs = (e, t, r, n, i, o) => t + r + n + i + o + (e / 2 ** 32 | 0) | 0;
      g.add5H = Vs;
      var Rp = { fromBig: Dn, split: bs, toBig: xs, shrSH: Es, shrSL: Ps, rotrSH: Ts, rotrSL: Ss, rotrBH: As, rotrBL: vs, rotr32H: Cs, rotr32L: Rs, rotlSH: ks, rotlSL: Is, rotlBH: Os, rotlBL: Ns, add: Ds, add3L: Fs, add3H: Ms, add4L: _s, add4H: Ls, add5H: Vs, add5L: $s };
      g.default = Rp;
    });
    var js = V((Tr) => {
      "use strict";
      Object.defineProperty(Tr, "__esModule", { value: true });
      Tr.crypto = void 0;
      var fe = __require("crypto");
      Tr.crypto = fe && typeof fe == "object" && "webcrypto" in fe ? fe.webcrypto : fe && typeof fe == "object" && "randomBytes" in fe ? fe : void 0;
    });
    var Qs = V((b) => {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: true });
      b.Hash = b.nextTick = b.byteSwapIfBE = b.isLE = void 0;
      b.isBytes = kp;
      b.u8 = Ip;
      b.u32 = Op;
      b.createView = Np;
      b.rotr = Dp;
      b.rotl = Fp;
      b.byteSwap = _n;
      b.byteSwap32 = Mp;
      b.bytesToHex = Lp;
      b.hexToBytes = $p;
      b.asyncLoop = qp;
      b.utf8ToBytes = Bs;
      b.toBytes = Sr;
      b.concatBytes = jp;
      b.checkOpts = Up;
      b.wrapConstructor = Bp;
      b.wrapConstructorWithOpts = Qp;
      b.wrapXOFConstructorWithOpts = Jp;
      b.randomBytes = Hp;
      var Ge = js(), Mn = On();
      function kp(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
      }
      function Ip(e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      function Op(e) {
        return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      }
      function Np(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function Dp(e, t) {
        return e << 32 - t | e >>> t;
      }
      function Fp(e, t) {
        return e << t | e >>> 32 - t >>> 0;
      }
      b.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
      function _n(e) {
        return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
      }
      b.byteSwapIfBE = b.isLE ? (e) => e : (e) => _n(e);
      function Mp(e) {
        for (let t = 0; t < e.length; t++) e[t] = _n(e[t]);
      }
      var _p = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      function Lp(e) {
        (0, Mn.abytes)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += _p[e[r]];
        return t;
      }
      var oe = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function Us(e) {
        if (e >= oe._0 && e <= oe._9) return e - oe._0;
        if (e >= oe.A && e <= oe.F) return e - (oe.A - 10);
        if (e >= oe.a && e <= oe.f) return e - (oe.a - 10);
      }
      function $p(e) {
        if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
        let t = e.length, r = t / 2;
        if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let i = 0, o = 0; i < r; i++, o += 2) {
          let s = Us(e.charCodeAt(o)), a = Us(e.charCodeAt(o + 1));
          if (s === void 0 || a === void 0) {
            let l = e[o] + e[o + 1];
            throw new Error('hex string expected, got non-hex character "' + l + '" at index ' + o);
          }
          n[i] = s * 16 + a;
        }
        return n;
      }
      var Vp = async () => {
      };
      b.nextTick = Vp;
      async function qp(e, t, r) {
        let n = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          let o = Date.now() - n;
          o >= 0 && o < t || (await (0, b.nextTick)(), n += o);
        }
      }
      function Bs(e) {
        if (typeof e != "string") throw new Error("utf8ToBytes expected string, got " + typeof e);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function Sr(e) {
        return typeof e == "string" && (e = Bs(e)), (0, Mn.abytes)(e), e;
      }
      function jp(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          (0, Mn.abytes)(i), t += i.length;
        }
        let r = new Uint8Array(t);
        for (let n = 0, i = 0; n < e.length; n++) {
          let o = e[n];
          r.set(o, i), i += o.length;
        }
        return r;
      }
      var Fn = class {
        clone() {
          return this._cloneInto();
        }
      };
      b.Hash = Fn;
      function Up(e, t) {
        if (t !== void 0 && {}.toString.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
        return Object.assign(e, t);
      }
      function Bp(e) {
        let t = (n) => e().update(Sr(n)).digest(), r = e();
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
      }
      function Qp(e) {
        let t = (n, i) => e(i).update(Sr(n)).digest(), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      function Jp(e) {
        let t = (n, i) => e(i).update(Sr(n)).digest(), r = e({});
        return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
      }
      function Hp(e = 32) {
        if (Ge.crypto && typeof Ge.crypto.getRandomValues == "function") return Ge.crypto.getRandomValues(new Uint8Array(e));
        if (Ge.crypto && typeof Ge.crypto.randomBytes == "function") return Ge.crypto.randomBytes(e);
        throw new Error("crypto.getRandomValues must be defined");
      }
    });
    var Ys = V((C) => {
      "use strict";
      Object.defineProperty(C, "__esModule", { value: true });
      C.shake256 = C.shake128 = C.keccak_512 = C.keccak_384 = C.keccak_256 = C.keccak_224 = C.sha3_512 = C.sha3_384 = C.sha3_256 = C.sha3_224 = C.Keccak = void 0;
      C.keccakP = Ks;
      var ze = On(), kt = qs(), se = Qs(), Gs = [], zs = [], Ws = [], Gp = BigInt(0), Rt = BigInt(1), zp = BigInt(2), Wp = BigInt(7), Kp = BigInt(256), Zp = BigInt(113);
      for (let e = 0, t = Rt, r = 1, n = 0; e < 24; e++) {
        [r, n] = [n, (2 * r + 3 * n) % 5], Gs.push(2 * (5 * n + r)), zs.push((e + 1) * (e + 2) / 2 % 64);
        let i = Gp;
        for (let o = 0; o < 7; o++) t = (t << Rt ^ (t >> Wp) * Zp) % Kp, t & zp && (i ^= Rt << (Rt << BigInt(o)) - Rt);
        Ws.push(i);
      }
      var [Yp, Xp] = (0, kt.split)(Ws, true), Js = (e, t, r) => r > 32 ? (0, kt.rotlBH)(e, t, r) : (0, kt.rotlSH)(e, t, r), Hs = (e, t, r) => r > 32 ? (0, kt.rotlBL)(e, t, r) : (0, kt.rotlSL)(e, t, r);
      function Ks(e, t = 24) {
        let r = new Uint32Array(10);
        for (let n = 24 - t; n < 24; n++) {
          for (let s = 0; s < 10; s++) r[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
          for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10, l = (s + 2) % 10, u = r[l], c = r[l + 1], p = Js(u, c, 1) ^ r[a], d = Hs(u, c, 1) ^ r[a + 1];
            for (let f = 0; f < 50; f += 10) e[s + f] ^= p, e[s + f + 1] ^= d;
          }
          let i = e[2], o = e[3];
          for (let s = 0; s < 24; s++) {
            let a = zs[s], l = Js(i, o, a), u = Hs(i, o, a), c = Gs[s];
            i = e[c], o = e[c + 1], e[c] = l, e[c + 1] = u;
          }
          for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) r[a] = e[s + a];
            for (let a = 0; a < 10; a++) e[s + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
          }
          e[0] ^= Yp[n], e[1] ^= Xp[n];
        }
        r.fill(0);
      }
      var It = class e extends se.Hash {
        constructor(t, r, n, i = false, o = 24) {
          if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, (0, ze.anumber)(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
          this.state = new Uint8Array(200), this.state32 = (0, se.u32)(this.state);
        }
        keccak() {
          se.isLE || (0, se.byteSwap32)(this.state32), Ks(this.state32, this.rounds), se.isLE || (0, se.byteSwap32)(this.state32), this.posOut = 0, this.pos = 0;
        }
        update(t) {
          (0, ze.aexists)(this);
          let { blockLen: r, state: n } = this;
          t = (0, se.toBytes)(t);
          let i = t.length;
          for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
            this.pos === r && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = true;
          let { state: t, suffix: r, pos: n, blockLen: i } = this;
          t[n] ^= r, (r & 128) !== 0 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
        }
        writeInto(t) {
          (0, ze.aexists)(this, false), (0, ze.abytes)(t), this.finish();
          let r = this.state, { blockLen: n } = this;
          for (let i = 0, o = t.length; i < o; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, o - i);
            t.set(r.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s;
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, ze.anumber)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if ((0, ze.aoutput)(t, this), this.finished) throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          this.destroyed = true, this.state.fill(0);
        }
        _cloneInto(t) {
          let { blockLen: r, suffix: n, outputLen: i, rounds: o, enableXOF: s } = this;
          return t || (t = new e(r, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t;
        }
      };
      C.Keccak = It;
      var ge = (e, t, r) => (0, se.wrapConstructor)(() => new It(t, e, r));
      C.sha3_224 = ge(6, 144, 224 / 8);
      C.sha3_256 = ge(6, 136, 256 / 8);
      C.sha3_384 = ge(6, 104, 384 / 8);
      C.sha3_512 = ge(6, 72, 512 / 8);
      C.keccak_224 = ge(1, 144, 224 / 8);
      C.keccak_256 = ge(1, 136, 256 / 8);
      C.keccak_384 = ge(1, 104, 384 / 8);
      C.keccak_512 = ge(1, 72, 512 / 8);
      var Zs = (e, t, r) => (0, se.wrapXOFConstructorWithOpts)((n = {}) => new It(t, e, n.dkLen === void 0 ? r : n.dkLen, true));
      C.shake128 = Zs(31, 168, 128 / 8);
      C.shake256 = Zs(31, 136, 256 / 8);
    });
    var sa = V((ix, ye) => {
      "use strict";
      var { sha3_512: ed } = Ys(), ea = 24, Ot = 32, Ln = (e = 4, t = Math.random) => {
        let r = "";
        for (; r.length < e; ) r = r + Math.floor(t() * 36).toString(36);
        return r;
      };
      function ta(e) {
        let t = 8n, r = 0n;
        for (let n of e.values()) {
          let i = BigInt(n);
          r = (r << t) + i;
        }
        return r;
      }
      var ra = (e = "") => ta(ed(e)).toString(36).slice(1), Xs = Array.from({ length: 26 }, (e, t) => String.fromCharCode(t + 97)), td = (e) => Xs[Math.floor(e() * Xs.length)], na = ({ globalObj: e = typeof global < "u" ? global : typeof window < "u" ? window : {}, random: t = Math.random } = {}) => {
        let r = Object.keys(e).toString(), n = r.length ? r + Ln(Ot, t) : Ln(Ot, t);
        return ra(n).substring(0, Ot);
      }, ia = (e) => () => e++, rd = 476782367, oa = ({ random: e = Math.random, counter: t = ia(Math.floor(e() * rd)), length: r = ea, fingerprint: n = na({ random: e }) } = {}) => function() {
        let o = td(e), s = Date.now().toString(36), a = t().toString(36), l = Ln(r, e), u = `${s + l + a + n}`;
        return `${o + ra(u).substring(1, r)}`;
      }, nd = oa(), id = (e, { minLength: t = 2, maxLength: r = Ot } = {}) => {
        let n = e.length, i = /^[0-9a-z]+$/;
        try {
          if (typeof e == "string" && n >= t && n <= r && i.test(e)) return true;
        } finally {
        }
        return false;
      };
      ye.exports.getConstants = () => ({ defaultLength: ea, bigLength: Ot });
      ye.exports.init = oa;
      ye.exports.createId = nd;
      ye.exports.bufToBigInt = ta;
      ye.exports.createCounter = ia;
      ye.exports.createFingerprint = na;
      ye.exports.isCuid = id;
    });
    var aa = V((ox, Nt) => {
      "use strict";
      var { createId: od, init: sd, getConstants: ad, isCuid: ld } = sa();
      Nt.exports.createId = od;
      Nt.exports.init = sd;
      Nt.exports.getConstants = ad;
      Nt.exports.isCuid = ld;
    });
    var _m = {};
    Ie(_m, { AnyNull: () => M.AnyNull, DMMF: () => ft, DbNull: () => M.DbNull, Debug: () => F, Decimal: () => Gl.Decimal, Extensions: () => Kr, JsonNull: () => M.JsonNull, NullTypes: () => M.NullTypes, ObjectEnumValue: () => M.ObjectEnumValue, PrismaClientInitializationError: () => w.PrismaClientInitializationError, PrismaClientKnownRequestError: () => w.PrismaClientKnownRequestError, PrismaClientRustPanicError: () => w.PrismaClientRustPanicError, PrismaClientUnknownRequestError: () => w.PrismaClientUnknownRequestError, PrismaClientValidationError: () => w.PrismaClientValidationError, Public: () => Zr, Sql: () => re.Sql, createParam: () => Eo, defineDmmfProperty: () => vo, deserializeJsonResponse: () => me, deserializeRawResult: () => Gr, dmmfToRuntimeDataModel: () => Pi, empty: () => re.empty, getPrismaClient: () => Ql, getRuntime: () => Hl, isAnyNull: () => M.isAnyNull, isDbNull: () => M.isDbNull, isJsonNull: () => M.isJsonNull, join: () => re.join, makeStrictEnum: () => Jl, makeTypedQueryFactory: () => Co, raw: () => re.raw, serializeJsonQuery: () => pr, skip: () => cr, sqltag: () => re.sql, warnOnce: () => un });
    module.exports = ru(_m);
    var Kr = {};
    Ie(Kr, { defineExtension: () => wi, getExtensionContext: () => bi });
    function wi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function bi(e) {
      return e;
    }
    var Zr = {};
    Ie(Zr, { validator: () => xi });
    function xi(...e) {
      return (t) => t;
    }
    var z = class {
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function ue(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    function Ei(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    function rt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Pi(e) {
      return { models: Yr(e.models), enums: Yr(e.enums), types: Yr(e.types) };
    }
    function Yr(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    var pe = require_dist();
    var Jt = {};
    Ie(Jt, { $: () => Ci, bgBlack: () => du, bgBlue: () => yu, bgCyan: () => wu, bgGreen: () => fu, bgMagenta: () => hu, bgRed: () => mu, bgWhite: () => bu, bgYellow: () => gu, black: () => lu, blue: () => be, bold: () => Q, cyan: () => ne, dim: () => nt, gray: () => at, green: () => ot, grey: () => pu, hidden: () => su, inverse: () => ou, italic: () => iu, magenta: () => uu, red: () => we, reset: () => nu, strikethrough: () => au, underline: () => it, white: () => cu, yellow: () => st });
    var Xr;
    var Ti;
    var Si;
    var Ai;
    var vi = true;
    typeof process < "u" && ({ FORCE_COLOR: Xr, NODE_DISABLE_COLORS: Ti, NO_COLOR: Si, TERM: Ai } = process.env || {}, vi = process.stdout && process.stdout.isTTY);
    var Ci = { enabled: !Ti && Si == null && Ai !== "dumb" && (Xr != null && Xr !== "0" || vi) };
    function S(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Ci.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var nu = S(0, 0);
    var Q = S(1, 22);
    var nt = S(2, 22);
    var iu = S(3, 23);
    var it = S(4, 24);
    var ou = S(7, 27);
    var su = S(8, 28);
    var au = S(9, 29);
    var lu = S(30, 39);
    var we = S(31, 39);
    var ot = S(32, 39);
    var st = S(33, 39);
    var be = S(34, 39);
    var uu = S(35, 39);
    var ne = S(36, 39);
    var cu = S(37, 39);
    var at = S(90, 39);
    var pu = S(90, 39);
    var du = S(40, 49);
    var mu = S(41, 49);
    var fu = S(42, 49);
    var gu = S(43, 49);
    var yu = S(44, 49);
    var hu = S(45, 49);
    var wu = S(46, 49);
    var bu = S(47, 49);
    var xu = 100;
    var Ri = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var lt = [];
    var ki = Date.now();
    var Eu = 0;
    var en = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= en.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= en.DEBUG_COLORS ? en.DEBUG_COLORS === "true" : true;
    var ut = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function Pu(e) {
      let t = { color: Ri[Eu++ % Ri.length], enabled: ut.enabled(e), namespace: e, log: ut.log, extend: () => {
      } }, r = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && lt.push([o, ...n]), lt.length > xu && lt.shift(), ut.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : Tu(c)), u = `+${Date.now() - ki}ms`;
          ki = Date.now(), globalThis.DEBUG_COLORS ? a(Jt[s](Q(o)), ...l, Jt[s](u)) : a(o, ...l, u);
        }
      };
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    var F = new Proxy(Pu, { get: (e, t) => ut[t], set: (e, t, r) => ut[t] = r });
    function Tu(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    function Ii(e = 7500) {
      let t = lt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function Oi() {
      lt.length = 0;
    }
    var _i = U(Mi(), 1);
    function tn(e) {
      let t = (0, _i.default)(e);
      if (t === 0) return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    }
    var Li = "prisma+postgres";
    var Gt = `${Li}:`;
    function $i(e) {
      return e?.toString().startsWith(`${Gt}//`) ?? false;
    }
    function rn(e) {
      if (!$i(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
    }
    var pt = {};
    Ie(pt, { error: () => Cu, info: () => vu, log: () => Au, query: () => Ru, should: () => ji, tags: () => ct, warn: () => nn });
    var ct = { error: we("prisma:error"), warn: st("prisma:warn"), info: ne("prisma:info"), query: be("prisma:query") };
    var ji = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Au(...e) {
      console.log(...e);
    }
    function nn(e, ...t) {
      ji.warn() && console.warn(`${ct.warn} ${e}`, ...t);
    }
    function vu(e, ...t) {
      console.info(`${ct.info} ${e}`, ...t);
    }
    function Cu(e, ...t) {
      console.error(`${ct.error} ${e}`, ...t);
    }
    function Ru(e, ...t) {
      console.log(`${ct.query} ${e}`, ...t);
    }
    function ie(e, t) {
      throw new Error(t);
    }
    function on({ onlyFirst: e = false } = {}) {
      let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
      return new RegExp(r, e ? void 0 : "g");
    }
    var ku = on();
    function Oe(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(ku, "");
    }
    var dt = U(__require("path"));
    function sn(e) {
      return dt.default.sep === dt.default.posix.sep ? e : e.split(dt.default.sep).join(dt.default.posix.sep);
    }
    function an(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function Wt(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    function ln(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function mt(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var Bi = /* @__PURE__ */ new Set();
    var un = (e, t, ...r) => {
      Bi.has(e) || (Bi.add(e), nn(t, ...r));
    };
    function Ne(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Kt(e) {
      return e.toString() !== "Invalid Date";
    }
    var Qi = require_dist();
    function De(e) {
      return Qi.Decimal.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var go = require_dist();
    var ft = {};
    Ie(ft, { ModelAction: () => Fe, datamodelEnumToSchemaEnum: () => Iu });
    function Iu(e) {
      return { name: e.name, values: e.values.map((t) => t.name) };
    }
    var Fe = ((A) => (A.findUnique = "findUnique", A.findUniqueOrThrow = "findUniqueOrThrow", A.findFirst = "findFirst", A.findFirstOrThrow = "findFirstOrThrow", A.findMany = "findMany", A.create = "create", A.createMany = "createMany", A.createManyAndReturn = "createManyAndReturn", A.update = "update", A.updateMany = "updateMany", A.updateManyAndReturn = "updateManyAndReturn", A.upsert = "upsert", A.delete = "delete", A.deleteMany = "deleteMany", A.groupBy = "groupBy", A.count = "count", A.aggregate = "aggregate", A.findRaw = "findRaw", A.aggregateRaw = "aggregateRaw", A))(Fe || {});
    var Wi = U(qi());
    var zi = U(__require("fs"));
    var Ji = { keyword: ne, entity: ne, value: (e) => Q(be(e)), punctuation: be, directive: ne, function: ne, variable: (e) => Q(be(e)), string: (e) => Q(ot(e)), boolean: st, number: ne, comment: at };
    var Ou = (e) => e;
    var Zt = {};
    var Nu = 0;
    var y = { manual: Zt.Prism && Zt.Prism.manual, disableWorkerMessageHandler: Zt.Prism && Zt.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof J) {
        let t = e;
        return new J(t.type, y.util.encode(t.content), t.alias);
      } else return Array.isArray(e) ? e.map(y.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Nu }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = y.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = y.util.objId(t), r[i]) return r[i];
          n = {}, r[i] = n;
          for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = y.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = y.util.clone(y.languages[e]);
      for (let n in t) r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || y.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, y.languages.DFS(y.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = y.util.objId;
      for (let s in t) if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = y.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return y.hooks.run("before-tokenize", n), n.tokens = y.tokenize(n.code, n.grammar), y.hooks.run("after-tokenize", n), J.stringify(y.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let x in r) {
        if (!r.hasOwnProperty(x) || !r[x]) continue;
        if (x == s) return;
        let E = r[x];
        E = y.util.type(E) === "Array" ? E : [E];
        for (let L = 0; L < E.length; ++L) {
          let T = E[L], A = T.inside, j = !!T.lookbehind, ke = !!T.greedy, Wr = 0, zl = T.alias;
          if (ke && !T.pattern.global) {
            let $ = T.pattern.toString().match(/[imuy]*$/)[0];
            T.pattern = RegExp(T.pattern.source, $ + "g");
          }
          T = T.pattern || T;
          for (let $ = n, le = i; $ < t.length; le += t[$].length, ++$) {
            let tt = t[$];
            if (t.length > e.length) return;
            if (tt instanceof J) continue;
            if (ke && $ != t.length - 1) {
              T.lastIndex = le;
              var p = T.exec(e);
              if (!p) break;
              var c = p.index + (j ? p[1].length : 0), d = p.index + p[0].length, a = $, l = le;
              for (let Kl = t.length; a < Kl && (l < d || !t[a].type && !t[a - 1].greedy); ++a) l += t[a].length, c >= l && (++$, le = l);
              if (t[$] instanceof J) continue;
              u = a - $, tt = e.slice(le, l), p.index -= le;
            } else {
              T.lastIndex = 0;
              var p = T.exec(tt), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            j && (Wr = p[1] ? p[1].length : 0);
            var c = p.index + Wr, p = p[0].slice(Wr), d = c + p.length, f = tt.slice(0, c), h = tt.slice(d);
            let Bt = [$, u];
            f && (++$, le += f.length, Bt.push(f));
            let Wl = new J(x, A ? y.tokenize(p, A) : p, zl, p, ke);
            if (Bt.push(Wl), h && Bt.push(h), Array.prototype.splice.apply(t, Bt), u != 1 && y.matchGrammar(e, t, r, $, le, true, x), o) break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return y.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = y.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = y.hooks.all[e];
      if (!(!r || !r.length)) for (var n = 0, i; i = r[n++]; ) i(t);
    } }, Token: J };
    y.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    y.languages.javascript = y.languages.extend("clike", { "class-name": [y.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    y.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    y.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: y.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: y.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: y.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: y.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    y.languages.markup && y.languages.markup.tag.addInlined("script", "javascript");
    y.languages.js = y.languages.javascript;
    y.languages.typescript = y.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    y.languages.ts = y.languages.typescript;
    function J(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    J.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return J.stringify(r, t);
      }).join("") : Du(e.type)(e.content);
    };
    function Du(e) {
      return Ji[e] || Ou;
    }
    function Hi(e) {
      return Fu(e, y.languages.javascript);
    }
    function Fu(e, t) {
      return y.tokenize(e, t).map((n) => J.stringify(n)).join("");
    }
    function Gi(e) {
      return tn(e);
    }
    var Yt = class e {
      firstLineNumber;
      lines;
      static read(t) {
        let r;
        try {
          r = zi.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber) return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Gi(n).split(`
`));
      }
      highlight() {
        let t = Hi(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Mu = { red: we, gray: at, dim: nt, bold: Q, underline: it, highlightSource: (e) => e.highlight() };
    var _u = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Lu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    function $u({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = Lu({ message: t, originalMethod: r, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = Yt.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = qu(c), d = Vu(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h) => h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((h, x) => o.gray(String(x).padStart(f)) + " " + h).mapLines((h) => o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let h = p + f + 1;
          h += 2, s.callArguments = (0, Wi.default)(i, h).slice(h);
        }
      }
      return s;
    }
    function Vu(e) {
      let t = Object.keys(Fe).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function qu(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ") return t;
        t++;
      }
      return t;
    }
    function ju({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Uu(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Uu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function Xt(e) {
      let t = e.showColors ? Mu : _u, r;
      return r = $u(e, t), ju(r, t);
    }
    var io = U(cn());
    function Xi(e, t, r) {
      let n = eo(e), i = Bu(n), o = Ju(i);
      o ? er(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    function eo(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? eo(t) : [t]);
    }
    function Bu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Qu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Qu(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Ju(e) {
      return ln(e, (t, r) => {
        let n = Zi(t), i = Zi(r);
        return n !== i ? n - i : Yi(t) - Yi(r);
      });
    }
    function Zi(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Yi(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var q = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    ro();
    var Me = class {
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    to();
    var tr = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var rr = (e) => e;
    var nr = { bold: rr, red: rr, green: rr, dim: rr, enabled: false };
    var no = { bold: Q, red: we, green: ot, dim: nt, enabled: true };
    var _e = { write(e) {
      e.writeLine(",");
    } };
    var W = class {
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = (t) => t;
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var ce = class {
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Le = class extends ce {
      items = [];
      addItem(t) {
        return this.items.push(new tr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new W("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(_e, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var $e = class e extends ce {
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof Le && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new W("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(_e, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var k = class extends ce {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new W(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var gt = class {
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(_e, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function er(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Hu(e, t);
          break;
        case "IncludeOnScalar":
          Gu(e, t);
          break;
        case "EmptySelection":
          zu(e, t, r);
          break;
        case "UnknownSelectionField":
          Yu(e, t);
          break;
        case "InvalidSelectionValue":
          Xu(e, t);
          break;
        case "UnknownArgument":
          ec(e, t);
          break;
        case "UnknownInputField":
          tc(e, t);
          break;
        case "RequiredArgumentMissing":
          rc(e, t);
          break;
        case "InvalidArgumentType":
          nc(e, t);
          break;
        case "InvalidArgumentValue":
          ic(e, t);
          break;
        case "ValueTooLarge":
          oc(e, t);
          break;
        case "SomeFieldsMissing":
          sc(e, t);
          break;
        case "TooManyFieldsGiven":
          ac(e, t);
          break;
        case "Union":
          Xi(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function Hu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    function Gu(e, t) {
      let [r, n] = Ve(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new q(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${yt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function zu(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Wu(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Ku(e, t);
          return;
        }
      }
      if (r?.[ue(e.outputType.name)]) {
        Zu(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    function Wu(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new q(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function Ku(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), ao(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${yt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function Zu(e, t) {
      let r = new gt();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new q("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = Ve(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new $e();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function Yu(e, t) {
      let r = lo(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            ao(n, e.outputType);
            break;
          case "include":
            lc(n, e.outputType);
            break;
          case "omit":
            uc(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(yt(n)), i.join(" ");
      });
    }
    function Xu(e, t) {
      let r = lo(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    function ec(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), cc(n, e.arguments)), t.addErrorMessage((i) => oo(i, r, e.arguments.map((o) => o.name)));
    }
    function tc(e, t) {
      let [r, n] = Ve(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && uo(o, e.inputType);
      }
      t.addErrorMessage((o) => oo(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function oo(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = dc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(yt(e)), n.join(" ");
    }
    function rc(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof k && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = Ve(e.argumentPath), s = new gt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) {
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new q(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(so).join(" | ");
          a.addSuggestion(new q(o, l).makeRequired());
        }
        if (e.dependentArgumentPath) {
          n.getDeepField(e.dependentArgumentPath)?.markAsError();
          let [, l] = Ve(e.dependentArgumentPath);
          t.addErrorMessage((u) => `Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`);
        }
      }
    }
    function so(e) {
      return e.kind === "list" ? `${so(e.elementType)}[]` : e.name;
    }
    function nc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = ir("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function ic(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = ir("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function oc(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof k && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function sc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && uo(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${ir("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(yt(i)), o.join(" ");
      });
    }
    function ac(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${ir("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function ao(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new q(r.name, "true"));
    }
    function lc(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new q(r.name, "true"));
    }
    function uc(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new q(r.name, "true"));
    }
    function cc(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new q(r.name, r.typeNames.join(" | ")));
    }
    function lo(e, t) {
      let [r, n] = Ve(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    function uo(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new q(r.name, r.typeNames.join(" | ")));
    }
    function Ve(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    function yt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function ir(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var pc = 3;
    function dc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, io.default)(e, i);
        o > pc || o < r && (r = o, n = i);
      }
      return n;
    }
    var po = require_dist();
    var ht = class {
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function qe(e) {
      return e instanceof ht;
    }
    var co = ": ";
    var or = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + co.length;
      }
      write(t) {
        let r = new W(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(co).write(this.value);
      }
    };
    var dn = class {
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function je(e) {
      return new dn(mo(e));
    }
    function mo(e) {
      let t = new $e();
      for (let [r, n] of Object.entries(e)) {
        let i = new or(r, fo(n));
        t.addField(i);
      }
      return t;
    }
    function fo(e) {
      if (typeof e == "string") return new k(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new k(String(e));
      if (typeof e == "bigint") return new k(`${e}n`);
      if (e === null) return new k("null");
      if (e === void 0) return new k("undefined");
      if (De(e)) return new k(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new k(`Buffer.alloc(${e.byteLength})`) : new k(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Kt(e) ? e.toISOString() : "Invalid Date";
        return new k(`new Date("${t}")`);
      }
      return e instanceof po.ObjectEnumValue ? new k(`Prisma.${e._getName()}`) : qe(e) ? new k(`prisma.${ue(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? mc(e) : typeof e == "object" ? mo(e) : new k(Object.prototype.toString.call(e));
    }
    function mc(e) {
      let t = new Le();
      for (let r of e) t.addItem(fo(r));
      return t;
    }
    function sr(e, t) {
      let r = t === "pretty" ? no : nr, n = e.renderAllMessages(r), i = new Me(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    function ar({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = je(e);
      for (let p of t) er(p, a, s);
      let { message: l, args: u } = sr(a, r), c = Xt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new go.PrismaClientValidationError(c, { clientVersion: o });
    }
    function K(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    function ho(e, t, r) {
      let n = K(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : fc({ ...e, ...yo(t.name, e, t.result.$allModels), ...yo(t.name, e, t.result[n]) });
    }
    function fc(e) {
      let t = new z(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return Wt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function yo(e, t, r) {
      return r ? Wt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: gc(t, o, i) })) : {};
    }
    function gc(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function wo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    function bo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    var lr = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new z();
      modelExtensionsCache = new z();
      queryCallbacksCache = new z();
      clientExtensions = rt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = rt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => ho(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = K(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Ue = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new lr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new lr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ur = class {
      constructor(t) {
        this.name = t;
      }
    };
    function xo(e) {
      return e instanceof ur;
    }
    function Eo(e) {
      return new ur(e);
    }
    var Po = /* @__PURE__ */ Symbol();
    var wt = class {
      constructor(t) {
        if (t !== Po) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? cr : t;
      }
    };
    var cr = new wt(Po);
    function Z(e) {
      return e instanceof wt;
    }
    var yc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var To = "explicitly `undefined` values are not allowed";
    function pr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = Ue.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c, wrapRawValues: p }) {
      let d = new mn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c, wrapRawValues: p });
      return { modelName: e, action: yc[t], query: bt(r, d) };
    }
    function bt({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: Ao(r, n), selection: hc(e, t, i, n) };
    }
    function hc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Ec(e, n)) : wc(n, t, r);
    }
    function wc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && bc(n, t, e), xc(n, r, e), n;
    }
    function bc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (Z(i)) continue;
        let o = r.nestSelection(n);
        if (fn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = bt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = bt(i, o);
      }
    }
    function xc(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = bo(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Z(a)) continue;
        fn(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    function Ec(e, t) {
      let r = {}, n = t.getComputedFields(), i = wo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Z(s)) continue;
        let a = t.nestSelection(o);
        fn(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || Z(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = bt({}, a) : r[o] = true;
            continue;
          }
          r[o] = bt(s, a);
        }
      }
      return r;
    }
    function So(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (Ne(e)) {
        if (Kt(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (xo(e)) return { $type: "Param", value: e.name };
      if (qe(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Pc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: Buffer.from(r, n, i).toString("base64") };
      }
      if (Tc(e)) return e.values;
      if (De(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof pe.ObjectEnumValue) {
        if (!(0, pe.isDbNull)(e) && !(0, pe.isJsonNull)(e) && !(0, pe.isAnyNull)(e)) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Sc(e)) return e.toJSON();
      if (typeof e == "object") return Ao(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Ao(e, t) {
      if (t.shouldWrapRawValues() && e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        Z(i) || (i !== void 0 ? r[n] = So(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: To }));
      }
      return r;
    }
    function Pc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Z(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(So(o, i));
      }
      return r;
    }
    function Tc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Sc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    function fn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: To });
    }
    var mn = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        ar({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      shouldWrapRawValues() {
        return this.params.wrapRawValues ?? false;
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[ue(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            ie(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    function vo(e, t) {
      let r = rt(() => Ac(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function Ac(e) {
      return { datamodel: { models: gn(e.models), enums: gn(e.enums), types: gn(e.types) } };
    }
    function gn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    var yn = /* @__PURE__ */ new WeakMap();
    var dr = "$$PrismaTypedSql";
    var xt = class {
      constructor(t, r) {
        yn.set(this, { sql: t, values: r }), Object.defineProperty(this, dr, { value: dr });
      }
      get sql() {
        return yn.get(this).sql;
      }
      get values() {
        return yn.get(this).values;
      }
    };
    function Co(e) {
      return (...t) => new xt(e, t);
    }
    function mr(e) {
      return e != null && e[dr] === dr;
    }
    var jl = require_dist();
    var Ul = __require("async_hooks");
    var Bl = __require("events");
    function Et(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function _(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    function xe(e) {
      let t = new z();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    var fr = { enumerable: true, configurable: true, writable: true };
    function gr(e) {
      let t = new Set(e);
      return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => fr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var Ro = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
    function H(e, t) {
      let r = vc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ko(Reflect.ownKeys(o), r), a = ko(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...fr, ...l?.getPropertyDescriptor(s) } : fr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: () => Object.prototype });
      return i[Ro] = function() {
        let o = { ...this };
        return delete o[Ro], o;
      }, i;
    }
    function vc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    function ko(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    function Be(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Io(e) {
      if (e === void 0) return "";
      let t = je(e);
      return new Me(0, { colors: nr }).write(t).toString();
    }
    var Pt = "<unknown>";
    function Oo(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = kc(n) || Oc(n) || Fc(n) || $c(n) || _c(n);
        return i && r.push(i), r;
      }, []);
    }
    var Cc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Rc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function kc(e) {
      var t = Cc.exec(e);
      if (!t) return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Rc.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || Pt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var Ic = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Oc(e) {
      var t = Ic.exec(e);
      return t ? { file: t[2], methodName: t[1] || Pt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Nc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Dc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Fc(e) {
      var t = Nc.exec(e);
      if (!t) return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Dc.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Pt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var Mc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function _c(e) {
      var t = Mc.exec(e);
      return t ? { file: t[3], methodName: t[1] || Pt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var Lc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function $c(e) {
      var t = Lc.exec(e);
      return t ? { file: t[2], methodName: t[1] || Pt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var hn = class {
      getLocation() {
        return null;
      }
    };
    var wn = class {
      _error;
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t) return null;
        let n = Oo(t).find((i) => {
          if (!i.file) return false;
          let o = sn(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/client.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function de(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new hn() : new wn();
    }
    var No = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Qe(e = {}) {
      let t = qc(e);
      return Object.entries(t).reduce((n, [i, o]) => (No[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function qc(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function yr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Do(e, t) {
      let r = yr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Qe })(e);
    }
    function jc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? Qe({ ...r, _count: t }) : Qe({ ...r, _count: { _all: true } });
    }
    function Uc(e = {}) {
      return typeof e.select == "object" ? (t) => yr(e)(t)._count : (t) => yr(e)(t)._count._all;
    }
    function Fo(e, t) {
      return t({ action: "count", unpacker: Uc(e), argsMapper: jc })(e);
    }
    function Bc(e = {}) {
      let t = Qe(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Qc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Mo(e, t) {
      return t({ action: "groupBy", unpacker: Qc(e), argsMapper: Bc })(e);
    }
    function _o(e, t, r) {
      if (t === "aggregate") return (n) => Do(n, r);
      if (t === "count") return (n) => Fo(n, r);
      if (t === "groupBy") return (n) => Mo(n, r);
    }
    function Lo(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Ei(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new ht(e, o, s.type, s.isList, s.kind === "enum");
      }, ...gr(Object.keys(n)) });
    }
    var $o = (e) => Array.isArray(e) ? e : e.split(".");
    var bn = (e, t) => $o(t).reduce((r, n) => r && r[n], e);
    var Vo = (e, t, r) => $o(t).reduceRight((n, i, o, s) => Object.assign({}, bn(e, s.slice(0, o)), { [i]: n }), r);
    function Jc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Hc(e, t, r) {
      return t === void 0 ? e ?? {} : Vo(t, r, e || true);
    }
    function xn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = de(e._errorFormat), c = Jc(n, i), p = Hc(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Gc(e, t);
        return new Proxy(d, { get(h, x) {
          if (!f.includes(x)) return h[x];
          let L = [a[x].type, r, x], T = [c, p];
          return xn(e, ...L, ...T);
        }, ...gr([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    function Gc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var zc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Wc = ["aggregate", "count", "groupBy"];
    function En(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Kc(e, t), Yc(e, t), Et(r), _("name", () => t), _("$name", () => t), _("$parent", () => e._appliedParent)];
      return H({}, n);
    }
    function Kc(e, t) {
      let r = K(t), n = Object.keys(Fe).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (a) => (l) => {
          let u = de(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: c, callsite: u };
            return e._request({ ...p, ...a });
          }, { action: o, args: l, model: t });
        };
        return zc.includes(o) ? xn(e, t, s) : Zc(i) ? _o(e, i, s) : s({});
      } };
    }
    function Zc(e) {
      return Wc.includes(e);
    }
    function Yc(e, t) {
      return xe(_("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Lo(t, r);
      }));
    }
    function qo(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var Pn = /* @__PURE__ */ Symbol();
    function Tt(e) {
      let t = [Xc(e), ep(e), _(Pn, () => e), _("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Et(r)), H(e, t);
    }
    function Xc(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    function ep(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(K), n = [...new Set(t.concat(r))];
      return xe({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = qo(i);
        if (e._runtimeDataModel.models[o] !== void 0) return En(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return En(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    function jo(e) {
      return e[Pn] ? e[Pn] : e;
    }
    function Uo(e) {
      if (typeof e == "function") return e(this);
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $on: { value: void 0 } });
      return Tt(t);
    }
    function Bo({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(Be(u));
        } else if (r) {
          if (!r[l.name]) continue;
          let u = l.needs.filter((c) => !r[c]);
          u.length > 0 && a.push(Be(u));
        }
        tp(e, l.needs) && s.push(rp(l, H(e, s)));
      }
      return s.length > 0 || a.length > 0 ? H(e, [...s, ...a]) : e;
    }
    function tp(e, t) {
      return t.every((r) => an(e, r));
    }
    function rp(e, t) {
      return xe(_(e.name, () => e.compute(t)));
    }
    function hr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = hr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Qo({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Qo({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Qo({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || Z(s)) continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        t[o] = hr({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Jo({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : hr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
        let c = K(l);
        return Bo({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o?.[c], ...u.omit }, extensions: n });
      } });
    }
    var Ee = require_dist();
    var np = ["$connect", "$disconnect", "$on", "$transaction", "$extends"];
    var Ho = np;
    function Go(e) {
      if (e instanceof Ee.Sql) return ip(e);
      if (mr(e)) return op(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = St(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = St(e[r]);
      return t;
    }
    function ip(e) {
      return new Ee.Sql(e.strings, e.values);
    }
    function op(e) {
      return new xt(e.sql, e.values);
    }
    function St(e) {
      if (typeof e != "object" || e == null || e instanceof Ee.ObjectEnumValue || qe(e)) return e;
      if (De(e)) return new Ee.Decimal(e.toFixed());
      if (Ne(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = St(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: St(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = St(e[r]);
        return t;
      }
      ie(e, "Unknown value");
    }
    function Wo(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Go(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Xo(o, l), a.args = s, Wo(e, a, r, n + 1);
        } });
      });
    }
    function Ko(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Wo(e, t, s);
    }
    function Zo(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Yo(r, n, 0, e) : e(r);
      };
    }
    function Yo(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Xo(i, l), Yo(a, t, r + 1, n);
      } });
    }
    var zo = (e) => e;
    function Xo(e = zo, t = zo) {
      return (r) => e(t(r));
    }
    var os = require_dist();
    var At = require_dist();
    function P(e, t) {
      throw new Error(t);
    }
    function Tn(e, t) {
      return e === t || e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => Tn(e[r], t[r]));
    }
    function Je(e, t) {
      let r = Object.keys(e), n = Object.keys(t);
      return (r.length < n.length ? r : n).every((o) => {
        if (typeof e[o] == typeof t[o] && typeof e[o] != "object") return e[o] === t[o];
        if (At.Decimal.isDecimal(e[o]) || At.Decimal.isDecimal(t[o])) {
          let s = es(e[o]), a = es(t[o]);
          return s && a && s.equals(a);
        } else if (e[o] instanceof Uint8Array || t[o] instanceof Uint8Array) {
          let s = ts(e[o]), a = ts(t[o]);
          return s && a && s.equals(a);
        } else {
          if (e[o] instanceof Date || t[o] instanceof Date) return rs(e[o])?.getTime() === rs(t[o])?.getTime();
          if (typeof e[o] == "bigint" || typeof t[o] == "bigint") return ns(e[o]) === ns(t[o]);
          if (typeof e[o] == "number" || typeof t[o] == "number") return is(e[o]) === is(t[o]);
        }
        return Tn(e[o], t[o]);
      });
    }
    function es(e) {
      return At.Decimal.isDecimal(e) ? e : typeof e == "number" || typeof e == "string" ? new At.Decimal(e) : void 0;
    }
    function ts(e) {
      return Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? Buffer.from(e.buffer, e.byteOffset, e.byteLength) : typeof e == "string" ? Buffer.from(e, "base64") : void 0;
    }
    function rs(e) {
      return e instanceof Date ? e : typeof e == "string" || typeof e == "number" ? new Date(e) : void 0;
    }
    function ns(e) {
      return typeof e == "bigint" ? e : typeof e == "number" || typeof e == "string" ? BigInt(e) : void 0;
    }
    function is(e) {
      return typeof e == "number" ? e : typeof e == "string" ? Number(e) : void 0;
    }
    function vt(e) {
      return JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() : ArrayBuffer.isView(r) ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("base64") : r);
    }
    function sp(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function ap(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    function me(e) {
      return e === null ? e : Array.isArray(e) ? e.map(me) : typeof e == "object" ? sp(e) ? lp(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : ap(e, me) : e;
    }
    function lp({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new os.Decimal(t);
        case "Json":
          return JSON.parse(t);
        default:
          P(t, "Unknown tagged value");
      }
    }
    function wr(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    var m = { Int32: 0, Int64: 1, Float: 2, Double: 3, Numeric: 4, Boolean: 5, Character: 6, Text: 7, Date: 8, Time: 9, DateTime: 10, Json: 11, Enum: 12, Bytes: 13, Set: 14, Uuid: 15, Int32Array: 64, Int64Array: 65, FloatArray: 66, DoubleArray: 67, NumericArray: 68, BooleanArray: 69, CharacterArray: 70, TextArray: 71, DateArray: 72, TimeArray: 73, DateTimeArray: 74, JsonArray: 75, EnumArray: 76, BytesArray: 77, UuidArray: 78, UnknownNumber: 128 };
    var I = class extends Error {
      name = "UserFacingError";
      code;
      meta;
      constructor(t, r, n) {
        super(t), this.code = r, this.meta = n ?? {};
      }
      toQueryResponseErrorObject() {
        return { error: this.message, user_facing_error: { is_panic: false, message: this.message, meta: this.meta, error_code: this.code } };
      }
    };
    function He(e) {
      if (!wr(e)) throw e;
      let t = up(e), r = ss(e);
      throw !t || !r ? e : new I(r, t, { driverAdapterError: e });
    }
    function An(e) {
      throw wr(e) ? new I(`Raw query failed. Code: \`${e.cause.originalCode ?? "N/A"}\`. Message: \`${e.cause.originalMessage ?? ss(e)}\``, "P2010", { driverAdapterError: e }) : e;
    }
    function up(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return "P1000";
        case "DatabaseNotReachable":
          return "P1001";
        case "DatabaseDoesNotExist":
          return "P1003";
        case "SocketTimeout":
          return "P1008";
        case "DatabaseAlreadyExists":
          return "P1009";
        case "DatabaseAccessDenied":
          return "P1010";
        case "TlsConnectionError":
          return "P1011";
        case "ConnectionClosed":
          return "P1017";
        case "TransactionAlreadyClosed":
          return "P1018";
        case "LengthMismatch":
          return "P2000";
        case "UniqueConstraintViolation":
          return "P2002";
        case "ForeignKeyConstraintViolation":
          return "P2003";
        case "InvalidInputValue":
          return "P2007";
        case "UnsupportedNativeDataType":
          return "P2010";
        case "NullConstraintViolation":
          return "P2011";
        case "ValueOutOfRange":
          return "P2020";
        case "TableDoesNotExist":
          return "P2021";
        case "ColumnNotFound":
          return "P2022";
        case "InvalidIsolationLevel":
        case "InconsistentColumnData":
          return "P2023";
        case "MissingFullTextSearchIndex":
          return "P2030";
        case "TransactionWriteConflict":
          return "P2034";
        case "GenericJs":
          return "P2036";
        case "TooManyConnections":
          return "P2037";
        case "postgres":
        case "sqlite":
        case "mysql":
        case "mssql":
          return;
        default:
          P(e.cause, `Unknown error: ${e.cause}`);
      }
    }
    function ss(e) {
      switch (e.cause.kind) {
        case "AuthenticationFailed":
          return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user ?? "(not available)"}\` are not valid`;
        case "DatabaseNotReachable": {
          let t = e.cause.host && e.cause.port ? `${e.cause.host}:${e.cause.port}` : e.cause.host;
          return `Can't reach database server${t ? ` at ${t}` : ""}`;
        }
        case "DatabaseDoesNotExist":
          return `Database \`${e.cause.db ?? "(not available)"}\` does not exist on the database server`;
        case "SocketTimeout":
          return "Operation has timed out";
        case "DatabaseAlreadyExists":
          return `Database \`${e.cause.db ?? "(not available)"}\` already exists on the database server`;
        case "DatabaseAccessDenied":
          return `User was denied access on the database \`${e.cause.db ?? "(not available)"}\``;
        case "TlsConnectionError":
          return `Error opening a TLS connection: ${e.cause.reason}`;
        case "ConnectionClosed":
          return "Server has closed the connection.";
        case "TransactionAlreadyClosed":
          return e.cause.cause;
        case "LengthMismatch":
          return `The provided value for the column is too long for the column's type. Column: ${e.cause.column ?? "(not available)"}`;
        case "UniqueConstraintViolation":
          return `Unique constraint failed on the ${Sn(e.cause.constraint)}`;
        case "ForeignKeyConstraintViolation":
          return `Foreign key constraint violated on the ${Sn(e.cause.constraint)}`;
        case "UnsupportedNativeDataType":
          return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;
        case "NullConstraintViolation":
          return `Null constraint violation on the ${Sn(e.cause.constraint)}`;
        case "ValueOutOfRange":
          return `Value out of range for the type: ${e.cause.cause}`;
        case "TableDoesNotExist":
          return `The table \`${e.cause.table ?? "(not available)"}\` does not exist in the current database.`;
        case "ColumnNotFound":
          return `The column \`${e.cause.column ?? "(not available)"}\` does not exist in the current database.`;
        case "InvalidIsolationLevel":
          return `Error in connector: Conversion error: ${e.cause.level}`;
        case "InconsistentColumnData":
          return `Inconsistent column data: ${e.cause.cause}`;
        case "MissingFullTextSearchIndex":
          return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";
        case "TransactionWriteConflict":
          return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";
        case "GenericJs":
          return `Error in external connector (id ${e.cause.id})`;
        case "TooManyConnections":
          return `Too many database connections opened: ${e.cause.cause}`;
        case "InvalidInputValue":
          return `Invalid input value: ${e.cause.message}`;
        case "sqlite":
        case "postgres":
        case "mysql":
        case "mssql":
          return;
        default:
          P(e.cause, `Unknown error: ${e.cause}`);
      }
    }
    function Sn(e) {
      return e && "fields" in e ? `fields: (${e.fields.map((t) => `\`${t}\``).join(", ")})` : e && "index" in e ? `constraint: \`${e.index}\`` : e && "foreignKey" in e ? "foreign key" : "(not available)";
    }
    function cp(e) {
      if (typeof e != "object" || e === null) return false;
      let t = e;
      return "$type" in t && t.$type === "Param" || "prisma__type" in t && t.prisma__type === "param";
    }
    function pp(e) {
      return "prisma__type" in e ? e.prisma__value?.name : e.value.name;
    }
    function dp(e, t) {
      let r = {};
      for (let [n, i] of Object.entries(e)) if (r[n] = i, cp(i)) {
        let o = pp(i);
        o && o in t && (r[n] = t[o]);
      }
      return r;
    }
    function as(e, t, r = {}) {
      let n = e.map((o) => t.keys.reduce((s, a) => (s[a] = me(o[a]), s), {})), i = new Set(t.nestedSelection);
      return t.arguments.map((o) => {
        let s = dp(o, r), a = n.findIndex((l) => Je(l, s));
        if (a === -1) return t.expectNonEmpty ? new I("An operation failed because it depends on one or more records that were required but not found", "P2025") : null;
        {
          let l = Object.entries(e[a]).filter(([u]) => i.has(u));
          return Object.fromEntries(l);
        }
      });
    }
    var cs = require_dist();
    var v = class extends I {
      name = "DataMapperError";
      constructor(t, r) {
        super(t, "P2023", r);
      }
    };
    var ls = /* @__PURE__ */ new WeakMap();
    function mp(e) {
      let t = ls.get(e);
      return t || (t = Object.entries(e), ls.set(e, t)), t;
    }
    function ps(e, t, r) {
      switch (t.type) {
        case "affectedRows":
          if (typeof e != "number") throw new v(`Expected an affected rows count, got: ${typeof e} (${e})`);
          return { count: e };
        case "object":
          return Cn(e, t.fields, r, t.skipNulls);
        case "field":
          return vn(e, "<result>", t.fieldType, r);
        default:
          P(t, `Invalid data mapping type: '${t.type}'`);
      }
    }
    function Cn(e, t, r, n) {
      if (e === null) return null;
      if (Array.isArray(e)) {
        let i = e;
        return n && (i = i.filter((o) => o !== null)), i.map((o) => us(o, t, r));
      }
      if (typeof e == "object") return us(e, t, r);
      if (typeof e == "string") {
        let i;
        try {
          i = JSON.parse(e);
        } catch (o) {
          throw new v("Expected an array or object, got a string that is not valid JSON", { cause: o });
        }
        return Cn(i, t, r, n);
      }
      throw new v(`Expected an array or an object, got: ${typeof e}`);
    }
    function us(e, t, r) {
      if (typeof e != "object") throw new v(`Expected an object, but got '${typeof e}'`);
      let n = {};
      for (let [i, o] of mp(t)) switch (o.type) {
        case "affectedRows":
          throw new v(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);
        case "object": {
          let { serializedName: s, fields: a, skipNulls: l } = o;
          if (s !== null && !Object.hasOwn(e, s)) throw new v(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          let u = s !== null ? e[s] : e;
          n[i] = Cn(u, a, r, l);
          break;
        }
        case "field":
          {
            let s = o.dbName;
            if (Object.hasOwn(e, s)) n[i] = fp(e[s], s, o.fieldType, r);
            else throw new v(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);
          }
          break;
        default:
          P(o, `DataMapper: Invalid data mapping node type: '${o.type}'`);
      }
      return n;
    }
    function fp(e, t, r, n) {
      return e === null ? r.arity === "list" ? [] : null : r.arity === "list" ? e.map((o, s) => vn(o, `${t}[${s}]`, r, n)) : vn(e, t, r, n);
    }
    function vn(e, t, r, n) {
      switch (r.type) {
        case "unsupported":
          return e;
        case "string": {
          if (typeof e != "string") throw new v(`Expected a string in column '${t}', got ${typeof e}: ${e}`);
          return e;
        }
        case "int":
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string": {
              let i = Math.trunc(Number(e));
              if (Number.isNaN(i) || !Number.isFinite(i)) throw new v(`Expected an integer in column '${t}', got string: ${e}`);
              if (!Number.isSafeInteger(i)) throw new v(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);
              return i;
            }
            default:
              throw new v(`Expected an integer in column '${t}', got ${typeof e}: ${e}`);
          }
        case "bigint": {
          if (typeof e != "number" && typeof e != "string") throw new v(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "BigInt", value: e };
        }
        case "float": {
          if (typeof e == "number") return e;
          if (typeof e == "string") {
            let i = Number(e);
            if (Number.isNaN(i) && !/^[-+]?nan$/.test(e.toLowerCase())) throw new v(`Expected a float in column '${t}', got string: ${e}`);
            return i;
          }
          throw new v(`Expected a float in column '${t}', got ${typeof e}: ${e}`);
        }
        case "boolean": {
          if (typeof e == "boolean") return e;
          if (typeof e == "number") return e === 1;
          if (typeof e == "string") {
            if (e === "true" || e === "TRUE" || e === "1") return true;
            if (e === "false" || e === "FALSE" || e === "0") return false;
            throw new v(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
          }
          if (Array.isArray(e) || e instanceof Uint8Array) {
            for (let i of e) if (i !== 0) return true;
            return false;
          }
          throw new v(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`);
        }
        case "decimal":
          if (typeof e != "number" && typeof e != "string" && !cs.Decimal.isDecimal(e)) throw new v(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);
          return { $type: "Decimal", value: e };
        case "datetime": {
          if (typeof e == "string") return { $type: "DateTime", value: yp(e) };
          if (typeof e == "number" || e instanceof Date) return { $type: "DateTime", value: e };
          throw new v(`Expected a date in column '${t}', got ${typeof e}: ${e}`);
        }
        case "object":
          return { $type: "Json", value: vt(e) };
        case "json":
          return { $type: "Json", value: `${e}` };
        case "bytes": {
          switch (r.encoding) {
            case "base64":
              if (typeof e != "string") throw new v(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: e };
            case "hex":
              if (typeof e != "string" || !e.startsWith("\\x")) throw new v(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);
              return { $type: "Bytes", value: Buffer.from(e.slice(2), "hex").toString("base64") };
            case "array":
              if (Array.isArray(e)) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
              if (e instanceof Uint8Array) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
              throw new v(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);
            default:
              P(r.encoding, `DataMapper: Unknown bytes encoding: ${r.encoding}`);
          }
          break;
        }
        case "enum": {
          let i = n[r.name];
          if (i === void 0) throw new v(`Unknown enum '${r.name}'`);
          let o = i[`${e}`];
          if (o === void 0) throw new v(`Value '${e}' not found in enum '${r.name}'`);
          return o;
        }
        default:
          P(r, `DataMapper: Unknown result type: ${r.type}`);
      }
    }
    var gp = /\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;
    function yp(e) {
      let t = gp.exec(e);
      if (t === null) return `${e}T00:00:00Z`;
      let r = e, [n, i, o] = t;
      if (i !== void 0 && i !== "Z" && o === void 0 ? r = `${e}:00` : i === void 0 && (r = `${e}Z`), n.length === e.length) return `1970-01-01T${r}`;
      let s = t.index - 1;
      return r[s] === " " && (r = `${r.slice(0, s)}T${r.slice(s + 1)}`), r;
    }
    function Y(e) {
      if (typeof e != "object") return e;
      var t, r, n = Object.prototype.toString.call(e);
      if (n === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
          r = new e.constructor();
          for (t in e) e.hasOwnProperty(t) && r[t] !== e[t] && (r[t] = Y(e[t]));
        } else {
          r = {};
          for (t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: Y(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = Y(e[t]);
        }
        return r;
      }
      if (n === "[object Array]") {
        for (t = e.length, r = Array(t); t--; ) r[t] = Y(e[t]);
        return r;
      }
      return n === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(i) {
        r.add(Y(i));
      }), r) : n === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(i, o) {
        r.set(Y(o), Y(i));
      }), r) : n === "[object Date]" ? /* @__PURE__ */ new Date(+e) : n === "[object RegExp]" ? (r = new RegExp(e.source, e.flags), r.lastIndex = e.lastIndex, r) : n === "[object DataView]" ? new e.constructor(Y(e.buffer)) : n === "[object ArrayBuffer]" ? e.slice(0) : n.slice(-6) === "Array]" ? new e.constructor(e) : e;
    }
    function hp(e) {
      let t = Object.entries(e);
      return t.length === 0 ? "" : (t.sort(([n], [i]) => n.localeCompare(i)), `/*${t.map(([n, i]) => {
        let o = encodeURIComponent(n), s = encodeURIComponent(i).replace(/'/g, "\\'");
        return `${o}='${s}'`;
      }).join(",")}*/`);
    }
    function br(e, t) {
      let r = {};
      for (let n of e) {
        let i = n(Y(t));
        for (let [o, s] of Object.entries(i)) s !== void 0 && (r[o] = s);
      }
      return r;
    }
    function ds(e, t) {
      let r = br(e, t);
      return hp(r);
    }
    function ms(e, t) {
      return t ? `${e} ${t}` : e;
    }
    var Ct;
    (function(e) {
      e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
    })(Ct || (Ct = {}));
    function wp(e) {
      switch (e) {
        case "postgresql":
        case "postgres":
        case "prisma+postgres":
          return "postgresql";
        case "sqlserver":
          return "mssql";
        case "mysql":
        case "sqlite":
        case "cockroachdb":
        case "mongodb":
          return e;
        default:
          P(e, `Unknown provider: ${e}`);
      }
    }
    async function xr({ query: e, tracingHelper: t, provider: r, onQuery: n, execute: i }) {
      let o = n === void 0 ? i : async () => {
        let s = /* @__PURE__ */ new Date(), a = performance.now(), l = await i(), u = performance.now();
        return n({ timestamp: s, duration: u - a, query: e.sql, params: e.args }), l;
      };
      return t.isEnabled() ? await t.runInChildSpan({ name: "db_query", kind: Ct.CLIENT, attributes: { "db.query.text": e.sql, "db.system.name": wp(r) } }, o) : o();
    }
    function Pe(e, t) {
      var r = "000000000" + e;
      return r.substr(r.length - t);
    }
    var fs = U(__require("os"), 1);
    function bp() {
      try {
        return fs.default.hostname();
      } catch {
        return process.env._CLUSTER_NETWORK_NAME_ || process.env.COMPUTERNAME || "hostname";
      }
    }
    var gs = 2;
    var xp = Pe(process.pid.toString(36), gs);
    var ys = bp();
    var Ep = ys.length;
    var Pp = Pe(ys.split("").reduce(function(e, t) {
      return +e + t.charCodeAt(0);
    }, +Ep + 36).toString(36), gs);
    function Rn() {
      return xp + Pp;
    }
    function Er(e) {
      return typeof e == "string" && /^c[a-z0-9]{20,32}$/.test(e);
    }
    function kn(e) {
      let n = Math.pow(36, 4), i = 0;
      function o() {
        return Pe((Math.random() * n << 0).toString(36), 4);
      }
      function s() {
        return i = i < n ? i : 0, i++, i - 1;
      }
      function a() {
        var l = "c", u = (/* @__PURE__ */ new Date()).getTime().toString(36), c = Pe(s().toString(36), 4), p = e(), d = o() + o();
        return l + u + c + p + d;
      }
      return a.fingerprint = e, a.isCuid = Er, a;
    }
    var Tp = kn(Rn);
    var hs = Tp;
    var ya = U(aa());
    var $n = __require("crypto");
    var la = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var ud = 128;
    var Se;
    var We;
    function cd(e) {
      !Se || Se.length < e ? (Se = Buffer.allocUnsafe(e * ud), $n.webcrypto.getRandomValues(Se), We = 0) : We + e > Se.length && ($n.webcrypto.getRandomValues(Se), We = 0), We += e;
    }
    function Vn(e = 21) {
      cd(e |= 0);
      let t = "";
      for (let r = We - e; r < We; r++) t += la[Se[r] & 63];
      return t;
    }
    var Dt = U(__require("crypto"), 1);
    var ca = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    var Ft = 32;
    var pd = 16;
    var pa = 10;
    var ua = 281474976710655;
    var Ae;
    (function(e) {
      e.Base32IncorrectEncoding = "B32_ENC_INVALID", e.DecodeTimeInvalidCharacter = "DEC_TIME_CHAR", e.DecodeTimeValueMalformed = "DEC_TIME_MALFORMED", e.EncodeTimeNegative = "ENC_TIME_NEG", e.EncodeTimeSizeExceeded = "ENC_TIME_SIZE_EXCEED", e.EncodeTimeValueMalformed = "ENC_TIME_MALFORMED", e.PRNGDetectFailure = "PRNG_DETECT", e.ULIDInvalid = "ULID_INVALID", e.Unexpected = "UNEXPECTED", e.UUIDInvalid = "UUID_INVALID";
    })(Ae || (Ae = {}));
    var ve = class extends Error {
      constructor(t, r) {
        super(`${r} (${t})`), this.name = "ULIDError", this.code = t;
      }
    };
    function dd(e) {
      let t = Math.floor(e() * Ft);
      return t === Ft && (t = Ft - 1), ca.charAt(t);
    }
    function md(e) {
      let t = fd(), r = t && (t.crypto || t.msCrypto) || (typeof Dt.default < "u" ? Dt.default : null);
      if (typeof r?.getRandomValues == "function") return () => {
        let n = new Uint8Array(1);
        return r.getRandomValues(n), n[0] / 255;
      };
      if (typeof r?.randomBytes == "function") return () => r.randomBytes(1).readUInt8() / 255;
      if (Dt.default?.randomBytes) return () => Dt.default.randomBytes(1).readUInt8() / 255;
      throw new ve(Ae.PRNGDetectFailure, "Failed to find a reliable PRNG");
    }
    function fd() {
      return hd() ? self : typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : null;
    }
    function gd(e, t) {
      let r = "";
      for (; e > 0; e--) r = dd(t) + r;
      return r;
    }
    function yd(e, t = pa) {
      if (isNaN(e)) throw new ve(Ae.EncodeTimeValueMalformed, `Time must be a number: ${e}`);
      if (e > ua) throw new ve(Ae.EncodeTimeSizeExceeded, `Cannot encode a time larger than ${ua}: ${e}`);
      if (e < 0) throw new ve(Ae.EncodeTimeNegative, `Time must be positive: ${e}`);
      if (Number.isInteger(e) === false) throw new ve(Ae.EncodeTimeValueMalformed, `Time must be an integer: ${e}`);
      let r, n = "";
      for (let i = t; i > 0; i--) r = e % Ft, n = ca.charAt(r) + n, e = (e - r) / Ft;
      return n;
    }
    function hd() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    function da(e, t) {
      let r = t || md(), n = !e || isNaN(e) ? Date.now() : e;
      return yd(n, pa) + gd(pd, r);
    }
    var O = [];
    for (let e = 0; e < 256; ++e) O.push((e + 256).toString(16).slice(1));
    function Ar(e, t = 0) {
      return (O[e[t + 0]] + O[e[t + 1]] + O[e[t + 2]] + O[e[t + 3]] + "-" + O[e[t + 4]] + O[e[t + 5]] + "-" + O[e[t + 6]] + O[e[t + 7]] + "-" + O[e[t + 8]] + O[e[t + 9]] + "-" + O[e[t + 10]] + O[e[t + 11]] + O[e[t + 12]] + O[e[t + 13]] + O[e[t + 14]] + O[e[t + 15]]).toLowerCase();
    }
    var ma = __require("crypto");
    var Cr = new Uint8Array(256);
    var vr = Cr.length;
    function Ke() {
      return vr > Cr.length - 16 && ((0, ma.randomFillSync)(Cr), vr = 0), Cr.slice(vr, vr += 16);
    }
    var fa = __require("crypto");
    var qn = { randomUUID: fa.randomUUID };
    function wd(e, t, r) {
      if (qn.randomUUID && !t && !e) return qn.randomUUID();
      e = e || {};
      let n = e.random ?? e.rng?.() ?? Ke();
      if (n.length < 16) throw new Error("Random bytes length must be >= 16");
      if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
        if (r = r || 0, r < 0 || r + 16 > t.length) throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
        for (let i = 0; i < 16; ++i) t[r + i] = n[i];
        return t;
      }
      return Ar(n);
    }
    var jn = wd;
    var Un = {};
    function bd(e, t, r) {
      let n;
      if (e) n = ga(e.random ?? e.rng?.() ?? Ke(), e.msecs, e.seq, t, r);
      else {
        let i = Date.now(), o = Ke();
        xd(Un, i, o), n = ga(o, Un.msecs, Un.seq, t, r);
      }
      return t ?? Ar(n);
    }
    function xd(e, t, r) {
      return e.msecs ??= -1 / 0, e.seq ??= 0, t > e.msecs ? (e.seq = r[6] << 23 | r[7] << 16 | r[8] << 8 | r[9], e.msecs = t) : (e.seq = e.seq + 1 | 0, e.seq === 0 && e.msecs++), e;
    }
    function ga(e, t, r, n, i = 0) {
      if (e.length < 16) throw new Error("Random bytes length must be >= 16");
      if (!n) n = new Uint8Array(16), i = 0;
      else if (i < 0 || i + 16 > n.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
      return t ??= Date.now(), r ??= e[6] * 127 << 24 | e[7] << 16 | e[8] << 8 | e[9], n[i++] = t / 1099511627776 & 255, n[i++] = t / 4294967296 & 255, n[i++] = t / 16777216 & 255, n[i++] = t / 65536 & 255, n[i++] = t / 256 & 255, n[i++] = t & 255, n[i++] = 112 | r >>> 28 & 15, n[i++] = r >>> 20 & 255, n[i++] = 128 | r >>> 14 & 63, n[i++] = r >>> 6 & 255, n[i++] = r << 2 & 255 | e[10] & 3, n[i++] = e[11], n[i++] = e[12], n[i++] = e[13], n[i++] = e[14], n[i++] = e[15], n;
    }
    var Bn = bd;
    var Rr = class {
      #e = {};
      constructor() {
        this.register("uuid", new Jn()), this.register("cuid", new Hn()), this.register("ulid", new Gn()), this.register("nanoid", new zn()), this.register("product", new Wn());
      }
      snapshot() {
        return Object.create(this.#e, { now: { value: new Qn() } });
      }
      register(t, r) {
        this.#e[t] = r;
      }
    };
    var Qn = class {
      #e = /* @__PURE__ */ new Date();
      generate() {
        return this.#e.toISOString();
      }
    };
    var Jn = class {
      generate(t) {
        if (t === 4) return jn();
        if (t === 7) return Bn();
        throw new Error("Invalid UUID generator arguments");
      }
    };
    var Hn = class {
      generate(t) {
        if (t === 1) return hs();
        if (t === 2) return (0, ya.createId)();
        throw new Error("Invalid CUID generator arguments");
      }
    };
    var Gn = class {
      generate() {
        return da();
      }
    };
    var zn = class {
      generate(t) {
        if (typeof t == "number") return Vn(t);
        if (t === void 0) return Vn();
        throw new Error("Invalid Nanoid generator arguments");
      }
    };
    var Wn = class {
      generate(t, r) {
        if (t === void 0 || r === void 0) throw new Error("Invalid Product generator arguments");
        return Array.isArray(t) && Array.isArray(r) ? t.flatMap((n) => r.map((i) => [n, i])) : Array.isArray(t) ? t.map((n) => [n, r]) : Array.isArray(r) ? r.map((n) => [t, n]) : [[t, r]];
      }
    };
    function kr(e, t) {
      return e == null ? e : typeof e == "string" ? kr(JSON.parse(e), t) : Array.isArray(e) ? Pd(e, t) : Ed(e, t);
    }
    function Ed(e, t) {
      if (t.pagination) {
        let { skip: r, take: n, cursor: i } = t.pagination;
        if (r !== null && r > 0 || n === 0 || i !== null && !Je(e, i)) return null;
      }
      return wa(e, t.nested);
    }
    function wa(e, t) {
      for (let [r, n] of Object.entries(t)) e[r] = kr(e[r], n);
      return e;
    }
    function Pd(e, t) {
      if (t.distinct !== null) {
        let r = t.linkingFields !== null ? [...t.distinct, ...t.linkingFields] : t.distinct;
        e = Td(e, r);
      }
      return t.pagination && (e = Sd(e, t.pagination, t.linkingFields)), t.reverse && e.reverse(), Object.keys(t.nested).length === 0 ? e : e.map((r) => wa(r, t.nested));
    }
    function Td(e, t) {
      let r = /* @__PURE__ */ new Set(), n = [];
      for (let i of e) {
        let o = Ze(i, t);
        r.has(o) || (r.add(o), n.push(i));
      }
      return n;
    }
    function Sd(e, t, r) {
      if (r === null) return ha(e, t);
      let n = /* @__PURE__ */ new Map();
      for (let o of e) {
        let s = Ze(o, r);
        n.has(s) || n.set(s, []), n.get(s).push(o);
      }
      let i = Array.from(n.entries());
      return i.sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0), i.flatMap(([, o]) => ha(o, t));
    }
    function ha(e, { cursor: t, skip: r, take: n }) {
      let i = t !== null ? e.findIndex((a) => Je(a, t)) : 0;
      if (i === -1) return [];
      let o = i + (r ?? 0), s = n !== null ? o + n : e.length;
      return e.slice(o, s);
    }
    function Ze(e, t) {
      return JSON.stringify(t.map((r) => e[r]));
    }
    function Kn(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "param";
    }
    function Zn(e) {
      return typeof e == "object" && e !== null && e.prisma__type === "generatorCall";
    }
    function ei(e, t, r, n) {
      let i = e.args.map((o) => G(o, t, r));
      switch (e.type) {
        case "rawSql":
          return [Cd(e.sql, i, e.argTypes)];
        case "templateSql":
          return (e.chunkable ? kd(e.fragments, i, n) : [i]).map((s) => {
            if (n !== void 0 && s.length > n) throw new I("The query parameter limit supported by your database is exceeded.", "P2029");
            return Ad(e.fragments, e.placeholderFormat, s, e.argTypes);
          });
        default:
          P(e.type, "Invalid query type");
      }
    }
    function G(e, t, r) {
      for (; Rd(e); ) if (Kn(e)) {
        let n = t[e.prisma__value.name];
        if (n === void 0) throw new Error(`Missing value for query variable ${e.prisma__value.name}`);
        e = n;
      } else if (Zn(e)) {
        let { name: n, args: i } = e.prisma__value, o = r[n];
        if (!o) throw new Error(`Encountered an unknown generator '${n}'`);
        e = o.generate(...i.map((s) => G(s, t, r)));
      } else P(e, `Unexpected unevaluated value type: ${e}`);
      return Array.isArray(e) && (e = e.map((n) => G(n, t, r))), e;
    }
    function Ad(e, t, r, n) {
      let i = "", o = { placeholderNumber: 1 }, s = [], a = [];
      for (let l of Xn(e, r, n)) {
        if (i += vd(l, t, o), l.type === "stringChunk") continue;
        let u = s.length, c = s.push(...ba(l)) - u;
        if (l.argType.arity === "tuple") {
          if (c % l.argType.elements.length !== 0) throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${c} parameters for a tuple of arity ${l.argType.elements.length}.`);
          for (let p = 0; p < c / l.argType.elements.length; p++) a.push(...l.argType.elements);
        } else for (let p = 0; p < c; p++) a.push(l.argType);
      }
      return { sql: i, args: s, argTypes: a };
    }
    function vd(e, t, r) {
      let n = e.type;
      switch (n) {
        case "parameter":
          return Yn(t, r.placeholderNumber++);
        case "stringChunk":
          return e.chunk;
        case "parameterTuple":
          return `(${e.value.length == 0 ? "NULL" : e.value.map(() => Yn(t, r.placeholderNumber++)).join(",")})`;
        case "parameterTupleList":
          return e.value.map((i) => {
            let o = i.map(() => Yn(t, r.placeholderNumber++)).join(e.itemSeparator);
            return `${e.itemPrefix}${o}${e.itemSuffix}`;
          }).join(e.groupSeparator);
        default:
          P(n, "Invalid fragment type");
      }
    }
    function Yn(e, t) {
      return e.hasNumbering ? `${e.prefix}${t}` : e.prefix;
    }
    function Cd(e, t, r) {
      return { sql: e, args: t, argTypes: r };
    }
    function Rd(e) {
      return Kn(e) || Zn(e);
    }
    function* Xn(e, t, r) {
      let n = 0;
      for (let i of e) switch (i.type) {
        case "parameter": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          yield { ...i, value: t[n], argType: r?.[n] }, n++;
          break;
        }
        case "stringChunk": {
          yield i;
          break;
        }
        case "parameterTuple": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          yield { ...i, value: Array.isArray(o) ? o : [o], argType: r?.[n] }, n++;
          break;
        }
        case "parameterTupleList": {
          if (n >= t.length) throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);
          let o = t[n];
          if (!Array.isArray(o)) throw new Error("Malformed query template. Tuple list expected.");
          if (o.length === 0) throw new Error("Malformed query template. Tuple list cannot be empty.");
          for (let s of o) if (!Array.isArray(s)) throw new Error("Malformed query template. Tuple expected.");
          yield { ...i, value: o, argType: r?.[n] }, n++;
          break;
        }
      }
    }
    function* ba(e) {
      switch (e.type) {
        case "parameter":
          yield e.value;
          break;
        case "stringChunk":
          break;
        case "parameterTuple":
          yield* e.value;
          break;
        case "parameterTupleList":
          for (let t of e.value) yield* t;
          break;
      }
    }
    function kd(e, t, r) {
      let n = 0, i = 0;
      for (let s of Xn(e, t, void 0)) {
        let a = 0;
        for (let l of ba(s)) a++;
        i = Math.max(i, a), n += a;
      }
      let o = [[]];
      for (let s of Xn(e, t, void 0)) switch (s.type) {
        case "parameter": {
          for (let a of o) a.push(s.value);
          break;
        }
        case "stringChunk":
          break;
        case "parameterTuple": {
          let a = s.value.length, l = [];
          if (r && o.length === 1 && a === i && n > r && n - a < r) {
            let u = r - (n - a);
            l = Id(s.value, u);
          } else l = [s.value];
          o = o.flatMap((u) => l.map((c) => [...u, c]));
          break;
        }
        case "parameterTupleList": {
          let a = s.value.reduce((p, d) => p + d.length, 0), l = [], u = [], c = 0;
          for (let p of s.value) r && o.length === 1 && a === i && u.length > 0 && n - a + c + p.length > r && (l.push(u), u = [], c = 0), u.push(p), c += p.length;
          u.length > 0 && l.push(u), o = o.flatMap((p) => l.map((d) => [...p, d]));
          break;
        }
      }
      return o;
    }
    function Id(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n += t) r.push(e.slice(n, n + t));
      return r;
    }
    function xa(e) {
      return e.rows.map((t) => t.reduce((r, n, i) => (r[e.columnNames[i]] = n, r), {}));
    }
    function Ea(e) {
      return { columns: e.columnNames, types: e.columnTypes.map((t) => Od(t)), rows: e.rows.map((t) => t.map((r, n) => Mt(r, e.columnTypes[n]))) };
    }
    function Mt(e, t) {
      if (e === null) return null;
      switch (t) {
        case m.Int32:
          switch (typeof e) {
            case "number":
              return Math.trunc(e);
            case "string":
              return Math.trunc(Number(e));
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int32`);
          }
        case m.Int32Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);
          return e.map((r) => Mt(r, m.Int32));
        case m.Int64:
          switch (typeof e) {
            case "number":
              return BigInt(Math.trunc(e));
            case "string":
              return e;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Int64`);
          }
        case m.Int64Array:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);
          return e.map((r) => Mt(r, m.Int64));
        case m.Json:
          switch (typeof e) {
            case "string":
              return JSON.parse(e);
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Json`);
          }
        case m.JsonArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);
          return e.map((r) => Mt(r, m.Json));
        case m.Boolean:
          switch (typeof e) {
            case "boolean":
              return e;
            case "string":
              return e === "true" || e === "1";
            case "number":
              return e === 1;
            default:
              throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`);
          }
        case m.BooleanArray:
          if (!Array.isArray(e)) throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);
          return e.map((r) => Mt(r, m.Boolean));
        default:
          return e;
      }
    }
    function Od(e) {
      switch (e) {
        case m.Int32:
          return "int";
        case m.Int64:
          return "bigint";
        case m.Float:
          return "float";
        case m.Double:
          return "double";
        case m.Text:
          return "string";
        case m.Enum:
          return "enum";
        case m.Bytes:
          return "bytes";
        case m.Boolean:
          return "bool";
        case m.Character:
          return "char";
        case m.Numeric:
          return "decimal";
        case m.Json:
          return "json";
        case m.Uuid:
          return "uuid";
        case m.DateTime:
          return "datetime";
        case m.Date:
          return "date";
        case m.Time:
          return "time";
        case m.Int32Array:
          return "int-array";
        case m.Int64Array:
          return "bigint-array";
        case m.FloatArray:
          return "float-array";
        case m.DoubleArray:
          return "double-array";
        case m.TextArray:
          return "string-array";
        case m.EnumArray:
          return "string-array";
        case m.BytesArray:
          return "bytes-array";
        case m.BooleanArray:
          return "bool-array";
        case m.CharacterArray:
          return "char-array";
        case m.NumericArray:
          return "decimal-array";
        case m.JsonArray:
          return "json-array";
        case m.UuidArray:
          return "uuid-array";
        case m.DateTimeArray:
          return "datetime-array";
        case m.DateArray:
          return "date-array";
        case m.TimeArray:
          return "time-array";
        case m.UnknownNumber:
          return "unknown";
        case m.Set:
          return "string";
        default:
          P(e, `Unexpected column type: ${e}`);
      }
    }
    function Pa(e, t, r) {
      if (!t.every((n) => ti(e, n))) {
        let n = Nd(e, r), i = Dd(r);
        throw new I(n, i, r.context);
      }
    }
    function ti(e, t) {
      switch (t.type) {
        case "rowCountEq":
          return Array.isArray(e) ? e.length === t.args : e === null ? t.args === 0 : t.args === 1;
        case "rowCountNeq":
          return Array.isArray(e) ? e.length !== t.args : e === null ? t.args !== 0 : t.args !== 1;
        case "affectedRowCountEq":
          return e === t.args;
        case "never":
          return false;
        default:
          P(t, `Unknown rule type: ${t.type}`);
      }
    }
    function Nd(e, t) {
      switch (t.error_identifier) {
        case "RELATION_VIOLATION":
          return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;
        case "MISSING_RECORD":
          return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;
        case "MISSING_RELATED_RECORD": {
          let r = t.context.neededFor ? ` (needed to ${t.context.neededFor})` : "";
          return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`;
        }
        case "INCOMPLETE_CONNECT_INPUT":
          return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e) ? e.length : e}.`;
        case "INCOMPLETE_CONNECT_OUTPUT":
          return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e) ? e.length : e}.`;
        case "RECORDS_NOT_CONNECTED":
          return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;
        default:
          P(t, `Unknown error identifier: ${t}`);
      }
    }
    function Dd(e) {
      switch (e.error_identifier) {
        case "RELATION_VIOLATION":
          return "P2014";
        case "RECORDS_NOT_CONNECTED":
          return "P2017";
        case "INCOMPLETE_CONNECT_OUTPUT":
          return "P2018";
        case "MISSING_RECORD":
        case "MISSING_RELATED_RECORD":
        case "INCOMPLETE_CONNECT_INPUT":
          return "P2025";
        default:
          P(e, `Unknown error identifier: ${e}`);
      }
    }
    var _t = class e {
      #e;
      #t = new Rr();
      #r;
      #n;
      #i;
      #o;
      #a;
      constructor({ onQuery: t, tracingHelper: r, serializer: n, rawSerializer: i, provider: o, connectionInfo: s }) {
        this.#e = t, this.#r = r, this.#n = n, this.#i = i ?? n, this.#o = o, this.#a = s;
      }
      static forSql(t) {
        return new e({ onQuery: t.onQuery, tracingHelper: t.tracingHelper, serializer: xa, rawSerializer: Ea, provider: t.provider, connectionInfo: t.connectionInfo });
      }
      async run(t, r) {
        let { value: n } = await this.interpretNode(t, { ...r, generators: this.#t.snapshot() }).catch((i) => He(i));
        return n;
      }
      async interpretNode(t, r) {
        switch (t.type) {
          case "value":
            return { value: G(t.args, r.scope, r.generators) };
          case "seq": {
            let n;
            for (let i of t.args) n = await this.interpretNode(i, r);
            return n ?? { value: void 0 };
          }
          case "get":
            return { value: r.scope[t.args.name] };
          case "let": {
            let n = Object.create(r.scope);
            for (let i of t.args.bindings) {
              let { value: o } = await this.interpretNode(i.expr, { ...r, scope: n });
              n[i.name] = o;
            }
            return this.interpretNode(t.args.expr, { ...r, scope: n });
          }
          case "getFirstNonEmpty": {
            for (let n of t.args.names) {
              let i = r.scope[n];
              if (!Ta(i)) return { value: i };
            }
            return { value: [] };
          }
          case "concat": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => i.concat(ri(o)), []) : [] };
          }
          case "sum": {
            let n = await Promise.all(t.args.map((i) => this.interpretNode(i, r).then((o) => o.value)));
            return { value: n.length > 0 ? n.reduce((i, o) => X(i) + X(o)) : 0 };
          }
          case "execute": {
            let n = ei(t.args, r.scope, r.generators, this.#s()), i = 0;
            for (let o of n) {
              let s = Sa(o, r.sqlCommenter);
              i += await this.#l(s, r.queryable, () => r.queryable.executeRaw(s).catch((a) => t.args.type === "rawSql" ? An(a) : He(a)));
            }
            return { value: i };
          }
          case "query": {
            let n = ei(t.args, r.scope, r.generators, this.#s()), i;
            for (let o of n) {
              let s = Sa(o, r.sqlCommenter), a = await this.#l(s, r.queryable, () => r.queryable.queryRaw(s).catch((l) => t.args.type === "rawSql" ? An(l) : He(l)));
              i === void 0 ? i = a : (i.rows.push(...a.rows), i.lastInsertId = a.lastInsertId);
            }
            return { value: t.args.type === "rawSql" ? this.#i(i) : this.#n(i), lastInsertId: i?.lastInsertId };
          }
          case "reverse": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            return { value: Array.isArray(n) ? n.reverse() : n, lastInsertId: i };
          }
          case "unique": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (!Array.isArray(n)) return { value: n, lastInsertId: i };
            if (n.length > 1) throw new Error(`Expected zero or one element, got ${n.length}`);
            return { value: n[0] ?? null, lastInsertId: i };
          }
          case "required": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args, r);
            if (Ta(n)) throw new Error("Required value is empty");
            return { value: n, lastInsertId: i };
          }
          case "mapField": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.records, r);
            return { value: Aa(n, t.args.field), lastInsertId: i };
          }
          case "join": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.parent, r);
            if (n === null) return { value: null, lastInsertId: i };
            let o = await Promise.all(t.args.children.map(async (s) => ({ joinExpr: s, childRecords: (await this.interpretNode(s.child, r)).value })));
            return { value: Fd(n, o), lastInsertId: i };
          }
          case "transaction": {
            if (!r.transactionManager.enabled) return this.interpretNode(t.args, r);
            let n = r.transactionManager.manager, i = await n.startInternalTransaction(), o = await n.getTransaction(i, "query");
            try {
              let s = await this.interpretNode(t.args, { ...r, queryable: o });
              return await n.commitTransaction(i.id), s;
            } catch (s) {
              throw await n.rollbackTransaction(i.id), s;
            }
          }
          case "dataMap": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return { value: ps(n, t.args.structure, t.args.enums), lastInsertId: i };
          }
          case "validate": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return Pa(n, t.args.rules, t.args), { value: n, lastInsertId: i };
          }
          case "if": {
            let { value: n } = await this.interpretNode(t.args.value, r);
            return ti(n, t.args.rule) ? await this.interpretNode(t.args.then, r) : await this.interpretNode(t.args.else, r);
          }
          case "unit":
            return { value: void 0 };
          case "diff": {
            let { value: n } = await this.interpretNode(t.args.from, r), { value: i } = await this.interpretNode(t.args.to, r), o = (a) => a !== null ? Ze(Ir(a), t.args.fields) : null, s = new Set(ri(i).map(o));
            return { value: ri(n).filter((a) => !s.has(o(a))) };
          }
          case "process": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r);
            return { value: kr(n, t.args.operations), lastInsertId: i };
          }
          case "initializeRecord": {
            let { lastInsertId: n } = await this.interpretNode(t.args.expr, r), i = {};
            for (let [o, s] of Object.entries(t.args.fields)) i[o] = Md(s, n, r.scope, r.generators);
            return { value: i, lastInsertId: n };
          }
          case "mapRecord": {
            let { value: n, lastInsertId: i } = await this.interpretNode(t.args.expr, r), o = n === null ? {} : Ir(n);
            for (let [s, a] of Object.entries(t.args.fields)) o[s] = _d(a, o[s], r.scope, r.generators);
            return { value: o, lastInsertId: i };
          }
          default:
            P(t, `Unexpected node type: ${t.type}`);
        }
      }
      #s() {
        return this.#a?.maxBindValues !== void 0 ? this.#a.maxBindValues : this.#u();
      }
      #u() {
        if (this.#o !== void 0) switch (this.#o) {
          case "cockroachdb":
          case "postgres":
          case "postgresql":
          case "prisma+postgres":
            return 32766;
          case "mysql":
            return 65535;
          case "sqlite":
            return 999;
          case "sqlserver":
            return 2098;
          case "mongodb":
            return;
          default:
            P(this.#o, `Unexpected provider: ${this.#o}`);
        }
      }
      #l(t, r, n) {
        return xr({ query: t, execute: n, provider: this.#o ?? r.provider, tracingHelper: this.#r, onQuery: this.#e });
      }
    };
    function Ta(e) {
      return Array.isArray(e) ? e.length === 0 : e == null;
    }
    function ri(e) {
      return Array.isArray(e) ? e : [e];
    }
    function X(e) {
      if (typeof e == "number") return e;
      if (typeof e == "string") return Number(e);
      throw new Error(`Expected number, got ${typeof e}`);
    }
    function Ir(e) {
      if (typeof e == "object" && e !== null) return e;
      throw new Error(`Expected object, got ${typeof e}`);
    }
    function Aa(e, t) {
      return Array.isArray(e) ? e.map((r) => Aa(r, t)) : typeof e == "object" && e !== null ? e[t] ?? null : e;
    }
    function Fd(e, t) {
      for (let { joinExpr: r, childRecords: n } of t) {
        let i = r.on.map(([a]) => a), o = r.on.map(([, a]) => a), s = {};
        for (let a of Array.isArray(e) ? e : [e]) {
          let l = Ir(a), u = Ze(l, i);
          s[u] || (s[u] = []), s[u].push(l), r.isRelationUnique ? l[r.parentField] = null : l[r.parentField] = [];
        }
        for (let a of Array.isArray(n) ? n : [n]) {
          if (a === null) continue;
          let l = Ze(Ir(a), o);
          for (let u of s[l] ?? []) r.isRelationUnique ? u[r.parentField] = a : u[r.parentField].push(a);
        }
      }
      return e;
    }
    function Md(e, t, r, n) {
      switch (e.type) {
        case "value":
          return G(e.value, r, n);
        case "lastInsertId":
          return t;
        default:
          P(e, `Unexpected field initializer type: ${e.type}`);
      }
    }
    function _d(e, t, r, n) {
      switch (e.type) {
        case "set":
          return G(e.value, r, n);
        case "add":
          return X(t) + X(G(e.value, r, n));
        case "subtract":
          return X(t) - X(G(e.value, r, n));
        case "multiply":
          return X(t) * X(G(e.value, r, n));
        case "divide": {
          let i = X(t), o = X(G(e.value, r, n));
          return o === 0 ? null : i / o;
        }
        default:
          P(e, `Unexpected field operation type: ${e.type}`);
      }
    }
    function Sa(e, t) {
      if (!t || t.plugins.length === 0) return e;
      let r = ds(t.plugins, { query: t.queryInfo, sql: e.sql });
      return r ? { ...e, sql: ms(e.sql, r) } : e;
    }
    async function Ld() {
      return globalThis.crypto ?? await import("crypto");
    }
    async function va() {
      return (await Ld()).randomUUID();
    }
    async function Ca(e, t) {
      return new Promise((r) => {
        e.addEventListener(t, r, { once: true });
      });
    }
    var B = class extends I {
      name = "TransactionManagerError";
      constructor(t, r) {
        super("Transaction API error: " + t, "P2028", r);
      }
    };
    var Lt = class extends B {
      constructor() {
        super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");
      }
    };
    var Or = class extends B {
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);
      }
    };
    var Nr = class extends B {
      constructor(t) {
        super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);
      }
    };
    var Dr = class extends B {
      constructor() {
        super("Unable to start a transaction in the given time.");
      }
    };
    var Fr = class extends B {
      constructor(t, { timeout: r, timeTaken: n }) {
        super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`, { operation: t, timeout: r, timeTaken: n });
      }
    };
    var Ye = class extends B {
      constructor(t) {
        super(`Internal Consistency Error: ${t}`);
      }
    };
    var Mr = class extends B {
      constructor(t) {
        super(`Invalid isolation level: ${t}`, { isolationLevel: t });
      }
    };
    var $d = 100;
    var Xe = F("prisma:client:transactionManager");
    var Vd = () => ({ sql: "COMMIT", args: [], argTypes: [] });
    var qd = () => ({ sql: "ROLLBACK", args: [], argTypes: [] });
    var jd = () => ({ sql: '-- Implicit "COMMIT" query via underlying driver', args: [], argTypes: [] });
    var Ud = () => ({ sql: '-- Implicit "ROLLBACK" query via underlying driver', args: [], argTypes: [] });
    var $t = class {
      transactions = /* @__PURE__ */ new Map();
      closedTransactions = [];
      driverAdapter;
      transactionOptions;
      tracingHelper;
      #e;
      #t;
      constructor({ driverAdapter: t, transactionOptions: r, tracingHelper: n, onQuery: i, provider: o }) {
        this.driverAdapter = t, this.transactionOptions = r, this.tracingHelper = n, this.#e = i, this.#t = o;
      }
      async startInternalTransaction(t) {
        let r = t !== void 0 ? this.#a(t) : {};
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async startTransaction(t) {
        let r = t !== void 0 ? this.#a(t) : this.transactionOptions;
        return await this.tracingHelper.runInChildSpan("start_transaction", () => this.#r(r));
      }
      async #r(t) {
        let r = { id: await va(), status: "waiting", timer: void 0, timeout: t.timeout, startedAt: Date.now(), transaction: void 0 }, n = new AbortController(), i = Ra(() => n.abort(), t.maxWait);
        i?.unref?.();
        let o = this.driverAdapter.startTransaction(t.isolationLevel).catch(He);
        switch (r.transaction = await Promise.race([o.finally(() => clearTimeout(i)), Ca(n.signal, "abort").then(() => {
        })]), this.transactions.set(r.id, r), r.status) {
          case "waiting":
            if (n.signal.aborted) throw o.then((s) => s.rollback()).catch((s) => Xe("error in discarded transaction:", s)), await this.#o(r, "timed_out"), new Dr();
            return r.status = "running", r.timer = this.#i(r.id, t.timeout), { id: r.id };
          case "timed_out":
          case "running":
          case "committed":
          case "rolled_back":
            throw new Ye(`Transaction in invalid state ${r.status} although it just finished startup.`);
          default:
            P(r.status, "Unknown transaction status.");
        }
      }
      async commitTransaction(t) {
        return await this.tracingHelper.runInChildSpan("commit_transaction", async () => {
          let r = this.#n(t, "commit");
          await this.#o(r, "committed");
        });
      }
      async rollbackTransaction(t) {
        return await this.tracingHelper.runInChildSpan("rollback_transaction", async () => {
          let r = this.#n(t, "rollback");
          await this.#o(r, "rolled_back");
        });
      }
      async getTransaction(t, r) {
        let n = this.#n(t.id, r);
        if (n.status === "closing" && (await n.closing, n = this.#n(t.id, r)), !n.transaction) throw new Lt();
        return n.transaction;
      }
      #n(t, r) {
        let n = this.transactions.get(t);
        if (!n) {
          let i = this.closedTransactions.find((o) => o.id === t);
          if (i) switch (Xe("Transaction already closed.", { transactionId: t, status: i.status }), i.status) {
            case "closing":
            case "waiting":
            case "running":
              throw new Ye("Active transaction found in closed transactions list.");
            case "committed":
              throw new Or(r);
            case "rolled_back":
              throw new Nr(r);
            case "timed_out":
              throw new Fr(r, { timeout: i.timeout, timeTaken: Date.now() - i.startedAt });
          }
          else throw Xe("Transaction not found.", t), new Lt();
        }
        if (["committed", "rolled_back", "timed_out"].includes(n.status)) throw new Ye("Closed transaction found in active transactions map.");
        return n;
      }
      async cancelAllTransactions() {
        await Promise.allSettled([...this.transactions.values()].map((t) => this.#o(t, "rolled_back")));
      }
      #i(t, r) {
        let n = Date.now(), i = Ra(async () => {
          Xe("Transaction timed out.", { transactionId: t, timeoutStartedAt: n, timeout: r });
          let o = this.transactions.get(t);
          o && ["running", "waiting"].includes(o.status) ? await this.#o(o, "timed_out") : Xe("Transaction already committed or rolled back when timeout happened.", t);
        }, r);
        return i?.unref?.(), i;
      }
      async #o(t, r) {
        let n = async () => {
          Xe("Closing transaction.", { transactionId: t.id, status: r });
          try {
            if (t.transaction && r === "committed") if (t.transaction.options.usePhantomQuery) await this.#s(jd(), t.transaction, () => t.transaction.commit());
            else {
              let i = Vd();
              await this.#s(i, t.transaction, () => t.transaction.executeRaw(i)).then(() => t.transaction.commit(), (o) => {
                let s = () => Promise.reject(o);
                return t.transaction.rollback().then(s, s);
              });
            }
            else if (t.transaction) if (t.transaction.options.usePhantomQuery) await this.#s(Ud(), t.transaction, () => t.transaction.rollback());
            else {
              let i = qd();
              try {
                await this.#s(i, t.transaction, () => t.transaction.executeRaw(i));
              } finally {
                await t.transaction.rollback();
              }
            }
          } finally {
            t.status = r, clearTimeout(t.timer), t.timer = void 0, this.transactions.delete(t.id), this.closedTransactions.push(t), this.closedTransactions.length > $d && this.closedTransactions.shift();
          }
        };
        t.status === "closing" ? (await t.closing, this.#n(t.id, r === "committed" ? "commit" : "rollback")) : await Object.assign(t, { status: "closing", reason: r, closing: n() }).closing;
      }
      #a(t) {
        if (!t.timeout) throw new B("timeout is required");
        if (!t.maxWait) throw new B("maxWait is required");
        if (t.isolationLevel === "SNAPSHOT") throw new Mr(t.isolationLevel);
        return { ...t, timeout: t.timeout, maxWait: t.maxWait };
      }
      #s(t, r, n) {
        return xr({ query: t, execute: n, provider: this.#t ?? r.provider, tracingHelper: this.tracingHelper, onQuery: this.#e });
      }
    };
    function Ra(e, t) {
      return t !== void 0 ? setTimeout(e, t) : void 0;
    }
    var D = require_dist();
    function ka(e) {
      return new ni(e).deserialize();
    }
    function Bd(e) {
      return Buffer.from(e, "base64url");
    }
    var ni = class {
      #e;
      #t;
      #r = 0;
      constructor(t) {
        this.#e = t;
        let r = Bd(t.graph);
        this.#t = new DataView(r.buffer, r.byteOffset, r.byteLength);
      }
      deserialize() {
        let { inputNodeCount: t, outputNodeCount: r, rootCount: n } = this.#s(), i = this.#u(t), o = this.#l(r), s = this.#p(n);
        return { strings: this.#e.strings, inputNodes: i, outputNodes: o, roots: s };
      }
      #n() {
        let t = 0, r = 0, n;
        do
          n = this.#t.getUint8(this.#r++), t |= (n & 127) << r, r += 7;
        while (n >= 128);
        return t;
      }
      #i() {
        let t = this.#n();
        return t === 0 ? void 0 : t - 1;
      }
      #o() {
        let t = this.#t.getUint8(this.#r);
        return this.#r += 1, t;
      }
      #a() {
        let t = this.#t.getUint16(this.#r, true);
        return this.#r += 2, t;
      }
      #s() {
        let t = this.#n(), r = this.#n(), n = this.#n();
        return { inputNodeCount: t, outputNodeCount: r, rootCount: n };
      }
      #u(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a = this.#n(), l = this.#a(), u = this.#i(), c = this.#i(), d = { flags: this.#o() };
            l !== 0 && (d.scalarMask = l), u !== void 0 && (d.childNodeId = u), c !== void 0 && (d.enumNameIndex = c), o[a] = d;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #l(t) {
        let r = [];
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = {};
          for (let s = 0; s < i; s++) {
            let a = this.#n(), l = this.#i(), u = this.#i(), c = {};
            l !== void 0 && (c.argsNodeId = l), u !== void 0 && (c.outputNodeId = u), o[a] = c;
          }
          r.push({ edges: o });
        }
        return r;
      }
      #p(t) {
        let r = {};
        for (let n = 0; n < t; n++) {
          let i = this.#n(), o = this.#i(), s = this.#i(), a = this.#e.strings[i], l = {};
          o !== void 0 && (l.argsNodeId = o), s !== void 0 && (l.outputNodeId = s), r[a] = l;
        }
        return r;
      }
    };
    var Vt = class e {
      #e;
      #t;
      #r;
      constructor(t, r) {
        this.#e = t, this.#r = r, this.#t = /* @__PURE__ */ new Map();
        for (let n = 0; n < t.strings.length; n++) this.#t.set(t.strings[n], n);
      }
      static deserialize(t, r) {
        let n = ka(t);
        return new e(n, r);
      }
      static fromData(t, r) {
        return new e(t, r);
      }
      root(t) {
        let r = this.#e.roots[t];
        if (r) return { argsNodeId: r.argsNodeId, outputNodeId: r.outputNodeId };
      }
      inputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.inputNodes.length)) return { id: t };
      }
      outputNode(t) {
        if (!(t === void 0 || t < 0 || t >= this.#e.outputNodes.length)) return { id: t };
      }
      inputEdge(t, r) {
        if (!t) return;
        let n = this.#e.inputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { flags: o.flags, childNodeId: o.childNodeId, scalarMask: o.scalarMask ?? 0, enumNameIndex: o.enumNameIndex };
      }
      outputEdge(t, r) {
        if (!t) return;
        let n = this.#e.outputNodes[t.id];
        if (!n) return;
        let i = this.#t.get(r);
        if (i === void 0) return;
        let o = n.edges[i];
        if (o) return { argsNodeId: o.argsNodeId, outputNodeId: o.outputNodeId };
      }
      enumValues(t) {
        if (t?.enumNameIndex === void 0) return;
        let r = this.#e.strings[t.enumNameIndex];
        if (r) return this.#r(r);
      }
      getString(t) {
        return this.#e.strings[t];
      }
    };
    var ee = { ParamScalar: 1, ParamEnum: 2, ParamListScalar: 4, ParamListEnum: 8, ListObject: 16, Object: 32 };
    var N = { String: 1, Int: 2, BigInt: 4, Float: 8, Decimal: 16, Boolean: 32, DateTime: 64, Json: 128, Bytes: 256 };
    function te(e, t) {
      return (e.flags & t) !== 0;
    }
    function he(e) {
      return e.scalarMask;
    }
    var _r = "7.4.0";
    var Ia = { bigint: "bigint", date: "datetime", decimal: "decimal", bytes: "bytes" };
    function Na(e) {
      let t;
      try {
        t = JSON.parse(e);
      } catch (i) {
        throw new Error(`Received invalid serialized parameters: ${i.message}`);
      }
      if (!Array.isArray(t)) throw new Error("Received invalid serialized parameters: expected an array");
      let r = t.map((i) => Da(i)), n = t.map((i) => Jd(i));
      return { args: r, argTypes: n };
    }
    function Da(e) {
      if (Array.isArray(e)) return e.map((t) => Da(t));
      if (typeof e == "object" && e !== null && "prisma__value" in e) {
        if (!("prisma__type" in e)) throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");
        return `${e.prisma__value}`;
      }
      return typeof e == "object" && e !== null ? JSON.stringify(e) : e;
    }
    function Jd(e) {
      return Array.isArray(e) ? { scalarType: e.length > 0 ? Oa(e[0]) : "unknown", arity: "list" } : { scalarType: Oa(e), arity: "scalar" };
    }
    function Oa(e) {
      return typeof e == "object" && e !== null && "prisma__type" in e && typeof e.prisma__type == "string" && e.prisma__type in Ia ? Ia[e.prisma__type] : typeof e == "number" ? "decimal" : typeof e == "string" ? "string" : "unknown";
    }
    function Fa(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    function Ma(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function _a(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var La = U(Ui());
    function $a({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, La.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function Va({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = Ii(6e3 - (s?.length ?? 0)), l = _a(Oe(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = Oe(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Ma(s) : ""}
\`\`\`
`), p = $a({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${it(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    var Lr = class e {
      #e;
      #t;
      #r;
      #n;
      #i;
      constructor(t, r, n) {
        this.#e = t, this.#t = r, this.#r = n, this.#n = r.getConnectionInfo?.(), this.#i = _t.forSql({ onQuery: this.#e.onQuery, tracingHelper: this.#e.tracingHelper, provider: this.#e.provider, connectionInfo: this.#n });
      }
      static async connect(t) {
        let r, n;
        try {
          r = await t.driverAdapterFactory.connect(), n = new $t({ driverAdapter: r, transactionOptions: t.transactionOptions, tracingHelper: t.tracingHelper, onQuery: t.onQuery, provider: t.provider });
        } catch (i) {
          throw await r?.dispose(), i;
        }
        return new e(t, r, n);
      }
      getConnectionInfo() {
        let t = this.#n ?? { supportsRelationJoins: false };
        return Promise.resolve({ provider: this.#t.provider, connectionInfo: t });
      }
      async execute({ plan: t, placeholderValues: r, transaction: n, batchIndex: i, queryInfo: o }) {
        let s = n ? await this.#r.getTransaction(n, i !== void 0 ? "batch query" : "query") : this.#t;
        return await this.#i.run(t, { queryable: s, transactionManager: n ? { enabled: false } : { enabled: true, manager: this.#r }, scope: r, sqlCommenter: this.#e.sqlCommenters && { plugins: this.#e.sqlCommenters, queryInfo: o } });
      }
      async startTransaction(t) {
        return { ...await this.#r.startTransaction(t), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#r.commitTransaction(t.id);
      }
      async rollbackTransaction(t) {
        await this.#r.rollbackTransaction(t.id);
      }
      async disconnect() {
        try {
          await this.#r.cancelAllTransactions();
        } finally {
          await this.#t.dispose();
        }
      }
      apiKey() {
        return null;
      }
    };
    var Hd = /* @__PURE__ */ new Set(["DateTime", "Decimal", "BigInt", "Bytes", "Json", "Raw"]);
    function $r(e) {
      if (e == null) return { kind: "null" };
      if (typeof e == "string") return { kind: "primitive", value: e };
      if (typeof e == "number") return { kind: "primitive", value: e };
      if (typeof e == "boolean") return { kind: "primitive", value: e };
      if (Array.isArray(e)) return { kind: "array", items: e };
      if (typeof e == "object") {
        let t = e;
        if ("$type" in t && typeof t.$type == "string") {
          let r = t.$type;
          return Hd.has(r) ? { kind: "taggedScalar", tag: r, value: t.value } : { kind: "structural", value: t.value };
        }
        return { kind: "object", entries: t };
      }
      return { kind: "structural", value: e };
    }
    function qa(e) {
      return typeof e == "object" && e !== null && !Array.isArray(e) && !("$type" in e);
    }
    function ja(e) {
      return typeof e == "object" && e !== null && "$type" in e && typeof e.$type == "string";
    }
    function Ba(e, t) {
      let r = new Vr(t), n = e.modelName ? `${e.modelName}.${e.action}` : e.action, i = t.root(n);
      return { parameterizedQuery: { ...e, query: r.parameterizeFieldSelection(e.query, i?.argsNodeId, i?.outputNodeId) }, placeholderValues: r.getPlaceholderValues() };
    }
    function Qa(e, t) {
      let r = new Vr(t), n = [];
      for (let i = 0; i < e.batch.length; i++) {
        let o = e.batch[i], s = o.modelName ? `${o.modelName}.${o.action}` : o.action, a = t.root(s);
        n.push({ ...o, query: r.parameterizeFieldSelection(o.query, a?.argsNodeId, a?.outputNodeId) });
      }
      return { parameterizedBatch: { ...e, batch: n }, placeholderValues: r.getPlaceholderValues() };
    }
    var Vr = class {
      #e;
      #t = /* @__PURE__ */ new Map();
      #r = /* @__PURE__ */ new Map();
      #n = 1;
      constructor(t) {
        this.#e = t;
      }
      getPlaceholderValues() {
        return Object.fromEntries(this.#t);
      }
      #i(t, r) {
        let n = zd(t, r), i = this.#r.get(n);
        if (i !== void 0) return Ua(i, r);
        let o = `%${this.#n++}`;
        return this.#r.set(n, o), this.#t.set(o, t), Ua(o, r);
      }
      parameterizeFieldSelection(t, r, n) {
        let i = this.#e.inputNode(r), o = this.#e.outputNode(n), s = { ...t };
        return t.arguments && t.arguments.$type !== "Raw" && (s.arguments = this.#o(t.arguments, i)), t.selection && (s.selection = this.#c(t.selection, o)), s;
      }
      #o(t, r) {
        if (!r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          let s = this.#e.inputEdge(r, i);
          s ? n[i] = this.#a(o, s) : n[i] = o;
        }
        return n;
      }
      #a(t, r) {
        let n = $r(t);
        switch (n.kind) {
          case "null":
            return t;
          case "structural":
            return t;
          case "primitive":
            return this.#s(n.value, r);
          case "taggedScalar":
            return this.#u(t, n.tag, r);
          case "array":
            return this.#l(n.items, t, r);
          case "object":
            return this.#p(n.entries, r);
          default:
            throw new Error(`Unknown value kind ${n.kind}`);
        }
      }
      #s(t, r) {
        if (te(r, ee.ParamEnum) && r.enumNameIndex !== void 0 && typeof t == "string" && this.#e.enumValues(r)?.includes(t)) {
          let s = { type: "Enum" };
          return this.#i(t, s);
        }
        if (!te(r, ee.ParamScalar)) return t;
        let n = he(r);
        if (n === 0) return t;
        let i = ii(t);
        return Ha(i, n) ? (n & N.Json && (t = JSON.stringify(t)), this.#i(t, i)) : t;
      }
      #u(t, r, n) {
        if (!te(n, ee.ParamScalar)) return t;
        let i = he(n);
        if (i === 0 || !za(r, i)) return t;
        let o = Ga(t.$type), s = Wa(t);
        return this.#i(s, o);
      }
      #l(t, r, n) {
        if (te(n, ee.ParamScalar) && he(n) & N.Json) {
          let i = JSON.stringify(t), o = { type: "Json" };
          return this.#i(i, o);
        }
        if (te(n, ee.ParamEnum)) {
          let i = this.#e.enumValues(n);
          if (i && t.every((o) => typeof o == "string" && i.includes(o))) {
            let o = { type: "List", inner: { type: "Enum" } };
            return this.#i(t, o);
          }
        }
        if (te(n, ee.ParamListScalar) && t.every((o) => Xd(o, n)) && t.length > 0) {
          let o = t.map((l) => em(l)), a = { type: "List", inner: Zd(t) };
          return this.#i(o, a);
        }
        if (te(n, ee.ListObject)) {
          let i = this.#e.inputNode(n.childNodeId);
          if (i) return t.map((o) => qa(o) ? this.#o(o, i) : o);
        }
        return r;
      }
      #p(t, r) {
        if (te(r, ee.Object)) {
          let i = this.#e.inputNode(r.childNodeId);
          if (i) return this.#o(t, i);
        }
        if (he(r) & N.Json) {
          let i = JSON.stringify(t), o = { type: "Json" };
          return this.#i(i, o);
        }
        return t;
      }
      #c(t, r) {
        if (!t || !r) return t;
        let n = {};
        for (let [i, o] of Object.entries(t)) {
          if (i === "$scalars" || i === "$composites" || typeof o == "boolean") {
            n[i] = o;
            continue;
          }
          let s = this.#e.outputEdge(r, i);
          if (s) {
            let a = o, l = this.#e.inputNode(s.argsNodeId), u = this.#e.outputNode(s.outputNodeId), c = { selection: a.selection ? this.#c(a.selection, u) : {} };
            a.arguments && (c.arguments = this.#o(a.arguments, l)), n[i] = c;
          } else n[i] = o;
        }
        return n;
      }
    };
    function Ua(e, t) {
      return { $type: "Param", value: { name: e, ...t } };
    }
    function Ja(e) {
      return e.type === "List" ? `List<${Ja(e.inner)}>` : e.type;
    }
    function Gd(e) {
      return ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : JSON.stringify(e);
    }
    function zd(e, t) {
      let r = Ja(t), n = Gd(e);
      return `${r}:${n}`;
    }
    var Wd = 2 ** 31 - 1;
    var Kd = -(2 ** 31);
    function ii(e) {
      switch (typeof e) {
        case "boolean":
          return { type: "Boolean" };
        case "number":
          return Number.isInteger(e) ? Kd <= e && e <= Wd ? { type: "Int" } : { type: "BigInt" } : { type: "Float" };
        case "string":
          return { type: "String" };
        default:
          throw new Error("unreachable");
      }
    }
    function Ha({ type: e }, t) {
      switch (e) {
        case "Boolean":
          return (t & N.Boolean) !== 0;
        case "Int":
          return (t & (N.Int | N.BigInt | N.Float)) !== 0;
        case "BigInt":
          return (t & N.BigInt) !== 0;
        case "Float":
          return (t & N.Float) !== 0;
        case "String":
          return (t & N.String) !== 0;
        default:
          return false;
      }
    }
    function Ga(e) {
      switch (e) {
        case "BigInt":
        case "Bytes":
        case "DateTime":
        case "Json":
          return { type: e };
        case "Decimal":
          return { type: "Float" };
        default:
          return;
      }
    }
    function Zd(e) {
      let t = { type: "Any" };
      for (let r of e) {
        let n = $r(r), i;
        switch (n.kind) {
          case "primitive":
            i = ii(n.value);
            break;
          case "taggedScalar":
            i = Ga(n.tag) ?? { type: "Any" };
            break;
          default:
            return { type: "Any" };
        }
        t = Yd(t, i);
      }
      return t;
    }
    function Yd(e, t) {
      if (e.type === "Any") return t;
      if (t.type === "Any" || e.type === t.type) return e;
      let r = { Int: 0, BigInt: 1, Float: 2 }, n = r[e.type], i = r[t.type];
      return n !== void 0 && i !== void 0 ? n >= i ? e : t : { type: "Any" };
    }
    function za(e, t) {
      switch (e) {
        case "DateTime":
          return (t & N.DateTime) !== 0;
        case "Decimal":
          return (t & N.Decimal) !== 0;
        case "BigInt":
          return (t & N.BigInt) !== 0;
        case "Bytes":
          return (t & N.Bytes) !== 0;
        case "Json":
          return (t & N.Json) !== 0;
        default:
          return false;
      }
    }
    function Xd(e, t) {
      let r = $r(e);
      switch (r.kind) {
        case "structural":
          return false;
        case "null":
          return false;
        case "primitive": {
          let n = ii(r.value), i = he(t);
          return i !== 0 && Ha(n, i);
        }
        case "taggedScalar": {
          let n = he(t);
          return n !== 0 && za(r.tag, n);
        }
        default:
          return false;
      }
    }
    function em(e) {
      return ja(e) ? Wa(e) : e;
    }
    function Wa(e) {
      return e.value;
    }
    var qr = class {
      #e;
      #t;
      #r;
      constructor(t = 1e3) {
        this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#r = t;
      }
      getSingle(t) {
        let r = this.#e.get(t);
        return r && (this.#e.delete(t), this.#e.set(t, r)), r;
      }
      setSingle(t, r) {
        if (this.#e.has(t)) {
          this.#e.delete(t), this.#e.set(t, r);
          return;
        }
        if (this.#e.size >= this.#r) {
          let n = this.#e.keys().next().value;
          n !== void 0 && this.#e.delete(n);
        }
        this.#e.set(t, r);
      }
      getBatch(t) {
        let r = this.#t.get(t);
        return r && (this.#t.delete(t), this.#t.set(t, r)), r;
      }
      setBatch(t, r) {
        if (this.#t.has(t)) {
          this.#t.delete(t), this.#t.set(t, r);
          return;
        }
        if (this.#t.size >= this.#r) {
          let n = this.#t.keys().next().value;
          n !== void 0 && this.#t.delete(n);
        }
        this.#t.set(t, r);
      }
      clear() {
        this.#e.clear(), this.#t.clear();
      }
      get size() {
        return this.#e.size + this.#t.size;
      }
      get singleCacheSize() {
        return this.#e.size;
      }
      get batchCacheSize() {
        return this.#t.size;
      }
    };
    var tl = require_dist();
    var jr = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
    function Ka(e, t, r) {
      let n = r || {}, i = n.encode || encodeURIComponent;
      if (typeof i != "function") throw new TypeError("option encode is invalid");
      if (!jr.test(e)) throw new TypeError("argument name is invalid");
      let o = i(t);
      if (o && !jr.test(o)) throw new TypeError("argument val is invalid");
      let s = e + "=" + o;
      if (n.maxAge !== void 0 && n.maxAge !== null) {
        let a = n.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a);
      }
      if (n.domain) {
        if (!jr.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain;
      }
      if (n.path) {
        if (!jr.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path;
      }
      if (n.expires) {
        if (!tm(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + n.expires.toUTCString();
      }
      if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
        case "low": {
          s += "; Priority=Low";
          break;
        }
        case "medium": {
          s += "; Priority=Medium";
          break;
        }
        case "high": {
          s += "; Priority=High";
          break;
        }
        default:
          throw new TypeError("option priority is invalid");
      }
      if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case true: {
          s += "; SameSite=Strict";
          break;
        }
        case "lax": {
          s += "; SameSite=Lax";
          break;
        }
        case "strict": {
          s += "; SameSite=Strict";
          break;
        }
        case "none": {
          s += "; SameSite=None";
          break;
        }
        default:
          throw new TypeError("option sameSite is invalid");
      }
      return n.partitioned && (s += "; Partitioned"), s;
    }
    function tm(e) {
      return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
    }
    function Za(e, t) {
      let r = (e || "").split(";").filter((l) => typeof l == "string" && !!l.trim()), n = r.shift() || "", i = rm(n), o = i.name, s = i.value;
      try {
        s = t?.decode === false ? s : (t?.decode || decodeURIComponent)(s);
      } catch {
      }
      let a = { name: o, value: s };
      for (let l of r) {
        let u = l.split("="), c = (u.shift() || "").trimStart().toLowerCase(), p = u.join("=");
        switch (c) {
          case "expires": {
            a.expires = new Date(p);
            break;
          }
          case "max-age": {
            a.maxAge = Number.parseInt(p, 10);
            break;
          }
          case "secure": {
            a.secure = true;
            break;
          }
          case "httponly": {
            a.httpOnly = true;
            break;
          }
          case "samesite": {
            a.sameSite = p;
            break;
          }
          default:
            a[c] = p;
        }
      }
      return a;
    }
    function rm(e) {
      let t = "", r = "", n = e.split("=");
      return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, { name: t, value: r };
    }
    var Ur = class extends Error {
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var Br = class extends Ur {
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    function Ya(e, t) {
      return { ...e, isRetryable: t };
    }
    var Ce = class extends Br {
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, Ya(r, false));
      }
    };
    mt(Ce, "InvalidDatasourceError");
    function Xa(e) {
      let t = { clientVersion: e.clientVersion }, r;
      try {
        r = new URL(e.accelerateUrl);
      } catch (l) {
        let u = l.message;
        throw new Ce(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${u}`, t);
      }
      let { protocol: n, searchParams: i } = r;
      if (n !== "prisma:" && n !== Gt) throw new Ce("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`", t);
      let o = i.get("api_key");
      if (o === null || o.length < 1) throw new Ce("Error validating `accelerateUrl`: the URL must contain a valid API key", t);
      let s = rn(r) ? "http:" : "https:";
      process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && r.searchParams.has("use_http") && (s = "http:");
      let a = new URL(r.href.replace(n, s));
      return { apiKey: o, url: a };
    }
    var el = U(Di());
    var Qr = class {
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, transactionId: r } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": el.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #e() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    function nm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function oi(e) {
      return new Date(nm(e));
    }
    var rl = F("prisma:client:clientEngine:remoteExecutor");
    var Jr = class {
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      constructor(t) {
        this.#e = t.clientVersion, this.#n = t.logEmitter, this.#i = t.tracingHelper, this.#o = t.sqlCommenters;
        let { url: r, apiKey: n } = Xa({ clientVersion: t.clientVersion, accelerateUrl: t.accelerateUrl });
        this.#r = new si(r), this.#t = new Qr({ apiKey: n, engineHash: t.clientVersion, logLevel: t.logLevel, logQueries: t.logQueries, tracingHelper: t.tracingHelper });
      }
      async getConnectionInfo() {
        return await this.#a({ path: "/connection-info", method: "GET" });
      }
      async execute({ plan: t, placeholderValues: r, batchIndex: n, model: i, operation: o, transaction: s, customFetch: a, queryInfo: l }) {
        let u = l && this.#o?.length ? br(this.#o, { query: l }) : void 0;
        return (await this.#a({ path: s ? `/transaction/${s.id}/query` : "/query", method: "POST", body: { model: i, operation: o, plan: t, params: r, comments: u && Object.keys(u).length > 0 ? u : void 0 }, batchRequestIdx: n, fetch: a })).data;
      }
      async startTransaction(t) {
        return { ...await this.#a({ path: "/transaction/start", method: "POST", body: t }), payload: void 0 };
      }
      async commitTransaction(t) {
        await this.#a({ path: `/transaction/${t.id}/commit`, method: "POST" });
      }
      async rollbackTransaction(t) {
        await this.#a({ path: `/transaction/${t.id}/rollback`, method: "POST" });
      }
      disconnect() {
        return Promise.resolve();
      }
      apiKey() {
        return this.#t.apiKey;
      }
      async #a({ path: t, method: r, body: n, fetch: i = globalThis.fetch, batchRequestIdx: o }) {
        let s = await this.#r.request({ method: r, path: t, headers: this.#t.build(), body: n, fetch: i });
        s.ok || await this.#s(s, o);
        let a = await s.json();
        return typeof a.extensions == "object" && a.extensions !== null && this.#u(a.extensions), a;
      }
      async #s(t, r) {
        let n = t.headers.get("Prisma-Error-Code"), i = await t.text(), o, s = i;
        try {
          o = JSON.parse(i);
        } catch {
          o = {};
        }
        typeof o.code == "string" && (n = o.code), typeof o.error == "string" ? s = o.error : typeof o.message == "string" ? s = o.message : typeof o.InvalidRequestError == "object" && o.InvalidRequestError !== null && typeof o.InvalidRequestError.reason == "string" && (s = o.InvalidRequestError.reason), s = s || `HTTP ${t.status}: ${t.statusText}`;
        let a = typeof o.meta == "object" && o.meta !== null ? o.meta : o;
        throw new tl.PrismaClientKnownRequestError(s, { clientVersion: this.#e, code: n ?? "P6000", batchRequestIdx: r, meta: a });
      }
      #u(t) {
        if (t.logs) for (let r of t.logs) this.#l(r);
        t.spans && this.#i.dispatchEngineSpans(t.spans);
      }
      #l(t) {
        switch (t.level) {
          case "debug":
          case "trace":
            rl(t);
            break;
          case "error":
          case "warn":
          case "info": {
            this.#n.emit(t.level, { timestamp: oi(t.timestamp), message: t.attributes.message ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          case "query": {
            this.#n.emit("query", { query: t.attributes.query ?? "", timestamp: oi(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target ?? "RemoteExecutor" });
            break;
          }
          default:
            throw new Error(`Unexpected log level: ${t.level}`);
        }
      }
    };
    var si = class {
      #e;
      #t;
      #r;
      constructor(t) {
        this.#e = t, this.#t = /* @__PURE__ */ new Map();
      }
      async request({ method: t, path: r, headers: n, body: i, fetch: o }) {
        let s = new URL(r, this.#e), a = this.#n(s);
        a && (n.Cookie = a), this.#r && (n["Accelerate-Query-Engine-Jwt"] = this.#r);
        let l = await o(s.href, { method: t, body: i !== void 0 ? JSON.stringify(i) : void 0, headers: n });
        return rl(t, s, l.status, l.statusText), this.#r = l.headers.get("Accelerate-Query-Engine-Jwt") ?? void 0, this.#i(s, l), l;
      }
      #n(t) {
        let r = [], n = /* @__PURE__ */ new Date();
        for (let [i, o] of this.#t) {
          if (o.expires && o.expires < n) {
            this.#t.delete(i);
            continue;
          }
          let s = o.domain ?? t.hostname, a = o.path ?? "/";
          t.hostname.endsWith(s) && t.pathname.startsWith(a) && r.push(Ka(o.name, o.value));
        }
        return r.length > 0 ? r.join("; ") : void 0;
      }
      #i(t, r) {
        let n = r.headers.getSetCookie?.() || [];
        if (n.length === 0) {
          let i = r.headers.get("Set-Cookie");
          i && n.push(i);
        }
        for (let i of n) {
          let o = Za(i), s = o.domain ?? t.hostname, a = o.path ?? "/", l = `${s}:${a}:${o.name}`;
          this.#t.set(l, { name: o.name, value: o.value, domain: s, path: a, expires: o.expires });
        }
      }
    };
    var li = require_dist();
    var ai = {};
    var nl = { async loadQueryCompiler(e) {
      let { clientVersion: t, compilerWasm: r } = e;
      if (r === void 0) throw new li.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`", t);
      let n;
      return e.activeProvider === void 0 || ai[e.activeProvider] === void 0 ? (n = (async () => {
        let i = await r.getRuntime(), o = await r.getQueryCompilerWasmModule();
        if (o == null) throw new li.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let s = { [r.importName]: i }, a = new WebAssembly.Instance(o, s), l = a.exports.__wbindgen_start;
        return i.__wbg_set_wasm(a.exports), l(), i.QueryCompiler;
      })(), e.activeProvider !== void 0 && (ai[e.activeProvider] = n)) : n = ai[e.activeProvider], await n;
    } };
    var im = "P2038";
    var ae = F("prisma:client:clientEngine");
    var al = globalThis;
    al.PRISMA_WASM_PANIC_REGISTRY = { set_message(e) {
      throw new D.PrismaClientRustPanicError(e, _r);
    } };
    var qt = class {
      name = "ClientEngine";
      #e;
      #t = { type: "disconnected" };
      #r;
      #n;
      #i;
      #o;
      config;
      datamodel;
      logEmitter;
      logQueries;
      logLevel;
      tracingHelper;
      #a;
      constructor(t, r) {
        if (t.accelerateUrl !== void 0) this.#n = { remote: true, accelerateUrl: t.accelerateUrl };
        else if (t.adapter) this.#n = { remote: false, driverAdapterFactory: t.adapter }, ae("Using driver adapter: %O", t.adapter);
        else throw new D.PrismaClientInitializationError("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.", t.clientVersion, im);
        this.#r = r ?? nl, this.config = t, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, this.#i = new qr(), this.#o = Vt.deserialize(t.parameterizationSchema, (n) => {
          if (Object.hasOwn(t.runtimeDataModel.enums, n)) return t.runtimeDataModel.enums[n].values.map((i) => i.name);
        }), t.enableDebugLogs && (this.logLevel = "debug"), this.logQueries && (this.#a = (n) => {
          this.logEmitter.emit("query", { ...n, params: vt(n.params), target: "ClientEngine" });
        });
      }
      async #s() {
        switch (this.#t.type) {
          case "disconnected": {
            let t = this.tracingHelper.runInChildSpan("connect", async () => {
              let r, n;
              try {
                r = await this.#u(), n = await this.#l(r);
              } catch (o) {
                throw this.#t = { type: "disconnected" }, n?.free(), await r?.disconnect(), o;
              }
              let i = { executor: r, queryCompiler: n };
              return this.#t = { type: "connected", engine: i }, i;
            });
            return this.#t = { type: "connecting", promise: t }, await t;
          }
          case "connecting":
            return await this.#t.promise;
          case "connected":
            return this.#t.engine;
          case "disconnecting":
            return await this.#t.promise, await this.#s();
        }
      }
      async #u() {
        return this.#n.remote ? new Jr({ clientVersion: this.config.clientVersion, accelerateUrl: this.#n.accelerateUrl, logEmitter: this.logEmitter, logLevel: this.logLevel, logQueries: this.logQueries, tracingHelper: this.tracingHelper, sqlCommenters: this.config.sqlCommenters }) : await Lr.connect({ driverAdapterFactory: this.#n.driverAdapterFactory, tracingHelper: this.tracingHelper, transactionOptions: { ...this.config.transactionOptions, isolationLevel: this.#g(this.config.transactionOptions.isolationLevel) }, onQuery: this.#a, provider: this.config.activeProvider, sqlCommenters: this.config.sqlCommenters });
      }
      async #l(t) {
        let r = this.#e;
        r === void 0 && (r = await this.#r.loadQueryCompiler(this.config), this.#e = r);
        let { provider: n, connectionInfo: i } = await t.getConnectionInfo();
        try {
          return this.#m(() => new r({ datamodel: this.datamodel, provider: n, connectionInfo: i }), void 0, false);
        } catch (o) {
          throw this.#p(o);
        }
      }
      #p(t) {
        if (t instanceof D.PrismaClientRustPanicError) return t;
        try {
          let r = JSON.parse(t.message);
          return new D.PrismaClientInitializationError(r.message, this.config.clientVersion, r.error_code);
        } catch {
          return t;
        }
      }
      #c(t, r) {
        if (t instanceof D.PrismaClientInitializationError) return t;
        if (t.code === "GenericFailure" && t.message?.startsWith("PANIC:")) return new D.PrismaClientRustPanicError(il(this, t.message, r), this.config.clientVersion);
        if (t instanceof I) return new D.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion });
        try {
          let n = JSON.parse(t);
          return new D.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`, { clientVersion: this.config.clientVersion });
        } catch {
          return t;
        }
      }
      #d(t) {
        return t instanceof D.PrismaClientRustPanicError ? t : typeof t.message == "string" && typeof t.code == "string" ? new D.PrismaClientKnownRequestError(t.message, { code: t.code, meta: t.meta, clientVersion: this.config.clientVersion }) : typeof t.message == "string" ? new D.PrismaClientUnknownRequestError(t.message, { clientVersion: this.config.clientVersion }) : t;
      }
      #m(t, r, n = true) {
        let i = al.PRISMA_WASM_PANIC_REGISTRY.set_message, o;
        global.PRISMA_WASM_PANIC_REGISTRY.set_message = (s) => {
          o = s;
        };
        try {
          return t();
        } finally {
          if (global.PRISMA_WASM_PANIC_REGISTRY.set_message = i, o) throw this.#e = void 0, n && this.stop().catch((s) => ae("failed to disconnect:", s)), new D.PrismaClientRustPanicError(il(this, o, r), this.config.clientVersion);
        }
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        await this.#s();
      }
      async stop() {
        switch (this.#t.type) {
          case "disconnected":
            return;
          case "connecting":
            return await this.#t.promise, await this.stop();
          case "connected": {
            let t = this.#t.engine, r = this.tracingHelper.runInChildSpan("disconnect", async () => {
              try {
                await t.executor.disconnect(), t.queryCompiler.free();
              } finally {
                this.#t = { type: "disconnected" };
              }
            });
            return this.#t = { type: "disconnecting", promise: r }, await r;
          }
          case "disconnecting":
            return await this.#t.promise;
        }
      }
      version() {
        return "unknown";
      }
      async transaction(t, r, n) {
        let i, { executor: o } = await this.#s();
        try {
          if (t === "start") {
            let s = n;
            i = await o.startTransaction({ ...s, isolationLevel: this.#g(s.isolationLevel) });
          } else if (t === "commit") {
            let s = n;
            await o.commitTransaction(s);
          } else if (t === "rollback") {
            let s = n;
            await o.rollbackTransaction(s);
          } else ie(t, "Invalid transaction action.");
        } catch (s) {
          throw this.#c(s);
        }
        return i ? { id: i.id, payload: void 0 } : void 0;
      }
      async request(t, { interactiveTransaction: r, customDataProxyFetch: n }) {
        ae("sending request");
        let { executor: i, queryCompiler: o } = await this.#s().catch((l) => {
          throw this.#c(l, JSON.stringify(t));
        }), s, a = {};
        if (ol(t)) s = sl(t);
        else {
          let { parameterizedQuery: l, placeholderValues: u } = Ba(t, this.#o), c = JSON.stringify(l);
          a = u;
          let p = this.#i.getSingle(c);
          p ? (ae("query plan cache hit"), s = p) : (ae("query plan cache miss"), s = this.#h(l, c, o), this.#i.setSingle(c, s));
        }
        try {
          ae("query plan created", s);
          let l = await i.execute({ plan: s, model: t.modelName, operation: t.action, placeholderValues: a, transaction: r, batchIndex: void 0, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", modelName: t.modelName, action: t.action, query: t.query } });
          return ae("query plan executed"), { data: { [t.action]: l } };
        } catch (l) {
          throw this.#c(l, JSON.stringify(t));
        }
      }
      async requestBatch(t, { transaction: r, customDataProxyFetch: n }) {
        if (t.length === 0) return [];
        let i = t[0].action, o = t[0].modelName, s = Fa(t, r), a = JSON.stringify(s), { executor: l, queryCompiler: u } = await this.#s().catch((f) => {
          throw this.#c(f, a);
        }), c = o === void 0, p, d = {};
        if (c) p = this.#f(t, a, u);
        else {
          let { parameterizedBatch: f, placeholderValues: h } = Qa(s, this.#o), x = JSON.stringify(f);
          d = h;
          let E = this.#i.getBatch(x);
          if (E) ae("batch query plan cache hit"), p = E;
          else {
            ae("batch query plan cache miss");
            try {
              p = this.#f(f.batch, x, u), this.#i.setBatch(x, p);
            } catch (L) {
              throw this.#d(L);
            }
          }
        }
        try {
          let f;
          switch (r?.kind === "itx" && (f = r.options), p.type) {
            case "multi": {
              if (r?.kind !== "itx") {
                let E = r?.options.isolationLevel ? { ...this.config.transactionOptions, isolationLevel: r.options.isolationLevel } : this.config.transactionOptions;
                f = await this.transaction("start", {}, E);
              }
              let h = [], x = false;
              for (let [E, L] of p.plans.entries()) try {
                let T = await l.execute({ plan: L, placeholderValues: d, model: t[E].modelName, operation: t[E].action, batchIndex: E, transaction: f, customFetch: n?.(globalThis.fetch), queryInfo: { type: "single", ...t[E] } });
                h.push({ data: { [t[E].action]: T } });
              } catch (T) {
                h.push(T), x = true;
                break;
              }
              return f !== void 0 && r?.kind !== "itx" && (x ? await this.transaction("rollback", {}, f) : await this.transaction("commit", {}, f)), h;
            }
            case "compacted": {
              if (!t.every((E) => E.action === i && E.modelName === o)) {
                let E = t.map((T) => T.action).join(", "), L = t.map((T) => T.modelName).join(", ");
                throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${E}] and model names: [${L}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`);
              }
              if (o === void 0) throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");
              let h = await l.execute({ plan: p.plan, placeholderValues: d, model: o, operation: i, batchIndex: void 0, transaction: f, customFetch: n?.(globalThis.fetch), queryInfo: { type: "compacted", action: i, modelName: o, queries: t } });
              return as(h, p, d).map((E) => ({ data: { [i]: E } }));
            }
          }
        } catch (f) {
          throw this.#c(f, a);
        }
      }
      async apiKey() {
        let { executor: t } = await this.#s();
        return t.apiKey();
      }
      #h(t, r, n) {
        try {
          return this.#m(() => this.#y({ queries: [t], execute: () => n.compile(r) }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #f(t, r, n) {
        if (t.every(ol)) return { type: "multi", plans: t.map((i) => sl(i)) };
        try {
          return this.#m(() => this.#y({ queries: t, execute: () => n.compileBatch(r) }));
        } catch (i) {
          throw this.#d(i);
        }
      }
      #g(t) {
        switch (t) {
          case void 0:
            return;
          case "ReadUncommitted":
            return "READ UNCOMMITTED";
          case "ReadCommitted":
            return "READ COMMITTED";
          case "RepeatableRead":
            return "REPEATABLE READ";
          case "Serializable":
            return "SERIALIZABLE";
          case "Snapshot":
            return "SNAPSHOT";
          default:
            throw new D.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``, { code: "P2023", clientVersion: this.config.clientVersion, meta: { providedIsolationLevel: t } });
        }
      }
      #y({ queries: t, execute: r }) {
        return this.tracingHelper.runInChildSpan({ name: "compile", attributes: { models: t.map((n) => n.modelName).filter((n) => n !== void 0), actions: t.map((n) => n.action) } }, r);
      }
    };
    function il(e, t, r) {
      return Va({ binaryTarget: void 0, title: t, version: e.config.clientVersion, engineVersion: "unknown", database: e.config.activeProvider, query: r });
    }
    function ol(e) {
      return e.action === "queryRaw" || e.action === "executeRaw";
    }
    function sl(e) {
      let t = e.query.arguments.query, { args: r, argTypes: n } = Na(e.query.arguments.parameters);
      return { type: e.action === "queryRaw" ? "query" : "execute", args: { type: "rawSql", sql: t, args: r, argTypes: n } };
    }
    function ll(e) {
      return new qt(e);
    }
    var ul = (e) => ({ command: e });
    var hl = require_dist();
    var cl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    var ml = require_dist();
    function et(e) {
      try {
        return pl(e, "fast");
      } catch {
        return pl(e, "slow");
      }
    }
    function pl(e, t) {
      return JSON.stringify(e.map((r) => fl(r, t)));
    }
    function fl(e, t) {
      if (Array.isArray(e)) return e.map((r) => fl(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (Ne(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (ml.Decimal.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (om(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? gl(e) : e;
    }
    function om(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function gl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(dl);
      let t = {};
      for (let r of Object.keys(e)) t[r] = dl(e[r]);
      return t;
    }
    function dl(e) {
      return typeof e == "bigint" ? e.toString() : gl(e);
    }
    var sm = /^(\s*alter\s)/i;
    var yl = F("prisma:client");
    function ui(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && sm.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var ci = ({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (mr(r)) n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: et(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = cl(r), i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? yl(`prisma.${e}(${n}, ${i.values})`) : yl(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var wl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new hl.Sql(t, r);
    } };
    var bl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function pi(e) {
      return function(r, n) {
        let i, o = (s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= xl(r(s)) : xl(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        };
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function xl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var El = { name: "@prisma/instrumentation-contract", version: "7.4.0", description: "Shared types and utilities for Prisma instrumentation", main: "dist/index.js", module: "dist/index.mjs", types: "dist/index.d.ts", exports: { ".": { require: { types: "./dist/index.d.ts", default: "./dist/index.js" }, import: { types: "./dist/index.d.mts", default: "./dist/index.mjs" } } }, license: "Apache-2.0", homepage: "https://www.prisma.io", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/instrumentation-contract" }, bugs: "https://github.com/prisma/prisma/issues", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", prepublishOnly: "pnpm run build", test: "vitest run" }, files: ["dist"], sideEffects: false, devDependencies: { "@opentelemetry/api": "1.9.0" }, peerDependencies: { "@opentelemetry/api": "^1.8" } };
    var lm = El.version.split(".")[0];
    var um = "PRISMA_INSTRUMENTATION";
    var cm = `V${lm}_PRISMA_INSTRUMENTATION`;
    var Pl = globalThis;
    function Tl() {
      let e = Pl[cm];
      return e?.helper ? e.helper : Pl[um]?.helper;
    }
    var pm = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var di = class {
      isEnabled() {
        return this.getTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getTracingHelper().runInChildSpan(t, r);
      }
      getTracingHelper() {
        return Tl() ?? pm;
      }
    };
    function Sl() {
      return new di();
    }
    function Al(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    function vl(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var kl = require_dist();
    function Cl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(mi(e.query.arguments)), t.push(mi(e.query.selection)), t.join("");
    }
    function mi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${mi(n)})` : r;
      }).join(" ")})`;
    }
    var dm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function fi(e) {
      return dm[e];
    }
    var Hr = class {
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var Rl = require_dist();
    function Re(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new Rl.Decimal(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Re("bigint", r));
        case "bytes-array":
          return t.map((r) => Re("bytes", r));
        case "decimal-array":
          return t.map((r) => Re("decimal", r));
        case "datetime-array":
          return t.map((r) => Re("datetime", r));
        case "date-array":
          return t.map((r) => Re("date", r));
        case "time-array":
          return t.map((r) => Re("time", r));
        default:
          return t;
      }
    }
    function Gr(e) {
      let t = [], r = mm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Re(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    function mm(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    var fm = F("prisma:client:request_handler");
    var zr = class {
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Hr({ batchLoader: Zo(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => fi(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: gm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? Il(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: fi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Cl(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (fm(t), ym(t, i)) throw t;
        if (t instanceof w.PrismaClientKnownRequestError && hm(t)) {
          let u = Ol(t.meta);
          ar({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = Xt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new w.PrismaClientKnownRequestError(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new w.PrismaClientRustPanicError(l, this.client._clientVersion);
          if (t instanceof w.PrismaClientUnknownRequestError) throw new w.PrismaClientUnknownRequestError(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof w.PrismaClientInitializationError) throw new w.PrismaClientInitializationError(l, this.client._clientVersion);
          if (t instanceof w.PrismaClientRustPanicError) throw new w.PrismaClientRustPanicError(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? Oe(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = bn(o, s), l = i === "queryRaw" ? Gr(a) : me(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function gm(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: Il(e) };
        ie(e, "Unknown transaction kind");
      }
    }
    function Il(e) {
      return { id: e.id, payload: e.payload };
    }
    function ym(e, t) {
      return (0, kl.hasBatchIndex)(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    function hm(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Ol(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Ol) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    var gi = _r;
    var _l = U(cn());
    var R = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    mt(R, "PrismaClientConstructorValidationError");
    var Nl = ["errorFormat", "adapter", "accelerateUrl", "log", "transactionOptions", "omit", "comments", "__internal"];
    var Dl = ["pretty", "colorless", "minimal"];
    var Fl = ["info", "query", "warn", "error"];
    var wm = { adapter: () => {
    }, accelerateUrl: (e) => {
      if (e !== void 0) {
        if (typeof e != "string") throw new R(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);
        if (e.trim().length === 0) throw new R('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.');
      }
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string") throw new R(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Dl.includes(e)) {
          let t = jt(e, Dl);
          throw new R(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new R(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Fl.includes(r)) {
          let n = jt(r, Fl);
          throw new R(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = jt(i, o);
            throw new R(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new R(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new R(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new R(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object") throw new R('"omit" option is expected to be an object.');
      if (e === null) throw new R('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Em(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new R(Pm(e, r));
    }, comments: (e) => {
      if (e !== void 0) {
        if (!Array.isArray(e)) throw new R(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);
        for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw new R(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`);
      }
    }, __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new R(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = jt(r, t);
        throw new R(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    } };
    function bm(e) {
      let t = e.adapter !== void 0, r = e.accelerateUrl !== void 0;
      if (t && r) throw new R('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');
      if (!t && !r) throw new R('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.');
    }
    function Ll(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Nl.includes(r)) {
          let i = jt(r, Nl);
          throw new R(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        wm[r](n, t);
      }
      bm(e);
    }
    function jt(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = xm(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function xm(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, _l.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function Em(e, t) {
      return Ml(t.models, e) ?? Ml(t.types, e);
    }
    function Ml(e, t) {
      let r = Object.keys(e).find((n) => ue(n) === t);
      if (r) return e[r];
    }
    function Pm(e, t) {
      let r = je(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = sr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    var $l = require_dist();
    function Vl(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!(0, $l.hasBatchIndex)(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    var Ut = F("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Tm = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Sm = /* @__PURE__ */ Symbol.for("prisma.client.transaction.id");
    var Am = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ql(e) {
      class t {
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = pi();
        constructor(n) {
          if (!n) throw new w.PrismaClientInitializationError("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ", gi);
          e = n.__internal?.configOverride?.(e) ?? e, Ll(n, e);
          let i = new Bl.EventEmitter().on("error", () => {
          });
          this._extensions = Ue.empty(), this._previewFeatures = e.previewFeatures, this._clientVersion = e.clientVersion ?? gi, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Sl();
          let o;
          if (n.adapter) {
            o = n.adapter;
            let s = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (o.provider !== s) throw new w.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`, this._clientVersion);
          }
          try {
            let s = n ?? {}, l = (s.__internal ?? {}).debug === true;
            if (l && F.enable("prisma:client"), s.errorFormat ? this._errorFormat = s.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { enableDebugLogs: l, logLevel: s.log && vl(s.log), logQueries: s.log && !!(typeof s.log == "string" ? s.log === "query" : s.log.find((u) => typeof u == "string" ? u === "query" : u.level === "query")), compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: s.transactionOptions?.maxWait ?? 2e3, timeout: s.transactionOptions?.timeout ?? 5e3, isolationLevel: s.transactionOptions?.isolationLevel }, logEmitter: i, adapter: o, accelerateUrl: s.accelerateUrl, sqlCommenters: s.comments, parameterizationSchema: e.parameterizationSchema, runtimeDataModel: e.runtimeDataModel }, this._accelerateEngineConfig = Object.create(this._engineConfig), this._accelerateEngineConfig.accelerateUtils = { resolveDatasourceUrl: () => {
              if (s.accelerateUrl) return s.accelerateUrl;
              throw new w.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`, e.clientVersion);
            } }, Ut("clientVersion", e.clientVersion), this._engine = ll(this._engineConfig), this._requestHandler = new zr(this, i), s.log) for (let u of s.log) {
              let c = typeof u == "string" ? u : u.emit === "stdout" ? u.level : null;
              c && this.$on(c, (p) => {
                pt.log(`${pt.tags[c] ?? ""}`, p.message || p.query);
              });
            }
          } catch (s) {
            throw s.clientVersion = this._clientVersion, s;
          }
          return this._appliedParent = Tt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Oi();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ci({ clientMethod: i, activeProvider: a }), callsite: de(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = ql(n, i);
              return ui(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new w.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (ui(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new w.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: ul, callsite: de(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ci({ clientMethod: i, activeProvider: a }), callsite: de(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...ql(n, i));
            throw new w.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new w.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Am.nextId(), s = Al(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return Vl(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return H(Tt(H(jo(this), [_("_appliedParent", () => this._appliedParent._createItxClient(n)), _("_createPrismaPromise", () => pi(n)), _(Sm, () => n.id)])), [Be(Ho)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Tm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = async (l) => {
            let { runInTransaction: u, args: c, ...p } = l, d = { ...n, ...p };
            c && (d.args = i.middlewareArgsToRequestArgs(c)), n.transaction !== void 0 && u === false && delete d.transaction;
            let f = await Ko(this, d);
            return d.model ? Jo({ result: f, modelName: d.model, args: d.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : f;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new Ul.AsyncResource("prisma-client-request").runInAsyncScope(() => a(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let h = { name: "serialize" }, x = this._tracingHelper.runInChildSpan(h, () => pr({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return F.enabled("prisma:client") && (Ut("Prisma Client call:"), Ut(`prisma.${i}(${Io(n)})`), Ut("Generated request:"), Ut(JSON.stringify(x, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: x, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
          } catch (h) {
            throw h.clientVersion = this._clientVersion, h;
          }
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $extends = Uo;
      }
      return t;
    }
    function ql(e, t) {
      return vm(e) ? [new jl.Sql(e, t), wl] : [e, bl];
    }
    function vm(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var Cm = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Jl(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!Cm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    var Rm = () => globalThis.process?.release?.name === "node";
    var km = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun;
    var Im = () => !!globalThis.Deno;
    var Om = () => typeof globalThis.Netlify == "object";
    var Nm = () => typeof globalThis.EdgeRuntime == "object";
    var Dm = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
    function Fm() {
      return [[Om, "netlify"], [Nm, "edge-light"], [Dm, "workerd"], [Im, "deno"], [km, "bun"], [Rm, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    var Mm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Hl() {
      let e = Fm();
      return { id: e, prettyName: Mm[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    var w = require_dist();
    var re = require_dist();
    var M = require_dist();
    var Gl = require_dist();
  }
});

// src/app.ts
import express7 from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// prisma/generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// prisma/generated/prisma/internal/class.ts
var runtime = __toESM(require_client(), 1);
var config = {
  "previewFeatures": [],
  "clientVersion": "7.4.0",
  "engineVersion": "ab56fe763f921d033a6c195e7ddeb3e255bdbb57",
  "activeProvider": "postgresql",
  "inlineSchema": 'model User {\n  id            String  @id\n  name          String\n  email         String\n  emailVerified Boolean @default(false)\n  image         String?\n  status        String? @default("ACTIVE")\n  role          String? @default("STUDENT")\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  sessions Session[]\n  accounts Account[]\n\n  review  Review[]\n  tutor   TutorProfile?\n  student StudentProfile? @relation("StudentProfileRelation")\n  booking Booking?\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum UserRole {\n  STUDENT\n  TUTOR\n  ADMIN\n}\n\nenum UserStatus {\n  ACTIVE\n  INACTIVE\n}\n\nmodel Availability {\n  id        String    @id @default(uuid())\n  tutorId   String    @unique\n  day       String?\n  startTime String?\n  endTime   String?\n  createdAt DateTime? @default(now())\n  updateAt  DateTime? @updatedAt\n\n  tutor TutorProfile @relation(fields: [tutorId], references: [id])\n}\n\nmodel Booking {\n  id        String        @id @default(uuid())\n  studentId String        @unique\n  tutorId   String\n  subject   String\n  date      DateTime\n  time      DateTime\n  duration  Int\n  status    BookingStatus @default(PENDING) // PENDING, CONFIRMED, CANCELLED, COMPLETED\n  createdAt DateTime      @default(now())\n  updatedAt DateTime      @updatedAt\n\n  tutor   TutorProfile @relation(fields: [tutorId], references: [id], onDelete: Cascade)\n  student User         @relation(fields: [studentId], references: [id])\n}\n\nenum BookingStatus {\n  PENDING\n  CONFIRMED\n  CANCELLED\n  COMPLETED\n}\n\nmodel Category {\n  id          String  @id @default(uuid())\n  name        String  @unique\n  description String?\n\n  tutors TutorProfile[]\n\n  @@index([name])\n}\n\nmodel Review {\n  id        String   @id @unique @default(uuid())\n  studentId String\n  tutorId   String\n  rating    Int\n  comment   String?\n  createdAt DateTime @default(now())\n\n  student User         @relation(fields: [studentId], references: [id])\n  tutor   TutorProfile @relation(fields: [tutorId], references: [id], onDelete: Cascade)\n\n  @@index([studentId])\n  @@index([tutorId])\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel StudentProfile {\n  id               String   @id @default(uuid())\n  name             String\n  studentId        String   @unique\n  bio              String?\n  department       String?\n  FavroiteSubjects String[]\n\n  student User @relation("StudentProfileRelation", fields: [studentId], references: [id])\n}\n\nmodel TutorProfile {\n  id           String   @id @unique @default(uuid())\n  authorId     String   @unique\n  bio          String?\n  hourlyRate   Float?\n  subjects     String[] // JSON string or comma separated\n  categoryName String?\n\n  review       Review[]\n  booking      Booking[]\n  availability Availability?\n\n  user     User      @relation(fields: [authorId], references: [id])\n  category Category? @relation(fields: [categoryName], references: [name], onDelete: Cascade)\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"review","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"tutor","kind":"object","type":"TutorProfile","relationName":"TutorProfileToUser"},{"name":"student","kind":"object","type":"StudentProfile","relationName":"StudentProfileRelation"},{"name":"booking","kind":"object","type":"Booking","relationName":"BookingToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Availability":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tutorId","kind":"scalar","type":"String"},{"name":"day","kind":"scalar","type":"String"},{"name":"startTime","kind":"scalar","type":"String"},{"name":"endTime","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"},{"name":"tutor","kind":"object","type":"TutorProfile","relationName":"AvailabilityToTutorProfile"}],"dbName":null},"Booking":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"tutorId","kind":"scalar","type":"String"},{"name":"subject","kind":"scalar","type":"String"},{"name":"date","kind":"scalar","type":"DateTime"},{"name":"time","kind":"scalar","type":"DateTime"},{"name":"duration","kind":"scalar","type":"Int"},{"name":"status","kind":"enum","type":"BookingStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"tutor","kind":"object","type":"TutorProfile","relationName":"BookingToTutorProfile"},{"name":"student","kind":"object","type":"User","relationName":"BookingToUser"}],"dbName":null},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"tutors","kind":"object","type":"TutorProfile","relationName":"CategoryToTutorProfile"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"tutorId","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"student","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"tutor","kind":"object","type":"TutorProfile","relationName":"ReviewToTutorProfile"}],"dbName":null},"StudentProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"department","kind":"scalar","type":"String"},{"name":"FavroiteSubjects","kind":"scalar","type":"String"},{"name":"student","kind":"object","type":"User","relationName":"StudentProfileRelation"}],"dbName":null},"TutorProfile":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"authorId","kind":"scalar","type":"String"},{"name":"bio","kind":"scalar","type":"String"},{"name":"hourlyRate","kind":"scalar","type":"Float"},{"name":"subjects","kind":"scalar","type":"String"},{"name":"categoryName","kind":"scalar","type":"String"},{"name":"review","kind":"object","type":"Review","relationName":"ReviewToTutorProfile"},{"name":"booking","kind":"object","type":"Booking","relationName":"BookingToTutorProfile"},{"name":"availability","kind":"object","type":"Availability","relationName":"AvailabilityToTutorProfile"},{"name":"user","kind":"object","type":"User","relationName":"TutorProfileToUser"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToTutorProfile"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","sessions","accounts","student","review","tutor","booking","availability","tutors","_count","category","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Availability.findUnique","Availability.findUniqueOrThrow","Availability.findFirst","Availability.findFirstOrThrow","Availability.findMany","Availability.createOne","Availability.createMany","Availability.createManyAndReturn","Availability.updateOne","Availability.updateMany","Availability.updateManyAndReturn","Availability.upsertOne","Availability.deleteOne","Availability.deleteMany","Availability.groupBy","Availability.aggregate","Booking.findUnique","Booking.findUniqueOrThrow","Booking.findFirst","Booking.findFirstOrThrow","Booking.findMany","Booking.createOne","Booking.createMany","Booking.createManyAndReturn","Booking.updateOne","Booking.updateMany","Booking.updateManyAndReturn","Booking.upsertOne","Booking.deleteOne","Booking.deleteMany","_avg","_sum","Booking.groupBy","Booking.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","StudentProfile.findUnique","StudentProfile.findUniqueOrThrow","StudentProfile.findFirst","StudentProfile.findFirstOrThrow","StudentProfile.findMany","StudentProfile.createOne","StudentProfile.createMany","StudentProfile.createManyAndReturn","StudentProfile.updateOne","StudentProfile.updateMany","StudentProfile.updateManyAndReturn","StudentProfile.upsertOne","StudentProfile.deleteOne","StudentProfile.deleteMany","StudentProfile.groupBy","StudentProfile.aggregate","TutorProfile.findUnique","TutorProfile.findUniqueOrThrow","TutorProfile.findFirst","TutorProfile.findFirstOrThrow","TutorProfile.findMany","TutorProfile.createOne","TutorProfile.createMany","TutorProfile.createManyAndReturn","TutorProfile.updateOne","TutorProfile.updateMany","TutorProfile.updateManyAndReturn","TutorProfile.upsertOne","TutorProfile.deleteOne","TutorProfile.deleteMany","TutorProfile.groupBy","TutorProfile.aggregate","AND","OR","NOT","id","authorId","bio","hourlyRate","subjects","categoryName","equals","has","hasEvery","hasSome","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","name","studentId","department","FavroiteSubjects","tutorId","rating","comment","createdAt","description","every","some","none","subject","date","time","duration","BookingStatus","status","updatedAt","day","startTime","endTime","updateAt","identifier","value","expiresAt","accountId","providerId","userId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","email","emailVerified","image","role","is","isNot","connectOrCreate","upsert","disconnect","delete","connect","createMany","set","updateMany","deleteMany","push","increment","decrement","multiply","divide"]'),
  graph: "xQRaoAESBAAAwAIAIAUAAMECACAGAADEAgAgBwAAwgIAIAgAAMMCACAJAADFAgAgtgEAAL4CADC3AQAAJwAQuAEAAL4CADC5AQEAAAABzQEBAJ0CACHUAUAAtwIAId4BAQCeAgAh3wFAALcCACH0AQEAAAAB9QEgAL8CACH2AQEAngIAIfcBAQCeAgAhAQAAAAEAIAwDAACfAgAgtgEAANACADC3AQAAAwAQuAEAANACADC5AQEAnQIAIdQBQAC3AgAh3wFAALcCACHmAUAAtwIAIekBAQCdAgAh8QEBAJ0CACHyAQEAngIAIfMBAQCeAgAhAwMAAJIDACDyAQAA0QIAIPMBAADRAgAgDAMAAJ8CACC2AQAA0AIAMLcBAAADABC4AQAA0AIAMLkBAQAAAAHUAUAAtwIAId8BQAC3AgAh5gFAALcCACHpAQEAnQIAIfEBAQAAAAHyAQEAngIAIfMBAQCeAgAhAwAAAAMAIAEAAAQAMAIAAAUAIBEDAACfAgAgtgEAAM8CADC3AQAABwAQuAEAAM8CADC5AQEAnQIAIdQBQAC3AgAh3wFAALcCACHnAQEAnQIAIegBAQCdAgAh6QEBAJ0CACHqAQEAngIAIesBAQCeAgAh7AEBAJ4CACHtAUAAswIAIe4BQACzAgAh7wEBAJ4CACHwAQEAngIAIQgDAACSAwAg6gEAANECACDrAQAA0QIAIOwBAADRAgAg7QEAANECACDuAQAA0QIAIO8BAADRAgAg8AEAANECACARAwAAnwIAILYBAADPAgAwtwEAAAcAELgBAADPAgAwuQEBAAAAAdQBQAC3AgAh3wFAALcCACHnAQEAnQIAIegBAQCdAgAh6QEBAJ0CACHqAQEAngIAIesBAQCeAgAh7AEBAJ4CACHtAUAAswIAIe4BQACzAgAh7wEBAJ4CACHwAQEAngIAIQMAAAAHACABAAAIADACAAAJACALBgAAnwIAIAgAALQCACC2AQAAzgIAMLcBAAALABC4AQAAzgIAMLkBAQCdAgAhzgEBAJ0CACHRAQEAnQIAIdIBAgDMAgAh0wEBAJ4CACHUAUAAtwIAIQMGAACSAwAgCAAAuAMAINMBAADRAgAgCwYAAJ8CACAIAAC0AgAgtgEAAM4CADC3AQAACwAQuAEAAM4CADC5AQEAAAABzgEBAJ0CACHRAQEAnQIAIdIBAgDMAgAh0wEBAJ4CACHUAUAAtwIAIQMAAAALACABAAAMADACAAANACADAAAACwAgAQAADAAwAgAADQAgDwYAAJ8CACAIAAC0AgAgtgEAAMsCADC3AQAAEAAQuAEAAMsCADC5AQEAnQIAIc4BAQCdAgAh0QEBAJ0CACHUAUAAtwIAIdkBAQCdAgAh2gFAALcCACHbAUAAtwIAIdwBAgDMAgAh3gEAAM0C3gEi3wFAALcCACECBgAAkgMAIAgAALgDACAPBgAAnwIAIAgAALQCACC2AQAAywIAMLcBAAAQABC4AQAAywIAMLkBAQAAAAHOAQEAAAAB0QEBAJ0CACHUAUAAtwIAIdkBAQCdAgAh2gFAALcCACHbAUAAtwIAIdwBAgDMAgAh3gEAAM0C3gEi3wFAALcCACEDAAAAEAAgAQAAEQAwAgAAEgAgCwgAALQCACC2AQAAsgIAMLcBAAAUABC4AQAAsgIAMLkBAQCdAgAh0QEBAJ0CACHUAUAAswIAIeABAQCeAgAh4QEBAJ4CACHiAQEAngIAIeMBQACzAgAhAQAAABQAIAcLAACpAgAgtgEAAKgCADC3AQAAFgAQuAEAAKgCADC5AQEAnQIAIc0BAQCdAgAh1QEBAJ4CACEBAAAAFgAgDgMAAJ8CACAHAADCAgAgCQAAyAIAIAoAAMkCACANAADKAgAgtgEAAMYCADC3AQAAGAAQuAEAAMYCADC5AQEAnQIAIboBAQCdAgAhuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACEIAwAAkgMAIAcAAIgEACAJAACLBAAgCgAAjAQAIA0AAI0EACC7AQAA0QIAILwBAADRAgAgvgEAANECACAOAwAAnwIAIAcAAMICACAJAADIAgAgCgAAyQIAIA0AAMoCACC2AQAAxgIAMLcBAAAYABC4AQAAxgIAMLkBAQAAAAG6AQEAAAABuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACEDAAAAGAAgAQAAGQAwAgAAGgAgAQAAABgAIAEAAAALACABAAAAEAAgAQAAABgAIAoGAACfAgAgtgEAAJwCADC3AQAAIAAQuAEAAJwCADC5AQEAnQIAIbsBAQCeAgAhzQEBAJ0CACHOAQEAnQIAIc8BAQCeAgAh0AEAAJICACABAAAAIAAgAQAAABAAIAEAAAADACABAAAABwAgAQAAAAsAIAEAAAABACASBAAAwAIAIAUAAMECACAGAADEAgAgBwAAwgIAIAgAAMMCACAJAADFAgAgtgEAAL4CADC3AQAAJwAQuAEAAL4CADC5AQEAnQIAIc0BAQCdAgAh1AFAALcCACHeAQEAngIAId8BQAC3AgAh9AEBAJ0CACH1ASAAvwIAIfYBAQCeAgAh9wEBAJ4CACEJBAAAhgQAIAUAAIcEACAGAACJBAAgBwAAiAQAIAgAALgDACAJAACKBAAg3gEAANECACD2AQAA0QIAIPcBAADRAgAgAwAAACcAIAEAACgAMAIAAAEAIAMAAAAnACABAAAoADACAAABACADAAAAJwAgAQAAKAAwAgAAAQAgDwQAAIAEACAFAACBBAAgBgAAhAQAIAcAAIIEACAIAACDBAAgCQAAhQQAILkBAQAAAAHNAQEAAAAB1AFAAAAAAd4BAQAAAAHfAUAAAAAB9AEBAAAAAfUBIAAAAAH2AQEAAAAB9wEBAAAAAQETAAAsACAJuQEBAAAAAc0BAQAAAAHUAUAAAAAB3gEBAAAAAd8BQAAAAAH0AQEAAAAB9QEgAAAAAfYBAQAAAAH3AQEAAAABARMAAC4AMAETAAAuADAPBAAAygMAIAUAAMsDACAGAADOAwAgBwAAzAMAIAgAAM0DACAJAADPAwAguQEBANcCACHNAQEA1wIAIdQBQADwAgAh3gEBANgCACHfAUAA8AIAIfQBAQDXAgAh9QEgAMkDACH2AQEA2AIAIfcBAQDYAgAhAgAAAAEAIBMAADEAIAm5AQEA1wIAIc0BAQDXAgAh1AFAAPACACHeAQEA2AIAId8BQADwAgAh9AEBANcCACH1ASAAyQMAIfYBAQDYAgAh9wEBANgCACECAAAAJwAgEwAAMwAgAgAAACcAIBMAADMAIAMAAAABACAaAAAsACAbAAAxACABAAAAAQAgAQAAACcAIAYMAADGAwAgIAAAyAMAICEAAMcDACDeAQAA0QIAIPYBAADRAgAg9wEAANECACAMtgEAALoCADC3AQAAOgAQuAEAALoCADC5AQEAjwIAIc0BAQCPAgAh1AFAAKICACHeAQEAkAIAId8BQACiAgAh9AEBAI8CACH1ASAAuwIAIfYBAQCQAgAh9wEBAJACACEDAAAAJwAgAQAAOQAwHwAAOgAgAwAAACcAIAEAACgAMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgCQMAAMUDACC5AQEAAAAB1AFAAAAAAd8BQAAAAAHmAUAAAAAB6QEBAAAAAfEBAQAAAAHyAQEAAAAB8wEBAAAAAQETAABCACAIuQEBAAAAAdQBQAAAAAHfAUAAAAAB5gFAAAAAAekBAQAAAAHxAQEAAAAB8gEBAAAAAfMBAQAAAAEBEwAARAAwARMAAEQAMAkDAADEAwAguQEBANcCACHUAUAA8AIAId8BQADwAgAh5gFAAPACACHpAQEA1wIAIfEBAQDXAgAh8gEBANgCACHzAQEA2AIAIQIAAAAFACATAABHACAIuQEBANcCACHUAUAA8AIAId8BQADwAgAh5gFAAPACACHpAQEA1wIAIfEBAQDXAgAh8gEBANgCACHzAQEA2AIAIQIAAAADACATAABJACACAAAAAwAgEwAASQAgAwAAAAUAIBoAAEIAIBsAAEcAIAEAAAAFACABAAAAAwAgBQwAAMEDACAgAADDAwAgIQAAwgMAIPIBAADRAgAg8wEAANECACALtgEAALkCADC3AQAAUAAQuAEAALkCADC5AQEAjwIAIdQBQACiAgAh3wFAAKICACHmAUAAogIAIekBAQCPAgAh8QEBAI8CACHyAQEAkAIAIfMBAQCQAgAhAwAAAAMAIAEAAE8AMB8AAFAAIAMAAAADACABAAAEADACAAAFACABAAAACQAgAQAAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIA4DAADAAwAguQEBAAAAAdQBQAAAAAHfAUAAAAAB5wEBAAAAAegBAQAAAAHpAQEAAAAB6gEBAAAAAesBAQAAAAHsAQEAAAAB7QFAAAAAAe4BQAAAAAHvAQEAAAAB8AEBAAAAAQETAABYACANuQEBAAAAAdQBQAAAAAHfAUAAAAAB5wEBAAAAAegBAQAAAAHpAQEAAAAB6gEBAAAAAesBAQAAAAHsAQEAAAAB7QFAAAAAAe4BQAAAAAHvAQEAAAAB8AEBAAAAAQETAABaADABEwAAWgAwDgMAAL8DACC5AQEA1wIAIdQBQADwAgAh3wFAAPACACHnAQEA1wIAIegBAQDXAgAh6QEBANcCACHqAQEA2AIAIesBAQDYAgAh7AEBANgCACHtAUAA5QIAIe4BQADlAgAh7wEBANgCACHwAQEA2AIAIQIAAAAJACATAABdACANuQEBANcCACHUAUAA8AIAId8BQADwAgAh5wEBANcCACHoAQEA1wIAIekBAQDXAgAh6gEBANgCACHrAQEA2AIAIewBAQDYAgAh7QFAAOUCACHuAUAA5QIAIe8BAQDYAgAh8AEBANgCACECAAAABwAgEwAAXwAgAgAAAAcAIBMAAF8AIAMAAAAJACAaAABYACAbAABdACABAAAACQAgAQAAAAcAIAoMAAC8AwAgIAAAvgMAICEAAL0DACDqAQAA0QIAIOsBAADRAgAg7AEAANECACDtAQAA0QIAIO4BAADRAgAg7wEAANECACDwAQAA0QIAIBC2AQAAuAIAMLcBAABmABC4AQAAuAIAMLkBAQCPAgAh1AFAAKICACHfAUAAogIAIecBAQCPAgAh6AEBAI8CACHpAQEAjwIAIeoBAQCQAgAh6wEBAJACACHsAQEAkAIAIe0BQACvAgAh7gFAAK8CACHvAQEAkAIAIfABAQCQAgAhAwAAAAcAIAEAAGUAMB8AAGYAIAMAAAAHACABAAAIADACAAAJACAJtgEAALYCADC3AQAAbAAQuAEAALYCADC5AQEAAAAB1AFAALcCACHfAUAAtwIAIeQBAQCdAgAh5QEBAJ0CACHmAUAAtwIAIQEAAABpACABAAAAaQAgCbYBAAC2AgAwtwEAAGwAELgBAAC2AgAwuQEBAJ0CACHUAUAAtwIAId8BQAC3AgAh5AEBAJ0CACHlAQEAnQIAIeYBQAC3AgAhAAMAAABsACABAABtADACAABpACADAAAAbAAgAQAAbQAwAgAAaQAgAwAAAGwAIAEAAG0AMAIAAGkAIAa5AQEAAAAB1AFAAAAAAd8BQAAAAAHkAQEAAAAB5QEBAAAAAeYBQAAAAAEBEwAAcQAgBrkBAQAAAAHUAUAAAAAB3wFAAAAAAeQBAQAAAAHlAQEAAAAB5gFAAAAAAQETAABzADABEwAAcwAwBrkBAQDXAgAh1AFAAPACACHfAUAA8AIAIeQBAQDXAgAh5QEBANcCACHmAUAA8AIAIQIAAABpACATAAB2ACAGuQEBANcCACHUAUAA8AIAId8BQADwAgAh5AEBANcCACHlAQEA1wIAIeYBQADwAgAhAgAAAGwAIBMAAHgAIAIAAABsACATAAB4ACADAAAAaQAgGgAAcQAgGwAAdgAgAQAAAGkAIAEAAABsACADDAAAuQMAICAAALsDACAhAAC6AwAgCbYBAAC1AgAwtwEAAH8AELgBAAC1AgAwuQEBAI8CACHUAUAAogIAId8BQACiAgAh5AEBAI8CACHlAQEAjwIAIeYBQACiAgAhAwAAAGwAIAEAAH4AMB8AAH8AIAMAAABsACABAABtADACAABpACALCAAAtAIAILYBAACyAgAwtwEAABQAELgBAACyAgAwuQEBAAAAAdEBAQAAAAHUAUAAswIAIeABAQCeAgAh4QEBAJ4CACHiAQEAngIAIeMBQACzAgAhAQAAAIIBACABAAAAggEAIAYIAAC4AwAg1AEAANECACDgAQAA0QIAIOEBAADRAgAg4gEAANECACDjAQAA0QIAIAMAAAAUACABAACFAQAwAgAAggEAIAMAAAAUACABAACFAQAwAgAAggEAIAMAAAAUACABAACFAQAwAgAAggEAIAgIAAC3AwAguQEBAAAAAdEBAQAAAAHUAUAAAAAB4AEBAAAAAeEBAQAAAAHiAQEAAAAB4wFAAAAAAQETAACJAQAgB7kBAQAAAAHRAQEAAAAB1AFAAAAAAeABAQAAAAHhAQEAAAAB4gEBAAAAAeMBQAAAAAEBEwAAiwEAMAETAACLAQAwCAgAALYDACC5AQEA1wIAIdEBAQDXAgAh1AFAAOUCACHgAQEA2AIAIeEBAQDYAgAh4gEBANgCACHjAUAA5QIAIQIAAACCAQAgEwAAjgEAIAe5AQEA1wIAIdEBAQDXAgAh1AFAAOUCACHgAQEA2AIAIeEBAQDYAgAh4gEBANgCACHjAUAA5QIAIQIAAAAUACATAACQAQAgAgAAABQAIBMAAJABACADAAAAggEAIBoAAIkBACAbAACOAQAgAQAAAIIBACABAAAAFAAgCAwAALMDACAgAAC1AwAgIQAAtAMAINQBAADRAgAg4AEAANECACDhAQAA0QIAIOIBAADRAgAg4wEAANECACAKtgEAAK4CADC3AQAAlwEAELgBAACuAgAwuQEBAI8CACHRAQEAjwIAIdQBQACvAgAh4AEBAJACACHhAQEAkAIAIeIBAQCQAgAh4wFAAK8CACEDAAAAFAAgAQAAlgEAMB8AAJcBACADAAAAFAAgAQAAhQEAMAIAAIIBACABAAAAEgAgAQAAABIAIAMAAAAQACABAAARADACAAASACADAAAAEAAgAQAAEQAwAgAAEgAgAwAAABAAIAEAABEAMAIAABIAIAwGAAD2AgAgCAAAsgMAILkBAQAAAAHOAQEAAAAB0QEBAAAAAdQBQAAAAAHZAQEAAAAB2gFAAAAAAdsBQAAAAAHcAQIAAAAB3gEAAADeAQLfAUAAAAABARMAAJ8BACAKuQEBAAAAAc4BAQAAAAHRAQEAAAAB1AFAAAAAAdkBAQAAAAHaAUAAAAAB2wFAAAAAAdwBAgAAAAHeAQAAAN4BAt8BQAAAAAEBEwAAoQEAMAETAAChAQAwDAYAAPQCACAIAACxAwAguQEBANcCACHOAQEA1wIAIdEBAQDXAgAh1AFAAPACACHZAQEA1wIAIdoBQADwAgAh2wFAAPACACHcAQIA8QIAId4BAADyAt4BIt8BQADwAgAhAgAAABIAIBMAAKQBACAKuQEBANcCACHOAQEA1wIAIdEBAQDXAgAh1AFAAPACACHZAQEA1wIAIdoBQADwAgAh2wFAAPACACHcAQIA8QIAId4BAADyAt4BIt8BQADwAgAhAgAAABAAIBMAAKYBACACAAAAEAAgEwAApgEAIAMAAAASACAaAACfAQAgGwAApAEAIAEAAAASACABAAAAEAAgBQwAAKwDACAgAACvAwAgIQAArgMAIHIAAK0DACBzAACwAwAgDbYBAACqAgAwtwEAAK0BABC4AQAAqgIAMLkBAQCPAgAhzgEBAI8CACHRAQEAjwIAIdQBQACiAgAh2QEBAI8CACHaAUAAogIAIdsBQACiAgAh3AECAKECACHeAQAAqwLeASLfAUAAogIAIQMAAAAQACABAACsAQAwHwAArQEAIAMAAAAQACABAAARADACAAASACAHCwAAqQIAILYBAACoAgAwtwEAABYAELgBAACoAgAwuQEBAAAAAc0BAQAAAAHVAQEAngIAIQEAAACwAQAgAQAAALABACACCwAAqwMAINUBAADRAgAgAwAAABYAIAEAALMBADACAACwAQAgAwAAABYAIAEAALMBADACAACwAQAgAwAAABYAIAEAALMBADACAACwAQAgBAsAAKoDACC5AQEAAAABzQEBAAAAAdUBAQAAAAEBEwAAtwEAIAO5AQEAAAABzQEBAAAAAdUBAQAAAAEBEwAAuQEAMAETAAC5AQAwBAsAAJ0DACC5AQEA1wIAIc0BAQDXAgAh1QEBANgCACECAAAAsAEAIBMAALwBACADuQEBANcCACHNAQEA1wIAIdUBAQDYAgAhAgAAABYAIBMAAL4BACACAAAAFgAgEwAAvgEAIAMAAACwAQAgGgAAtwEAIBsAALwBACABAAAAsAEAIAEAAAAWACAEDAAAmgMAICAAAJwDACAhAACbAwAg1QEAANECACAGtgEAAKcCADC3AQAAxQEAELgBAACnAgAwuQEBAI8CACHNAQEAjwIAIdUBAQCQAgAhAwAAABYAIAEAAMQBADAfAADFAQAgAwAAABYAIAEAALMBADACAACwAQAgAQAAAA0AIAEAAAANACADAAAACwAgAQAADAAwAgAADQAgAwAAAAsAIAEAAAwAMAIAAA0AIAMAAAALACABAAAMADACAAANACAIBgAAhAMAIAgAAJkDACC5AQEAAAABzgEBAAAAAdEBAQAAAAHSAQIAAAAB0wEBAAAAAdQBQAAAAAEBEwAAzQEAIAa5AQEAAAABzgEBAAAAAdEBAQAAAAHSAQIAAAAB0wEBAAAAAdQBQAAAAAEBEwAAzwEAMAETAADPAQAwCAYAAIIDACAIAACYAwAguQEBANcCACHOAQEA1wIAIdEBAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhAgAAAA0AIBMAANIBACAGuQEBANcCACHOAQEA1wIAIdEBAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhAgAAAAsAIBMAANQBACACAAAACwAgEwAA1AEAIAMAAAANACAaAADNAQAgGwAA0gEAIAEAAAANACABAAAACwAgBgwAAJMDACAgAACWAwAgIQAAlQMAIHIAAJQDACBzAACXAwAg0wEAANECACAJtgEAAKACADC3AQAA2wEAELgBAACgAgAwuQEBAI8CACHOAQEAjwIAIdEBAQCPAgAh0gECAKECACHTAQEAkAIAIdQBQACiAgAhAwAAAAsAIAEAANoBADAfAADbAQAgAwAAAAsAIAEAAAwAMAIAAA0AIAoGAACfAgAgtgEAAJwCADC3AQAAIAAQuAEAAJwCADC5AQEAAAABuwEBAJ4CACHNAQEAnQIAIc4BAQAAAAHPAQEAngIAIdABAACSAgAgAQAAAN4BACABAAAA3gEAIAMGAACSAwAguwEAANECACDPAQAA0QIAIAMAAAAgACABAADhAQAwAgAA3gEAIAMAAAAgACABAADhAQAwAgAA3gEAIAMAAAAgACABAADhAQAwAgAA3gEAIAcGAACRAwAguQEBAAAAAbsBAQAAAAHNAQEAAAABzgEBAAAAAc8BAQAAAAHQAQAAkAMAIAETAADlAQAgBrkBAQAAAAG7AQEAAAABzQEBAAAAAc4BAQAAAAHPAQEAAAAB0AEAAJADACABEwAA5wEAMAETAADnAQAwBwYAAI8DACC5AQEA1wIAIbsBAQDYAgAhzQEBANcCACHOAQEA1wIAIc8BAQDYAgAh0AEAAI4DACACAAAA3gEAIBMAAOoBACAGuQEBANcCACG7AQEA2AIAIc0BAQDXAgAhzgEBANcCACHPAQEA2AIAIdABAACOAwAgAgAAACAAIBMAAOwBACACAAAAIAAgEwAA7AEAIAMAAADeAQAgGgAA5QEAIBsAAOoBACABAAAA3gEAIAEAAAAgACAFDAAAiwMAICAAAI0DACAhAACMAwAguwEAANECACDPAQAA0QIAIAm2AQAAmwIAMLcBAADzAQAQuAEAAJsCADC5AQEAjwIAIbsBAQCQAgAhzQEBAI8CACHOAQEAjwIAIc8BAQCQAgAh0AEAAJICACADAAAAIAAgAQAA8gEAMB8AAPMBACADAAAAIAAgAQAA4QEAMAIAAN4BACABAAAAGgAgAQAAABoAIAMAAAAYACABAAAZADACAAAaACADAAAAGAAgAQAAGQAwAgAAGgAgAwAAABgAIAEAABkAMAIAABoAIAsDAACJAwAgBwAAhgMAIAkAAIcDACAKAACIAwAgDQAAigMAILkBAQAAAAG6AQEAAAABuwEBAAAAAbwBCAAAAAG9AQAAhQMAIL4BAQAAAAEBEwAA-wEAIAa5AQEAAAABugEBAAAAAbsBAQAAAAG8AQgAAAABvQEAAIUDACC-AQEAAAABARMAAP0BADABEwAA_QEAMAEAAAAWACALAwAA3gIAIAcAANsCACAJAADcAgAgCgAA3QIAIA0AAN8CACC5AQEA1wIAIboBAQDXAgAhuwEBANgCACG8AQgA2QIAIb0BAADaAgAgvgEBANgCACECAAAAGgAgEwAAgQIAIAa5AQEA1wIAIboBAQDXAgAhuwEBANgCACG8AQgA2QIAIb0BAADaAgAgvgEBANgCACECAAAAGAAgEwAAgwIAIAIAAAAYACATAACDAgAgAQAAABYAIAMAAAAaACAaAAD7AQAgGwAAgQIAIAEAAAAaACABAAAAGAAgCAwAANICACAgAADVAgAgIQAA1AIAIHIAANMCACBzAADWAgAguwEAANECACC8AQAA0QIAIL4BAADRAgAgCbYBAACOAgAwtwEAAIsCABC4AQAAjgIAMLkBAQCPAgAhugEBAI8CACG7AQEAkAIAIbwBCACRAgAhvQEAAJICACC-AQEAkAIAIQMAAAAYACABAACKAgAwHwAAiwIAIAMAAAAYACABAAAZADACAAAaACAJtgEAAI4CADC3AQAAiwIAELgBAACOAgAwuQEBAI8CACG6AQEAjwIAIbsBAQCQAgAhvAEIAJECACG9AQAAkgIAIL4BAQCQAgAhDgwAAJkCACAgAACaAgAgIQAAmgIAIL8BAQAAAAHDAQEAAAAExAEBAAAABMUBAQAAAAHGAQEAAAABxwEBAAAAAcgBAQAAAAHJAQEAmAIAIcoBAQAAAAHLAQEAAAABzAEBAAAAAQ4MAACUAgAgIAAAlwIAICEAAJcCACC_AQEAAAABwwEBAAAABcQBAQAAAAXFAQEAAAABxgEBAAAAAccBAQAAAAHIAQEAAAAByQEBAJYCACHKAQEAAAABywEBAAAAAcwBAQAAAAENDAAAlAIAICAAAJUCACAhAACVAgAgcgAAlQIAIHMAAJUCACC_AQgAAAABwwEIAAAABcQBCAAAAAXFAQgAAAABxgEIAAAAAccBCAAAAAHIAQgAAAAByQEIAJMCACEEvwEBAAAABcABAQAAAAHBAQEAAAAEwgEBAAAABA0MAACUAgAgIAAAlQIAICEAAJUCACByAACVAgAgcwAAlQIAIL8BCAAAAAHDAQgAAAAFxAEIAAAABcUBCAAAAAHGAQgAAAABxwEIAAAAAcgBCAAAAAHJAQgAkwIAIQi_AQIAAAABwwECAAAABcQBAgAAAAXFAQIAAAABxgECAAAAAccBAgAAAAHIAQIAAAAByQECAJQCACEIvwEIAAAAAcMBCAAAAAXEAQgAAAAFxQEIAAAAAcYBCAAAAAHHAQgAAAAByAEIAAAAAckBCACVAgAhDgwAAJQCACAgAACXAgAgIQAAlwIAIL8BAQAAAAHDAQEAAAAFxAEBAAAABcUBAQAAAAHGAQEAAAABxwEBAAAAAcgBAQAAAAHJAQEAlgIAIcoBAQAAAAHLAQEAAAABzAEBAAAAAQu_AQEAAAABwwEBAAAABcQBAQAAAAXFAQEAAAABxgEBAAAAAccBAQAAAAHIAQEAAAAByQEBAJcCACHKAQEAAAABywEBAAAAAcwBAQAAAAEODAAAmQIAICAAAJoCACAhAACaAgAgvwEBAAAAAcMBAQAAAATEAQEAAAAExQEBAAAAAcYBAQAAAAHHAQEAAAAByAEBAAAAAckBAQCYAgAhygEBAAAAAcsBAQAAAAHMAQEAAAABCL8BAgAAAAHDAQIAAAAExAECAAAABMUBAgAAAAHGAQIAAAABxwECAAAAAcgBAgAAAAHJAQIAmQIAIQu_AQEAAAABwwEBAAAABMQBAQAAAATFAQEAAAABxgEBAAAAAccBAQAAAAHIAQEAAAAByQEBAJoCACHKAQEAAAABywEBAAAAAcwBAQAAAAEJtgEAAJsCADC3AQAA8wEAELgBAACbAgAwuQEBAI8CACG7AQEAkAIAIc0BAQCPAgAhzgEBAI8CACHPAQEAkAIAIdABAACSAgAgCgYAAJ8CACC2AQAAnAIAMLcBAAAgABC4AQAAnAIAMLkBAQCdAgAhuwEBAJ4CACHNAQEAnQIAIc4BAQCdAgAhzwEBAJ4CACHQAQAAkgIAIAu_AQEAAAABwwEBAAAABMQBAQAAAATFAQEAAAABxgEBAAAAAccBAQAAAAHIAQEAAAAByQEBAJoCACHKAQEAAAABywEBAAAAAcwBAQAAAAELvwEBAAAAAcMBAQAAAAXEAQEAAAAFxQEBAAAAAcYBAQAAAAHHAQEAAAAByAEBAAAAAckBAQCXAgAhygEBAAAAAcsBAQAAAAHMAQEAAAABFAQAAMACACAFAADBAgAgBgAAxAIAIAcAAMICACAIAADDAgAgCQAAxQIAILYBAAC-AgAwtwEAACcAELgBAAC-AgAwuQEBAJ0CACHNAQEAnQIAIdQBQAC3AgAh3gEBAJ4CACHfAUAAtwIAIfQBAQCdAgAh9QEgAL8CACH2AQEAngIAIfcBAQCeAgAh-AEAACcAIPkBAAAnACAJtgEAAKACADC3AQAA2wEAELgBAACgAgAwuQEBAI8CACHOAQEAjwIAIdEBAQCPAgAh0gECAKECACHTAQEAkAIAIdQBQACiAgAhDQwAAJkCACAgAACZAgAgIQAAmQIAIHIAAKYCACBzAACZAgAgvwECAAAAAcMBAgAAAATEAQIAAAAExQECAAAAAcYBAgAAAAHHAQIAAAAByAECAAAAAckBAgClAgAhCwwAAJkCACAgAACkAgAgIQAApAIAIL8BQAAAAAHDAUAAAAAExAFAAAAABMUBQAAAAAHGAUAAAAABxwFAAAAAAcgBQAAAAAHJAUAAowIAIQsMAACZAgAgIAAApAIAICEAAKQCACC_AUAAAAABwwFAAAAABMQBQAAAAATFAUAAAAABxgFAAAAAAccBQAAAAAHIAUAAAAAByQFAAKMCACEIvwFAAAAAAcMBQAAAAATEAUAAAAAExQFAAAAAAcYBQAAAAAHHAUAAAAAByAFAAAAAAckBQACkAgAhDQwAAJkCACAgAACZAgAgIQAAmQIAIHIAAKYCACBzAACZAgAgvwECAAAAAcMBAgAAAATEAQIAAAAExQECAAAAAcYBAgAAAAHHAQIAAAAByAECAAAAAckBAgClAgAhCL8BCAAAAAHDAQgAAAAExAEIAAAABMUBCAAAAAHGAQgAAAABxwEIAAAAAcgBCAAAAAHJAQgApgIAIQa2AQAApwIAMLcBAADFAQAQuAEAAKcCADC5AQEAjwIAIc0BAQCPAgAh1QEBAJACACEHCwAAqQIAILYBAACoAgAwtwEAABYAELgBAACoAgAwuQEBAJ0CACHNAQEAnQIAIdUBAQCeAgAhA9YBAAAYACDXAQAAGAAg2AEAABgAIA22AQAAqgIAMLcBAACtAQAQuAEAAKoCADC5AQEAjwIAIc4BAQCPAgAh0QEBAI8CACHUAUAAogIAIdkBAQCPAgAh2gFAAKICACHbAUAAogIAIdwBAgChAgAh3gEAAKsC3gEi3wFAAKICACEHDAAAmQIAICAAAK0CACAhAACtAgAgvwEAAADeAQLDAQAAAN4BCMQBAAAA3gEIyQEAAKwC3gEiBwwAAJkCACAgAACtAgAgIQAArQIAIL8BAAAA3gECwwEAAADeAQjEAQAAAN4BCMkBAACsAt4BIgS_AQAAAN4BAsMBAAAA3gEIxAEAAADeAQjJAQAArQLeASIKtgEAAK4CADC3AQAAlwEAELgBAACuAgAwuQEBAI8CACHRAQEAjwIAIdQBQACvAgAh4AEBAJACACHhAQEAkAIAIeIBAQCQAgAh4wFAAK8CACELDAAAlAIAICAAALECACAhAACxAgAgvwFAAAAAAcMBQAAAAAXEAUAAAAAFxQFAAAAAAcYBQAAAAAHHAUAAAAAByAFAAAAAAckBQACwAgAhCwwAAJQCACAgAACxAgAgIQAAsQIAIL8BQAAAAAHDAUAAAAAFxAFAAAAABcUBQAAAAAHGAUAAAAABxwFAAAAAAcgBQAAAAAHJAUAAsAIAIQi_AUAAAAABwwFAAAAABcQBQAAAAAXFAUAAAAABxgFAAAAAAccBQAAAAAHIAUAAAAAByQFAALECACELCAAAtAIAILYBAACyAgAwtwEAABQAELgBAACyAgAwuQEBAJ0CACHRAQEAnQIAIdQBQACzAgAh4AEBAJ4CACHhAQEAngIAIeIBAQCeAgAh4wFAALMCACEIvwFAAAAAAcMBQAAAAAXEAUAAAAAFxQFAAAAAAcYBQAAAAAHHAUAAAAAByAFAAAAAAckBQACxAgAhEAMAAJ8CACAHAADCAgAgCQAAyAIAIAoAAMkCACANAADKAgAgtgEAAMYCADC3AQAAGAAQuAEAAMYCADC5AQEAnQIAIboBAQCdAgAhuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACH4AQAAGAAg-QEAABgAIAm2AQAAtQIAMLcBAAB_ABC4AQAAtQIAMLkBAQCPAgAh1AFAAKICACHfAUAAogIAIeQBAQCPAgAh5QEBAI8CACHmAUAAogIAIQm2AQAAtgIAMLcBAABsABC4AQAAtgIAMLkBAQCdAgAh1AFAALcCACHfAUAAtwIAIeQBAQCdAgAh5QEBAJ0CACHmAUAAtwIAIQi_AUAAAAABwwFAAAAABMQBQAAAAATFAUAAAAABxgFAAAAAAccBQAAAAAHIAUAAAAAByQFAAKQCACEQtgEAALgCADC3AQAAZgAQuAEAALgCADC5AQEAjwIAIdQBQACiAgAh3wFAAKICACHnAQEAjwIAIegBAQCPAgAh6QEBAI8CACHqAQEAkAIAIesBAQCQAgAh7AEBAJACACHtAUAArwIAIe4BQACvAgAh7wEBAJACACHwAQEAkAIAIQu2AQAAuQIAMLcBAABQABC4AQAAuQIAMLkBAQCPAgAh1AFAAKICACHfAUAAogIAIeYBQACiAgAh6QEBAI8CACHxAQEAjwIAIfIBAQCQAgAh8wEBAJACACEMtgEAALoCADC3AQAAOgAQuAEAALoCADC5AQEAjwIAIc0BAQCPAgAh1AFAAKICACHeAQEAkAIAId8BQACiAgAh9AEBAI8CACH1ASAAuwIAIfYBAQCQAgAh9wEBAJACACEFDAAAmQIAICAAAL0CACAhAAC9AgAgvwEgAAAAAckBIAC8AgAhBQwAAJkCACAgAAC9AgAgIQAAvQIAIL8BIAAAAAHJASAAvAIAIQK_ASAAAAAByQEgAL0CACESBAAAwAIAIAUAAMECACAGAADEAgAgBwAAwgIAIAgAAMMCACAJAADFAgAgtgEAAL4CADC3AQAAJwAQuAEAAL4CADC5AQEAnQIAIc0BAQCdAgAh1AFAALcCACHeAQEAngIAId8BQAC3AgAh9AEBAJ0CACH1ASAAvwIAIfYBAQCeAgAh9wEBAJ4CACECvwEgAAAAAckBIAC9AgAhA9YBAAADACDXAQAAAwAg2AEAAAMAIAPWAQAABwAg1wEAAAcAINgBAAAHACAD1gEAAAsAINcBAAALACDYAQAACwAgEAMAAJ8CACAHAADCAgAgCQAAyAIAIAoAAMkCACANAADKAgAgtgEAAMYCADC3AQAAGAAQuAEAAMYCADC5AQEAnQIAIboBAQCdAgAhuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACH4AQAAGAAg-QEAABgAIAwGAACfAgAgtgEAAJwCADC3AQAAIAAQuAEAAJwCADC5AQEAnQIAIbsBAQCeAgAhzQEBAJ0CACHOAQEAnQIAIc8BAQCeAgAh0AEAAJICACD4AQAAIAAg-QEAACAAIBEGAACfAgAgCAAAtAIAILYBAADLAgAwtwEAABAAELgBAADLAgAwuQEBAJ0CACHOAQEAnQIAIdEBAQCdAgAh1AFAALcCACHZAQEAnQIAIdoBQAC3AgAh2wFAALcCACHcAQIAzAIAId4BAADNAt4BIt8BQAC3AgAh-AEAABAAIPkBAAAQACAOAwAAnwIAIAcAAMICACAJAADIAgAgCgAAyQIAIA0AAMoCACC2AQAAxgIAMLcBAAAYABC4AQAAxgIAMLkBAQCdAgAhugEBAJ0CACG7AQEAngIAIbwBCADHAgAhvQEAAJICACC-AQEAngIAIQi_AQgAAAABwwEIAAAABcQBCAAAAAXFAQgAAAABxgEIAAAAAccBCAAAAAHIAQgAAAAByQEIAJUCACED1gEAABAAINcBAAAQACDYAQAAEAAgDQgAALQCACC2AQAAsgIAMLcBAAAUABC4AQAAsgIAMLkBAQCdAgAh0QEBAJ0CACHUAUAAswIAIeABAQCeAgAh4QEBAJ4CACHiAQEAngIAIeMBQACzAgAh-AEAABQAIPkBAAAUACAJCwAAqQIAILYBAACoAgAwtwEAABYAELgBAACoAgAwuQEBAJ0CACHNAQEAnQIAIdUBAQCeAgAh-AEAABYAIPkBAAAWACAPBgAAnwIAIAgAALQCACC2AQAAywIAMLcBAAAQABC4AQAAywIAMLkBAQCdAgAhzgEBAJ0CACHRAQEAnQIAIdQBQAC3AgAh2QEBAJ0CACHaAUAAtwIAIdsBQAC3AgAh3AECAMwCACHeAQAAzQLeASLfAUAAtwIAIQi_AQIAAAABwwECAAAABMQBAgAAAATFAQIAAAABxgECAAAAAccBAgAAAAHIAQIAAAAByQECAJkCACEEvwEAAADeAQLDAQAAAN4BCMQBAAAA3gEIyQEAAK0C3gEiCwYAAJ8CACAIAAC0AgAgtgEAAM4CADC3AQAACwAQuAEAAM4CADC5AQEAnQIAIc4BAQCdAgAh0QEBAJ0CACHSAQIAzAIAIdMBAQCeAgAh1AFAALcCACERAwAAnwIAILYBAADPAgAwtwEAAAcAELgBAADPAgAwuQEBAJ0CACHUAUAAtwIAId8BQAC3AgAh5wEBAJ0CACHoAQEAnQIAIekBAQCdAgAh6gEBAJ4CACHrAQEAngIAIewBAQCeAgAh7QFAALMCACHuAUAAswIAIe8BAQCeAgAh8AEBAJ4CACEMAwAAnwIAILYBAADQAgAwtwEAAAMAELgBAADQAgAwuQEBAJ0CACHUAUAAtwIAId8BQAC3AgAh5gFAALcCACHpAQEAnQIAIfEBAQCdAgAh8gEBAJ4CACHzAQEAngIAIQAAAAAAAAGAAgEAAAABAYACAQAAAAEFgAIIAAAAAYQCCAAAAAGFAggAAAABhgIIAAAAAYcCCAAAAAECgAIBAAAABIMCAQAAAAULGgAA9wIAMBsAAPwCADD6AQAA-AIAMPsBAAD5AgAw_AEAAPsCADD9AQAA-wIAMP4BAAD7AgAw_wEAAPoCACCAAgAA-wIAMIECAAD9AgAwggIAAP4CADALGgAA5gIAMBsAAOsCADD6AQAA5wIAMPsBAADoAgAw_AEAAOoCADD9AQAA6gIAMP4BAADqAgAw_wEAAOkCACCAAgAA6gIAMIECAADsAgAwggIAAO0CADAHGgAA4AIAIBsAAOMCACD6AQAA4QIAIPsBAADiAgAg_AEAABQAIP0BAAAUACD-AQAAggEAIAUaAACyBAAgGwAAxAQAIPoBAACzBAAg-wEAAMMEACD-AQAAAQAgBxoAALAEACAbAADBBAAg-gEAALEEACD7AQAAwAQAIPwBAAAWACD9AQAAFgAg_gEAALABACAGuQEBAAAAAdQBQAAAAAHgAQEAAAAB4QEBAAAAAeIBAQAAAAHjAUAAAAABAgAAAIIBACAaAADgAgAgAwAAABQAIBoAAOACACAbAADkAgAgCAAAABQAIBMAAOQCACC5AQEA1wIAIdQBQADlAgAh4AEBANgCACHhAQEA2AIAIeIBAQDYAgAh4wFAAOUCACEGuQEBANcCACHUAUAA5QIAIeABAQDYAgAh4QEBANgCACHiAQEA2AIAIeMBQADlAgAhAYACQAAAAAEKBgAA9gIAILkBAQAAAAHOAQEAAAAB1AFAAAAAAdkBAQAAAAHaAUAAAAAB2wFAAAAAAdwBAgAAAAHeAQAAAN4BAt8BQAAAAAECAAAAEgAgGgAA9QIAIAMAAAASACAaAAD1AgAgGwAA8wIAIAETAAC_BAAwDwYAAJ8CACAIAAC0AgAgtgEAAMsCADC3AQAAEAAQuAEAAMsCADC5AQEAAAABzgEBAAAAAdEBAQCdAgAh1AFAALcCACHZAQEAnQIAIdoBQAC3AgAh2wFAALcCACHcAQIAzAIAId4BAADNAt4BIt8BQAC3AgAhAgAAABIAIBMAAPMCACACAAAA7gIAIBMAAO8CACANtgEAAO0CADC3AQAA7gIAELgBAADtAgAwuQEBAJ0CACHOAQEAnQIAIdEBAQCdAgAh1AFAALcCACHZAQEAnQIAIdoBQAC3AgAh2wFAALcCACHcAQIAzAIAId4BAADNAt4BIt8BQAC3AgAhDbYBAADtAgAwtwEAAO4CABC4AQAA7QIAMLkBAQCdAgAhzgEBAJ0CACHRAQEAnQIAIdQBQAC3AgAh2QEBAJ0CACHaAUAAtwIAIdsBQAC3AgAh3AECAMwCACHeAQAAzQLeASLfAUAAtwIAIQm5AQEA1wIAIc4BAQDXAgAh1AFAAPACACHZAQEA1wIAIdoBQADwAgAh2wFAAPACACHcAQIA8QIAId4BAADyAt4BIt8BQADwAgAhAYACQAAAAAEFgAICAAAAAYQCAgAAAAGFAgIAAAABhgICAAAAAYcCAgAAAAEBgAIAAADeAQIKBgAA9AIAILkBAQDXAgAhzgEBANcCACHUAUAA8AIAIdkBAQDXAgAh2gFAAPACACHbAUAA8AIAIdwBAgDxAgAh3gEAAPIC3gEi3wFAAPACACEFGgAAugQAIBsAAL0EACD6AQAAuwQAIPsBAAC8BAAg_gEAAAEAIAoGAAD2AgAguQEBAAAAAc4BAQAAAAHUAUAAAAAB2QEBAAAAAdoBQAAAAAHbAUAAAAAB3AECAAAAAd4BAAAA3gEC3wFAAAAAAQMaAAC6BAAg-gEAALsEACD-AQAAAQAgBgYAAIQDACC5AQEAAAABzgEBAAAAAdIBAgAAAAHTAQEAAAAB1AFAAAAAAQIAAAANACAaAACDAwAgAwAAAA0AIBoAAIMDACAbAACBAwAgARMAALkEADALBgAAnwIAIAgAALQCACC2AQAAzgIAMLcBAAALABC4AQAAzgIAMLkBAQAAAAHOAQEAnQIAIdEBAQCdAgAh0gECAMwCACHTAQEAngIAIdQBQAC3AgAhAgAAAA0AIBMAAIEDACACAAAA_wIAIBMAAIADACAJtgEAAP4CADC3AQAA_wIAELgBAAD-AgAwuQEBAJ0CACHOAQEAnQIAIdEBAQCdAgAh0gECAMwCACHTAQEAngIAIdQBQAC3AgAhCbYBAAD-AgAwtwEAAP8CABC4AQAA_gIAMLkBAQCdAgAhzgEBAJ0CACHRAQEAnQIAIdIBAgDMAgAh0wEBAJ4CACHUAUAAtwIAIQW5AQEA1wIAIc4BAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhBgYAAIIDACC5AQEA1wIAIc4BAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhBRoAALQEACAbAAC3BAAg-gEAALUEACD7AQAAtgQAIP4BAAABACAGBgAAhAMAILkBAQAAAAHOAQEAAAAB0gECAAAAAdMBAQAAAAHUAUAAAAABAxoAALQEACD6AQAAtQQAIP4BAAABACABgAIBAAAABAQaAAD3AgAw-gEAAPgCADD-AQAA-wIAMP8BAAD6AgAgBBoAAOYCADD6AQAA5wIAMP4BAADqAgAw_wEAAOkCACADGgAA4AIAIPoBAADhAgAg_gEAAIIBACADGgAAsgQAIPoBAACzBAAg_gEAAAEAIAMaAACwBAAg-gEAALEEACD-AQAAsAEAIAAAAAKAAgEAAAAEgwIBAAAABQUaAACrBAAgGwAArgQAIPoBAACsBAAg-wEAAK0EACD-AQAAAQAgAYACAQAAAAQDGgAAqwQAIPoBAACsBAAg_gEAAAEAIAkEAACGBAAgBQAAhwQAIAYAAIkEACAHAACIBAAgCAAAuAMAIAkAAIoEACDeAQAA0QIAIPYBAADRAgAg9wEAANECACAAAAAAAAUaAACmBAAgGwAAqQQAIPoBAACnBAAg-wEAAKgEACD-AQAAGgAgAxoAAKYEACD6AQAApwQAIP4BAAAaACAAAAALGgAAngMAMBsAAKMDADD6AQAAnwMAMPsBAACgAwAw_AEAAKIDADD9AQAAogMAMP4BAACiAwAw_wEAAKEDACCAAgAAogMAMIECAACkAwAwggIAAKUDADAJAwAAiQMAIAcAAIYDACAJAACHAwAgCgAAiAMAILkBAQAAAAG6AQEAAAABuwEBAAAAAbwBCAAAAAG9AQAAhQMAIAIAAAAaACAaAACpAwAgAwAAABoAIBoAAKkDACAbAACoAwAgARMAAKUEADAOAwAAnwIAIAcAAMICACAJAADIAgAgCgAAyQIAIA0AAMoCACC2AQAAxgIAMLcBAAAYABC4AQAAxgIAMLkBAQAAAAG6AQEAAAABuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACECAAAAGgAgEwAAqAMAIAIAAACmAwAgEwAApwMAIAm2AQAApQMAMLcBAACmAwAQuAEAAKUDADC5AQEAnQIAIboBAQCdAgAhuwEBAJ4CACG8AQgAxwIAIb0BAACSAgAgvgEBAJ4CACEJtgEAAKUDADC3AQAApgMAELgBAAClAwAwuQEBAJ0CACG6AQEAnQIAIbsBAQCeAgAhvAEIAMcCACG9AQAAkgIAIL4BAQCeAgAhBbkBAQDXAgAhugEBANcCACG7AQEA2AIAIbwBCADZAgAhvQEAANoCACAJAwAA3gIAIAcAANsCACAJAADcAgAgCgAA3QIAILkBAQDXAgAhugEBANcCACG7AQEA2AIAIbwBCADZAgAhvQEAANoCACAJAwAAiQMAIAcAAIYDACAJAACHAwAgCgAAiAMAILkBAQAAAAG6AQEAAAABuwEBAAAAAbwBCAAAAAG9AQAAhQMAIAQaAACeAwAw-gEAAJ8DADD-AQAAogMAMP8BAAChAwAgAAAAAAAABRoAAKAEACAbAACjBAAg-gEAAKEEACD7AQAAogQAIP4BAAAaACADGgAAoAQAIPoBAAChBAAg_gEAABoAIAAAAAUaAACbBAAgGwAAngQAIPoBAACcBAAg-wEAAJ0EACD-AQAAGgAgAxoAAJsEACD6AQAAnAQAIP4BAAAaACAIAwAAkgMAIAcAAIgEACAJAACLBAAgCgAAjAQAIA0AAI0EACC7AQAA0QIAILwBAADRAgAgvgEAANECACAAAAAAAAAFGgAAlgQAIBsAAJkEACD6AQAAlwQAIPsBAACYBAAg_gEAAAEAIAMaAACWBAAg-gEAAJcEACD-AQAAAQAgAAAABRoAAJEEACAbAACUBAAg-gEAAJIEACD7AQAAkwQAIP4BAAABACADGgAAkQQAIPoBAACSBAAg_gEAAAEAIAAAAAGAAiAAAAABCxoAAPQDADAbAAD5AwAw-gEAAPUDADD7AQAA9gMAMPwBAAD4AwAw_QEAAPgDADD-AQAA-AMAMP8BAAD3AwAggAIAAPgDADCBAgAA-gMAMIICAAD7AwAwCxoAAOgDADAbAADtAwAw-gEAAOkDADD7AQAA6gMAMPwBAADsAwAw_QEAAOwDADD-AQAA7AMAMP8BAADrAwAggAIAAOwDADCBAgAA7gMAMIICAADvAwAwCxoAAN8DADAbAADjAwAw-gEAAOADADD7AQAA4QMAMPwBAAD7AgAw_QEAAPsCADD-AQAA-wIAMP8BAADiAwAggAIAAPsCADCBAgAA5AMAMIICAAD-AgAwBxoAANoDACAbAADdAwAg-gEAANsDACD7AQAA3AMAIPwBAAAYACD9AQAAGAAg_gEAABoAIAcaAADVAwAgGwAA2AMAIPoBAADWAwAg-wEAANcDACD8AQAAIAAg_QEAACAAIP4BAADeAQAgBxoAANADACAbAADTAwAg-gEAANEDACD7AQAA0gMAIPwBAAAQACD9AQAAEAAg_gEAABIAIAoIAACyAwAguQEBAAAAAdEBAQAAAAHUAUAAAAAB2QEBAAAAAdoBQAAAAAHbAUAAAAAB3AECAAAAAd4BAAAA3gEC3wFAAAAAAQIAAAASACAaAADQAwAgAwAAABAAIBoAANADACAbAADUAwAgDAAAABAAIAgAALEDACATAADUAwAguQEBANcCACHRAQEA1wIAIdQBQADwAgAh2QEBANcCACHaAUAA8AIAIdsBQADwAgAh3AECAPECACHeAQAA8gLeASLfAUAA8AIAIQoIAACxAwAguQEBANcCACHRAQEA1wIAIdQBQADwAgAh2QEBANcCACHaAUAA8AIAIdsBQADwAgAh3AECAPECACHeAQAA8gLeASLfAUAA8AIAIQW5AQEAAAABuwEBAAAAAc0BAQAAAAHPAQEAAAAB0AEAAJADACACAAAA3gEAIBoAANUDACADAAAAIAAgGgAA1QMAIBsAANkDACAHAAAAIAAgEwAA2QMAILkBAQDXAgAhuwEBANgCACHNAQEA1wIAIc8BAQDYAgAh0AEAAI4DACAFuQEBANcCACG7AQEA2AIAIc0BAQDXAgAhzwEBANgCACHQAQAAjgMAIAkHAACGAwAgCQAAhwMAIAoAAIgDACANAACKAwAguQEBAAAAAbsBAQAAAAG8AQgAAAABvQEAAIUDACC-AQEAAAABAgAAABoAIBoAANoDACADAAAAGAAgGgAA2gMAIBsAAN4DACALAAAAGAAgBwAA2wIAIAkAANwCACAKAADdAgAgDQAA3wIAIBMAAN4DACC5AQEA1wIAIbsBAQDYAgAhvAEIANkCACG9AQAA2gIAIL4BAQDYAgAhCQcAANsCACAJAADcAgAgCgAA3QIAIA0AAN8CACC5AQEA1wIAIbsBAQDYAgAhvAEIANkCACG9AQAA2gIAIL4BAQDYAgAhBggAAJkDACC5AQEAAAAB0QEBAAAAAdIBAgAAAAHTAQEAAAAB1AFAAAAAAQIAAAANACAaAADnAwAgAwAAAA0AIBoAAOcDACAbAADmAwAgARMAAJAEADACAAAADQAgEwAA5gMAIAIAAAD_AgAgEwAA5QMAIAW5AQEA1wIAIdEBAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhBggAAJgDACC5AQEA1wIAIdEBAQDXAgAh0gECAPECACHTAQEA2AIAIdQBQADwAgAhBggAAJkDACC5AQEAAAAB0QEBAAAAAdIBAgAAAAHTAQEAAAAB1AFAAAAAAQy5AQEAAAAB1AFAAAAAAd8BQAAAAAHnAQEAAAAB6AEBAAAAAeoBAQAAAAHrAQEAAAAB7AEBAAAAAe0BQAAAAAHuAUAAAAAB7wEBAAAAAfABAQAAAAECAAAACQAgGgAA8wMAIAMAAAAJACAaAADzAwAgGwAA8gMAIAETAACPBAAwEQMAAJ8CACC2AQAAzwIAMLcBAAAHABC4AQAAzwIAMLkBAQAAAAHUAUAAtwIAId8BQAC3AgAh5wEBAJ0CACHoAQEAnQIAIekBAQCdAgAh6gEBAJ4CACHrAQEAngIAIewBAQCeAgAh7QFAALMCACHuAUAAswIAIe8BAQCeAgAh8AEBAJ4CACECAAAACQAgEwAA8gMAIAIAAADwAwAgEwAA8QMAIBC2AQAA7wMAMLcBAADwAwAQuAEAAO8DADC5AQEAnQIAIdQBQAC3AgAh3wFAALcCACHnAQEAnQIAIegBAQCdAgAh6QEBAJ0CACHqAQEAngIAIesBAQCeAgAh7AEBAJ4CACHtAUAAswIAIe4BQACzAgAh7wEBAJ4CACHwAQEAngIAIRC2AQAA7wMAMLcBAADwAwAQuAEAAO8DADC5AQEAnQIAIdQBQAC3AgAh3wFAALcCACHnAQEAnQIAIegBAQCdAgAh6QEBAJ0CACHqAQEAngIAIesBAQCeAgAh7AEBAJ4CACHtAUAAswIAIe4BQACzAgAh7wEBAJ4CACHwAQEAngIAIQy5AQEA1wIAIdQBQADwAgAh3wFAAPACACHnAQEA1wIAIegBAQDXAgAh6gEBANgCACHrAQEA2AIAIewBAQDYAgAh7QFAAOUCACHuAUAA5QIAIe8BAQDYAgAh8AEBANgCACEMuQEBANcCACHUAUAA8AIAId8BQADwAgAh5wEBANcCACHoAQEA1wIAIeoBAQDYAgAh6wEBANgCACHsAQEA2AIAIe0BQADlAgAh7gFAAOUCACHvAQEA2AIAIfABAQDYAgAhDLkBAQAAAAHUAUAAAAAB3wFAAAAAAecBAQAAAAHoAQEAAAAB6gEBAAAAAesBAQAAAAHsAQEAAAAB7QFAAAAAAe4BQAAAAAHvAQEAAAAB8AEBAAAAAQe5AQEAAAAB1AFAAAAAAd8BQAAAAAHmAUAAAAAB8QEBAAAAAfIBAQAAAAHzAQEAAAABAgAAAAUAIBoAAP8DACADAAAABQAgGgAA_wMAIBsAAP4DACABEwAAjgQAMAwDAACfAgAgtgEAANACADC3AQAAAwAQuAEAANACADC5AQEAAAAB1AFAALcCACHfAUAAtwIAIeYBQAC3AgAh6QEBAJ0CACHxAQEAAAAB8gEBAJ4CACHzAQEAngIAIQIAAAAFACATAAD-AwAgAgAAAPwDACATAAD9AwAgC7YBAAD7AwAwtwEAAPwDABC4AQAA-wMAMLkBAQCdAgAh1AFAALcCACHfAUAAtwIAIeYBQAC3AgAh6QEBAJ0CACHxAQEAnQIAIfIBAQCeAgAh8wEBAJ4CACELtgEAAPsDADC3AQAA_AMAELgBAAD7AwAwuQEBAJ0CACHUAUAAtwIAId8BQAC3AgAh5gFAALcCACHpAQEAnQIAIfEBAQCdAgAh8gEBAJ4CACHzAQEAngIAIQe5AQEA1wIAIdQBQADwAgAh3wFAAPACACHmAUAA8AIAIfEBAQDXAgAh8gEBANgCACHzAQEA2AIAIQe5AQEA1wIAIdQBQADwAgAh3wFAAPACACHmAUAA8AIAIfEBAQDXAgAh8gEBANgCACHzAQEA2AIAIQe5AQEAAAAB1AFAAAAAAd8BQAAAAAHmAUAAAAAB8QEBAAAAAfIBAQAAAAHzAQEAAAABBBoAAPQDADD6AQAA9QMAMP4BAAD4AwAw_wEAAPcDACAEGgAA6AMAMPoBAADpAwAw_gEAAOwDADD_AQAA6wMAIAQaAADfAwAw-gEAAOADADD-AQAA-wIAMP8BAADiAwAgAxoAANoDACD6AQAA2wMAIP4BAAAaACADGgAA1QMAIPoBAADWAwAg_gEAAN4BACADGgAA0AMAIPoBAADRAwAg_gEAABIAIAAAAAMGAACSAwAguwEAANECACDPAQAA0QIAIAIGAACSAwAgCAAAuAMAIAAGCAAAuAMAINQBAADRAgAg4AEAANECACDhAQAA0QIAIOIBAADRAgAg4wEAANECACACCwAAqwMAINUBAADRAgAgB7kBAQAAAAHUAUAAAAAB3wFAAAAAAeYBQAAAAAHxAQEAAAAB8gEBAAAAAfMBAQAAAAEMuQEBAAAAAdQBQAAAAAHfAUAAAAAB5wEBAAAAAegBAQAAAAHqAQEAAAAB6wEBAAAAAewBAQAAAAHtAUAAAAAB7gFAAAAAAe8BAQAAAAHwAQEAAAABBbkBAQAAAAHRAQEAAAAB0gECAAAAAdMBAQAAAAHUAUAAAAABDgUAAIEEACAGAACEBAAgBwAAggQAIAgAAIMEACAJAACFBAAguQEBAAAAAc0BAQAAAAHUAUAAAAAB3gEBAAAAAd8BQAAAAAH0AQEAAAAB9QEgAAAAAfYBAQAAAAH3AQEAAAABAgAAAAEAIBoAAJEEACADAAAAJwAgGgAAkQQAIBsAAJUEACAQAAAAJwAgBQAAywMAIAYAAM4DACAHAADMAwAgCAAAzQMAIAkAAM8DACATAACVBAAguQEBANcCACHNAQEA1wIAIdQBQADwAgAh3gEBANgCACHfAUAA8AIAIfQBAQDXAgAh9QEgAMkDACH2AQEA2AIAIfcBAQDYAgAhDgUAAMsDACAGAADOAwAgBwAAzAMAIAgAAM0DACAJAADPAwAguQEBANcCACHNAQEA1wIAIdQBQADwAgAh3gEBANgCACHfAUAA8AIAIfQBAQDXAgAh9QEgAMkDACH2AQEA2AIAIfcBAQDYAgAhDgQAAIAEACAGAACEBAAgBwAAggQAIAgAAIMEACAJAACFBAAguQEBAAAAAc0BAQAAAAHUAUAAAAAB3gEBAAAAAd8BQAAAAAH0AQEAAAAB9QEgAAAAAfYBAQAAAAH3AQEAAAABAgAAAAEAIBoAAJYEACADAAAAJwAgGgAAlgQAIBsAAJoEACAQAAAAJwAgBAAAygMAIAYAAM4DACAHAADMAwAgCAAAzQMAIAkAAM8DACATAACaBAAguQEBANcCACHNAQEA1wIAIdQBQADwAgAh3gEBANgCACHfAUAA8AIAIfQBAQDXAgAh9QEgAMkDACH2AQEA2AIAIfcBAQDYAgAhDgQAAMoDACAGAADOAwAgBwAAzAMAIAgAAM0DACAJAADPAwAguQEBANcCACHNAQEA1wIAIdQBQADwAgAh3gEBANgCACHfAUAA8AIAIfQBAQDXAgAh9QEgAMkDACH2AQEA2AIAIfcBAQDYAgAhCgMAAIkDACAHAACGAwAgCQAAhwMAIA0AAIoDACC5AQEAAAABugEBAAAAAbsBAQAAAAG8AQgAAAABvQEAAIUDACC-AQEAAAABAgAAABoAIBoAAJsEACADAAAAGAAgGgAAmwQAIBsAAJ8EACAMAAAAGAAgAwAA3gIAIAcAANsCACAJAADcAgAgDQAA3wIAIBMAAJ8EACC5AQEA1wIAIboBAQDXAgAhuwEBANgCACG8AQgA2QIAIb0BAADaAgAgvgEBANgCACEKAwAA3gIAIAcAANsCACAJAADcAgAgDQAA3wIAILkBAQDXAgAhugEBANcCACG7AQEA2AIAIbwBCADZAgAhvQEAANoCACC-AQEA2AIAIQoDAACJAwAgBwAAhgMAIAoAAIgDACANAACKAwAguQEBAAAAAboBAQAAAAG7AQEAAAABvAEIAAAAAb0BAACFAwAgvgEBAAAAAQIAAAAaACAaAACgBAAgAwAAABgAIBoAAKAEACAbAACkBAAgDAAAABgAIAMAAN4CACAHAADbAgAgCgAA3QIAIA0AAN8CACATAACkBAAguQEBANcCACG6AQEA1wIAIbsBAQDYAgAhvAEIANkCACG9AQAA2gIAIL4BAQDYAgAhCgMAAN4CACAHAADbAgAgCgAA3QIAIA0AAN8CACC5AQEA1wIAIboBAQDXAgAhuwEBANgCACG8AQgA2QIAIb0BAADaAgAgvgEBANgCACEFuQEBAAAAAboBAQAAAAG7AQEAAAABvAEIAAAAAb0BAACFAwAgCgMAAIkDACAJAACHAwAgCgAAiAMAIA0AAIoDACC5AQEAAAABugEBAAAAAbsBAQAAAAG8AQgAAAABvQEAAIUDACC-AQEAAAABAgAAABoAIBoAAKYEACADAAAAGAAgGgAApgQAIBsAAKoEACAMAAAAGAAgAwAA3gIAIAkAANwCACAKAADdAgAgDQAA3wIAIBMAAKoEACC5AQEA1wIAIboBAQDXAgAhuwEBANgCACG8AQgA2QIAIb0BAADaAgAgvgEBANgCACEKAwAA3gIAIAkAANwCACAKAADdAgAgDQAA3wIAILkBAQDXAgAhugEBANcCACG7AQEA2AIAIbwBCADZAgAhvQEAANoCACC-AQEA2AIAIQ4EAACABAAgBQAAgQQAIAcAAIIEACAIAACDBAAgCQAAhQQAILkBAQAAAAHNAQEAAAAB1AFAAAAAAd4BAQAAAAHfAUAAAAAB9AEBAAAAAfUBIAAAAAH2AQEAAAAB9wEBAAAAAQIAAAABACAaAACrBAAgAwAAACcAIBoAAKsEACAbAACvBAAgEAAAACcAIAQAAMoDACAFAADLAwAgBwAAzAMAIAgAAM0DACAJAADPAwAgEwAArwQAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQ4EAADKAwAgBQAAywMAIAcAAMwDACAIAADNAwAgCQAAzwMAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQO5AQEAAAABzQEBAAAAAdUBAQAAAAECAAAAsAEAIBoAALAEACAOBAAAgAQAIAUAAIEEACAGAACEBAAgBwAAggQAIAkAAIUEACC5AQEAAAABzQEBAAAAAdQBQAAAAAHeAQEAAAAB3wFAAAAAAfQBAQAAAAH1ASAAAAAB9gEBAAAAAfcBAQAAAAECAAAAAQAgGgAAsgQAIA4EAACABAAgBQAAgQQAIAYAAIQEACAIAACDBAAgCQAAhQQAILkBAQAAAAHNAQEAAAAB1AFAAAAAAd4BAQAAAAHfAUAAAAAB9AEBAAAAAfUBIAAAAAH2AQEAAAAB9wEBAAAAAQIAAAABACAaAAC0BAAgAwAAACcAIBoAALQEACAbAAC4BAAgEAAAACcAIAQAAMoDACAFAADLAwAgBgAAzgMAIAgAAM0DACAJAADPAwAgEwAAuAQAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQ4EAADKAwAgBQAAywMAIAYAAM4DACAIAADNAwAgCQAAzwMAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQW5AQEAAAABzgEBAAAAAdIBAgAAAAHTAQEAAAAB1AFAAAAAAQ4EAACABAAgBQAAgQQAIAYAAIQEACAHAACCBAAgCAAAgwQAILkBAQAAAAHNAQEAAAAB1AFAAAAAAd4BAQAAAAHfAUAAAAAB9AEBAAAAAfUBIAAAAAH2AQEAAAAB9wEBAAAAAQIAAAABACAaAAC6BAAgAwAAACcAIBoAALoEACAbAAC-BAAgEAAAACcAIAQAAMoDACAFAADLAwAgBgAAzgMAIAcAAMwDACAIAADNAwAgEwAAvgQAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQ4EAADKAwAgBQAAywMAIAYAAM4DACAHAADMAwAgCAAAzQMAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQm5AQEAAAABzgEBAAAAAdQBQAAAAAHZAQEAAAAB2gFAAAAAAdsBQAAAAAHcAQIAAAAB3gEAAADeAQLfAUAAAAABAwAAABYAIBoAALAEACAbAADCBAAgBQAAABYAIBMAAMIEACC5AQEA1wIAIc0BAQDXAgAh1QEBANgCACEDuQEBANcCACHNAQEA1wIAIdUBAQDYAgAhAwAAACcAIBoAALIEACAbAADFBAAgEAAAACcAIAQAAMoDACAFAADLAwAgBgAAzgMAIAcAAMwDACAJAADPAwAgEwAAxQQAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQ4EAADKAwAgBQAAywMAIAYAAM4DACAHAADMAwAgCQAAzwMAILkBAQDXAgAhzQEBANcCACHUAUAA8AIAId4BAQDYAgAh3wFAAPACACH0AQEA1wIAIfUBIADJAwAh9gEBANgCACH3AQEA2AIAIQcEBgIFCgMGIQsHDgQIHwUJIgYMAAwBAwABAQMAAQIGAAEIAAUGAwABBw8ECRMGChUHDAAKDRcIAgYAAQgABQEIAAUCCxsFDAAJAQscAAIHHQAJHgABBgABAwQjAAUkAAclAAAAAAMMABEgABIhABMAAAADDAARIAASIQATAQMAAQEDAAEDDAAYIAAZIQAaAAAAAwwAGCAAGSEAGgEDAAEBAwABAwwAHyAAICEAIQAAAAMMAB8gACAhACEAAAADDAAnIAAoIQApAAAAAwwAJyAAKCEAKQEIAAUBCAAFAwwALiAALyEAMAAAAAMMAC4gAC8hADACBgABCAAFAgYAAQgABQUMADUgADghADlyADZzADcAAAAAAAUMADUgADghADlyADZzADcAAAMMAD4gAD8hAEAAAAADDAA-IAA_IQBAAgYAAQgABQIGAAEIAAUFDABFIABIIQBJcgBGcwBHAAAAAAAFDABFIABIIQBJcgBGcwBHAQYAAQEGAAEDDABOIABPIQBQAAAAAwwATiAATyEAUAIDAAENgAIIAgMAAQ2GAggFDABVIABYIQBZcgBWcwBXAAAAAAAFDABVIABYIQBZcgBWcwBXDgIBDyYBECkBESoBEisBFC0BFS8NFjAOFzIBGDQNGTUPHDYBHTcBHjgNIjsQIzwUJD0CJT4CJj8CJ0ACKEECKUMCKkUNK0YVLEgCLUoNLksWL0wCME0CMU4NMlEXM1IbNFMDNVQDNlUDN1YDOFcDOVkDOlsNO1wcPF4DPWANPmEdP2IDQGMDQWQNQmceQ2giRGojRWsjRm4jR28jSHAjSXIjSnQNS3UkTHcjTXkNTnolT3sjUHwjUX0NUoABJlOBASpUgwEHVYQBB1aGAQdXhwEHWIgBB1mKAQdajAENW40BK1yPAQddkQENXpIBLF-TAQdglAEHYZUBDWKYAS1jmQExZJoBBmWbAQZmnAEGZ50BBmieAQZpoAEGaqIBDWujATJspQEGbacBDW6oATNvqQEGcKoBBnGrAQ10rgE0da8BOnaxAQh3sgEIeLQBCHm1AQh6tgEIe7gBCHy6AQ19uwE7fr0BCH-_AQ2AAcABPIEBwQEIggHCAQiDAcMBDYQBxgE9hQHHAUGGAcgBBIcByQEEiAHKAQSJAcsBBIoBzAEEiwHOAQSMAdABDY0B0QFCjgHTAQSPAdUBDZAB1gFDkQHXAQSSAdgBBJMB2QENlAHcAUSVAd0BSpYB3wELlwHgAQuYAeIBC5kB4wELmgHkAQubAeYBC5wB6AENnQHpAUueAesBC58B7QENoAHuAUyhAe8BC6IB8AELowHxAQ2kAfQBTaUB9QFRpgH2AQWnAfcBBagB-AEFqQH5AQWqAfoBBasB_AEFrAH-AQ2tAf8BUq4BggIFrwGEAg2wAYUCU7EBhwIFsgGIAgWzAYkCDbQBjAJUtQGNAlo"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("./query_compiler_fast_bg.postgresql-X56IMUGT.js"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("./query_compiler_fast_bg.postgresql.wasm-base64-N6OX5PLU.js");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// prisma/generated/prisma/internal/prismaNamespace.ts
var runtime2 = __toESM(require_client(), 1);
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes3 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// prisma/generated/prisma/enums.ts
var UserRole = {
  STUDENT: "STUDENT",
  TUTOR: "TUTOR",
  ADMIN: "ADMIN"
};

// prisma/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var globalForPrisma = globalThis;
var connectionString = process.env.DATABASE_URL;
var adapter = new PrismaPg({ connectionString });
var prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter
});
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// src/lib/auth.ts
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
    // or "mysql", "postgresql", ...etc
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: ["http://localhost:3000"],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "STUDENT",
        required: false
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false
      }
    }
  },
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  }
});

// src/modules/tutor/tutor.router.ts
import express from "express";

// src/modules/tutor/tutor.service.ts
var getTutor = async (search, rating, price, categoryName) => {
  const tutors = await prisma.tutorProfile.findMany({
    where: {
      AND: [
        ...search ? [{ subjects: { hasSome: [search] } }] : [],
        ...price ? [{ hourlyRate: { lte: price } }] : [],
        ...rating ? [
          {
            review: {
              some: {
                rating: { gte: rating }
              }
            }
          }
        ] : [],
        ...categoryName ? [{ category: { name: categoryName } }] : []
      ]
    },
    include: {
      availability: true,
      category: true,
      user: true,
      review: {
        select: {
          rating: true
        }
      },
      _count: {
        select: {
          review: true
        }
      }
    }
  });
  const result = tutors.map((tutor) => {
    const avg = tutor.review.length > 0 ? tutor.review.reduce((sum, r) => sum + r.rating, 0) / tutor.review.length : 0;
    return {
      ...tutor,
      avgRating: Number(avg.toFixed(1))
    };
  });
  return result;
};
var postTutor = async (payload, id) => {
  const userExist = await prisma.tutorProfile.findUnique({
    where: {
      authorId: id
    }
  });
  if (userExist) {
    return "user already exist";
  }
  const result = await prisma.tutorProfile.create({
    data: { ...payload, authorId: id }
  });
  return result;
};
var getTutorById = async (id) => {
  const tutor = await prisma.tutorProfile.findFirstOrThrow({
    where: {
      id
    },
    include: {
      availability: true,
      category: true,
      user: true,
      booking: true,
      review: {
        select: {
          rating: true
        }
      },
      _count: {
        select: {
          review: true
        }
      }
    }
  });
  const avg = tutor?.review.length > 0 ? tutor.review.reduce((sum, r) => sum + r.rating, 0) / tutor.review.length : 0;
  return {
    ...tutor,
    avgRating: Number(avg.toFixed(1))
  };
};
var getTutorDetailsById = async (id) => {
  const tutor = await prisma.tutorProfile.findFirstOrThrow({
    where: {
      authorId: id
    },
    include: {
      availability: true,
      category: true,
      user: true,
      booking: true,
      review: {
        select: {
          rating: true
        }
      },
      _count: {
        select: {
          review: true
        }
      }
    }
  });
  const avg = tutor?.review.length > 0 ? tutor.review.reduce((sum, r) => sum + r.rating, 0) / tutor.review.length : 0;
  return {
    ...tutor,
    avgRating: Number(avg.toFixed(1))
  };
};
var putTutorProfile = async (payload, userId) => {
  const result = await prisma.tutorProfile.update({
    where: {
      authorId: userId
    },
    data: { ...payload }
  });
  return result;
};
var tutorService = {
  getTutor,
  getTutorById,
  getTutorDetailsById,
  postTutor,
  putTutorProfile
};

// src/modules/tutor/tutor.controller.ts
var getTutor2 = async (req, res, next) => {
  try {
    const { search, rating, price, category } = req.query;
    const searchString = typeof search === "string" ? search : "";
    const categoryName = typeof category === "string" ? category : "";
    const ratingNumber = typeof rating === "string" && !isNaN(Number(rating)) ? Number(rating) : 0;
    const priceNumber = typeof price === "string" && !isNaN(Number(price)) ? Number(price) : 0;
    const result = await tutorService.getTutor(
      searchString,
      ratingNumber,
      priceNumber,
      categoryName
    );
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No tutor data found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Required data fetched successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var postTutor2 = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.send("unauthorized");
    }
    const result = await tutorService.postTutor(req.body, req.user.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor Data has not created"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor Data has created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getTutorById2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("No Id provide");
    }
    const result = await tutorService.getTutorById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor info not get"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor profile info got successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getTutorDetailsById2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("No Id provide");
    }
    const result = await tutorService.getTutorDetailsById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor info not get"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor profile info got successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var putTutorProfile2 = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.send("Unathorized");
    }
    const result = await tutorService.putTutorProfile(req.body, req.user.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor profile not update."
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var tutorController = {
  getTutor: getTutor2,
  getTutorById: getTutorById2,
  getTutorDetailsById: getTutorDetailsById2,
  postTutor: postTutor2,
  putTutorProfile: putTutorProfile2
};

// src/middleware/auth.ts
var auth2 = (...Roles) => {
  return async (req, res, next) => {
    try {
      const session = await auth.api.getSession({
        headers: req.headers
      });
      console.log(session);
      if (!session) {
        return res.status(401).json({
          success: false,
          message: " You are Not authorized."
        });
      }
      req.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role || ""
      };
      if (!Roles.length && Roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden! You don't have permission to access this resources."
        });
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
};

// src/modules/tutor/tutor.router.ts
var router = express.Router();
router.get("/", tutorController.getTutor);
router.get("/:id", tutorController.getTutorById);
router.get("/details/:id", tutorController.getTutorDetailsById);
router.post("/profile", auth2(UserRole.TUTOR), tutorController.postTutor);
router.put("/profile", auth2(UserRole.TUTOR), tutorController.putTutorProfile);
var tutorRoute = router;

// src/modules/booking/booking.router.ts
import express2 from "express";

// src/modules/booking/booking.service.ts
var getBooking = async () => {
  const result = await prisma.booking.findMany({
    include: {
      student: true,
      tutor: {
        include: {
          user: true
        }
      }
    }
  });
  return result;
};
var getBookingById = async (id) => {
  const result = await prisma.booking.findMany({
    where: {
      studentId: id
    },
    include: {
      student: true,
      tutor: {
        include: {
          user: true
        }
      }
    }
  });
  return result;
};
var postBooking = async (payload, userid) => {
  console.log("post booking ", payload);
  const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
    where: {
      id: payload.tutorId
    }
  });
  console.log("tutor profile", tutorProfile);
  const result = await prisma.booking.create({
    data: {
      subject: payload.subject,
      date: payload.date,
      status: payload.status,
      studentId: userid,
      tutorId: payload.tutorId,
      time: payload.time,
      duration: payload.duration
    }
  });
  console.log("booking create ", result);
  return result;
};
var deleteBookingId = async (id) => {
  const result = await prisma.booking.delete({
    where: {
      id
    }
  });
  return result;
};
var bookingService = {
  getBooking,
  postBooking,
  getBookingById,
  deleteBookingId
};

// src/modules/booking/booking.controller.ts
var getBooking2 = async (req, res, next) => {
  try {
    const result = await bookingService.getBooking();
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Booking has not got"
      });
    }
    res.status(200).json({
      success: true,
      message: "Booking Data fetch Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getBookingById2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("No ID");
    }
    const result = await bookingService.getBookingById(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Booking data has not got"
      });
    }
    res.status(200).json({
      success: true,
      message: "Booking data has got Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var postBooking2 = async (req, res, next) => {
  try {
    const bookingInfo = req.body;
    if (!req.user) {
      return res.send("Unauthorized");
    }
    const result = await bookingService.postBooking(bookingInfo, req.user.id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Booking has not created"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Booking Data has created Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("No ID");
    }
    const result = await bookingService.deleteBookingId(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Booking data has not deleted"
      });
    }
    res.status(200).json({
      success: true,
      message: "Booking data has deleted Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var bookingController = {
  getBooking: getBooking2,
  postBooking: postBooking2,
  getBookingById: getBookingById2,
  deleteBookingById
};

// src/modules/booking/booking.router.ts
var router2 = express2.Router();
router2.get("/", bookingController.getBooking);
router2.get("/:id", bookingController.getBookingById);
router2.delete("/:id", bookingController.deleteBookingById);
router2.post("/", auth2(UserRole.STUDENT), bookingController.postBooking);
var bookingRoute = router2;

// src/modules/review/review.router.ts
import express3 from "express";

// src/modules/review/review.service.ts
var getReview = async () => {
  const result = await prisma.review.findMany();
  return result;
};
var getReviewById = async (id) => {
  const result = await prisma.review.findMany({
    where: {
      tutorId: id
    },
    include: {
      student: true
    }
  });
  return result;
};
var postReview = async (payload, userid) => {
  const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
    where: {
      id: payload.tutorId
    }
  });
  const result = await prisma.review.create({
    data: {
      rating: payload.rating,
      comment: payload.comment,
      studentId: userid,
      tutorId: payload.tutorId
    }
  });
  return result;
};
var reviewsService = {
  getReview,
  postReview,
  getReviewById
};

// src/modules/review/review.controller.ts
var getReview2 = async (req, res, next) => {
  try {
    const result = await reviewsService.getReview();
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Review has not got"
      });
    }
    res.status(200).json({
      success: true,
      message: "Review Data fetch Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getReviewById2 = async (req, res, next) => {
  try {
    if (!req.params) {
      return res.send("id not provide");
    }
    const id = req.params.id;
    const result = await reviewsService.getReviewById(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Review has not got"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Review Data fetch Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var postReview2 = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    if (!req.user) {
      return res.send("unauthorized");
    }
    const result = await reviewsService.postReview(req.body, req.user.id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Review has not created"
      });
    }
    return res.status(201).json({
      success: true,
      message: "Review Data has created Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var reviewsController = {
  getReview: getReview2,
  postReview: postReview2,
  getReviewById: getReviewById2
};

// src/modules/review/review.router.ts
var router3 = express3.Router();
router3.post("/", auth2(UserRole.STUDENT), reviewsController.postReview);
router3.get("/", reviewsController.getReview);
router3.get("/:id", reviewsController.getReviewById);
var reviewsRoute = router3;

// src/modules/categories/categories.router.ts
import express4 from "express";

// src/modules/categories/categories.service.ts
var getCategory = async () => {
  const result = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          tutors: true
        }
      }
    }
  });
  return result;
};
var postCategory = async (payload) => {
  const result = await prisma.category.create({
    data: {
      name: payload.name,
      description: payload.description
    }
  });
  return result;
};
var deleteCategory = async (id) => {
  const result = await prisma.category.delete({
    where: {
      id
    }
  });
  return result;
};
var CategoriesService = {
  getCategory,
  postCategory,
  deleteCategory
};

// src/modules/categories/categories.controller.ts
var getCategory2 = async (req, res, next) => {
  try {
    const result = await CategoriesService.getCategory();
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Category has not got"
      });
    }
    res.status(200).json({
      success: true,
      message: "Category Data fetch Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var postCategory2 = async (req, res, next) => {
  try {
    const result = await CategoriesService.postCategory(req.body);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Category has not created"
      });
    }
    res.status(201).json({
      success: true,
      message: "Category Data has created Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteCategory2 = async (req, res, next) => {
  try {
    if (!req.params) {
      return res.send("there is not id provided");
    }
    const { id } = req.params;
    const result = await CategoriesService.deleteCategory(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Category has not deleted"
      });
    }
    res.status(201).json({
      success: true,
      message: "Category Data has deleted Successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var categoriesController = {
  getCategory: getCategory2,
  postCategory: postCategory2,
  deleteCategory: deleteCategory2
};

// src/modules/categories/categories.router.ts
var router4 = express4.Router();
router4.get("/", categoriesController.getCategory);
router4.post("/", categoriesController.postCategory);
router4.delete("/:id", auth2(UserRole.ADMIN), categoriesController.deleteCategory);
var categoriesRoute = router4;

// src/modules/admin/admin.router.ts
import express5 from "express";

// src/modules/admin/admin.service.ts
var getUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};
var getUsersById = async (id) => {
  const result = await prisma.user.findFirst({
    where: {
      id
    },
    include: {
      student: true,
      booking: true,
      tutor: true
    }
  });
  return result;
};
var patchUsersById = async (payload) => {
  const result = await prisma.user.update({
    where: {
      id: payload.id
    },
    data: {
      status: payload.status
    }
  });
  return result;
};
var getStats = async () => {
  return await prisma.$transaction(async (tx) => {
    const [users, totalUser, bookings, totalBooking, totalCategory] = await Promise.all([
      await tx.user.findMany({ orderBy: { createdAt: "desc" } }),
      await tx.user.count(),
      await tx.booking.findMany({ include: { student: true, tutor: true }, orderBy: { createdAt: "desc" } }),
      await tx.booking.count(),
      await tx.category.count()
    ]);
    return {
      users,
      totalUser,
      bookings,
      totalBooking,
      totalCategory
    };
  });
};
var userService = {
  getUsers,
  getUsersById,
  getStats,
  patchUsersById
};

// src/modules/admin/admin.controller.ts
var getUsers2 = async (req, res) => {
  try {
    const result = await userService.getUsers();
    res.status(200).json({
      success: true,
      message: "Users Data fetch Successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal error",
      error
    });
  }
};
var getUsersById2 = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send("No Id");
    }
    const result = await userService.getUsersById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor availability not update"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor availability updated successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal error",
      error
    });
  }
};
var patchUsersById2 = async (req, res, next) => {
  try {
    console.log("data status ", req.body);
    const result = await userService.patchUsersById(req.body);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "User Status not update"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor availability updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getStats2 = async (req, res, next) => {
  try {
    const result = await userService.getStats();
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Stats Data not fetch"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Stats Data fetch successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var userController = {
  getUsers: getUsers2,
  getUsersById: getUsersById2,
  getStats: getStats2,
  patchUsersById: patchUsersById2
};

// src/modules/admin/admin.router.ts
var router5 = express5.Router();
router5.get("/users", auth2(UserRole.ADMIN), userController.getUsers);
router5.get("/users/:id", auth2(UserRole.ADMIN, UserRole.STUDENT), userController.getUsersById);
router5.patch("/users", auth2(UserRole.ADMIN, UserRole.STUDENT), userController.patchUsersById);
router5.get("/stats", auth2(UserRole.ADMIN), userController.getStats);
var userRoute = router5;

// src/middleware/notFound.ts
var notFound = (req, res) => {
  return res.status(400).json({
    message: "Route Not Found!",
    path: req.originalUrl,
    date: Date()
  });
};

// src/modules/availability/availability.router.ts
import express6 from "express";

// src/modules/availability/availability.service.ts
var getAvailability = async () => {
  const result = await prisma.availability.findMany();
  return result;
};
var postAvailability = async (payload) => {
  const result = await prisma.availability.create({
    data: payload
  });
  return result;
};
var putAvailability = async (payload) => {
  const result = await prisma.availability.update({
    where: {
      tutorId: payload.id
    },
    data: payload
  });
  return result;
};
var availabilityService = {
  getAvailability,
  postAvailability,
  putAvailability
};

// src/modules/availability/availability.controller.ts
var getAvailability2 = async (req, res, next) => {
  try {
    const result = await availabilityService.getAvailability();
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor availability not get"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor availability fetched successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var postAvailability2 = async (req, res, next) => {
  try {
    const result = await availabilityService.postAvailability(req.body);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor availability not create"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor availability created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var putAvailability2 = async (req, res, next) => {
  try {
    const result = await availabilityService.putAvailability(req.body);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor availability not update"
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor availability updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var availabilityController = {
  getAvailability: getAvailability2,
  postAvailability: postAvailability2,
  putAvailability: putAvailability2
};

// src/modules/availability/availability.router.ts
var router6 = express6.Router();
router6.get("/", auth2(UserRole.TUTOR), availabilityController.getAvailability);
router6.post("/", auth2(UserRole.TUTOR), availabilityController.postAvailability);
router6.put("/", auth2(UserRole.TUTOR), availabilityController.putAvailability);
var availabilityRoute = router6;

// src/app.ts
var app = express7();
app.use(express7.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/tutors", tutorRoute);
app.use("/api/tutor", tutorRoute);
app.use("/api/availability", availabilityRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/reviews", reviewsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/admin", userRoute);
app.get("/", (req, res) => {
  res.send("Hello, Skill Bridge World!");
});
app.use(notFound);
var app_default = app;

// src/index.ts
var index_default = app_default;
export {
  index_default as default
};
/*! Bundled license information:

@prisma/client-runtime-utils/dist/index.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)

@prisma/client/runtime/client.js:
  (*! Bundled license information:
  
  @noble/hashes/utils.js:
    (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  *)
*/
