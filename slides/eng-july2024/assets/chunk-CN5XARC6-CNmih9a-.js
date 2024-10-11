import{G as E}from"./chunk-ULVYQCHC-CuzKNz7t.js";import{u as oe,f as c,m as b,r as _,i as k,a as S,h as w,b as y,n as Le,c as M,d as de,s as tr,e as ue,g as P,v as C,j as z,z as ar,k as O,p as D,l as j,o as ir,q as or,t as q,w as dr,x as ur}from"./chunk-TZBO7MLI-CvFo4m0T.js";import{a as u,af as J,ag as sr,ah as fr}from"./Mermaid.vue_vue_type_script_setup_true_lang-Dk8oiZ91.js";function L(e,n,r,t){var a;do a=oe(t);while(e.hasNode(a));return r.dummy=n,e.setNode(a,r),a}u(L,"addDummyNode");function Ne(e){var n=new E().setGraph(e.graph());return c(e.nodes(),function(r){n.setNode(r,e.node(r))}),c(e.edges(),function(r){var t=n.edge(r.v,r.w)||{weight:0,minlen:1},a=e.edge(r);n.setEdge(r.v,r.w,{weight:t.weight+a.weight,minlen:Math.max(t.minlen,a.minlen)})}),n}u(Ne,"simplify");function se(e){var n=new E({multigraph:e.isMultigraph()}).setGraph(e.graph());return c(e.nodes(),function(r){e.children(r).length||n.setNode(r,e.node(r))}),c(e.edges(),function(r){n.setEdge(r,e.edge(r))}),n}u(se,"asNonCompoundGraph");function K(e,n){var r=e.x,t=e.y,a=n.x-r,i=n.y-t,o=e.width/2,d=e.height/2;if(!a&&!i)throw new Error("Not possible to find intersection inside of the rectangle");var s,f;return Math.abs(i)*o>Math.abs(a)*d?(i<0&&(d=-d),s=d*a/i,f=d):(a<0&&(o=-o),s=o,f=o*i/a),{x:r+s,y:t+f}}u(K,"intersectRect");function F(e){var n=b(_(fe(e)+1),function(){return[]});return c(e.nodes(),function(r){var t=e.node(r),a=t.rank;k(a)||(n[a][t.order]=r)}),n}u(F,"buildLayerMatrix");function _e(e){var n=S(b(e.nodes(),function(r){return e.node(r).rank}));c(e.nodes(),function(r){var t=e.node(r);w(t,"rank")&&(t.rank-=n)})}u(_e,"normalizeRanks");function Ce(e){var n=S(b(e.nodes(),function(i){return e.node(i).rank})),r=[];c(e.nodes(),function(i){var o=e.node(i).rank-n;r[o]||(r[o]=[]),r[o].push(i)});var t=0,a=e.graph().nodeRankFactor;c(r,function(i,o){k(i)&&o%a!==0?--t:t&&c(i,function(d){e.node(d).rank+=t})})}u(Ce,"removeEmptyRanks");function Q(e,n,r,t){var a={width:0,height:0};return arguments.length>=4&&(a.rank=r,a.order=t),L(e,"border",a,n)}u(Q,"addBorderNode");function fe(e){return y(b(e.nodes(),function(n){var r=e.node(n).rank;if(!k(r))return r}))}u(fe,"maxRank");function Re(e,n){var r={lhs:[],rhs:[]};return c(e,function(t){n(t)?r.lhs.push(t):r.rhs.push(t)}),r}u(Re,"partition");function Ie(e,n){var r=Le();try{return n()}finally{console.log(e+" time: "+(Le()-r)+"ms")}}u(Ie,"time");function Se(e,n){return n()}u(Se,"notime");function Te(e){function n(r){var t=e.children(r),a=e.node(r);if(t.length&&c(t,n),w(a,"minRank")){a.borderLeft=[],a.borderRight=[];for(var i=a.minRank,o=a.maxRank+1;i<o;++i)Z(e,"borderLeft","_bl",r,a,i),Z(e,"borderRight","_br",r,a,i)}}u(n,"dfs"),c(e.children(),n)}u(Te,"addBorderSegments");function Z(e,n,r,t,a,i){var o={width:0,height:0,rank:i,borderType:n},d=a[n][i-1],s=L(e,"border",o,r);a[n][i]=s,e.setParent(s,t),d&&e.setEdge(d,s,{weight:1})}u(Z,"addBorderNode");function Me(e){var n=e.graph().rankdir.toLowerCase();(n==="lr"||n==="rl")&&ce(e)}u(Me,"adjust");function Pe(e){var n=e.graph().rankdir.toLowerCase();(n==="bt"||n==="rl")&&Oe(e),(n==="lr"||n==="rl")&&(Fe(e),ce(e))}u(Pe,"undo");function ce(e){c(e.nodes(),function(n){$(e.node(n))}),c(e.edges(),function(n){$(e.edge(n))})}u(ce,"swapWidthHeight");function $(e){var n=e.width;e.width=e.height,e.height=n}u($,"swapWidthHeightOne");function Oe(e){c(e.nodes(),function(n){B(e.node(n))}),c(e.edges(),function(n){var r=e.edge(n);c(r.points,B),w(r,"y")&&B(r)})}u(Oe,"reverseY");function B(e){e.y=-e.y}u(B,"reverseYOne");function Fe(e){c(e.nodes(),function(n){V(e.node(n))}),c(e.edges(),function(n){var r=e.edge(n);c(r.points,V),w(r,"x")&&V(r)})}u(Fe,"swapXY");function V(e){var n=e.x;e.x=e.y,e.y=n}u(V,"swapXYOne");var N,cr=(N=class{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,r=n._prev;if(r!==n)return ee(r),r}enqueue(n){var r=this._sentinel;n._prev&&n._next&&ee(n),n._next=r._next,r._next._prev=n,r._next=n,n._prev=r}toString(){for(var n=[],r=this._sentinel,t=r._prev;t!==r;)n.push(JSON.stringify(t,Be)),t=t._prev;return"["+n.join(", ")+"]"}},u(N,"List"),N);function ee(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}u(ee,"unlink");function Be(e,n){if(e!=="_next"&&e!=="_prev")return n}u(Be,"filterOutLinks");var lr=fr(1);function Ve(e,n){if(e.nodeCount()<=1)return[];var r=Ge(e,n||lr),t=Ae(r.graph,r.buckets,r.zeroIdx);return M(b(t,function(a){return e.outEdges(a.v,a.w)}))}u(Ve,"greedyFAS");function Ae(e,n,r){for(var t=[],a=n[n.length-1],i=n[0],o;e.nodeCount();){for(;o=i.dequeue();)A(e,n,r,o);for(;o=a.dequeue();)A(e,n,r,o);if(e.nodeCount()){for(var d=n.length-2;d>0;--d)if(o=n[d].dequeue(),o){t=t.concat(A(e,n,r,o,!0));break}}}return t}u(Ae,"doGreedyFAS");function A(e,n,r,t,a){var i=a?[]:void 0;return c(e.inEdges(t.v),function(o){var d=e.edge(o),s=e.node(o.v);a&&i.push({v:o.v,w:o.w}),s.out-=d,W(n,r,s)}),c(e.outEdges(t.v),function(o){var d=e.edge(o),s=o.w,f=e.node(s);f.in-=d,W(n,r,f)}),e.removeNode(t.v),i}u(A,"removeNode");function Ge(e,n){var r=new E,t=0,a=0;c(e.nodes(),function(d){r.setNode(d,{v:d,in:0,out:0})}),c(e.edges(),function(d){var s=r.edge(d.v,d.w)||0,f=n(d),l=s+f;r.setEdge(d.v,d.w,l),a=Math.max(a,r.node(d.v).out+=f),t=Math.max(t,r.node(d.w).in+=f)});var i=_(a+t+3).map(function(){return new cr}),o=t+1;return c(r.nodes(),function(d){W(i,o,r.node(d))}),{graph:r,buckets:i,zeroIdx:o}}u(Ge,"buildState");function W(e,n,r){r.out?r.in?e[r.out-r.in+n].enqueue(r):e[e.length-1].enqueue(r):e[0].enqueue(r)}u(W,"assignBucket");function Ye(e){var n=e.graph().acyclicer==="greedy"?Ve(e,r(e)):De(e);c(n,function(t){var a=e.edge(t);e.removeEdge(t),a.forwardName=t.name,a.reversed=!0,e.setEdge(t.w,t.v,a,oe("rev"))});function r(t){return function(a){return t.edge(a).weight}}u(r,"weightFn")}u(Ye,"run");function De(e){var n=[],r={},t={};function a(i){w(t,i)||(t[i]=!0,r[i]=!0,c(e.outEdges(i),function(o){w(r,o.w)?n.push(o):a(o.w)}),delete r[i])}return u(a,"dfs"),c(e.nodes(),a),n}u(De,"dfsFAS");function je(e){c(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})}u(je,"undo");function We(e){e.graph().dummyChains=[],c(e.edges(),function(n){ze(e,n)})}u(We,"run");function ze(e,n){var r=n.v,t=e.node(r).rank,a=n.w,i=e.node(a).rank,o=n.name,d=e.edge(n),s=d.labelRank;if(i!==t+1){e.removeEdge(n);var f,l,h;for(h=0,++t;t<i;++h,++t)d.points=[],l={width:0,height:0,edgeLabel:d,edgeObj:n,rank:t},f=L(e,"edge",l,"_d"),t===s&&(l.width=d.width,l.height=d.height,l.dummy="edge-label",l.labelpos=d.labelpos),e.setEdge(r,f,{weight:d.weight},o),h===0&&e.graph().dummyChains.push(f),r=f;e.setEdge(r,a,{weight:d.weight},o)}}u(ze,"normalizeEdge");function qe(e){c(e.graph().dummyChains,function(n){var r=e.node(n),t=r.edgeLabel,a;for(e.setEdge(r.edgeObj,t);r.dummy;)a=e.successors(n)[0],e.removeNode(n),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),n=a,r=e.node(n)})}u(qe,"undo");function X(e){var n={};function r(t){var a=e.node(t);if(w(n,t))return a.rank;n[t]=!0;var i=S(b(e.outEdges(t),function(o){return r(o.w)-e.edge(o).minlen}));return(i===Number.POSITIVE_INFINITY||i===void 0||i===null)&&(i=0),a.rank=i}u(r,"dfs"),c(e.sources(),r)}u(X,"longestPath");function R(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}u(R,"slack");function le(e){var n=new E({directed:!1}),r=e.nodes()[0],t=e.nodeCount();n.setNode(r,{});for(var a,i;Xe(n,e)<t;)a=He(n,e),i=n.hasNode(a.v)?R(e,a):-R(e,a),Ue(n,e,i);return n}u(le,"feasibleTree");function Xe(e,n){function r(t){c(n.nodeEdges(t),function(a){var i=a.v,o=t===i?a.w:i;!e.hasNode(o)&&!R(n,a)&&(e.setNode(o,{}),e.setEdge(t,o,{}),r(o))})}return u(r,"dfs"),c(e.nodes(),r),e.nodeCount()}u(Xe,"tightTree");function He(e,n){return de(n.edges(),function(r){if(e.hasNode(r.v)!==e.hasNode(r.w))return R(n,r)})}u(He,"findMinSlackEdge");function Ue(e,n,r){c(e.nodes(),function(t){n.node(t).rank+=r})}u(Ue,"shiftRanks");Je.CycleException=T;function Je(e){var n={},r={},t=[];function a(i){if(w(r,i))throw new T;w(n,i)||(r[i]=!0,n[i]=!0,c(e.predecessors(i),a),delete r[i],t.push(i))}if(u(a,"visit"),c(e.sinks(),a),tr(n)!==e.nodeCount())throw new T;return t}u(Je,"topsort");function T(){}u(T,"CycleException");T.prototype=new Error;function he(e,n,r){sr(n)||(n=[n]);var t=(e.isDirected()?e.successors:e.neighbors).bind(e),a=[],i={};return c(n,function(o){if(!e.hasNode(o))throw new Error("Graph does not have node: "+o);ve(e,o,r==="post",i,t,a)}),a}u(he,"dfs");function ve(e,n,r,t,a,i){w(t,n)||(t[n]=!0,r||i.push(n),c(a(n),function(o){ve(e,o,r,t,a,i)}),r&&i.push(n))}u(ve,"doDfs");function Ke(e,n){return he(e,n,"post")}u(Ke,"postorder");function Qe(e,n){return he(e,n,"pre")}u(Qe,"preorder");x.initLowLimValues=U;x.initCutValues=H;x.calcCutValue=pe;x.leaveEdge=we;x.enterEdge=be;x.exchangeEdges=ge;function x(e){e=Ne(e),X(e);var n=le(e);U(n),H(n,e);for(var r,t;r=we(n);)t=be(n,e,r),ge(n,e,r,t)}u(x,"networkSimplex");function H(e,n){var r=Ke(e,e.nodes());r=r.slice(0,r.length-1),c(r,function(t){Ze(e,n,t)})}u(H,"initCutValues");function Ze(e,n,r){var t=e.node(r),a=t.parent;e.edge(r,a).cutvalue=pe(e,n,r)}u(Ze,"assignCutValue");function pe(e,n,r){var t=e.node(r),a=t.parent,i=!0,o=n.edge(r,a),d=0;return o||(i=!1,o=n.edge(a,r)),d=o.weight,c(n.nodeEdges(r),function(s){var f=s.v===r,l=f?s.w:s.v;if(l!==a){var h=f===i,v=n.edge(s).weight;if(d+=h?v:-v,en(e,r,l)){var p=e.edge(r,l).cutvalue;d+=h?-p:p}}}),d}u(pe,"calcCutValue");function U(e,n){arguments.length<2&&(n=e.nodes()[0]),me(e,{},1,n)}u(U,"initLowLimValues");function me(e,n,r,t,a){var i=r,o=e.node(t);return n[t]=!0,c(e.neighbors(t),function(d){w(n,d)||(r=me(e,n,r,d,t))}),o.low=i,o.lim=r++,a?o.parent=a:delete o.parent,r}u(me,"dfsAssignLowLim");function we(e){return ue(e.edges(),function(n){return e.edge(n).cutvalue<0})}u(we,"leaveEdge");function be(e,n,r){var t=r.v,a=r.w;n.hasEdge(t,a)||(t=r.w,a=r.v);var i=e.node(t),o=e.node(a),d=i,s=!1;i.lim>o.lim&&(d=o,s=!0);var f=P(n.edges(),function(l){return s===ne(e,e.node(l.v),d)&&s!==ne(e,e.node(l.w),d)});return de(f,function(l){return R(n,l)})}u(be,"enterEdge");function ge(e,n,r,t){var a=r.v,i=r.w;e.removeEdge(a,i),e.setEdge(t.v,t.w,{}),U(e),H(e,n),$e(e,n)}u(ge,"exchangeEdges");function $e(e,n){var r=ue(e.nodes(),function(a){return!n.node(a).parent}),t=Qe(e,r);t=t.slice(1),c(t,function(a){var i=e.node(a).parent,o=n.edge(a,i),d=!1;o||(o=n.edge(i,a),d=!0),n.node(a).rank=n.node(i).rank+(d?o.minlen:-o.minlen)})}u($e,"updateRanks");function en(e,n,r){return e.hasEdge(n,r)}u(en,"isTreeEdge");function ne(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}u(ne,"isDescendant");function nn(e){switch(e.graph().ranker){case"network-simplex":re(e);break;case"tight-tree":rn(e);break;case"longest-path":hr(e);break;default:re(e)}}u(nn,"rank");var hr=X;function rn(e){X(e),le(e)}u(rn,"tightTreeRanker");function re(e){x(e)}u(re,"networkSimplexRanker");function tn(e){var n=L(e,"root",{},"_root"),r=an(e),t=y(C(r))-1,a=2*t+1;e.graph().nestingRoot=n,c(e.edges(),function(o){e.edge(o).minlen*=a});var i=on(e)+1;c(e.children(),function(o){ke(e,n,a,i,t,r,o)}),e.graph().nodeRankFactor=a}u(tn,"run");function ke(e,n,r,t,a,i,o){var d=e.children(o);if(!d.length){o!==n&&e.setEdge(n,o,{weight:0,minlen:r});return}var s=Q(e,"_bt"),f=Q(e,"_bb"),l=e.node(o);e.setParent(s,o),l.borderTop=s,e.setParent(f,o),l.borderBottom=f,c(d,function(h){ke(e,n,r,t,a,i,h);var v=e.node(h),p=v.borderTop?v.borderTop:h,m=v.borderBottom?v.borderBottom:h,g=v.borderTop?t:2*t,I=p!==m?1:a-i[o]+1;e.setEdge(s,p,{weight:g,minlen:I,nestingEdge:!0}),e.setEdge(m,f,{weight:g,minlen:I,nestingEdge:!0})}),e.parent(o)||e.setEdge(n,s,{weight:0,minlen:a+i[o]})}u(ke,"dfs");function an(e){var n={};function r(t,a){var i=e.children(t);i&&i.length&&c(i,function(o){r(o,a+1)}),n[t]=a}return u(r,"dfs"),c(e.children(),function(t){r(t,1)}),n}u(an,"treeDepths");function on(e){return z(e.edges(),function(n,r){return n+e.edge(r).weight},0)}u(on,"sumWeights");function dn(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,c(e.edges(),function(r){var t=e.edge(r);t.nestingEdge&&e.removeEdge(r)})}u(dn,"cleanup");function un(e,n,r){var t={},a;c(r,function(i){for(var o=e.parent(i),d,s;o;){if(d=e.parent(o),d?(s=t[d],t[d]=o):(s=a,a=o),s&&s!==o){n.setEdge(s,o);return}o=d}})}u(un,"addSubgraphConstraints");function sn(e,n,r){var t=fn(e),a=new E({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(i){return e.node(i)});return c(e.nodes(),function(i){var o=e.node(i),d=e.parent(i);(o.rank===n||o.minRank<=n&&n<=o.maxRank)&&(a.setNode(i),a.setParent(i,d||t),c(e[r](i),function(s){var f=s.v===i?s.w:s.v,l=a.edge(f,i),h=k(l)?0:l.weight;a.setEdge(f,i,{weight:e.edge(s).weight+h})}),w(o,"minRank")&&a.setNode(i,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]}))}),a}u(sn,"buildLayerGraph");function fn(e){for(var n;e.hasNode(n=oe("_root")););return n}u(fn,"createRootNode");function cn(e,n){for(var r=0,t=1;t<n.length;++t)r+=ln(e,n[t-1],n[t]);return r}u(cn,"crossCount");function ln(e,n,r){for(var t=ar(r,b(r,function(f,l){return l})),a=M(b(n,function(f){return O(b(e.outEdges(f),function(l){return{pos:t[l.w],weight:e.edge(l).weight}}),"pos")})),i=1;i<r.length;)i<<=1;var o=2*i-1;i-=1;var d=b(new Array(o),function(){return 0}),s=0;return c(a.forEach(function(f){var l=f.pos+i;d[l]+=f.weight;for(var h=0;l>0;)l%2&&(h+=d[l+1]),l=l-1>>1,d[l]+=f.weight;s+=f.weight*h})),s}u(ln,"twoLayerCrossCount");function hn(e){var n={},r=P(e.nodes(),function(d){return!e.children(d).length}),t=y(b(r,function(d){return e.node(d).rank})),a=b(_(t+1),function(){return[]});function i(d){if(!w(n,d)){n[d]=!0;var s=e.node(d);a[s.rank].push(d),c(e.successors(d),i)}}u(i,"dfs");var o=O(r,function(d){return e.node(d).rank});return c(o,i),a}u(hn,"initOrder");function vn(e,n){return b(n,function(r){var t=e.inEdges(r);if(t.length){var a=z(t,function(i,o){var d=e.edge(o),s=e.node(o.v);return{sum:i.sum+d.weight*s.order,weight:i.weight+d.weight}},{sum:0,weight:0});return{v:r,barycenter:a.sum/a.weight,weight:a.weight}}else return{v:r}})}u(vn,"barycenter");function pn(e,n){var r={};c(e,function(a,i){var o=r[a.v]={indegree:0,in:[],out:[],vs:[a.v],i};k(a.barycenter)||(o.barycenter=a.barycenter,o.weight=a.weight)}),c(n.edges(),function(a){var i=r[a.v],o=r[a.w];!k(i)&&!k(o)&&(o.indegree++,i.out.push(r[a.w]))});var t=P(r,function(a){return!a.indegree});return mn(t)}u(pn,"resolveConflicts");function mn(e){var n=[];function r(i){return function(o){o.merged||(k(o.barycenter)||k(i.barycenter)||o.barycenter>=i.barycenter)&&wn(i,o)}}u(r,"handleIn");function t(i){return function(o){o.in.push(i),--o.indegree===0&&e.push(o)}}for(u(t,"handleOut");e.length;){var a=e.pop();n.push(a),c(a.in.reverse(),r(a)),c(a.out,t(a))}return b(P(n,function(i){return!i.merged}),function(i){return D(i,["vs","i","barycenter","weight"])})}u(mn,"doResolveConflicts");function wn(e,n){var r=0,t=0;e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=r/t,e.weight=t,e.i=Math.min(n.i,e.i),n.merged=!0}u(wn,"mergeEntries");function bn(e,n){var r=Re(e,function(l){return w(l,"barycenter")}),t=r.lhs,a=O(r.rhs,function(l){return-l.i}),i=[],o=0,d=0,s=0;t.sort(gn(!!n)),s=te(i,a,s),c(t,function(l){s+=l.vs.length,i.push(l.vs),o+=l.barycenter*l.weight,d+=l.weight,s=te(i,a,s)});var f={vs:M(i)};return d&&(f.barycenter=o/d,f.weight=d),f}u(bn,"sort");function te(e,n,r){for(var t;n.length&&(t=j(n)).i<=r;)n.pop(),e.push(t.vs),r++;return r}u(te,"consumeUnsortable");function gn(e){return function(n,r){return n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i}}u(gn,"compareWithBias");function Ee(e,n,r,t){var a=e.children(n),i=e.node(n),o=i?i.borderLeft:void 0,d=i?i.borderRight:void 0,s={};o&&(a=P(a,function(m){return m!==o&&m!==d}));var f=vn(e,a);c(f,function(m){if(e.children(m.v).length){var g=Ee(e,m.v,r,t);s[m.v]=g,w(g,"barycenter")&&En(m,g)}});var l=pn(f,r);kn(l,s);var h=bn(l,t);if(o&&(h.vs=M([o,h.vs,d]),e.predecessors(o).length)){var v=e.node(e.predecessors(o)[0]),p=e.node(e.predecessors(d)[0]);w(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+v.order+p.order)/(h.weight+2),h.weight+=2}return h}u(Ee,"sortSubgraph");function kn(e,n){c(e,function(r){r.vs=M(r.vs.map(function(t){return n[t]?n[t].vs:t}))})}u(kn,"expandSubgraphs");function En(e,n){k(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}u(En,"mergeBarycenters");function xn(e){var n=fe(e),r=ae(e,_(1,n+1),"inEdges"),t=ae(e,_(n-1,-1,-1),"outEdges"),a=hn(e);ie(e,a);for(var i=Number.POSITIVE_INFINITY,o,d=0,s=0;s<4;++d,++s){yn(d%2?r:t,d%4>=2),a=F(e);var f=cn(e,a);f<i&&(s=0,o=ir(a),i=f)}ie(e,o)}u(xn,"order");function ae(e,n,r){return b(n,function(t){return sn(e,t,r)})}u(ae,"buildLayerGraphs");function yn(e,n){var r=new E;c(e,function(t){var a=t.graph().root,i=Ee(t,a,r,n);c(i.vs,function(o,d){t.node(o).order=d}),un(t,r,i.vs)})}u(yn,"sweepLayerGraphs");function ie(e,n){c(n,function(r){c(r,function(t,a){e.node(t).order=a})})}u(ie,"assignOrder");function Ln(e){var n=_n(e);c(e.graph().dummyChains,function(r){for(var t=e.node(r),a=t.edgeObj,i=Nn(e,n,a.v,a.w),o=i.path,d=i.lca,s=0,f=o[s],l=!0;r!==a.w;){if(t=e.node(r),l){for(;(f=o[s])!==d&&e.node(f).maxRank<t.rank;)s++;f===d&&(l=!1)}if(!l){for(;s<o.length-1&&e.node(f=o[s+1]).minRank<=t.rank;)s++;f=o[s]}e.setParent(r,f),r=e.successors(r)[0]}})}u(Ln,"parentDummyChains");function Nn(e,n,r,t){var a=[],i=[],o=Math.min(n[r].low,n[t].low),d=Math.max(n[r].lim,n[t].lim),s,f;s=r;do s=e.parent(s),a.push(s);while(s&&(n[s].low>o||d>n[s].lim));for(f=s,s=t;(s=e.parent(s))!==f;)i.push(s);return{path:a.concat(i.reverse()),lca:f}}u(Nn,"findPath");function _n(e){var n={},r=0;function t(a){var i=r;c(e.children(a),t),n[a]={low:i,lim:r++}}return u(t,"dfs"),c(e.children(),t),n}u(_n,"postorder");function Cn(e,n){var r={};function t(a,i){var o=0,d=0,s=a.length,f=j(i);return c(i,function(l,h){var v=In(e,l),p=v?e.node(v).order:s;(v||l===f)&&(c(i.slice(d,h+1),function(m){c(e.predecessors(m),function(g){var I=e.node(g),ye=I.order;(ye<o||p<ye)&&!(I.dummy&&e.node(m).dummy)&&xe(r,g,m)})}),d=h+1,o=p)}),i}return u(t,"visitLayer"),z(n,t),r}u(Cn,"findType1Conflicts");function Rn(e,n){var r={};function t(i,o,d,s,f){var l;c(_(o,d),function(h){l=i[h],e.node(l).dummy&&c(e.predecessors(l),function(v){var p=e.node(v);p.dummy&&(p.order<s||p.order>f)&&xe(r,v,l)})})}u(t,"scan");function a(i,o){var d=-1,s,f=0;return c(o,function(l,h){if(e.node(l).dummy==="border"){var v=e.predecessors(l);v.length&&(s=e.node(v[0]).order,t(o,f,h,d,s),f=h,d=s)}t(o,f,o.length,s,i.length)}),o}return u(a,"visitLayer"),z(n,a),r}u(Rn,"findType2Conflicts");function In(e,n){if(e.node(n).dummy)return ue(e.predecessors(n),function(r){return e.node(r).dummy})}u(In,"findOtherInnerSegmentNode");function xe(e,n,r){if(n>r){var t=n;n=r,r=t}var a=e[n];a||(e[n]=a={}),a[r]=!0}u(xe,"addConflict");function Sn(e,n,r){if(n>r){var t=n;n=r,r=t}return w(e[n],r)}u(Sn,"hasConflict");function Tn(e,n,r,t){var a={},i={},o={};return c(n,function(d){c(d,function(s,f){a[s]=s,i[s]=s,o[s]=f})}),c(n,function(d){var s=-1;c(d,function(f){var l=t(f);if(l.length){l=O(l,function(g){return o[g]});for(var h=(l.length-1)/2,v=Math.floor(h),p=Math.ceil(h);v<=p;++v){var m=l[v];i[f]===f&&s<o[m]&&!Sn(r,f,m)&&(i[m]=f,i[f]=a[f]=a[m],s=o[m])}}})}),{root:a,align:i}}u(Tn,"verticalAlignment");function Mn(e,n,r,t,a){var i={},o=Pn(e,n,r,a),d=a?"borderLeft":"borderRight";function s(h,v){for(var p=o.nodes(),m=p.pop(),g={};m;)g[m]?h(m):(g[m]=!0,p.push(m),p=p.concat(v(m))),m=p.pop()}u(s,"iterate");function f(h){i[h]=o.inEdges(h).reduce(function(v,p){return Math.max(v,i[p.v]+o.edge(p))},0)}u(f,"pass1");function l(h){var v=o.outEdges(h).reduce(function(m,g){return Math.min(m,i[g.w]-o.edge(g))},Number.POSITIVE_INFINITY),p=e.node(h);v!==Number.POSITIVE_INFINITY&&p.borderType!==d&&(i[h]=Math.max(i[h],v))}return u(l,"pass2"),s(f,o.predecessors.bind(o)),s(l,o.successors.bind(o)),c(t,function(h){i[h]=i[r[h]]}),i}u(Mn,"horizontalCompaction");function Pn(e,n,r,t){var a=new E,i=e.graph(),o=An(i.nodesep,i.edgesep,t);return c(n,function(d){var s;c(d,function(f){var l=r[f];if(a.setNode(l),s){var h=r[s],v=a.edge(h,l);a.setEdge(h,l,Math.max(o(e,f,s),v||0))}s=f})}),a}u(Pn,"buildBlockGraph");function On(e,n){return de(C(n),function(r){var t=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY;return or(r,function(i,o){var d=Gn(e,o)/2;t=Math.max(i+d,t),a=Math.min(i-d,a)}),t-a})}u(On,"findSmallestWidthAlignment");function Fn(e,n){var r=C(n),t=S(r),a=y(r);c(["u","d"],function(i){c(["l","r"],function(o){var d=i+o,s=e[d],f;if(s!==n){var l=C(s);f=o==="l"?t-S(l):a-y(l),f&&(e[d]=q(s,function(h){return h+f}))}})})}u(Fn,"alignCoordinates");function Bn(e,n){return q(e.ul,function(r,t){if(n)return e[n.toLowerCase()][t];var a=O(b(e,t));return(a[1]+a[2])/2})}u(Bn,"balance");function Vn(e){var n=F(e),r=J(Cn(e,n),Rn(e,n)),t={},a;c(["u","d"],function(o){a=o==="u"?n:C(n).reverse(),c(["l","r"],function(d){d==="r"&&(a=b(a,function(h){return C(h).reverse()}));var s=(o==="u"?e.predecessors:e.successors).bind(e),f=Tn(e,a,r,s),l=Mn(e,a,f.root,f.align,d==="r");d==="r"&&(l=q(l,function(h){return-h})),t[o+d]=l})});var i=On(e,t);return Fn(t,i),Bn(t,e.graph().align)}u(Vn,"positionX");function An(e,n,r){return function(t,a,i){var o=t.node(a),d=t.node(i),s=0,f;if(s+=o.width/2,w(o,"labelpos"))switch(o.labelpos.toLowerCase()){case"l":f=-o.width/2;break;case"r":f=o.width/2;break}if(f&&(s+=r?f:-f),f=0,s+=(o.dummy?n:e)/2,s+=(d.dummy?n:e)/2,s+=d.width/2,w(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":f=d.width/2;break;case"r":f=-d.width/2;break}return f&&(s+=r?f:-f),f=0,s}}u(An,"sep");function Gn(e,n){return e.node(n).width}u(Gn,"width");function Yn(e){e=se(e),Dn(e),dr(Vn(e),function(n,r){e.node(r).x=n})}u(Yn,"position");function Dn(e){var n=F(e),r=e.graph().ranksep,t=0;c(n,function(a){var i=y(b(a,function(o){return e.node(o).height}));c(a,function(o){e.node(o).y=t+i/2}),t+=i+r})}u(Dn,"positionY");function vr(e,n){var r=n&&n.debugTiming?Ie:Se;r("layout",function(){var t=r("  buildLayoutGraph",function(){return zn(e)});r("  runLayout",function(){jn(t,r)}),r("  updateInputGraph",function(){Wn(e,t)})})}u(vr,"layout");function jn(e,n){n("    makeSpaceForEdgeLabels",function(){qn(e)}),n("    removeSelfEdges",function(){er(e)}),n("    acyclic",function(){Ye(e)}),n("    nestingGraph.run",function(){tn(e)}),n("    rank",function(){nn(se(e))}),n("    injectEdgeLabelProxies",function(){Xn(e)}),n("    removeEmptyRanks",function(){Ce(e)}),n("    nestingGraph.cleanup",function(){dn(e)}),n("    normalizeRanks",function(){_e(e)}),n("    assignRankMinMax",function(){Hn(e)}),n("    removeEdgeLabelProxies",function(){Un(e)}),n("    normalize.run",function(){We(e)}),n("    parentDummyChains",function(){Ln(e)}),n("    addBorderSegments",function(){Te(e)}),n("    order",function(){xn(e)}),n("    insertSelfEdges",function(){nr(e)}),n("    adjustCoordinateSystem",function(){Me(e)}),n("    position",function(){Yn(e)}),n("    positionSelfEdges",function(){rr(e)}),n("    removeBorderNodes",function(){$n(e)}),n("    normalize.undo",function(){qe(e)}),n("    fixupEdgeLabelCoords",function(){Qn(e)}),n("    undoCoordinateSystem",function(){Pe(e)}),n("    translateGraph",function(){Jn(e)}),n("    assignNodeIntersects",function(){Kn(e)}),n("    reversePoints",function(){Zn(e)}),n("    acyclic.undo",function(){je(e)})}u(jn,"runLayout");function Wn(e,n){c(e.nodes(),function(r){var t=e.node(r),a=n.node(r);t&&(t.x=a.x,t.y=a.y,n.children(r).length&&(t.width=a.width,t.height=a.height))}),c(e.edges(),function(r){var t=e.edge(r),a=n.edge(r);t.points=a.points,w(a,"x")&&(t.x=a.x,t.y=a.y)}),e.graph().width=n.graph().width,e.graph().height=n.graph().height}u(Wn,"updateInputGraph");var pr=["nodesep","edgesep","ranksep","marginx","marginy"],mr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},wr=["acyclicer","ranker","rankdir","align"],br=["width","height"],gr={width:0,height:0},kr=["minlen","weight","width","height","labeloffset"],Er={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},xr=["labelpos"];function zn(e){var n=new E({multigraph:!0,compound:!0}),r=Y(e.graph());return n.setGraph(J({},mr,G(r,pr),D(r,wr))),c(e.nodes(),function(t){var a=Y(e.node(t));n.setNode(t,ur(G(a,br),gr)),n.setParent(t,e.parent(t))}),c(e.edges(),function(t){var a=Y(e.edge(t));n.setEdge(t,J({},Er,G(a,kr),D(a,xr)))}),n}u(zn,"buildLayoutGraph");function qn(e){var n=e.graph();n.ranksep/=2,c(e.edges(),function(r){var t=e.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(n.rankdir==="TB"||n.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}u(qn,"makeSpaceForEdgeLabels");function Xn(e){c(e.edges(),function(n){var r=e.edge(n);if(r.width&&r.height){var t=e.node(n.v),a=e.node(n.w),i={rank:(a.rank-t.rank)/2+t.rank,e:n};L(e,"edge-proxy",i,"_ep")}})}u(Xn,"injectEdgeLabelProxies");function Hn(e){var n=0;c(e.nodes(),function(r){var t=e.node(r);t.borderTop&&(t.minRank=e.node(t.borderTop).rank,t.maxRank=e.node(t.borderBottom).rank,n=y(n,t.maxRank))}),e.graph().maxRank=n}u(Hn,"assignRankMinMax");function Un(e){c(e.nodes(),function(n){var r=e.node(n);r.dummy==="edge-proxy"&&(e.edge(r.e).labelRank=r.rank,e.removeNode(n))})}u(Un,"removeEdgeLabelProxies");function Jn(e){var n=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,a=0,i=e.graph(),o=i.marginx||0,d=i.marginy||0;function s(f){var l=f.x,h=f.y,v=f.width,p=f.height;n=Math.min(n,l-v/2),r=Math.max(r,l+v/2),t=Math.min(t,h-p/2),a=Math.max(a,h+p/2)}u(s,"getExtremes"),c(e.nodes(),function(f){s(e.node(f))}),c(e.edges(),function(f){var l=e.edge(f);w(l,"x")&&s(l)}),n-=o,t-=d,c(e.nodes(),function(f){var l=e.node(f);l.x-=n,l.y-=t}),c(e.edges(),function(f){var l=e.edge(f);c(l.points,function(h){h.x-=n,h.y-=t}),w(l,"x")&&(l.x-=n),w(l,"y")&&(l.y-=t)}),i.width=r-n+o,i.height=a-t+d}u(Jn,"translateGraph");function Kn(e){c(e.edges(),function(n){var r=e.edge(n),t=e.node(n.v),a=e.node(n.w),i,o;r.points?(i=r.points[0],o=r.points[r.points.length-1]):(r.points=[],i=a,o=t),r.points.unshift(K(t,i)),r.points.push(K(a,o))})}u(Kn,"assignNodeIntersects");function Qn(e){c(e.edges(),function(n){var r=e.edge(n);if(w(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}u(Qn,"fixupEdgeLabelCoords");function Zn(e){c(e.edges(),function(n){var r=e.edge(n);r.reversed&&r.points.reverse()})}u(Zn,"reversePointsForReversedEdges");function $n(e){c(e.nodes(),function(n){if(e.children(n).length){var r=e.node(n),t=e.node(r.borderTop),a=e.node(r.borderBottom),i=e.node(j(r.borderLeft)),o=e.node(j(r.borderRight));r.width=Math.abs(o.x-i.x),r.height=Math.abs(a.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}}),c(e.nodes(),function(n){e.node(n).dummy==="border"&&e.removeNode(n)})}u($n,"removeBorderNodes");function er(e){c(e.edges(),function(n){if(n.v===n.w){var r=e.node(n.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}})}u(er,"removeSelfEdges");function nr(e){var n=F(e);c(n,function(r){var t=0;c(r,function(a,i){var o=e.node(a);o.order=i+t,c(o.selfEdges,function(d){L(e,"selfedge",{width:d.label.width,height:d.label.height,rank:o.rank,order:i+ ++t,e:d.e,label:d.label},"_se")}),delete o.selfEdges})})}u(nr,"insertSelfEdges");function rr(e){c(e.nodes(),function(n){var r=e.node(n);if(r.dummy==="selfedge"){var t=e.node(r.e.v),a=t.x+t.width/2,i=t.y,o=r.x-a,d=t.height/2;e.setEdge(r.e,r.label),e.removeNode(n),r.label.points=[{x:a+2*o/3,y:i-d},{x:a+5*o/6,y:i-d},{x:a+o,y:i},{x:a+5*o/6,y:i+d},{x:a+2*o/3,y:i+d}],r.label.x=r.x,r.label.y=r.y}})}u(rr,"positionSelfEdges");function G(e,n){return q(D(e,n),Number)}u(G,"selectNumberAttrs");function Y(e){var n={};return c(e,function(r,t){n[t.toLowerCase()]=r}),n}u(Y,"canonicalize");export{vr as l};
