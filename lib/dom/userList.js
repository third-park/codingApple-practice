import { insertLast } from "../dom/insert.js";




//카드를 계속 찍어내기 위한 함수
export const creatUserCard = ({
  id = '',
  name = '',
  email = '',
  website:site = '',
} ={}) => {


  return /* html */ `
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
     <div>
       <a class="user-email" href="mailto:${email}">${email}</a>
     </div>
     <div>
        <a class="user-website" href="http://${site}" target="_blank" rel="noopener noreferer">${site}</a>
     </div>
    </div>
   <button class="delete">삭제</button>
  </article>
  `
}

creatUserCard({
  id:1,
  name:'three',
  email:'three@naver.com',
  website:'three.com'
});


const createSpinner = (size = 100, loadingMessage = '유저 정보를 가져오는중..') => {
  return/* html */`
  <figure class="loadingSpinner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin:auto;background:#fff;display:block;" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"
      preserveAspectRatio="xMidYMid">
      <g transform="translate(50 50)">
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834" transform="rotate(0 0 0)" stroke="none"
            fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.972972972972973s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834" transform="rotate(9.72972972972973 0 0)"
            stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.9459459459459459s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(19.45945945945946 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.918918918918919s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(29.18918918918919 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8918918918918919s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(38.91891891891892 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8648648648648649s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(48.648648648648646 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8378378378378378s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(58.37837837837838 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.8108108108108109s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(68.10810810810811 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7837837837837838s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(77.83783783783784 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7567567567567568s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(87.56756756756756 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7297297297297297s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(97.29729729729729 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.7027027027027027s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(107.02702702702703 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6756756756756757s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(116.75675675675676 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6486486486486487s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(126.48648648648648 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.6216216216216216s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(136.21621621621622 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5945945945945946s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(145.94594594594594 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5675675675675675s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(155.67567567567568 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5405405405405406s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(165.40540540540542 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.5135135135135135s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(175.13513513513513 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.4864864864864865s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(184.86486486486487 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.4594594594594595s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(194.59459459459458 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.43243243243243246s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(204.32432432432432 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.40540540540540543s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(214.05405405405406 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.3783783783783784s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(223.78378378378378 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.35135135135135137s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(233.51351351351352 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.32432432432432434s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(243.24324324324326 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.2972972972972973s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(252.97297297297297 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.2702702702702703s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(262.7027027027027 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.24324324324324326s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(272.43243243243245 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.21621621621621623s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(282.1621621621622 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.1891891891891892s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(291.8918918918919 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.16216216216216217s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(301.6216216216216 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.13513513513513514s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(311.35135135135135 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.10810810810810811s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(321.0810810810811 0 0)" stroke="none" fill="#f47e60"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.08108108108108109s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(330.81081081081084 0 0)" stroke="none" fill="#f8b26a"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.05405405405405406s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(340.5405405405405 0 0)" stroke="none" fill="#abbd81"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="-0.02702702702702703s"></animateTransform>
        </g>
        <g transform="scale(1)">
          <path d="M0 0L0 -40A40 40 0 0 1 6.760032812873963 -39.42463641390834"
            transform="rotate(350.27027027027026 0 0)" stroke="none" fill="#e15b64"></path>
          <animateTransform attributeName="transform" type="scale" values="1;0.5" keyTimes="0;1"
            dur="1.0204081632653061s" repeatCount="indefinite" begin="0s"></animateTransform>
        </g>
      </g>
    </svg>

    <figcaption>${loadingMessage}</figcaption>
  </figure>
  `
}


const createEmptyCard = (size = 200, errorMessage = '표시할 데이터가 없습니다.') => {
  return/* html */`
  <figure class="empty-user-card">
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
    <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
    <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
    </mask>
    <g mask="url(#mask0_50_2137)">
    <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
    <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
    <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
    </g>
    <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
    <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
    <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
    <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
    <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
    <defs>
    <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9198AA"/>
    <stop offset="1" stop-color="#B4B8C4"/>
    </linearGradient>
    <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D4D9E3"/>
    <stop offset="1" stop-color="#D2D5DC"/>
    </linearGradient>
    <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A7ABB6"/>
    <stop offset="1" stop-color="#C7CCD7"/>
    </linearGradient>
    <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9198AA"/>
    <stop offset="1" stop-color="#B4B8C4"/>
    </linearGradient>
    </defs>
    </svg>
    
  <figcaption>${errorMessage}</figcaption>
</figure>  
  `
}


export const renderSpinner = (target) => {
  insertLast(target, createSpinner());
}


export const renderEmptyCard = (target) => {
  insertLast(target, createEmptyCard());
}



export const renderUserCard = (target, data) => {
  insertLast(target, creatUserCard(data));
}



