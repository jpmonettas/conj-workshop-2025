// Compiled by ClojureScript 0.0.340664477 {:optimizations :simple}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true);

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar");

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28987__auto__,writer__28988__auto__,opt__28989__auto__){
return cljs.core._write.call(null,writer__28988__auto__,"cljs.spec.gen.alpha/LazyVar");
}));

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34801 = arguments.length;
var i__29639__auto___34802 = (0);
while(true){
if((i__29639__auto___34802 < len__29638__auto___34801)){
args__29648__auto__.push((arguments[i__29639__auto___34802]));

var G__34803 = (i__29639__auto___34802 + (1));
i__29639__auto___34802 = G__34803;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
}));

(cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq34800){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34800));
}));

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34805 = arguments.length;
var i__29639__auto___34806 = (0);
while(true){
if((i__29639__auto___34806 < len__29638__auto___34805)){
args__29648__auto__.push((arguments[i__29639__auto___34806]));

var G__34807 = (i__29639__auto___34806 + (1));
i__29639__auto___34806 = G__34807;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
}));

(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq34804){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34804));
}));

var g_QMARK__34808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_34809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
}),null));
var mkg_34810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.generator_QMARK_ = (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34808).call(null,x);
});

cljs.spec.gen.alpha.generator = (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_34810).call(null,gfn);
});

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_34809).call(null,generator);
});
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34772__auto___34831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34832 = arguments.length;
var i__29639__auto___34833 = (0);
while(true){
if((i__29639__auto___34833 < len__29638__auto___34832)){
args__29648__auto__.push((arguments[i__29639__auto___34833]));

var G__34834 = (i__29639__auto___34833 + (1));
i__29639__auto___34833 = G__34834;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34831),args);
}));

(cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = (function (seq34811){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34811));
}));


var g__34772__auto___34835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = (function cljs$spec$gen$alpha$list(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34836 = arguments.length;
var i__29639__auto___34837 = (0);
while(true){
if((i__29639__auto___34837 < len__29638__auto___34836)){
args__29648__auto__.push((arguments[i__29639__auto___34837]));

var G__34838 = (i__29639__auto___34837 + (1));
i__29639__auto___34837 = G__34838;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34835),args);
}));

(cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.list.cljs$lang$applyTo = (function (seq34812){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34812));
}));


var g__34772__auto___34839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = (function cljs$spec$gen$alpha$map(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34840 = arguments.length;
var i__29639__auto___34841 = (0);
while(true){
if((i__29639__auto___34841 < len__29638__auto___34840)){
args__29648__auto__.push((arguments[i__29639__auto___34841]));

var G__34842 = (i__29639__auto___34841 + (1));
i__29639__auto___34841 = G__34842;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34839),args);
}));

(cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.map.cljs$lang$applyTo = (function (seq34813){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34813));
}));


var g__34772__auto___34843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34844 = arguments.length;
var i__29639__auto___34845 = (0);
while(true){
if((i__29639__auto___34845 < len__29638__auto___34844)){
args__29648__auto__.push((arguments[i__29639__auto___34845]));

var G__34846 = (i__29639__auto___34845 + (1));
i__29639__auto___34845 = G__34846;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34843),args);
}));

(cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = (function (seq34814){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34814));
}));


var g__34772__auto___34847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = (function cljs$spec$gen$alpha$set(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34848 = arguments.length;
var i__29639__auto___34849 = (0);
while(true){
if((i__29639__auto___34849 < len__29638__auto___34848)){
args__29648__auto__.push((arguments[i__29639__auto___34849]));

var G__34850 = (i__29639__auto___34849 + (1));
i__29639__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34847),args);
}));

(cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.set.cljs$lang$applyTo = (function (seq34815){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34815));
}));


var g__34772__auto___34851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = (function cljs$spec$gen$alpha$vector(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34852 = arguments.length;
var i__29639__auto___34853 = (0);
while(true){
if((i__29639__auto___34853 < len__29638__auto___34852)){
args__29648__auto__.push((arguments[i__29639__auto___34853]));

var G__34854 = (i__29639__auto___34853 + (1));
i__29639__auto___34853 = G__34854;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34851),args);
}));

(cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector.cljs$lang$applyTo = (function (seq34816){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34816));
}));


