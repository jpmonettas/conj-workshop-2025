// Compiled by ClojureScript 0.0.340664477 {:optimizations :simple}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35914){
var map__35915 = p__35914;
var map__35915__$1 = cljs.core.__destructure_map.call(null,map__35915);
var m = map__35915__$1;
var n = cljs.core.get.call(null,map__35915__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35915__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__28310__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return [(function (){var temp__5849__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5849__auto__)){
var ns = temp__5849__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35916_35944 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35917_35945 = null;
var count__35918_35946 = (0);
var i__35919_35947 = (0);
while(true){
if((i__35919_35947 < count__35918_35946)){
var f_35948 = cljs.core._nth.call(null,chunk__35917_35945,i__35919_35947);
cljs.core.println.call(null,"  ",f_35948);


var G__35949 = seq__35916_35944;
var G__35950 = chunk__35917_35945;
var G__35951 = count__35918_35946;
var G__35952 = (i__35919_35947 + (1));
seq__35916_35944 = G__35949;
chunk__35917_35945 = G__35950;
count__35918_35946 = G__35951;
i__35919_35947 = G__35952;
continue;
} else {
var temp__5849__auto___35953 = cljs.core.seq.call(null,seq__35916_35944);
if(temp__5849__auto___35953){
var seq__35916_35954__$1 = temp__5849__auto___35953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35916_35954__$1)){
var c__29281__auto___35955 = cljs.core.chunk_first.call(null,seq__35916_35954__$1);
var G__35956 = cljs.core.chunk_rest.call(null,seq__35916_35954__$1);
var G__35957 = c__29281__auto___35955;
var G__35958 = cljs.core.count.call(null,c__29281__auto___35955);
var G__35959 = (0);
seq__35916_35944 = G__35956;
chunk__35917_35945 = G__35957;
count__35918_35946 = G__35958;
i__35919_35947 = G__35959;
continue;
} else {
var f_35960 = cljs.core.first.call(null,seq__35916_35954__$1);
cljs.core.println.call(null,"  ",f_35960);


var G__35961 = cljs.core.next.call(null,seq__35916_35954__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35916_35944 = G__35961;
chunk__35917_35945 = G__35962;
count__35918_35946 = G__35963;
i__35919_35947 = G__35964;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35965 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28310__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35965);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35965)))?cljs.core.second.call(null,arglists_35965):arglists_35965));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35920_35966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35921_35967 = null;
var count__35922_35968 = (0);
var i__35923_35969 = (0);
while(true){
if((i__35923_35969 < count__35922_35968)){
var vec__35932_35970 = cljs.core._nth.call(null,chunk__35921_35967,i__35923_35969);
var name_35971 = cljs.core.nth.call(null,vec__35932_35970,(0),null);
var map__35935_35972 = cljs.core.nth.call(null,vec__35932_35970,(1),null);
var map__35935_35973__$1 = cljs.core.__destructure_map.call(null,map__35935_35972);
var doc_35974 = cljs.core.get.call(null,map__35935_35973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35975 = cljs.core.get.call(null,map__35935_35973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35971);

cljs.core.println.call(null," ",arglists_35975);

if(cljs.core.truth_(doc_35974)){
cljs.core.println.call(null," ",doc_35974);
} else {
}


var G__35976 = seq__35920_35966;
var G__35977 = chunk__35921_35967;
var G__35978 = count__35922_35968;
var G__35979 = (i__35923_35969 + (1));
seq__35920_35966 = G__35976;
chunk__35921_35967 = G__35977;
count__35922_35968 = G__35978;
i__35923_35969 = G__35979;
continue;
} else {
var temp__5849__auto___35980 = cljs.core.seq.call(null,seq__35920_35966);
if(temp__5849__auto___35980){
var seq__35920_35981__$1 = temp__5849__auto___35980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35920_35981__$1)){
var c__29281__auto___35982 = cljs.core.chunk_first.call(null,seq__35920_35981__$1);
var G__35983 = cljs.core.chunk_rest.call(null,seq__35920_35981__$1);
var G__35984 = c__29281__auto___35982;
var G__35985 = cljs.core.count.call(null,c__29281__auto___35982);
var G__35986 = (0);
seq__35920_35966 = G__35983;
chunk__35921_35967 = G__35984;
count__35922_35968 = G__35985;
i__35923_35969 = G__35986;
continue;
} else {
var vec__35936_35987 = cljs.core.first.call(null,seq__35920_35981__$1);
var name_35988 = cljs.core.nth.call(null,vec__35936_35987,(0),null);
var map__35939_35989 = cljs.core.nth.call(null,vec__35936_35987,(1),null);
var map__35939_35990__$1 = cljs.core.__destructure_map.call(null,map__35939_35989);
var doc_35991 = cljs.core.get.call(null,map__35939_35990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35992 = cljs.core.get.call(null,map__35939_35990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35988);

cljs.core.println.call(null," ",arglists_35992);

if(cljs.core.truth_(doc_35991)){
cljs.core.println.call(null," ",doc_35991);
} else {
}


var G__35993 = cljs.core.next.call(null,seq__35920_35981__$1);
var G__35994 = null;
var G__35995 = (0);
var G__35996 = (0);
seq__35920_35966 = G__35993;
chunk__35921_35967 = G__35994;
count__35922_35968 = G__35995;
i__35923_35969 = G__35996;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5849__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5849__auto__)){
var fnspec = temp__5849__auto__;
cljs.core.print.call(null,"Spec");

var seq__35940 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35941 = null;
var count__35942 = (0);
var i__35943 = (0);
while(true){
if((i__35943 < count__35942)){
var role = cljs.core._nth.call(null,chunk__35941,i__35943);
var temp__5849__auto___35997__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5849__auto___35997__$1)){
var spec_35998 = temp__5849__auto___35997__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35998));
} else {
}


var G__35999 = seq__35940;
var G__36000 = chunk__35941;
var G__36001 = count__35942;
var G__36002 = (i__35943 + (1));
seq__35940 = G__35999;
chunk__35941 = G__36000;
count__35942 = G__36001;
i__35943 = G__36002;
continue;
} else {
var temp__5849__auto____$1 = cljs.core.seq.call(null,seq__35940);
if(temp__5849__auto____$1){
var seq__35940__$1 = temp__5849__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35940__$1)){
var c__29281__auto__ = cljs.core.chunk_first.call(null,seq__35940__$1);
var G__36003 = cljs.core.chunk_rest.call(null,seq__35940__$1);
var G__36004 = c__29281__auto__;
var G__36005 = cljs.core.count.call(null,c__29281__auto__);
var G__36006 = (0);
seq__35940 = G__36003;
chunk__35941 = G__36004;
count__35942 = G__36005;
i__35943 = G__36006;
continue;
} else {
var role = cljs.core.first.call(null,seq__35940__$1);
var temp__5849__auto___36007__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5849__auto___36007__$2)){
var spec_36008 = temp__5849__auto___36007__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36008));
} else {
}


