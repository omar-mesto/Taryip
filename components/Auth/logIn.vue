<template>
    <div>
        <v-app class="bg-grey-lighten-4" v-dir>
          <lang/>
          <v-locale-provider >
            <v-main class="d-flex align-center">
                <v-container>
                    <v-sheet
                        rounded="lg"
                        elevation="4"
                        class="pa-8 mx-auto "
                        max-width="400"
                        width="100%"
                        border
                        >
                        <h3 class="text-lg-h4  mb-5 text-blue-darken-2 text-center font-weight-bold">{{ $t('Email Verification') }}</h3>
                    
                        <div class="text-body-2 font-weight-light" v-dir>
                            {{ $t('Enter the code we just sent to your Email') }} <span class="font-weight-black text-black">omsito014@gmail.com</span>
                        </div>
                    
                        <v-otp-input
                            v-model="otp"
                            length="4"
                            placeholder="0"
                            variant="underlined"
                            type="text"
                        ></v-otp-input>
                        <div class="text-center">
                            <v-btn
                                class="my-4 bg-blue-darken-3"
                                block
                                :text="$t('Verify')"
                                variant="flat"
                                :loading="isLoading"
                                :disabled="isDisabled"
                            ></v-btn>
                        </div>
                        </v-sheet>
                </v-container>
            </v-main>
         </v-locale-provider>
        </v-app>
    </div>
</template>
<script setup lang="ts">

const isLoading=ref(false);

const otp = ref('');
const isDisabled=ref(true);

function isComplete(value:any){
   return  value.length === 4;
}
watch(otp, (newValue) => {
  if (isComplete(newValue)) {
    isLoading.value=true;
    isDisabled.value=false;
    console.log('Omar');
  }
});
</script>
<style scoped>
</style>