var g__34772__auto___34855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34856 = arguments.length;
var i__29639__auto___34857 = (0);
while(true){
if((i__29639__auto___34857 < len__29638__auto___34856)){
args__29648__auto__.push((arguments[i__29639__auto___34857]));

var G__34858 = (i__29639__auto___34857 + (1));
i__29639__auto___34857 = G__34858;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34855),args);
}));

(cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = (function (seq34817){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34817));
}));


var g__34772__auto___34859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = (function cljs$spec$gen$alpha$fmap(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34860 = arguments.length;
var i__29639__auto___34861 = (0);
while(true){
if((i__29639__auto___34861 < len__29638__auto___34860)){
args__29648__auto__.push((arguments[i__29639__auto___34861]));

var G__34862 = (i__29639__auto___34861 + (1));
i__29639__auto___34861 = G__34862;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34859),args);
}));

(cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = (function (seq34818){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34818));
}));


var g__34772__auto___34863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = (function cljs$spec$gen$alpha$elements(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34864 = arguments.length;
var i__29639__auto___34865 = (0);
while(true){
if((i__29639__auto___34865 < len__29638__auto___34864)){
args__29648__auto__.push((arguments[i__29639__auto___34865]));

var G__34866 = (i__29639__auto___34865 + (1));
i__29639__auto___34865 = G__34866;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34863),args);
}));

(cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.elements.cljs$lang$applyTo = (function (seq34819){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34819));
}));


var g__34772__auto___34867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = (function cljs$spec$gen$alpha$bind(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34868 = arguments.length;
var i__29639__auto___34869 = (0);
while(true){
if((i__29639__auto___34869 < len__29638__auto___34868)){
args__29648__auto__.push((arguments[i__29639__auto___34869]));

var G__34870 = (i__29639__auto___34869 + (1));
i__29639__auto___34869 = G__34870;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34867),args);
}));

(cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.bind.cljs$lang$applyTo = (function (seq34820){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34820));
}));


var g__34772__auto___34871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = (function cljs$spec$gen$alpha$choose(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34872 = arguments.length;
var i__29639__auto___34873 = (0);
while(true){
if((i__29639__auto___34873 < len__29638__auto___34872)){
args__29648__auto__.push((arguments[i__29639__auto___34873]));

var G__34874 = (i__29639__auto___34873 + (1));
i__29639__auto___34873 = G__34874;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34871),args);
}));

(cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.choose.cljs$lang$applyTo = (function (seq34821){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34821));
}));


var g__34772__auto___34875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = (function cljs$spec$gen$alpha$one_of(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34876 = arguments.length;
var i__29639__auto___34877 = (0);
while(true){
if((i__29639__auto___34877 < len__29638__auto___34876)){
args__29648__auto__.push((arguments[i__29639__auto___34877]));

var G__34878 = (i__29639__auto___34877 + (1));
i__29639__auto___34877 = G__34878;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34875),args);
}));

(cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = (function (seq34822){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34822));
}));


var g__34772__auto___34879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = (function cljs$spec$gen$alpha$such_that(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34880 = arguments.length;
var i__29639__auto___34881 = (0);
while(true){
if((i__29639__auto___34881 < len__29638__auto___34880)){
args__29648__auto__.push((arguments[i__29639__auto___34881]));

var G__34882 = (i__29639__auto___34881 + (1));
i__29639__auto___34881 = G__34882;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34879),args);
}));

(cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = (function (seq34823){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34823));
}));


var g__34772__auto___34883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = (function cljs$spec$gen$alpha$tuple(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34884 = arguments.length;
var i__29639__auto___34885 = (0);
while(true){
if((i__29639__auto___34885 < len__29638__auto___34884)){
args__29648__auto__.push((arguments[i__29639__auto___34885]));

var G__34886 = (i__29639__auto___34885 + (1));
i__29639__auto___34885 = G__34886;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34883),args);
}));

(cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = (function (seq34824){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34824));
}));


var g__34772__auto___34887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = (function cljs$spec$gen$alpha$sample(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34888 = arguments.length;
var i__29639__auto___34889 = (0);
while(true){
if((i__29639__auto___34889 < len__29638__auto___34888)){
args__29648__auto__.push((arguments[i__29639__auto___34889]));

var G__34890 = (i__29639__auto___34889 + (1));
i__29639__auto___34889 = G__34890;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34887),args);
}));

(cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.sample.cljs$lang$applyTo = (function (seq34825){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34825));
}));


