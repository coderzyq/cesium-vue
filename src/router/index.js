/*
 * @Description:
 * @Author: coderqiang
 * @Date: 2023-06-06 21:17:52
 * @LastEditTime: 2023-06-06 21:33:26
 * @LastEditors: coderqiang
 */
/*
 * @Description:
 * @Author: coderqiang
 * @Date: 2023-06-06 21:17:52
 * @LastEditTime: 2023-06-06 21:23:05
 * @LastEditors: coderqiang
 */
import { createRouter, createWebHistory } from "vue-router";
import cesiumViewer from "@/views/cesiumViewer.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: cesiumViewer,
    alias: "/index",
  },
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/3dtiles",
    name: "3dtiles",
    component: cesiumViewer,
  },
  {
    path: "/imageTrail",
    name: "imageTrail",
    component: cesiumViewer,
  },
  {
    path: "/2dEffect",
    name: "2dEffect",
    component: cesiumViewer,
  },
  {
    path: "/3dEffect",
    name: "3dEffect",
    component: cesiumViewer,
  },
  {
    path: "/geoAnalysis",
    name: "geoAnalysis",
    component: cesiumViewer,
  },
  {
    path: "/weaterEffect",
    name: "weaterEffect",
    component: cesiumViewer,
  },
  {
    path: "/particleSystem",
    name: "particleSystem",
    component: cesiumViewer,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
