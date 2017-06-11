<template>
  <div>
    <div class="weui-mask_transparent" v-show="showIt"></div>
    <transition name="fade">
      <div class="weui-toast my-toast" :class="{'my-toast__normal': !success && !loading && !icon}" v-show="showIt">
        <i :class="[{
          'weui-icon-success-no-circle': success,
          'weui-loading': loading
        }, 'weui-icon_toast my-toast-icon']" v-if="success || loading"></i>
        <i :class="icon" class="my-toast-icon_cus" v-if="icon"></i>
        <p class="weui-toast__content my-toast_content">{{content}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showIt: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    content: {},
    icon: {}
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  .my-toast {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
  }
  .my-toast.my-toast__normal {
    min-height: 2.6rem;
  }
  .my-toast.my-toast__normal .my-toast_content {
    margin: 0;
  }
  .my-toast-icon_cus {
    font-size: 5.5rem;
    margin-top: 2.2rem;
  }
</style>