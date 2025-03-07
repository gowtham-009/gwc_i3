<template>
    <section id="hero-14" class="bg--scroll hero-section">
        <div class="container text-center">
            <!-- HERO TEXT -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="hero-14-txt color--white wow fadeInUp">
                        <!-- Title -->
                        <h2 class="s-60 w-700">Automate your way to success with Martex</h2>
                        <!-- Text -->
                        <p class="s-21">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida and aliquet tortor undo aliquet in quaerat tortor</p>
                        <!-- HERO QUICK FORM -->
                        <form name="quickform" class="quick-form form-shadow" @submit.prevent="handlEvent">
                            <!-- Form Inputs -->
                            <div class="input-group">
                                <input type="text" name="text"   v-model="mobileNumber"   maxlength="10" @input="validateMobile" class="form-control  r-06" placeholder="Your Mobile number" autocomplete="off"  />
                                <span class="input-group-btn form-btn">
                                    <button type="submit" class="btn r-06 btn--theme hover--theme submit">Get Started</button>
                                </span>
                            </div>
                            <!-- Form Message -->
                            <div class="quick-form-msg"><span class="loading"></span></div>
                        </form>
                        <!-- Text -->
                        <p class="btn-txt ico-15"><span class="flaticon-check"></span>  No credit card needed,</p>
                    </div>
                </div>
            </div>
            <!-- END HERO TEXT -->
            <!-- HERO IMAGE -->
            <div class="row">
                <div class="col">
                    <div class="hero-14-img wow fadeInUp">
                        <img class="img-fluid" src="/assets/images/dashboard-02.png" alt="hero-image" />
                    </div>
                </div>
            </div>
            <!-- END HERO IMAGE -->
        </div>
        <!-- End container -->
        <!-- WAVE SHAPE BOTTOM -->
        <div class="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190"><path fill-opacity="1" d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CryptoJS from 'crypto-js';

const mobileNumber = ref('');

const validateMobile = () => {
  mobileNumber.value = mobileNumber.value.replace(/\D/g, '').slice(0, 10);
};


const handlEvent = () => {
  if(!mobileNumber.value) {
    alert('Please enter mobile number');
   
  }
  else{
    mobile_no_submit()
  }
};

const router = useRouter();
const secretKey = "mobilenumber123"; // Change this to a secure key

const mobile_no_submit = () => {
const newValue = mobileNumber.value;
const encryptedValue = CryptoJS.AES.encrypt(newValue, secretKey).toString();
router.push({ path: '/signup-2', query: { data: encodeURIComponent(encryptedValue) } });

}
</script>