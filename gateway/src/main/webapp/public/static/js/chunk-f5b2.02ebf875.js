(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f5b2"],{"20Z4":function(t,a,e){"use strict";e.r(a);var i=e("QbLZ"),s=e.n(i),n=e("t3Un");var l={name:"AddressBookIndex",components:{XhStructureCell:e("UCfG").a},data:function(){return{bookType:"",initStrucValue:[],listData:[],tableMap:[{label:"手机",key:"mobile"},{label:"部门",key:"deptName"},{label:"岗位",key:"post"}],tableHeight:0,specialRowArr:[],currentPage:1,pageSizes:[15,30,60],pageSize:10,total:0,loading:!1,params:null}},created:function(){var t=this;this.bookType=this.$route.params.type,this.params=this.getDefaultParams(this.bookType),this.getList(),this.$nextTick(function(){t.tableHeight=document.getElementsByClassName("container-hook")[0].clientHeight-94})},beforeRouteUpdate:function(t,a,e){this.bookType=t.params.type,this.params=this.getDefaultParams(this.bookType),this.initStrucValue=[],this.listData=[],this.getList(),e()},methods:{getList:function(){var t,a=this;this.loading=!0,(t=this.params,Object(n.a)({url:"adminUser/queryListName",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})).then(function(t){a.loading=!1,a.total=t.data.totalRow,a.listData=t.data.list||[]}).catch(function(){a.loading=!1})},getDefaultParams:function(t){var a={page:1,limit:15,deptId:"",search:"",initial:1};return"attention"==this.bookType&&(a.status=1),a},formatList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(this.specialRowArr=[],this.listData=[],0===t.length)return[];var a=[],e={deptId:"",deptName:"",mobile:"",postName:"",realname:""};a.push(s()({},e,{initial:t[0].initial})),this.specialRowArr.push(0),a.push(t[0]);for(var i=1;i<t.length;i++){var n=t[i];n.initial===a[a.length-1].initial?a.push(n):(this.specialRowArr.push(a.length),a.push(s()({},e,{initial:n.initial})),a.push(n))}this.listData=a},getRowClass:function(t){return this.specialRowArr.includes(t.rowIndex)?"special-row":""},sortTableList:function(t){"ascending"===t.order?this.params.initial=1:"descending"===t.order&&(this.params.initial=2),this.getList()},toggleStar:function(t,a){var e,i=this;this.loading=!0,(e={userId:this.listData[t].userId},Object(n.a)({url:"adminUser/attention",method:"post",data:e})).then(function(){i.loading=!1,i.listData[t].status=0===a?1:0,i.$set(i.listData,t,i.listData[t])}).catch(function(){i.loading=!1})},handleSizeChange:function(t){this.params.limit=t,this.getList()},handleCurrentChange:function(t){this.params.page=t,this.getList()},structureChange:function(t){this.initStrucValue=t.value,this.params.page=1,this.params.deptId=t.value.length?t.value[0].id:"",this.getList()}}},r=(e("bgir"),e("KHd+")),o=Object(r.a)(l,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"address-book-index"},[i("div",{staticClass:"header"},[i("flexbox",{staticClass:"title"},[i("img",{staticClass:"pic",attrs:{src:e("r9DG"),alt:""}}),t._v(" "),i("span",{staticClass:"text"},[t._v("通讯录")])]),t._v(" "),i("el-input",{attrs:{placeholder:"请输入员工姓名/手机号"},model:{value:t.params.search,callback:function(a){t.$set(t.params,"search",a)},expression:"params.search"}},[i("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.getList},slot:"append"},[t._v("\n        搜索\n      ")])],1)],1),t._v(" "),i("div",{staticClass:"container container-hook"},[i("flexbox",{staticClass:"filter"},[i("span",{staticClass:"filter__label"},[t._v("选择部门")]),t._v(" "),i("xh-structure-cell",{staticClass:"xh-structure-cell",attrs:{value:t.initStrucValue,radio:""},on:{"value-change":t.structureChange}})],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"n-table--border",attrs:{data:t.listData,height:t.tableHeight,stripe:"",border:""},on:{"sort-change":t.sortTableList}},[i("el-table-column",{attrs:{label:"字母",align:"center",prop:"initial",width:"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"关注",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[i("span",{staticClass:"wk wk-focus-on focus-icon",class:{active:1===a.row.status},on:{click:function(e){t.toggleStar(a.$index,a.row.status)}}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"realname",label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(a){return[i("flexbox",{staticClass:"user-box"},[i("xr-avatar",{staticClass:"user-img",attrs:{name:a.row.realname,id:a.row.userId,size:30,src:a.row.img}}),t._v(" "),i("span",[t._v(t._s(a.row.realname))])],1)]}}])}),t._v(" "),t._l(t.tableMap,function(t,a){return i("el-table-column",{key:a,attrs:{prop:t.key,label:t.label}})})],2),t._v(" "),i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,"pager-count":5,total:t.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(a){t.pageSize=a},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},[],!1,null,"e5086912",null);o.options.__file="index.vue";a.default=o.exports},bgir:function(t,a,e){"use strict";var i=e("vriV");e.n(i).a},r9DG:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjY1MjNDOERBOTYxMUU5QUZDQkVFNjczQkJCQzA4RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjY1MjNDOURBOTYxMUU5QUZDQkVFNjczQkJCQzA4RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNjUyM0M2REE5NjExRTlBRkNCRUU2NzNCQkJDMDhEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNjUyM0M3REE5NjExRTlBRkNCRUU2NzNCQkJDMDhEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++MAjQQAAAuBJREFUeNrsmEtoE1EUhv87MxoSY6pYi4+a1sY2VCmhqJiFIsRHViK4EKEoWAW3ggsLEeuqlK7UbhVcuXAhtN1JNkqRVgqCGFutYK0LC0XbJvVFTK7npq0kaRJMMo4z4z3wZ5F53PvNPeefc4f5OpOgaCb1ko6SPLB2xElRUhdpUqMfP2mEtAH2CLFAp0ghUlChnx4bwWWHYOpRltPSrnFcsUHNlQq3ApuHBJSAElACSkAJ+D8DatVc7FgD3L+qIrCTVXT92CRHR18KqbRJV7BpC6sYTsS+Zpa5h3lTVIe5aZqswX9Xg4WifzCNZ2840nl1pdKjPNzGcCGsWBdw/APHrYHijvF0nCO8l6G+lhkGqOvj3FzDMs5aLFwOoGYds+4K1tLWeeC6ihdThf2o3Qesd1q8BndtYyQbm0y5cTLIEPSvTtvEN2BoNI0fSZMBzi4A72Z4wWO+rQyb8r4AXSzhqiITeh+kzQM4twiEr/1E/Gvh4xvdwJM+DU7Hn92vsa56Q9LVRT9+5kXhVh7A7AK3bg227mA4G1Iw9pYXdNGDexi8dRZ+TTCae3dHeUlxmxqDe9HcOmv3Mdy9rNrDRWPTq9M69p5aPQ5zAs7MLU2Q501QoYVta2TU7eT+f/OSipdTuecLt1WYCQFXXPTL9+Iu+phc1JXlos61wP4WZo0aFC5aDC7bRRuyjOZTHBh+xX/v6sWRQBN02wjrCrjby3D+mILR15Ry+e8jmu8hctGGPBe9cieF4Vju2W7qV5/3a+aswciZ8lw0FGCYnkXO/vEAtW6MmdRkyo1zRxSS/GRhPGDL9qV6+5vhrwe6TiuZsSpuPnydyYpeqUPdKlq9xrRd4lPIiRspY1fQY+CnB4+LGZ+inBu3K6hmrIoBB0f06xdLhRhDjGV4DdreRSWgBJSAElACSkAJaA3AuI35FgVg1MaAjwRghDRvQzjBFBGAE6Qg6SEpYQOwxDKLYJr4JcAAgnO65/3FDNAAAAAASUVORK5CYII="},vriV:function(t,a,e){}}]);