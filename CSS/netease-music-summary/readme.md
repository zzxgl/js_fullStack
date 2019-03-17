- position: fixed;
生成绝对定位的元素，相对于浏览器窗口进行定位。
- background :repeat;
一张图片,铺满整个屏幕
- background :center;
居中在div的盒子中心
- swiper 页面滑动
<script > 
var mySwiper = new Swiper('.swiper-container',{
  on: {
    slideChangeTransitionEnd: function(){
      alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
    },
  },
})
</script>