<template>
    <div class="flex flex-center bg-grey-2" style="min-height: 100vh;">
      <q-card class="login-card q-pa-md" bordered>
        <q-card-section class="text-center">
          <div class="text-h5 q-mb-md">Welcome Back</div>
          <q-avatar size="100px" class="q-mb-md">
            <img src="https://previews.123rf.com/images/captainvector/captainvector2207/captainvector220710547/189077346-menu-logo-icon.jpg" alt="Logo">
          </q-avatar>
        </q-card-section>
  
        <q-card-section>
          <q-form @submit.prevent="onSubmit" class="q-gutter-md">
            <q-input
              v-model="email"
              filled
              type="email"
              label="Email"
              hint="Enter your email address"
              lazy-rules
              :rules="[
                val => !!val || 'Please enter your email',
                val => val.includes('@') || 'Please enter a valid email'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
  
            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
              hint="Enter your password"
              lazy-rules
              :rules="[
                val => !!val || 'Please enter your password',
                val => val.length >= 6 || 'Password must be at least 6 characters'
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
  
            <div class="flex justify-between items-center">
              <q-checkbox v-model="rememberMe" label="Remember me" />
              <q-btn flat dense color="primary" label="Forgot Password?" @click="navigateToForgotPassword" />
            </div>
  
            <q-btn
              label="Sign In"
              type="submit"
              color="primary"
              class="full-width"
              rounded
              :loading="loading"
            />
          </q-form>
        </q-card-section>
  
        <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-7">Don't have an account? 
            <q-btn flat dense color="primary" label="Sign Up" @click="navigateToRegister" />
          </p>
          <div class="text-grey-7 q-mt-md">Or sign in with</div>
          <div class="row justify-center q-mt-sm q-gutter-sm">
            <q-btn round color="red" icon="fab fa-google" @click="socialLogin('google')" />
            <q-btn round color="blue-9" icon="fab fa-facebook-f" @click="socialLogin('facebook')" />
            <q-btn round color="light-blue-5" icon="fab fa-twitter" @click="socialLogin('twitter')" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    
    data() {
      return {
        email: '',
        password: '',
        isPwd: true,
        rememberMe: false,
        loading: false
      }
    },
  
    methods: {
      onSubmit() {
        this.loading = true
        
        // Simulate API call
        setTimeout(() => {
          this.loading = false
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            icon: 'check_circle',
            message: 'Successfully logged in!'
          })
          this.navigateToHome()
        }, 1500)
      },
      
      socialLogin(provider) {
        this.$q.notify({
          color: 'info',
          textColor: 'white',
          icon: 'info',
          message: `Logging in with ${provider}...`
        })
        // Implement actual social login logic here
      },
  
      // Navigation methods that work in both Nuxt 2 and Nuxt 3
      navigateToHome() {
        if (this.$router) {
          this.$router.push('/')
        } else {
          window.location.href = '/'
        }
      },
      
      navigateToRegister() {
        if (this.$router) {
          this.$router.push('/register')
        } else {
          window.location.href = '/register'
        }
      },
      
      navigateToForgotPassword() {
        if (this.$router) {
          this.$router.push('/forgot-password')
        } else {
          window.location.href = '/forgot-password'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-card {
    width: 100%;
    max-width: 400px;
  }
  
  @media (max-width: 599px) {
    .login-card {
      width: 90%;
    }
  }
  </style>