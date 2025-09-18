<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">E</span>
            </div>
            <span class="ml-2 text-xl font-bold text-gray-900">EFTDM Project</span>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link
                to="/"
                class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </router-link>
              <router-link
                to="/dashboard"
                class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </router-link>
            </div>
          </nav>
          
          <!-- Auth Buttons -->
          <div class="flex items-center space-x-4">
            <router-link
              v-if="!userStore.isAuthenticated"
              to="/login"
              class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </router-link>
            <router-link
              v-if="!userStore.isAuthenticated"
              to="/register"
              class="btn-primary"
            >
              Register
            </router-link>
            <div v-else class="flex items-center space-x-4">
              <span class="text-sm text-gray-700">Welcome, {{ userStore.fullName }}</span>
              <button
                @click="handleLogout"
                class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <!-- Hero Section -->
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to
            <span class="gradient-text">EFTDM Project</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern, scalable application built with Vue.js 3, TypeScript, and TailwindCSS following the EFTDM methodology.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <router-link
                to="/dashboard"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </router-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link
                to="/register"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </router-link>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="mt-16">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="card">
              <div class="card-body">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span class="text-primary-600 font-semibold">V</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">Vue.js 3</h3>
                    <p class="text-sm text-gray-500">Modern reactive framework</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="h-8 w-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <span class="text-secondary-600 font-semibold">T</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">TypeScript</h3>
                    <p class="text-sm text-gray-500">Type-safe development</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="h-8 w-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span class="text-primary-600 font-semibold">T</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">TailwindCSS</h3>
                    <p class="text-sm text-gray-500">Utility-first styling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-sm text-gray-500">
          © {{ currentYear }} EFTDM Project. Built with ❤️ using the EFTDM methodology.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const currentYear = computed(() => new Date().getFullYear())

const handleLogout = async () => {
  await userStore.logout()
  router.push('/')
}
</script>
