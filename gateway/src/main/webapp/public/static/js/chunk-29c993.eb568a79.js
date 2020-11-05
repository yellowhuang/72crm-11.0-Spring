(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29c993","chunk-29c9","chunk-29c99","chunk-7de7","chunk-978c","chunk-5a45"],{"2NAp":function(t,e,i){"use strict";var n=i("mrH5");i.n(n).a},"2caY":function(t,e,i){},BsgX:function(t,e,i){"use strict";var n={name:"ReportMenu",components:{},mixins:[i("Z+Ht").a],props:{list:Array},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{itemClick:function(t){this.$emit("select",t)}}},s=(i("kSFP"),i("KHd+")),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"report-menu"},t._l(t.list,function(e,n){return i("span",{key:n,staticClass:"report-menu-btn",on:{click:function(i){t.itemClick(e)}}},[i("i",{staticClass:"report-menu-btn__icon",class:t.getXrIcon(e.type),style:{color:t.getXrIconColor(e.type)}}),t._v(" "),i("span",{staticClass:"report-menu-btn__name"},[t._v(t._s(e.name))])])}))},[],!1,null,"d819a984",null);a.options.__file="ReportMenu.vue";e.a=a.exports},FuWY:function(t,e,i){},KmSi:function(t,e,i){"use strict";var n=i("QbLZ"),s=i.n(n),a=i("4XAY"),o=i("ZoMv"),r=i("yPq4"),l=i("O8VQ"),c=i("Ew9n"),u={name:"RecordList",components:{LogCell:l.a,SlideView:c.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-331e"),i.e("chunk-7de7")]).then(i.bind(null,"3z7q"))}},filters:{crmIconClass:function(t){return"wk wk-"+o.a.convertTypeToKey(t)},crmName:function(t){return o.a.convertTypeToName(t)}},props:{crmType:String,request:Function,params:Object,listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,page:1,noMore:!1,list:[],scrollKey:Date.now(),showFullDetail:!1,relationID:"",relationCrmType:""}},computed:{crmIcon:function(){var t=this.crmType.replace("crm_","");return i("p3hS")("./"+t+".png")},scrollDisabled:function(){return this.loading||this.noMore}},watch:{params:function(){this.refreshList()}},mounted:function(){},methods:{refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var t=this;this.loading=!0,this.request(s()({page:this.page,limit:15},this.params)).then(function(e){t.page++,t.list=t.list.concat(e.data.list),t.noMore=e.data.lastPage,t.loading=!1}).catch(function(){t.noMore=!0,t.loading=!1})},checkRelationDetail:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.relationID=e,this.relationCrmType=i?o.a.convertTypeToKey(t):t,this.showFullDetail=!0},hideView:function(){this.$emit("hide")}}},d=(i("lm3i"),i("KHd+")),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("slide-view",{staticClass:"d-view",attrs:{"listener-ids":t.listenerIDs,"no-listener-ids":t.noListenerIDs,"no-listener-class":t.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{close:t.hideView}},[i("flexbox",{staticClass:"t-section"},[i("img",{staticClass:"t-img",attrs:{src:t.crmIcon}}),t._v(" "),i("div",{staticClass:"t-name"},[t._v("跟进记录")])]),t._v(" "),i("div",{staticClass:"t-content"},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],key:t.scrollKey,attrs:{"infinite-scroll-disabled":"scrollDisabled","infinite-scroll-distance":"100"}},t._l(t.list,function(e,n){return i("log-cell",{key:n,attrs:{item:e,index:n,"can-delete":!1},on:{"crm-detail":t.checkRelationDetail}},[i("div",{staticClass:"relate-cell",on:{click:function(i){t.checkRelationDetail(e.activityType,e.activityTypeId,!0)}}},[i("i",{staticClass:"relate-cell-icon",class:t._f("crmIconClass")(e.activityType)}),t._v(" "),i("span",{staticClass:"relate-cell-type"},[t._v(t._s(t._f("crmName")(e.activityType))+"-")]),t._v(" "),i("span",{staticClass:"relate-cell-name"},[t._v(t._s(e.crmTypeName))])])])})),t._v(" "),t.loading?i("p",{staticClass:"scroll-bottom-tips"},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?i("p",{staticClass:"scroll-bottom-tips"},[t._v("没有更多了")]):t._e()]),t._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:t.showFullDetail,"crm-type":t.relationCrmType,id:t.relationID},on:{"update:visible":function(e){t.showFullDetail=e}}})],1)},[],!1,null,"52a40eb4",null);p.options.__file="RecordList.vue";var h=p.exports,m=i("L2JU"),f=i("4peS"),v=i.n(f),g=i("dAOq"),w={name:"ReportList",components:{CRMAllDetail:r.a,RecordList:h},filters:{dealIcon:function(t){return 1==t?"wk wk-success deal-suc":"wk wk-close deal-un"},dealName:function(t){return 1==t?"已成交":"未成交"}},mixins:[g.a],props:{show:{type:Boolean,default:!1},title:String,placeholder:{type:String,default:"请输入搜索内容"},crmType:String,fieldList:Array,recordRequest:Function,request:Function,params:Object,paging:{type:Boolean,default:!0},sortable:{type:[Boolean,String],default:!1}},data:function(){return{inputContent:"",loading:!1,tableHeight:this.getTableHeight(),list:[],showFieldList:[],sortData:{},currentPage:1,pageSize:v.a.get("crmPageSizes")||15,pageSizes:[15,30,60,100],total:0,rowID:"",rowType:"",showDview:!1,recordParams:{},recordShow:!1}},computed:s()({},Object(m.b)(["crm"]),{showExamineStatus:function(){return"contract"==this.crmType&&"receivables"==this.crmType},showFillColumn:function(){return!this.fieldList||!this.fieldList.length}}),watch:{show:function(t){t&&this.initInfo()}},mounted:function(){this.$el.addEventListener("click",this.handleDocumentClick,!1)},destroyed:function(){this.$el&&this.$el.removeEventListener("click",this.handleDocumentClick,!1)},methods:{getTableHeight:function(){var t=document.documentElement.clientHeight;return t-.2*t-200},initInfo:function(){var t=this;this.inputContent="",this.showFieldList=[],this.sortData={},this.$nextTick(function(){t.$refs.crmTable.clearSort()}),this.list=[],this.currentPage=1,window.onresize=function(){t.tableHeight=t.getTableHeight()},this.fieldList?(this.showFieldList=this.fieldList,this.getList()):this.getFieldList()},searchInput:function(){this.currentPage=1,this.getList()},getList:function(){var t=this;this.loading=!0;var e={};this.paging&&(e={page:this.currentPage,limit:this.pageSize}),this.placeholder&&(e.search=this.inputContent),this.sortData.order&&(e.sortField=this.sortData.prop,e.order="ascending"==this.sortData.order?2:1),this.request(s()({},e,this.params)).then(function(e){t.paging?(t.list=e.data.list,t.total=e.data.totalRow):t.list=e.data,t.loading=!1}).catch(function(){t.loading=!1})},getFieldList:function(){var t=this;if(0==this.showFieldList.length){this.loading=!0;var e="business_status"==this.crmType?"business":this.crmType,i={label:o.a[e]};Object(a.A)(i).then(function(e){for(var i=0;i<e.data.length;i++){var n=e.data[i],s=0;s=n.width?n.width:n.name&&n.name.length<=6?15*n.name.length+45:140,t.showFieldList.push({prop:n.fieldName,label:n.name,width:s})}t.getList()}).catch(function(){t.loading=!1})}else this.getList()},fieldFormatter:function(t,e){return this.fieldList&&this.fieldList.length&&"crmType"==e.property?o.a.convertTypeToName(t[e.property]):""===t[e.property]||null===t[e.property]?"--":t[e.property]},sortChange:function(t,e,i){this.sortData=t,this.getList()},handleSizeChange:function(t){v.a.set("crmPageSizes",t),this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleRowClick:function(t,e,i){"leads"===this.crmType?"leadsName"===e.property?(this.rowID=t.leadsId,this.showDview=!0):this.showDview=!1:"customer"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):this.showDview=!1:"contacts"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"name"===e.property?(this.rowID=t.contactsId,this.rowType="contacts",this.showDview=!0):this.showDview=!1:"business"===this.crmType||"business_status"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"businessName"===e.property?(this.rowID=t.businessId,this.rowType="business",this.showDview=!0):this.showDview=!1:"contract"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"businessName"===e.property?(this.rowID=t.businessId,this.rowType="business",this.showDview=!0):"contactsName"===e.property?(this.rowID=t.contactsId,this.rowType="contacts",this.showDview=!0):"num"===e.property||"name"===e.property?(this.rowID=t.contractId,this.rowType="contract",this.showDview=!0):this.showDview=!1:"product"===this.crmType?"name"===e.property?(this.rowID=t.productId,this.showDview=!0):this.showDview=!1:"receivables"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"contractNum"===e.property?(this.rowID=t.contractId,this.rowType="contract",this.showDview=!0):"number"===e.property?(this.rowID=t.receivablesId,this.rowType="receivables",this.showDview=!0):this.showDview=!1:"record"===this.crmType&&("count"===e.property&&t.count?(this.rowType="crm_"+o.a.convertTypeToKey(t.crmType),this.recordParams=s()({crmType:t.crmType,queryType:0},this.params),this.recordShow=!0):this.recordShow=!1)},handleHandle:function(t){"alloc"!==t.type&&"get"!==t.type&&"transfer"!==t.type&&"transform"!==t.type&&"delete"!==t.type&&"put_seas"!==t.type||(this.showDview=!1),"edit"!==t.type&&this.getList()},cellClassName:function(t){var e=t.row,i=t.column;t.rowIndex,t.columnIndex;return this.crmType&&("customerName"===i.property||"businessName"===i.property||"name"===i.property||"contactsName"===i.property||"num"===i.property||"contractNum"===i.property||"number"===i.property||"record"===this.crmType&&"count"===i.property&&e[i.property])?"can-visit--underline":""},hideView:function(){this.$emit("update:show",!1),this.$emit("hide")},handleDocumentClick:function(t){var e=!0,i=document.getElementsByClassName("el-table__row");if(i&&e)for(var n=0;n<i.length;n++){if(i[n].contains(t.target)){e=!1;break}}document.getElementById("slide")&&document.getElementById("slide").contains(t.target)&&(e=!1),e&&(this.showDview=!1)}}},y=(i("smxo"),Object(d.a)(w,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.show,"append-to-body":!0,"close-on-click-modal":!1,top:"10vh",width:"80%","custom-class":"no-padding-dialog"},on:{close:t.hideView}},[i("div",{staticClass:"header",attrs:{slot:"title"},on:{click:function(e){t.showDview=!1}},slot:"title"},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.placeholder?i("el-input",{staticClass:"search-input",attrs:{placeholder:t.placeholder},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchInput(e):null}},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchInput(e)}},slot:"append"})],1):t._e()],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"list-body"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"crmTable",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:t.list,height:t.tableHeight,"cell-class-name":t.cellClassName,stripe:"",border:"","highlight-current-row":""},on:{"row-click":t.handleRowClick,"sort-change":t.sortChange}},[t._l(t.showFieldList,function(e,n){return i("el-table-column",{key:n,attrs:{sortable:"poolDay"!=e.prop&&"custom",fixed:0==n,prop:e.prop,label:e.label,width:e.width,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(n){return["dealStatus"==e.prop?[i("i",{class:t._f("dealIcon")(n.row[e.prop])}),t._v(" "),i("span",[t._v(t._s(t._f("dealName")(n.row[e.prop])))])]:"status"==e.prop?[2==n.row.status?i("i",{staticClass:"wk wk-circle-password customer-lock"}):t._e()]:"checkStatus"==e.prop?[i("span",{staticClass:"status-mark",style:{backgroundColor:t.getStatusColor(n.row.checkStatus)}}),t._v(" "),i("span",[t._v(t._s(t.getStatusName(n.row.checkStatus)))])]:[t._v(t._s(t.fieldFormatter(n.row,n.column)))]]}}])})}),t._v(" "),t.showFillColumn?i("el-table-column"):t._e()],2),t._v(" "),t.paging?i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)]),t._v(" "),i("c-r-m-all-detail",{staticClass:"d-view",attrs:{visible:t.showDview,"crm-type":t.rowType,id:t.rowID},on:{"update:visible":function(e){t.showDview=e},handle:t.handleHandle}}),t._v(" "),t.recordShow?i("record-list",{attrs:{"crm-type":t.rowType,request:t.recordRequest,params:t.recordParams},on:{handle:t.getList,hide:function(e){t.recordShow=!1}}}):t._e()],1)])},[],!1,null,"7218b0a7",null));y.options.__file="index.vue";e.a=y.exports},MdnP:function(t,e,i){"use strict";var n={name:"PictureListView",props:{list:{type:Array,required:!0}},methods:{imgZoom:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t,e,i){return{url:t.filePath||t.url,name:t.name}})})}}},s=(i("2NAp"),i("KHd+")),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"picture-list-view"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"img-list-item",on:{click:function(e){t.imgZoom(t.list,n)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.filePath||e.url,expression:"imgItem.filePath || imgItem.url"}],key:e.filePath||e.url})])}))},[],!1,null,"5437fe00",null);a.options.__file="PictureListView.vue";e.a=a.exports},NUy3:function(t,e,i){},VmBU:function(t,e,i){"use strict";i.d(e,"e",function(){return s}),i.d(e,"a",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"b",function(){return r}),i.d(e,"j",function(){return l}),i.d(e,"h",function(){return c}),i.d(e,"f",function(){return u}),i.d(e,"g",function(){return d}),i.d(e,"i",function(){return p}),i.d(e,"d",function(){return h}),i.d(e,"m",function(){return m}),i.d(e,"l",function(){return f}),i.d(e,"k",function(){return v}),i.d(e,"n",function(){return g});var n=i("t3Un");function s(t){return Object(n.a)({url:"oaLog/queryList",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function a(t){return Object(n.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function o(t){return Object(n.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function r(t){return Object(n.a)({url:"oaLog/deleteById",method:"post",data:t})}function l(t){return Object(n.a)({url:"oaLog/readLog",method:"post",data:t})}function c(t){return Object(n.a)({url:"oaLog/queryById",method:"post",data:t})}function u(t){return Object(n.a)({url:"oaLog/queryLogBulletin",method:"post",data:t})}function d(t){return Object(n.a)({url:"oaLog/queryLogBulletinByType",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function p(t){return Object(n.a)({url:"oaLog/queryLogRecordCount",method:"post",data:t})}function h(t){return Object(n.a)({url:"oaLog/getLogWelcomeSpeech",method:"post",data:t})}function m(t){return Object(n.a)({url:"oaLog/export",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}function f(t){return Object(n.a)({url:"oaLog/queryCompleteStats",method:"post",data:t})}function v(t){return Object(n.a)({url:"oaLog/queryCompleteOaLogList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function g(t){return Object(n.a)({url:"oaLog/queryIncompleteOaLogList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},Z3f6:function(t,e,i){},cMZE:function(t,e,i){"use strict";var n=i("Z3f6");i.n(n).a},kSFP:function(t,e,i){"use strict";var n=i("NUy3");i.n(n).a},lm3i:function(t,e,i){"use strict";var n=i("FuWY");i.n(n).a},mrH5:function(t,e,i){},oWzH:function(t,e,i){"use strict";e.a={methods:{getCategoryIcon:function(t){var e=t&&"string"==typeof t?t.split(","):[];return e.length>1?{icon:e[0],color:e[1]}:{icon:"wk wk-approve",color:"#9376FF"}}}}},slnp:function(t,e,i){"use strict";var n=i("7qmR"),s=i("Ew9n"),a=i("3biH"),o=i("/407"),r=i("hwzM"),l=i("7Qib"),c=i("oWzH"),u={name:"ExamineDetail",components:{SlideView:s.a,ExamineInfo:a.a,RelatedBusinessCell:o.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-331e"),i.e("chunk-978c")]).then(i.bind(null,"3z7q"))},FileCell:r.a},filters:{fileName:function(t){return(t.name&&t.name.length>10?t.name.substring(0,10)+"...":t.name)+"("+Object(l.h)(t.size)+")"}},mixins:[c.a],props:{id:[String,Number],detailIndex:[String,Number],detailSection:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,categoryId:"",type:"",detail:null,list:[],categoryName:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){for(var t=this,e={},i=["contacts","customer","business","contract"],n=function(n){var s=i[n],a=t.detail[s+"List"]||[];a.length>0&&(e[s]=a.map(function(t){return t.id&&(t[s+"Id"]=t.id),t}))},s=0;s<i.length;s++)n(s);return e},detailIcon:function(){return this.getCategoryIcon(this.detail.icon)}},watch:{id:function(t){this.detail=null,this.getDetail()}},mounted:function(){},methods:{viewAfterEnter:function(){this.getDetail()},getBaseInfo:function(){var t=this;this.loading=!0,Object(n.h)({examineId:this.id,isDetail:1}).then(function(e){t.list=e.data,t.loading=!1}).catch(function(){t.loading=!1})},getDetail:function(){var t=this;this.loading=!0,Object(n.k)(this.id).then(function(e){t.loading=!1,t.categoryId=e.data.categoryId,t.type=e.data.type,t.getBaseInfo(),t.detail=e.data,t.categoryName=t.detail.categoryTitle,t.fileList=t.detail.file,t.imgList=t.detail.img,t.travelList=t.detail.examineTravelList}).catch(function(){t.loading=!1,t.hideView()})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(t,e){this.relatedID=e[t+"Id"]||e.id,this.relatedCRMType=t,this.showRelatedDetail=!0},handleFile:function(t,e,i){"preview"===t?e&&e.length>0&&this.$bus.emit("preview-image-bus",{index:i,data:e}):"download"===t&&Object(l.d)({path:e.url,name:e.name})},imgZoom:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t})},downloadFile:function(t){Object(l.d)({path:t.url,name:t.name})},examineHandle:function(t){this.$emit("on-examine-handle",t,this.detailIndex),this.$emit("handle",t,this.detailIndex)}}},d=(i("cMZE"),i("KHd+")),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":t.noListenerClass},on:{afterEnter:t.viewAfterEnter,close:t.hideView}},[t.detail?i("flexbox",{staticClass:"detail-main",attrs:{orient:"vertical"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-icon",style:{backgroundColor:t.detailIcon.color}},[i("i",{class:["wk","wk-"+t.detailIcon.icon]})]),t._v(" "),i("div",{staticClass:"header-name"},[t._v(t._s(t.categoryName))])]),t._v(" "),i("div",{staticClass:"detail-body"},[i("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},t._l(t.list,function(e,n){return"examine_cause"!==e.formType&&"business_cause"!==e.formType?i("flexbox-item",{key:n,staticClass:"b-cell",attrs:{span:.5}},["checkbox"===e.formType?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},t._l(e.value,function(e,n){return i("div",{key:n},[t._v("\n                  "+t._s(e)+"  \n                ")])}))],1)]):"file"===e.formType?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},t._l(e.value,function(n,s){return i("flexbox",{key:s,staticClass:"f-item"},[i("i",{staticClass:"wukong wukong-file f-img"}),t._v(" "),i("div",{staticClass:"f-name"},[t._v(t._s(t._f("fileName")(n)))]),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){t.handleFile("preview",e.value,s)}}},[t._v("预览")]),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){t.handleFile("download",n,s)}}},[t._v("下载")])],1)}))]):i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"b-cell-value"},[t._v(t._s(e.value))])])]):t._e()})),t._v(" "),t.imgList.length>0?i("div",{staticClass:"img-box"},t._l(t.imgList,function(e,n){return i("div",{key:n,staticClass:"img-list",on:{click:function(e){t.imgZoom(t.imgList,n)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.url,expression:"imgItem.url"}],key:e.url})])})):t._e(),t._v(" "),t.fileList.length?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-file"}),t._v(" "),i("span",[t._v("附件")]),t._v(" "),i("span",[t._v("("+t._s(t.fileList.length)+")")])]),t._v(" "),i("div",{staticClass:"section__bd"},t._l(t.fileList,function(e,n){return i("file-cell",{key:n,attrs:{data:e,list:t.fileList,"cell-index":n}})}))]):t._e(),t._v(" "),t.type&&3==t.type&&t.travelList&&t.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[t._v("行程")]),t._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:t.travelList,align:"center","header-align":"center",stripe:""}},t._l(t.travelField,function(t,e){return i("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""}})}))],1):t._e(),t._v(" "),t.type&&5==t.type&&t.travelList&&t.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[t._v("报销")]),t._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:t.travelList,align:"center","header-align":"center",stripe:""}},[t._l(t.expensesField,function(t,e){return i("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":""}})}),t._v(" "),i("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("flexbox",{attrs:{justify:"center"}},[i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){t.handleFile("preview",e.row.img,0)}}},[t._v(t._s(e.row.img?e.row.img.length:0)+"张")])],1)]}}])})],2)],1):t._e(),t._v(" "),Object.keys(t.relatedListData).length>0?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-relevance"}),t._v(" "),i("span",[t._v("相关信息")])]),t._v(" "),i("div",{staticClass:"section__bd"},t._l(t.relatedListData,function(e,n){return i("div",{key:n},t._l(e,function(e,s){return i("related-business-cell",{key:s,attrs:{data:e,"cell-index":s,type:n,"show-foot":!1},nativeOn:{click:function(i){t.checkRelatedDetail(n,e)}}})}))}))]):t._e(),t._v(" "),i("div",{staticClass:"examine-section"},[i("examine-info",{staticClass:"create-sections-content",attrs:{id:t.id,"record-id":t.detail.examineRecordId,"examine-type":"oa_examine"},on:{"on-handle":t.examineHandle}})],1)],1)],1):t._e(),t._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:t.showRelatedDetail,"crm-type":t.relatedCRMType,id:t.relatedID},on:{"update:visible":function(e){t.showRelatedDetail=e}}})],1)},[],!1,null,"a7b324d8",null);p.options.__file="ExamineDetail.vue";e.a=p.exports},smxo:function(t,e,i){"use strict";var n=i("2caY");i.n(n).a}}]);