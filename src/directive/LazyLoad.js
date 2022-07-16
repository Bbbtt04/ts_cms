import baseImg from "@/assets/pic/vue.png";

export default {
  mounted(el, binding) {
    el.src = baseImg;
    const observer = new IntersectionObserver((entries, observe) => {
      entries.forEach((item) => {
        console.log(item);
        let target = item.target;
        if (item.isIntersecting) {
          target.src = binding.value;
          // 取消观察
          observe.unobserve(item.target);
        }
      });
    });
    observer.observe(el);
  },
};