var g__34772__auto___34891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = (function cljs$spec$gen$alpha$return(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34892 = arguments.length;
var i__29639__auto___34893 = (0);
while(true){
if((i__29639__auto___34893 < len__29638__auto___34892)){
args__29648__auto__.push((arguments[i__29639__auto___34893]));

var G__34894 = (i__29639__auto___34893 + (1));
i__29639__auto___34893 = G__34894;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34891),args);
}));

(cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.return$.cljs$lang$applyTo = (function (seq34826){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34826));
}));


var g__34772__auto___34895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34896 = arguments.length;
var i__29639__auto___34897 = (0);
while(true){
if((i__29639__auto___34897 < len__29638__auto___34896)){
args__29648__auto__.push((arguments[i__29639__auto___34897]));

var G__34898 = (i__29639__auto___34897 + (1));
i__29639__auto___34897 = G__34898;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34895),args);
}));

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = (function (seq34827){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34827));
}));


var g__34772__auto___34899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34900 = arguments.length;
var i__29639__auto___34901 = (0);
while(true){
if((i__29639__auto___34901 < len__29638__auto___34900)){
args__29648__auto__.push((arguments[i__29639__auto___34901]));

var G__34902 = (i__29639__auto___34901 + (1));
i__29639__auto___34901 = G__34902;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34899),args);
}));

(cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = (function (seq34828){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34828));
}));


var g__34772__auto___34903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = (function cljs$spec$gen$alpha$frequency(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34904 = arguments.length;
var i__29639__auto___34905 = (0);
while(true){
if((i__29639__auto___34905 < len__29638__auto___34904)){
args__29648__auto__.push((arguments[i__29639__auto___34905]));

var G__34906 = (i__29639__auto___34905 + (1));
i__29639__auto___34905 = G__34906;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34903),args);
}));

(cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = (function (seq34829){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34829));
}));


var g__34772__auto___34907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = (function cljs$spec$gen$alpha$shuffle(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34908 = arguments.length;
var i__29639__auto___34909 = (0);
while(true){
if((i__29639__auto___34909 < len__29638__auto___34908)){
args__29648__auto__.push((arguments[i__29639__auto___34909]));

var G__34910 = (i__29639__auto___34909 + (1));
i__29639__auto___34909 = G__34910;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34772__auto___34907),args);
}));

(cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = (function (seq34830){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34830));
}));

var g__34785__auto___34932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = (function cljs$spec$gen$alpha$any(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34933 = arguments.length;
var i__29639__auto___34934 = (0);
while(true){
if((i__29639__auto___34934 < len__29638__auto___34933)){
args__29648__auto__.push((arguments[i__29639__auto___34934]));

var G__34935 = (i__29639__auto___34934 + (1));
i__29639__auto___34934 = G__34935;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34932);
}));

(cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any.cljs$lang$applyTo = (function (seq34911){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34911));
}));


var g__34785__auto___34936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34937 = arguments.length;
var i__29639__auto___34938 = (0);
while(true){
if((i__29639__auto___34938 < len__29638__auto___34937)){
args__29648__auto__.push((arguments[i__29639__auto___34938]));

var G__34939 = (i__29639__auto___34938 + (1));
i__29639__auto___34938 = G__34939;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34936);
}));

(cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = (function (seq34912){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34912));
}));


var g__34785__auto___34940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = (function cljs$spec$gen$alpha$boolean(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34941 = arguments.length;
var i__29639__auto___34942 = (0);
while(true){
if((i__29639__auto___34942 < len__29638__auto___34941)){
args__29648__auto__.push((arguments[i__29639__auto___34942]));

var G__34943 = (i__29639__auto___34942 + (1));
i__29639__auto___34942 = G__34943;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34940);
}));

(cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = (function (seq34913){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34913));
}));


var g__34785__auto___34944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = (function cljs$spec$gen$alpha$char(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34945 = arguments.length;
var i__29639__auto___34946 = (0);
while(true){
if((i__29639__auto___34946 < len__29638__auto___34945)){
args__29648__auto__.push((arguments[i__29639__auto___34946]));

var G__34947 = (i__29639__auto___34946 + (1));
i__29639__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34944);
}));

(cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char$.cljs$lang$applyTo = (function (seq34914){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34914));
}));


