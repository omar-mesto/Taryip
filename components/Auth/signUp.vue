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
                        max-width="700"
                        width="100%"
                        border
                        >
                        <h3 class="text-lg-h4  mb-8 text-blue-darken-2 text-center font-weight-bold">{{ $t('Sign Up') }}</h3>
                        <form @submit.prevent="submit" v-dir>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label>{{ $t('First Name') }}</label>
                                    <v-text-field
                                    v-model="First_name.value.value"
                                    :counter="10"
                                    :error-messages="First_name.errorMessage.value"
                                    variant="underlined"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label>{{ $t('Last Name') }}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="Last_name.value.value"
                                    :counter="10"
                                    :error-messages="Last_name.errorMessage.value"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label>{{ $t('E-mail') }}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="email.value.value"
                                    :error-messages="email.errorMessage.value"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label>{{$t('Phone Number')}}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="phone.value.value"
                                    :counter="10"
                                    :error-messages="phone.errorMessage.value"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label>{{ $t('password') }}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="password.value.value"
                                    :error-messages="password.errorMessage.value"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <label>{{ $t('Confirm Password') }}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="Confirm_Password.value.value"
                                    :error-messages="Confirm_Password.errorMessage.value"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <label>{{$t('Image')}}</label>
                                    <v-file-input
                                    variant="underlined"
                                    prepend-icon=""
                                    accept="image/*"
                                    ></v-file-input>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-radio-group
                                    v-dir
                                    v-model="inline"
                                    inline
                                    defaults-target="radio-1"
                                    :label="$t('Gender')"
                                    >
                                    <v-radio
                                        :label="$t('male')"
                                        value="radio-1"
                                    ></v-radio>
                                    <v-radio
                                        :label="$t('female')"
                                        value="radio-2"
                                    ></v-radio>
                                    </v-radio-group>
                                    
                                </v-col>
                            </v-row>
                            <v-btn
                            class="mb-4 mt-2 bg-blue-darken-3"
                            block
                            :text="$t('submit')"
                            variant="flat"
                            type="submit"
                            :loading="isLoading"
                            >
                            </v-btn>
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
  const inline = ref('radio-1');

  const { handleSubmit } = useForm({
    validationSchema: {
      First_name (value:any) {
        if (value?.length >= 3) return true
        if(localStorage.getItem("lang")==="en")
                return 'First name needs to be at least 3 characters.'
            else{
                return 'الاسم الأول يجب أن يتكون من 3 أحرف على الأقل.'
            }
      },
      Last_name (value:any) {
        if (value?.length >= 3) return true
        if(localStorage.getItem("lang")==="en")
                return 'Last name needs to be at least 3 characters.'
            else{
                return 'اسم العائلة يجب أن يتكون من 3 أحرف على الأقل.'
            }
      },
      phone (value:any) {
        if (/^[0-9-]{10,}$/.test(value)) return true
        if(localStorage.getItem("lang")==="en")
                return 'Phone number needs to be at least 10 digits.'
            else{
                return 'رقم الهاتف يجب أن يكون 10 أرقام على الأقل.'
            }
      },
      email (value:any) {
        if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return true
        if(localStorage.getItem("lang")==="en")
                return 'Must be a valid e-mail.'
            else{
                return 'يجب عليك ادخال بريد إلكتروني صحيح.'
            }
      },
      password (value:any) {
        if (/^[0-9-]{6,}$/.test(value)) return true
        if(localStorage.getItem("lang")==="en")
                return 'needs to be at least 6 characters.'
            else{
                return 'يجب أن يكون 6 أحرف على الأقل.'
            }
      },
      Confirm_Password(value: any) {
        if (password.value.value !== value) {;
            
            
            if (localStorage.getItem("lang") === "en") {
            return 'Password mismatch.'
            } else {
            return 'كلمة المرور غير متطابقة.'
            }
        }
        return true;
      }
    },
  })
  const First_name = useField('First_name')
  const Last_name = useField('Last_name')
  const phone = useField('phone')
  const email = useField('email')
  const password = useField('password')
  const Confirm_Password=useField('Confirm_Password')

  const submit = handleSubmit(() => {
    isLoading.value=true;
  })
  
</script>
<style scoped lang="scss">
.v-col-12{
    padding: 0px 10px 8px 0px !important;
}
</style>