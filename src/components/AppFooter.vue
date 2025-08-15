<template>
  <footer class="bg-footer-gray text-white">
    <div class="max-w-[1400px] px-4">
      <div class="grid grid-cols-5 pt-[3.8rem]">
        <!-- 服務列表 -->
        <template v-for="service in footerServices" :key="service.title">
          <div>
            <h3 class="text-[1rem] text-base font-bold mb-3">{{ service.title }}</h3>
            <ul class="space-y-3">
              <li v-for="link in service.links" :key="link.text">
                <a
                  :href="link.url"
                  class="text-gray-text text-sm hover:text-white transition-colors"
                  >{{ link.text }}</a
                >
              </li>
            </ul>
          </div>
        </template>

        <!-- 關注我們 -->
        <div>
          <div>
            <h3 class="text-lg font-medium mb-3">關注我們</h3>
            <ul class="flex space-x-4">
              <li v-for="social in socialLinks" :key="social.name">
                <a :href="social.url" class="text-gray-400 hover:text-white transition-colors">
                  <img :src="social.icon" :alt="social.name" class="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-4">讓我們保持聯絡</h3>
            <div class="mb-8">
              <div class="flex">
                <input
                  type="email"
                  placeholder="請輸入電子郵件"
                  class="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none"
                />
                <button class="bg-gray-700 px-4 rounded-r-lg hover:bg-gray-600 transition-colors">
                  <span class="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 p-4 rounded-lg">
            <p class="text-base font-medium mb-2">下載小米商城官方APP</p>
            <div class="flex items-center space-x-4">
              <img src="../images/miQR.webp" alt="QR Code" class="w-24 h-24" />
              <p class="text-sm text-gray-400">點擊最新訊息以獲得更佳的購物體驗</p>
            </div>
            <a
              href="#"
              class="flex items-center justify-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition-colors"
            >
              <img
                src="../images/MainPage/google-play-icon.webp"
                alt="Google Play"
                class="w-6 h-6"
              />
              <span>Google play 立即下載</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 頁尾版權資訊 -->
      <div class="border-t border-gray-800">
        <div class="flex justify-between items-center">
          <p class="text-gray-400 text-sm">
            Copyright © 2010 - 2025 Xiaomi. All Rights Reserved 台灣小米通訊有限公司 統編:70552531
          </p>
          <a href="#" class="text-gray-400 text-sm hover:text-white transition-colors">網站地圖</a>
          <div class="flex items-center space-x-2 text-gray-400">
            <span class="text-sm">English name / Local name</span>
            <span class="material-icons text-sm">language</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// 頁尾導航資料
const footerServices = ref([
  {
    title: '特色服務',
    links: [
      { text: 'F碼通道', url: '#' },
      { text: '小米之家', url: '#' },
      { text: '官方授權通路', url: '#' },
      { text: 'CODE領券通道', url: '#' },
      { text: 'IMEI兌換', url: '#' },
      { text: '企業團購', url: '#' },
      { text: '學生優惠', url: '#' },
    ],
  },
  {
    title: '幫助中心',
    links: [
      { text: '購物指南', url: '#' },
      { text: '付款幫助', url: '#' },
      { text: 'PayPal 使用幫助', url: '#' },
      { text: '分期付款', url: '#' },
      { text: '常見 Q&A', url: '#' },
      { text: '線上填寫折讓單入口', url: '#' },
      { text: '退款資料補充', url: '#' },
    ],
  },
  {
    title: '客戶支援',
    links: [
      { text: '維修站地點', url: '#' },
      { text: '服務進度查詢', url: '#' },
      { text: '售後服務政策', url: '#' },
      { text: '退貨須知', url: '#' },
      { text: '配送規範', url: '#' },
      { text: '尊享服務', url: '#' },
    ],
  },
  {
    title: '關於小米',
    links: [
      { text: '瞭解小米', url: '#' },
      { text: '管理團隊', url: '#' },
      { text: '隱私條款', url: '#' },
      { text: '誠信規範', url: '#' },
      { text: '信任中心', url: '#' },
    ],
  },
])

const socialLinks = ref([
  { icon: '../images/footerFB.png', name: 'Facebook', url: '#' },
  { icon: '../images/footerIG.png', name: 'Instagram', url: '#' },
  { icon: '../images/footerYT.png', name: 'YouTube', url: '#' },
  { icon: '../images/footerLINE.png', name: 'Line', url: '#' },
])
</script>
