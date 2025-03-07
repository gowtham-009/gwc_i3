<template>
    <div id="signup" class="bg--scroll login-section division">
        <div class="container">
            <div class="row justify-content-center">
                <!-- REGISTER PAGE WRAPPER -->
                <div class="col-lg-11">
                    <div class="register-page-wrapper r-16 bg--fixed">
                        <div class="row">
                            <!-- SIGN UP FORM -->
                            <div class="col-md-6">
                                <div class="register-page-form">
                                    <form name="signupform" class="row sign-up-form">
                                        <!-- Google Button -->
                                        <div class="col-md-12">
                                            <p class="text-center text-dark">Create an Account</p>
                                        </div>
                                       
                                        <div class="col-md-12 mt-2">
                                            <p class="p-sm input-header">Mobile Number</p>
                                            <input class="form-control name" v-model="mobilenumber" type="text" name="name" placeholder="Enter you mobile number" />
                                        </div>
                                        <!-- Form Input -->
                                        <div class="col-md-12">
                                            <p class="p-sm input-header">Pan No</p>
                                            <input class="form-control " type="text" name="pan" placeholder="Enter your Pan no" />
                                        </div>
                                        <!-- Form Input -->
                                      
                                        <!-- Checkbox -->
                                        <div class="col-md-12">
                                            <div class="form-data">
                                                <span
                                                    >By clicking “Create Account”, you agree to our <NuxtLink to="/terms">Terms</NuxtLink> and that you have read our
                                                    <NuxtLink to="/privacy"> Privacy Policy</NuxtLink>
                                                </span>
                                            </div>
                                        </div>
                                        <!-- Form Submit Button -->
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn--theme hover--theme submit">Submit</button>
                                        </div>
                                      
                                    </form>
                                </div>
                            </div>
                            <!-- END SIGN UP FORM -->
                            <!-- SIGN UP PAGE TEXT -->
                            <div class="col-md-6">
                                <div class="register-page-txt color--white">
                                    <!-- Section ID -->
                                    <span class="section-id">Start for free</span>
                                    <!-- Title -->
                                    <h2 class="s-48 w-700">Create</h2>
                                    <h2 class="s-48 w-700">an account</h2>
                                    <!-- Text -->
                                    <p class="p-md mt-25">Integer congue sagittis and velna augue egestas magna suscipit purus aliquam</p>
                                    <!-- Copyright -->
                                    <div class="register-page-copyright">
                                        <p class="p-sm">&copy; <span>All Rights Reserved</span></p>
                                    </div>
                                </div>
                            </div>
                            <!-- END SIGN UP PAGE TEXT -->
                        </div>
                        <!-- End row -->
                    </div>
                    <!-- End register-page-wrapper -->
                </div>
                <!-- END REGISTER PAGE WRAPPER -->
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CryptoJS from 'crypto-js';

const route = useRoute();
const secretKey = "mobilenumber123"; // Use a secure key

const mobilenumber = ref('');
const decryptedValue = ref('');

onMounted(() => {
  const encryptedData = route.query.data;
  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(decodeURIComponent(encryptedData), secretKey);
      decryptedValue.value = bytes.toString(CryptoJS.enc.Utf8);
      console.log(decryptedValue.value);
      mobilenumber.value = decryptedValue.value;
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  }
});
</script>