var g__34785__auto___34948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34949 = arguments.length;
var i__29639__auto___34950 = (0);
while(true){
if((i__29639__auto___34950 < len__29638__auto___34949)){
args__29648__auto__.push((arguments[i__29639__auto___34950]));

var G__34951 = (i__29639__auto___34950 + (1));
i__29639__auto___34950 = G__34951;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34948);
}));

(cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = (function (seq34915){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34915));
}));


var g__34785__auto___34952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34953 = arguments.length;
var i__29639__auto___34954 = (0);
while(true){
if((i__29639__auto___34954 < len__29638__auto___34953)){
args__29648__auto__.push((arguments[i__29639__auto___34954]));

var G__34955 = (i__29639__auto___34954 + (1));
i__29639__auto___34954 = G__34955;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34952);
}));

(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = (function (seq34916){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34916));
}));


var g__34785__auto___34956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34957 = arguments.length;
var i__29639__auto___34958 = (0);
while(true){
if((i__29639__auto___34958 < len__29638__auto___34957)){
args__29648__auto__.push((arguments[i__29639__auto___34958]));

var G__34959 = (i__29639__auto___34958 + (1));
i__29639__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34956);
}));

(cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = (function (seq34917){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34917));
}));


var g__34785__auto___34960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = (function cljs$spec$gen$alpha$double(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34961 = arguments.length;
var i__29639__auto___34962 = (0);
while(true){
if((i__29639__auto___34962 < len__29638__auto___34961)){
args__29648__auto__.push((arguments[i__29639__auto___34962]));

var G__34963 = (i__29639__auto___34962 + (1));
i__29639__auto___34962 = G__34963;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34960);
}));

(cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.double$.cljs$lang$applyTo = (function (seq34918){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34918));
}));


var g__34785__auto___34964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = (function cljs$spec$gen$alpha$int(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34965 = arguments.length;
var i__29639__auto___34966 = (0);
while(true){
if((i__29639__auto___34966 < len__29638__auto___34965)){
args__29648__auto__.push((arguments[i__29639__auto___34966]));

var G__34967 = (i__29639__auto___34966 + (1));
i__29639__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34964);
}));

(cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.int$.cljs$lang$applyTo = (function (seq34919){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34919));
}));


var g__34785__auto___34968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = (function cljs$spec$gen$alpha$keyword(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34969 = arguments.length;
var i__29639__auto___34970 = (0);
while(true){
if((i__29639__auto___34970 < len__29638__auto___34969)){
args__29648__auto__.push((arguments[i__29639__auto___34970]));

var G__34971 = (i__29639__auto___34970 + (1));
i__29639__auto___34970 = G__34971;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34968);
}));

(cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = (function (seq34920){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34920));
}));


var g__34785__auto___34972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34973 = arguments.length;
var i__29639__auto___34974 = (0);
while(true){
if((i__29639__auto___34974 < len__29638__auto___34973)){
args__29648__auto__.push((arguments[i__29639__auto___34974]));

var G__34975 = (i__29639__auto___34974 + (1));
i__29639__auto___34974 = G__34975;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34972);
}));

(cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = (function (seq34921){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34921));
}));


var g__34785__auto___34976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34977 = arguments.length;
var i__29639__auto___34978 = (0);
while(true){
if((i__29639__auto___34978 < len__29638__auto___34977)){
args__29648__auto__.push((arguments[i__29639__auto___34978]));

var G__34979 = (i__29639__auto___34978 + (1));
i__29639__auto___34978 = G__34979;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34976);
}));

(cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = (function (seq34922){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34922));
}));


var g__34785__auto___34980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = (function cljs$spec$gen$alpha$ratio(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34981 = arguments.length;
var i__29639__auto___34982 = (0);
while(true){
if((i__29639__auto___34982 < len__29638__auto___34981)){
args__29648__auto__.push((arguments[i__29639__auto___34982]));

var G__34983 = (i__29639__auto___34982 + (1));
i__29639__auto___34982 = G__34983;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34980);
}));

(cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = (function (seq34923){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34923));
}));


var g__34785__auto___34984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34985 = arguments.length;
var i__29639__auto___34986 = (0);
while(true){
if((i__29639__auto___34986 < len__29638__auto___34985)){
args__29648__auto__.push((arguments[i__29639__auto___34986]));

var G__34987 = (i__29639__auto___34986 + (1));
i__29639__auto___34986 = G__34987;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34984);
}));

(cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = (function (seq34924){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34924));
}));


