import React from 'react';
import { Link } from 'react-router-dom';


function ShopHeader() {
  return (
    <header className="shop-header">
        <Link to="/" className='logo'>
          <svg width="169" height="40" viewBox="0 0 169 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.5215 31.56H69.5922L76.1137 10.44H72.5513L67.0209 28.128L61.5624 10.44H58L64.5215 31.56Z" fill="#1E1E1E"></path>
            <path d="M81.3194 32C82.5548 32 83.6034 31.7947 84.4653 31.384C85.3367 30.9636 86.1028 30.3133 86.7636 29.4333V31.56H89.7945V21.836C89.7945 21.1516 89.7658 20.5209 89.7083 19.944C89.6509 19.3573 89.4833 18.7853 89.2056 18.228C88.698 17.1818 87.9175 16.4289 86.8641 15.9693C85.8203 15.5098 84.6089 15.28 83.2299 15.28C81.4104 15.28 79.9596 15.6858 78.8775 16.4973C77.7953 17.3089 77.0628 18.3844 76.6797 19.724L79.8399 20.736C80.0985 19.9244 80.5533 19.3524 81.2045 19.02C81.8557 18.6876 82.5309 18.5213 83.2299 18.5213C84.2833 18.5213 85.059 18.7413 85.557 19.1813C86.0549 19.6116 86.3375 20.2813 86.4045 21.1907C85.0446 21.396 83.7806 21.5964 82.6123 21.792C81.4535 21.9778 80.4672 22.2076 79.6532 22.4813C78.4274 22.9116 77.532 23.5227 76.967 24.3147C76.402 25.0969 76.1195 26.0649 76.1195 27.2187C76.1195 28.0889 76.3158 28.8858 76.7084 29.6093C77.1106 30.3329 77.6996 30.9147 78.4753 31.3547C79.251 31.7849 80.199 32 81.3194 32ZM82.0089 29.184C81.195 29.184 80.5725 28.9933 80.1416 28.612C79.7202 28.2307 79.5095 27.7516 79.5095 27.1747C79.5095 26.6564 79.6723 26.236 79.9979 25.9133C80.3331 25.5907 80.7975 25.3169 81.3913 25.092C81.9371 24.9062 82.5931 24.7449 83.3592 24.608C84.1253 24.4613 85.126 24.2902 86.3614 24.0947C86.3518 24.4662 86.3279 24.8818 86.2896 25.3413C86.2513 25.7911 86.1603 26.1969 86.0166 26.5587C85.9017 26.9204 85.6767 27.3067 85.3415 27.7173C85.0159 28.128 84.5754 28.4751 84.02 28.7587C83.4645 29.0422 82.7942 29.184 82.0089 29.184Z" fill="#1E1E1E"></path>
            <path d="M93.8215 31.56H97.2834V10H93.8215V31.56Z" fill="#1E1E1E"></path>
            <path d="M105.924 32C107.16 32 108.208 31.7947 109.07 31.384C109.942 30.9636 110.708 30.3133 111.368 29.4333V31.56H114.399V21.836C114.399 21.1516 114.371 20.5209 114.313 19.944C114.256 19.3573 114.088 18.7853 113.81 18.228C113.303 17.1818 112.522 16.4289 111.469 15.9693C110.425 15.5098 109.214 15.28 107.835 15.28C106.015 15.28 104.564 15.6858 103.482 16.4973C102.4 17.3089 101.668 18.3844 101.285 19.724L104.445 20.736C104.703 19.9244 105.158 19.3524 105.809 19.02C106.461 18.6876 107.136 18.5213 107.835 18.5213C108.888 18.5213 109.664 18.7413 110.162 19.1813C110.66 19.6116 110.942 20.2813 111.009 21.1907C109.649 21.396 108.385 21.5964 107.217 21.792C106.058 21.9778 105.072 22.2076 104.258 22.4813C103.032 22.9116 102.137 23.5227 101.572 24.3147C101.007 25.0969 100.724 26.0649 100.724 27.2187C100.724 28.0889 100.921 28.8858 101.313 29.6093C101.715 30.3329 102.304 30.9147 103.08 31.3547C103.856 31.7849 104.804 32 105.924 32ZM106.614 29.184C105.8 29.184 105.177 28.9933 104.746 28.612C104.325 28.2307 104.114 27.7516 104.114 27.1747C104.114 26.6564 104.277 26.236 104.603 25.9133C104.938 25.5907 105.402 25.3169 105.996 25.092C106.542 24.9062 107.198 24.7449 107.964 24.608C108.73 24.4613 109.731 24.2902 110.966 24.0947C110.957 24.4662 110.933 24.8818 110.894 25.3413C110.856 25.7911 110.765 26.1969 110.621 26.5587C110.507 26.9204 110.282 27.3067 109.946 27.7173C109.621 28.128 109.18 28.4751 108.625 28.7587C108.069 29.0422 107.399 29.184 106.614 29.184Z" fill="#1E1E1E"></path>
            <path d="M118.11 31.56H121.615V23.42C121.615 22.1391 121.792 21.1516 122.147 20.4573C122.511 19.7533 122.97 19.2693 123.526 19.0053C124.091 18.7316 124.665 18.5947 125.25 18.5947C126.073 18.5947 126.729 18.7804 127.217 19.152C127.706 19.5138 128.065 19.9782 128.295 20.5453C128.534 21.1027 128.687 21.6844 128.754 22.2907C128.831 22.8969 128.869 23.4444 128.869 23.9333V31.56H132.374V22.716C132.374 22.3444 132.341 21.8507 132.274 21.2347C132.216 20.6187 132.082 19.9684 131.872 19.284C131.661 18.5996 131.335 17.9542 130.895 17.348C130.454 16.732 129.856 16.2333 129.099 15.852C128.352 15.4609 127.409 15.2653 126.269 15.2653C125.149 15.2653 124.163 15.4658 123.31 15.8667C122.468 16.2578 121.764 16.7956 121.199 17.48V15.72H118.11V31.56Z" fill="#1E1E1E"></path>
            <path d="M145.216 31.56V28.5973C144.248 28.744 143.386 28.7831 142.63 28.7147C141.873 28.6462 141.323 28.3187 140.978 27.732C140.796 27.4289 140.695 27.0378 140.676 26.5587C140.667 26.0698 140.662 25.5124 140.662 24.8867V18.492H145.216V15.72H140.662V11.32H137.214V15.72H134.399V18.492H137.214V25.092C137.214 26.0013 137.224 26.8129 137.243 27.5267C137.262 28.2307 137.449 28.9249 137.803 29.6093C138.206 30.3622 138.795 30.9147 139.57 31.2667C140.346 31.6089 141.222 31.7898 142.199 31.8093C143.185 31.8387 144.191 31.7556 145.216 31.56Z" fill="#1E1E1E"></path>
            <path d="M148.839 13.3147H152.301V10.0733H148.839V13.3147ZM148.839 31.56H152.301V15.72H148.839V31.56Z" fill="#1E1E1E"></path>
            <path d="M162.593 32C164.595 32 166.161 31.5453 167.291 30.636C168.43 29.7267 169 28.4751 169 26.8813C169 25.6493 168.617 24.6813 167.851 23.9773C167.094 23.2733 165.787 22.6769 163.929 22.188C162.723 21.8751 161.813 21.6111 161.2 21.396C160.597 21.1809 160.195 20.9658 159.993 20.7507C159.792 20.5356 159.692 20.2764 159.692 19.9733C159.692 19.4453 159.941 19.0347 160.439 18.7413C160.937 18.4382 161.593 18.3062 162.407 18.3453C163.249 18.3942 163.925 18.6142 164.432 19.0053C164.949 19.3964 165.256 19.9293 165.351 20.604L168.885 19.9587C168.694 18.5311 168.009 17.3969 166.831 16.556C165.653 15.7053 164.159 15.28 162.349 15.28C160.501 15.28 159.021 15.72 157.911 16.6C156.8 17.48 156.244 18.6631 156.244 20.1493C156.244 21.3324 156.632 22.2662 157.408 22.9507C158.193 23.6351 159.558 24.2364 161.502 24.7547C162.67 25.0676 163.532 25.3316 164.087 25.5467C164.652 25.752 165.021 25.9622 165.193 26.1773C165.366 26.3924 165.452 26.6809 165.452 27.0427C165.452 27.6293 165.222 28.0938 164.762 28.436C164.303 28.7684 163.661 28.9347 162.838 28.9347C161.89 28.9347 161.1 28.7098 160.467 28.26C159.845 27.8102 159.448 27.1942 159.275 26.412L155.742 26.9693C156 28.5631 156.728 29.8 157.925 30.68C159.122 31.56 160.678 32 162.593 32Z" fill="#1E1E1E"></path>
            <path d="M18.5439 26.0205C17.2685 26.2815 15.6699 27.2278 15.6699 27.2278C15.6699 27.2278 16.5419 27.6199 16.97 28.0326C17.3822 28.4299 17.5869 28.7098 17.7912 29.2399C18.1122 30.0729 17.7912 31.5202 17.7912 31.5202C17.7912 31.5202 19.085 32.8029 19.7755 33.7335C20.277 34.4093 20.9388 35.5443 20.9388 35.5443C20.9388 35.5443 21.3542 35.6555 21.5547 35.8126C21.7551 35.9698 21.9652 36.3492 21.9652 36.3492C21.9652 36.3492 21.9319 37.2492 22.2389 37.6906C22.5438 38.1287 22.841 38.2843 23.4022 38.4283C23.9634 38.5724 25.1129 38.4283 25.1129 38.4283L25.2497 37.6906L26.0709 38.2271C26.0709 38.2271 25.9344 36.9394 25.3866 36.3492C24.6352 35.5396 22.5811 35.3431 22.5811 35.3431C22.5811 34.7529 23.0373 34.5607 23.2654 34.5383C23.2654 34.5383 22.4442 33.8676 21.5547 33.0628C20.6651 32.258 19.9375 31.7204 19.844 31.0507C19.7693 30.5157 19.7637 30.2598 20.1861 29.7093C20.5109 29.2861 21.0962 28.9408 21.4178 28.5692C21.9806 27.9188 22.9232 26.9595 22.9232 26.9595C22.9232 26.9595 22.3074 26.3559 21.5547 26.1547C20.802 25.9535 19.6425 25.7957 18.5439 26.0205Z" fill="#A52838"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M50.9784 19.9173C50.9784 19.9173 52.0749 20.8157 52.3469 21.5269C52.5908 22.1646 52.3469 23.0695 52.3469 23.0695C52.3469 23.0695 54.3807 24.872 55.2893 25.0816C56.1979 25.2911 57 24.1426 57 24.1426C57 24.1426 56.8289 25.6721 55.7683 26.1547C53.8523 27.0266 52.5522 25.0816 52.5522 25.0816C52.5522 25.0816 51.2851 27.1439 50.7047 28.5692C50.5266 29.0063 50.4419 29.4872 50.3588 29.959C50.2005 30.8576 50.0481 31.7232 49.2677 32.1909C48.6192 32.5795 47.7623 32.258 47.7623 32.258C47.7623 32.258 46.7283 31.8703 46.2569 31.3861C45.7703 30.8862 45.8291 30.3783 45.8961 29.8002C45.9561 29.2823 46.0227 28.708 45.7095 28.0326C45.4671 27.5099 45.2035 27.0816 44.9566 26.6803C44.5063 25.9486 44.1111 25.3062 43.9988 24.3438C43.8797 23.3236 43.9919 22.6972 44.2725 21.7281C44.5531 20.759 45.7095 19.2466 45.7095 19.2466C45.7095 19.2466 44.585 19.9843 43.8619 20.8562C43.1388 21.7281 42.2197 23.7402 42.2197 23.7402C42.2197 23.7402 41.8192 23.4973 41.6722 22.3317C41.5253 21.1662 41.4669 17.3016 41.4669 17.3016C41.4669 17.3016 40.9029 19.4109 40.7827 20.655C40.7605 20.8845 40.7337 21.101 40.708 21.3088C40.5943 22.2274 40.5015 22.9773 40.9195 23.9414C41.3992 25.0477 42.2888 25.8726 43.1388 26.6607C44.35 27.7838 45.4807 28.8322 45.2305 30.5142C45.0613 31.651 44.0672 32.6604 44.0672 32.6604L40.4405 36.0138L39.072 35.7456L39.551 37.2211L36.6086 37.4223C36.6086 37.4223 36.5916 36.4075 36.8139 35.8126C37.0078 35.2938 37.5666 34.6054 37.5666 34.6054C37.5666 34.6054 38.8094 35.0064 39.2773 34.5383C39.4863 34.3291 39.6194 33.8676 39.6194 33.8676L37.9087 34.1359C37.9087 34.1359 38.6594 33.647 39.1404 33.3981C39.6214 33.1493 40.509 32.9286 40.509 32.9286C40.509 32.9286 42.1179 32.2618 42.6302 30.9836C42.9763 30.1203 41.6634 29.3995 40.2234 28.609C39.5126 28.2188 38.7709 27.8116 38.1824 27.3619C37.647 26.9528 37.1546 26.6659 36.6863 26.3932C35.9159 25.9444 35.2108 25.5337 34.4874 24.6792C33.7256 23.7793 33.4177 22.9461 33.3241 21.7281C33.2306 20.5102 33.6663 18.3747 33.6663 18.3747C33.6663 18.3747 32.7035 20.0832 32.503 21.3928C32.3026 22.7024 32.327 23.9339 33.1188 25.1486C34.6927 27.5631 37.9087 28.368 37.9087 28.368V28.8374C37.9087 28.8374 35.0275 30.3693 33.5978 31.5873C33.4081 31.7489 33.162 31.9182 32.8935 32.1029C32.29 32.5181 31.574 33.0107 31.1345 33.6664C30.2962 34.9173 30.1081 36.4833 30.1081 36.4833C30.1081 36.4833 31.9718 36.7234 32.6399 37.2211C33.3079 37.7187 33.5978 38.8307 33.5978 38.8307L32.6399 38.16V38.8307H29.9028C29.9028 38.8307 30.4376 37.7576 29.766 36.9528C29.0943 36.148 28.0553 36.8187 28.0553 36.8187L28.1921 35.5443C28.1921 35.5443 28.9084 34.1626 29.766 32.7945C30.0053 32.4126 30.2837 32.0372 30.5415 31.6896C30.7687 31.3832 30.98 31.0983 31.1345 30.8495C32.0925 29.3069 31.7504 29.0386 31.7504 29.0386C31.7504 29.0386 32.748 28.9291 33.2557 28.8374C33.7634 28.7458 34.4874 28.5021 34.4874 28.5021C34.4874 28.5021 31.1294 27.893 29.1501 27.429C26.6411 26.8408 25.7692 26.6296 23.2654 26.0205C22.823 25.9129 22.4116 25.7559 22.0049 25.6007C21.2548 25.3145 20.5209 25.0344 19.6387 25.0816C18.2968 25.1533 16.0805 26.1547 16.0805 26.1547C16.0805 26.1547 16.9773 25.0914 17.3806 24.2097C17.7996 23.2936 18.407 21.0574 18.407 21.0574C18.407 21.0574 14.8281 26.2563 13.0697 28.1667C11.2721 30.1196 8.69029 31.7214 8.69029 31.7214C8.69029 31.7214 5.35798 30.7723 3.42138 31.7214C2.98052 31.9375 3.14524 32.6208 3.33958 33.4269C3.56754 34.3726 3.83624 35.4872 3.21609 36.215C3.04652 36.414 2.7371 36.6845 2.7371 36.6845L2.25811 37.0869C2.25811 37.0869 3.39139 37.025 4.03722 37.2881C4.5507 37.4973 4.82691 37.6893 5.20049 38.093C5.71458 38.6485 6.02162 39.8368 6.02162 39.8368L4.65307 38.6966V39.9709C4.65307 39.9709 3.80561 40.0364 3.28452 39.9709C2.76343 39.9054 1.9844 39.6356 1.9844 39.6356C1.9844 39.6356 2.14331 38.6313 1.84754 38.093C1.57879 37.6038 0.684275 37.0869 0.684275 37.0869L0 37.3552C0 37.3552 1.05241 36.4954 1.57383 35.2761C2.45404 33.2177 1.9844 29.5752 1.9844 29.5752C1.9844 29.5752 4.95388 29.5463 5.88477 27.6302C6.86349 25.6157 6.72231 23.4639 6.56247 21.0278C6.49881 20.0575 6.43219 19.0421 6.43219 17.9723C6.43219 16.59 6.69343 15.5946 7.04803 14.4847C7.32298 13.624 7.93759 12.676 7.93759 12.676C7.93759 12.676 8.34816 12.1395 7.73231 11.4688C7.11646 10.7981 6.90461 10.7785 6.56247 10.3761C6.22034 9.97372 4.88825 8.14313 7.04803 6.97518C9.03243 5.90208 12.2924 6.46348 15.3278 6.46348C17.1069 6.46348 20.7335 5.80245 21.6915 3.89C22.6495 1.97756 22.0622 2.36821 22.7864 1.54259C23.6513 0.556491 25.7972 0 25.7972 0C25.7972 0 25.2831 2.11775 24.3602 3.08518C23.798 3.67454 23.2866 3.78148 22.6495 4.29242C21.1441 5.49966 20.9388 5.9646 18.6807 6.63983C14.6435 7.84708 13.083 6.91854 9.92199 7.31052C6.67691 7.71294 7.63413 9.73432 9.2667 10.3761C9.2667 10.3761 10.663 10.576 11.5642 10.5969C12.5275 10.6193 13.0697 10.4686 14.0276 10.4628C14.9856 10.4569 15.4427 10.4652 16.012 10.4628C17.1263 10.458 17.6489 10.507 18.4754 10.3935C21.7567 9.94256 23.9273 8.19572 26.0798 6.46348L26.0799 6.46339L26.0802 6.46319C28.6253 4.415 31.145 2.38726 35.4453 2.54632C43.9988 2.86268 50.6362 15.826 50.6362 15.826C50.6362 15.826 49.1992 14.8871 48.3097 16.1614C47.4201 17.4357 48.2413 18.8442 48.2413 18.8442C48.2413 18.8442 48.4045 17.7369 48.9255 17.4357C49.4466 17.1345 50.173 17.1279 50.9099 17.3686C51.2404 17.4766 51.5632 17.6529 51.892 17.8326C52.3802 18.0993 52.8818 18.3733 53.4418 18.4417C54.5351 18.5753 55.8367 17.6369 55.8367 17.6369C55.8367 17.6369 55.6634 18.5739 55.2893 19.0454C54.9152 19.5168 54.5378 19.8003 53.9208 20.0514C53.5669 20.1954 52.8679 20.0598 52.2944 19.9485C52.0812 19.9072 51.8854 19.8692 51.7311 19.8502C51.0541 19.7668 50.9784 19.9173 50.9784 19.9173ZM50.0204 24.8133C50.1127 25.2357 49.8151 25.8193 49.8151 25.8193C49.8151 25.8193 49.4697 25.2601 49.3361 24.8804C49.2025 24.5006 49.1308 23.8743 49.1308 23.8743C49.1308 23.8743 49.4453 23.9067 49.6098 24.0085C49.8863 24.1795 49.9392 24.4302 50.0018 24.7262L50.0019 24.7269L50.0063 24.7477C50.0109 24.7694 50.0156 24.7912 50.0204 24.8133Z" fill="#A52838"></path>
          </svg>
        </Link>
        <h2>Pawn Shop Jewelry</h2>
    </header>
  );
}

export default ShopHeader;
