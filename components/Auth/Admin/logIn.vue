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
                        <h3 class="text-lg-h4  mb-5 text-blue-darken-2 text-center font-weight-bold">{{ $t('Admin Login') }}</h3>
                        <form @submit.prevent="submit" v-dir>
                            <label>{{ $t('User Name') }}</label>
                            <v-text-field
                                    v-model="name.value.value"
                                    :counter="10"
                                    :error-messages="name.errorMessage.value"
                                    variant="underlined"
                                    ></v-text-field>
                                    <label>{{ $t('password') }}</label>
                                    <v-text-field
                                    variant="underlined"
                                    v-model="password.value.value"
                                    :error-messages="password.errorMessage.value"
                                    ></v-text-field>
                            <div class="text-center">
                                <v-btn
                                    v-dir
                                    class="mb-4 mt-2 bg-blue-darken-3"
                                    block
                                    :text="$t('Submit')"
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
        name (value:any) {
        if (value?.length >= 3) return true
        if(localStorage.getItem("lang")==="en")
                return 'First name needs to be at least 3 characters.'
            else{
                return 'الاسم الأول يجب أن يتكون من 3 أحرف على الأقل.'
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
    },
})
const name = useField('name')
const password = useField('password')
const submit = handleSubmit(() => {
    isLoading.value=true;
})
</script>
<style scoped>
</style>