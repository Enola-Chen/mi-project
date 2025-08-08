<script setup>
import { ref } from 'vue'
import 'material-icons/iconfont/material-icons.css'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper autoplay progress logic
const progressCircle = ref(null)
const progressContent = ref(null)
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress)
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
}

const swiperModules = [Autoplay, Pagination, Navigation]
const modules = [Navigation]
</script>

<template>
  <div class="bg-background-gray">
    <div>
      <!-- top advertisement -->
      <div class="flex bg-black text-white text-sm py-2">
        <p class="text-center flex-1">物流及退貨服務公告</p>
        <div class="flex justify-end">
          <button class="text-white hover:text-gray-300 transition-colors px-4">
            <span class="material-icons text-base">close</span>
          </button>
        </div>
      </div>
      <!-- 主導航欄 -->
      <div class="bg-white shadow-sm border-b">
        <div class="w-full flex items-center justify-between h-16 px-4">
          <!-- 左側 - Logo 和主選單 -->
          <div class="flex items-center space-x-8">
            <!-- MI Logo -->
            <div class="flex items-center">
              <img src="../images/mi-logo.png" alt="mi-logo" class="w-14" />
            </div>

            <!-- 主要導航選單 -->
            <div class="flex items-center space-x-8">
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >小米商城</a
              >
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >手機/平板</a
              >
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >智慧穿戴</a
              >
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >智慧居家</a
              >
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >生活方式</a
              >
              <a href="#" class="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >POCO</a
              >
            </div>
          </div>

          <!-- 右側 - 功能連結和圖標 -->
          <div class="flex items-center space-x-6">
            <a href="#" class="text-gray-600 hover:text-orange-500 text-sm transition-colors"
              >中獎名單</a
            >
            <a href="#" class="text-gray-600 hover:text-orange-500 text-sm transition-colors"
              >探索更多</a
            >
            <a href="#" class="text-gray-600 hover:text-orange-500 text-sm transition-colors"
              >小米支援</a
            >

            <!-- 搜尋圖標 -->
            <button class="text-gray-600 hover:text-orange-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>

            <!-- 購物車圖標 -->
            <button class="text-gray-600 hover:text-orange-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293a1 1 0 00-.293.707V19a2 2 0 002 2h10a2 2 0 002-2v-2.586a1 1 0 00-.293-.707L16 13"
                ></path>
              </svg>
            </button>

            <!-- 用戶登入圖標 -->
            <button class="text-gray-600 hover:text-orange-500 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要輪播區域 -->
    <div class="h-[30rem] bg-gray-100">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 100000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="swiperModules"
        @autoplayTimeLeft="onAutoplayTimeLeft"
        class="swiper h-full"
      >
        <swiper-slide>
          <div class="relative w-full h-full">
            <img
              src="../images/MainPage/bannerCoupon.png"
              alt="bannerCoupon"
              class="w-full h-full object-cover"
              ㄌ
            />
          </div>
          <div class="absolute inset-0 flex items-center ml-[18rem]">
            <div class="max-w-lg">
              <p class="text-lg font-black mb-2 leading-tight">青春Fun價去<br />學生專屬加碼</p>
              <p class="font-black mt-3">手機平板66折起</p>
              <p class="font-black mb-3">學生憑證再享千元優惠和多重禮</p>
              <p class="text-sm mb-12">7.8 | 10:00 - 7.31 | 23:59</p>
              <div>
                <button
                  class="text-sm bg-black text-white px-3 py-1 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  暸解更多
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative w-full h-full">
            <img
              src="../images/MainPage/bannerWatch.png"
              alt="bannerWatch"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute inset-0 flex items-center ml-[18rem]">
            <div class="max-w-lg">
              <p class="text-3xl font-black leading-tight">Xiaomi 手環 10 NFC版</p>
              <p class="font-black my-4">7/30前下單享85折配件加購</p>
              <p class="text-sm">
                9/30前購 NFC 版首次使用 Easy Wallet App 加值贈<span class="block text-sm"
                  >$100回饋金</span
                >
              </p>
              <p class="text-sm mt-12">從 <span class="text-sm">NT$</span>1,199 起</p>
              <div>
                <button
                  class="text-sm bg-black text-white px-3 py-1 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  立即購買
                </button>
                <button class="text-sm text-black px-3 py-1 rounded-lg font-bold">暸解更多</button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative w-full h-full">
            <img
              src="../images/MainPage/bannerPhone.png"
              alt="bannerPhone"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute inset-0 flex items-center ml-[18rem]">
            <div class="max-w-lg">
              <p class="text-3xl font-black mb-2 leading-tight">POCO X7 Pro</p>
              <p class="font-black mt-3">支援 Google 錢包啟用 iPASS 一卡通服務</p>
              <p class="font-black mb-3">旗艦級 Dimensity 8400-Ultra 處理器</p>
              <p class="font-black mb-3">6000mAh超大電量與90W極速快充</p>
              <div class="flex items-end space-x-4">
                <p class="text-sm"><span class="text-sm">NT$</span>7,999</p>
                <p class="text-sm line-through text-gray-500">NT$9,999</p>
              </div>
              <div class="mb-12">
                <button
                  class="text-sm bg-black text-white px-3 py-1 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  立即購買
                </button>
                <button class="text-sm text-black px-3 py-1 rounded-lg font-bold">暸解更多</button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="relative w-full">
            <img
              src="../images/MainPage/bannerFloor.png"
              alt="bannerFloor"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute inset-0 flex items-center ml-[18rem]">
            <div class="max-w-lg">
              <p class="text-3xl font-black text-white mb-2 leading-tight">
                Xiaomi 掃拖機器人 X20 Max
              </p>
              <p class="font-black text-white mt-3 mb-3">可延伸拖地邊刷 8000Pa毫米級清潔</p>
              <div class="flex items-end space-x-4">
                <p class="text-white text-sm"><span class="text-sm text-white">NT$</span>14,499</p>
                <p class="text-sm line-through text-gray-500">NT$15,995</p>
              </div>
              <div class="mb-12">
                <button
                  class="text-sm bg-white px-3 py-1 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  立即購買
                </button>
                <button class="text-sm text-white px-3 py-1 rounded-lg font-bold">暸解更多</button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <template #container-end>
          <div class="autoplay-progress">
            <svg viewBox="0 0 48 48" ref="progressCircle">
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref="progressContent"></span>
          </div>
        </template>
      </swiper>
    </div>

    <div class="py-16">
      <div class="w-full px-4">
        <h2 class="text-center text-3xl font-bold text-gray-900 mb-11">熱門商品</h2>

        <!-- 产品分类导航 -->
        <div class="flex justify-center mb-12 space-x-12">
          <a href="#" class="text-orange-500 text-xl font-black border-b-2 border-orange-500 pb-2"
            >手機/平板</a
          >
          <a href="#" class="text-xl font-black hover:text-orange-500 font-medium pb-2"
            >Xiaomi 手環 10</a
          >
          <a href="#" class="text-xl font-black hover:text-orange-500 font-medium pb-2"
            >青春Fun優惠！</a
          >
          <a href="#" class="text-xl font-black hover:text-orange-500 font-medium pb-2">清潔電器</a>
          <a href="#" class="text-xl font-black hover:text-orange-500 font-medium pb-2">影音設備</a>
        </div>

        <!-- 主要产品展示区 -->
        <div class="w-[calc(100vw-16rem)] bg-white mx-auto grid grid-cols-4 grid-rows-2 gap-8 p-8">
          <div class="col-span-4 row-span-1 flex justify-center items-center rounded-md">
            <div class="w-1/2">
              <img src="../images/MainPage/HotX7.webp" alt="POCO X7 Pro" />
            </div>
            <div class="w-1/2 flex flex-col items-center justify-center bg-gray-light">
              <h3 class="text-5xl font-semibold text-gray-900">POCO X7 Pro</h3>
              <p class="text-lg font-extrabold my-6">支援 Google 錢包啟用 iPASS 一卡通服務</p>
              <p class="text-lg text-gray-700">旗艦級 Dimensity 8400-Ultra 處理器</p>
              <p class="text-lg text-gray-700 mb-6">6000mAh超大電量與90W極速快充</p>
              <div class="flex items-end space-x-4">
                <p class="text-xl font-semibold">從 <span class="text-sm">NT$</span>7,999 起</p>
                <p class="text-lg line-through text-gray-500">NT$9,999</p>
              </div>
              <!-- 按钮 -->
              <div class="mt-8">
                <button
                  class="bg-black text-white px-4 py-1 rounded-lg font-extrabold hover:bg-gray-800 transition-colors"
                >
                  暸解更多
                </button>
              </div>
            </div>
          </div>

          <!-- 产品卡片 - 占据下方一行，每个产品占一列 -->
          <!-- Xiaomi 15 Ultra -->
          <div class="col-start-1 row-start-2 col-span-1 row-span-1 bg-gray-light rounded-md">
            <div class="flex flex-col items-center justify-center">
              <div class="my-16">
                <img
                  src="../images/MainPage/Hot15.webp"
                  alt="Xiaomi 15 Ultra"
                  class="w-28 object-contain"
                />
              </div>
              <h4 class="text-lg font-semibold mb-6">Xiaomi 15 Ultra</h4>
              <div class="flex items-end mb-16">
                <p class="text-lg font-semibold mr-4">
                  從 <span class="text-sm">NT$</span>32,999 起
                </p>
                <p class="text-sm line-through text-gray-500">NT$34,999</p>
              </div>
            </div>
          </div>

          <!-- Xiaomi 14T Pro -->
          <div class="col-start-2 row-start-2 col-span-1 row-span-1 bg-gray-light rounded-md">
            <div class="flex flex-col items-center justify-center">
              <div class="my-16">
                <img
                  src="../images/MainPage/Hot14.webp"
                  alt="Xiaomi 14T Pro"
                  class="w-28 object-contain"
                />
              </div>
              <h4 class="text-lg font-semibold mb-6">Xiaomi 14T Pro</h4>
              <div class="flex items-end mb-16">
                <p class="text-lg font-semibold mr-4">
                  從 <span class="text-sm">NT$</span>15,999 起
                </p>
                <p class="text-sm line-through text-gray-500">NT$17,999</p>
              </div>
            </div>
          </div>

          <!-- POCO F7 Ultra -->
          <div class="col-start-3 row-start-2 col-span-1 row-span-1 bg-gray-light rounded-md">
            <div class="flex flex-col items-center justify-center">
              <div class="my-16">
                <img
                  src="../images/MainPage/HotF7.webp"
                  alt="POCO F7 Ultra"
                  class="w-28 object-contain"
                />
              </div>
              <h4 class="text-lg font-semibold mb-6">POCO F7 Ultra</h4>
              <div class="flex items-end mb-16">
                <p class="text-lg font-semibold mr-4">
                  從 <span class="text-sm">NT$</span>17,999 起
                </p>
                <p class="text-sm line-through text-gray-500">NT$19,999</p>
              </div>
            </div>
          </div>

          <!-- Redmi Note 14 -->
          <div class="col-start-4 row-start-2 col-span-1 row-span-1 bg-gray-light rounded-md">
            <div class="flex flex-col items-center justify-center">
              <div class="my-16">
                <img
                  src="../images/MainPage/HotRedmi.webp"
                  alt="Redmi Note 14"
                  class="w-28 object-contain"
                />
              </div>
              <h4 class="text-lg font-semibold mb-6">Redmi Note 14</h4>
              <div class="flex items-end mb-16">
                <p class="text-lg font-semibold mr-4">
                  從 <span class="text-sm">NT$</span>4,399 起
                </p>
                <p class="text-sm line-through text-gray-500">NT$4,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-20">
      <h2 class="text-3xl text-center font-bold mb-11">獨家優惠</h2>
      <swiper :navigation="true" :modules="modules" class="swiper w-[74rem] mx-auto">
        <swiper-slide>
          <div class="flex justify-center gap-4">
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountGift.webp"
                  alt="discountGift"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">新戶禮遇</p>
                <p class="text-sm">首次注冊/登錄小米帳號 領取限定優惠</p>
              </div>
            </div>

            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountBuy.webp"
                  alt="discountBuy"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">每日閃購</p>
                <p class="text-sm">Xiaomi 電競螢幕 G27i</p>
                <p class="text-sm">折386元</p>
              </div>
            </div>
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountSave.webp"
                  alt="discountSave"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">7月學生優惠 最高再省千元</p>
                <p class="text-sm">認證學生資格 獲得獨家教育優惠</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex justify-center gap-4">
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountGroupBuy.webp"
                  alt="discountGroupBuy"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">企業團購</p>
                <p class="text-sm">快速下單 | 官方直發 | 便捷支付 | 批量發貨</p>
              </div>
            </div>

            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountPoint.webp"
                  alt="discountPoint"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">玩轉積分</p>
                <p class="text-sm">積分換好禮，抵現省更多！</p>
              </div>
            </div>
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg h-[266.41px] flex items-center justify-center">
                <img
                  src="../images/MainPage/discountIMEI.webp"
                  alt="discountIMEI"
                  class="object-contain rounded-lg max-h-full max-w-full"
                />
              </div>
              <div class="my-7 text-center">
                <p class="text-lg font-black mb-2">IMEI兌換</p>
                <p class="text-sm">使用您的 IMEI/SN 兌換更多優惠</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="mb-20">
      <h2 class="text-3xl text-center font-bold mb-11">探索更多</h2>
      <swiper :navigation="true" :modules="modules" class="swiper w-[74rem] mx-auto">
        <swiper-slide>
          <div class="flex justify-center gap-4">
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg">
                <img
                  src="../images/MainPage/discountGift.webp"
                  alt="discountGift"
                  class="object-contain rounded-lg"
                />
              </div>
              <div class="my-7">
                <p class="text-lg font-black mb-2">新戶禮遇</p>
                <p class="text-sm">首次注冊/登錄小米帳號 領取限定優惠</p>
              </div>
            </div>

            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg">
                <img
                  src="../images/MainPage/discountGift.webp"
                  alt="discountGift"
                  class="object-contain rounded-lg"
                />
              </div>
              <div class="my-8">
                <p class="text-lg font-black mb-2">新戶禮遇</p>
                <p class="text-sm">首次注冊/登錄小米帳號 領取限定優惠</p>
              </div>
            </div>
            <div class="bg-white rounded-md w-[23.75rem] p-4">
              <div class="rounded-lg">
                <img
                  src="../images/MainPage/discountGift.webp"
                  alt="discountGift"
                  class="object-contain rounded-lg"
                />
              </div>
              <div class="my-8">
                <p class="text-lg font-black mb-2">新戶禮遇</p>
                <p class="text-sm">首次注冊/登錄小米帳號 領取限定優惠</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>

    <!-- 小米支援頁面內容 -->
    <div class="py-16 bg-gray-50">
      <div class="w-full px-4">
        <h1 class="text-center text-4xl font-bold text-gray-900 mb-16">小米支援</h1>
        <!-- 支援服務卡片 -->
        <div class="grid grid-cols-4 gap-3">
          <!-- 小米服務中心 -->
          <div>
            <div class="p-8 text-center">
              <!-- 位置圖標 -->
              <div class="flex justify-center mb-6">
                <span class="material-icons text-gray-400" style="font-size: 70px">
                  location_on</span
                >
              </div>
              <h2 class="text-2xl font-semibold mb-4">小米服務中心</h2>
              <p class="text-sm">維修100%正品官方配件</p>
            </div>
          </div>

          <!-- 聯繫我們 -->
          <div>
            <div class="p-8 text-center">
              <!-- 耳機圖標 -->
              <div class="flex justify-center mb-6">
                <span class="material-icons text-gray-400" style="font-size: 70px">headset</span>
              </div>
              <h2 class="text-2xl font-semibold mb-4">聯繫我們</h2>
              <p class="text-sm">如有任何疑問，歡迎聯繫客服服務</p>
            </div>
          </div>

          <!-- 常見問題 -->
          <div>
            <div class="p-8 text-center">
              <!-- 幫助圖標 -->
              <div class="flex justify-center mb-6">
                <span class="material-icons text-gray-400" style="font-size: 70px"
                  >help_outline</span
                >
              </div>
              <h2 class="text-2xl font-semibold mb-4">常見問題</h2>
              <p class="text-sm">搜尋關於小米的幫助</p>
            </div>
          </div>

          <!-- 用戶指南 -->
          <div>
            <div class="p-8 text-center">
              <!-- 文檔圖標 -->
              <div class="flex justify-center mb-6">
                <span class="material-icons text-gray-400" style="font-size: 70px">layers</span>
              </div>
              <h2 class="text-2xl font-semibold mb-4">用戶指南</h2>
              <p class="text-sm">查找並下載您的小米產品用戶指南</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 自定義導航箭頭樣式 */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 40%;
  color: #000;
}

:deep(.swiper-button-next) {
  right: 2.5rem;
}
:deep(.swiper-button-prev) {
  left: 2.5rem;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: #f0f2f7;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 16px;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.autoplay-progress span {
  position: absolute;
  z-index: 10;
  font-size: 12px;
}

/* 新的Swiper樣式 */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* text-align: center; */
  font-size: 18px;
  background: transparent;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
