import Vue from 'vue';
import VueRouter from 'vue-router';
// 官方的文件

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';


// 自定義的文件

Vue.use(VueRouter)

export default new VueRouter({
    routes :[
         { 
           name:'首頁',  //元件對應的名稱
           path:'/index',     //對應的虛擬路徑
           component: Home  //對應的對應的元件
        },
        { 
            //name:'分頁',  元件對應的名稱
            path:'/page',     //對應的虛擬路徑
            //component: Page,  對應的對應的元件
            components:{
               default:Page,
               menu:Menu
            },
            children:[
               {  
                  name:'child',  //元件對應的名稱
                  path:'',     //對應的虛擬路徑
                  component: child  //對應的對應的元件
               },
               {  
                  name:'child2',  //元件對應的名稱
                  path:'child2',     //對應的虛擬路徑
                  component: child2  //對應的對應的元件
               },
               {  
                  name:'child3',  //元件對應的名稱
                  path:'child3',     //對應的虛擬路徑
                  component: child3  //對應的對應的元件
               },
            ],
         }
      ]
});