<template>
    <div>
        <v-app class="bg-grey-lighten-4" v-dir>
          <lang/>
          <v-locale-provider :rtl="useLang().value === 'ar'">
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
                        <h3 class="text-lg-h4  mb-5 text-blue-darken-2 text-center font-weight-bold">{{ $t('Login') }}</h3>
                    
                        <div class="text-body-2 font-weight-light" v-dir>
                            {{ $t('Enter Your Phome Number:') }}
                        </div>
                        <form @submit.prevent="submit" >
                            <v-text-field
                            v-model="phone.value.value"
                            :error-messages="phone.errorMessage.value"      
                            variant="underlined"
                            :class="{'text-right': useLang().value == 'ar', 'text-left': useLang().value != 'ar'}"
                            v-dir="{'rtl': useLang().value == 'ar'}"
                            ></v-text-field>
                            <div class="text-center">
                                <v-btn
                                    v-dir
                                    class="mb-4 mt-2 bg-blue-darken-3"
                                    block
                                    :text="$t('Get OTP')"
                                    variant="flat"
                                    type="submit"
                                    :loading="isLoading"
                                ></v-btn>
                            </div>  
                        </form>
                        </v-sheet>
                </v-container>
            </v-main>
         </v-locale-provider>
        </v-app>
    </div>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate'

const isLoading=ref(false);
const { handleSubmit } = useForm({
    validationSchema: {
        phone (value:any) {
            if (/^[0-9-]{10,}$/.test(value)) return true
                if(localStorage.getItem("lang")==="en")
                    return 'Phone number needs to be at least 10 digits.'
                else{
                    return 'رقم الهاتف يجب أن يكون 10 أرقام على الأقل.'
                }
        }
    },
})
const phone = useField('phone')
const submit = handleSubmit(() => {
    isLoading.value=true;
    navigateTo('../../Auth/logIn')
})
</script>
<style scoped>
</style>