var G__36009 = cljs.core.next.call(null,seq__35940__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35940 = G__36009;
chunk__35941 = G__36010;
count__35942 = G__36011;
i__35943 = G__36012;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36015 = datafied_throwable;
var map__36015__$1 = cljs.core.__destructure_map.call(null,map__36015);
var via = cljs.core.get.call(null,map__36015__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__36015__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__36015__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36016 = cljs.core.last.call(null,via);
var map__36016__$1 = cljs.core.__destructure_map.call(null,map__36016);
var type = cljs.core.get.call(null,map__36016__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36016__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__36016__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36017 = data;
var map__36017__$1 = cljs.core.__destructure_map.call(null,map__36017);
var problems = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36018 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__36018__$1 = cljs.core.__destructure_map.call(null,map__36018);
var top_data = map__36018__$1;
var source = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__36019 = phase;
var G__36019__$1 = (((G__36019 instanceof cljs.core.Keyword))?G__36019.fqn:null);
switch (G__36019__$1) {
case "read-source":
var map__36020 = data;
var map__36020__$1 = cljs.core.__destructure_map.call(null,map__36020);
var line = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36021 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__36021__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36021,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36021);
var G__36021__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36021__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36021__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36021__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36021__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36022 = top_data;
var G__36022__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__36022,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36022);
var G__36022__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__36022__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36022__$1);
var G__36022__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36022__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36022__$2);
var G__36022__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36022__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36022__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36022__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36022__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36023 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36023,(0),null);
var method = cljs.core.nth.call(null,vec__36023,(1),null);
var file = cljs.core.nth.call(null,vec__36023,(2),null);
var line = cljs.core.nth.call(null,vec__36023,(3),null);
var G__36026 = top_data;
var G__36026__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__36026,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36026);
var G__36026__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__36026__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36026__$1);
var G__36026__$3 = (cljs.core.truth_((function (){var and__28304__auto__ = source__$1;
if(cljs.core.truth_(and__28304__auto__)){
return method;
} else {
return and__28304__auto__;
}
})())?cljs.core.assoc.call(null,G__36026__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36026__$2);
var G__36026__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__36026__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36026__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__36026__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36026__$4;
}

break;
case "execution":
var vec__36027 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__36027,(0),null);
var method = cljs.core.nth.call(null,vec__36027,(1),null);
var file = cljs.core.nth.call(null,vec__36027,(2),null);
var line = cljs.core.nth.call(null,vec__36027,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__36014_SHARP_){
var or__28310__auto__ = (p1__36014_SHARP_ == null);
if(or__28310__auto__){
return or__28310__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__36014_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__28310__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return line;
}
})();
var G__36030 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36030__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__36030,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36030);
var G__36030__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__36030__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36030__$1);
var G__36030__$3 = (cljs.core.truth_((function (){var or__28310__auto__ = fn;
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
var and__28304__auto__ = source__$1;
if(cljs.core.truth_(and__28304__auto__)){
return method;
} else {
return and__28304__auto__;
}
}
})())?cljs.core.assoc.call(null,G__36030__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__28310__auto__ = fn;
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36030__$2);
var G__36030__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__36030__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36030__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__36030__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36030__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36019__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36034){
var map__36035 = p__36034;
var map__36035__$1 = cljs.core.__destructure_map.call(null,map__36035);
var triage_data = map__36035__$1;
var phase = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__36035__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__28310__auto__ = source;
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__28310__auto__ = line;
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__28310__auto__ = class$;
if(cljs.core.truth_(or__28310__auto__)){
return or__28310__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36036 = phase;
var G__36036__$1 = (((G__36036 instanceof cljs.core.Keyword))?G__36036.fqn:null);
switch (G__36036__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__29479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36037_36046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36038_36047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36039_36048 = true;
var _STAR_print_fn_STAR__temp_val__36040_36049 = (function (x__29480__auto__){
return sb__29479__auto__.append(x__29480__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36039_36048);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36040_36049);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36032_SHARP_){
return cljs.core.dissoc.call(null,p1__36032_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36038_36047);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36037_36046);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29479__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__29479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36041_36050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36042_36051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36043_36052 = true;
var _STAR_print_fn_STAR__temp_val__36044_36053 = (function (x__29480__auto__){
return sb__29479__auto__.append(x__29480__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36043_36052);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36044_36053);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__36033_SHARP_){
return cljs.core.dissoc.call(null,p1__36033_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36042_36051);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36041_36050);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29479__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36036__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});
