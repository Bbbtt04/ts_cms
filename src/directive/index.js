import LazyLoad from "./LazyLoad";
import copy from "./copy";
export default function (app) {
  app.directive("lazyload", LazyLoad);
  app.directive("copy", copy);
}
