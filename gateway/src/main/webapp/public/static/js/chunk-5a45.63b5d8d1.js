(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a45"],{Z3f6:function(e,t,i){},cMZE:function(e,t,i){"use strict";var a=i("Z3f6");i.n(a).a},oWzH:function(e,t,i){"use strict";t.a={methods:{getCategoryIcon:function(e){var t=e&&"string"==typeof e?e.split(","):[];return t.length>1?{icon:t[0],color:t[1]}:{icon:"wk wk-approve",color:"#9376FF"}}}}},slnp:function(e,t,i){"use strict";var a=i("7qmR"),l=i("Ew9n"),n=i("3biH"),s=i("/407"),o=i("hwzM"),r=i("7Qib"),c=i("oWzH"),d={name:"ExamineDetail",components:{SlideView:l.a,ExamineInfo:n.a,RelatedBusinessCell:s.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-331e"),i.e("chunk-978c")]).then(i.bind(null,"3z7q"))},FileCell:o.a},filters:{fileName:function(e){return(e.name&&e.name.length>10?e.name.substring(0,10)+"...":e.name)+"("+Object(r.h)(e.size)+")"}},mixins:[c.a],props:{id:[String,Number],detailIndex:[String,Number],detailSection:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,categoryId:"",type:"",detail:null,list:[],categoryName:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){for(var e=this,t={},i=["contacts","customer","business","contract"],a=function(a){var l=i[a],n=e.detail[l+"List"]||[];n.length>0&&(t[l]=n.map(function(e){return e.id&&(e[l+"Id"]=e.id),e}))},l=0;l<i.length;l++)a(l);return t},detailIcon:function(){return this.getCategoryIcon(this.detail.icon)}},watch:{id:function(e){this.detail=null,this.getDetail()}},mounted:function(){},methods:{viewAfterEnter:function(){this.getDetail()},getBaseInfo:function(){var e=this;this.loading=!0,Object(a.h)({examineId:this.id,isDetail:1}).then(function(t){e.list=t.data,e.loading=!1}).catch(function(){e.loading=!1})},getDetail:function(){var e=this;this.loading=!0,Object(a.k)(this.id).then(function(t){e.loading=!1,e.categoryId=t.data.categoryId,e.type=t.data.type,e.getBaseInfo(),e.detail=t.data,e.categoryName=e.detail.categoryTitle,e.fileList=e.detail.file,e.imgList=e.detail.img,e.travelList=e.detail.examineTravelList}).catch(function(){e.loading=!1,e.hideView()})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(e,t){this.relatedID=t[e+"Id"]||t.id,this.relatedCRMType=e,this.showRelatedDetail=!0},handleFile:function(e,t,i){"preview"===e?t&&t.length>0&&this.$bus.emit("preview-image-bus",{index:i,data:t}):"download"===e&&Object(r.d)({path:t.url,name:t.name})},imgZoom:function(e,t){this.$bus.emit("preview-image-bus",{index:t,data:e})},downloadFile:function(e){Object(r.d)({path:e.url,name:e.name})},examineHandle:function(e){this.$emit("on-examine-handle",e,this.detailIndex),this.$emit("handle",e,this.detailIndex)}}},u=(i("cMZE"),i("KHd+")),v=Object(u.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":e.noListenerClass},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[e.detail?i("flexbox",{staticClass:"detail-main",attrs:{orient:"vertical"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-icon",style:{backgroundColor:e.detailIcon.color}},[i("i",{class:["wk","wk-"+e.detailIcon.icon]})]),e._v(" "),i("div",{staticClass:"header-name"},[e._v(e._s(e.categoryName))])]),e._v(" "),i("div",{staticClass:"detail-body"},[i("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},e._l(e.list,function(t,a){return"examine_cause"!==t.formType&&"business_cause"!==t.formType?i("flexbox-item",{key:a,staticClass:"b-cell",attrs:{span:.5}},["checkbox"===t.formType?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[i("flexbox",{staticStyle:{padding:"0px 10px 10px 0px"},attrs:{gutter:0,wrap:"wrap"}},e._l(t.value,function(t,a){return i("div",{key:a},[e._v("\n                  "+e._s(t)+"  \n                ")])}))],1)]):"file"===t.formType?i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},e._l(t.value,function(a,l){return i("flexbox",{key:l,staticClass:"f-item"},[i("i",{staticClass:"wukong wukong-file f-img"}),e._v(" "),i("div",{staticClass:"f-name"},[e._v(e._s(e._f("fileName")(a)))]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){e.handleFile("preview",t.value,l)}}},[e._v("预览")]),e._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){e.handleFile("download",a,l)}}},[e._v("下载")])],1)}))]):i("div",{staticClass:"b-cell-b"},[i("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"b-cell-value"},[e._v(e._s(t.value))])])]):e._e()})),e._v(" "),e.imgList.length>0?i("div",{staticClass:"img-box"},e._l(e.imgList,function(t,a){return i("div",{key:a,staticClass:"img-list",on:{click:function(t){e.imgZoom(e.imgList,a)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:t.url,expression:"imgItem.url"}],key:t.url})])})):e._e(),e._v(" "),e.fileList.length?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-file"}),e._v(" "),i("span",[e._v("附件")]),e._v(" "),i("span",[e._v("("+e._s(e.fileList.length)+")")])]),e._v(" "),i("div",{staticClass:"section__bd"},e._l(e.fileList,function(t,a){return i("file-cell",{key:a,attrs:{data:t,list:e.fileList,"cell-index":a}})}))]):e._e(),e._v(" "),e.type&&3==e.type&&e.travelList&&e.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[e._v("行程")]),e._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},e._l(e.travelField,function(e,t){return i("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":""}})}))],1):e._e(),e._v(" "),e.type&&5==e.type&&e.travelList&&e.travelList.length>0?i("div",{staticClass:"table-sections"},[i("div",{staticClass:"table-sections__title"},[e._v("报销")]),e._v(" "),i("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},[e._l(e.expensesField,function(e,t){return i("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":""}})}),e._v(" "),i("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("flexbox",{attrs:{justify:"center"}},[i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){e.handleFile("preview",t.row.img,0)}}},[e._v(e._s(t.row.img?t.row.img.length:0)+"张")])],1)]}}])})],2)],1):e._e(),e._v(" "),Object.keys(e.relatedListData).length>0?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-relevance"}),e._v(" "),i("span",[e._v("相关信息")])]),e._v(" "),i("div",{staticClass:"section__bd"},e._l(e.relatedListData,function(t,a){return i("div",{key:a},e._l(t,function(t,l){return i("related-business-cell",{key:l,attrs:{data:t,"cell-index":l,type:a,"show-foot":!1},nativeOn:{click:function(i){e.checkRelatedDetail(a,t)}}})}))}))]):e._e(),e._v(" "),i("div",{staticClass:"examine-section"},[i("examine-info",{staticClass:"create-sections-content",attrs:{id:e.id,"record-id":e.detail.examineRecordId,"examine-type":"oa_examine"},on:{"on-handle":e.examineHandle}})],1)],1)],1):e._e(),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"a7b324d8",null);v.options.__file="ExamineDetail.vue";t.a=v.exports}}]);