var g__34785__auto___34988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34989 = arguments.length;
var i__29639__auto___34990 = (0);
while(true){
if((i__29639__auto___34990 < len__29638__auto___34989)){
args__29648__auto__.push((arguments[i__29639__auto___34990]));

var G__34991 = (i__29639__auto___34990 + (1));
i__29639__auto___34990 = G__34991;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34988);
}));

(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = (function (seq34925){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34925));
}));


var g__34785__auto___34992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = (function cljs$spec$gen$alpha$string(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34993 = arguments.length;
var i__29639__auto___34994 = (0);
while(true){
if((i__29639__auto___34994 < len__29638__auto___34993)){
args__29648__auto__.push((arguments[i__29639__auto___34994]));

var G__34995 = (i__29639__auto___34994 + (1));
i__29639__auto___34994 = G__34995;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34992);
}));

(cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string.cljs$lang$applyTo = (function (seq34926){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34926));
}));


var g__34785__auto___34996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29648__auto__ = [];
var len__29638__auto___34997 = arguments.length;
var i__29639__auto___34998 = (0);
while(true){
if((i__29639__auto___34998 < len__29638__auto___34997)){
args__29648__auto__.push((arguments[i__29639__auto___34998]));

var G__34999 = (i__29639__auto___34998 + (1));
i__29639__auto___34998 = G__34999;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___34996);
}));

(cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = (function (seq34927){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34927));
}));


var g__34785__auto___35000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29648__auto__ = [];
var len__29638__auto___35001 = arguments.length;
var i__29639__auto___35002 = (0);
while(true){
if((i__29639__auto___35002 < len__29638__auto___35001)){
args__29648__auto__.push((arguments[i__29639__auto___35002]));

var G__35003 = (i__29639__auto___35002 + (1));
i__29639__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___35000);
}));

(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = (function (seq34928){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34928));
}));


var g__34785__auto___35004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = (function cljs$spec$gen$alpha$symbol(var_args){
var args__29648__auto__ = [];
var len__29638__auto___35005 = arguments.length;
var i__29639__auto___35006 = (0);
while(true){
if((i__29639__auto___35006 < len__29638__auto___35005)){
args__29648__auto__.push((arguments[i__29639__auto___35006]));

var G__35007 = (i__29639__auto___35006 + (1));
i__29639__auto___35006 = G__35007;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___35004);
}));

(cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = (function (seq34929){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34929));
}));


var g__34785__auto___35008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29648__auto__ = [];
var len__29638__auto___35009 = arguments.length;
var i__29639__auto___35010 = (0);
while(true){
if((i__29639__auto___35010 < len__29638__auto___35009)){
args__29648__auto__.push((arguments[i__29639__auto___35010]));

var G__35011 = (i__29639__auto___35010 + (1));
i__29639__auto___35010 = G__35011;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___35008);
}));

(cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = (function (seq34930){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34930));
}));


var g__34785__auto___35012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = (function cljs$spec$gen$alpha$uuid(var_args){
var args__29648__auto__ = [];
var len__29638__auto___35013 = arguments.length;
var i__29639__auto___35014 = (0);
while(true){
if((i__29639__auto___35014 < len__29638__auto___35013)){
args__29648__auto__.push((arguments[i__29639__auto___35014]));

var G__35015 = (i__29639__auto___35014 + (1));
i__29639__auto___35014 = G__35015;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.deref.call(null,g__34785__auto___35012);
}));

(cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = (function (seq34931){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34931));
}));

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29648__auto__ = [];
var len__29638__auto___35018 = arguments.length;
var i__29639__auto___35019 = (0);
while(true){
if((i__29639__auto___35019 < len__29638__auto___35018)){
args__29648__auto__.push((arguments[i__29639__auto___35019]));

var G__35020 = (i__29639__auto___35019 + (1));
i__29639__auto___35019 = G__35020;
continue;
} else {
}
break;
}

var argseq__29649__auto__ = ((((0) < args__29648__auto__.length))?(new cljs.core.IndexedSeq(args__29648__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29649__auto__);
});

(cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35016_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35016_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
}));

(cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35017){
var self__29624__auto__ = this;
return self__29624__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35017));
}));

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,(function (p1__35022_SHARP_){
return (new Date(p1__35022_SHARP_));
}),cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,(function (p1__35021_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35021_SHARP_),".com"].join('')));
}),cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
